class Timestep {
  constructor(fps = 60, gameSpeed = 1.0, maxSpeed = 3.0, smooth = 0.5) {
    this.targetFrametime = 1000 / fps
    this._gameSpeed = gameSpeed
    this._maxSpeed = maxSpeed
    this._smooth = smooth

    this.realSpeed = 0
    this.lastFrameRate = 0

		this.realSpeed = 0
		this.lastFrameTime = 0
		this.delta = 0
  }

  tick() {
		this.realSpeed = (getTimer() - this.lastFrameRate) / this.targetFrametime
		this.lastFrameRate = getTimer()

		if (this.realSpeed > this._maxSpeed) this.realSpeed = this._maxSpeed

		this.delta -= (this.delta - this.realSpeed) * (1 - this._smooth)

		return this.delta * this._gameSpeed
	}

  get timeDelta() { return this.delta * this._gameSpeed }

	get maxSpeed() { return this._maxSpeed }
	set maxSpeed(value) { this._maxSpeed = value }

	get gameSpeed() { return this._gameSpeed }
	set gameSpeed(value) { this._gameSpeed = value}

	get smooth() { return this._smooth }
	set smooth(value) {
		if (value > 1) value = 1
		if (value < 0) value = 0
		this._smooth = value
	}
}
