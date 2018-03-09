import Phaser from 'phaser';
import { config } from '../../config';

export default class Spike extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, config.spritesheet, 'spikes_top.png');

    this.autoCull = true;
    this.anchor.setTo(0, 1);

    this.width *= config.scaleRatio;
    this.height *= config.scaleRatio;

    this.tint = 0x777777;
  }
}
