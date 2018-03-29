import Phaser from 'phaser';
import Enemy from './enemy';
import { config } from '../../config';

export default class Cloud extends Enemy {
  constructor(game, x, y) {
    super(game, x, y, 'cloud.png');

    this.tint = 0xaaaaaa;

    this.addAnimation();
    this.tween = this.addTween();
  }

  update() {}

  addTween() {
    const R = this.game.rnd.between(50, 200);
    const time = this.game.rnd.between(4000, 8000);

    this.data.x = this.x;
    this.data.y = this.y;
    this.data.rotation = 0;

    const tween = this.game.add
      .tween(this.data)
      .to(
        {
          rotation: Phaser.Math.PI2
        },
        time
      )
      .loop(-1)
      .start();

    tween.onUpdateCallback(() => {
      this.x = this.data.x + R * Math.cos(this.data.rotation);
      this.y = this.data.y + R * Math.sin(this.data.rotation);
    }, this);

    return tween;
  }

  addAnimation() {
    const lifespan = 2000;
    const burstInterval = 300;
    const maxParticles = Math.ceil(lifespan / burstInterval);

    this.bolt = this.game.add.emitter(0, 0, maxParticles);

    this.bolt.makeParticles(
      config.spritesheets,
      ['lighting_yellow.png', 'lighting_blue.png'],
      maxParticles
    );
    this.bolt.lifespan = lifespan;
    this.bolt.gravity = 0;
    this.bolt.setAlpha(1, 0, lifespan);
    this.bolt.setScale(0, 1, 0, 1, lifespan);
    this.bolt.setRotation(0, 0);
    this.bolt.setYSpeed(100, 125);
    this.bolt.setXSpeed(-50, 50);

    this.bolt.timer = this.game.time.create();
    this.bolt.timer.loop(burstInterval, this.burst, this);
    this.bolt.timer.start();
  }

  burst() {
    this.bolt.emitParticle(
      this.x + this.width / 2,
      this.y + this.height,
      config.spritesheet,
      this.game.rnd.pick(['lighting_yellow.png', 'lighting_blue.png'])
    );

    this.bolt.forEachExists(item => {
      // need for perfomance
      // eslint-disable-next-line
      item.tint = 0x0000ff;
    }, this);
  }

  reset(x, y) {
    super.reset(x, y);

    this.tween = this.addTween();
  }

  kill() {
    this.game.tweens.removeFrom(this.data);
    this.game.tweens.removeFrom(this);

    super.kill();
  }
}
