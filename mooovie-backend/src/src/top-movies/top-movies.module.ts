import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TopMoviesController } from './top-movies.controller';
import { TopMoviesService } from './top-movies.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TopMoviesController],
  providers: [TopMoviesService]
})
export class TopMoviesModule {}
