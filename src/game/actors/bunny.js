class Bunny extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, Engine.spritesheet, name + '_stand.png')

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
    this.addWings()
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

  addWings() {
    this.wings = new Engine.Wings(this.game, this)
  }

  update() {
    if (this.data.isDead) return

    if (this.data.wings) {
      const offsetX = 8

      this.wings.x = this.x + offsetX
      this.wings.y = this.y
    }

    if (this.data.magnet) {
      const offsetX = 5
      const offsetY = 10

      this.magnetEffect.x = this.x + this.width / 2 + offsetX
      this.magnetEffect.y = this.y + this.height / 2 + offsetY
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

    this.magnetEffect.show()

    if (this.magnetTimeout != null) {
      clearTimeout(this.magnetTimeout)
    }

    this.magnetTimeout = setTimeout(
      this.diactivateMagnet.bind(this),
      Bunny.MAGNET_TIME
    )
  }

  diactivateMagnet() {
    this.data.magnet = false

    this.magnetEffect.hide()
  }

  inAir() {
    return !bunny.body.touching.down
  }

  die() {
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

    this.godTimeout = setTimeout(this.diactivateGod.bind(this), Bunny.GODMODE_TIME)

    const animationTime = 400

    this.godAnimation = this.game.add.tween(this)
      .to({
        alpha: 0.1
      }, animationTime)
      .to({
        alpha: 1
      }, animationTime)
      .loop()
      .start()

    this.godAnimation.onComplete.add(() => {
      this.alpha = 1
    }, this)
  }

  diactivateGod() {
    this.data.god = false

    this.godAnimation.stop(true)
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
Bunny.MAGNET_TIME = 8000
Bunny.GODMODE_TIME = 5000

Engine.Bunny = Bunny
