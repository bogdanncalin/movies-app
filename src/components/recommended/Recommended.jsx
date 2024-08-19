import MovieCard from "../movie-card/MovieCard";

import PropTypes from "prop-types";

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
      {moviesNotFound ? (
        <p>404 There were no movies found for the given search input.</p>
      ) : (
        <ul className="movie-list">
          {filteredMovies.map((movieItem) => (
            <MovieCard key={movieItem.id} movieElement={movieItem} />
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
