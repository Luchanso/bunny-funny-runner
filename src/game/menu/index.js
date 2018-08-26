import Phaser from 'phaser';
import Config from '../../config';
import Btn from './ui/btn';
import Background from '../common/actors/background';
import preload from './preload';
import { GAME_SCENES } from '../../model/scene';

export default class Menu extends Phaser.Scene {
  constructor() {
    super(GAME_SCENES.MENU);
  }

  preload() {
    preload(this.load);
  }

  create() {
    this.cameras.main.setBackgroundColor(Config.backgroundColor);
    global.test = this.cameras.main;

    this.createBackground();
    // this.createPlayBtn();
    // this.createShopBtn();
    // this.createLogo();
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
    const addToScene = true;

    this.add.existing(
      new Background(this, 0, 0, 'layer2', -0.05, true),
      addToScene
    );
    this.backgrounds.add(
      new Background(this, 0, 0, 'layer3', -0.1, true),
      addToScene
    );
    this.backgrounds.add(
      new Background(this, 0, 0, 'layer4', -0.25, true),
      addToScene
    );
  }

  startGame() {
    this.scene.start(GAME_SCENES.MAIN);
  }
}
