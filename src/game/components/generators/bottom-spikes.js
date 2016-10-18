class BottomSpikeGenerator extends Engine.Component.Generator {
  constructor(game, bunny, prototype) {
    super(game, bunny)

    this.prototype = prototype
    this.currentStep = -1
    this.lastX = 0
  }

  update() {
    super.update()

    let step = Math.floor(this.bunny.x / this.prototype.width)
    let margin = (this.game.width)

    if (step !== this.currentStep) {
      this.currentStep = step
      this.generate(margin)
    }
  }

  generate(margin) {
    super.generate()

    const y = this.game.height
    const x = this.lastX + this.prototype.width

    let spike = this.getFirstDead()

    if (spike == null) {
      spike = new Engine.Spike(this.game, x, y)
      this.add(spike)
    } else {
      spike.reset(x, y)
    }

    this.lastX = x
  }

  add(spike) {
    super.add(spike)

    this.lastX = spike.x
  }
}

Engine.Component.BottomSpikeGenerator = BottomSpikeGenerator
