'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Engine = {
  minWidth: 640,
  minHeight: 320,

  maxWidth: window.innerWidth,
  maxHeight: window.innerHeight,

  spritesheet: 'jumper',
  scaleRatio: 0.35
};

var Score = function () {
  function Score() {
    _classCallCheck(this, Score);

    this._bestDistance = 0;
    this._currentDistance = 0;

    this.load();
    this.onUpdate = new Phaser.Signal();
  }

  _createClass(Score, [{
    key: 'save',
    value: function save() {
      window.localStorage['bestDistance'] = this._bestDistance.toString();
    }
  }, {
    key: 'load',
    value: function load() {
      this._bestDistance = Number.parseInt(window.localStorage['bestDistance']);
    }
  }, {
    key: 'bestDistance',
    set: function set(val) {
      this._bestDistance = val;
      this.onUpdate.dispatch();

      return this._bestDistance;
    },
    get: function get() {
      return this._bestDistance;
    }
  }, {
    key: 'currentDistance',
    set: function set(val) {
      this._currentDistance = val;
      this.onUpdate.dispatch();

      return this._currentDistance;
    },
    get: function get() {
      return this._currentDistance;
    }
  }]);

  return Score;
}();

Engine.Score = Score;

var Service = function () {
  function Service() {
    _classCallCheck(this, Service);
  }

  _createClass(Service, null, [{
    key: 'get',
    value: function get(name) {
      return Service.list[name];
    }
  }]);

  return Service;
}();

Service.list = {
  "Score": new Engine.Score()
};

Engine.Service = Service;

var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this));
  }

  _createClass(Boot, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
      this.game.stage.disableVisibilityChange = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;

      this.state.start('Loader');
    }
  }]);

  return Boot;
}(Phaser.State);

Engine.Boot = Boot;

var Loader = function (_Phaser$State2) {
  _inherits(Loader, _Phaser$State2);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this));
  }

  _createClass(Loader, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
      this.state.start('Game');
    }
  }, {
    key: 'addProgressLabel',
    value: function addProgressLabel() {
      var style = {
        font: '41px Open Sans',
        fill: '#00E676'
      };

      this.progressLabel = this.add.text(this.game.world.centerX, this.game.world.centerY, 'Loading: 0% (0/0)', style);
      this.progressLabel.anchor.setTo(0.5);
    }
  }, {
    key: 'refreshProgress',
    value: function refreshProgress(progress, cacheKey, success, totalLoaded, totalFiles) {
      this.progressLabel.text = 'Loading ' + progress + '% (' + totalLoaded + '/' + totalFiles + ')';
    }
  }]);

  return Loader;
}(Phaser.State);

Engine.Loader = Loader;

var Background = function (_Phaser$TileSprite) {
  _inherits(Background, _Phaser$TileSprite);

  function Background(game, x, y, name, speed) {
    _classCallCheck(this, Background);

    var _this3 = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, game, x, y, 1024, 1024, name));

    _this3.tileScale.setTo(_this3.game.height / _this3.height);
    _this3.fixedToCamera = true;
    _this3.width = _this3.game.width;

    _this3._speed = speed;
    return _this3;
  }

  _createClass(Background, [{
    key: 'update',
    value: function update() {
      this.tilePosition.x += this._speed;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._speed = 0;
    }
  }]);

  return Background;
}(Phaser.TileSprite);

Engine.Background = Background;

var Bunny = function (_Phaser$Sprite) {
  _inherits(Bunny, _Phaser$Sprite);

  function Bunny(game, x, y, name) {
    _classCallCheck(this, Bunny);

    var _this4 = _possibleConstructorReturn(this, (Bunny.__proto__ || Object.getPrototypeOf(Bunny)).call(this, game, x, y, Engine.spritesheet, name + '_stand.png'));

    _this4.data.name = name;
    _this4.data.isDead = false;
    _this4.data.running = false;
    _this4.data.countJump = Bunny.MAX_JUMPS;

    _this4.game.physics.arcade.enable([_this4]);

    _this4.width *= 0.35;
    _this4.height *= 0.35;

    _this4.body.gravity.setTo(0, 2500);
    _this4.body.maxVelocity.setTo(400, 2000);
    _this4.body.collideWorldBounds = true;

    _this4.createAnimation();
    _this4.animations.play('run');
    return _this4;
  }

  _createClass(Bunny, [{
    key: 'update',
    value: function update() {
      if (this.data.isDead) return;

      if (this.inAir()) {
        this.animations.play('jump');
      } else if (this.data.running) {
        this.animations.play('run');
        this.data.countJump = Bunny.MAX_JUMPS;
      } else {
        this.animations.play('stand');
      }
    }
  }, {
    key: 'inAir',
    value: function inAir() {
      return !bunny.body.touching.down;
    }
  }, {
    key: 'die',
    value: function die() {
      var animationDownTime = 1000;
      var animationUpTime = 400;
      var upMove = 100;

      this.body.velocity.setTo(0);
      this.body.acceleration.setTo(0);
      this.body.collideWorldBounds = false;
      this.data.isDead = true;
      this.animations.play('hurt');

      this.game.add.tween(this).to({
        y: this.y - upMove
      }, animationDownTime).to({
        y: this.game.height + this.height
      }, animationUpTime, Phaser.Easing.Quadratic.In).start();
    }
  }, {
    key: 'run',
    value: function run() {
      this.data.running = true;
      this.body.velocity.setTo(Bunny.BASE_MAX_SPEED, 0);
      this.body.acceleration.setTo(Bunny.ACCELERATION, 0);
    }
  }, {
    key: 'createAnimation',
    value: function createAnimation() {
      this.animations.add('jump', [this.data.name + '_jump.png'], 1, true);
      this.animations.add('run', [this.data.name + '_walk1.png', this.data.name + '_walk2.png'], 10, true);
      this.animations.add('hurt', [this.data.name + '_hurt.png'], 1, true);
      this.animations.add('ready', [this.data.name + '_ready.png'], 1, true);
      this.animations.add('stand', [this.data.name + '_stand.png'], 1, true);
    }
  }, {
    key: 'jump',
    value: function jump() {
      if (this.data.isDead) return;

      var jumpImpulse = 900;

      if (this.data.countJump > 0) this.body.velocity.y = -jumpImpulse;
      this.data.countJump--;
    }
  }]);

  return Bunny;
}(Phaser.Sprite);

Bunny.MAX_JUMPS = 2;
Bunny.ACCELERATION = 2000;
Bunny.BASE_MAX_SPEED = 500;

Engine.Bunny = Bunny;

var Ground = function (_Phaser$Sprite2) {
  _inherits(Ground, _Phaser$Sprite2);

  function Ground(game, x, y) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ground.type.GRASS;
    var small = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var broken = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, Ground);

    var name = Ground.getName(type, small, broken);

    var _this5 = _possibleConstructorReturn(this, (Ground.__proto__ || Object.getPrototypeOf(Ground)).call(this, game, x, y, Engine.spritesheet, name));

    _this5.width *= 0.45;
    _this5.height *= 0.45;

    _this5.autoCull = true;
    _this5.outOfCameraBoundsKill = true;

    _this5.game.physics.enable([_this5]);
    _this5.body.immovable = true;

    _this5.data.name = name;
    _this5.data.type = type;
    _this5.data.small = small;
    _this5.data.broken = broken;
    return _this5;
  }

  _createClass(Ground, [{
    key: 'reset',
    value: function reset(x, y, type, small, broken) {
      _get(Ground.prototype.__proto__ || Object.getPrototypeOf(Ground.prototype), 'reset', this).call(this, x, y);

      var name = Ground.getName(type, small, broken);

      this.frame = name;

      this.data.name = name;
      this.data.type = type;
      this.data.small = small;
      this.data.broken = broken;
    }
  }]);

  return Ground;
}(Phaser.Sprite);

Ground.type = {
  GRASS: 'grass',
  CAKE: 'cake',
  SAND: 'sand',
  SNOW: 'snow',
  STONE: 'stone',
  WOOD: 'wood'
};

Ground.getName = function (type, small, broken) {
  var name = 'ground_' + type;

  if (small) name += '_small';
  if (broken) name += '_broken';

  name += '.png';

  return name;
};

Engine.Ground = Ground;

var Distance = function (_Phaser$Text) {
  _inherits(Distance, _Phaser$Text);

  function Distance(game, x, y) {
    _classCallCheck(this, Distance);

    var style = {
      fill: 'rgb(168, 0, 210)',
      font: '25px Arial'
    };

    var _this6 = _possibleConstructorReturn(this, (Distance.__proto__ || Object.getPrototypeOf(Distance)).call(this, game, x, y, 'Distance: 0 m.', style));

    _this6.fixedToCamera = true;
    _this6.score = Engine.Service.get('Score');
    _this6.score.onUpdate.add(_this6.updateDistance, _this6);
    return _this6;
  }

  _createClass(Distance, [{
    key: 'updateDistance',
    value: function updateDistance() {
      this.text = 'Distance: ' + this.score.currentDistance + ' m.';
    }
  }]);

  return Distance;
}(Phaser.Text);

Engine.Distance = Distance;

var Lose = function (_Phaser$Text2) {
  _inherits(Lose, _Phaser$Text2);

  function Lose(game, x, y) {
    _classCallCheck(this, Lose);

    var style = {
      fill: 'white',
      font: '75px Arial',
      align: 'center'
    };

    var _this7 = _possibleConstructorReturn(this, (Lose.__proto__ || Object.getPrototypeOf(Lose)).call(this, game, x, y, 'You lose :-(', style));

    _this7.text += '\r\nPress spacebar';

    _this7.setShadow(0, 2, 'rgba(33, 33, 33, 0.6)', 4);

    _this7.alpha = 0;
    _this7.fixedToCamera = true;
    return _this7;
  }

  _createClass(Lose, [{
    key: 'show',
    value: function show() {
      this.game.add.tween(this).to({
        alpha: 1
      }, 800).start();
    }
  }]);

  return Lose;
}(Phaser.Text);

Engine.Lose = Lose;

var Game = function (_Phaser$State3) {
  _inherits(Game, _Phaser$State3);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
  }

  _createClass(Game, [{
    key: 'preload',
    value: function preload() {
      this.load.atlasXML(Engine.spritesheet, 'assets/spritesheets/jumper.png', 'assets/spritesheets/jumper.xml');

      this.load.image('layer2', 'assets/sprites/backgrounds/layer2.png');
      this.load.image('layer3', 'assets/sprites/backgrounds/layer3.png');
      this.load.image('layer4', 'assets/sprites/backgrounds/layer4.png');
    }
  }, {
    key: 'init',
    value: function init() {
      this._groundStep = 0;
      this._groundVerticalMargin = 150;
      this._score = Engine.Service.get('Score');
    }
  }, {
    key: 'create',
    value: function create() {
      this.stage.backgroundColor = 0xADE6FF;
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.world.setBounds(0, 0, Number.MAX_VALUE, this.game.height);

      this.createBackground();
      this.createBunny();
      this.initGrounds();
      this.configurateCamera();
      this.addControl();
      this.createDistanceLabel();
      this.createLoseLabel();
    }
  }, {
    key: 'update',
    value: function update() {
      this.physics.arcade.collide(this.bunny, this.grounds);
      this.updateGrounds();
      this.updateDie();

      this._score.currentDistance = Math.round(this.bunny.x / 150);
    }
  }, {
    key: 'updateDie',
    value: function updateDie() {
      if (this.bunny.y > this.game.height - 100 && !this.bunny.data.isDead) {
        this.bunny.die();
        this.loseLabel.show();
        this.backgrounds.forEach(function (bg) {
          bg.stop();
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // this.grounds.children.map((sprite) => {
      //   this.game.debug.body(sprite, 'rgba(255, 255, 255, 0.5)')
      // })
    }
  }, {
    key: 'createLoseLabel',
    value: function createLoseLabel() {
      this.loseLabel = new Engine.Lose(this.game, this.game.width / 2, this.game.height / 2);

      this.loseLabel.anchor.setTo(0.5);
      this.add.existing(this.loseLabel);
    }
  }, {
    key: 'createDistanceLabel',
    value: function createDistanceLabel() {
      var margin = 25;

      this.distanceLabel = new Engine.Distance(this.game, this.game.width - margin, margin);
      this.distanceLabel.anchor.setTo(1, 0);
      this.add.existing(this.distanceLabel);
    }
  }, {
    key: 'updateGrounds',
    value: function updateGrounds() {
      var step = Math.round(this.bunny.x / this._groundVerticalMargin);
      var margin = this.game.width - 100;

      if (step % 2 === 0 && step !== this._groundStep) {
        this._groundStep = step;
        this.generateGrounds(margin);
      }
    }
  }, {
    key: 'addControl',
    value: function addControl() {
      var hotkey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
      hotkey.onDown.add(this.jump, this);
    }
  }, {
    key: 'jump',
    value: function jump() {
      if (this.bunny.data.isDead) {
        this.state.restart(true, false);
      }
      if (this.bunny.data.running) {
        this.bunny.jump();
      } else {
        this.bunny.run();
      }
    }
  }, {
    key: 'createStartGround',
    value: function createStartGround() {
      var marginBottom = 100;
      var x = 100;
      var y = this.game.height - marginBottom;
      var type = Ground.type.GRASS;
      var small = false;
      var broken = false;

      var startGround = new Engine.Ground(this.game, x, y, type, small, broken);

      this.grounds.add(startGround);
    }
  }, {
    key: 'createBunny',
    value: function createBunny() {
      window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny2');
      this.add.existing(this.bunny);
    }
  }, {
    key: 'initGrounds',
    value: function initGrounds() {
      this.grounds = this.add.group();
      this.createStartGround();
      this.createFirstGrounds();
    }
  }, {
    key: 'createFirstGrounds',
    value: function createFirstGrounds() {
      for (var i = 1; i < this.game.width / this._groundVerticalMargin; i++) {
        if (i % 2 == 0) this.generateGrounds(i * this._groundVerticalMargin);
      }
    }
  }, {
    key: 'generateGrounds',
    value: function generateGrounds(margin) {
      var SPLIT_VERTICAL = 3;
      var GRID_HEIGHT = this.game.height / SPLIT_VERTICAL;

      for (var i = 1; i < SPLIT_VERTICAL; i++) {
        if (this.rnd.pick[(true, false)]) continue;

        var x = this.bunny.x + margin + this.rnd.between(-50, 50);
        var y = GRID_HEIGHT * i + this.rnd.between(-100, 100);

        this.activateRandomGround(x, y);
      }
    }
  }, {
    key: 'activateRandomGround',
    value: function activateRandomGround(x, y) {
      var marginBottom = 100;

      var types = Object.keys(Engine.Ground.type).map(function (val) {
        return Engine.Ground.type[val];
      });
      var type = this.rnd.pick(types);
      var small = this.rnd.pick([true, false]);
      var broken = this.rnd.pick([true, false]);

      var ground = this.grounds.getFirstDead();
      if (ground == null) {
        ground = new Engine.Ground(this.game, x, y, type, small, broken);
        this.grounds.add(ground);
      } else {
        ground.reset(x, y, type, small, broken);
      }

      return ground;
    }
  }, {
    key: 'createGrounds',
    value: function createGrounds() {
      window.d = this.grounds = this.add.group();
      var types = Object.keys(Engine.Ground.type).map(function (val) {
        return Engine.Ground.type[val];
      });

      for (var i = 0; i < 15; i++) {
        var groundType = this.rnd.pick(types);
        var ground = new Engine.Ground(this.game, 400 + i * 250, 450, groundType, false, this.rnd.pick([true, false]));

        // ground.autoCull = true
        // ground.outOfCameraBoundsKill = true

        this.grounds.add(ground);
      }
    }
  }, {
    key: 'configurateCamera',
    value: function configurateCamera() {
      this.camera.roundPx = false;
      this.camera.follow(this.bunny);
      this.camera.deadzone = new Phaser.Rectangle(100, 0, 0, 0);
    }
  }, {
    key: 'createBackground',
    value: function createBackground() {
      this.backgrounds = this.add.group();

      this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer2', -1));
      this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer3', -2));
      this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer4', -3));
    }
  }]);

  return Game;
}(Phaser.State);

Engine.Game = Game;

Engine.game = new Phaser.Game(Engine.maxWidth, Engine.maxHeight, Phaser.AUTO);

window.onresize = function () {
  Engine.game.scale.setGameSize(window.innerWidth, window.innerHeight);
};

Engine.game.state.add('Boot', Engine.Boot);
Engine.game.state.add('Game', Engine.Game);
Engine.game.state.add('Loader', Engine.Loader);

Engine.game.state.start('Boot');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyIsInNjb3JlLmpzIiwic2VydmljZS5qcyIsImJvb3QuanMiLCJsb2FkZXIuanMiLCJiYWNrZ3JvdW5kLmpzIiwiYnVubnkuanMiLCJncm91bmQuanMiLCJkaXN0YWNlLmpzIiwibG9zZS5qcyIsImdhbWUuanMiLCJhcHAuanMiXSwibmFtZXMiOlsiRW5naW5lIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsInNwcml0ZXNoZWV0Iiwic2NhbGVSYXRpbyIsIlNjb3JlIiwiX2Jlc3REaXN0YW5jZSIsIl9jdXJyZW50RGlzdGFuY2UiLCJsb2FkIiwib25VcGRhdGUiLCJQaGFzZXIiLCJTaWduYWwiLCJsb2NhbFN0b3JhZ2UiLCJ0b1N0cmluZyIsIk51bWJlciIsInBhcnNlSW50IiwidmFsIiwiZGlzcGF0Y2giLCJTZXJ2aWNlIiwibmFtZSIsImxpc3QiLCJCb290IiwiZ2FtZSIsInN0YWdlIiwiZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UiLCJzY2FsZSIsInBhZ2VBbGlnbkhvcml6b250YWxseSIsInBhZ2VBbGlnblZlcnRpY2FsbHkiLCJzdGF0ZSIsInN0YXJ0IiwiU3RhdGUiLCJMb2FkZXIiLCJzdHlsZSIsImZvbnQiLCJmaWxsIiwicHJvZ3Jlc3NMYWJlbCIsImFkZCIsInRleHQiLCJ3b3JsZCIsImNlbnRlclgiLCJjZW50ZXJZIiwiYW5jaG9yIiwic2V0VG8iLCJwcm9ncmVzcyIsImNhY2hlS2V5Iiwic3VjY2VzcyIsInRvdGFsTG9hZGVkIiwidG90YWxGaWxlcyIsIkJhY2tncm91bmQiLCJ4IiwieSIsInNwZWVkIiwidGlsZVNjYWxlIiwiaGVpZ2h0IiwiZml4ZWRUb0NhbWVyYSIsIndpZHRoIiwiX3NwZWVkIiwidGlsZVBvc2l0aW9uIiwiVGlsZVNwcml0ZSIsIkJ1bm55IiwiZGF0YSIsImlzRGVhZCIsInJ1bm5pbmciLCJjb3VudEp1bXAiLCJNQVhfSlVNUFMiLCJwaHlzaWNzIiwiYXJjYWRlIiwiZW5hYmxlIiwiYm9keSIsImdyYXZpdHkiLCJtYXhWZWxvY2l0eSIsImNvbGxpZGVXb3JsZEJvdW5kcyIsImNyZWF0ZUFuaW1hdGlvbiIsImFuaW1hdGlvbnMiLCJwbGF5IiwiaW5BaXIiLCJidW5ueSIsInRvdWNoaW5nIiwiZG93biIsImFuaW1hdGlvbkRvd25UaW1lIiwiYW5pbWF0aW9uVXBUaW1lIiwidXBNb3ZlIiwidmVsb2NpdHkiLCJhY2NlbGVyYXRpb24iLCJ0d2VlbiIsInRvIiwiRWFzaW5nIiwiUXVhZHJhdGljIiwiSW4iLCJCQVNFX01BWF9TUEVFRCIsIkFDQ0VMRVJBVElPTiIsImp1bXBJbXB1bHNlIiwiU3ByaXRlIiwiR3JvdW5kIiwidHlwZSIsIkdSQVNTIiwic21hbGwiLCJicm9rZW4iLCJnZXROYW1lIiwiYXV0b0N1bGwiLCJvdXRPZkNhbWVyYUJvdW5kc0tpbGwiLCJpbW1vdmFibGUiLCJmcmFtZSIsIkNBS0UiLCJTQU5EIiwiU05PVyIsIlNUT05FIiwiV09PRCIsIkRpc3RhbmNlIiwic2NvcmUiLCJnZXQiLCJ1cGRhdGVEaXN0YW5jZSIsImN1cnJlbnREaXN0YW5jZSIsIlRleHQiLCJMb3NlIiwiYWxpZ24iLCJzZXRTaGFkb3ciLCJhbHBoYSIsIkdhbWUiLCJhdGxhc1hNTCIsImltYWdlIiwiX2dyb3VuZFN0ZXAiLCJfZ3JvdW5kVmVydGljYWxNYXJnaW4iLCJfc2NvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydFN5c3RlbSIsIlBoeXNpY3MiLCJBUkNBREUiLCJzZXRCb3VuZHMiLCJNQVhfVkFMVUUiLCJjcmVhdGVCYWNrZ3JvdW5kIiwiY3JlYXRlQnVubnkiLCJpbml0R3JvdW5kcyIsImNvbmZpZ3VyYXRlQ2FtZXJhIiwiYWRkQ29udHJvbCIsImNyZWF0ZURpc3RhbmNlTGFiZWwiLCJjcmVhdGVMb3NlTGFiZWwiLCJjb2xsaWRlIiwiZ3JvdW5kcyIsInVwZGF0ZUdyb3VuZHMiLCJ1cGRhdGVEaWUiLCJNYXRoIiwicm91bmQiLCJkaWUiLCJsb3NlTGFiZWwiLCJzaG93IiwiYmFja2dyb3VuZHMiLCJmb3JFYWNoIiwiYmciLCJzdG9wIiwiZXhpc3RpbmciLCJtYXJnaW4iLCJkaXN0YW5jZUxhYmVsIiwic3RlcCIsImdlbmVyYXRlR3JvdW5kcyIsImhvdGtleSIsImlucHV0Iiwia2V5Ym9hcmQiLCJhZGRLZXkiLCJLZXlDb2RlIiwiU1BBQ0VCQVIiLCJvbkRvd24iLCJqdW1wIiwicmVzdGFydCIsInJ1biIsIm1hcmdpbkJvdHRvbSIsInN0YXJ0R3JvdW5kIiwiZ3JvdXAiLCJjcmVhdGVTdGFydEdyb3VuZCIsImNyZWF0ZUZpcnN0R3JvdW5kcyIsImkiLCJTUExJVF9WRVJUSUNBTCIsIkdSSURfSEVJR0hUIiwicm5kIiwicGljayIsImJldHdlZW4iLCJhY3RpdmF0ZVJhbmRvbUdyb3VuZCIsInR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImdyb3VuZCIsImdldEZpcnN0RGVhZCIsInJlc2V0IiwiZCIsImdyb3VuZFR5cGUiLCJjYW1lcmEiLCJyb3VuZFB4IiwiZm9sbG93IiwiZGVhZHpvbmUiLCJSZWN0YW5nbGUiLCJBVVRPIiwib25yZXNpemUiLCJzZXRHYW1lU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsU0FBQTtBQUNBQyxZQUFBLEdBREE7QUFFQUMsYUFBQSxHQUZBOztBQUlBQyxZQUFBQyxPQUFBQyxVQUpBO0FBS0FDLGFBQUFGLE9BQUFHLFdBTEE7O0FBT0FDLGVBQUEsUUFQQTtBQVFBQyxjQUFBO0FBUkEsQ0FBQTs7SUNBQUMsSztBQUNBLG1CQUFBO0FBQUE7O0FBQ0EsU0FBQUMsYUFBQSxHQUFBLENBQUE7QUFDQSxTQUFBQyxnQkFBQSxHQUFBLENBQUE7O0FBRUEsU0FBQUMsSUFBQTtBQUNBLFNBQUFDLFFBQUEsR0FBQSxJQUFBQyxPQUFBQyxNQUFBLEVBQUE7QUFDQTs7OzsyQkFFQTtBQUNBWixhQUFBYSxZQUFBLENBQUEsY0FBQSxJQUFBLEtBQUFOLGFBQUEsQ0FB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WixPQUFBNEcsSUFBQSxDQUFBM0gsT0FBQUcsUUFBQSxFQUFBSCxPQUFBTSxTQUFBLEVBQUFTLE9BQUFxTCxJQUFBLENBQUE7O0FBRUFoTSxPQUFBaU0sUUFBQSxHQUFBLFlBQUE7QUFDQXJNLFNBQUEyQixJQUFBLENBQUFHLEtBQUEsQ0FBQXdLLFdBQUEsQ0FBQWxNLE9BQUFDLFVBQUEsRUFBQUQsT0FBQUcsV0FBQTtBQUNBLENBRkE7O0FBSUFQLE9BQUEyQixJQUFBLENBQUFNLEtBQUEsQ0FBQVEsR0FBQSxDQUFBLE1BQUEsRUFBQXpDLE9BQUEwQixJQUFBO0FBQ0ExQixPQUFBMkIsSUFBQSxDQUFBTSxLQUFBLENBQUFRLEdBQUEsQ0FBQSxNQUFBLEVBQUF6QyxPQUFBMkgsSUFBQTtBQUNBM0gsT0FBQTJCLElBQUEsQ0FBQU0sS0FBQSxDQUFBUSxHQUFBLENBQUEsUUFBQSxFQUFBekMsT0FBQW9DLE1BQUE7O0FBRUFwQyxPQUFBMkIsSUFBQSxDQUFBTSxLQUFBLENBQUFDLEtBQUEsQ0FBQSxNQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBFbmdpbmUgPSB7XHJcbiAgbWluV2lkdGg6IDY0MCxcclxuICBtaW5IZWlnaHQ6IDMyMCxcclxuXHJcbiAgbWF4V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG5cclxuICBzcHJpdGVzaGVldDogJ2p1bXBlcicsXHJcbiAgc2NhbGVSYXRpbzogMC4zNVxyXG59XHJcbiIsImNsYXNzIFNjb3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2Jlc3REaXN0YW5jZSA9IDBcclxuICAgIHRoaXMuX2N1cnJlbnREaXN0YW5jZSA9IDBcclxuXHJcbiAgICB0aGlzLmxvYWQoKVxyXG4gICAgdGhpcy5vblVwZGF0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKClcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlWydiZXN0RGlzdGFuY2UnXSA9IHRoaXMuX2Jlc3REaXN0YW5jZS50b1N0cmluZygpXHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgdGhpcy5fYmVzdERpc3RhbmNlID0gTnVtYmVyLnBhcnNlSW50KHdpbmRvdy5sb2NhbFN0b3JhZ2VbJ2Jlc3REaXN0YW5jZSddKVxyXG4gIH1cclxuXHJcbiAgc2V0IGJlc3REaXN0YW5jZSh2YWwpIHtcclxuICAgIHRoaXMuX2Jlc3REaXN0YW5jZSA9IHZhbFxyXG4gICAgdGhpcy5vblVwZGF0ZS5kaXNwYXRjaCgpXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2Jlc3REaXN0YW5jZVxyXG4gIH1cclxuICBnZXQgYmVzdERpc3RhbmNlKCkgeyByZXR1cm4gdGhpcy5fYmVzdERpc3RhbmNlIH1cclxuXHJcbiAgc2V0IGN1cnJlbnREaXN0YW5jZSh2YWwpIHtcclxuICAgIHRoaXMuX2N1cnJlbnREaXN0YW5jZSA9IHZhbFxyXG4gICAgdGhpcy5vblVwZGF0ZS5kaXNwYXRjaCgpXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnREaXN0YW5jZVxyXG4gIH1cclxuICBnZXQgY3VycmVudERpc3RhbmNlKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudERpc3RhbmNlIH1cclxufVxyXG5cclxuRW5naW5lLlNjb3JlID0gU2NvcmVcclxuIiwiY2xhc3MgU2VydmljZSB7XHJcbiAgc3RhdGljIGdldChuYW1lKSB7XHJcbiAgICByZXR1cm4gU2VydmljZS5saXN0W25hbWVdXHJcbiAgfVxyXG59XHJcblxyXG5TZXJ2aWNlLmxpc3QgPSB7XHJcbiAgXCJTY29yZVwiOiBuZXcgRW5naW5lLlNjb3JlKClcclxufVxyXG5cclxuRW5naW5lLlNlcnZpY2UgPSBTZXJ2aWNlXHJcbiIsImNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdMb2FkZXInKTtcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Cb290ID0gQm9vdDtcclxuIiwiY2xhc3MgTG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0dhbWUnKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2dyZXNzTGFiZWwoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgIGZvbnQ6ICc0MXB4IE9wZW4gU2FucycsXHJcbiAgICAgIGZpbGw6ICcjMDBFNjc2JyxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ0xvYWRpbmc6IDAlICgwLzApJywgc3R5bGUpO1xyXG4gICAgdGhpcy5wcm9ncmVzc0xhYmVsLmFuY2hvci5zZXRUbygwLjUpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFByb2dyZXNzKHByb2dyZXNzLCBjYWNoZUtleSwgc3VjY2VzcywgdG90YWxMb2FkZWQsIHRvdGFsRmlsZXMpIHtcclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbC50ZXh0ID0gYExvYWRpbmcgJHtwcm9ncmVzc30lICgke3RvdGFsTG9hZGVkfS8ke3RvdGFsRmlsZXN9KWA7XHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuTG9hZGVyID0gTG9hZGVyO1xyXG4iLCJjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgUGhhc2VyLlRpbGVTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIG5hbWUsIHNwZWVkKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAxMDI0LCAxMDI0LCBuYW1lKVxyXG5cclxuICAgIHRoaXMudGlsZVNjYWxlLnNldFRvKHRoaXMuZ2FtZS5oZWlnaHQgLyB0aGlzLmhlaWdodClcclxuICAgIHRoaXMuZml4ZWRUb0NhbWVyYSA9IHRydWVcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLmdhbWUud2lkdGhcclxuXHJcbiAgICB0aGlzLl9zcGVlZCA9IHNwZWVkXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi54ICs9IHRoaXMuX3NwZWVkXHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5fc3BlZWQgPSAwXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQmFja2dyb3VuZCA9IEJhY2tncm91bmRcclxuIiwiY2xhc3MgQnVubnkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBuYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUgKyAnX3N0YW5kLnBuZycpXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5ydW5uaW5nID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5jb3VudEp1bXAgPSBCdW5ueS5NQVhfSlVNUFNcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKFsgdGhpcyBdKVxyXG5cclxuICAgIHRoaXMud2lkdGggKj0gMC4zNVxyXG4gICAgdGhpcy5oZWlnaHQgKj0gMC4zNVxyXG5cclxuICAgIHRoaXMuYm9keS5ncmF2aXR5LnNldFRvKDAsIDI1MDApXHJcbiAgICB0aGlzLmJvZHkubWF4VmVsb2NpdHkuc2V0VG8oNDAwLCAyMDAwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWVcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBpZiAodGhpcy5pbkFpcigpKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdqdW1wJylcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnJ1bm5pbmcpe1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICAgICAgdGhpcy5kYXRhLmNvdW50SnVtcCA9IEJ1bm55Lk1BWF9KVU1QU1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluQWlyKCkge1xyXG4gICAgcmV0dXJuICFidW5ueS5ib2R5LnRvdWNoaW5nLmRvd25cclxuICB9XHJcblxyXG4gIGRpZSgpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbkRvd25UaW1lID0gMTAwMFxyXG4gICAgY29uc3QgYW5pbWF0aW9uVXBUaW1lID0gNDAwXHJcbiAgICBjb25zdCB1cE1vdmUgPSAxMDBcclxuXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oMClcclxuICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24uc2V0VG8oMClcclxuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSBmYWxzZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IHRydWVcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdodXJ0JylcclxuXHJcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy55IC0gdXBNb3ZlXHJcbiAgICAgIH0sIGFuaW1hdGlvbkRvd25UaW1lKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMuZ2FtZS5oZWlnaHQgKyB0aGlzLmhlaWdodFxyXG4gICAgICB9LCBhbmltYXRpb25VcFRpbWUsIFBoYXNlci5FYXNpbmcuUXVhZHJhdGljLkluKVxyXG4gICAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5kYXRhLnJ1bm5pbmcgPSB0cnVlXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oQnVubnkuQkFTRV9NQVhfU1BFRUQsIDApXHJcbiAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnNldFRvKEJ1bm55LkFDQ0VMRVJBVElPTiwgMClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2p1bXAnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX2p1bXAucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdydW4nLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3dhbGsxLnBuZycsIHRoaXMuZGF0YS5uYW1lICsgJ193YWxrMi5wbmcnXSwgMTAsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdodXJ0JywgW3RoaXMuZGF0YS5uYW1lICsgJ19odXJ0LnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgncmVhZHknLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3JlYWR5LnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnc3RhbmQnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3N0YW5kLnBuZyddLCAxLCB0cnVlKVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBqdW1wSW1wdWxzZSA9IDkwMFxyXG5cclxuICAgIGlmICh0aGlzLmRhdGEuY291bnRKdW1wID4gMClcclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAtanVtcEltcHVsc2VcclxuICAgICAgdGhpcy5kYXRhLmNvdW50SnVtcC0tXHJcbiAgfVxyXG59XHJcblxyXG5CdW5ueS5NQVhfSlVNUFMgPSAyXHJcbkJ1bm55LkFDQ0VMRVJBVElPTiA9IDIwMDBcclxuQnVubnkuQkFTRV9NQVhfU1BFRUQgPSA1MDBcclxuXHJcbkVuZ2luZS5CdW5ueSA9IEJ1bm55XHJcbiIsImNsYXNzIEdyb3VuZCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHR5cGUgPSBHcm91bmQudHlwZS5HUkFTUywgc21hbGwgPSBmYWxzZSwgYnJva2VuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBHcm91bmQuZ2V0TmFtZSh0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG5cclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIEVuZ2luZS5zcHJpdGVzaGVldCwgbmFtZSlcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuNDVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuNDVcclxuXHJcbiAgICB0aGlzLmF1dG9DdWxsID0gdHJ1ZVxyXG4gICAgdGhpcy5vdXRPZkNhbWVyYUJvdW5kc0tpbGwgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKFt0aGlzXSlcclxuICAgIHRoaXMuYm9keS5pbW1vdmFibGUgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBHcm91bmQuZ2V0TmFtZSh0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG5cclxuICAgIHRoaXMuZnJhbWUgPSBuYW1lXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcbiAgfVxyXG59XHJcblxyXG5Hcm91bmQudHlwZSA9IHtcclxuICBHUkFTUzogJ2dyYXNzJyxcclxuICBDQUtFOiAnY2FrZScsXHJcbiAgU0FORDogJ3NhbmQnLFxyXG4gIFNOT1c6ICdzbm93JyxcclxuICBTVE9ORTogJ3N0b25lJyxcclxuICBXT09EOiAnd29vZCdcclxufVxuXG5Hcm91bmQuZ2V0TmFtZSA9ICh0eXBlLCBzbWFsbCwgYnJva2VuKSA9PiB7XG4gIGxldCBuYW1lID0gYGdyb3VuZF8ke3R5cGV9YFxuXG4gIGlmIChzbWFsbCkgbmFtZSArPSAnX3NtYWxsJ1xuICBpZiAoYnJva2VuKSBuYW1lICs9ICdfYnJva2VuJ1xuXG4gIG5hbWUgKz0gJy5wbmcnXG5cbiAgcmV0dXJuIG5hbWVcbn1cclxuXHJcbkVuZ2luZS5Hcm91bmQgPSBHcm91bmRcclxuIiwiY2xhc3MgRGlzdGFuY2UgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGZpbGw6ICdyZ2IoMTY4LCAwLCAyMTApJyxcclxuICAgICAgZm9udDogJzI1cHggQXJpYWwnXHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ0Rpc3RhbmNlOiAwIG0uJywgc3R5bGUpXHJcblxyXG4gICAgdGhpcy5maXhlZFRvQ2FtZXJhID0gdHJ1ZVxyXG4gICAgdGhpcy5zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG4gICAgdGhpcy5zY29yZS5vblVwZGF0ZS5hZGQodGhpcy51cGRhdGVEaXN0YW5jZSwgdGhpcylcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3RhbmNlKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gYERpc3RhbmNlOiAke3RoaXMuc2NvcmUuY3VycmVudERpc3RhbmNlfSBtLmBcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5EaXN0YW5jZSA9IERpc3RhbmNlXHJcbiIsImNsYXNzIExvc2UgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGZpbGw6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnQ6ICc3NXB4IEFyaWFsJyxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ1lvdSBsb3NlIDotKCcsIHN0eWxlKVxyXG4gICAgdGhpcy50ZXh0ICs9ICdcXHJcXG5QcmVzcyBzcGFjZWJhcic7XHJcblxyXG4gICAgdGhpcy5zZXRTaGFkb3coMCwgMiwgJ3JnYmEoMzMsIDMzLCAzMywgMC42KScsIDQpXHJcblxyXG4gICAgdGhpcy5hbHBoYSA9IDBcclxuICAgIHRoaXMuZml4ZWRUb0NhbWVyYSA9IHRydWVcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgYWxwaGE6IDFcclxuICAgICAgfSwgODAwKVxyXG4gICAgICAuc3RhcnQoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkxvc2UgPSBMb3NlXHJcbiIsImNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5hdGxhc1hNTChcclxuICAgICAgRW5naW5lLnNwcml0ZXNoZWV0LFxyXG4gICAgICAnYXNzZXRzL3Nwcml0ZXNoZWV0cy9qdW1wZXIucG5nJyxcclxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvanVtcGVyLnhtbCdcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyMicsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjIucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXIzJywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyMy5wbmcnKVxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjQnLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXI0LnBuZycpXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5fZ3JvdW5kU3RlcCA9IDBcclxuICAgIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luID0gMTUwXHJcbiAgICB0aGlzLl9zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAweEFERTZGRlxyXG4gICAgdGhpcy5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSlcclxuICAgIHRoaXMud29ybGQuc2V0Qm91bmRzKDAsIDAsIE51bWJlci5NQVhfVkFMVUUsIHRoaXMuZ2FtZS5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJ1bm55KClcclxuICAgIHRoaXMuaW5pdEdyb3VuZHMoKVxyXG4gICAgdGhpcy5jb25maWd1cmF0ZUNhbWVyYSgpXHJcbiAgICB0aGlzLmFkZENvbnRyb2woKVxyXG4gICAgdGhpcy5jcmVhdGVEaXN0YW5jZUxhYmVsKClcclxuICAgIHRoaXMuY3JlYXRlTG9zZUxhYmVsKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LCB0aGlzLmdyb3VuZHMpXHJcbiAgICB0aGlzLnVwZGF0ZUdyb3VuZHMoKVxyXG4gICAgdGhpcy51cGRhdGVEaWUoKVxyXG5cclxuICAgIHRoaXMuX3Njb3JlLmN1cnJlbnREaXN0YW5jZSA9IE1hdGgucm91bmQodGhpcy5idW5ueS54IC8gMTUwKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGllKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmJ1bm55LnkgPiB0aGlzLmdhbWUuaGVpZ2h0IC0gMTAwICYmXHJcbiAgICAgICF0aGlzLmJ1bm55LmRhdGEuaXNEZWFkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5idW5ueS5kaWUoKVxyXG4gICAgICB0aGlzLmxvc2VMYWJlbC5zaG93KClcclxuICAgICAgdGhpcy5iYWNrZ3JvdW5kcy5mb3JFYWNoKChiZykgPT4ge1xyXG4gICAgICAgIGJnLnN0b3AoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gdGhpcy5ncm91bmRzLmNoaWxkcmVuLm1hcCgoc3ByaXRlKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuZ2FtZS5kZWJ1Zy5ib2R5KHNwcml0ZSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScpXHJcbiAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTG9zZUxhYmVsKCkge1xyXG4gICAgdGhpcy5sb3NlTGFiZWwgPSBuZXcgRW5naW5lLkxvc2UoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC8gMixcclxuICAgICAgdGhpcy5nYW1lLmhlaWdodCAvIDJcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmxvc2VMYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5sb3NlTGFiZWwpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVEaXN0YW5jZUxhYmVsKCkge1xyXG4gICAgY29uc3QgbWFyZ2luID0gMjVcclxuXHJcbiAgICB0aGlzLmRpc3RhbmNlTGFiZWwgPSBuZXcgRW5naW5lLkRpc3RhbmNlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAtIG1hcmdpbixcclxuICAgICAgbWFyZ2luXHJcbiAgICApXHJcbiAgICB0aGlzLmRpc3RhbmNlTGFiZWwuYW5jaG9yLnNldFRvKDEsIDApXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmRpc3RhbmNlTGFiZWwpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVHcm91bmRzKCkge1xyXG4gICAgbGV0IHN0ZXAgPSBNYXRoLnJvdW5kKHRoaXMuYnVubnkueCAvIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luKVxyXG4gICAgbGV0IG1hcmdpbiA9ICh0aGlzLmdhbWUud2lkdGggLSAxMDApXHJcblxyXG4gICAgaWYgKHN0ZXAgJSAyID09PSAwICYmIHN0ZXAgIT09IHRoaXMuX2dyb3VuZFN0ZXApIHtcclxuICAgICAgdGhpcy5fZ3JvdW5kU3RlcCA9IHN0ZXBcclxuICAgICAgdGhpcy5nZW5lcmF0ZUdyb3VuZHMobWFyZ2luKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQ29udHJvbCgpIHtcclxuICAgIGxldCBob3RrZXkgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Q29kZS5TUEFDRUJBUilcclxuICAgIGhvdGtleS5vbkRvd24uYWRkKHRoaXMuanVtcCwgdGhpcylcclxuICB9XHJcblxyXG4gIGp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5idW5ueS5kYXRhLmlzRGVhZCkge1xyXG4gICAgICB0aGlzLnN0YXRlLnJlc3RhcnQodHJ1ZSwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idW5ueS5kYXRhLnJ1bm5pbmcpIHtcclxuICAgICAgdGhpcy5idW5ueS5qdW1wKClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1bm55LnJ1bigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTdGFydEdyb3VuZCgpIHtcclxuICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IDEwMFxyXG4gICAgY29uc3QgeCA9IDEwMFxyXG4gICAgY29uc3QgeSA9IHRoaXMuZ2FtZS5oZWlnaHQgLSBtYXJnaW5Cb3R0b21cclxuICAgIGNvbnN0IHR5cGUgPSBHcm91bmQudHlwZS5HUkFTU1xyXG4gICAgY29uc3Qgc21hbGwgPSBmYWxzZVxyXG4gICAgY29uc3QgYnJva2VuID0gZmFsc2VcclxuXHJcbiAgICBsZXQgc3RhcnRHcm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZChcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBzbWFsbCxcclxuICAgICAgYnJva2VuLFxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuZ3JvdW5kcy5hZGQoc3RhcnRHcm91bmQpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCdW5ueSgpIHtcclxuICAgIHdpbmRvdy5idW5ueSA9IHRoaXMuYnVubnkgPSBuZXcgRW5naW5lLkJ1bm55KHRoaXMuZ2FtZSwgMTUwLCAxNTAsICdidW5ueTInKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idW5ueSlcclxuICB9XHJcblxyXG4gIGluaXRHcm91bmRzKCkge1xyXG4gICAgdGhpcy5ncm91bmRzID0gdGhpcy5hZGQuZ3JvdXAoKVxyXG4gICAgdGhpcy5jcmVhdGVTdGFydEdyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUZpcnN0R3JvdW5kcygpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaXJzdEdyb3VuZHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZ2FtZS53aWR0aCAvIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luOyBpKyspIHtcclxuICAgICAgaWYgKGkgJSAyID09IDApIHRoaXMuZ2VuZXJhdGVHcm91bmRzKGkgKiB0aGlzLl9ncm91bmRWZXJ0aWNhbE1hcmdpbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlR3JvdW5kcyhtYXJnaW4pIHtcclxuICAgIGNvbnN0IFNQTElUX1ZFUlRJQ0FMID0gM1xyXG4gICAgY29uc3QgR1JJRF9IRUlHSFQgPSB0aGlzLmdhbWUuaGVpZ2h0IC8gU1BMSVRfVkVSVElDQUxcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IFNQTElUX1ZFUlRJQ0FMOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm5kLnBpY2tbdHJ1ZSwgZmFsc2VdKSBjb250aW51ZVxyXG5cclxuICAgICAgY29uc3QgeCA9IHRoaXMuYnVubnkueCArIG1hcmdpbiArIHRoaXMucm5kLmJldHdlZW4oLTUwLCA1MClcclxuICAgICAgY29uc3QgeSA9IEdSSURfSEVJR0hUICogaSArIHRoaXMucm5kLmJldHdlZW4oLTEwMCwgMTAwKVxyXG5cclxuICAgICAgdGhpcy5hY3RpdmF0ZVJhbmRvbUdyb3VuZCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlUmFuZG9tR3JvdW5kKHgsIHkpIHtcclxuICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IDEwMFxyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoRW5naW5lLkdyb3VuZC50eXBlKS5tYXAodmFsID0+IHtcclxuICAgICAgcmV0dXJuIEVuZ2luZS5Hcm91bmQudHlwZVt2YWxdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMucm5kLnBpY2sodHlwZXMpXHJcbiAgICBjb25zdCBzbWFsbCA9IHRoaXMucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuICAgIGNvbnN0IGJyb2tlbiA9IHRoaXMucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuXHJcbiAgICBsZXQgZ3JvdW5kID0gdGhpcy5ncm91bmRzLmdldEZpcnN0RGVhZCgpXHJcbiAgICBpZiAoZ3JvdW5kID09IG51bGwpIHtcclxuICAgICAgZ3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHNtYWxsLFxyXG4gICAgICAgIGJyb2tlbixcclxuICAgICAgKVxyXG4gICAgICB0aGlzLmdyb3VuZHMuYWRkKGdyb3VuZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyb3VuZC5yZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91bmRcclxuICB9XHJcblxyXG4gIGNyZWF0ZUdyb3VuZHMoKSB7XHJcbiAgICB3aW5kb3cuZCA9IHRoaXMuZ3JvdW5kcyA9IHRoaXMuYWRkLmdyb3VwKClcclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoRW5naW5lLkdyb3VuZC50eXBlKS5tYXAodmFsID0+IHtcclxuICAgICAgcmV0dXJuIEVuZ2luZS5Hcm91bmQudHlwZVt2YWxdXHJcbiAgICB9KVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICBsZXQgZ3JvdW5kVHlwZSA9IHRoaXMucm5kLnBpY2sodHlwZXMpXHJcbiAgICAgIGxldCBncm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZChcclxuICAgICAgICB0aGlzLmdhbWUsXHJcbiAgICAgICAgNDAwICsgaSAqIDI1MCxcclxuICAgICAgICA0NTAsXHJcbiAgICAgICAgZ3JvdW5kVHlwZSxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0aGlzLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcbiAgICAgIClcclxuXHJcbiAgICAgIC8vIGdyb3VuZC5hdXRvQ3VsbCA9IHRydWVcclxuICAgICAgLy8gZ3JvdW5kLm91dE9mQ2FtZXJhQm91bmRzS2lsbCA9IHRydWVcclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kcy5hZGQoZ3JvdW5kKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlndXJhdGVDYW1lcmEoKSB7XHJcbiAgICB0aGlzLmNhbWVyYS5yb3VuZFB4ID0gZmFsc2VcclxuICAgIHRoaXMuY2FtZXJhLmZvbGxvdyh0aGlzLmJ1bm55KVxyXG4gICAgdGhpcy5jYW1lcmEuZGVhZHpvbmUgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZSgxMDAsIDAsIDAsIDApXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCYWNrZ3JvdW5kKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcyA9IHRoaXMuYWRkLmdyb3VwKClcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmFkZChuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXIyJywgLTEpKVxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyMycsIC0yKSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjQnLCAtMykpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuR2FtZSA9IEdhbWVcclxuIiwiRW5naW5lLmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoRW5naW5lLm1heFdpZHRoLCBFbmdpbmUubWF4SGVpZ2h0LCBQaGFzZXIuQVVUTylcclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICBFbmdpbmUuZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG59XHJcblxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5hZGQoJ0Jvb3QnLCBFbmdpbmUuQm9vdClcclxuRW5naW5lLmdhbWUuc3RhdGUuYWRkKCdHYW1lJywgRW5naW5lLkdhbWUpXHJcbkVuZ2luZS5nYW1lLnN0YXRlLmFkZCgnTG9hZGVyJywgRW5naW5lLkxvYWRlcilcclxuXHJcbkVuZ2luZS5nYW1lLnN0YXRlLnN0YXJ0KCdCb290JylcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
