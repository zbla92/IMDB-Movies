import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/',
    API_KEY = '6b7007b9ce50c7ac58bb264563355724';

const fetchPopularMovies = async (page = 1, filter = 'popular') => {
    const { data } = await axios.get(`${API_URL + 'movie/'}${filter}`, {
        params: {
            api_key: API_KEY,
            page
        }
    });
    return {
        data: data.results
    };
};

const fetchMoviesByKeyword = async (query) => {
    const { data } = await axios.get(`${API_URL}search/movie?`, {
        params: {
            api_key: API_KEY,
            query: query
        }
    });
    return {
        data: data.results
    };
};

export default {
    fetchPopularMovies,
    fetchMoviesByKeyword
};