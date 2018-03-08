import Phaser from 'phaser';

export default class Blood extends Phaser.Particles.Arcade.Emitter {
  constructor(game, follow) {
    const particles = 50;
    const lifespan = 5000;
    const speed = 1000;

    super(game, 0, 0, particles);

    this.follow = follow;

    this.makeParticles('particles', [0, 1, 2, 3, 4], particles, true);
    this.bounce.setTo(1);
    this.gravity = 0;
    this.minParticleSpeed.setTo(-speed, -speed);
    this.maxParticleSpeed.setTo(speed, speed);
    this.setAlpha(1, 0, lifespan);
  }

  playAnimation() {
    const explode = true;
    const lifespan = 5000;
    const frequency = null;
    const quantity = 200;

    this.x = this.follow.x + this.follow.width / 2;
    this.y = this.follow.y + this.follow.height / 2;

    this.start(explode, lifespan, frequency, quantity);
  }
}
