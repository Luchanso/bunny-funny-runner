class Wings extends Phaser.Group {
  constructor(game, bunny) {
    const wingsOffset = 35;

    super(game);

    this.data = {
      visible: false,
    };
    this.alpha = 0;
    this.bunny = bunny;

    this.leftWing = new Engine.Wing(this.game, 'wing_left.png');
    this.rightWing = new Engine.Wing(this.game, 'wing_right.png');

    this.leftWing.x = this.bunny.width / 2 - wingsOffset;
    this.rightWing.x = this.bunny.width / 2 + wingsOffset;
    this.rightWing.y = this.leftWing.y = this.bunny.height / 2;

    this.leftWing.anchor.setTo(1, 0.611);
    this.rightWing.anchor.setTo(0, 0.611);

    this.add(this.leftWing);
    this.add(this.rightWing);

    this.leftWing.rotateNegative();
    this.rightWing.rotatePositive();

    this.bunny.bringToTop();
  }

  update() {
    if (!this.data.visible) return;

    const offsetX = 7;

    this.x = this.bunny.x + offsetX;
    this.y = this.bunny.y;
  }

  show() {
    this.fade(1);

    this.data.visible = true;
  }

  hide() {
    this.fade(0);

    this.data.visible = false;
  }

  fade(alpha) {
    const time = 100;

    this.game.add
      .tween(this)
      .to(
        {
          alpha,
        },
        time,
      )
      .start();
  }
}

Engine.Wings = Wings;
