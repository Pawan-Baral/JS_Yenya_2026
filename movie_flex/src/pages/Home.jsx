
import { useEffect, useState } from 'react'

import MovieCard from '../components/MovieCard';
import HeroSlider from '../components/HeroSlider';
import { getPopularMovies, getGenres } from '../utilities/movieService';


function Home() {
    const [movies, setMovies] = useState([]);

    const [genreMap, setGenreMap] = useState({});
    async function fetchMovies() {
        try {
            const movieData = await getPopularMovies();
            const genreData = await getGenres();
            const map = {};
            genreData.forEach((genre) => {
                map[genre.id] = genre.name;
            });
            setGenreMap(map);

            setMovies(movieData);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <>

            <HeroSlider movies={movies} genreMap={genreMap} />
            <div className="movies-grid">
                {movies.slice(0, 12).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
}


export default Home;