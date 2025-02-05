import { useEffect, useState } from "react";

function HuluClone() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    const [movieList, setMovieList] = useState([
        {
            id: 1,
            title: "Inception",
            poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
        },
        {
            id: 2,
            title: "Interstellar",
            poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        },
        {
            id: 3,
            title: "The Dark Knight",
            poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
        },
        {
            id: 4,
            title: "Avengers: Endgame",
            poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
        }
    ]);

    return (
        <div className="bg-black min-h-screen p-4 text-white">
            <h1 className="text-4xl font-bold text-center mb-6">Hulu Clone</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movieList.map((movie) => (
                    <div key={movie.id} className="bg-gray-900 p-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <img
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h2 className="text-lg font-semibold text-center mt-2">{movie.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HuluClone;