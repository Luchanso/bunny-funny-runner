class MagnetEffect extends Phaser.Graphics {
  constructor(game) {
    super(game, 0, 0)

    this.waves = []

    this.waveGenerator = this.game.time.create()
    this.waveGenerator.loop(200, this.addWave, this)
    this.waveGenerator.start()
  }

  update() {
    this.draw()
  }

  draw() {
    this.clear()

    for (let wave of this.waves) {
      if (Date.now() - wave.startTime > 2000) {
        continue
      }
      this.lineStyle(wave.width, 0xff7a00, wave.alpha)
      this.drawCircle(0, 0, wave.radius)
    }
  }

  addWave() {
    let wave = {
      radius: Engine.magnetDistace * 2,
      width: 1,
      alpha: 0,
      startTime: Date.now()
    }

    let tween = this.game.add.tween(wave)
      .to({
        radius: Engine.magnetDistace / 2,
        alpha: 0.4
      }, 1500)
      .to({
        alpha: 0
      }, 500)
      .start()

    this.waves.push(wave)
  }
}

Engine.MagnetEffect = MagnetEffect
