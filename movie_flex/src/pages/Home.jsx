
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
            <div>Welcome to Homes of Movies</div>
            <HeroSlider movies={movies} genreMap={genreMap} />
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </>);
}


export default Home;