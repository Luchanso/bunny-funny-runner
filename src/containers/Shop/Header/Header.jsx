import React from 'react';
import { string, shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import UnicorneEmoji from '../UnicorneEmoji';
import styles from './styles';

const Header = ({ classes }) => (
  <Typography variant="display3" className={classes.header}>
    Awesome Shop <UnicorneEmoji />
  </Typography>
);

Header.propTypes = {
  classes: shape({
    header: string.isRequired
  }).isRequired
};

export default withStyles(styles)(Header);
