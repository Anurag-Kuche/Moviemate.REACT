import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/movie";
const api_key = "2ec0d66f5bdf1dd12eefa0723f149cf";

const GlobalApi = {
    getPopularMovies: () => axios.get(`${baseURL}/popular?api_key=${api_key}`)
};

export default GlobalApi;
