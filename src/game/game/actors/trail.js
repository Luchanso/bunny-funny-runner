import Phaser from 'phaser';

export default class Trail extends Phaser.Particles.Arcade.Emitter {
  constructor(game, follow) {
    const maxParticles = 20;

    super(game, 0, 0, maxParticles);

    if (process.env.OPTIMIZATION) return;

    this.makeParticles('particles', 0, maxParticles, true);
    this.lifespan = 500;
    this.setAlpha(1, 0, this.lifespan);
    this.bounce.setTo(1);

    this.particlesEmit = 2;
    this.delayEmit = 50;
    this.follow = follow;

    this.timerEmmiting = this.game.time.create();
    this.timerEmmiting.loop(this.delayEmit, this.emit, this);
    this.timerEmmiting.start();
  }

  emit() {
    for (let i = 0; i < this.particlesEmit; i++) {
      const particleFrame = this.game.rnd.between(0, 4);

      this.emitParticle(
        this.follow.x,
        this.follow.y + this.follow.height / 1.1,
        'particles',
        particleFrame
      );
    }
  }

  stopEmitt() {
    if (process.env.OPTIMIZATION) return;
    this.timerEmmiting.pause();
  }

  startEmitt() {
    if (process.env.OPTIMIZATION) return;
    this.timerEmmiting.resume();
  }
}
