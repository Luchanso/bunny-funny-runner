class Game extends Phaser.State {
  constructor() {
    super()
  }

  preload() {
    this.load.atlasXML(
      Engine.spritesheet,
      'assets/spritesheets/jumper.png',
      'assets/spritesheets/jumper.xml'
    )

    this.load.image('layer2', 'assets/sprites/backgrounds/layer2.png')
    this.load.image('layer3', 'assets/sprites/backgrounds/layer3.png')
    this.load.image('layer4', 'assets/sprites/backgrounds/layer4.png')

    this.load.spritesheet('particles', 'assets/sprites/particles.png', 8, 8)
  }

  init() {
    this._groundStep = 0
    this._groundVerticalMargin = 300
    this._score = Engine.Service.get('Score')

    window.game = this
  }

  create() {
    this.stage.backgroundColor = 0xADE6FF
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.setBounds(0, -this.game.height, Number.MAX_VALUE, this.game.height * 2);

    this.createBackground()
    this.createBunny()
    this.initGrounds()

    this.bunny.addTrail()

    this.configurateCamera()
    this.addControl()
    this.createDistanceLabel()
    this.createLoseLabel()

    // TEMP CODE
    this.stripe = new Engine.BestDistanceStripe(this.game, 500)
    this.add.existing(this.stripe)
    // END TEMP CODE
  }

  update() {
    this.physics.arcade.collide(this.bunny, this.grounds)
    this.updateGrounds()
    this.updateDie()

    this._score.currentDistance = Math.round(this.bunny.x / 150)
  }

  updateDie() {
    if (
      this.bunny.y > this.game.height - 100 &&
      !this.bunny.data.isDead
    ) {
      this.bunny.die()
      this.loseLabel.show()
      this.backgrounds.callAll('stop')
    }
  }

  render() {
    // this.grounds.children.map((sprite) => {
    //   this.game.debug.body(sprite, 'rgba(255, 255, 255, 0.5)')
    // })

    this.game.debug.spriteInfo(this.bunny, 90, 15, 'white')

    // let zone = this.camera.deadzone
    // this.game.debug.geom(
    //   new Phaser.Rectangle(
    //     this.camera.x + zone.x,
    //     this.camera.y + zone.y,
    //     zone.width, zone.height
    //   ), 'rgba(255,0,0,0.6)')
  }

  createLoseLabel() {
    this.loseLabel = new Engine.Lose(
      this.game,
      this.game.width / 2,
      this.game.height / 2
    )

    this.loseLabel.anchor.setTo(0.5)
    this.add.existing(this.loseLabel)
  }

  createDistanceLabel() {
    const margin = 25

    this.distanceLabel = new Engine.Distance(
      this.game,
      this.game.width - margin,
      margin
    )
    this.distanceLabel.anchor.setTo(1, 0)
    this.add.existing(this.distanceLabel)
  }

  updateGrounds() {
    let step = Math.round(this.bunny.x / this._groundVerticalMargin)
    let margin = (this.game.width)

    if (step !== this._groundStep) {
      this._groundStep = step
      this.generateGrounds(margin)
    }

    this.dieGrounds()
  }

  dieGrounds() {
    this.grounds.children.forEach((ground) => {
      if (!ground.inCamera && ground.alive && ground.x < this.bunny.x - this.camera.deadzone.x) {
        ground.kill()
      }
    })
  }

  addControl() {
    let hotkey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
    hotkey.onDown.add(this.jump, this)
  }

  jump() {
    if (this.bunny.data.isDead) {
      this.state.restart(true, false)
    }
    if (this.bunny.data.running) {
      this.bunny.jump()
    }
    else {
      this.backgrounds.callAll('resume')
      this.bunny.run()
    }
  }

  createStartGround() {
    const marginBottom = 250
    const x = 100
    const y = this.bunny.y + marginBottom
    const type = Ground.type.GRASS
    const small = false
    const broken = false

    let startGround = new Engine.Ground(
      this.game,
      x,
      y,
      type,
      small,
      broken,
    )

    this.grounds.add(startGround)
  }

  createBunny() {
    window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny1')
    this.add.existing(this.bunny)
  }

  initGrounds() {
    this.grounds = this.add.group()
    this.createStartGround()
    this.createFirstGrounds()
  }

  createFirstGrounds() {
    for (let i = 1; i < this.game.width / this._groundVerticalMargin; i++) {
      this.generateGrounds(i * this._groundVerticalMargin)
    }
  }

  generateGrounds(margin) {
    const SPLIT_VERTICAL = 3
    const GRID_HEIGHT = this.game.height / SPLIT_VERTICAL

    for (let i = 1; i < SPLIT_VERTICAL; i++) {
      if (this.rnd.pick[true, false]) continue

      const x = this.bunny.x + margin + this.rnd.between(-25, 25)
      const y = GRID_HEIGHT * i + this.rnd.between(-50, 50)

      this.activateRandomGround(x, y)
    }

  }

  activateRandomGround(x, y) {
    const marginBottom = 100

    const types = Object.keys(Engine.Ground.type).map(val => {
      return Engine.Ground.type[val]
    })
    const type = this.rnd.pick(types)
    const small = this.rnd.pick([true, false])
    const broken = this.rnd.pick([true, false])

    let ground = this.grounds.getFirstDead()
    if (ground == null) {
      ground = new Engine.Ground(
        this.game,
        x,
        y,
        type,
        small,
        broken,
      )
      this.grounds.add(ground)
    } else {
      ground.reset(x, y, type, small, broken)
    }

    return ground
  }

  configurateCamera() {
    const paddingLeft = 300
    const smoothMove = 0.15
    const deadZoneHeight = 50

    this.camera.roundPx = false
    this.camera.follow(this.bunny, Phaser.Camera.FOLLOW_LOCKON, 1, smoothMove)
    this.camera.deadzone = new Phaser.Rectangle(paddingLeft, this.game.height / 2, 1, deadZoneHeight)
  }

  createBackground() {
    this.backgrounds = this.add.group()

    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer2', -1))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer3', -2))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer4', -3))
  }
}

Engine.Game = Game
