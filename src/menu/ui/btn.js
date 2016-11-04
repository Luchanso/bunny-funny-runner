class Btn extends Phaser.Graphics {
  constructor(game, x, y, color, icon) {
    super(game, x, y)

    this.color = color
    this.icon = new Phaser.Sprite(this.game, 0, 0, icon)
    this.icon.anchor.setTo(0.5)

    this.addChild(this.icon)

    this.inputEnabled = true
    this.events.onInputDown.add(this.click, this)

    this.radius = this.icon.width
    this.clicked = new Phaser.Signal()

    this.draw()
  }

  draw() {
    this.beginFill(this.color)
    this.drawCircle(0, 0, this.radius)
    this.endFill()
  }

  click() {
    const animation = 250

    let tween = this.game.add.tween(this)
      .to({
        radius: Math.sqrt(Math.pow(this.game.width, 2) + Math.pow(this.game.height, 2))
      }, animation)
      .start()

    this.game.add.tween(this.icon)
      .to({
        alpha: 0
      }, animation)
      .start()

    tween.onComplete.add(this.draw, this)
    tween.onComplete.add(() => {
      this.clicked.dispatch()
    }, this)
    tween.onUpdateCallback(this.draw, this)
  }
}

Engine.Btn = Btn
