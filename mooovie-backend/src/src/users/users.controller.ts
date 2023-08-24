import { Controller, Post, Body, Get } from '@nestjs/common';
import { User } from './users.entity';
import { UserService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('register') 
  async register(@Body() user: User): Promise<void> {
    //Guessing we hash here
    await this.userService.addUser(user);
  }

  @Get('users') 
  getUsers(): User[] {
    return this.userService.getUsers();
  }
}
