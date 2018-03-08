class Shop extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    this.game.stage.backgroundColor = 0xbf360c;

    this.createHeadLabel();
  }

  createHeadLabel() {
    const margin = 100;
    const animation = 400;
    const text = 'BUY MORE COINS 💰';
    const style = {
      font: '41px Open Sans',
      fill: 'white',
    };

    this.headLabel = this.add.text(this.game.width / 2, margin, text, style);
    this.headLabel.anchor.setTo(0.5);
    this.headLabel.alpha = 0;
    this.add
      .tween(this.headLabel)
      .to(
        {
          alpha: 1,
        },
        animation,
      )
      .start();
  }
}

Engine.Shop = Shop;
