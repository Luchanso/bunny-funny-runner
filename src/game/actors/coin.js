class Coin extends Phaser.Sprite {
  constructor(game, x, y, type = Coin.type.GOLD) {
    super(game, x, y, Engine.spritesheet, type + '_1.png')

    this.width *= 0.25
    this.height *= 0.25
    this.anchor.setTo(0.5)

    this.game.physics.enable([this])
    // this.body.immovable = true

    this.data.type = type

    this.createAnimation()
  }

  createAnimation() {
    const countCoinsFrame = 7

    let animationFrames = []

    for (let i = 1; i < countCoinsFrame; i++) {
      animationFrames.push(`${this.data.type}_${i}.png`)
    }

    this.animations.add('rotate', animationFrames, 15, true)
    this.animations.play('rotate')
  }

  reset(x, y, type) {
    super.reset(x, y)

    this.type = type
    this.frame = type + '_1.png'
    // this.animations.currentAnim.destroy()

    this.createAnimation()
  }
}

Coin.type = {
  GOLD: 'gold',
  SILVER: 'silver',
  BRONZE: 'bronze',
}

Engine.Coin = Coin
