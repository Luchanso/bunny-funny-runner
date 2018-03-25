import React from 'react';
import { string } from 'prop-types';
import initGame from '../../game/index';
import { GAME_SCENES } from '../../model/scene';

export default class GameScene extends React.Component {
  static propTypes = {
    scene: string
  };

  static defaultProps = {
    scene: GAME_SCENES.BOOT
  };

  componentDidMount() {
    initGame(this.props.scene);
  }

  render() {
    return <div id="game" />;
  }
}
