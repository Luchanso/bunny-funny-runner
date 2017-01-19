class Loader extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }

  create() {
    this.state.start('Game');
  }

  addProgressLabel() {
    let style = {
      font: '41px Open Sans',
      fill: '#00E676',
    }

    this.progressLabel = this.add.text(this.game.world.centerX, this.game.world.centerY, 'Loading: 0% (0/0)', style);
    this.progressLabel.anchor.setTo(0.5);
  }

  refreshProgress(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progressLabel.text = `Loading ${progress}% (${totalLoaded}/${totalFiles})`;
  }
}

Engine.Loader = Loader;
