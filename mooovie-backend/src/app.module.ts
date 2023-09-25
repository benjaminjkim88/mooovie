/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from './app.service';
import { TopMoviesModule } from './top-movies/top-movies.module';
//added imports
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';


@Module({
  imports: [TopMoviesModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UserService],
})
export class AppModule {}
