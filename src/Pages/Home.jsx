import Navbar from "../Components/Navbar"
// import SearchBar from "../Components/SearchBar"
import MoviesCard from "../Components/MoviesCard"
import Hero from "../Components/Hero"

export default function Home ( {setSearchMovie, searchMovie, search, movies} ) {
    return (
        <>
            <Navbar />
            <Hero 
                setSearchMovie = {setSearchMovie}
                searchMovie={searchMovie}
                search={search}
            />
            {/* <SearchBar 
                setSearchMovie = {setSearchMovie}
                searchMovie={searchMovie}
                search={search}
            /> */}
            <div className='grid grid-cols-6 max-w-fit mx-auto mt-10 pt-5 pb-20 gap-18'>
                {movies.map ((movie) => {
                    return <MoviesCard movie={movie} key={movie.imdbID} />
                })}
            </div>
            
        </>
    )
}