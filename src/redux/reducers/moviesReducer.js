import { FETCH_POPULAR_MOVIES, FETCH_MOVIES_BY_KEYWORD } from '../actions/types';

const initialState = {
    movies: [],
    numOfPages: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload.data,
                numOfPages: action.payload.numOfPages
            }
        case FETCH_MOVIES_BY_KEYWORD:
            if (action.payload.data.length > 3) {
                return {
                    ...state,
                    movies: action.payload.data,
                    numOfPages: action.payload.numOfPages
                }
            } else { return { ...state } }
    }
}