import Phaser from 'phaser';
import Service from '../../service';
import { config } from '../../config';

export default class CoinCounter extends Phaser.Text {
  constructor(game, x, y) {
    const style = {
      fill: '#00B8D4', // 2196F3
      font: '23px Open Sans'
    };

    super(game, x, y, '0', style);

    this.fixedToCamera = true;
    this.score = Service.get('Score');
    this.score.updateCoins.add(this.updateCoinsCount, this);

    this.createIcon();
  }

  createIcon() {
    const x = this.width * 2;
    const y = 1;

    const coin = this.game.make.sprite(
      x,
      y,
      config.spritesheet,
      'coin_gold.png'
    );

    coin.anchor.setTo(1, 0);

    coin.width = this.fontSize;
    coin.height = this.fontSize;

    this.addChild(coin);

    const offsetX = this.cameraOffset.x - coin.width;
    const offsetY = this.cameraOffset.y;

    this.cameraOffset.setTo(offsetX, offsetY);
  }

  updateCoinsCount() {
    this.text = `${this.score.coins}`;
  }
}
