import { MovieContext, SearchTermContext } from "../../App";
import Recommended from "../recommended/Recommended";
import Carousel from "../carousel/Carousel";
import { useContext } from "react";

// Version 1
// function retrieveMovies() {
//   return fetch("http://localhost:3000/movies").then((response) =>
//     response.json()
//   );
// }

// Version 2

export default function Home() {
  // const [searchTerm, setSearchTerm] = useState("");
  const { searchTerm } = useContext(SearchTermContext);
  // const [movies, setMovies] = useState([]);

  const movies = useContext(MovieContext);

  if (movies.length == 0) {
    return <h1>There are no movies yet!</h1>;
  }

  // Version 1
  // useEffect(() => {
  //   async function getMovies() {
  //     const moviesFromServer = await retrieveMovies();

  //     setMovies(moviesFromServer);
  //   }

  //   getMovies();
  // }, []);

  // // Version 2
  // useEffect(() => {
  //   retrieveMovies(setMovies);
  // }, []);

  return (
    <>
      <section>
        <div>
          <div>My movies</div>
          <Carousel />
        </div>
        <Recommended searchTerm={searchTerm} />
      </section>
    </>
  );
}
