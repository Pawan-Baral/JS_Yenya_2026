import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

import "./HeroSlider.css";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useRef } from "react";

function HeroSlider({ movies, genreMap }) {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );
  return (
    <Carousel
      className="hero-carousel"
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {movies.slice(0, 5).map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="hero-slide">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="hero-overlay">
                <div className="hero-content">
                  <h2 className="hero-title">{movie.title}</h2>
                  <p className="hero-genres">
                    {movie.genre_ids
                      .map(id => genreMap[id])
                      .filter(Boolean)
                      .join(" • ")}
                  </p>

                  <p className="hero-rating">Rating: {movie.vote_average}</p>
                  <p className="hero-overview">{movie.overview}</p>
                  <Link to={`/movie/${movie.id}`} className="hero-button">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default HeroSlider;