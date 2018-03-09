import Phaser from 'phaser';
import { config } from '../../config';

export default class Enemy extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, config.spritesheet, name);

    this.game.physics.arcade.enable([this]);
    this.body.immovable = true;

    this.autoCull = true;

    this.width *= config.scaleRatio;
    this.height *= config.scaleRatio;
  }

  die() {}
}
