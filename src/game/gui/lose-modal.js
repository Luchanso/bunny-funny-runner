import Phaser from 'phaser';

const formatLabelScoreText = (distance, coins, rank) =>
  `Coins: ${coins}\nDistance: ${distance} m.\nRank: ${rank}`;

const CENTERAL_PADDING = 100;

export default class LoseModal extends Phaser.Sprite {
  constructor(game, distance, coins, onRestart = () => {}) {
    super(game, 0, 0);

    this.data = {
      distance,
      coins,
      rank: 'Loading...'
    };
    this.fixedToCamera = true;
    this.onRestart = onRestart;

    this.drawBackground();
    this.createLabelInfo();
    this.createLabelHint();
    this.createButtons();
  }

  reset(distance, coins, rank) {
    const data = {
      distance,
      coins,
      rank
    };
    this.data = data;

    this.labelScore.setText(formatLabelScoreText(distance, coins, rank));
  }

  drawBackground() {
    const { game } = this;
    const { width, height } = game;
    const bitmap = new Phaser.BitmapData(width, height);

    bitmap.context.fillStyle = 'rgba(0, 0, 0, 0.6)';
    bitmap.context.fillRect(0, 0, width, height);

    const sprite = new Phaser.Sprite(game, 0, 0, bitmap);
    sprite.width = width;
    sprite.height = height;

    this.addChild(sprite);
  }

  createButtons() {
    const { game } = this;
    const btnPositionY = 375;

    const restartBtn = new Phaser.Button(
      game,
      game.width / 2 + CENTERAL_PADDING,
      btnPositionY,
      'play',
      this.onRestart
    );

    const shopBtn = new Phaser.Button(
      game,
      game.width / 2 - CENTERAL_PADDING,
      btnPositionY,
      'shop',
      this.onOpenShop
    );

    restartBtn.anchor.setTo(0.5);
    shopBtn.anchor.setTo(0.5);

    this.addChild(restartBtn);
    this.addChild(shopBtn);
  }

  createLabelHint() {
    this.labelHint = this.createLabel(
      this.game.width / 2,
      500,
      'Or press enter to restart'
    );
  }

  createLabelInfo() {
    const { coins, distance, rank } = this.data;
    this.labelScore = this.createLabel(
      this.game.width / 2,
      200,
      formatLabelScoreText(distance, coins, rank)
    );
  }

  createLabel(x, y, text) {
    const { game } = this;
    const style = {
      font: '41px Open Sans',
      fill: 'white',
      align: 'center'
    };

    const label = new Phaser.Text(game, x, y, text, style);
    label.setShadow(0, 2, 'rgba(0, 0, 0, 0.2)', 6);
    label.anchor.setTo(0.5);

    return this.addChild(label);
  }

  onOpenShop = () => {
    this.game.state.start('Shop');
  };
}
