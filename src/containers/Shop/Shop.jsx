import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import ChevronRight from 'material-ui-icons/ChevronRight';

import ShopItemList from './ShopItemList';
import UnicorneEmoji from './UnicorneEmoji';
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
          <IconButton
            className={classes.navigationIcon}
            onClick={this.handlePrevPage}
          >
            <ChevronLeft className={classes.navigationIcon} />
          </IconButton>
          <div className={classes.scroll}>
            <ShopItemList
              style={{ marginLeft: -OFFSET_DISTANCE * offset }}
              className={classes.items}
              onBuy={this.handleBuy}
              items={items}
            />
          </div>
          <IconButton
            className={classes.navigationIcon}
            onClick={this.handleNextPage}
          >
            <ChevronRight className={classes.navigationIcon} />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Shop);
