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

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store