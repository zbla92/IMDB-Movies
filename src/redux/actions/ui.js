import { CLEAR_ERRORS, CHANGE_PAGE, FILTER_BY } from './types';

const clearErrors = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
const setCurrentPage = page => dispatch => {
    dispatch({
        type: CHANGE_PAGE,
        payload: page
    })
    window.history.pushState(null, null, `/gridView/${page}`)
}
const setFilters = filterBy => dispatch => {
    dispatch({
        type: FILTER_BY,
        payload: filterBy
    })
}
export {
    clearErrors,
    setCurrentPage,
    setFilters
}