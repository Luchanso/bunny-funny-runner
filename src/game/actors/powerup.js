class PowerUp extends Phaser.Sprite {
  constructor(game, x, y, type = PowerUp.types.WINGS) {
    super(game, x, y, Engine.spritesheet, type)

    const customRatio = 0.25

    this.width *= Engine.scaleRatio + customRatio
    this.height *= Engine.scaleRatio + customRatio

    this.type = type

    this.game.physics.arcade.enable([ this ])

    this.anchor.setTo(0.5)
  }
}

PowerUp.types = {
  MAGNET: 'powerup_bubble.png',
  GOD: 'powerup_bunny.png',
  WINGS: 'powerup_wings.png',
}

Engine.PowerUp = PowerUp
