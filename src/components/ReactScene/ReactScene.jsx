import React, { Fragment } from 'react';
import { string, shape } from 'prop-types';
import CssBaseline from 'material-ui/CssBaseline';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

import { REACT_SCENES } from '../../model/scene';
import { config } from '../../config';

const SCENE_MAP = {
  [REACT_SCENES.SHOP]: 'Shop'
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: config.width,
    height: config.height,
    paddingTop: `${(window.screen.height - config.height) / 2}px`
  }
};

class ReactScene extends React.Component {
  static propTypes = {
    scene: string.isRequired,
    classes: shape({
      container: string.isRequired
    }).isRequired
  };

  state = {
    isLoading: true
  };

  componentDidMount() {
    this.initContainer();
  }

  SceneContainer = null;

  async initContainer() {
    const { scene } = this.props;
    const ContrainerName = SCENE_MAP[scene];

    this.SceneContainer = (await import(`../../containers/${ContrainerName}`)).default;
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { SceneContainer, state } = this;
    const { isLoading } = state;
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.container}>
          {isLoading && <CircularProgress />}
          {!isLoading && <SceneContainer />}
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ReactScene);
