import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../services/tmdb";
import "./MovieDetails.css";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await tmdb.get(`/movie/${id}`, {
                    params: {
                        append_to_response: "credits",
                    },
                });

                setMovie(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <h2 className="loading">Loading...</h2>;
    }

    const director = movie.credits.crew.find(
        (person) => person.job === "Director"
    );

    const producers = movie.credits.crew
        .filter((person) => person.job === "Producer")
        .slice(0, 5);

    const writers = movie.credits.crew
        .filter(
            (person) =>
                person.job === "Writer" ||
                person.job === "Screenplay" ||
                person.job === "Story"
        )
        .slice(0, 5);

    const cast = movie.credits.cast.slice(0, 10);

    return (
        <div className="details-page">

            <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />

            <h1 className="movie-title">{movie.title}</h1>

            <div className="movie-info">
                <span>⭐ {movie.vote_average.toFixed(1)}</span>
                <span>📅 {movie.release_date}</span>
                <span>⏱ {movie.runtime} min</span>
                <span>🌍 {movie.original_language.toUpperCase()}</span>
            </div>

            <div className="genres">
                {movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                ))}
            </div>

            <section className="overview">
                <h2>Overview</h2>
                <p>{movie.overview}</p>
            </section>

            <section className="movie-details">

                <div>
                    <h3>Director</h3>
                    <p>{director ? director.name : "Unknown"}</p>
                </div>

                <div>
                    <h3>Producer</h3>
                    <p>
                        {producers.length
                            ? producers.map((p) => p.name).join(", ")
                            : "Unknown"}
                    </p>
                </div>

                <div>
                    <h3>Writer</h3>
                    <p>
                        {writers.length
                            ? writers.map((w) => w.name).join(", ")
                            : "Unknown"}
                    </p>
                </div>

                <div>
                    <h3>Budget</h3>
                    <p>
                        {movie.budget
                            ? `$${movie.budget.toLocaleString()}`
                            : "Not Available"}
                    </p>
                </div>

                <div>
                    <h3>Revenue</h3>
                    <p>
                        {movie.revenue
                            ? `$${movie.revenue.toLocaleString()}`
                            : "Not Available"}
                    </p>
                </div>

                <div>
                    <h3>Status</h3>
                    <p>{movie.status}</p>
                </div>

            </section>

            <section className="cast-section">

                <h2>Top Cast</h2>

                <div className="cast-grid">

                    {cast.map((actor) => (

                        <div className="cast-card" key={actor.id}>

                            <img
                                src={
                                    actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                                        : "https://via.placeholder.com/185x278?text=No+Image"
                                }
                                alt={actor.name}
                            />

                            <h4>{actor.name}</h4>

                            <p>{actor.character}</p>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
}

export default MovieDetails;