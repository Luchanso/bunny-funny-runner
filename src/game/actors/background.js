class Background extends Phaser.TileSprite {
  constructor(game, x, y, name, speed) {
    super(game, x, y, 1024, 1024, name)

    this.tileScale.setTo(this.game.height / this.height)
    this.fixedToCamera = true
    this.width = this.game.width
    // this.height = this.game.height

    this._speed = speed
  }

  update() {
    this.tilePosition.x += this._speed
  }
}

Engine.Background = Background
