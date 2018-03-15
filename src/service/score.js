import Phaser from 'phaser';
import Service from './service';

const SCORE_STORAGE_KEY = 'score.data';

export default class Score {
  constructor() {
    this.pCurrentDistance = 0;
    this.pCoins = 0;
    this.data = {
      coins: 0,
      currentDistance: 0,
      bestDistance: 0
    };

    this.load();

    this.onUpdate = new Phaser.Signal();
    this.updateCoins = new Phaser.Signal();
  }

  async save() {
    const Storage = await Service.asyncGet('Storage');
    Storage.save(SCORE_STORAGE_KEY, this.data);
  }

  async load() {
    const Storage = await Service.asyncGet('Storage');
    const data = Storage.load(SCORE_STORAGE_KEY);
    if (data) {
      this.data = data;
    }
  }

  set coins(val) {
    this.data.coins = val;
    this.updateCoins.dispatch();

    return this.data.coins;
  }
  get coins() {
    return this.data.coins;
  }

  set bestDistance(val) {
    this.data.bestDistance = val;
    this.onUpdate.dispatch();
    this.save();

    return this.data.bestDistance;
  }
  get bestDistance() {
    return this.data.bestDistance;
  }

  set currentDistance(val) {
    this.data.currentDistance = val;
    this.onUpdate.dispatch();

    return this.data.currentDistance;
  }
  get currentDistance() {
    return this.data.currentDistance;
  }
}

Score.MULTIPER_DISTANCE = 150;
