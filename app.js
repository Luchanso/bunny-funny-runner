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
            if (Math.random() < 0.3) return;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvY29pbi5qcyJdLCJuYW1lcyI6WyJDb2luR2VuZXJhdG9yIiwiZ2FtZSIsImJ1bm55IiwiZ3JvdW5kcyIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsImFkZCIsImNyZWF0ZWROZXdHcm91bmQiLCJwcm90b3R5cGUiLCJFbmdpbmUiLCJDb2luIiwiY3JlYXRlVGVtcGxhdGVzIiwidGVtcGxhdGVzIiwicHVzaCIsImdyb3VuZCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW4iLCJwYWRkaW5nIiwib2Zmc2V0WCIsIngiLCJ3aWR0aCIsIm9mZnNldFkiLCJ5IiwiaGVpZ2h0IiwidGVtcGxhdGUiLCJkYXRhIiwic21hbGwiLCJybmQiLCJwaWNrIiwidGVtcGxhdGVXaWR0aCIsImxlbmd0aCIsInRlbXBsYXRlSGVpZ2h0IiwiaSIsImoiLCJtYXhUeXBlIiwibnVtYmVyIiwidHlwZSIsIkdPTEQiLCJTSUxWRVIiLCJCUk9OWkUiLCJjb2luIiwiZ2V0Rmlyc3REZWFkIiwicmVzZXQiLCJHZW5lcmF0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7O0FBQ0osMkJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQztBQUFBOztBQUFBLGtJQUMxQkYsSUFEMEIsRUFDcEJDLEtBRG9COztBQUdoQyxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQSxPQUFMLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUFrQyxNQUFLQyxnQkFBdkM7O0FBRUEsY0FBS0MsU0FBTCxHQUFpQixJQUFJQyxPQUFPQyxJQUFYLENBQWdCLE1BQUtULElBQXJCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQWpCOztBQUVBLGNBQUtVLGVBQUw7QUFSZ0M7QUFTakM7Ozs7MENBRWlCO0FBQ2hCLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztBQUVBLGlCQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FB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L0MsRUFBa0Q7QUFBRTtBQUN6REUsdUJBQU81QixPQUFPQyxJQUFQLENBQVkyQixJQUFaLENBQWlCRSxNQUF4QjtBQUNELGFBRk0sTUFFQTtBQUFFO0FBQ1BGLHVCQUFPNUIsT0FBT0MsSUFBUCxDQUFZMkIsSUFBWixDQUFpQkcsTUFBeEI7QUFDRDs7QUFFRCxnQkFBSUMsT0FBTyxLQUFLQyxZQUFMLEVBQVg7QUFDQSxnQkFBSUQsUUFBUSxJQUFaLEVBQWtCO0FBQ2hCQSx1QkFBTyxJQUFJaEMsT0FBT0MsSUFBWCxDQUFnQixLQUFLVCxJQUFyQixFQUEyQm1CLENBQTNCLEVBQThCRyxDQUE5QixFQUFpQ2MsSUFBakMsQ0FBUDtBQUNBLHFCQUFLL0IsR0FBTCxDQUFTbUMsSUFBVDtBQUNELGFBSEQsTUFHTztBQUNMQSxxQkFBS0UsS0FBTCxDQUFXdkIsQ0FBWCxFQUFjRyxDQUFkO0FBQ0Q7O0FBRUQsbUJBQU9rQixJQUFQO0FBQ0Q7Ozs7RUF6R3lCRyxTOztBQTRHNUJuQyxPQUFPb0MsU0FBUCxDQUFpQjdDLGFBQWpCLEdBQWlDQSxhQUFqQyIsImZpbGUiOiJnZW5lcmF0b3JzL2NvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb2luR2VuZXJhdG9yIGV4dGVuZHMgR2VuZXJhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZ3JvdW5kcykge1xyXG4gICAgc3VwZXIoZ2FtZSwgYnVubnkpXHJcblxyXG4gICAgdGhpcy5ncm91bmRzID0gZ3JvdW5kc1xyXG4gICAgdGhpcy5ncm91bmRzLnNpZ25hbHMuZ2VuZXJhdGUuYWRkKHRoaXMuY3JlYXRlZE5ld0dyb3VuZCwgdGhpcylcclxuXHJcbiAgICB0aGlzLnByb3RvdHlwZSA9IG5ldyBFbmdpbmUuQ29pbih0aGlzLmdhbWUsIDAsIDApXHJcblxyXG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXMoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGVtcGxhdGVzKCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBbXVxyXG5cclxuICAgIHRoaXMudGVtcGxhdGVzLnB1c2goW1xyXG4gICAgICAgIFswLCAwLCAyLCAzLCAwXSxcclxuICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgIFswLCAxLCAzLCAxLCAwXSxcclxuICAgICAgICBbMSwgMSwgMSwgMSwgMV1cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzMsIDEsIDEsIDNdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAxXSxcclxuICAgICAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICAgICAgWzEsIDAsIDAsIDFdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAxXSxcclxuICAgICAgICBbMiwgMSwgMSwgMl1cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzAsIDMsIDBdLFxyXG4gICAgICAgIFsyLCAwLCAyXSxcclxuICAgICAgICBbMCwgMywgMF1cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzNdXHJcbiAgICBdKVxyXG5cclxuICAgIHRoaXMudGVtcGxhdGVzLnB1c2goW1xyXG4gICAgICAgIFswLCAwLCAwLCAzLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMiwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDIsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgIFsyLCAwLCAwLCAwLCAwLCAwLCAyXSxcclxuICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMV1cclxuICAgIF0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVkTmV3R3JvdW5kKGdyb3VuZCkge1xyXG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjMpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG1hcmdpbiA9IC01XHJcbiAgICBjb25zdCBwYWRkaW5nID0gMVxyXG5cclxuICAgIGxldCBvZmZzZXRYID0gZ3JvdW5kLnggKyBncm91bmQud2lkdGggLyAyICsgdGhpcy5wcm90b3R5cGUud2lkdGggLyAyXHJcbiAgICBsZXQgb2Zmc2V0WSA9IGdyb3VuZC55ICsgbWFyZ2luICsgKyB0aGlzLnByb3RvdHlwZS5oZWlnaHQgLyAyXHJcblxyXG4gICAgbGV0IHRlbXBsYXRlXHJcbiAgICBpZiAoZ3JvdW5kLmRhdGEuc21hbGwpIHtcclxuICAgICAgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc1t0aGlzLmdhbWUucm5kLnBpY2soWzEsIDIsIDNdKV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBsYXRlID0gdGhpcy5nYW1lLnJuZC5waWNrKHRoaXMudGVtcGxhdGVzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZW1wbGF0ZVdpZHRoID0gdGVtcGxhdGVbMF0ubGVuZ3RoICogdGhpcy5wcm90b3R5cGUud2lkdGhcclxuICAgIGxldCB0ZW1wbGF0ZUhlaWdodCA9IHRlbXBsYXRlLmxlbmd0aCAqIHRoaXMucHJvdG90eXBlLmhlaWdodFxyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdGVtcGxhdGUpIHtcclxuICAgICAgZm9yIChsZXQgaiBpbiB0ZW1wbGF0ZVtpXSkge1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZVtpXVtqXSA+IDApIHtcclxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgIG9mZnNldFggKyBqICogKHRoaXMucHJvdG90eXBlLndpZHRoICsgcGFkZGluZykgLSB0ZW1wbGF0ZVdpZHRoIC8gMixcclxuICAgICAgICAgICAgb2Zmc2V0WSArIGkgKiAodGhpcy5wcm90b3R5cGUuaGVpZ2h0ICsgcGFkZGluZykgLSB0ZW1wbGF0ZUhlaWdodCxcclxuICAgICAgICAgICAgdGVtcGxhdGVbaV1bal1cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlKHgsIHksIG1heFR5cGUpIHtcclxuICAgIGNvbnN0IG51bWJlciA9IE1hdGgucmFuZG9tKClcclxuICAgIGxldCB0eXBlID0gMFxyXG5cclxuXHJcbiAgICBpZiAobnVtYmVyIDwgMC4xNSAmJiBtYXhUeXBlID4gMikgeyAvLyAxNSVcclxuICAgICAgdHlwZSA9IEVuZ2luZS5Db2luLnR5cGUuR09MRFxyXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPiAwLjE1ICYmIG51bWJlciA8IDAuNSAmJiBtYXhUeXBlID4gMSkgeyAvLyAlMzVcclxuICAgICAgdHlwZSA9IEVuZ2luZS5Db2luLnR5cGUuU0lMVkVSXHJcbiAgICB9IGVsc2UgeyAvLyA1MCVcclxuICAgICAgdHlwZSA9IEVuZ2luZS5Db2luLnR5cGUuQlJPTlpFXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvaW4gPSB0aGlzLmdldEZpcnN0RGVhZCgpXHJcbiAgICBpZiAoY29pbiA9PSBudWxsKSB7XHJcbiAgICAgIGNvaW4gPSBuZXcgRW5naW5lLkNvaW4odGhpcy5nYW1lLCB4LCB5LCB0eXBlKVxyXG4gICAgICB0aGlzLmFkZChjb2luKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29pbi5yZXNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2luXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQ29tcG9uZW50LkNvaW5HZW5lcmF0b3IgPSBDb2luR2VuZXJhdG9yXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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

    _this.flyMans = _this.game.add.group();
    _this.springMans = _this.game.add.group();
    _this.spikeBalls = _this.game.add.group();

    _this.types = [Engine.SpringMan, Engine.FlyMan, Engine.SpikeBall];
    return _this;
  }

  _createClass(EnemyGenerator, [{
    key: "generate",
    value: function generate(ground) {
      if (Math.random() > 0.3) return;

      var marginLeft = this.game.rnd.between(50, 150);

      var x = 0;
      var y = 0;

      x = ground.x + ground.width + marginLeft;
      y = ground.y + this.game.rnd.between(-75, 75);

      var type = this.game.rnd.pick(this.types);
      var enemy = void 0;

      // TODO: Need refactoring and incapsulations
      switch (type) {
        case Engine.SpringMan:
          enemy = this.springMans.getFirstDead();
          if (enemy == null) {
            enemy = new Engine.SpringMan(this.game, x, y);
          } else {
            enemy.reset(x, y);
          }
          break;
        case Engine.FlyMan:
          enemy = this.flyMans.getFirstDead();
          if (enemy == null) {
            enemy = new Engine.FlyMan(this.game, x, y);
          } else {
            enemy.reset(x, y);
          }
          break;
        case Engine.SpikeBall:
          enemy = this.spikeBalls.getFirstDead();
          if (enemy == null) {
            enemy = new Engine.SpikeBall(this.game, x, y);
          } else {
            enemy.reset(x, y);
          }
          break;
      }

      this.add(enemy);
    }
  }]);

  return EnemyGenerator;
}(Generator);

Engine.Component.EnemyGenerator = EnemyGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZW5lbXkuanMiXSwibmFtZXMiOlsiRW5lbXlHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJncm91bmRzIiwic2lnbmFscyIsImdlbmVyYXRlIiwiYWRkIiwiZmx5TWFucyIsImdyb3VwIiwic3ByaW5nTWFucyIsInNwaWtlQmFsbHMiLCJ0eXBlcyIsIkVuZ2luZSIsIlNwcmluZ01hbiIsIkZseU1hbiIsIlNwaWtlQmFsbCIsImdyb3VuZCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5MZWZ0Iiwicm5kIiwiYmV0d2VlbiIsIngiLCJ5Iiwid2lkdGgiLCJ0eXBlIiwicGljayIsImVuZW15IiwiZ2V0Rmlyc3REZWFkIiwicmVzZXQiLCJHZW5lcmF0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYzs7O0FBQ0osMEJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQztBQUFBOztBQUFBLGdJQUMxQkYsSUFEMEIsRUFDcEJDLEtBRG9COztBQUdoQyxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQSxPQUFMLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUFrQyxNQUFLRCxRQUF2Qzs7QUFFQSxVQUFLRSxPQUFMLEdBQWUsTUFBS04sSUFBTCxDQUFVSyxHQUFWLENBQWNFLEtBQWQsRUFBZjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS1IsSUFBTCxDQUFVSyxHQUFWLENBQWNFLEtBQWQsRUFBbEI7QUFDQSxVQUFLRSxVQUFMLEdBQWtCLE1BQUtULElBQUwsQ0FBVUssR0FBVixDQUFjRSxLQUFkLEVBQWxCOztBQUVBLFVBQUtHLEtBQUwsR0FBYSxDQUNYQyxPQUFPQyxTQURJLEVBRVhELE9BQU9FLE1BRkksRUFHWEYsT0FBT0csU0FISSxDQUFiO0FBVmdDO0FBZWpDOzs7OzZCQUVRQyxNLEVBQVE7QUFDZixVQUFJQyxLQUFLQyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCOztBQUV6QixVQUFNQyxhQUFhLEtBQUtsQixJQUFMLENBQVVtQixHQUFWLENBQWNDLE9BQWQsQ0FBc0IsRUFBdEIsRUFBMEIsR0FBMUIsQ0FBbkI7O0FBRUEsVUFBSUMsSUFBSSxDQUFSO0FBQ0EsVUFBSUMsSUFBSSxDQUFSOztBQUVBRCxVQUFJTixPQUFPTSxDQUFQLEdBQVdOLE9BQU9RLEtBQWxCLEdBQTBCTCxVQUE5QjtBQUNBSSxVQUFJUCxPQUFPTyxDQUFQLEdBQVcsS0FBS3RCLElBQUwsQ0FBVW1CLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixDQUFDLEVBQXZCLEVBQTJCLEVBQTNCLENBQWY7O0FBRUEsVUFBSUksT0FBTyxLQUFLeEIsSUFBTCxDQUFVbUIsR0FBVixDQUFjTSxJQUFkLENBQW1CLEtBQUtmLEtBQXhCLENBQVg7QUFDQSxVQUFJZ0IsY0FBSjs7QUFFQTtBQUNBLGNBQU9GLElBQVA7QUFDRSxhQUFLYixPQUFPQyxTQUFaO0FBQ0VjLGtCQUFRLEtBQUtsQixVQUFMLENBQWdCbUIsWUFBaEIsRUFBUjtBQUNBLGNBQUlELFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsb0JBQVEsSUFBSWYsT0FBT0MsU0FBWCxDQUFxQixLQUFLWixJQUExQixFQUFnQ3FCLENBQWhDLEVBQW1DQyxDQUFuQyxDQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0xJLGtCQUFNRSxLQUFOLENBQVlQLENBQVosRUFBZUMsQ0FBZjtBQUNEO0FBQ0g7QUFDQSxhQUFLWCxPQUFPRSxNQUFaO0FBQ0VhLGtCQUFRLEtBQUtwQixPQUFMLENBQWFxQixZQUFiLEVBQVI7QUFDQSxjQUFJRCxTQUFTLElBQWIsRUFBbUI7QUFDakJBLG9CQUFRLElBQUlmLE9BQU9FLE1BQVgsQ0FBa0IsS0FBS2IsSUFBdkIsRUFBNkJxQixDQUE3QixFQUFnQ0MsQ0FBaEMsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMSSxrQkFBTUUsS0FBTixDQUFZUCxDQUFaLEVBQWVDLENBQWY7QUFDRDtBQUNIO0FBQ0EsYUFBS1gsT0FBT0csU0FBWjtBQUNFWSxrQkFBUSxLQUFLakIsVUFBTCxDQUFnQmtCLFlBQWhCLEVBQVI7QUFDQSxjQUFJRCxTQUFTLElBQWIsRUFBbUI7QUFDakJBLG9CQUFRLElBQUlmLE9BQU9HLFNBQVgsQ0FBcUIsS0FBS2QsSUFBMUIsRUFBZ0NxQixDQUFoQyxFQUFtQ0MsQ0FBbkMsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMSSxrQkFBTUUsS0FBTixDQUFZUCxDQUFaLEVBQWVDLENBQWY7QUFDRDtBQUNIO0FBeEJGOztBQTJCQSxXQUFLakIsR0FBTCxDQUFTcUIsS0FBVDtBQUNEOzs7O0VBN0QwQkcsUzs7QUFnRTdCbEIsT0FBT21CLFNBQVAsQ0FBaUIvQixjQUFqQixHQUFrQ0EsY0FBbEMiLCJmaWxlIjoiZ2VuZXJhdG9ycy9lbmVteS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVuZW15R2VuZXJhdG9yIGV4dGVuZHMgR2VuZXJhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZ3JvdW5kcykge1xyXG4gICAgc3VwZXIoZ2FtZSwgYnVubnkpXHJcblxyXG4gICAgdGhpcy5ncm91bmRzID0gZ3JvdW5kc1xyXG4gICAgdGhpcy5ncm91bmRzLnNpZ25hbHMuZ2VuZXJhdGUuYWRkKHRoaXMuZ2VuZXJhdGUsIHRoaXMpXHJcblxyXG4gICAgdGhpcy5mbHlNYW5zID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICB0aGlzLnNwcmluZ01hbnMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKClcclxuICAgIHRoaXMuc3Bpa2VCYWxscyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG5cclxuICAgIHRoaXMudHlwZXMgPSBbXHJcbiAgICAgIEVuZ2luZS5TcHJpbmdNYW4sXHJcbiAgICAgIEVuZ2luZS5GbHlNYW4sXHJcbiAgICAgIEVuZ2luZS5TcGlrZUJhbGxcclxuICAgIF1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlKGdyb3VuZCkge1xyXG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjMpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oNTAsIDE1MClcclxuXHJcbiAgICBsZXQgeCA9IDBcclxuICAgIGxldCB5ID0gMFxyXG5cclxuICAgIHggPSBncm91bmQueCArIGdyb3VuZC53aWR0aCArIG1hcmdpbkxlZnRcclxuICAgIHkgPSBncm91bmQueSArIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigtNzUsIDc1KVxyXG5cclxuICAgIGxldCB0eXBlID0gdGhpcy5nYW1lLnJuZC5waWNrKHRoaXMudHlwZXMpXHJcbiAgICBsZXQgZW5lbXlcclxuXHJcbiAgICAvLyBUT0RPOiBOZWVkIHJlZmFjdG9yaW5nIGFuZCBpbmNhcHN1bGF0aW9uc1xyXG4gICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgY2FzZSBFbmdpbmUuU3ByaW5nTWFuOlxyXG4gICAgICAgIGVuZW15ID0gdGhpcy5zcHJpbmdNYW5zLmdldEZpcnN0RGVhZCgpXHJcbiAgICAgICAgaWYgKGVuZW15ID09IG51bGwpIHtcclxuICAgICAgICAgIGVuZW15ID0gbmV3IEVuZ2luZS5TcHJpbmdNYW4odGhpcy5nYW1lLCB4LCB5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbmVteS5yZXNldCh4LCB5KVxyXG4gICAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBFbmdpbmUuRmx5TWFuOlxyXG4gICAgICAgIGVuZW15ID0gdGhpcy5mbHlNYW5zLmdldEZpcnN0RGVhZCgpXHJcbiAgICAgICAgaWYgKGVuZW15ID09IG51bGwpIHtcclxuICAgICAgICAgIGVuZW15ID0gbmV3IEVuZ2luZS5GbHlNYW4odGhpcy5nYW1lLCB4LCB5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbmVteS5yZXNldCh4LCB5KVxyXG4gICAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBFbmdpbmUuU3Bpa2VCYWxsOlxyXG4gICAgICAgIGVuZW15ID0gdGhpcy5zcGlrZUJhbGxzLmdldEZpcnN0RGVhZCgpXHJcbiAgICAgICAgaWYgKGVuZW15ID09IG51bGwpIHtcclxuICAgICAgICAgIGVuZW15ID0gbmV3IEVuZ2luZS5TcGlrZUJhbGwodGhpcy5nYW1lLCB4LCB5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbmVteS5yZXNldCh4LCB5KVxyXG4gICAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZChlbmVteSlcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuRW5lbXlHZW5lcmF0b3IgPSBFbmVteUdlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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

      var SPLIT_VERTICAL = 5;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIkdyb3VuZHNHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJkaXN0YW5jZSIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsIlBoYXNlciIsIlNpZ25hbCIsImN1cnJlbnRTdGVwIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsIngiLCJtYXJnaW4iLCJ3aWR0aCIsIlNQTElUX1ZFUlRJQ0FMIiwiU1RBUlRfUE9JTlQiLCJ3b3JsZCIsImJvdW5kcyIsImhlaWdodCIsIkdSSURfSEVJR0hUIiwiUk5EX0hPUklaT05UQUwiLCJSTkRfVkVSVElDQUwiLCJpIiwicm5kIiwicGljayIsImJldHdlZW4iLCJ5IiwiZ3JvdW5kIiwiYWRkUmFuZG9tR3JvdW5kIiwiZGlzcGF0Y2giLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJFbmdpbmUiLCJHcm91bmQiLCJ0eXBlIiwibWFwIiwidmFsIiwic21hbGwiLCJicm9rZW4iLCJnZXRGaXJzdERlYWQiLCJhZGQiLCJyZXNldCIsIkNvbXBvbmVudCIsIkdlbmVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLGdCOzs7QUFDSjs7Ozs7O0FBTUEsNEJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQztBQUFBOztBQUFBLG9JQUMzQkYsSUFEMkIsRUFDckJDLEtBRHFCOztBQUdqQyxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZTtBQUNiQyxnQkFBVSxJQUFJQyxPQUFPQyxNQUFYO0FBREcsS0FBZjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQVBpQztBQVFsQzs7Ozs2QkFFUTtBQUNQOztBQUVBLFVBQUlDLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLVCxLQUFMLENBQVdVLENBQVgsR0FBZSxLQUFLVCxRQUEvQixDQUFYO0FBQ0EsVUFBSVUsU0FBVSxLQUFLWixJQUFMLENBQVVhLEtBQXhCOztBQUVBLFVBQUlMLFNBQVMsS0FBS0QsV0FBbEIsRUFBK0I7QUFDN0IsYUFBS0EsV0FBTCxHQUFtQkMsSUFBbkI7QUFDQSxhQUFLSixRQUFMLENBQWNRLE1BQWQ7QUFDRDtBQUNGOzs7NkJBRVFBLE0sRUFBUTtBQUNmOztBQUVBLFVBQU1FLGlCQUFpQixDQUF2QjtBQUNBLFVBQU1DLGNBQWMsRUFBRSxLQUFLZixJQUFMLENBQVVnQixLQUFWLENBQWdCQyxNQUFoQixDQUF1QkMsTUFBdkIsR0FBZ0MsS0FBS2xCLElBQUwsQ0FBVWtCLE1BQTVDLENBQXBCO0FBQ0EsVUFBTUMsY0FBYyxLQUFLbkIsSUFBTCxDQUFVZ0IsS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDSixjQUFwRDtBQUNBLFVBQU1NLGlCQUFpQixHQUF2QjtBQUNBLFVBQU1DLGVBQWUsRUFBckI7O0FBRUEsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLGNBQXBCLEVBQW9DUSxHQUFwQyxFQUF5QztBQUN2QyxZQUFJLEtBQUt0QixJQUFMLENBQVV1QixHQUFWLENBQWNDLElBQWQsRUFBbUIsTUFBTSxLQUF6QixFQUFKLEVBQXFDOztBQUVyQyxZQUFNYixJQUFJLEtBQUtWLEtBQUwsQ0FBV1UsQ0FBWCxHQUFlQyxNQUFmLEdBQXdCLEtBQUtaLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0UsT0FBZCxDQUFzQixDQUFDTCxjQUF2QixFQUF1Q0EsY0FBdkMsQ0FBbEM7QUFDQSxZQUFNTSxJQUFJWCxjQUFjSSxjQUFjRyxDQUE1QixHQUFnQyxLQUFLdEIsSUFBTCxDQUFVdUIsR0FBVixDQUFjRSxPQUFkLENBQXNCLENBQUNKLFlBQXZCLEVBQXFDQSxZQUFyQyxDQUExQzs7QUFFQSxZQUFJTSxTQUFTLEtBQUtDLGVBQUwsQ0FBcUJqQixDQUFyQixFQUF3QmUsQ0FBeEIsQ0FBYjs7QUFFQSxhQUFLdkIsT0FBTCxDQUFhQyxRQUFiLENBQXNCeUIsUUFBdEIsQ0FBK0JGLE1BQS9CO0FBQ0Q7QUFDRjs7O29DQUVlaEIsQyxFQUFHZSxDLEVBQUc7QUFDcEIsVUFBTUksUUFBUUMsT0FBT0MsSUFBUCxDQUFZQyxPQUFPQyxNQUFQLENBQWNDLElBQTFCLEVBQWdDQyxHQUFoQyxDQUFvQyxlQUFPO0FBQ3ZELGVBQU9ILE9BQU9DLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkUsR0FBbkIsQ0FBUDtBQUNELE9BRmEsQ0FBZDtBQUdBLFVBQU1GLE9BQU8sS0FBS25DLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQk0sS0FBbkIsQ0FBYjtBQUNBLFVBQU1RLFFBQVEsS0FBS3RDLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQixDQUFDLElBQUQsRUFBTyxLQUFQLENBQW5CLENBQWQ7QUFDQSxVQUFNZSxTQUFTLEtBQUt2QyxJQUFMLENBQVV1QixHQUFWLENBQWNDLElBQWQsQ0FBbUIsQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUFuQixDQUFmOztBQUVBLFVBQUlHLFNBQVMsS0FBS2EsWUFBTCxFQUFiO0FBQ0EsVUFBSWIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCQSxpQkFBUyxJQUFJTSxPQUFPQyxNQUFYLENBQ1AsS0FBS2xDLElBREUsRUFFUFcsQ0FGTyxFQUdQZSxDQUhPLEVBSVBTLElBSk8sRUFLUEcsS0FMTyxFQU1QQyxNQU5PLENBQVQ7QUFRQSxhQUFLRSxHQUFMLENBQVNkLE1BQVQ7QUFDRCxPQVZELE1BVU87QUFDTEEsZUFBT2UsS0FBUCxDQUFhL0IsQ0FBYixFQUFnQmUsQ0FBaEIsRUFBbUJTLElBQW5CLEVBQXlCRyxLQUF6QixFQUFnQ0MsTUFBaEM7QUFDRDs7QUFFRCxhQUFPWixNQUFQO0FBQ0Q7Ozs7RUExRTRCTSxPQUFPVSxTQUFQLENBQWlCQyxTOztBQTZFaERYLE9BQU9VLFNBQVAsQ0FBaUI1QyxnQkFBakIsR0FBb0NBLGdCQUFwQyIsImZpbGUiOiJnZW5lcmF0b3JzL2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdyb3VuZHNHZW5lcmF0b3IgZXh0ZW5kcyBFbmdpbmUuQ29tcG9uZW50LkdlbmVyYXRvciB7XHJcbiAgLyoqXHJcbiAgICogR3JvdW5kcyBnZW5lcmF0b3JcclxuICAgKiBAcGFyYW0gIHtQaGFzZXIuR2FtZX0gZ2FtZVxyXG4gICAqIEBwYXJhbSAge0VuZ2luZS5CdW5ueX0gYnVubnkgT2JqZWN0IG9mIGJ1bm55XHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkaXN0YW5jZSBEaXN0YW5jZSBiZXR3ZWVuIGdyb3VuZHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZGlzdGFuY2UpIHtcclxuICAgIHN1cGVyKGdhbWUsIGJ1bm55KVxyXG5cclxuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZVxyXG4gICAgdGhpcy5zaWduYWxzID0ge1xyXG4gICAgICBnZW5lcmF0ZTogbmV3IFBoYXNlci5TaWduYWwoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IC0xXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKVxyXG5cclxuICAgIGxldCBzdGVwID0gTWF0aC5mbG9vcih0aGlzLmJ1bm55LnggLyB0aGlzLmRpc3RhbmNlKVxyXG4gICAgbGV0IG1hcmdpbiA9ICh0aGlzLmdhbWUud2lkdGgpXHJcblxyXG4gICAgaWYgKHN0ZXAgIT09IHRoaXMuY3VycmVudFN0ZXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXBcclxuICAgICAgdGhpcy5nZW5lcmF0ZShtYXJnaW4pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZShtYXJnaW4pIHtcclxuICAgIHN1cGVyLmdlbmVyYXRlKClcclxuXHJcbiAgICBjb25zdCBTUExJVF9WRVJUSUNBTCA9IDVcclxuICAgIGNvbnN0IFNUQVJUX1BPSU5UID0gLSh0aGlzLmdhbWUud29ybGQuYm91bmRzLmhlaWdodCAtIHRoaXMuZ2FtZS5oZWlnaHQpXHJcbiAgICBjb25zdCBHUklEX0hFSUdIVCA9IHRoaXMuZ2FtZS53b3JsZC5ib3VuZHMuaGVpZ2h0IC8gU1BMSVRfVkVSVElDQUxcclxuICAgIGNvbnN0IFJORF9IT1JJWk9OVEFMID0gMTIwXHJcbiAgICBjb25zdCBSTkRfVkVSVElDQUwgPSA3NVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgU1BMSVRfVkVSVElDQUw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5nYW1lLnJuZC5waWNrW3RydWUsIGZhbHNlXSkgY29udGludWVcclxuXHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmJ1bm55LnggKyBtYXJnaW4gKyB0aGlzLmdhbWUucm5kLmJldHdlZW4oLVJORF9IT1JJWk9OVEFMLCBSTkRfSE9SSVpPTlRBTClcclxuICAgICAgY29uc3QgeSA9IFNUQVJUX1BPSU5UICsgR1JJRF9IRUlHSFQgKiBpICsgdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKC1STkRfVkVSVElDQUwsIFJORF9WRVJUSUNBTClcclxuXHJcbiAgICAgIGxldCBncm91bmQgPSB0aGlzLmFkZFJhbmRvbUdyb3VuZCh4LCB5KVxyXG5cclxuICAgICAgdGhpcy5zaWduYWxzLmdlbmVyYXRlLmRpc3BhdGNoKGdyb3VuZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFJhbmRvbUdyb3VuZCh4LCB5KSB7XHJcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKEVuZ2luZS5Hcm91bmQudHlwZSkubWFwKHZhbCA9PiB7XHJcbiAgICAgIHJldHVybiBFbmdpbmUuR3JvdW5kLnR5cGVbdmFsXVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdhbWUucm5kLnBpY2sodHlwZXMpXHJcbiAgICBjb25zdCBzbWFsbCA9IHRoaXMuZ2FtZS5ybmQucGljayhbdHJ1ZSwgZmFsc2VdKVxyXG4gICAgY29uc3QgYnJva2VuID0gdGhpcy5nYW1lLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcblxyXG4gICAgbGV0IGdyb3VuZCA9IHRoaXMuZ2V0Rmlyc3REZWFkKClcclxuICAgIGlmIChncm91bmQgPT0gbnVsbCkge1xyXG4gICAgICBncm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZChcclxuICAgICAgICB0aGlzLmdhbWUsXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgc21hbGwsXHJcbiAgICAgICAgYnJva2VuLFxyXG4gICAgICApXHJcbiAgICAgIHRoaXMuYWRkKGdyb3VuZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyb3VuZC5yZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91bmRcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuR3JvdW5kc0dlbmVyYXRvciA9IEdyb3VuZHNHZW5lcmF0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
      if (Math.random() > 0.1) return; // 10%

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

Engine.Component.JumperGenerator = JumperGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvanVtcGVyLmpzIl0sIm5hbWVzIjpbIkp1bXBlckdlbmVyYXRvciIsImdhbWUiLCJidW5ueSIsImdyb3VuZHMiLCJzaWduYWxzIiwiZ2VuZXJhdGUiLCJhZGQiLCJwcm90b3R5cGUiLCJFbmdpbmUiLCJKdW1wZXIiLCJncm91bmQiLCJNYXRoIiwicmFuZG9tIiwieCIsInJuZCIsImJldHdlZW4iLCJ3aWR0aCIsInkiLCJqdW1wZXIiLCJnZXRGaXJzdERlYWQiLCJyZXNldCIsIkNvbXBvbmVudCIsIkdlbmVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxlOzs7QUFDSiwyQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQUEsa0lBQzFCRixJQUQwQixFQUNwQkMsS0FEb0I7O0FBR2hDLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtBLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLEdBQTlCLENBQWtDLE1BQUtELFFBQXZDOztBQUVBLFVBQUtFLFNBQUwsR0FBaUIsSUFBSUMsT0FBT0MsTUFBWCxDQUFrQixNQUFLUixJQUF2QixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxDQUFqQjtBQU5nQztBQU9qQzs7Ozs2QkFFUVMsTSxFQUFRO0FBQ2YsVUFBSUMsS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QixPQURWLENBQ2lCOztBQUVoQyxVQUFNQyxJQUFJLEtBQUtaLElBQUwsQ0FBVWEsR0FBVixDQUFjQyxPQUFkLENBQ1JMLE9BQU9HLENBREMsRUFFUkgsT0FBT0csQ0FBUCxHQUFXSCxPQUFPTSxLQUFsQixHQUEwQixLQUFLVCxTQUFMLENBQWVTLEtBRmpDLENBQVY7QUFJQSxVQUFNQyxJQUFJUCxPQUFPTyxDQUFqQjs7QUFFQSxVQUFJQyxTQUFTLEtBQUtDLFlBQUwsRUFBYjs7QUFFQSxVQUFJRCxVQUFVLElBQWQsRUFBb0I7QUFDbEJBLGlCQUFTLElBQUlWLE9BQU9DLE1BQVgsQ0FBa0IsS0FBS1IsSUFBdkIsRUFBNkJZLENBQTdCLEVBQWdDSSxDQUFoQyxDQUFUO0FBQ0EsYUFBS1gsR0FBTCxDQUFTWSxNQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0xBLGVBQU9FLEtBQVAsQ0FBYVAsQ0FBYixFQUFnQkksQ0FBaEI7QUFDRDs7QUFFRCxhQUFPQyxNQUFQO0FBQ0Q7Ozs7RUE3QjJCVixPQUFPYSxTQUFQLENBQWlCQyxTOztBQWlDL0NkLE9BQU9hLFNBQVAsQ0FBaUJyQixlQUFqQixHQUFtQ0EsZUFBbkMiLCJmaWxlIjoiZ2VuZXJhdG9ycy9qdW1wZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBKdW1wZXJHZW5lcmF0b3IgZXh0ZW5kcyBFbmdpbmUuQ29tcG9uZW50LkdlbmVyYXRvciB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgYnVubnksIGdyb3VuZHMpIHtcclxuICAgIHN1cGVyKGdhbWUsIGJ1bm55KVxyXG5cclxuICAgIHRoaXMuZ3JvdW5kcyA9IGdyb3VuZHNcclxuICAgIHRoaXMuZ3JvdW5kcy5zaWduYWxzLmdlbmVyYXRlLmFkZCh0aGlzLmdlbmVyYXRlLCB0aGlzKVxyXG5cclxuICAgIHRoaXMucHJvdG90eXBlID0gbmV3IEVuZ2luZS5KdW1wZXIodGhpcy5nYW1lLCAwLCAwKVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGUoZ3JvdW5kKSB7XHJcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuMSkgcmV0dXJuIC8vIDEwJVxyXG5cclxuICAgIGNvbnN0IHggPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oXHJcbiAgICAgIGdyb3VuZC54LFxyXG4gICAgICBncm91bmQueCArIGdyb3VuZC53aWR0aCAtIHRoaXMucHJvdG90eXBlLndpZHRoXHJcbiAgICApXHJcbiAgICBjb25zdCB5ID0gZ3JvdW5kLnlcclxuXHJcbiAgICBsZXQganVtcGVyID0gdGhpcy5nZXRGaXJzdERlYWQoKVxyXG5cclxuICAgIGlmIChqdW1wZXIgPT0gbnVsbCkge1xyXG4gICAgICBqdW1wZXIgPSBuZXcgRW5naW5lLkp1bXBlcih0aGlzLmdhbWUsIHgsIHkpXHJcbiAgICAgIHRoaXMuYWRkKGp1bXBlcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGp1bXBlci5yZXNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBqdW1wZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG5FbmdpbmUuQ29tcG9uZW50Lkp1bXBlckdlbmVyYXRvciA9IEp1bXBlckdlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3QtZGlzdGFuY2UuanMiXSwibmFtZXMiOlsiQmVzdERpc3RhbmNlIiwiZ2FtZSIsInNjb3JlIiwiRW5naW5lIiwiU2VydmljZSIsImdldCIsImJlc3REaXN0YW5jZSIsIngiLCJTY29yZSIsIk1VTFRJUEVSX0RJU1RBTkNFIiwiY3JlYXRlTGFiZWwiLCJjcmVhdGVTdHJpcGUiLCJzdHlsZSIsImZpbGwiLCJmb250IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImxhYmVsIiwiYWRkIiwidGV4dCIsInVwZGF0ZSIsInkiLCJjYW1lcmEiLCJzdHJpcGUiLCJCZXN0RGlzdGFuY2VTdHJpcGUiLCJleGlzdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLFk7QUFDSix3QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQyxLQUFMLEdBQWFDLE9BQU9DLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixPQUFuQixDQUFiOztBQUVBLFFBQUksS0FBS0gsS0FBTCxDQUFXSSxZQUFYLEtBQTRCLENBQWhDLEVBQW1DOztBQUVuQyxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLTSxDQUFMLEdBQVMsS0FBS0wsS0FBTCxDQUFXSSxZQUFYLEdBQTBCSCxPQUFPSyxLQUFQLENBQWFDLGlCQUFoRDs7QUFFQSxTQUFLQyxXQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNEOzs7O2tDQUVhO0FBQUE7O0FBQ1osVUFBTUMsUUFBUTtBQUNaQyxjQUFNLE9BRE07QUFFWkMsY0FBTTtBQUZNLE9BQWQ7QUFJQSxVQUFNQyxhQUFhLEVBQW5CO0FBQ0EsVUFBTUMsWUFBWSxHQUFsQjs7QUFFQSxXQUFLQyxLQUFMLEdBQWEsS0FBS2hCLElBQUwsQ0FBVWlCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQixLQUFLWixDQUFMLEdBQVNRLFVBQTVCLEVBQXdDLENBQXhDLFlBQW1ELEtBQUtiLEtBQUwsQ0FBV0ksWUFBOUQsVUFBaUZNLEtBQWpGLENBQWI7QUFDQSxXQUFLSyxLQUFMLENBQVdHLE1BQVgsR0FBb0IsWUFBTTtBQUN4QixjQUFLSCxLQUFMLENBQVdJLENBQVgsR0FBZSxNQUFLcEIsSUFBTCxDQUFVcUIsTUFBVixDQUFpQkQsQ0FBakIsR0FBcUJMLFNBQXBDO0FBQ0QsT0FGRDtBQUdEOzs7bUNBRWM7QUFDYixXQUFLTyxNQUFMLEdBQWMsSUFBSXBCLE9BQU9xQixrQkFBWCxDQUE4QixLQUFLdkIsSUFBbkMsRUFBeUMsS0FBS00sQ0FBOUMsQ0FBZDtBQUNBLFdBQUtOLElBQUwsQ0FBVWlCLEdBQVYsQ0FBY08sUUFBZCxDQUF1QixLQUFLRixNQUE1QjtBQUNEOzs7Ozs7QUFHSHBCLE9BQU9ILFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6ImJlc3QtZGlzdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCZXN0RGlzdGFuY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHRoaXMuc2NvcmUgPSBFbmdpbmUuU2VydmljZS5nZXQoJ1Njb3JlJylcclxuXHJcbiAgICBpZiAodGhpcy5zY29yZS5iZXN0RGlzdGFuY2UgPT09IDApIHJldHVyblxyXG5cclxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcclxuICAgIHRoaXMueCA9IHRoaXMuc2NvcmUuYmVzdERpc3RhbmNlICogRW5naW5lLlNjb3JlLk1VTFRJUEVSX0RJU1RBTkNFXHJcblxyXG4gICAgdGhpcy5jcmVhdGVMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZVN0cmlwZSgpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbCgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICBmb250OiAnMjZweCBBcmlhbCdcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxMFxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTUwXHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLnggKyBtYXJnaW5MZWZ0LCAwLCBgQmVzdCAke3RoaXMuc2NvcmUuYmVzdERpc3RhbmNlfSBtLmAsIHN0eWxlKVxyXG4gICAgdGhpcy5sYWJlbC51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGFiZWwueSA9IHRoaXMuZ2FtZS5jYW1lcmEueSArIG1hcmdpblRvcFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RyaXBlKCkge1xyXG4gICAgdGhpcy5zdHJpcGUgPSBuZXcgRW5naW5lLkJlc3REaXN0YW5jZVN0cmlwZSh0aGlzLmdhbWUsIHRoaXMueClcclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5zdHJpcGUpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQmVzdERpc3RhbmNlID0gQmVzdERpc3RhbmNlXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blood = function (_Phaser$Particles$Arc) {
    _inherits(Blood, _Phaser$Particles$Arc);

    function Blood(game, follow) {
        _classCallCheck(this, Blood);

        var particles = 500;
        var speed = 1000;

        var _this = _possibleConstructorReturn(this, (Blood.__proto__ || Object.getPrototypeOf(Blood)).call(this, game, 0, 0, particles));

        _this.follow = follow;

        _this.makeParticles('particles', [0, 1, 2, 3, 4], 1000, true);
        _this.bounce.setTo(1);
        _this.gravity = 0;
        _this.minParticleSpeed.setTo(-speed, -speed);
        _this.maxParticleSpeed.setTo(speed, speed);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kLmpzIl0sIm5hbWVzIjpbIkJsb29kIiwiZ2FtZSIsImZvbGxvdyIsInBhcnRpY2xlcyIsInNwZWVkIiwibWFrZVBhcnRpY2xlcyIsImJvdW5jZSIsInNldFRvIiwiZ3Jhdml0eSIsIm1pblBhcnRpY2xlU3BlZWQiLCJtYXhQYXJ0aWNsZVNwZWVkIiwiZXhwbG9kZSIsImxpZmVzcGFuIiwiZnJlcXVlbmN5IiwicXVhbnRpdHkiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0Iiwic3RhcnQiLCJQaGFzZXIiLCJQYXJ0aWNsZXMiLCJBcmNhZGUiLCJFbWl0dGVyIiwiRW5naW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQjtBQUFBOztBQUN4QixZQUFNQyxZQUFZLEdBQWxCO0FBQ0EsWUFBTUMsUUFBUSxJQUFkOztBQUZ3QixrSEFJbEJILElBSmtCLEVBSVosQ0FKWSxFQUlULENBSlMsRUFJTkUsU0FKTTs7QUFNeEIsY0FBS0QsTUFBTCxHQUFjQSxNQUFkOztBQUVBLGNBQUtHLGFBQUwsQ0FBbUIsV0FBbkIsRUFBZ0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQyxFQUFpRCxJQUFqRCxFQUF1RCxJQUF2RDtBQUNBLGNBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsY0FBS0MsZ0JBQUwsQ0FBc0JGLEtBQXRCLENBQTRCLENBQUNILEtBQTdCLEVBQW9DLENBQUNBLEtBQXJDO0FBQ0EsY0FBS00sZ0JBQUwsQ0FBc0JILEtBQXRCLENBQTRCSCxLQUE1QixFQUFtQ0EsS0FBbkM7QUFad0I7QUFhekI7Ozs7d0NBRWU7QUFDZCxnQkFBTU8sVUFBVSxJQUFoQjtBQUNBLGdCQUFNQyxXQUFXLElBQWpCO0FBQ0EsZ0JBQU1DLFlBQVksSUFBbEI7QUFDQSxnQkFBTUMsV0FBVyxHQUFqQjs7QUFFQSxpQkFBS0MsQ0FBTCxHQUFTLEtBQUtiLE1BQUwsQ0FBWWEsQ0FBWixHQUFnQixLQUFLYixNQUFMLENBQVljLEtBQVosR0FBb0IsQ0FBN0M7QUFDQSxpQkFBS0MsQ0FBTCxHQUFTLEtBQUtmLE1BQUwsQ0FBWWUsQ0FBWixHQUFnQixLQUFLZixNQUFMLENBQVlnQixNQUFaLEdBQXFCLENBQTlDOztBQUVBLGlCQUFLQyxLQUFMLENBQVdSLE9BQVgsRUFBb0JDLFFBQXBCLEVBQThCQyxTQUE5QixFQUF5Q0MsUUFBekM7QUFDRDs7OztFQTFCaUJNLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCQyxPOztBQThCNUNDLE9BQU94QixLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiYmxvb2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCbG9vZCBleHRlbmRzIFBoYXNlci5QYXJ0aWNsZXMuQXJjYWRlLkVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGZvbGxvdykge1xyXG4gICAgY29uc3QgcGFydGljbGVzID0gNTAwXHJcbiAgICBjb25zdCBzcGVlZCA9IDEwMDBcclxuXHJcbiAgICBzdXBlcihnYW1lLCAwLCAwLCBwYXJ0aWNsZXMpXHJcblxyXG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3dcclxuXHJcbiAgICB0aGlzLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlcycsIFswLCAxLCAyLCAzLCA0XSwgMTAwMCwgdHJ1ZSlcclxuICAgIHRoaXMuYm91bmNlLnNldFRvKDEpXHJcbiAgICB0aGlzLmdyYXZpdHkgPSAwXHJcbiAgICB0aGlzLm1pblBhcnRpY2xlU3BlZWQuc2V0VG8oLXNwZWVkLCAtc3BlZWQpXHJcbiAgICB0aGlzLm1heFBhcnRpY2xlU3BlZWQuc2V0VG8oc3BlZWQsIHNwZWVkKVxyXG4gIH1cclxuXHJcbiAgcGxheUFuaW1hdGlvbigpIHtcclxuICAgIGNvbnN0IGV4cGxvZGUgPSB0cnVlXHJcbiAgICBjb25zdCBsaWZlc3BhbiA9IDUwMDBcclxuICAgIGNvbnN0IGZyZXF1ZW5jeSA9IG51bGxcclxuICAgIGNvbnN0IHF1YW50aXR5ID0gMjAwXHJcblxyXG4gICAgdGhpcy54ID0gdGhpcy5mb2xsb3cueCArIHRoaXMuZm9sbG93LndpZHRoIC8gMlxyXG4gICAgdGhpcy55ID0gdGhpcy5mb2xsb3cueSArIHRoaXMuZm9sbG93LmhlaWdodCAvIDJcclxuXHJcbiAgICB0aGlzLnN0YXJ0KGV4cGxvZGUsIGxpZmVzcGFuLCBmcmVxdWVuY3ksIHF1YW50aXR5KVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkVuZ2luZS5CbG9vZCA9IEJsb29kXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
    _this.body.maxVelocity.setTo(400, 20000);
    _this.body.collideWorldBounds = true;
    _this.body.checkCollision.top = false;

    _this.onDied = new Phaser.Signal();

    _this.createAnimation();
    _this.createDieAnimation();
    _this.animations.play('run');

    _this.addSounds();
    return _this;
  }

  _createClass(Bunny, [{
    key: 'addSounds',
    value: function addSounds() {
      this.dieSound = this.game.sound.add('lose');
      this.jumpSound = this.game.sound.add('jump');
    }
  }, {
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
      return;
      if (this.data.isDead) return;

      this.dieSound.play();
      this.playDieAnimation();

      var animationDownTime = 1000;
      var animationUpTime = 100;
      var upMove = 100;

      this.game.camera.unfollow();

      this.body.velocity.setTo(0, -1200);
      this.body.acceleration.setTo(0);
      this.body.gravity.setTo(0, 4000);
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
    key: 'jump',
    value: function jump() {
      if (this.data.isDead) return;

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

Bunny.MAX_JUMPS = 20;
Bunny.ACCELERATION = 2000;
Bunny.BASE_MAX_SPEED = 500;

Engine.Bunny = Bunny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bm55LmpzIl0sIm5hbWVzIjpbIkJ1bm55IiwiZ2FtZSIsIngiLCJ5IiwibmFtZSIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiZGF0YSIsImlzRGVhZCIsInJ1bm5pbmciLCJjb3VudEp1bXAiLCJNQVhfSlVNUFMiLCJwaHlzaWNzIiwiYXJjYWRlIiwiZW5hYmxlIiwid2lkdGgiLCJoZWlnaHQiLCJib2R5IiwiZ3Jhdml0eSIsInNldFRvIiwibWF4VmVsb2NpdHkiLCJjb2xsaWRlV29ybGRCb3VuZHMiLCJjaGVja0NvbGxpc2lvbiIsInRvcCIsIm9uRGllZCIsIlBoYXNlciIsIlNpZ25hbCIsImNyZWF0ZUFuaW1hdGlvbiIsImNyZWF0ZURpZUFuaW1hdGlvbiIsImFuaW1hdGlvbnMiLCJwbGF5IiwiYWRkU291bmRzIiwiZGllU291bmQiLCJzb3VuZCIsImFkZCIsImp1bXBTb3VuZCIsInBhcnRpY2xzZSIsInRyYWlsIiwiVHJhaWwiLCJleGlzdGluZyIsImluQWlyIiwic3RhcnRFbWl0dCIsInN0b3BFbWl0dCIsImJ1bm55IiwidG91Y2hpbmciLCJkb3duIiwicGxheURpZUFuaW1hdGlvbiIsImFuaW1hdGlvbkRvd25UaW1lIiwiYW5pbWF0aW9uVXBUaW1lIiwidXBNb3ZlIiwiY2FtZXJhIiwidW5mb2xsb3ciLCJ2ZWxvY2l0eSIsImFjY2VsZXJhdGlvbiIsImRpc3BhdGNoIiwiYmxvb2QiLCJCbG9vZCIsInBsYXlBbmltYXRpb24iLCJCQVNFX01BWF9TUEVFRCIsIkFDQ0VMRVJBVElPTiIsImp1bXBJbXB1bHNlIiwiU3ByaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxJQUFaLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JDLElBQXhCLEVBQThCO0FBQUE7O0FBQUEsOEdBQ3RCSCxJQURzQixFQUNoQkMsQ0FEZ0IsRUFDYkMsQ0FEYSxFQUNWRSxPQUFPQyxXQURHLEVBQ1VGLE9BQU8sWUFEakI7O0FB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QXJELE9BQU9MLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJidW5ueS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJ1bm55IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgbmFtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCBuYW1lICsgJ19zdGFuZC5wbmcnKVxyXG5cclxuICAgIHRoaXMuZGF0YS5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuY291bnRKdW1wID0gQnVubnkuTUFYX0pVTVBTXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShbIHRoaXMgXSlcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuMzVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuMzVcclxuXHJcbiAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXRUbygwLCAyNTAwKVxyXG4gICAgdGhpcy5ib2R5Lm1heFZlbG9jaXR5LnNldFRvKDQwMCwgMjAwMDApXHJcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZVxyXG4gICAgdGhpcy5ib2R5LmNoZWNrQ29sbGlzaW9uLnRvcCA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5vbkRpZWQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpXHJcblxyXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gICAgdGhpcy5jcmVhdGVEaWVBbmltYXRpb24oKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3J1bicpXHJcblxyXG4gICAgdGhpcy5hZGRTb3VuZHMoKVxyXG4gIH1cclxuXHJcbiAgYWRkU291bmRzKCkge1xyXG4gICAgdGhpcy5kaWVTb3VuZCA9IHRoaXMuZ2FtZS5zb3VuZC5hZGQoJ2xvc2UnKVxyXG4gICAgdGhpcy5qdW1wU291bmQgPSB0aGlzLmdhbWUuc291bmQuYWRkKCdqdW1wJylcclxuICB9XHJcblxyXG4gIGFkZFRyYWlsKCkge1xyXG4gICAgY29uc3QgcGFydGljbHNlID0gMjUwXHJcbiAgICB0aGlzLmRhdGEudHJhaWwgPSBuZXcgRW5naW5lLlRyYWlsKHRoaXMuZ2FtZSwgcGFydGljbHNlLCB0aGlzKVxyXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmRhdGEudHJhaWwpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmlzRGVhZCkgcmV0dXJuXHJcblxyXG4gICAgaWYgKHRoaXMuaW5BaXIoKSkge1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RhcnRFbWl0dCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdqdW1wJylcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnJ1bm5pbmcpe1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RhcnRFbWl0dCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG4gICAgICB0aGlzLmRhdGEuY291bnRKdW1wID0gQnVubnkuTUFYX0pVTVBTXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RvcEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluQWlyKCkge1xyXG4gICAgcmV0dXJuICFidW5ueS5ib2R5LnRvdWNoaW5nLmRvd25cclxuICB9XHJcblxyXG4gIGRpZSgpIHtcclxuICAgIHJldHVyblxyXG4gICAgaWYgKHRoaXMuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIHRoaXMuZGllU291bmQucGxheSgpXHJcbiAgICB0aGlzLnBsYXlEaWVBbmltYXRpb24oKVxyXG5cclxuICAgIGNvbnN0IGFuaW1hdGlvbkRvd25UaW1lID0gMTAwMFxyXG4gICAgY29uc3QgYW5pbWF0aW9uVXBUaW1lID0gMTAwXHJcbiAgICBjb25zdCB1cE1vdmUgPSAxMDBcclxuXHJcbiAgICB0aGlzLmdhbWUuY2FtZXJhLnVuZm9sbG93KClcclxuXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgLTEyMDApXHJcbiAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnNldFRvKDApXHJcbiAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXRUbygwLCA0MDAwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gdHJ1ZVxyXG4gICAgdGhpcy5kYXRhLnRyYWlsLnN0b3BFbWl0dCgpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnaHVydCcpXHJcblxyXG4gICAgdGhpcy5vbkRpZWQuZGlzcGF0Y2goKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGllQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhLmJsb29kID0gbmV3IEVuZ2luZS5CbG9vZCh0aGlzLmdhbWUsIHRoaXMpXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZGF0YS5ibG9vZClcclxuICB9XHJcblxyXG4gIHBsYXlEaWVBbmltYXRpb24oKSB7XHJcbiAgICB0aGlzLmRhdGEuYmxvb2QucGxheUFuaW1hdGlvbigpXHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IHRydWVcclxuICAgIHRoaXMuYm9keS52ZWxvY2l0eS5zZXRUbyhCdW5ueS5CQVNFX01BWF9TUEVFRCwgMClcclxuICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24uc2V0VG8oQnVubnkuQUNDRUxFUkFUSU9OLCAwKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnanVtcCcsIFt0aGlzLmRhdGEubmFtZSArICdfanVtcC5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3J1bicsIFt0aGlzLmRhdGEubmFtZSArICdfd2FsazEucG5nJywgdGhpcy5kYXRhLm5hbWUgKyAnX3dhbGsyLnBuZyddLCAxMCwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2h1cnQnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX2h1cnQucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdyZWFkeScsIFt0aGlzLmRhdGEubmFtZSArICdfcmVhZHkucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFt0aGlzLmRhdGEubmFtZSArICdfc3RhbmQucG5nJ10sIDEsIHRydWUpXHJcbiAgfVxyXG5cclxuICBqdW1wKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGp1bXBJbXB1bHNlID0gOTAwXHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5jb3VudEp1bXAgPiAwKSB7XHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gLWp1bXBJbXB1bHNlXHJcbiAgICAgIHRoaXMuZGF0YS5jb3VudEp1bXAtLVxyXG4gICAgICB0aGlzLmp1bXBTb3VuZC5wbGF5KClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkJ1bm55Lk1BWF9KVU1QUyA9IDIwXHJcbkJ1bm55LkFDQ0VMRVJBVElPTiA9IDIwMDBcclxuQnVubnkuQkFTRV9NQVhfU1BFRUQgPSA1MDBcclxuXHJcbkVuZ2luZS5CdW5ueSA9IEJ1bm55XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4uanMiXSwibmFtZXMiOlsiQ29pbiIsImdhbWUiLCJ4IiwieSIsInR5cGUiLCJHT0xEIiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJ3aWR0aCIsImhlaWdodCIsImFuY2hvciIsInNldFRvIiwicGh5c2ljcyIsImVuYWJsZSIsImRhdGEiLCJCUk9OWkUiLCJub21pbmFsIiwiU0lMVkVSIiwiY3JlYXRlQW5pbWF0aW9uIiwiY3JlYXRlU291bmRzIiwic291bmQiLCJhZGQiLCJjb3VudENvaW5zRnJhbWUiLCJhbmltYXRpb25GcmFtZXMiLCJpIiwicHVzaCIsImFuaW1hdGlvbnMiLCJwbGF5IiwiZnJhbWUiLCJQaGFzZXIiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQStDO0FBQUEsUUFBdkJDLElBQXVCLHVFQUFoQkosS0FBS0ksSUFBTCxDQUFVQyxJQUFNOztBQUFBOztBQUFBLDRHQUN2Q0osSUFEdUMsRUFDakNDLENBRGlDLEVBQzlCQyxDQUQ4QixFQUMzQkcsT0FBT0MsV0FEb0IsRUFDUEgsT0FBTyxRQURBOztBQUc3QyxVQUFLSSxLQUFMLElBQWMsSUFBZDtBQUNBLFVBQUtDLE1BQUwsSUFBZSxJQUFmO0FBQ0EsVUFBS0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCLEdBQWxCOztBQUVBLFVBQUtWLElBQUwsQ0FBVVcsT0FBVixDQUFrQkMsTUFBbEIsQ0FBeUIsT0FBekI7O0FBRUEsVUFBS0MsSUFBTCxDQUFVVixJQUFWLEdBQWlCQSxJQUFqQjs7QUFFQSxZQUFPQSxJQUFQO0FBQ0UsV0FBS0UsT0FBT04sSUFBUCxDQUFZSSxJQUFaLENBQWlCVyxNQUF0QjtBQUNFLGNBQUtELElBQUwsQ0FBVUUsT0FBVixHQUFvQixDQUFwQjtBQUNGO0FBQ0EsV0FBS1YsT0FBT04sSUFBUCxDQUFZSSxJQUFaLENBQWlCYSxNQUF0QjtBQUNFLGNBQUtILElBQUwsQ0FBVUUsT0FBVixHQUFvQixDQUFwQjtBQUNGO0FBQ0EsV0FBS1YsT0FBT04sSUFBUCxDQUFZSSxJQUFaLENBQWlCQyxJQUF0QjtBQUNFLGNBQUtTLElBQUwsQ0FBVUUsT0FBVixHQUFvQixDQUFwQjtBQUNGO0FBVEY7O0FBWUEsVUFBS0UsZUFBTDtBQUNBLFVBQUtDLFlBQUw7QUF4QjZDO0FBeUI5Qzs7OzttQ0FFYztBQUNiLFdBQUtDLEtBQUwsR0FBYSxLQUFLbkIsSUFBTCxDQUFVbUIsS0FBVixDQUFnQkMsR0FBaEIsQ0FBb0IsTUFBcEIsRUFBNEIsR0FBNUIsQ0FBYjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1DLGtCQUFrQixDQUF4Qjs7QUFFQSxVQUFJQyxrQkFBa0IsRUFBdEI7O0FBRUEsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGVBQXBCLEVBQXFDRSxHQUFyQyxFQUEwQztBQUN4QztBQUNBRCx3QkFBZ0JFLElBQWhCLENBQXdCLEtBQUtYLElBQUwsQ0FBVVYsSUFBbEMsU0FBMENvQixDQUExQztBQUNEOztBQUVELFdBQUtFLFVBQUwsQ0FBZ0JMLEdBQWhCLENBQW9CLFFBQXBCLEVBQThCRSxlQUE5QixFQUErQyxFQUEvQyxFQUFtRCxJQUFuRDtBQUNBLFdBQUtHLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLFFBQXJCO0FBQ0Q7OzswQkFFS3pCLEMsRUFBR0MsQyxFQUFHQyxJLEVBQU07QUFDaEIsd0dBQVlGLENBQVosRUFBZUMsQ0FBZjs7QUFFQSxXQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLd0IsS0FBTCxHQUFheEIsT0FBTyxRQUFwQjtBQUNBOztBQUVBLFdBQUtjLGVBQUw7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS0UsS0FBTCxDQUFXTyxJQUFYO0FBQ0Q7Ozs7RUExRGdCRSxPQUFPQyxNOztBQTZEMUI5QixLQUFLSSxJQUFMLEdBQVk7QUFDVkMsUUFBTSxNQURJO0FBRVZZLFVBQVEsUUFGRTtBQUdWRixVQUFRO0FBSEUsQ0FBWjs7QUFNQVQsT0FBT04sSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6ImNvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb2luIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdHlwZSA9IENvaW4udHlwZS5HT0xEKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIHR5cGUgKyAnXzEucG5nJylcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuMjVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuMjVcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSlcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoW3RoaXNdKVxyXG5cclxuICAgIHRoaXMuZGF0YS50eXBlID0gdHlwZVxyXG5cclxuICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgIGNhc2UgRW5naW5lLkNvaW4udHlwZS5CUk9OWkU6XHJcbiAgICAgICAgdGhpcy5kYXRhLm5vbWluYWwgPSAxXHJcbiAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgRW5naW5lLkNvaW4udHlwZS5TSUxWRVI6XHJcbiAgICAgICAgdGhpcy5kYXRhLm5vbWluYWwgPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgRW5naW5lLkNvaW4udHlwZS5HT0xEOlxyXG4gICAgICAgIHRoaXMuZGF0YS5ub21pbmFsID0gOFxyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9uKClcclxuICAgIHRoaXMuY3JlYXRlU291bmRzKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNvdW5kcygpIHtcclxuICAgIHRoaXMuc291bmQgPSB0aGlzLmdhbWUuc291bmQuYWRkKCdjb2luJywgMC40KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgY291bnRDb2luc0ZyYW1lID0gN1xyXG5cclxuICAgIGxldCBhbmltYXRpb25GcmFtZXMgPSBbXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY291bnRDb2luc0ZyYW1lOyBpKyspIHtcclxuICAgICAgLy8gaWYgKGkgPT09IDQpIGNvbnRpbnVlXHJcbiAgICAgIGFuaW1hdGlvbkZyYW1lcy5wdXNoKGAke3RoaXMuZGF0YS50eXBlfV8ke2l9LnBuZ2ApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgncm90YXRlJywgYW5pbWF0aW9uRnJhbWVzLCAxNSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdyb3RhdGUnKVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoeCwgeSwgdHlwZSkge1xyXG4gICAgc3VwZXIucmVzZXQoeCwgeSlcclxuXHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICB0aGlzLmZyYW1lID0gdHlwZSArICdfMS5wbmcnXHJcbiAgICAvLyB0aGlzLmFuaW1hdGlvbnMuY3VycmVudEFuaW0uZGVzdHJveSgpXHJcblxyXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgdGFrZSgpIHtcclxuICAgIHRoaXMuc291bmQucGxheSgpXHJcbiAgfVxyXG59XHJcblxyXG5Db2luLnR5cGUgPSB7XHJcbiAgR09MRDogJ2dvbGQnLFxyXG4gIFNJTFZFUjogJ3NpbHZlcicsXHJcbiAgQlJPTlpFOiAnYnJvbnplJyxcclxufVxyXG5cclxuRW5naW5lLkNvaW4gPSBDb2luXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZW15LmpzIl0sIm5hbWVzIjpbIkVuZW15IiwiZ2FtZSIsIngiLCJ5IiwibmFtZSIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwicGh5c2ljcyIsImFyY2FkZSIsImVuYWJsZSIsImJvZHkiLCJpbW1vdmFibGUiLCJ3aWR0aCIsInNjYWxlUmF0aW8iLCJoZWlnaHQiLCJQaGFzZXIiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLElBQVosRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFBQTs7QUFBQSw4R0FDdEJILElBRHNCLEVBQ2hCQyxDQURnQixFQUNiQyxDQURhLEVBQ1ZFLE9BQU9DLFdBREcsRUFDVUYsSUFEVjs7QUFHNUIsVUFBS0gsSUFBTCxDQUFVTSxPQUFWLENBQWtCQyxNQUFsQixDQUF5QkMsTUFBekIsQ0FBZ0MsT0FBaEM7QUFDQSxVQUFLQyxJQUFMLENBQVVDLFNBQVYsR0FBc0IsSUFBdEI7O0FBRUEsVUFBS0MsS0FBTCxJQUFjUCxPQUFPUSxVQUFyQjtBQUNBLFVBQUtDLE1BQUwsSUFBZVQsT0FBT1EsVUFBdEI7QUFQNEI7QUFRN0I7Ozs7MEJBRUssQ0FFTDs7OztFQWJpQkUsT0FBT0MsTTs7QUFnQjNCWCxPQUFPTCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiZW5lbXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIG5hbWUpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIEVuZ2luZS5zcHJpdGVzaGVldCwgbmFtZSlcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKFsgdGhpcyBdKVxyXG4gICAgdGhpcy5ib2R5LmltbW92YWJsZSA9IHRydWVcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IEVuZ2luZS5zY2FsZVJhdGlvXHJcbiAgICB0aGlzLmhlaWdodCAqPSBFbmdpbmUuc2NhbGVSYXRpb1xyXG4gIH1cclxuXHJcbiAgZGllKCkge1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5FbmVteSA9IEVuZW15XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
    return _this;
  }

  _createClass(FlyMan, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZseW1hbi5qcyJdLCJuYW1lcyI6WyJGbHlNYW4iLCJnYW1lIiwieCIsInkiLCJ2ZXJ0aWNhbGVUd2VlbiIsImFkZFZlcnRpY2FsZU1vdmUiLCJkaXN0YW5jZSIsInJuZCIsImJldHdlZW4iLCJ0aW1lIiwiYWRkIiwidHdlZW4iLCJ0byIsImxvb3AiLCJzdGFydCIsImltcHVsc2UiLCJ0d2VlbnMiLCJyZW1vdmVGcm9tIiwiYm9keSIsImFuZ3VsYXJWZWxvY2l0eSIsInZlbG9jaXR5IiwiZ3Jhdml0eSIsInNldFRvIiwiRW5naW5lIiwiRW5lbXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQUEsZ0hBQ2hCRixJQURnQixFQUNWQyxDQURVLEVBQ1BDLENBRE8sRUFDSixnQkFESTs7QUFHdEIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQyxnQkFBTCxFQUF0QjtBQUhzQjtBQUl2Qjs7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsV0FBVyxLQUFLTCxJQUFMLENBQVVNLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixFQUF0QixFQUEwQixHQUExQixDQUFqQjtBQUNBLFVBQU1DLE9BQU8sS0FBS1IsSUFBTCxDQUFVTSxHQUFWLENBQWNDLE9BQWQsQ0FBc0IsR0FBdEIsRUFBMkIsSUFBM0IsQ0FBYjs7QUFFQSxhQUFPLEtBQUtQLElBQUwsQ0FBVVMsR0FBVixDQUFjQyxLQUFkLENBQW9CLElBQXBCLEVBQ0pDLEVBREksQ0FDRDtBQUNGVCxXQUFHLEtBQUtBLENBQUwsR0FBU0c7QUFEVixPQURDLEVBR0ZHLElBSEUsRUFJSkcsRUFKSSxDQUlEO0FBQ0ZULFdBQUcsS0FBS0E7QUFETixPQUpDLEVBTUZNLElBTkUsRUFPSkcsRUFQSSxDQU9EO0FBQ0ZULFdBQUcsS0FBS0EsQ0FBTCxHQUFTRztBQURWLE9BUEMsRUFTRkcsSUFURSxFQVVKRyxFQVZJLENBVUQ7QUFDRlQsV0FBRyxLQUFLQTtBQUROLE9BVkMsRUFZRk0sSUFaRSxFQWFKSSxJQWJJLEdBY0pDLEtBZEksRUFBUDtBQWVEOzs7MEJBRUtaLEMsRUFBR0MsQyxFQUFHO0FBQ1YsNEdBQVlELENBQVosRUFBZUMsQ0FBZjs7QUFFQSxXQUFLRSxnQkFBTDtBQUNEOzs7MEJBRUs7QUFDSixVQUFNVSxVQUFVLEdBQWhCOztBQUVBLFdBQUtkLElBQUwsQ0FBVWUsTUFBVixDQUFpQkMsVUFBakIsQ0FBNEIsSUFBNUI7QUFDQSxXQUFLQyxJQUFMLENBQVVDLGVBQVYsR0FBNEIsS0FBS2xCLElBQUwsQ0FBVU0sR0FBVixDQUFjQyxPQUFkLENBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLENBQTVCO0FBQ0EsV0FBS1UsSUFBTCxDQUFVRSxRQUFWLENBQW1CakIsQ0FBbkIsR0FBdUIsQ0FBQ1ksT0FBeEI7QUFDQSxXQUFLRyxJQUFMLENBQVVHLE9BQVYsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCLElBQTdCO0FBQ0Q7OzsyQkFFTTtBQUNMLFdBQUtyQixJQUFMLENBQVVlLE1BQVYsQ0FBaUJDLFVBQWpCLENBQTRCLElBQTVCOztBQUVBO0FBQ0Q7Ozs7RUEvQ2tCTSxPQUFPQyxLOztBQWtENUJELE9BQU92QixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJmbHltYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGbHlNYW4gZXh0ZW5kcyBFbmdpbmUuRW5lbXkge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdmbHlNYW5fZmx5LnBuZycpXHJcblxyXG4gICAgdGhpcy52ZXJ0aWNhbGVUd2VlbiA9IHRoaXMuYWRkVmVydGljYWxlTW92ZSgpXHJcbiAgfVxyXG5cclxuICBhZGRWZXJ0aWNhbGVNb3ZlKCkge1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oNTAsIDEyNSlcclxuICAgIGNvbnN0IHRpbWUgPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oODUwLCAxMjUwKVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy55ICsgZGlzdGFuY2VcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLnlcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLnkgLSBkaXN0YW5jZVxyXG4gICAgICB9LCB0aW1lKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMueVxyXG4gICAgICB9LCB0aW1lKVxyXG4gICAgICAubG9vcCgpXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5KSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG5cclxuICAgIHRoaXMuYWRkVmVydGljYWxlTW92ZSgpXHJcbiAgfVxyXG5cclxuICBkaWUoKSB7XHJcbiAgICBjb25zdCBpbXB1bHNlID0gNDAwXHJcblxyXG4gICAgdGhpcy5nYW1lLnR3ZWVucy5yZW1vdmVGcm9tKHRoaXMpXHJcbiAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDEwMCwgNjAwKVxyXG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAtaW1wdWxzZVxyXG4gICAgdGhpcy5ib2R5LmdyYXZpdHkuc2V0VG8oMjAwLCAyMDAwKVxyXG4gIH1cclxuXHJcbiAga2lsbCgpIHtcclxuICAgIHRoaXMuZ2FtZS50d2VlbnMucmVtb3ZlRnJvbSh0aGlzKVxyXG5cclxuICAgIHN1cGVyLmtpbGwoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkZseU1hbiA9IEZseU1hblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
        _this.body.checkCollision.bottom = false;
        _this.body.checkCollision.left = false;

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

            this.body.checkCollision.left = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VuZC5qcyJdLCJuYW1lcyI6WyJHcm91bmQiLCJnYW1lIiwieCIsInkiLCJ0eXBlIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsIm5hbWUiLCJnZXROYW1lIiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJ3aWR0aCIsImhlaWdodCIsImF1dG9DdWxsIiwicGh5c2ljcyIsImVuYWJsZSIsImJvZHkiLCJpbW1vdmFibGUiLCJjaGVja0NvbGxpc2lvbiIsImJvdHRvbSIsImxlZnQiLCJkYXRhIiwiZnJhbWUiLCJQaGFzZXIiLCJTcHJpdGUiLCJDQUtFIiwiU0FORCIsIlNOT1ciLCJTVE9ORSIsIldPT0QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixvQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQWlGO0FBQUEsWUFBekRDLElBQXlELHVFQUFsREosT0FBT0ksSUFBUCxDQUFZQyxLQUFzQztBQUFBLFlBQS9CQyxLQUErQix1RUFBdkIsS0FBdUI7QUFBQSxZQUFoQkMsTUFBZ0IsdUVBQVAsS0FBTzs7QUFBQTs7QUFDL0UsWUFBTUMsT0FBT1IsT0FBT1MsT0FBUCxDQUFlTCxJQUFmLEVBQXFCRSxLQUFyQixFQUE0QkMsTUFBNUIsQ0FBYjs7QUFEK0Usb0hBR3pFTixJQUh5RSxFQUduRUMsQ0FIbUUsRUFHaEVDLENBSGdFLEVBRzdETyxPQUFPQyxXQUhzRCxFQUd6Q0gsSUFIeUM7O0FBSy9FLGNBQUtJLEtBQUwsSUFBYyxJQUFkO0FBQ0EsY0FBS0MsTUFBTCxJQUFlLElBQWY7O0FBRUEsY0FBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxjQUFLYixJQUFMLENBQVVjLE9BQVYsQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCO0FBQ0EsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEdBQXNCLElBQXRCO0FBQ0EsY0FBS0QsSUFBTCxDQUFVRSxjQUFWLENBQXlCQyxNQUF6QixHQUFrQyxLQUFsQztBQUNBLGNBQUtILElBQUwsQ0FBVUUsY0FBVixDQUF5QkUsSUFBekIsR0FBZ0MsS0FBaEM7O0FBRUEsY0FBS0MsSUFBTCxDQUFVZCxJQUFWLEdBQWlCQSxJQUFqQjtBQUNBLGNBQUtjLElBQUwsQ0FBVWxCLElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsY0FBS2tCLElBQUwsQ0FBVWhCLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0EsY0FBS2dCLElBQUwsQ0FBVWYsTUFBVixHQUFtQkEsTUFBbkI7QUFsQitFO0FBbUJoRjs7Ozs4QkFFS0wsQyxFQUFHQyxDLEVBQUdDLEksRUFBTUUsSyxFQUFPQyxNLEVBQVE7QUFDL0Isa0hBQVlMLENBQVosRUFBZUMsQ0FBZjs7QUFFQSxnQkFBTUssT0FBT1IsT0FBT1MsT0FBUCxDQUFlTCxJQUFmLEVBQXFCRSxLQUFyQixFQUE0QkMsTUFBNUIsQ0FBYjs7QUFFQSxpQkFBS2dCLEtBQUwsR0FBYWYsSUFBYjs7QUFFQSxpQkFBS2MsSUFBTCxDQUFVZCxJQUFWLEdBQWlCQSxJQUFqQjtBQUNBLGlCQUFLYyxJQUFMLENBQVVsQixJQUFWLEdBQWlCQSxJQUFqQjtBQUNBLGlCQUFLa0IsSUFBTCxDQUFVaEIsS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxpQkFBS2dCLElBQUwsQ0FBVWYsTUFBVixHQUFtQkEsTUFBbkI7O0FBRUEsaUJBQUtVLElBQUwsQ0FBVUUsY0FBVixDQUF5QkUsSUFBekIsR0FBZ0MsS0FBaEM7QUFDRDs7OztFQW5Da0JHLE9BQU9DLE07O0FBc0M1QnpCLE9BQU9JLElBQVAsR0FBYztBQUNaQyxXQUFPLE9BREs7QUFFWnFCLFVBQU0sTUFGTTtBQUdaQyxVQUFNLE1BSE07QUFJWkMsVUFBTSxNQUpNO0FBS1pDLFdBQU8sT0FMSztBQU1aQyxVQUFNO0FBTk0sQ0FBZDs7QUFTQTlCLE9BQU9TLE9BQVAsR0FBaUIsVUFBQ0wsSUFBRCxFQUFPRSxLQUFQLEVBQWNDLE1BQWQsRUFBeUI7QUFDeEMsUUFBSUMsbUJBQWlCSixJQUFyQjs7QUFFQSxRQUFJRSxLQUFKLEVBQVdFLFFBQVEsUUFBUjtBQUNYLFFBQUlELE1BQUosRUFBWUMsUUFBUSxTQUFSOztBQUVaQSxZQUFRLE1BQVI7O0FBRUEsV0FBT0EsSUFBUDtBQUNELENBVEQ7O0FBV0FFLE9BQU9WLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Imdyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdyb3VuZCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHR5cGUgPSBHcm91bmQudHlwZS5HUkFTUywgc21hbGwgPSBmYWxzZSwgYnJva2VuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBHcm91bmQuZ2V0TmFtZSh0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG5cclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIEVuZ2luZS5zcHJpdGVzaGVldCwgbmFtZSlcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuNDVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuNDVcclxuXHJcbiAgICB0aGlzLmF1dG9DdWxsID0gdHJ1ZVxyXG5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShbdGhpc10pXHJcbiAgICB0aGlzLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxyXG4gICAgdGhpcy5ib2R5LmNoZWNrQ29sbGlzaW9uLmJvdHRvbSA9IGZhbHNlXHJcbiAgICB0aGlzLmJvZHkuY2hlY2tDb2xsaXNpb24ubGVmdCA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBHcm91bmQuZ2V0TmFtZSh0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG5cclxuICAgIHRoaXMuZnJhbWUgPSBuYW1lXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEudHlwZSA9IHR5cGVcclxuICAgIHRoaXMuZGF0YS5zbWFsbCA9IHNtYWxsXHJcbiAgICB0aGlzLmRhdGEuYnJva2VuID0gYnJva2VuXHJcblxyXG4gICAgdGhpcy5ib2R5LmNoZWNrQ29sbGlzaW9uLmxlZnQgPSBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuR3JvdW5kLnR5cGUgPSB7XHJcbiAgR1JBU1M6ICdncmFzcycsXHJcbiAgQ0FLRTogJ2Nha2UnLFxyXG4gIFNBTkQ6ICdzYW5kJyxcclxuICBTTk9XOiAnc25vdycsXHJcbiAgU1RPTkU6ICdzdG9uZScsXHJcbiAgV09PRDogJ3dvb2QnXHJcbn1cblxuR3JvdW5kLmdldE5hbWUgPSAodHlwZSwgc21hbGwsIGJyb2tlbikgPT4ge1xuICBsZXQgbmFtZSA9IGBncm91bmRfJHt0eXBlfWBcblxuICBpZiAoc21hbGwpIG5hbWUgKz0gJ19zbWFsbCdcbiAgaWYgKGJyb2tlbikgbmFtZSArPSAnX2Jyb2tlbidcblxuICBuYW1lICs9ICcucG5nJ1xuXG4gIHJldHVybiBuYW1lXG59XHJcblxyXG5FbmdpbmUuR3JvdW5kID0gR3JvdW5kXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1bXBlci5qcyJdLCJuYW1lcyI6WyJKdW1wZXIiLCJnYW1lIiwieCIsInkiLCJFbmdpbmUiLCJzcHJpdGVzaGVldCIsIndpZHRoIiwic2NhbGVSYXRpbyIsImhlaWdodCIsImFuY2hvciIsInNldFRvIiwicGh5c2ljcyIsImFyY2FkZSIsImVuYWJsZSIsImFkZEFuaW1hdGlvbnMiLCJhbmltYXRpb25zIiwiYWRkIiwiZGF0YSIsImFjdGl2YXRlZCIsInBsYXkiLCJQaGFzZXIiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQUEsZ0hBQ2hCRixJQURnQixFQUNWQyxDQURVLEVBQ1BDLENBRE8sRUFDSkMsT0FBT0MsV0FESCxFQUNnQixlQURoQjs7QUFHdEIsVUFBS0MsS0FBTCxJQUFjRixPQUFPRyxVQUFyQjtBQUNBLFVBQUtDLE1BQUwsSUFBZUosT0FBT0csVUFBdEI7O0FBRUEsVUFBS0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCOztBQUVBLFVBQUtULElBQUwsQ0FBVVUsT0FBVixDQUFrQkMsTUFBbEIsQ0FBeUJDLE1BQXpCLENBQWdDLE9BQWhDOztBQUVBLFVBQUtDLGFBQUw7QUFWc0I7QUFXdkI7Ozs7b0NBRWU7QUFDZCxXQUFLQyxVQUFMLENBQWdCQyxHQUFoQixDQUFvQixLQUFwQixFQUEyQixDQUFDLGdCQUFELENBQTNCO0FBQ0EsV0FBS0QsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBb0IsT0FBcEIsRUFBNkIsQ0FBQyxZQUFELENBQTdCO0FBQ0EsV0FBS0QsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBb0IsSUFBcEIsRUFBMEIsQ0FBQyxlQUFELENBQTFCO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtDLElBQUwsQ0FBVUMsU0FBVixHQUFzQixJQUF0QjtBQUNBLFdBQUtILFVBQUwsQ0FBZ0JJLElBQWhCLENBQXFCLEtBQXJCO0FBQ0Q7OzswQkFFS2pCLEMsRUFBR0MsQyxFQUFHO0FBQ1YsNEdBQVlELENBQVosRUFBZUMsQ0FBZjtBQUNBLFdBQUtjLElBQUwsQ0FBVUMsU0FBVixHQUFzQixLQUF0QjtBQUNBLFdBQUtILFVBQUwsQ0FBZ0JJLElBQWhCLENBQXFCLElBQXJCO0FBQ0Q7Ozs7RUE3QmtCQyxPQUFPQyxNOztBQWdDNUJqQixPQUFPSixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJqdW1wZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBKdW1wZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsICdzcHJpbmdfaW4ucG5nJylcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IEVuZ2luZS5zY2FsZVJhdGlvXHJcbiAgICB0aGlzLmhlaWdodCAqPSBFbmdpbmUuc2NhbGVSYXRpb1xyXG5cclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAsIDEpXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShbIHRoaXMgXSlcclxuXHJcbiAgICB0aGlzLmFkZEFuaW1hdGlvbnMoKVxyXG4gIH1cclxuXHJcbiAgYWRkQW5pbWF0aW9ucygpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ291dCcsIFsnc3ByaW5nX291dC5wbmcnXSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3JlYWR5JywgWydzcHJpbmcucG5nJ10pXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdpbicsIFsnc3ByaW5nX2luLnBuZyddKVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmRhdGEuYWN0aXZhdGVkID0gdHJ1ZVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ291dCcpXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5KSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG4gICAgdGhpcy5kYXRhLmFjdGl2YXRlZCA9IGZhbHNlXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnaW4nKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkp1bXBlciA9IEp1bXBlclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWtlYmFsbC5qcyJdLCJuYW1lcyI6WyJTcGlrZUJhbGwiLCJnYW1lIiwieCIsInkiLCJ0aW50IiwiYWRkQW5pbWF0aW9uIiwidHdlZW4iLCJhZGRIb3Jpem9udGFsVHdlZW4iLCJkaXN0YW5jZSIsInJuZCIsImJldHdlZW4iLCJ0aW1lIiwiYWRkIiwidG8iLCJsb29wIiwic3RhcnQiLCJhbmltYXRpb25zIiwicGxheSIsIkVuZ2luZSIsIkVuZW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxJQUFaLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I7QUFBQTs7QUFBQSxzSEFDaEJGLElBRGdCLEVBQ1ZDLENBRFUsRUFDUEMsQ0FETyxFQUNKLGdCQURJOztBQUd0QixVQUFLQyxJQUFMLEdBQVksUUFBWjs7QUFFQSxVQUFLQyxZQUFMOztBQUVBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQyxrQkFBTCxFQUFiO0FBUHNCO0FBUXZCOzs7O3lDQUVvQjtBQUNuQixVQUFNQyxXQUFXLEtBQUtQLElBQUwsQ0FBVVEsR0FBVixDQUFjQyxPQUFkLENBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLENBQWpCO0FBQ0EsVUFBTUMsT0FBTyxLQUFLVixJQUFMLENBQVVRLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixHQUF0QixFQUEyQixHQUEzQixDQUFiOztBQUVBLGFBQU8sS0FBS1QsSUFBTCxDQUFVVyxHQUFWLENBQWNOLEtBQWQsQ0FBb0IsSUFBcEIsRUFDSk8sRUFESSxDQUNEO0FBQ0ZYLFdBQUcsS0FBS0EsQ0FBTCxHQUFTTTtBQURWLE9BREMsRUFHRkcsSUFIRSxFQUlKRSxFQUpJLENBSUQ7QUFDRlgsV0FBRyxLQUFLQTtBQUROLE9BSkMsRUFNRlMsSUFORSxFQU9KRSxFQVBJLENBT0Q7QUFDRlgsV0FBRyxLQUFLQSxDQUFMLEdBQVNNO0FBRFYsT0FQQyxFQVNGRyxJQVRFLEVBVUpFLEVBVkksQ0FVRDtBQUNGWCxXQUFHLEtBQUtBO0FBRE4sT0FWQyxFQVlGUyxJQVpFLEVBYUpHLElBYkksR0FjSkMsS0FkSSxFQUFQO0FBZUQ7OzttQ0FFYztBQUNiLFdBQUtDLFVBQUwsQ0FBZ0JKLEdBQWhCLENBQW9CLFFBQXBCLEVBQThCLENBQUMsaUJBQUQsRUFBb0IsZ0JBQXBCLENBQTlCLEVBQXFFLEVBQXJFLEVBQXlFLElBQXpFOztBQUVBLFdBQUtJLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLFFBQXJCO0FBQ0Q7Ozs7RUFwQ3FCQyxPQUFPQyxLOztBQXVDL0JELE9BQU9sQixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJzcGlrZWJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTcGlrZUJhbGwgZXh0ZW5kcyBFbmdpbmUuRW5lbXkge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdzcGlrZUJhbGwxLnBuZycpXHJcblxyXG4gICAgdGhpcy50aW50ID0gMHg5OTk5OTlcclxuXHJcbiAgICB0aGlzLmFkZEFuaW1hdGlvbigpXHJcblxyXG4gICAgdGhpcy50d2VlbiA9IHRoaXMuYWRkSG9yaXpvbnRhbFR3ZWVuKClcclxuICB9XHJcblxyXG4gIGFkZEhvcml6b250YWxUd2VlbigpIHtcclxuICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDUwLCAxNTApXHJcbiAgICBjb25zdCB0aW1lID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDYwMCwgODAwKVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeDogdGhpcy54IC0gZGlzdGFuY2VcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB4OiB0aGlzLnhcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB4OiB0aGlzLnggKyBkaXN0YW5jZVxyXG4gICAgICB9LCB0aW1lKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHg6IHRoaXMueFxyXG4gICAgICB9LCB0aW1lKVxyXG4gICAgICAubG9vcCgpXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBhZGRBbmltYXRpb24oKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdyb3RhdGUnLCBbJ3NwaWtlQmFsbF8yLnBuZycsICdzcGlrZUJhbGwxLnBuZyddLCAzMCwgdHJ1ZSlcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncm90YXRlJylcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5TcGlrZUJhbGwgPSBTcGlrZUJhbGxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmluZ21hbi5qcyJdLCJuYW1lcyI6WyJTcHJpbmdNYW4iLCJnYW1lIiwieCIsInkiLCJzaGFrZVR3ZWVuIiwiYWRkU2hha2UiLCJhbXBsaXR1ZGUiLCJ0aW1lIiwiYWRkIiwidHdlZW4iLCJ0byIsImxvb3AiLCJzdGFydCIsInR3ZWVucyIsInJlbW92ZUZyb20iLCJFbmdpbmUiLCJFbmVteSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxJQUFaLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I7QUFBQTs7QUFBQSxzSEFDaEJGLElBRGdCLEVBQ1ZDLENBRFUsRUFDUEMsQ0FETyxFQUNKLHFCQURJOztBQUd0QixVQUFLQyxVQUFMLEdBQWtCLE1BQUtDLFFBQUwsRUFBbEI7QUFIc0I7QUFJdkI7Ozs7K0JBRVU7QUFDVCxVQUFNQyxZQUFZLENBQWxCO0FBQ0EsVUFBTUMsT0FBTyxFQUFiOztBQUVBLGFBQU8sS0FBS04sSUFBTCxDQUFVTyxHQUFWLENBQWNDLEtBQWQsQ0FBb0IsSUFBcEIsRUFDSkMsRUFESSxDQUNEO0FBQ0ZSLFdBQUcsS0FBS0EsQ0FBTCxHQUFTSTtBQURWLE9BREMsRUFHRkMsSUFIRSxFQUlKRyxFQUpJLENBSUQ7QUFDRlIsV0FBRyxLQUFLQTtBQUROLE9BSkMsRUFNRkssSUFORSxFQU9KRyxFQVBJLENBT0Q7QUFDRlIsV0FBRyxLQUFLQSxDQUFMLEdBQVNJO0FBRFYsT0FQQyxFQVNGQyxJQVRFLEVBVUpHLEVBVkksQ0FVRDtBQUNGUixXQUFHLEtBQUtBO0FBRE4sT0FWQyxFQVlGSyxJQVpFLEVBYUpJLElBYkksR0FjSkMsS0FkSSxFQUFQO0FBZUQ7OzswQkFFS1YsQyxFQUFHQyxDLEVBQUc7QUFDVixrSEFBWUQsQ0FBWixFQUFlQyxDQUFmOztBQUVBLFdBQUtFLFFBQUw7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS0osSUFBTCxDQUFVWSxNQUFWLENBQWlCQyxVQUFqQixDQUE0QixJQUE1Qjs7QUFFQTtBQUNEOzs7O0VBdENxQkMsT0FBT0MsSzs7QUF5Qy9CRCxPQUFPZixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJzcHJpbmdtYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTcHJpbmdNYW4gZXh0ZW5kcyBFbmdpbmUuRW5lbXkge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdzcHJpbmdNYW5fc3RhbmQucG5nJylcclxuXHJcbiAgICB0aGlzLnNoYWtlVHdlZW4gPSB0aGlzLmFkZFNoYWtlKClcclxuICB9XHJcblxyXG4gIGFkZFNoYWtlKCkge1xyXG4gICAgY29uc3QgYW1wbGl0dWRlID0gNVxyXG4gICAgY29uc3QgdGltZSA9IDE1XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcylcclxuICAgICAgLnRvKHtcclxuICAgICAgICB4OiB0aGlzLnggKyBhbXBsaXR1ZGVcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB4OiB0aGlzLnhcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB4OiB0aGlzLnggLSBhbXBsaXR1ZGVcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB4OiB0aGlzLnhcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLmxvb3AoKVxyXG4gICAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoeCwgeSkge1xyXG4gICAgc3VwZXIucmVzZXQoeCwgeSlcclxuXHJcbiAgICB0aGlzLmFkZFNoYWtlKClcclxuICB9XHJcblxyXG4gIGtpbGwoKSB7XHJcbiAgICB0aGlzLmdhbWUudHdlZW5zLnJlbW92ZUZyb20odGhpcylcclxuXHJcbiAgICBzdXBlci5raWxsKClcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5TcHJpbmdNYW4gPSBTcHJpbmdNYW5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
    _this.bounce.setTo(1);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLmpzIl0sIm5hbWVzIjpbIlRyYWlsIiwiZ2FtZSIsIm1heFBhcnRpY2xlcyIsImZvbGxvdyIsIm1ha2VQYXJ0aWNsZXMiLCJsaWZlc3BhbiIsImJvdW5jZSIsInNldFRvIiwiX3BhcnRpY2xlc0VtaXQiLCJfZGVsYXlFbWl0IiwiX2ZvbGxvdyIsIl90aW1lckVtbWl0aW5nIiwidGltZSIsImNyZWF0ZSIsImxvb3AiLCJlbWl0Iiwic3RhcnQiLCJpIiwicGFydGljbGVGcmFtZSIsInJuZCIsImJldHdlZW4iLCJlbWl0UGFydGljbGUiLCJ4IiwieSIsImhlaWdodCIsInBhdXNlIiwicmVzdW1lIiwiUGhhc2VyIiwiUGFydGljbGVzIiwiQXJjYWRlIiwiRW1pdHRlciIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsWUFBbEIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUEsOEdBQ2hDRixJQURnQyxFQUMxQixDQUQwQixFQUN2QixDQUR1QixFQUNwQkMsWUFEb0I7O0FBR3RDLFVBQUtFLGFBQUwsQ0FBbUIsV0FBbkIsRUFBZ0MsQ0FBaEMsRUFBbUNGLFlBQW5DLEVBQWlELElBQWpEO0FBQ0EsVUFBS0csUUFBTCxHQUFnQixHQUFoQjtBQUNBLFVBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQjs7QUFFQSxVQUFLQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLE9BQUwsR0FBZVAsTUFBZjs7QUFFQSxVQUFLUSxjQUFMLEdBQXNCLE1BQUtWLElBQUwsQ0FBVVcsSUFBVixDQUFlQyxNQUFmLEVBQXRCO0FBQ0EsVUFBS0YsY0FBTCxDQUFvQkcsSUFBcEIsQ0FBeUIsTUFBS0wsVUFBOUIsRUFBMEMsTUFBS00sSUFBL0M7QUFDQSxVQUFLSixjQUFMLENBQW9CSyxLQUFwQjtBQWJzQztBQWN2Qzs7OzsyQkFFTTtBQUNMLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtULGNBQXpCLEVBQXlDUyxHQUF6QyxFQUE4QztBQUM1QyxZQUFNQyxnQkFBZ0IsS0FBS2pCLElBQUwsQ0FBVWtCLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUF0Qjs7QUFFQSxhQUFLQyxZQUFMLENBQ0UsS0FBS1gsT0FBTCxDQUFhWSxDQURmLEVBRUUsS0FBS1osT0FBTCxDQUFhYSxDQUFiLEdBQWlCLEtBQUtiLE9BQUwsQ0FBYWMsTUFBYixHQUFzQixHQUZ6QyxFQUdFLFdBSEYsRUFJRU4sYUFKRjtBQU1EO0FBQ0Y7OztnQ0FFVztBQUNWLFdBQUtQLGNBQUwsQ0FBb0JjLEtBQXBCO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtkLGNBQUwsQ0FBb0JlLE1BQXBCO0FBQ0Q7Ozs7RUFwQ2lCQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QkMsTzs7QUF1QzVDQyxPQUFPL0IsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6InRyYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhaWwgZXh0ZW5kcyBQaGFzZXIuUGFydGljbGVzLkFyY2FkZS5FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBtYXhQYXJ0aWNsZXMsIGZvbGxvdykge1xyXG4gICAgc3VwZXIoZ2FtZSwgMCwgMCwgbWF4UGFydGljbGVzKVxyXG5cclxuICAgIHRoaXMubWFrZVBhcnRpY2xlcygncGFydGljbGVzJywgMCwgbWF4UGFydGljbGVzLCB0cnVlKVxyXG4gICAgdGhpcy5saWZlc3BhbiA9IDUwMFxyXG4gICAgdGhpcy5ib3VuY2Uuc2V0VG8oMSlcclxuXHJcbiAgICB0aGlzLl9wYXJ0aWNsZXNFbWl0ID0gM1xyXG4gICAgdGhpcy5fZGVsYXlFbWl0ID0gMzVcclxuICAgIHRoaXMuX2ZvbGxvdyA9IGZvbGxvd1xyXG5cclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5sb29wKHRoaXMuX2RlbGF5RW1pdCwgdGhpcy5lbWl0LCB0aGlzKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBlbWl0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXJ0aWNsZXNFbWl0OyBpKyspIHtcclxuICAgICAgY29uc3QgcGFydGljbGVGcmFtZSA9IHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCA0KVxyXG5cclxuICAgICAgdGhpcy5lbWl0UGFydGljbGUoXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LngsXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LnkgKyB0aGlzLl9mb2xsb3cuaGVpZ2h0IC8gMS4xLFxyXG4gICAgICAgICdwYXJ0aWNsZXMnLFxyXG4gICAgICAgIHBhcnRpY2xlRnJhbWVcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5wYXVzZSgpXHJcbiAgfVxyXG5cclxuICBzdGFydEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5yZXN1bWUoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLlRyYWlsID0gVHJhaWxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

      this.load.audio('lose', ['assets/sounds/lose.mp3', 'assets/sounds/lose.ogg']);
      this.load.audio('coin', ['assets/sounds/coin.mp3', 'assets/sounds/coin.ogg']);
      this.load.audio('jump', ['assets/sounds/jump.mp3', 'assets/sounds/jump.ogg']);

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
      var worldHeight = this.game.height * 3;
      this.stage.backgroundColor = 0xADE6FF;
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.world.setBounds(0, -(worldHeight - this.game.height), Number.MAX_VALUE, worldHeight);

      this.createBackground();
      this.createBunny();
      this.createSpikes();
      this.createGrounds();
      this.createJumpers();
      this.createCoins();
      this.createEnemies();

      this.bunny.addTrail();

      this.configurateCamera();
      this.addControl();
      this.createDistanceLabel();
      this.createCoinsLabel();
      this.createLoseLabel();
      this.createStartLabel();
      this.createBestDistance();
      this.createNominals();

      // TEMP

      var jumper = new Engine.Jumper(this.game, this.bunny.x + this.bunny.width + 15, this.startGround.y);
      this.jumpers.add(jumper);

      // END TEMP
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.bunny.data.isDead) {
        this.physics.arcade.collide(this.bunny.data.blood, this.grounds);
        this.physics.arcade.collide(this.bunny.data.blood, this.enemies);

        return;
      }

      this.physics.arcade.collide(this.bunny, this.grounds);
      this.physics.arcade.collide(this.bunny.data.trail, this.grounds);
      this.physics.arcade.overlap(this.bunny, this.coins, this.takeCoin, null, this);
      this.physics.arcade.overlap(this.bunny, this.enemies, this.collideEnemies, null, this);
      this.physics.arcade.overlap(this.bunny, this.jumpers, this.overlapJumper, null, this);
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

      coin.take();
      coin.kill();
    }
  }, {
    key: 'render',
    value: function render() {
      var summ = 0;

      summ += this.grounds.length;
      summ += this.coins.length;
      summ += this.enemies.length;
      summ += this.jumpers.length;
      summ += this.bottomSpikes.length;

      this.game.debug.text('Objects in memory: ' + summ, 19, 65);
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

      this.bunny.die();
      enemy.die();
    }
  }, {
    key: 'overlapJumper',
    value: function overlapJumper(bunny, jumper) {
      if (jumper.data.activated) return;

      jumper.activate();
      bunny.body.velocity.setTo(9000, -2000);
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

      var hotkey2 = this.input.keyboard.addKey(Phaser.KeyCode.Q);
      hotkey2.onDown.add(function () {
        _this2.bunny.playDieAnimation();
      }, this);

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
        fill: '#00BCD4',
        font: '31px Arial'
      };

      for (var i = 1; i < this.game.width / this.distanceBetweenGrounds; i++) {
        var ground = new Engine.Ground(this.game, this.distanceBetweenGrounds * i, 400);
        this.grounds.add(ground);
      }

      var label = this.add.text(this.game.width / 2, marginTop, 'Best ' + this._score.bestDistance + 'm.', style);
      label.anchor.setTo(0.5);

      this.bunny.bringToTop();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsImxvYWQiLCJhdGxhc1hNTCIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiaW1hZ2UiLCJhdWRpbyIsImRpc3RhbmNlQmV0d2Vlbkdyb3VuZHMiLCJfc2NvcmUiLCJTZXJ2aWNlIiwiZ2V0IiwiY29pbnMiLCJ3aW5kb3ciLCJnYW1lIiwid29ybGRIZWlnaHQiLCJoZWlnaHQiLCJzdGFnZSIsImJhY2tncm91bmRDb2xvciIsInBoeXNpY3MiLCJzdGFydFN5c3RlbSIsIlBoYXNlciIsIlBoeXNpY3MiLCJBUkNBREUiLCJ3b3JsZCIsInNldEJvdW5kcyIsIk51bWJlciIsIk1BWF9WQUxVRSIsImNyZWF0ZUJhY2tncm91bmQiLCJjcmVhdGVCdW5ueSIsImNyZWF0ZVNwaWtlcyIsImNyZWF0ZUdyb3VuZHMiLCJjcmVhdGVKdW1wZXJzIiwiY3JlYXRlQ29pbnMiLCJjcmVhdGVFbmVtaWVzIiwiYnVubnkiLCJhZGRUcmFpbCIsImNvbmZpZ3VyYXRlQ2FtZXJhIiwiYWRkQ29udHJvbCIsImNyZWF0ZURpc3RhbmNlTGFiZWwiLCJjcmVhdGVDb2luc0xhYmVsIiwiY3JlYXRlTG9zZUxhYmVsIiwiY3JlYXRlU3RhcnRMYWJlbCIsImNyZWF0ZUJlc3REaXN0YW5jZSIsImNyZWF0ZU5vbWluYWxzIiwianVtcGVyIiwiSnVtcGVyIiwieCIsIndpZHRoIiwic3RhcnRHcm91bmQiLCJ5IiwianVtcGVycyIsImFkZCIsImRhdGEiLCJpc0RlYWQiLCJhcmNhZGUiLCJjb2xsaWRlIiwiYmxvb2QiLCJncm91bmRzIiwiZW5lbWllcyIsInRyYWlsIiwib3ZlcmxhcCIsInRha2VDb2luIiwiY29sbGlkZUVuZW1pZXMiLCJvdmVybGFwSnVtcGVyIiwidXBkYXRlRGllIiwiY3VycmVudERpc3RhbmNlIiwiTWF0aCIsInJvdW5kIiwiU2NvcmUiLCJNVUxUSVBFUl9ESVNUQU5DRSIsImNvaW4iLCJub21pbmFscyIsImdlbmVyYXRlIiwibm9taW5hbCIsInRha2UiLCJraWxsIiwic3VtbSIsImxlbmd0aCIsImJvdHRvbVNwaWtlcyIsImRlYnVnIiwidGV4dCIsImRpZSIsIkNvbXBvbmVudCIsIkp1bXBlckdlbmVyYXRvciIsIkVuZW15R2VuZXJhdG9yIiwiZW5lbXkiLCJhY3RpdmF0ZWQiLCJhY3RpdmF0ZSIsImJvZHkiLCJ2ZWxvY2l0eSIsInNldFRvIiwiUFJPVE9UWVBFIiwiU3Bpa2UiLCJDT1VOVCIsIkJvdHRvbVNwaWtlR2VuZXJhdG9yIiwiaSIsInNwaWtlIiwiTm9taW5hbEdlbmVyYXRvciIsImJlc3REaXN0YW5jZSIsIkJlc3REaXN0YW5jZSIsImxvc2VMYWJlbCIsInNob3ciLCJzdGFydExhYmVsIiwiaGlkZSIsInJ1biIsIkNvaW5HZW5lcmF0b3IiLCJNZXNzYWdlIiwiYW5jaG9yIiwiZXhpc3RpbmciLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZGlzdGFuY2VMYWJlbCIsIkRpc3RhbmNlIiwicGFkZGluZyIsImNvaW5zTGFiZWwiLCJDb2luQ291bnRlciIsImhvdGtleTIiLCJpbnB1dCIsImtleWJvYXJkIiwiYWRkS2V5IiwiS2V5Q29kZSIsIlEiLCJvbkRvd24iLCJwbGF5RGllQW5pbWF0aW9uIiwiaG90a2V5IiwiU1BBQ0VCQVIiLCJzcGFjZWJhckRvd24iLCJtb3VzZSIsIm1vdXNlRG93bkNhbGxiYWNrIiwic3RhdGUiLCJyZXN0YXJ0IiwicnVubmluZyIsImp1bXAiLCJzdGFydCIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJHcm91bmQiLCJHUkFTUyIsInNtYWxsIiwiYnJva2VuIiwiQnVubnkiLCJvbkRpZWQiLCJsb3NlIiwiR3JvdW5kc0dlbmVyYXRvciIsImNyZWF0ZVN0YXJ0R3JvdW5kIiwiY3JlYXRlRmlyc3RHcm91bmRzIiwic3R5bGUiLCJmaWxsIiwiZm9udCIsImdyb3VuZCIsImxhYmVsIiwiYnJpbmdUb1RvcCIsInBhZGRpbmdMZWZ0Iiwic21vb3RoTW92ZSIsImRlYWRab25lSGVpZ2h0IiwiY2FtZXJhIiwicm91bmRQeCIsImZvbGxvdyIsIkNhbWVyYSIsIkZPTExPV19MT0NLT04iLCJkZWFkem9uZSIsIlJlY3RhbmdsZSIsImJhY2tncm91bmRzIiwiZ3JvdXAiLCJCYWNrZ3JvdW5kIiwiU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osa0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzhCQUVTO0FBQ1IsV0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQ0VDLE9BQU9DLFdBRFQsRUFFRSxnQ0FGRixFQUdFLGdDQUhGOztBQU1BLFdBQUtILElBQUwsQ0FBVUksS0FBVixDQUFnQixRQUFoQixFQUEwQix1Q0FBMUI7QUFDQSxXQUFLSixJQUFMLENBQVVJLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsdUNBQTFCO0FBQ0EsV0FBS0osSUFBTCxDQUFVSSxLQUFWLENBQWdCLFFBQWhCLEVBQTBCLHVDQUExQjs7QUFFQSxXQUFLSixJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0IsQ0FBeEI7QUFDQSxXQUFLTCxJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0IsQ0FBeEI7QUFDQSxXQUFLTCxJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0IsQ0FBeEI7O0FBRUEsV0FBS0wsSUFBTCxDQUFVRyxXQUFWLENBQXNCLFdBQXRCLEVBQW1DLDhCQUFuQyxFQUFtRSxDQUFuRSxFQUFzRSxDQUF0RTtBQUNEOzs7MkJBRU07QUFDTCxXQUFLRyxzQkFBTCxHQUE4QixHQUE5Qjs7QUFFQTtBQUNBLFdBQUtDLE1BQUwsR0FBY0wsT0FBT00sT0FBUCxDQUFlQyxHQUFmLENBQW1CLE9BQW5CLENBQWQ7QUFDQSxXQUFLRixNQUFMLENBQVlHLEtBQVosR0FBb0IsQ0FBcEI7O0FBRUFDLGFBQU9DLElBQVAsR0FBYyxJQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1D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LENBQXFCLElBQUloRCxPQUFPaUssVUFBWCxDQUFzQixLQUFLdkosSUFBM0IsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsUUFBdkMsRUFBaUQsQ0FBQyxHQUFsRCxDQUFyQjtBQUNBLFdBQUtxSixXQUFMLENBQWlCL0csR0FBakIsQ0FBcUIsSUFBSWhELE9BQU9pSyxVQUFYLENBQXNCLEtBQUt2SixJQUEzQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxFQUF1QyxRQUF2QyxFQUFpRCxDQUFDLElBQWxELENBQXJCO0FBQ0Q7Ozs7RUFwV2dCTyxPQUFPaUosSzs7QUF1VzFCbEssT0FBT0gsSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuYXRsYXNYTUwoXHJcbiAgICAgIEVuZ2luZS5zcHJpdGVzaGVldCxcclxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvanVtcGVyLnBuZycsXHJcbiAgICAgICdhc3NldHMvc3ByaXRlc2hlZXRzL2p1bXBlci54bWwnXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjInLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXIyLnBuZycpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyMycsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjMucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXI0JywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyNC5wbmcnKVxyXG5cclxuICAgIHRoaXMubG9hZC5hdWRpbygnbG9zZScsIFsnYXNzZXRzL3NvdW5kcy9sb3NlLm1wMycsICdhc3NldHMvc291bmRzL2xvc2Uub2dnJ10pXHJcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2NvaW4nLCBbJ2Fzc2V0cy9zb3VuZHMvY29pbi5tcDMnLCAnYXNzZXRzL3NvdW5kcy9jb2luLm9nZyddKVxyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdqdW1wJywgWydhc3NldHMvc291bmRzL2p1bXAubXAzJywgJ2Fzc2V0cy9zb3VuZHMvanVtcC5vZ2cnXSlcclxuXHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BhcnRpY2xlcycsICdhc3NldHMvc3ByaXRlcy9wYXJ0aWNsZXMucG5nJywgOCwgOClcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHMgPSA1MDBcclxuXHJcbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpc1xyXG4gICAgdGhpcy5fc2NvcmUgPSBFbmdpbmUuU2VydmljZS5nZXQoJ1Njb3JlJylcclxuICAgIHRoaXMuX3Njb3JlLmNvaW5zID0gMFxyXG5cclxuICAgIHdpbmRvdy5nYW1lID0gdGhpc1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3Qgd29ybGRIZWlnaHQgPSB0aGlzLmdhbWUuaGVpZ2h0ICogM1xyXG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAweEFERTZGRlxyXG4gICAgdGhpcy5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSlcclxuICAgIHRoaXMud29ybGQuc2V0Qm91bmRzKDAsIC0od29ybGRIZWlnaHQgLSB0aGlzLmdhbWUuaGVpZ2h0KSwgTnVtYmVyLk1BWF9WQUxVRSwgd29ybGRIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJ1bm55KClcclxuICAgIHRoaXMuY3JlYXRlU3Bpa2VzKClcclxuICAgIHRoaXMuY3JlYXRlR3JvdW5kcygpXHJcbiAgICB0aGlzLmNyZWF0ZUp1bXBlcnMoKVxyXG4gICAgdGhpcy5jcmVhdGVDb2lucygpXHJcbiAgICB0aGlzLmNyZWF0ZUVuZW1pZXMoKVxyXG5cclxuICAgIHRoaXMuYnVubnkuYWRkVHJhaWwoKVxyXG5cclxuICAgIHRoaXMuY29uZmlndXJhdGVDYW1lcmEoKVxyXG4gICAgdGhpcy5hZGRDb250cm9sKClcclxuICAgIHRoaXMuY3JlYXRlRGlzdGFuY2VMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZUNvaW5zTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVMb3NlTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVTdGFydExhYmVsKClcclxuICAgIHRoaXMuY3JlYXRlQmVzdERpc3RhbmNlKClcclxuICAgIHRoaXMuY3JlYXRlTm9taW5hbHMoKVxyXG5cclxuICAgIC8vIFRFTVBcclxuXHJcbiAgICBsZXQganVtcGVyID0gbmV3IEVuZ2luZS5KdW1wZXIoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueS54ICsgdGhpcy5idW5ueS53aWR0aCArIDE1LFxyXG4gICAgICB0aGlzLnN0YXJ0R3JvdW5kLnlcclxuICAgIClcclxuICAgIHRoaXMuanVtcGVycy5hZGQoanVtcGVyKVxyXG5cclxuICAgIC8vIEVORCBURU1QXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5idW5ueS5kYXRhLmlzRGVhZCkge1xyXG4gICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5idW5ueS5kYXRhLmJsb29kLCB0aGlzLmdyb3VuZHMpXHJcbiAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LmRhdGEuYmxvb2QsIHRoaXMuZW5lbWllcylcclxuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LCB0aGlzLmdyb3VuZHMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5idW5ueS5kYXRhLnRyYWlsLCB0aGlzLmdyb3VuZHMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5idW5ueSwgdGhpcy5jb2lucywgdGhpcy50YWtlQ29pbiwgbnVsbCwgdGhpcylcclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLmJ1bm55LCB0aGlzLmVuZW1pZXMsIHRoaXMuY29sbGlkZUVuZW1pZXMsIG51bGwsIHRoaXMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5idW5ueSwgdGhpcy5qdW1wZXJzLCB0aGlzLm92ZXJsYXBKdW1wZXIsIG51bGwsIHRoaXMpXHJcbiAgICB0aGlzLnVwZGF0ZURpZSgpXHJcblxyXG4gICAgLy8gVE9ETzogTmVlZCBpbmNhcHN1bGF0aW9uXHJcbiAgICB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2UgPSBNYXRoLnJvdW5kKHRoaXMuYnVubnkueCAvIEVuZ2luZS5TY29yZS5NVUxUSVBFUl9ESVNUQU5DRSlcclxuICB9XHJcblxyXG4gIHRha2VDb2luKGJ1bm55LCBjb2luKSB7XHJcbiAgICBjb25zdCB4ID0gdGhpcy5idW5ueS54ICsgdGhpcy5idW5ueS53aWR0aCAvIDJcclxuICAgIGNvbnN0IHkgPSB0aGlzLmJ1bm55LnlcclxuXHJcbiAgICB0aGlzLm5vbWluYWxzLmdlbmVyYXRlKHgsIHksIGNvaW4uZGF0YS5ub21pbmFsKVxyXG5cclxuICAgIHRoaXMuX3Njb3JlLmNvaW5zICs9IGNvaW4uZGF0YS5ub21pbmFsXHJcblxyXG4gICAgY29pbi50YWtlKClcclxuICAgIGNvaW4ua2lsbCgpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgc3VtbSA9IDBcclxuXHJcbiAgICBzdW1tICs9IHRoaXMuZ3JvdW5kcy5sZW5ndGhcclxuICAgIHN1bW0gKz0gdGhpcy5jb2lucy5sZW5ndGhcclxuICAgIHN1bW0gKz0gdGhpcy5lbmVtaWVzLmxlbmd0aFxyXG4gICAgc3VtbSArPSB0aGlzLmp1bXBlcnMubGVuZ3RoXHJcbiAgICBzdW1tICs9IHRoaXMuYm90dG9tU3Bpa2VzLmxlbmd0aFxyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdPYmplY3RzIGluIG1lbW9yeTogJyArIHN1bW0sIDE5LCA2NSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5idW5ueS55ID4gdGhpcy5nYW1lLmhlaWdodCAtIDEwMCAmJlxyXG4gICAgICAhdGhpcy5idW5ueS5kYXRhLmlzRGVhZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYnVubnkuZGllKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUp1bXBlcnMoKSB7XHJcbiAgICB0aGlzLmp1bXBlcnMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5KdW1wZXJHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueSxcclxuICAgICAgdGhpcy5ncm91bmRzXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbmVtaWVzKCkge1xyXG4gICAgdGhpcy5lbmVtaWVzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuRW5lbXlHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueSxcclxuICAgICAgdGhpcy5ncm91bmRzXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb2xsaWRlRW5lbWllcyhidW5ueSwgZW5lbXkpIHtcclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICB0aGlzLmJ1bm55LmRpZSgpXHJcbiAgICBlbmVteS5kaWUoKVxyXG4gIH1cclxuXHJcbiAgb3ZlcmxhcEp1bXBlcihidW5ueSwganVtcGVyKSB7XHJcbiAgICBpZiAoanVtcGVyLmRhdGEuYWN0aXZhdGVkKSByZXR1cm5cclxuXHJcbiAgICBqdW1wZXIuYWN0aXZhdGUoKVxyXG4gICAgYnVubnkuYm9keS52ZWxvY2l0eS5zZXRUbyg5MDAwLCAtMjAwMClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNwaWtlcygpIHtcclxuICAgIGNvbnN0IFBST1RPVFlQRSA9IG5ldyBFbmdpbmUuU3Bpa2UodGhpcy5nYW1lLCAwLCAwKVxyXG4gICAgY29uc3QgQ09VTlQgPSAodGhpcy5nYW1lLndpZHRoICsgdGhpcy5idW5ueS54KSAvIFBST1RPVFlQRS53aWR0aFxyXG5cclxuICAgIHRoaXMuYm90dG9tU3Bpa2VzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuQm90dG9tU3Bpa2VHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueSxcclxuICAgICAgUFJPVE9UWVBFXHJcbiAgICApXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XHJcbiAgICAgIGxldCBzcGlrZSA9IG5ldyBFbmdpbmUuU3Bpa2UoXHJcbiAgICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICAgIGkgKiBQUk9UT1RZUEUud2lkdGgsXHJcbiAgICAgICAgdGhpcy5nYW1lLmhlaWdodFxyXG4gICAgICApXHJcblxyXG4gICAgICB0aGlzLmJvdHRvbVNwaWtlcy5hZGQoc3Bpa2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOb21pbmFscygpIHtcclxuICAgIHRoaXMubm9taW5hbHMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5Ob21pbmFsR2VuZXJhdG9yKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuYnVubnlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJlc3REaXN0YW5jZSgpIHtcclxuICAgIHRoaXMuYmVzdERpc3RhbmNlID0gbmV3IEVuZ2luZS5CZXN0RGlzdGFuY2UodGhpcy5nYW1lKVxyXG4gIH1cclxuXHJcbiAgbG9zZSgpIHtcclxuICAgIHRoaXMubG9zZUxhYmVsLnNob3coKVxyXG5cclxuICAgIC8vIFRPRE86IE5lZWQgaW5jYXBzdWxhdGlvblxyXG4gICAgaWYgKHRoaXMuX3Njb3JlLmJlc3REaXN0YW5jZSA8IHRoaXMuX3Njb3JlLmN1cnJlbnREaXN0YW5jZSkge1xyXG4gICAgICB0aGlzLl9zY29yZS5iZXN0RGlzdGFuY2UgPSB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5zdGFydExhYmVsLmhpZGUoKVxyXG4gICAgdGhpcy5idW5ueS5ydW4oKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29pbnMoKSB7XHJcbiAgICB0aGlzLmNvaW5zID0gbmV3IEVuZ2luZS5Db21wb25lbnQuQ29pbkdlbmVyYXRvcih0aGlzLmdhbWUsIHRoaXMuYnVubnksIHRoaXMuZ3JvdW5kcylcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxvc2VMYWJlbCgpIHtcclxuICAgIHRoaXMubG9zZUxhYmVsID0gbmV3IEVuZ2luZS5NZXNzYWdlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAvIDIsXHJcbiAgICAgIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLFxyXG4gICAgICAnWW91IGxvc2UgOi0oXFxyXFxuUHJlc3Mgc3BhY2ViYXInXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5sb3NlTGFiZWwuYW5jaG9yLnNldFRvKDAuNSlcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMubG9zZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRMYWJlbCgpIHtcclxuICAgIHRoaXMuc3RhcnRMYWJlbCA9IG5ldyBFbmdpbmUuTWVzc2FnZShcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLyAyLFxyXG4gICAgICB0aGlzLmdhbWUuaGVpZ2h0IC8gMixcclxuICAgICAgJ1ByZXNzIHNwYWNlYmFyXFxyXFxuZm9yIHN0YXJ0J1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuc3RhcnRMYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgdGhpcy5zdGFydExhYmVsLnNob3coKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5zdGFydExhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGlzdGFuY2VMYWJlbCgpIHtcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxNVxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTBcclxuXHJcbiAgICB0aGlzLmRpc3RhbmNlTGFiZWwgPSBuZXcgRW5naW5lLkRpc3RhbmNlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAtIG1hcmdpbkxlZnQsXHJcbiAgICAgIG1hcmdpblRvcFxyXG4gICAgKVxyXG4gICAgdGhpcy5kaXN0YW5jZUxhYmVsLmFuY2hvci5zZXRUbygxLCAwKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5kaXN0YW5jZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29pbnNMYWJlbCgpIHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAyMFxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gdGhpcy5kaXN0YW5jZUxhYmVsLnkgKyB0aGlzLmRpc3RhbmNlTGFiZWwuaGVpZ2h0IC8gMiArIHBhZGRpbmdcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxNVxyXG5cclxuICAgIHRoaXMuY29pbnNMYWJlbCA9IG5ldyBFbmdpbmUuQ29pbkNvdW50ZXIoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gbWFyZ2luTGVmdCxcclxuICAgICAgbWFyZ2luVG9wXHJcbiAgICApXHJcbiAgICB0aGlzLmNvaW5zTGFiZWwuYW5jaG9yLnNldFRvKDEsIDApXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmNvaW5zTGFiZWwpXHJcbiAgfVxyXG5cclxuICBhZGRDb250cm9sKCkge1xyXG4gICAgbGV0IGhvdGtleTIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Q29kZS5RKVxyXG4gICAgaG90a2V5Mi5vbkRvd24uYWRkKCgpID0+IHtcclxuICAgICAgdGhpcy5idW5ueS5wbGF5RGllQW5pbWF0aW9uKClcclxuICAgIH0sIHRoaXMpXHJcblxyXG4gICAgbGV0IGhvdGtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlDb2RlLlNQQUNFQkFSKVxyXG4gICAgaG90a2V5Lm9uRG93bi5hZGQodGhpcy5zcGFjZWJhckRvd24sIHRoaXMpXHJcblxyXG4gICAgbGV0IG1vdXNlID0gdGhpcy5pbnB1dC5tb3VzZVxyXG4gICAgbW91c2UubW91c2VEb3duQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3BhY2ViYXJEb3duKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYWNlYmFyRG93bigpIHtcclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEuaXNEZWFkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUucmVzdGFydCh0cnVlLCBmYWxzZSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEucnVubmluZykge1xyXG4gICAgICB0aGlzLmJ1bm55Lmp1bXAoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRHcm91bmQoKSB7XHJcbiAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAyNTBcclxuICAgIGNvbnN0IHggPSAxMDBcclxuICAgIGNvbnN0IHkgPSB0aGlzLmJ1bm55LnkgKyBtYXJnaW5Cb3R0b21cclxuICAgIGNvbnN0IHR5cGUgPSBHcm91bmQudHlwZS5HUkFTU1xyXG4gICAgY29uc3Qgc21hbGwgPSBmYWxzZVxyXG4gICAgY29uc3QgYnJva2VuID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLnN0YXJ0R3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdHlwZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIGJyb2tlbixcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMuYWRkKHRoaXMuc3RhcnRHcm91bmQpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCdW5ueSgpIHtcclxuICAgIHdpbmRvdy5idW5ueSA9IHRoaXMuYnVubnkgPSBuZXcgRW5naW5lLkJ1bm55KHRoaXMuZ2FtZSwgMTUwLCAxNTAsICdidW5ueTInKVxyXG4gICAgdGhpcy5idW5ueS5vbkRpZWQuYWRkKHRoaXMubG9zZSwgdGhpcylcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnVubnkpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVHcm91bmRzKCkge1xyXG4gICAgdGhpcy5ncm91bmRzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuR3JvdW5kc0dlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHNcclxuICAgIClcclxuICAgIHRoaXMuY3JlYXRlU3RhcnRHcm91bmQoKVxyXG4gICAgdGhpcy5jcmVhdGVGaXJzdEdyb3VuZHMoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlyc3RHcm91bmRzKCkge1xyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTAwXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJyMwMEJDRDQnLFxyXG4gICAgICBmb250OiAnMzFweCBBcmlhbCdcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZ2FtZS53aWR0aCAvIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kczsgaSsrKSB7XHJcbiAgICAgIGxldCBncm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZCh0aGlzLmdhbWUsIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kcyAqIGksIDQwMClcclxuICAgICAgdGhpcy5ncm91bmRzLmFkZChncm91bmQpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxhYmVsID0gdGhpcy5hZGQudGV4dChcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC8gMixcclxuICAgICAgbWFyZ2luVG9wLFxyXG4gICAgICBgQmVzdCAke3RoaXMuX3Njb3JlLmJlc3REaXN0YW5jZX1tLmAsXHJcbiAgICAgIHN0eWxlXHJcbiAgICApXHJcbiAgICBsYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG5cclxuICAgIHRoaXMuYnVubnkuYnJpbmdUb1RvcCgpXHJcbiAgfVxyXG5cclxuICBjb25maWd1cmF0ZUNhbWVyYSgpIHtcclxuICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gMjUwXHJcbiAgICBjb25zdCBzbW9vdGhNb3ZlID0gMC4xNVxyXG4gICAgY29uc3QgZGVhZFpvbmVIZWlnaHQgPSA1MFxyXG5cclxuICAgIHRoaXMuY2FtZXJhLnJvdW5kUHggPSBmYWxzZVxyXG4gICAgdGhpcy5jYW1lcmEuZm9sbG93KHRoaXMuYnVubnksIFBoYXNlci5DYW1lcmEuRk9MTE9XX0xPQ0tPTiwgMSwgc21vb3RoTW92ZSlcclxuICAgIHRoaXMuY2FtZXJhLmRlYWR6b25lID0gbmV3IFBoYXNlci5SZWN0YW5nbGUocGFkZGluZ0xlZnQsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyIC0gdGhpcy5idW5ueS5oZWlnaHQgKiAxLjUsIDEsIGRlYWRab25lSGVpZ2h0KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZHMgPSB0aGlzLmFkZC5ncm91cCgpXHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyMicsIC0wLjA1KSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjMnLCAtMC4xKSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjQnLCAtMC4yNSkpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuR2FtZSA9IEdhbWVcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
