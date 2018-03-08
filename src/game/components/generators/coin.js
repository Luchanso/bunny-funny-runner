import Phaser from 'phaser';
import Generator from './generator';
import Coin from '../../actors/coin';

export default class CoinGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny);

    this.grounds = grounds;
    this.grounds.signals.generate.add(this.createdNewGround, this);

    this.baseObject = new Coin(this.game, 0, 0);

    this.createTemplates();
  }

  createTemplates() {
    this.templates = [];

    this.templates.push([
      [0, 0, 2, 3, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 1, 3, 1, 0],
      [1, 1, 1, 1, 1]
    ]);

    this.templates.push([
      [3, 1, 1, 3],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [2, 1, 1, 2]
    ]);

    this.templates.push([[0, 1, 0], [1, 3, 1], [0, 1, 0]]);

    this.templates.push([[3]]);

    this.templates.push([[3, 3, 3]]);

    this.templates.push([
      [0, 0, 0, 3, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 2, 0, 0, 0, 2, 0],
      [2, 0, 0, 0, 0, 0, 2],
      [1, 1, 1, 1, 1, 1, 1]
    ]);

    this.templates.push([[0, 0, 1], [0, 3, 0], [1, 0, 0]]);

    this.templates.push([[1, 0, 0], [0, 3, 0], [0, 0, 1]]);

    this.templates.push([[1, 0, 0], [0, 3, 0], [0, 0, 1]]);
  }

  createdNewGround(ground) {
    if (!Phaser.Utils.chanceRoll(30)) return;

    const padding = 1;

    const template = this.game.rnd.pick(this.templates);

    // if (ground.data.small) {
    //   template = this.templates[this.game.rnd.pick([1, 2, 3])]
    // } else {
    // }

    const direction = this.game.rnd
      .pick([this.getOffsetRight, this.getOffsetTop, this.getOffsetTopRight])
      .bind(this)(ground, template);

    const offsetX = direction.x;
    const offsetY = direction.y;

    const templateWidth = template[0].length * this.baseObject.width;
    const templateHeight = template.length * this.baseObject.height;

    for (let i = 0; i < template.length; i++) {
      for (let j = 0; j < template[i].length; j++) {
        if (template[i][j] > 0) {
          const x =
            offsetX + j * (this.baseObject.width + padding) - templateWidth / 2;
          const y =
            offsetY + i * (this.baseObject.height + padding) - templateHeight;

          this.generate(x, y, template[i][j]);
        }
      }
    }
  }

  generate(x, y, maxType) {
    const number = Math.random();
    let type = 0;

    if (number < 0.15 && maxType > 2) {
      // 15%
      type = Coin.type.GOLD;
    } else if (number > 0.15 && number < 0.5 && maxType > 1) {
      // %35
      type = Coin.type.SILVER;
    } else {
      // 50%
      type = Coin.type.BRONZE;
    }

    let coin = this.getFirstDead();
    if (coin == null) {
      coin = new Coin(this.game, x, y, type);
      this.add(coin);
    } else {
      coin.reset(x, y);
    }

    return coin;
  }

  getOffsetRight(ground, template) {
    const margin = -5;
    const marginLeft = 25;

    const result = {
      x:
        ground.x +
        ground.width +
        template[0].length * this.baseObject.width +
        marginLeft,
      y: ground.y + margin + this.baseObject.height / 2
    };

    return result;
  }

  getOffsetTop(ground) {
    const margin = -5;

    const result = {
      x: ground.x + ground.width / 2 + this.baseObject.width / 2,
      y: ground.y + margin + this.baseObject.height / 2
    };

    return result;
  }

  getOffsetTopRight(ground, template) {
    const margin = template.length * this.baseObject.height;
    const marginLeft = 25;

    const result = {
      x:
        ground.x +
        ground.width +
        template[0].length * this.baseObject.width +
        marginLeft,
      y: ground.y + margin + this.baseObject.height / 2
    };

    return result;
  }
}
