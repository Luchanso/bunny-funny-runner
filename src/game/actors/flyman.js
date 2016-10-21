class FlyMan extends Engine.Enemy {
  constructor(game, x, y) {
    super(game, x, y, 'flyMan_fly.png')

    this.verticaleTween = this.addVerticaleMove()
  }

  addVerticaleMove() {
    const distance = this.game.rnd.between(50, 125)
    const time = this.game.rnd.between(850, 1250)

    return this.game.add.tween(this)
      .to({
        y: this.y + distance
      }, time)
      .to({
        y: this.y
      }, time)
      .to({
        y: this.y - distance
      }, time)
      .to({
        y: this.y
      }, time)
      .loop()
      .start()
  }

  reset(x, y) {
    super.reset(x, y)

    this.addVerticaleMove()
  }

  die() {
    const impulse = 400

    this.game.tweens.removeFrom(this)
    this.body.angularVelocity = this.game.rnd.between(100, 600)
    this.body.velocity.y = -impulse
    this.body.gravity.setTo(200, 2000)
  }

  kill() {
    this.game.tweens.removeFrom(this)

    super.kill()
  }
}

Engine.FlyMan = FlyMan
