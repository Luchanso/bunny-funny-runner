/* eslint-disable */

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import store, { history } from './store';
import SceneSwitcher from './containers/SceneSwitcher';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" component={ SceneSwitcher } />
            <Route exact path="/:platform/:scene" component={ SceneSwitcher } />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
