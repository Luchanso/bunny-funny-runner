import React from 'react';
import { string } from 'prop-types';
import initGame, { SCENE } from '../../game/init';

export default class GameScene extends React.Component {
  static propTypes = {
    scene: string
  };

  static defaultProps = {
    scene: SCENE.BOOT
  };

  componentDidMount() {
    initGame(this.props.scene);
  }

  render() {
    return (
      <div id="game" />
    );
  }
}
