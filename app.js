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
      this._bestDistance = Number.parseInt(window.localStorage['bestDistance']) || 0;
    }
  }, {
    key: 'bestDistance',
    set: function set(val) {
      this._bestDistance = val;
      this.onUpdate.dispatch();
      this.save();

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

Score.MULTIPER_DISTANCE = 150;

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

    _this3.data.speed = speed;
    _this3.data.isStoped = true;
    return _this3;
  }

  _createClass(Background, [{
    key: 'update',
    value: function update() {
      if (!this.data.isStoped) this.tilePosition.x += this.data.speed;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.data.isStoped = true;
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.data.isStoped = false;
    }
  }]);

  return Background;
}(Phaser.TileSprite);

Engine.Background = Background;

var BestDistanceStripe = function (_Phaser$Graphics) {
  _inherits(BestDistanceStripe, _Phaser$Graphics);

  function BestDistanceStripe(game, x) {
    _classCallCheck(this, BestDistanceStripe);

    var _this4 = _possibleConstructorReturn(this, (BestDistanceStripe.__proto__ || Object.getPrototypeOf(BestDistanceStripe)).call(this, game, x, -BestDistanceStripe.ANTI_MARGIN));

    _this4.y = _this4.game.world.bounds.y;

    _this4.draw();
    return _this4;
  }

  _createClass(BestDistanceStripe, [{
    key: 'draw',
    value: function draw() {
      var width = 6;
      var height = 32;
      var summHeight = game.world.bounds.height;

      this.beginFill(0xFFFFFF, 0.7);

      for (var i = 0; i < summHeight / height; i++) {
        var x = 0;
        var y = i * summHeight / height;
        this.drawRect(x, y, width, height);
      }
      this.endFill();
    }
  }]);

  return BestDistanceStripe;
}(Phaser.Graphics);

Engine.BestDistanceStripe = BestDistanceStripe;

var BestDistance = function () {
  function BestDistance(game) {
    _classCallCheck(this, BestDistance);

    this.score = Engine.Service.get('Score');

    this.game = game;
    this.x = this.score.bestDistance * Engine.Score.MULTIPER_DISTANCE;

    this.createLabel();
    this.createStripe();
  }

  _createClass(BestDistance, [{
    key: 'createLabel',
    value: function createLabel() {
      var _this5 = this;

      var style = {
        fill: 'white',
        font: '26px Arial'
      };
      var marginLeft = 10;
      var marginTop = 25;

      this.label = this.game.add.text(this.x + marginLeft, 0, 'Best ' + this.score.bestDistance + ' m.', style);
      this.label.update = function () {
        _this5.label.y = _this5.game.camera.y + marginTop;
      };
    }
  }, {
    key: 'createStripe',
    value: function createStripe() {
      this.stripe = new Engine.BestDistanceStripe(this.game, this.x);
      this.game.add.existing(this.stripe);
    }
  }]);

  return BestDistance;
}();

Engine.BestDistance = BestDistance;

var Bunny = function (_Phaser$Sprite) {
  _inherits(Bunny, _Phaser$Sprite);

  function Bunny(game, x, y, name) {
    _classCallCheck(this, Bunny);

    var _this6 = _possibleConstructorReturn(this, (Bunny.__proto__ || Object.getPrototypeOf(Bunny)).call(this, game, x, y, Engine.spritesheet, name + '_stand.png'));

    _this6.data.name = name;
    _this6.data.isDead = false;
    _this6.data.running = false;
    _this6.data.countJump = Bunny.MAX_JUMPS;

    _this6.game.physics.arcade.enable([_this6]);

    _this6.width *= 0.35;
    _this6.height *= 0.35;

    _this6.body.gravity.setTo(0, 2500);
    _this6.body.maxVelocity.setTo(400, 2000);
    _this6.body.collideWorldBounds = true;

    _this6.createAnimation();
    _this6.animations.play('run');
    return _this6;
  }

  _createClass(Bunny, [{
    key: 'addTrail',
    value: function addTrail() {
      this.data.trail = new Engine.Trail(this.game, 500, this);
      this.game.add.existing(this.data.trail);
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.data.isDead) return;

      if (this.inAir()) {
        this.data.trail.startEmitt();
        this.animations.play('jump');
      } else if (this.data.running) {
        this.data.trail.startEmitt();
        this.animations.play('run');
        this.data.countJump = Bunny.MAX_JUMPS;
      } else {
        this.data.trail.stopEmitt();
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
      this.data.trail.stopEmitt();
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

    var _this7 = _possibleConstructorReturn(this, (Ground.__proto__ || Object.getPrototypeOf(Ground)).call(this, game, x, y, Engine.spritesheet, name));

    _this7.width *= 0.45;
    _this7.height *= 0.45;

    _this7.autoCull = true;

    _this7.game.physics.enable([_this7]);
    _this7.body.immovable = true;

    _this7.data.name = name;
    _this7.data.type = type;
    _this7.data.small = small;
    _this7.data.broken = broken;
    return _this7;
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

var Trail = function (_Phaser$Particles$Arc) {
  _inherits(Trail, _Phaser$Particles$Arc);

  function Trail(game, maxParticles, follow) {
    _classCallCheck(this, Trail);

    var _this8 = _possibleConstructorReturn(this, (Trail.__proto__ || Object.getPrototypeOf(Trail)).call(this, game, 0, 0, maxParticles));

    _this8.makeParticles('particles');
    _this8.lifespan = 500;

    _this8._particlesEmit = 20;
    _this8._delayEmit = 50;
    _this8._follow = follow;

    _this8._timerEmmiting = _this8.game.time.create();
    _this8._timerEmmiting.loop(_this8._delayEmit, _this8.emit, _this8);
    _this8._timerEmmiting.start();
    return _this8;
  }

  _createClass(Trail, [{
    key: 'emit',
    value: function emit() {
      for (var i = 0; i < this._particlesEmit; i++) {
        var particleFram = this.game.rnd.between(0, 4);

        this.emitParticle(this._follow.x, this._follow.y + this._follow.height, 'particles', particleFram);
      }
    }
  }, {
    key: 'stopEmitt',
    value: function stopEmitt() {
      this._timerEmmiting.pause();
    }
  }, {
    key: 'startEmitt',
    value: function startEmitt() {
      this._timerEmmiting.resume();
    }
  }]);

  return Trail;
}(Phaser.Particles.Arcade.Emitter);

Engine.Trail = Trail;

var Distance = function (_Phaser$Text) {
  _inherits(Distance, _Phaser$Text);

  function Distance(game, x, y) {
    _classCallCheck(this, Distance);

    var style = {
      fill: 'rgb(168, 0, 210)',
      font: '25px Arial'
    };

    var _this9 = _possibleConstructorReturn(this, (Distance.__proto__ || Object.getPrototypeOf(Distance)).call(this, game, x, y, 'Distance: 0 m.', style));

    _this9.fixedToCamera = true;
    _this9.score = Engine.Service.get('Score');
    _this9.score.onUpdate.add(_this9.updateDistance, _this9);
    return _this9;
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

    var _this10 = _possibleConstructorReturn(this, (Lose.__proto__ || Object.getPrototypeOf(Lose)).call(this, game, x, y, 'You lose :-(', style));

    _this10.text += '\r\nPress spacebar';

    _this10.setShadow(0, 2, 'rgba(33, 33, 33, 0.6)', 4);

    _this10.alpha = 0;
    _this10.fixedToCamera = true;
    return _this10;
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

      this.load.spritesheet('particles', 'assets/sprites/particles.png', 8, 8);
    }
  }, {
    key: 'init',
    value: function init() {
      this._groundStep = 0;
      this._groundVerticalMargin = 300;
      this._score = Engine.Service.get('Score');

      window.game = this;
    }
  }, {
    key: 'create',
    value: function create() {
      this.stage.backgroundColor = 0xADE6FF;
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.world.setBounds(0, -this.game.height, Number.MAX_VALUE, this.game.height * 2);

      this.createBackground();
      this.createBunny();
      this.initGrounds();

      this.bunny.addTrail();

      this.configurateCamera();
      this.addControl();
      this.createDistanceLabel();
      this.createLoseLabel();
      this.createBestDistance();
    }
  }, {
    key: 'update',
    value: function update() {
      this.physics.arcade.collide(this.bunny, this.grounds);
      this.updateGrounds();
      this.updateDie();

      this._score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE);
    }
  }, {
    key: 'render',
    value: function render() {
      // this.grounds.children.map((sprite) => {
      //   this.game.debug.body(sprite, 'rgba(255, 255, 255, 0.5)')
      // })

      this.game.debug.spriteInfo(this.bunny, 90, 15, 'white');

      // let zone = this.camera.deadzone
      // this.game.debug.geom(
      //   new Phaser.Rectangle(
      //     this.camera.x + zone.x,
      //     this.camera.y + zone.y,
      //     zone.width, zone.height
      //   ), 'rgba(255,0,0,0.6)')
    }
  }, {
    key: 'updateDie',
    value: function updateDie() {
      if (this.bunny.y > this.game.height - 100 && !this.bunny.data.isDead) {
        this.bunny.die();
        this.lose();
      }
    }
  }, {
    key: 'createBestDistance',
    value: function createBestDistance() {
      this.bestDistance = new Engine.BestDistance(this.game);
    }
  }, {
    key: 'lose',
    value: function lose() {
      this.loseLabel.show();
      this.backgrounds.callAll('stop');
      if (this._score.bestDistance < this._score.currentDistance) {
        this._score.bestDistance = this._score.currentDistance;
      }
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
      var margin = this.game.width;

      if (step !== this._groundStep) {
        this._groundStep = step;
        this.generateGrounds(margin);
      }

      this.dieGrounds();
    }
  }, {
    key: 'dieGrounds',
    value: function dieGrounds() {
      var _this12 = this;

      this.grounds.children.forEach(function (ground) {
        if (!ground.inCamera && ground.alive && ground.x < _this12.bunny.x - _this12.camera.deadzone.x) {
          ground.kill();
        }
      });
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
        this.backgrounds.callAll('resume');
        this.bunny.run();
      }
    }
  }, {
    key: 'createStartGround',
    value: function createStartGround() {
      var marginBottom = 250;
      var x = 100;
      var y = this.bunny.y + marginBottom;
      var type = Ground.type.GRASS;
      var small = false;
      var broken = false;

      var startGround = new Engine.Ground(this.game, x, y, type, small, broken);

      this.grounds.add(startGround);
    }
  }, {
    key: 'createBunny',
    value: function createBunny() {
      window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny1');
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
        this.generateGrounds(i * this._groundVerticalMargin);
      }
    }
  }, {
    key: 'generateGrounds',
    value: function generateGrounds(margin) {
      var SPLIT_VERTICAL = 3;
      var GRID_HEIGHT = this.game.height / SPLIT_VERTICAL;

      for (var i = 1; i < SPLIT_VERTICAL; i++) {
        if (this.rnd.pick[(true, false)]) continue;

        var x = this.bunny.x + margin + this.rnd.between(-25, 25);
        var y = GRID_HEIGHT * i + this.rnd.between(-50, 50);

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
    key: 'configurateCamera',
    value: function configurateCamera() {
      var paddingLeft = 300;
      var smoothMove = 0.15;
      var deadZoneHeight = 50;

      this.camera.roundPx = false;
      this.camera.follow(this.bunny, Phaser.Camera.FOLLOW_LOCKON, 1, smoothMove);
      this.camera.deadzone = new Phaser.Rectangle(paddingLeft, this.game.height / 2, 1, deadZoneHeight);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyIsInNjb3JlLmpzIiwic2VydmljZS5qcyIsImJvb3QuanMiLCJsb2FkZXIuanMiLCJiYWNrZ3JvdW5kLmpzIiwiYmVzdC1kaXN0YW5jZS1zdHJpcGUuanMiLCJiZXN0LWRpc3RhbmNlLmpzIiwiYnVubnkuanMiLCJncm91bmQuanMiLCJ0cmFpbC5qcyIsImRpc3RhY2UuanMiLCJsb3NlLmpzIiwiZ2FtZS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJFbmdpbmUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heEhlaWdodCIsImlubmVySGVpZ2h0Iiwic3ByaXRlc2hlZXQiLCJzY2FsZVJhdGlvIiwiU2NvcmUiLCJfYmVzdERpc3RhbmNlIiwiX2N1cnJlbnREaXN0YW5jZSIsImxvYWQiLCJvblVwZGF0ZSIsIlBoYXNlciIsIlNpZ25hbCIsImxvY2FsU3RvcmFnZSIsInRvU3RyaW5nIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ2YWwiLCJkaXNwYXRjaCIsInNhdmUiLCJNVUxUSVBFUl9ESVNUQU5DRSIsIlNlcnZpY2UiLCJuYW1lIiwibGlzdCIsIkJvb3QiLCJnYW1lIiwic3RhZ2UiLCJkaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSIsInNjYWxlIiwicGFnZUFsaWduSG9yaXpvbnRhbGx5IiwicGFnZUFsaWduVmVydGljYWxseSIsInN0YXRlIiwic3RhcnQiLCJTdGF0ZSIsIkxvYWRlciIsInN0eWxlIiwiZm9udCIsImZpbGwiLCJwcm9ncmVzc0xhYmVsIiwiYWRkIiwidGV4dCIsIndvcmxkIiwiY2VudGVyWCIsImNlbnRlclkiLCJhbmNob3IiLCJzZXRUbyIsInByb2dyZXNzIiwiY2FjaGVLZXkiLCJzdWNjZXNzIiwidG90YWxMb2FkZWQiLCJ0b3RhbEZpbGVzIiwiQmFja2dyb3VuZCIsIngiLCJ5Iiwic3BlZWQiLCJ0aWxlU2NhbGUiLCJoZWlnaHQiLCJmaXhlZFRvQ2FtZXJhIiwid2lkdGgiLCJkYXRhIiwiaXNTdG9wZWQiLCJ0aWxlUG9zaXRpb24iLCJUaWxlU3ByaXRlIiwiQmVzdERpc3RhbmNlU3RyaXBlIiwiQU5USV9NQVJHSU4iLCJib3VuZHMiLCJkcmF3Iiwic3VtbUhlaWdodCIsImJlZ2luRmlsbCIsImkiLCJkcmF3UmVjdCIsImVuZEZpbGwiLCJHcmFwaGljcyIsIkJlc3REaXN0YW5jZSIsInNjb3JlIiwiZ2V0IiwiYmVzdERpc3RhbmNlIiwiY3JlYXRlTGFiZWwiLCJjcmVhdGVTdHJpcGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibGFiZWwiLCJ1cGRhdGUiLCJjYW1lcmEiLCJzdHJpcGUiLCJleGlzdGluZyIsIkJ1bm55IiwiaXNEZWFkIiwicnVubmluZyIsImNvdW50SnVtcCIsIk1BWF9KVU1QUyIsInBoeXNpY3MiLCJhcmNhZGUiLCJlbmFibGUiLCJib2R5IiwiZ3Jhdml0eSIsIm1heFZlbG9jaXR5IiwiY29sbGlkZVdvcmxkQm91bmRzIiwiY3JlYXRlQW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsInBsYXkiLCJ0cmFpbCIsIlRyYWlsIiwiaW5BaXIiLCJzdGFydEVtaXR0Iiwic3RvcEVtaXR0IiwiYnVubnkiLCJ0b3VjaGluZyIsImRvd24iLCJhbmltYXRpb25Eb3duVGltZSIsImFuaW1hdGlvblVwVGltZSIsInVwTW92ZSIsInZlbG9jaXR5IiwiYWNjZWxlcmF0aW9uIiwidHdlZW4iLCJ0byIsIkVhc2luZyIsIlF1YWRyYXRpYyIsIkluIiwiQkFTRV9NQVhfU1BFRUQiLCJBQ0NFTEVSQVRJT04iLCJqdW1wSW1wdWxzZSIsIlNwcml0ZSIsIkdyb3VuZCIsInR5cGUiLCJHUkFTUyIsInNtYWxsIiwiYnJva2VuIiwiZ2V0TmFtZSIsImF1dG9DdWxsIiwiaW1tb3ZhYmxlIiwiZnJhbWUiLCJDQUtFIiwiU0FORCIsIlNOT1ciLCJTVE9ORSIsIldPT0QiLCJtYXhQYXJ0aWNsZXMiLCJmb2xsb3ciLCJtYWtlUGFydGljbGVzIiwibGlmZXNwYW4iLCJfcGFydGljbGVzRW1pdCIsIl9kZWxheUVtaXQiLCJfZm9sbG93IiwiX3RpbWVyRW1taXRpbmciLCJ0aW1lIiwiY3JlYXRlIiwibG9vcCIsImVtaXQiLCJwYXJ0aWNsZUZyYW0iLCJybmQiLCJiZXR3ZWVuIiwiZW1pdFBhcnRpY2xlIiwicGF1c2UiLCJyZXN1bWUiLCJQYXJ0aWNsZXMiLCJBcmNhZGUiLCJFbWl0dGVyIiwiRGlzdGFuY2UiLCJ1cGRhdGVEaXN0YW5jZSIsImN1cnJlbnREaXN0YW5jZSIsIlRleHQiLCJMb3NlIiwiYWxpZ24iLCJzZXRTaGFkb3ciLCJhbHBoYSIsIkdhbWUiLCJhdGxhc1hNTCIsImltYWdlIiwiX2dyb3VuZFN0ZXAiLCJfZ3JvdW5kVmVydGljYWxNYXJnaW4iLCJfc2NvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydFN5c3RlbSIsIlBoeXNpY3MiLCJBUkNBREUiLCJzZXRCb3VuZHMiLCJNQVhfVkFMVUUiLCJjcmVhdGVCYWNrZ3JvdW5kIiwiY3JlYXRlQnVubnkiLCJpbml0R3JvdW5kcyIsImFkZFRyYWlsIiwiY29uZmlndXJhdGVDYW1lcmEiLCJhZGRDb250cm9sIiwiY3JlYXRlRGlzdGFuY2VMYWJlbCIsImNyZWF0ZUxvc2VMYWJlbCIsImNyZWF0ZUJlc3REaXN0YW5jZSIsImNvbGxpZGUiLCJncm91bmRzIiwidXBkYXRlR3JvdW5kcyIsInVwZGF0ZURpZSIsIk1hdGgiLCJyb3VuZCIsImRlYnVnIiwic3ByaXRlSW5mbyIsImRpZSIsImxvc2UiLCJsb3NlTGFiZWwiLCJzaG93IiwiYmFja2dyb3VuZHMiLCJjYWxsQWxsIiwibWFyZ2luIiwiZGlzdGFuY2VMYWJlbCIsInN0ZXAiLCJnZW5lcmF0ZUdyb3VuZHMiLCJkaWVHcm91bmRzIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiZ3JvdW5kIiwiaW5DYW1lcmEiLCJhbGl2ZSIsImRlYWR6b25lIiwia2lsbCIsImhvdGtleSIsImlucHV0Iiwia2V5Ym9hcmQiLCJhZGRLZXkiLCJLZXlDb2RlIiwiU1BBQ0VCQVIiLCJvbkRvd24iLCJqdW1wIiwicmVzdGFydCIsInJ1biIsIm1hcmdpbkJvdHRvbSIsInN0YXJ0R3JvdW5kIiwiZ3JvdXAiLCJjcmVhdGVTdGFydEdyb3VuZCIsImNyZWF0ZUZpcnN0R3JvdW5kcyIsIlNQTElUX1ZFUlRJQ0FMIiwiR1JJRF9IRUlHSFQiLCJwaWNrIiwiYWN0aXZhdGVSYW5kb21Hcm91bmQiLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJnZXRGaXJzdERlYWQiLCJyZXNldCIsInBhZGRpbmdMZWZ0Iiwic21vb3RoTW92ZSIsImRlYWRab25lSGVpZ2h0Iiwicm91bmRQeCIsIkNhbWVyYSIsIkZPTExPV19MT0NLT04iLCJSZWN0YW5nbGUiLCJBVVRPIiwib25yZXNpemUiLCJzZXRHYW1lU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsU0FBQTtBQUNBQyxZQUFBLEdBREE7QUFFQUMsYUFBQSxHQUZBOztBQUlBQyxZQUFBQyxPQUFBQyxVQUpBO0FBS0FDLGFBQUFGLE9BQUFHLFdBTEE7O0FBT0FDLGVBQUEsUUFQQTtBQVFBQyxjQUFBO0FBUkEsQ0FBQTs7SUNBQUMsSztBQUNBLG1CQUFBO0FBQUE7O0FBQ0EsU0FBQUMsYUFBQSxHQUFBLENBQUE7QUFDQSxTQUFBQyxnQkFBQSxHQUFBLENBQUE7O0FBRUEsU0FBQUMsSUFBQTtBQUNBLFNBQUFDLFFBQUEsR0FBQSxJQUFBQyxPQUFBQyxNQUFBLEVBQUE7QUFDQTs7OzsyQkFFQTtBQUNBWixhQUFBYSxZQUFBLENBQUEsY0FBQSxJQUFBLEtBQUFOLGFBQUEsQ0FBQU8sUUFBQSxFQUFBO0FBQ0E7OzsyQkFFQTtBQUNBLFdBQUFQLGFBQUEsR0FBQVEsT0FBQUMsUUFBQSxDQUFBaEIsT0FBQWEsWUFBQSxDQUFBLGNBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7O3NCQUVBSSxHLEVBQUE7QUFDQSxXQUFBVixhQUFBLEdBQUFVLEdBQUE7QUFDQSxXQUFBUCxRQUFBLENBQUFRLFFBQUE7QUFDQSxXQUFBQyxJQUFBOztBQUVBLGFBQUEsS0FBQVosYUFB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LEtBQUExQixJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxXQUFBOEssV0FBQSxDQUFBaEssR0FBQSxDQUFBLElBQUEzQyxPQUFBdUQsVUFBQSxDQUFBLEtBQUExQixJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQTs7OztFQXpQQWQsT0FBQXNCLEs7O0FBNFBBckMsT0FBQTBLLElBQUEsR0FBQUEsSUFBQTs7QUM1UEExSyxPQUFBNkIsSUFBQSxHQUFBLElBQUFkLE9BQUEySixJQUFBLENBQUExSyxPQUFBRyxRQUFBLEVBQUFILE9BQUFNLFNBQUEsRUFBQVMsT0FBQTBPLElBQUEsQ0FBQTs7QUFFQXJQLE9BQUFzUCxRQUFBLEdBQUEsWUFBQTtBQUNBMVAsU0FBQTZCLElBQUEsQ0FBQUcsS0FBQSxDQUFBMk4sV0FBQSxDQUFBdlAsT0FBQUMsVUFBQSxFQUFBRCxPQUFBRyxXQUFBO0FBQ0EsQ0FGQTs7QUFJQVAsT0FBQTZCLElBQUEsQ0FBQU0sS0FBQSxDQUFBUSxHQUFBLENBQUEsTUFBQSxFQUFBM0MsT0FBQTRCLElBQUE7QUFDQTVCLE9BQUE2QixJQUFBLENBQUFNLEtBQUEsQ0FBQVEsR0FBQSxDQUFBLE1BQUEsRUFBQTNDLE9BQUEwSyxJQUFBO0FBQ0ExSyxPQUFBNkIsSUFBQSxDQUFBTSxLQUFBLENBQUFRLEdBQUEsQ0FBQSxRQUFBLEVBQUEzQyxPQUFBc0MsTUFBQTs7QUFFQXRDLE9BQUE2QixJQUFBLENBQUFNLEtBQUEsQ0FBQUMsS0FBQSxDQUFBLE1BQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEVuZ2luZSA9IHtcclxuICBtaW5XaWR0aDogNjQwLFxyXG4gIG1pbkhlaWdodDogMzIwLFxyXG5cclxuICBtYXhXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblxyXG4gIHNwcml0ZXNoZWV0OiAnanVtcGVyJyxcclxuICBzY2FsZVJhdGlvOiAwLjM1XHJcbn1cclxuIiwiY2xhc3MgU2NvcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fYmVzdERpc3RhbmNlID0gMFxyXG4gICAgdGhpcy5fY3VycmVudERpc3RhbmNlID0gMFxyXG5cclxuICAgIHRoaXMubG9hZCgpXHJcbiAgICB0aGlzLm9uVXBkYXRlID0gbmV3IFBoYXNlci5TaWduYWwoKVxyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbJ2Jlc3REaXN0YW5jZSddID0gdGhpcy5fYmVzdERpc3RhbmNlLnRvU3RyaW5nKClcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICB0aGlzLl9iZXN0RGlzdGFuY2UgPSBOdW1iZXIucGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZVsnYmVzdERpc3RhbmNlJ10pIHx8IDBcclxuICB9XHJcblxyXG4gIHNldCBiZXN0RGlzdGFuY2UodmFsKSB7XHJcbiAgICB0aGlzLl9iZXN0RGlzdGFuY2UgPSB2YWxcclxuICAgIHRoaXMub25VcGRhdGUuZGlzcGF0Y2goKVxyXG4gICAgdGhpcy5zYXZlKClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYmVzdERpc3RhbmNlXHJcbiAgfVxyXG4gIGdldCBiZXN0RGlzdGFuY2UoKSB7IHJldHVybiB0aGlzLl9iZXN0RGlzdGFuY2UgfVxyXG5cclxuICBzZXQgY3VycmVudERpc3RhbmNlKHZhbCkge1xyXG4gICAgdGhpcy5fY3VycmVudERpc3RhbmNlID0gdmFsXHJcbiAgICB0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudERpc3RhbmNlXHJcbiAgfVxyXG4gIGdldCBjdXJyZW50RGlzdGFuY2UoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50RGlzdGFuY2UgfVxyXG59XHJcblxyXG5TY29yZS5NVUxUSVBFUl9ESVNUQU5DRSA9IDE1MFxyXG5cclxuRW5naW5lLlNjb3JlID0gU2NvcmVcclxuIiwiY2xhc3MgU2VydmljZSB7XHJcbiAgc3RhdGljIGdldChuYW1lKSB7XHJcbiAgICByZXR1cm4gU2VydmljZS5saXN0W25hbWVdXHJcbiAgfVxyXG59XHJcblxyXG5TZXJ2aWNlLmxpc3QgPSB7XHJcbiAgXCJTY29yZVwiOiBuZXcgRW5naW5lLlNjb3JlKClcclxufVxyXG5cclxuRW5naW5lLlNlcnZpY2UgPSBTZXJ2aWNlXHJcbiIsImNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdMb2FkZXInKTtcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Cb290ID0gQm9vdDtcclxuIiwiY2xhc3MgTG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0dhbWUnKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2dyZXNzTGFiZWwoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgIGZvbnQ6ICc0MXB4IE9wZW4gU2FucycsXHJcbiAgICAgIGZpbGw6ICcjMDBFNjc2JyxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ0xvYWRpbmc6IDAlICgwLzApJywgc3R5bGUpO1xyXG4gICAgdGhpcy5wcm9ncmVzc0xhYmVsLmFuY2hvci5zZXRUbygwLjUpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFByb2dyZXNzKHByb2dyZXNzLCBjYWNoZUtleSwgc3VjY2VzcywgdG90YWxMb2FkZWQsIHRvdGFsRmlsZXMpIHtcclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbC50ZXh0ID0gYExvYWRpbmcgJHtwcm9ncmVzc30lICgke3RvdGFsTG9hZGVkfS8ke3RvdGFsRmlsZXN9KWA7XHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuTG9hZGVyID0gTG9hZGVyO1xyXG4iLCJjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgUGhhc2VyLlRpbGVTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIG5hbWUsIHNwZWVkKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAxMDI0LCAxMDI0LCBuYW1lKVxyXG5cclxuICAgIHRoaXMudGlsZVNjYWxlLnNldFRvKHRoaXMuZ2FtZS5oZWlnaHQgLyB0aGlzLmhlaWdodClcclxuICAgIHRoaXMuZml4ZWRUb0NhbWVyYSA9IHRydWVcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLmdhbWUud2lkdGhcclxuXHJcbiAgICB0aGlzLmRhdGEuc3BlZWQgPSBzcGVlZFxyXG4gICAgdGhpcy5kYXRhLmlzU3RvcGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEuaXNTdG9wZWQpXHJcbiAgICAgIHRoaXMudGlsZVBvc2l0aW9uLnggKz0gdGhpcy5kYXRhLnNwZWVkXHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5kYXRhLmlzU3RvcGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kYXRhLmlzU3RvcGVkID0gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5CYWNrZ3JvdW5kID0gQmFja2dyb3VuZFxyXG4iLCJjbGFzcyBCZXN0RGlzdGFuY2VTdHJpcGUgZXh0ZW5kcyBQaGFzZXIuR3JhcGhpY3Mge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIC1CZXN0RGlzdGFuY2VTdHJpcGUuQU5USV9NQVJHSU4pXHJcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUud29ybGQuYm91bmRzLnlcclxuXHJcbiAgICB0aGlzLmRyYXcoKVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gNlxyXG4gICAgY29uc3QgaGVpZ2h0ID0gMzJcclxuICAgIGNvbnN0IHN1bW1IZWlnaHQgPSBnYW1lLndvcmxkLmJvdW5kcy5oZWlnaHRcclxuXHJcbiAgICB0aGlzLmJlZ2luRmlsbCgweEZGRkZGRiwgMC43KVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VtbUhlaWdodCAvIGhlaWdodDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHggPSAwXHJcbiAgICAgIGNvbnN0IHkgPSBpICogc3VtbUhlaWdodCAvIGhlaWdodFxyXG4gICAgICB0aGlzLmRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZEZpbGwoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkJlc3REaXN0YW5jZVN0cmlwZSA9IEJlc3REaXN0YW5jZVN0cmlwZVxyXG4iLCJjbGFzcyBCZXN0RGlzdGFuY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHRoaXMuc2NvcmUgPSBFbmdpbmUuU2VydmljZS5nZXQoJ1Njb3JlJylcclxuXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lXHJcbiAgICB0aGlzLnggPSB0aGlzLnNjb3JlLmJlc3REaXN0YW5jZSAqIEVuZ2luZS5TY29yZS5NVUxUSVBFUl9ESVNUQU5DRVxyXG5cclxuICAgIHRoaXMuY3JlYXRlTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVTdHJpcGUoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWwoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJ3doaXRlJyxcclxuICAgICAgZm9udDogJzI2cHggQXJpYWwnXHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gMTBcclxuICAgIGNvbnN0IG1hcmdpblRvcCA9IDI1XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLnggKyBtYXJnaW5MZWZ0LCAwLCBgQmVzdCAke3RoaXMuc2NvcmUuYmVzdERpc3RhbmNlfSBtLmAsIHN0eWxlKVxyXG4gICAgdGhpcy5sYWJlbC51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGFiZWwueSA9IHRoaXMuZ2FtZS5jYW1lcmEueSArIG1hcmdpblRvcFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RyaXBlKCkge1xyXG4gICAgdGhpcy5zdHJpcGUgPSBuZXcgRW5naW5lLkJlc3REaXN0YW5jZVN0cmlwZSh0aGlzLmdhbWUsIHRoaXMueClcclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5zdHJpcGUpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQmVzdERpc3RhbmNlID0gQmVzdERpc3RhbmNlXHJcbiIsImNsYXNzIEJ1bm55IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgbmFtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCBuYW1lICsgJ19zdGFuZC5wbmcnKVxyXG5cclxuICAgIHRoaXMuZGF0YS5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuY291bnRKdW1wID0gQnVubnkuTUFYX0pVTVBTXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShbIHRoaXMgXSlcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuMzVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuMzVcclxuXHJcbiAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXRUbygwLCAyNTAwKVxyXG4gICAgdGhpcy5ib2R5Lm1heFZlbG9jaXR5LnNldFRvKDQwMCwgMjAwMClcclxuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3J1bicpXHJcbiAgfVxyXG5cclxuICBhZGRUcmFpbCgpIHtcclxuICAgIHRoaXMuZGF0YS50cmFpbCA9IG5ldyBFbmdpbmUuVHJhaWwodGhpcy5nYW1lLCA1MDAsIHRoaXMpXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZGF0YS50cmFpbClcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBpZiAodGhpcy5pbkFpcigpKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdGFydEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2p1bXAnKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEucnVubmluZyl7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdGFydEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3J1bicpXHJcbiAgICAgIHRoaXMuZGF0YS5jb3VudEp1bXAgPSBCdW5ueS5NQVhfSlVNUFNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdG9wRW1pdHQoKVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5BaXIoKSB7XHJcbiAgICByZXR1cm4gIWJ1bm55LmJvZHkudG91Y2hpbmcuZG93blxyXG4gIH1cclxuXHJcbiAgZGllKCkge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uRG93blRpbWUgPSAxMDAwXHJcbiAgICBjb25zdCBhbmltYXRpb25VcFRpbWUgPSA0MDBcclxuICAgIGNvbnN0IHVwTW92ZSA9IDEwMFxyXG5cclxuICAgIHRoaXMuYm9keS52ZWxvY2l0eS5zZXRUbygwKVxyXG4gICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi5zZXRUbygwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gdHJ1ZVxyXG4gICAgdGhpcy5kYXRhLnRyYWlsLnN0b3BFbWl0dCgpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnaHVydCcpXHJcblxyXG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMueSAtIHVwTW92ZVxyXG4gICAgICB9LCBhbmltYXRpb25Eb3duVGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLmdhbWUuaGVpZ2h0ICsgdGhpcy5oZWlnaHRcclxuICAgICAgfSwgYW5pbWF0aW9uVXBUaW1lLCBQaGFzZXIuRWFzaW5nLlF1YWRyYXRpYy5JbilcclxuICAgICAgLnN0YXJ0KClcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuZGF0YS5ydW5uaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnNldFRvKEJ1bm55LkJBU0VfTUFYX1NQRUVELCAwKVxyXG4gICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi5zZXRUbyhCdW5ueS5BQ0NFTEVSQVRJT04sIDApXHJcbiAgfVxyXG5cclxuICBjcmVhdGVBbmltYXRpb24oKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdqdW1wJywgW3RoaXMuZGF0YS5uYW1lICsgJ19qdW1wLnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgncnVuJywgW3RoaXMuZGF0YS5uYW1lICsgJ193YWxrMS5wbmcnLCB0aGlzLmRhdGEubmFtZSArICdfd2FsazIucG5nJ10sIDEwLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaHVydCcsIFt0aGlzLmRhdGEubmFtZSArICdfaHVydC5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3JlYWR5JywgW3RoaXMuZGF0YS5uYW1lICsgJ19yZWFkeS5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgW3RoaXMuZGF0YS5uYW1lICsgJ19zdGFuZC5wbmcnXSwgMSwgdHJ1ZSlcclxuICB9XHJcblxyXG4gIGp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmlzRGVhZCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QganVtcEltcHVsc2UgPSA5MDBcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLmNvdW50SnVtcCA+IDApXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gLWp1bXBJbXB1bHNlXHJcbiAgICAgIHRoaXMuZGF0YS5jb3VudEp1bXAtLVxyXG4gIH1cclxufVxyXG5cclxuQnVubnkuTUFYX0pVTVBTID0gMlxyXG5CdW5ueS5BQ0NFTEVSQVRJT04gPSAyMDAwXHJcbkJ1bm55LkJBU0VfTUFYX1NQRUVEID0gNTAwXHJcblxyXG5FbmdpbmUuQnVubnkgPSBCdW5ueVxyXG4iLCJjbGFzcyBHcm91bmQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0eXBlID0gR3JvdW5kLnR5cGUuR1JBU1MsIHNtYWxsID0gZmFsc2UsIGJyb2tlbiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBuYW1lID0gR3JvdW5kLmdldE5hbWUodHlwZSwgc21hbGwsIGJyb2tlbilcclxuXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSAwLjQ1XHJcbiAgICB0aGlzLmhlaWdodCAqPSAwLjQ1XHJcblxyXG4gICAgdGhpcy5hdXRvQ3VsbCA9IHRydWVcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoW3RoaXNdKVxyXG4gICAgdGhpcy5ib2R5LmltbW92YWJsZSA9IHRydWVcclxuXHJcbiAgICB0aGlzLmRhdGEubmFtZSA9IG5hbWVcclxuICAgIHRoaXMuZGF0YS50eXBlID0gdHlwZVxyXG4gICAgdGhpcy5kYXRhLnNtYWxsID0gc21hbGxcclxuICAgIHRoaXMuZGF0YS5icm9rZW4gPSBicm9rZW5cclxuICB9XHJcblxyXG4gIHJlc2V0KHgsIHksIHR5cGUsIHNtYWxsLCBicm9rZW4pIHtcclxuICAgIHN1cGVyLnJlc2V0KHgsIHkpXHJcblxyXG4gICAgY29uc3QgbmFtZSA9IEdyb3VuZC5nZXROYW1lKHR5cGUsIHNtYWxsLCBicm9rZW4pXHJcblxyXG4gICAgdGhpcy5mcmFtZSA9IG5hbWVcclxuXHJcbiAgICB0aGlzLmRhdGEubmFtZSA9IG5hbWVcclxuICAgIHRoaXMuZGF0YS50eXBlID0gdHlwZVxyXG4gICAgdGhpcy5kYXRhLnNtYWxsID0gc21hbGxcclxuICAgIHRoaXMuZGF0YS5icm9rZW4gPSBicm9rZW5cclxuICB9XHJcbn1cclxuXHJcbkdyb3VuZC50eXBlID0ge1xyXG4gIEdSQVNTOiAnZ3Jhc3MnLFxyXG4gIENBS0U6ICdjYWtlJyxcclxuICBTQU5EOiAnc2FuZCcsXHJcbiAgU05PVzogJ3Nub3cnLFxyXG4gIFNUT05FOiAnc3RvbmUnLFxyXG4gIFdPT0Q6ICd3b29kJ1xyXG59XG5cbkdyb3VuZC5nZXROYW1lID0gKHR5cGUsIHNtYWxsLCBicm9rZW4pID0+IHtcbiAgbGV0IG5hbWUgPSBgZ3JvdW5kXyR7dHlwZX1gXG5cbiAgaWYgKHNtYWxsKSBuYW1lICs9ICdfc21hbGwnXG4gIGlmIChicm9rZW4pIG5hbWUgKz0gJ19icm9rZW4nXG5cbiAgbmFtZSArPSAnLnBuZydcblxuICByZXR1cm4gbmFtZVxufVxyXG5cclxuRW5naW5lLkdyb3VuZCA9IEdyb3VuZFxyXG4iLCJjbGFzcyBUcmFpbCBleHRlbmRzIFBoYXNlci5QYXJ0aWNsZXMuQXJjYWRlLkVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIG1heFBhcnRpY2xlcywgZm9sbG93KSB7XHJcbiAgICBzdXBlcihnYW1lLCAwLCAwLCBtYXhQYXJ0aWNsZXMpXHJcblxyXG4gICAgdGhpcy5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZXMnKVxyXG4gICAgdGhpcy5saWZlc3BhbiA9IDUwMFxyXG5cclxuICAgIHRoaXMuX3BhcnRpY2xlc0VtaXQgPSAyMFxyXG4gICAgdGhpcy5fZGVsYXlFbWl0ID0gNTBcclxuICAgIHRoaXMuX2ZvbGxvdyA9IGZvbGxvd1xyXG5cclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5sb29wKHRoaXMuX2RlbGF5RW1pdCwgdGhpcy5lbWl0LCB0aGlzKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBlbWl0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXJ0aWNsZXNFbWl0OyBpKyspIHtcclxuICAgICAgY29uc3QgcGFydGljbGVGcmFtID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDAsIDQpXHJcblxyXG4gICAgICB0aGlzLmVtaXRQYXJ0aWNsZShcclxuICAgICAgICB0aGlzLl9mb2xsb3cueCxcclxuICAgICAgICB0aGlzLl9mb2xsb3cueSArIHRoaXMuX2ZvbGxvdy5oZWlnaHQsXHJcbiAgICAgICAgJ3BhcnRpY2xlcycsXHJcbiAgICAgICAgcGFydGljbGVGcmFtXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BFbWl0dCgpIHtcclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcucGF1c2UoKVxyXG4gIH1cclxuXHJcbiAgc3RhcnRFbWl0dCgpIHtcclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcucmVzdW1lKClcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5UcmFpbCA9IFRyYWlsXHJcbiIsImNsYXNzIERpc3RhbmNlIGV4dGVuZHMgUGhhc2VyLlRleHQge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBmaWxsOiAncmdiKDE2OCwgMCwgMjEwKScsXHJcbiAgICAgIGZvbnQ6ICcyNXB4IEFyaWFsJ1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdEaXN0YW5jZTogMCBtLicsIHN0eWxlKVxyXG5cclxuICAgIHRoaXMuZml4ZWRUb0NhbWVyYSA9IHRydWVcclxuICAgIHRoaXMuc2NvcmUgPSBFbmdpbmUuU2VydmljZS5nZXQoJ1Njb3JlJylcclxuICAgIHRoaXMuc2NvcmUub25VcGRhdGUuYWRkKHRoaXMudXBkYXRlRGlzdGFuY2UsIHRoaXMpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXN0YW5jZSgpIHtcclxuICAgIHRoaXMudGV4dCA9IGBEaXN0YW5jZTogJHt0aGlzLnNjb3JlLmN1cnJlbnREaXN0YW5jZX0gbS5gXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuRGlzdGFuY2UgPSBEaXN0YW5jZVxyXG4iLCJjbGFzcyBMb3NlIGV4dGVuZHMgUGhhc2VyLlRleHQge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICBmb250OiAnNzVweCBBcmlhbCcsXHJcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdZb3UgbG9zZSA6LSgnLCBzdHlsZSlcclxuICAgIHRoaXMudGV4dCArPSAnXFxyXFxuUHJlc3Mgc3BhY2ViYXInO1xyXG5cclxuICAgIHRoaXMuc2V0U2hhZG93KDAsIDIsICdyZ2JhKDMzLCAzMywgMzMsIDAuNiknLCA0KVxyXG5cclxuICAgIHRoaXMuYWxwaGEgPSAwXHJcbiAgICB0aGlzLmZpeGVkVG9DYW1lcmEgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIGFscGhhOiAxXHJcbiAgICAgIH0sIDgwMClcclxuICAgICAgLnN0YXJ0KClcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Mb3NlID0gTG9zZVxyXG4iLCJjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuYXRsYXNYTUwoXHJcbiAgICAgIEVuZ2luZS5zcHJpdGVzaGVldCxcclxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvanVtcGVyLnBuZycsXHJcbiAgICAgICdhc3NldHMvc3ByaXRlc2hlZXRzL2p1bXBlci54bWwnXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjInLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXIyLnBuZycpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyMycsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjMucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXI0JywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyNC5wbmcnKVxyXG5cclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGFydGljbGVzJywgJ2Fzc2V0cy9zcHJpdGVzL3BhcnRpY2xlcy5wbmcnLCA4LCA4KVxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuX2dyb3VuZFN0ZXAgPSAwXHJcbiAgICB0aGlzLl9ncm91bmRWZXJ0aWNhbE1hcmdpbiA9IDMwMFxyXG4gICAgdGhpcy5fc2NvcmUgPSBFbmdpbmUuU2VydmljZS5nZXQoJ1Njb3JlJylcclxuXHJcbiAgICB3aW5kb3cuZ2FtZSA9IHRoaXNcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gMHhBREU2RkZcclxuICAgIHRoaXMucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpXHJcbiAgICB0aGlzLndvcmxkLnNldEJvdW5kcygwLCAtdGhpcy5nYW1lLmhlaWdodCwgTnVtYmVyLk1BWF9WQUxVRSwgdGhpcy5nYW1lLmhlaWdodCAqIDIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJ1bm55KClcclxuICAgIHRoaXMuaW5pdEdyb3VuZHMoKVxyXG5cclxuICAgIHRoaXMuYnVubnkuYWRkVHJhaWwoKVxyXG5cclxuICAgIHRoaXMuY29uZmlndXJhdGVDYW1lcmEoKVxyXG4gICAgdGhpcy5hZGRDb250cm9sKClcclxuICAgIHRoaXMuY3JlYXRlRGlzdGFuY2VMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZUxvc2VMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJlc3REaXN0YW5jZSgpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5idW5ueSwgdGhpcy5ncm91bmRzKVxyXG4gICAgdGhpcy51cGRhdGVHcm91bmRzKClcclxuICAgIHRoaXMudXBkYXRlRGllKClcclxuXHJcbiAgICB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2UgPSBNYXRoLnJvdW5kKHRoaXMuYnVubnkueCAvIEVuZ2luZS5TY29yZS5NVUxUSVBFUl9ESVNUQU5DRSlcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyB0aGlzLmdyb3VuZHMuY2hpbGRyZW4ubWFwKChzcHJpdGUpID0+IHtcclxuICAgIC8vICAgdGhpcy5nYW1lLmRlYnVnLmJvZHkoc3ByaXRlLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJylcclxuICAgIC8vIH0pXHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnNwcml0ZUluZm8odGhpcy5idW5ueSwgOTAsIDE1LCAnd2hpdGUnKVxyXG5cclxuICAgIC8vIGxldCB6b25lID0gdGhpcy5jYW1lcmEuZGVhZHpvbmVcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy5nZW9tKFxyXG4gICAgLy8gICBuZXcgUGhhc2VyLlJlY3RhbmdsZShcclxuICAgIC8vICAgICB0aGlzLmNhbWVyYS54ICsgem9uZS54LFxyXG4gICAgLy8gICAgIHRoaXMuY2FtZXJhLnkgKyB6b25lLnksXHJcbiAgICAvLyAgICAgem9uZS53aWR0aCwgem9uZS5oZWlnaHRcclxuICAgIC8vICAgKSwgJ3JnYmEoMjU1LDAsMCwwLjYpJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5idW5ueS55ID4gdGhpcy5nYW1lLmhlaWdodCAtIDEwMCAmJlxyXG4gICAgICAhdGhpcy5idW5ueS5kYXRhLmlzRGVhZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYnVubnkuZGllKClcclxuICAgICAgdGhpcy5sb3NlKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUJlc3REaXN0YW5jZSgpIHtcclxuICAgIHRoaXMuYmVzdERpc3RhbmNlID0gbmV3IEVuZ2luZS5CZXN0RGlzdGFuY2UodGhpcy5nYW1lKVxyXG4gIH1cclxuXHJcbiAgbG9zZSgpIHtcclxuICAgIHRoaXMubG9zZUxhYmVsLnNob3coKVxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5jYWxsQWxsKCdzdG9wJylcclxuICAgIGlmICh0aGlzLl9zY29yZS5iZXN0RGlzdGFuY2UgPCB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2UpIHtcclxuICAgICAgdGhpcy5fc2NvcmUuYmVzdERpc3RhbmNlID0gdGhpcy5fc2NvcmUuY3VycmVudERpc3RhbmNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMb3NlTGFiZWwoKSB7XHJcbiAgICB0aGlzLmxvc2VMYWJlbCA9IG5ldyBFbmdpbmUuTG9zZShcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLyAyLFxyXG4gICAgICB0aGlzLmdhbWUuaGVpZ2h0IC8gMlxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMubG9zZUxhYmVsLmFuY2hvci5zZXRUbygwLjUpXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmxvc2VMYWJlbClcclxuICB9XHJcblxyXG4gIGNyZWF0ZURpc3RhbmNlTGFiZWwoKSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSAyNVxyXG5cclxuICAgIHRoaXMuZGlzdGFuY2VMYWJlbCA9IG5ldyBFbmdpbmUuRGlzdGFuY2UoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gbWFyZ2luLFxyXG4gICAgICBtYXJnaW5cclxuICAgIClcclxuICAgIHRoaXMuZGlzdGFuY2VMYWJlbC5hbmNob3Iuc2V0VG8oMSwgMClcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuZGlzdGFuY2VMYWJlbClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUdyb3VuZHMoKSB7XHJcbiAgICBsZXQgc3RlcCA9IE1hdGgucm91bmQodGhpcy5idW5ueS54IC8gdGhpcy5fZ3JvdW5kVmVydGljYWxNYXJnaW4pXHJcbiAgICBsZXQgbWFyZ2luID0gKHRoaXMuZ2FtZS53aWR0aClcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gdGhpcy5fZ3JvdW5kU3RlcCkge1xyXG4gICAgICB0aGlzLl9ncm91bmRTdGVwID0gc3RlcFxyXG4gICAgICB0aGlzLmdlbmVyYXRlR3JvdW5kcyhtYXJnaW4pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaWVHcm91bmRzKClcclxuICB9XHJcblxyXG4gIGRpZUdyb3VuZHMoKSB7XHJcbiAgICB0aGlzLmdyb3VuZHMuY2hpbGRyZW4uZm9yRWFjaCgoZ3JvdW5kKSA9PiB7XHJcbiAgICAgIGlmICghZ3JvdW5kLmluQ2FtZXJhICYmIGdyb3VuZC5hbGl2ZSAmJiBncm91bmQueCA8IHRoaXMuYnVubnkueCAtIHRoaXMuY2FtZXJhLmRlYWR6b25lLngpIHtcclxuICAgICAgICBncm91bmQua2lsbCgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRDb250cm9sKCkge1xyXG4gICAgbGV0IGhvdGtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlDb2RlLlNQQUNFQkFSKVxyXG4gICAgaG90a2V5Lm9uRG93bi5hZGQodGhpcy5qdW1wLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEuaXNEZWFkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUucmVzdGFydCh0cnVlLCBmYWxzZSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEucnVubmluZykge1xyXG4gICAgICB0aGlzLmJ1bm55Lmp1bXAoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZHMuY2FsbEFsbCgncmVzdW1lJylcclxuICAgICAgdGhpcy5idW5ueS5ydW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRHcm91bmQoKSB7XHJcbiAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAyNTBcclxuICAgIGNvbnN0IHggPSAxMDBcclxuICAgIGNvbnN0IHkgPSB0aGlzLmJ1bm55LnkgKyBtYXJnaW5Cb3R0b21cclxuICAgIGNvbnN0IHR5cGUgPSBHcm91bmQudHlwZS5HUkFTU1xyXG4gICAgY29uc3Qgc21hbGwgPSBmYWxzZVxyXG4gICAgY29uc3QgYnJva2VuID0gZmFsc2VcclxuXHJcbiAgICBsZXQgc3RhcnRHcm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZChcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBzbWFsbCxcclxuICAgICAgYnJva2VuLFxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuZ3JvdW5kcy5hZGQoc3RhcnRHcm91bmQpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCdW5ueSgpIHtcclxuICAgIHdpbmRvdy5idW5ueSA9IHRoaXMuYnVubnkgPSBuZXcgRW5naW5lLkJ1bm55KHRoaXMuZ2FtZSwgMTUwLCAxNTAsICdidW5ueTEnKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idW5ueSlcclxuICB9XHJcblxyXG4gIGluaXRHcm91bmRzKCkge1xyXG4gICAgdGhpcy5ncm91bmRzID0gdGhpcy5hZGQuZ3JvdXAoKVxyXG4gICAgdGhpcy5jcmVhdGVTdGFydEdyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUZpcnN0R3JvdW5kcygpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaXJzdEdyb3VuZHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZ2FtZS53aWR0aCAvIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luOyBpKyspIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUdyb3VuZHMoaSAqIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVHcm91bmRzKG1hcmdpbikge1xyXG4gICAgY29uc3QgU1BMSVRfVkVSVElDQUwgPSAzXHJcbiAgICBjb25zdCBHUklEX0hFSUdIVCA9IHRoaXMuZ2FtZS5oZWlnaHQgLyBTUExJVF9WRVJUSUNBTFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgU1BMSVRfVkVSVElDQUw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5ybmQucGlja1t0cnVlLCBmYWxzZV0pIGNvbnRpbnVlXHJcblxyXG4gICAgICBjb25zdCB4ID0gdGhpcy5idW5ueS54ICsgbWFyZ2luICsgdGhpcy5ybmQuYmV0d2VlbigtMjUsIDI1KVxyXG4gICAgICBjb25zdCB5ID0gR1JJRF9IRUlHSFQgKiBpICsgdGhpcy5ybmQuYmV0d2VlbigtNTAsIDUwKVxyXG5cclxuICAgICAgdGhpcy5hY3RpdmF0ZVJhbmRvbUdyb3VuZCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlUmFuZG9tR3JvdW5kKHgsIHkpIHtcclxuICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IDEwMFxyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoRW5naW5lLkdyb3VuZC50eXBlKS5tYXAodmFsID0+IHtcclxuICAgICAgcmV0dXJuIEVuZ2luZS5Hcm91bmQudHlwZVt2YWxdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMucm5kLnBpY2sodHlwZXMpXHJcbiAgICBjb25zdCBzbWFsbCA9IHRoaXMucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuICAgIGNvbnN0IGJyb2tlbiA9IHRoaXMucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuXHJcbiAgICBsZXQgZ3JvdW5kID0gdGhpcy5ncm91bmRzLmdldEZpcnN0RGVhZCgpXHJcbiAgICBpZiAoZ3JvdW5kID09IG51bGwpIHtcclxuICAgICAgZ3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHNtYWxsLFxyXG4gICAgICAgIGJyb2tlbixcclxuICAgICAgKVxyXG4gICAgICB0aGlzLmdyb3VuZHMuYWRkKGdyb3VuZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyb3VuZC5yZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91bmRcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyYXRlQ2FtZXJhKCkge1xyXG4gICAgY29uc3QgcGFkZGluZ0xlZnQgPSAzMDBcclxuICAgIGNvbnN0IHNtb290aE1vdmUgPSAwLjE1XHJcbiAgICBjb25zdCBkZWFkWm9uZUhlaWdodCA9IDUwXHJcblxyXG4gICAgdGhpcy5jYW1lcmEucm91bmRQeCA9IGZhbHNlXHJcbiAgICB0aGlzLmNhbWVyYS5mb2xsb3codGhpcy5idW5ueSwgUGhhc2VyLkNhbWVyYS5GT0xMT1dfTE9DS09OLCAxLCBzbW9vdGhNb3ZlKVxyXG4gICAgdGhpcy5jYW1lcmEuZGVhZHpvbmUgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZShwYWRkaW5nTGVmdCwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDEsIGRlYWRab25lSGVpZ2h0KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZHMgPSB0aGlzLmFkZC5ncm91cCgpXHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyMicsIC0xKSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjMnLCAtMikpXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmFkZChuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXI0JywgLTMpKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkdhbWUgPSBHYW1lXHJcbiIsIkVuZ2luZS5nYW1lID0gbmV3IFBoYXNlci5HYW1lKEVuZ2luZS5tYXhXaWR0aCwgRW5naW5lLm1heEhlaWdodCwgUGhhc2VyLkFVVE8pXHJcblxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgRW5naW5lLmdhbWUuc2NhbGUuc2V0R2FtZVNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxufVxyXG5cclxuRW5naW5lLmdhbWUuc3RhdGUuYWRkKCdCb290JywgRW5naW5lLkJvb3QpXHJcbkVuZ2luZS5nYW1lLnN0YXRlLmFkZCgnR2FtZScsIEVuZ2luZS5HYW1lKVxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5hZGQoJ0xvYWRlcicsIEVuZ2luZS5Mb2FkZXIpXHJcblxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5zdGFydCgnQm9vdCcpXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
