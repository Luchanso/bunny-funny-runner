import React from 'react';
import { string, shape } from 'prop-types';
import initGame from '../../game/index';
import { GAME_SCENES } from '../../model/scene';

export default class GameScene extends React.Component {
  static propTypes = {
    scene: string
  };

  static defaultProps = {
    scene: GAME_SCENES.BOOT
  };

  static contextTypes = {
    store: shape({})
  };

  componentDidMount() {
    initGame(this.props.scene, this.context.store);
  }

  render() {
    return <div id="game" />;
  }
}
