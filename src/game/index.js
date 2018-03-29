import './init';
import './fix';
import { config } from '../config';
import { runVKAds } from './ads';
import ReactSwitcherCreator from './react-switcher';
import { GAME_SCENES, REACT_SCENES } from '../model/scene';

// TODO: Start Scene не будет работать
const init = async (startScene = GAME_SCENES.BOOT, store) => {
  const { Game, AUTO } = await import('phaser');

  const game = new Game(
    config.width,
    config.height,
    AUTO,
    // TODO: Вынести в конфигурацию айдишник дива
    document.querySelector('#game')
  );

  const Boot = (await import('./boot')).default;
  const Main = (await import('./game')).default;
  const Menu = (await import('./menu')).default;
  const Loader = (await import('./loader')).default;
  const ReactSwitcher = ReactSwitcherCreator(store);

  // TODO: Можно оптимизировать, чтобы бут отображался пока всё остальное загружается
  game.state.add(GAME_SCENES.BOOT, Boot);
  game.state.add(GAME_SCENES.MAIN, Main);
  game.state.add(GAME_SCENES.MENU, Menu);
  game.state.add(GAME_SCENES.LOADER, Loader);
  game.state.add(REACT_SCENES.SHOP, ReactSwitcher);

  game.state.start(startScene);

  // TODO: Перенести в роутер и убрать переменную окружения
  if (process.env.IS_VK) {
    runVKAds();
  }
};

export default init;
