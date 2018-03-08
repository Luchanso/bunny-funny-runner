class PowerUpGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny);

    this.grounds = grounds;
    this.grounds.signals.generate.add(this.generate, this);

    this.prototype = new Engine.PowerUp(this.game, 0, 0);
  }

  generate(ground) {
    if (this.bunny.data.jetPack) return;
    if (!Phaser.Utils.chanceRoll(3)) return;

    const x = this.game.rnd.between(
      ground.x,
      ground.x + ground.width - this.prototype.width,
    );
    const y = ground.y - this.prototype.height;
    const types = [
      Engine.PowerUp.type.MAGNET,
      Engine.PowerUp.type.GOD,
      Engine.PowerUp.type.WINGS,
    ];
    let type = this.game.rnd.pick(types);

    if (Phaser.Utils.chanceRoll(10)) {
      type = Engine.PowerUp.type.JETPACK;
    }

    let powerUp = this.getFirstDead();

    if (powerUp == null) {
      powerUp = new Engine.PowerUp(this.game, x, y, type);
      this.add(powerUp);
    } else {
      powerUp.reset(x, y, type);
    }

    return powerUp;
  }
}

Engine.Component.PowerUpGenerator = PowerUpGenerator;
