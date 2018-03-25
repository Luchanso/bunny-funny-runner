import {} from 'react-router-redux';

export const SCENE_TYPES = {
  GAME: 'game',
  REACT: 'react',
  UNKNOWN: 'unknown'
};

export const GAME_SCENES = {
  BOOT: 'boot',
  MAIN: 'main',
  MENU: 'menu',
  LOADER: 'loader'
};

export const REACT_SCENES = {
  SHOP: 'shop'
};

export const sceneSelector = scene => {
  if (Object.values(GAME_SCENES).find(gameScene => scene === gameScene)) {
    return SCENE_TYPES.GAME;
  }
  if (Object.values(REACT_SCENES).find(reactScene => scene === reactScene)) {
    return SCENE_TYPES.REACT;
  }

  return SCENE_TYPES.UNKNOWN;
};
