import { useState } from 'react'

import Home from './Pages/Home';

function App() {
  // const [count, setCount] = useState(0)
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  async function getMovies() {
    const response1 = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchMovie}`);
    const data1 = await response1.json();
    console.log(data1);
    setMovies(data1.Search);
  }
  
  // getMovies();
  
  return (
    <>
      <Home
        setSearchMovie={setSearchMovie}
        searchMovie={searchMovie}
        search={getMovies}
        movies={movies}
      />
    </>
  )
}

export default App
