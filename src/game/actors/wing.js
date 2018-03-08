class Wing extends Phaser.Sprite {
  constructor(game, name) {
    super(game, 0, 0, Engine.spritesheet, name);

    this.width *= Engine.scaleRatio;
    this.height *= Engine.scaleRatio;

    this.tint = 0xffdb8a;
  }

  rotatePositive() {
    const min = Math.PI / 4;
    const max = -Math.PI / 80;

    this.rotate(min, max);
  }

  rotateNegative() {
    const min = -Math.PI / 4;
    const max = Math.PI / 80;

    this.rotate(min, max);
  }

  rotate(min, max) {
    this.game.add
      .tween(this)
      .to(
        {
          rotation: min,
        },
        200,
      )
      .to(
        {
          rotation: max,
        },
        200,
      )
      .loop(-1)
      .start();
  }
}

Engine.Wing = Wing;
