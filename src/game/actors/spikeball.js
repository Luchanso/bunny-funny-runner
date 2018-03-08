class SpikeBall extends Engine.Enemy {
  constructor(game, x, y) {
    super(game, x, y, 'spikeBall1.png');

    this.tint = 0x999999;

    this.addAnimation();

    this.tween = this.addHorizontalTween();
  }

  addHorizontalTween() {
    const distance = this.game.rnd.between(50, 150);
    const time = this.game.rnd.between(600, 800);

    return this.game.add
      .tween(this)
      .to(
        {
          x: this.x - distance
        },
        time
      )
      .to(
        {
          x: this.x
        },
        time
      )
      .to(
        {
          x: this.x + distance
        },
        time
      )
      .to(
        {
          x: this.x
        },
        time
      )
      .loop()
      .start();
  }

  addAnimation() {
    this.animations.add(
      'rotate',
      ['spikeBall_2.png', 'spikeBall1.png'],
      30,
      true
    );

    this.animations.play('rotate');
  }
}

Engine.SpikeBall = SpikeBall;
