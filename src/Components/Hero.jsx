import { useState } from "react";

function HuluClone() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";//
    const [movieList, setMovieList] = useState([
        { id: 1, title: "Inception", poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg", overview: "A mind-bending thriller" },
        { id: 2, title: "Interstellar", poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", overview: "Space adventure" },
        { id: 3, title: "The Dark Knight", poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg", overview: "Batman faces his nemesis" },
        { id: 4, title: "Avengers: Endgame", poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg", overview: "The Avengers final battle" },
        { id: 5, title: "Titanic", poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", overview: "A love story aboard a doomed ship" },
        { id: 6, title: "Joker", poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", overview: "The origin story of the Joker" },
        { id: 7, title: "Parasite", poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", overview: "A social thriller" },
        { id: 8, title: "The Matrix", poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", overview: "A hacker discovers the truth about reality" },
    ]);

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // State for selected movie (for modal)
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Filter movies based on search query
    const filteredMovies = movieList.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Open movie modal
    const openModal = (movie) => {
        setSelectedMovie(movie);
    };

    // Close movie modal
    const closeModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="bg-black min-h-screen p-4 text-white">
            <h1 className="text-4xl font-bold text-center mb-6">Hulu Clone</h1>

            {/* Search Bar */}
            <div className="mb-6 flex justify-center">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="p-2 rounded-lg w-1/2"
                />
            </div>

            {/* Movie Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMovies.map((movie) => (
                    <div 
                        key={movie.id} 
                        className="bg-gray-900 p-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        onClick={() => openModal(movie)}
                    >
                        <img
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h2 className="text-lg font-semibold text-center mt-2">{movie.title}</h2>
                    </div>
                ))}
            </div>

            {/* Movie Modal */}
            {selectedMovie && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg w-3/4 md:w-1/2">
                        <h2 className="text-2xl font-semibold">{selectedMovie.title}</h2>
                        <img
                            src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`}
                            alt={selectedMovie.title}
                            className="w-full h-96 object-cover rounded-lg my-4"
                        />
                        <p>{selectedMovie.overview}</p>
                        <button 
                            onClick={closeModal} 
                            className="mt-4 bg-red-500 text-white p-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HuluClone;
