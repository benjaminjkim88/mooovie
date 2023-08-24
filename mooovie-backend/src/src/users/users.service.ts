import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }
}