import Phaser from 'phaser';
import { config } from '../config';
import Btn from './ui/btn';
import Background from '../common/actors/background';

import layer2Img from '../common/assets/background/layer2.png';
import layer3Img from '../common/assets/background/layer3.png';
import layer4Img from '../common/assets/background/layer4.png';

import playImg from '../common/assets/icons/play.png';
import shopImg from '../common/assets/icons/shop.png';

export default class Menu extends Phaser.State {
  preload() {
    this.load.image('layer2', layer2Img);
    this.load.image('layer3', layer3Img);
    this.load.image('layer4', layer4Img);
    this.load.image('i-play', playImg);
    // this.load.image('i-settings', 'assets/sprites/icons/settings.png');
    this.load.image('i-shop', shopImg);
  }

  create() {
    this.stage.backgroundColor = config.backgroundColor;

    // this.createSettingsBtn();
    this.createBackground();
    this.createPlayBtn();
    this.createShopBtn();
    this.createLogo();
  }

  createLogo() {
    const style = {
      font: '50px Open Sans',
      fill: '#91d4fa'
    };

    this.logo = this.add.text(
      this.game.width / 2,
      -120,
      'Bunny Funny Runner',
      style
    );

    this.game.add
      .tween(this.logo)
      .from({
        y: 0,
        alpha: 0
      })
      .to(
        {
          y: 120,
          alpha: 1
        },
        600,
        Phaser.Easing.Cubic.Out
      )
      .start();

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
    const btnColor = 0xffffff;
    const icon = 'i-shop';

    this.settings = new Btn(
      this.game,
      this.game.width / 2 - 100,
      this.game.height / 2,
      btnColor,
      icon
    );

    this.settings.clicked.add(this.openShop, this);
    this.add.existing(this.settings);
  }

  createPlayBtn() {
    const btnColor = 0xffffff;
    const icon = 'i-play';

    this.play = new Btn(
      this.game,
      this.game.width / 2 + 100,
      this.game.height / 2,
      btnColor,
      icon
    );

    this.play.clicked.add(this.startGame, this);
    this.add.existing(this.play);
  }

  createBackground() {
    this.backgrounds = this.add.group();

    this.backgrounds.add(
      new Background(this.game, 0, 0, 'layer2', -0.05, true)
    );
    this.backgrounds.add(new Background(this.game, 0, 0, 'layer3', -0.1, true));
    this.backgrounds.add(
      new Background(this.game, 0, 0, 'layer4', -0.25, true)
    );
  }

  startGame() {
    this.state.start('Main');
  }

  openShop() {
    this.state.start('Shop');
  }
}
