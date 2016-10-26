class Bunny extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, Engine.spritesheet, name + '_stand.png')

    this.activateGod()

    this.data.name = name
    this.data.magnet = false
    this.data.isDead = false
    this.data.running = false
    this.data.countJump = Bunny.MAX_JUMPS

    this.game.physics.arcade.enable([ this ])

    this.width *= 0.35
    this.height *= 0.35

    this.body.gravity.setTo(0, 2500)
    this.body.maxVelocity.setTo(400, 20000)
    this.body.collideWorldBounds = true

    this.onDied = new Phaser.Signal()

    this.createAnimation()
    this.createDieAnimation()
    this.animations.play('run')

    this.addSounds()
    this.addMagnetEffect()
  }

  addSounds() {
    this.dieSound = this.game.sound.add('lose')
    this.jumpSound = this.game.sound.add('jump')
  }

  addTrail() {
    this.data.trail = new Engine.Trail(this.game, this)
    this.data.airTrail = new Engine.AirTrail(this.game, this)
    this.game.add.existing(this.data.trail)
    this.game.add.existing(this.data.airTrail)
  }

  addMagnetEffect() {
    this.magnetEffect = new Engine.MagnetEffect(this.game)
    this.game.add.existing(this.magnetEffect)
  }

  update() {
    if (this.data.isDead) return

    if (this.data.magnet) {
      this.magnetEffect.x = this.x + this.width / 2
      this.magnetEffect.y = this.y + this.height / 2
    }

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

  activateMagnet() {
    this.data.magnet = true

    this.game.add.tween(this.magnetEffect)
      .to({
        alpha: 1
      })
      .start()

    setTimeout(this.diactivateMagnet, Bunny.MAGNET_TIME)
  }

  diactivateMagnet() {
    this.bunny.data.magnet = false

    this.game.add.tween(this.magnetEffect)
      .to({
        alpha: 0
      })
      .start()
  }

  inAir() {
    return !bunny.body.touching.down
  }

  die() {
    if (this.data.god) return
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

  activateGod() {
    this.data.god = true
    Bunny.MAX_JUMPS = 2000
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

Bunny.MAX_JUMPS = 2
Bunny.ACCELERATION = 2000
Bunny.BASE_MAX_SPEED = 500
Bunny.MAGNET_TIME = 15000

Engine.Bunny = Bunny
