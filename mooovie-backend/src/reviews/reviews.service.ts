/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {

    // we can use this once we make movie id and user id available
    // private reviews: { id: number; userId: number; movieId: number; description: string }[] = [
    //     { id: 1, userId: 1, movieId: 1, description: 'Great movie!' },
    //     { id: 2, userId: 2, movieId: 1, description: 'Not my favorite. The main character ate a firework' },
    // ];

    private reviews: { description: string }[] = [
        { description: 'Great movie!' },
        { description: 'Not my favorite. The main character ate a firework' },
    ];

    
    getAllReviews(): { description: string }[] {
        return this.reviews;
    }

    addReview(description: string): void {
        this.reviews.push({ description });
    }
}
