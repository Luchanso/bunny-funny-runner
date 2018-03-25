import React, { Fragment } from 'react';
import { string } from 'prop-types';

import { REACT_SCENES } from '../../model/scene';

const SCENE_MAP = {
  [REACT_SCENES.SHOP]: 'Shop'
};

export default class ReactScene extends React.Component {
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

    // TODO: Проверить на уязвимости XSS
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
        {/* TODO: Написать лоадер для сцены */}
        {isLoading && <h1>Loading</h1>}
        {!isLoading && <SceneContainer />}
      </Fragment>
    );
  }
}
