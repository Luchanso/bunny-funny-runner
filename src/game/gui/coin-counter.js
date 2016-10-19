class CoinCounter extends Phaser.Text {
  constructor(game, x, y) {
    const style = {
      fill: '#00B8D4', // 2196F3
      font: '25px Arial'
    }

    super(game, x, y, '0', style)

    this.fixedToCamera = true
    this.score = Engine.Service.get('Score')
    this.score.updateCoins.add(this.updateCoinsCount, this)

    this.createIcon()
  }

  createIcon() {
    let x = this.width * 2
    let y = 1

    let sprite = this.game.make.sprite(
      x,
      y,
      Engine.spritesheet,
      'coin_bronze.png'
    )

    sprite.anchor.setTo(1, 0)

    sprite.width = this.fontSize
    sprite.height = this.fontSize

    this.addChild(sprite)

    const offsetX = this.cameraOffset.x - sprite.width
    const offsetY = this.cameraOffset.y

    this.cameraOffset.setTo(offsetX, offsetY)
  }

  updateCoinsCount() {
    this.text = `${this.score.coins}`
  }
}

Engine.CoinCounter = CoinCounter
