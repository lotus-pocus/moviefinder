
import Movie from "./components/Movie";
import { useState, useEffect } from "react";



const movieDBAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8299fb40b2620a722c730e28135abd7&page=1";


const search_API = "https://api.themoviedb.org/3/search/movie?&api_key=b8299fb40b2620a722c730e28135abd7&query="

function App() {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    getMovies(movieDBAPI)

  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setmovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(search_API + searchTerm);


      setSearchTerm("");
    }
  };



  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (

    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
          {/* <button onClick={Header}>Randomize</button> */}
        </form>
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
