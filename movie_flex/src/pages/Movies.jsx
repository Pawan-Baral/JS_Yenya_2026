import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../utilities/movieService";
import "./Movies.css";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, []);

    return (
        <div className="movies-page">
            <h1>Popular Movies</h1>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies;