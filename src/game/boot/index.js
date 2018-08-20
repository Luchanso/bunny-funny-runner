import Phaser from 'phaser';
import { GAME_SCENES } from '../../model/scene';

export default class Boot extends Phaser.Scene {
  constructor() {
    super(GAME_SCENES.BOOT);
  }

  create() {
    this.scene.start(GAME_SCENES.LOADER);
  }
}
