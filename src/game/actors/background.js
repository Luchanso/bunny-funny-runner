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
    this.tilePosition.x = this.game.camera.x * this.data.speed
  }
}

Engine.Background = Background
