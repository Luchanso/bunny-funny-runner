import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import ShopItemList from './ShopItemList';
import UnicorneEmoji from './UnicorneEmoji';
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

  render() {
    const { classes } = this.props;
    const { offset } = this.state;

    return (
      <div className={classes.container}>
        <Typography variant="display3" className={classes.header}>
          Awesome Shop <UnicorneEmoji />
        </Typography>
        <div className={classes.list}>
          <NavigationButton
            onClick={this.handlePrevPage}
            direction={DIRECTION.LEFT}
          />
          <div className={classes.scroll}>
            <ShopItemList
              style={{
                transform: `translateX(${-OFFSET_DISTANCE * offset}px)`
              }}
              className={classes.items}
              onBuy={this.handleBuy}
              items={items}
            />
          </div>
          <NavigationButton
            onClick={this.handleNextPage}
            direction={DIRECTION.RIGHT}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Shop);
