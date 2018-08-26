import Phaser from 'phaser';
import Config from '../../../config';

export default class Background extends Phaser.GameObjects.TileSprite {
  constructor(scene, x, y, name, speed, autoScroll = false) {
    super(scene, x, y, 1024, 1024, name);

    this.tileScaleX = Config.height / this.height;
    this.tileScaleY = Config.height / this.height;
    this.setOrigin(0);
    // https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.TileSprite.html#scrollFactorX__anchor
    // like this.fixedToCamera = true;
    this.setScrollFactor(0);

    this.data = {
      autoScroll,
      speed,
      isStoped: true
    };

    if (this.data.autoScroll) {
      this.tween = this.scene.add.tween({
        targets: this,
        duration: 50000,
        tilePositionX: -1000,
        repeat: -1,
        easy: 'Sine.easeInOut'
      });
    }
  }

  update() {
    // this.tilePositionX = this.camera.x * this.data.speed;
  }
}
