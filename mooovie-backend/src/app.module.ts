import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopMoviesModule } from './top-movies/top-movies.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [TopMoviesModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
