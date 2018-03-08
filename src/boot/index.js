import Phaser from 'phaser';

export default class Boot extends Phaser.State {
  create() {
    this.game.stage.disableVisibilityChange = true;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.state.start('Loader');
  }
}
