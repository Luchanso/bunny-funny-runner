class Background extends Phaser.TileSprite {
  constructor(game, x, y, name, speed) {
    super(game, x, y, 1024, 1024, name)

    this.tileScale.setTo(this.game.height / this.height)
    this.fixedToCamera = true
    this.width = this.game.width

    this.data.speed = speed
    this.data.isStoped = true
  }

  update() {
    if (!this.data.isStoped)
      this.tilePosition.x += this.data.speed
  }

  stop() {
    this.data.isStoped = true
  }

  resume() {
    this.data.isStoped = false
  }
}

Engine.Background = Background
