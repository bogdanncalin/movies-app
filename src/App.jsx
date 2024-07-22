import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Carousel from "./components/carousel/Carousel";
import Recommended from "./components/recommended/Recommended";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState();

  function onSearchChange(_searchTerm) {
    setSearchTerm(_searchTerm); // equivalent to searchTerm = _searchTerm, but on react terms;
  }

  return (
    // React fragment -> can also be used as React.Fragment to encapsulate all the siblings components
    // <React.fragment> ... </React.Fragment>, import React from 'react'
    // or <main> and </main>, but it might mess the structure and the css files

    <>
      <Navbar />
      <Search onSearchChange={onSearchChange} />
      <Carousel />
      <Recommended searchTerm={searchTerm} />
    </>
  );
}

export default App;
