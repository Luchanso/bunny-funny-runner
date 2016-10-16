class BestDistanceStripe extends Phaser.Graphics {
  constructor(game, x) {
    super(game, x, -BestDistanceStripe.ANTI_MARGIN)
    this.y = this.game.world.bounds.y

    this.draw()
  }

  draw() {
    const width = 6
    const height = 32
    const summHeight = game.world.bounds.height

    this.beginFill(0xFFFFFF, 0.7)

    for (let i = 0; i < summHeight / height; i++) {
      const x = 0
      const y = i * summHeight / height
      this.drawRect(x, y, width, height)
    }
    this.endFill()
  }
}

Engine.BestDistanceStripe = BestDistanceStripe
