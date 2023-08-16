import React from "react"

const MovieCard =(props)=> {
    
    return(
        <div className="movie-card">
            <img className="movie-poster" src={props.poster} alt='Movie Poster' />
            <p className="movie-title">{props.title}</p>    
        </div>
    )
}

export default MovieCard;