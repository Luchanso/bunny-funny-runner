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
    this.body.maxVelocity.setTo(400, 20000)
    this.body.collideWorldBounds = true
    this.body.checkCollision.top = false

    this.onDied = new Phaser.Signal()

    this.createAnimation()
    this.createDieAnimation()
    this.animations.play('run')

    this.addSounds()
  }

  addSounds() {
    this.dieSound = this.game.sound.add('lose')
    this.jumpSound = this.game.sound.add('jump')
  }

  addTrail() {
    const particlse = 250
    this.data.trail = new Engine.Trail(this.game, particlse, this)
    this.game.add.existing(this.data.trail)
  }

  update() {
    if (this.data.isDead) return

    if (this.inAir()) {
      this.data.trail.startEmitt()
      this.animations.play('jump')
    } else if (this.data.running){
      this.data.trail.startEmitt()
      this.animations.play('run')
      this.data.countJump = Bunny.MAX_JUMPS
    } else {
      this.data.trail.stopEmitt()
      this.animations.play('stand')
    }
  }

  inAir() {
    return !bunny.body.touching.down
  }

  die() {
    return
    if (this.data.isDead) return

    this.dieSound.play()
    this.playDieAnimation()

    const animationDownTime = 1000
    const animationUpTime = 100
    const upMove = 100

    this.game.camera.unfollow()

    this.body.velocity.setTo(0, -1200)
    this.body.acceleration.setTo(0)
    this.body.gravity.setTo(0, 4000)
    this.body.collideWorldBounds = false
    this.data.isDead = true
    this.data.trail.stopEmitt()
    this.animations.play('hurt')

    this.onDied.dispatch()
  }

  createDieAnimation() {
    this.data.blood = new Engine.Blood(this.game, this)
    this.game.add.existing(this.data.blood)
  }

  playDieAnimation() {
    this.data.blood.playAnimation()
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

    if (this.data.countJump > 0) {
      this.body.velocity.y = -jumpImpulse
      this.data.countJump--
      this.jumpSound.play()
    }
  }
}

Bunny.MAX_JUMPS = 20
Bunny.ACCELERATION = 2000
Bunny.BASE_MAX_SPEED = 500

Engine.Bunny = Bunny
