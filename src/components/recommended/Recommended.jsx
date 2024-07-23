import { movies } from "../../data/data";
import "./Recommended.css";
import MovieCard from "../movie-card/MovieCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Recommended(props) {
  const { searchTerm = "" } = props;

  const filteredMovies = movies.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const moviesNotFound = filteredMovies.length === 0;

  return (
    <section>
      <header>
        <h1>Recommended for you</h1>
      </header>
      {moviesNotFound ? (
        <p>There were no movies found</p>
      ) : (
        <ul className="movie-list">
          {filteredMovies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Recommended;

Recommended.propTypes = {
  searchTerm: PropTypes.string,
};
