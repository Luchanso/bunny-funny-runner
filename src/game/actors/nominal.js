import Phaser from 'phaser';

export default class Nominal extends Phaser.Text {
  constructor(game, x, y, nominal) {
    super(game, x, y, `+${nominal}`, Nominal.getStyle(nominal));

    this.anchor.setTo(0.5);

    this.autoCull = true;

    this.addAnimation();
  }

  static getStyle(nominal) {
    let color;

    // TODO: remove this magic (1, 4, 8)
    switch (nominal) {
      case 8:
        color = 'orange';
        break;
      case 4:
        color = 'silver';
        break;
      case 1:
      default:
        color = '#CD7F32';
        break;
    }

    const style = {
      font: `${25 + nominal * 5.5}px Open Sans`,
      fill: color
    };

    return style;
  }

  addAnimation() {
    const animationTime = 700;
    const animationDistance = 50;

    this.alpha = 1;

    this.tween = this.game.add
      .tween(this)
      .to(
        {
          alpha: 0,
          y: this.y - animationDistance
        },
        animationTime
      )
      .start();

    this.tween.onComplete.add(this.kill, this);
  }

  reset(x, y, nominal) {
    super.reset(x, y);

    const style = Nominal.getStyle(nominal);

    this.text = `+${nominal}`;
    this.fill = style.fill;

    this.addAnimation();
  }
}
