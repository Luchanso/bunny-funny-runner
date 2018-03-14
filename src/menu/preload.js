import layer2Img from '../common/assets/background/layer2.png';
import layer3Img from '../common/assets/background/layer3.png';
import layer4Img from '../common/assets/background/layer4.png';

import playImg from '../common/assets/icons/play.png';
import shopImg from '../common/assets/icons/shop.png';

const preload = load => {
  load.image('layer2', layer2Img);
  load.image('layer3', layer3Img);
  load.image('layer4', layer4Img);
  // TODO: remove duplication
  load.image('i-play', playImg);
  load.image('i-shop', shopImg);
};

export default preload;
