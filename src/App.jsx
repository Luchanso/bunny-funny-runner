/* eslint-disable */

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect, Switch } from 'react-router';

import store, { history } from './store';
import GameScene from './components/GameScene';
import ReactScene from './components/ReactScene';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Redirect from="/" to="/web/boot" />}
              />
              <Route path="/:platform/boot" component={GameScene} />
              <Route path="/:platform/menu" component={GameScene} />
              <Route path="/:platform/loader" component={GameScene} />
              <Route path="/:platform/game" component={GameScene} />
              <Route path="/:platform/shop">
                <ReactScene scene={'shop'} />
              </Route>
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
