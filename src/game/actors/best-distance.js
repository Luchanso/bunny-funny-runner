import Service from '../../service';
import Score from '../../service/score';
import BestDistanceStripe from './best-distance-stripe';

export default class BestDistance {
  constructor(game) {
    this.score = Service.get('Score');

    if (this.score.bestDistance === 0) return;

    this.game = game;
    // TODO: Разобраться что тут происходит
    this.x = this.score.bestDistance * Score.MULTIPER_DISTANCE;

    this.createLabel();
    this.createStripe();
  }

  createLabel() {
    const style = {
      fill: 'white',
      font: '26px Open Sans'
    };
    const marginLeft = 10;
    const marginTop = 150;

    this.label = this.game.add.text(
      this.x + marginLeft,
      0,
      `Best ${this.score.bestDistance} m.`,
      style
    );
    this.label.update = () => {
      this.label.y = this.game.camera.y + marginTop;
    };
  }

  createStripe() {
    this.stripe = new BestDistanceStripe(this.game, this.x);
    this.game.add.existing(this.stripe);
  }
}
