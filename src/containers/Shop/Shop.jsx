import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import { config } from '../../config';

const styles = {
  container: {
    backgroundColor: `#${config.backgroundColor.toString(16)}`,
    width: '100%',
    height: '100%'
  }
};

// eslint-disable-next-line
class Shop extends React.Component {
  static propTypes = {
    classes: shape({}).isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="display3">My Awesome Shop</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Shop);
