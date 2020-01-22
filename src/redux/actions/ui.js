import { CLEAR_ERRORS, CHANGE_PAGE } from './types';

const clearErrors = () => dispatch => {
    console.log('clearing')
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

export {
    clearErrors,
    setCurrentPage
}