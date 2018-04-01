import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import GameScene from '../GameScene';
import ReactScene from '../ReactScene';

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      component={() => <Redirect from="/" to="/web/boot" />}
    />
    <Route
      exact
      path="/vk"
      component={() => <Redirect from="/vk" to="/vk/boot" />}
    />
    <Route path="/:platform/boot" component={GameScene} />
    <Route path="/:platform/menu" component={GameScene} />
    <Route path="/:platform/loader" component={GameScene} />
    <Route path="/:platform/game" component={GameScene} />
    <Route path="/:platform/shop">
      <ReactScene scene="shop" />
    </Route>
  </Switch>
);
