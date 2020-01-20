import { LOADING_UI, STOP_LOADING_UI } from '../actions/types';

const initialState = {
    loading: false,
    errors: false
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
    }
}