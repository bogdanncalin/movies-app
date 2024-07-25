import React from "react";
import "./App.css";

import Home from "./components/home/Home";
import MovieDetails from "./components/movie-details/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CreateMovie from "./components/create-movie/CreateMovie";

export const MovieContext = React.createContext();

function App() {
  const [movies, setMovies] = useState([]);

  return (
    // React fragment -> Can also be used as React.Fragment
    <MovieContext.Provider value={{ movies, setMovies }}>
      <BrowserRouter>
        {/* Switch statement */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:idFromPath" element={<MovieDetails />}></Route>
          <Route path="/createMovie" element={<CreateMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
