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
    // this.height = this.game.height

    _this3._speed = speed;
    return _this3;
  }

  _createClass(Background, [{
    key: 'update',
    value: function update() {
      this.tilePosition.x += this._speed;
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
    _this4.body.maxVelocity.setTo(500, 2000);
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
    }
  }, {
    key: 'update',
    value: function update() {
      this.physics.arcade.collide(this.bunny, this.grounds);
      this.updateGrounds();
      this.checkDie();

      this._score.currentDistance = Math.round(this.bunny.x / 150);
    }
  }, {
    key: 'checkDie',
    value: function checkDie() {
      if (this.bunny.y > this.game.height - 100 && !this.bunny.data.isDead) {
        this.bunny.die();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // this.grounds.children.map((sprite) => {
      //   this.game.debug.body(sprite, 'rgba(255, 255, 255, 0.5)')
      // })
      this.game.debug.body(this.distanceLabel, 'rgba(255, 255, 255, 0.5)');
    }
  }, {
    key: 'createDistanceLabel',
    value: function createDistanceLabel() {
      var margin = 25;

      // this.test = this.add.text(125, 125, 'Hello world')

      window.label = this.distanceLabel = new Engine.Distance(this.game, this.game.width - margin, margin);
      this.distanceLabel.fixedToCamera = true;
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
      this.add.existing(new Engine.Background(this.game, 0, 0, 'layer2', -1));
      this.add.existing(new Engine.Background(this.game, 0, 0, 'layer3', -2));
      this.add.existing(new Engine.Background(this.game, 0, 0, 'layer4', -3));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyIsInNjb3JlLmpzIiwic2VydmljZS5qcyIsImJvb3QuanMiLCJsb2FkZXIuanMiLCJiYWNrZ3JvdW5kLmpzIiwiYnVubnkuanMiLCJncm91bmQuanMiLCJkaXN0YWNlLmpzIiwiZ2FtZS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJFbmdpbmUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heEhlaWdodCIsImlubmVySGVpZ2h0Iiwic3ByaXRlc2hlZXQiLCJzY2FsZVJhdGlvIiwiU2NvcmUiLCJfYmVzdERpc3RhbmNlIiwiX2N1cnJlbnREaXN0YW5jZSIsImxvYWQiLCJvblVwZGF0ZSIsIlBoYXNlciIsIlNpZ25hbCIsImxvY2FsU3RvcmFnZSIsInRvU3RyaW5nIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ2YWwiLCJkaXNwYXRjaCIsIlNlcnZpY2UiLCJuYW1lIiwibGlzdCIsIkJvb3QiLCJnYW1lIiwic3RhZ2UiLCJkaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSIsInNjYWxlIiwicGFnZUFsaWduSG9yaXpvbnRhbGx5IiwicGFnZUFsaWduVmVydGljYWxseSIsInN0YXRlIiwic3RhcnQiLCJTdGF0ZSIsIkxvYWRlciIsInN0eWxlIiwiZm9udCIsImZpbGwiLCJwcm9ncmVzc0xhYmVsIiwiYWRkIiwidGV4dCIsIndvcmxkIiwiY2VudGVyWCIsImNlbnRlclkiLCJhbmNob3IiLCJzZXRUbyIsInByb2dyZXNzIiwiY2FjaGVLZXkiLCJzdWNjZXNzIiwidG90YWxMb2FkZWQiLCJ0b3RhbEZpbGVzIiwiQmFja2dyb3VuZCIsIngiLCJ5Iiwic3BlZWQiLCJ0aWxlU2NhbGUiLCJoZWlnaHQiLCJmaXhlZFRvQ2FtZXJhIiwid2lkdGgiLCJfc3BlZWQiLCJ0aWxlUG9zaXRpb24iLCJUaWxlU3ByaXRlIiwiQnVubnkiLCJkYXRhIiwiaXNEZWFkIiwicnVubmluZyIsImNvdW50SnVtcCIsIk1BWF9KVU1QUyIsInBoeXNpY3MiLCJhcmNhZGUiLCJlbmFibGUiLCJib2R5IiwiZ3Jhdml0eSIsIm1heFZlbG9jaXR5IiwiY29sbGlkZVdvcmxkQm91bmRzIiwiY3JlYXRlQW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsInBsYXkiLCJpbkFpciIsImJ1bm55IiwidG91Y2hpbmciLCJkb3duIiwiYW5pbWF0aW9uRG93blRpbWUiLCJhbmltYXRpb25VcFRpbWUiLCJ1cE1vdmUiLCJ2ZWxvY2l0eSIsImFjY2VsZXJhdGlvbiIsInR3ZWVuIiwidG8iLCJFYXNpbmciLCJRdWFkcmF0aWMiLCJJbiIsIkJBU0VfTUFYX1NQRUVEIiwiQUNDRUxFUkFUSU9OIiwianVtcEltcHVsc2UiLCJTcHJpdGUiLCJHcm91bmQiLCJ0eXBlIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsImdldE5hbWUiLCJhdXRvQ3VsbCIsIm91dE9mQ2FtZXJhQm91bmRzS2lsbCIsImltbW92YWJsZSIsImZyYW1lIiwiQ0FLRSIsIlNBTkQiLCJTTk9XIiwiU1RPTkUiLCJXT09EIiwiRGlzdGFuY2UiLCJzY29yZSIsImdldCIsInVwZGF0ZURpc3RhbmNlIiwiY3VycmVudERpc3RhbmNlIiwiVGV4dCIsIkdhbWUiLCJhdGxhc1hNTCIsImltYWdlIiwiX2dyb3VuZFN0ZXAiLCJfZ3JvdW5kVmVydGljYWxNYXJnaW4iLCJfc2NvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydFN5c3RlbSIsIlBoeXNpY3MiLCJBUkNBREUiLCJzZXRCb3VuZHMiLCJNQVhfVkFMVUUiLCJjcmVhdGVCYWNrZ3JvdW5kIiwiY3JlYXRlQnVubnkiLCJpbml0R3JvdW5kcyIsImNvbmZpZ3VyYXRlQ2FtZXJhIiwiYWRkQ29udHJvbCIsImNyZWF0ZURpc3RhbmNlTGFiZWwiLCJjb2xsaWRlIiwiZ3JvdW5kcyIsInVwZGF0ZUdyb3VuZHMiLCJjaGVja0RpZSIsIk1hdGgiLCJyb3VuZCIsImRpZSIsImRlYnVnIiwiZGlzdGFuY2VMYWJlbCIsIm1hcmdpbiIsImxhYmVsIiwiZXhpc3RpbmciLCJzdGVwIiwiZ2VuZXJhdGVHcm91bmRzIiwiaG90a2V5IiwiaW5wdXQiLCJrZXlib2FyZCIsImFkZEtleSIsIktleUNvZGUiLCJTUEFDRUJBUiIsIm9uRG93biIsImp1bXAiLCJydW4iLCJtYXJnaW5Cb3R0b20iLCJzdGFydEdyb3VuZCIsImdyb3VwIiwiY3JlYXRlU3RhcnRHcm91bmQiLCJjcmVhdGVGaXJzdEdyb3VuZHMiLCJpIiwiU1BMSVRfVkVSVElDQUwiLCJHUklEX0hFSUdIVCIsInJuZCIsInBpY2siLCJiZXR3ZWVuIiwiYWN0aXZhdGVSYW5kb21Hcm91bmQiLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJncm91bmQiLCJnZXRGaXJzdERlYWQiLCJyZXNldCIsImQiLCJncm91bmRUeXBlIiwiY2FtZXJhIiwicm91bmRQeCIsImZvbGxvdyIsImRlYWR6b25lIiwiUmVjdGFuZ2xlIiwiQVVUTyIsIm9ucmVzaXplIiwic2V0R2FtZVNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLFNBQUE7QUFDQUMsWUFBQSxHQURBO0FBRUFDLGFBQUEsR0FGQTs7QUFJQUMsWUFBQUMsT0FBQUMsVUFKQTtBQUtBQyxhQUFBRixPQUFBRyxXQUxBOztBQU9BQyxlQUFBLFFBUEE7QUFRQUMsY0FBQTtBQVJBLENBQUE7O0lDQUFDLEs7QUFDQSxtQkFBQTtBQUFBOztBQUNBLFNBQUFDLGFBQUEsR0FBQSxDQUFBO0FBQ0EsU0FBQUMsZ0JBQUEsR0FBQSxDQUFBOztBQUVBLFNBQUFDLElBQUE7QUFDQSxTQUFBQyxRQUFBLEdBQUEsSUFBQUMsT0FBQUMsTUFBQSxFQUFBO0FBQ0E7Ozs7MkJBRUE7QUFDQVosYUFBQWEsWUFBQSxDQUFBLGNBQUEsSUFBQSxLQUFBTixhQUFBLENBQUFPLFFBQUEsRUFBQTtBQUNBOzs7MkJBRUE7QUFDQSxXQUFBUCxhQUFBLEdBQUFRLE9BQUFDLFFBQUEsQ0FBQWhCLE9BQUFhLFlBQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQTtBQUNBOzs7c0JBRUFJLEcs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UCxPQUFBMkIsSUFBQSxDQUFBTSxLQUFBLENBQUFRLEdBQUEsQ0FBQSxNQUFBLEVBQUF6QyxPQUFBMEIsSUFBQTtBQUNBMUIsT0FBQTJCLElBQUEsQ0FBQU0sS0FBQSxDQUFBUSxHQUFBLENBQUEsTUFBQSxFQUFBekMsT0FBQXVILElBQUE7QUFDQXZILE9BQUEyQixJQUFBLENBQUFNLEtBQUEsQ0FBQVEsR0FBQSxDQUFBLFFBQUEsRUFBQXpDLE9BQUFvQyxNQUFBOztBQUVBcEMsT0FBQTJCLElBQUEsQ0FBQU0sS0FBQSxDQUFBQyxLQUFBLENBQUEsTUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgRW5naW5lID0ge1xyXG4gIG1pbldpZHRoOiA2NDAsXHJcbiAgbWluSGVpZ2h0OiAzMjAsXHJcblxyXG4gIG1heFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuXHJcbiAgc3ByaXRlc2hlZXQ6ICdqdW1wZXInLFxyXG4gIHNjYWxlUmF0aW86IDAuMzVcclxufVxyXG4iLCJjbGFzcyBTY29yZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9iZXN0RGlzdGFuY2UgPSAwXHJcbiAgICB0aGlzLl9jdXJyZW50RGlzdGFuY2UgPSAwXHJcblxyXG4gICAgdGhpcy5sb2FkKClcclxuICAgIHRoaXMub25VcGRhdGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpXHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZVsnYmVzdERpc3RhbmNlJ10gPSB0aGlzLl9iZXN0RGlzdGFuY2UudG9TdHJpbmcoKVxyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHRoaXMuX2Jlc3REaXN0YW5jZSA9IE51bWJlci5wYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlWydiZXN0RGlzdGFuY2UnXSlcclxuICB9XHJcblxyXG4gIHNldCBiZXN0RGlzdGFuY2UodmFsKSB7XHJcbiAgICB0aGlzLl9iZXN0RGlzdGFuY2UgPSB2YWxcclxuICAgIHRoaXMub25VcGRhdGUuZGlzcGF0Y2goKVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9iZXN0RGlzdGFuY2VcclxuICB9XHJcbiAgZ2V0IGJlc3REaXN0YW5jZSgpIHsgcmV0dXJuIHRoaXMuX2Jlc3REaXN0YW5jZSB9XHJcblxyXG4gIHNldCBjdXJyZW50RGlzdGFuY2UodmFsKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50RGlzdGFuY2UgPSB2YWxcclxuICAgIHRoaXMub25VcGRhdGUuZGlzcGF0Y2goKVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50RGlzdGFuY2VcclxuICB9XHJcbiAgZ2V0IGN1cnJlbnREaXN0YW5jZSgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnREaXN0YW5jZSB9XHJcbn1cclxuXHJcbkVuZ2luZS5TY29yZSA9IFNjb3JlXHJcbiIsImNsYXNzIFNlcnZpY2Uge1xyXG4gIHN0YXRpYyBnZXQobmFtZSkge1xyXG4gICAgcmV0dXJuIFNlcnZpY2UubGlzdFtuYW1lXVxyXG4gIH1cclxufVxyXG5cclxuU2VydmljZS5saXN0ID0ge1xyXG4gIFwiU2NvcmVcIjogbmV3IEVuZ2luZS5TY29yZSgpXHJcbn1cclxuXHJcbkVuZ2luZS5TZXJ2aWNlID0gU2VydmljZVxyXG4iLCJjbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnTG9hZGVyJyk7XHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQm9vdCA9IEJvb3Q7XHJcbiIsImNsYXNzIExvYWRlciBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdHYW1lJyk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9ncmVzc0xhYmVsKCkge1xyXG4gICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICBmb250OiAnNDFweCBPcGVuIFNhbnMnLFxyXG4gICAgICBmaWxsOiAnIzAwRTY3NicsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9ncmVzc0xhYmVsID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclksICdMb2FkaW5nOiAwJSAoMC8wKScsIHN0eWxlKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbC5hbmNob3Iuc2V0VG8oMC41KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hQcm9ncmVzcyhwcm9ncmVzcywgY2FjaGVLZXksIHN1Y2Nlc3MsIHRvdGFsTG9hZGVkLCB0b3RhbEZpbGVzKSB7XHJcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwudGV4dCA9IGBMb2FkaW5nICR7cHJvZ3Jlc3N9JSAoJHt0b3RhbExvYWRlZH0vJHt0b3RhbEZpbGVzfSlgO1xyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkxvYWRlciA9IExvYWRlcjtcclxuIiwiY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFBoYXNlci5UaWxlU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBuYW1lLCBzcGVlZCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgMTAyNCwgMTAyNCwgbmFtZSlcclxuXHJcbiAgICB0aGlzLnRpbGVTY2FsZS5zZXRUbyh0aGlzLmdhbWUuaGVpZ2h0IC8gdGhpcy5oZWlnaHQpXHJcbiAgICB0aGlzLmZpeGVkVG9DYW1lcmEgPSB0cnVlXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5nYW1lLndpZHRoXHJcbiAgICAvLyB0aGlzLmhlaWdodCA9IHRoaXMuZ2FtZS5oZWlnaHRcclxuXHJcbiAgICB0aGlzLl9zcGVlZCA9IHNwZWVkXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnRpbGVQb3NpdGlvbi54ICs9IHRoaXMuX3NwZWVkXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQmFja2dyb3VuZCA9IEJhY2tncm91bmRcclxuIiwiY2xhc3MgQnVubnkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBuYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUgKyAnX3N0YW5kLnBuZycpXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5ydW5uaW5nID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5jb3VudEp1bXAgPSBCdW5ueS5NQVhfSlVNUFNcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKFsgdGhpcyBdKVxyXG5cclxuICAgIHRoaXMud2lkdGggKj0gMC4zNVxyXG4gICAgdGhpcy5oZWlnaHQgKj0gMC4zNVxyXG5cclxuICAgIHRoaXMuYm9keS5ncmF2aXR5LnNldFRvKDAsIDI1MDApXHJcbiAgICB0aGlzLmJvZHkubWF4VmVsb2NpdHkuc2V0VG8oNTAwLCAyMDAwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWVcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBpZiAodGhpcy5pbkFpcigpKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdqdW1wJylcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnJ1bm5pbmcpe1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICAgICAgdGhpcy5kYXRhLmNvdW50SnVtcCA9IEJ1bm55Lk1BWF9KVU1QU1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluQWlyKCkge1xyXG4gICAgcmV0dXJuICFidW5ueS5ib2R5LnRvdWNoaW5nLmRvd25cclxuICB9XHJcblxyXG4gIGRpZSgpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbkRvd25UaW1lID0gMTAwMFxyXG4gICAgY29uc3QgYW5pbWF0aW9uVXBUaW1lID0gNDAwXHJcbiAgICBjb25zdCB1cE1vdmUgPSAxMDBcclxuXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oMClcclxuICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24uc2V0VG8oMClcclxuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSBmYWxzZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IHRydWVcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdodXJ0JylcclxuXHJcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy55IC0gdXBNb3ZlXHJcbiAgICAgIH0sIGFuaW1hdGlvbkRvd25UaW1lKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMuZ2FtZS5oZWlnaHQgKyB0aGlzLmhlaWdodFxyXG4gICAgICB9LCBhbmltYXRpb25VcFRpbWUsIFBoYXNlci5FYXNpbmcuUXVhZHJhdGljLkluKVxyXG4gICAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5kYXRhLnJ1bm5pbmcgPSB0cnVlXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oQnVubnkuQkFTRV9NQVhfU1BFRUQsIDApXHJcbiAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnNldFRvKEJ1bm55LkFDQ0VMRVJBVElPTiwgMClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2p1bXAnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX2p1bXAucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdydW4nLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3dhbGsxLnBuZycsIHRoaXMuZGF0YS5uYW1lICsgJ193YWxrMi5wbmcnXSwgMTAsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdodXJ0JywgW3RoaXMuZGF0YS5uYW1lICsgJ19odXJ0LnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgncmVhZHknLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3JlYWR5LnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnc3RhbmQnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3N0YW5kLnBuZyddLCAxLCB0cnVlKVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBqdW1wSW1wdWxzZSA9IDkwMFxyXG5cclxuICAgIGlmICh0aGlzLmRhdGEuY291bnRKdW1wID4gMClcclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAtanVtcEltcHVsc2VcclxuICAgICAgdGhpcy5kYXRhLmNvdW50SnVtcC0tXHJcbiAgfVxyXG59XHJcblxyXG5CdW5ueS5NQVhfSlVNUFMgPSAyXHJcbkJ1bm55LkFDQ0VMRVJBVElPTiA9IDIwMDBcclxuQnVubnkuQkFTRV9NQVhfU1BFRUQgPSA1MDBcclxuXHJcbkVuZ2luZS5CdW5ueSA9IEJ1bm55XHJcbiIsImNsYXNzIEdyb3VuZCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHR5cGUgPSBHcm91bmQudHlwZS5HUkFTUywgc21hbGwgPSBmYWxzZSwgYnJva2VuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBHcm91bmQuZ2V0TmFtZSh0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG5cclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIEVuZ2luZS5zcHJpdGVzaGVldCwgbmFtZSlcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuNDVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuNDVcclxuXHJcbiAgICB0aGlzLmF1dG9DdWxsID0gdHJ1ZVxyXG4gICAgdGhpcy5vdXRPZkNhbWVyYUJvdW5kc0tpbGwgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKFt0aGlzXSlcclxuICAgIHRoaXMuYm9keS5pbW1vdmFibGUgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBHcm91bmQuZ2V0TmFtZSh0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG5cclxuICAgIHRoaXMuZnJhbWUgPSBuYW1lXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcbiAgfVxyXG59XHJcblxyXG5Hcm91bmQudHlwZSA9IHtcclxuICBHUkFTUzogJ2dyYXNzJyxcclxuICBDQUtFOiAnY2FrZScsXHJcbiAgU0FORDogJ3NhbmQnLFxyXG4gIFNOT1c6ICdzbm93JyxcclxuICBTVE9ORTogJ3N0b25lJyxcclxuICBXT09EOiAnd29vZCdcclxufVxuXG5Hcm91bmQuZ2V0TmFtZSA9ICh0eXBlLCBzbWFsbCwgYnJva2VuKSA9PiB7XG4gIGxldCBuYW1lID0gYGdyb3VuZF8ke3R5cGV9YFxuXG4gIGlmIChzbWFsbCkgbmFtZSArPSAnX3NtYWxsJ1xuICBpZiAoYnJva2VuKSBuYW1lICs9ICdfYnJva2VuJ1xuXG4gIG5hbWUgKz0gJy5wbmcnXG5cbiAgcmV0dXJuIG5hbWVcbn1cclxuXHJcbkVuZ2luZS5Hcm91bmQgPSBHcm91bmRcclxuIiwiY2xhc3MgRGlzdGFuY2UgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGZpbGw6ICdyZ2IoMTY4LCAwLCAyMTApJyxcclxuICAgICAgZm9udDogJzI1cHggQXJpYWwnXHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ0Rpc3RhbmNlOiAwIG0uJywgc3R5bGUpXHJcblxyXG4gICAgdGhpcy5zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG4gICAgdGhpcy5zY29yZS5vblVwZGF0ZS5hZGQodGhpcy51cGRhdGVEaXN0YW5jZSwgdGhpcylcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3RhbmNlKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gYERpc3RhbmNlOiAke3RoaXMuc2NvcmUuY3VycmVudERpc3RhbmNlfSBtLmBcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5EaXN0YW5jZSA9IERpc3RhbmNlXHJcbiIsImNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5hdGxhc1hNTChcclxuICAgICAgRW5naW5lLnNwcml0ZXNoZWV0LFxyXG4gICAgICAnYXNzZXRzL3Nwcml0ZXNoZWV0cy9qdW1wZXIucG5nJyxcclxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvanVtcGVyLnhtbCdcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyMicsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjIucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXIzJywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyMy5wbmcnKVxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjQnLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXI0LnBuZycpXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5fZ3JvdW5kU3RlcCA9IDBcclxuICAgIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luID0gMTUwXHJcbiAgICB0aGlzLl9zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAweEFERTZGRlxyXG4gICAgdGhpcy5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSlcclxuICAgIHRoaXMud29ybGQuc2V0Qm91bmRzKDAsIDAsIE51bWJlci5NQVhfVkFMVUUsIHRoaXMuZ2FtZS5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJ1bm55KClcclxuICAgIHRoaXMuaW5pdEdyb3VuZHMoKVxyXG4gICAgdGhpcy5jb25maWd1cmF0ZUNhbWVyYSgpXHJcbiAgICB0aGlzLmFkZENvbnRyb2woKVxyXG4gICAgdGhpcy5jcmVhdGVEaXN0YW5jZUxhYmVsKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LCB0aGlzLmdyb3VuZHMpXHJcbiAgICB0aGlzLnVwZGF0ZUdyb3VuZHMoKVxyXG4gICAgdGhpcy5jaGVja0RpZSgpXHJcblxyXG4gICAgdGhpcy5fc2NvcmUuY3VycmVudERpc3RhbmNlID0gTWF0aC5yb3VuZCh0aGlzLmJ1bm55LnggLyAxNTApXHJcbiAgfVxyXG5cclxuICBjaGVja0RpZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5idW5ueS55ID4gdGhpcy5nYW1lLmhlaWdodCAtIDEwMCAmJlxyXG4gICAgICAhdGhpcy5idW5ueS5kYXRhLmlzRGVhZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYnVubnkuZGllKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIHRoaXMuZ3JvdW5kcy5jaGlsZHJlbi5tYXAoKHNwcml0ZSkgPT4ge1xyXG4gICAgLy8gICB0aGlzLmdhbWUuZGVidWcuYm9keShzcHJpdGUsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknKVxyXG4gICAgLy8gfSlcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy5ib2R5KHRoaXMuZGlzdGFuY2VMYWJlbCwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVEaXN0YW5jZUxhYmVsKCkge1xyXG4gICAgY29uc3QgbWFyZ2luID0gMjVcclxuXHJcbiAgICAvLyB0aGlzLnRlc3QgPSB0aGlzLmFkZC50ZXh0KDEyNSwgMTI1LCAnSGVsbG8gd29ybGQnKVxyXG5cclxuICAgIHdpbmRvdy5sYWJlbCA9IHRoaXMuZGlzdGFuY2VMYWJlbCA9IG5ldyBFbmdpbmUuRGlzdGFuY2UoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gbWFyZ2luLFxyXG4gICAgICBtYXJnaW5cclxuICAgIClcclxuICAgIHRoaXMuZGlzdGFuY2VMYWJlbC5maXhlZFRvQ2FtZXJhID0gdHJ1ZVxyXG4gICAgdGhpcy5kaXN0YW5jZUxhYmVsLmFuY2hvci5zZXRUbygxLCAwKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5kaXN0YW5jZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlR3JvdW5kcygpIHtcclxuICAgIGxldCBzdGVwID0gTWF0aC5yb3VuZCh0aGlzLmJ1bm55LnggLyB0aGlzLl9ncm91bmRWZXJ0aWNhbE1hcmdpbilcclxuICAgIGxldCBtYXJnaW4gPSAodGhpcy5nYW1lLndpZHRoIC0gMTAwKVxyXG5cclxuICAgIGlmIChzdGVwICUgMiA9PT0gMCAmJiBzdGVwICE9PSB0aGlzLl9ncm91bmRTdGVwKSB7XHJcbiAgICAgIHRoaXMuX2dyb3VuZFN0ZXAgPSBzdGVwXHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVHcm91bmRzKG1hcmdpbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZENvbnRyb2woKSB7XHJcbiAgICBsZXQgaG90a2V5ID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleUNvZGUuU1BBQ0VCQVIpXHJcbiAgICBob3RrZXkub25Eb3duLmFkZCh0aGlzLmp1bXAsIHRoaXMpXHJcbiAgfVxyXG5cclxuICBqdW1wKCkge1xyXG4gICAgaWYgKHRoaXMuYnVubnkuZGF0YS5ydW5uaW5nKSB7XHJcbiAgICAgIHRoaXMuYnVubnkuanVtcCgpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5idW5ueS5ydW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRHcm91bmQoKSB7XHJcbiAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAxMDBcclxuICAgIGNvbnN0IHggPSAxMDBcclxuICAgIGNvbnN0IHkgPSB0aGlzLmdhbWUuaGVpZ2h0IC0gbWFyZ2luQm90dG9tXHJcbiAgICBjb25zdCB0eXBlID0gR3JvdW5kLnR5cGUuR1JBU1NcclxuICAgIGNvbnN0IHNtYWxsID0gZmFsc2VcclxuICAgIGNvbnN0IGJyb2tlbiA9IGZhbHNlXHJcblxyXG4gICAgbGV0IHN0YXJ0R3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdHlwZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIGJyb2tlbixcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMuYWRkKHN0YXJ0R3JvdW5kKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQnVubnkoKSB7XHJcbiAgICB3aW5kb3cuYnVubnkgPSB0aGlzLmJ1bm55ID0gbmV3IEVuZ2luZS5CdW5ueSh0aGlzLmdhbWUsIDE1MCwgMTUwLCAnYnVubnkyJylcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnVubnkpXHJcbiAgfVxyXG5cclxuICBpbml0R3JvdW5kcygpIHtcclxuICAgIHRoaXMuZ3JvdW5kcyA9IHRoaXMuYWRkLmdyb3VwKClcclxuICAgIHRoaXMuY3JlYXRlU3RhcnRHcm91bmQoKVxyXG4gICAgdGhpcy5jcmVhdGVGaXJzdEdyb3VuZHMoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlyc3RHcm91bmRzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmdhbWUud2lkdGggLyB0aGlzLl9ncm91bmRWZXJ0aWNhbE1hcmdpbjsgaSsrKSB7XHJcbiAgICAgIGlmIChpICUgMiA9PSAwKSB0aGlzLmdlbmVyYXRlR3JvdW5kcyhpICogdGhpcy5fZ3JvdW5kVmVydGljYWxNYXJnaW4pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUdyb3VuZHMobWFyZ2luKSB7XHJcbiAgICBjb25zdCBTUExJVF9WRVJUSUNBTCA9IDNcclxuICAgIGNvbnN0IEdSSURfSEVJR0hUID0gdGhpcy5nYW1lLmhlaWdodCAvIFNQTElUX1ZFUlRJQ0FMXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBTUExJVF9WRVJUSUNBTDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnJuZC5waWNrW3RydWUsIGZhbHNlXSkgY29udGludWVcclxuXHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmJ1bm55LnggKyBtYXJnaW4gKyB0aGlzLnJuZC5iZXR3ZWVuKC01MCwgNTApXHJcbiAgICAgIGNvbnN0IHkgPSBHUklEX0hFSUdIVCAqIGkgKyB0aGlzLnJuZC5iZXR3ZWVuKC0xMDAsIDEwMClcclxuXHJcbiAgICAgIHRoaXMuYWN0aXZhdGVSYW5kb21Hcm91bmQoeCwgeSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZVJhbmRvbUdyb3VuZCh4LCB5KSB7XHJcbiAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAxMDBcclxuXHJcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKEVuZ2luZS5Hcm91bmQudHlwZSkubWFwKHZhbCA9PiB7XHJcbiAgICAgIHJldHVybiBFbmdpbmUuR3JvdW5kLnR5cGVbdmFsXVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnJuZC5waWNrKHR5cGVzKVxyXG4gICAgY29uc3Qgc21hbGwgPSB0aGlzLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcbiAgICBjb25zdCBicm9rZW4gPSB0aGlzLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcblxyXG4gICAgbGV0IGdyb3VuZCA9IHRoaXMuZ3JvdW5kcy5nZXRGaXJzdERlYWQoKVxyXG4gICAgaWYgKGdyb3VuZCA9PSBudWxsKSB7XHJcbiAgICAgIGdyb3VuZCA9IG5ldyBFbmdpbmUuR3JvdW5kKFxyXG4gICAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgICB4LFxyXG4gICAgICAgIHksXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBzbWFsbCxcclxuICAgICAgICBicm9rZW4sXHJcbiAgICAgIClcclxuICAgICAgdGhpcy5ncm91bmRzLmFkZChncm91bmQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncm91bmQucmVzZXQoeCwgeSwgdHlwZSwgc21hbGwsIGJyb2tlbilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JvdW5kXHJcbiAgfVxyXG5cclxuICBjcmVhdGVHcm91bmRzKCkge1xyXG4gICAgd2luZG93LmQgPSB0aGlzLmdyb3VuZHMgPSB0aGlzLmFkZC5ncm91cCgpXHJcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKEVuZ2luZS5Hcm91bmQudHlwZSkubWFwKHZhbCA9PiB7XHJcbiAgICAgIHJldHVybiBFbmdpbmUuR3JvdW5kLnR5cGVbdmFsXVxyXG4gICAgfSlcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgbGV0IGdyb3VuZFR5cGUgPSB0aGlzLnJuZC5waWNrKHR5cGVzKVxyXG4gICAgICBsZXQgZ3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICAgIDQwMCArIGkgKiAyNTAsXHJcbiAgICAgICAgNDUwLFxyXG4gICAgICAgIGdyb3VuZFR5cGUsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdGhpcy5ybmQucGljayhbdHJ1ZSwgZmFsc2VdKVxyXG4gICAgICApXHJcblxyXG4gICAgICAvLyBncm91bmQuYXV0b0N1bGwgPSB0cnVlXHJcbiAgICAgIC8vIGdyb3VuZC5vdXRPZkNhbWVyYUJvdW5kc0tpbGwgPSB0cnVlXHJcblxyXG4gICAgICB0aGlzLmdyb3VuZHMuYWRkKGdyb3VuZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyYXRlQ2FtZXJhKCkge1xyXG4gICAgdGhpcy5jYW1lcmEucm91bmRQeCA9IGZhbHNlXHJcbiAgICB0aGlzLmNhbWVyYS5mb2xsb3codGhpcy5idW5ueSlcclxuICAgIHRoaXMuY2FtZXJhLmRlYWR6b25lID0gbmV3IFBoYXNlci5SZWN0YW5nbGUoMTAwLCAwLCAwLCAwKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjInLCAtMSkpXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyhuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXIzJywgLTIpKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyNCcsIC0zKSlcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5HYW1lID0gR2FtZVxyXG4iLCJFbmdpbmUuZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShFbmdpbmUubWF4V2lkdGgsIEVuZ2luZS5tYXhIZWlnaHQsIFBoYXNlci5BVVRPKVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gIEVuZ2luZS5nYW1lLnNjYWxlLnNldEdhbWVTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbn1cclxuXHJcbkVuZ2luZS5nYW1lLnN0YXRlLmFkZCgnQm9vdCcsIEVuZ2luZS5Cb290KVxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5hZGQoJ0dhbWUnLCBFbmdpbmUuR2FtZSlcclxuRW5naW5lLmdhbWUuc3RhdGUuYWRkKCdMb2FkZXInLCBFbmdpbmUuTG9hZGVyKVxyXG5cclxuRW5naW5lLmdhbWUuc3RhdGUuc3RhcnQoJ0Jvb3QnKVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
