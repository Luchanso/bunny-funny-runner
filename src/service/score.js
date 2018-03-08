import Phaser from 'phaser';

export default class Score {
  constructor() {
    this.pBestDistance = 0;
    this.pCurrentDistance = 0;
    this.pCoins = 0;

    this.load();
    this.onUpdate = new Phaser.Signal();
    this.updateCoins = new Phaser.Signal();
  }

  save() {
    window.localStorage.bestDistance = this.pBestDistance.toString();
  }

  load() {
    this.pBestDistance =
      Number.parseInt(window.localStorage.bestDistance, 10) || 0;
  }

  set coins(val) {
    this.pCoins = val;

    this.updateCoins.dispatch();

    return this.pCoins;
  }
  get coins() {
    return this.pCoins;
  }

  set bestDistance(val) {
    this.pBestDistance = val;
    this.onUpdate.dispatch();
    this.save();

    return this.pBestDistance;
  }
  get bestDistance() {
    return this.pBestDistance;
  }

  set currentDistance(val) {
    this.pCurrentDistance = val;
    this.onUpdate.dispatch();

    return this.pCurrentDistance;
  }
  get currentDistance() {
    return this.pCurrentDistance;
  }
}

Score.MULTIPER_DISTANCE = 150;
