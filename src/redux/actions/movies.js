import { FETCH_POPULAR_MOVIES, FETCH_MOVIES_BY_KEYWORD, LOADING_UI, STOP_LOADING_UI, SET_ERRORS } from './types';
import moviesApi from '../../apis/movies-api'

const fetchMoviesByFilter = (page, filter) => async dispatch => {
    dispatch({ type: LOADING_UI })
    try {
        const movies = await moviesApi.fetchMoviesByFilter(page, filter);
        dispatch({
            type: FETCH_POPULAR_MOVIES,
            payload: movies
        });
        dispatch({ type: STOP_LOADING_UI })
        noMoviesFetched(movies)
    } catch (err) {
        throw err;
    }
}

const fetchMoviesByKeyword = (query) => async dispatch => {
    dispatch({ type: LOADING_UI })
    try {
        const movies = await moviesApi.fetchMoviesByKeyword(query);
        dispatch({
            type: FETCH_MOVIES_BY_KEYWORD,
            payload: movies
        })
        dispatch({ type: STOP_LOADING_UI })
        noMoviesFetched(movies)
    } catch (err) {
        throw err;
    }
}

// Helper functions
const noMoviesFetched = (movies) => dispatch => {
    if (movies.data.length < 1) {
        dispatch({
            type: SET_ERRORS,
            payload: 'No match, try searching different movie.'
        })
    }
}

export {
    fetchMoviesByFilter,
    fetchMoviesByKeyword
};