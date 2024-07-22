import { trendingMovies } from "../../data/data";
import MovieCard from "../movie-card/MovieCard";
import "./Carousel.css";

function Carousel() {
  return (
    <section>
      <header>
        <h1>Trending Movies</h1>
      </header>
      <ul className="carousel">
        {trendingMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} large={true}></MovieCard>
        ))}
      </ul>
    </section>
  );
}

export default Carousel;
