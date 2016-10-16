class Score {
  constructor() {
    this._bestDistance = 0
    this._currentDistance = 0

    this.load()
    this.onUpdate = new Phaser.Signal()
  }

  save() {
    window.localStorage['bestDistance'] = this._bestDistance.toString()
  }

  load() {
    this._bestDistance = Number.parseInt(window.localStorage['bestDistance']) || 0
  }

  set bestDistance(val) {
    this._bestDistance = val
    this.onUpdate.dispatch()
    this.save()

    return this._bestDistance
  }
  get bestDistance() { return this._bestDistance }

  set currentDistance(val) {
    this._currentDistance = val
    this.onUpdate.dispatch()

    return this._currentDistance
  }
  get currentDistance() { return this._currentDistance }
}

Score.MULTIPER_DISTANCE = 150

Engine.Score = Score
