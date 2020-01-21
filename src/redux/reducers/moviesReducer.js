import { FETCH_POPULAR_MOVIES, FETCH_MOVIES_BY_KEYWORD } from '../actions/types';

const initialState = {
    movies: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case FETCH_MOVIES_BY_KEYWORD:
            return {
                ...state,
                movies: action.payload
            }
    }
}