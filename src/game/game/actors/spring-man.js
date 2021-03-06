import Enemy from './enemy';

export default class SpringMan extends Enemy {
  constructor(game, x, y) {
    super(game, x, y, 'springMan_stand.png');

    this.shakeTween = this.addShake();
  }

  addShake() {
    const amplitude = 5;
    const time = 15;

    return this.game.add
      .tween(this)
      .to(
        {
          x: this.x + amplitude
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
          x: this.x - amplitude
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

  reset(x, y) {
    super.reset(x, y);

    this.addShake();
  }

  kill() {
    this.game.tweens.removeFrom(this);

    super.kill();
  }
}
