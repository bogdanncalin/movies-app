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
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem("accessToken"));
  const [searchTerm, setSearchTerm] = useState("");

  // Effect to fetch movies whenever auth token changes
  useEffect(() => {
    const fetchMovies = async () => {
      console.log("Fetching movies with token:", auth); // Log current auth token
      try {
        await retrieveMovies(setMovies, auth, navigate);
        console.log("hello")
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    if (auth) {
      fetchMovies();
    }
  }, [auth, navigate]);

  // Effect to listen for auth changes
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("accessToken");
      setAuth(token || "");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
