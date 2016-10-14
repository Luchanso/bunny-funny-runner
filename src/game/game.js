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
  }

  create() {
    this.stage.backgroundColor = 0xADE6FF
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.setBounds(0, 0, Number.MAX_VALUE, this.game.height);

    this.createBackground()

    this.grounds = this.add.group()

    this.createStartGround()

    window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny1')
    this.add.existing(this.bunny)

    this.configurateCamera()
    this.addControl()

    this._groundStep = 0
  }

  update() {
    this.physics.arcade.collide(this.bunny, this.grounds)
    this.updateGrounds()
  }

  render() {
    // this.grounds.children.map((sprite) => {
    //   this.game.debug.body(sprite, 'rgba(255, 255, 255, 0.5)')
    // })
  }

  updateGrounds() {
    let step = Math.round(this.bunny.x / 150)

    if (step % 2 === 0 && step !== this._groundStep) {
      this._groundStep = step
      this.generateGrounds()
    }
  }

  addControl() {
    let hotkey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
    hotkey.onDown.add(this.jump, this)
  }

  jump() {
    if (this.bunny.data.running) {
      this.bunny.jump()
    }
    else {
      this.bunny.run()
      this.bunny.jump()
    }
  }

  createStartGround() {
    const marginBottom = 100
    const x = 100
    const y = this.game.height - marginBottom
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

  generateGrounds() {
    let margin = 0

    if (this.bunny.x < this.game.width) {

    }

    const SPLIT_VERTICAL = 5
    const GRID_HEIGHT = this.game.height / SPLIT_VERTICAL

    for (let i = 1; i < SPLIT_VERTICAL; i++) {
      if (this.rnd.pick[true, false]) continue

      const x = this.bunny.x + (this.game.width - 100) + this.rnd.between(-50, 50)
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

  createGrounds() {
    window.d = this.grounds = this.add.group()
    const types = Object.keys(Engine.Ground.type).map(val => {
      return Engine.Ground.type[val]
    })

    for (let i = 0; i < 15; i++) {
      let groundType = this.rnd.pick(types)
      let ground = new Engine.Ground(
        this.game,
        400 + i * 250,
        450,
        groundType,
        false,
        this.rnd.pick([true, false])
      )

      // ground.autoCull = true
      // ground.outOfCameraBoundsKill = true

      this.grounds.add(ground)
    }
  }

  configurateCamera() {
    this.camera.roundPx = false
    this.camera.follow(this.bunny)
    this.camera.deadzone = new Phaser.Rectangle(100, 0, 0, 0)
  }

  createBackground() {
    // this.add.existing(new Engine.Background(this.game, 0, 0, 'layer2', -1))
    this.add.existing(new Engine.Background(this.game, 0, 0, 'layer3', -2))
    // this.add.existing(new Engine.Background(this.game, 0, 0, 'layer4', -3))
  }
}

Engine.Game = Game
