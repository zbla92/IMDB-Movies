import { FETCH_POPULAR_MOVIES, FETCH_MOVIES_BY_KEYWORD, LOADING_UI, STOP_LOADING_UI, SET_ERRORS } from './types';
import moviesApi from '../../apis/movies-api'

const fetchPopularMovies = (page, filter) => async dispatch => {
    console.log('fetching ', 'page: ', page, 'filter', filter)
    try {
        const movies = await moviesApi.fetchPopularMovies(page, filter);
        dispatch({ type: LOADING_UI })
        dispatch({
            type: FETCH_POPULAR_MOVIES,
            payload: movies
        });
        dispatch({ type: STOP_LOADING_UI })
    } catch (err) {
        dispatch({ type: SET_ERRORS, payload: err })
    }
}

const fetchMoviesByKeyword = (query) => async dispatch => {
    try {
        const movies = await moviesApi.fetchMoviesByKeyword(query);
        dispatch({ type: LOADING_UI })
        dispatch({
            type: FETCH_MOVIES_BY_KEYWORD,
            payload: movies
        })
        dispatch({ type: STOP_LOADING_UI })
        if (movies.data.length < 1) {
            dispatch({
                type: SET_ERRORS,
                payload: 'No match, try searching different movie.'
            })
        }
    } catch (err) {
        dispatch({ type: SET_ERRORS, payload: err })
    }
}

export {
    fetchPopularMovies,
    fetchMoviesByKeyword
};