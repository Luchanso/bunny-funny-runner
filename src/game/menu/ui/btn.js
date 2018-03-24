import Phaser from 'phaser';

export default class Btn extends Phaser.Graphics {
  constructor(game, x, y, color, icon) {
    super(game, x, y);

    this.color = color;
    this.icon = new Phaser.Sprite(this.game, 0, 0, icon);
    this.icon.anchor.setTo(0.5);

    this.addChild(this.icon);

    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.events.onInputDown.add(this.click, this);

    this.radius = this.icon.width;
    this.clicked = new Phaser.Signal();
  }

  click() {
    this.clicked.dispatch();
  }
}
