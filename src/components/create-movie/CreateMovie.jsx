import "./CreateMovie.css";

export default function CreateMovie() {
    function saveMovie(){
        console.log('save');
    }

  return (
    <form onSubmit={saveMovie()}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
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
          className="form-input"
          id="year"
          type="number"
          required
          minLength={4}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="rating">Rating</label>
        <select id="rating" required>
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
