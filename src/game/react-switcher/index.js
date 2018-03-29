import Phaser from 'phaser';
import { switchScene } from '../../model/scene';

export default store =>
  class ReactSwitcher extends Phaser.State {
    preload() {
      store.dispatch(switchScene(this.key));
    }
  };
