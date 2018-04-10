import React from 'react';
import { oneOf, shape, string, func, bool } from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import ChevronRight from 'material-ui-icons/ChevronRight';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import styles from './styles';

export const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right'
};

const NavigationButton = ({ direction, classes, onClick, isVisibility }) => (
  <IconButton
    className={classnames(classes.button, { [classes.hidden]: !isVisibility })}
    onClick={onClick}
  >
    {direction === DIRECTION.LEFT && <ChevronLeft className={classes.button} />}
    {direction === DIRECTION.RIGHT && (
      <ChevronRight className={classes.button} />
    )}
  </IconButton>
);

NavigationButton.propTypes = {
  direction: oneOf([DIRECTION.LEFT, DIRECTION.RIGHT]).isRequired,
  classes: shape({
    button: string.isRequired,
    hidden: string.isRequired
  }).isRequired,
  isVisibility: bool.isRequired,
  onClick: func.isRequired
};

export default withStyles(styles)(NavigationButton);
