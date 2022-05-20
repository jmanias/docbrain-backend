import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(username);

    if (user && user.password === password) {
      const { password, email, ...rest } = user;
      return rest;
    }

    return null;
  }
}
