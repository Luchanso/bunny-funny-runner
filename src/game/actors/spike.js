class Spike extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, Engine.spritesheet, 'spikes_top.png')

    this.autoCull = true
    this.anchor.setTo(0, 1)

    this.width *= 0.35
    this.height *= 0.35

    this.tint = 0x777777
  }
}

Engine.Spike = Spike
