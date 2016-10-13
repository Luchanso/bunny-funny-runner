class Bunny extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, Engine.spritesheet, name + '_stand.png')

    this._name = name
    this._inAir = false
    this._isDead = false

    this.game.physics.arcade.enable([ this ])

    this.body.collideWorldBounds = true
    this.body.gravity.setTo(0, 700)
    this.body.bounce.set(0.15)

    this.createAnimation()
    this.animations.play('run')
  }

  update() {
    if (this._isDead) return

    const jumpTriggerSpeed = 100;

    if (this.inAir()) {
      this.animations.play('jump')
    } else {
      this.animations.play('run')
    }

    this.game.debug.text('y: ' + this.body.velocity.y, 15, 75, 'white')
  }

  inAir() {
    const trigger = 20
    return Math.abs(this.body.velocity.y) > trigger
  }

  die() {
    const animationDownTime = 1000
    const animationUpTime = 400
    const upMove = 100

    this.body.velocity.setTo(0)
    this.body.collideWorldBounds = false
    this._isDead = true
    this.animations.play('hurt')

    this.game.add.tween(this)
      .to({
        y: this.y - upMove
      }, animationDownTime)
      .to({
        y: this.game.height + this.height
      }, animationUpTime, Phaser.Easing.Quadratic.In)
      .start()
  }

  createAnimation() {
    this.animations.add('jump', [this._name + '_jump.png'], 1, true)
    this.animations.add('run', [this._name + '_walk1.png', this._name + '_walk2.png'], 10, true)
    this.animations.add('hurt', [this._name + '_hurt.png'], 1, true)
    this.animations.add('ready', [this._name + '_ready.png'], 1, true)
    this.animations.add('stand', [this._name + '_stand.png'], 1, true)
  }

  jump() {
    const jumpImpulse = 500

    if (!this.inAir())
      this.body.velocity.y -= jumpImpulse
  }
}

Engine.Bunny = Bunny
