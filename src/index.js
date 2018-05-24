import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from '../app/containers/HomeContainer';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// // Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import createHistory from 'history/createBrowserHistory';
import store from './store';
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={HomeContainer} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)