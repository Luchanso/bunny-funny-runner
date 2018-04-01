import Phaser from 'phaser';
import { GAME_SCENES } from '../../model/scene';

export default class Boot extends Phaser.State {
  create() {
    this.game.stage.disableVisibilityChange = true;

    this.state.start(GAME_SCENES.LOADER);
  }
}
