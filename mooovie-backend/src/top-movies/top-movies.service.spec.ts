import { Test, TestingModule } from '@nestjs/testing';
import { TopMoviesService } from './top-movies.service';

describe('TopMoviesService', () => {
  let service: TopMoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopMoviesService],
    }).compile();

    service = module.get<TopMoviesService>(TopMoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
