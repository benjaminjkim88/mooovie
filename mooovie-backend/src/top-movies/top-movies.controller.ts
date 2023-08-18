import { Controller } from '@nestjs/common';
import { TopMoviesService } from './top-movies.service';

@Controller('top-movies')
export class TopMoviesController {
  constructor(private readonly topMoviesService: TopMoviesService) {}

  async getTopMovies(): Promise<any> {
    try {
      const movies = await this.topMoviesService.fetchMovies();
      return movies;
    } catch (error) {
      return { error: 'Failed to fetch top movies' };
    }
  }
}
