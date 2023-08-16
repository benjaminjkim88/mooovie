import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard";

const MovieScroll =()=> {
    
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const options = {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
          }
        };
    
        fetch(url, options)
          .then(response => response.json())
          .then(jsonData => {
            setTopMovies(jsonData.results); // Assuming the API response has a 'results' property
          })
          .catch(error => console.error('Error:', error));
    }, []);
    

    return (
        <div className="movie-scroll">
          {topMovies ? (
            topMovies.map(film => (
              <MovieCard 
                key={'https://api.themoviedb.org/3/trending/movie/day?language=en-US' + 
                        film.id}
                poster={'https://api.themoviedb.org/3/trending/movie/day?language=en-US' + 
                        film.poster_path}
                title={film.original_title}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}   

export default MovieScroll;