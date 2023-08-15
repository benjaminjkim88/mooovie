import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopMoviesModule } from './top-movies/top-movies.module';

@Module({
  imports: [TopMoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
