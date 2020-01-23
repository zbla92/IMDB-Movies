import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk';

import movieReducer from '../redux/reducers/moviesReducer';
import uiReducer from '../redux/reducers/uiReducer'

const initialState = {
    UI: {
        loading: true,
        currentPage: 1,
    }
}

const middleware = [thunk];

const reducers = combineReducers({
    UI: uiReducer,
    data: movieReducer
})

const store = createStore(reducers, initialState, applyMiddleware(...middleware))

export default store