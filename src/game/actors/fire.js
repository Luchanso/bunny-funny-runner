class Fire extends Phaser.Sprite {
  constructor(game) {
    super(game, 0, 0, Engine.spritesheet, 'flame.png');

    this.width /= Engine.scaleRatio;
    this.height /= Engine.scaleRatio;

    this.addAnimation();
  }

  hide() {
    this.fade(0);
  }

  show() {
    this.fade(1);
  }

  fade(alpha) {
    const animation = 100;

    this.game.add
      .tween(this)
      .to(
        {
          alpha,
        },
        animation,
      )
      .start();
  }

  addAnimation() {
    const animation = 100;

    this.game.add
      .tween(this)
      .to(
        {
          width: this.width * 0.75,
          height: this.height * 0.9,
        },
        animation,
      )
      .to(
        {
          width: this.width * 1.23,
          height: this.height * 1.1,
        },
        animation,
      )
      .to(
        {
          width: this.width,
          height: this.height,
        },
        animation,
      )
      .loop(-1)
      .start();
  }
}

Engine.Fire = Fire;
