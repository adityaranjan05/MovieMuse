export default function MoviesCard ( {movie} ) {
    const movieName = movie.Title;
    const posterLink = movie.Poster;
    console.log(posterLink);
    
    return (
        <>
            <div
                className="w-52 h-auto rounded-lg"
            >
                    <img 
                        src={posterLink !== "N/A" ? posterLink : "https://placehold.co/300x450?text=No+Poster"}
                        className="rounded-lg w-full object-cover aspect-2/3 shadow-lg duration-300 hover:-translate-y-2 hover:shadow-xl"
                        onError={(e) => {
                            e.target.src="https://placehold.co/300x450?text=No+Poster";
                        }}
                    />
                    <h1 className="text-lg font-bold">
                        {movieName}
                    </h1>
            </div>
        </>
    )
}