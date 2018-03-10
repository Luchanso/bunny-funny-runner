import Phaser from 'phaser';
import Button from '../../common/gui/button';

export default class LoseModal extends Phaser.Sprite {
  constructor(game, distance, coins) {
    super(game, 0, 0);

    this.data = {
      distance,
      coins,
      rank: 'Loading...'
    };
    this.fixedToCamera = true;

    this.createLabelInfo();
    this.createLabelHint();
    this.createButtons();
  }

  reset(distance, coins) {
    const data = {
      distance,
      coins
    };
    this.data = data;

    this.labelDistance.setText(data.distance);
    this.labelCoins.setText(data.coins);
  }

  drawBackground() {
    const { game } = this;
    const { width, height } = game;
    const bitmap = new Phaser.BitmapData(width, height);

    const gradient = bitmap.context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#ade6ff');
    gradient.addColorStop(1, '#c6edff');

    bitmap.context.fillStyle = gradient;
    bitmap.context.fillRect(0, 0, width, height);

    const sprite = new Phaser.Sprite(game, 0, 0, bitmap);
    sprite.width = width;
    sprite.height = height;

    this.addChild(sprite);
  }

  createButtons() {
    const { game } = this;
    const btnWidth = 150;
    const btnPositionY = 400;
    const paddingCenter = 200;

    const restartBtn = new Button(
      game,
      game.width / 2 - paddingCenter,
      btnPositionY,
      'Restart',
      this.handleClickRestart,
      btnWidth
    );
    const resetBtn = new Button(
      game,
      game.width / 2,
      btnPositionY,
      'Reset',
      this.handleClickReset,
      btnWidth
    );

    // restartBtn.anchor.setTo(0.5);
    // resetBtn.anchor.setTo(0.5);

    this.addChild(restartBtn);
    this.addChild(resetBtn);
  }

  createLabelHint() {
    this.labelHint = this.createLabel(
      this.game.width / 2,
      500,
      'Press Spacebar to restart'
    );
  }

  createLabelInfo() {
    const { coins, distance, rank } = this.data;
    this.labelCoins = this.createLabel(
      this.game.width / 2,
      200,
      `Coins: ${coins}\nDistance: ${distance} m.\nRank: ${rank}`
    );
  }

  createLabel(x, y, text) {
    const { game } = this;
    const style = {
      font: '41px Open Sans',
      fill: 'white',
      align: 'center'
    };

    const labelDistance = new Phaser.Text(game, x, y, text, style);
    labelDistance.setShadow(0, 2, 'rgba(0, 0, 0, 0.2)', 6);
    labelDistance.anchor.setTo(0.5);

    return this.addChild(labelDistance);
  }

  handleClickReset() {}

  handleClickRestart() {}
}
