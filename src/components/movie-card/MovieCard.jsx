import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import "./MovieCard.css";

// function MovieCard(props) {
// const { movie, wili, key } = props;
function MovieCard({ movieElement, large = false }) {
  const { id, imageUrl, year, rating, category, title } = movieElement;

  return (
    <div>
      <Link key={movieElement.id} to={`/movie/${movieElement.id}`}>
        <div
          className={`movie ${large ? "movie--large" : "movie--small"}`}
          key={id}
        >
          <img className="movie__image" src={imageUrl} />
          <div className="movie__bookmark">
            <i className="movie__bookmark-icon" />
          </div>

          <div className="movie__info">
            <div>
              <span className="movie__year">{year}</span>
              <span className="movie__rating">{rating}</span>
              <span className="movie__category">{category}</span>
            </div>

            <h3 className="movie__title">{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  large: PropTypes.bool,
  movieElement: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    year: PropTypes.any,
    rating: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    bookmark: PropTypes.bool,
    trending: PropTypes.bool,
  }),
};
