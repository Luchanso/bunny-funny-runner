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
    this.createGrounds()

    window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny1')
    this.bunny.body.velocity.setTo(500, 0)
    this.add.existing(this.bunny)

    this.configurateCamera()
    this.addControl()
  }

  update() {
      this.physics.arcade.collide(this.bunny, this.grounds)
  }

  render() {
    // this.grounds.children.map((sprite) => {
    //   this.game.debug.body(sprite, 'rgba(255, 255, 255, 0.5)')
    // })
  }

  addControl() {
    let hotkey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
    hotkey.onDown.add(this.jump, this)
  }

  jump() {
    this.bunny.jump()
  }

  createGrounds() {
    this.grounds = this.add.group()
    const types = Object.keys(Engine.Ground.type).map(val => {
      return Engine.Ground.type[val]
    })

    for (let i = 0; i < 10; i++) {
      let groundType = this.rnd.pick(types)
      let ground = new Engine.Ground(
        this.game,
        400 + i * 400,
        450,
        groundType,
        false,
        this.rnd.pick([true, false])
      )

      this.grounds.add(ground)
    }
  }

  configurateCamera() {
    this.camera.follow(this.bunny)
    this.camera.deadzone = new Phaser.Rectangle(0, 0, 100, 0)
  }

  createBackground() {
    this.add.existing(new Engine.Background(this.game, 0, 0, 'layer2', -1))
    // this.add.existing(new Engine.Background(this.game, 0, 0, 'layer3', -2))
    // this.add.existing(new Engine.Background(this.game, 0, 0, 'layer4', -3))
  }
}

Engine.Game = Game
