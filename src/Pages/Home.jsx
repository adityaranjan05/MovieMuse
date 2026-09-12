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
                movies={movies}
            />

            <div className="min-h-screen relative bg-[radial-gradient(circle_at_50%_0%,#160A27_0%,#0F071B_30%,#09040F_65%,#050208_100%)] text-white">
                <div className='grid grid-cols-6 max-w-fit mx-auto pt-5 pb-20 gap-18'>
                    {movies.map ((movie) => {
                        return <MoviesCard movie={movie} key={movie.imdbID} />
                    })}
                </div>
            </div>
        </>
    )
}