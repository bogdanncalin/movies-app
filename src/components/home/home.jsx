import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Carousel from "../carousel/Carousel";
import Recommended from "../recommended/Recommended";
import { useState } from "react";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState();

  function onSearchChange(_searchTerm) {
    setSearchTerm(_searchTerm); // equivalent to searchTerm = _searchTerm, but on react terms;
  }

  return (
    <>
      <Navbar />
      <Search onSearchChange={onSearchChange} />
      <Carousel />
      <Recommended searchTerm={searchTerm} />
    </>
  );
}
