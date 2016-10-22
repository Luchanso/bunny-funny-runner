class Ground extends Phaser.Sprite {
  constructor(game, x, y, type = Ground.type.GRASS, small = false, broken = false) {
    const name = Ground.getName(type, small, broken)

    super(game, x, y, Engine.spritesheet, name)

    this.width *= Engine.scaleRatio
    this.height *= Engine.scaleRatio

    this.autoCull = true

    this.game.physics.enable([this])
    this.body.immovable = true
    this.body.checkCollision.down = false
    this.body.checkCollision.left = false

    this.data.name = name
    this.data.type = type
    this.data.small = small
    this.data.broken = broken
  }

  reset(x, y, type, small, broken) {
    super.reset(x, y)

    const name = Ground.getName(type, small, broken)

    this.frame = name

    this.data.name = name
    this.data.type = type
    this.data.small = small
    this.data.broken = broken
  }
}

Ground.type = {
  GRASS: 'grass',
  CAKE: 'cake',
  SAND: 'sand',
  SNOW: 'snow',
  STONE: 'stone',
  WOOD: 'wood'
}

Ground.getName = (type, small, broken) => {
  let name = `ground_${type}`

  if (small) name += '_small'
  if (broken) name += '_broken'

  name += '.png'

  return name
}

Engine.Ground = Ground
