import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from '../app/containers/HomeContainer';
import PeopleContainer from '../app/containers/PeopleContainer';
import NavBarContainer from '../app/containers/NavBarContainer';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// React-Bootstrap-table2 CSS
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import createHistory from 'history/createBrowserHistory';
import store from './store';
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <NavBarContainer />
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/people" component={PeopleContainer} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)