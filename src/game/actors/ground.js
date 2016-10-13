class Ground extends Phaser.Sprite {
  constructor(game, x, y, type = Ground.type.GRASS, small = false, broken = false) {

    let name = `ground_${type}`

    if (small) name += '_small'
    if (broken) name += '_broken'

    name += '.png'

    super(game, x, y, Engine.spritesheet, name)

    this.game.physics.enable([this])
    this.body.immovable = true

    this._name = name
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

Engine.Ground = Ground
