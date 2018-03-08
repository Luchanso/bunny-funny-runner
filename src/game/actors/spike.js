class Spike extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, Engine.spritesheet, 'spikes_top.png');

    this.autoCull = true;
    this.anchor.setTo(0, 1);

    this.width *= Engine.scaleRatio;
    this.height *= Engine.scaleRatio;

    this.tint = 0x777777;
  }
}

Engine.Spike = Spike;
