import React from 'react';
import { shape } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import ShopItem from '../../components/ShopItem';
// import { config } from '../../config';

const styles = {
  container: {
    width: '100%',
    height: '100%'
  }
};

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quisquam? Eos praesentium perferendis hic eius optio impedit expedita architecto nobis corrupti quod, blanditiis at ducimus ipsam in natus iure eaque!';

const items = [
  {
    id: '123',
    title: 'Title',
    price: 99000,
    description: LOREM,
    img:
      'https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=1498&q=80'
  },
  {
    id: '1234',
    title: 'Unicorne Item 2',
    price: 232000,
    description: LOREM,
    img:
      'https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2cb8ee4de153b83ed42e3ab1943e6e5&auto=format&fit=crop&w=1193&q=80'
  }
];

class Shop extends React.Component {
  static propTypes = {
    classes: shape({}).isRequired
  };

  handleBuy = id => {
    console.log(id);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="display3">
          Awesome Shop{' '}
          <span role="img" aria-label="unicorne">
            🦄
          </span>
        </Typography>
        {items.map(item => (
          <ShopItem
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            onBuy={this.handleBuy}
            img={item.img}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Shop);
