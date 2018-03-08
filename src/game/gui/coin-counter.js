class CoinCounter extends Phaser.Text {
  constructor(game, x, y) {
    const style = {
      fill: '#00B8D4', // 2196F3
      font: '23px Open Sans'
    };

    super(game, x, y, '0', style);

    this.fixedToCamera = true;
    this.score = Engine.Service.get('Score');
    this.score.updateCoins.add(this.updateCoinsCount, this);

    this.createIcon();
  }

  createIcon() {
    let x = this.width * 2;
    let y = 1;

    let coin = this.game.make.sprite(x, y, Engine.spritesheet, 'coin_gold.png');

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

Engine.CoinCounter = CoinCounter;
