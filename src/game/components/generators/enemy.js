class EnemyGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny)

    this.grounds = grounds
    this.grounds.signals.generate.add(this.generate, this)

    this.flyMans = this.game.add.group()
    this.springMans = this.game.add.group()
    this.spikeBalls = this.game.add.group()

    this.types = [
      Engine.SpringMan,
      Engine.FlyMan,
      Engine.SpikeBall
    ]
  }

  generate(ground) {
    if (!Phaser.Utils.chanceRoll(30)) return

    const marginLeft = this.game.rnd.between(50, 150)

    let x = 0
    let y = 0

    x = ground.x + ground.width + marginLeft
    y = ground.y + this.game.rnd.between(-75, 75)

    let type = this.game.rnd.pick(this.types)
    let enemy

    // TODO: Need refactoring and incapsulations
    switch(type) {
      case Engine.SpringMan:
        enemy = this.springMans.getFirstDead()
        if (enemy == null) {
          enemy = new Engine.SpringMan(this.game, x, y)
        } else {
          enemy.reset(x, y)
        }
      break
      case Engine.FlyMan:
        enemy = this.flyMans.getFirstDead()
        if (enemy == null) {
          enemy = new Engine.FlyMan(this.game, x, y)
        } else {
          enemy.reset(x, y)
        }
      break
      case Engine.SpikeBall:
        enemy = this.spikeBalls.getFirstDead()
        if (enemy == null) {
          enemy = new Engine.SpikeBall(this.game, x, y)
        } else {
          enemy.reset(x, y)
        }
      break
    }

    this.add(enemy)
  }
}

Engine.Component.EnemyGenerator = EnemyGenerator
