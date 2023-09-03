import React, { useEffect } from "react";


import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

const App = () => {


  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="app">
      <h1>MovieMania</h1>
    </div>
  );
};

export default App;