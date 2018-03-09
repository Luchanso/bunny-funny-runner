import Phaser from 'phaser';

export default class AirTrail extends Phaser.Graphics {
  constructor(game, follow) {
    super(game, 0, 0);

    this.follow = follow;
    this.followWidth = follow.width;
    this.followHeight = follow.height;
    this.parts = [];

    this.data.visible = false;
  }

  drawTrail() {
    const color = 0x00a3ff;
    const accRatio = 0.01;
    const lineWidth = this.followHeight / 2;
    let accumulator = 0;

    this.clear();

    this.parts.unshift({
      x: this.follow.x + this.follow.width / 2,
      y: this.follow.y + this.follow.height
    });

    for (let i = 0; i < this.parts.length - 1; i++) {
      const part = this.parts[i];
      const nextPart = this.parts[i + 1];

      accumulator += accRatio;

      this.lineStyle(lineWidth, color, accumulator);

      this.moveTo(part.x, part.y);
      this.lineTo(nextPart.x, nextPart.y);
    }
  }

  update() {
    if (this.follow.body.velocity.y < -900 && !this.follow.data.isDead) {
      this.drawTrail();
    } else {
      this.parts = [];
    }
  }
}
