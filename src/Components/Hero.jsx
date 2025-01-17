import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function Hero() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        try {
            const resp = await GlobalApi.getPopularMovies(); // Fixed calling the API method
            setMovieList(resp.data.results); // Directly setting results without redefining 'result'
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
            <ul>
                {movieList.map((movie, index) => (
                    <li key={index} className="text-lg">{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hero;
