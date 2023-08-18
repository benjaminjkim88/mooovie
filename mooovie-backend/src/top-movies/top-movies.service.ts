import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TopMoviesService {
    constructor(private configService: ConfigService) {}

    getApi(): string {
        return this.configService.get<string>('API_TOKEN');
    }

    async fetchMovies(): Promise<any> {
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.getApi()}`
            }
        };
    
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Error fetching data from API');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    }
}
    