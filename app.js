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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVyLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVyIiwiYXJyYXkiLCJuYW1lIiwic3RhcnQiLCJEYXRlIiwibm93IiwiZGF0YSIsInN0b3AiLCJ0aW1lIiwidW5kZWZpbmVkIiwiRW5naW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsUTtBQUNKLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7OzswQkFFS0MsSSxFQUFNO0FBQ1YsV0FBS0QsS0FBTCxDQUFXQyxJQUFYLElBQW1CO0FBQ2pCQyxlQUFPQyxLQUFLQyxHQUFMO0FBRFUsT0FBbkI7QUFHRDs7O3lCQUVJSCxJLEVBQU07QUFDVCxVQUFJSSxPQUFPLEtBQUtMLEtBQUwsQ0FBV0MsSUFBWCxDQUFYOztBQUVBSSxXQUFLQyxJQUFMLEdBQVlILEtBQUtDLEdBQUwsRUFBWjtBQUNBQyxXQUFLRSxJQUFMLEdBQWFGLEtBQUtDLElBQUwsR0FBWUQsS0FBS0gsS0FBOUI7QUFDRDs7O3lCQUVJRCxJLEVBQU07QUFDVCxVQUFJLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixJQUF4QixFQUE4QixPQUFPTyxTQUFQLENBQTlCLEtBQzhCLE9BQU8sS0FBS1IsS0FBTCxDQUFXQyxJQUFYLEVBQWlCTSxJQUF4QjtBQUMvQjs7Ozs7O0FBR0hFLE9BQU9WLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6InByb2ZpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvZmlsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcnJheSA9IFtdXHJcbiAgfVxyXG5cclxuICBzdGFydChuYW1lKSB7XHJcbiAgICB0aGlzLmFycmF5W25hbWVdID0ge1xyXG4gICAgICBzdGFydDogRGF0ZS5ub3coKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcChuYW1lKSB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuYXJyYXlbbmFtZV1cclxuXHJcbiAgICBkYXRhLnN0b3AgPSBEYXRlLm5vdygpXHJcbiAgICBkYXRhLnRpbWUgPSAoZGF0YS5zdG9wIC0gZGF0YS5zdGFydClcclxuICB9XHJcblxyXG4gIHRpbWUobmFtZSkge1xuICAgIGlmICh0aGlzLmFycmF5W25hbWVdID09IG51bGwpIHJldHVybiB1bmRlZmluZWRcclxuICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5W25hbWVdLnRpbWVcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Qcm9maWxlciA9IFByb2ZpbGVyXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
  "Score": new Engine.Score(),
  "Profiler": new Engine.Profiler()
};

Engine.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuanMiXSwibmFtZXMiOlsiU2VydmljZSIsIm5hbWUiLCJsaXN0IiwiRW5naW5lIiwiU2NvcmUiLCJQcm9maWxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLE87Ozs7Ozs7d0JBQ09DLEksRUFBTTtBQUNmLGFBQU9ELFFBQVFFLElBQVIsQ0FBYUQsSUFBYixDQUFQO0FBQ0Q7Ozs7OztBQUdIRCxRQUFRRSxJQUFSLEdBQWU7QUFDYixXQUFTLElBQUlDLE9BQU9DLEtBQVgsRUFESTtBQUViLGNBQVksSUFBSUQsT0FBT0UsUUFBWDtBQUZDLENBQWY7O0FBS0FGLE9BQU9ILE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6InNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZXJ2aWNlIHtcclxuICBzdGF0aWMgZ2V0KG5hbWUpIHtcclxuICAgIHJldHVybiBTZXJ2aWNlLmxpc3RbbmFtZV1cclxuICB9XHJcbn1cclxuXHJcblNlcnZpY2UubGlzdCA9IHtcclxuICBcIlNjb3JlXCI6IG5ldyBFbmdpbmUuU2NvcmUoKSxcclxuICBcIlByb2ZpbGVyXCI6IG5ldyBFbmdpbmUuUHJvZmlsZXIoKVxyXG59XHJcblxyXG5FbmdpbmUuU2VydmljZSA9IFNlcnZpY2VcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

            this.templates.push([[0, 1, 0], [1, 3, 1], [0, 1, 0]]);

            this.templates.push([[3]]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvY29pbi5qcyJdLCJuYW1lcyI6WyJDb2luR2VuZXJhdG9yIiwiZ2FtZSIsImJ1bm55IiwiZ3JvdW5kcyIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsImFkZCIsImNyZWF0ZWROZXdHcm91bmQiLCJwcm90b3R5cGUiLCJFbmdpbmUiLCJDb2luIiwiY3JlYXRlVGVtcGxhdGVzIiwidGVtcGxhdGVzIiwicHVzaCIsImdyb3VuZCIsIlBoYXNlciIsIlV0aWxzIiwiY2hhbmNlUm9sbCIsInBhZGRpbmciLCJ0ZW1wbGF0ZSIsInJuZCIsInBpY2siLCJkaXJlY3Rpb24iLCJnZXRPZmZzZXRSaWdodCIsImdldE9mZnNldFRvcCIsImdldE9mZnNldFRvcFJpZ2h0IiwiYmluZCIsIm9mZnNldFgiLCJ4Iiwib2Zmc2V0WSIsInkiLCJ0ZW1wbGF0ZVdpZHRoIiwibGVuZ3RoIiwid2lkdGgiLCJ0ZW1wbGF0ZUhlaWdodCIsImhlaWdodCIsImkiLCJqIiwibWF4VHlwZSIsIm51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJ0eXBlIiwiR09MRCIsIlNJTFZFUiIsIkJST05aRSIsImNvaW4iLCJnZXRGaXJzdERlYWQiLCJyZXNldCIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJyZXN1bHQiLCJHZW5lcmF0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7O0FBQ0osMkJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQztBQUFBOztBQUFBLGtJQUMxQkYsSUFEMEIsRUFDcEJDLEtBRG9COztBQUdoQyxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQSxPQUFMLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUFrQyxNQUFLQyxnQkFBdkM7O0FBRUEsY0FBS0MsU0FBTCxHQUFpQixJQUFJQyxPQUFPQyxJQUFYLENBQWdCLE1BQUtULElBQXJCLEVBQTJCLENBQTNCLEVBQThCLENBQTlC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WHBCLG1CQUFHaEIsT0FBT2dCLENBQVAsR0FBV21CLE1BQVgsR0FBb0IsS0FBS3pDLFNBQUwsQ0FBZTJCLE1BQWYsR0FBd0I7QUFGcEMsYUFBYjs7QUFLQSxtQkFBT2dCLE1BQVA7QUFDRDs7OztFQWxLeUJDLFM7O0FBcUs1QjNDLE9BQU80QyxTQUFQLENBQWlCckQsYUFBakIsR0FBaUNBLGFBQWpDIiwiZmlsZSI6ImdlbmVyYXRvcnMvY29pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvaW5HZW5lcmF0b3IgZXh0ZW5kcyBHZW5lcmF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGJ1bm55LCBncm91bmRzKSB7XHJcbiAgICBzdXBlcihnYW1lLCBidW5ueSlcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMgPSBncm91bmRzXHJcbiAgICB0aGlzLmdyb3VuZHMuc2lnbmFscy5nZW5lcmF0ZS5hZGQodGhpcy5jcmVhdGVkTmV3R3JvdW5kLCB0aGlzKVxyXG5cclxuICAgIHRoaXMucHJvdG90eXBlID0gbmV3IEVuZ2luZS5Db2luKHRoaXMuZ2FtZSwgMCwgMClcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcygpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZW1wbGF0ZXMoKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlcyA9IFtdXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzAsIDAsIDIsIDMsIDBdLFxyXG4gICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDEsIDMsIDEsIDBdLFxyXG4gICAgICAgIFsxLCAxLCAxLCAxLCAxXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbMywgMSwgMSwgM10sXHJcbiAgICAgICAgWzEsIDAsIDAsIDFdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAxXSxcclxuICAgICAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICAgICAgWzEsIDAsIDAsIDFdLFxyXG4gICAgICAgIFsyLCAxLCAxLCAyXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDMsIDFdLFxyXG4gICAgICAgIFswLCAxLCAwXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbM11cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzAsIDAsIDAsIDMsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAyLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICBbMCwgMiwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgWzIsIDAsIDAsIDAsIDAsIDAsIDJdLFxyXG4gICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgWzAsIDAsIDFdLFxyXG4gICAgICBbMCwgMywgMF0sXHJcbiAgICAgIFsxLCAwLCAwXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgWzEsIDAsIDBdLFxyXG4gICAgICBbMCwgMywgMF0sXHJcbiAgICAgIFswLCAwLCAxXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgWzEsIDAsIDBdLFxyXG4gICAgICBbMCwgMywgMF0sXHJcbiAgICAgIFswLCAwLCAxXVxyXG4gICAgXSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZWROZXdHcm91bmQoZ3JvdW5kKSB7XHJcbiAgICBpZiAoIVBoYXNlci5VdGlscy5jaGFuY2VSb2xsKDMwKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgcGFkZGluZyA9IDFcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmdhbWUucm5kLnBpY2sodGhpcy50ZW1wbGF0ZXMpXHJcblxyXG4gICAgLy8gaWYgKGdyb3VuZC5kYXRhLnNtYWxsKSB7XHJcbiAgICAvLyAgIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNbdGhpcy5nYW1lLnJuZC5waWNrKFsxLCAyLCAzXSldXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLmdhbWUucm5kLnBpY2soW1xyXG4gICAgICB0aGlzLmdldE9mZnNldFJpZ2h0LFxyXG4gICAgICB0aGlzLmdldE9mZnNldFRvcCxcclxuICAgICAgdGhpcy5nZXRPZmZzZXRUb3BSaWdodFxyXG4gICAgXSkuYmluZCh0aGlzKShncm91bmQsIHRlbXBsYXRlKVxyXG5cclxuICAgIGxldCBvZmZzZXRYID0gZGlyZWN0aW9uLnhcclxuICAgIGxldCBvZmZzZXRZID0gZGlyZWN0aW9uLnlcclxuXHJcbiAgICBsZXQgdGVtcGxhdGVXaWR0aCA9IHRlbXBsYXRlWzBdLmxlbmd0aCAqIHRoaXMucHJvdG90eXBlLndpZHRoXHJcbiAgICBsZXQgdGVtcGxhdGVIZWlnaHQgPSB0ZW1wbGF0ZS5sZW5ndGggKiB0aGlzLnByb3RvdHlwZS5oZWlnaHRcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHRlbXBsYXRlKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gdGVtcGxhdGVbaV0pIHtcclxuICAgICAgICBpZiAodGVtcGxhdGVbaV1bal0gPiAwKSB7XHJcbiAgICAgICAgICBsZXQgeCA9IG9mZnNldFggKyBqICogKHRoaXMucHJvdG90eXBlLndpZHRoICsgcGFkZGluZykgLSB0ZW1wbGF0ZVdpZHRoIC8gMlxyXG4gICAgICAgICAgbGV0IHkgPSBvZmZzZXRZICsgaSAqICh0aGlzLnByb3RvdHlwZS5oZWlnaHQgKyBwYWRkaW5nKSAtIHRlbXBsYXRlSGVpZ2h0XHJcblxyXG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZSh4LCB5LCB0ZW1wbGF0ZVtpXVtqXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlKHgsIHksIG1heFR5cGUpIHtcclxuICAgIGNvbnN0IG51bWJlciA9IE1hdGgucmFuZG9tKClcclxuICAgIGxldCB0eXBlID0gMFxyXG5cclxuXHJcbiAgICBpZiAobnVtYmVyIDwgMC4xNSAmJiBtYXhUeXBlID4gMikgeyAvLyAxNSVcclxuICAgICAgdHlwZSA9IEVuZ2luZS5Db2luLnR5cGUuR09MRFxyXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPiAwLjE1ICYmIG51bWJlciA8IDAuNSAmJiBtYXhUeXBlID4gMSkgeyAvLyAlMzVcclxuICAgICAgdHlwZSA9IEVuZ2luZS5Db2luLnR5cGUuU0lMVkVSXHJcbiAgICB9IGVsc2UgeyAvLyA1MCVcclxuICAgICAgdHlwZSA9IEVuZ2luZS5Db2luLnR5cGUuQlJPTlpFXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvaW4gPSB0aGlzLmdldEZpcnN0RGVhZCgpXHJcbiAgICBpZiAoY29pbiA9PSBudWxsKSB7XHJcbiAgICAgIGNvaW4gPSBuZXcgRW5naW5lLkNvaW4odGhpcy5nYW1lLCB4LCB5LCB0eXBlKVxyXG4gICAgICB0aGlzLmFkZChjb2luKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29pbi5yZXNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2luXHJcbiAgfVxyXG5cclxuICBnZXRPZmZzZXRSaWdodChncm91bmQsIHRlbXBsYXRlKSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSAtNVxyXG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IDI1XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgeDogZ3JvdW5kLnggKyBncm91bmQud2lkdGggKyB0ZW1wbGF0ZVswXS5sZW5ndGggKiB0aGlzLnByb3RvdHlwZS53aWR0aCArIG1hcmdpbkxlZnQsXHJcbiAgICAgIHk6IGdyb3VuZC55ICsgbWFyZ2luICsgdGhpcy5wcm90b3R5cGUuaGVpZ2h0IC8gMlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIGdldE9mZnNldFRvcChncm91bmQsIHRlbXBsYXRlKSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSAtNVxyXG5cclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgIHg6IGdyb3VuZC54ICsgZ3JvdW5kLndpZHRoIC8gMiArIHRoaXMucHJvdG90eXBlLndpZHRoIC8gMixcclxuICAgICAgeTogZ3JvdW5kLnkgKyBtYXJnaW4gKyB0aGlzLnByb3RvdHlwZS5oZWlnaHQgLyAyXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0VG9wUmlnaHQoZ3JvdW5kLCB0ZW1wbGF0ZSkge1xyXG4gICAgY29uc3QgbWFyZ2luID0gdGVtcGxhdGUubGVuZ3RoICogdGhpcy5wcm90b3R5cGUuaGVpZ2h0XHJcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gMjVcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICB4OiBncm91bmQueCArIGdyb3VuZC53aWR0aCArIHRlbXBsYXRlWzBdLmxlbmd0aCAqIHRoaXMucHJvdG90eXBlLndpZHRoICsgbWFyZ2luTGVmdCxcclxuICAgICAgeTogZ3JvdW5kLnkgKyBtYXJnaW4gKyB0aGlzLnByb3RvdHlwZS5oZWlnaHQgLyAyXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkNvbXBvbmVudC5Db2luR2VuZXJhdG9yID0gQ29pbkdlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZW5lbXkuanMiXSwibmFtZXMiOlsiRW5lbXlHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJncm91bmRzIiwic2lnbmFscyIsImdlbmVyYXRlIiwiYWRkIiwic2NvcmUiLCJFbmdpbmUiLCJTZXJ2aWNlIiwiZ2V0IiwidHlwZXMiLCJTcHJpbmdNYW4iLCJGbHlNYW4iLCJTcGlrZUJhbGwiLCJDbG91ZCIsImdyb3VuZCIsIm1heENoYW5jZSIsIm1heERpc3RhbmNlIiwiY3VycmVudERpc3RhbmNlIiwiY3VycmVudENoYW5jZSIsImN1YmljSW5PdXQiLCJQaGFzZXIiLCJVdGlscyIsImNoYW5jZVJvbGwiLCJtYXJnaW5MZWZ0Iiwicm5kIiwiYmV0d2VlbiIsIngiLCJ5Iiwid2lkdGgiLCJUeXBlQ2xhc3MiLCJwaWNrIiwiZW5lbXkiLCJjaGlsZHJlbiIsImZpbmQiLCJpdGVtIiwiY29uc3RydWN0b3IiLCJhbGl2ZSIsInJlc2V0IiwidCIsIkdlbmVyYXRvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxjOzs7QUFDSiwwQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQUEsZ0lBQzFCRixJQUQwQixFQUNwQkMsS0FEb0I7O0FBR2hDLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtBLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLEdBQTlCLENBQWtDLE1BQUtELFFBQXZDOztBQUVBLFVBQUtFLEtBQUwsR0FBYUMsT0FBT0MsT0FBUCxDQUFlQyxHQUFmLENBQW1CLE9BQW5CLENBQWI7O0FBRUEsVUFBS0MsS0FBTCxHQUFhLENBQ1hILE9BQU9JLFNBREksRUFFWEosT0FBT0ssTUFGSSxFQUdYTCxPQUFPTSxTQUhJLEVBSVhOLE9BQU9PLEtBSkksQ0FBYjtBQVJnQztBQWNqQzs7Ozs2QkFFUUMsTSxFQUFRO0FBQ2YsVUFBTUMsWUFBWSxFQUFsQjtBQUNBLFVBQU1DLGNBQWMsR0FBcEI7QUFDQSxVQUFNQyxrQkFBa0IsS0FBS1osS0FBTCxDQUFXWSxlQUFuQztBQUNBLFVBQU1DLGdCQUFnQixLQUFLQyxVQUFMLENBQWdCRixrQkFBa0JELFdBQWxDLElBQWlERCxTQUF2RTs7QUFFQSxVQUFJLENBQUNLLE9BQU9DLEtBQVAsQ0FBYUMsVUFBYixDQUF3QkosYUFBeEIsQ0FBTCxFQUE2Qzs7QUFFN0MsVUFBTUssYUFBYSxLQUFLeEIsSUFBTCxDQUFVeUIsR0FBVixDQUFjQyxPQUFkLENBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLENBQW5COztBQUVBLFVBQUlDLElBQUksQ0FBUjtBQUNBLFVBQUlDLElBQUksQ0FBUjs7QUFFQUQsVUFBSVosT0FBT1ksQ0FBUCxHQUFXWixPQUFPYyxLQUFsQixHQUEwQkwsVUFBOUI7QUFDQUksVUFBSWIsT0FBT2EsQ0FBUCxHQUFXLEtBQUs1QixJQUFMLENBQVV5QixHQUFWLENBQWNDLE9BQWQsQ0FBc0IsQ0FBQyxFQUF2QixFQUEyQixFQUEzQixDQUFmOztBQUVBLFVBQUlJLFlBQVksS0FBSzlCLElBQUwsQ0FBVXlCLEdBQVYsQ0FBY00sSUFBZCxDQUFtQixLQUFLckIsS0FBeEIsQ0FBaEI7QUFDQSxVQUFJc0IsUUFBUSxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsZ0JBQVE7QUFDckMsZUFBT0MsS0FBS0MsV0FBTCxLQUFxQk4sU0FBckIsSUFBa0MsQ0FBQ0ssS0FBS0UsS0FBL0M7QUFDRCxPQUZXLENBQVo7O0FBSUEsVUFBSUwsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCQSxnQkFBUSxJQUFJRixTQUFKLENBQWMsS0FBSzlCLElBQW5CLEVBQXlCMkIsQ0FBekIsRUFBNEJDLENBQTVCLENBQVI7QUFDQSxhQUFLdkIsR0FBTCxDQUFTMkIsS0FBVDtBQUNELE9BSEQsTUFHTztBQUNMQSxjQUFNTSxLQUFOLENBQVlYLENBQVosRUFBZUMsQ0FBZjtBQUNEOztBQUVELGFBQU9JLEtBQVA7QUFDRDs7OytCQUVVTyxDLEVBQUc7QUFDWixVQUFJQSxJQUFJLENBQVIsRUFBVyxPQUFPLENBQVA7QUFDWCxhQUFPQSxDQUFQO0FBQ0Q7Ozs7RUFuRDBCQyxTOztBQXNEN0JqQyxPQUFPa0MsU0FBUCxDQUFpQjFDLGNBQWpCLEdBQWtDQSxjQUFsQyIsImZpbGUiOiJnZW5lcmF0b3JzL2VuZW15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRW5lbXlHZW5lcmF0b3IgZXh0ZW5kcyBHZW5lcmF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGJ1bm55LCBncm91bmRzKSB7XHJcbiAgICBzdXBlcihnYW1lLCBidW5ueSlcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMgPSBncm91bmRzXHJcbiAgICB0aGlzLmdyb3VuZHMuc2lnbmFscy5nZW5lcmF0ZS5hZGQodGhpcy5nZW5lcmF0ZSwgdGhpcylcclxuXHJcbiAgICB0aGlzLnNjb3JlID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdTY29yZScpXHJcblxyXG4gICAgdGhpcy50eXBlcyA9IFtcclxuICAgICAgRW5naW5lLlNwcmluZ01hbixcclxuICAgICAgRW5naW5lLkZseU1hbixcclxuICAgICAgRW5naW5lLlNwaWtlQmFsbCxcclxuICAgICAgRW5naW5lLkNsb3VkXHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZShncm91bmQpIHtcclxuICAgIGNvbnN0IG1heENoYW5jZSA9IDI1XHJcbiAgICBjb25zdCBtYXhEaXN0YW5jZSA9IDEwMFxyXG4gICAgY29uc3QgY3VycmVudERpc3RhbmNlID0gdGhpcy5zY29yZS5jdXJyZW50RGlzdGFuY2VcclxuICAgIGNvbnN0IGN1cnJlbnRDaGFuY2UgPSB0aGlzLmN1YmljSW5PdXQoY3VycmVudERpc3RhbmNlIC8gbWF4RGlzdGFuY2UpICogbWF4Q2hhbmNlXHJcblxyXG4gICAgaWYgKCFQaGFzZXIuVXRpbHMuY2hhbmNlUm9sbChjdXJyZW50Q2hhbmNlKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHRoaXMuZ2FtZS5ybmQuYmV0d2Vlbig1MCwgMTUwKVxyXG5cclxuICAgIGxldCB4ID0gMFxyXG4gICAgbGV0IHkgPSAwXHJcblxyXG4gICAgeCA9IGdyb3VuZC54ICsgZ3JvdW5kLndpZHRoICsgbWFyZ2luTGVmdFxyXG4gICAgeSA9IGdyb3VuZC55ICsgdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKC03NSwgNzUpXHJcblxyXG4gICAgbGV0IFR5cGVDbGFzcyA9IHRoaXMuZ2FtZS5ybmQucGljayh0aGlzLnR5cGVzKVxyXG4gICAgbGV0IGVuZW15ID0gdGhpcy5jaGlsZHJlbi5maW5kKGl0ZW0gPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbS5jb25zdHJ1Y3RvciA9PT0gVHlwZUNsYXNzICYmICFpdGVtLmFsaXZlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlbmVteSA9PSBudWxsKSB7XHJcbiAgICAgIGVuZW15ID0gbmV3IFR5cGVDbGFzcyh0aGlzLmdhbWUsIHgsIHkpXHJcbiAgICAgIHRoaXMuYWRkKGVuZW15KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW5lbXkucmVzZXQoeCwgeSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZW5lbXlcclxuICB9XHJcblxyXG4gIGN1YmljSW5PdXQodCkge1xyXG4gICAgaWYgKHQgPiAxKSByZXR1cm4gMVxyXG4gICAgcmV0dXJuIHRcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuRW5lbXlHZW5lcmF0b3IgPSBFbmVteUdlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIkdyb3VuZHNHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJkaXN0YW5jZSIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsIlBoYXNlciIsIlNpZ25hbCIsImN1cnJlbnRTdGVwIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsIngiLCJtYXJnaW4iLCJ3aWR0aCIsIlZFUlRJQ0FMX0NPVU5UIiwiU1RBUlRfUE9JTlQiLCJ3b3JsZCIsImJvdW5kcyIsImhlaWdodCIsIkdSSURfSEVJR0hUIiwiUk5EX0hPUklaT05UQUwiLCJSTkRfVkVSVElDQUwiLCJpIiwicm5kIiwicGljayIsImJldHdlZW4iLCJ5IiwiZ3JvdW5kIiwiYWRkUmFuZG9tR3JvdW5kIiwiZGlzcGF0Y2giLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJFbmdpbmUiLCJHcm91bmQiLCJ0eXBlIiwibWFwIiwidmFsIiwic21hbGwiLCJicm9rZW4iLCJnZXRGaXJzdERlYWQiLCJhZGQiLCJyZXNldCIsIkNvbXBvbmVudCIsIkdlbmVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLGdCOzs7QUFDSjs7Ozs7O0FBTUEsNEJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQztBQUFBOztBQUFBLG9JQUMzQkYsSUFEMkIsRUFDckJDLEtBRHFCOztBQUdqQyxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZTtBQUNiQyxnQkFBVSxJQUFJQyxPQUFPQyxNQUFYO0FBREcsS0FBZjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQVBpQztBQVFsQzs7Ozs2QkFFUTtBQUNQOztBQUVBLFVBQUlDLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLVCxLQUFMLENBQVdVLENBQVgsR0FBZSxLQUFLVCxRQUEvQixDQUFYO0FBQ0EsVUFBSVUsU0FBVSxLQUFLWixJQUFMLENBQVVhLEtBQXhCOztBQUVBLFVBQUlMLFNBQVMsS0FBS0QsV0FBbEIsRUFBK0I7QUFDN0IsYUFBS0EsV0FBTCxHQUFtQkMsSUFBbkI7QUFDQSxhQUFLSixRQUFMLENBQWNRLE1BQWQ7QUFDRDtBQUNGOzs7NkJBRVFBLE0sRUFBUTtBQUNmOztBQUVBLFVBQU1FLGlCQUFpQixDQUF2QjtBQUNBLFVBQU1DLGNBQWMsRUFBRSxLQUFLZixJQUFMLENBQVVnQixLQUFWLENBQWdCQyxNQUFoQixDQUF1QkMsTUFBdkIsR0FBZ0MsS0FBS2xCLElBQUwsQ0FBVWtCLE1BQTVDLENBQXBCO0FBQ0EsVUFBTUMsY0FBYyxHQUFwQixDQUxlLENBS1E7QUFDdkIsVUFBTUMsaUJBQWlCLEdBQXZCO0FBQ0EsVUFBTUMsZUFBZSxHQUFyQjs7QUFFQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVIsY0FBcEIsRUFBb0NRLEdBQXBDLEVBQXlDO0FBQ3ZDLFlBQUksS0FBS3RCLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxFQUFtQixNQUFNLEtBQXpCLEVBQUosRUFBcUM7O0FBRXJDLFlBQU1iLElBQUksS0FBS1YsS0FBTCxDQUFXVSxDQUFYLEdBQWVDLE1BQWYsR0FBd0IsS0FBS1osSUFBTCxDQUFVdUIsR0FBVixDQUFjRSxPQUFkLENBQXNCLENBQUNMLGNBQXZCLEVBQXVDQSxjQUF2QyxDQUFsQztBQUNBLFlBQU1NLElBQUlYLGNBQWNJLGNBQWNHLENBQTVCLEdBQWdDLEtBQUt0QixJQUFMLENBQVV1QixHQUFWLENBQWNFLE9BQWQsQ0FBc0IsQ0FBQ0osWUFBdkIsRUFBcUNBLFlBQXJDLENBQTFDOztBQUVBLFlBQUlNLFNBQVMsS0FBS0MsZUFBTCxDQUFxQmpCLENBQXJCLEVBQXdCZSxDQUF4QixDQUFiOztBQUVBLGFBQUt2QixPQUFMLENBQWFDLFFBQWIsQ0FBc0J5QixRQUF0QixDQUErQkYsTUFBL0I7QUFDRDtBQUNGOzs7b0NBRWVoQixDLEVBQUdlLEMsRUFBRztBQUNwQixVQUFNSSxRQUFRQyxPQUFPQyxJQUFQLENBQVlDLE9BQU9DLE1BQVAsQ0FBY0MsSUFBMUIsRUFBZ0NDLEdBQWhDLENBQW9DLGVBQU87QUFDdkQsZUFBT0gsT0FBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CRSxHQUFuQixDQUFQO0FBQ0QsT0FGYSxDQUFkO0FBR0EsVUFBTUYsT0FBTyxLQUFLbkMsSUFBTCxDQUFVdUIsR0FBVixDQUFjQyxJQUFkLENBQW1CTSxLQUFuQixDQUFiO0FBQ0EsVUFBTVEsUUFBUSxLQUFLdEMsSUFBTCxDQUFVdUIsR0FBVixDQUFjQyxJQUFkLENBQW1CLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBbkIsQ0FBZDtBQUNBLFVBQU1lLFNBQVMsS0FBS3ZDLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQixDQUFDLElBQUQsRUFBTyxLQUFQLENBQW5CLENBQWY7O0FBRUEsVUFBSUcsU0FBUyxLQUFLYSxZQUFMLEVBQWI7QUFDQSxVQUFJYixVQUFVLElBQWQsRUFBb0I7QUFDbEJBLGlCQUFTLElBQUlNLE9BQU9DLE1BQVgsQ0FDUCxLQUFLbEMsSUFERSxFQUVQVyxDQUZPLEVBR1BlLENBSE8sRUFJUFMsSUFKTyxFQUtQRyxLQUxPLEVBTVBDLE1BTk8sQ0FBVDtBQVFBLGFBQUtFLEdBQUwsQ0FBU2QsTUFBVDtBQUNELE9BVkQsTUFVTztBQUNMQSxlQUFPZSxLQUFQLENBQWEvQixDQUFiLEVBQWdCZSxDQUFoQixFQUFtQlMsSUFBbkIsRUFBeUJHLEtBQXpCLEVBQWdDQyxNQUFoQztBQUNEOztBQUVELGFBQU9aLE1BQVA7QUFDRDs7OztFQTFFNEJNLE9BQU9VLFNBQVAsQ0FBaUJDLFM7O0FBNkVoRFgsT0FBT1UsU0FBUCxDQUFpQjVDLGdCQUFqQixHQUFvQ0EsZ0JBQXBDIiwiZmlsZSI6ImdlbmVyYXRvcnMvZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR3JvdW5kc0dlbmVyYXRvciBleHRlbmRzIEVuZ2luZS5Db21wb25lbnQuR2VuZXJhdG9yIHtcclxuICAvKipcclxuICAgKiBHcm91bmRzIGdlbmVyYXRvclxyXG4gICAqIEBwYXJhbSAge1BoYXNlci5HYW1lfSBnYW1lXHJcbiAgICogQHBhcmFtICB7RW5naW5lLkJ1bm55fSBidW5ueSBPYmplY3Qgb2YgYnVubnlcclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGRpc3RhbmNlIERpc3RhbmNlIGJldHdlZW4gZ3JvdW5kc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGJ1bm55LCBkaXN0YW5jZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgYnVubnkpXHJcblxyXG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlXHJcbiAgICB0aGlzLnNpZ25hbHMgPSB7XHJcbiAgICAgIGdlbmVyYXRlOiBuZXcgUGhhc2VyLlNpZ25hbCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gLTFcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpXHJcblxyXG4gICAgbGV0IHN0ZXAgPSBNYXRoLmZsb29yKHRoaXMuYnVubnkueCAvIHRoaXMuZGlzdGFuY2UpXHJcbiAgICBsZXQgbWFyZ2luID0gKHRoaXMuZ2FtZS53aWR0aClcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gdGhpcy5jdXJyZW50U3RlcCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTdGVwID0gc3RlcFxyXG4gICAgICB0aGlzLmdlbmVyYXRlKG1hcmdpbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlKG1hcmdpbikge1xyXG4gICAgc3VwZXIuZ2VuZXJhdGUoKVxyXG5cclxuICAgIGNvbnN0IFZFUlRJQ0FMX0NPVU5UID0gOFxyXG4gICAgY29uc3QgU1RBUlRfUE9JTlQgPSAtKHRoaXMuZ2FtZS53b3JsZC5ib3VuZHMuaGVpZ2h0IC0gdGhpcy5nYW1lLmhlaWdodClcclxuICAgIGNvbnN0IEdSSURfSEVJR0hUID0gMzM1Ly90aGlzLmdhbWUud29ybGQuYm91bmRzLmhlaWdodCAvIFNQTElUX1ZFUlRJQ0FMXHJcbiAgICBjb25zdCBSTkRfSE9SSVpPTlRBTCA9IDEyMFxyXG4gICAgY29uc3QgUk5EX1ZFUlRJQ0FMID0gMTAwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBWRVJUSUNBTF9DT1VOVDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmdhbWUucm5kLnBpY2tbdHJ1ZSwgZmFsc2VdKSBjb250aW51ZVxyXG5cclxuICAgICAgY29uc3QgeCA9IHRoaXMuYnVubnkueCArIG1hcmdpbiArIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigtUk5EX0hPUklaT05UQUwsIFJORF9IT1JJWk9OVEFMKVxyXG4gICAgICBjb25zdCB5ID0gU1RBUlRfUE9JTlQgKyBHUklEX0hFSUdIVCAqIGkgKyB0aGlzLmdhbWUucm5kLmJldHdlZW4oLVJORF9WRVJUSUNBTCwgUk5EX1ZFUlRJQ0FMKVxyXG5cclxuICAgICAgbGV0IGdyb3VuZCA9IHRoaXMuYWRkUmFuZG9tR3JvdW5kKHgsIHkpXHJcblxyXG4gICAgICB0aGlzLnNpZ25hbHMuZ2VuZXJhdGUuZGlzcGF0Y2goZ3JvdW5kKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUmFuZG9tR3JvdW5kKHgsIHkpIHtcclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoRW5naW5lLkdyb3VuZC50eXBlKS5tYXAodmFsID0+IHtcclxuICAgICAgcmV0dXJuIEVuZ2luZS5Hcm91bmQudHlwZVt2YWxdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2FtZS5ybmQucGljayh0eXBlcylcclxuICAgIGNvbnN0IHNtYWxsID0gdGhpcy5nYW1lLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcbiAgICBjb25zdCBicm9rZW4gPSB0aGlzLmdhbWUucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuXHJcbiAgICBsZXQgZ3JvdW5kID0gdGhpcy5nZXRGaXJzdERlYWQoKVxyXG4gICAgaWYgKGdyb3VuZCA9PSBudWxsKSB7XHJcbiAgICAgIGdyb3VuZCA9IG5ldyBFbmdpbmUuR3JvdW5kKFxyXG4gICAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgICB4LFxyXG4gICAgICAgIHksXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBzbWFsbCxcclxuICAgICAgICBicm9rZW4sXHJcbiAgICAgIClcclxuICAgICAgdGhpcy5hZGQoZ3JvdW5kKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JvdW5kLnJlc2V0KHgsIHksIHR5cGUsIHNtYWxsLCBicm9rZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyb3VuZFxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkNvbXBvbmVudC5Hcm91bmRzR2VuZXJhdG9yID0gR3JvdW5kc0dlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvanVtcGVyLmpzIl0sIm5hbWVzIjpbIkp1bXBlckdlbmVyYXRvciIsImdhbWUiLCJidW5ueSIsImdyb3VuZHMiLCJzaWduYWxzIiwiZ2VuZXJhdGUiLCJhZGQiLCJwcm90b3R5cGUiLCJFbmdpbmUiLCJKdW1wZXIiLCJncm91bmQiLCJhYnNvbHV0ZVkiLCJ3b3JsZCIsImhlaWdodCIsInkiLCJNSU5fSEVJR0hUIiwiUGhhc2VyIiwiVXRpbHMiLCJjaGFuY2VSb2xsIiwieCIsInJuZCIsImJldHdlZW4iLCJ3aWR0aCIsImp1bXBlciIsImdldEZpcnN0RGVhZCIsInJlc2V0IiwiQ29tcG9uZW50IiwiR2VuZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGU7OztBQUNKLDJCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsT0FBekIsRUFBa0M7QUFBQTs7QUFBQSxrSUFDMUJGLElBRDBCLEVBQ3BCQyxLQURvQjs7QUFHaEMsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0EsT0FBTCxDQUFhQyxPQUFiLENBQXFCQyxRQUFyQixDQUE4QkMsR0FBOUIsQ0FBa0MsTUFBS0QsUUFBdkM7O0FBRUEsVUFBS0UsU0FBTCxHQUFpQixJQUFJQyxPQUFPQyxNQUFYLENBQWtCLE1BQUtSLElBQXZCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLENBQWpCO0FBTmdDO0FBT2pDOzs7OzZCQUVRUyxNLEVBQVE7QUFDZixVQUFNQyxZQUFZLEtBQUtWLElBQUwsQ0FBVVcsS0FBVixDQUFnQkMsTUFBaEIsR0FBeUIsS0FBS1osSUFBTCxDQUFVWSxNQUFuQyxHQUE0Q0gsT0FBT0ksQ0FBckU7O0FBRUEsVUFBSUgsWUFBWVgsZ0JBQWdCZSxVQUFoQyxFQUE0QztBQUM1QyxVQUFJLENBQUNDLE9BQU9DLEtBQVAsQ0FBYUMsVUFBYixDQUF3QixFQUF4QixDQUFMLEVBQWtDOztBQUVsQyxVQUFNQyxJQUFJLEtBQUtsQixJQUFMLENBQVVtQixHQUFWLENBQWNDLE9BQWQsQ0FDUlgsT0FBT1MsQ0FEQyxFQUVSVCxPQUFPUyxDQUFQLEdBQVdULE9BQU9ZLEtBQWxCLEdBQTBCLEtBQUtmLFNBQUwsQ0FBZWUsS0FGakMsQ0FBVjtBQUlBLFVBQU1SLElBQUlKLE9BQU9JLENBQWpCOztBQUVBLFVBQUlTLFNBQVMsS0FBS0MsWUFBTCxFQUFiOztBQUVBLFVBQUlELFVBQVUsSUFBZCxFQUFvQjtBQUNsQkEsaUJBQVMsSUFBSWYsT0FBT0MsTUFBWCxDQUFrQixLQUFLUixJQUF2QixFQUE2QmtCLENBQTdCLEVBQWdDTCxDQUFoQyxDQUFUO0FBQ0EsYUFBS1IsR0FBTCxDQUFTaUIsTUFBVDtBQUNELE9BSEQsTUFHTztBQUNMQSxlQUFPRSxLQUFQLENBQWFOLENBQWIsRUFBZ0JMLENBQWhCO0FBQ0Q7O0FBRUQsYUFBT1MsTUFBUDtBQUNEOzs7O0VBaEMyQmYsT0FBT2tCLFNBQVAsQ0FBaUJDLFM7O0FBbUMvQzs7Ozs7O0FBSUEzQixnQkFBZ0JlLFVBQWhCLEdBQTZCLEdBQTdCOztBQUVBUCxPQUFPa0IsU0FBUCxDQUFpQjFCLGVBQWpCLEdBQW1DQSxlQUFuQyIsImZpbGUiOiJnZW5lcmF0b3JzL2p1bXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEp1bXBlckdlbmVyYXRvciBleHRlbmRzIEVuZ2luZS5Db21wb25lbnQuR2VuZXJhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZ3JvdW5kcykge1xyXG4gICAgc3VwZXIoZ2FtZSwgYnVubnkpXHJcblxyXG4gICAgdGhpcy5ncm91bmRzID0gZ3JvdW5kc1xyXG4gICAgdGhpcy5ncm91bmRzLnNpZ25hbHMuZ2VuZXJhdGUuYWRkKHRoaXMuZ2VuZXJhdGUsIHRoaXMpXHJcblxyXG4gICAgdGhpcy5wcm90b3R5cGUgPSBuZXcgRW5naW5lLkp1bXBlcih0aGlzLmdhbWUsIDAsIDApXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZShncm91bmQpIHtcclxuICAgIGNvbnN0IGFic29sdXRlWSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmdhbWUuaGVpZ2h0ICsgZ3JvdW5kLnlcclxuXHJcbiAgICBpZiAoYWJzb2x1dGVZIDwgSnVtcGVyR2VuZXJhdG9yLk1JTl9IRUlHSFQpIHJldHVyblxyXG4gICAgaWYgKCFQaGFzZXIuVXRpbHMuY2hhbmNlUm9sbCgxNSkpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHggPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oXHJcbiAgICAgIGdyb3VuZC54LFxyXG4gICAgICBncm91bmQueCArIGdyb3VuZC53aWR0aCAtIHRoaXMucHJvdG90eXBlLndpZHRoXHJcbiAgICApXHJcbiAgICBjb25zdCB5ID0gZ3JvdW5kLnlcclxuXHJcbiAgICBsZXQganVtcGVyID0gdGhpcy5nZXRGaXJzdERlYWQoKVxyXG5cclxuICAgIGlmIChqdW1wZXIgPT0gbnVsbCkge1xyXG4gICAgICBqdW1wZXIgPSBuZXcgRW5naW5lLkp1bXBlcih0aGlzLmdhbWUsIHgsIHkpXHJcbiAgICAgIHRoaXMuYWRkKGp1bXBlcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGp1bXBlci5yZXNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBqdW1wZXJcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNaW5pbWFsIGhlaWdodCBvZiBnZW5lcmF0aW9uIGJ5IFlcclxuICogQHR5cGUge1t0eXBlXX1cclxuICovXHJcbkp1bXBlckdlbmVyYXRvci5NSU5fSEVJR0hUID0gNzUwXHJcblxyXG5FbmdpbmUuQ29tcG9uZW50Lkp1bXBlckdlbmVyYXRvciA9IEp1bXBlckdlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZW15LmpzIl0sIm5hbWVzIjpbIkVuZW15IiwiZ2FtZSIsIngiLCJ5IiwibmFtZSIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwicGh5c2ljcyIsImFyY2FkZSIsImVuYWJsZSIsImJvZHkiLCJpbW1vdmFibGUiLCJhdXRvQ3VsbCIsIndpZHRoIiwic2NhbGVSYXRpbyIsImhlaWdodCIsIlBoYXNlciIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUFBOztBQUFBLDhHQUN0QkgsSUFEc0IsRUFDaEJDLENBRGdCLEVBQ2JDLENBRGEsRUFDVkUsT0FBT0MsV0FERyxFQUNVRixJQURWOztBQUc1QixVQUFLSCxJQUFMLENBQVVNLE9BQVYsQ0FBa0JDLE1BQWxCLENBQXlCQyxNQUF6QixDQUFnQyxPQUFoQztBQUNBLFVBQUtDLElBQUwsQ0FBVUMsU0FBVixHQUFzQixJQUF0Qjs7QUFFQSxVQUFLQyxRQUFMLEdBQWdCLElBQWhCOztBQUVBLFVBQUtDLEtBQUwsSUFBY1IsT0FBT1MsVUFBckI7QUFDQSxVQUFLQyxNQUFMLElBQWVWLE9BQU9TLFVBQXRCO0FBVDRCO0FBVTdCOzs7OzBCQUVLLENBRUw7Ozs7RUFmaUJFLE9BQU9DLE07O0FBa0IzQlosT0FBT0wsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImVuZW15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBuYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUpXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShbIHRoaXMgXSlcclxuICAgIHRoaXMuYm9keS5pbW1vdmFibGUgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5hdXRvQ3VsbCA9IHRydWVcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IEVuZ2luZS5zY2FsZVJhdGlvXHJcbiAgICB0aGlzLmhlaWdodCAqPSBFbmdpbmUuc2NhbGVSYXRpb1xyXG4gIH1cclxuXHJcbiAgZGllKCkge1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5FbmVteSA9IEVuZW15XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpci10cmFpbC5qcyJdLCJuYW1lcyI6WyJBaXJUcmFpbCIsImdhbWUiLCJmb2xsb3ciLCJmb2xsb3dXaWR0aCIsIndpZHRoIiwiZm9sbG93SGVpZ2h0IiwiaGVpZ2h0IiwicGFydHMiLCJkYXRhIiwidmlzaWJsZSIsImNvbG9yIiwiYWNjUmF0aW8iLCJsaW5lV2lkdGgiLCJhY2N1bXVsYXRvciIsImNsZWFyIiwidW5zaGlmdCIsIngiLCJ5IiwiaSIsImxlbmd0aCIsInBhcnQiLCJuZXh0UGFydCIsImxpbmVTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsImJvZHkiLCJ2ZWxvY2l0eSIsImlzRGVhZCIsImRyYXdUcmFpbCIsIlBoYXNlciIsIkdyYXBoaWNzIiwiRW5naW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUNKLG9CQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQjtBQUFBOztBQUFBLG9IQUNsQkQsSUFEa0IsRUFDWixDQURZLEVBQ1QsQ0FEUzs7QUFHeEIsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQkQsT0FBT0UsS0FBMUI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CSCxPQUFPSSxNQUEzQjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxFQUFiOztBQUVBLFVBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQixLQUFwQjtBQVJ3QjtBQVN6Qjs7OztnQ0FFVztBQUNWLFVBQU1DLFFBQVEsUUFBZDtBQUNBLFVBQU1DLFdBQVcsSUFBakI7QUFDQSxVQUFNQyxZQUFZLEtBQUtQLFlBQUwsR0FBb0IsQ0FBdEM7QUFDQSxVQUFJUSxjQUFjLENBQWxCOztBQUVBLFdBQUtDLEtBQUw7O0FBRUEsV0FBS1AsS0FBTCxDQUFXUSxPQUFYLENBQW1CO0FBQ2pCQyxXQUFHLEtBQUtkLE1BQUwsQ0FBWWMsQ0FBWixHQUFnQixLQUFLZCxNQUFMLENBQVlFLEtBQVosR0FBb0IsQ0FEdEI7QUFFakJhLFdBQUcsS0FBS2YsTUFBTCxDQUFZZSxDQUFaLEdBQWdCLEtBQUtmLE1BQUwsQ0FBWUk7QUFGZCxPQUFuQjs7QUFLQSxXQUFLLElBQUlZLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLWCxLQUFMLENBQVdZLE1BQVgsR0FBb0IsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFlBQUlFLE9BQU8sS0FBS2IsS0FBTCxDQUFXVyxDQUFYLENBQVg7QUFDQSxZQUFJRyxXQUFXLEtBQUtkLEtBQUwsQ0FBV1csSUFBSSxDQUFmLENBQWY7O0FBRUFMLHVCQUFlRixRQUFmOztBQUVBLGFBQUtXLFNBQUwsQ0FBZVYsU0FBZixFQUEwQkYsS0FBMUIsRUFBaUNHLFdBQWpDOztBQUVBLGFBQUtVLE1BQUwsQ0FBWUgsS0FBS0osQ0FBakIsRUFBb0JJLEtBQUtILENBQXpCO0FBQ0EsYUFBS08sTUFBTCxDQUFZSCxTQUFTTCxDQUFyQixFQUF3QkssU0FBU0osQ0FBakM7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUNFLEtBQUtmLE1BQUwsQ0FBWXVCLElBQVosQ0FBaUJDLFFBQWpCLENBQTBCVCxDQUExQixHQUE4QixDQUFDLEdBQS9CLElBQ0EsQ0FBQyxLQUFLZixNQUFMLENBQVlNLElBQVosQ0FBaUJtQixNQUZwQixFQUdFO0FBQ0EsYUFBS0MsU0FBTDtBQUNELE9BTEQsTUFLTztBQUNMLGFBQUtyQixLQUFMLEdBQWEsRUFBYjtBQUNEO0FBQ0Y7Ozs7RUEvQ29Cc0IsT0FBT0MsUTs7QUFrRDlCQyxPQUFPL0IsUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiYWlyLXRyYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWlyVHJhaWwgZXh0ZW5kcyBQaGFzZXIuR3JhcGhpY3Mge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGZvbGxvdykge1xyXG4gICAgc3VwZXIoZ2FtZSwgMCwgMClcclxuXHJcbiAgICB0aGlzLmZvbGxvdyA9IGZvbGxvd1xyXG4gICAgdGhpcy5mb2xsb3dXaWR0aCA9IGZvbGxvdy53aWR0aFxyXG4gICAgdGhpcy5mb2xsb3dIZWlnaHQgPSBmb2xsb3cuaGVpZ2h0XHJcbiAgICB0aGlzLnBhcnRzID0gW11cclxuXHJcbiAgICB0aGlzLmRhdGEudmlzaWJsZSA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBkcmF3VHJhaWwoKSB7XHJcbiAgICBjb25zdCBjb2xvciA9IDB4MDBhM2ZmXHJcbiAgICBjb25zdCBhY2NSYXRpbyA9IDAuMDFcclxuICAgIGNvbnN0IGxpbmVXaWR0aCA9IHRoaXMuZm9sbG93SGVpZ2h0IC8gMlxyXG4gICAgbGV0IGFjY3VtdWxhdG9yID0gMFxyXG5cclxuICAgIHRoaXMuY2xlYXIoKVxyXG5cclxuICAgIHRoaXMucGFydHMudW5zaGlmdCh7XHJcbiAgICAgIHg6IHRoaXMuZm9sbG93LnggKyB0aGlzLmZvbGxvdy53aWR0aCAvIDIsXHJcbiAgICAgIHk6IHRoaXMuZm9sbG93LnkgKyB0aGlzLmZvbGxvdy5oZWlnaHRcclxuICAgIH0pXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICBsZXQgcGFydCA9IHRoaXMucGFydHNbaV1cclxuICAgICAgbGV0IG5leHRQYXJ0ID0gdGhpcy5wYXJ0c1tpICsgMV1cclxuXHJcbiAgICAgIGFjY3VtdWxhdG9yICs9IGFjY1JhdGlvXHJcblxyXG4gICAgICB0aGlzLmxpbmVTdHlsZShsaW5lV2lkdGgsIGNvbG9yLCBhY2N1bXVsYXRvcilcclxuXHJcbiAgICAgIHRoaXMubW92ZVRvKHBhcnQueCwgcGFydC55KVxyXG4gICAgICB0aGlzLmxpbmVUbyhuZXh0UGFydC54LCBuZXh0UGFydC55KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZvbGxvdy5ib2R5LnZlbG9jaXR5LnkgPCAtOTAwICYmXHJcbiAgICAgICF0aGlzLmZvbGxvdy5kYXRhLmlzRGVhZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuZHJhd1RyYWlsKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFydHMgPSBbXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkFpclRyYWlsID0gQWlyVHJhaWxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kLmpzIl0sIm5hbWVzIjpbIkJsb29kIiwiZ2FtZSIsImZvbGxvdyIsInBhcnRpY2xlcyIsImxpZmVzcGFuIiwic3BlZWQiLCJtYWtlUGFydGljbGVzIiwiYm91bmNlIiwic2V0VG8iLCJncmF2aXR5IiwibWluUGFydGljbGVTcGVlZCIsIm1heFBhcnRpY2xlU3BlZWQiLCJzZXRBbHBoYSIsImV4cGxvZGUiLCJmcmVxdWVuY3kiLCJxdWFudGl0eSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJzdGFydCIsIlBoYXNlciIsIlBhcnRpY2xlcyIsIkFyY2FkZSIsIkVtaXR0ZXIiLCJFbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFlBQU1DLFlBQVksRUFBbEI7QUFDQSxZQUFNQyxXQUFXLElBQWpCO0FBQ0EsWUFBTUMsUUFBUSxJQUFkOztBQUh3QixrSEFLbEJKLElBTGtCLEVBS1osQ0FMWSxFQUtULENBTFMsRUFLTkUsU0FMTTs7QUFPeEIsY0FBS0QsTUFBTCxHQUFjQSxNQUFkOztBQUVBLGNBQUtJLGFBQUwsQ0FBbUIsV0FBbkIsRUFBZ0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQyxFQUFpREgsU0FBakQsRUFBNEQsSUFBNUQ7QUFDQSxjQUFLSSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLGdCQUFMLENBQXNCRixLQUF0QixDQUE0QixDQUFDSCxLQUE3QixFQUFvQyxDQUFDQSxLQUFyQztBQUNBLGNBQUtNLGdCQUFMLENBQXNCSCxLQUF0QixDQUE0QkgsS0FBNUIsRUFBbUNBLEtBQW5DO0FBQ0EsY0FBS08sUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JSLFFBQXBCO0FBZHdCO0FBZXpCOzs7O3dDQUVlO0FBQ2QsZ0JBQU1TLFVBQVUsSUFBaEI7QUFDQSxnQkFBTVQsV0FBVyxJQUFqQjtBQUNBLGdCQUFNVSxZQUFZLElBQWxCO0FBQ0EsZ0JBQU1DLFdBQVcsR0FBakI7O0FBRUEsaUJBQUtDLENBQUwsR0FBUyxLQUFLZCxNQUFMLENBQVljLENBQVosR0FBZ0IsS0FBS2QsTUFBTCxDQUFZZSxLQUFaLEdBQW9CLENBQTdDO0FBQ0EsaUJBQUtDLENBQUwsR0FBUyxLQUFLaEIsTUFBTCxDQUFZZ0IsQ0FBWixHQUFnQixLQUFLaEIsTUFBTCxDQUFZaUIsTUFBWixHQUFxQixDQUE5Qzs7QUFFQSxpQkFBS0MsS0FBTCxDQUFXUCxPQUFYLEVBQW9CVCxRQUFwQixFQUE4QlUsU0FBOUIsRUFBeUNDLFFBQXpDO0FBQ0Q7Ozs7RUE1QmlCTSxPQUFPQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QkMsTzs7QUFnQzVDQyxPQUFPekIsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImJsb29kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmxvb2QgZXh0ZW5kcyBQaGFzZXIuUGFydGljbGVzLkFyY2FkZS5FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBmb2xsb3cpIHtcclxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IDUwXHJcbiAgICBjb25zdCBsaWZlc3BhbiA9IDUwMDBcclxuICAgIGNvbnN0IHNwZWVkID0gMTAwMFxyXG5cclxuICAgIHN1cGVyKGdhbWUsIDAsIDAsIHBhcnRpY2xlcylcclxuXHJcbiAgICB0aGlzLmZvbGxvdyA9IGZvbGxvd1xyXG5cclxuICAgIHRoaXMubWFrZVBhcnRpY2xlcygncGFydGljbGVzJywgWzAsIDEsIDIsIDMsIDRdLCBwYXJ0aWNsZXMsIHRydWUpXHJcbiAgICB0aGlzLmJvdW5jZS5zZXRUbygxKVxyXG4gICAgdGhpcy5ncmF2aXR5ID0gMFxyXG4gICAgdGhpcy5taW5QYXJ0aWNsZVNwZWVkLnNldFRvKC1zcGVlZCwgLXNwZWVkKVxyXG4gICAgdGhpcy5tYXhQYXJ0aWNsZVNwZWVkLnNldFRvKHNwZWVkLCBzcGVlZClcclxuICAgIHRoaXMuc2V0QWxwaGEoMSwgMCwgbGlmZXNwYW4pXHJcbiAgfVxyXG5cclxuICBwbGF5QW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgZXhwbG9kZSA9IHRydWVcclxuICAgIGNvbnN0IGxpZmVzcGFuID0gNTAwMFxyXG4gICAgY29uc3QgZnJlcXVlbmN5ID0gbnVsbFxyXG4gICAgY29uc3QgcXVhbnRpdHkgPSAyMDBcclxuXHJcbiAgICB0aGlzLnggPSB0aGlzLmZvbGxvdy54ICsgdGhpcy5mb2xsb3cud2lkdGggLyAyXHJcbiAgICB0aGlzLnkgPSB0aGlzLmZvbGxvdy55ICsgdGhpcy5mb2xsb3cuaGVpZ2h0IC8gMlxyXG5cclxuICAgIHRoaXMuc3RhcnQoZXhwbG9kZSwgbGlmZXNwYW4sIGZyZXF1ZW5jeSwgcXVhbnRpdHkpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuRW5naW5lLkJsb29kID0gQmxvb2RcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
      this.data.trail = new Engine.Trail(this.game, this);
      this.data.airTrail = new Engine.AirTrail(this.game, this);
      this.game.add.existing(this.data.trail);
      this.game.add.existing(this.data.airTrail);
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
      if (this.data.god) return;
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
    key: 'activateGod',
    value: function activateGod() {
      this.data.god = true;
      Bunny.MAX_JUMPS = 2000;
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

Bunny.MAX_JUMPS = 2;
Bunny.ACCELERATION = 2000;
Bunny.BASE_MAX_SPEED = 500;

Engine.Bunny = Bunny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bm55LmpzIl0sIm5hbWVzIjpbIkJ1bm55IiwiZ2FtZSIsIngiLCJ5IiwibmFtZSIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiZGF0YSIsImlzRGVhZCIsInJ1bm5pbmciLCJjb3VudEp1bXAiLCJNQVhfSlVNUFMiLCJwaHlzaWNzIiwiYXJjYWRlIiwiZW5hYmxlIiwid2lkdGgiLCJoZWlnaHQiLCJib2R5IiwiZ3Jhdml0eSIsInNldFRvIiwibWF4VmVsb2NpdHkiLCJjb2xsaWRlV29ybGRCb3VuZHMiLCJvbkRpZWQiLCJQaGFzZXIiLCJTaWduYWwiLCJjcmVhdGVBbmltYXRpb24iLCJjcmVhdGVEaWVBbmltYXRpb24iLCJhbmltYXRpb25zIiwicGxheSIsImFkZFNvdW5kcyIsImRpZVNvdW5kIiwic291bmQiLCJhZGQiLCJqdW1wU291bmQiLCJ0cmFpbCIsIlRyYWlsIiwiYWlyVHJhaWwiLCJBaXJUcmFpbCIsImV4aXN0aW5nIiwiaW5BaXIiLCJzdGFydEVtaXR0Iiwic3RvcEVtaXR0IiwiYnVubnkiLCJ0b3VjaGluZyIsImRvd24iLCJnb2QiLCJwbGF5RGllQW5pbWF0aW9uIiwiYW5pbWF0aW9uRG93blRpbWUiLCJhbmltYXRpb25VcFRpbWUiLCJ1cE1vdmUiLCJjYW1lcmEiLCJ1bmZvbGxvdyIsInZlbG9jaXR5IiwiYWNjZWxlcmF0aW9uIiwiZGlzcGF0Y2giLCJibG9vZCIsIkJsb29kIiwicGxheUFuaW1hdGlvbiIsIkJBU0VfTUFYX1NQRUVEIiwiQUNDRUxFUkFUSU9OIiwianVtcEltcHVsc2UiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLElBQVosRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFBQTs7QUFBQSw4R0FDdEJILElBRHNCLEVBQ2hCQyxDQURnQixFQUNiQyxDQURhLEVBQ1ZFLE9BQU9DLFdBREcsRUFDVUYsT0FBTyxZQURqQjs7QUFHNUIsVUFB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QUFDQSxhQUFLckQsSUFBTCxDQUFVRyxTQUFWO0FBQ0EsYUFBS3VCLFNBQUwsQ0FBZUwsSUFBZjtBQUNEO0FBQ0Y7Ozs7RUF6SGlCTCxPQUFPc0MsTTs7QUE0SDNCN0QsTUFBTVcsU0FBTixHQUFrQixDQUFsQjtBQUNBWCxNQUFNMkQsWUFBTixHQUFxQixJQUFyQjtBQUNBM0QsTUFBTTBELGNBQU4sR0FBdUIsR0FBdkI7O0FBRUFyRCxPQUFPTCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiYnVubnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCdW5ueSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIG5hbWUpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIEVuZ2luZS5zcHJpdGVzaGVldCwgbmFtZSArICdfc3RhbmQucG5nJylcclxuXHJcbiAgICB0aGlzLmRhdGEubmFtZSA9IG5hbWVcclxuICAgIHRoaXMuZGF0YS5pc0RlYWQgPSBmYWxzZVxyXG4gICAgdGhpcy5kYXRhLnJ1bm5pbmcgPSBmYWxzZVxyXG4gICAgdGhpcy5kYXRhLmNvdW50SnVtcCA9IEJ1bm55Lk1BWF9KVU1QU1xyXG5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoWyB0aGlzIF0pXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSAwLjM1XHJcbiAgICB0aGlzLmhlaWdodCAqPSAwLjM1XHJcblxyXG4gICAgdGhpcy5ib2R5LmdyYXZpdHkuc2V0VG8oMCwgMjUwMClcclxuICAgIHRoaXMuYm9keS5tYXhWZWxvY2l0eS5zZXRUbyg0MDAsIDIwMDAwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWVcclxuXHJcbiAgICB0aGlzLm9uRGllZCA9IG5ldyBQaGFzZXIuU2lnbmFsKClcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICB0aGlzLmNyZWF0ZURpZUFuaW1hdGlvbigpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuXHJcbiAgICB0aGlzLmFkZFNvdW5kcygpXHJcbiAgfVxyXG5cclxuICBhZGRTb3VuZHMoKSB7XHJcbiAgICB0aGlzLmRpZVNvdW5kID0gdGhpcy5nYW1lLnNvdW5kLmFkZCgnbG9zZScpXHJcbiAgICB0aGlzLmp1bXBTb3VuZCA9IHRoaXMuZ2FtZS5zb3VuZC5hZGQoJ2p1bXAnKVxyXG4gIH1cclxuXHJcbiAgYWRkVHJhaWwoKSB7XHJcbiAgICB0aGlzLmRhdGEudHJhaWwgPSBuZXcgRW5naW5lLlRyYWlsKHRoaXMuZ2FtZSwgdGhpcylcclxuICAgIHRoaXMuZGF0YS5haXJUcmFpbCA9IG5ldyBFbmdpbmUuQWlyVHJhaWwodGhpcy5nYW1lLCB0aGlzKVxyXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmRhdGEudHJhaWwpXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZGF0YS5haXJUcmFpbClcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBpZiAodGhpcy5pbkFpcigpKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdGFydEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2p1bXAnKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEucnVubmluZyl7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdGFydEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3J1bicpXHJcbiAgICAgIHRoaXMuZGF0YS5jb3VudEp1bXAgPSBCdW5ueS5NQVhfSlVNUFNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS50cmFpbC5zdG9wRW1pdHQoKVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5BaXIoKSB7XHJcbiAgICByZXR1cm4gIWJ1bm55LmJvZHkudG91Y2hpbmcuZG93blxyXG4gIH1cclxuXHJcbiAgZGllKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5nb2QpIHJldHVyblxyXG4gICAgaWYgKHRoaXMuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIHRoaXMuZGllU291bmQucGxheSgpXHJcbiAgICB0aGlzLnBsYXlEaWVBbmltYXRpb24oKVxyXG5cclxuICAgIGNvbnN0IGFuaW1hdGlvbkRvd25UaW1lID0gMTAwMFxyXG4gICAgY29uc3QgYW5pbWF0aW9uVXBUaW1lID0gMTAwXHJcbiAgICBjb25zdCB1cE1vdmUgPSAxMDBcclxuXHJcbiAgICB0aGlzLmdhbWUuY2FtZXJhLnVuZm9sbG93KClcclxuXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgLTEyMDApXHJcbiAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnNldFRvKDApXHJcbiAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXRUbygwLCA0MDAwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gdHJ1ZVxyXG4gICAgdGhpcy5kYXRhLnRyYWlsLnN0b3BFbWl0dCgpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnaHVydCcpXHJcblxyXG4gICAgdGhpcy5vbkRpZWQuZGlzcGF0Y2goKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGllQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhLmJsb29kID0gbmV3IEVuZ2luZS5CbG9vZCh0aGlzLmdhbWUsIHRoaXMpXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZGF0YS5ibG9vZClcclxuICB9XHJcblxyXG4gIHBsYXlEaWVBbmltYXRpb24oKSB7XHJcbiAgICB0aGlzLmRhdGEuYmxvb2QucGxheUFuaW1hdGlvbigpXHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IHRydWVcclxuICAgIHRoaXMuYm9keS52ZWxvY2l0eS5zZXRUbyhCdW5ueS5CQVNFX01BWF9TUEVFRCwgMClcclxuICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24uc2V0VG8oQnVubnkuQUNDRUxFUkFUSU9OLCAwKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnanVtcCcsIFt0aGlzLmRhdGEubmFtZSArICdfanVtcC5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3J1bicsIFt0aGlzLmRhdGEubmFtZSArICdfd2FsazEucG5nJywgdGhpcy5kYXRhLm5hbWUgKyAnX3dhbGsyLnBuZyddLCAxMCwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2h1cnQnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX2h1cnQucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdyZWFkeScsIFt0aGlzLmRhdGEubmFtZSArICdfcmVhZHkucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFt0aGlzLmRhdGEubmFtZSArICdfc3RhbmQucG5nJ10sIDEsIHRydWUpXHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZUdvZCgpIHtcclxuICAgIHRoaXMuZGF0YS5nb2QgPSB0cnVlXHJcbiAgICBCdW5ueS5NQVhfSlVNUFMgPSAyMDAwXHJcbiAgfVxyXG5cclxuICBqdW1wKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGp1bXBJbXB1bHNlID0gOTAwXHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5jb3VudEp1bXAgPiAwKSB7XHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gLWp1bXBJbXB1bHNlXHJcbiAgICAgIHRoaXMuZGF0YS5jb3VudEp1bXAtLVxyXG4gICAgICB0aGlzLmp1bXBTb3VuZC5wbGF5KClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkJ1bm55Lk1BWF9KVU1QUyA9IDJcclxuQnVubnkuQUNDRUxFUkFUSU9OID0gMjAwMFxyXG5CdW5ueS5CQVNFX01BWF9TUEVFRCA9IDUwMFxyXG5cclxuRW5naW5lLkJ1bm55ID0gQnVubnlcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
      for (var i = 0; i < 1; i++) {
        this.bolt.emitParticle(this.x + this.width / 2, this.y + this.height, Engine.spritesheet, this.game.rnd.pick(['lighting_yellow.png', 'lighting_blue.png']));
      }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkLmpzIl0sIm5hbWVzIjpbIkNsb3VkIiwiZ2FtZSIsIngiLCJ5IiwidGludCIsImFkZEFuaW1hdGlvbiIsInR3ZWVuIiwiYWRkVHdlZW4iLCJSIiwicm5kIiwiYmV0d2VlbiIsInRpbWUiLCJkYXRhIiwicm90YXRpb24iLCJhZGQiLCJ0byIsIlBoYXNlciIsIk1hdGgiLCJQSTIiLCJsb29wIiwic3RhcnQiLCJvblVwZGF0ZUNhbGxiYWNrIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJidXJzdEludGVydmFsIiwibWF4UGFydGljbGVzIiwiY2VpbCIsImJvbHQiLCJlbWl0dGVyIiwibWFrZVBhcnRpY2xlcyIsIkVuZ2luZSIsInNwcml0ZXNoZWV0cyIsImdyYXZpdHkiLCJzZXRBbHBoYSIsInNldFNjYWxlIiwic2V0Um90YXRpb24iLCJzZXRZU3BlZWQiLCJzZXRYU3BlZWQiLCJ0aW1lciIsImNyZWF0ZSIsImJ1cnN0IiwiaSIsImVtaXRQYXJ0aWNsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3ByaXRlc2hlZXQiLCJwaWNrIiwiZm9yRWFjaEV4aXN0cyIsIml0ZW0iLCJ0d2VlbnMiLCJyZW1vdmVGcm9tIiwiRW5lbXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQUEsOEdBQ2hCRixJQURnQixFQUNWQyxDQURVLEVBQ1BDLENBRE8sRUFDSixXQURJOztBQUd0QixVQUFLQyxJQUFMLEdBQVksUUFBWjs7QUFFQSxVQUFLQyxZQUFMO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtDLFFBQUwsRUFBYjtBQU5zQjtBQU92Qjs7Ozs2QkFFUSxDQUNSOzs7K0JBRVU7QUFBQTs7QUFDVCxVQUFNQyxJQUFJLEtBQUtQLElBQUwsQ0FBVVEsR0FBVixDQUFjQyxPQUFkLENBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLENBQVY7QUFDQSxVQUFNQyxPQUFP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Q0FBbkIsQ0FKRjtBQU1EOztBQUVELFdBQUtuQixJQUFMLENBQVVvQixhQUFWLENBQXdCLFVBQUNDLElBQUQsRUFBVTtBQUNoQ0EsYUFBSzdDLElBQUwsR0FBWSxRQUFaO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OzBCQUVLRixDLEVBQUdDLEMsRUFBRztBQUNWLDBHQUFZRCxDQUFaLEVBQWVDLENBQWY7O0FBRUEsV0FBS0csS0FBTCxHQUFhLEtBQUtDLFFBQUwsRUFBYjtBQUNEOzs7MkJBRU07QUFDTCxXQUFLTixJQUFMLENBQVVpRCxNQUFWLENBQWlCQyxVQUFqQixDQUE0QixLQUFLdkMsSUFBakM7QUFDQSxXQUFLWCxJQUFMLENBQVVpRCxNQUFWLENBQWlCQyxVQUFqQixDQUE0QixJQUE1Qjs7QUFFQTtBQUNEOzs7O0VBeEZpQnBCLE9BQU9xQixLOztBQTJGM0JyQixPQUFPL0IsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImNsb3VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2xvdWQgZXh0ZW5kcyBFbmdpbmUuRW5lbXkge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG91ZC5wbmcnKVxyXG5cclxuICAgIHRoaXMudGludCA9IDB4QUFBQUFBXHJcblxyXG4gICAgdGhpcy5hZGRBbmltYXRpb24oKVxyXG4gICAgdGhpcy50d2VlbiA9IHRoaXMuYWRkVHdlZW4oKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gIH1cclxuXHJcbiAgYWRkVHdlZW4oKSB7XHJcbiAgICBjb25zdCBSID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDUwLCAyMDApXHJcbiAgICBjb25zdCB0aW1lID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDQwMDAsIDgwMDApXHJcblxyXG4gICAgdGhpcy5kYXRhLnggPSB0aGlzLnhcclxuICAgIHRoaXMuZGF0YS55ID0gdGhpcy55XHJcbiAgICB0aGlzLmRhdGEucm90YXRpb24gPSAwXHJcblxyXG5cclxuICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5kYXRhKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHJvdGF0aW9uOiBQaGFzZXIuTWF0aC5QSTJcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLmxvb3AoLTEpXHJcbiAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgdHdlZW4ub25VcGRhdGVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIHRoaXMueCA9IHRoaXMuZGF0YS54ICsgUiAqIE1hdGguY29zKHRoaXMuZGF0YS5yb3RhdGlvbilcclxuICAgICAgdGhpcy55ID0gdGhpcy5kYXRhLnkgKyBSICogTWF0aC5zaW4odGhpcy5kYXRhLnJvdGF0aW9uKVxyXG4gICAgfSwgdGhpcylcclxuXHJcbiAgICByZXR1cm4gdHdlZW5cclxuICB9XHJcblxyXG4gIGFkZEFuaW1hdGlvbigpIHtcclxuICAgIGNvbnN0IGxpZmVzcGFuID0gMjAwMFxyXG4gICAgY29uc3QgYnVyc3RJbnRlcnZhbCA9IDMwMFxyXG4gICAgY29uc3QgbWF4UGFydGljbGVzID0gTWF0aC5jZWlsKGxpZmVzcGFuIC8gYnVyc3RJbnRlcnZhbClcclxuXHJcbiAgICB0aGlzLmJvbHQgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoMCwgMCwgbWF4UGFydGljbGVzKVxyXG5cclxuICAgIHRoaXMuYm9sdC5tYWtlUGFydGljbGVzKFxyXG4gICAgICBFbmdpbmUuc3ByaXRlc2hlZXRzLFxyXG4gICAgICBbJ2xpZ2h0aW5nX3llbGxvdy5wbmcnLCAnbGlnaHRpbmdfYmx1ZS5wbmcnXSxcclxuICAgICAgbWF4UGFydGljbGVzXHJcbiAgICApXHJcbiAgICB0aGlzLmJvbHQubGlmZXNwYW4gPSBsaWZlc3BhblxyXG4gICAgdGhpcy5ib2x0LmdyYXZpdHkgPSAwXHJcbiAgICB0aGlzLmJvbHQuc2V0QWxwaGEoMSwgMCwgbGlmZXNwYW4pXHJcbiAgICB0aGlzLmJvbHQuc2V0U2NhbGUoMCwgMSwgMCwgMSwgbGlmZXNwYW4pXHJcbiAgICB0aGlzLmJvbHQuc2V0Um90YXRpb24oMCwgMClcclxuICAgIHRoaXMuYm9sdC5zZXRZU3BlZWQoMTAwLCAxMjUpXHJcbiAgICB0aGlzLmJvbHQuc2V0WFNwZWVkKC01MCwgNTApXHJcblxyXG4gICAgdGhpcy5ib2x0LnRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKClcclxuICAgIHRoaXMuYm9sdC50aW1lci5sb29wKGJ1cnN0SW50ZXJ2YWwsIHRoaXMuYnVyc3QsIHRoaXMpXHJcbiAgICB0aGlzLmJvbHQudGltZXIuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgYnVyc3QoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgICB0aGlzLmJvbHQuZW1pdFBhcnRpY2xlKFxyXG4gICAgICAgIHRoaXMueCArIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIEVuZ2luZS5zcHJpdGVzaGVldCxcclxuICAgICAgICB0aGlzLmdhbWUucm5kLnBpY2soWydsaWdodGluZ195ZWxsb3cucG5nJywgJ2xpZ2h0aW5nX2JsdWUucG5nJ10pXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvbHQuZm9yRWFjaEV4aXN0cygoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLnRpbnQgPSAweDAwMDBGRlxyXG4gICAgfSwgdGhpcylcclxuICB9XHJcblxyXG4gIHJlc2V0KHgsIHkpIHtcclxuICAgIHN1cGVyLnJlc2V0KHgsIHkpXHJcblxyXG4gICAgdGhpcy50d2VlbiA9IHRoaXMuYWRkVHdlZW4oKVxyXG4gIH1cclxuXHJcbiAga2lsbCgpIHtcclxuICAgIHRoaXMuZ2FtZS50d2VlbnMucmVtb3ZlRnJvbSh0aGlzLmRhdGEpXHJcbiAgICB0aGlzLmdhbWUudHdlZW5zLnJlbW92ZUZyb20odGhpcylcclxuXHJcbiAgICBzdXBlci5raWxsKClcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5DbG91ZCA9IENsb3VkXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4uanMiXSwibmFtZXMiOlsiQ29pbiIsImdhbWUiLCJ4IiwieSIsInR5cGUiLCJHT0xEIiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJ3aWR0aCIsImhlaWdodCIsImFuY2hvciIsInNldFRvIiwiYXV0b0N1bGwiLCJwaHlzaWNzIiwiZW5hYmxlIiwiZGF0YSIsIkJST05aRSIsIm5vbWluYWwiLCJTSUxWRVIiLCJjcmVhdGVBbmltYXRpb24iLCJjcmVhdGVTb3VuZHMiLCJzb3VuZCIsImFkZCIsImNvdW50Q29pbnNGcmFtZSIsImFuaW1hdGlvbkZyYW1lcyIsImkiLCJwdXNoIiwiYW5pbWF0aW9ucyIsInBsYXkiLCJmcmFtZSIsIlBoYXNlciIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBK0M7QUFBQSxRQUF2QkMsSUFBdUIsdUVBQWhCSixLQUFLSSxJQUFMLENBQVVDLElBQU07O0FBQUE7O0FBQUEsNEdBQ3ZDSixJQUR1QyxFQUNqQ0MsQ0FEaUMsRUFDOUJDLENBRDhCLEVBQzNCRyxPQUFPQyxXQURvQixFQUNQSCxPQUFPLFFBREE7O0FBRzdDLFVBQUtJLEtBQUwsSUFBYyxJQUFkO0FBQ0EsVUFBS0MsTUFBTCxJQUFlLElBQWY7QUFDQSxVQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsR0FBbEI7O0FBRUEsVUFBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxVQUFLWCxJQUFMLENBQVVZLE9BQVYsQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCOztBQUVBLFVBQUtDLElBQUwsQ0FBVVgsSUFBVixHQUFpQkEsSUFBakI7O0FBRUEsWUFBT0EsSUFBUDtBQUNFLFdBQUtFLE9BQU9OLElBQVAsQ0FBWUksSUFBWixDQUFpQlksTUFBdEI7QUFDRSxjQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDRjtBQUNBLFdBQUtYLE9BQU9OLElBQVAsQ0FBWUksSUFBWixDQUFpQmMsTUFBdEI7QUFDRSxjQUFLSCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDRjtBQUNBLFdBQUtYLE9BQU9OLElBQVAsQ0FBWUksSUFBWixDQUFpQkMsSUFBdEI7QUFDRSxjQUFLVSxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDRjtBQVRGOztBQVlBLFVBQUtFLGVBQUw7QUFDQSxVQUFLQyxZQUFMO0FBMUI2QztBQTJCOUM7Ozs7bUNBRWM7QUFDYixXQUFLQyxLQUFMLEdBQWEsS0FBS3BCLElBQUwsQ0FBVW9CLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CLE1BQXBCLEVBQTRCLEdBQTVCLENBQWI7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNQyxrQkFBa0IsQ0FBeEI7O0FBRUEsVUFBSUMsa0JBQWtCLEVBQXRCOztBQUVBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixlQUFwQixFQUFxQ0UsR0FBckMsRUFBMEM7QUFDeEM7QUFDQUQsd0JBQWdCRSxJQUFoQixDQUF3QixLQUFLWCxJQUFMLENBQVVYLElBQWxDLFNBQTBDcUIsQ0FBMUM7QUFDRDs7QUFFRCxXQUFLRSxVQUFMLENBQWdCTCxHQUFoQixDQUFvQixRQUFwQixFQUE4QkUsZUFBOUIsRUFBK0MsRUFBL0MsRUFBbUQsSUFBbkQ7QUFDQSxXQUFLRyxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixRQUFyQjtBQUNEOzs7MEJBRUsxQixDLEVBQUdDLEMsRUFBR0MsSSxFQUFNO0FBQ2hCLHdHQUFZRixDQUFaLEVBQWVDLENBQWY7O0FBRUEsV0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS3lCLEtBQUwsR0FBYXpCLE9BQU8sUUFBcEI7QUFDQTs7QUFFQSxXQUFLZSxlQUFMO0FBQ0Q7OzsyQkFFTTtBQUNMLFdBQUtFLEtBQUwsQ0FBV08sSUFBWDtBQUNEOzs7O0VBNURnQkUsT0FBT0MsTTs7QUErRDFCL0IsS0FBS0ksSUFBTCxHQUFZO0FBQ1ZDLFFBQU0sTUFESTtBQUVWYSxVQUFRLFFBRkU7QUFHVkYsVUFBUTtBQUhFLENBQVo7O0FBTUFWLE9BQU9OLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJjb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29pbiBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHR5cGUgPSBDb2luLnR5cGUuR09MRCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCB0eXBlICsgJ18xLnBuZycpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSAwLjI1XHJcbiAgICB0aGlzLmhlaWdodCAqPSAwLjI1XHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpXHJcblxyXG4gICAgdGhpcy5hdXRvQ3VsbCA9IHRydWVcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoW3RoaXNdKVxyXG5cclxuICAgIHRoaXMuZGF0YS50eXBlID0gdHlwZVxyXG5cclxuICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgIGNhc2UgRW5naW5lLkNvaW4udHlwZS5CUk9OWkU6XHJcbiAgICAgICAgdGhpcy5kYXRhLm5vbWluYWwgPSAxXHJcbiAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgRW5naW5lLkNvaW4udHlwZS5TSUxWRVI6XHJcbiAgICAgICAgdGhpcy5kYXRhLm5vbWluYWwgPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgRW5naW5lLkNvaW4udHlwZS5HT0xEOlxyXG4gICAgICAgIHRoaXMuZGF0YS5ub21pbmFsID0gOFxyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9uKClcclxuICAgIHRoaXMuY3JlYXRlU291bmRzKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNvdW5kcygpIHtcclxuICAgIHRoaXMuc291bmQgPSB0aGlzLmdhbWUuc291bmQuYWRkKCdjb2luJywgMC40KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgY291bnRDb2luc0ZyYW1lID0gN1xyXG5cclxuICAgIGxldCBhbmltYXRpb25GcmFtZXMgPSBbXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY291bnRDb2luc0ZyYW1lOyBpKyspIHtcclxuICAgICAgLy8gaWYgKGkgPT09IDQpIGNvbnRpbnVlXHJcbiAgICAgIGFuaW1hdGlvbkZyYW1lcy5wdXNoKGAke3RoaXMuZGF0YS50eXBlfV8ke2l9LnBuZ2ApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgncm90YXRlJywgYW5pbWF0aW9uRnJhbWVzLCAxNSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdyb3RhdGUnKVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoeCwgeSwgdHlwZSkge1xyXG4gICAgc3VwZXIucmVzZXQoeCwgeSlcclxuXHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICB0aGlzLmZyYW1lID0gdHlwZSArICdfMS5wbmcnXHJcbiAgICAvLyB0aGlzLmFuaW1hdGlvbnMuY3VycmVudEFuaW0uZGVzdHJveSgpXHJcblxyXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgdGFrZSgpIHtcclxuICAgIHRoaXMuc291bmQucGxheSgpXHJcbiAgfVxyXG59XHJcblxyXG5Db2luLnR5cGUgPSB7XHJcbiAgR09MRDogJ2dvbGQnLFxyXG4gIFNJTFZFUjogJ3NpbHZlcicsXHJcbiAgQlJPTlpFOiAnYnJvbnplJyxcclxufVxyXG5cclxuRW5naW5lLkNvaW4gPSBDb2luXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZseW1hbi5qcyJdLCJuYW1lcyI6WyJGbHlNYW4iLCJnYW1lIiwieCIsInkiLCJ2ZXJ0aWNhbGVUd2VlbiIsImFkZFZlcnRpY2FsZU1vdmUiLCJhZGRFbWl0dGVyIiwibWF4U21va2UiLCJidXJzdEludGVydmFsIiwic21va2UiLCJhZGQiLCJlbWl0dGVyIiwibWFrZVBhcnRpY2xlcyIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiZ3Jhdml0eSIsInNldEFscGhhIiwic2V0U2NhbGUiLCJzY2FsZVJhdGlvIiwiZm9yRWFjaCIsIml0ZW0iLCJ0aW50IiwibGlmZXNwYW4iLCJzZXRYU3BlZWQiLCJzZXRZU3BlZWQiLCJ0aW1lciIsInRpbWUiLCJjcmVhdGUiLCJsb29wIiwiYnVyc3QiLCJzdGFydCIsImkiLCJlbWl0UGFydGljbGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3RhbmNlIiwicm5kIiwiYmV0d2VlbiIsInR3ZWVuIiwidG8iLCJpbXB1bHNlIiwidHdlZW5zIiwicmVtb3ZlRnJvbSIsImJvZHkiLCJhbmd1bGFyVmVsb2NpdHkiLCJ2ZWxvY2l0eSIsInNldFRvIiwiRW5lbXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQUEsZ0hBQ2hCRixJQURnQixFQUNWQyxDQURVLEVBQ1BDLENBRE8sRUFDSixnQkFESTs7QUFHdEIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQyxnQkFBTCxFQUF0QjtBQUNBLFVBQUtDLFVBQUw7QUFKc0I7QUFLdkI7Ozs7aUNBRVk7QUFDWCxVQUFNQyxXQUFXLEVBQWpCO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQXRCOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxLQUFLUixJQUFMLENBQVVTLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QkosUUFBNUIsQ0FBYjtBQUNBLFdBQUtFLEtBQUws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a0IrQixLQUFsQixDQUF3QixHQUF4QixFQUE2QixJQUE3QjtBQUNEOzs7MkJBRU07QUFDTCxXQUFLN0MsSUFBTCxDQUFVd0MsTUFBVixDQUFpQkMsVUFBakIsQ0FBNEIsSUFBNUI7O0FBRUE7QUFDRDs7OztFQTNFa0I3QixPQUFPa0MsSzs7QUE4RTVCbEMsT0FBT2IsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiZmx5bWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmx5TWFuIGV4dGVuZHMgRW5naW5lLkVuZW15IHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZmx5TWFuX2ZseS5wbmcnKVxyXG5cclxuICAgIHRoaXMudmVydGljYWxlVHdlZW4gPSB0aGlzLmFkZFZlcnRpY2FsZU1vdmUoKVxyXG4gICAgdGhpcy5hZGRFbWl0dGVyKClcclxuICB9XHJcblxyXG4gIGFkZEVtaXR0ZXIoKSB7XHJcbiAgICBjb25zdCBtYXhTbW9rZSA9IDIwXHJcbiAgICBjb25zdCBidXJzdEludGVydmFsID0gMTAwXHJcblxyXG4gICAgdGhpcy5zbW9rZSA9IHRoaXMuZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCBtYXhTbW9rZSlcclxuICAgIHRoaXMuc21va2UubWFrZVBhcnRpY2xlcyhFbmdpbmUuc3ByaXRlc2hlZXQsIFsnc21va2UucG5nJ10sIG1heFNtb2tlKVxyXG4gICAgdGhpcy5zbW9rZS5ncmF2aXR5ID0gMFxyXG4gICAgdGhpcy5zbW9rZS5zZXRBbHBoYSgxLCAwLCAyMDAwKVxyXG4gICAgdGhpcy5zbW9rZS5zZXRTY2FsZSgwLCBFbmdpbmUuc2NhbGVSYXRpbywgMCwgRW5naW5lLnNjYWxlUmF0aW8sIDIwMDApXHJcbiAgICB0aGlzLnNtb2tlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS50aW50ID0gMHg3Nzc3NzdcclxuICAgIH0pXHJcbiAgICB0aGlzLnNtb2tlLmxpZmVzcGFuID0gMjAwMFxyXG4gICAgdGhpcy5zbW9rZS5zZXRYU3BlZWQoMSwgMTUpXHJcbiAgICB0aGlzLnNtb2tlLnNldFlTcGVlZCgxLCAxNSlcclxuXHJcbiAgICB0aGlzLnNtb2tlLnRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKClcclxuICAgIHRoaXMuc21va2UudGltZXIubG9vcChidXJzdEludGVydmFsLCB0aGlzLmJ1cnN0LCB0aGlzKVxyXG4gICAgdGhpcy5zbW9rZS50aW1lci5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBidXJzdCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuc21va2UuZW1pdFBhcnRpY2xlKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIsIEVuZ2luZS5zcHJpdGVzaGVldCwgJ3Ntb2tlLnBuZycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRWZXJ0aWNhbGVNb3ZlKCkge1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oNTAsIDEyNSlcclxuICAgIGNvbnN0IHRpbWUgPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oODUwLCAxMjUwKVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy55ICsgZGlzdGFuY2VcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLnlcclxuICAgICAgfSwgdGltZSlcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLnkgLSBkaXN0YW5jZVxyXG4gICAgICB9LCB0aW1lKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHk6IHRoaXMueVxyXG4gICAgICB9LCB0aW1lKVxyXG4gICAgICAubG9vcCgpXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5KSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG5cclxuICAgIHRoaXMuYWRkVmVydGljYWxlTW92ZSgpXHJcbiAgfVxyXG5cclxuICBkaWUoKSB7XHJcbiAgICBjb25zdCBpbXB1bHNlID0gNDAwXHJcblxyXG4gICAgdGhpcy5nYW1lLnR3ZWVucy5yZW1vdmVGcm9tKHRoaXMpXHJcbiAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDEwMCwgNjAwKVxyXG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAtaW1wdWxzZVxyXG4gICAgdGhpcy5ib2R5LmdyYXZpdHkuc2V0VG8oMjAwLCAyMDAwKVxyXG4gIH1cclxuXHJcbiAga2lsbCgpIHtcclxuICAgIHRoaXMuZ2FtZS50d2VlbnMucmVtb3ZlRnJvbSh0aGlzKVxyXG5cclxuICAgIHN1cGVyLmtpbGwoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkZseU1hbiA9IEZseU1hblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VuZC5qcyJdLCJuYW1lcyI6WyJHcm91bmQiLCJnYW1lIiwieCIsInkiLCJ0eXBlIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsIm5hbWUiLCJnZXROYW1lIiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJ3aWR0aCIsInNjYWxlUmF0aW8iLCJoZWlnaHQiLCJhdXRvQ3VsbCIsInBoeXNpY3MiLCJlbmFibGUiLCJib2R5IiwiaW1tb3ZhYmxlIiwiY2hlY2tDb2xsaXNpb24iLCJkb3duIiwibGVmdCIsImRhdGEiLCJmcmFtZSIsIlBoYXNlciIsIlNwcml0ZSIsIkNBS0UiLCJTQU5EIiwiU05PVyIsIlNUT05FIiwiV09PRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLG9CQUFZQyxJQUFaLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBaUY7QUFBQSxZQUF6REMsSUFBeUQsdUVBQWxESixPQUFPSSxJQUFQLENBQVlDLEtBQXNDO0FBQUEsWUFBL0JDLEtBQStCLHVFQUF2QixLQUF1QjtBQUFBLFlBQWhCQyxNQUFnQix1RUFBUCxLQUFPOztBQUFBOztBQUMvRSxZQUFNQyxPQUFPUixPQUFPUyxPQUFQLENBQWVMLElBQWYsRUFBcUJFLEtBQXJCLEVBQTRCQyxNQUE1QixDQUFiOztBQUQrRSxvSEFHekVOLElBSHlFLEVBR25FQyxDQUhtRSxFQUdoRUMsQ0FIZ0UsRUFHN0RPLE9BQU9DLFdBSHNELEVBR3pDSCxJQUh5Qzs7QUFLL0UsY0FBS0ksS0FBTCxJQUFjRixPQUFPRyxVQUFyQjtBQUNBLGNBQUtDLE1BQUwsSUFBZUosT0FBT0csVUFBdEI7O0FBRUEsY0FBS0UsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxjQUFLZCxJQUFMLENBQVVlLE9BQVYsQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCO0FBQ0EsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEdBQXNCLElBQXRCO0FBQ0EsY0FBS0QsSUFBTCxDQUFVRSxjQUFWLENBQXlCQyxJQUF6QixHQUFnQyxLQUFoQztBQUNBLGNBQUtILElBQUwsQ0FBVUUsY0FBVixDQUF5QkUsSUFBekIsR0FBZ0MsS0FBaEM7O0FBRUEsY0FBS0MsSUFBTCxDQUFVZixJQUFWLEdBQWlCQSxJQUFqQjtBQUNBLGNBQUtlLElBQUwsQ0FBVW5CLElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsY0FBS21CLElBQUwsQ0FBVWpCLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0EsY0FBS2lCLElBQUwsQ0FBVWhCLE1BQVYsR0FBbUJBLE1BQW5CO0FBbEIrRTtBQW1CaEY7Ozs7OEJBRUtMLEMsRUFBR0MsQyxFQUFHQyxJLEVBQU1FLEssRUFBT0MsTSxFQUFRO0FBQy9CLGtIQUFZTCxDQUFaLEVBQWVDLENBQWY7O0FBRUEsZ0JBQU1LLE9BQU9SLE9BQU9TLE9BQVAsQ0FBZUwsSUFBZixFQUFxQkUsS0FBckIsRUFBNEJDLE1BQTVCLENBQWI7O0FBRUEsaUJBQUtpQixLQUFMLEdBQWFoQixJQUFiOztBQUVBLGlCQUFLZSxJQUFMLENBQVVmLElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsaUJBQUtlLElBQUwsQ0FBVW5CLElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsaUJBQUttQixJQUFMLENBQVVqQixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLGlCQUFLaUIsSUFBTCxDQUFVaEIsTUFBVixHQUFtQkEsTUFBbkI7QUFDRDs7OztFQWpDa0JrQixPQUFPQyxNOztBQW9DNUIxQixPQUFPSSxJQUFQLEdBQWM7QUFDWkMsV0FBTyxPQURLO0FBRVpzQixVQUFNLE1BRk07QUFHWkMsVUFBTSxNQUhNO0FBSVpDLFVBQU0sTUFKTTtBQUtaQyxXQUFPLE9BTEs7QUFNWkMsVUFBTTtBQU5NLENBQWQ7O0FBU0EvQixPQUFPUyxPQUFQLEdBQWlCLFVBQUNMLElBQUQsRUFBT0UsS0FBUCxFQUFjQyxNQUFkLEVBQXlCO0FBQ3hDLFFBQUlDLG1CQUFpQkosSUFBckI7O0FBRUEsUUFBSUUsS0FBSixFQUFXRSxRQUFRLFFBQVI7QUFDWCxRQUFJRCxNQUFKLEVBQVlDLFFBQVEsU0FBUjs7QUFFWkEsWUFBUSxNQUFSOztBQUVBLFdBQU9BLElBQVA7QUFDRCxDQVREOztBQVdBRSxPQUFPVixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHcm91bmQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0eXBlID0gR3JvdW5kLnR5cGUuR1JBU1MsIHNtYWxsID0gZmFsc2UsIGJyb2tlbiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBuYW1lID0gR3JvdW5kLmdldE5hbWUodHlwZSwgc21hbGwsIGJyb2tlbilcclxuXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSBFbmdpbmUuc2NhbGVSYXRpb1xyXG4gICAgdGhpcy5oZWlnaHQgKj0gRW5naW5lLnNjYWxlUmF0aW9cclxuXHJcbiAgICB0aGlzLmF1dG9DdWxsID0gdHJ1ZVxyXG5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShbdGhpc10pXHJcbiAgICB0aGlzLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxyXG4gICAgdGhpcy5ib2R5LmNoZWNrQ29sbGlzaW9uLmRvd24gPSBmYWxzZVxyXG4gICAgdGhpcy5ib2R5LmNoZWNrQ29sbGlzaW9uLmxlZnQgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuZGF0YS5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5kYXRhLnR5cGUgPSB0eXBlXHJcbiAgICB0aGlzLmRhdGEuc21hbGwgPSBzbWFsbFxyXG4gICAgdGhpcy5kYXRhLmJyb2tlbiA9IGJyb2tlblxyXG4gIH1cclxuXHJcbiAgcmVzZXQoeCwgeSwgdHlwZSwgc21hbGwsIGJyb2tlbikge1xyXG4gICAgc3VwZXIucmVzZXQoeCwgeSlcclxuXHJcbiAgICBjb25zdCBuYW1lID0gR3JvdW5kLmdldE5hbWUodHlwZSwgc21hbGwsIGJyb2tlbilcclxuXHJcbiAgICB0aGlzLmZyYW1lID0gbmFtZVxyXG5cclxuICAgIHRoaXMuZGF0YS5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5kYXRhLnR5cGUgPSB0eXBlXHJcbiAgICB0aGlzLmRhdGEuc21hbGwgPSBzbWFsbFxyXG4gICAgdGhpcy5kYXRhLmJyb2tlbiA9IGJyb2tlblxyXG4gIH1cclxufVxyXG5cclxuR3JvdW5kLnR5cGUgPSB7XHJcbiAgR1JBU1M6ICdncmFzcycsXHJcbiAgQ0FLRTogJ2Nha2UnLFxyXG4gIFNBTkQ6ICdzYW5kJyxcclxuICBTTk9XOiAnc25vdycsXHJcbiAgU1RPTkU6ICdzdG9uZScsXHJcbiAgV09PRDogJ3dvb2QnXHJcbn1cblxuR3JvdW5kLmdldE5hbWUgPSAodHlwZSwgc21hbGwsIGJyb2tlbikgPT4ge1xuICBsZXQgbmFtZSA9IGBncm91bmRfJHt0eXBlfWBcblxuICBpZiAoc21hbGwpIG5hbWUgKz0gJ19zbWFsbCdcbiAgaWYgKGJyb2tlbikgbmFtZSArPSAnX2Jyb2tlbidcblxuICBuYW1lICs9ICcucG5nJ1xuXG4gIHJldHVybiBuYW1lXG59XHJcblxyXG5FbmdpbmUuR3JvdW5kID0gR3JvdW5kXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1bXBlci5qcyJdLCJuYW1lcyI6WyJKdW1wZXIiLCJnYW1lIiwieCIsInkiLCJFbmdpbmUiLCJzcHJpdGVzaGVldCIsIndpZHRoIiwic2NhbGVSYXRpbyIsImhlaWdodCIsImFuY2hvciIsInNldFRvIiwicGh5c2ljcyIsImFyY2FkZSIsImVuYWJsZSIsImF1dG9DdWxsIiwiYWRkQW5pbWF0aW9ucyIsImFuaW1hdGlvbnMiLCJhZGQiLCJkYXRhIiwiYWN0aXZhdGVkIiwicGxheSIsIlBoYXNlciIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I7QUFBQTs7QUFBQSxnSEFDaEJGLElBRGdCLEVBQ1ZDLENBRFUsRUFDUEMsQ0FETyxFQUNKQyxPQUFPQyxXQURILEVBQ2dCLGVBRGhCOztBQUd0QixVQUFLQyxLQUFMLElBQWNGLE9BQU9HLFVBQXJCO0FBQ0EsVUFBS0MsTUFBTCxJQUFlSixPQUFPRyxVQUF0Qjs7QUFFQSxVQUFLRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7O0FBRUEsVUFBS1QsSUFBTCxDQUFVVSxPQUFWLENBQWtCQyxNQUFsQixDQUF5QkMsTUFBekIsQ0FBZ0MsT0FBaEM7O0FBRUEsVUFBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxVQUFLQyxhQUFMO0FBWnNCO0FBYXZCOzs7O29DQUVlO0FBQ2QsV0FBS0MsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBb0IsS0FBcEIsRUFBMkIsQ0FBQyxnQkFBRCxDQUEzQjtBQUNBLFdBQUtELFVBQUwsQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLENBQUMsWUFBRCxDQUE3QjtBQUNBLFdBQUtELFVBQUwsQ0FBZ0JDLEdBQWhCLENBQW9CLElBQXBCLEVBQTBCLENBQUMsZUFBRCxDQUExQjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLQyxJQUFMLENBQVVDLFNBQVYsR0FBc0IsSUFBdEI7QUFDQSxXQUFLSCxVQUFMLENBQWdCSSxJQUFoQixDQUFxQixLQUFyQjtBQUNEOzs7MEJBRUtsQixDLEVBQUdDLEMsRUFBRztBQUNWLDRHQUFZRCxDQUFaLEVBQWVDLENBQWY7QUFDQSxXQUFLZSxJQUFMLENBQVVDLFNBQVYsR0FBc0IsS0FBdEI7QUFDQSxXQUFLSCxVQUFMLENBQWdCSSxJQUFoQixDQUFxQixJQUFyQjtBQUNEOzs7O0VBL0JrQkMsT0FBT0MsTTs7QUFrQzVCbEIsT0FBT0osTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoianVtcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSnVtcGVyIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCAnc3ByaW5nX2luLnBuZycpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSBFbmdpbmUuc2NhbGVSYXRpb1xyXG4gICAgdGhpcy5oZWlnaHQgKj0gRW5naW5lLnNjYWxlUmF0aW9cclxuXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLCAxKVxyXG5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoWyB0aGlzIF0pXHJcblxyXG4gICAgdGhpcy5hdXRvQ3VsbCA9IHRydWVcclxuXHJcbiAgICB0aGlzLmFkZEFuaW1hdGlvbnMoKVxyXG4gIH1cclxuXHJcbiAgYWRkQW5pbWF0aW9ucygpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ291dCcsIFsnc3ByaW5nX291dC5wbmcnXSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3JlYWR5JywgWydzcHJpbmcucG5nJ10pXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdpbicsIFsnc3ByaW5nX2luLnBuZyddKVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmRhdGEuYWN0aXZhdGVkID0gdHJ1ZVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ291dCcpXHJcbiAgfVxyXG5cclxuICByZXNldCh4LCB5KSB7XHJcbiAgICBzdXBlci5yZXNldCh4LCB5KVxyXG4gICAgdGhpcy5kYXRhLmFjdGl2YXRlZCA9IGZhbHNlXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnaW4nKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkp1bXBlciA9IEp1bXBlclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbWluYWwuanMiXSwibmFtZXMiOlsiTm9taW5hbCIsImdhbWUiLCJ4IiwieSIsIm5vbWluYWwiLCJnZXRTdHlsZSIsImFuY2hvciIsInNldFRvIiwiYXV0b0N1bGwiLCJhZGRBbmltYXRpb24iLCJhbmltYXRpb25UaW1lIiwiYW5pbWF0aW9uRGlzdGFuY2UiLCJhbHBoYSIsInR3ZWVuIiwiYWRkIiwidG8iLCJzdGFydCIsIm9uQ29tcGxldGUiLCJraWxsIiwic3R5bGUiLCJ0ZXh0IiwiZmlsbCIsImNvbG9yIiwiZm9udCIsIlBoYXNlciIsIlRleHQiLCJFbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxPQUF4QixFQUFpQztBQUFBOztBQUFBLGtIQUN6QkgsSUFEeUIsRUFDbkJDLENBRG1CLEVBQ2hCQyxDQURnQixRQUNUQyxPQURTLEVBQ0VKLFFBQVFLLFFBQVIsQ0FBaUJELE9BQWpCLENBREY7O0FBRy9CLFVBQUtFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixHQUFsQjs7QUFFQSxVQUFLQyxRQUFMLEdBQWdCLElBQWhCOztBQUVBLFVBQUtDLFlBQUw7QUFQK0I7QUFRaEM7Ozs7bUNBeUJjO0FBQ2IsVUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0EsVUFBTUMsb0JBQW9CLEVBQTFCOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxLQUFLWixJQUFMLENBQVVhLEdBQVYsQ0FBY0QsS0FBZCxDQUFvQixJQUFwQixFQUNWRSxFQURVLENBQ1A7QUFDRkgsZUFBTyxDQURMO0FBRUZULFdBQUcsS0FBS0EsQ0FBTCxHQUFTUTtBQUZWLE9BRE8sRUFJUkQsYUFKUSxFQUtWTSxLQUxVLEVBQWI7O0FBT0EsV0FBS0gsS0FBTCxDQUFXSSxVQUFYLENBQXNCSCxHQUF0QixDQUEwQixLQUFLSSxJQUEvQixFQUFxQyxJQUFyQztBQUNEOzs7MEJBRUtoQixDLEVBQUdDLEMsRUFBR0MsTyxFQUFTO0FBQ25CLDhHQUFZRixDQUFaLEVBQWVDLENBQWY7O0FBRUEsVUFBSWdCLFFBQVFuQixRQUFRSyxRQUFSLENBQWlCRCxPQUFqQixDQUFaOztBQUVBLFdBQUtnQixJQUFMLFNBQWdCaEIsT0FBaEI7QUFDQSxXQUFLaUIsSUFBTCxHQUFZRixNQUFNRSxJQUFsQjs7QUFFQSxXQUFLWixZQUFMO0FBQ0Q7Ozs2QkFoRGVMLE8sRUFBUztBQUN2QixVQUFJa0IsY0FBSjs7QUFFQSxjQUFPbEIsT0FBUDtBQUNFLGFBQUssQ0FBTDtBQUNFa0Isa0JBQVEsUUFBUjtBQUNGO0FBQ0EsYUFBSyxDQUFMO0FBQ0VBLGtCQUFRLFFBQVI7QUFDRjtBQUNBLGFBQUssQ0FBTDtBQUNFQSxrQkFBUSxTQUFSO0FBQ0Y7QUFURjs7QUFZQSxVQUFNSCxRQUFRO0FBQ1pJLGNBQU0sWUFETTtBQUVaRixjQUFNQztBQUZNLE9BQWQ7O0FBS0EsYUFBT0gsS0FBUDtBQUNEOzs7O0VBaENtQkssT0FBT0MsSTs7QUE4RDdCQyxPQUFPMUIsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoibm9taW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vbWluYWwgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgbm9taW5hbCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgYCske25vbWluYWx9YCwgTm9taW5hbC5nZXRTdHlsZShub21pbmFsKSlcclxuXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpXHJcblxyXG4gICAgdGhpcy5hdXRvQ3VsbCA9IHRydWVcclxuXHJcbiAgICB0aGlzLmFkZEFuaW1hdGlvbigpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3R5bGUobm9taW5hbCkge1xyXG4gICAgbGV0IGNvbG9yXHJcblxyXG4gICAgc3dpdGNoKG5vbWluYWwpIHtcclxuICAgICAgY2FzZSA4OlxyXG4gICAgICAgIGNvbG9yID0gJ29yYW5nZSdcclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSA0OlxyXG4gICAgICAgIGNvbG9yID0gJ3NpbHZlcidcclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNvbG9yID0gJyNDRDdGMzInXHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGZvbnQ6ICczMXB4IEFyaWFsJyxcclxuICAgICAgZmlsbDogY29sb3JcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3R5bGVcclxuICB9XHJcblxyXG4gIGFkZEFuaW1hdGlvbigpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvblRpbWUgPSA0MDBcclxuICAgIGNvbnN0IGFuaW1hdGlvbkRpc3RhbmNlID0gNTBcclxuXHJcbiAgICB0aGlzLmFscGhhID0gMVxyXG5cclxuICAgIHRoaXMudHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgeTogdGhpcy55IC0gYW5pbWF0aW9uRGlzdGFuY2VcclxuICAgICAgfSwgYW5pbWF0aW9uVGltZSlcclxuICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICB0aGlzLnR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMua2lsbCwgdGhpcylcclxuICB9XHJcblxyXG4gIHJlc2V0KHgsIHksIG5vbWluYWwpIHtcclxuICAgIHN1cGVyLnJlc2V0KHgsIHkpXHJcblxyXG4gICAgbGV0IHN0eWxlID0gTm9taW5hbC5nZXRTdHlsZShub21pbmFsKVxyXG5cclxuICAgIHRoaXMudGV4dCA9IGArJHtub21pbmFsfWBcclxuICAgIHRoaXMuZmlsbCA9IHN0eWxlLmZpbGxcclxuXHJcbiAgICB0aGlzLmFkZEFuaW1hdGlvbigpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuTm9taW5hbCA9IE5vbWluYWxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLmpzIl0sIm5hbWVzIjpbIlRyYWlsIiwiZ2FtZSIsImZvbGxvdyIsIm1heFBhcnRpY2xlcyIsIm1ha2VQYXJ0aWNsZXMiLCJsaWZlc3BhbiIsInNldEFscGhhIiwiYm91bmNlIiwic2V0VG8iLCJfcGFydGljbGVzRW1pdCIsIl9kZWxheUVtaXQiLCJfZm9sbG93IiwiX3RpbWVyRW1taXRpbmciLCJ0aW1lIiwiY3JlYXRlIiwibG9vcCIsImVtaXQiLCJzdGFydCIsImkiLCJwYXJ0aWNsZUZyYW1lIiwicm5kIiwiYmV0d2VlbiIsImVtaXRQYXJ0aWNsZSIsIngiLCJ5IiwiaGVpZ2h0IiwicGF1c2UiLCJyZXN1bWUiLCJQaGFzZXIiLCJQYXJ0aWNsZXMiLCJBcmNhZGUiLCJFbWl0dGVyIiwiRW5naW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQjtBQUFBOztBQUN4QixRQUFNQyxlQUFlLEVBQXJCOztBQUR3Qiw4R0FHbEJGLElBSGtCLEVBR1osQ0FIWSxFQUdULENBSFMsRUFHTkUsWUFITTs7QUFLeEIsVUFBS0MsYUFBTCxDQUFtQixXQUFuQixFQUFnQyxDQUFoQyxFQUFtQ0QsWUFBbkMsRUFBaUQsSUFBakQ7QUFDQSxVQUFLRSxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsVUFBS0MsUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsTUFBS0QsUUFBekI7QUFDQSxVQUFLRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEI7O0FBRUEsVUFBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxVQUFLQyxPQUFMLEdBQWVULE1BQWY7O0FBRUEsVUFBS1UsY0FBTCxHQUFzQixNQUFLWCxJQUFMLENBQVVZLElBQVYsQ0FBZUMsTUFBZixFQUF0QjtBQUNBLFVBQUtGLGNBQUwsQ0FBb0JHLElBQXBCLENBQXlCLE1BQUtMLFVBQTlCLEVBQTBDLE1BQUtNLElBQS9DO0FBQ0EsVUFBS0osY0FBTCxDQUFvQkssS0FBcEI7QUFoQndCO0FBaUJ6Qjs7OzsyQkFFTTtBQUNMLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtULGNBQXpCLEVBQXlDUyxHQUF6QyxFQUE4QztBQUM1QyxZQUFNQyxnQkFBZ0IsS0FBS2xCLElBQUwsQ0FBVW1CLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUF0Qjs7QUFFQSxhQUFLQyxZQUFMLENBQ0UsS0FBS1gsT0FBTCxDQUFhWSxDQURmLEVBRUUsS0FBS1osT0FBTCxDQUFhYSxDQUFiLEdBQWlCLEtBQUtiLE9BQUwsQ0FBYWMsTUFBYixHQUFzQixHQUZ6QyxFQUdFLFdBSEYsRUFJRU4sYUFKRjtBQU1EO0FBQ0Y7OztnQ0FFVztBQUNWLFdBQUtQLGNBQUwsQ0FBb0JjLEtBQXBCO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtkLGNBQUwsQ0FBb0JlLE1BQXBCO0FBQ0Q7Ozs7RUF2Q2lCQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QkMsTzs7QUEwQzVDQyxPQUFPaEMsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6InRyYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhaWwgZXh0ZW5kcyBQaGFzZXIuUGFydGljbGVzLkFyY2FkZS5FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBmb2xsb3cpIHtcclxuICAgIGNvbnN0IG1heFBhcnRpY2xlcyA9IDIwXHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgMCwgMCwgbWF4UGFydGljbGVzKVxyXG5cclxuICAgIHRoaXMubWFrZVBhcnRpY2xlcygncGFydGljbGVzJywgMCwgbWF4UGFydGljbGVzLCB0cnVlKVxyXG4gICAgdGhpcy5saWZlc3BhbiA9IDUwMFxyXG4gICAgdGhpcy5zZXRBbHBoYSgxLCAwLCB0aGlzLmxpZmVzcGFuKVxyXG4gICAgdGhpcy5ib3VuY2Uuc2V0VG8oMSlcclxuXHJcbiAgICB0aGlzLl9wYXJ0aWNsZXNFbWl0ID0gMlxyXG4gICAgdGhpcy5fZGVsYXlFbWl0ID0gNTBcclxuICAgIHRoaXMuX2ZvbGxvdyA9IGZvbGxvd1xyXG5cclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5sb29wKHRoaXMuX2RlbGF5RW1pdCwgdGhpcy5lbWl0LCB0aGlzKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBlbWl0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXJ0aWNsZXNFbWl0OyBpKyspIHtcclxuICAgICAgY29uc3QgcGFydGljbGVGcmFtZSA9IHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCA0KVxyXG5cclxuICAgICAgdGhpcy5lbWl0UGFydGljbGUoXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LngsXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LnkgKyB0aGlzLl9mb2xsb3cuaGVpZ2h0IC8gMS4xLFxyXG4gICAgICAgICdwYXJ0aWNsZXMnLFxyXG4gICAgICAgIHBhcnRpY2xlRnJhbWVcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5wYXVzZSgpXHJcbiAgfVxyXG5cclxuICBzdGFydEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5yZXN1bWUoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLlRyYWlsID0gVHJhaWxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
      this.distanceBetweenGrounds = 450;

      this.score = Engine.Service.get('Score');
      this.score.coins = 0;

      window.game = this;
    }
  }, {
    key: 'create',
    value: function create() {
      this.profiler = Engine.Service.get('Profiler');

      var worldHeight = 550 * 5;
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

      this.cloud = new Engine.Cloud(this.game, this.startGround.x + 200, this.startGround.y - 150);
      this.enemies.add(this.cloud);

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
      this.physics.arcade.overlap(this.bunny, this.coins, this.takeCoin, null, this);
      this.physics.arcade.overlap(this.bunny, this.enemies, this.collideEnemies, null, this);
      this.physics.arcade.overlap(this.bunny, this.jumpers, this.overlapJumper, null, this);
      this.updateDie();

      // TODO: Need incapsulation
      this.score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE);
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
    key: 'render',
    value: function render() {
      // this.game.debug.body(this.cloud, 'rgba(20, 0, 255, 0.35)')
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

      var label = this.add.text(this.game.width / 2, marginTop, 'Best ' + this.score.bestDistance + 'm.', style);
      label.anchor.setTo(0.5);

      this.bunny.bringToTop();
    }
  }, {
    key: 'configurateCamera',
    value: function configurateCamera() {
      var paddingLeft = 200;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsImxvYWQiLCJhdGxhc1hNTCIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiaW1hZ2UiLCJhdWRpbyIsImRpc3RhbmNlQmV0d2Vlbkdyb3VuZHMiLCJzY29yZSIsIlNlcnZpY2UiLCJnZXQiLCJjb2lucyIsIndpbmRvdyIsImdhbWUiLCJwcm9maWxlciIsIndvcmxkSGVpZ2h0Iiwic3RhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwaHlzaWNzIiwic3RhcnRTeXN0ZW0iLCJQaGFzZXIiLCJQaHlzaWNzIiwiQVJDQURFIiwid29ybGQiLCJzZXRCb3VuZHMiLCJoZWlnaHQiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJjcmVhdGVCYWNrZ3JvdW5kIiwiY3JlYXRlQnVubnkiLCJjcmVhdGVTcGlrZXMiLCJjcmVhdGVHcm91bmRzIiwiY3JlYXRlSnVtcGVycyIsImNyZWF0ZUNvaW5zIiwiY3JlYXRlRW5lbWllcyIsImJ1bm55IiwiYWRkVHJhaWwiLCJjb25maWd1cmF0ZUNhbWVyYSIsImFkZENvbnRyb2wiLCJjcmVhdGVEaXN0YW5jZUxhYmVsIiwiY3JlYXRlQ29pbnNMYWJlbCIsImNyZWF0ZUxvc2VMYWJlbCIsImNyZWF0ZVN0YXJ0TGFiZWwiLCJjcmVhdGVCZXN0RGlzdGFuY2UiLCJjcmVhdGVOb21pbmFscyIsImNsb3VkIiwiQ2xvdWQiLCJzdGFydEdyb3VuZCIsIngiLCJ5IiwiZW5lbWllcyIsImFkZCIsImRhdGEiLCJpc0RlYWQiLCJhcmNhZGUiLCJjb2xsaWRlIiwiYmxvb2QiLCJncm91bmRzIiwib3ZlcmxhcCIsInRha2VDb2luIiwiY29sbGlkZUVuZW1pZXMiLCJqdW1wZXJzIiwib3ZlcmxhcEp1bXBlciIsInVwZGF0ZURpZSIsImN1cnJlbnREaXN0YW5jZSIsIk1hdGgiLCJyb3VuZCIsIlNjb3JlIiwiTVVMVElQRVJfRElTVEFOQ0UiLCJjb2luIiwid2lkdGgiLCJub21pbmFscyIsImdlbmVyYXRlIiwibm9taW5hbCIsInRha2UiLCJraWxsIiwic3VtbSIsImNoaWxkcmVuIiwiaXRlbSIsImxlbmd0aCIsImRlYnVnIiwidGV4dCIsImNhbWVyYSIsInRvdGFsSW5WaWV3IiwidHJhaWwiLCJkaWUiLCJDb21wb25lbnQiLCJKdW1wZXJHZW5lcmF0b3IiLCJFbmVteUdlbmVyYXRvciIsImVuZW15IiwianVtcGVyIiwiYWN0aXZhdGVkIiwiYWN0aXZhdGUiLCJib2R5IiwidmVsb2NpdHkiLCJzZXRUbyIsIlBST1RPVFlQRSIsIlNwaWtlIiwiQ09VTlQiLCJib3R0b21TcGlrZXMiLCJCb3R0b21TcGlrZUdlbmVyYXRvciIsImkiLCJzcGlrZSIsIk5vbWluYWxHZW5lcmF0b3IiLCJiZXN0RGlzdGFuY2UiLCJCZXN0RGlzdGFuY2UiLCJsb3NlTGFiZWwiLCJzaG93Iiwic3RhcnRMYWJlbCIsImhpZGUiLCJydW4iLCJDb2luR2VuZXJhdG9yIiwiTWVzc2FnZSIsImFuY2hvciIsImV4aXN0aW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImRpc3RhbmNlTGFiZWwiLCJEaXN0YW5jZSIsInBhZGRpbmciLCJjb2luc0xhYmVsIiwiQ29pbkNvdW50ZXIiLCJob3RrZXkyIiwiaW5wdXQiLCJrZXlib2FyZCIsImFkZEtleSIsIktleUNvZGUiLCJRIiwib25Eb3duIiwicGxheURpZUFuaW1hdGlvbiIsImhvdGtleSIsIlNQQUNFQkFSIiwic3BhY2ViYXJEb3duIiwibW91c2UiLCJtb3VzZURvd25DYWxsYmFjayIsInN0YXRlIiwicmVzdGFydCIsInJ1bm5pbmciLCJqdW1wIiwic3RhcnQiLCJtYXJnaW5Cb3R0b20iLCJ0eXBlIiwiR3JvdW5kIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsIkJ1bm55Iiwib25EaWVkIiwibG9zZSIsIkdyb3VuZHNHZW5lcmF0b3IiLCJjcmVhdGVTdGFydEdyb3VuZCIsImNyZWF0ZUZpcnN0R3JvdW5kcyIsInN0eWxlIiwiZmlsbCIsImZvbnQiLCJncm91bmQiLCJsYWJlbCIsImJyaW5nVG9Ub3AiLCJwYWRkaW5nTGVmdCIsInNtb290aE1vdmUiLCJkZWFkWm9uZUhlaWdodCIsInJvdW5kUHgiLCJmb2xsb3ciLCJDYW1lcmEiLCJGT0xMT1dfTE9DS09OIiwiZGVhZHpvbmUiLCJSZWN0YW5nbGUiLCJiYWNrZ3JvdW5kcyIsImdyb3VwIiwiQmFja2dyb3VuZCIsIlN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs4QkFFUztBQUNSLFdBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUNFQyxPQUFPQyxXQURULEVBRUUsZ0NBRkYsRUFHRSxnQ0FIRjs7QUFNQSxXQUFLSCxJQUFMLENBQVVJLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsdUNBQTFCO0FBQ0EsV0FBS0osSUFBTCxDQUFVSSxLQUFWLENBQWdCLFFBQWhCLEVBQTBCLHVDQUExQjtBQUNBLFdBQUtKLElBQUwsQ0FBVUksS0FBVixDQUFnQixRQUFoQixFQUEwQix1Q0FBMUI7O0FBRUEsV0FBS0osSUFBTCxDQUFVSyxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLENBQUMsd0JBQUQsRUFBMkIsd0JBQTNCLENBQXhCO0FBQ0EsV0FBS0wsSUFBTCxDQUFVSyxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLENBQUMsd0JBQUQsRUFBMkIsd0JBQTNCLENBQXhCO0FBQ0EsV0FBS0wsSUFBTCxDQUFVSyxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLENBQUMsd0JBQUQsRUFBMkIsd0JBQTNCLENBQXhCOztBQUVBLFdBQUtMLElBQUwsQ0FBVUcsV0FBVixDQUFzQixXQUF0QixFQUFtQyw4QkFBbkMsRUFBbUUsQ0FBbkUsRUFBc0UsQ0FBdEU7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS0csc0JBQUwsR0FBOEIsR0FBOUI7O0FBRUEsV0FBS0MsS0FBTCxHQUFhTCxPQUFPTSxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsT0FBbkIsQ0FBYjtBQUNBLFdBQUtGLEtBQUwsQ0FBV0csS0FBWCxHQUFtQixDQUFuQjs7QUFFQUMs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MEosV0FBTCxDQUFpQnBILEdBQWpCLENBQXFCLElBQUloRCxPQUFPc0ssVUFBWCxDQUFzQixLQUFLNUosSUFBM0IsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsUUFBdkMsRUFBaUQsQ0FBQyxHQUFsRCxDQUFyQjtBQUNBLFdBQUswSixXQUFMLENBQWlCcEgsR0FBakIsQ0FBcUIsSUFBSWhELE9BQU9zSyxVQUFYLENBQXNCLEtBQUs1SixJQUEzQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxFQUF1QyxRQUF2QyxFQUFpRCxDQUFDLElBQWxELENBQXJCO0FBQ0Q7Ozs7RUExV2dCTyxPQUFPc0osSzs7QUE2VzFCdkssT0FBT0gsSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuYXRsYXNYTUwoXHJcbiAgICAgIEVuZ2luZS5zcHJpdGVzaGVldCxcclxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvanVtcGVyLnBuZycsXHJcbiAgICAgICdhc3NldHMvc3ByaXRlc2hlZXRzL2p1bXBlci54bWwnXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjInLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXIyLnBuZycpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyMycsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjMucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXI0JywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyNC5wbmcnKVxyXG5cclxuICAgIHRoaXMubG9hZC5hdWRpbygnbG9zZScsIFsnYXNzZXRzL3NvdW5kcy9sb3NlLm1wMycsICdhc3NldHMvc291bmRzL2xvc2Uub2dnJ10pXHJcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2NvaW4nLCBbJ2Fzc2V0cy9zb3VuZHMvY29pbi5tcDMnLCAnYXNzZXRzL3NvdW5kcy9jb2luLm9nZyddKVxyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdqdW1wJywgWydhc3NldHMvc291bmRzL2p1bXAubXAzJywgJ2Fzc2V0cy9zb3VuZHMvanVtcC5vZ2cnXSlcclxuXHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BhcnRpY2xlcycsICdhc3NldHMvc3ByaXRlcy9wYXJ0aWNsZXMucG5nJywgOCwgOClcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHMgPSA0NTBcclxuXHJcbiAgICB0aGlzLnNjb3JlID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdTY29yZScpXHJcbiAgICB0aGlzLnNjb3JlLmNvaW5zID0gMFxyXG5cclxuICAgIHdpbmRvdy5nYW1lID0gdGhpc1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5wcm9maWxlciA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnUHJvZmlsZXInKVxyXG5cclxuICAgIGNvbnN0IHdvcmxkSGVpZ2h0ID0gNTUwICogNVxyXG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAweEFERTZGRlxyXG4gICAgdGhpcy5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSlcclxuICAgIHRoaXMud29ybGQuc2V0Qm91bmRzKDAsIC0od29ybGRIZWlnaHQgLSB0aGlzLmdhbWUuaGVpZ2h0KSwgTnVtYmVyLk1BWF9WQUxVRSwgd29ybGRIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJ1bm55KClcclxuICAgIHRoaXMuY3JlYXRlU3Bpa2VzKClcclxuICAgIHRoaXMuY3JlYXRlR3JvdW5kcygpXHJcbiAgICB0aGlzLmNyZWF0ZUp1bXBlcnMoKVxyXG4gICAgdGhpcy5jcmVhdGVDb2lucygpXHJcbiAgICB0aGlzLmNyZWF0ZUVuZW1pZXMoKVxyXG5cclxuICAgIHRoaXMuYnVubnkuYWRkVHJhaWwoKVxyXG5cclxuICAgIHRoaXMuY29uZmlndXJhdGVDYW1lcmEoKVxyXG4gICAgdGhpcy5hZGRDb250cm9sKClcclxuICAgIHRoaXMuY3JlYXRlRGlzdGFuY2VMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZUNvaW5zTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVMb3NlTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVTdGFydExhYmVsKClcclxuICAgIHRoaXMuY3JlYXRlQmVzdERpc3RhbmNlKClcclxuICAgIHRoaXMuY3JlYXRlTm9taW5hbHMoKVxyXG5cclxuICAgIC8vIFRFTVBcclxuXHJcbiAgICB0aGlzLmNsb3VkID0gbmV3IEVuZ2luZS5DbG91ZCh0aGlzLmdhbWUsIHRoaXMuc3RhcnRHcm91bmQueCArIDIwMCwgdGhpcy5zdGFydEdyb3VuZC55IC0gMTUwKVxyXG4gICAgdGhpcy5lbmVtaWVzLmFkZCh0aGlzLmNsb3VkKVxyXG5cclxuICAgIC8vIEVORCBURU1QXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5idW5ueS5kYXRhLmlzRGVhZCkge1xyXG4gICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5idW5ueS5kYXRhLmJsb29kLCB0aGlzLmdyb3VuZHMpXHJcbiAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LmRhdGEuYmxvb2QsIHRoaXMuZW5lbWllcylcclxuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LCB0aGlzLmdyb3VuZHMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5idW5ueSwgdGhpcy5jb2lucywgdGhpcy50YWtlQ29pbiwgbnVsbCwgdGhpcylcclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLmJ1bm55LCB0aGlzLmVuZW1pZXMsIHRoaXMuY29sbGlkZUVuZW1pZXMsIG51bGwsIHRoaXMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5idW5ueSwgdGhpcy5qdW1wZXJzLCB0aGlzLm92ZXJsYXBKdW1wZXIsIG51bGwsIHRoaXMpXHJcbiAgICB0aGlzLnVwZGF0ZURpZSgpXHJcblxyXG4gICAgLy8gVE9ETzogTmVlZCBpbmNhcHN1bGF0aW9uXHJcbiAgICB0aGlzLnNjb3JlLmN1cnJlbnREaXN0YW5jZSA9IE1hdGgucm91bmQodGhpcy5idW5ueS54IC8gRW5naW5lLlNjb3JlLk1VTFRJUEVSX0RJU1RBTkNFKVxyXG4gIH1cclxuXHJcbiAgdGFrZUNvaW4oYnVubnksIGNvaW4pIHtcclxuICAgIGNvbnN0IHggPSB0aGlzLmJ1bm55LnggKyB0aGlzLmJ1bm55LndpZHRoIC8gMlxyXG4gICAgY29uc3QgeSA9IHRoaXMuYnVubnkueVxyXG5cclxuICAgIHRoaXMubm9taW5hbHMuZ2VuZXJhdGUoeCwgeSwgY29pbi5kYXRhLm5vbWluYWwpXHJcblxyXG4gICAgdGhpcy5zY29yZS5jb2lucyArPSBjb2luLmRhdGEubm9taW5hbFxyXG5cclxuICAgIGNvaW4udGFrZSgpXHJcbiAgICBjb2luLmtpbGwoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLmJvZHkodGhpcy5jbG91ZCwgJ3JnYmEoMjAsIDAsIDI1NSwgMC4zNSknKVxyXG4gIH1cclxuXHJcbiAgZGVidWdDb3VudE9iamVjdCgpIHtcclxuICAgIGxldCBzdW1tID0gMFxyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy53b3JsZC5jaGlsZHJlbikge1xyXG4gICAgICBzdW1tICs9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoICsgMVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdPYmplY3RzIGluIG1lbW9yeTogJyArIHN1bW0sIDkwLCAxNSlcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdSZW5kZXJlZCBvYmplY3RzOiAnICsgdGhpcy5jYW1lcmEudG90YWxJblZpZXcsIDkwLCAzNSlcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdDb2lucyBvYmplY3RzOiAnICsgdGhpcy5jb2lucy5sZW5ndGgsIDkwLCA1NSlcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdFbmVtaWVzIG9iamVjdHM6ICcgKyB0aGlzLmVuZW1pZXMubGVuZ3RoLCA5MCwgNzUpXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnR3JvdW5kcyBvYmplY3RzOiAnICsgdGhpcy5ncm91bmRzLmxlbmd0aCwgOTAsIDk1KVxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ05vbWluYWxzIG9iamVjdHM6ICcgKyB0aGlzLm5vbWluYWxzLmxlbmd0aCwgOTAsIDExNSlcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdKdW1wZXJzIG9iamVjdHM6ICcgKyB0aGlzLmp1bXBlcnMubGVuZ3RoLCA5MCwgMTM1KVxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0Jsb29kIG9iamVjdHM6ICcgKyB0aGlzLmJ1bm55LmRhdGEuYmxvb2QubGVuZ3RoLCA5MCwgMTU1KVxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1RyYWlsIG9iamVjdHM6ICcgKyB0aGlzLmJ1bm55LmRhdGEudHJhaWwubGVuZ3RoLCA5MCwgMTc1KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGllKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmJ1bm55LnkgPiB0aGlzLmdhbWUuaGVpZ2h0IC0gMTAwICYmXHJcbiAgICAgICF0aGlzLmJ1bm55LmRhdGEuaXNEZWFkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5idW5ueS5kaWUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlSnVtcGVycygpIHtcclxuICAgIHRoaXMuanVtcGVycyA9IG5ldyBFbmdpbmUuQ29tcG9uZW50Lkp1bXBlckdlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICB0aGlzLmdyb3VuZHNcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVuZW1pZXMoKSB7XHJcbiAgICB0aGlzLmVuZW1pZXMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5FbmVteUdlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICB0aGlzLmdyb3VuZHNcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbGxpZGVFbmVtaWVzKGJ1bm55LCBlbmVteSkge1xyXG4gICAgaWYgKHRoaXMuYnVubnkuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIHRoaXMuYnVubnkuZGllKClcclxuICAgIGVuZW15LmRpZSgpXHJcbiAgfVxyXG5cclxuICBvdmVybGFwSnVtcGVyKGJ1bm55LCBqdW1wZXIpIHtcclxuICAgIGlmIChqdW1wZXIuZGF0YS5hY3RpdmF0ZWQpIHJldHVyblxyXG5cclxuICAgIGp1bXBlci5hY3RpdmF0ZSgpXHJcbiAgICBidW5ueS5ib2R5LnZlbG9jaXR5LnNldFRvKDkwMDAsIC0yMDAwKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3Bpa2VzKCkge1xyXG4gICAgY29uc3QgUFJPVE9UWVBFID0gbmV3IEVuZ2luZS5TcGlrZSh0aGlzLmdhbWUsIDAsIDApXHJcbiAgICBjb25zdCBDT1VOVCA9ICh0aGlzLmdhbWUud2lkdGggKyB0aGlzLmJ1bm55LngpIC8gUFJPVE9UWVBFLndpZHRoXHJcblxyXG4gICAgdGhpcy5ib3R0b21TcGlrZXMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5Cb3R0b21TcGlrZUdlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICBQUk9UT1RZUEVcclxuICAgIClcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcclxuICAgICAgbGV0IHNwaWtlID0gbmV3IEVuZ2luZS5TcGlrZShcclxuICAgICAgICB0aGlzLmdhbWUsXHJcbiAgICAgICAgaSAqIFBST1RPVFlQRS53aWR0aCxcclxuICAgICAgICB0aGlzLmdhbWUuaGVpZ2h0XHJcbiAgICAgIClcclxuXHJcbiAgICAgIHRoaXMuYm90dG9tU3Bpa2VzLmFkZChzcGlrZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZU5vbWluYWxzKCkge1xyXG4gICAgdGhpcy5ub21pbmFscyA9IG5ldyBFbmdpbmUuQ29tcG9uZW50Lk5vbWluYWxHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmVzdERpc3RhbmNlKCkge1xyXG4gICAgdGhpcy5iZXN0RGlzdGFuY2UgPSBuZXcgRW5naW5lLkJlc3REaXN0YW5jZSh0aGlzLmdhbWUpXHJcbiAgfVxyXG5cclxuICBsb3NlKCkge1xyXG4gICAgdGhpcy5sb3NlTGFiZWwuc2hvdygpXHJcblxyXG4gICAgLy8gVE9ETzogTmVlZCBpbmNhcHN1bGF0aW9uXHJcbiAgICBpZiAodGhpcy5zY29yZS5iZXN0RGlzdGFuY2UgPCB0aGlzLnNjb3JlLmN1cnJlbnREaXN0YW5jZSkge1xyXG4gICAgICB0aGlzLnNjb3JlLmJlc3REaXN0YW5jZSA9IHRoaXMuc2NvcmUuY3VycmVudERpc3RhbmNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuc3RhcnRMYWJlbC5oaWRlKClcclxuICAgIHRoaXMuYnVubnkucnVuKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvaW5zKCkge1xyXG4gICAgdGhpcy5jb2lucyA9IG5ldyBFbmdpbmUuQ29tcG9uZW50LkNvaW5HZW5lcmF0b3IodGhpcy5nYW1lLCB0aGlzLmJ1bm55LCB0aGlzLmdyb3VuZHMpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMb3NlTGFiZWwoKSB7XHJcbiAgICB0aGlzLmxvc2VMYWJlbCA9IG5ldyBFbmdpbmUuTWVzc2FnZShcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLyAyLFxyXG4gICAgICB0aGlzLmdhbWUuaGVpZ2h0IC8gMixcclxuICAgICAgJ1lvdSBsb3NlIDotKFxcclxcblByZXNzIHNwYWNlYmFyJ1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMubG9zZUxhYmVsLmFuY2hvci5zZXRUbygwLjUpXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmxvc2VMYWJlbClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVN0YXJ0TGFiZWwoKSB7XHJcbiAgICB0aGlzLnN0YXJ0TGFiZWwgPSBuZXcgRW5naW5lLk1lc3NhZ2UoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC8gMixcclxuICAgICAgdGhpcy5nYW1lLmhlaWdodCAvIDIsXHJcbiAgICAgICdQcmVzcyBzcGFjZWJhclxcclxcbnRvIHN0YXJ0J1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuc3RhcnRMYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgdGhpcy5zdGFydExhYmVsLnNob3coKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5zdGFydExhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGlzdGFuY2VMYWJlbCgpIHtcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxNVxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTBcclxuXHJcbiAgICB0aGlzLmRpc3RhbmNlTGFiZWwgPSBuZXcgRW5naW5lLkRpc3RhbmNlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAtIG1hcmdpbkxlZnQsXHJcbiAgICAgIG1hcmdpblRvcFxyXG4gICAgKVxyXG4gICAgdGhpcy5kaXN0YW5jZUxhYmVsLmFuY2hvci5zZXRUbygxLCAwKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5kaXN0YW5jZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29pbnNMYWJlbCgpIHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAyMFxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gdGhpcy5kaXN0YW5jZUxhYmVsLnkgKyB0aGlzLmRpc3RhbmNlTGFiZWwuaGVpZ2h0IC8gMiArIHBhZGRpbmdcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxNVxyXG5cclxuICAgIHRoaXMuY29pbnNMYWJlbCA9IG5ldyBFbmdpbmUuQ29pbkNvdW50ZXIoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gbWFyZ2luTGVmdCxcclxuICAgICAgbWFyZ2luVG9wXHJcbiAgICApXHJcbiAgICB0aGlzLmNvaW5zTGFiZWwuYW5jaG9yLnNldFRvKDEsIDApXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmNvaW5zTGFiZWwpXHJcbiAgfVxyXG5cclxuICBhZGRDb250cm9sKCkge1xyXG4gICAgbGV0IGhvdGtleTIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Q29kZS5RKVxyXG4gICAgaG90a2V5Mi5vbkRvd24uYWRkKCgpID0+IHtcclxuICAgICAgdGhpcy5idW5ueS5wbGF5RGllQW5pbWF0aW9uKClcclxuICAgIH0sIHRoaXMpXHJcblxyXG4gICAgbGV0IGhvdGtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlDb2RlLlNQQUNFQkFSKVxyXG4gICAgaG90a2V5Lm9uRG93bi5hZGQodGhpcy5zcGFjZWJhckRvd24sIHRoaXMpXHJcblxyXG4gICAgbGV0IG1vdXNlID0gdGhpcy5pbnB1dC5tb3VzZVxyXG4gICAgbW91c2UubW91c2VEb3duQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3BhY2ViYXJEb3duKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYWNlYmFyRG93bigpIHtcclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEuaXNEZWFkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUucmVzdGFydCh0cnVlLCBmYWxzZSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEucnVubmluZykge1xyXG4gICAgICB0aGlzLmJ1bm55Lmp1bXAoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRHcm91bmQoKSB7XHJcbiAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAyNTBcclxuICAgIGNvbnN0IHggPSAxMDBcclxuICAgIGNvbnN0IHkgPSB0aGlzLmJ1bm55LnkgKyBtYXJnaW5Cb3R0b21cclxuICAgIGNvbnN0IHR5cGUgPSBHcm91bmQudHlwZS5HUkFTU1xyXG4gICAgY29uc3Qgc21hbGwgPSBmYWxzZVxyXG4gICAgY29uc3QgYnJva2VuID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLnN0YXJ0R3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdHlwZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIGJyb2tlbixcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMuYWRkKHRoaXMuc3RhcnRHcm91bmQpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCdW5ueSgpIHtcclxuICAgIHdpbmRvdy5idW5ueSA9IHRoaXMuYnVubnkgPSBuZXcgRW5naW5lLkJ1bm55KHRoaXMuZ2FtZSwgMTUwLCAxNTAsICdidW5ueTInKVxyXG4gICAgdGhpcy5idW5ueS5vbkRpZWQuYWRkKHRoaXMubG9zZSwgdGhpcylcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnVubnkpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVHcm91bmRzKCkge1xyXG4gICAgdGhpcy5ncm91bmRzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuR3JvdW5kc0dlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHNcclxuICAgIClcclxuICAgIHRoaXMuY3JlYXRlU3RhcnRHcm91bmQoKVxyXG4gICAgdGhpcy5jcmVhdGVGaXJzdEdyb3VuZHMoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlyc3RHcm91bmRzKCkge1xyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTAwXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJyMwMEJDRDQnLFxyXG4gICAgICBmb250OiAnMzFweCBBcmlhbCdcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZ2FtZS53aWR0aCAvIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kczsgaSsrKSB7XHJcbiAgICAgIGxldCBncm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZCh0aGlzLmdhbWUsIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kcyAqIGksIDQwMClcclxuICAgICAgdGhpcy5ncm91bmRzLmFkZChncm91bmQpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxhYmVsID0gdGhpcy5hZGQudGV4dChcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC8gMixcclxuICAgICAgbWFyZ2luVG9wLFxyXG4gICAgICBgQmVzdCAke3RoaXMuc2NvcmUuYmVzdERpc3RhbmNlfW0uYCxcclxuICAgICAgc3R5bGVcclxuICAgIClcclxuICAgIGxhYmVsLmFuY2hvci5zZXRUbygwLjUpXHJcblxyXG4gICAgdGhpcy5idW5ueS5icmluZ1RvVG9wKClcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyYXRlQ2FtZXJhKCkge1xyXG4gICAgY29uc3QgcGFkZGluZ0xlZnQgPSAyMDBcclxuICAgIGNvbnN0IHNtb290aE1vdmUgPSAwLjE1XHJcbiAgICBjb25zdCBkZWFkWm9uZUhlaWdodCA9IDUwXHJcblxyXG4gICAgdGhpcy5jYW1lcmEucm91bmRQeCA9IGZhbHNlXHJcbiAgICB0aGlzLmNhbWVyYS5mb2xsb3codGhpcy5idW5ueSwgUGhhc2VyLkNhbWVyYS5GT0xMT1dfTE9DS09OLCAxLCBzbW9vdGhNb3ZlKVxyXG4gICAgdGhpcy5jYW1lcmEuZGVhZHpvbmUgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZShwYWRkaW5nTGVmdCwgdGhpcy5nYW1lLmhlaWdodCAvIDIgLSB0aGlzLmJ1bm55LmhlaWdodCAqIDEuNSwgMSwgZGVhZFpvbmVIZWlnaHQpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCYWNrZ3JvdW5kKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcyA9IHRoaXMuYWRkLmdyb3VwKClcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmFkZChuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXIyJywgLTAuMDUpKVxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyMycsIC0wLjEpKVxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyNCcsIC0wLjI1KSlcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5HYW1lID0gR2FtZVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
