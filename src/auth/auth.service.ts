import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto';
import appConfig from '../config/app.config';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  @InjectModel(User.name) private readonly userModel: Model<User>;

  async signupLocal(createUserDto: CreateUserDto): Promise<Tokens> {
    // if user already exist
    const isUserExists = await this.userModel
      .findOne({ email: createUserDto.email })
      .exec();
    if (isUserExists) {
      throw new BadRequestException('Email already exists');
    }

    createUserDto.password = await this.hashData(createUserDto.password);

    const existingUsers = await this.userModel.countDocuments();
    if (existingUsers === 0) {
      createUserDto.active = true;
    }

    const newUser = await new this.userModel(createUserDto);
    await newUser.save();

    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash(newUser.id, tokens.refresh_token);
    return tokens;
  }

  async signinLocal(loginDto: LoginDto): Promise<Tokens> {
    const user = await this.userModel.findOne({ email: loginDto.email }).exec();
    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: number) {
    await this.userModel.updateMany(
      {
        id: userId,
        hashedRt: { $ne: null },
      },
      { $set: { hashedRt: null } },
    );
  }

  async refreshTokens(userId: number, rt: string) {
    const user = await this.userModel.findById(userId).exec();
    if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(rt, user.hashedRt);
    console.log(rtMatches);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async updateRtHash(userId: number, rt: string) {
    const hash = await this.hashData(rt);

    await this.userModel
      .findOneAndUpdate({ _id: userId }, { hashedRt: hash }, { new: true })
      .exec();
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: appConfig().jwtSecretAt,
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: appConfig().jwtSecretRt,
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
