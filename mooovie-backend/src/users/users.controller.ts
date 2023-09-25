/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, UnauthorizedException } from '@nestjs/common';
import { User } from './users.entity';
import { UserService } from './users.service';
import * as admin from 'firebase-admin';



@Controller('auth')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('register') 
  async register(@Body() user: User){
    try {

    const userInfo = await admin.auth().createUser({
      email: user.email,
      password: user.password,
    });

    await admin.firestore().collection('users').doc(userInfo.uid).set({

    });

    return { message: "user register successful", uid: userInfo.uid }
  } catch (error) {
    throw new UnauthorizedException("User registration failed");
  }
}

  @Get('users') 
  getUsers(): Promise<any[]> {
    return Promise.resolve([]);
  }
}
