import Phaser from 'phaser';
import { config } from '../../config';

export default class MagnetEffect extends Phaser.Graphics {
  constructor(game) {
    super(game, 0, 0);

    this.waves = [];

    this.waveGenerator = this.game.time.create();
    this.waveGenerator.loop(900, this.addWave, this);

    this.alpha = 0;
  }

  update() {
    this.draw();
  }

  draw() {
    this.clear();

    for (let i = 0; i < this.waves.length; i++) {
      const wave = this.waves[i];

      if (Date.now() - wave.startTime > 2000) {
        this.waves.splice(i, 1);
      } else {
        this.lineStyle(wave.width, 0xff8000, wave.alpha);
        this.drawCircle(0, 0, wave.radius);
      }
    }
  }

  show() {
    this.fade(1);

    if (!this.waveGenerator.paused && !this.waveGenerator.running) {
      this.waveGenerator.start();
    } else {
      this.waveGenerator.resume();
    }
  }

  hide() {
    this.fade(0);

    this.waveGenerator.pause();
  }

  fade(alpha) {
    const animationTime = 150;

    this.game.add
      .tween(this)
      .to(
        {
          alpha
        },
        animationTime
      )
      .start();
  }

  addWave() {
    const wave = {
      radius: 0,
      width: 15,
      alpha: 0.8,
      startTime: Date.now()
    };

    this.game.add
      .tween(wave)
      .to(
        {
          width: 1,
          radius: config.magnetDistace,
          alpha: 0
        },
        750
      )
      .start();

    this.waves.push(wave);
  }
}
