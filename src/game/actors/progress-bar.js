class ProgressBar extends Phaser.Graphics {
  constructor(game, x, y, text) {
    super(game, x, y)

    this.color = 0x8661ff

    this.progress = 1
    this.fixedToCamera = true

    this.addLabel(text)
    this.draw(this.progress)
  }

  addLabel(text) {
    const style = {
      fill: Phaser.Color.getWebRGB(this.color),
      font: '21px Open Sans'
    }

    let label = new Phaser.Text(this.game, 0, -30, text, style)

    this.addChild(label)
  }

  draw(progress) {
    this.clear()

    const width = ProgressBar.WIDTH
    const height = 5

    this.lineStyle(2, this.color, 0.6)
    this.drawRect(0, 0, width, height)

    this.beginFill(this.color)
    this.drawRect(0, 0, progress * width, height)
    this.endFill()
  }

  get value() { return this.progress }
  set value(val) {
    this.progress = val
    this.draw(this.progress)
  }

  animate(time) {
    this.value = 1

    this.tween = this.game.add.tween(this)
      .to({
        value: 0
      }, time)
      .start()
  }
}

ProgressBar.WIDTH = 500

Engine.ProgressBar = ProgressBar
