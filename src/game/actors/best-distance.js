class BestDistance {
  constructor(game) {
    this.score = Engine.Service.get('Score');

    if (this.score.bestDistance === 0) return;

    this.game = game;
    this.x = this.score.bestDistance * Engine.Score.MULTIPER_DISTANCE;

    this.createLabel();
    this.createStripe();
  }

  createLabel() {
    const style = {
      fill: 'white',
      font: '26px Arial',
    };
    const marginLeft = 10;
    const marginTop = 150;

    this.label = this.game.add.text(
      this.x + marginLeft,
      0,
      `Best ${this.score.bestDistance} m.`,
      style,
    );
    this.label.update = () => {
      this.label.y = this.game.camera.y + marginTop;
    };
  }

  createStripe() {
    this.stripe = new Engine.BestDistanceStripe(this.game, this.x);
    this.game.add.existing(this.stripe);
  }
}

Engine.BestDistance = BestDistance;
