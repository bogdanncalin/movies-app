import { movies } from "../../data/data";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";
import { useEffect } from "react";

export default function MovieDetails() {
  let { id } = useParams();

  const selectedMovie = movies.find((movie) => movie.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedMovie) {
      navigate("/");
    }
  }, []);
  
  if (!selectedMovie) {
    //   return <h1>404: Selected movie does not exist!</h1>; or
    return;
  }

  const { title, imageUrl, category } = selectedMovie;

  return (
    <section>
      <header>
        <h3> {title} </h3>
      </header>

      <img src={imageUrl} />

      <p className="movie-detail__category">Category: {category}</p>
    </section>
  );
}
