'use strict';

var Engine = {
  minWidth: 640,
  minHeight: 320,

  maxWidth: window.innerWidth,
  maxHeight: window.innerHeight,

  spritesheet: 'jumper',
  scaleRatio: 0.35
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyJdLCJuYW1lcyI6WyJFbmdpbmUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heEhlaWdodCIsImlubmVySGVpZ2h0Iiwic3ByaXRlc2hlZXQiLCJzY2FsZVJhdGlvIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVM7QUFDWEMsWUFBVSxHQURDO0FBRVhDLGFBQVcsR0FGQTs7QUFJWEMsWUFBVUMsT0FBT0MsVUFKTjtBQUtYQyxhQUFXRixPQUFPRyxXQUxQOztBQU9YQyxlQUFhLFFBUEY7QUFRWEMsY0FBWTtBQVJELENBQWIiLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEVuZ2luZSA9IHtcclxuICBtaW5XaWR0aDogNjQwLFxyXG4gIG1pbkhlaWdodDogMzIwLFxyXG5cclxuICBtYXhXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblxyXG4gIHNwcml0ZXNoZWV0OiAnanVtcGVyJyxcclxuICBzY2FsZVJhdGlvOiAwLjM1XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLmpzIl0sIm5hbWVzIjpbIlNjb3JlIiwiX2Jlc3REaXN0YW5jZSIsIl9jdXJyZW50RGlzdGFuY2UiLCJfY29pbnMiLCJsb2FkIiwib25VcGRhdGUiLCJQaGFzZXIiLCJTaWduYWwiLCJ1cGRhdGVDb2lucyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInRvU3RyaW5nIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ2YWwiLCJkaXNwYXRjaCIsInNhdmUiLCJNVUxUSVBFUl9ESVNUQU5DRSIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkOztBQUVBLFNBQUtDLElBQUw7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQUlDLE9BQU9DLE1BQVgsRUFBaEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQUlGLE9BQU9DLE1BQVgsRUFBbkI7QUFDRDs7OzsyQkFFTTtBQUNMRSxhQUFPQyxZQUFQLENBQW9CLGNBQXBCLElBQXNDLEtBQUtULGFBQUwsQ0FBbUJVLFFBQW5CLEVBQXRDO0FBQ0Q7OzsyQkFFTTtBQUNMLFdBQUtWLGFBQUwsR0FBcUJXLE9BQU9DLFFBQVAsQ0FBZ0JKLE9BQU9DLFlBQVAsQ0FBb0IsY0FBcEIsQ0FBaEIsS0FBd0QsQ0FBN0U7QUFDRDs7O3NCQUVTSSxHLEVBQUs7QUFDYixXQUFLWCxNQUFMLEdBQWNXLEdBQWQ7O0FBRUEsV0FBS04sV0FBTCxDQUFpQk8sUUFBakI7O0FBRUEsYUFBTyxLQUFLWixNQUFaO0FBQ0QsSzt3QkFDVztBQUFFLGFBQU8sS0FBS0EsTUFBWjtBQUFvQjs7O3NCQUVqQlcsRyxFQUFLO0FBQ3BCLFdBQUtiLGFBQUwsR0FBcUJhLEdBQXJCO0FBQ0EsV0FBS1QsUUFBTCxDQUFjVSxRQUFkO0FBQ0EsV0FBS0MsSUFBTDs7QUFFQSxhQUFPLEtBQUtmLGFBQVo7QUFDRCxLO3dCQUNrQjtBQUFFLGFBQU8sS0FBS0EsYUFBWjtBQUEyQjs7O3NCQUU1QmEsRyxFQUFLO0FBQ3ZCLFdBQUtaLGdCQUFMLEdBQXdCWSxHQUF4QjtBQUNBLFdBQUtULFFBQUwsQ0FBY1UsUUFBZDs7QUFFQSxhQUFPLEtBQUtiLGdCQUFaO0FBQ0QsSzt3QkFDcUI7QUFBRSxhQUFPLEtBQUtBLGdCQUFaO0FBQThCOzs7Ozs7QUFHeERGLE1BQU1pQixpQkFBTixHQUEwQixHQUExQjs7QUFFQUMsT0FBT2xCLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJzY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNjb3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2Jlc3REaXN0YW5jZSA9IDBcclxuICAgIHRoaXMuX2N1cnJlbnREaXN0YW5jZSA9IDBcclxuICAgIHRoaXMuX2NvaW5zID0gMFxyXG5cclxuICAgIHRoaXMubG9hZCgpXHJcbiAgICB0aGlzLm9uVXBkYXRlID0gbmV3IFBoYXNlci5TaWduYWwoKVxyXG4gICAgdGhpcy51cGRhdGVDb2lucyA9IG5ldyBQaGFzZXIuU2lnbmFsKClcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlWydiZXN0RGlzdGFuY2UnXSA9IHRoaXMuX2Jlc3REaXN0YW5jZS50b1N0cmluZygpXHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgdGhpcy5fYmVzdERpc3RhbmNlID0gTnVtYmVyLnBhcnNlSW50KHdpbmRvdy5sb2NhbFN0b3JhZ2VbJ2Jlc3REaXN0YW5jZSddKSB8fCAwXHJcbiAgfVxyXG5cclxuICBzZXQgY29pbnModmFsKSB7XHJcbiAgICB0aGlzLl9jb2lucyA9IHZhbFxyXG5cclxuICAgIHRoaXMudXBkYXRlQ29pbnMuZGlzcGF0Y2goKVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9jb2luc1xyXG4gIH1cclxuICBnZXQgY29pbnMoKSB7IHJldHVybiB0aGlzLl9jb2lucyB9XHJcblxyXG4gIHNldCBiZXN0RGlzdGFuY2UodmFsKSB7XHJcbiAgICB0aGlzLl9iZXN0RGlzdGFuY2UgPSB2YWxcclxuICAgIHRoaXMub25VcGRhdGUuZGlzcGF0Y2goKVxyXG4gICAgdGhpcy5zYXZlKClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYmVzdERpc3RhbmNlXHJcbiAgfVxyXG4gIGdldCBiZXN0RGlzdGFuY2UoKSB7IHJldHVybiB0aGlzLl9iZXN0RGlzdGFuY2UgfVxyXG5cclxuICBzZXQgY3VycmVudERpc3RhbmNlKHZhbCkge1xyXG4gICAgdGhpcy5fY3VycmVudERpc3RhbmNlID0gdmFsXHJcbiAgICB0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudERpc3RhbmNlXHJcbiAgfVxyXG4gIGdldCBjdXJyZW50RGlzdGFuY2UoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50RGlzdGFuY2UgfVxyXG59XHJcblxyXG5TY29yZS5NVUxUSVBFUl9ESVNUQU5DRSA9IDE1MFxyXG5cclxuRW5naW5lLlNjb3JlID0gU2NvcmVcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
  "Score": new Engine.Score()
};

Engine.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuanMiXSwibmFtZXMiOlsiU2VydmljZSIsIm5hbWUiLCJsaXN0IiwiRW5naW5lIiwiU2NvcmUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxPOzs7Ozs7O3dCQUNPQyxJLEVBQU07QUFDZixhQUFPRCxRQUFRRSxJQUFSLENBQWFELElBQWIsQ0FBUDtBQUNEOzs7Ozs7QUFHSEQsUUFBUUUsSUFBUixHQUFlO0FBQ2IsV0FBUyxJQUFJQyxPQUFPQyxLQUFYO0FBREksQ0FBZjs7QUFJQUQsT0FBT0gsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlcnZpY2Uge1xyXG4gIHN0YXRpYyBnZXQobmFtZSkge1xyXG4gICAgcmV0dXJuIFNlcnZpY2UubGlzdFtuYW1lXVxyXG4gIH1cclxufVxyXG5cclxuU2VydmljZS5saXN0ID0ge1xyXG4gIFwiU2NvcmVcIjogbmV3IEVuZ2luZS5TY29yZSgpXHJcbn1cclxuXHJcbkVuZ2luZS5TZXJ2aWNlID0gU2VydmljZVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QuanMiXSwibmFtZXMiOlsiQm9vdCIsImdhbWUiLCJzdGFnZSIsImRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlIiwic2NhbGUiLCJwYWdlQWxpZ25Ib3Jpem9udGFsbHkiLCJwYWdlQWxpZ25WZXJ0aWNhbGx5Iiwic3RhdGUiLCJzdGFydCIsIlBoYXNlciIsIlN0YXRlIiwiRW5naW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs4QkFFUyxDQUNUOzs7NkJBRVE7QUFDUCxXQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLHVCQUFoQixHQUEwQyxJQUExQztBQUNBLFdBQUtDLEtBQUwsQ0FBV0MscUJBQVgsR0FBbUMsSUFBbkM7QUFDQSxXQUFLRCxLQUFMLENBQVdFLG1CQUFYLEdBQWlDLElBQWpDOztBQUVBLFdBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixRQUFqQjtBQUNEOzs7O0VBZGdCQyxPQUFPQyxLOztBQWlCMUJDLE9BQU9YLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0xvYWRlcicpO1xyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkJvb3QgPSBCb290O1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJzdGF0ZSIsInN0YXJ0Iiwic3R5bGUiLCJmb250IiwiZmlsbCIsInByb2dyZXNzTGFiZWwiLCJhZGQiLCJ0ZXh0IiwiZ2FtZSIsIndvcmxkIiwiY2VudGVyWCIsImNlbnRlclkiLCJhbmNob3IiLCJzZXRUbyIsInByb2dyZXNzIiwiY2FjaGVLZXkiLCJzdWNjZXNzIiwidG90YWxMb2FkZWQiLCJ0b3RhbEZpbGVzIiwiUGhhc2VyIiwiU3RhdGUiLCJFbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0osb0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzhCQUVTLENBRVQ7Ozs2QkFFUTtBQUNQLFdBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixNQUFqQjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQUlDLFFBQVE7QUFDVkMsY0FBTSxnQkFESTtBQUVWQyxjQUFNO0FBRkksT0FBWjs7QUFLQSxXQUFLQyxhQUFMLEdBQXFCLEtBQUtDLEdBQUwsQ0FBU0MsSUFBVCxDQUFjLEtBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsT0FBOUIsRUFBdUMsS0FBS0YsSUFBTCxDQUFVQyxLQUFWLENBQWdCRSxPQUF2RCxFQUFnRSxtQkFBaEUsRUFBcUZULEtBQXJGLENBQXJCO0FBQ0EsV0FBS0csYUFBTCxDQUFtQk8sTUFBbkIsQ0FBMEJDLEtBQTFCLENBQWdDLEdBQWhDO0FBQ0Q7OztvQ0FFZUMsUSxFQUFVQyxRLEVBQVVDLE8sRUFBU0MsVyxFQUFhQyxVLEVBQVk7QUFDcEUsV0FBS2IsYUFBTCxDQUFtQkUsSUFBbkIsZ0JBQXFDTyxRQUFyQyxXQUFtREcsV0FBbkQsU0FBa0VDLFVBQWxFO0FBQ0Q7Ozs7RUF6QmtCQyxPQUFPQyxLOztBQTRCNUJDLE9BQU90QixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnR2FtZScpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvZ3Jlc3NMYWJlbCgpIHtcclxuICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgZm9udDogJzQxcHggT3BlbiBTYW5zJyxcclxuICAgICAgZmlsbDogJyMwMEU2NzYnLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCAnTG9hZGluZzogMCUgKDAvMCknLCBzdHlsZSk7XHJcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwuYW5jaG9yLnNldFRvKDAuNSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoUHJvZ3Jlc3MocHJvZ3Jlc3MsIGNhY2hlS2V5LCBzdWNjZXNzLCB0b3RhbExvYWRlZCwgdG90YWxGaWxlcykge1xyXG4gICAgdGhpcy5wcm9ncmVzc0xhYmVsLnRleHQgPSBgTG9hZGluZyAke3Byb2dyZXNzfSUgKCR7dG90YWxMb2FkZWR9LyR7dG90YWxGaWxlc30pYDtcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Mb2FkZXIgPSBMb2FkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJjaGVja0RpZSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIml0ZW0iLCJpbkNhbWVyYSIsImFsaXZlIiwieCIsImNhbWVyYSIsImRlYWR6b25lIiwia2lsbCIsIlBoYXNlciIsIkdyb3VwIiwiRW5naW5lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsc0hBQ2pCRCxJQURpQjs7QUFHdkIsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBSHVCO0FBSXhCOzs7OzRCQUVPLENBRVA7Ozs2QkFFUTtBQUNQOztBQUVBLFdBQUtDLFFBQUw7QUFDRDs7OytCQUVVLENBRVY7OzsyQkFFTSxDQUVOOzs7K0JBRVU7QUFBQTs7QUFDVCxXQUFLQyxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFlBQ0ksQ0FBQ0EsS0FBS0MsUUFBTixJQUNDRCxLQUFLRSxLQUROLElBRUNGLEtBQUtHLENBQUwsR0FBUyxPQUFLUCxLQUFMLENBQVdPLENBQVgsR0FBZSxPQUFLUixJQUFMLENBQVVTLE1BQVYsQ0FBaUJDLFFBQWpCLENBQTBCRixDQUh2RCxFQUlFO0FBQ0FILGVBQUtNLElBQUw7QUFDRDtBQUNGLE9BUkQ7QUFTRDs7OztFQW5DcUJDLE9BQU9DLEs7O0FBc0MvQkMsT0FBT0MsU0FBUCxHQUFtQixFQUFuQjtBQUNBRCxPQUFPQyxTQUFQLENBQWlCaEIsU0FBakIsR0FBNkJBLFNBQTdCIiwiZmlsZSI6ImdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdlbmVyYXRvciBleHRlbmRzIFBoYXNlci5Hcm91cCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgYnVubnkpIHtcclxuICAgIHN1cGVyKGdhbWUpXHJcblxyXG4gICAgdGhpcy5idW5ueSA9IGJ1bm55XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKVxyXG5cclxuICAgIHRoaXMuY2hlY2tEaWUoKVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGUoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjaGVja0RpZSgpIHtcclxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgICAhaXRlbS5pbkNhbWVyYVxyXG4gICAgICAgICYmIGl0ZW0uYWxpdmVcclxuICAgICAgICAmJiBpdGVtLnggPCB0aGlzLmJ1bm55LnggLSB0aGlzLmdhbWUuY2FtZXJhLmRlYWR6b25lLnhcclxuICAgICAgKSB7XHJcbiAgICAgICAgaXRlbS5raWxsKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQgPSB7fVxyXG5FbmdpbmUuQ29tcG9uZW50LkdlbmVyYXRvciA9IEdlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomSpikeGenerator = function (_Engine$Component$Gen) {
  _inherits(BottomSpikeGenerator, _Engine$Component$Gen);

  function BottomSpikeGenerator(game, bunny, prototype) {
    _classCallCheck(this, BottomSpikeGenerator);

    var _this = _possibleConstructorReturn(this, (BottomSpikeGenerator.__proto__ || Object.getPrototypeOf(BottomSpikeGenerator)).call(this, game, bunny));

    _this.prototype = prototype;
    _this.currentStep = -1;
    _this.lastX = 0;
    return _this;
  }

  _createClass(BottomSpikeGenerator, [{
    key: "update",
    value: function update() {
      _get(BottomSpikeGenerator.prototype.__proto__ || Object.getPrototypeOf(BottomSpikeGenerator.prototype), "update", this).call(this);

      var step = Math.floor(this.bunny.x / this.prototype.width);
      var margin = this.game.width;

      if (step !== this.currentStep) {
        this.currentStep = step;
        this.generate(margin);
      }
    }
  }, {
    key: "generate",
    value: function generate(margin) {
      _get(BottomSpikeGenerator.prototype.__proto__ || Object.getPrototypeOf(BottomSpikeGenerator.prototype), "generate", this).call(this);

      var y = this.game.height;
      var x = this.lastX + this.prototype.width;

      var spike = this.getFirstDead();

      if (spike == null) {
        spike = new Engine.Spike(this.game, x, y);
        this.add(spike);
      } else {
        spike.reset(x, y);
      }

      this.lastX = x;
    }
  }, {
    key: "add",
    value: function add(spike) {
      _get(BottomSpikeGenerator.prototype.__proto__ || Object.getPrototypeOf(BottomSpikeGenerator.prototype), "add", this).call(this, spike);

      this.lastX = spike.x;
    }
  }]);

  return BottomSpikeGenerator;
}(Engine.Component.Generator);

Engine.Component.BottomSpikeGenerator = BottomSpikeGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvYm90dG9tLXNwaWtlcy5qcyJdLCJuYW1lcyI6WyJCb3R0b21TcGlrZUdlbmVyYXRvciIsImdhbWUiLCJidW5ueSIsInByb3RvdHlwZSIsImN1cnJlbnRTdGVwIiwibGFzdFgiLCJzdGVwIiwiTWF0aCIsImZsb29yIiwieCIsIndpZHRoIiwibWFyZ2luIiwiZ2VuZXJhdGUiLCJ5IiwiaGVpZ2h0Iiwic3Bpa2UiLCJnZXRGaXJzdERlYWQiLCJFbmdpbmUiLCJTcGlrZSIsImFkZCIsInJlc2V0IiwiQ29tcG9uZW50IiwiR2VuZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsb0I7OztBQUNKLGdDQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsU0FBekIsRUFBb0M7QUFBQTs7QUFBQSw0SUFDNUJGLElBRDRCLEVBQ3RCQyxLQURzQjs7QUFHbEMsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUxrQztBQU1uQzs7Ozs2QkFFUTtBQUNQOztBQUVBLFVBQUlDLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLTixLQUFMLENBQVdPLENBQVgsR0FBZSxLQUFLTixTQUFMLENBQWVPLEtBQXpDLENBQVg7QUFDQSxVQUFJQyxTQUFVLEtBQUtWLElBQUwsQ0FBVVMsS0FBeEI7O0FBRUEsVUFBSUosU0FBUyxLQUFLRixXQUFsQixFQUErQjtBQUM3QixhQUFLQSxXQUFMLEdBQW1CRSxJQUFuQjtBQUNBLGFBQUtNLFFBQUwsQ0FBY0QsTUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUUEsTSxFQUFRO0FBQ2Y7O0FBRUEsVUFBTUUsSUFBSSxLQUFLWixJQUFMLENBQVVhLE1BQXBCO0FBQ0EsVUFBTUwsSUFBSSxLQUFLSixLQUFMLEdBQWEsS0FBS0YsU0FBTCxDQUFlTyxLQUF0Qzs7QUFFQSxVQUFJSyxRQUFRLEtBQUtDLFlBQUwsRUFBWjs7QUFFQSxVQUFJRCxTQUFTLElBQWIsRUFBbUI7QUFDakJBLGdCQUFRLElBQUlFLE9BQU9DLEtBQVgsQ0FBaUIsS0FBS2pCLElBQXRCLEVBQTRCUSxDQUE1QixFQUErQkksQ0FBL0IsQ0FBUjtBQUNBLGFBQUtNLEdBQUwsQ0FBU0osS0FBVDtBQUNELE9BSEQsTUFHTztBQUNMQSxjQUFNSyxLQUFOLENBQVlYLENBQVosRUFBZUksQ0FBZjtBQUNEOztBQUVELFdBQUtSLEtBQUwsR0FBYUksQ0FBYjtBQUNEOzs7d0JBRUdNLEssRUFBTztBQUNULHNJQUFVQSxLQUFWOztBQUVBLFdBQUtWLEtBQUwsR0FBYVUsTUFBTU4sQ0FBbkI7QUFDRDs7OztFQTNDZ0NRLE9BQU9JLFNBQVAsQ0FBaUJDLFM7O0FBOENwREwsT0FBT0ksU0FBUCxDQUFpQnJCLG9CQUFqQixHQUF3Q0Esb0JBQXhDIiwiZmlsZSI6ImdlbmVyYXRvcnMvYm90dG9tLXNwaWtlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvdHRvbVNwaWtlR2VuZXJhdG9yIGV4dGVuZHMgRW5naW5lLkNvbXBvbmVudC5HZW5lcmF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGJ1bm55LCBwcm90b3R5cGUpIHtcclxuICAgIHN1cGVyKGdhbWUsIGJ1bm55KVxyXG5cclxuICAgIHRoaXMucHJvdG90eXBlID0gcHJvdG90eXBlXHJcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gLTFcclxuICAgIHRoaXMubGFzdFggPSAwXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKVxyXG5cclxuICAgIGxldCBzdGVwID0gTWF0aC5mbG9vcih0aGlzLmJ1bm55LnggLyB0aGlzLnByb3RvdHlwZS53aWR0aClcclxuICAgIGxldCBtYXJnaW4gPSAodGhpcy5nYW1lLndpZHRoKVxyXG5cclxuICAgIGlmIChzdGVwICE9PSB0aGlzLmN1cnJlbnRTdGVwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBzdGVwXHJcbiAgICAgIHRoaXMuZ2VuZXJhdGUobWFyZ2luKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGUobWFyZ2luKSB7XHJcbiAgICBzdXBlci5nZW5lcmF0ZSgpXHJcblxyXG4gICAgY29uc3QgeSA9IHRoaXMuZ2FtZS5oZWlnaHRcclxuICAgIGNvbnN0IHggPSB0aGlzLmxhc3RYICsgdGhpcy5wcm90b3R5cGUud2lkdGhcclxuXHJcbiAgICBsZXQgc3Bpa2UgPSB0aGlzLmdldEZpcnN0RGVhZCgpXHJcblxyXG4gICAgaWYgKHNwaWtlID09IG51bGwpIHtcclxuICAgICAgc3Bpa2UgPSBuZXcgRW5naW5lLlNwaWtlKHRoaXMuZ2FtZSwgeCwgeSlcclxuICAgICAgdGhpcy5hZGQoc3Bpa2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzcGlrZS5yZXNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFggPSB4XHJcbiAgfVxyXG5cclxuICBhZGQoc3Bpa2UpIHtcclxuICAgIHN1cGVyLmFkZChzcGlrZSlcclxuXHJcbiAgICB0aGlzLmxhc3RYID0gc3Bpa2UueFxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkNvbXBvbmVudC5Cb3R0b21TcGlrZUdlbmVyYXRvciA9IEJvdHRvbVNwaWtlR2VuZXJhdG9yXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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

            this.templates.push([[0, 3, 0], [2, 0, 2], [0, 3, 0]]);

            this.templates.push([[3]]);

            this.templates.push([[0, 0, 0, 3, 0, 0, 0], [0, 0, 2, 0, 2, 0, 0], [0, 2, 0, 0, 0, 2, 0], [2, 0, 0, 0, 0, 0, 2], [1, 1, 1, 1, 1, 1, 1]]);
        }
    }, {
        key: "createdNewGround",
        value: function createdNewGround(ground) {
            // if (this.game.rnd.pick([true, true, false])) return

            var margin = -5;
            var padding = 1;

            var offsetX = ground.x + ground.width / 2 + this.prototype.width / 2;
            var offsetY = ground.y + margin + +this.prototype.height / 2;

            var template = void 0;
            if (ground.data.small) {
                template = this.templates[this.game.rnd.pick([1, 2, 3])];
            } else {
                template = this.game.rnd.pick(this.templates);
            }

            var templateWidth = template[0].length * this.prototype.width;
            var templateHeight = template.length * this.prototype.height;

            for (var i in template) {
                for (var j in template[i]) {
                    if (template[i][j] > 0) {
                        this.generate(offsetX + j * (this.prototype.width + padding) - templateWidth / 2, offsetY + i * (this.prototype.height + padding) - templateHeight, template[i][j]);
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
    }]);

    return CoinGenerator;
}(Generator);

Engine.Component.CoinGenerator = CoinGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvY29pbi5qcyJdLCJuYW1lcyI6WyJDb2luR2VuZXJhdG9yIiwiZ2FtZSIsImJ1bm55IiwiZ3JvdW5kcyIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsImFkZCIsImNyZWF0ZWROZXdHcm91bmQiLCJwcm90b3R5cGUiLCJFbmdpbmUiLCJDb2luIiwiY3JlYXRlVGVtcGxhdGVzIiwidGVtcGxhdGVzIiwicHVzaCIsImdyb3VuZCIsIm1hcmdpbiIsInBhZGRpbmciLCJvZmZzZXRYIiwieCIsIndpZHRoIiwib2Zmc2V0WSIsInkiLCJoZWlnaHQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJzbWFsbCIsInJuZCIsInBpY2siLCJ0ZW1wbGF0ZVdpZHRoIiwibGVuZ3RoIiwidGVtcGxhdGVIZWlnaHQiLCJpIiwiaiIsIm1heFR5cGUiLCJudW1iZXIiLCJNYXRoIiwicmFuZG9tIiwidHlwZSIsIkdPTEQiLCJTSUxWRVIiLCJCUk9OWkUiLCJjb2luIiwiZ2V0Rmlyc3REZWFkIiwicmVzZXQiLCJHZW5lcmF0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7O0FBQ0osMkJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQztBQUFBOztBQUFBLGtJQUMxQkYsSUFEMEIsRUFDcEJDLEtBRG9COztBQUdoQyxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQSxPQUFMLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUFrQyxNQUFLQyxnQkFBdkM7O0FBRUEsY0FBS0MsU0FBTCxHQUFpQixJQUFJQyxPQUFPQyxJQUFYLENBQWdCLE1BQUtULElBQXJCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQWpCOztBQUVBLGNBQUtVLGVBQUw7QUFSZ0M7QUFTakM7Ozs7MENBRWlCO0FBQ2hCLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztBQUVBLGlCQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FB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WTJCLElBQVosQ0FBaUJFLE1BQXhCO0FBQ0QsYUFGTSxNQUVBO0FBQUU7QUFDUEYsdUJBQU81QixPQUFPQyxJQUFQLENBQVkyQixJQUFaLENBQWlCRyxNQUF4QjtBQUNEOztBQUVELGdCQUFJQyxPQUFPLEtBQUtDLFlBQUwsRUFBWDtBQUNBLGdCQUFJRCxRQUFRLElBQVosRUFBa0I7QUFDaEJBLHVCQUFPLElBQUloQyxPQUFPQyxJQUFYLENBQWdCLEtBQUtULElBQXJCLEVBQTJCaUIsQ0FBM0IsRUFBOEJHLENBQTlCLEVBQWlDZ0IsSUFBakMsQ0FBUDtBQUNBLHFCQUFLL0IsR0FBTCxDQUFTbUMsSUFBVDtBQUNELGFBSEQsTUFHTztBQUNMQSxxQkFBS0UsS0FBTCxDQUFXekIsQ0FBWCxFQUFjRyxDQUFkO0FBQ0Q7O0FBRUQsbUJBQU9vQixJQUFQO0FBQ0Q7Ozs7RUF6R3lCRyxTOztBQTRHNUJuQyxPQUFPb0MsU0FBUCxDQUFpQjdDLGFBQWpCLEdBQWlDQSxhQUFqQyIsImZpbGUiOiJnZW5lcmF0b3JzL2NvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb2luR2VuZXJhdG9yIGV4dGVuZHMgR2VuZXJhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZ3JvdW5kcykge1xyXG4gICAgc3VwZXIoZ2FtZSwgYnVubnkpXHJcblxyXG4gICAgdGhpcy5ncm91bmRzID0gZ3JvdW5kc1xyXG4gICAgdGhpcy5ncm91bmRzLnNpZ25hbHMuZ2VuZXJhdGUuYWRkKHRoaXMuY3JlYXRlZE5ld0dyb3VuZCwgdGhpcylcclxuXHJcbiAgICB0aGlzLnByb3RvdHlwZSA9IG5ldyBFbmdpbmUuQ29pbih0aGlzLmdhbWUsIDAsIDApXHJcblxyXG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXMoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGVtcGxhdGVzKCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBbXVxyXG5cclxuICAgIHRoaXMudGVtcGxhdGVzLnB1c2goW1xyXG4gICAgICAgIFswLCAwLCAyLCAzLCAwXSxcclxuICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgIFswLCAxLCAzLCAxLCAwXSxcclxuICAgICAgICBbMSwgMSwgMSwgMSwgMV1cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzMsIDEsIDEsIDNdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAxXSxcclxuICAgICAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICAgICAgWzEsIDAsIDAsIDFdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAxXSxcclxuICAgICAgICBbMiwgMSwgMSwgMl1cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzAsIDMsIDBdLFxyXG4gICAgICAgIFsyLCAwLCAyXSxcclxuICAgICAgICBbMCwgMywgMF1cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzNdXHJcbiAgICBdKVxyXG5cclxuICAgIHRoaXMudGVtcGxhdGVzLnB1c2goW1xyXG4gICAgICAgIFswLCAwLCAwLCAzLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMiwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDIsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgIFsyLCAwLCAwLCAwLCAwLCAwLCAyXSxcclxuICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMV1cclxuICAgIF0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVkTmV3R3JvdW5kKGdyb3VuZCkge1xyXG4gICAgLy8gaWYgKHRoaXMuZ2FtZS5ybmQucGljayhbdHJ1ZSwgdHJ1ZSwgZmFsc2VdKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0gLTVcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAxXHJcblxyXG4gICAgbGV0IG9mZnNldFggPSBncm91bmQueCArIGdyb3VuZC53aWR0aCAvIDIgKyB0aGlzLnByb3RvdHlwZS53aWR0aCAvIDJcclxuICAgIGxldCBvZmZzZXRZID0gZ3JvdW5kLnkgKyBtYXJnaW4gKyArIHRoaXMucHJvdG90eXBlLmhlaWdodCAvIDJcclxuXHJcbiAgICBsZXQgdGVtcGxhdGVcclxuICAgIGlmIChncm91bmQuZGF0YS5zbWFsbCkge1xyXG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzW3RoaXMuZ2FtZS5ybmQucGljayhbMSwgMiwgM10pXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcGxhdGUgPSB0aGlzLmdhbWUucm5kLnBpY2sodGhpcy50ZW1wbGF0ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBsYXRlV2lkdGggPSB0ZW1wbGF0ZVswXS5sZW5ndGggKiB0aGlzLnByb3RvdHlwZS53aWR0aFxyXG4gICAgbGV0IHRlbXBsYXRlSGVpZ2h0ID0gdGVtcGxhdGUubGVuZ3RoICogdGhpcy5wcm90b3R5cGUuaGVpZ2h0XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB0ZW1wbGF0ZSkge1xyXG4gICAgICBmb3IgKGxldCBqIGluIHRlbXBsYXRlW2ldKSB7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlW2ldW2pdID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgb2Zmc2V0WCArIGogKiAodGhpcy5wcm90b3R5cGUud2lkdGggKyBwYWRkaW5nKSAtIHRlbXBsYXRlV2lkdGggLyAyLFxyXG4gICAgICAgICAgICBvZmZzZXRZICsgaSAqICh0aGlzLnByb3RvdHlwZS5oZWlnaHQgKyBwYWRkaW5nKSAtIHRlbXBsYXRlSGVpZ2h0LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVtpXVtqXVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGUoeCwgeSwgbWF4VHlwZSkge1xyXG4gICAgY29uc3QgbnVtYmVyID0gTWF0aC5yYW5kb20oKVxyXG4gICAgbGV0IHR5cGUgPSAwXHJcblxyXG5cclxuICAgIGlmIChudW1iZXIgPCAwLjE1ICYmIG1heFR5cGUgPiAyKSB7IC8vIDE1JVxyXG4gICAgICB0eXBlID0gRW5naW5lLkNvaW4udHlwZS5HT0xEXHJcbiAgICB9IGVsc2UgaWYgKG51bWJlciA+IDAuMTUgJiYgbnVtYmVyIDwgMC41ICYmIG1heFR5cGUgPiAxKSB7IC8vICUzNVxyXG4gICAgICB0eXBlID0gRW5naW5lLkNvaW4udHlwZS5TSUxWRVJcclxuICAgIH0gZWxzZSB7IC8vIDUwJVxyXG4gICAgICB0eXBlID0gRW5naW5lLkNvaW4udHlwZS5CUk9OWkVcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29pbiA9IHRoaXMuZ2V0Rmlyc3REZWFkKClcclxuICAgIGlmIChjb2luID09IG51bGwpIHtcclxuICAgICAgY29pbiA9IG5ldyBFbmdpbmUuQ29pbih0aGlzLmdhbWUsIHgsIHksIHR5cGUpXHJcbiAgICAgIHRoaXMuYWRkKGNvaW4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb2luLnJlc2V0KHgsIHkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvaW5cclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuQ29pbkdlbmVyYXRvciA9IENvaW5HZW5lcmF0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";

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
        return _this;
    }

    _createClass(EnemyGenerator, [{
        key: "generate",
        value: function generate(ground) {
            if (Math.random() < 0.5) return;

            var margin = 150;

            var x = 0;
            var y = 0;

            x = ground.x + ground.width + margin;
            y = ground.y;

            var enemy = new Engine.SpringMan(this.game, x, y);
            this.add(enemy);

            if (ground.data.small) {} else {}
        }
    }]);

    return EnemyGenerator;
}(Generator);

Engine.Component.EnemyGenerator = EnemyGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZW5lbXkuanMiXSwibmFtZXMiOlsiRW5lbXlHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJncm91bmRzIiwic2lnbmFscyIsImdlbmVyYXRlIiwiYWRkIiwiZ3JvdW5kIiwiTWF0aCIsInJhbmRvbSIsIm1hcmdpbiIsIngiLCJ5Iiwid2lkdGgiLCJlbmVteSIsIkVuZ2luZSIsIlNwcmluZ01hbiIsImRhdGEiLCJzbWFsbCIsIkdlbmVyYXRvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxjOzs7QUFDSiw0QkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQUEsb0lBQzFCRixJQUQwQixFQUNwQkMsS0FEb0I7O0FBR2hDLGNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGNBQUtBLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLEdBQTlCLENBQWtDLE1BQUtELFFBQXZDO0FBSmdDO0FBS2pDOzs7O2lDQUVRRSxNLEVBQVE7QUFDZixnQkFBSUMsS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5Qjs7QUFFekIsZ0JBQU1DLFNBQVMsR0FBZjs7QUFFQSxnQkFBSUMsSUFBSSxDQUFSO0FBQ0EsZ0JBQUlDLElBQUksQ0FBUjs7QUFFQUQsZ0JBQUlKLE9BQU9JLENBQVAsR0FBV0osT0FBT00sS0FBbEIsR0FBMEJILE1BQTlCO0FBQ0FFLGdCQUFJTCxPQUFPSyxDQUFYOztBQUVBLGdCQUFJRSxRQUFRLElBQUlDLE9BQU9DLFNBQVgsQ0FBcUIsS0FBS2YsSUFBMUIsRUFBZ0NVLENBQWhDLEVBQW1DQyxDQUFuQyxDQUFaO0FBQ0EsaUJBQUtOLEdBQUwsQ0FBU1EsS0FBVDs7QUFHQSxnQkFBSVAsT0FBT1UsSUFBUCxDQUFZQyxLQUFoQixFQUF1QixDQUN0QixDQURELE1BQ08sQ0FFTjtBQUNGOzs7O0VBM0IwQkMsUzs7QUE4QjdCSixPQUFPSyxTQUFQLENBQWlCcEIsY0FBakIsR0FBa0NBLGNBQWxDIiwiZmlsZSI6ImdlbmVyYXRvcnMvZW5lbXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbmVteUdlbmVyYXRvciBleHRlbmRzIEdlbmVyYXRvciB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgYnVubnksIGdyb3VuZHMpIHtcclxuICAgIHN1cGVyKGdhbWUsIGJ1bm55KVxyXG5cclxuICAgIHRoaXMuZ3JvdW5kcyA9IGdyb3VuZHNcclxuICAgIHRoaXMuZ3JvdW5kcy5zaWduYWxzLmdlbmVyYXRlLmFkZCh0aGlzLmdlbmVyYXRlLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGUoZ3JvdW5kKSB7XHJcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0gMTUwXHJcblxyXG4gICAgbGV0IHggPSAwXHJcbiAgICBsZXQgeSA9IDBcclxuXHJcbiAgICB4ID0gZ3JvdW5kLnggKyBncm91bmQud2lkdGggKyBtYXJnaW5cclxuICAgIHkgPSBncm91bmQueVxyXG5cclxuICAgIGxldCBlbmVteSA9IG5ldyBFbmdpbmUuU3ByaW5nTWFuKHRoaXMuZ2FtZSwgeCwgeSlcclxuICAgIHRoaXMuYWRkKGVuZW15KVxyXG5cclxuXHJcbiAgICBpZiAoZ3JvdW5kLmRhdGEuc21hbGwpIHtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkNvbXBvbmVudC5FbmVteUdlbmVyYXRvciA9IEVuZW15R2VuZXJhdG9yXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
    return _this;
  }

  _createClass(GroundsGenerator, [{
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

      var SPLIT_VERTICAL = 6;
      var START_POINT = -(this.game.world.bounds.height - this.game.height);
      var GRID_HEIGHT = this.game.world.bounds.height / SPLIT_VERTICAL;
      var RND_HORIZONTAL = 120;
      var RND_VERTICAL = 75;

      for (var i = 1; i < SPLIT_VERTICAL; i++) {
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
      var types = Object.keys(Engine.Ground.type).map(function (val) {
        return Engine.Ground.type[val];
      });
      var type = this.game.rnd.pick(types);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIkdyb3VuZHNHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJkaXN0YW5jZSIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsIlBoYXNlciIsIlNpZ25hbCIsImN1cnJlbnRTdGVwIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsIngiLCJtYXJnaW4iLCJ3aWR0aCIsIlNQTElUX1ZFUlRJQ0FMIiwiU1RBUlRfUE9JTlQiLCJ3b3JsZCIsImJvdW5kcyIsImhlaWdodCIsIkdSSURfSEVJR0hUIiwiUk5EX0hPUklaT05UQUwiLCJSTkRfVkVSVElDQUwiLCJpIiwicm5kIiwicGljayIsImJldHdlZW4iLCJ5IiwiZ3JvdW5kIiwiYWRkUmFuZG9tR3JvdW5kIiwiZGlzcGF0Y2giLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJFbmdpbmUiLCJHcm91bmQiLCJ0eXBlIiwibWFwIiwidmFsIiwic21hbGwiLCJicm9rZW4iLCJnZXRGaXJzdERlYWQiLCJhZGQiLCJyZXNldCIsIkNvbXBvbmVudCIsIkdlbmVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLGdCOzs7QUFDSjs7Ozs7O0FBTUEsNEJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQztBQUFBOztBQUFBLG9JQUMzQkYsSUFEMkIsRUFDckJDLEtBRHFCOztBQUdqQyxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZTtBQUNiQyxnQkFBVSxJQUFJQyxPQUFPQyxNQUFYO0FBREcsS0FBZjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQVBpQztBQVFsQzs7Ozs2QkFFUTtBQUNQOztBQUVBLFVBQUlDLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLVCxLQUFMLENBQVdVLENBQVgsR0FBZSxLQUFLVCxRQUEvQixDQUFYO0FBQ0EsVUFBSVUsU0FBVSxLQUFLWixJQUFMLENBQVVhLEtBQXhCOztBQUVBLFVBQUlMLFNBQVMsS0FBS0QsV0FBbEIsRUFBK0I7QUFDN0IsYUFBS0EsV0FBTCxHQUFtQkMsSUFBbkI7QUFDQSxhQUFLSixRQUFMLENBQWNRLE1BQWQ7QUFDRDtBQUNGOzs7NkJBRVFBLE0sRUFBUTtBQUNmOztBQUVBLFVBQU1FLGlCQUFpQixDQUF2QjtBQUNBLFVBQU1DLGNBQWMsRUFBRSxLQUFLZixJQUFMLENBQVVnQixLQUFWLENBQWdCQyxNQUFoQixDQUF1QkMsTUFBdkIsR0FBZ0MsS0FBS2xCLElBQUwsQ0FBVWtCLE1BQTVDLENBQXBCO0FBQ0EsVUFBTUMsY0FBYyxLQUFLbkIsSUFBTCxDQUFVZ0IsS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDSixjQUFwRDtBQUNBLFVBQU1NLGlCQUFpQixHQUF2QjtBQUNBLFVBQU1DLGVBQWUsRUFBckI7O0FBRUEsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLGNBQXBCLEVBQW9DUSxHQUFwQyxFQUF5QztBQUN2QyxZQUFJLEtBQUt0QixJQUFMLENBQVV1QixHQUFWLENBQWNDLElBQWQsRUFBbUIsTUFBTSxLQUF6QixFQUFKLEVBQXFDOztBQUVyQyxZQUFNYixJQUFJLEtBQUtWLEtBQUwsQ0FBV1UsQ0FBWCxHQUFlQyxNQUFmLEdBQXdCLEtBQUtaLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0UsT0FBZCxDQUFzQixDQUFDTCxjQUF2QixFQUF1Q0EsY0FBdkMsQ0FBbEM7QUFDQSxZQUFNTSxJQUFJWCxjQUFjSSxjQUFjRyxDQUE1QixHQUFnQyxLQUFLdEIsSUFBTCxDQUFVdUIsR0FBVixDQUFjRSxPQUFkLENBQXNCLENBQUNKLFlBQXZCLEVBQXFDQSxZQUFyQyxDQUExQzs7QUFFQSxZQUFJTSxTQUFTLEtBQUtDLGVBQUwsQ0FBcUJqQixDQUFyQixFQUF3QmUsQ0FBeEIsQ0FBYjs7QUFFQSxhQUFLdkIsT0FBTCxDQUFhQyxRQUFiLENBQXNCeUIsUUFBdEIsQ0FBK0JGLE1BQS9CO0FBQ0Q7QUFDRjs7O29DQUVlaEIsQyxFQUFHZSxDLEVBQUc7QUFDcEIsVUFBTUksUUFBUUMsT0FBT0MsSUFBUCxDQUFZQyxPQUFPQyxNQUFQLENBQWNDLElBQTFCLEVBQWdDQyxHQUFoQyxDQUFvQyxlQUFPO0FBQ3ZELGVBQU9ILE9BQU9DLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkUsR0FBbkIsQ0FBUDtBQUNELE9BRmEsQ0FBZDtBQUdBLFVBQU1GLE9BQU8sS0FBS25DLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQk0sS0FBbkIsQ0FBYjtBQUNBLFVBQU1RLFFBQVEsS0FBS3RDLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQixDQUFDLElBQUQsRUFBTyxLQUFQLENBQW5CLENBQWQ7QUFDQSxVQUFNZSxTQUFTLEtBQUt2QyxJQUFMLENBQVV1QixHQUFWLENBQWNDLElBQWQsQ0FBbUIsQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUFuQixDQUFmOztBQUVBLFVBQUlHLFNBQVMsS0FBS2EsWUFBTCxFQUFiO0FBQ0EsVUFBSWIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCQSxpQkFBUyxJQUFJTSxPQUFPQyxNQUFYLENBQ1AsS0FBS2xDLElBREUsRUFFUFcsQ0FGTyxFQUdQZSxDQUhPLEVBSVBTLElBSk8sRUFLUEcsS0FMTyxFQU1QQyxNQU5PLENBQVQ7QUFRQSxhQUFLRSxHQUFMLENBQVNkLE1BQVQ7QUFDRCxPQVZELE1BVU87QUFDTEEsZUFBT2UsS0FBUCxDQUFhL0IsQ0FBYixFQUFnQmUsQ0FBaEIsRUFBbUJTLElBQW5CLEVBQXlCRyxLQUF6QixFQUFnQ0MsTUFBaEM7QUFDRDs7QUFFRCxhQUFPWixNQUFQO0FBQ0Q7Ozs7RUExRTRCTSxPQUFPVSxTQUFQLENBQWlCQyxTOztBQTZFaERYLE9BQU9VLFNBQVAsQ0FBaUI1QyxnQkFBakIsR0FBb0NBLGdCQUFwQyIsImZpbGUiOiJnZW5lcmF0b3JzL2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdyb3VuZHNHZW5lcmF0b3IgZXh0ZW5kcyBFbmdpbmUuQ29tcG9uZW50LkdlbmVyYXRvciB7XHJcbiAgLyoqXHJcbiAgICogR3JvdW5kcyBnZW5lcmF0b3JcclxuICAgKiBAcGFyYW0gIHtQaGFzZXIuR2FtZX0gZ2FtZVxyXG4gICAqIEBwYXJhbSAge0VuZ2luZS5CdW5ueX0gYnVubnkgT2JqZWN0IG9mIGJ1bm55XHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkaXN0YW5jZSBEaXN0YW5jZSBiZXR3ZWVuIGdyb3VuZHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZGlzdGFuY2UpIHtcclxuICAgIHN1cGVyKGdhbWUsIGJ1bm55KVxyXG5cclxuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZVxyXG4gICAgdGhpcy5zaWduYWxzID0ge1xyXG4gICAgICBnZW5lcmF0ZTogbmV3IFBoYXNlci5TaWduYWwoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IC0xXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKVxyXG5cclxuICAgIGxldCBzdGVwID0gTWF0aC5mbG9vcih0aGlzLmJ1bm55LnggLyB0aGlzLmRpc3RhbmNlKVxyXG4gICAgbGV0IG1hcmdpbiA9ICh0aGlzLmdhbWUud2lkdGgpXHJcblxyXG4gICAgaWYgKHN0ZXAgIT09IHRoaXMuY3VycmVudFN0ZXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXBcclxuICAgICAgdGhpcy5nZW5lcmF0ZShtYXJnaW4pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZShtYXJnaW4pIHtcclxuICAgIHN1cGVyLmdlbmVyYXRlKClcclxuXHJcbiAgICBjb25zdCBTUExJVF9WRVJUSUNBTCA9IDZcclxuICAgIGNvbnN0IFNUQVJUX1BPSU5UID0gLSh0aGlzLmdhbWUud29ybGQuYm91bmRzLmhlaWdodCAtIHRoaXMuZ2FtZS5oZWlnaHQpXHJcbiAgICBjb25zdCBHUklEX0hFSUdIVCA9IHRoaXMuZ2FtZS53b3JsZC5ib3VuZHMuaGVpZ2h0IC8gU1BMSVRfVkVSVElDQUxcclxuICAgIGNvbnN0IFJORF9IT1JJWk9OVEFMID0gMTIwXHJcbiAgICBjb25zdCBSTkRfVkVSVElDQUwgPSA3NVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgU1BMSVRfVkVSVElDQUw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5nYW1lLnJuZC5waWNrW3RydWUsIGZhbHNlXSkgY29udGludWVcclxuXHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmJ1bm55LnggKyBtYXJnaW4gKyB0aGlzLmdhbWUucm5kLmJldHdlZW4oLVJORF9IT1JJWk9OVEFMLCBSTkRfSE9SSVpPTlRBTClcclxuICAgICAgY29uc3QgeSA9IFNUQVJUX1BPSU5UICsgR1JJRF9IRUlHSFQgKiBpICsgdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKC1STkRfVkVSVElDQUwsIFJORF9WRVJUSUNBTClcclxuXHJcbiAgICAgIGxldCBncm91bmQgPSB0aGlzLmFkZFJhbmRvbUdyb3VuZCh4LCB5KVxyXG5cclxuICAgICAgdGhpcy5zaWduYWxzLmdlbmVyYXRlLmRpc3BhdGNoKGdyb3VuZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFJhbmRvbUdyb3VuZCh4LCB5KSB7XHJcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKEVuZ2luZS5Hcm91bmQudHlwZSkubWFwKHZhbCA9PiB7XHJcbiAgICAgIHJldHVybiBFbmdpbmUuR3JvdW5kLnR5cGVbdmFsXVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdhbWUucm5kLnBpY2sodHlwZXMpXHJcbiAgICBjb25zdCBzbWFsbCA9IHRoaXMuZ2FtZS5ybmQucGljayhbdHJ1ZSwgZmFsc2VdKVxyXG4gICAgY29uc3QgYnJva2VuID0gdGhpcy5nYW1lLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcblxyXG4gICAgbGV0IGdyb3VuZCA9IHRoaXMuZ2V0Rmlyc3REZWFkKClcclxuICAgIGlmIChncm91bmQgPT0gbnVsbCkge1xyXG4gICAgICBncm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZChcclxuICAgICAgICB0aGlzLmdhbWUsXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgc21hbGwsXHJcbiAgICAgICAgYnJva2VuLFxyXG4gICAgICApXHJcbiAgICAgIHRoaXMuYWRkKGdyb3VuZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyb3VuZC5yZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91bmRcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuR3JvdW5kc0dlbmVyYXRvciA9IEdyb3VuZHNHZW5lcmF0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvbm9taW5hbHMuanMiXSwibmFtZXMiOlsiTm9taW5hbEdlbmVyYXRvciIsImdhbWUiLCJidW5ueSIsIngiLCJ5Iiwibm9taW5hbCIsIml0ZW0iLCJnZXRGaXJzdERlYWQiLCJFbmdpbmUiLCJOb21pbmFsIiwiYWRkIiwicmVzZXQiLCJHZW5lcmF0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsZ0I7OztBQUNKLDRCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLCtIQUNqQkQsSUFEaUIsRUFDWEMsS0FEVztBQUV4Qjs7Ozs2QkFFUUMsQyxFQUFHQyxDLEVBQUdDLE8sRUFBUztBQUN0QixVQUFJQyxPQUFPLEtBQUtDLFlBQUwsRUFBWDs7QUFFQSxVQUFJRCxRQUFRLElBQVosRUFBa0I7QUFDaEJBLGVBQU8sSUFBSUUsT0FBT0MsT0FBWCxDQUFtQixLQUFLUixJQUF4QixFQUE4QkUsQ0FBOUIsRUFBaUNDLENBQWpDLEVBQW9DQyxPQUFwQyxDQUFQO0FBQ0EsYUFBS0ssR0FBTCxDQUFTSixJQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0xBLGFBQUtLLEtBQUwsQ0FBV1IsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCQyxPQUFqQjtBQUNEOztBQUVELGFBQU9DLElBQVA7QUFDRDs7OztFQWhCNEJNLFM7O0FBbUIvQkosT0FBT0ssU0FBUCxDQUFpQmIsZ0JBQWpCLEdBQW9DQSxnQkFBcEMiLCJmaWxlIjoiZ2VuZXJhdG9ycy9ub21pbmFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vbWluYWxHZW5lcmF0b3IgZXh0ZW5kcyBHZW5lcmF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGJ1bm55KSB7XHJcbiAgICBzdXBlcihnYW1lLCBidW5ueSlcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlKHgsIHksIG5vbWluYWwpIHtcclxuICAgIGxldCBpdGVtID0gdGhpcy5nZXRGaXJzdERlYWQoKVxyXG5cclxuICAgIGlmIChpdGVtID09IG51bGwpIHtcclxuICAgICAgaXRlbSA9IG5ldyBFbmdpbmUuTm9taW5hbCh0aGlzLmdhbWUsIHgsIHksIG5vbWluYWwpXHJcbiAgICAgIHRoaXMuYWRkKGl0ZW0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLnJlc2V0KHgsIHksIG5vbWluYWwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1cclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuTm9taW5hbEdlbmVyYXRvciA9IE5vbWluYWxHZW5lcmF0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImdhbWUiLCJ4IiwieSIsIm5hbWUiLCJzcGVlZCIsInRpbGVTY2FsZSIsInNldFRvIiwiaGVpZ2h0IiwiZml4ZWRUb0NhbWVyYSIsIndpZHRoIiwiZGF0YSIsImlzU3RvcGVkIiwidGlsZVBvc2l0aW9uIiwiY2FtZXJhIiwiUGhhc2VyIiwiVGlsZVNwcml0ZSIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxJQUF4QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFBQSx3SEFDN0JKLElBRDZCLEVBQ3ZCQyxDQUR1QixFQUNwQkMsQ0FEb0IsRUFDakIsSUFEaUIsRUFDWCxJQURXLEVBQ0xDLElBREs7O0FBR25DLFVBQUtFLFNBQUwsQ0FBZUMsS0FBZixDQUFxQixNQUFLTixJQUFMLENBQVVPLE1BQVYsR0FBbUIsTUFBS0EsTUFBN0M7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtULElBQUwsQ0FBVVMsS0FBdkI7O0FBRUEsVUFBS0MsSUFBTCxDQUFVTixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLFVBQUtNLElBQUwsQ0FBVUMsUUFBVixHQUFxQixJQUFyQjtBQVJtQztBQVNwQzs7Ozs2QkFFUTtBQUNQLFdBQUtDLFlBQUwsQ0FBa0JYLENBQWxCLEdBQXNCLEtBQUtELElBQUwsQ0FBVWEsTUFBVixDQUFpQlosQ0FBakIsR0FBcUIsS0FBS1MsSUFBTCxDQUFVTixLQUFyRDtBQUNEOzs7O0VBZHNCVSxPQUFPQyxVOztBQWlCaENDLE9BQU9qQixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFBoYXNlci5UaWxlU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBuYW1lLCBzcGVlZCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgMTAyNCwgMTAyNCwgbmFtZSlcclxuXHJcbiAgICB0aGlzLnRpbGVTY2FsZS5zZXRUbyh0aGlzLmdhbWUuaGVpZ2h0IC8gdGhpcy5oZWlnaHQpXHJcbiAgICB0aGlzLmZpeGVkVG9DYW1lcmEgPSB0cnVlXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5nYW1lLndpZHRoXHJcblxyXG4gICAgdGhpcy5kYXRhLnNwZWVkID0gc3BlZWRcclxuICAgIHRoaXMuZGF0YS5pc1N0b3BlZCA9IHRydWVcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudGlsZVBvc2l0aW9uLnggPSB0aGlzLmdhbWUuY2FtZXJhLnggKiB0aGlzLmRhdGEuc3BlZWRcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5CYWNrZ3JvdW5kID0gQmFja2dyb3VuZFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3QtZGlzdGFuY2Utc3RyaXBlLmpzIl0sIm5hbWVzIjpbIkJlc3REaXN0YW5jZVN0cmlwZSIsImdhbWUiLCJ4IiwiQU5USV9NQVJHSU4iLCJ5Iiwid29ybGQiLCJib3VuZHMiLCJkcmF3Iiwid2lkdGgiLCJoZWlnaHQiLCJzdW1tSGVpZ2h0IiwiYmVnaW5GaWxsIiwiaSIsImRyYXdSZWN0IiwiZW5kRmlsbCIsIlBoYXNlciIsIkdyYXBoaWNzIiwiRW5naW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGtCOzs7QUFDSiw4QkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUI7QUFBQTs7QUFBQSx3SUFDYkQsSUFEYSxFQUNQQyxDQURPLEVBQ0osQ0FBQ0YsbUJBQW1CRyxXQURoQjs7QUFFbkIsVUFBS0MsQ0FBTCxHQUFTLE1BQUtILElBQUwsQ0FBVUksS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJGLENBQWhDOztBQUVBLFVBQUtHLElBQUw7QUFKbUI7QUFLcEI7Ozs7MkJBRU07QUFDTCxVQUFNQyxRQUFRLENBQWQ7QUFDQSxVQUFNQyxTQUFTLEVBQWY7QUFDQSxVQUFNQyxhQUFhVCxLQUFLSSxLQUFMLENBQVdDLE1BQVgsQ0FBa0JHLE1BQXJDOztBQUVBLFdBQUtFLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLEdBQXpCOztBQUVBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixhQUFhRCxNQUFqQyxFQUF5Q0csR0FBekMsRUFBOEM7QUFDNUMsWUFBTVYsSUFBSSxDQUFWO0FBQ0EsWUFBTUUsSUFBSVEsSUFBSUYsVUFBSixHQUFpQkQsTUFBM0I7QUFDQSxhQUFLSSxRQUFMLENBQWNYLENBQWQsRUFBaUJFLENBQWpCLEVBQW9CSSxLQUFwQixFQUEyQkMsTUFBM0I7QUFDRDtBQUNELFdBQUtLLE9BQUw7QUFDRDs7OztFQXJCOEJDLE9BQU9DLFE7O0FBd0J4Q0MsT0FBT2pCLGtCQUFQLEdBQTRCQSxrQkFBNUIiLCJmaWxlIjoiYmVzdC1kaXN0YW5jZS1zdHJpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCZXN0RGlzdGFuY2VTdHJpcGUgZXh0ZW5kcyBQaGFzZXIuR3JhcGhpY3Mge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIC1CZXN0RGlzdGFuY2VTdHJpcGUuQU5USV9NQVJHSU4pXHJcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUud29ybGQuYm91bmRzLnlcclxuXHJcbiAgICB0aGlzLmRyYXcoKVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gNlxyXG4gICAgY29uc3QgaGVpZ2h0ID0gMzJcclxuICAgIGNvbnN0IHN1bW1IZWlnaHQgPSBnYW1lLndvcmxkLmJvdW5kcy5oZWlnaHRcclxuXHJcbiAgICB0aGlzLmJlZ2luRmlsbCgweEZGRkZGRiwgMC43KVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VtbUhlaWdodCAvIGhlaWdodDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHggPSAwXHJcbiAgICAgIGNvbnN0IHkgPSBpICogc3VtbUhlaWdodCAvIGhlaWdodFxyXG4gICAgICB0aGlzLmRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZEZpbGwoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkJlc3REaXN0YW5jZVN0cmlwZSA9IEJlc3REaXN0YW5jZVN0cmlwZVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3QtZGlzdGFuY2UuanMiXSwibmFtZXMiOlsiQmVzdERpc3RhbmNlIiwiZ2FtZSIsInNjb3JlIiwiRW5naW5lIiwiU2VydmljZSIsImdldCIsIngiLCJiZXN0RGlzdGFuY2UiLCJTY29yZSIsIk1VTFRJUEVSX0RJU1RBTkNFIiwiY3JlYXRlTGFiZWwiLCJjcmVhdGVTdHJpcGUiLCJzdHlsZSIsImZpbGwiLCJmb250IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImxhYmVsIiwiYWRkIiwidGV4dCIsInVwZGF0ZSIsInkiLCJjYW1lcmEiLCJzdHJpcGUiLCJCZXN0RGlzdGFuY2VTdHJpcGUiLCJleGlzdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLFk7QUFDSix3QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQyxLQUFMLEdBQWFDLE9BQU9DLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixPQUFuQixDQUFiOztBQUVBLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtLLENBQUwsR0FBUyxLQUFLSixLQUFMLENBQVdLLFlBQVgsR0FBMEJKLE9BQU9LLEtBQVAsQ0FBYUMsaUJBQWhEOztBQUVBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0Q7Ozs7a0NBRWE7QUFBQTs7QUFDWixVQUFNQyxRQUFRO0FBQ1pDLGNBQU0sT0FETTtBQUVaQyxjQUFNO0FBRk0sT0FBZDtBQUlBLFVBQU1DLGFBQWEsRUFBbkI7QUFDQSxVQUFNQyxZQUFZLEdBQWxCOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxLQUFLaEIsSUFBTCxDQUFVaUIsR0FBVixDQUFjQyxJQUFkLENBQW1CLEtBQUtiLENBQUwsR0FBU1MsVUFBNUIsRUFBd0MsQ0FBeEMsWUFBbUQsS0FBS2IsS0FBTCxDQUFXSyxZQUE5RCxVQUFpRkssS0FBakYsQ0FBYjtBQUNBLFdBQUtLLEtBQUwsQ0FBV0csTUFBWCxHQUFvQixZQUFNO0FBQ3hCLGNBQUtILEtBQUwsQ0FBV0ksQ0FBWCxHQUFlLE1BQUtwQixJQUFMLENBQVVxQixNQUFWLENBQWlCRCxDQUFqQixHQUFxQkwsU0FBcEM7QUFDRCxPQUZEO0FBR0Q7OzttQ0FFYztBQUNiLFdBQUtPLE1BQUwsR0FBYyxJQUFJcEIsT0FBT3FCLGtCQUFYLENBQThCLEtBQUt2QixJQUFuQyxFQUF5QyxLQUFLSyxDQUE5QyxDQUFkO0FBQ0EsV0FBS0wsSUFBTCxDQUFVaUIsR0FBVixDQUFjTyxRQUFkLENBQXVCLEtBQUtGLE1BQTVCO0FBQ0Q7Ozs7OztBQUdIcEIsT0FBT0gsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoiYmVzdC1kaXN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJlc3REaXN0YW5jZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG5cclxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcclxuICAgIHRoaXMueCA9IHRoaXMuc2NvcmUuYmVzdERpc3RhbmNlICogRW5naW5lLlNjb3JlLk1VTFRJUEVSX0RJU1RBTkNFXHJcblxyXG4gICAgdGhpcy5jcmVhdGVMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZVN0cmlwZSgpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbCgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICBmb250OiAnMjZweCBBcmlhbCdcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxMFxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTUwXHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLnggKyBtYXJnaW5MZWZ0LCAwLCBgQmVzdCAke3RoaXMuc2NvcmUuYmVzdERpc3RhbmNlfSBtLmAsIHN0eWxlKVxyXG4gICAgdGhpcy5sYWJlbC51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGFiZWwueSA9IHRoaXMuZ2FtZS5jYW1lcmEueSArIG1hcmdpblRvcFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RyaXBlKCkge1xyXG4gICAgdGhpcy5zdHJpcGUgPSBuZXcgRW5naW5lLkJlc3REaXN0YW5jZVN0cmlwZSh0aGlzLmdhbWUsIHRoaXMueClcclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5zdHJpcGUpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQmVzdERpc3RhbmNlID0gQmVzdERpc3RhbmNlXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
    _this.data.isDead = false;
    _this.data.running = false;
    _this.data.countJump = Bunny.MAX_JUMPS;

    _this.game.physics.arcade.enable([_this]);

    _this.width *= 0.35;
    _this.height *= 0.35;

    _this.body.gravity.setTo(0, 2500);
    _this.body.maxVelocity.setTo(400, 2000);
    _this.body.collideWorldBounds = true;

    _this.onDied = new Phaser.Signal();

    _this.createAnimation();
    _this.animations.play('run');
    return _this;
  }

  _createClass(Bunny, [{
    key: 'addTrail',
    value: function addTrail() {
      var particlse = 250;
      this.data.trail = new Engine.Trail(this.game, particlse, this);
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
      if (this.data.isDead) return;

      var animationDownTime = 1000;
      var animationUpTime = 400;
      var upMove = 100;

      this.game.camera.unfollow();

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

      this.onDied.dispatch();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bm55LmpzIl0sIm5hbWVzIjpbIkJ1bm55IiwiZ2FtZSIsIngiLCJ5IiwibmFtZSIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiZGF0YSIsImlzRGVhZCIsInJ1bm5pbmciLCJjb3VudEp1bXAiLCJNQVhfSlVNUFMiLCJwaHlzaWNzIiwiYXJjYWRlIiwiZW5hYmxlIiwid2lkdGgiLCJoZWlnaHQiLCJib2R5IiwiZ3Jhdml0eSIsInNldFRvIiwibWF4VmVsb2NpdHkiLCJjb2xsaWRlV29ybGRCb3VuZHMiLCJvbkRpZWQiLCJQaGFzZXIiLCJTaWduYWwiLCJjcmVhdGVBbmltYXRpb24iLCJhbmltYXRpb25zIiwicGxheSIsInBhcnRpY2xzZSIsInRyYWlsIiwiVHJhaWwiLCJhZGQiLCJleGlzdGluZyIsImluQWlyIiwic3RhcnRFbWl0dCIsInN0b3BFbWl0dCIsImJ1bm55IiwidG91Y2hpbmciLCJkb3duIiwiYW5pbWF0aW9uRG93blRpbWUiLCJhbmltYXRpb25VcFRpbWUiLCJ1cE1vdmUiLCJjYW1lcmEiLCJ1bmZvbGxvdyIsInZlbG9jaXR5IiwiYWNjZWxlcmF0aW9uIiwidHdlZW4iLCJ0byIsIkVhc2luZyIsIlF1YWRyYXRpYyIsIkluIiwic3RhcnQiLCJkaXNwYXRjaCIsIkJBU0VfTUFYX1NQRUVEIiwiQUNDRUxFUkFUSU9OIiwianVtcEltcHVsc2UiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLElBQVosRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFBQTs7QUFBQSw4R0FDdEJILElBRHNCLEVBQ2hCQyxDQURnQixFQUNiQyxDQURhLEVBQ1ZFLE9BQU9DLFdBREcsRUFDVUYsT0FBTyxZQURqQjs7QUFHNUIsVUFBS0csSUFBTCxDQUFVSCxJQUFWLEdBQWlCQSxJQUFqQjtBQUNBLFVBQUtHLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNBLFVBQUtELElB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cEIsRUFBNkIsQ0FBQyxLQUFLeEIsSUFBTCxDQUFVSCxJQUFWLEdBQWlCLFlBQWxCLENBQTdCLEVBQThELENBQTlELEVBQWlFLElBQWpFO0FBQ0Q7OzsyQkFFTTtBQUNMLFVBQUksS0FBS0csSUFBTCxDQUFVQyxNQUFkLEVBQXNCOztBQUV0QixVQUFNK0MsY0FBYyxHQUFwQjs7QUFFQSxVQUFJLEtBQUtoRCxJQUFMLENBQVVHLFNBQVYsR0FBc0IsQ0FBMUIsRUFDRSxLQUFLTyxJQUFMLENBQVUyQixRQUFWLENBQW1CekMsQ0FBbkIsR0FBdUIsQ0FBQ29ELFdBQXhCO0FBQ0EsV0FBS2hELElBQUwsQ0FBVUcsU0FBVjtBQUNIOzs7O0VBcEdpQmEsT0FBT2lDLE07O0FBdUczQnhELE1BQU1XLFNBQU4sR0FBa0IsQ0FBbEI7QUFDQVgsTUFBTXNELFlBQU4sR0FBcUIsSUFBckI7QUFDQXRELE1BQU1xRCxjQUFOLEdBQXVCLEdBQXZCOztBQUVBaEQsT0FBT0wsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImJ1bm55LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQnVubnkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBuYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUgKyAnX3N0YW5kLnBuZycpXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5ydW5uaW5nID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5jb3VudEp1bXAgPSBCdW5ueS5NQVhfSlVNUFNcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKFsgdGhpcyBdKVxyXG5cclxuICAgIHRoaXMud2lkdGggKj0gMC4zNVxyXG4gICAgdGhpcy5oZWlnaHQgKj0gMC4zNVxyXG5cclxuICAgIHRoaXMuYm9keS5ncmF2aXR5LnNldFRvKDAsIDI1MDApXHJcbiAgICB0aGlzLmJvZHkubWF4VmVsb2NpdHkuc2V0VG8oNDAwLCAyMDAwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWVcclxuXHJcbiAgICB0aGlzLm9uRGllZCA9IG5ldyBQaGFzZXIuU2lnbmFsKClcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICB9XHJcblxyXG4gIGFkZFRyYWlsKCkge1xyXG4gICAgY29uc3QgcGFydGljbHNlID0gMjUwXHJcbiAgICB0aGlzLmRhdGEudHJhaWwgPSBuZXcgRW5naW5lLlRyYWlsKHRoaXMuZ2FtZSwgcGFydGljbHNlLCB0aGlzKVxyXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmRhdGEudHJhaWwpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmlzRGVhZCkgcmV0dXJuXHJcblxyXG4gICAgaWYgKHRoaXMuaW5BaXIoKSkge1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RhcnRFbWl0dCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdqdW1wJylcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnJ1bm5pbmcpe1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RhcnRFbWl0dCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG4gICAgICB0aGlzLmRhdGEuY291bnRKdW1wID0gQnVubnkuTUFYX0pVTVBTXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RvcEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluQWlyKCkge1xyXG4gICAgcmV0dXJuICFidW5ueS5ib2R5LnRvdWNoaW5nLmRvd25cclxuICB9XHJcblxyXG4gIGRpZSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBhbmltYXRpb25Eb3duVGltZSA9IDEwMDBcclxuICAgIGNvbnN0IGFuaW1hdGlvblVwVGltZSA9IDQwMFxyXG4gICAgY29uc3QgdXBNb3ZlID0gMTAwXHJcblxyXG4gICAgdGhpcy5nYW1lLmNhbWVyYS51bmZvbGxvdygpXHJcblxyXG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnNldFRvKDApXHJcbiAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnNldFRvKDApXHJcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5pc0RlYWQgPSB0cnVlXHJcbiAgICB0aGlzLmRhdGEudHJhaWwuc3RvcEVtaXR0KClcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdodXJ0JylcclxuXHJcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy55IC0gdXBNb3ZlXHJcbiAgICAgIH0sIGFuaW1hdGlvbkRvd25UaW1lKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMuZ2FtZS5oZWlnaHQgKyB0aGlzLmhlaWdodFxyXG4gICAgICB9LCBhbmltYXRpb25VcFRpbWUsIFBoYXNlci5FYXNpbmcuUXVhZHJhdGljLkluKVxyXG4gICAgICAuc3RhcnQoKVxyXG5cclxuICAgIHRoaXMub25EaWVkLmRpc3BhdGNoKClcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuZGF0YS5ydW5uaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnNldFRvKEJ1bm55LkJBU0VfTUFYX1NQRUVELCAwKVxyXG4gICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi5zZXRUbyhCdW5ueS5BQ0NFTEVSQVRJT04sIDApXHJcbiAgfVxyXG5cclxuICBjcmVhdGVBbmltYXRpb24oKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdqdW1wJywgW3RoaXMuZGF0YS5uYW1lICsgJ19qdW1wLnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgncnVuJywgW3RoaXMuZGF0YS5uYW1lICsgJ193YWxrMS5wbmcnLCB0aGlzLmRhdGEubmFtZSArICdfd2FsazIucG5nJ10sIDEwLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaHVydCcsIFt0aGlzLmRhdGEubmFtZSArICdfaHVydC5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3JlYWR5JywgW3RoaXMuZGF0YS5uYW1lICsgJ19yZWFkeS5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgW3RoaXMuZGF0YS5uYW1lICsgJ19zdGFuZC5wbmcnXSwgMSwgdHJ1ZSlcclxuICB9XHJcblxyXG4gIGp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmlzRGVhZCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QganVtcEltcHVsc2UgPSA5MDBcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLmNvdW50SnVtcCA+IDApXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gLWp1bXBJbXB1bHNlXHJcbiAgICAgIHRoaXMuZGF0YS5jb3VudEp1bXAtLVxyXG4gIH1cclxufVxyXG5cclxuQnVubnkuTUFYX0pVTVBTID0gMlxyXG5CdW5ueS5BQ0NFTEVSQVRJT04gPSAyMDAwXHJcbkJ1bm55LkJBU0VfTUFYX1NQRUVEID0gNTAwXHJcblxyXG5FbmdpbmUuQnVubnkgPSBCdW5ueVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
    return _this;
  }

  _createClass(Coin, [{
    key: 'createAnimation',
    value: function createAnimation() {
      var countCoinsFrame = 7;

      var animationFrames = [];

      for (var i = 1; i < countCoinsFrame; i++) {
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
  }]);

  return Coin;
}(Phaser.Sprite);

Coin.type = {
  GOLD: 'gold',
  SILVER: 'silver',
  BRONZE: 'bronze'
};

Engine.Coin = Coin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4uanMiXSwibmFtZXMiOlsiQ29pbiIsImdhbWUiLCJ4IiwieSIsInR5cGUiLCJHT0xEIiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJ3aWR0aCIsImhlaWdodCIsImFuY2hvciIsInNldFRvIiwicGh5c2ljcyIsImVuYWJsZSIsImRhdGEiLCJCUk9OWkUiLCJub21pbmFsIiwiU0lMVkVSIiwiY3JlYXRlQW5pbWF0aW9uIiwiY291bnRDb2luc0ZyYW1lIiwiYW5pbWF0aW9uRnJhbWVzIiwiaSIsInB1c2giLCJhbmltYXRpb25zIiwiYWRkIiwicGxheSIsImZyYW1lIiwiUGhhc2VyIiwiU3ByaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUErQztBQUFBLFFBQXZCQyxJQUF1Qix1RUFBaEJKLEtBQUtJLElBQUwsQ0FBVUMsSUFBTTs7QUFBQTs7QUFBQSw0R0FDdkNKLElBRHVDLEVBQ2pDQyxDQURpQyxFQUM5QkMsQ0FEOEIsRUFDM0JHLE9BQU9DLFdBRG9CLEVBQ1BILE9BQU8sUUFEQTs7QUFHN0MsVUFBS0ksS0FBTCxJQUFjLElBQWQ7QUFDQSxVQUFLQyxNQUFMLElBQWUsSUFBZjtBQUNBLFVBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixHQUFsQjs7QUFFQSxVQUFLVixJQUFMLENBQVVXLE9BQVYsQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCOztBQUVBLFVBQUtDLElBQUwsQ0FBVVYsSUFBVixHQUFpQkEsSUFBakI7O0FBRUEsWUFBT0EsSUFBUDtBQUNFLFdBQUtFLE9BQU9OLElBQVAsQ0FBWUksSUFBWixDQUFpQlcsTUFBdEI7QUFDRSxjQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDRjtBQUNBLFdBQUtWLE9BQU9OLElBQVAsQ0FBWUksSUFBWixDQUFpQmEsTUFBdEI7QUFDRSxjQUFLSCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDRjtBQUNBLFdBQUtWLE9BQU9OLElBQVAsQ0FBWUksSUFBWixDQUFpQkMsSUFBdEI7QUFDRSxjQUFLUyxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDRjtBQVRGOztBQVlBLFVBQUtFLGVBQUw7QUF2QjZDO0FBd0I5Qzs7OztzQ0FFaUI7QUFDaEIsVUFBTUMsa0JBQWtCLENBQXhCOztBQUVBLFVBQUlDLGtCQUFrQixFQUF0Qjs7QUFFQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsZUFBcEIsRUFBcUNFLEdBQXJDLEVBQTBDO0FBQ3hDRCx3QkFBZ0JFLElBQWhCLENBQXdCLEtBQUtSLElBQUwsQ0FBVVYsSUFBbEMsU0FBMENpQixDQUExQztBQUNEOztBQUVELFdBQUtFLFVBQUwsQ0FBZ0JDLEdBQWhCLENBQW9CLFFBQXBCLEVBQThCSixlQUE5QixFQUErQyxFQUEvQyxFQUFtRCxJQUFuRDtBQUNBLFdBQUtHLFVBQUwsQ0FBZ0JFLElBQWhCLENBQXFCLFFBQXJCO0FBQ0Q7OzswQkFFS3ZCLEMsRUFBR0MsQyxFQUFHQyxJLEVBQU07QUFDaEIsd0dBQVlGLENBQVosRUFBZUMsQ0FBZjs7QUFFQSxXQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLc0IsS0FBTCxHQUFhdEIsT0FBTyxRQUFwQjtBQUNBOztBQUVBLFdBQUtjLGVBQUw7QUFDRDs7OztFQWhEZ0JTLE9BQU9DLE07O0FBbUQxQjVCLEtBQUtJLElBQUwsR0FBWTtBQUNWQyxRQUFNLE1BREk7QUFFVlksVUFBUSxRQUZFO0FBR1ZGLFVBQVE7QUFIRSxDQUFaOztBQU1BVCxPQUFPTixJQUFQLEdBQWNBLElBQWQiLCJmaWxlIjoiY29pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvaW4gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0eXBlID0gQ29pbi50eXBlLkdPTEQpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIEVuZ2luZS5zcHJpdGVzaGVldCwgdHlwZSArICdfMS5wbmcnKVxyXG5cclxuICAgIHRoaXMud2lkdGggKj0gMC4yNVxyXG4gICAgdGhpcy5oZWlnaHQgKj0gMC4yNVxyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KVxyXG5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShbdGhpc10pXHJcblxyXG4gICAgdGhpcy5kYXRhLnR5cGUgPSB0eXBlXHJcblxyXG4gICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgY2FzZSBFbmdpbmUuQ29pbi50eXBlLkJST05aRTpcclxuICAgICAgICB0aGlzLmRhdGEubm9taW5hbCA9IDFcclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBFbmdpbmUuQ29pbi50eXBlLlNJTFZFUjpcclxuICAgICAgICB0aGlzLmRhdGEubm9taW5hbCA9IDRcclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBFbmdpbmUuQ29pbi50eXBlLkdPTEQ6XHJcbiAgICAgICAgdGhpcy5kYXRhLm5vbWluYWwgPSA4XHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgY291bnRDb2luc0ZyYW1lID0gN1xyXG5cclxuICAgIGxldCBhbmltYXRpb25GcmFtZXMgPSBbXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY291bnRDb2luc0ZyYW1lOyBpKyspIHtcclxuICAgICAgYW5pbWF0aW9uRnJhbWVzLnB1c2goYCR7dGhpcy5kYXRhLnR5cGV9XyR7aX0ucG5nYClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdyb3RhdGUnLCBhbmltYXRpb25GcmFtZXMsIDE1LCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3JvdGF0ZScpXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5LCB0eXBlKSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG5cclxuICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZnJhbWUgPSB0eXBlICsgJ18xLnBuZydcclxuICAgIC8vIHRoaXMuYW5pbWF0aW9ucy5jdXJyZW50QW5pbS5kZXN0cm95KClcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgfVxyXG59XHJcblxyXG5Db2luLnR5cGUgPSB7XHJcbiAgR09MRDogJ2dvbGQnLFxyXG4gIFNJTFZFUjogJ3NpbHZlcicsXHJcbiAgQlJPTlpFOiAnYnJvbnplJyxcclxufVxyXG5cclxuRW5naW5lLkNvaW4gPSBDb2luXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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

        _this.width *= 0.45;
        _this.height *= 0.45;

        _this.autoCull = true;

        _this.game.physics.enable([_this]);
        _this.body.immovable = true;

        _this.data.name = name;
        _this.data.type = type;
        _this.data.small = small;
        _this.data.broken = broken;
        return _this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VuZC5qcyJdLCJuYW1lcyI6WyJHcm91bmQiLCJnYW1lIiwieCIsInkiLCJ0eXBlIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsIm5hbWUiLCJnZXROYW1lIiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJ3aWR0aCIsImhlaWdodCIsImF1dG9DdWxsIiwicGh5c2ljcyIsImVuYWJsZSIsImJvZHkiLCJpbW1vdmFibGUiLCJkYXRhIiwiZnJhbWUiLCJQaGFzZXIiLCJTcHJpdGUiLCJDQUtFIiwiU0FORCIsIlNOT1ciLCJTVE9ORSIsIldPT0QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixvQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQWlGO0FBQUEsWUFBekRDLElBQXlELHVFQUFsREosT0FBT0ksSUFBUCxDQUFZQyxLQUFzQztBQUFBLFlBQS9CQyxLQUErQix1RUFBdkIsS0FBdUI7QUFBQSxZQUFoQkMsTUFBZ0IsdUVBQVAsS0FBTzs7QUFBQTs7QUFDL0UsWUFBTUMsT0FBT1IsT0FBT1MsT0FBUCxDQUFlTCxJQUFmLEVBQXFCRSxLQUFyQixFQUE0QkMsTUFBNUIsQ0FBYjs7QUFEK0Usb0hBR3pFTixJQUh5RSxFQUduRUMsQ0FIbUUsRUFHaEVDLENBSGdFLEVBRzdETyxPQUFPQyxXQUhzRCxFQUd6Q0gsSUFIeUM7O0FBSy9FLGNBQUtJLEtBQUwsSUFBYyxJQUFkO0FBQ0EsY0FBS0MsTUFBTCxJQUFlLElBQWY7O0FBRUEsY0FBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxjQUFLYixJQUFMLENBQVVjLE9BQVYsQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCO0FBQ0EsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEdBQXNCLElBQXRCOztBQUVBLGNBQUtDLElBQUwsQ0FBVVgsSUFBVixHQUFpQkEsSUFBakI7QUFDQSxjQUFLVyxJQUFMLENBQVVmLElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsY0FBS2UsSUFBTCxDQUFVYixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLGNBQUthLElBQUwsQ0FBVVosTUFBVixHQUFtQkEsTUFBbkI7QUFoQitFO0FBaUJoRjs7Ozs4QkFFS0wsQyxFQUFHQyxDLEVBQUdDLEksRUFBTUUsSyxFQUFPQyxNLEVBQVE7QUFDL0Isa0hBQVlMLENBQVosRUFBZUMsQ0FBZjs7QUFFQSxnQkFBTUssT0FBT1IsT0FBT1MsT0FBUCxDQUFlTCxJQUFmLEVBQXFCRSxLQUFyQixFQUE0QkMsTUFBNUIsQ0FBYjs7QUFFQSxpQkFBS2EsS0FBTCxHQUFhWixJQUFiOztBQUVBLGlCQUFLVyxJQUFMLENBQVVYLElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsaUJBQUtXLElBQUwsQ0FBVWYsSUFBVixHQUFpQkEsSUFBakI7QUFDQSxpQkFBS2UsSUFBTCxDQUFVYixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLGlCQUFLYSxJQUFMLENBQVVaLE1BQVYsR0FBbUJBLE1BQW5CO0FBQ0Q7Ozs7RUEvQmtCYyxPQUFPQyxNOztBQWtDNUJ0QixPQUFPSSxJQUFQLEdBQWM7QUFDWkMsV0FBTyxPQURLO0FBRVprQixVQUFNLE1BRk07QUFHWkMsVUFBTSxNQUhNO0FBSVpDLFVBQU0sTUFKTTtBQUtaQyxXQUFPLE9BTEs7QUFNWkMsVUFBTTtBQU5NLENBQWQ7O0FBU0EzQixPQUFPUyxPQUFQLEdBQWlCLFVBQUNMLElBQUQsRUFBT0UsS0FBUCxFQUFjQyxNQUFkLEVBQXlCO0FBQ3hDLFFBQUlDLG1CQUFpQkosSUFBckI7O0FBRUEsUUFBSUUsS0FBSixFQUFXRSxRQUFRLFFBQVI7QUFDWCxRQUFJRCxNQUFKLEVBQVlDLFFBQVEsU0FBUjs7QUFFWkEsWUFBUSxNQUFSOztBQUVBLFdBQU9BLElBQVA7QUFDRCxDQVREOztBQVdBRSxPQUFPVixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHcm91bmQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0eXBlID0gR3JvdW5kLnR5cGUuR1JBU1MsIHNtYWxsID0gZmFsc2UsIGJyb2tlbiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBuYW1lID0gR3JvdW5kLmdldE5hbWUodHlwZSwgc21hbGwsIGJyb2tlbilcclxuXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSAwLjQ1XHJcbiAgICB0aGlzLmhlaWdodCAqPSAwLjQ1XHJcblxyXG4gICAgdGhpcy5hdXRvQ3VsbCA9IHRydWVcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoW3RoaXNdKVxyXG4gICAgdGhpcy5ib2R5LmltbW92YWJsZSA9IHRydWVcclxuXHJcbiAgICB0aGlzLmRhdGEubmFtZSA9IG5hbWVcclxuICAgIHRoaXMuZGF0YS50eXBlID0gdHlwZVxyXG4gICAgdGhpcy5kYXRhLnNtYWxsID0gc21hbGxcclxuICAgIHRoaXMuZGF0YS5icm9rZW4gPSBicm9rZW5cclxuICB9XHJcblxyXG4gIHJlc2V0KHgsIHksIHR5cGUsIHNtYWxsLCBicm9rZW4pIHtcclxuICAgIHN1cGVyLnJlc2V0KHgsIHkpXHJcblxyXG4gICAgY29uc3QgbmFtZSA9IEdyb3VuZC5nZXROYW1lKHR5cGUsIHNtYWxsLCBicm9rZW4pXHJcblxyXG4gICAgdGhpcy5mcmFtZSA9IG5hbWVcclxuXHJcbiAgICB0aGlzLmRhdGEubmFtZSA9IG5hbWVcclxuICAgIHRoaXMuZGF0YS50eXBlID0gdHlwZVxyXG4gICAgdGhpcy5kYXRhLnNtYWxsID0gc21hbGxcclxuICAgIHRoaXMuZGF0YS5icm9rZW4gPSBicm9rZW5cclxuICB9XHJcbn1cclxuXHJcbkdyb3VuZC50eXBlID0ge1xyXG4gIEdSQVNTOiAnZ3Jhc3MnLFxyXG4gIENBS0U6ICdjYWtlJyxcclxuICBTQU5EOiAnc2FuZCcsXHJcbiAgU05PVzogJ3Nub3cnLFxyXG4gIFNUT05FOiAnc3RvbmUnLFxyXG4gIFdPT0Q6ICd3b29kJ1xyXG59XG5cbkdyb3VuZC5nZXROYW1lID0gKHR5cGUsIHNtYWxsLCBicm9rZW4pID0+IHtcbiAgbGV0IG5hbWUgPSBgZ3JvdW5kXyR7dHlwZX1gXG5cbiAgaWYgKHNtYWxsKSBuYW1lICs9ICdfc21hbGwnXG4gIGlmIChicm9rZW4pIG5hbWUgKz0gJ19icm9rZW4nXG5cbiAgbmFtZSArPSAnLnBuZydcblxuICByZXR1cm4gbmFtZVxufVxyXG5cclxuRW5naW5lLkdyb3VuZCA9IEdyb3VuZFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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

    _this.addAnimation();
    return _this;
  }

  _createClass(Nominal, [{
    key: 'addAnimation',
    value: function addAnimation() {
      var animationTime = 400;
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
        font: '31px Arial',
        fill: color
      };

      return style;
    }
  }]);

  return Nominal;
}(Phaser.Text);

Engine.Nominal = Nominal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbWluYWwuanMiXSwibmFtZXMiOlsiTm9taW5hbCIsImdhbWUiLCJ4IiwieSIsIm5vbWluYWwiLCJnZXRTdHlsZSIsImFuY2hvciIsInNldFRvIiwiYWRkQW5pbWF0aW9uIiwiYW5pbWF0aW9uVGltZSIsImFuaW1hdGlvbkRpc3RhbmNlIiwiYWxwaGEiLCJ0d2VlbiIsImFkZCIsInRvIiwic3RhcnQiLCJvbkNvbXBsZXRlIiwia2lsbCIsInN0eWxlIiwidGV4dCIsImZpbGwiLCJjb2xvciIsImZvbnQiLCJQaGFzZXIiLCJUZXh0IiwiRW5naW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsTzs7O0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQSxrSEFDekJILElBRHlCLEVBQ25CQyxDQURtQixFQUNoQkMsQ0FEZ0IsUUFDVEMsT0FEUyxFQUNFSixRQUFRSyxRQUFSLENBQWlCRCxPQUFqQixDQURGOztBQUcvQixVQUFLRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsR0FBbEI7O0FBRUEsVUFBS0MsWUFBTDtBQUwrQjtBQU1oQzs7OzttQ0F5QmM7QUFDYixVQUFNQyxnQkFBZ0IsR0FBdEI7QUFDQSxVQUFNQyxvQkFBb0IsRUFBMUI7O0FBRUEsV0FBS0MsS0FBTCxHQUFhLENBQWI7O0FBRUEsV0FBS0MsS0FBTCxHQUFhLEtBQUtYLElBQUwsQ0FBVVksR0FBVixDQUFjRCxLQUFkLENBQW9CLElBQXBCLEVBQ1ZFLEVBRFUsQ0FDUDtBQUNGSCxlQUFPLENBREw7QUFFRlIsV0FBRyxLQUFLQSxDQUFMLEdBQVNPO0FBRlYsT0FETyxFQUlSRCxhQUpRLEVBS1ZNLEtBTFUsRUFBYjs7QUFPQSxXQUFLSCxLQUFMLENBQVdJLFVBQVgsQ0FBc0JILEdBQXRCLENBQTBCLEtBQUtJLElBQS9CLEVBQXFDLElBQXJDO0FBQ0Q7OzswQkFFS2YsQyxFQUFHQyxDLEVBQUdDLE8sRUFBUztBQUNuQiw4R0FBWUYsQ0FBWixFQUFlQyxDQUFmOztBQUVBLFVBQUllLFFBQVFsQixRQUFRSyxRQUFSLENBQWlCRCxPQUFqQixDQUFaOztBQUVBLFdBQUtlLElBQUwsU0FBZ0JmLE9BQWhCO0FBQ0EsV0FBS2dCLElBQUwsR0FBWUYsTUFBTUUsSUFBbEI7O0FBRUEsV0FBS1osWUFBTDtBQUNEOzs7NkJBaERlSixPLEVBQVM7QUFDdkIsVUFBSWlCLGNBQUo7O0FBRUEsY0FBT2pCLE9BQVA7QUFDRSxhQUFLLENBQUw7QUFDRWlCLGtCQUFRLFFBQVI7QUFDRjtBQUNBLGFBQUssQ0FBTDtBQUNFQSxrQkFBUSxRQUFSO0FBQ0Y7QUFDQSxhQUFLLENBQUw7QUFDRUEsa0JBQVEsU0FBUjtBQUNGO0FBVEY7O0FBWUEsVUFBTUgsUUFBUTtBQUNaSSxjQUFNLFlBRE07QUFFWkYsY0FBTUM7QUFGTSxPQUFkOztBQUtBLGFBQU9ILEtBQVA7QUFDRDs7OztFQTlCbUJLLE9BQU9DLEk7O0FBNEQ3QkMsT0FBT3pCLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6Im5vbWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb21pbmFsIGV4dGVuZHMgUGhhc2VyLlRleHQge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIG5vbWluYWwpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIGArJHtub21pbmFsfWAsIE5vbWluYWwuZ2V0U3R5bGUobm9taW5hbCkpXHJcblxyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KVxyXG5cclxuICAgIHRoaXMuYWRkQW5pbWF0aW9uKClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTdHlsZShub21pbmFsKSB7XHJcbiAgICBsZXQgY29sb3JcclxuXHJcbiAgICBzd2l0Y2gobm9taW5hbCkge1xyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgY29sb3IgPSAnb3JhbmdlJ1xyXG4gICAgICBicmVha1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY29sb3IgPSAnc2lsdmVyJ1xyXG4gICAgICBicmVha1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgY29sb3IgPSAnI0NEN0YzMidcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZm9udDogJzMxcHggQXJpYWwnLFxyXG4gICAgICBmaWxsOiBjb2xvclxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHlsZVxyXG4gIH1cclxuXHJcbiAgYWRkQW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IDQwMFxyXG4gICAgY29uc3QgYW5pbWF0aW9uRGlzdGFuY2UgPSA1MFxyXG5cclxuICAgIHRoaXMuYWxwaGEgPSAxXHJcblxyXG4gICAgdGhpcy50d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcylcclxuICAgICAgLnRvKHtcclxuICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICB5OiB0aGlzLnkgLSBhbmltYXRpb25EaXN0YW5jZVxyXG4gICAgICB9LCBhbmltYXRpb25UaW1lKVxyXG4gICAgICAuc3RhcnQoKVxyXG5cclxuICAgIHRoaXMudHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5raWxsLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoeCwgeSwgbm9taW5hbCkge1xyXG4gICAgc3VwZXIucmVzZXQoeCwgeSlcclxuXHJcbiAgICBsZXQgc3R5bGUgPSBOb21pbmFsLmdldFN0eWxlKG5vbWluYWwpXHJcblxyXG4gICAgdGhpcy50ZXh0ID0gYCske25vbWluYWx9YFxyXG4gICAgdGhpcy5maWxsID0gc3R5bGUuZmlsbFxyXG5cclxuICAgIHRoaXMuYWRkQW5pbWF0aW9uKClcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Ob21pbmFsID0gTm9taW5hbFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWtlLmpzIl0sIm5hbWVzIjpbIlNwaWtlIiwiZ2FtZSIsIngiLCJ5IiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJhdXRvQ3VsbCIsImFuY2hvciIsInNldFRvIiwid2lkdGgiLCJoZWlnaHQiLCJ0aW50IiwiUGhhc2VyIiwiU3ByaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxLOzs7QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQUEsa0hBQ2hCRixJQURnQixFQUNWQyxDQURVLEVBQ1BDLENBRE8sRUFDSkMsT0FBT0MsV0FESCxFQUNnQixnQkFEaEI7O0FBR3RCLGNBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxjQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7O0FBRUEsY0FBS0MsS0FBTCxJQUFjLElBQWQ7QUFDQSxjQUFLQyxNQUFMLElBQWUsSUFBZjs7QUFFQSxjQUFLQyxJQUFMLEdBQVksUUFBWjtBQVRzQjtBQVV2Qjs7O0VBWGlCQyxPQUFPQyxNOztBQWMzQlQsT0FBT0osS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6InNwaWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3Bpa2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsICdzcGlrZXNfdG9wLnBuZycpXHJcblxyXG4gICAgdGhpcy5hdXRvQ3VsbCA9IHRydWVcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAsIDEpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSAwLjM1XHJcbiAgICB0aGlzLmhlaWdodCAqPSAwLjM1XHJcblxyXG4gICAgdGhpcy50aW50ID0gMHg3Nzc3NzdcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5TcGlrZSA9IFNwaWtlXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpringMan = function (_Phaser$Sprite) {
  _inherits(SpringMan, _Phaser$Sprite);

  function SpringMan(game, x, y) {
    _classCallCheck(this, SpringMan);

    var _this = _possibleConstructorReturn(this, (SpringMan.__proto__ || Object.getPrototypeOf(SpringMan)).call(this, game, x, y, Engine.spritesheet, 'springMan_stand.png'));

    _this.width *= 0.35;
    _this.height *= 0.35;

    _this.game.physics.arcade.enable([_this]);

    _this.addVerticaleMove();
    _this.addShake();
    return _this;
  }

  _createClass(SpringMan, [{
    key: 'addVerticaleMove',
    value: function addVerticaleMove() {
      var distance = 50;

      this.game.add.tween(this).to({
        y: this.y + distance
      }).to({
        y: this.y
      }).to({
        y: this.y - distance
      }).to({
        y: this.y
      }).loop().start();
    }
  }, {
    key: 'addShake',
    value: function addShake() {
      var amplitude = 5;
      var time = 1;

      this.game.add.tween(this).to({
        x: this.x + amplitude
      }, time).to({
        x: this.x
      }, time).to({
        x: this.x - amplitude
      }, time).to({
        x: this.x
      }, time).loop().start();
    }
  }]);

  return SpringMan;
}(Phaser.Sprite);

Engine.SpringMan = SpringMan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmluZ21hbi5qcyJdLCJuYW1lcyI6WyJTcHJpbmdNYW4iLCJnYW1lIiwieCIsInkiLCJFbmdpbmUiLCJzcHJpdGVzaGVldCIsIndpZHRoIiwiaGVpZ2h0IiwicGh5c2ljcyIsImFyY2FkZSIsImVuYWJsZSIsImFkZFZlcnRpY2FsZU1vdmUiLCJhZGRTaGFrZSIsImRpc3RhbmNlIiwiYWRkIiwidHdlZW4iLCJ0byIsImxvb3AiLCJzdGFydCIsImFtcGxpdHVkZSIsInRpbWUiLCJQaGFzZXIiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLElBQVosRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QjtBQUFBOztBQUFBLHNIQUNoQkYsSUFEZ0IsRUFDVkMsQ0FEVSxFQUNQQyxDQURPLEVBQ0pDLE9BQU9DLFdBREgsRUFDZ0IscUJBRGhCOztBQUd0QixVQUFLQyxLQUFMLElBQWMsSUFBZDtBQUNBLFVBQUtDLE1BQUwsSUFBZSxJQUFmOztBQUVBLFVBQUtOLElBQUwsQ0FBVU8sT0FBVixDQUFrQkMsTUFBbEIsQ0FBeUJDLE1BQXpCLENBQWdDLE9BQWhDOztBQUVBLFVBQUtDLGdCQUFMO0FBQ0EsVUFBS0MsUUFBTDtBQVRzQjtBQVV2Qjs7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsV0FBVyxFQUFqQjs7QUFFQSxXQUFLWixJQUFMLENBQVVhLEdBQVYsQ0FBY0MsS0FBZCxDQUFvQixJQUFwQixFQUNHQyxFQURILENBQ007QUFDRmIsV0FBRyxLQUFLQSxDQUFMLEdBQVNVO0FBRFYsT0FETixFQUlHRyxFQUpILENBSU07QUFDRmIsV0FBRyxLQUFLQTtBQUROLE9BSk4sRUFPR2EsRUFQSCxDQU9NO0FBQ0ZiLFdBQUcsS0FBS0EsQ0FBTCxHQUFTVTtBQURWLE9BUE4sRUFVR0csRUFWSCxDQVVNO0FBQ0ZiLFdBQUcsS0FBS0E7QUFETixPQVZOLEVBYUdjLElBYkgsR0FjR0MsS0FkSDtBQWVEOzs7K0JBRVU7QUFDVCxVQUFNQyxZQUFZLENBQWxCO0FBQ0EsVUFBTUMsT0FBTyxDQUFiOztBQUVBLFdBQUtuQixJQUFMLENBQVVhLEdBQVYsQ0FBY0MsS0FBZCxDQUFvQixJQUFwQixFQUNHQyxFQURILENBQ007QUFDRmQsV0FBRyxLQUFLQSxDQUFMLEdBQVNpQjtBQURWLE9BRE4sRUFHS0MsSUFITCxFQUlHSixFQUpILENBSU07QUFDRmQsV0FBRyxLQUFLQTtBQUROLE9BSk4sRUFNS2tCLElBTkwsRUFPR0osRUFQSCxDQU9NO0FBQ0ZkLFdBQUcsS0FBS0EsQ0FBTCxHQUFTaUI7QUFEVixPQVBOLEVBU0tDLElBVEwsRUFVR0osRUFWSCxDQVVNO0FBQ0ZkLFdBQUcsS0FBS0E7QUFETixPQVZOLEVBWUtrQixJQVpMLEVBYUdILElBYkgsR0FjR0MsS0FkSDtBQWVEOzs7O0VBcERxQkcsT0FBT0MsTTs7QUF1RC9CbEIsT0FBT0osU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoic3ByaW5nbWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3ByaW5nTWFuIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCAnc3ByaW5nTWFuX3N0YW5kLnBuZycpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSAwLjM1XHJcbiAgICB0aGlzLmhlaWdodCAqPSAwLjM1XHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShbIHRoaXMgXSlcclxuXHJcbiAgICB0aGlzLmFkZFZlcnRpY2FsZU1vdmUoKVxyXG4gICAgdGhpcy5hZGRTaGFrZSgpXHJcbiAgfVxyXG5cclxuICBhZGRWZXJ0aWNhbGVNb3ZlKCkge1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSA1MFxyXG5cclxuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcylcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLnkgKyBkaXN0YW5jZVxyXG4gICAgICB9KVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMueVxyXG4gICAgICB9KVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMueSAtIGRpc3RhbmNlXHJcbiAgICAgIH0pXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy55XHJcbiAgICAgIH0pXHJcbiAgICAgIC5sb29wKClcclxuICAgICAgLnN0YXJ0KClcclxuICB9XHJcblxyXG4gIGFkZFNoYWtlKCkge1xyXG4gICAgY29uc3QgYW1wbGl0dWRlID0gNVxyXG4gICAgY29uc3QgdGltZSA9IDFcclxuXHJcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeDogdGhpcy54ICsgYW1wbGl0dWRlXHJcbiAgICAgIH0sIHRpbWUpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeDogdGhpcy54XHJcbiAgICAgIH0sIHRpbWUpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeDogdGhpcy54IC0gYW1wbGl0dWRlXHJcbiAgICAgIH0sIHRpbWUpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeDogdGhpcy54XHJcbiAgICAgIH0sIHRpbWUpXHJcbiAgICAgIC5sb29wKClcclxuICAgICAgLnN0YXJ0KClcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5TcHJpbmdNYW4gPSBTcHJpbmdNYW5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trail = function (_Phaser$Particles$Arc) {
  _inherits(Trail, _Phaser$Particles$Arc);

  function Trail(game, maxParticles, follow) {
    _classCallCheck(this, Trail);

    var _this = _possibleConstructorReturn(this, (Trail.__proto__ || Object.getPrototypeOf(Trail)).call(this, game, 0, 0, maxParticles));

    _this.makeParticles('particles', 0, maxParticles, true);
    _this.lifespan = 500;

    _this._particlesEmit = 3;
    _this._delayEmit = 35;
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
        var particleFram = this.game.rnd.between(0, 4);

        this.emitParticle(this._follow.x, this._follow.y + this._follow.height / 1.1, 'particles', particleFram);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLmpzIl0sIm5hbWVzIjpbIlRyYWlsIiwiZ2FtZSIsIm1heFBhcnRpY2xlcyIsImZvbGxvdyIsIm1ha2VQYXJ0aWNsZXMiLCJsaWZlc3BhbiIsIl9wYXJ0aWNsZXNFbWl0IiwiX2RlbGF5RW1pdCIsIl9mb2xsb3ciLCJfdGltZXJFbW1pdGluZyIsInRpbWUiLCJjcmVhdGUiLCJsb29wIiwiZW1pdCIsInN0YXJ0IiwiaSIsInBhcnRpY2xlRnJhbSIsInJuZCIsImJldHdlZW4iLCJlbWl0UGFydGljbGUiLCJ4IiwieSIsImhlaWdodCIsInBhdXNlIiwicmVzdW1lIiwiUGhhc2VyIiwiUGFydGljbGVzIiwiQXJjYWRlIiwiRW1pdHRlciIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsWUFBbEIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUEsOEdBQ2hDRixJQURnQyxFQUMxQixDQUQwQixFQUN2QixDQUR1QixFQUNwQkMsWUFEb0I7O0FBR3RDLFVBQUtFLGFBQUwsQ0FBbUIsV0FBbkIsRUFBZ0MsQ0FBaEMsRUFBbUNGLFlBQW5DLEVBQWlELElBQWpEO0FBQ0EsVUFBS0csUUFBTCxHQUFnQixHQUFoQjs7QUFFQSxVQUFLQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLE9BQUwsR0FBZUwsTUFBZjs7QUFFQSxVQUFLTSxjQUFMLEdBQXNCLE1BQUtSLElBQUwsQ0FBVVMsSUFBVixDQUFlQyxNQUFmLEVBQXRCO0FBQ0EsVUFBS0YsY0FBTCxDQUFvQkcsSUFBcEIsQ0FBeUIsTUFBS0wsVUFBOUIsRUFBMEMsTUFBS00sSUFBL0M7QUFDQSxVQUFLSixjQUFMLENBQW9CSyxLQUFwQjtBQVpzQztBQWF2Qzs7OzsyQkFFTTtBQUNMLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtULGNBQXpCLEVBQXlDUyxHQUF6QyxFQUE4QztBQUM1QyxZQUFNQyxlQUFlLEtBQUtmLElBQUwsQ0FBVWdCLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUFyQjs7QUFFQSxhQUFLQyxZQUFMLENBQ0UsS0FBS1gsT0FBTCxDQUFhWSxDQURmLEVBRUUsS0FBS1osT0FBTCxDQUFhYSxDQUFiLEdBQWlCLEtBQUtiLE9BQUwsQ0FBYWMsTUFBYixHQUFzQixHQUZ6QyxFQUdFLFdBSEYsRUFJRU4sWUFKRjtBQU1EO0FBQ0Y7OztnQ0FFVztBQUNWLFdBQUtQLGNBQUwsQ0FBb0JjLEtBQXBCO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtkLGNBQUwsQ0FBb0JlLE1BQXBCO0FBQ0Q7Ozs7RUFuQ2lCQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QkMsTzs7QUFzQzVDQyxPQUFPN0IsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6InRyYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhaWwgZXh0ZW5kcyBQaGFzZXIuUGFydGljbGVzLkFyY2FkZS5FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBtYXhQYXJ0aWNsZXMsIGZvbGxvdykge1xyXG4gICAgc3VwZXIoZ2FtZSwgMCwgMCwgbWF4UGFydGljbGVzKVxyXG5cclxuICAgIHRoaXMubWFrZVBhcnRpY2xlcygncGFydGljbGVzJywgMCwgbWF4UGFydGljbGVzLCB0cnVlKVxyXG4gICAgdGhpcy5saWZlc3BhbiA9IDUwMFxyXG5cclxuICAgIHRoaXMuX3BhcnRpY2xlc0VtaXQgPSAzXHJcbiAgICB0aGlzLl9kZWxheUVtaXQgPSAzNVxyXG4gICAgdGhpcy5fZm9sbG93ID0gZm9sbG93XHJcblxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZyA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZSgpXHJcbiAgICB0aGlzLl90aW1lckVtbWl0aW5nLmxvb3AodGhpcy5fZGVsYXlFbWl0LCB0aGlzLmVtaXQsIHRoaXMpXHJcbiAgICB0aGlzLl90aW1lckVtbWl0aW5nLnN0YXJ0KClcclxuICB9XHJcblxyXG4gIGVtaXQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhcnRpY2xlc0VtaXQ7IGkrKykge1xyXG4gICAgICBjb25zdCBwYXJ0aWNsZUZyYW0gPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oMCwgNClcclxuXHJcbiAgICAgIHRoaXMuZW1pdFBhcnRpY2xlKFxyXG4gICAgICAgIHRoaXMuX2ZvbGxvdy54LFxyXG4gICAgICAgIHRoaXMuX2ZvbGxvdy55ICsgdGhpcy5fZm9sbG93LmhlaWdodCAvIDEuMSxcclxuICAgICAgICAncGFydGljbGVzJyxcclxuICAgICAgICBwYXJ0aWNsZUZyYW1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5wYXVzZSgpXHJcbiAgfVxyXG5cclxuICBzdGFydEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5yZXN1bWUoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLlRyYWlsID0gVHJhaWxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
            font: '25px Arial'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4tY291bnRlci5qcyJdLCJuYW1lcyI6WyJDb2luQ291bnRlciIsImdhbWUiLCJ4IiwieSIsInN0eWxlIiwiZmlsbCIsImZvbnQiLCJmaXhlZFRvQ2FtZXJhIiwic2NvcmUiLCJFbmdpbmUiLCJTZXJ2aWNlIiwiZ2V0IiwidXBkYXRlQ29pbnMiLCJhZGQiLCJ1cGRhdGVDb2luc0NvdW50IiwiY3JlYXRlSWNvbiIsIndpZHRoIiwiY29pbiIsIm1ha2UiLCJzcHJpdGUiLCJzcHJpdGVzaGVldCIsImFuY2hvciIsInNldFRvIiwiZm9udFNpemUiLCJoZWlnaHQiLCJhZGRDaGlsZCIsIm9mZnNldFgiLCJjYW1lcmFPZmZzZXQiLCJvZmZzZXRZIiwidGV4dCIsImNvaW5zIiwiUGhhc2VyIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxXOzs7QUFDSix5QkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQ3RCLFlBQU1DLFFBQVE7QUFDWkMsa0JBQU0sU0FETSxFQUNLO0FBQ2pCQyxrQkFBTTtBQUZNLFNBQWQ7O0FBRHNCLDhIQU1oQkwsSUFOZ0IsRUFNVkMsQ0FOVSxFQU1QQyxDQU5PLEVBTUosR0FOSSxFQU1DQyxLQU5EOztBQVF0QixjQUFLRyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsT0FBbkIsQ0FBYjtBQUNBLGNBQUtILEtBQUwsQ0FBV0ksV0FBWCxDQUF1QkMsR0FBdkIsQ0FBMkIsTUFBS0MsZ0JBQWhDOztBQUVBLGNBQUtDLFVBQUw7QUFac0I7QUFhdkI7Ozs7cUNBRVk7QUFDWCxnQkFBSWIsSUFBSSxLQUFLYyxLQUFMLEdBQWEsQ0FBckI7QUFDQSxnQkFBSWIsSUFBSSxDQUFSOztBQUVBLGdCQUFJYyxPQUFPLEtBQUtoQixJQUFMLENBQVVpQixJQUFWLENBQWVDLE1BQWYsQ0FDVGpCLENBRFMsRUFFVEMsQ0FGUyxFQUdUTSxPQUFPVyxXQUhFLEVBSVQsZUFKUyxDQUFYOztBQU9BSCxpQkFBS0ksTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCOztBQUVBTCxpQkFBS0QsS0FBTCxHQUFhLEtBQUtPLFFBQWxCO0FBQ0FOLGlCQUFLTyxNQUFMLEdBQWMsS0FBS0QsUUFBbkI7O0FBRUEsaUJBQUtFLFFBQUwsQ0FBY1IsSUFBZDs7QUFFQSxnQkFBTVMsVUFBVSxLQUFLQyxZQUFMLENBQWtCekIsQ0FBbEIsR0FBc0JlLEtBQUtELEtBQTNDO0FBQ0EsZ0JBQU1ZLFVBQVUsS0FBS0QsWUFBTCxDQUFrQnhCLENBQWxDOztBQUVBLGlCQUFLd0IsWUFBTCxDQUFrQkwsS0FBbEIsQ0FBd0JJLE9BQXhCLEVBQWlDRSxPQUFqQztBQUNEOzs7MkNBRWtCO0FBQ2pCLGlCQUFLQyxJQUFMLFFBQWUsS0FBS3JCLEtBQUwsQ0FBV3NCLEtBQTFCO0FBQ0Q7Ozs7RUExQ3VCQyxPQUFPQyxJOztBQTZDakN2QixPQUFPVCxXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJjb2luLWNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb2luQ291bnRlciBleHRlbmRzIFBoYXNlci5UZXh0IHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJyMwMEI4RDQnLCAvLyAyMTk2RjNcclxuICAgICAgZm9udDogJzI1cHggQXJpYWwnXHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJzAnLCBzdHlsZSlcclxuXHJcbiAgICB0aGlzLmZpeGVkVG9DYW1lcmEgPSB0cnVlXHJcbiAgICB0aGlzLnNjb3JlID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdTY29yZScpXHJcbiAgICB0aGlzLnNjb3JlLnVwZGF0ZUNvaW5zLmFkZCh0aGlzLnVwZGF0ZUNvaW5zQ291bnQsIHRoaXMpXHJcblxyXG4gICAgdGhpcy5jcmVhdGVJY29uKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUljb24oKSB7XHJcbiAgICBsZXQgeCA9IHRoaXMud2lkdGggKiAyXHJcbiAgICBsZXQgeSA9IDFcclxuXHJcbiAgICBsZXQgY29pbiA9IHRoaXMuZ2FtZS5tYWtlLnNwcml0ZShcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgRW5naW5lLnNwcml0ZXNoZWV0LFxyXG4gICAgICAnY29pbl9nb2xkLnBuZydcclxuICAgIClcclxuXHJcbiAgICBjb2luLmFuY2hvci5zZXRUbygxLCAwKVxyXG5cclxuICAgIGNvaW4ud2lkdGggPSB0aGlzLmZvbnRTaXplXHJcbiAgICBjb2luLmhlaWdodCA9IHRoaXMuZm9udFNpemVcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGNvaW4pXHJcblxyXG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMuY2FtZXJhT2Zmc2V0LnggLSBjb2luLndpZHRoXHJcbiAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5jYW1lcmFPZmZzZXQueVxyXG5cclxuICAgIHRoaXMuY2FtZXJhT2Zmc2V0LnNldFRvKG9mZnNldFgsIG9mZnNldFkpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb2luc0NvdW50KCkge1xyXG4gICAgdGhpcy50ZXh0ID0gYCR7dGhpcy5zY29yZS5jb2luc31gXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQ29pbkNvdW50ZXIgPSBDb2luQ291bnRlclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
      font: '43px Arial'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RhY2UuanMiXSwibmFtZXMiOlsiRGlzdGFuY2UiLCJnYW1lIiwieCIsInkiLCJzdHlsZSIsImZpbGwiLCJmb250IiwiZml4ZWRUb0NhbWVyYSIsInNjb3JlIiwiRW5naW5lIiwiU2VydmljZSIsImdldCIsIm9uVXBkYXRlIiwiYWRkIiwidXBkYXRlRGlzdGFuY2UiLCJ0ZXh0IiwiY3VycmVudERpc3RhbmNlIiwiUGhhc2VyIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFDSixvQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQ3RCLFFBQU1DLFFBQVE7QUFDWkMsWUFBTSxTQURNO0FBRVpDLFlBQU07QUFGTSxLQUFkOztBQURzQixvSEFNaEJMLElBTmdCLEVBTVZDLENBTlUsRUFNUEMsQ0FOTyxFQU1KLElBTkksRUFNRUMsS0FORjs7QUFRdEIsVUFBS0csYUFBTCxHQUFxQixJQUFyQjtBQUNBLFVBQUtDLEtBQUwsR0FBYUMsT0FBT0MsT0FBUCxDQUFlQyxHQUFmLENBQW1CLE9BQW5CLENBQWI7QUFDQSxVQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLE1BQUtDLGNBQTdCO0FBVnNCO0FBV3ZCOzs7O3FDQUVnQjtBQUNmLFdBQUtDLElBQUwsR0FBZSxLQUFLUCxLQUFMLENBQVdRLGVBQTFCO0FBQ0Q7Ozs7RUFoQm9CQyxPQUFPQyxJOztBQW1COUJULE9BQU9ULFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6ImRpc3RhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEaXN0YW5jZSBleHRlbmRzIFBoYXNlci5UZXh0IHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJyMwMEJDRDQnLFxyXG4gICAgICBmb250OiAnNDNweCBBcmlhbCdcclxuICAgIH1cclxuXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnMG0nLCBzdHlsZSlcclxuXHJcbiAgICB0aGlzLmZpeGVkVG9DYW1lcmEgPSB0cnVlXHJcbiAgICB0aGlzLnNjb3JlID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdTY29yZScpXHJcbiAgICB0aGlzLnNjb3JlLm9uVXBkYXRlLmFkZCh0aGlzLnVwZGF0ZURpc3RhbmNlLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzdGFuY2UoKSB7XHJcbiAgICB0aGlzLnRleHQgPSBgJHt0aGlzLnNjb3JlLmN1cnJlbnREaXN0YW5jZX1tYFxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkRpc3RhbmNlID0gRGlzdGFuY2VcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
      font: '75px Arial',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImdhbWUiLCJ4IiwieSIsInRleHQiLCJzdHlsZSIsImZpbGwiLCJmb250IiwiYWxpZ24iLCJzZXRTaGFkb3ciLCJhbHBoYSIsImZpeGVkVG9DYW1lcmEiLCJhbmltYXRpb25UaW1lIiwiYW5pbWF0ZSIsInR3ZWVuIiwiYWRkIiwidG8iLCJpc1J1bm5pbmciLCJjaGFpbiIsInN0YXJ0IiwiUGhhc2VyIiwiVGV4dCIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUFBOztBQUM1QixRQUFNQyxRQUFRO0FBQ1pDLFlBQU0sT0FETTtBQUVaQyxZQUFNLFlBRk07QUFHWkMsYUFBTztBQUhLLEtBQWQ7O0FBRDRCLGtIQU90QlAsSUFQc0IsRUFPaEJDLENBUGdCLEVBT2JDLENBUGEsRUFPVkMsSUFQVSxFQU9KQyxLQVBJOztBQVM1QixVQUFLSSxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQix1QkFBckIsRUFBOEMsQ0FBOUM7O0FBRUEsVUFBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBWjRCO0FBYTdCOzs7O3lCQUVJQyxhLEVBQWU7QUFDbEIsV0FBS0MsT0FBTCxDQUFhLENBQWIsRUFBZ0JELGFBQWhCO0FBQ0Q7Ozt5QkFFSUEsYSxFQUFlO0FBQ2xCLFdBQUtDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCRCxhQUFoQjtBQUNEOzs7NEJBRU9GLEssRUFBNEI7QUFBQSxVQUFyQkUsYUFBcUIsdUVBQUwsR0FBSzs7QUFDbEMsVUFBSUUsUUFBUSxLQUFLYixJQUFMLENBQVVjLEdBQVYsQ0FBY0QsS0FBZCxDQUFvQixJQUFwQixFQUNURSxFQURTLENBQ04sRUFBRU4sWUFBRixFQURNLEVBQ0tFLGFBREwsQ0FBWjs7QUFHQSxVQUFJLEtBQUtFLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdHLFNBQTdCLEVBQXdDO0FBQ3RDLGFBQUtILEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkosS0FBakI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQSxLQUFMLENBQVdLLEtBQVg7QUFDRDtBQUNGOzs7O0VBbENtQkMsT0FBT0MsSTs7QUFxQzdCQyxPQUFPdEIsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGV4dCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGZpbGw6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnQ6ICc3NXB4IEFyaWFsJyxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgdGV4dCwgc3R5bGUpXHJcblxyXG4gICAgdGhpcy5zZXRTaGFkb3coMCwgMiwgJ3JnYmEoMzMsIDMzLCAzMywgMC42KScsIDQpXHJcblxyXG4gICAgdGhpcy5hbHBoYSA9IDBcclxuICAgIHRoaXMuZml4ZWRUb0NhbWVyYSA9IHRydWVcclxuICB9XHJcblxyXG4gIHNob3coYW5pbWF0aW9uVGltZSkge1xyXG4gICAgdGhpcy5hbmltYXRlKDEsIGFuaW1hdGlvblRpbWUpXHJcbiAgfVxyXG5cclxuICBoaWRlKGFuaW1hdGlvblRpbWUpIHtcclxuICAgIHRoaXMuYW5pbWF0ZSgwLCBhbmltYXRpb25UaW1lKVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZShhbHBoYSwgYW5pbWF0aW9uVGltZSA9IDMwMCkge1xyXG4gICAgbGV0IHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKVxyXG4gICAgICAudG8oeyBhbHBoYSB9LCBhbmltYXRpb25UaW1lKVxyXG5cclxuICAgIGlmICh0aGlzLnR3ZWVuICYmIHRoaXMudHdlZW4uaXNSdW5uaW5nKSB7XHJcbiAgICAgIHRoaXMudHdlZW4uY2hhaW4odHdlZW4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnR3ZWVuID0gdHdlZW5cclxuICAgICAgdGhpcy50d2Vlbi5zdGFydCgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuTWVzc2FnZSA9IE1lc3NhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

      this.load.spritesheet('particles', 'assets/sprites/particles.png', 8, 8);
    }
  }, {
    key: 'init',
    value: function init() {
      this.distanceBetweenGrounds = 500;

      // TODO: Rename this
      this._score = Engine.Service.get('Score');
      this._score.coins = 0;

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
      this.createSpikes();
      this.createGrounds();
      this.createCoins();

      this.bunny.addTrail();

      this.configurateCamera();
      this.addControl();
      this.createDistanceLabel();
      this.createCoinsLabel();
      this.createLoseLabel();
      this.createStartLabel();
      this.createBestDistance();
      this.createNominals();

      // TEMP Code

      this.enemies = new Engine.Component.EnemyGenerator(this.game, this.bunny, this.grounds);

      // let enemy = new Engine.SpringMan(this.game, this.bunny.x + 200, this.bunny.y + 150)
      // this.enemies.add(enemy)

      // TEMP END Code
    }
  }, {
    key: 'update',
    value: function update() {
      this.physics.arcade.collide(this.bunny, this.grounds);
      this.physics.arcade.collide(this.bunny.data.trail, this.grounds);
      this.physics.arcade.overlap(this.bunny, this.coins, this.takeCoin, null, this);
      this.physics.arcade.overlap(this.bunny, this.enemies, this.bunny.die, null, this.bunny);
      this.updateDie();

      // TODO: Need incapsulation
      this._score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE);
    }
  }, {
    key: 'takeCoin',
    value: function takeCoin(bunny, coin) {
      var x = this.bunny.x + this.bunny.width / 2;
      var y = this.bunny.y;

      this.nominals.generate(x, y, coin.data.nominal);

      this._score.coins += coin.data.nominal;

      coin.kill();
    }
  }, {
    key: 'render',
    value: function render() {}
  }, {
    key: 'updateDie',
    value: function updateDie() {
      if (this.bunny.y > this.game.height - 100 && !this.bunny.data.isDead) {
        this.bunny.die();
      }
    }
  }, {
    key: 'createSpikes',
    value: function createSpikes() {
      var PROTOTYPE = new Engine.Spike(this.game, 0, 0);
      var COUNT = (this.game.width + this.bunny.x) / PROTOTYPE.width;

      this.bottomSpikes = new Engine.Component.BottomSpikeGenerator(this.game, this.bunny, PROTOTYPE);

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
      if (this._score.bestDistance < this._score.currentDistance) {
        this._score.bestDistance = this._score.currentDistance;
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this.startLabel.hide();
      this.bunny.run();
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
      this.startLabel = new Engine.Message(this.game, this.game.width / 2, this.game.height / 2, 'Press spacebar\r\nfor start');

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
      var _this2 = this;

      var hotkey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
      hotkey.onDown.add(this.spacebarDown, this);

      var mouse = this.input.mouse;
      mouse.mouseDownCallback = function () {
        _this2.spacebarDown();
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

      var startGround = new Engine.Ground(this.game, x, y, type, small, broken);

      this.grounds.add(startGround);
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
      for (var i = 1; i < this.game.width / this.distanceBetweenGrounds; i++) {
        this.grounds.generate(i * this.distanceBetweenGrounds);
      }
    }
  }, {
    key: 'configurateCamera',
    value: function configurateCamera() {
      var paddingLeft = 250;
      var smoothMove = 0.15;
      var deadZoneHeight = 50;

      this.camera.roundPx = false;
      this.camera.follow(this.bunny, Phaser.Camera.FOLLOW_LOCKON, 1, smoothMove);
      this.camera.deadzone = new Phaser.Rectangle(paddingLeft, this.game.height / 2 - this.bunny.height * 1.5, 1, deadZoneHeight);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsImxvYWQiLCJhdGxhc1hNTCIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiaW1hZ2UiLCJkaXN0YW5jZUJldHdlZW5Hcm91bmRzIiwiX3Njb3JlIiwiU2VydmljZSIsImdldCIsImNvaW5zIiwid2luZG93IiwiZ2FtZSIsInN0YWdlIiwiYmFja2dyb3VuZENvbG9yIiwicGh5c2ljcyIsInN0YXJ0U3lzdGVtIiwiUGhhc2VyIiwiUGh5c2ljcyIsIkFSQ0FERSIsIndvcmxkIiwic2V0Qm91bmRzIiwiaGVpZ2h0IiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY3JlYXRlQmFja2dyb3VuZCIsImNyZWF0ZUJ1bm55IiwiY3JlYXRlU3Bpa2VzIiwiY3JlYXRlR3JvdW5kcyIsImNyZWF0ZUNvaW5zIiwiYnVubnkiLCJhZGRUcmFpbCIsImNvbmZpZ3VyYXRlQ2FtZXJhIiwiYWRkQ29udHJvbCIsImNyZWF0ZURpc3RhbmNlTGFiZWwiLCJjcmVhdGVDb2luc0xhYmVsIiwiY3JlYXRlTG9zZUxhYmVsIiwiY3JlYXRlU3RhcnRMYWJlbCIsImNyZWF0ZUJlc3REaXN0YW5jZSIsImNyZWF0ZU5vbWluYWxzIiwiZW5lbWllcyIsIkNvbXBvbmVudCIsIkVuZW15R2VuZXJhdG9yIiwiZ3JvdW5kcyIsImFyY2FkZSIsImNvbGxpZGUiLCJkYXRhIiwidHJhaWwiLCJvdmVybGFwIiwidGFrZUNvaW4iLCJkaWUiLCJ1cGRhdGVEaWUiLCJjdXJyZW50RGlzdGFuY2UiLCJNYXRoIiwicm91bmQiLCJ4IiwiU2NvcmUiLCJNVUxUSVBFUl9ESVNUQU5DRSIsImNvaW4iLCJ3aWR0aCIsInkiLCJub21pbmFscyIsImdlbmVyYXRlIiwibm9taW5hbCIsImtpbGwiLCJpc0RlYWQiLCJQUk9UT1RZUEUiLCJTcGlrZSIsIkNPVU5UIiwiYm90dG9tU3Bpa2VzIiwiQm90dG9tU3Bpa2VHZW5lcmF0b3IiLCJpIiwic3Bpa2UiLCJhZGQiLCJOb21pbmFsR2VuZXJhdG9yIiwiYmVzdERpc3RhbmNlIiwiQmVzdERpc3RhbmNlIiwibG9zZUxhYmVsIiwic2hvdyIsInN0YXJ0TGFiZWwiLCJoaWRlIiwicnVuIiwiQ29pbkdlbmVyYXRvciIsIk1lc3NhZ2UiLCJhbmNob3IiLCJzZXRUbyIsImV4aXN0aW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImRpc3RhbmNlTGFiZWwiLCJEaXN0YW5jZSIsInBhZGRpbmciLCJjb2luc0xhYmVsIiwiQ29pbkNvdW50ZXIiLCJob3RrZXkiLCJpbnB1dCIsImtleWJvYXJkIiwiYWRkS2V5IiwiS2V5Q29kZSIsIlNQQUNFQkFSIiwib25Eb3duIiwic3BhY2ViYXJEb3duIiwibW91c2UiLCJtb3VzZURvd25DYWxsYmFjayIsInN0YXRlIiwicmVzdGFydCIsInJ1bm5pbmciLCJqdW1wIiwic3RhcnQiLCJtYXJnaW5Cb3R0b20iLCJ0eXBlIiwiR3JvdW5kIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsInN0YXJ0R3JvdW5kIiwiQnVubnkiLCJvbkRpZWQiLCJsb3NlIiwiR3JvdW5kc0dlbmVyYXRvciIsImNyZWF0ZVN0YXJ0R3JvdW5kIiwiY3JlYXRlRmlyc3RHcm91bmRzIiwicGFkZGluZ0xlZnQiLCJzbW9vdGhNb3ZlIiwiZGVhZFpvbmVIZWlnaHQiLCJjYW1lcmEiLCJyb3VuZFB4IiwiZm9sbG93IiwiQ2FtZXJhIiwiRk9MTE9XX0xPQ0tPTiIsImRlYWR6b25lIiwiUmVjdGFuZ2xlIiwiYmFja2dyb3VuZHMiLCJncm91cCIsIkJhY2tncm91bmQiLCJTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixrQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7OEJBRVM7QUFDUixXQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FDRUMsT0FBT0MsV0FEVCxFQUVFLGdDQUZGLEVBR0UsZ0NBSEY7O0FBTUEsV0FBS0gsSUFBTCxDQUFVSSxLQUFWLENBQWdCLFFBQWhCLEVBQTBCLHVDQUExQjtBQUNBLFdBQUtKLElBQUwsQ0FB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LFdBQUtRLFdBQUwsR0FBbUIsS0FBSzNELEdBQUwsQ0FBUzRELEtBQVQsRUFBbkI7O0FBRUEsV0FBS0QsV0FBTCxDQUFpQjNELEdBQWpCLENBQXFCLElBQUl0RSxPQUFPbUksVUFBWCxDQUFzQixLQUFLMUgsSUFBM0IsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsUUFBdkMsRUFBaUQsQ0FBQyxJQUFsRCxDQUFyQjtBQUNBLFdBQUt3SCxXQUFMLENBQWlCM0QsR0FBakIsQ0FBcUIsSUFBSXRFLE9BQU9tSSxVQUFYLENBQXNCLEtBQUsxSCxJQUEzQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxFQUF1QyxRQUF2QyxFQUFpRCxDQUFDLEdBQWxELENBQXJCO0FBQ0EsV0FBS3dILFdBQUwsQ0FBaUIzRCxHQUFqQixDQUFxQixJQUFJdEUsT0FBT21JLFVBQVgsQ0FBc0IsS0FBSzFILElBQTNCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLFFBQXZDLEVBQWlELENBQUMsSUFBbEQsQ0FBckI7QUFDRDs7OztFQXpSZ0JLLE9BQU9zSCxLOztBQTRSMUJwSSxPQUFPSCxJQUFQLEdBQWNBLElBQWQiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5hdGxhc1hNTChcclxuICAgICAgRW5naW5lLnNwcml0ZXNoZWV0LFxyXG4gICAgICAnYXNzZXRzL3Nwcml0ZXNoZWV0cy9qdW1wZXIucG5nJyxcclxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvanVtcGVyLnhtbCdcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyMicsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjIucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXIzJywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyMy5wbmcnKVxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjQnLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXI0LnBuZycpXHJcblxyXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwYXJ0aWNsZXMnLCAnYXNzZXRzL3Nwcml0ZXMvcGFydGljbGVzLnBuZycsIDgsIDgpXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5kaXN0YW5jZUJldHdlZW5Hcm91bmRzID0gNTAwXHJcblxyXG4gICAgLy8gVE9ETzogUmVuYW1lIHRoaXNcclxuICAgIHRoaXMuX3Njb3JlID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdTY29yZScpXHJcbiAgICB0aGlzLl9zY29yZS5jb2lucyA9IDBcclxuXHJcbiAgICB3aW5kb3cuZ2FtZSA9IHRoaXNcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gMHhBREU2RkZcclxuICAgIHRoaXMucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpXHJcbiAgICB0aGlzLndvcmxkLnNldEJvdW5kcygwLCAtdGhpcy5nYW1lLmhlaWdodCwgTnVtYmVyLk1BWF9WQUxVRSwgdGhpcy5nYW1lLmhlaWdodCAqIDIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJ1bm55KClcclxuICAgIHRoaXMuY3JlYXRlU3Bpa2VzKClcclxuICAgIHRoaXMuY3JlYXRlR3JvdW5kcygpXHJcbiAgICB0aGlzLmNyZWF0ZUNvaW5zKClcclxuXHJcbiAgICB0aGlzLmJ1bm55LmFkZFRyYWlsKClcclxuXHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRlQ2FtZXJhKClcclxuICAgIHRoaXMuYWRkQ29udHJvbCgpXHJcbiAgICB0aGlzLmNyZWF0ZURpc3RhbmNlTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVDb2luc0xhYmVsKClcclxuICAgIHRoaXMuY3JlYXRlTG9zZUxhYmVsKClcclxuICAgIHRoaXMuY3JlYXRlU3RhcnRMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJlc3REaXN0YW5jZSgpXHJcbiAgICB0aGlzLmNyZWF0ZU5vbWluYWxzKClcclxuXHJcbiAgICAvLyBURU1QIENvZGVcclxuXHJcbiAgICB0aGlzLmVuZW1pZXMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5FbmVteUdlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICB0aGlzLmdyb3VuZHNcclxuICAgIClcclxuXHJcbiAgICAvLyBsZXQgZW5lbXkgPSBuZXcgRW5naW5lLlNwcmluZ01hbih0aGlzLmdhbWUsIHRoaXMuYnVubnkueCArIDIwMCwgdGhpcy5idW5ueS55ICsgMTUwKVxyXG4gICAgLy8gdGhpcy5lbmVtaWVzLmFkZChlbmVteSlcclxuXHJcbiAgICAvLyBURU1QIEVORCBDb2RlXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5idW5ueSwgdGhpcy5ncm91bmRzKVxyXG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHRoaXMuYnVubnkuZGF0YS50cmFpbCwgdGhpcy5ncm91bmRzKVxyXG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMuYnVubnksIHRoaXMuY29pbnMsIHRoaXMudGFrZUNvaW4sIG51bGwsIHRoaXMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5idW5ueSwgdGhpcy5lbmVtaWVzLCB0aGlzLmJ1bm55LmRpZSwgbnVsbCwgdGhpcy5idW5ueSlcclxuICAgIHRoaXMudXBkYXRlRGllKClcclxuXHJcbiAgICAvLyBUT0RPOiBOZWVkIGluY2Fwc3VsYXRpb25cclxuICAgIHRoaXMuX3Njb3JlLmN1cnJlbnREaXN0YW5jZSA9IE1hdGgucm91bmQodGhpcy5idW5ueS54IC8gRW5naW5lLlNjb3JlLk1VTFRJUEVSX0RJU1RBTkNFKVxyXG4gIH1cclxuXHJcbiAgdGFrZUNvaW4oYnVubnksIGNvaW4pIHtcclxuICAgIGNvbnN0IHggPSB0aGlzLmJ1bm55LnggKyB0aGlzLmJ1bm55LndpZHRoIC8gMlxyXG4gICAgY29uc3QgeSA9IHRoaXMuYnVubnkueVxyXG5cclxuICAgIHRoaXMubm9taW5hbHMuZ2VuZXJhdGUoeCwgeSwgY29pbi5kYXRhLm5vbWluYWwpXHJcblxyXG4gICAgdGhpcy5fc2NvcmUuY29pbnMgKz0gY29pbi5kYXRhLm5vbWluYWxcclxuXHJcbiAgICBjb2luLmtpbGwoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGllKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmJ1bm55LnkgPiB0aGlzLmdhbWUuaGVpZ2h0IC0gMTAwICYmXHJcbiAgICAgICF0aGlzLmJ1bm55LmRhdGEuaXNEZWFkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5idW5ueS5kaWUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3Bpa2VzKCkge1xyXG4gICAgY29uc3QgUFJPVE9UWVBFID0gbmV3IEVuZ2luZS5TcGlrZSh0aGlzLmdhbWUsIDAsIDApXHJcbiAgICBjb25zdCBDT1VOVCA9ICh0aGlzLmdhbWUud2lkdGggKyB0aGlzLmJ1bm55LngpIC8gUFJPVE9UWVBFLndpZHRoXHJcblxyXG4gICAgdGhpcy5ib3R0b21TcGlrZXMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5Cb3R0b21TcGlrZUdlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICBQUk9UT1RZUEVcclxuICAgIClcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcclxuICAgICAgbGV0IHNwaWtlID0gbmV3IEVuZ2luZS5TcGlrZShcclxuICAgICAgICB0aGlzLmdhbWUsXHJcbiAgICAgICAgaSAqIFBST1RPVFlQRS53aWR0aCxcclxuICAgICAgICB0aGlzLmdhbWUuaGVpZ2h0XHJcbiAgICAgIClcclxuXHJcbiAgICAgIHRoaXMuYm90dG9tU3Bpa2VzLmFkZChzcGlrZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZU5vbWluYWxzKCkge1xyXG4gICAgdGhpcy5ub21pbmFscyA9IG5ldyBFbmdpbmUuQ29tcG9uZW50Lk5vbWluYWxHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmVzdERpc3RhbmNlKCkge1xyXG4gICAgdGhpcy5iZXN0RGlzdGFuY2UgPSBuZXcgRW5naW5lLkJlc3REaXN0YW5jZSh0aGlzLmdhbWUpXHJcbiAgfVxyXG5cclxuICBsb3NlKCkge1xyXG4gICAgdGhpcy5sb3NlTGFiZWwuc2hvdygpXHJcblxyXG4gICAgLy8gVE9ETzogTmVlZCBpbmNhcHN1bGF0aW9uXHJcbiAgICBpZiAodGhpcy5fc2NvcmUuYmVzdERpc3RhbmNlIDwgdGhpcy5fc2NvcmUuY3VycmVudERpc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuX3Njb3JlLmJlc3REaXN0YW5jZSA9IHRoaXMuX3Njb3JlLmN1cnJlbnREaXN0YW5jZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0TGFiZWwuaGlkZSgpXHJcbiAgICB0aGlzLmJ1bm55LnJ1bigpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb2lucygpIHtcclxuICAgIHRoaXMuY29pbnMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5Db2luR2VuZXJhdG9yKHRoaXMuZ2FtZSwgdGhpcy5idW5ueSwgdGhpcy5ncm91bmRzKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTG9zZUxhYmVsKCkge1xyXG4gICAgdGhpcy5sb3NlTGFiZWwgPSBuZXcgRW5naW5lLk1lc3NhZ2UoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC8gMixcclxuICAgICAgdGhpcy5nYW1lLmhlaWdodCAvIDIsXHJcbiAgICAgICdZb3UgbG9zZSA6LShcXHJcXG5QcmVzcyBzcGFjZWJhcidcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmxvc2VMYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5sb3NlTGFiZWwpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVTdGFydExhYmVsKCkge1xyXG4gICAgdGhpcy5zdGFydExhYmVsID0gbmV3IEVuZ2luZS5NZXNzYWdlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAvIDIsXHJcbiAgICAgIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLFxyXG4gICAgICAnUHJlc3Mgc3BhY2ViYXJcXHJcXG5mb3Igc3RhcnQnXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5zdGFydExhYmVsLmFuY2hvci5zZXRUbygwLjUpXHJcbiAgICB0aGlzLnN0YXJ0TGFiZWwuc2hvdygpXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLnN0YXJ0TGFiZWwpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVEaXN0YW5jZUxhYmVsKCkge1xyXG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IDE1XHJcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSAxMFxyXG5cclxuICAgIHRoaXMuZGlzdGFuY2VMYWJlbCA9IG5ldyBFbmdpbmUuRGlzdGFuY2UoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gbWFyZ2luTGVmdCxcclxuICAgICAgbWFyZ2luVG9wXHJcbiAgICApXHJcbiAgICB0aGlzLmRpc3RhbmNlTGFiZWwuYW5jaG9yLnNldFRvKDEsIDApXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmRpc3RhbmNlTGFiZWwpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb2luc0xhYmVsKCkge1xyXG4gICAgY29uc3QgcGFkZGluZyA9IDIwXHJcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSB0aGlzLmRpc3RhbmNlTGFiZWwueSArIHRoaXMuZGlzdGFuY2VMYWJlbC5oZWlnaHQgLyAyICsgcGFkZGluZ1xyXG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IDE1XHJcblxyXG4gICAgdGhpcy5jb2luc0xhYmVsID0gbmV3IEVuZ2luZS5Db2luQ291bnRlcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLSBtYXJnaW5MZWZ0LFxyXG4gICAgICBtYXJnaW5Ub3BcclxuICAgIClcclxuICAgIHRoaXMuY29pbnNMYWJlbC5hbmNob3Iuc2V0VG8oMSwgMClcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuY29pbnNMYWJlbClcclxuICB9XHJcblxyXG4gIGFkZENvbnRyb2woKSB7XHJcbiAgICBsZXQgaG90a2V5ID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleUNvZGUuU1BBQ0VCQVIpXHJcbiAgICBob3RrZXkub25Eb3duLmFkZCh0aGlzLnNwYWNlYmFyRG93biwgdGhpcylcclxuXHJcbiAgICBsZXQgbW91c2UgPSB0aGlzLmlucHV0Lm1vdXNlXHJcbiAgICBtb3VzZS5tb3VzZURvd25DYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zcGFjZWJhckRvd24oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3BhY2ViYXJEb3duKCkge1xyXG4gICAgaWYgKHRoaXMuYnVubnkuZGF0YS5pc0RlYWQpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5yZXN0YXJ0KHRydWUsIGZhbHNlKVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnVubnkuZGF0YS5ydW5uaW5nKSB7XHJcbiAgICAgIHRoaXMuYnVubnkuanVtcCgpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFydCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTdGFydEdyb3VuZCgpIHtcclxuICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IDI1MFxyXG4gICAgY29uc3QgeCA9IDEwMFxyXG4gICAgY29uc3QgeSA9IHRoaXMuYnVubnkueSArIG1hcmdpbkJvdHRvbVxyXG4gICAgY29uc3QgdHlwZSA9IEdyb3VuZC50eXBlLkdSQVNTXHJcbiAgICBjb25zdCBzbWFsbCA9IGZhbHNlXHJcbiAgICBjb25zdCBicm9rZW4gPSBmYWxzZVxyXG5cclxuICAgIGxldCBzdGFydEdyb3VuZCA9IG5ldyBFbmdpbmUuR3JvdW5kKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHgsXHJcbiAgICAgIHksXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIHNtYWxsLFxyXG4gICAgICBicm9rZW4sXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5ncm91bmRzLmFkZChzdGFydEdyb3VuZClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJ1bm55KCkge1xyXG4gICAgd2luZG93LmJ1bm55ID0gdGhpcy5idW5ueSA9IG5ldyBFbmdpbmUuQnVubnkodGhpcy5nYW1lLCAxNTAsIDE1MCwgJ2J1bm55MicpXHJcbiAgICB0aGlzLmJ1bm55Lm9uRGllZC5hZGQodGhpcy5sb3NlLCB0aGlzKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idW5ueSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZUdyb3VuZHMoKSB7XHJcbiAgICB0aGlzLmdyb3VuZHMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5Hcm91bmRzR2VuZXJhdG9yKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuYnVubnksXHJcbiAgICAgIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kc1xyXG4gICAgKVxyXG4gICAgdGhpcy5jcmVhdGVTdGFydEdyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUZpcnN0R3JvdW5kcygpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaXJzdEdyb3VuZHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZ2FtZS53aWR0aCAvIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kczsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZ3JvdW5kcy5nZW5lcmF0ZShpICogdGhpcy5kaXN0YW5jZUJldHdlZW5Hcm91bmRzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlndXJhdGVDYW1lcmEoKSB7XHJcbiAgICBjb25zdCBwYWRkaW5nTGVmdCA9IDI1MFxyXG4gICAgY29uc3Qgc21vb3RoTW92ZSA9IDAuMTVcclxuICAgIGNvbnN0IGRlYWRab25lSGVpZ2h0ID0gNTBcclxuXHJcbiAgICB0aGlzLmNhbWVyYS5yb3VuZFB4ID0gZmFsc2VcclxuICAgIHRoaXMuY2FtZXJhLmZvbGxvdyh0aGlzLmJ1bm55LCBQaGFzZXIuQ2FtZXJhLkZPTExPV19MT0NLT04sIDEsIHNtb290aE1vdmUpXHJcbiAgICB0aGlzLmNhbWVyYS5kZWFkem9uZSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKHBhZGRpbmdMZWZ0LCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiAtIHRoaXMuYnVubnkuaGVpZ2h0ICogMS41LCAxLCBkZWFkWm9uZUhlaWdodClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJhY2tncm91bmQoKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmRzID0gdGhpcy5hZGQuZ3JvdXAoKVxyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjInLCAtMC4wNSkpXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmFkZChuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXIzJywgLTAuMSkpXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmFkZChuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXI0JywgLTAuMjUpKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkdhbWUgPSBHYW1lXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

Engine.game = new Phaser.Game(Engine.maxWidth, Engine.maxHeight, Phaser.AUTO);

window.onresize = function () {
  Engine.game.scale.setGameSize(window.innerWidth, window.innerHeight);
};

Engine.game.state.add('Boot', Engine.Boot);
Engine.game.state.add('Game', Engine.Game);
Engine.game.state.add('Loader', Engine.Loader);

Engine.game.state.start('Boot');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJFbmdpbmUiLCJnYW1lIiwiUGhhc2VyIiwiR2FtZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiQVVUTyIsIndpbmRvdyIsIm9ucmVzaXplIiwic2NhbGUiLCJzZXRHYW1lU2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInN0YXRlIiwiYWRkIiwiQm9vdCIsIkxvYWRlciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxJQUFQLEdBQWMsSUFBSUMsT0FBT0MsSUFBWCxDQUFnQkgsT0FBT0ksUUFBdkIsRUFBaUNKLE9BQU9LLFNBQXhDLEVBQW1ESCxPQUFPSSxJQUExRCxDQUFkOztBQUVBQyxPQUFPQyxRQUFQLEdBQWtCLFlBQU07QUFDdEJSLFNBQU9DLElBQVAsQ0FBWVEsS0FBWixDQUFrQkMsV0FBbEIsQ0FBOEJILE9BQU9JLFVBQXJDLEVBQWlESixPQUFPSyxXQUF4RDtBQUNELENBRkQ7O0FBSUFaLE9BQU9DLElBQVAsQ0FBWVksS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsTUFBdEIsRUFBOEJkLE9BQU9lLElBQXJDO0FBQ0FmLE9BQU9DLElBQVAsQ0FBWVksS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsTUFBdEIsRUFBOEJkLE9BQU9HLElBQXJDO0FBQ0FILE9BQU9DLElBQVAsQ0FBWVksS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEIsRUFBZ0NkLE9BQU9nQixNQUF2Qzs7QUFFQWhCLE9BQU9DLElBQVAsQ0FBWVksS0FBWixDQUFrQkksS0FBbEIsQ0FBd0IsTUFBeEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiRW5naW5lLmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoRW5naW5lLm1heFdpZHRoLCBFbmdpbmUubWF4SGVpZ2h0LCBQaGFzZXIuQVVUTylcclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICBFbmdpbmUuZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG59XHJcblxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5hZGQoJ0Jvb3QnLCBFbmdpbmUuQm9vdClcclxuRW5naW5lLmdhbWUuc3RhdGUuYWRkKCdHYW1lJywgRW5naW5lLkdhbWUpXHJcbkVuZ2luZS5nYW1lLnN0YXRlLmFkZCgnTG9hZGVyJywgRW5naW5lLkxvYWRlcilcclxuXHJcbkVuZ2luZS5nYW1lLnN0YXRlLnN0YXJ0KCdCb290JylcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
