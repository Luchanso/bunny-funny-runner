import layer2Img from '../common/assets/background/layer2.png';
import layer3Img from '../common/assets/background/layer3.png';
import layer4Img from '../common/assets/background/layer4.png';
import playImg from '../common/assets/icons/play.png';

const preload = load => {
  load.image('layer2', layer2Img);
  load.image('layer3', layer3Img);
  load.image('layer4', layer4Img);
  load.image('i-play', playImg);
};

export default preload;
