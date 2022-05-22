import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(username);

    if (user && user.password === password) {
      const { password, email, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user._doc.email, id: user._doc._id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
