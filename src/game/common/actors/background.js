import Phaser from 'phaser';

export default class Background extends Phaser.TileSprite {
  constructor(game, x, y, name, speed, autoScroll = false) {
    super(game, x, y, 1024, 1024, name);

    this.tileScale.setTo(this.game.height / this.height);
    this.fixedToCamera = true;
    this.width = this.game.width;
    this.autoScroll = autoScroll;

    this.data.speed = speed;
    this.data.isStoped = true;

    if (this.autoScroll) {
      this.tween = this.game.add
        .tween(this.tilePosition)
        .to(
          {
            x: -1000
          },
          50000,
          null,
          false,
          0,
          -1,
          true
        )
        .start();
    }
  }

  update() {
    this.tilePosition.x = this.game.camera.x * this.data.speed;
  }
}
