import { createStore, combineReducers, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from '../app/reducers/HomeReducer';

// Create browser history
const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

export default store;