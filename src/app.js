import Phaser from 'phaser';
import { config } from './config';

import Boot from './boot';
import Game from './game';
import Shop from './shop';
import Settings from './settings';
import Loader from './loader';

const game = new Phaser.Game(config.width, config.height, Phaser.AUTO);

game.state.add('Boot', Boot);
game.state.add('Game', Game);
// game.state.add('Menu', Menu);
game.state.add('Shop', Shop);
game.state.add('Settings', Settings);
game.state.add('Loader', Loader);

game.state.start('Boot');
