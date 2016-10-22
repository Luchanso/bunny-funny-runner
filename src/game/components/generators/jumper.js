class JumperGenerator extends Engine.Component.Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny)

    this.grounds = grounds
    this.grounds.signals.generate.add(this.generate, this)

    this.prototype = new Engine.Jumper(this.game, 0, 0)
  }

  generate(ground) {
    const absoluteY = this.game.world.height - this.game.height + ground.y

    if (absoluteY < JumperGenerator.MIN_HEIGHT) return
    if (!Phaser.Utils.chanceRoll(15)) return

    const x = this.game.rnd.between(
      ground.x,
      ground.x + ground.width - this.prototype.width
    )
    const y = ground.y

    let jumper = this.getFirstDead()

    if (jumper == null) {
      jumper = new Engine.Jumper(this.game, x, y)
      this.add(jumper)
    } else {
      jumper.reset(x, y)
    }

    return jumper
  }
}

/**
 * Minimal height of generation by Y
 * @type {[type]}
 */
JumperGenerator.MIN_HEIGHT = 750

Engine.Component.JumperGenerator = JumperGenerator
