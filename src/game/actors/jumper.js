class Jumper extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, Engine.spritesheet, 'spring_in.png')

    this.width *= Engine.scaleRatio
    this.height *= Engine.scaleRatio

    this.anchor.setTo(0, 1)

    this.game.physics.arcade.enable([ this ])

    this.addAnimations()
  }

  addAnimations() {
    this.animations.add('out', ['spring_out.png'])
    this.animations.add('ready', ['spring.png'])
    this.animations.add('in', ['spring_in.png'])
  }

  activate() {
    this.data.activated = true
    this.animations.play('out')
  }

  reset(x, y) {
    super.reset(x, y)
    this.data.activated = false
    this.animations.play('in')
  }
}

Engine.Jumper = Jumper
