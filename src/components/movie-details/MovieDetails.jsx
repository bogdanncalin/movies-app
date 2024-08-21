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
    }
  }

  function editMovie() {
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
      <button onClick={deleteMovie}>Delete movie</button>
      <button onClick={editMovie}>Edit movie</button>
    </section>
  );
}
