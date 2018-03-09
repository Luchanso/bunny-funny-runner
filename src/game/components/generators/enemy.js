import Phaser from 'phaser';
import Generator from './generator';
import Service from '../../../service';
import SpringMan from '../../actors/spring-man';
import FlyMan from '../../actors/fly-man';
import SpikeBall from '../../actors/spike-ball';
import Cloud from '../../actors/cloud';

export default class EnemyGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny);

    this.grounds = grounds;
    this.grounds.signals.generate.add(this.generate, this);

    this.score = Service.get('Score');

    this.types = [SpringMan, FlyMan, SpikeBall, Cloud];
  }

  generate(ground) {
    const maxChance = 25;
    const maxDistance = 100;
    const { currentDistance } = this.score;
    const currentChance =
      this.cubicInOut(currentDistance / maxDistance) * maxChance;

    if (!Phaser.Utils.chanceRoll(currentChance)) return null;

    const marginLeft = this.game.rnd.between(50, 150);

    let x = 0;
    let y = 0;

    x = ground.x + ground.width + marginLeft;
    y = ground.y + this.game.rnd.between(-75, 75);

    const TypeClass = this.game.rnd.pick(this.types);
    let enemy = this.children.find(
      item => item.constructor === TypeClass && !item.alive
    );

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
