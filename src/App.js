import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Hera Pheri");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieMania</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
        ? (
          <div className="container">
            {
              movies.map( (movie)=>{
                return (
                <MovieCard movie={movie} />
              )})
            }
          </div>
        )
        : (<div className="empty">
          <h2>No Movies Found</h2>
        </div>)
      }
    </div>
  );
};

export default App;