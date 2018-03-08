import { Game, AUTO } from 'phaser';
import { config } from './config';

import Boot from './boot';
import Main from './game';
import Shop from './shop';
import Settings from './settings';
import Loader from './loader';

const game = new Game(config.width, config.height, AUTO);

game.state.add('Boot', Boot);
game.state.add('Main', Main);
// game.state.add('Menu', Menu);
game.state.add('Shop', Shop);
game.state.add('Settings', Settings);
game.state.add('Loader', Loader);

game.state.start('Boot');
