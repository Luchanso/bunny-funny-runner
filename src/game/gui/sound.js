class SoundControll extends Phaser.Sprite {
  constructor(game, x = 0, y = 0) {
    const state = game.sound.mute ? 'mute' : 'unmute';
    const size = 40;

    super(game, x, y, 'soundControll', state);

    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.events.onInputDown.add(this.click.bind(this));

    this.width = size;
    this.height = size;
  }

  click() {
    this.frameName = this.frameName === 'mute' ? 'unmute' : 'mute';
  }
}
