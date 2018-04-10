import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ShopItemList from './ShopItemList';
import Header from './Header';
import NavigationButton, { DIRECTION } from './NavigationButton';
import styles from './styles';
import { items } from './expiremental-data';

// Сколько элементов магазина показывать на странице
const SHOW_ITEMS = 2;
const OFFSET_DISTANCE = 400;

class Shop extends React.Component {
  static propTypes = {
    classes: shape({}).isRequired
  };

  state = {
    offset: 0
  };

  handleBuy = id => {
    console.log(id);
  };

  handleNextPage = () => {
    this.setState(({ offset }) => ({
      offset: offset + SHOW_ITEMS
    }));
  };

  handlePrevPage = () => {
    this.setState(({ offset }) => ({
      offset: offset - SHOW_ITEMS
    }));
  };

  canScrollSelector() {
    const { offset } = this.state;
    const isCanScrollLeft = offset > 0;
    const isCanScrollRight = items.length - SHOW_ITEMS - offset > 0;

    return { isCanScrollLeft, isCanScrollRight };
  }

  render() {
    const { classes } = this.props;
    const { offset } = this.state;
    const { isCanScrollLeft, isCanScrollRight } = this.canScrollSelector();

    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.list}>
          <NavigationButton
            onClick={this.handlePrevPage}
            direction={DIRECTION.LEFT}
            isVisibility={isCanScrollLeft}
          />
          <ShopItemList
            style={{
              transform: `translateX(${-OFFSET_DISTANCE * offset}px)`
            }}
            className={classes.items}
            onBuy={this.handleBuy}
            items={items}
          />
          <NavigationButton
            onClick={this.handleNextPage}
            direction={DIRECTION.RIGHT}
            isVisibility={isCanScrollRight}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Shop);
