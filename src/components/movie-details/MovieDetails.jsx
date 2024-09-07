<<<<<<< HEAD
// import { movies } from "../../data/data";
import { useParams, useNavigate } from "react-router-dom";

import "./MovieDetails.css";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import retrieveMovies from "../../lib/movies";

async function retrieveMovie(setMovie, movieId) {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const movie = await response.json();

  setMovie(movie);
}

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { idFromPath } = useParams();
  // const selectedMovie = movies.find((movie) => movie.id === idFromPath);
  const navigate = useNavigate();
  const { movies, setMovies } = useContext(MovieContext);

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
      "Are you sure you want to delete the movie?"
    );

    if (userConfirmedAction) {
      fetch(`http://localhost:3000/movies/${id}`, {
        method: "DELETE",
      }).then(() => {
        // const updatedMovies = movies.filter((movie) => movie.id !== id);
        // setMovies(updatedMovies);

        retrieveMovies(setMovies);

        navigate("/");
      });
=======
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import retrieveMovies from "../../lib/movies";
import "./MovieDetails.css";

async function retrieveMovie(setMovie, movieId) {
  try {
    const response = await fetch(`http://localhost:3000/movies/${movieId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie");
    }
    const movie = await response.json();
    setMovie(movie);
  } catch (error) {
    console.error("Error fetching movie:", error);
  }
}

export default function MovieDetails() {
  const [movie, setMovie] = useState(null); // Initialize as null for better handling
  const { idFromPath } = useParams();
  const navigate = useNavigate();
  const { setMovies } = useContext(MovieContext);

  useEffect(() => {
    if (idFromPath) {
      retrieveMovie(setMovie, idFromPath);
    } else {
      navigate("/");
    }
  }, [idFromPath, navigate]);

  useEffect(() => {
    if (movie === null) {
      navigate("/");
    }
  }, [movie, navigate]);

  async function deleteMovie() {
    const userConfirmedAction = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (userConfirmedAction) {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movie.id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete movie");
        }
        // Fetch the updated movie list
        await retrieveMovies(setMovies);
        navigate("/");
        window.alert("The movie has been deleted successfully!");
      } catch (error) {
        console.error("Error deleting movie:", error);
      }
>>>>>>> 3f67172cc7949d390b8e58f272be9b1c54ff84bd
    }
  }

  function editMovie() {
<<<<<<< HEAD
    navigate(`/edit-movie/${id}`);
  }

  return (
    <section>
      <header>
        <h3> {title} </h3>
      </header>

      <img src={imageUrl} />

      <p className="movie-detail__category"> Category: {category}</p>

=======
    navigate(`/edit-movie/${movie.id}`);
  }

  if (movie === null) {
    return <h1>404: Selected movie does not exist anymore!</h1>;
  }

  const { title, imageUrl, category } = movie;

  return (
    <section>
      <header>
        <h3>{title}</h3>
      </header>
      <img src={imageUrl} alt={title} />
      <p className="movie-detail__category">Category: {category}</p>
>>>>>>> 3f67172cc7949d390b8e58f272be9b1c54ff84bd
      <button onClick={deleteMovie}>Delete movie</button>
      <button onClick={editMovie}>Edit movie</button>
    </section>
  );
}
<<<<<<< HEAD

/**
 *! REST -> Representational State Transfer
 *! Get a list of all resources (ex: movies) GET: /movies
 *! Get a single a single resource from the server: GET: /movies/:id
 */

/**
 * REST API -> Representational State Transfer
 *
 * GET /movies
 * GET /movies/:id
 *
 * DELETE /movies/:id
 *
 * PUT /movies/:id
 *
 */
=======
>>>>>>> 3f67172cc7949d390b8e58f272be9b1c54ff84bd
