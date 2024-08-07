import MovieCard from "../MovieCard";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./Recommended.css";
import { MovieContext } from "../../App";
import { useContext } from "react";

function Recommended({ searchTerm }) {
  const { movies } = useContext(MovieContext);

  const filteredMovies = movies.filter(({ title }) =>
    title.toUpperCase().includes(searchTerm.toUpperCase())
  );
  const moviesNotFound = filteredMovies.length === 0;

  return (
    <section>
      <header>
        <h1>Recommended for you</h1>
      </header>

      {moviesNotFound ? (
        <p>404 There were no movies found for the given search input.</p>
      ) : (
        <ul className="movie-list">
          {filteredMovies.map((movieItem) => (
            // Link === <a href="/movie/${movieItem.id}"
            <Link key={movieItem.id} to={`/movie/${movieItem.id}`}>
              <MovieCard movieElement={movieItem} wili="hello" />
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
  movies: PropTypes.any,
};
