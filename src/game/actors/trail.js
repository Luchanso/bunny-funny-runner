class Trail extends Phaser.Particles.Arcade.Emitter {
  constructor(game, maxParticles, follow) {
    super(game, 0, 0, maxParticles)

    this.makeParticles('particles')
    this.lifespan = 500

    this._particlesEmit = 20
    this._delayEmit = 50
    this._follow = follow

    this._timerEmmiting = this.game.time.create()
    this._timerEmmiting.loop(this._delayEmit, this.emit, this)
    this._timerEmmiting.start()
  }

  emit() {
    for (let i = 0; i < this._particlesEmit; i++) {
      const particleFram = this.game.rnd.between(0, 4)

      this.emitParticle(
        this._follow.x,
        this._follow.y + this._follow.height,
        'particles',
        particleFram
      )
    }
  }

  stopEmitt() {
    this._timerEmmiting.pause()
  }

  startEmitt() {
    this._timerEmmiting.resume()
  }
}

Engine.Trail = Trail
