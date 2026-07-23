import tmdb from "../services/tmdb";

export async function getPopularMovies() {
    const response = await tmdb.get("/movie/popular");
    return response.data.results;
}

export async function getGenres() {
    const response = await tmdb.get("/genre/movie/list");
    return response.data.genres;
}