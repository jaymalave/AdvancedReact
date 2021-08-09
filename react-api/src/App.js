import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [starwar, setStarwar] = useState("");

  async function fetchMovieHandler() {
    console.log('the function is getting called...')
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        releaseDate: movieData.release_date,
      };
    });
    setStarwar(transformedMovies);
   
  }
  return (
    <div className="App">
      <button onClick={fetchMovieHandler}>Fetch Starwar movies</button>
      {
        Array.from(starwar).map(everyStarwar => {
          <div>
          <div>{everyStarwar.id}</div>
          <div>{everyStarwar.title}</div>
          <div>{everyStarwar.release_date}</div>
          </div>
        })
      }
    </div>
  );
}

export default App;
