import React from 'react';
import { withStyles } from 'material-ui/styles';
import { shape, arrayOf, func } from 'prop-types';

import ShopItem from '../../../components/ShopItem';
import styles from './styles';

const ShopItemList = ({ items, classes, onBuy }) => (
  <div className={classes.list}>
    {items.map(item => (
      <ShopItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        onBuy={onBuy}
        img={item.img}
      />
    ))}
  </div>
);

ShopItemList.propTypes = {
  items: arrayOf(shape({})).isRequired,
  classes: shape({}).isRequired,
  onBuy: func.isRequired
};

export default withStyles(styles)(ShopItemList);
