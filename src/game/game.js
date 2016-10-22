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

    this.load.audio('lose', ['assets/sounds/lose.mp3', 'assets/sounds/lose.ogg'])
    this.load.audio('coin', ['assets/sounds/coin.mp3', 'assets/sounds/coin.ogg'])
    this.load.audio('jump', ['assets/sounds/jump.mp3', 'assets/sounds/jump.ogg'])

    this.load.spritesheet('particles', 'assets/sprites/particles.png', 8, 8)
  }

  init() {
    this.distanceBetweenGrounds = 450

    // TODO: Rename this
    this._score = Engine.Service.get('Score')
    this._score.coins = 0

    window.game = this
  }

  create() {
    this.profiler = Engine.Service.get('Profiler')

    const worldHeight = this.game.height * 3
    this.stage.backgroundColor = 0xADE6FF
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.setBounds(0, -(worldHeight - this.game.height), Number.MAX_VALUE, worldHeight);

    this.createBackground()
    this.createBunny()
    this.createSpikes()
    this.createGrounds()
    this.createJumpers()
    this.createCoins()
    this.createEnemies()

    this.bunny.addTrail()

    this.configurateCamera()
    this.addControl()
    this.createDistanceLabel()
    this.createCoinsLabel()
    this.createLoseLabel()
    this.createStartLabel()
    this.createBestDistance()
    this.createNominals()
  }

  update() {
    if (this.bunny.data.isDead) {
      this.physics.arcade.collide(this.bunny.data.blood, this.grounds)
      this.physics.arcade.collide(this.bunny.data.blood, this.enemies)

      return
    }

    this.physics.arcade.collide(this.bunny, this.grounds)
    this.physics.arcade.overlap(this.bunny, this.coins, this.takeCoin, null, this)
    this.physics.arcade.overlap(this.bunny, this.enemies, this.collideEnemies, null, this)
    this.physics.arcade.overlap(this.bunny, this.jumpers, this.overlapJumper, null, this)
    this.updateDie()

    // TODO: Need incapsulation
    this._score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE)
  }

  takeCoin(bunny, coin) {
    const x = this.bunny.x + this.bunny.width / 2
    const y = this.bunny.y

    this.nominals.generate(x, y, coin.data.nominal)

    this._score.coins += coin.data.nominal

    coin.take()
    coin.kill()
  }

  render() {
    let summ = 0

    summ += this.grounds.length
    summ += this.coins.length
    summ += this.enemies.length
    summ += this.jumpers.length
    summ += this.bottomSpikes.length

    this.game.debug.text('Objects in memory: ' + summ, 90, 15)
  }

  updateDie() {
    if (
      this.bunny.y > this.game.height - 100 &&
      !this.bunny.data.isDead
    ) {
      this.bunny.die()
    }
  }

  createJumpers() {
    this.jumpers = new Engine.Component.JumperGenerator(
      this.game,
      this.bunny,
      this.grounds
    )
  }

  createEnemies() {
    this.enemies = new Engine.Component.EnemyGenerator(
      this.game,
      this.bunny,
      this.grounds
    )
  }

  collideEnemies(bunny, enemy) {
    if (this.bunny.data.isDead) return

    this.bunny.die()
    enemy.die()
  }

  overlapJumper(bunny, jumper) {
    if (jumper.data.activated) return

    jumper.activate()
    bunny.body.velocity.setTo(9000, -2000)
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
    let hotkey2 = this.input.keyboard.addKey(Phaser.KeyCode.Q)
    hotkey2.onDown.add(() => {
      this.bunny.playDieAnimation()
    }, this)

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

    this.startGround = new Engine.Ground(
      this.game,
      x,
      y,
      type,
      small,
      broken,
    )

    this.grounds.add(this.startGround)
  }

  createBunny() {
    window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny2')
    this.bunny.onDied.add(this.lose, this)
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
    const marginTop = 100
    const style = {
      fill: '#00BCD4',
      font: '31px Arial'
    }

    for (let i = 1; i < this.game.width / this.distanceBetweenGrounds; i++) {
      let ground = new Engine.Ground(this.game, this.distanceBetweenGrounds * i, 400)
      this.grounds.add(ground)
    }

    let label = this.add.text(
      this.game.width / 2,
      marginTop,
      `Best ${this._score.bestDistance}m.`,
      style
    )
    label.anchor.setTo(0.5)

    this.bunny.bringToTop()
  }

  configurateCamera() {
    const paddingLeft = 200
    const smoothMove = 0.15
    const deadZoneHeight = 50

    this.camera.roundPx = false
    this.camera.follow(this.bunny, Phaser.Camera.FOLLOW_LOCKON, 1, smoothMove)
    this.camera.deadzone = new Phaser.Rectangle(paddingLeft, this.game.height / 2 - this.bunny.height * 1.5, 1, deadZoneHeight)
  }

  createBackground() {
    this.backgrounds = this.add.group()

    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer2', -0.05))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer3', -0.1))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer4', -0.25))
  }
}

Engine.Game = Game
