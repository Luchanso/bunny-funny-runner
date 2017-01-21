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
    this.currentGroundType = Engine.Ground.type.SNOW

    this.addBiomTimer()
  }

  addBiomTimer() {
    const minTime = 5000
    const maxTime = 15000
    const time = this.game.rnd.between(minTime, maxTime)

    this.biomTimer = this.game.time.create()
    this.biomTimer.add(time, this.changeBiom, this)
    this.biomTimer.start()
  }

  changeBiom() {
    const minTime = 5000
    const maxTime = 15000
    const time = this.game.rnd.between(minTime, maxTime)

    const types = Object.keys(Engine.Ground.type).map(val => {
      return Engine.Ground.type[val]
    })

    this.currentGroundType = this.game.rnd.pick(types)

    this.biomTimer.add(time, this.changeBiom, this)
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

    const { scaleRatio } = Engine;

    const MARGIN_TOP = 500
    const WORL_HEIGHT = this.game.world.bounds.height + this.game.height - MARGIN_TOP
    const VERTICAL_COUNT = 12
    const START_POINT = -this.game.world.bounds.height + MARGIN_TOP
    const GRID_HEIGHT = WORL_HEIGHT / VERTICAL_COUNT //  960 * scaleRatio
    const RND_HORIZONTAL = 340 * scaleRatio
    const RND_VERTICAL = 285 * scaleRatio

    for (let i = 1; i < VERTICAL_COUNT; i++) {
      if (this.game.rnd.pick[true, false]) continue

      const x = this.bunny.x + margin + this.game.rnd.between(-RND_HORIZONTAL, RND_HORIZONTAL)
      const y = START_POINT + GRID_HEIGHT * i + this.game.rnd.between(-RND_VERTICAL, RND_VERTICAL)

      let ground = this.addRandomGround(x, y)

      this.signals.generate.dispatch(ground)
    }
  }

  addRandomGround(x, y) {
    const type = this.currentGroundType
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
