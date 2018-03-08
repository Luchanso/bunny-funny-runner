import Phaser from 'phaser';
import { config } from '../../config';

export default class Wing extends Phaser.Sprite {
  constructor(game, name) {
    super(game, 0, 0, config.spritesheet, name);

    this.width *= config.scaleRatio;
    this.height *= config.scaleRatio;

    this.tint = 0xffdb8a;
  }

  rotatePositive() {
    const min = Math.PI / 4;
    const max = -Math.PI / 80;

    this.rotate(min, max);
  }

  rotateNegative() {
    const min = -Math.PI / 4;
    const max = Math.PI / 80;

    this.rotate(min, max);
  }

  rotate(min, max) {
    this.game.add
      .tween(this)
      .to(
        {
          rotation: min
        },
        200
      )
      .to(
        {
          rotation: max
        },
        200
      )
      .loop(-1)
      .start();
  }
}
