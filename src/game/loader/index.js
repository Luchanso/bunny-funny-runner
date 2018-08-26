import Phaser from 'phaser';

import imgReplay from '../common/assets/icons/replay.png';
import imgPlay from '../common/assets/icons/play.png';
import { GAME_SCENES } from '../../model/scene';

export default class Loader extends Phaser.Scene {
  constructor() {
    super(GAME_SCENES.LOADER);
  }

  preload() {
    this.load.image('replay', imgReplay);
    this.load.image('play', imgPlay);
  }

  create() {
    this.scene.start(GAME_SCENES.MENU);
  }
}
