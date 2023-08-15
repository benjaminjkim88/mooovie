import { Test, TestingModule } from '@nestjs/testing';
import { TopMoviesController } from './top-movies.controller';

describe('TopMoviesController', () => {
  let controller: TopMoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopMoviesController],
    }).compile();

    controller = module.get<TopMoviesController>(TopMoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
