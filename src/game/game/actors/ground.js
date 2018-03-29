import Phaser from 'phaser';
import { config } from '../../config';

export default class Ground extends Phaser.Sprite {
  constructor(
    game,
    x,
    y,
    type = Ground.type.GRASS,
    small = false,
    broken = false
  ) {
    const name = Ground.getName(type, small, broken);

    super(game, x, y, config.spritesheet, name);

    this.width *= config.scaleRatio;
    this.height *= config.scaleRatio;

    this.autoCull = true;

    this.game.physics.enable([this]);
    this.body.immovable = true;
    this.body.checkCollision.down = false;
    this.body.checkCollision.left = false;

    this.data.name = name;
    this.data.type = type;
    this.data.small = small;
    this.data.broken = broken;

    this.addEnviroment();
  }

  addEnviroment() {
    const { type } = this.data;

    if (type === Ground.type.GRASS && Phaser.Utils.chanceRoll(5)) {
      this.addBrownGrass();
    } else if (type === Ground.type.GRASS && Phaser.Utils.chanceRoll(15)) {
      this.addGreenGrass();
    }

    if (type === Ground.type.WOOD && Phaser.Utils.chanceRoll(10)) {
      this.addBrownGrass();
    }
    if (type === Ground.type.STONE && Phaser.Utils.chanceRoll(15)) {
      this.addBrownGrass();
    }
    if (type === Ground.type.SAND && Phaser.Utils.chanceRoll(15)) {
      this.addCactus();
    }

    if (
      type !== Ground.type.SNOW &&
      type !== Ground.type.SAND &&
      Phaser.Utils.chanceRoll(1)
    ) {
      this.addMushroom();
    }
  }

  addMushroom() {
    const name = this.game.rnd.pick(['mushroom_brown.png', 'mushroom_red.png']);

    this.addEnviromentObject(name);
  }

  addGreenGrass() {
    const name = this.game.rnd.pick(['grass1.png', 'grass2.png']);

    this.addEnviromentObject(name);
  }

  addBrownGrass() {
    const name = this.game.rnd.pick(['grass_brown1.png', 'grass_brown2.png']);

    this.addEnviromentObject(name);
  }

  addCactus() {
    this.addEnviromentObject('cactus.png');
  }

  addEnviromentObject(name) {
    const x = this.game.rnd.between(0, this.width * 1.5);
    const y = 0;

    const env = new Phaser.Sprite(this.game, x, y, config.spritesheet, name);
    env.anchor.setTo(0, 1);
    this.addChild(env);
  }

  reset(x, y, type, small, broken) {
    super.reset(x, y);

    const name = Ground.getName(type, small, broken);

    this.frameName = name;

    this.data.name = name;
    this.data.type = type;
    this.data.small = small;
    this.data.broken = broken;

    this.removeChildren();
    this.addEnviroment();
  }
}

Ground.type = {
  GRASS: 'grass',
  CAKE: 'cake',
  SAND: 'sand',
  SNOW: 'snow',
  STONE: 'stone',
  WOOD: 'wood'
};

Ground.getName = (type, small, broken) => {
  let name = `ground_${type}`;

  if (small) name += '_small';
  if (broken) name += '_broken';

  name += '.png';

  return name;
};
