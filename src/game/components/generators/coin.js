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
        [0, 1, 0],
        [1, 3, 1],
        [0, 1, 0]
    ])

    this.templates.push([
        [3]
    ])

    this.templates.push([
        [3, 3, 3]
    ])

    this.templates.push([
        [0, 0, 0, 3, 0, 0, 0],
        [0, 0, 2, 0, 2, 0, 0],
        [0, 2, 0, 0, 0, 2, 0],
        [2, 0, 0, 0, 0, 0, 2],
        [1, 1, 1, 1, 1, 1, 1]
    ])

    this.templates.push([
      [0, 0, 1],
      [0, 3, 0],
      [1, 0, 0]
    ])

    this.templates.push([
      [1, 0, 0],
      [0, 3, 0],
      [0, 0, 1]
    ])

    this.templates.push([
      [1, 0, 0],
      [0, 3, 0],
      [0, 0, 1]
    ])
  }

  createdNewGround(ground) {
    if (!Phaser.Utils.chanceRoll(30)) return

    const padding = 1

    let template = this.game.rnd.pick(this.templates)

    // if (ground.data.small) {
    //   template = this.templates[this.game.rnd.pick([1, 2, 3])]
    // } else {
    // }

    let direction = this.game.rnd.pick([
      this.getOffsetRight,
      this.getOffsetTop,
      this.getOffsetTopRight
    ]).bind(this)(ground, template)

    let offsetX = direction.x
    let offsetY = direction.y

    let templateWidth = template[0].length * this.prototype.width
    let templateHeight = template.length * this.prototype.height

    for (let i in template) {
      for (let j in template[i]) {
        if (template[i][j] > 0) {
          let x = offsetX + j * (this.prototype.width + padding) - templateWidth / 2
          let y = offsetY + i * (this.prototype.height + padding) - templateHeight

          this.generate(x, y, template[i][j])
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

  getOffsetRight(ground, template) {
    const margin = -5
    const marginLeft = 25

    let result = {
      x: ground.x + ground.width + template[0].length * this.prototype.width + marginLeft,
      y: ground.y + margin + this.prototype.height / 2
    }

    return result
  }

  getOffsetTop(ground, template) {
    const margin = -5

    let result = {
      x: ground.x + ground.width / 2 + this.prototype.width / 2,
      y: ground.y + margin + this.prototype.height / 2
    }

    return result
  }

  getOffsetTopRight(ground, template) {
    const margin = template.length * this.prototype.height
    const marginLeft = 25

    let result = {
      x: ground.x + ground.width + template[0].length * this.prototype.width + marginLeft,
      y: ground.y + margin + this.prototype.height / 2
    }

    return result
  }
}

Engine.Component.CoinGenerator = CoinGenerator
