class Loader extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    const illuminatiSize = {
      width: 440,
      height: 381
    }

    this.game.stage.backgroundColor = '#000';
    this.addProgressLabel();

    this.load.onFileComplete.add(this.refreshProgress, this);

    // this.load.audio('music1', 'assets/music/Yal!X - Forgiven.mp3');
    this.load.image('icon-play', 'assets/img/icon-play.png');
    this.load.image('icon-share', 'assets/img/icon-share.png');
    this.load.image('icon-settings', 'assets/img/icon-settings.png');
    this.load.image('icon-star', 'assets/img/icon-star.png');
    this.load.image('icon-apps', 'assets/img/icon-apps.png');

    this.load.image('illuminati', 'assets/img/illuminati.png');
    this.load.image('illuminati3d-1', 'assets/img/illuminati3d-1.png');
    this.load.image('illuminati3d-2', 'assets/img/illuminati3d-2.png');

    // this.loadSounds();

    this.game.cache.addBitmapData(Engine.Triangle.bitmapKey, Engine.Triangle.generateSprite(this.game));
    this.game.cache.addBitmapData(Engine.Meteor.bitmapKey, Engine.Meteor.generateSprite(this.game));

    this.generateWaveTexture();
  }

  create() {
    let numberOfGradation = 3;
    // this.state.start('Menu');
    this.state.start('Game', true, false, numberOfGradation);
    // this.state.start('Lvlpick', true, false, 0x3F51B5);
  }

  generateWaveTexture() {
    let data = Engine.Wave.generateAtlasData();
    this.game.cache.addTextureAtlas(Wave.bitmapKey, '', data.bitmap.canvas, data.atlasData, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  }

  addProgressLabel() {
    let style = {
      font: '41px Open Sans',
      fill: '#00E676',
    }

    this.progressLabel = this.add.text(this.game.world.centerX, this.game.world.centerY, 'Loading: 0% (0/0)', style);
    this.progressLabel.anchor.setTo(0.5);
  }

  loadSounds() {
    const numberOfSound = 12;

    for (let i = 0; i < numberOfSound; i++) {
      this.load.audio('sound-note' + i, `assets/sounds/piano (${i}).wav`);
    }
  }

  refreshProgress(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progressLabel.text = `Loading ${progress}% (${totalLoaded}/${totalFiles})`;
  }
}

Engine.Loader = Loader;
