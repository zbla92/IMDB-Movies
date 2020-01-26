import { FETCH_POPULAR_MOVIES, FETCH_MOVIES_BY_KEYWORD, LOADING_UI, STOP_LOADING_UI, KEYWORD, FILTER_BY } from './types';
import moviesApi from '../../apis/movies-api'

// Fetching movies using given filters like popular, trending or rating
const fetchMoviesByFilter = (page, filter) => async dispatch => {
    dispatch({ type: LOADING_UI })
    try {
        const movies = await moviesApi.fetchMoviesByFilter(page, filter);
        dispatch({
            type: FETCH_POPULAR_MOVIES,
            payload: movies
        });
        dispatch({ type: STOP_LOADING_UI })
    } catch (err) {
        throw err;
    }
}

// Fetching movies using search and it will display best results for the query
const fetchMoviesByKeyword = (query) => async dispatch => {
    dispatch({ type: LOADING_UI })
    dispatch({
        type: KEYWORD,
        payload: query
    })
    try {
        const movies = await moviesApi.fetchMoviesByKeyword(query);
        if (movies.data.length < 1) {
            alert('No search results for: ' + movies.query)
            dispatch({ type: STOP_LOADING_UI })
            dispatch({
                type: FILTER_BY,
                payload: 'popular'
            })
        }
        dispatch({
            type: FETCH_MOVIES_BY_KEYWORD,
            payload: movies
        })
        dispatch({ type: STOP_LOADING_UI })

    } catch (err) {
        throw err;
    }
}

export {
    fetchMoviesByFilter,
    fetchMoviesByKeyword
};