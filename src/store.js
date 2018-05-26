import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../app/reducers/RootReducer';

// create a logger, I need to see state during dev
const logger = createLogger({
    collapsed: true
})

// Create browser history
const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        rootReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware, reduxThunk, logger)
)

export default store;