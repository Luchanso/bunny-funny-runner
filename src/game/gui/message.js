class Message extends Phaser.Text {
  constructor(game, x, y, text) {
    const style = {
      fill: 'white',
      font: '65px Open Sans',
      align: 'center'
    };

    super(game, x, y, text, style);

    this.setShadow(0, 2, 'rgba(33, 33, 33, 0.6)', 4);

    this.alpha = 0;
    this.fixedToCamera = true;
  }

  show(animationTime) {
    this.animate(1, animationTime);
  }

  hide(animationTime) {
    this.animate(0, animationTime);
  }

  animate(alpha, animationTime = 300) {
    let tween = this.game.add.tween(this).to({ alpha }, animationTime);

    if (this.tween && this.tween.isRunning) {
      this.tween.chain(tween);
    } else {
      this.tween = tween;
      this.tween.start();
    }
  }
}

Engine.Message = Message;
