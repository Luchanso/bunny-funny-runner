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

    this.score = Engine.Service.get('Score')
    this.score.coins = 0

    window.game = this
  }

  create() {
    this.profiler = Engine.Service.get('Profiler')

    const worldHeight = 550 * 5
    this.stage.backgroundColor = 0xADE6FF // 0x555555//
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.setBounds(0, -(worldHeight - this.game.height), Number.MAX_VALUE, worldHeight);

    this.createBackground()
    this.createBunny()
    this.createSpikes()
    this.createGrounds()
    this.createJumpers()
    this.createCoins()
    this.createEnemies()
    this.createPowerUps()

    this.bunny.addTrail()

    this.configurateCamera()
    this.addControl()
    this.createDistanceLabel()
    this.createCoinsLabel()
    this.createLoseLabel()
    this.createStartLabel()
    this.createBestDistance()
    this.createNominals()

    // this.createDatGui()

    // TEMP

    let powerUp = new Engine.PowerUp(this.game, this.startGround.x + 150, this.startGround.y - 50)
    this.powerUps.add(powerUp)

    // END TEMP
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
    this.physics.arcade.overlap(this.bunny, this.powerUps, this.takePowerUp, null, this)
    this.updateDie()
    this.updateMagnet()

    // TODO: Need incapsulation
    this.score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE)
  }

  render() {
    // this.game.debug.body(this.cloud, 'rgba(20, 0, 255, 0.35)')
  }

  createDatGui() {
    let gui = new dat.GUI()

    let dg = document.getElementsByClassName('dg ac')[0]
    dg.style.right = (this.game.width / 2 - 245) + 'px'

    this.speed = {
      speed: 50000,
      maxX: 750,
      maxY: 900
    }

    gui.add(this.speed, 'speed')
    gui.add(this.speed, 'maxX', 0, 50000)
    gui.add(this.speed, 'maxY', 0, 50000)
  }

  updateMagnet() {
    if (!this.bunny.data.magnet) return

    const speed = 50000
    const minSpeed = 600
    const maxSpeed = 1000

    // TODO: Need optimization
    this.coins.forEach(coin => {
      let distance = this.game.physics.arcade.distanceBetween(this.bunny, coin)
      if (distance < Engine.magnetDistace) {
        this.game.physics.arcade.accelerateToObject(
          coin,
          this.bunny,
          speed,
          this.rnd.between(minSpeed, maxSpeed),
          this.rnd.between(minSpeed, maxSpeed)
        )
      }
    })
  }

  takePowerUp(bunny, powerUp) {
    if (powerUp.type === Engine.PowerUp.types.MAGNET) {
      this.bunny.activateMagnet()
    } else if (powerUp.type === Engine.PowerUp.types.GOD) {
      this.bunny.activateGod()
    } else if (powerUp.type === Engine.PowerUp.types.WINGS) {
      this.bunny.activateWings()
    }
    powerUp.kill()
  }

  takeCoin(bunny, coin) {
    const x = this.bunny.x + this.bunny.width / 2
    const y = this.bunny.y

    this.nominals.generate(x, y, coin.data.nominal)

    this.score.coins += coin.data.nominal

    coin.take()
    coin.kill()
  }

  debugCountObject() {
    let summ = 0

    for (let item of this.world.children) {
      summ += item.children.length + 1
    }

    this.game.debug.text('Objects in memory: ' + summ, 90, 15)
    this.game.debug.text('Rendered objects: ' + this.camera.totalInView, 90, 35)
    this.game.debug.text('Coins objects: ' + this.coins.length, 90, 55)
    this.game.debug.text('Enemies objects: ' + this.enemies.length, 90, 75)
    this.game.debug.text('Grounds objects: ' + this.grounds.length, 90, 95)
    this.game.debug.text('Nominals objects: ' + this.nominals.length, 90, 115)
    this.game.debug.text('Jumpers objects: ' + this.jumpers.length, 90, 135)
    this.game.debug.text('Blood objects: ' + this.bunny.data.blood.length, 90, 155)
    this.game.debug.text('Trail objects: ' + this.bunny.data.trail.length, 90, 175)
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

    enemy.die()

    if (this.bunny.data.god) return

    this.bunny.die()
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
    if (this.score.bestDistance < this.score.currentDistance) {
      this.score.bestDistance = this.score.currentDistance
    }
  }

  start() {
    this.startLabel.hide()
    this.bunny.run()
  }

  createPowerUps() {
    this.powerUps = new Engine.Component.PowerUpGenerator(
      this.game,
      this.bunny,
      this.grounds
    )
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
      'Press spacebar\r\nto start'
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
      `Best ${this.score.bestDistance}m.`,
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
