import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Jannis',
      lastName: 'Manias',
      address: 'Talstraße',
      city: 'Düsseldorf',
      fathersName: 'Stathis',
      email: 'gmanias1991@gmail.com',
      phone: '123456789',
      gender: 'male',
      postalCode: '40217',
      birthdate: new Date(),
      insuranceNumber: '2342',
      insuranceType: 'IKA',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === +id);
    if (!user) {
      throw new NotFoundException(`Coffee ${id} not found`);
    }
    return user;
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  update(id: string, updateUserDto: any) {
    const existingUser = this.findOne(id);
    if (existingUser) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === +id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }
}
