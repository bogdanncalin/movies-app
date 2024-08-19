// import { movies } from "../../data/data";
import { useParams, useNavigate } from "react-router-dom";

import "./MovieDetails.css";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import retrieveMovies from "../../lib/movies";

async function retrieveMovie(setMovie, movieId) {
  const response = await fetch(`http://localhost:3000/movies/${movieId}`);
  const movie = await response.json();

  setMovie(movie);
}

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { idFromPath } = useParams();
  // const selectedMovie = movies.find((movie) => movie.id === idFromPath);
  const navigate = useNavigate();

  const { setMovies } = useContext(MovieContext);

  useEffect(() => {
    retrieveMovie(setMovie, idFromPath);
  }, []);

  useEffect(() => {
    if (!movie) {
      navigate("/");
    }
  }, [movie]);

  if (!movie) {
    return;
    // return (
    //   <h1>404: Selected movie does not exist anymore!</h1>
    // )
  }

  const { title, imageUrl, category, id } = movie;

  function deleteMovie() {
    const userConfirmedAction = confirm(
      "Are you sure you want to delete this movie?"
    );
    if (userConfirmedAction) {
      fetch(`http://localhost:3000/movies/${id}`, { method: "DELETE" }).then(
        () => {
          // There are two ways of updating the movie list from the recommended page

          // Version 1
          // Updates the list locally, doesn't do an additional GET from the server
          // faster and less data consumed

          // const updatedMovies = movies.filter((movie) => movie.id !== id);
          // setMovies(updatedMovies);

          // Version 2
          // Retrieves the new, updated list from the server
          // better when a lot of users on the app and might occur some problems of double deleting
          // or other problems like that, so we better make another GET to make sure we get
          // the right data

          retrieveMovies(setMovies);

          navigate("/");
          alert("The movie has been deleted succesfully!");
        }
      );
    }
  }

  function editMovie() {
    navigate(`/edit-movie/${id}`);
  }

  return (
    <section>
      <header>
        <h3> {title} </h3>
      </header>

      <img src={imageUrl} />

      <p className="movie-detail__category"> Category: {category}</p>
      <button onClick={deleteMovie}>Delete movie</button>
      <button onClick={editMovie}>Edit movie</button>
    </section>
  );
}

/**
 *! REST -> Representational State Transfer
 *! Get a list of all resources (ex: movies) GET: /movies
 *! Get a single a single resource from the server: GET: /movies/:id

  delete one entity:
  DELETE /movies/:id
 */
