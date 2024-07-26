import { useNavigate } from "react-router-dom";
import "./CreateMovie.css";

export default function CreateMovie() {
  const navigate = useNavigate();
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

    fetch("http://localhost:3000/movies", {
      method: "POST",
      body: JSON.stringify(movie),
    }).then(() => navigate("/"));

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
        />
      </fieldset>
      <fieldset>
        <label htmlFor="rating">Rating</label>
        <select name="rating" id="rating" required>
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
          />
        </div>
      </fieldset>

      <button>Save movie</button>
    </form>
  );
}
