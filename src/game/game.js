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

    this.load.image('tutorial', 'assets/sprites/tutorial/2xjump-2.png')
    this.load.image('buttonMore', 'assets/sprites/ui/buttonMore.png')

    this.load.audio('lose', ['assets/sounds/lose.mp3', 'assets/sounds/lose.ogg'])
    this.load.audio('coin', ['assets/sounds/coin.mp3', 'assets/sounds/coin.ogg'])
    this.load.audio('jump', ['assets/sounds/jump.mp3', 'assets/sounds/jump.ogg'])

    if (CloudAPI.logos.active()) {
      this.load.image('cloudgames', 'assets/sprites/clg-logo.png')
    }

    this.load.spritesheet('particles', 'assets/sprites/particles.png', 8, 8)
  }

  init() {
    this.distanceBetweenGrounds = 1285 * Engine.scaleRatio

    this.score = Engine.Service.get('Score')
    this.score.coins = 0

    this.paddingLeftCamera = 200

    window.game = this
  }

  create() {
    this.profiler = Engine.Service.get('Profiler')

    const worldHeight = 550 * 5
    this.stage.backgroundColor = 0xADE6FF // 0x555555//
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.setBounds(0, -(worldHeight - this.game.height), Number.MAX_VALUE, worldHeight);

    this.createBackground()
    this.createTutorial()
    this.createCloudGamesLogo()
    this.createBunny()
    this.createSpikes()
    this.createGrounds()
    this.createJumpers()
    this.createCoins()
    this.createEnemies()
    this.createPowerUps()
    this.createProgressBars()

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

  drawBorders() {
    const width = 20
    const color = 0x57daf6

    let graphics = this.add.graphics(0, 0)
    graphics.lineStyle(width, color)
    graphics.drawRect(0, 0, this.game.width, this.game.height)

    graphics.fixedToCamera = true
  }

  update() {
    if (this.bunny.data.isDead) {
      this.physics.arcade.collide(this.bunny.data.blood, this.grounds)
      this.physics.arcade.collide(this.bunny.data.blood, this.enemies)

      return
    }

    this.physics.arcade.overlap(this.bunny, this.coins, this.takeCoin, null, this)

    if (!this.bunny.data.jetPack) {
      this.physics.arcade.collide(this.bunny, this.grounds)
      this.physics.arcade.overlap(this.bunny, this.enemies, this.collideEnemies, null, this)
      this.physics.arcade.overlap(this.bunny, this.jumpers, this.overlapJumper, null, this)
      this.physics.arcade.overlap(this.bunny, this.powerUps, this.takePowerUp, null, this)
    }
    this.updateDie()
    this.updateMagnet()

    // TODO: Need incapsulation
    this.score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE)

    this.bottomSpikes.x = this.bunny.x - this.paddingLeftCamera
  }

  render() {
    // this.game.debug.body(this.cloud, 'rgba(20, 0, 255, 0.35)')
    // this.debugCountObject()
  }

  createCloudGamesLogo() {
    const ratio = 0.5
    let logo = this.game.add.sprite(0, 0, 'cloudgames')
    logo.width *= ratio
    logo.height *= ratio
    logo.x = this.game.width / 2
    logo.y = this.game.height - logo.height
    logo.anchor.setTo(0.5);

    logo.inputEnabled = true
    logo.input.useHandCursor = true
    logo.events.onInputDown.add(() => {
      if (CloudAPI && CloudAPI.links.active()) {
        window.open(CloudAPI.links.list()['logo']);
      }
    })
  }

  createProgressBars() {
    const paddingTop = 50
    const margin = 50

    this.progressJumps = new Engine.ProgressBar(
      this.game,
      this.game.width / 2 - Engine.ProgressBar.WIDTH / 2,
      paddingTop,
      "Infinity Jumps",
       0x8661ff
    )

    this.progressMagnet = new Engine.ProgressBar(
      this.game,
      this.game.width / 2 - Engine.ProgressBar.WIDTH / 2,
      this.progressJumps.y + margin,
      "Coin Magnet",
       0xff8000
    )

    this.progressUntouch = new Engine.ProgressBar(
      this.game,
      this.game.width / 2 - Engine.ProgressBar.WIDTH / 2,
      this.progressMagnet.y + margin,
      "Untouchability",
       0xFF0000
    )

    this.add.existing(this.progressJumps)
    this.add.existing(this.progressMagnet)
    this.add.existing(this.progressUntouch)
  }

  createDatGui() {
    let gui = new dat.GUI()

    let dg = document.getElementsByClassName('dg ac')[0]
    dg.style.right = (this.game.width / 2 - 245) + 'px'

    gui.addColor(this.progress, 'color');
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
    if (powerUp.type === Engine.PowerUp.type.MAGNET) {
      this.progressMagnet.animate(Engine.Bunny.MAGNET_TIME)
      this.bunny.activateMagnet()
    } else if (powerUp.type === Engine.PowerUp.type.GOD) {
      this.progressUntouch.animate(Engine.Bunny.GODMODE_TIME)
      this.bunny.activateGod()
    } else if (powerUp.type === Engine.PowerUp.type.WINGS) {
      this.progressJumps.animate(Engine.Bunny.WINGS_TIME)
      this.bunny.activateWings()
    } else if (powerUp.type === Engine.PowerUp.type.JETPACK) {
      this.bunny.activateJetPack()
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
    this.game.debug.text('Spikes objects: ' + this.bottomSpikes.length, 90, 195)
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
    if (bunny.data.jetPack) return

    jumper.activate()
    bunny.body.velocity.setTo(9000, -2000)
  }

  createSpikes() {
    const PROTOTYPE = new Engine.Spike(this.game, 0, 0)
    const COUNT = (this.game.width + this.bunny.x) / PROTOTYPE.width

    this.bottomSpikes = this.game.add.group()

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

  addButtonMore() {
    const { camera } = this.game
    const marginBottom = 50
    let button = this.game.add.sprite(0, 0, 'buttonMore')

    button.inputEnabled = true
    button.anchor.setTo(0.5, 1)
    button.x = camera.x + camera.width / 2
    button.y = camera.y + camera.height - marginBottom
    button.input.useHandCursor = true
    button.events.onInputDown.add(() => {
      if (CloudAPI && CloudAPI.links.active()) {
        window.open(CloudAPI.links.list()['games']);
      }
    })
  }

  lose() {
    this.loseLabel.show()

    this.addButtonMore();

    // TODO: Need incapsulation
    if (this.score.bestDistance < this.score.currentDistance) {
      this.score.bestDistance = this.score.currentDistance
    }

    if (CloudAPI) {
      CloudAPI.gameOver()
    }
  }

  start() {
    this.startLabel.hide()
    this.bunny.run()
  }

  createTutorial() {
    let tutorial = this.game.add.sprite(25, 25, 'tutorial')
    tutorial.width = 225
    tutorial.height = 225

    window.t = tutorial
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
      fill: 'rgb(255, 255, 255)',
      font: '50px Open Sans'
    }
    const distance = this.distanceBetweenGrounds;

    for (let i = 1; i < this.game.width / distance; i++) {
      let ground = new Engine.Ground(this.game, distance * i, 200)
      this.grounds.add(ground)
    }

    let label = this.add.text(
      this.game.width / 2,
      marginTop,
      `Best ${this.score.bestDistance}m`,
      style
    )
    label.anchor.setTo(0.5)

    this.bunny.bringToTop()
  }

  configurateCamera() {
    const smoothMove = 0.15
    const deadZoneHeight = 50

    this.camera.roundPx = false
    this.camera.follow(this.bunny, Phaser.Camera.FOLLOW_LOCKON, 1, smoothMove)
    this.camera.deadzone = new Phaser.Rectangle(this.paddingLeftCamera, this.game.height / 2 - this.bunny.height * 1.5, 1, deadZoneHeight)
  }

  createBackground() {
    this.backgrounds = this.add.group()

    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer2', -0.05))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer3', -0.1))
    this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer4', -0.25))
  }
}

Engine.Game = Game
