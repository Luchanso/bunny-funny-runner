/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { Provider } from 'react-redux';
import { shape, string } from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { withStyles } from 'material-ui/styles';

import store, { history } from '../../store';
import { config } from '../../config';
import Switcher from './Switcher';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  },
  body: {
    width: config.width,
    height: config.height + config.adHeight
  }
};

class App extends React.Component {
  static propTypes = {
    classes: shape({
      container: string.isRequired,
      body: string.isRequired
    }).isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className={classes.container}>
            <div className={classes.body}>
              <Switcher />
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
