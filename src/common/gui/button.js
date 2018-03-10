import Phaser from 'phaser';
import { config } from '../../config';

const PADDING = 8;
const VERTICAL_SIZE = 36;
const PADDING_TOP = VERTICAL_SIZE / 2 + 3;
const CORNER_RADIUS = 2;

export default class Button extends Phaser.Graphics {
  constructor(game, x, y, text, onClick = () => {}, width) {
    super(game, x, y);

    this.data = {
      text,
      width
    };
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.events.onInputDown.add(onClick);

    this.createLabel();
    this.draw();
  }

  createLabel() {
    const { width, text } = this.data;
    const style = {
      font: '21px Open Sans',
      fill: 'white'
    };
    const x = width ? width / 2 : PADDING;
    const y = PADDING_TOP;

    this.label = new Phaser.Text(this.game, x, y, text, style);
    this.label.anchor.setTo(0.5);

    this.addChild(this.label);
  }

  draw() {
    const { label, data } = this;
    const width = data.width || label.width + PADDING * 2;
    const height = VERTICAL_SIZE;

    this.lineStyle(1, 0xffffff);
    this.beginFill(config.backgroundColor);
    this.drawRoundedRect(0, 0, width, height, CORNER_RADIUS);
    this.endFill();
  }
}
