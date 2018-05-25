import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { getSWCharacterInfo } from '../app/reducers/HomeReducer';
import red from '../app/reducers/HomeReducer';

console.log("what is reducers: ", getSWCharacterInfo)
console.log("what is reducers: ", red)

// create a logger, I need to see state during dev
const logger = createLogger({
    collapsed: true
})

// Create browser history
const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...getSWCharacterInfo,
        router: routerReducer
    }),
    applyMiddleware(middleware, reduxThunk, logger)
)

export default store;