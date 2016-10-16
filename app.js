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

var Bunny = function (_Phaser$Sprite) {
  _inherits(Bunny, _Phaser$Sprite);

  function Bunny(game, x, y, name) {
    _classCallCheck(this, Bunny);

    var _this5 = _possibleConstructorReturn(this, (Bunny.__proto__ || Object.getPrototypeOf(Bunny)).call(this, game, x, y, Engine.spritesheet, name + '_stand.png'));

    _this5.data.name = name;
    _this5.data.isDead = false;
    _this5.data.running = false;
    _this5.data.countJump = Bunny.MAX_JUMPS;

    _this5.game.physics.arcade.enable([_this5]);

    _this5.width *= 0.35;
    _this5.height *= 0.35;

    _this5.body.gravity.setTo(0, 2500);
    _this5.body.maxVelocity.setTo(400, 2000);
    _this5.body.collideWorldBounds = true;

    _this5.createAnimation();
    _this5.animations.play('run');
    return _this5;
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

    var _this6 = _possibleConstructorReturn(this, (Ground.__proto__ || Object.getPrototypeOf(Ground)).call(this, game, x, y, Engine.spritesheet, name));

    _this6.width *= 0.45;
    _this6.height *= 0.45;

    _this6.autoCull = true;

    _this6.game.physics.enable([_this6]);
    _this6.body.immovable = true;

    _this6.data.name = name;
    _this6.data.type = type;
    _this6.data.small = small;
    _this6.data.broken = broken;
    return _this6;
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

    var _this7 = _possibleConstructorReturn(this, (Trail.__proto__ || Object.getPrototypeOf(Trail)).call(this, game, 0, 0, maxParticles));

    _this7.makeParticles('particles');
    _this7.lifespan = 500;

    _this7._particlesEmit = 20;
    _this7._delayEmit = 50;
    _this7._follow = follow;

    _this7._timerEmmiting = _this7.game.time.create();
    _this7._timerEmmiting.loop(_this7._delayEmit, _this7.emit, _this7);
    _this7._timerEmmiting.start();
    return _this7;
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

    var _this8 = _possibleConstructorReturn(this, (Distance.__proto__ || Object.getPrototypeOf(Distance)).call(this, game, x, y, 'Distance: 0 m.', style));

    _this8.fixedToCamera = true;
    _this8.score = Engine.Service.get('Score');
    _this8.score.onUpdate.add(_this8.updateDistance, _this8);
    return _this8;
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

    var _this9 = _possibleConstructorReturn(this, (Lose.__proto__ || Object.getPrototypeOf(Lose)).call(this, game, x, y, 'You lose :-(', style));

    _this9.text += '\r\nPress spacebar';

    _this9.setShadow(0, 2, 'rgba(33, 33, 33, 0.6)', 4);

    _this9.alpha = 0;
    _this9.fixedToCamera = true;
    return _this9;
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

      // TEMP CODE
      this.stripe = new Engine.BestDistanceStripe(this.game, 500);
      this.add.existing(this.stripe);
      // END TEMP CODE
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
        this.backgrounds.callAll('stop');
      }
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
      var _this11 = this;

      this.grounds.children.forEach(function (ground) {
        if (!ground.inCamera && ground.alive && ground.x < _this11.bunny.x - _this11.camera.deadzone.x) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyIsInNjb3JlLmpzIiwic2VydmljZS5qcyIsImJvb3QuanMiLCJsb2FkZXIuanMiLCJiYWNrZ3JvdW5kLmpzIiwiYmVzdC1kaXN0YW5jZS1zdHJpcGUuanMiLCJidW5ueS5qcyIsImdyb3VuZC5qcyIsInRyYWlsLmpzIiwiZGlzdGFjZS5qcyIsImxvc2UuanMiLCJnYW1lLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbIkVuZ2luZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWF4SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzcHJpdGVzaGVldCIsInNjYWxlUmF0aW8iLCJTY29yZSIsIl9iZXN0RGlzdGFuY2UiLCJfY3VycmVudERpc3RhbmNlIiwibG9hZCIsIm9uVXBkYXRlIiwiUGhhc2VyIiwiU2lnbmFsIiwibG9jYWxTdG9yYWdlIiwidG9TdHJpbmciLCJOdW1iZXIiLCJwYXJzZUludCIsInZhbCIsImRpc3BhdGNoIiwiU2VydmljZSIsIm5hbWUiLCJsaXN0IiwiQm9vdCIsImdhbWUiLCJzdGFnZSIsImRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlIiwic2NhbGUiLCJwYWdlQWxpZ25Ib3Jpem9udGFsbHkiLCJwYWdlQWxpZ25WZXJ0aWNhbGx5Iiwic3RhdGUiLCJzdGFydCIsIlN0YXRlIiwiTG9hZGVyIiwic3R5bGUiLCJmb250IiwiZmlsbCIsInByb2dyZXNzTGFiZWwiLCJhZGQiLCJ0ZXh0Iiwid29ybGQiLCJjZW50ZXJYIiwiY2VudGVyWSIsImFuY2hvciIsInNldFRvIiwicHJvZ3Jlc3MiLCJjYWNoZUtleSIsInN1Y2Nlc3MiLCJ0b3RhbExvYWRlZCIsInRvdGFsRmlsZXMiLCJCYWNrZ3JvdW5kIiwieCIsInkiLCJzcGVlZCIsInRpbGVTY2FsZSIsImhlaWdodCIsImZpeGVkVG9DYW1lcmEiLCJ3aWR0aCIsImRhdGEiLCJpc1N0b3BlZCIsInRpbGVQb3NpdGlvbiIsIlRpbGVTcHJpdGUiLCJCZXN0RGlzdGFuY2VTdHJpcGUiLCJBTlRJX01BUkdJTiIsImJvdW5kcyIsImRyYXciLCJzdW1tSGVpZ2h0IiwiYmVnaW5GaWxsIiwiaSIsImRyYXdSZWN0IiwiZW5kRmlsbCIsIkdyYXBoaWNzIiwiQnVubnkiLCJpc0RlYWQiLCJydW5uaW5nIiwiY291bnRKdW1wIiwiTUFYX0pVTVBTIiwicGh5c2ljcyIsImFyY2FkZSIsImVuYWJsZSIsImJvZHkiLCJncmF2aXR5IiwibWF4VmVsb2NpdHkiLCJjb2xsaWRlV29ybGRCb3VuZHMiLCJjcmVhdGVBbmltYXRpb24iLCJhbmltYXRpb25zIiwicGxheSIsInRyYWlsIiwiVHJhaWwiLCJleGlzdGluZyIsImluQWlyIiwic3RhcnRFbWl0dCIsInN0b3BFbWl0dCIsImJ1bm55IiwidG91Y2hpbmciLCJkb3duIiwiYW5pbWF0aW9uRG93blRpbWUiLCJhbmltYXRpb25VcFRpbWUiLCJ1cE1vdmUiLCJ2ZWxvY2l0eSIsImFjY2VsZXJhdGlvbiIsInR3ZWVuIiwidG8iLCJFYXNpbmciLCJRdWFkcmF0aWMiLCJJbiIsIkJBU0VfTUFYX1NQRUVEIiwiQUNDRUxFUkFUSU9OIiwianVtcEltcHVsc2UiLCJTcHJpdGUiLCJHcm91bmQiLCJ0eXBlIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsImdldE5hbWUiLCJhdXRvQ3VsbCIsImltbW92YWJsZSIsImZyYW1lIiwiQ0FLRSIsIlNBTkQiLCJTTk9XIiwiU1RPTkUiLCJXT09EIiwibWF4UGFydGljbGVzIiwiZm9sbG93IiwibWFrZVBhcnRpY2xlcyIsImxpZmVzcGFuIiwiX3BhcnRpY2xlc0VtaXQiLCJfZGVsYXlFbWl0IiwiX2ZvbGxvdyIsIl90aW1lckVtbWl0aW5nIiwidGltZSIsImNyZWF0ZSIsImxvb3AiLCJlbWl0IiwicGFydGljbGVGcmFtIiwicm5kIiwiYmV0d2VlbiIsImVtaXRQYXJ0aWNsZSIsInBhdXNlIiwicmVzdW1lIiwiUGFydGljbGVzIiwiQXJjYWRlIiwiRW1pdHRlciIsIkRpc3RhbmNlIiwic2NvcmUiLCJnZXQiLCJ1cGRhdGVEaXN0YW5jZSIsImN1cnJlbnREaXN0YW5jZSIsIlRleHQiLCJMb3NlIiwiYWxpZ24iLCJzZXRTaGFkb3ciLCJhbHBoYSIsIkdhbWUiLCJhdGxhc1hNTCIsImltYWdlIiwiX2dyb3VuZFN0ZXAiLCJfZ3JvdW5kVmVydGljYWxNYXJnaW4iLCJfc2NvcmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydFN5c3RlbSIsIlBoeXNpY3MiLCJBUkNBREUiLCJzZXRCb3VuZHMiLCJNQVhfVkFMVUUiLCJjcmVhdGVCYWNrZ3JvdW5kIiwiY3JlYXRlQnVubnkiLCJpbml0R3JvdW5kcyIsImFkZFRyYWlsIiwiY29uZmlndXJhdGVDYW1lcmEiLCJhZGRDb250cm9sIiwiY3JlYXRlRGlzdGFuY2VMYWJlbCIsImNyZWF0ZUxvc2VMYWJlbCIsInN0cmlwZSIsImNvbGxpZGUiLCJncm91bmRzIiwidXBkYXRlR3JvdW5kcyIsInVwZGF0ZURpZSIsIk1hdGgiLCJyb3VuZCIsImRpZSIsImxvc2VMYWJlbCIsInNob3ciLCJiYWNrZ3JvdW5kcyIsImNhbGxBbGwiLCJkZWJ1ZyIsInNwcml0ZUluZm8iLCJtYXJnaW4iLCJkaXN0YW5jZUxhYmVsIiwic3RlcCIsImdlbmVyYXRlR3JvdW5kcyIsImRpZUdyb3VuZHMiLCJjaGlsZHJlbiIsImZvckVhY2giLCJncm91bmQiLCJpbkNhbWVyYSIsImFsaXZlIiwiY2FtZXJhIiwiZGVhZHpvbmUiLCJraWxsIiwiaG90a2V5IiwiaW5wdXQiLCJrZXlib2FyZCIsImFkZEtleSIsIktleUNvZGUiLCJTUEFDRUJBUiIsIm9uRG93biIsImp1bXAiLCJyZXN0YXJ0IiwicnVuIiwibWFyZ2luQm90dG9tIiwic3RhcnRHcm91bmQiLCJncm91cCIsImNyZWF0ZVN0YXJ0R3JvdW5kIiwiY3JlYXRlRmlyc3RHcm91bmRzIiwiU1BMSVRfVkVSVElDQUwiLCJHUklEX0hFSUdIVCIsInBpY2siLCJhY3RpdmF0ZVJhbmRvbUdyb3VuZCIsInR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImdldEZpcnN0RGVhZCIsInJlc2V0IiwicGFkZGluZ0xlZnQiLCJzbW9vdGhNb3ZlIiwiZGVhZFpvbmVIZWlnaHQiLCJyb3VuZFB4IiwiQ2FtZXJhIiwiRk9MTE9XX0xPQ0tPTiIsIlJlY3RhbmdsZSIsIkFVVE8iLCJvbnJlc2l6ZSIsInNldEdhbWVTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBO0FBQ0FDLFlBQUEsR0FEQTtBQUVBQyxhQUFBLEdBRkE7O0FBSUFDLFlBQUFDLE9BQUFDLFVBSkE7QUFLQUMsYUFBQUYsT0FBQUcsV0FMQTs7QUFPQUMsZUFBQSxRQVBBO0FBUUFDLGNBQUE7QUFSQSxDQUFBOztJQ0FBQyxLO0FBQ0EsbUJBQUE7QUFBQTs7QUFDQSxTQUFBQyxhQUFBLEdBQUEsQ0FBQTtBQUNBLFNBQUFDLGdCQUFBLEdBQUEsQ0FBQTs7QUFFQSxTQUFBQyxJQUFBO0FBQ0EsU0FBQUMsUUFBQSxHQUFBLElBQUFDLE9BQUFDLE1BQUEsRUFBQTtBQUNBOzs7OzJCQUVBO0FBQ0FaLGFBQUFhLFlBQUEsQ0FBQSxjQUFBLElBQUEsS0FBQU4sYUFBQSxDQUFBTyxRQUFBLEVBQUE7QUFDQTs7OzJCQUVBO0FBQ0EsV0FBQVAsYUFBQSxHQUFBUSxPQUFBQyxRQUFBLENBQUFoQixPQUFBYSxZQUFBLENBQUEsY0FBQSxDQUFBLENBQUE7QUFDQTs7O3NCQUVBSSxHLEVBQUE7QUFDQSxXQUFBVixhQUFBLEdBQUFVLEdBQUE7QUFDQSxXQUFBUCxRQUFBLENBQUFRLFFBQUE7O0FBRUEsYUFBQSxLQUFBWCxhQUFBO0FBQ0EsSzt3QkFDQTtBQUFBLGFBQUEsS0FBQUEsYUFBQTtBQUFBOzs7c0JBRUFVLEcsRUFBQTtBQUNBLFdBQUFULGdCQUFBLEdBQUFTLEdBQUE7QUFDQSxXQUFBUCxRQUFBLENBQUFRLFFBQUE7O0FBRUEsYUFBQSxLQUFBVixnQkFBQTtBQUNBLEs7d0JBQ0E7QUFBQSxhQUFBLEtBQUFBLGdCQUFBO0FBQUE7Ozs7OztBQUdBWixPQUFBVSxLQUFB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LElBQUEsQ0FBQTs7QUFFQXpPLE9BQUEwTyxRQUFBLEdBQUEsWUFBQTtBQUNBOU8sU0FBQTJCLElBQUEsQ0FBQUcsS0FBQSxDQUFBaU4sV0FBQSxDQUFBM08sT0FBQUMsVUFBQSxFQUFBRCxPQUFBRyxXQUFBO0FBQ0EsQ0FGQTs7QUFJQVAsT0FBQTJCLElBQUEsQ0FBQU0sS0FBQSxDQUFBUSxHQUFBLENBQUEsTUFBQSxFQUFBekMsT0FBQTBCLElBQUE7QUFDQTFCLE9BQUEyQixJQUFBLENBQUFNLEtBQUEsQ0FBQVEsR0FBQSxDQUFBLE1BQUEsRUFBQXpDLE9BQUE4SixJQUFBO0FBQ0E5SixPQUFBMkIsSUFBQSxDQUFBTSxLQUFBLENBQUFRLEdBQUEsQ0FBQSxRQUFBLEVBQUF6QyxPQUFBb0MsTUFBQTs7QUFFQXBDLE9BQUEyQixJQUFBLENBQUFNLEtBQUEsQ0FBQUMsS0FBQSxDQUFBLE1BQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEVuZ2luZSA9IHtcclxuICBtaW5XaWR0aDogNjQwLFxyXG4gIG1pbkhlaWdodDogMzIwLFxyXG5cclxuICBtYXhXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblxyXG4gIHNwcml0ZXNoZWV0OiAnanVtcGVyJyxcclxuICBzY2FsZVJhdGlvOiAwLjM1XHJcbn1cclxuIiwiY2xhc3MgU2NvcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fYmVzdERpc3RhbmNlID0gMFxyXG4gICAgdGhpcy5fY3VycmVudERpc3RhbmNlID0gMFxyXG5cclxuICAgIHRoaXMubG9hZCgpXHJcbiAgICB0aGlzLm9uVXBkYXRlID0gbmV3IFBoYXNlci5TaWduYWwoKVxyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbJ2Jlc3REaXN0YW5jZSddID0gdGhpcy5fYmVzdERpc3RhbmNlLnRvU3RyaW5nKClcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICB0aGlzLl9iZXN0RGlzdGFuY2UgPSBOdW1iZXIucGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZVsnYmVzdERpc3RhbmNlJ10pXHJcbiAgfVxyXG5cclxuICBzZXQgYmVzdERpc3RhbmNlKHZhbCkge1xyXG4gICAgdGhpcy5fYmVzdERpc3RhbmNlID0gdmFsXHJcbiAgICB0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYmVzdERpc3RhbmNlXHJcbiAgfVxyXG4gIGdldCBiZXN0RGlzdGFuY2UoKSB7IHJldHVybiB0aGlzLl9iZXN0RGlzdGFuY2UgfVxyXG5cclxuICBzZXQgY3VycmVudERpc3RhbmNlKHZhbCkge1xyXG4gICAgdGhpcy5fY3VycmVudERpc3RhbmNlID0gdmFsXHJcbiAgICB0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudERpc3RhbmNlXHJcbiAgfVxyXG4gIGdldCBjdXJyZW50RGlzdGFuY2UoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50RGlzdGFuY2UgfVxyXG59XHJcblxyXG5FbmdpbmUuU2NvcmUgPSBTY29yZVxyXG4iLCJjbGFzcyBTZXJ2aWNlIHtcclxuICBzdGF0aWMgZ2V0KG5hbWUpIHtcclxuICAgIHJldHVybiBTZXJ2aWNlLmxpc3RbbmFtZV1cclxuICB9XHJcbn1cclxuXHJcblNlcnZpY2UubGlzdCA9IHtcclxuICBcIlNjb3JlXCI6IG5ldyBFbmdpbmUuU2NvcmUoKVxyXG59XHJcblxyXG5FbmdpbmUuU2VydmljZSA9IFNlcnZpY2VcclxuIiwiY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0xvYWRlcicpO1xyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkJvb3QgPSBCb290O1xyXG4iLCJjbGFzcyBMb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnR2FtZScpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvZ3Jlc3NMYWJlbCgpIHtcclxuICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgZm9udDogJzQxcHggT3BlbiBTYW5zJyxcclxuICAgICAgZmlsbDogJyMwMEU2NzYnLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCAnTG9hZGluZzogMCUgKDAvMCknLCBzdHlsZSk7XHJcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwuYW5jaG9yLnNldFRvKDAuNSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoUHJvZ3Jlc3MocHJvZ3Jlc3MsIGNhY2hlS2V5LCBzdWNjZXNzLCB0b3RhbExvYWRlZCwgdG90YWxGaWxlcykge1xyXG4gICAgdGhpcy5wcm9ncmVzc0xhYmVsLnRleHQgPSBgTG9hZGluZyAke3Byb2dyZXNzfSUgKCR7dG90YWxMb2FkZWR9LyR7dG90YWxGaWxlc30pYDtcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Mb2FkZXIgPSBMb2FkZXI7XHJcbiIsImNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBQaGFzZXIuVGlsZVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgbmFtZSwgc3BlZWQpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIDEwMjQsIDEwMjQsIG5hbWUpXHJcblxyXG4gICAgdGhpcy50aWxlU2NhbGUuc2V0VG8odGhpcy5nYW1lLmhlaWdodCAvIHRoaXMuaGVpZ2h0KVxyXG4gICAgdGhpcy5maXhlZFRvQ2FtZXJhID0gdHJ1ZVxyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZ2FtZS53aWR0aFxyXG5cclxuICAgIHRoaXMuZGF0YS5zcGVlZCA9IHNwZWVkXHJcbiAgICB0aGlzLmRhdGEuaXNTdG9wZWQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5pc1N0b3BlZClcclxuICAgICAgdGhpcy50aWxlUG9zaXRpb24ueCArPSB0aGlzLmRhdGEuc3BlZWRcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLmRhdGEuaXNTdG9wZWQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmRhdGEuaXNTdG9wZWQgPSBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkJhY2tncm91bmQgPSBCYWNrZ3JvdW5kXHJcbiIsImNsYXNzIEJlc3REaXN0YW5jZVN0cmlwZSBleHRlbmRzIFBoYXNlci5HcmFwaGljcyB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgLUJlc3REaXN0YW5jZVN0cmlwZS5BTlRJX01BUkdJTilcclxuICAgIHRoaXMueSA9IHRoaXMuZ2FtZS53b3JsZC5ib3VuZHMueVxyXG5cclxuICAgIHRoaXMuZHJhdygpXHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSA2XHJcbiAgICBjb25zdCBoZWlnaHQgPSAzMlxyXG4gICAgY29uc3Qgc3VtbUhlaWdodCA9IGdhbWUud29ybGQuYm91bmRzLmhlaWdodFxyXG5cclxuICAgIHRoaXMuYmVnaW5GaWxsKDB4RkZGRkZGLCAwLjcpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW1tSGVpZ2h0IC8gaGVpZ2h0OyBpKyspIHtcclxuICAgICAgY29uc3QgeCA9IDBcclxuICAgICAgY29uc3QgeSA9IGkgKiBzdW1tSGVpZ2h0IC8gaGVpZ2h0XHJcbiAgICAgIHRoaXMuZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcclxuICAgIH1cclxuICAgIHRoaXMuZW5kRmlsbCgpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQmVzdERpc3RhbmNlU3RyaXBlID0gQmVzdERpc3RhbmNlU3RyaXBlXHJcbiIsImNsYXNzIEJ1bm55IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgbmFtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCBuYW1lICsgJ19zdGFuZC5wbmcnKVxyXG5cclxuICAgIHRoaXMuZGF0YS5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuY291bnRKdW1wID0gQnVubnkuTUFYX0pVTVBTXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShbIHRoaXMgXSlcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuMzVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuMzVcclxuXHJcbiAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXRUbygwLCAyNTAwKVxyXG4gICAgdGhpcy5ib2R5Lm1heFZlbG9jaXR5LnNldFRvKDQwMCwgMjAwMClcclxuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3J1bicpXHJcbiAgfVxyXG5cclxuICBhZGRUcmFpbCgpIHtcclxuICAgIHRoaXMuZGF0YS50cmFpbCA9IG5ldyBFbmdpbmUuVHJhaWwodGhpcy5nYW1lLCA1MDAsIHRoaXMpXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZGF0YS50cmFpbClcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBpZiAodGhpcy5pbkFpcigpKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdGFydEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2p1bXAnKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEucnVubmluZyl7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdGFydEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3J1bicpXHJcbiAgICAgIHRoaXMuZGF0YS5jb3VudEp1bXAgPSBCdW5ueS5NQVhfSlVNUFNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdG9wRW1pdHQoKVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5BaXIoKSB7XHJcbiAgICByZXR1cm4gIWJ1bm55LmJvZHkudG91Y2hpbmcuZG93blxyXG4gIH1cclxuXHJcbiAgZGllKCkge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uRG93blRpbWUgPSAxMDAwXHJcbiAgICBjb25zdCBhbmltYXRpb25VcFRpbWUgPSA0MDBcclxuICAgIGNvbnN0IHVwTW92ZSA9IDEwMFxyXG5cclxuICAgIHRoaXMuYm9keS52ZWxvY2l0eS5zZXRUbygwKVxyXG4gICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi5zZXRUbygwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gdHJ1ZVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2h1cnQnKVxyXG5cclxuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcylcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLnkgLSB1cE1vdmVcclxuICAgICAgfSwgYW5pbWF0aW9uRG93blRpbWUpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy5nYW1lLmhlaWdodCArIHRoaXMuaGVpZ2h0XHJcbiAgICAgIH0sIGFuaW1hdGlvblVwVGltZSwgUGhhc2VyLkVhc2luZy5RdWFkcmF0aWMuSW4pXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IHRydWVcclxuICAgIHRoaXMuYm9keS52ZWxvY2l0eS5zZXRUbyhCdW5ueS5CQVNFX01BWF9TUEVFRCwgMClcclxuICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24uc2V0VG8oQnVubnkuQUNDRUxFUkFUSU9OLCAwKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnanVtcCcsIFt0aGlzLmRhdGEubmFtZSArICdfanVtcC5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3J1bicsIFt0aGlzLmRhdGEubmFtZSArICdfd2FsazEucG5nJywgdGhpcy5kYXRhLm5hbWUgKyAnX3dhbGsyLnBuZyddLCAxMCwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2h1cnQnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX2h1cnQucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdyZWFkeScsIFt0aGlzLmRhdGEubmFtZSArICdfcmVhZHkucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFt0aGlzLmRhdGEubmFtZSArICdfc3RhbmQucG5nJ10sIDEsIHRydWUpXHJcbiAgfVxyXG5cclxuICBqdW1wKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGp1bXBJbXB1bHNlID0gOTAwXHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5jb3VudEp1bXAgPiAwKVxyXG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IC1qdW1wSW1wdWxzZVxyXG4gICAgICB0aGlzLmRhdGEuY291bnRKdW1wLS1cclxuICB9XHJcbn1cclxuXHJcbkJ1bm55Lk1BWF9KVU1QUyA9IDJcclxuQnVubnkuQUNDRUxFUkFUSU9OID0gMjAwMFxyXG5CdW5ueS5CQVNFX01BWF9TUEVFRCA9IDUwMFxyXG5cclxuRW5naW5lLkJ1bm55ID0gQnVubnlcclxuIiwiY2xhc3MgR3JvdW5kIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdHlwZSA9IEdyb3VuZC50eXBlLkdSQVNTLCBzbWFsbCA9IGZhbHNlLCBicm9rZW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgbmFtZSA9IEdyb3VuZC5nZXROYW1lKHR5cGUsIHNtYWxsLCBicm9rZW4pXHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCBuYW1lKVxyXG5cclxuICAgIHRoaXMud2lkdGggKj0gMC40NVxyXG4gICAgdGhpcy5oZWlnaHQgKj0gMC40NVxyXG5cclxuICAgIHRoaXMuYXV0b0N1bGwgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKFt0aGlzXSlcclxuICAgIHRoaXMuYm9keS5pbW1vdmFibGUgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBHcm91bmQuZ2V0TmFtZSh0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG5cclxuICAgIHRoaXMuZnJhbWUgPSBuYW1lXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcbiAgfVxyXG59XHJcblxyXG5Hcm91bmQudHlwZSA9IHtcclxuICBHUkFTUzogJ2dyYXNzJyxcclxuICBDQUtFOiAnY2FrZScsXHJcbiAgU0FORDogJ3NhbmQnLFxyXG4gIFNOT1c6ICdzbm93JyxcclxuICBTVE9ORTogJ3N0b25lJyxcclxuICBXT09EOiAnd29vZCdcclxufVxuXG5Hcm91bmQuZ2V0TmFtZSA9ICh0eXBlLCBzbWFsbCwgYnJva2VuKSA9PiB7XG4gIGxldCBuYW1lID0gYGdyb3VuZF8ke3R5cGV9YFxuXG4gIGlmIChzbWFsbCkgbmFtZSArPSAnX3NtYWxsJ1xuICBpZiAoYnJva2VuKSBuYW1lICs9ICdfYnJva2VuJ1xuXG4gIG5hbWUgKz0gJy5wbmcnXG5cbiAgcmV0dXJuIG5hbWVcbn1cclxuXHJcbkVuZ2luZS5Hcm91bmQgPSBHcm91bmRcclxuIiwiY2xhc3MgVHJhaWwgZXh0ZW5kcyBQaGFzZXIuUGFydGljbGVzLkFyY2FkZS5FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBtYXhQYXJ0aWNsZXMsIGZvbGxvdykge1xyXG4gICAgc3VwZXIoZ2FtZSwgMCwgMCwgbWF4UGFydGljbGVzKVxyXG5cclxuICAgIHRoaXMubWFrZVBhcnRpY2xlcygncGFydGljbGVzJylcclxuICAgIHRoaXMubGlmZXNwYW4gPSA1MDBcclxuXHJcbiAgICB0aGlzLl9wYXJ0aWNsZXNFbWl0ID0gMjBcclxuICAgIHRoaXMuX2RlbGF5RW1pdCA9IDUwXHJcbiAgICB0aGlzLl9mb2xsb3cgPSBmb2xsb3dcclxuXHJcbiAgICB0aGlzLl90aW1lckVtbWl0aW5nID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKClcclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcubG9vcCh0aGlzLl9kZWxheUVtaXQsIHRoaXMuZW1pdCwgdGhpcylcclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgZW1pdCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGFydGljbGVzRW1pdDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2xlRnJhbSA9IHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCA0KVxyXG5cclxuICAgICAgdGhpcy5lbWl0UGFydGljbGUoXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LngsXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LnkgKyB0aGlzLl9mb2xsb3cuaGVpZ2h0LFxyXG4gICAgICAgICdwYXJ0aWNsZXMnLFxyXG4gICAgICAgIHBhcnRpY2xlRnJhbVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wRW1pdHQoKSB7XHJcbiAgICB0aGlzLl90aW1lckVtbWl0aW5nLnBhdXNlKClcclxuICB9XHJcblxyXG4gIHN0YXJ0RW1pdHQoKSB7XHJcbiAgICB0aGlzLl90aW1lckVtbWl0aW5nLnJlc3VtZSgpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuVHJhaWwgPSBUcmFpbFxyXG4iLCJjbGFzcyBEaXN0YW5jZSBleHRlbmRzIFBoYXNlci5UZXh0IHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJ3JnYigxNjgsIDAsIDIxMCknLFxyXG4gICAgICBmb250OiAnMjVweCBBcmlhbCdcclxuICAgIH1cclxuXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnRGlzdGFuY2U6IDAgbS4nLCBzdHlsZSlcclxuXHJcbiAgICB0aGlzLmZpeGVkVG9DYW1lcmEgPSB0cnVlXHJcbiAgICB0aGlzLnNjb3JlID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdTY29yZScpXHJcbiAgICB0aGlzLnNjb3JlLm9uVXBkYXRlLmFkZCh0aGlzLnVwZGF0ZURpc3RhbmNlLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzdGFuY2UoKSB7XHJcbiAgICB0aGlzLnRleHQgPSBgRGlzdGFuY2U6ICR7dGhpcy5zY29yZS5jdXJyZW50RGlzdGFuY2V9IG0uYFxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkRpc3RhbmNlID0gRGlzdGFuY2VcclxuIiwiY2xhc3MgTG9zZSBleHRlbmRzIFBoYXNlci5UZXh0IHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJ3doaXRlJyxcclxuICAgICAgZm9udDogJzc1cHggQXJpYWwnLFxyXG4gICAgICBhbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnWW91IGxvc2UgOi0oJywgc3R5bGUpXHJcbiAgICB0aGlzLnRleHQgKz0gJ1xcclxcblByZXNzIHNwYWNlYmFyJztcclxuXHJcbiAgICB0aGlzLnNldFNoYWRvdygwLCAyLCAncmdiYSgzMywgMzMsIDMzLCAwLjYpJywgNClcclxuXHJcbiAgICB0aGlzLmFscGhhID0gMFxyXG4gICAgdGhpcy5maXhlZFRvQ2FtZXJhID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcylcclxuICAgICAgLnRvKHtcclxuICAgICAgICBhbHBoYTogMVxyXG4gICAgICB9LCA4MDApXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuTG9zZSA9IExvc2VcclxuIiwiY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gICAgdGhpcy5sb2FkLmF0bGFzWE1MKFxyXG4gICAgICBFbmdpbmUuc3ByaXRlc2hlZXQsXHJcbiAgICAgICdhc3NldHMvc3ByaXRlc2hlZXRzL2p1bXBlci5wbmcnLFxyXG4gICAgICAnYXNzZXRzL3Nwcml0ZXNoZWV0cy9qdW1wZXIueG1sJ1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXIyJywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyMi5wbmcnKVxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjMnLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXIzLnBuZycpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyNCcsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjQucG5nJylcclxuXHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BhcnRpY2xlcycsICdhc3NldHMvc3ByaXRlcy9wYXJ0aWNsZXMucG5nJywgOCwgOClcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLl9ncm91bmRTdGVwID0gMFxyXG4gICAgdGhpcy5fZ3JvdW5kVmVydGljYWxNYXJnaW4gPSAzMDBcclxuICAgIHRoaXMuX3Njb3JlID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdTY29yZScpXHJcblxyXG4gICAgd2luZG93LmdhbWUgPSB0aGlzXHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLnN0YWdlLmJhY2tncm91bmRDb2xvciA9IDB4QURFNkZGXHJcbiAgICB0aGlzLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKVxyXG4gICAgdGhpcy53b3JsZC5zZXRCb3VuZHMoMCwgLXRoaXMuZ2FtZS5oZWlnaHQsIE51bWJlci5NQVhfVkFMVUUsIHRoaXMuZ2FtZS5oZWlnaHQgKiAyKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUJhY2tncm91bmQoKVxyXG4gICAgdGhpcy5jcmVhdGVCdW5ueSgpXHJcbiAgICB0aGlzLmluaXRHcm91bmRzKClcclxuXHJcbiAgICB0aGlzLmJ1bm55LmFkZFRyYWlsKClcclxuXHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRlQ2FtZXJhKClcclxuICAgIHRoaXMuYWRkQ29udHJvbCgpXHJcbiAgICB0aGlzLmNyZWF0ZURpc3RhbmNlTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVMb3NlTGFiZWwoKVxyXG5cclxuICAgIC8vIFRFTVAgQ09ERVxyXG4gICAgdGhpcy5zdHJpcGUgPSBuZXcgRW5naW5lLkJlc3REaXN0YW5jZVN0cmlwZSh0aGlzLmdhbWUsIDUwMClcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuc3RyaXBlKVxyXG4gICAgLy8gRU5EIFRFTVAgQ09ERVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHRoaXMuYnVubnksIHRoaXMuZ3JvdW5kcylcclxuICAgIHRoaXMudXBkYXRlR3JvdW5kcygpXHJcbiAgICB0aGlzLnVwZGF0ZURpZSgpXHJcblxyXG4gICAgdGhpcy5fc2NvcmUuY3VycmVudERpc3RhbmNlID0gTWF0aC5yb3VuZCh0aGlzLmJ1bm55LnggLyAxNTApXHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaWUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuYnVubnkueSA+IHRoaXMuZ2FtZS5oZWlnaHQgLSAxMDAgJiZcclxuICAgICAgIXRoaXMuYnVubnkuZGF0YS5pc0RlYWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLmJ1bm55LmRpZSgpXHJcbiAgICAgIHRoaXMubG9zZUxhYmVsLnNob3coKVxyXG4gICAgICB0aGlzLmJhY2tncm91bmRzLmNhbGxBbGwoJ3N0b3AnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gdGhpcy5ncm91bmRzLmNoaWxkcmVuLm1hcCgoc3ByaXRlKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuZ2FtZS5kZWJ1Zy5ib2R5KHNwcml0ZSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScpXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy5zcHJpdGVJbmZvKHRoaXMuYnVubnksIDkwLCAxNSwgJ3doaXRlJylcclxuXHJcbiAgICAvLyBsZXQgem9uZSA9IHRoaXMuY2FtZXJhLmRlYWR6b25lXHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcuZ2VvbShcclxuICAgIC8vICAgbmV3IFBoYXNlci5SZWN0YW5nbGUoXHJcbiAgICAvLyAgICAgdGhpcy5jYW1lcmEueCArIHpvbmUueCxcclxuICAgIC8vICAgICB0aGlzLmNhbWVyYS55ICsgem9uZS55LFxyXG4gICAgLy8gICAgIHpvbmUud2lkdGgsIHpvbmUuaGVpZ2h0XHJcbiAgICAvLyAgICksICdyZ2JhKDI1NSwwLDAsMC42KScpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMb3NlTGFiZWwoKSB7XHJcbiAgICB0aGlzLmxvc2VMYWJlbCA9IG5ldyBFbmdpbmUuTG9zZShcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLyAyLFxyXG4gICAgICB0aGlzLmdhbWUuaGVpZ2h0IC8gMlxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMubG9zZUxhYmVsLmFuY2hvci5zZXRUbygwLjUpXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmxvc2VMYWJlbClcclxuICB9XHJcblxyXG4gIGNyZWF0ZURpc3RhbmNlTGFiZWwoKSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSAyNVxyXG5cclxuICAgIHRoaXMuZGlzdGFuY2VMYWJlbCA9IG5ldyBFbmdpbmUuRGlzdGFuY2UoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gbWFyZ2luLFxyXG4gICAgICBtYXJnaW5cclxuICAgIClcclxuICAgIHRoaXMuZGlzdGFuY2VMYWJlbC5hbmNob3Iuc2V0VG8oMSwgMClcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuZGlzdGFuY2VMYWJlbClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUdyb3VuZHMoKSB7XHJcbiAgICBsZXQgc3RlcCA9IE1hdGgucm91bmQodGhpcy5idW5ueS54IC8gdGhpcy5fZ3JvdW5kVmVydGljYWxNYXJnaW4pXHJcbiAgICBsZXQgbWFyZ2luID0gKHRoaXMuZ2FtZS53aWR0aClcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gdGhpcy5fZ3JvdW5kU3RlcCkge1xyXG4gICAgICB0aGlzLl9ncm91bmRTdGVwID0gc3RlcFxyXG4gICAgICB0aGlzLmdlbmVyYXRlR3JvdW5kcyhtYXJnaW4pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaWVHcm91bmRzKClcclxuICB9XHJcblxyXG4gIGRpZUdyb3VuZHMoKSB7XHJcbiAgICB0aGlzLmdyb3VuZHMuY2hpbGRyZW4uZm9yRWFjaCgoZ3JvdW5kKSA9PiB7XHJcbiAgICAgIGlmICghZ3JvdW5kLmluQ2FtZXJhICYmIGdyb3VuZC5hbGl2ZSAmJiBncm91bmQueCA8IHRoaXMuYnVubnkueCAtIHRoaXMuY2FtZXJhLmRlYWR6b25lLngpIHtcclxuICAgICAgICBncm91bmQua2lsbCgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRDb250cm9sKCkge1xyXG4gICAgbGV0IGhvdGtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlDb2RlLlNQQUNFQkFSKVxyXG4gICAgaG90a2V5Lm9uRG93bi5hZGQodGhpcy5qdW1wLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEuaXNEZWFkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUucmVzdGFydCh0cnVlLCBmYWxzZSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEucnVubmluZykge1xyXG4gICAgICB0aGlzLmJ1bm55Lmp1bXAoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZHMuY2FsbEFsbCgncmVzdW1lJylcclxuICAgICAgdGhpcy5idW5ueS5ydW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRHcm91bmQoKSB7XHJcbiAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAyNTBcclxuICAgIGNvbnN0IHggPSAxMDBcclxuICAgIGNvbnN0IHkgPSB0aGlzLmJ1bm55LnkgKyBtYXJnaW5Cb3R0b21cclxuICAgIGNvbnN0IHR5cGUgPSBHcm91bmQudHlwZS5HUkFTU1xyXG4gICAgY29uc3Qgc21hbGwgPSBmYWxzZVxyXG4gICAgY29uc3QgYnJva2VuID0gZmFsc2VcclxuXHJcbiAgICBsZXQgc3RhcnRHcm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZChcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBzbWFsbCxcclxuICAgICAgYnJva2VuLFxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuZ3JvdW5kcy5hZGQoc3RhcnRHcm91bmQpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCdW5ueSgpIHtcclxuICAgIHdpbmRvdy5idW5ueSA9IHRoaXMuYnVubnkgPSBuZXcgRW5naW5lLkJ1bm55KHRoaXMuZ2FtZSwgMTUwLCAxNTAsICdidW5ueTEnKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idW5ueSlcclxuICB9XHJcblxyXG4gIGluaXRHcm91bmRzKCkge1xyXG4gICAgdGhpcy5ncm91bmRzID0gdGhpcy5hZGQuZ3JvdXAoKVxyXG4gICAgdGhpcy5jcmVhdGVTdGFydEdyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUZpcnN0R3JvdW5kcygpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaXJzdEdyb3VuZHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZ2FtZS53aWR0aCAvIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luOyBpKyspIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUdyb3VuZHMoaSAqIHRoaXMuX2dyb3VuZFZlcnRpY2FsTWFyZ2luKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVHcm91bmRzKG1hcmdpbikge1xyXG4gICAgY29uc3QgU1BMSVRfVkVSVElDQUwgPSAzXHJcbiAgICBjb25zdCBHUklEX0hFSUdIVCA9IHRoaXMuZ2FtZS5oZWlnaHQgLyBTUExJVF9WRVJUSUNBTFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgU1BMSVRfVkVSVElDQUw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5ybmQucGlja1t0cnVlLCBmYWxzZV0pIGNvbnRpbnVlXHJcblxyXG4gICAgICBjb25zdCB4ID0gdGhpcy5idW5ueS54ICsgbWFyZ2luICsgdGhpcy5ybmQuYmV0d2VlbigtMjUsIDI1KVxyXG4gICAgICBjb25zdCB5ID0gR1JJRF9IRUlHSFQgKiBpICsgdGhpcy5ybmQuYmV0d2VlbigtNTAsIDUwKVxyXG5cclxuICAgICAgdGhpcy5hY3RpdmF0ZVJhbmRvbUdyb3VuZCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlUmFuZG9tR3JvdW5kKHgsIHkpIHtcclxuICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IDEwMFxyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoRW5naW5lLkdyb3VuZC50eXBlKS5tYXAodmFsID0+IHtcclxuICAgICAgcmV0dXJuIEVuZ2luZS5Hcm91bmQudHlwZVt2YWxdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMucm5kLnBpY2sodHlwZXMpXHJcbiAgICBjb25zdCBzbWFsbCA9IHRoaXMucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuICAgIGNvbnN0IGJyb2tlbiA9IHRoaXMucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuXHJcbiAgICBsZXQgZ3JvdW5kID0gdGhpcy5ncm91bmRzLmdldEZpcnN0RGVhZCgpXHJcbiAgICBpZiAoZ3JvdW5kID09IG51bGwpIHtcclxuICAgICAgZ3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHNtYWxsLFxyXG4gICAgICAgIGJyb2tlbixcclxuICAgICAgKVxyXG4gICAgICB0aGlzLmdyb3VuZHMuYWRkKGdyb3VuZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyb3VuZC5yZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91bmRcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyYXRlQ2FtZXJhKCkge1xyXG4gICAgY29uc3QgcGFkZGluZ0xlZnQgPSAzMDBcclxuICAgIGNvbnN0IHNtb290aE1vdmUgPSAwLjE1XHJcbiAgICBjb25zdCBkZWFkWm9uZUhlaWdodCA9IDUwXHJcblxyXG4gICAgdGhpcy5jYW1lcmEucm91bmRQeCA9IGZhbHNlXHJcbiAgICB0aGlzLmNhbWVyYS5mb2xsb3codGhpcy5idW5ueSwgUGhhc2VyLkNhbWVyYS5GT0xMT1dfTE9DS09OLCAxLCBzbW9vdGhNb3ZlKVxyXG4gICAgdGhpcy5jYW1lcmEuZGVhZHpvbmUgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZShwYWRkaW5nTGVmdCwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDEsIGRlYWRab25lSGVpZ2h0KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZHMgPSB0aGlzLmFkZC5ncm91cCgpXHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyMicsIC0xKSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjMnLCAtMikpXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmFkZChuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXI0JywgLTMpKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkdhbWUgPSBHYW1lXHJcbiIsIkVuZ2luZS5nYW1lID0gbmV3IFBoYXNlci5HYW1lKEVuZ2luZS5tYXhXaWR0aCwgRW5naW5lLm1heEhlaWdodCwgUGhhc2VyLkFVVE8pXHJcblxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgRW5naW5lLmdhbWUuc2NhbGUuc2V0R2FtZVNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxufVxyXG5cclxuRW5naW5lLmdhbWUuc3RhdGUuYWRkKCdCb290JywgRW5naW5lLkJvb3QpXHJcbkVuZ2luZS5nYW1lLnN0YXRlLmFkZCgnR2FtZScsIEVuZ2luZS5HYW1lKVxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5hZGQoJ0xvYWRlcicsIEVuZ2luZS5Mb2FkZXIpXHJcblxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5zdGFydCgnQm9vdCcpXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
