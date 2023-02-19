import Header from "./components/Header";
import Movie from "./components/Movie";
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';


const movieDBAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8299fb40b2620a722c730e28135abd7&page=1";


const search_API = "https://api.themoviedb.org/3/search/movie?&api_key=b8299fb40b2620a722c730e28135abd7&query="

function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch(movieDBAPI)
      .then(res => res.json())
      .then(data => {
        setmovies(data.results);
      });

  }, [])


  return (

    <>
      <header>
        <button onClick={Header}>Randomize</button>
      </header>

      <div className="movie-container">

        {movies.length > 0 &&
          movies.map((movie) => <Movie key=
            {movie.id} {...movie} />)}

      </div>
    </>
  );
}

export default App;
