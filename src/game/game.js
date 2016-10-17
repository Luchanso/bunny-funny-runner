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
    this.createSpikes()
    this.initGrounds()

    this.bunny.addTrail()

    this.configurateCamera()
    this.addControl()
    this.createDistanceLabel()
    this.createLoseLabel()
    this.createStartLabel()
    this.createBestDistance()
  }

  update() {
    this.physics.arcade.collide(this.bunny, this.grounds)
    this.updateGrounds()
    this.updateBottomSpikes()
    this.updateDie()

    this._score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE)
  }

  render() {
    // this.game.debug.spriteInfo(this.bunny, 90, 15, 'white')

    this.game.debug.text('Spikes count in Memory: ' + this.bottomSpikes.length, 150, 150, 'white')
  }

  updateDie() {
    if (
      this.bunny.y > this.game.height - 100 &&
      !this.bunny.data.isDead
    ) {
      this.bunny.die()
      this.lose()
    }
  }

  createSpikes() {
    const REFERENCE = new Engine.Spike(this.game, 0, 0)
    const COUNT = (this.game.width + this.bunny.x) / REFERENCE.width
    this._spikeWidth = REFERENCE.width

    this.bottomSpikes = this.add.group()

    for (let i = 0; i < COUNT; i++) {
      let spike = new Engine.Spike(this.game, i * REFERENCE.width, this.game.height)
      spike.anchor.setTo(0, 1)

      this.bottomSpikes.add(spike)
    }
  }

  updateBottomSpikes() {
    let step = Math.round(this.bunny.x / this._spikeWidth)
    let margin = (this.game.width)

    if (step !== this._spikeStep) {
      this._spikeStep = step
      this.generateBottomSpikes(this.bunny.x + margin)
    }

    this.dieBottomSpikes()
  }

  dieBottomSpikes() {
    this.bottomSpikes.children.forEach((item) => {
      if (!item.inCamera && item.alive && item.x < this.bunny.x - this.camera.deadzone.x) {
        item.kill()
      }
    })
  }

  generateBottomSpikes(x) {
    const y = this.game.height

    let spike = this.bottomSpikes.getFirstDead()

    if (spike == null) {
      spike = new Engine.Spike(this.game, x, y)
      spike.anchor.setTo(0, 1)

      this.bottomSpikes.add(spike)
    } else {
      spike.reset(x, y)
    }

    return spike
  }

  createBestDistance() {
    this.bestDistance = new Engine.BestDistance(this.game)
  }

  lose() {
    this.loseLabel.show()
    this.backgrounds.callAll('stop')
    if (this._score.bestDistance < this._score.currentDistance) {
      this._score.bestDistance = this._score.currentDistance
    }
  }

  start() {
    this.startLabel.hide()
    this.backgrounds.callAll('resume')
    this.bunny.run()
  }

  createLoseLabel() {
    this.loseLabel = new Engine.Message(
      this.game,
      this.game.width / 2,
      this.game.height / 2,
      'You lose :-(\r\nPress spacebar'
    )

    this.loseLabel.anchor.setTo(0.5)
    this.add.existing(this.loseLabel)
  }

  createStartLabel() {
    this.startLabel = new Engine.Message(
      this.game,
      this.game.width / 2,
      this.game.height / 2,
      'Press spacebar\r\nfor start'
    )

    this.startLabel.anchor.setTo(0.5)
    this.startLabel.show()
    this.add.existing(this.startLabel)
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
    hotkey.onDown.add(this.spacebarDown, this)
  }

  spacebarDown() {
    if (this.bunny.data.isDead) {
      this.state.restart(true, false)
    }
    if (this.bunny.data.running) {
      this.bunny.jump()
    }
    else {
      this.start()
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
    const SPLIT_VERTICAL = 6
    const START_POINT = -(this.game.world.bounds.height - this.game.height)
    const GRID_HEIGHT = this.game.world.bounds.height / SPLIT_VERTICAL

    for (let i = 1; i < SPLIT_VERTICAL; i++) {
      if (this.rnd.pick[true, false]) continue

      const x = this.bunny.x + margin + this.rnd.between(-25, 25)
      const y = START_POINT + GRID_HEIGHT * i + this.rnd.between(-50, 50)

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
    const paddingLeft = 250
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
