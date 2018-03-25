import React, { Fragment } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography';

// eslint-disable-next-line
export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Typography variant="display3">My Awesome Shop</Typography>
      </Fragment>
    );
  }
}
