import Phaser from 'phaser';

import imgReplay from '../common/assets/icons/replay.png';
import imgPlay from '../common/assets/icons/play.png';
import { GAME_SCENES } from '../../model/scene';

export default class Loader extends Phaser.State {
  preload() {
    this.load.image('replay', imgReplay);
    this.load.image('play', imgPlay);
  }

  create() {
    this.state.start(GAME_SCENES.MENU);
  }

  addProgressLabel() {
    const style = {
      font: '41px Open Sans',
      fill: '#00E676'
    };

    this.progressLabel = this.add.text(
      this.game.world.centerX,
      this.game.world.centerY,
      'Loading: 0% (0/0)',
      style
    );
    this.progressLabel.anchor.setTo(0.5);
  }

  refreshProgress(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progressLabel.text = `Loading ${progress}% (${totalLoaded}/${totalFiles})`;
  }
}
