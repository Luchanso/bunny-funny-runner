import Phaser from 'phaser';
import PowerUp from '../../actors/powerup';
import Generator from './generator';

export default class PowerUpGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny);

    this.grounds = grounds;
    this.grounds.signals.generate.add(this.generate, this);

    this.prototype = new PowerUp(this.game, 0, 0);
  }

  generate(ground) {
    if (this.bunny.data.jetPack) return null;
    if (!Phaser.Utils.chanceRoll(3)) return null;

    const x = this.game.rnd.between(
      ground.x,
      ground.x + ground.width - this.prototype.width
    );
    const y = ground.y - this.prototype.height;
    const types = [PowerUp.type.MAGNET, PowerUp.type.GOD, PowerUp.type.WINGS];
    let type = this.game.rnd.pick(types);

    if (Phaser.Utils.chanceRoll(10)) {
      type = PowerUp.type.JETPACK;
    }

    let powerUp = this.getFirstDead();

    if (powerUp == null) {
      powerUp = new PowerUp(this.game, x, y, type);
      this.add(powerUp);
    } else {
      powerUp.reset(x, y, type);
    }

    return powerUp;
  }
}
