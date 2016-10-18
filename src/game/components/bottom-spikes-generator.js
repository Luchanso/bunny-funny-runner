class BottomSpikeGenerator extends Engine.Component.Generator {
  constructor(game, prototype, bunny) {
    super(game)

    this.game = game
    this.bunny = bunny
    this.prototype = prototype
    this.currentStep = -1
    this.lastX = 0
  }

  update() {
    let step = Math.floor(this.bunny.x / this.prototype.width)
    let margin = (this.game.width)

    if (step !== this.currentStep) {
      this.currentStep = step
      this.generate(margin)
    }

    this.checkDie()
  }

  generate(margin) {
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

    return spike
  }

  add(spike) {
    super.add(spike)

    this.lastX = spike.x
  }

  checkDie() {
    this.children.forEach((item) => {
      if (
          !item.inCamera
        && item.alive
        && item.x < this.bunny.x - this.game.camera.deadzone.x
      ) {
        item.kill()
      }
    })
  }
}

Engine.BottomSpikeGenerator = BottomSpikeGenerator
