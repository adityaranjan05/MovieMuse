import { useState } from 'react'
import SearchBar from "./Components/SearchBar";
import MoviesCard from './Components/MoviesCard';

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
      <SearchBar 
        setSearchMovie = {setSearchMovie}
        searchMovie={searchMovie}
        search={getMovies}
      />
      <div className='grid grid-cols-4 max-w-fit mx-auto mt-10 pt-5 pb-20 gap-18'>
        {movies.map ((movie) => {
          return <MoviesCard movie={movie} key={movie.imdbID} />
        })}
      </div>
    </>
  )
}

export default App
