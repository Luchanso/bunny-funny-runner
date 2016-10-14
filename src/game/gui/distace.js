class Distance extends Phaser.Text {
  constructor(game, x, y) {
    const style = {
      fill: 'rgb(168, 0, 210)',
      font: '25px Arial'
    }

    super(game, x, y, 'Distance: 0 m.', style)

    this.score = Engine.Service.get('Score')
    this.score.onUpdate.add(this.updateDistance, this)
  }

  updateDistance() {
    this.text = `Distance: ${this.score.currentDistance} m.`
  }
}

Engine.Distance = Distance
