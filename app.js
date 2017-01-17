'use strict';

PIXI.DisplayObjectContainer.prototype.removeChildren = function (beginIndex, endIndex) {

    if (beginIndex === undefined) {
        beginIndex = 0;
    }
    if (endIndex === undefined) {
        endIndex = this.children.length;
    }

    var range = endIndex - beginIndex;

    if (range > 0 && range <= endIndex) {
        var removed = this.children.splice(beginIndex, range);

        for (var i = 0; i < removed.length; i++) {
            var child = removed[i];
            child.parent = undefined;
        }

        return removed;
    } else if (range === 0 && this.children.length === 0) {
        return [];
    } else {
        throw new Error('removeChildren: Range Error, numeric values are outside the acceptable range');
    }
};
'use strict';

var Engine = {
  minWidth: 640,
  minHeight: 360,

  maxWidth: window.innerWidth,
  maxHeight: window.innerHeight,

  spritesheet: 'jumper',
  scaleRatio: 0.35,
  magnetDistace: 300
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Profiler = function () {
  function Profiler() {
    _classCallCheck(this, Profiler);

    this.array = [];
  }

  _createClass(Profiler, [{
    key: "start",
    value: function start(name) {
      this.array[name] = {
        start: Date.now()
      };
    }
  }, {
    key: "stop",
    value: function stop(name) {
      var data = this.array[name];

      data.stop = Date.now();
      data.time = data.stop - data.start;
    }
  }, {
    key: "time",
    value: function time(name) {
      if (this.array[name] == null) return undefined;else return this.array[name].time;
    }
  }]);

  return Profiler;
}();

Engine.Profiler = Profiler;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score() {
    _classCallCheck(this, Score);

    this._bestDistance = 0;
    this._currentDistance = 0;
    this._coins = 0;

    this.load();
    this.onUpdate = new Phaser.Signal();
    this.updateCoins = new Phaser.Signal();
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
    key: 'coins',
    set: function set(val) {
      this._coins = val;

      this.updateCoins.dispatch();

      return this._coins;
    },
    get: function get() {
      return this._coins;
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
  function Service() {
    _classCallCheck(this, Service);
  }

  _createClass(Service, null, [{
    key: "get",
    value: function get(name) {
      return Service.list[name];
    }
  }]);

  return Service;
}();

Service.list = {
  "Score": new Engine.Score(),
  "Profiler": new Engine.Profiler()
};

Engine.Service = Service;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_Phaser$State) {
  _inherits(Loader, _Phaser$State);

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
      this.state.start('Menu');
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Btn = function (_Phaser$Graphics) {
  _inherits(Btn, _Phaser$Graphics);

  function Btn(game, x, y, color, icon) {
    _classCallCheck(this, Btn);

    var _this = _possibleConstructorReturn(this, (Btn.__proto__ || Object.getPrototypeOf(Btn)).call(this, game, x, y));

    _this.color = color;
    _this.icon = new Phaser.Sprite(_this.game, 0, 0, icon);
    _this.icon.anchor.setTo(0.5);

    _this.addChild(_this.icon);

    _this.inputEnabled = true;
    _this.events.onInputDown.add(_this.click, _this);

    _this.radius = _this.icon.width;
    _this.clicked = new Phaser.Signal();

    _this.draw();
    return _this;
  }

  _createClass(Btn, [{
    key: "draw",
    value: function draw() {
      this.beginFill(this.color);
      this.drawCircle(0, 0, this.radius);
      this.endFill();
    }
  }, {
    key: "click",
    value: function click() {
      var _this2 = this;

      this.parent.bringToTop(this);

      var animation = 250;
      var screenSize = void 0;

      if (this.x > this.game.width / 2) {
        screenSize = Phaser.Math.distancePow(this.x, this.y, 0, 0);
      } else {
        screenSize = Phaser.Math.distancePow(this.x, this.y, this.game.width, this.game.height);
      }

      var tween = this.game.add.tween(this).to({
        radius: screenSize * 2
      }, animation).start();

      this.game.add.tween(this.icon).to({
        alpha: 0
      }, animation).start();

      tween.onComplete.add(this.draw, this);
      tween.onComplete.add(function () {
        _this2.clicked.dispatch();
      }, this);
      tween.onUpdateCallback(this.draw, this);
    }
  }]);

  return Btn;
}(Phaser.Graphics);

Engine.Btn = Btn;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Phaser$State) {
  _inherits(Menu, _Phaser$State);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));
  }

  _createClass(Menu, [{
    key: 'preload',
    value: function preload() {
      this.load.image('i-play', 'assets/sprites/icons/play.png');
      this.load.image('i-settings', 'assets/sprites/icons/settings.png');
      this.load.image('i-shop', 'assets/sprites/icons/shop.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.stage.backgroundColor = 0x0D47A1;

      this.createPlayBtn();
      this.createSettingsBtn();
      this.createShopBtn();
      this.createLogo();
    }
  }, {
    key: 'createLogo',
    value: function createLogo() {
      var style = {
        font: '50px Open Sans',
        fill: 'white'
      };

      this.logo = this.add.text(this.game.width / 2, this.game.height / 4, '🐰 Bunny Funny Runner 🐰 ', style);

      this.logo.anchor.setTo(0.5);
    }
  }, {
    key: 'createSettingsBtn',
    value: function createSettingsBtn() {
      var btnColor = 0xADE6FF;
      var icon = 'i-settings';
      var margin = 150;

      this.settings = new Engine.Btn(this.game, this.game.width / 2 + margin, this.game.height / 2, btnColor, icon);
      this.settings.icon.tint = 0x26C6DA;
      // this.settings.clicked.add(this.startGame, this)
      this.add.existing(this.settings);
    }
  }, {
    key: 'createShopBtn',
    value: function createShopBtn() {
      var btnColor = 0xBF360C;
      var icon = 'i-shop';
      var margin = -150;

      this.settings = new Engine.Btn(this.game, this.game.width / 2 + margin, this.game.height / 2, btnColor, icon);
      // this.settings.icon.tint = 0x00E676
      this.settings.clicked.add(this.openShop, this);
      this.add.existing(this.settings);
    }
  }, {
    key: 'createPlayBtn',
    value: function createPlayBtn() {
      var btnColor = 0xADE6FF;
      var icon = 'i-play';

      this.play = new Engine.Btn(this.game, this.game.width / 2, this.game.height / 2, btnColor, icon);
      this.play.icon.tint = 0x26C6DA;
      this.play.clicked.add(this.startGame, this);
      this.add.existing(this.play);
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      this.stage.backgroundColor = this.play.color;
      this.state.start('Game');
    }
  }, {
    key: 'openShop',
    value: function openShop() {
      this.stage.backgroundColor = this.play.color;
      this.state.start('Shop');
    }
  }]);

  return Menu;
}(Phaser.State);

Engine.Menu = Menu;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BtnShop = function (_Phaser$Sprite) {
  _inherits(BtnShop, _Phaser$Sprite);

  function BtnShop(game, x, y) {
    _classCallCheck(this, BtnShop);

    return _possibleConstructorReturn(this, (BtnShop.__proto__ || Object.getPrototypeOf(BtnShop)).call(this, game, x, y, null));
  }

  return BtnShop;
}(Phaser.Sprite);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shop = function (_Phaser$State) {
  _inherits(Shop, _Phaser$State);

  function Shop() {
    _classCallCheck(this, Shop);

    return _possibleConstructorReturn(this, (Shop.__proto__ || Object.getPrototypeOf(Shop)).call(this));
  }

  _createClass(Shop, [{
    key: 'create',
    value: function create() {
      this.game.stage.backgroundColor = 0xBF360C;

      this.createHeadLabel();
    }
  }, {
    key: 'createHeadLabel',
    value: function createHeadLabel() {
      var margin = 100;
      var animation = 400;
      var text = 'BUY MORE COINS 💰';
      var style = {
        font: '41px Open Sans',
        fill: 'white'
      };

      this.headLabel = this.add.text(this.game.width / 2, margin, text, style);
      this.headLabel.anchor.setTo(0.5);
      this.headLabel.alpha = 0;
      this.add.tween(this.headLabel).to({
        alpha: 1
      }, animation).start();
    }
  }]);

  return Shop;
}(Phaser.State);

Engine.Shop = Shop;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_Phaser$State) {
  _inherits(Settings, _Phaser$State);

  function Settings() {
    _classCallCheck(this, Settings);

    return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));
  }

  return Settings;
}(Phaser.State);

Engine.Settings = Settings;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Generator = function (_Phaser$Group) {
  _inherits(Generator, _Phaser$Group);

  function Generator(game, bunny) {
    _classCallCheck(this, Generator);

    var _this = _possibleConstructorReturn(this, (Generator.__proto__ || Object.getPrototypeOf(Generator)).call(this, game));

    _this.bunny = bunny;
    return _this;
  }

  _createClass(Generator, [{
    key: "start",
    value: function start() {}
  }, {
    key: "update",
    value: function update() {
      _get(Generator.prototype.__proto__ || Object.getPrototypeOf(Generator.prototype), "update", this).call(this);

      this.checkDie();
    }
  }, {
    key: "generate",
    value: function generate() {}
  }, {
    key: "stop",
    value: function stop() {}
  }, {
    key: "checkDie",
    value: function checkDie() {
      var _this2 = this;

      this.children.forEach(function (item) {
        if (!item.inCamera && item.alive && item.x < _this2.bunny.x - _this2.game.camera.deadzone.x) {
          item.kill();
        }
      });
    }
  }]);

  return Generator;
}(Phaser.Group);

Engine.Component = {};
Engine.Component.Generator = Generator;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoinGenerator = function (_Generator) {
    _inherits(CoinGenerator, _Generator);

    function CoinGenerator(game, bunny, grounds) {
        _classCallCheck(this, CoinGenerator);

        var _this = _possibleConstructorReturn(this, (CoinGenerator.__proto__ || Object.getPrototypeOf(CoinGenerator)).call(this, game, bunny));

        _this.grounds = grounds;
        _this.grounds.signals.generate.add(_this.createdNewGround, _this);

        _this.prototype = new Engine.Coin(_this.game, 0, 0);

        _this.createTemplates();
        return _this;
    }

    _createClass(CoinGenerator, [{
        key: "createTemplates",
        value: function createTemplates() {
            this.templates = [];

            this.templates.push([[0, 0, 2, 3, 0], [0, 0, 2, 0, 0], [0, 0, 2, 0, 0], [0, 1, 3, 1, 0], [1, 1, 1, 1, 1]]);

            this.templates.push([[3, 1, 1, 3], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [2, 1, 1, 2]]);

            this.templates.push([[0, 1, 0], [1, 3, 1], [0, 1, 0]]);

            this.templates.push([[3]]);

            this.templates.push([[3, 3, 3]]);

            this.templates.push([[0, 0, 0, 3, 0, 0, 0], [0, 0, 2, 0, 2, 0, 0], [0, 2, 0, 0, 0, 2, 0], [2, 0, 0, 0, 0, 0, 2], [1, 1, 1, 1, 1, 1, 1]]);

            this.templates.push([[0, 0, 1], [0, 3, 0], [1, 0, 0]]);

            this.templates.push([[1, 0, 0], [0, 3, 0], [0, 0, 1]]);

            this.templates.push([[1, 0, 0], [0, 3, 0], [0, 0, 1]]);
        }
    }, {
        key: "createdNewGround",
        value: function createdNewGround(ground) {
            if (!Phaser.Utils.chanceRoll(30)) return;

            var padding = 1;

            var template = this.game.rnd.pick(this.templates);

            // if (ground.data.small) {
            //   template = this.templates[this.game.rnd.pick([1, 2, 3])]
            // } else {
            // }

            var direction = this.game.rnd.pick([this.getOffsetRight, this.getOffsetTop, this.getOffsetTopRight]).bind(this)(ground, template);

            var offsetX = direction.x;
            var offsetY = direction.y;

            var templateWidth = template[0].length * this.prototype.width;
            var templateHeight = template.length * this.prototype.height;

            for (var i in template) {
                for (var j in template[i]) {
                    if (template[i][j] > 0) {
                        var x = offsetX + j * (this.prototype.width + padding) - templateWidth / 2;
                        var y = offsetY + i * (this.prototype.height + padding) - templateHeight;

                        this.generate(x, y, template[i][j]);
                    }
                }
            }
        }
    }, {
        key: "generate",
        value: function generate(x, y, maxType) {
            var number = Math.random();
            var type = 0;

            if (number < 0.15 && maxType > 2) {
                // 15%
                type = Engine.Coin.type.GOLD;
            } else if (number > 0.15 && number < 0.5 && maxType > 1) {
                // %35
                type = Engine.Coin.type.SILVER;
            } else {
                // 50%
                type = Engine.Coin.type.BRONZE;
            }

            var coin = this.getFirstDead();
            if (coin == null) {
                coin = new Engine.Coin(this.game, x, y, type);
                this.add(coin);
            } else {
                coin.reset(x, y);
            }

            return coin;
        }
    }, {
        key: "getOffsetRight",
        value: function getOffsetRight(ground, template) {
            var margin = -5;
            var marginLeft = 25;

            var result = {
                x: ground.x + ground.width + template[0].length * this.prototype.width + marginLeft,
                y: ground.y + margin + this.prototype.height / 2
            };

            return result;
        }
    }, {
        key: "getOffsetTop",
        value: function getOffsetTop(ground, template) {
            var margin = -5;

            var result = {
                x: ground.x + ground.width / 2 + this.prototype.width / 2,
                y: ground.y + margin + this.prototype.height / 2
            };

            return result;
        }
    }, {
        key: "getOffsetTopRight",
        value: function getOffsetTopRight(ground, template) {
            var margin = template.length * this.prototype.height;
            var marginLeft = 25;

            var result = {
                x: ground.x + ground.width + template[0].length * this.prototype.width + marginLeft,
                y: ground.y + margin + this.prototype.height / 2
            };

            return result;
        }
    }]);

    return CoinGenerator;
}(Generator);

Engine.Component.CoinGenerator = CoinGenerator;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyGenerator = function (_Generator) {
  _inherits(EnemyGenerator, _Generator);

  function EnemyGenerator(game, bunny, grounds) {
    _classCallCheck(this, EnemyGenerator);

    var _this = _possibleConstructorReturn(this, (EnemyGenerator.__proto__ || Object.getPrototypeOf(EnemyGenerator)).call(this, game, bunny));

    _this.grounds = grounds;
    _this.grounds.signals.generate.add(_this.generate, _this);

    _this.score = Engine.Service.get('Score');

    _this.types = [Engine.SpringMan, Engine.FlyMan, Engine.SpikeBall, Engine.Cloud];
    return _this;
  }

  _createClass(EnemyGenerator, [{
    key: 'generate',
    value: function generate(ground) {
      var maxChance = 25;
      var maxDistance = 100;
      var currentDistance = this.score.currentDistance;
      var currentChance = this.cubicInOut(currentDistance / maxDistance) * maxChance;

      if (!Phaser.Utils.chanceRoll(currentChance)) return;

      var marginLeft = this.game.rnd.between(50, 150);

      var x = 0;
      var y = 0;

      x = ground.x + ground.width + marginLeft;
      y = ground.y + this.game.rnd.between(-75, 75);

      var TypeClass = this.game.rnd.pick(this.types);
      var enemy = this.children.find(function (item) {
        return item.constructor === TypeClass && !item.alive;
      });

      if (enemy == null) {
        enemy = new TypeClass(this.game, x, y);
        this.add(enemy);
      } else {
        enemy.reset(x, y);
      }

      return enemy;
    }
  }, {
    key: 'cubicInOut',
    value: function cubicInOut(t) {
      if (t > 1) return 1;
      return t;
    }
  }]);

  return EnemyGenerator;
}(Generator);

Engine.Component.EnemyGenerator = EnemyGenerator;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroundsGenerator = function (_Engine$Component$Gen) {
  _inherits(GroundsGenerator, _Engine$Component$Gen);

  /**
   * Grounds generator
   * @param  {Phaser.Game} game
   * @param  {Engine.Bunny} bunny Object of bunny
   * @param  {Number} distance Distance between grounds
   */
  function GroundsGenerator(game, bunny, distance) {
    _classCallCheck(this, GroundsGenerator);

    var _this = _possibleConstructorReturn(this, (GroundsGenerator.__proto__ || Object.getPrototypeOf(GroundsGenerator)).call(this, game, bunny));

    _this.distance = distance;
    _this.signals = {
      generate: new Phaser.Signal()
    };
    _this.currentStep = -1;
    _this.currentGroundType = Engine.Ground.type.SNOW;

    _this.addBiomTimer();
    return _this;
  }

  _createClass(GroundsGenerator, [{
    key: "addBiomTimer",
    value: function addBiomTimer() {
      var minTime = 5000;
      var maxTime = 15000;
      var time = this.game.rnd.between(minTime, maxTime);

      this.biomTimer = this.game.time.create();
      this.biomTimer.add(time, this.changeBiom, this);
      this.biomTimer.start();
    }
  }, {
    key: "changeBiom",
    value: function changeBiom() {
      var minTime = 5000;
      var maxTime = 15000;
      var time = this.game.rnd.between(minTime, maxTime);

      var types = Object.keys(Engine.Ground.type).map(function (val) {
        return Engine.Ground.type[val];
      });

      this.currentGroundType = this.game.rnd.pick(types);

      this.biomTimer.add(time, this.changeBiom, this);
    }
  }, {
    key: "update",
    value: function update() {
      _get(GroundsGenerator.prototype.__proto__ || Object.getPrototypeOf(GroundsGenerator.prototype), "update", this).call(this);

      var step = Math.floor(this.bunny.x / this.distance);
      var margin = this.game.width;

      if (step !== this.currentStep) {
        this.currentStep = step;
        this.generate(margin);
      }
    }
  }, {
    key: "generate",
    value: function generate(margin) {
      _get(GroundsGenerator.prototype.__proto__ || Object.getPrototypeOf(GroundsGenerator.prototype), "generate", this).call(this);

      var VERTICAL_COUNT = 8;
      var START_POINT = -(this.game.world.bounds.height - this.game.height);
      var GRID_HEIGHT = 335; //this.game.world.bounds.height / SPLIT_VERTICAL
      var RND_HORIZONTAL = 120;
      var RND_VERTICAL = 100;

      for (var i = 1; i < VERTICAL_COUNT; i++) {
        if (this.game.rnd.pick[(true, false)]) continue;

        var x = this.bunny.x + margin + this.game.rnd.between(-RND_HORIZONTAL, RND_HORIZONTAL);
        var y = START_POINT + GRID_HEIGHT * i + this.game.rnd.between(-RND_VERTICAL, RND_VERTICAL);

        var ground = this.addRandomGround(x, y);

        this.signals.generate.dispatch(ground);
      }
    }
  }, {
    key: "addRandomGround",
    value: function addRandomGround(x, y) {
      var type = this.currentGroundType;
      var small = this.game.rnd.pick([true, false]);
      var broken = this.game.rnd.pick([true, false]);

      var ground = this.getFirstDead();
      if (ground == null) {
        ground = new Engine.Ground(this.game, x, y, type, small, broken);
        this.add(ground);
      } else {
        ground.reset(x, y, type, small, broken);
      }

      return ground;
    }
  }]);

  return GroundsGenerator;
}(Engine.Component.Generator);

Engine.Component.GroundsGenerator = GroundsGenerator;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JumperGenerator = function (_Engine$Component$Gen) {
  _inherits(JumperGenerator, _Engine$Component$Gen);

  function JumperGenerator(game, bunny, grounds) {
    _classCallCheck(this, JumperGenerator);

    var _this = _possibleConstructorReturn(this, (JumperGenerator.__proto__ || Object.getPrototypeOf(JumperGenerator)).call(this, game, bunny));

    _this.grounds = grounds;
    _this.grounds.signals.generate.add(_this.generate, _this);

    _this.prototype = new Engine.Jumper(_this.game, 0, 0);
    return _this;
  }

  _createClass(JumperGenerator, [{
    key: "generate",
    value: function generate(ground) {
      var absoluteY = this.game.world.height - this.game.height + ground.y;

      if (absoluteY < JumperGenerator.MIN_HEIGHT) return;
      if (!Phaser.Utils.chanceRoll(15)) return;

      var x = this.game.rnd.between(ground.x, ground.x + ground.width - this.prototype.width);
      var y = ground.y;

      var jumper = this.getFirstDead();

      if (jumper == null) {
        jumper = new Engine.Jumper(this.game, x, y);
        this.add(jumper);
      } else {
        jumper.reset(x, y);
      }

      return jumper;
    }
  }]);

  return JumperGenerator;
}(Engine.Component.Generator);

/**
 * Minimal height of generation by Y
 * @type {[type]}
 */


JumperGenerator.MIN_HEIGHT = 750;

Engine.Component.JumperGenerator = JumperGenerator;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NominalGenerator = function (_Generator) {
  _inherits(NominalGenerator, _Generator);

  function NominalGenerator(game, bunny) {
    _classCallCheck(this, NominalGenerator);

    return _possibleConstructorReturn(this, (NominalGenerator.__proto__ || Object.getPrototypeOf(NominalGenerator)).call(this, game, bunny));
  }

  _createClass(NominalGenerator, [{
    key: "generate",
    value: function generate(x, y, nominal) {
      var item = this.getFirstDead();

      if (item == null) {
        item = new Engine.Nominal(this.game, x, y, nominal);
        this.add(item);
      } else {
        item.reset(x, y, nominal);
      }

      return item;
    }
  }]);

  return NominalGenerator;
}(Generator);

Engine.Component.NominalGenerator = NominalGenerator;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PowerUpGenerator = function (_Generator) {
  _inherits(PowerUpGenerator, _Generator);

  function PowerUpGenerator(game, bunny, grounds) {
    _classCallCheck(this, PowerUpGenerator);

    var _this = _possibleConstructorReturn(this, (PowerUpGenerator.__proto__ || Object.getPrototypeOf(PowerUpGenerator)).call(this, game, bunny));

    _this.grounds = grounds;
    _this.grounds.signals.generate.add(_this.generate, _this);

    _this.prototype = new Engine.PowerUp(_this.game, 0, 0);
    return _this;
  }

  _createClass(PowerUpGenerator, [{
    key: "generate",
    value: function generate(ground) {
      if (this.bunny.data.jetPack) return;
      if (!Phaser.Utils.chanceRoll(3)) return;

      var x = this.game.rnd.between(ground.x, ground.x + ground.width - this.prototype.width);
      var y = ground.y - this.prototype.height;
      var types = [Engine.PowerUp.type.MAGNET, Engine.PowerUp.type.GOD, Engine.PowerUp.type.WINGS];
      var type = this.game.rnd.pick(types);

      if (Phaser.Utils.chanceRoll(10)) {
        type = Engine.PowerUp.type.JETPACK;
      }

      var powerUp = this.getFirstDead();

      if (powerUp == null) {
        powerUp = new Engine.PowerUp(this.game, x, y, type);
        this.add(powerUp);
      } else {
        powerUp.reset(x, y, type);
      }

      return powerUp;
    }
  }]);

  return PowerUpGenerator;
}(Generator);

Engine.Component.PowerUpGenerator = PowerUpGenerator;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_Phaser$Sprite) {
  _inherits(Enemy, _Phaser$Sprite);

  function Enemy(game, x, y, name) {
    _classCallCheck(this, Enemy);

    var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, game, x, y, Engine.spritesheet, name));

    _this.game.physics.arcade.enable([_this]);
    _this.body.immovable = true;

    _this.autoCull = true;

    _this.width *= Engine.scaleRatio;
    _this.height *= Engine.scaleRatio;
    return _this;
  }

  _createClass(Enemy, [{
    key: "die",
    value: function die() {}
  }]);

  return Enemy;
}(Phaser.Sprite);

Engine.Enemy = Enemy;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AirTrail = function (_Phaser$Graphics) {
  _inherits(AirTrail, _Phaser$Graphics);

  function AirTrail(game, follow) {
    _classCallCheck(this, AirTrail);

    var _this = _possibleConstructorReturn(this, (AirTrail.__proto__ || Object.getPrototypeOf(AirTrail)).call(this, game, 0, 0));

    _this.follow = follow;
    _this.followWidth = follow.width;
    _this.followHeight = follow.height;
    _this.parts = [];

    _this.data.visible = false;
    return _this;
  }

  _createClass(AirTrail, [{
    key: "drawTrail",
    value: function drawTrail() {
      var color = 0x00a3ff;
      var accRatio = 0.01;
      var lineWidth = this.followHeight / 2;
      var accumulator = 0;

      this.clear();

      this.parts.unshift({
        x: this.follow.x + this.follow.width / 2,
        y: this.follow.y + this.follow.height
      });

      for (var i = 0; i < this.parts.length - 1; i++) {
        var part = this.parts[i];
        var nextPart = this.parts[i + 1];

        accumulator += accRatio;

        this.lineStyle(lineWidth, color, accumulator);

        this.moveTo(part.x, part.y);
        this.lineTo(nextPart.x, nextPart.y);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.follow.body.velocity.y < -900 && !this.follow.data.isDead) {
        this.drawTrail();
      } else {
        this.parts = [];
      }
    }
  }]);

  return AirTrail;
}(Phaser.Graphics);

Engine.AirTrail = AirTrail;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_Phaser$TileSprite) {
  _inherits(Background, _Phaser$TileSprite);

  function Background(game, x, y, name, speed) {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, game, x, y, 1024, 1024, name));

    _this.tileScale.setTo(_this.game.height / _this.height);
    _this.fixedToCamera = true;
    _this.width = _this.game.width;

    _this.data.speed = speed;
    _this.data.isStoped = true;
    return _this;
  }

  _createClass(Background, [{
    key: "update",
    value: function update() {
      this.tilePosition.x = this.game.camera.x * this.data.speed;
    }
  }]);

  return Background;
}(Phaser.TileSprite);

Engine.Background = Background;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BestDistanceStripe = function (_Phaser$Graphics) {
  _inherits(BestDistanceStripe, _Phaser$Graphics);

  function BestDistanceStripe(game, x) {
    _classCallCheck(this, BestDistanceStripe);

    var _this = _possibleConstructorReturn(this, (BestDistanceStripe.__proto__ || Object.getPrototypeOf(BestDistanceStripe)).call(this, game, x, -BestDistanceStripe.ANTI_MARGIN));

    _this.y = _this.game.world.bounds.y;

    _this.draw();
    return _this;
  }

  _createClass(BestDistanceStripe, [{
    key: "draw",
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BestDistance = function () {
  function BestDistance(game) {
    _classCallCheck(this, BestDistance);

    this.score = Engine.Service.get('Score');

    if (this.score.bestDistance === 0) return;

    this.game = game;
    this.x = this.score.bestDistance * Engine.Score.MULTIPER_DISTANCE;

    this.createLabel();
    this.createStripe();
  }

  _createClass(BestDistance, [{
    key: 'createLabel',
    value: function createLabel() {
      var _this = this;

      var style = {
        fill: 'white',
        font: '26px Arial'
      };
      var marginLeft = 10;
      var marginTop = 150;

      this.label = this.game.add.text(this.x + marginLeft, 0, 'Best ' + this.score.bestDistance + ' m.', style);
      this.label.update = function () {
        _this.label.y = _this.game.camera.y + marginTop;
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blood = function (_Phaser$Particles$Arc) {
    _inherits(Blood, _Phaser$Particles$Arc);

    function Blood(game, follow) {
        _classCallCheck(this, Blood);

        var particles = 50;
        var lifespan = 5000;
        var speed = 1000;

        var _this = _possibleConstructorReturn(this, (Blood.__proto__ || Object.getPrototypeOf(Blood)).call(this, game, 0, 0, particles));

        _this.follow = follow;

        _this.makeParticles('particles', [0, 1, 2, 3, 4], particles, true);
        _this.bounce.setTo(1);
        _this.gravity = 0;
        _this.minParticleSpeed.setTo(-speed, -speed);
        _this.maxParticleSpeed.setTo(speed, speed);
        _this.setAlpha(1, 0, lifespan);
        return _this;
    }

    _createClass(Blood, [{
        key: 'playAnimation',
        value: function playAnimation() {
            var explode = true;
            var lifespan = 5000;
            var frequency = null;
            var quantity = 200;

            this.x = this.follow.x + this.follow.width / 2;
            this.y = this.follow.y + this.follow.height / 2;

            this.start(explode, lifespan, frequency, quantity);
        }
    }]);

    return Blood;
}(Phaser.Particles.Arcade.Emitter);

Engine.Blood = Blood;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bunny = function (_Phaser$Sprite) {
  _inherits(Bunny, _Phaser$Sprite);

  function Bunny(game, x, y, name) {
    _classCallCheck(this, Bunny);

    var _this = _possibleConstructorReturn(this, (Bunny.__proto__ || Object.getPrototypeOf(Bunny)).call(this, game, x, y, Engine.spritesheet, name + '_stand.png'));

    _this.data.name = name;
    _this.data.magnet = false;
    _this.data.isDead = false;
    _this.data.running = false;
    _this.data.jetPack = false;
    _this.data.countJump = Bunny.MAX_JUMPS;

    _this.game.physics.arcade.enable([_this]);

    _this.width *= 0.35;
    _this.height *= 0.35;

    Object.assign(_this.body.gravity, Bunny.GRAVITY);
    Object.assign(_this.body.maxVelocity, Bunny.MAX_VELOCITY);
    _this.body.collideWorldBounds = true;

    _this.onDied = new Phaser.Signal();

    _this.createAnimation();
    _this.createDieAnimation();
    _this.animations.play('run');

    _this.addSounds();
    _this.addMagnetEffect();
    _this.addWings();
    _this.addFire();

    _this.jetPackSprite = _this.game.make.sprite(0, 0, Engine.spritesheet, 'jetpack.png');

    _this.addChild(_this.jetPackSprite);
    _this.jetPackSprite.alpha = 0;
    return _this;
  }

  _createClass(Bunny, [{
    key: 'activateJetPack',
    value: function activateJetPack() {
      this.data.jetPack = true;
      this.data.trail.stopEmitt();

      this.body.velocity.setTo(0);
      Object.assign(this.body.maxVelocity, Bunny.JETPACK_VELOCITY);
      this.body.gravity.setTo(0, 0);

      this.jetPackSprite.alpha = 1;

      this.activateGod();
      this.fire.show();

      this.game.add.tween(this).to({
        rotation: Math.PI / 2
      }, 100).start();

      setTimeout(this.diactivateJetPack.bind(this), Bunny.JETPACK_TIME);
    }
  }, {
    key: 'diactivateJetPack',
    value: function diactivateJetPack() {
      var _this2 = this;

      var tween = this.game.add.tween(this.body.maxVelocity).to({
        x: 400
      }, 500).start();

      tween.onComplete.add(function () {
        _this2.data.jetPack = false;
        _this2.data.trail.startEmitt();
        Object.assign(_this2.body.gravity, Bunny.GRAVITY);

        _this2.body.velocity.setTo(Bunny.BASE_MAX_SPEED, 0);
        _this2.body.acceleration.setTo(Bunny.ACCELERATION, 0);

        _this2.jetPackSprite.alpha = 0;

        _this2.diactivateGod();
        _this2.fire.hide();
        _this2.rotation = 0;

        _this2.game.add.tween(_this2).to({
          rotation: 0
        }, 100).start();
      }, this);
    }
  }, {
    key: 'activateWings',
    value: function activateWings() {
      var wingsJumps = 100;

      this.wings.show();

      this.data.countJump = Bunny.MAX_JUMPS = wingsJumps;

      if (this.wingTimeout != null) {
        clearTimeout(this.wingTimeout);
      }

      if (!this.data.jetPack) {
        this.wingTimeout = setTimeout(this.diactivateWings.bind(this), Bunny.WINGS_TIME);
      }
    }
  }, {
    key: 'diactivateWings',
    value: function diactivateWings() {
      this.data.countJump = Bunny.MAX_JUMPS = Bunny.BASE_MAX_JUMPS;

      this.wings.hide();
    }
  }, {
    key: 'addSounds',
    value: function addSounds() {
      this.dieSound = this.game.sound.add('lose');
      this.jumpSound = this.game.sound.add('jump');
    }
  }, {
    key: 'addTrail',
    value: function addTrail() {
      this.data.trail = new Engine.Trail(this.game, this);
      this.data.airTrail = new Engine.AirTrail(this.game, this);
      this.game.add.existing(this.data.trail);
      this.game.add.existing(this.data.airTrail);
    }
  }, {
    key: 'addMagnetEffect',
    value: function addMagnetEffect() {
      this.magnetEffect = new Engine.MagnetEffect(this.game);
      this.game.add.existing(this.magnetEffect);
    }
  }, {
    key: 'addWings',
    value: function addWings() {
      this.wings = new Engine.Wings(this.game, this);
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.data.isDead) return;

      if (this.data.magnet) {
        var offsetX = 5;
        var offsetY = 10;

        this.magnetEffect.x = this.x + this.width / 2 + offsetX;
        this.magnetEffect.y = this.y + this.height / 2 + offsetY;
      }

      if (this.inAir()) {
        if (!this.data.jetPack) this.data.trail.startEmitt();
        this.animations.play('jump');
      } else if (this.data.running) {
        if (!this.data.jetPack) this.data.trail.startEmitt();
        this.animations.play('run');
        this.data.countJump = Bunny.MAX_JUMPS;
      } else {
        this.data.trail.stopEmitt();
        this.animations.play('stand');
      }
    }
  }, {
    key: 'addFire',
    value: function addFire() {
      this.fire = new Engine.Fire(this.game);
      this.fire.y = this.height / Engine.scaleRatio;
      this.fire.x = this.width / 2;
      this.fire.alpha = 0;

      this.addChild(this.fire);
    }
  }, {
    key: 'activateMagnet',
    value: function activateMagnet() {
      this.data.magnet = true;

      this.magnetEffect.show();

      if (this.magnetTimeout != null) {
        clearTimeout(this.magnetTimeout);
      }

      this.magnetTimeout = setTimeout(this.diactivateMagnet.bind(this), Bunny.MAGNET_TIME);
    }
  }, {
    key: 'diactivateMagnet',
    value: function diactivateMagnet() {
      this.data.magnet = false;

      this.magnetEffect.hide();
    }
  }, {
    key: 'inAir',
    value: function inAir() {
      return !bunny.body.touching.down;
    }
  }, {
    key: 'die',
    value: function die() {
      if (this.data.isDead) return;

      this.dieSound.play();
      this.playDieAnimation();

      var animationDownTime = 1000;
      var animationUpTime = 100;
      var upMove = 100;
      var gravity = new Phaser.Point(0, 4000);
      var velocity = new Phaser.Point(0, -1200);

      this.game.camera.unfollow();

      this.body.velocity = velocity;
      this.body.acceleration.setTo(0);
      this.body.gravity = gravity;
      this.body.collideWorldBounds = false;
      this.data.isDead = true;
      this.data.trail.stopEmitt();
      this.animations.play('hurt');

      this.onDied.dispatch();
    }
  }, {
    key: 'createDieAnimation',
    value: function createDieAnimation() {
      this.data.blood = new Engine.Blood(this.game, this);
      this.game.add.existing(this.data.blood);
    }
  }, {
    key: 'playDieAnimation',
    value: function playDieAnimation() {
      this.data.blood.playAnimation();
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
    key: 'activateGod',
    value: function activateGod() {
      var _this3 = this;

      this.data.god = true;

      if (!this.data.jetPack) {
        this.godTimeout = setTimeout(this.diactivateGod.bind(this), Bunny.GODMODE_TIME);
      }

      var animationTime = 400;

      if (this.godAnimation) {
        this.godAnimation.stop(true);
      }

      this.godAnimation = this.game.add.tween(this).to({
        alpha: 0.2
      }, animationTime).to({
        alpha: 1
      }, animationTime).loop(-1).start();

      this.godAnimation.onComplete.add(function () {
        _this3.alpha = 1;
      }, this);
    }
  }, {
    key: 'diactivateGod',
    value: function diactivateGod() {
      this.data.god = false;

      this.godAnimation.stop(true);
    }
  }, {
    key: 'jump',
    value: function jump() {
      if (this.data.isDead || this.data.jetPack) return;

      var jumpImpulse = 900;

      if (this.data.countJump > 0) {
        this.body.velocity.y = -jumpImpulse;
        this.data.countJump--;
        this.jumpSound.play();
      }
    }
  }]);

  return Bunny;
}(Phaser.Sprite);

Bunny.BASE_MAX_JUMPS = 2;
Bunny.MAX_JUMPS = Bunny.BASE_MAX_JUMPS;
Bunny.ACCELERATION = 2000;
Bunny.BASE_MAX_SPEED = 250;

Bunny.MAGNET_TIME = 8000;
Bunny.GODMODE_TIME = 10000;
Bunny.WINGS_TIME = 6000;
Bunny.JETPACK_TIME = 5000;
Bunny.MAX_VELOCITY = new Phaser.Point(400, 20000);
Bunny.GRAVITY = new Phaser.Point(0, 2500);
Bunny.JETPACK_VELOCITY = new Phaser.Point(40000, 20000);

Engine.Bunny = Bunny;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cloud = function (_Engine$Enemy) {
  _inherits(Cloud, _Engine$Enemy);

  function Cloud(game, x, y) {
    _classCallCheck(this, Cloud);

    var _this = _possibleConstructorReturn(this, (Cloud.__proto__ || Object.getPrototypeOf(Cloud)).call(this, game, x, y, 'cloud.png'));

    _this.tint = 0xAAAAAA;

    _this.addAnimation();
    _this.tween = _this.addTween();
    return _this;
  }

  _createClass(Cloud, [{
    key: 'update',
    value: function update() {}
  }, {
    key: 'addTween',
    value: function addTween() {
      var _this2 = this;

      var R = this.game.rnd.between(50, 200);
      var time = this.game.rnd.between(4000, 8000);

      this.data.x = this.x;
      this.data.y = this.y;
      this.data.rotation = 0;

      var tween = this.game.add.tween(this.data).to({
        rotation: Phaser.Math.PI2
      }, time).loop(-1).start();

      tween.onUpdateCallback(function () {
        _this2.x = _this2.data.x + R * Math.cos(_this2.data.rotation);
        _this2.y = _this2.data.y + R * Math.sin(_this2.data.rotation);
      }, this);

      return tween;
    }
  }, {
    key: 'addAnimation',
    value: function addAnimation() {
      var lifespan = 2000;
      var burstInterval = 300;
      var maxParticles = Math.ceil(lifespan / burstInterval);

      this.bolt = this.game.add.emitter(0, 0, maxParticles);

      this.bolt.makeParticles(Engine.spritesheets, ['lighting_yellow.png', 'lighting_blue.png'], maxParticles);
      this.bolt.lifespan = lifespan;
      this.bolt.gravity = 0;
      this.bolt.setAlpha(1, 0, lifespan);
      this.bolt.setScale(0, 1, 0, 1, lifespan);
      this.bolt.setRotation(0, 0);
      this.bolt.setYSpeed(100, 125);
      this.bolt.setXSpeed(-50, 50);

      this.bolt.timer = this.game.time.create();
      this.bolt.timer.loop(burstInterval, this.burst, this);
      this.bolt.timer.start();
    }
  }, {
    key: 'burst',
    value: function burst() {
      this.bolt.emitParticle(this.x + this.width / 2, this.y + this.height, Engine.spritesheet, this.game.rnd.pick(['lighting_yellow.png', 'lighting_blue.png']));

      this.bolt.forEachExists(function (item) {
        item.tint = 0x0000FF;
      }, this);
    }
  }, {
    key: 'reset',
    value: function reset(x, y) {
      _get(Cloud.prototype.__proto__ || Object.getPrototypeOf(Cloud.prototype), 'reset', this).call(this, x, y);

      this.tween = this.addTween();
    }
  }, {
    key: 'kill',
    value: function kill() {
      this.game.tweens.removeFrom(this.data);
      this.game.tweens.removeFrom(this);

      _get(Cloud.prototype.__proto__ || Object.getPrototypeOf(Cloud.prototype), 'kill', this).call(this);
    }
  }]);

  return Cloud;
}(Engine.Enemy);

Engine.Cloud = Cloud;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coin = function (_Phaser$Sprite) {
  _inherits(Coin, _Phaser$Sprite);

  function Coin(game, x, y) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Coin.type.GOLD;

    _classCallCheck(this, Coin);

    var _this = _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, game, x, y, Engine.spritesheet, type + '_1.png'));

    _this.width *= 0.25;
    _this.height *= 0.25;
    _this.anchor.setTo(0.5);

    _this.autoCull = true;

    _this.game.physics.enable([_this]);

    _this.data.type = type;

    switch (type) {
      case Engine.Coin.type.BRONZE:
        _this.data.nominal = 1;
        break;
      case Engine.Coin.type.SILVER:
        _this.data.nominal = 4;
        break;
      case Engine.Coin.type.GOLD:
        _this.data.nominal = 8;
        break;
    }

    _this.createAnimation();
    _this.createSounds();
    return _this;
  }

  _createClass(Coin, [{
    key: 'createSounds',
    value: function createSounds() {
      this.sound = this.game.sound.add('coin', 0.4);
    }
  }, {
    key: 'createAnimation',
    value: function createAnimation() {
      var countCoinsFrame = 7;

      var animationFrames = [];

      for (var i = 1; i < countCoinsFrame; i++) {
        // if (i === 4) continue
        animationFrames.push(this.data.type + '_' + i + '.png');
      }

      this.animations.add('rotate', animationFrames, 15, true);
      this.animations.play('rotate');
    }
  }, {
    key: 'reset',
    value: function reset(x, y, type) {
      _get(Coin.prototype.__proto__ || Object.getPrototypeOf(Coin.prototype), 'reset', this).call(this, x, y);

      this.type = type;
      this.frame = type + '_1.png';
      // this.animations.currentAnim.destroy()

      this.createAnimation();
    }
  }, {
    key: 'take',
    value: function take() {
      this.sound.play();
    }
  }]);

  return Coin;
}(Phaser.Sprite);

Coin.type = {
  GOLD: 'gold',
  SILVER: 'silver',
  BRONZE: 'bronze'
};

Engine.Coin = Coin;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fire = function (_Phaser$Sprite) {
  _inherits(Fire, _Phaser$Sprite);

  function Fire(game) {
    _classCallCheck(this, Fire);

    var _this = _possibleConstructorReturn(this, (Fire.__proto__ || Object.getPrototypeOf(Fire)).call(this, game, 0, 0, Engine.spritesheet, 'flame.png'));

    _this.width /= Engine.scaleRatio;
    _this.height /= Engine.scaleRatio;

    _this.addAnimation();
    return _this;
  }

  _createClass(Fire, [{
    key: 'hide',
    value: function hide() {
      this.fade(0);
    }
  }, {
    key: 'show',
    value: function show() {
      this.fade(1);
    }
  }, {
    key: 'fade',
    value: function fade(alpha) {
      var animation = 100;

      this.game.add.tween(this).to({
        alpha: alpha
      }, animation).start();
    }
  }, {
    key: 'addAnimation',
    value: function addAnimation() {
      var animation = 100;

      this.game.add.tween(this).to({
        width: this.width * 0.75,
        height: this.height * 0.9
      }, animation).to({
        width: this.width * 1.23,
        height: this.height * 1.1
      }, animation).to({
        width: this.width,
        height: this.height
      }, animation).loop(-1).start();
    }
  }]);

  return Fire;
}(Phaser.Sprite);

Engine.Fire = Fire;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlyMan = function (_Engine$Enemy) {
  _inherits(FlyMan, _Engine$Enemy);

  function FlyMan(game, x, y) {
    _classCallCheck(this, FlyMan);

    var _this = _possibleConstructorReturn(this, (FlyMan.__proto__ || Object.getPrototypeOf(FlyMan)).call(this, game, x, y, 'flyMan_fly.png'));

    _this.verticaleTween = _this.addVerticaleMove();
    _this.addEmitter();
    return _this;
  }

  _createClass(FlyMan, [{
    key: 'addEmitter',
    value: function addEmitter() {
      var maxSmoke = 20;
      var burstInterval = 100;

      this.smoke = this.game.add.emitter(0, 0, maxSmoke);
      this.smoke.makeParticles(Engine.spritesheet, ['smoke.png'], maxSmoke);
      this.smoke.gravity = 0;
      this.smoke.setAlpha(1, 0, 2000);
      this.smoke.setScale(0, Engine.scaleRatio, 0, Engine.scaleRatio, 2000);
      this.smoke.forEach(function (item) {
        item.tint = 0x777777;
      });
      this.smoke.lifespan = 2000;
      this.smoke.setXSpeed(1, 15);
      this.smoke.setYSpeed(1, 15);

      this.smoke.timer = this.game.time.create();
      this.smoke.timer.loop(burstInterval, this.burst, this);
      this.smoke.timer.start();
    }
  }, {
    key: 'burst',
    value: function burst() {
      for (var i = 0; i < 1; i++) {
        this.smoke.emitParticle(this.x + this.width / 2, this.y + this.height / 2, Engine.spritesheet, 'smoke.png');
      }
    }
  }, {
    key: 'addVerticaleMove',
    value: function addVerticaleMove() {
      var distance = this.game.rnd.between(50, 125);
      var time = this.game.rnd.between(850, 1250);

      return this.game.add.tween(this).to({
        y: this.y + distance
      }, time).to({
        y: this.y
      }, time).to({
        y: this.y - distance
      }, time).to({
        y: this.y
      }, time).loop().start();
    }
  }, {
    key: 'reset',
    value: function reset(x, y) {
      _get(FlyMan.prototype.__proto__ || Object.getPrototypeOf(FlyMan.prototype), 'reset', this).call(this, x, y);

      this.addVerticaleMove();
    }
  }, {
    key: 'die',
    value: function die() {
      var impulse = 400;

      this.game.tweens.removeFrom(this);
      this.body.angularVelocity = this.game.rnd.between(100, 600);
      this.body.velocity.y = -impulse;
      this.body.gravity.setTo(200, 2000);
    }
  }, {
    key: 'kill',
    value: function kill() {
      this.game.tweens.removeFrom(this);

      _get(FlyMan.prototype.__proto__ || Object.getPrototypeOf(FlyMan.prototype), 'kill', this).call(this);
    }
  }]);

  return FlyMan;
}(Engine.Enemy);

Engine.FlyMan = FlyMan;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ground = function (_Phaser$Sprite) {
  _inherits(Ground, _Phaser$Sprite);

  function Ground(game, x, y) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ground.type.GRASS;
    var small = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var broken = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, Ground);

    var name = Ground.getName(type, small, broken);

    var _this = _possibleConstructorReturn(this, (Ground.__proto__ || Object.getPrototypeOf(Ground)).call(this, game, x, y, Engine.spritesheet, name));

    _this.width *= Engine.scaleRatio;
    _this.height *= Engine.scaleRatio;

    _this.autoCull = true;

    _this.game.physics.enable([_this]);
    _this.body.immovable = true;
    _this.body.checkCollision.down = false;
    _this.body.checkCollision.left = false;

    _this.data.name = name;
    _this.data.type = type;
    _this.data.small = small;
    _this.data.broken = broken;

    _this.addEnviroment();
    return _this;
  }

  _createClass(Ground, [{
    key: 'addEnviroment',
    value: function addEnviroment() {
      var type = this.data.type;

      if (type === Ground.type.GRASS && Phaser.Utils.chanceRoll(5)) this.addBrownGrass();else if (type === Ground.type.GRASS && Phaser.Utils.chanceRoll(15)) this.addGreenGrass();

      if (type === Ground.type.WOOD && Phaser.Utils.chanceRoll(10)) this.addBrownGrass();
      if (type === Ground.type.STONE && Phaser.Utils.chanceRoll(15)) this.addBrownGrass();
      if (type === Ground.type.SAND && Phaser.Utils.chanceRoll(15)) this.addCactus();

      if (type !== Ground.type.SNOW && type !== Ground.type.SAND && Phaser.Utils.chanceRoll(1)) {
        this.addMushroom();
      }
    }
  }, {
    key: 'addMushroom',
    value: function addMushroom() {
      var name = this.game.rnd.pick(['mushroom_brown.png', 'mushroom_red.png']);

      this.addEnviromentObject(name);
    }
  }, {
    key: 'addGreenGrass',
    value: function addGreenGrass() {
      var name = this.game.rnd.pick(['grass1.png', 'grass2.png']);

      this.addEnviromentObject(name);
    }
  }, {
    key: 'addBrownGrass',
    value: function addBrownGrass() {
      var name = this.game.rnd.pick(['grass_brown1.png', 'grass_brown2.png']);

      this.addEnviromentObject(name);
    }
  }, {
    key: 'addCactus',
    value: function addCactus() {
      this.addEnviromentObject('cactus.png');
    }
  }, {
    key: 'addEnviromentObject',
    value: function addEnviromentObject(name) {
      var x = this.game.rnd.between(0, this.width * 1.5);
      var y = 0;

      var env = new Phaser.Sprite(this.game, x, y, Engine.spritesheet, name);
      env.anchor.setTo(0, 1);
      this.addChild(env);
    }
  }, {
    key: 'reset',
    value: function reset(x, y, type, small, broken) {
      _get(Ground.prototype.__proto__ || Object.getPrototypeOf(Ground.prototype), 'reset', this).call(this, x, y);

      var name = Ground.getName(type, small, broken);

      this.frameName = name;

      this.data.name = name;
      this.data.type = type;
      this.data.small = small;
      this.data.broken = broken;

      this.removeChildren();
      this.addEnviroment();
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jumper = function (_Phaser$Sprite) {
  _inherits(Jumper, _Phaser$Sprite);

  function Jumper(game, x, y) {
    _classCallCheck(this, Jumper);

    var _this = _possibleConstructorReturn(this, (Jumper.__proto__ || Object.getPrototypeOf(Jumper)).call(this, game, x, y, Engine.spritesheet, 'spring_in.png'));

    _this.width *= Engine.scaleRatio;
    _this.height *= Engine.scaleRatio;

    _this.anchor.setTo(0, 1);

    _this.game.physics.arcade.enable([_this]);

    _this.autoCull = true;

    _this.addAnimations();
    return _this;
  }

  _createClass(Jumper, [{
    key: 'addAnimations',
    value: function addAnimations() {
      this.animations.add('out', ['spring_out.png']);
      this.animations.add('ready', ['spring.png']);
      this.animations.add('in', ['spring_in.png']);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.data.activated = true;
      this.animations.play('out');
    }
  }, {
    key: 'reset',
    value: function reset(x, y) {
      _get(Jumper.prototype.__proto__ || Object.getPrototypeOf(Jumper.prototype), 'reset', this).call(this, x, y);
      this.data.activated = false;
      this.animations.play('in');
    }
  }]);

  return Jumper;
}(Phaser.Sprite);

Engine.Jumper = Jumper;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MagnetEffect = function (_Phaser$Graphics) {
  _inherits(MagnetEffect, _Phaser$Graphics);

  function MagnetEffect(game) {
    _classCallCheck(this, MagnetEffect);

    var _this = _possibleConstructorReturn(this, (MagnetEffect.__proto__ || Object.getPrototypeOf(MagnetEffect)).call(this, game, 0, 0));

    _this.waves = [];

    _this.waveGenerator = _this.game.time.create();
    _this.waveGenerator.loop(900, _this.addWave, _this);

    _this.alpha = 0;
    return _this;
  }

  _createClass(MagnetEffect, [{
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.clear();

      for (var i = 0; i < this.waves.length; i++) {
        var wave = this.waves[i];

        if (Date.now() - wave.startTime > 2000) {
          this.waves.splice(i, 1);
          continue;
        }

        this.lineStyle(wave.width, 0xff8000, wave.alpha);
        this.drawCircle(0, 0, wave.radius);
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.fade(1);

      if (!this.waveGenerator.paused && !this.waveGenerator.running) {
        this.waveGenerator.start();
      } else {
        this.waveGenerator.resume();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.fade(0);

      this.waveGenerator.pause();
    }
  }, {
    key: "fade",
    value: function fade(alpha) {
      var animationTime = 150;

      this.game.add.tween(this).to({
        alpha: alpha
      }, animationTime).start();
    }
  }, {
    key: "addWave",
    value: function addWave() {
      var wave = {
        radius: 0,
        width: 15,
        alpha: 0.8,
        startTime: Date.now()
      };

      var tween = this.game.add.tween(wave).to({
        width: 1,
        radius: Engine.magnetDistace,
        alpha: 0
      }, 750).start();

      this.waves.push(wave);
    }
  }]);

  return MagnetEffect;
}(Phaser.Graphics);

Engine.MagnetEffect = MagnetEffect;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nominal = function (_Phaser$Text) {
  _inherits(Nominal, _Phaser$Text);

  function Nominal(game, x, y, nominal) {
    _classCallCheck(this, Nominal);

    var _this = _possibleConstructorReturn(this, (Nominal.__proto__ || Object.getPrototypeOf(Nominal)).call(this, game, x, y, '+' + nominal, Nominal.getStyle(nominal)));

    _this.anchor.setTo(0.5);

    _this.autoCull = true;

    _this.addAnimation();
    return _this;
  }

  _createClass(Nominal, [{
    key: 'addAnimation',
    value: function addAnimation() {
      var animationTime = 700;
      var animationDistance = 50;

      this.alpha = 1;

      this.tween = this.game.add.tween(this).to({
        alpha: 0,
        y: this.y - animationDistance
      }, animationTime).start();

      this.tween.onComplete.add(this.kill, this);
    }
  }, {
    key: 'reset',
    value: function reset(x, y, nominal) {
      _get(Nominal.prototype.__proto__ || Object.getPrototypeOf(Nominal.prototype), 'reset', this).call(this, x, y);

      var style = Nominal.getStyle(nominal);

      this.text = '+' + nominal;
      this.fill = style.fill;

      this.addAnimation();
    }
  }], [{
    key: 'getStyle',
    value: function getStyle(nominal) {
      var color = void 0;

      switch (nominal) {
        case 8:
          color = 'orange';
          break;
        case 4:
          color = 'silver';
          break;
        case 1:
          color = '#CD7F32';
          break;
      }

      var style = {
        font: 35 + nominal * 6 + 'px Open Sans',
        fill: color
      };

      return style;
    }
  }]);

  return Nominal;
}(Phaser.Text);

Engine.Nominal = Nominal;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PowerUp = function (_Phaser$Sprite) {
    _inherits(PowerUp, _Phaser$Sprite);

    function PowerUp(game, x, y) {
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : PowerUp.type.MAGNET;

        _classCallCheck(this, PowerUp);

        var _this = _possibleConstructorReturn(this, (PowerUp.__proto__ || Object.getPrototypeOf(PowerUp)).call(this, game, x, y, Engine.spritesheet, type));

        var customRatio = 0.25;

        _this.width *= Engine.scaleRatio + customRatio;
        _this.height *= Engine.scaleRatio + customRatio;

        _this.type = type;

        _this.game.physics.arcade.enable([_this]);

        _this.anchor.setTo(0.5);
        return _this;
    }

    _createClass(PowerUp, [{
        key: 'reset',
        value: function reset(x, y, type) {
            _get(PowerUp.prototype.__proto__ || Object.getPrototypeOf(PowerUp.prototype), 'reset', this).call(this, x, y);

            this.type = type;
            this.frameName = type;
        }
    }]);

    return PowerUp;
}(Phaser.Sprite);

PowerUp.type = {
    MAGNET: 'powerup_bubble.png',
    GOD: 'powerup_bunny.png',
    WINGS: 'powerup_wings.png',
    JETPACK: 'powerup_jetpack.png'
};

Engine.PowerUp = PowerUp;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Phaser$Graphics) {
  _inherits(ProgressBar, _Phaser$Graphics);

  function ProgressBar(game, x, y, text, color) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, game, x, y));

    _this.color = color;

    _this.progress = 1;
    _this.fixedToCamera = true;
    _this.alpha = 0;

    _this.addLabel(text);
    _this.draw(_this.progress);
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'addLabel',
    value: function addLabel(text) {
      var style = {
        fill: Phaser.Color.getWebRGB(this.color),
        font: '21px Open Sans'
      };

      var label = new Phaser.Text(this.game, 0, -30, text, style);

      this.addChild(label);
    }
  }, {
    key: 'draw',
    value: function draw(progress) {
      this.clear();

      var width = ProgressBar.WIDTH;
      var height = 5;

      this.lineStyle(2, this.color, 0.6);
      this.drawRect(0, 0, width, height);

      this.beginFill(this.color);
      this.drawRect(0, 0, progress * width, height);
      this.endFill();
    }
  }, {
    key: 'animate',
    value: function animate(time) {
      this.value = 1;
      this.show();

      this.tween = this.game.add.tween(this).to({
        value: 0
      }, time).start();

      this.tween.onComplete.add(this.hide, this);
    }
  }, {
    key: 'show',
    value: function show() {
      this.animateAlpha(1);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.animateAlpha(0);
    }
  }, {
    key: 'animateAlpha',
    value: function animateAlpha(alpha) {
      var animationTime = 150;

      this.game.add.tween(this).to({
        alpha: alpha
      }, animationTime).start();
    }
  }, {
    key: 'value',
    get: function get() {
      return this.progress;
    },
    set: function set(val) {
      this.progress = val;
      this.draw(this.progress);
    }
  }]);

  return ProgressBar;
}(Phaser.Graphics);

ProgressBar.WIDTH = 500;

Engine.ProgressBar = ProgressBar;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spike = function (_Phaser$Sprite) {
    _inherits(Spike, _Phaser$Sprite);

    function Spike(game, x, y) {
        _classCallCheck(this, Spike);

        var _this = _possibleConstructorReturn(this, (Spike.__proto__ || Object.getPrototypeOf(Spike)).call(this, game, x, y, Engine.spritesheet, 'spikes_top.png'));

        _this.autoCull = true;
        _this.anchor.setTo(0, 1);

        _this.width *= 0.35;
        _this.height *= 0.35;

        _this.tint = 0x777777;
        return _this;
    }

    return Spike;
}(Phaser.Sprite);

Engine.Spike = Spike;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpikeBall = function (_Engine$Enemy) {
  _inherits(SpikeBall, _Engine$Enemy);

  function SpikeBall(game, x, y) {
    _classCallCheck(this, SpikeBall);

    var _this = _possibleConstructorReturn(this, (SpikeBall.__proto__ || Object.getPrototypeOf(SpikeBall)).call(this, game, x, y, 'spikeBall1.png'));

    _this.tint = 0x999999;

    _this.addAnimation();

    _this.tween = _this.addHorizontalTween();
    return _this;
  }

  _createClass(SpikeBall, [{
    key: 'addHorizontalTween',
    value: function addHorizontalTween() {
      var distance = this.game.rnd.between(50, 150);
      var time = this.game.rnd.between(600, 800);

      return this.game.add.tween(this).to({
        x: this.x - distance
      }, time).to({
        x: this.x
      }, time).to({
        x: this.x + distance
      }, time).to({
        x: this.x
      }, time).loop().start();
    }
  }, {
    key: 'addAnimation',
    value: function addAnimation() {
      this.animations.add('rotate', ['spikeBall_2.png', 'spikeBall1.png'], 30, true);

      this.animations.play('rotate');
    }
  }]);

  return SpikeBall;
}(Engine.Enemy);

Engine.SpikeBall = SpikeBall;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpringMan = function (_Engine$Enemy) {
  _inherits(SpringMan, _Engine$Enemy);

  function SpringMan(game, x, y) {
    _classCallCheck(this, SpringMan);

    var _this = _possibleConstructorReturn(this, (SpringMan.__proto__ || Object.getPrototypeOf(SpringMan)).call(this, game, x, y, 'springMan_stand.png'));

    _this.shakeTween = _this.addShake();
    return _this;
  }

  _createClass(SpringMan, [{
    key: 'addShake',
    value: function addShake() {
      var amplitude = 5;
      var time = 15;

      return this.game.add.tween(this).to({
        x: this.x + amplitude
      }, time).to({
        x: this.x
      }, time).to({
        x: this.x - amplitude
      }, time).to({
        x: this.x
      }, time).loop().start();
    }
  }, {
    key: 'reset',
    value: function reset(x, y) {
      _get(SpringMan.prototype.__proto__ || Object.getPrototypeOf(SpringMan.prototype), 'reset', this).call(this, x, y);

      this.addShake();
    }
  }, {
    key: 'kill',
    value: function kill() {
      this.game.tweens.removeFrom(this);

      _get(SpringMan.prototype.__proto__ || Object.getPrototypeOf(SpringMan.prototype), 'kill', this).call(this);
    }
  }]);

  return SpringMan;
}(Engine.Enemy);

Engine.SpringMan = SpringMan;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trail = function (_Phaser$Particles$Arc) {
  _inherits(Trail, _Phaser$Particles$Arc);

  function Trail(game, follow) {
    _classCallCheck(this, Trail);

    var maxParticles = 20;

    var _this = _possibleConstructorReturn(this, (Trail.__proto__ || Object.getPrototypeOf(Trail)).call(this, game, 0, 0, maxParticles));

    _this.makeParticles('particles', 0, maxParticles, true);
    _this.lifespan = 500;
    _this.setAlpha(1, 0, _this.lifespan);
    _this.bounce.setTo(1);

    _this._particlesEmit = 2;
    _this._delayEmit = 50;
    _this._follow = follow;

    _this._timerEmmiting = _this.game.time.create();
    _this._timerEmmiting.loop(_this._delayEmit, _this.emit, _this);
    _this._timerEmmiting.start();
    return _this;
  }

  _createClass(Trail, [{
    key: 'emit',
    value: function emit() {
      for (var i = 0; i < this._particlesEmit; i++) {
        var particleFrame = this.game.rnd.between(0, 4);

        this.emitParticle(this._follow.x, this._follow.y + this._follow.height / 1.1, 'particles', particleFrame);
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wing = function (_Phaser$Sprite) {
  _inherits(Wing, _Phaser$Sprite);

  function Wing(game, name) {
    _classCallCheck(this, Wing);

    var _this = _possibleConstructorReturn(this, (Wing.__proto__ || Object.getPrototypeOf(Wing)).call(this, game, 0, 0, Engine.spritesheet, name));

    _this.width *= Engine.scaleRatio;
    _this.height *= Engine.scaleRatio;

    _this.tint = 0xffdb8a;
    return _this;
  }

  _createClass(Wing, [{
    key: "rotatePositive",
    value: function rotatePositive() {
      var min = Math.PI / 4;
      var max = -Math.PI / 80;

      this.rotate(min, max);
    }
  }, {
    key: "rotateNegative",
    value: function rotateNegative() {
      var min = -Math.PI / 4;
      var max = Math.PI / 80;

      this.rotate(min, max);
    }
  }, {
    key: "rotate",
    value: function rotate(min, max) {
      this.game.add.tween(this).to({
        rotation: min
      }, 200).to({
        rotation: max
      }, 200).loop(-1).start();
    }
  }]);

  return Wing;
}(Phaser.Sprite);

Engine.Wing = Wing;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wings = function (_Phaser$Group) {
  _inherits(Wings, _Phaser$Group);

  function Wings(game, bunny) {
    _classCallCheck(this, Wings);

    var wingsOffset = 35;

    var _this = _possibleConstructorReturn(this, (Wings.__proto__ || Object.getPrototypeOf(Wings)).call(this, game));

    _this.data = {
      visible: false
    };
    _this.alpha = 0;
    _this.bunny = bunny;

    _this.leftWing = new Engine.Wing(_this.game, 'wing_left.png');
    _this.rightWing = new Engine.Wing(_this.game, 'wing_right.png');

    _this.leftWing.x = _this.bunny.width / 2 - wingsOffset;
    _this.rightWing.x = _this.bunny.width / 2 + wingsOffset;
    _this.rightWing.y = _this.leftWing.y = _this.bunny.height / 2;

    _this.leftWing.anchor.setTo(1, 0.611);
    _this.rightWing.anchor.setTo(0, 0.611);

    _this.add(_this.leftWing);
    _this.add(_this.rightWing);

    _this.leftWing.rotateNegative();
    _this.rightWing.rotatePositive();

    _this.bunny.bringToTop();
    return _this;
  }

  _createClass(Wings, [{
    key: 'update',
    value: function update() {
      if (!this.data.visible) return;

      var offsetX = 7;

      this.x = this.bunny.x + offsetX;
      this.y = this.bunny.y;
    }
  }, {
    key: 'show',
    value: function show() {
      this.fade(1);

      this.data.visible = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.fade(0);

      this.data.visible = false;
    }
  }, {
    key: 'fade',
    value: function fade(alpha) {
      var time = 100;

      this.game.add.tween(this).to({
        alpha: alpha
      }, time).start();
    }
  }]);

  return Wings;
}(Phaser.Group);

Engine.Wings = Wings;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoinCounter = function (_Phaser$Text) {
    _inherits(CoinCounter, _Phaser$Text);

    function CoinCounter(game, x, y) {
        _classCallCheck(this, CoinCounter);

        var style = {
            fill: '#00B8D4', // 2196F3
            font: '25px Open Sans'
        };

        var _this = _possibleConstructorReturn(this, (CoinCounter.__proto__ || Object.getPrototypeOf(CoinCounter)).call(this, game, x, y, '0', style));

        _this.fixedToCamera = true;
        _this.score = Engine.Service.get('Score');
        _this.score.updateCoins.add(_this.updateCoinsCount, _this);

        _this.createIcon();
        return _this;
    }

    _createClass(CoinCounter, [{
        key: 'createIcon',
        value: function createIcon() {
            var x = this.width * 2;
            var y = 1;

            var coin = this.game.make.sprite(x, y, Engine.spritesheet, 'coin_gold.png');

            coin.anchor.setTo(1, 0);

            coin.width = this.fontSize;
            coin.height = this.fontSize;

            this.addChild(coin);

            var offsetX = this.cameraOffset.x - coin.width;
            var offsetY = this.cameraOffset.y;

            this.cameraOffset.setTo(offsetX, offsetY);
        }
    }, {
        key: 'updateCoinsCount',
        value: function updateCoinsCount() {
            this.text = '' + this.score.coins;
        }
    }]);

    return CoinCounter;
}(Phaser.Text);

Engine.CoinCounter = CoinCounter;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Distance = function (_Phaser$Text) {
  _inherits(Distance, _Phaser$Text);

  function Distance(game, x, y) {
    _classCallCheck(this, Distance);

    var style = {
      fill: '#00BCD4',
      font: '43px Open Sans'
    };

    var _this = _possibleConstructorReturn(this, (Distance.__proto__ || Object.getPrototypeOf(Distance)).call(this, game, x, y, '0m', style));

    _this.fixedToCamera = true;
    _this.score = Engine.Service.get('Score');
    _this.score.onUpdate.add(_this.updateDistance, _this);
    return _this;
  }

  _createClass(Distance, [{
    key: 'updateDistance',
    value: function updateDistance() {
      this.text = this.score.currentDistance + 'm';
    }
  }]);

  return Distance;
}(Phaser.Text);

Engine.Distance = Distance;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoseBox = function (_Phaser$Group) {
  _inherits(LoseBox, _Phaser$Group);

  function LoseBox(game) {
    _classCallCheck(this, LoseBox);

    return _possibleConstructorReturn(this, (LoseBox.__proto__ || Object.getPrototypeOf(LoseBox)).call(this, game));
  }

  return LoseBox;
}(Phaser.Group);

Engine.LoseBox = LoseBox;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Phaser$Text) {
  _inherits(Message, _Phaser$Text);

  function Message(game, x, y, text) {
    _classCallCheck(this, Message);

    var style = {
      fill: 'white',
      font: '75px Open Sans',
      align: 'center'
    };

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, game, x, y, text, style));

    _this.setShadow(0, 2, 'rgba(33, 33, 33, 0.6)', 4);

    _this.alpha = 0;
    _this.fixedToCamera = true;
    return _this;
  }

  _createClass(Message, [{
    key: 'show',
    value: function show(animationTime) {
      this.animate(1, animationTime);
    }
  }, {
    key: 'hide',
    value: function hide(animationTime) {
      this.animate(0, animationTime);
    }
  }, {
    key: 'animate',
    value: function animate(alpha) {
      var animationTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      var tween = this.game.add.tween(this).to({ alpha: alpha }, animationTime);

      if (this.tween && this.tween.isRunning) {
        this.tween.chain(tween);
      } else {
        this.tween = tween;
        this.tween.start();
      }
    }
  }]);

  return Message;
}(Phaser.Text);

Engine.Message = Message;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$State) {
  _inherits(Game, _Phaser$State);

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

      this.load.audio('lose', ['assets/sounds/lose.mp3', 'assets/sounds/lose.ogg']);
      this.load.audio('coin', ['assets/sounds/coin.mp3', 'assets/sounds/coin.ogg']);
      this.load.audio('jump', ['assets/sounds/jump.mp3', 'assets/sounds/jump.ogg']);

      this.load.spritesheet('particles', 'assets/sprites/particles.png', 8, 8);
    }
  }, {
    key: 'init',
    value: function init() {
      this.distanceBetweenGrounds = 450;

      this.score = Engine.Service.get('Score');
      this.score.coins = 0;

      this.paddingLeftCamera = 200;

      window.game = this;
    }
  }, {
    key: 'create',
    value: function create() {
      this.profiler = Engine.Service.get('Profiler');

      var worldHeight = 550 * 5;
      this.stage.backgroundColor = 0xADE6FF; // 0x555555//
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.world.setBounds(0, -(worldHeight - this.game.height), Number.MAX_VALUE, worldHeight);

      this.createBackground();
      this.createBunny();
      this.createSpikes();
      this.createGrounds();
      this.createJumpers();
      this.createCoins();
      this.createEnemies();
      this.createPowerUps();
      this.createProgressBars();

      this.bunny.addTrail();

      this.configurateCamera();
      this.addControl();
      this.createDistanceLabel();
      this.createCoinsLabel();
      this.createLoseLabel();
      this.createStartLabel();
      this.createBestDistance();
      this.createNominals();

      this.drawBorders();

      // TEMP CODE

      // this.game.time.slowMotion = 20

      // this.powerUps.add(new Engine.PowerUp(
      //   this.game,
      //   this.startGround.x + 150,
      //   this.startGround.y - 50,
      //   Engine.PowerUp.type.JETPACK
      // ))

      this.powerUps.add(new Engine.PowerUp(this.game, this.startGround.x + 1200, this.startGround.y - 50, Engine.PowerUp.type.WINGS));

      // END TEMP CODE

      // this.createDatGui()
    }
  }, {
    key: 'drawBorders',
    value: function drawBorders() {
      var width = 20;
      var color = 0x57daf6;

      var graphics = this.add.graphics(0, 0);
      graphics.lineStyle(width, color);
      graphics.drawRect(0, 0, this.game.width, this.game.height);

      graphics.fixedToCamera = true;
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.bunny.data.isDead) {
        this.physics.arcade.collide(this.bunny.data.blood, this.grounds);
        this.physics.arcade.collide(this.bunny.data.blood, this.enemies);

        return;
      }

      this.physics.arcade.overlap(this.bunny, this.coins, this.takeCoin, null, this);

      if (!this.bunny.data.jetPack) {
        this.physics.arcade.collide(this.bunny, this.grounds);
        this.physics.arcade.overlap(this.bunny, this.enemies, this.collideEnemies, null, this);
        this.physics.arcade.overlap(this.bunny, this.jumpers, this.overlapJumper, null, this);
        this.physics.arcade.overlap(this.bunny, this.powerUps, this.takePowerUp, null, this);
      }
      this.updateDie();
      this.updateMagnet();

      // TODO: Need incapsulation
      this.score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE);

      this.bottomSpikes.x = this.bunny.x - this.paddingLeftCamera;
    }
  }, {
    key: 'render',
    value: function render() {
      // this.game.debug.body(this.cloud, 'rgba(20, 0, 255, 0.35)')
      // this.debugCountObject()
    }
  }, {
    key: 'createProgressBars',
    value: function createProgressBars() {
      var paddingTop = 50;
      var margin = 50;

      this.progressJumps = new Engine.ProgressBar(this.game, this.game.width / 2 - Engine.ProgressBar.WIDTH / 2, paddingTop, "Infinity Jumps", 0x8661ff);

      this.progressMagnet = new Engine.ProgressBar(this.game, this.game.width / 2 - Engine.ProgressBar.WIDTH / 2, this.progressJumps.y + margin, "Coin Magnet", 0xff8000);

      this.progressUntouch = new Engine.ProgressBar(this.game, this.game.width / 2 - Engine.ProgressBar.WIDTH / 2, this.progressMagnet.y + margin, "Untouchability", 0xFF0000);

      this.add.existing(this.progressJumps);
      this.add.existing(this.progressMagnet);
      this.add.existing(this.progressUntouch);
    }
  }, {
    key: 'createDatGui',
    value: function createDatGui() {
      var gui = new dat.GUI();

      var dg = document.getElementsByClassName('dg ac')[0];
      dg.style.right = this.game.width / 2 - 245 + 'px';

      gui.addColor(this.progress, 'color');
    }
  }, {
    key: 'updateMagnet',
    value: function updateMagnet() {
      var _this2 = this;

      if (!this.bunny.data.magnet) return;

      var speed = 50000;
      var minSpeed = 600;
      var maxSpeed = 1000;

      // TODO: Need optimization
      this.coins.forEach(function (coin) {
        var distance = _this2.game.physics.arcade.distanceBetween(_this2.bunny, coin);
        if (distance < Engine.magnetDistace) {
          _this2.game.physics.arcade.accelerateToObject(coin, _this2.bunny, speed, _this2.rnd.between(minSpeed, maxSpeed), _this2.rnd.between(minSpeed, maxSpeed));
        }
      });
    }
  }, {
    key: 'takePowerUp',
    value: function takePowerUp(bunny, powerUp) {
      if (powerUp.type === Engine.PowerUp.type.MAGNET) {
        this.progressMagnet.animate(Engine.Bunny.MAGNET_TIME);
        this.bunny.activateMagnet();
      } else if (powerUp.type === Engine.PowerUp.type.GOD) {
        this.progressUntouch.animate(Engine.Bunny.GODMODE_TIME);
        this.bunny.activateGod();
      } else if (powerUp.type === Engine.PowerUp.type.WINGS) {
        this.progressJumps.animate(Engine.Bunny.WINGS_TIME);
        this.bunny.activateWings();
      } else if (powerUp.type === Engine.PowerUp.type.JETPACK) {
        this.bunny.activateJetPack();
      }
      powerUp.kill();
    }
  }, {
    key: 'takeCoin',
    value: function takeCoin(bunny, coin) {
      var x = this.bunny.x + this.bunny.width / 2;
      var y = this.bunny.y;

      this.nominals.generate(x, y, coin.data.nominal);

      this.score.coins += coin.data.nominal;

      coin.take();
      coin.kill();
    }
  }, {
    key: 'debugCountObject',
    value: function debugCountObject() {
      var summ = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.world.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          summ += item.children.length + 1;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.game.debug.text('Objects in memory: ' + summ, 90, 15);
      this.game.debug.text('Rendered objects: ' + this.camera.totalInView, 90, 35);
      this.game.debug.text('Coins objects: ' + this.coins.length, 90, 55);
      this.game.debug.text('Enemies objects: ' + this.enemies.length, 90, 75);
      this.game.debug.text('Grounds objects: ' + this.grounds.length, 90, 95);
      this.game.debug.text('Nominals objects: ' + this.nominals.length, 90, 115);
      this.game.debug.text('Jumpers objects: ' + this.jumpers.length, 90, 135);
      this.game.debug.text('Blood objects: ' + this.bunny.data.blood.length, 90, 155);
      this.game.debug.text('Trail objects: ' + this.bunny.data.trail.length, 90, 175);
      this.game.debug.text('Spikes objects: ' + this.bottomSpikes.length, 90, 195);
    }
  }, {
    key: 'updateDie',
    value: function updateDie() {
      if (this.bunny.y > this.game.height - 100 && !this.bunny.data.isDead) {
        this.bunny.die();
      }
    }
  }, {
    key: 'createJumpers',
    value: function createJumpers() {
      this.jumpers = new Engine.Component.JumperGenerator(this.game, this.bunny, this.grounds);
    }
  }, {
    key: 'createEnemies',
    value: function createEnemies() {
      this.enemies = new Engine.Component.EnemyGenerator(this.game, this.bunny, this.grounds);
    }
  }, {
    key: 'collideEnemies',
    value: function collideEnemies(bunny, enemy) {
      if (this.bunny.data.isDead) return;

      enemy.die();

      if (this.bunny.data.god) return;

      this.bunny.die();
    }
  }, {
    key: 'overlapJumper',
    value: function overlapJumper(bunny, jumper) {
      if (jumper.data.activated) return;
      if (bunny.data.jetPack) return;

      jumper.activate();
      bunny.body.velocity.setTo(9000, -2000);
    }
  }, {
    key: 'createSpikes',
    value: function createSpikes() {
      var PROTOTYPE = new Engine.Spike(this.game, 0, 0);
      var COUNT = (this.game.width + this.bunny.x) / PROTOTYPE.width;

      this.bottomSpikes = this.game.add.group();

      for (var i = 0; i < COUNT; i++) {
        var spike = new Engine.Spike(this.game, i * PROTOTYPE.width, this.game.height);

        this.bottomSpikes.add(spike);
      }
    }
  }, {
    key: 'createNominals',
    value: function createNominals() {
      this.nominals = new Engine.Component.NominalGenerator(this.game, this.bunny);
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

      // TODO: Need incapsulation
      if (this.score.bestDistance < this.score.currentDistance) {
        this.score.bestDistance = this.score.currentDistance;
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this.startLabel.hide();
      this.bunny.run();
    }
  }, {
    key: 'createPowerUps',
    value: function createPowerUps() {
      this.powerUps = new Engine.Component.PowerUpGenerator(this.game, this.bunny, this.grounds);
    }
  }, {
    key: 'createCoins',
    value: function createCoins() {
      this.coins = new Engine.Component.CoinGenerator(this.game, this.bunny, this.grounds);
    }
  }, {
    key: 'createLoseLabel',
    value: function createLoseLabel() {
      this.loseLabel = new Engine.Message(this.game, this.game.width / 2, this.game.height / 2, 'You lose :-(\r\nPress spacebar');

      this.loseLabel.anchor.setTo(0.5);
      this.add.existing(this.loseLabel);
    }
  }, {
    key: 'createStartLabel',
    value: function createStartLabel() {
      this.startLabel = new Engine.Message(this.game, this.game.width / 2, this.game.height / 2, 'Press spacebar\r\nto start');

      this.startLabel.anchor.setTo(0.5);
      this.startLabel.show();
      this.add.existing(this.startLabel);
    }
  }, {
    key: 'createDistanceLabel',
    value: function createDistanceLabel() {
      var marginLeft = 15;
      var marginTop = 10;

      this.distanceLabel = new Engine.Distance(this.game, this.game.width - marginLeft, marginTop);
      this.distanceLabel.anchor.setTo(1, 0);
      this.add.existing(this.distanceLabel);
    }
  }, {
    key: 'createCoinsLabel',
    value: function createCoinsLabel() {
      var padding = 20;
      var marginTop = this.distanceLabel.y + this.distanceLabel.height / 2 + padding;
      var marginLeft = 15;

      this.coinsLabel = new Engine.CoinCounter(this.game, this.game.width - marginLeft, marginTop);
      this.coinsLabel.anchor.setTo(1, 0);
      this.add.existing(this.coinsLabel);
    }
  }, {
    key: 'addControl',
    value: function addControl() {
      var _this3 = this;

      var hotkey2 = this.input.keyboard.addKey(Phaser.KeyCode.Q);
      hotkey2.onDown.add(function () {
        _this3.bunny.playDieAnimation();
      }, this);

      var hotkey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
      hotkey.onDown.add(this.spacebarDown, this);

      var mouse = this.input.mouse;
      mouse.mouseDownCallback = function () {
        _this3.spacebarDown();
      };
    }
  }, {
    key: 'spacebarDown',
    value: function spacebarDown() {
      if (this.bunny.data.isDead) {
        this.state.restart(true, false);
      }
      if (this.bunny.data.running) {
        this.bunny.jump();
      } else {
        this.start();
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

      this.startGround = new Engine.Ground(this.game, x, y, type, small, broken);

      this.grounds.add(this.startGround);
    }
  }, {
    key: 'createBunny',
    value: function createBunny() {
      window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny2');
      this.bunny.onDied.add(this.lose, this);
      this.add.existing(this.bunny);
    }
  }, {
    key: 'createGrounds',
    value: function createGrounds() {
      this.grounds = new Engine.Component.GroundsGenerator(this.game, this.bunny, this.distanceBetweenGrounds);
      this.createStartGround();
      this.createFirstGrounds();
    }
  }, {
    key: 'createFirstGrounds',
    value: function createFirstGrounds() {
      var marginTop = 100;
      var style = {
        fill: 'rgb(255, 255, 255)',
        font: '100px Open Sans'
      };

      for (var i = 1; i < this.game.width / this.distanceBetweenGrounds; i++) {
        var ground = new Engine.Ground(this.game, this.distanceBetweenGrounds * i, 400);
        this.grounds.add(ground);
      }

      var label = this.add.text(this.game.width / 2, marginTop, 'Best ' + this.score.bestDistance + 'm', style);
      label.anchor.setTo(0.5);

      this.bunny.bringToTop();
    }
  }, {
    key: 'configurateCamera',
    value: function configurateCamera() {
      var smoothMove = 0.15;
      var deadZoneHeight = 50;

      this.camera.roundPx = false;
      this.camera.follow(this.bunny, Phaser.Camera.FOLLOW_LOCKON, 1, smoothMove);
      this.camera.deadzone = new Phaser.Rectangle(this.paddingLeftCamera, this.game.height / 2 - this.bunny.height * 1.5, 1, deadZoneHeight);
    }
  }, {
    key: 'createBackground',
    value: function createBackground() {
      this.backgrounds = this.add.group();

      this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer2', -0.05));
      this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer3', -0.1));
      this.backgrounds.add(new Engine.Background(this.game, 0, 0, 'layer4', -0.25));
    }
  }]);

  return Game;
}(Phaser.State);

Engine.Game = Game;
'use strict';

Engine.game = new Phaser.Game(Engine.minWidth * 2, Engine.minHeight * 2, Phaser.AUTO);

window.onresize = function () {
  Engine.game.scale.setGameSize(window.innerWidth, window.innerHeight);
};

Engine.game.state.add('Boot', Engine.Boot);
Engine.game.state.add('Game', Engine.Game);
Engine.game.state.add('Menu', Engine.Menu);
Engine.game.state.add('Shop', Engine.Shop);
Engine.game.state.add('Settings', Engine.Settings);
Engine.game.state.add('Loader', Engine.Loader);

Engine.game.state.start('Boot');

CloudAPI.init({
  'id': 291,
  'splash': false
});