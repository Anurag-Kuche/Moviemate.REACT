import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function Hero() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        try {
            const resp = await GlobalApi.getPopularMovies();
            console.log(resp.data.results); // Log the response to check the structure
            setMovieList(resp.data.results);
        } catch (error) {
            console.error("Error to fetch popular movies:", error);
        }
    };

    return (
        <div>
            {/* Conditional rendering to handle empty movie list */}
            {movieList.length > 0 ? (
                <img
                    src={`${IMAGE_BASE_URL}${movieList[0]?.backdrop_path || '/default.jpg'}`} // Fallback if no backdrop_path
                    width={1920}
                    height={1080}
                    alt="Hero Background"
                />
            ) : (
                <p>Loading...</p> // Display loading 
            )}

            <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
            <ul className="space-y-2">
                {/* Displaying each movie */}
                {movieList.map((movie, index) => (
                    <li key={index} className="text-lg">{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hero;
