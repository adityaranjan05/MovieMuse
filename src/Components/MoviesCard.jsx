export default function MoviesCard ( {movie} ) {
    const movieName = movie.Title;
    const posterLink = movie.Poster;
    console.log(posterLink);
    
    return (
        <>
            <div
                className="w-62 h-auto"
            >
                    <img 
                        src={posterLink !== "N/A" ? posterLink : "https://placehold.co/300x450?text=No+Poster"}
                        className="rounded-lg w-full h-full object-cover shadow-lg duration-300 hover:-translate-y-2 hover:shadow-xl"
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