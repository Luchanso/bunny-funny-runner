import Phaser from 'phaser';
import { config } from '../config';

export default class Shop extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = config.backgroundColor;

    this.createHeadLabel();
  }

  createHeadLabel() {
    const margin = 100;
    const animation = 400;
    const text = 'Unicorne Shop 🦄';
    const style = {
      font: '41px Open Sans',
      fill: 'white'
    };

    this.headLabel = this.add.text(this.game.width / 2, margin, text, style);
    this.headLabel.anchor.setTo(0.5);
    this.headLabel.alpha = 0;
    this.add
      .tween(this.headLabel)
      .to(
        {
          alpha: 1
        },
        animation
      )
      .start();
  }
}
