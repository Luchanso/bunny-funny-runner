class Wings extends Phaser.Group {
  constructor(game, bunny) {
    const wingsOffset = 50

    super(game)

    this.bunny = bunny

    this.leftWing = this.game.make.sprite(
      0,
      this.bunny.height / 2,
      Engine.spritesheet,
      'wing_left.png'
    )
    this.leftWing.width *= Engine.scaleRatio
    this.leftWing.height *= Engine.scaleRatio

    this.leftWing.x = (this.bunny.width) / 2 - wingsOffset

    this.rightWing = this.game.make.sprite(
      (this.bunny.width) / 2 + wingsOffset,
      this.bunny.height / 2,
      Engine.spritesheet,
      'wing_right.png'
    )

    this.rightWing.width *= Engine.scaleRatio
    this.rightWing.height *= Engine.scaleRatio

    this.leftWing.anchor.setTo(1, 0.611)
    this.rightWing.anchor.setTo(0, 0.611)

    this.leftWing.tint = 0x0000FF
    this.rightWing.tint = 0x0000FF

    this.add(this.leftWing)
    this.add(this.rightWing)

    this.leftWing.rotation = Math.PI / 80
    this.rightWing.rotation = -Math.PI / 80

    this.game.add.tween(this.leftWing)
      .to({
        rotation: -Math.PI / 4
      }, 200)
      .to({
        rotation: Math.PI / 80
      }, 200)
      .loop(-1)
      // .delay(1000)
      .start()

    this.game.add.tween(this.rightWing)
      .to({
        rotation: Math.PI / 4
      }, 200)
      .to({
        rotation: -Math.PI / 80
      }, 200)
      .loop(-1)
      // .delay(1000)
      .start()

    this.bunny.bringToTop()
  }

  update() {
    // this.x = this.bunny.x
    // this.y = this.bunny.y
  }
}

Engine.Wings = Wings
