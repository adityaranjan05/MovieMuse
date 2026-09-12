import heroImg from "../Assets/hero.png"
import SearchBar from "./SearchBar"

export default function Hero( {search, searchMovie, setSearchMovie} ) {
    return (
        <section className="relative min-h-160 overflow-hidden">
            <img
                src={heroImg}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
            />

            <div
                className="absolute inset-0 bg-gradient-to-r
                           from-[#12091F]
                           via-[#2D1B4E]/20
                           to-[#3B2463]/10"
            />

            <div className="relative z-10 max-w-[95%] mx-auto pt-32">
                <div className="max-w-3xl">
                    <h1 className="text-7xl text-white font-bold">Find Your Next</h1>
                    <h1 className="text-7xl text-orange-500 font-bold">Favorite Movie</h1>
                    <p className="text-white/70 max-w-md font-medium text-lg mt-5 leading-relaxed">
                        Search thousands of movies, explore their ratings, cast, and more. Because great movies always find their audience.
                    </p>
                    <SearchBar 
                        setSearchMovie={setSearchMovie}
                        searchMovie={searchMovie}
                        search={search}
                    />
                </div>
                
                <div className="max-w-md">

                </div>
            </div>

            <div className="relative z-10">
            </div>

        </section>
    )
}