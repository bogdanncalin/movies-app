import { useNavigate, useParams } from "react-router-dom";
import "./CreateMovie.css";
import { useContext } from "react";
import { MovieContext } from "../../App";

export default function CreateMovie() {
  const navigate = useNavigate();
  const { movies } = useContext(MovieContext);
  const { idFromPath } = useParams();

  const selectedMovie = movies.find((movie) => movie.id === idFromPath);

  function saveMovie(event) {
    event.preventDefault(); // used not to refresh the whole page/app on submit, because default behaviour on submit is to refresh the whole page

    const { title, url, year, rating, category } = event.target;

    const movie = {
      title: title.value,
      imageUrl: url.value,
      year: year.value,
      rating: rating.value,
      category: category.value,
    };

    if (idFromPath) {
      fetch(`http://localhost:3000/movies/${idFromPath}`, {
        method: "PUT",
        body: JSON.stringify(movie),
      }).then(() => {
        alert("Movie has been modified");
        navigate("/");
      });
    } else {
      fetch("http://localhost:3000/movies", {
        method: "POST",
        body: JSON.stringify(movie),
      }).then(() => {
        alert("Movie has been created");
        navigate("/");
      });
    }

    event.target.reset(); // empties the form after submition
  }

  return (
    <form onSubmit={saveMovie}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="form-input"
          id="title"
          type="text"
          required
          minLength={3}
          defaultValue={selectedMovie?.title} // checks to see if selectedMovie exists
        />
      </fieldset>
      <fieldset>
        <label htmlFor="imageURL">Image URL:</label>
        <input
          name="url"
          className="form-input"
          id="imageURL"
          type="url"
          required
          minLength={3}
          defaultValue={selectedMovie?.imageUrl}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="year">Year</label>
        <input
          name="year"
          className="form-input"
          id="year"
          type="number"
          required
          minLength={4}
          defaultValue={selectedMovie?.year}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="rating">Rating</label>
        <select
          name="rating"
          id="rating"
          required
          defaultValue={selectedMovie?.rating}
        >
          <option disabled>Select one</option>
          <option value="pg">PG</option>
          <option value="18+">18+</option>
          <option value="ap">AP</option>
        </select>
      </fieldset>
      <fieldset>
        <label>Category</label>
        <div>
          <label htmlFor="movie">Movie</label>
          <input
            className="form-input"
            name="category"
            type="radio"
            value="movie"
            required
            defaultChecked={selectedMovie?.category.toLowerCase() === "movie"}
          />
        </div>
        <div>
          <label htmlFor="series">TV Series</label>
          <input
            className="form-input"
            name="category"
            type="radio"
            value="series"
            required
            defaultChecked={selectedMovie?.category.toLowerCase() == "series"}
          />
        </div>
      </fieldset>

      <button>Save movie</button>
    </form>
  );
}
