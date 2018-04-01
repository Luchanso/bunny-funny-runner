import React, { Fragment, Component } from 'react';
import { string } from 'prop-types';
import CssBaseline from 'material-ui/CssBaseline';
import { CircularProgress } from 'material-ui/Progress';

import { REACT_SCENES } from '../../model/scene';

const SCENE_MAP = {
  [REACT_SCENES.SHOP]: 'Shop'
};

export default class ReactScene extends Component {
  static propTypes = {
    scene: string.isRequired
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

    return (
      <Fragment>
        <CssBaseline />
        {isLoading && <CircularProgress />}
        {!isLoading && <SceneContainer />}
      </Fragment>
    );
  }
}
