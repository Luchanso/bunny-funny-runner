class EnemyGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny);

    this.grounds = grounds;
    this.grounds.signals.generate.add(this.generate, this);

    this.score = Engine.Service.get('Score');

    this.types = [
      Engine.SpringMan,
      Engine.FlyMan,
      Engine.SpikeBall,
      Engine.Cloud
    ];
  }

  generate(ground) {
    const maxChance = 25;
    const maxDistance = 100;
    const currentDistance = this.score.currentDistance;
    const currentChance =
      this.cubicInOut(currentDistance / maxDistance) * maxChance;

    if (!Phaser.Utils.chanceRoll(currentChance)) return;

    const marginLeft = this.game.rnd.between(50, 150);

    let x = 0;
    let y = 0;

    x = ground.x + ground.width + marginLeft;
    y = ground.y + this.game.rnd.between(-75, 75);

    let TypeClass = this.game.rnd.pick(this.types);
    let enemy = this.children.find(item => {
      return item.constructor === TypeClass && !item.alive;
    });

    if (enemy == null) {
      enemy = new TypeClass(this.game, x, y);
      this.add(enemy);
    } else {
      enemy.reset(x, y);
    }

    return enemy;
  }

  cubicInOut(t) {
    if (t > 1) return 1;
    return t;
  }
}

Engine.Component.EnemyGenerator = EnemyGenerator;
