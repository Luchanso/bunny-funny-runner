class CoinGenerator extends Generator {
  constructor(game, bunny, grounds) {
    super(game, bunny)

    this.grounds = grounds
    this.grounds.signals.generate.add(this.createdNewGround, this)

    this.prototype = new Engine.Coin(this.game, 0, 0)

    this.createTemplates()
  }

  createTemplates() {
    this.templates = []

    this.templates.push([
        [0, 0, 2, 3, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 1, 3, 1, 0],
        [1, 1, 1, 1, 1]
    ])

    this.templates.push([
        [3, 1, 1, 3],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [2, 1, 1, 2]
    ])

    this.templates.push([
        [0, 3, 0],
        [2, 0, 2],
        [0, 3, 0]
    ])

    this.templates.push([
        [3]
    ])

    this.templates.push([
        [0, 0, 0, 3, 0, 0, 0],
        [0, 0, 2, 0, 2, 0, 0],
        [0, 2, 0, 0, 0, 2, 0],
        [2, 0, 0, 0, 0, 0, 2],
        [1, 1, 1, 1, 1, 1, 1]
    ])
  }

  createdNewGround(ground) {
    if (!Phaser.Utils.chanceRoll(30)) return

    const margin = -5
    const padding = 1

    let offsetX = ground.x + ground.width / 2 + this.prototype.width / 2
    let offsetY = ground.y + margin + + this.prototype.height / 2

    let template
    if (ground.data.small) {
      template = this.templates[this.game.rnd.pick([1, 2, 3])]
    } else {
      template = this.game.rnd.pick(this.templates)
    }

    let templateWidth = template[0].length * this.prototype.width
    let templateHeight = template.length * this.prototype.height

    for (let i in template) {
      for (let j in template[i]) {
        if (template[i][j] > 0) {
          this.generate(
            offsetX + j * (this.prototype.width + padding) - templateWidth / 2,
            offsetY + i * (this.prototype.height + padding) - templateHeight,
            template[i][j]
          )
        }
      }
    }
  }

  generate(x, y, maxType) {
    const number = Math.random()
    let type = 0


    if (number < 0.15 && maxType > 2) { // 15%
      type = Engine.Coin.type.GOLD
    } else if (number > 0.15 && number < 0.5 && maxType > 1) { // %35
      type = Engine.Coin.type.SILVER
    } else { // 50%
      type = Engine.Coin.type.BRONZE
    }

    let coin = this.getFirstDead()
    if (coin == null) {
      coin = new Engine.Coin(this.game, x, y, type)
      this.add(coin)
    } else {
      coin.reset(x, y)
    }

    return coin
  }
}

Engine.Component.CoinGenerator = CoinGenerator
