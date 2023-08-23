import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  // depends on the reviewService
  constructor(private readonly reviewsService: ReviewsService) {}

  // GET reviews
  @Get()
  getReviews() {
    return this.reviewsService.getAllReviews();
  }

  // GET one review
  @Get(':id')
  // nest parsing out the url and auto injects it in the method when invoked
  getOneReview(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST(create) a review
  @Post()
  createReview(@Body() createReviewDto: CreateReviewDto) {
    return {
      username: createReviewDto.username,
    };
  }

  // PUT(update) a review
  @Put(':id')
  updateReview(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return {
      id,
      username: updateReviewDto,
    };
  }

  // Delete a review
  @Delete(':id')
  removeReview(@Param('id') id: string) {
    return {
      id,
    };
  }
}
