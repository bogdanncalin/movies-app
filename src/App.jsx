import "./App.css";
import Home from "./components/home/home";
import MovieDetails from "./components/movie-details/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // React fragment -> can also be used as React.Fragment to encapsulate all the siblings components
    // <React.fragment> ... </React.Fragment>, import React from 'react'
    // or <main> and </main>, but it might mess the structure and the css files

    // <Route path="/movie/:id" element={<Home />}></Route>, the : means that "id" is gonna be a variable, not something static, like a string
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
