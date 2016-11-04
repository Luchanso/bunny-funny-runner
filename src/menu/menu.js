class Menu extends Phaser.State {
  constructor() {
    super()
  }

  preload() {
    this.load.image('i-play', 'assets/sprites/icons/play.png')
  }

  create() {
    this.stage.backgroundColor = 0x0D47A1

    const btnColor = 0xADE6FF
    const icon = 'i-play'

    this.play = new Engine.Btn(
      this.game,
      this.game.width / 2,
      this.game.height / 2,
      btnColor,
      icon
    )
    this.play.icon.tint = 0x26C6DA
    this.play.clicked.add(this.startGame, this)
    this.add.existing(this.play)
  }

  startGame() {
    this.stage.backgroundColor = this.play.color
    this.state.start('Game')
  }
}

Engine.Menu = Menu
