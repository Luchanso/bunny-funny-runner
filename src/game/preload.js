import spritesheetImg from './assets/spritesheet/jumper.png';
import spritesheetXML from './assets/spritesheet/jumper.xml';
import layer2Img from '../common/assets/background/layer2.png';
import layer3Img from '../common/assets/background/layer3.png';
import layer4Img from '../common/assets/background/layer4.png';
import tutorialImg from './assets/tutorial/2xjump-2.png';
import soundControllImg from './assets/ui/soundControll.png';
import soundControllJSON from './assets/ui/soundControll.json';
import coinMP3 from './assets/sounds/coin.mp3';
import coinOGG from './assets/sounds/coin.ogg';
import jumpMP3 from './assets/sounds/jump.mp3';
import jumpOGG from './assets/sounds/jump.ogg';
import loseMP3 from './assets/sounds/lose.mp3';
import loseOGG from './assets/sounds/lose.ogg';
import particlesImg from './assets/sprites/particles.png';
import shopImg from '../common/assets/icons/shop.png';
import playImg from '../common/assets/icons/play.png';
import { config } from '../config';

const preload = load => {
  load.image('layer2', layer2Img);
  load.atlasXML(config.spritesheet, spritesheetImg, spritesheetXML);

  load.image('layer3', layer3Img);
  load.image('layer4', layer4Img);

  load.image('tutorial', tutorialImg);

  load.atlasJSONArray(
    'soundControll',
    soundControllImg,
    null,
    soundControllJSON
  );

  load.audio('lose', [loseMP3, loseOGG]);
  load.audio('coin', [coinMP3, coinOGG]);
  load.audio('jump', [jumpMP3, jumpOGG]);

  load.image('shop', shopImg);
  load.image('play', playImg);

  load.spritesheet('particles', particlesImg, 8, 8);
};

export default preload;
