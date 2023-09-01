import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard";

const MovieScroll =()=> {
    
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_TOKEN
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const options = {
          method:'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
          }
        };

        console.log("keyyyyy")
        console.log(process.env.REACT_APP_API_TOKEN)
    
        fetch(url, options)
          .then(response => response.json())
          .then(jsonData => {
            setTopMovies(jsonData.results);
          })
          .catch(error => console.error('Error:', error));
    }, []);
    
    return (
        <div className="movie-scroll">
          {topMovies ? (
            topMovies.map(film => (
              <MovieCard 
                key={film.id}
                poster={`https://image.tmdb.org/t/p/original${film.poster_path}`}
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