import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard(props) {
  const { movie, large = false } = props; // default value of large is false
  return (
    <li
      className={`movie ${large ? "movie--large" : "movie--small"}`}
      key={movie.id}
    >
      <img className="movie__image" src={movie.imageUrl} />
      <div className="movie__bookmark">
        <i className="movie__bookmark-icon" />
      </div>
      <div className = "movie_info">
        <div className="description">
          <span className="movie__year">{movie.year}</span>
          <span className="movie__rating">{movie.rating}</span>
          <span className="movie__category">{movie.category}</span>
        </div>
        <h3 className="movie__title">{movie.title}</h3>
      </div>
    </li>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  large: PropTypes.bool,
  movie: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    bookmark: PropTypes.bool,
  }),
};
