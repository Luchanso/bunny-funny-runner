class Enemy extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, Engine.spritesheet, name)

    this.game.physics.arcade.enable([ this ])
    this.body.immovable = true

    this.autoCull = true

    this.width *= Engine.scaleRatio
    this.height *= Engine.scaleRatio
  }

  die() {

  }
}

Engine.Enemy = Enemy
