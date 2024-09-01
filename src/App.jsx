import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import MovieDetails from "./components/movie-details/MovieDetails";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateMovie from "./components/create-movie/CreateMovie";
import Navbar from "./components/navbar/Navbar";
import retrieveMovies from "./lib/movies";
import { Register } from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import Profile from "./components/profile/Profile";

export const MovieContext = React.createContext();
export const AuthContext = React.createContext();
export const SearchTermContext = React.createContext();

function App() {

  const accessToken = localStorage.getItem("accessToken");
  const [auth, setAuth] = useState(accessToken || ""); // Ensure auth is initialized correctly
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // Effect to fetch movies whenever auth token changes
  useEffect(() => {
    retrieveMovies(setMovies, auth, navigate).catch((error) =>
      console.log(error)
    );
  }, [auth]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:idFromPath" element={<MovieDetails />} />
            <Route path="/create-movie" element={<CreateMovie />} />
            <Route path="/edit-movie/:idFromPath" element={<CreateMovie />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </SearchTermContext.Provider>
      </AuthContext.Provider>
    </MovieContext.Provider>
  );
}

export default App;
