import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findAll(paginationQuery: PagionationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.userModel.find().skip(offset).limit(limit).exec();
  }

  async findUserById(id: string) {
    let user;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      user = await this.userModel.findById(id).exec();
    }
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email }).exec();

    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    if (await this.userModel.findOne({ email: createUserDto.email })) {
      throw new ConflictException(
        `User with email ${createUserDto.email} already exists`,
      );
    }

    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let existingUser;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      existingUser = await this.userModel
        .findOneAndUpdate({ _id: id }, { $set: updateUserDto }, { new: true })
        .exec();
    }

    if (!existingUser) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return existingUser;
  }

  async remove(id: string) {
    const user = await this.findUserById(id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return user.remove();
  }
}
