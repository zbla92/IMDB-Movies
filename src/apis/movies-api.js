import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/',
    API_KEY = '6b7007b9ce50c7ac58bb264563355724';

const fetchPopularMovies = async (page = 1, filter = 'popular') => {
    try {
        const { data } = await axios.get(`${API_URL + 'movie/'}${filter}`, {
            params: {
                api_key: API_KEY,
                page
            }
        });
        return {
            data: data.results,
            numOfPages: data.total_pages
        };
    } catch (err) {
        console.log(`err}`)
    }
};

const fetchMoviesByKeyword = async (query) => {
    try {
        const { data } = await axios.get(`${API_URL}search/movie?`, {
            params: {
                api_key: API_KEY,
                query: query
            }
        });
        console.log(data.total_pages)
        return {
            data: data.results,
            numOfPages: data.total_pages
        };
    } catch (err) {
        console.log(`DANG ${err}`)
    }
};

export default {
    fetchPopularMovies,
    fetchMoviesByKeyword
};