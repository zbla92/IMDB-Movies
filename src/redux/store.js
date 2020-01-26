import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk';

import movieReducer from '../redux/reducers/moviesReducer';
import uiReducer from '../redux/reducers/uiReducer'

const initialState = {
    UI: {
        loading: true
    }
}

const middleware = [thunk];

const reducers = combineReducers({
    UI: uiReducer,
    data: movieReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)))


export default store