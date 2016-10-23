class EnemyGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny)

    this.grounds = grounds
    this.grounds.signals.generate.add(this.generate, this)

    this.types = [
      Engine.SpringMan,
      Engine.FlyMan,
      Engine.SpikeBall
    ]
  }

  generate(ground) {
    if (!Phaser.Utils.chanceRoll(25)) return

    const marginLeft = this.game.rnd.between(50, 150)

    let x = 0
    let y = 0

    x = ground.x + ground.width + marginLeft
    y = ground.y + this.game.rnd.between(-75, 75)

    let TypeClass = this.game.rnd.pick(this.types)
    let enemy = this.children.find(item => {
      return item.constructor === TypeClass && !item.alive
    })

    if (enemy == null) {
      enemy = new TypeClass(this.game, x, y)
      this.add(enemy)
    } else {
      enemy.reset(x, y)
    }

    return enemy
  }
}

Engine.Component.EnemyGenerator = EnemyGenerator
