import { FETCH_MOVIES } from './types';
import moviesApi from '../apis/movies-api';

const fetchMovies = (page, filter) => async dispatch => {
    const movies = await moviesApi.fetchMovies(page, filter);

    dispatch({
        type: FETCH_MOVIES,
        payload: movies.data
    });
}

export {
    fetchMovies
};