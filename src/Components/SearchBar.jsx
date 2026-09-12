// import { useState } from "react";

export default function SearchBar ( {setSearchMovie, searchMovie, search} ) {
    

    return (
        <>
            <div
                className="flex gap-4 justify-center"
            >
                <input
                    type = "text"
                    placeholder="Type a movie name to search................."
                    value = {searchMovie}
                    onChange = { (e) => setSearchMovie(e.target.value) }
                    className="w-xl h-10 rounded-2xl shadow-md px-3 shadow-orange-200/40 focus:outline-none focus:ring-2 focus:ring-orange-300/40"    
                />
                <button
                    onClick={search}
                    className="px-6 h-10 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_100%] bg-left text-white font-semibold shadow-lg shadow-orange-400/30 transition-all duration-500 hover:bg-right hover:-translate-y-1 active:translate-y-0"
                >
                    Search
                </button>

            </div>
        </>
    )
}