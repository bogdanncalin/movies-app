import { MovieContext } from "../../App";
import MovieCard from "../movie-card/MovieCard";

import "./Carousel.css";
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PropTypes from "prop-types";
import { useContext } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Carousel() {
  const { movies } = useContext(MovieContext);
  const trendingMovies = movies.filter((movie) => movie.trending === true);
  return (
    <div>
      <Carousel2 responsive={responsive}>
        {trendingMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieElement={movie}
            large={true}
          ></MovieCard>
        ))}
      </Carousel2>
    </div>
  );
}

export default Carousel;

Carousel.propTypes = {
  movies: PropTypes.array,
};
