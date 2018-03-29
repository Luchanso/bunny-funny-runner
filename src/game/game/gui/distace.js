import Phaser from 'phaser';
import Service from '../../service';

export default class Distance extends Phaser.Text {
  constructor(game, x, y) {
    const style = {
      fill: '#00BCD4',
      font: '35px Open Sans'
    };

    super(game, x, y, '0m', style);

    this.fixedToCamera = true;
    this.score = Service.get('Score');
    this.score.onUpdate.add(this.updateDistance, this);
  }

  updateDistance() {
    this.text = `${this.score.currentDistance}m`;
  }
}
