import React from 'react';
import { withStyles } from 'material-ui/styles';
import { shape, arrayOf, func, string } from 'prop-types';
import classNames from 'classnames';

import ShopItem from '../../../components/ShopItem';
import styles from './styles';

const ShopItemList = ({ items, classes, onBuy, className, ...otherArgs }) => (
  <div className={classes.scroll}>
    <div className={classNames(classes.list, className)} {...otherArgs}>
      {items.map(item => <ShopItem key={item.id} onBuy={onBuy} {...item} />)}
    </div>
  </div>
);

ShopItemList.propTypes = {
  items: arrayOf(shape({})).isRequired,
  classes: shape({}).isRequired,
  onBuy: func.isRequired,
  className: string
};

ShopItemList.defaultProps = {
  className: ''
};

export default withStyles(styles)(ShopItemList);
