import { CLEAR_ERRORS, FILTER_BY } from './types';

const clearErrors = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

const setFilters = filterBy => dispatch => {
    dispatch({
        type: FILTER_BY,
        payload: filterBy
    })
}
export {
    clearErrors,
    setFilters
}