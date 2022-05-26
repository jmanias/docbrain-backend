import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import appConfig from '../config/app.config';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        { secret: appConfig().appSecret, expiresIn: 60 * 15 },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        { secret: appConfig().appSecret, expiresIn: 60 * 60 * 24 * 7 },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  async singupLocal(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);

    const tokens = await this.getTokens(12, 'test@test.com');
    return tokens;
  }

  singinLocal() {
    return null;
  }

  logout() {
    return null;
  }

  refreshTokens() {
    return null;
  }
}
