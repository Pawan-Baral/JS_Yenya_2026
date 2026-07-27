import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../utilities/movieService";
import "./Movies.css";

function Movies() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadMovies(pageNumber) {

        try {

            setLoading(true);

            const data = await getPopularMovies(pageNumber);

            setMovies(prev => [...prev, ...data]);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    }

    useEffect(() => {

        loadMovies(1);

    }, []);

    function handleLoadMore() {

        const nextPage = page + 1;

        setPage(nextPage);

        loadMovies(nextPage);

    }

    return (

        <div className="movies-page">

            <h1>Popular Movies</h1>

            <div className="movies-grid">

                {movies.map(movie => (

                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />

                ))}

            </div>

            <div className="load-more-container">

                <button
                    onClick={handleLoadMore}
                    className="load-more-btn"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Load More"}
                </button>

            </div>

        </div>

    );
}

export default Movies;