import Phaser from 'phaser';
import Btn from './ui/btn';

export default class Menu extends Phaser.State {
  preload() {
    this.load.image('i-play', 'assets/sprites/icons/play.png');
    this.load.image('i-settings', 'assets/sprites/icons/settings.png');
    this.load.image('i-shop', 'assets/sprites/icons/shop.png');
  }

  create() {
    this.stage.backgroundColor = 0x0d47a1;

    this.createPlayBtn();
    this.createSettingsBtn();
    this.createShopBtn();
    this.createLogo();
  }

  createLogo() {
    const style = {
      font: '50px Open Sans',
      fill: 'white'
    };

    this.logo = this.add.text(
      this.game.width / 2,
      this.game.height / 4,
      '🐰 Bunny Funny Runner 🐰 ',
      style
    );

    this.logo.anchor.setTo(0.5);
  }

  createSettingsBtn() {
    const btnColor = 0xade6ff;
    const icon = 'i-settings';
    const margin = 150;

    this.settings = new Btn(
      this.game,
      this.game.width / 2 + margin,
      this.game.height / 2,
      btnColor,
      icon
    );
    this.settings.icon.tint = 0x26c6da;
    // this.settings.clicked.add(this.startGame, this)
    this.add.existing(this.settings);
  }

  createShopBtn() {
    const btnColor = 0xbf360c;
    const icon = 'i-shop';
    const margin = -150;

    this.settings = new Btn(
      this.game,
      this.game.width / 2 + margin,
      this.game.height / 2,
      btnColor,
      icon
    );
    // this.settings.icon.tint = 0x00E676
    this.settings.clicked.add(this.openShop, this);
    this.add.existing(this.settings);
  }

  createPlayBtn() {
    const btnColor = 0xade6ff;
    const icon = 'i-play';

    this.play = new Btn(
      this.game,
      this.game.width / 2,
      this.game.height / 2,
      btnColor,
      icon
    );
    this.play.icon.tint = 0x26c6da;
    this.play.clicked.add(this.startGame, this);
    this.add.existing(this.play);
  }

  startGame() {
    this.stage.backgroundColor = this.play.color;
    this.state.start('Game');
  }

  openShop() {
    this.stage.backgroundColor = this.play.color;
    this.state.start('Shop');
  }
}
