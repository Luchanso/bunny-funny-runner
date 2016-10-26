class PowerUp extends Phaser.Sprite {
  constructor(game, x, y, type = PowerUp.types.MAGNET) {
    super(game, x, y, Engine.spritesheet, type)

    this.width *= Engine.scaleRatio
    this.height *= Engine.scaleRatio

    this.type = type

    this.game.physics.arcade.enable([ this ])

    this.anchor.setTo(0.5)
  }
}

PowerUp.types = {
  MAGNET: 'powerup_bubble.png',
}

Engine.PowerUp = PowerUp
