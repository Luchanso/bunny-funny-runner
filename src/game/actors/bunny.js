class Bunny extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, Engine.spritesheet, name + '_stand.png')

    this.data.name = name
    this.data.isDead = false
    this.data.running = false
    this.data.countJump = Bunny.MAX_JUMPS

    this.game.physics.arcade.enable([ this ])

    this.width *= 0.35
    this.height *= 0.35

    this.body.gravity.setTo(0, 2500)
    this.body.maxVelocity.setTo(400, 2000)
    this.body.collideWorldBounds = true

    this.createAnimation()
    this.animations.play('run')
  }

  update() {
    if (this.data.isDead) return

    if (this.inAir()) {
      this.animations.play('jump')
    } else if (this.data.running){
      this.animations.play('run')
      this.data.countJump = Bunny.MAX_JUMPS
    } else {
      this.animations.play('stand')
    }
  }

  inAir() {
    return !bunny.body.touching.down
  }

  die() {
    const animationDownTime = 1000
    const animationUpTime = 400
    const upMove = 100

    this.body.velocity.setTo(0)
    this.body.acceleration.setTo(0)
    this.body.collideWorldBounds = false
    this.data.isDead = true
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

  run() {
    this.data.running = true
    this.body.velocity.setTo(Bunny.BASE_MAX_SPEED, 0)
    this.body.acceleration.setTo(Bunny.ACCELERATION, 0)
  }

  createAnimation() {
    this.animations.add('jump', [this.data.name + '_jump.png'], 1, true)
    this.animations.add('run', [this.data.name + '_walk1.png', this.data.name + '_walk2.png'], 10, true)
    this.animations.add('hurt', [this.data.name + '_hurt.png'], 1, true)
    this.animations.add('ready', [this.data.name + '_ready.png'], 1, true)
    this.animations.add('stand', [this.data.name + '_stand.png'], 1, true)
  }

  jump() {
    if (this.data.isDead) return

    const jumpImpulse = 900

    if (this.data.countJump > 0)
      this.body.velocity.y = -jumpImpulse
      this.data.countJump--
  }
}

Bunny.MAX_JUMPS = 2
Bunny.ACCELERATION = 2000
Bunny.BASE_MAX_SPEED = 500

Engine.Bunny = Bunny
