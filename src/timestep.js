// TODO: inProgress for time slowing
export default class Timestep {
  constructor(fps = 60, gameSpeed = 1.0, maxSpeed = 3.0, smooth = 0.5) {
    this.targetFrametime = 1000 / fps;
    this.pGameSpeed = gameSpeed;
    this.pMaxSpeed = maxSpeed;
    this.pSmooth = smooth;

    this.realSpeed = 0;
    this.lastFrameRate = 0;

    this.realSpeed = 0;
    this.lastFrameTime = 0;
    this.delta = 0;
  }

  tick() {
    // this.realSpeed = (getTimer() - this.lastFrameRate) / this.targetFrametime;
    // this.lastFrameRate = getTimer();

    if (this.realSpeed > this.pMaxSpeed) this.realSpeed = this.pMaxSpeed;

    this.delta -= (this.delta - this.realSpeed) * (1 - this.pSmooth);

    return this.delta * this.pGameSpeed;
  }

  get timeDelta() {
    return this.delta * this.pGameSpeed;
  }

  get maxSpeed() {
    return this.pMaxSpeed;
  }
  set maxSpeed(value) {
    this.pMaxSpeed = value;
  }

  get gameSpeed() {
    return this.pGameSpeed;
  }
  set gameSpeed(value) {
    this.pGameSpeed = value;
  }

  get smooth() {
    return this.pSmooth;
  }
  set smooth(value) {
    if (value > 1) value = 1;
    if (value < 0) value = 0;
    this.pSmooth = value;
  }
}
