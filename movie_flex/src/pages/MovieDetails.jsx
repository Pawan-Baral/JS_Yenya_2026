import React from 'react'
import { useParams } from "react-router-dom";
import tmdb from "../services/tmdb";

function MovieDetails() {
    const [movie, setMovie] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        // Simulate fetching movie details
        const fetchMovieDetails = async () => {
            // Replace this with your actual API call
            const movieResponse = await tmdb.get(`/movie/${id}`); // Assuming you have a function to fetch movie details by ID
            setMovie(movieResponse.data); // Update the state with the fetched movie details
        };

        fetchMovieDetails();
    }, [id]);

  return (
    <div>
        {!movie ? (
            <p>Loading movie details...</p>
        ) : (
            <>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <p>{movie.runtime} minutes</p>
                <p>{movie.genres?.map((genre) => genre.name).join(", ")}</p>
            </>
        )}
    </div>
  )
}

export default MovieDetails