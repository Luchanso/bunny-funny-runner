class PowerUpGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny)

    this.grounds = grounds
    this.grounds.signals.generate.add(this.generate, this)

    this.prototype = new Engine.PowerUp(this.game, 0, 0)
  }

  generate(ground) {
    if (!Phaser.Utils.chanceRoll(0.3)) return

    const x = this.game.rnd.between(
      ground.x,
      ground.x + ground.width - this.prototype.width
    )
    const y = ground.y - this.prototype.height

    let powerUp = this.getFirstDead()

    if (powerUp == null) {
      powerUp = new Engine.PowerUp(this.game, x, y)
      this.add(powerUp)
    } else {
      powerUp.reset(x, y)
    }

    return powerUp
  }
}


Engine.Component.PowerUpGenerator = PowerUpGenerator
