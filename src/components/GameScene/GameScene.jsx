import React, { Fragment } from 'react';
import { string, shape } from 'prop-types';
import { withRouter } from 'react-router';

import initGame from '../../game/index';
import { GAME_SCENES } from '../../model/scene';
import { config } from '../../config';
import VkAd from '../VkAd';

class GameScene extends React.Component {
  static propTypes = {
    scene: string,
    match: shape({
      params: shape({
        platform: string.isRequired
      }).isRequired
    }).isRequired
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
    const { match: { params: { platform } } } = this.props;
    const { adId, adWidth, adHeight } = config;

    return (
      <Fragment>
        <div id="game" />
        {platform && <VkAd id={adId} width={adWidth} height={adHeight} />}
      </Fragment>
    );
  }
}

export default withRouter(GameScene);
