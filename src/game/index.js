import './init';
import './fix';
// eslint-disable-next-line
import { Game, AUTO } from 'phaser';
import { config } from '../config';
import { runVKAds } from './ads';

import Boot from './boot';
import Main from './game';
// import Shop from './shop';
import Menu from './menu';
import Loader from './loader';

const game = new Game(
  config.width,
  config.height,
  AUTO,
  document.querySelector('#game')
);

game.state.add('Boot', Boot);
game.state.add('Main', Main);
game.state.add('Menu', Menu);
game.state.add('Loader', Loader);

game.state.start('Boot');

const init = () => {
  // TODO: Перенести в роутер и убрать переменную окружения
  if (process.env.IS_VK) {
    runVKAds();
  }
};

export default init;
