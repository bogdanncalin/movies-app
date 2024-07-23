import { movies } from "../../data/data";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  let { id } = useParams();

  const selectedMovie = movies.find((movie) => movie.id === id);
  console.log({selectedMovie});
  return (
    <>
      
    </>
  );
}
