class Lose extends Phaser.Text {
  constructor(game, x, y) {
    const style = {
      fill: 'white',
      font: '75px Arial',
      align: 'center'
    }

    super(game, x, y, 'You lose :-(', style)
    this.text += '\r\nPress spacebar';

    this.setShadow(0, 2, 'rgba(33, 33, 33, 0.6)', 4)

    this.alpha = 0
    this.fixedToCamera = true
  }

  show() {
    this.game.add.tween(this)
      .to({
        alpha: 1
      }, 800)
      .start()
  }
}

Engine.Lose = Lose
