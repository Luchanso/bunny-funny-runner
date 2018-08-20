import Phaser from 'phaser';
import { config } from '../config';
import Boot from './boot';
import Loader from './loader';
import Menu from './menu';

const init = async () => {
  const { Game } = Phaser;
  const gameConfig = {
    width: config.width,
    height: config.height,
    canvas: document.querySelector('#test-game'),
    scene: [Boot, Loader, Menu]
  };

  const game = new Game(gameConfig);
  window.game = game;

  // const Boot = (await import('./boot')).default;
  // const Main = (await import('./game')).default;
  // const Menu = (await import('./menu')).default;
  // const Loader = (await import('./loader')).default;
  // const ReactSwitcher = ReactSwitcherCreator(store);
  // TODO: Можно оптимизировать, чтобы бут отображался пока всё остальное загружается
  // game.state.add(GAME_SCENES.BOOT, Boot);
  // game.state.add(GAME_SCENES.MAIN, Main);
  // game.state.add(GAME_SCENES.MENU, Menu);
  // game.state.add(GAME_SCENES.LOADER, Loader);
  // game.state.add(REACT_SCENES.SHOP, ReactSwitcher);
  // game.state.start(startScene);
};

export default init;
