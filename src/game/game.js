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
    this.distanceBetweenGrounds = 500

    // TODO: Rename this
    this._score = Engine.Service.get('Score')
    this._score.coins = 0

    window.game = this
  }

  create() {
    this.stage.backgroundColor = 0xADE6FF
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.setBounds(0, -this.game.height, Number.MAX_VALUE, this.game.height * 2);

    this.createBackground()
    this.createBunny()
    this.createSpikes()
    this.createGrounds()
    this.createCoins()

    this.bunny.addTrail()

    this.configurateCamera()
    this.addControl()
    this.createDistanceLabel()
    this.createCoinsLabel()
    this.createLoseLabel()
    this.createStartLabel()
    this.createBestDistance()
    this.createNominals()

    // TEMP

    {
      let coin = new Engine.Coin(this.game, 220, 370)
      this.coins.add(coin)
    }
    {
      let coin = new Engine.Coin(this.game, 250, 370, Engine.Coin.type.SILVER)
      this.coins.add(coin)
    }
    {
      let coin = new Engine.Coin(this.game, 280, 370, Engine.Coin.type.BRONZE)
      this.coins.add(coin)
    }


    // END TEMP
  }

  update() {
    this.physics.arcade.collide(this.bunny, this.grounds)
    this.physics.arcade.collide(this.bunny.data.trail, this.grounds)
    this.physics.arcade.overlap(this.bunny, this.coins, this.takeCoin, null, this)
    this.updateDie()

    // TODO: Need incapsulation
    this._score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE)
  }

  takeCoin(bunny, coin) {
    const x = this.bunny.x + this.bunny.width / 2
    const y = this.bunny.y

    this.nominals.generate(x, y, coin.data.nominal)

    this._score.coins += coin.data.nominal

    coin.kill()
  }

  render() {
    // this.game.debug.spriteInfo(this.bunny, 90, 15, 'white')
    // this.grounds.forEach((ground) => {
    //   this.game.debug.body(ground, 'rgba(127, 0, 254, 0.0)')
    // })
    this.game.debug.text('Nominals in memory: ' + this.nominals.length, 90, 15)
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
    const PROTOTYPE = new Engine.Spike(this.game, 0, 0)
    const COUNT = (this.game.width + this.bunny.x) / PROTOTYPE.width

    this.bottomSpikes = new Engine.Component.BottomSpikeGenerator(
      this.game,
      this.bunny,
      PROTOTYPE
    )

    for (let i = 0; i < COUNT; i++) {
      let spike = new Engine.Spike(
        this.game,
        i * PROTOTYPE.width,
        this.game.height
      )

      this.bottomSpikes.add(spike)
    }
  }

  createNominals() {
    this.nominals = new Engine.Component.NominalGenerator(
      this.game,
      this.bunny
    )
  }

  createBestDistance() {
    this.bestDistance = new Engine.BestDistance(this.game)
  }

  lose() {
    this.loseLabel.show()

    // TODO: Need incapsulation
    if (this._score.bestDistance < this._score.currentDistance) {
      this._score.bestDistance = this._score.currentDistance
    }
  }

  start() {
    this.startLabel.hide()
    this.bunny.run()
  }

  createCoins() {
    this.coins = new Engine.Component.CoinGenerator(this.game, this.bunny, this.grounds)
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
    const marginLeft = 15
    const marginTop = 10

    this.distanceLabel = new Engine.Distance(
      this.game,
      this.game.width - marginLeft,
      marginTop
    )
    this.distanceLabel.anchor.setTo(1, 0)
    this.add.existing(this.distanceLabel)
  }

  createCoinsLabel() {
    const padding = 20
    const marginTop = this.distanceLabel.y + this.distanceLabel.height / 2 + padding
    const marginLeft = 15

    this.coinsLabel = new Engine.CoinCounter(
      this.game,
      this.game.width - marginLeft,
      marginTop
    )
    this.coinsLabel.anchor.setTo(1, 0)
    this.add.existing(this.coinsLabel)
  }

  addControl() {
    let hotkey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
    hotkey.onDown.add(this.spacebarDown, this)

    let mouse = this.input.mouse
    mouse.mouseDownCallback = () => {
      this.spacebarDown()
    }
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

  createGrounds() {
    this.grounds = new Engine.Component.GroundsGenerator(
      this.game,
      this.bunny,
      this.distanceBetweenGrounds
    )
    this.createStartGround()
    this.createFirstGrounds()
  }

  createFirstGrounds() {
    for (let i = 1; i < this.game.width / this.distanceBetweenGrounds; i++) {
      this.grounds.generate(i * this.distanceBetweenGrounds)
    }
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

    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer2', -0.05))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer3', -0.1))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer4', -0.25))
  }
}

Engine.Game = Game
