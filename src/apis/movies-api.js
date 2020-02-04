import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/',
  API_KEY = '6b7007b9ce50c7ac58bb264563355724';

const fetchMoviesByFilter = async (page = 1, filter = 'popular') => {
  try {
    const { data } = await axios.get(
      `${API_URL}${adjustUrlForFilters(filter)}`,
      {
        params: {
          api_key: API_KEY,
          page
        }
      }
    );
    return {
      data: data.results,
      numOfPages: data.total_pages
    };
  } catch (err) {
    throw new Error(err[0]);
  }
};

const fetchMoviesByKeyword = async query => {
  try {
    const { data } = await axios.get(`${API_URL}search/movie?`, {
      params: {
        api_key: API_KEY,
        query: query
      }
    });
    return {
      data: data.results,
      query: query
    };
  } catch (err) {
    throw new Error(err[0]);
  }
};

const fetchMovieDetails = async id => {
  const data = await axios.get(`${API_URL}movie/${id}`, {
    params: {
      api_key: API_KEY
    }
  });
  return {
    data: data.data
  };
};

// Helper functions
const adjustUrlForFilters = filter => {
  if (filter === 'trending') {
    return `${filter}/movie/day`;
  }
  return `movie/${filter}`;
};

export default {
  fetchMoviesByFilter,
  fetchMoviesByKeyword,
  fetchMovieDetails
};
