import Phaser from 'phaser';
import { GAME_SCENES } from '../../model/scene';
// import withSceneLogger from '../../utils/withSceneLogger';

class Boot extends Phaser.Scene {
  constructor() {
    super(GAME_SCENES.BOOT);
  }

  create() {
    this.scene.start(GAME_SCENES.LOADER);
  }
}

// export default withSceneLogger(GAME_SCENES.BOOT)(Boot);
export default Boot;
