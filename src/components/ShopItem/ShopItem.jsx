import React, { Component } from 'react';
import { string, number, func, shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import coinGoldImg from './images/coin-gold.png';
import styles from './styles';

class ShopItem extends Component {
  static propTypes = {
    img: string,
    id: string.isRequired,
    onBuy: func.isRequired,
    price: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    classes: shape({}).isRequired
  };

  static defaultProps = {
    img: undefined
  };

  handleBuy = () => {
    const { onBuy, id } = this.props;

    onBuy(id);
  };

  render() {
    const { classes, title, description, img, price } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={img} />
        <CardContent>
          <Typography gutterBottom variant="title">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={this.handleBuy}>
            Buy
          </Button>
          <div className={classes.price}>
            <Typography gutterBottom variant="subheading">
              {price}
            </Typography>
            <img className={classes.coin} src={coinGoldImg} alt="coin" />
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ShopItem);
