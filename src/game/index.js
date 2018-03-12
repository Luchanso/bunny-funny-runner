import Phaser from 'phaser';
import Service from '../service';
import { config } from '../config';
import SoundControll from './gui/sound';
// TODO: перенести в gui
import ProgressBar from './actors/progress-bar';
// TODO: переименовать в power-up
import PowerUp from './actors/powerup';
import Bunny from './actors/bunny';
import JumperGenerator from './components/generators/jumper';
import EnemyGenerator from './components/generators/enemy';
import NominalGenerator from './components/generators/nominals';
import PowerUpGenerator from './components/generators/powerup';
import CoinGenerator from './components/generators/coin';
import GroundsGenerator from './components/generators/ground';
import Spike from './actors/spike';
import BestDistance from './actors/best-distance';
import Message from './gui/message';
import Distance from './gui/distace';
import CoinCounter from './gui/coin-counter';
import Ground from './actors/ground';
import Background from '../common/actors/background';
import Score from '../service/score';
import LoseModal from './gui/lose-modal';

import spritesheetImg from './assets/spritesheet/jumper.png';
import spritesheetXML from './assets/spritesheet/jumper.xml';
import layer2Img from '../common/assets/background/layer2.png';
import layer3Img from '../common/assets/background/layer3.png';
import layer4Img from '../common/assets/background/layer4.png';
import tutorialImg from './assets/tutorial/2xjump-2.png';
import soundControllImg from './assets/ui/soundControll.png';
import soundControllJSON from './assets/ui/soundControll.json';
import coinMP3 from './assets/sounds/coin.mp3';
import coinOGG from './assets/sounds/coin.ogg';
import jumpMP3 from './assets/sounds/jump.mp3';
import jumpOGG from './assets/sounds/jump.ogg';
import loseMP3 from './assets/sounds/lose.mp3';
import loseOGG from './assets/sounds/lose.ogg';
import particlesImg from './assets/sprites/particles.png';

export default class Game extends Phaser.State {
  preload() {
    this.load.atlasXML(config.spritesheet, spritesheetImg, spritesheetXML);

    this.load.image('layer2', layer2Img);
    this.load.image('layer3', layer3Img);
    this.load.image('layer4', layer4Img);

    this.load.image('tutorial', tutorialImg);

    this.load.atlasJSONArray(
      'soundControll',
      soundControllImg,
      null,
      soundControllJSON
    );

    this.load.audio('lose', [loseMP3, loseOGG]);
    this.load.audio('coin', [coinMP3, coinOGG]);
    this.load.audio('jump', [jumpMP3, jumpOGG]);

    this.load.spritesheet('particles', particlesImg, 8, 8);
  }

  init() {
    this.distanceBetweenGrounds = 1285 * config.scaleRatio;

    this.score = Service.get('Score');
    this.score.coins = 0;

    this.paddingLeftCamera = 200;

    if (process.env.NODE_ENV === 'development') {
      window.game = this;
    }
  }

  create() {
    if (!Phaser.Device.desktop) {
      this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    }

    this.profiler = Service.get('Profiler');

    const worldHeight = 550 * 5;
    this.stage.backgroundColor = config.backgroundColor; // 0x555555//
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.world.setBounds(
      0,
      -(worldHeight - this.game.height),
      Number.MAX_VALUE,
      worldHeight
    );

    this.createBackground();
    this.createTutorial();
    this.createBunny();
    this.createSpikes();
    this.createGrounds();
    this.createJumpers();
    this.createCoins();
    this.createEnemies();
    this.createPowerUps();
    this.createProgressBars();

    this.bunny.addTrail();

    this.configurateCamera();
    this.addControl();
    this.createDistanceLabel();
    this.createCoinsLabel();
    this.createLoseLabel();
    this.createStartLabel();
    this.createBestDistance();
    this.createNominals();

    this.createLoseModal();
    this.createSoundControll();
  }

  drawBorders() {
    const width = 20;
    const color = 0x57daf6;

    const graphics = this.add.graphics(0, 0);
    graphics.lineStyle(width, color);
    graphics.drawRect(0, 0, this.game.width, this.game.height);

    graphics.fixedToCamera = true;
  }

  update() {
    if (this.bunny.data.isDead) {
      this.physics.arcade.collide(this.bunny.data.blood, this.grounds);
      this.physics.arcade.collide(this.bunny.data.blood, this.enemies);

      return;
    }

    this.physics.arcade.overlap(
      this.bunny,
      this.coins,
      this.takeCoin,
      null,
      this
    );

    if (!this.bunny.data.jetPack) {
      this.physics.arcade.collide(this.bunny, this.grounds);
      this.physics.arcade.overlap(
        this.bunny,
        this.enemies,
        this.collideEnemies,
        null,
        this
      );
      this.physics.arcade.overlap(
        this.bunny,
        this.jumpers,
        this.overlapJumper,
        null,
        this
      );
      this.physics.arcade.overlap(
        this.bunny,
        this.powerUps,
        this.takePowerUp,
        null,
        this
      );
    }
    this.updateDie();
    this.updateMagnet();

    // TODO: Need incapsulation
    this.score.currentDistance = Math.round(
      this.bunny.x / Score.MULTIPER_DISTANCE
    );

    this.bottomSpikes.x = this.bunny.x - this.paddingLeftCamera;
  }

  // render() {
  //   this.game.debug.body(this.cloud, 'rgba(20, 0, 255, 0.35)')
  //   this.debugCountObject()
  // }

  createSoundControll() {
    const soundControll = new SoundControll(this.game);
    this.game.add.existing(soundControll);
    soundControll.x = 5;
    soundControll.y = 5;
    soundControll.fixedToCamera = true;

    soundControll.events.onInputDown.add(() => {
      if (soundControll.frameName === 'mute') {
        this.mute();
      } else {
        this.unmute();
      }
    });
  }

  createLoseModal() {
    this.loseModal = new LoseModal(this.game, 0, 0, this.restart, this.reset);
    this.loseModal.visible = false;
    this.game.add.existing(this.loseModal);
  }

  restart = () => {
    this.state.restart(true, false);
  };

  reset = () => {
    this.bunny.reset(500, 500);
    // TODO: Make logic
  };

  mute() {
    this.game.sound.mute = true;
    return true;
  }

  unmute() {
    this.game.sound.mute = false;
    return true;
  }

  createProgressBars() {
    const paddingTop = 50;
    const margin = 50;

    this.progressJumps = new ProgressBar(
      this.game,
      this.game.width / 2 - ProgressBar.WIDTH / 2,
      paddingTop,
      'Infinity Jumps',
      0x8661ff
    );

    this.progressMagnet = new ProgressBar(
      this.game,
      this.game.width / 2 - ProgressBar.WIDTH / 2,
      this.progressJumps.y + margin,
      'Coin Magnet',
      0xff8000
    );

    this.progressUntouch = new ProgressBar(
      this.game,
      this.game.width / 2 - ProgressBar.WIDTH / 2,
      this.progressMagnet.y + margin,
      'Untouchability',
      0xff0000
    );

    this.add.existing(this.progressJumps);
    this.add.existing(this.progressMagnet);
    this.add.existing(this.progressUntouch);
  }

  async createDatGui() {
    const dat = (await import('dat.gui')).default;
    this.gui = new dat.GUI();

    const dg = document.getElementsByClassName('dg ac')[0];
    dg.style.right = `${this.game.width / 2 - 245}px`;

    this.gui.add(this.score, 'coins', 0);
  }

  updateMagnet() {
    if (!this.bunny.data.magnet) return;

    const speed = 50000;
    const minSpeed = 600;
    const maxSpeed = 1000;

    // TODO: Need optimization
    this.coins.forEach(coin => {
      const distance = this.game.physics.arcade.distanceBetween(
        this.bunny,
        coin
      );
      if (distance < config.magnetDistace) {
        this.game.physics.arcade.accelerateToObject(
          coin,
          this.bunny,
          speed,
          this.rnd.between(minSpeed, maxSpeed),
          this.rnd.between(minSpeed, maxSpeed)
        );
      }
    });
  }

  takePowerUp(bunny, powerUp) {
    if (powerUp.type === PowerUp.type.MAGNET) {
      this.progressMagnet.animate(Bunny.MAGNET_TIME);
      this.bunny.activateMagnet();
    } else if (powerUp.type === PowerUp.type.GOD) {
      this.progressUntouch.animate(Bunny.GODMODE_TIME);
      this.bunny.activateGod();
    } else if (powerUp.type === PowerUp.type.WINGS) {
      this.progressJumps.animate(Bunny.WINGS_TIME);
      this.bunny.activateWings();
    } else if (powerUp.type === PowerUp.type.JETPACK) {
      this.bunny.activateJetPack();
    }
    powerUp.kill();
  }

  takeCoin(bunny, coin) {
    const x = this.bunny.x + this.bunny.width / 2;
    const { y } = this.bunny;

    this.nominals.generate(x, y, coin.data.nominal);

    this.score.coins += coin.data.nominal;

    coin.take();
    coin.kill();
  }

  debugCountObject() {
    let summ = 0;

    // for (const item of this.world.children) {
    //   summ += item.children.length + 1;
    // }

    summ = this.world.children.reduce(
      (prev, curr) => prev + curr.children.length + 1,
      0
    );

    this.game.debug.text(`Objects in memory: ${summ}`, 90, 15);
    this.game.debug.text(
      `Rendered objects: ${this.camera.totalInView}`,
      90,
      35
    );
    this.game.debug.text(`Coins objects: ${this.coins.length}`, 90, 55);
    this.game.debug.text(`Enemies objects: ${this.enemies.length}`, 90, 75);
    this.game.debug.text(`Grounds objects: ${this.grounds.length}`, 90, 95);
    this.game.debug.text(`Nominals objects: ${this.nominals.length}`, 90, 115);
    this.game.debug.text(`Jumpers objects: ${this.jumpers.length}`, 90, 135);
    this.game.debug.text(
      `Blood objects: ${this.bunny.data.blood.length}`,
      90,
      155
    );
    this.game.debug.text(
      `Trail objects: ${this.bunny.data.trail.length}`,
      90,
      175
    );
    this.game.debug.text(
      `Spikes objects: ${this.bottomSpikes.length}`,
      90,
      195
    );
  }

  updateDie() {
    if (this.bunny.y > this.game.height - 100 && !this.bunny.data.isDead) {
      this.bunny.die();
    }
  }

  createJumpers() {
    this.jumpers = new JumperGenerator(this.game, this.bunny, this.grounds);
  }

  createEnemies() {
    this.enemies = new EnemyGenerator(this.game, this.bunny, this.grounds);
  }

  collideEnemies(bunny, enemy) {
    if (this.bunny.data.isDead) return;

    enemy.die();

    if (this.bunny.data.god) return;

    this.bunny.die();
  }

  overlapJumper(bunny, jumper) {
    if (jumper.data.activated) return;
    if (bunny.data.jetPack) return;

    jumper.activate();
    bunny.body.velocity.setTo(9000, -2000);
  }

  createSpikes() {
    const PROTOTYPE = new Spike(this.game, 0, 0);
    const COUNT = (this.game.width + this.bunny.x) / PROTOTYPE.width;

    this.bottomSpikes = this.game.add.group();

    for (let i = 0; i < COUNT; i++) {
      const spike = new Spike(this.game, i * PROTOTYPE.width, this.game.height);

      this.bottomSpikes.add(spike);
    }
  }

  createNominals() {
    this.nominals = new NominalGenerator(this.game, this.bunny);
  }

  createBestDistance() {
    this.bestDistance = new BestDistance(this.game);
  }

  lose() {
    // this.loseLabel.show();
    this.loseModal.visible = true;
    this.loseModal.reset(this.score.currentDistance, this.score.coins, '999');

    // TODO: Need incapsulation
    if (this.score.bestDistance < this.score.currentDistance) {
      this.score.bestDistance = this.score.currentDistance;
    }
  }

  start() {
    this.startLabel.hide();
    this.bunny.run();
  }

  createTutorial() {
    const tutorial = this.game.add.sprite(25, 25, 'tutorial');
    tutorial.width = 225;
    tutorial.height = 225;

    window.t = tutorial;
  }

  createPowerUps() {
    this.powerUps = new PowerUpGenerator(this.game, this.bunny, this.grounds);
  }

  createCoins() {
    this.coins = new CoinGenerator(this.game, this.bunny, this.grounds);
  }

  getScreenText() {
    if (Phaser.Device.desktop) return 'Press spacebar';

    return 'Touch the screen';
  }

  // TODO: remove it
  createLoseLabel() {
    this.loseLabel = new Message(
      this.game,
      this.game.width / 2,
      this.game.height / 2,
      `You lose :-(\r\n${this.getScreenText()}`
    );

    this.loseLabel.anchor.setTo(0.5);
    this.add.existing(this.loseLabel);
  }

  createStartLabel() {
    this.startLabel = new Message(
      this.game,
      this.game.width / 2,
      this.game.height / 2,
      `${this.getScreenText()}\r\nto start`
    );

    this.startLabel.anchor.setTo(0.5);
    this.startLabel.show();
    this.add.existing(this.startLabel);
  }

  createDistanceLabel() {
    const marginLeft = 15;
    const marginTop = 10;

    this.distanceLabel = new Distance(
      this.game,
      this.game.width - marginLeft,
      marginTop
    );
    this.distanceLabel.anchor.setTo(1, 0);
    this.add.existing(this.distanceLabel);
  }

  createCoinsLabel() {
    const padding = 20;
    const marginTop =
      this.distanceLabel.y + this.distanceLabel.height / 2 + padding;
    const marginLeft = 15;

    this.coinsLabel = new CoinCounter(
      this.game,
      this.game.width - marginLeft,
      marginTop
    );
    this.coinsLabel.anchor.setTo(1, 0);
    this.add.existing(this.coinsLabel);
  }

  addControl() {
    const { touch, keyboard, mouse } = this.input;
    const hotkeySpacebar = keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    const hotkeyEnter = keyboard.addKey(Phaser.KeyCode.ENTER);

    touch.touchStartCallback = this.handleSpacebarDown;
    mouse.mouseDownCallback = this.handleSpacebarDown;

    hotkeySpacebar.onDown.add(this.handleSpacebarDown);
    hotkeyEnter.onDown.add(this.handleEnterDown);
  }

  handleSpacebarDown = () => {
    if (this.bunny.data.running) {
      this.bunny.jump();
    } else {
      this.start();
    }
  };

  handleEnterDown = () => {
    if (this.bunny.data.isDead) {
      this.state.restart(true, false);
    }
  };

  createStartGround() {
    const marginBottom = 250;
    const x = 100;
    const y = this.bunny.y + marginBottom;
    const type = Ground.type.GRASS;
    const small = false;
    const broken = false;

    this.startGround = new Ground(this.game, x, y, type, small, broken);

    this.grounds.add(this.startGround);
  }

  createBunny() {
    this.bunny = new Bunny(this.game, 150, 150, 'bunny2');
    if (process.env.NODE_ENV === 'development') {
      window.bunny = this.bunny;
    }
    this.bunny.onDied.add(this.lose, this);
    this.add.existing(this.bunny);
  }

  createGrounds() {
    this.grounds = new GroundsGenerator(
      this.game,
      this.bunny,
      this.distanceBetweenGrounds
    );
    this.createStartGround();
    this.createFirstGrounds();
  }

  createFirstGrounds() {
    const marginTop = 100;
    const style = {
      fill: 'rgb(255, 255, 255)',
      font: '50px Open Sans'
    };
    const distance = this.distanceBetweenGrounds;

    for (let i = 1; i < this.game.width / distance; i++) {
      const ground = new Ground(this.game, distance * i, 200);
      this.grounds.add(ground);
    }

    const label = this.add.text(
      this.game.width / 2,
      marginTop,
      `Best ${this.score.bestDistance}m`,
      style
    );
    label.anchor.setTo(0.5);

    this.bunny.bringToTop();
  }

  configurateCamera() {
    const smoothMove = 0.15;
    const deadZoneHeight = 50;

    this.camera.roundPx = false;
    this.camera.follow(this.bunny, Phaser.Camera.FOLLOW_LOCKON, 1, smoothMove);
    this.camera.deadzone = new Phaser.Rectangle(
      this.paddingLeftCamera,
      this.game.height / 2 - this.bunny.height * 1.5,
      1,
      deadZoneHeight
    );
  }

  createBackground() {
    if (process.env.OPTIMIZATION) {
      return;
    }

    this.backgrounds = this.add.group();

    this.backgrounds.add(new Background(this.game, 0, 0, 'layer2', -0.05));
    this.backgrounds.add(new Background(this.game, 0, 0, 'layer3', -0.1));
    this.backgrounds.add(new Background(this.game, 0, 0, 'layer4', -0.25));
  }
}
