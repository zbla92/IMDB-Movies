import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import movieReducer from '../redux/reducers/moviesReducer';
import uiReducer from '../redux/reducers/uiReducer';

const initialState = {
  UI: {
    loading: true
  }
};

const middleware = [thunk];

const reducers = combineReducers({
  UI: uiReducer,
  data: movieReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducers,
//   initialState,
//   composeEnhancers(applyMiddleware(...middleware))
// );

const makeStore = initialState => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export default makeStore;
