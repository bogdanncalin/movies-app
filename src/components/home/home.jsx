
import Carousel from "../Carousel";
import Recommended from "../recommended/Recommended";
import Search from "../search/Search";
import { useState } from "react";

// Version 1
// function retrieveMovies() {
//   return fetch("http://localhost:3000/movies").then((response) =>
//     response.json()
//   );
// }

// Version 2

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [movies, setMovies] = useState([]);

  function onSearchChange(_searchTerm) {
    // searchTerm = _searchTerm
    setSearchTerm(_searchTerm);
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
      <Search onSearchChange={onSearchChange} />
      <section>
        <Carousel />
        <Recommended searchTerm={searchTerm} />
      </section>
    </>
  );
}
