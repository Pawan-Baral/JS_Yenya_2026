import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    return (
    
      <Link to={`/movies/${movie.id}`} >
      
      <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p> ⭐ {movie.vote_average}</p>
      </div>
  
      </Link>
  )
}

export default MovieCard