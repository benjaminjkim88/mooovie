/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('protected')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProtectedRoute(): string
 {
  return 'this route is protected';
 }
}
