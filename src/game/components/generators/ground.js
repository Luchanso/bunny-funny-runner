class GroundsGenerator extends Engine.Component.Generator {
  /**
   * Grounds generator
   * @param  {Phaser.Game} game
   * @param  {Engine.Bunny} bunny Object of bunny
   * @param  {Number} distance Distance between grounds
   */
  constructor(game, bunny, distance) {
    super(game, bunny)

    this.distance = distance
    this.signals = {
      generate: new Phaser.Signal()
    }
    this.currentStep = -1
  }

  update() {
    super.update()

    let step = Math.floor(this.bunny.x / this.distance)
    let margin = (this.game.width)

    if (step !== this.currentStep) {
      this.currentStep = step
      this.generate(margin)
    }
  }

  generate(margin) {
    super.generate()

    const SPLIT_VERTICAL = 6
    const START_POINT = -(this.game.world.bounds.height - this.game.height)
    const GRID_HEIGHT = this.game.world.bounds.height / SPLIT_VERTICAL
    const RND_HORIZONTAL = 125
    const RND_VERTICAL = 65

    for (let i = 1; i < SPLIT_VERTICAL; i++) {
      if (this.game.rnd.pick[true, false]) continue

      const x = this.bunny.x + margin + this.game.rnd.between(-RND_HORIZONTAL, RND_HORIZONTAL)
      const y = START_POINT + GRID_HEIGHT * i + this.game.rnd.between(-RND_VERTICAL, RND_VERTICAL)

      let ground = this.addRandomGround(x, y)

      this.signals.generate.dispatch(ground)
    }
  }

  addRandomGround(x, y) {
    const types = Object.keys(Engine.Ground.type).map(val => {
      return Engine.Ground.type[val]
    })
    const type = this.game.rnd.pick(types)
    const small = this.game.rnd.pick([true, false])
    const broken = this.game.rnd.pick([true, false])

    let ground = this.getFirstDead()
    if (ground == null) {
      ground = new Engine.Ground(
        this.game,
        x,
        y,
        type,
        small,
        broken,
      )
      this.add(ground)
    } else {
      ground.reset(x, y, type, small, broken)
    }

    return ground
  }
}

Engine.Component.GroundsGenerator = GroundsGenerator
