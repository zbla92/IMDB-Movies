import { LOADING_UI, STOP_LOADING_UI, SET_ERRORS, CLEAR_ERRORS, FILTER_BY } from '../actions/types';

const initialState = {
    errors: false,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: false
            }
        case FILTER_BY:
            return {
                ...state,
                filterBy: action.payload
            }
    }
}