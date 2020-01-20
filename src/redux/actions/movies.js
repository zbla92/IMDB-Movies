import { FETCH_POPULAR_MOVIES, FETCH_MOVIES_BY_KEYWORD, LOADING_UI, STOP_LOADING_UI } from './types';
import moviesApi from '../../apis/movies-api'

const fetchPopularMovies = (page, filter) => async dispatch => {
    const movies = await moviesApi.fetchPopularMovies(page, filter);
    dispatch({ type: LOADING_UI })
    dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: movies.data
    });
    dispatch({ type: STOP_LOADING_UI })
}

const fetchMoviesByKeyword = (query) => async dispatch => {
    const movies = await moviesApi.fetchMoviesByKeyword(query);

    dispatch({
        type: FETCH_MOVIES_BY_KEYWORD,
        payload: movies.data
    })
}

export {
    fetchPopularMovies,
    fetchMoviesByKeyword
};