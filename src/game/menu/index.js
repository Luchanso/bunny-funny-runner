import Phaser from 'phaser';
import { config } from '../config';
import Btn from './ui/btn';
import Background from '../common/actors/background';
import preload from './preload';
import { GAME_SCENES, REACT_SCENES } from '../../model/scene';

export default class Menu extends Phaser.State {
  preload() {
    preload(this.load);
  }

  create() {
    this.stage.backgroundColor = config.backgroundColor;

    this.createBackground();
    this.createPlayBtn();
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

  createShopBtn() {
    const btnColor = 0xffffff;
    const icon = 'i-shop';

    this.shopBtn = new Btn(
      this.game,
      this.game.width / 2 - 100,
      this.game.height / 2,
      btnColor,
      icon
    );

    this.shopBtn.clicked.add(this.openShop, this);
    this.add.existing(this.shopBtn);
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
    this.state.start(GAME_SCENES.MAIN);
  }

  openShop() {
    this.state.start(REACT_SCENES.SHOP);
  }
}
