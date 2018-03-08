class FlyMan extends Engine.Enemy {
  constructor(game, x, y) {
    super(game, x, y, 'flyMan_fly.png');

    this.verticaleTween = this.addVerticaleMove();
    this.addEmitter();
  }

  addEmitter() {
    const maxSmoke = 20;
    const burstInterval = 100;

    this.smoke = this.game.add.emitter(0, 0, maxSmoke);
    this.smoke.makeParticles(Engine.spritesheet, ['smoke.png'], maxSmoke);
    this.smoke.gravity = 0;
    this.smoke.setAlpha(1, 0, 2000);
    this.smoke.setScale(0, Engine.scaleRatio, 0, Engine.scaleRatio, 2000);
    this.smoke.forEach((item) => {
      item.tint = 0x777777;
    });
    this.smoke.lifespan = 2000;
    this.smoke.setXSpeed(1, 15);
    this.smoke.setYSpeed(1, 15);

    this.smoke.timer = this.game.time.create();
    this.smoke.timer.loop(burstInterval, this.burst, this);
    this.smoke.timer.start();
  }

  burst() {
    for (let i = 0; i < 1; i++) {
      this.smoke.emitParticle(
        this.x + this.width / 2,
        this.y + this.height / 2,
        Engine.spritesheet,
        'smoke.png',
      );
    }
  }

  addVerticaleMove() {
    const distance = this.game.rnd.between(50, 125);
    const time = this.game.rnd.between(850, 1250);

    return this.game.add
      .tween(this)
      .to(
        {
          y: this.y + distance,
        },
        time,
      )
      .to(
        {
          y: this.y,
        },
        time,
      )
      .to(
        {
          y: this.y - distance,
        },
        time,
      )
      .to(
        {
          y: this.y,
        },
        time,
      )
      .loop()
      .start();
  }

  reset(x, y) {
    super.reset(x, y);

    this.addVerticaleMove();
  }

  die() {
    const impulse = 400;

    this.game.tweens.removeFrom(this);
    this.body.angularVelocity = this.game.rnd.between(100, 600);
    this.body.velocity.y = -impulse;
    this.body.gravity.setTo(200, 2000);
  }

  kill() {
    this.game.tweens.removeFrom(this);

    super.kill();
  }
}

Engine.FlyMan = FlyMan;
