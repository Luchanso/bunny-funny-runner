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

            this.templates.push([[0, 3, 0], [2, 0, 2], [0, 3, 0]]);

            this.templates.push([[3]]);

            this.templates.push([[0, 0, 0, 3, 0, 0, 0], [0, 0, 2, 0, 2, 0, 0], [0, 2, 0, 0, 0, 2, 0], [2, 0, 0, 0, 0, 0, 2], [1, 1, 1, 1, 1, 1, 1]]);
        }
    }, {
        key: "createdNewGround",
        value: function createdNewGround(ground) {
            if (!Phaser.Utils.chanceRoll(30)) return;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvY29pbi5qcyJdLCJuYW1lcyI6WyJDb2luR2VuZXJhdG9yIiwiZ2FtZSIsImJ1bm55IiwiZ3JvdW5kcyIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsImFkZCIsImNyZWF0ZWROZXdHcm91bmQiLCJwcm90b3R5cGUiLCJFbmdpbmUiLCJDb2luIiwiY3JlYXRlVGVtcGxhdGVzIiwidGVtcGxhdGVzIiwicHVzaCIsImdyb3VuZCIsIlBoYXNlciIsIlV0aWxzIiwiY2hhbmNlUm9sbCIsIm1hcmdpbiIsInBhZGRpbmciLCJvZmZzZXRYIiwieCIsIndpZHRoIiwib2Zmc2V0WSIsInkiLCJoZWlnaHQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJzbWFsbCIsInJuZCIsInBpY2siLCJ0ZW1wbGF0ZVdpZHRoIiwibGVuZ3RoIiwidGVtcGxhdGVIZWlnaHQiLCJpIiwiaiIsIm1heFR5cGUiLCJudW1iZXIiLCJNYXRoIiwicmFuZG9tIiwidHlwZSIsIkdPTEQiLCJTSUxWRVIiLCJCUk9OWkUiLCJjb2luIiwiZ2V0Rmlyc3REZWFkIiwicmVzZXQiLCJHZW5lcmF0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7O0FBQ0osMkJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQztBQUFBOztBQUFBLGtJQUMxQkYsSUFEMEIsRUFDcEJDLEtBRG9COztBQUdoQyxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQSxPQUFMLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUFrQyxNQUFLQyxnQkFBdkM7O0FBRUEsY0FBS0MsU0FBTCxHQUFpQixJQUFJQyxPQUFPQyxJQUFYLENBQWdCLE1BQUtULElBQXJCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQWpCOztBQUVBLGNBQUtVLGVBQUw7QUFSZ0M7QUFTakM7Ozs7MENBRWlCO0FBQ2hCLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztB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SUFBSUosU0FBUyxJQUFULElBQWlCQSxTQUFTLEdBQTFCLElBQWlDRCxVQUFVLENBQS9DLEVBQWtEO0FBQUU7QUFDekRJLHVCQUFPL0IsT0FBT0MsSUFBUCxDQUFZOEIsSUFBWixDQUFpQkUsTUFBeEI7QUFDRCxhQUZNLE1BRUE7QUFBRTtBQUNQRix1QkFBTy9CLE9BQU9DLElBQVAsQ0FBWThCLElBQVosQ0FBaUJHLE1BQXhCO0FBQ0Q7O0FBRUQsZ0JBQUlDLE9BQU8sS0FBS0MsWUFBTCxFQUFYO0FBQ0EsZ0JBQUlELFFBQVEsSUFBWixFQUFrQjtBQUNoQkEsdUJBQU8sSUFBSW5DLE9BQU9DLElBQVgsQ0FBZ0IsS0FBS1QsSUFBckIsRUFBMkJvQixDQUEzQixFQUE4QkcsQ0FBOUIsRUFBaUNnQixJQUFqQyxDQUFQO0FBQ0EscUJBQUtsQyxHQUFMLENBQVNzQyxJQUFUO0FBQ0QsYUFIRCxNQUdPO0FBQ0xBLHFCQUFLRSxLQUFMLENBQVd6QixDQUFYLEVBQWNHLENBQWQ7QUFDRDs7QUFFRCxtQkFBT29CLElBQVA7QUFDRDs7OztFQXpHeUJHLFM7O0FBNEc1QnRDLE9BQU91QyxTQUFQLENBQWlCaEQsYUFBakIsR0FBaUNBLGFBQWpDIiwiZmlsZSI6ImdlbmVyYXRvcnMvY29pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvaW5HZW5lcmF0b3IgZXh0ZW5kcyBHZW5lcmF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGJ1bm55LCBncm91bmRzKSB7XHJcbiAgICBzdXBlcihnYW1lLCBidW5ueSlcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMgPSBncm91bmRzXHJcbiAgICB0aGlzLmdyb3VuZHMuc2lnbmFscy5nZW5lcmF0ZS5hZGQodGhpcy5jcmVhdGVkTmV3R3JvdW5kLCB0aGlzKVxyXG5cclxuICAgIHRoaXMucHJvdG90eXBlID0gbmV3IEVuZ2luZS5Db2luKHRoaXMuZ2FtZSwgMCwgMClcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcygpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZW1wbGF0ZXMoKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlcyA9IFtdXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzAsIDAsIDIsIDMsIDBdLFxyXG4gICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDEsIDMsIDEsIDBdLFxyXG4gICAgICAgIFsxLCAxLCAxLCAxLCAxXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbMywgMSwgMSwgM10sXHJcbiAgICAgICAgWzEsIDAsIDAsIDFdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAxXSxcclxuICAgICAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICAgICAgWzEsIDAsIDAsIDFdLFxyXG4gICAgICAgIFsyLCAxLCAxLCAyXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbMCwgMywgMF0sXHJcbiAgICAgICAgWzIsIDAsIDJdLFxyXG4gICAgICAgIFswLCAzLCAwXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbM11cclxuICAgIF0pXHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZXMucHVzaChbXHJcbiAgICAgICAgWzAsIDAsIDAsIDMsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAyLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICBbMCwgMiwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgWzIsIDAsIDAsIDAsIDAsIDAsIDJdLFxyXG4gICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxXVxyXG4gICAgXSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZWROZXdHcm91bmQoZ3JvdW5kKSB7XHJcbiAgICBpZiAoIVBoYXNlci5VdGlscy5jaGFuY2VSb2xsKDMwKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0gLTVcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAxXHJcblxyXG4gICAgbGV0IG9mZnNldFggPSBncm91bmQueCArIGdyb3VuZC53aWR0aCAvIDIgKyB0aGlzLnByb3RvdHlwZS53aWR0aCAvIDJcclxuICAgIGxldCBvZmZzZXRZID0gZ3JvdW5kLnkgKyBtYXJnaW4gKyArIHRoaXMucHJvdG90eXBlLmhlaWdodCAvIDJcclxuXHJcbiAgICBsZXQgdGVtcGxhdGVcclxuICAgIGlmIChncm91bmQuZGF0YS5zbWFsbCkge1xyXG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzW3RoaXMuZ2FtZS5ybmQucGljayhbMSwgMiwgM10pXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcGxhdGUgPSB0aGlzLmdhbWUucm5kLnBpY2sodGhpcy50ZW1wbGF0ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBsYXRlV2lkdGggPSB0ZW1wbGF0ZVswXS5sZW5ndGggKiB0aGlzLnByb3RvdHlwZS53aWR0aFxyXG4gICAgbGV0IHRlbXBsYXRlSGVpZ2h0ID0gdGVtcGxhdGUubGVuZ3RoICogdGhpcy5wcm90b3R5cGUuaGVpZ2h0XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB0ZW1wbGF0ZSkge1xyXG4gICAgICBmb3IgKGxldCBqIGluIHRlbXBsYXRlW2ldKSB7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlW2ldW2pdID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgb2Zmc2V0WCArIGogKiAodGhpcy5wcm90b3R5cGUud2lkdGggKyBwYWRkaW5nKSAtIHRlbXBsYXRlV2lkdGggLyAyLFxyXG4gICAgICAgICAgICBvZmZzZXRZICsgaSAqICh0aGlzLnByb3RvdHlwZS5oZWlnaHQgKyBwYWRkaW5nKSAtIHRlbXBsYXRlSGVpZ2h0LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVtpXVtqXVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGUoeCwgeSwgbWF4VHlwZSkge1xyXG4gICAgY29uc3QgbnVtYmVyID0gTWF0aC5yYW5kb20oKVxyXG4gICAgbGV0IHR5cGUgPSAwXHJcblxyXG5cclxuICAgIGlmIChudW1iZXIgPCAwLjE1ICYmIG1heFR5cGUgPiAyKSB7IC8vIDE1JVxyXG4gICAgICB0eXBlID0gRW5naW5lLkNvaW4udHlwZS5HT0xEXHJcbiAgICB9IGVsc2UgaWYgKG51bWJlciA+IDAuMTUgJiYgbnVtYmVyIDwgMC41ICYmIG1heFR5cGUgPiAxKSB7IC8vICUzNVxyXG4gICAgICB0eXBlID0gRW5naW5lLkNvaW4udHlwZS5TSUxWRVJcclxuICAgIH0gZWxzZSB7IC8vIDUwJVxyXG4gICAgICB0eXBlID0gRW5naW5lLkNvaW4udHlwZS5CUk9OWkVcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29pbiA9IHRoaXMuZ2V0Rmlyc3REZWFkKClcclxuICAgIGlmIChjb2luID09IG51bGwpIHtcclxuICAgICAgY29pbiA9IG5ldyBFbmdpbmUuQ29pbih0aGlzLmdhbWUsIHgsIHksIHR5cGUpXHJcbiAgICAgIHRoaXMuYWRkKGNvaW4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb2luLnJlc2V0KHgsIHkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvaW5cclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuQ29pbkdlbmVyYXRvciA9IENvaW5HZW5lcmF0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
      if (!Phaser.Utils.chanceRoll(30)) return;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZW5lbXkuanMiXSwibmFtZXMiOlsiRW5lbXlHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJncm91bmRzIiwic2lnbmFscyIsImdlbmVyYXRlIiwiYWRkIiwiZmx5TWFucyIsImdyb3VwIiwic3ByaW5nTWFucyIsInNwaWtlQmFsbHMiLCJ0eXBlcyIsIkVuZ2luZSIsIlNwcmluZ01hbiIsIkZseU1hbiIsIlNwaWtlQmFsbCIsImdyb3VuZCIsIlBoYXNlciIsIlV0aWxzIiwiY2hhbmNlUm9sbCIsIm1hcmdpbkxlZnQiLCJybmQiLCJiZXR3ZWVuIiwieCIsInkiLCJ3aWR0aCIsInR5cGUiLCJwaWNrIiwiZW5lbXkiLCJnZXRGaXJzdERlYWQiLCJyZXNldCIsIkdlbmVyYXRvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxjOzs7QUFDSiwwQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQUEsZ0lBQzFCRixJQUQwQixFQUNwQkMsS0FEb0I7O0FBR2hDLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtBLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLEdBQTlCLENBQWtDLE1BQUtELFFBQXZDOztBQUVBLFVBQUtFLE9BQUwsR0FBZSxNQUFLTixJQUFMLENBQVVLLEdBQVYsQ0FBY0UsS0FBZCxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLUixJQUFMLENBQVVLLEdBQVYsQ0FBY0UsS0FBZCxFQUFsQjtBQUNBLFVBQUtFLFVBQUwsR0FBa0IsTUFBS1QsSUFBTCxDQUFVSyxHQUFWLENBQWNFLEtBQWQsRUFBbEI7O0FBRUEsVUFBS0csS0FBTCxHQUFhLENBQ1hDLE9BQU9DLFNBREksRUFFWEQsT0FBT0UsTUFGSSxFQUdYRixPQUFPRyxTQUhJLENBQWI7QUFWZ0M7QUFlakM7Ozs7NkJBRVFDLE0sRUFBUTtBQUNmLFVBQUksQ0FBQ0MsT0FBT0MsS0FBUCxDQUFhQyxVQUFiLENBQXdCLEVBQXhCLENBQUwsRUFBa0M7O0FBRWxDLFVBQU1DLGFBQWEsS0FBS25CLElBQUwsQ0FBVW9CLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixFQUF0QixFQUEwQixHQUExQixDQUFuQjs7QUFFQSxVQUFJQyxJQUFJLENBQVI7QUFDQSxVQUFJQyxJQUFJLENBQVI7O0FBRUFELFVBQUlQLE9BQU9PLENBQVAsR0FBV1AsT0FBT1MsS0FBbEIsR0FBMEJMLFVBQTlCO0FBQ0FJLFVBQUlSLE9BQU9RLENBQVAsR0FBVyxLQUFLdkIsSUFBTCxDQUFVb0IsR0FBVixDQUFjQyxPQUFkLENBQXNCLENBQUMsRUFBdkIsRUFBMkIsRUFBM0IsQ0FBZjs7QUFFQSxVQUFJSSxPQUFPLEtBQUt6QixJQUFMLENBQVVvQixHQUFWLENBQWNNLElBQWQsQ0FBbUIsS0FBS2hCLEtBQXhCLENBQVg7QUFDQSxVQUFJaUIsY0FBSjs7QUFFQTtBQUNBLGNBQU9GLElBQVA7QUFDRSxhQUFLZCxPQUFPQyxTQUFaO0FBQ0VlLGtCQUFRLEtBQUtuQixVQUFMLENBQWdCb0IsWUFBaEIsRUFBUjtBQUNBLGNBQUlELFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsb0JBQVEsSUFBSWhCLE9BQU9DLFNBQVgsQ0FBcUIsS0FBS1osSUFBMUIsRUFBZ0NzQixDQUFoQyxFQUFtQ0MsQ0FBbkMsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMSSxrQkFBTUUsS0FBTixDQUFZUCxDQUFaLEVBQWVDLENBQWY7QUFDRDtBQUNIO0FBQ0EsYUFBS1osT0FBT0UsTUFBWjtBQUNFYyxrQkFBUSxLQUFLckIsT0FBTCxDQUFhc0IsWUFBYixFQUFSO0FBQ0EsY0FBSUQsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCQSxvQkFBUSxJQUFJaEIsT0FBT0UsTUFBWCxDQUFrQixLQUFLYixJQUF2QixFQUE2QnNCLENBQTdCLEVBQWdDQyxDQUFoQyxDQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0xJLGtCQUFNRSxLQUFOLENBQVlQLENBQVosRUFBZUMsQ0FBZjtBQUNEO0FBQ0g7QUFDQSxhQUFLWixPQUFPRyxTQUFaO0FBQ0VhLGtCQUFRLEtBQUtsQixVQUFMLENBQWdCbUIsWUFBaEIsRUFBUjtBQUNBLGNBQUlELFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsb0JBQVEsSUFBSWhCLE9BQU9HLFNBQVgsQ0FBcUIsS0FBS2QsSUFBMUIsRUFBZ0NzQixDQUFoQyxFQUFtQ0MsQ0FBbkMsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMSSxrQkFBTUUsS0FBTixDQUFZUCxDQUFaLEVBQWVDLENBQWY7QUFDRDtBQUNIO0FBeEJGOztBQTJCQSxXQUFLbEIsR0FBTCxDQUFTc0IsS0FBVDtBQUNEOzs7O0VBN0QwQkcsUzs7QUFnRTdCbkIsT0FBT29CLFNBQVAsQ0FBaUJoQyxjQUFqQixHQUFrQ0EsY0FBbEMiLCJmaWxlIjoiZ2VuZXJhdG9ycy9lbmVteS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVuZW15R2VuZXJhdG9yIGV4dGVuZHMgR2VuZXJhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZ3JvdW5kcykge1xyXG4gICAgc3VwZXIoZ2FtZSwgYnVubnkpXHJcblxyXG4gICAgdGhpcy5ncm91bmRzID0gZ3JvdW5kc1xyXG4gICAgdGhpcy5ncm91bmRzLnNpZ25hbHMuZ2VuZXJhdGUuYWRkKHRoaXMuZ2VuZXJhdGUsIHRoaXMpXHJcblxyXG4gICAgdGhpcy5mbHlNYW5zID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICB0aGlzLnNwcmluZ01hbnMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKClcclxuICAgIHRoaXMuc3Bpa2VCYWxscyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG5cclxuICAgIHRoaXMudHlwZXMgPSBbXHJcbiAgICAgIEVuZ2luZS5TcHJpbmdNYW4sXHJcbiAgICAgIEVuZ2luZS5GbHlNYW4sXHJcbiAgICAgIEVuZ2luZS5TcGlrZUJhbGxcclxuICAgIF1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlKGdyb3VuZCkge1xyXG4gICAgaWYgKCFQaGFzZXIuVXRpbHMuY2hhbmNlUm9sbCgzMCkpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oNTAsIDE1MClcclxuXHJcbiAgICBsZXQgeCA9IDBcclxuICAgIGxldCB5ID0gMFxyXG5cclxuICAgIHggPSBncm91bmQueCArIGdyb3VuZC53aWR0aCArIG1hcmdpbkxlZnRcclxuICAgIHkgPSBncm91bmQueSArIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigtNzUsIDc1KVxyXG5cclxuICAgIGxldCB0eXBlID0gdGhpcy5nYW1lLnJuZC5waWNrKHRoaXMudHlwZXMpXHJcbiAgICBsZXQgZW5lbXlcclxuXHJcbiAgICAvLyBUT0RPOiBOZWVkIHJlZmFjdG9yaW5nIGFuZCBpbmNhcHN1bGF0aW9uc1xyXG4gICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgY2FzZSBFbmdpbmUuU3ByaW5nTWFuOlxyXG4gICAgICAgIGVuZW15ID0gdGhpcy5zcHJpbmdNYW5zLmdldEZpcnN0RGVhZCgpXHJcbiAgICAgICAgaWYgKGVuZW15ID09IG51bGwpIHtcclxuICAgICAgICAgIGVuZW15ID0gbmV3IEVuZ2luZS5TcHJpbmdNYW4odGhpcy5nYW1lLCB4LCB5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbmVteS5yZXNldCh4LCB5KVxyXG4gICAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBFbmdpbmUuRmx5TWFuOlxyXG4gICAgICAgIGVuZW15ID0gdGhpcy5mbHlNYW5zLmdldEZpcnN0RGVhZCgpXHJcbiAgICAgICAgaWYgKGVuZW15ID09IG51bGwpIHtcclxuICAgICAgICAgIGVuZW15ID0gbmV3IEVuZ2luZS5GbHlNYW4odGhpcy5nYW1lLCB4LCB5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbmVteS5yZXNldCh4LCB5KVxyXG4gICAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBFbmdpbmUuU3Bpa2VCYWxsOlxyXG4gICAgICAgIGVuZW15ID0gdGhpcy5zcGlrZUJhbGxzLmdldEZpcnN0RGVhZCgpXHJcbiAgICAgICAgaWYgKGVuZW15ID09IG51bGwpIHtcclxuICAgICAgICAgIGVuZW15ID0gbmV3IEVuZ2luZS5TcGlrZUJhbGwodGhpcy5nYW1lLCB4LCB5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbmVteS5yZXNldCh4LCB5KVxyXG4gICAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZChlbmVteSlcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuRW5lbXlHZW5lcmF0b3IgPSBFbmVteUdlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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

      var VERTICAL_COUNT = 5;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIkdyb3VuZHNHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJkaXN0YW5jZSIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsIlBoYXNlciIsIlNpZ25hbCIsImN1cnJlbnRTdGVwIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsIngiLCJtYXJnaW4iLCJ3aWR0aCIsIlZFUlRJQ0FMX0NPVU5UIiwiU1RBUlRfUE9JTlQiLCJ3b3JsZCIsImJvdW5kcyIsImhlaWdodCIsIkdSSURfSEVJR0hUIiwiUk5EX0hPUklaT05UQUwiLCJSTkRfVkVSVElDQUwiLCJpIiwicm5kIiwicGljayIsImJldHdlZW4iLCJ5IiwiZ3JvdW5kIiwiYWRkUmFuZG9tR3JvdW5kIiwiZGlzcGF0Y2giLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJFbmdpbmUiLCJHcm91bmQiLCJ0eXBlIiwibWFwIiwidmFsIiwic21hbGwiLCJicm9rZW4iLCJnZXRGaXJzdERlYWQiLCJhZGQiLCJyZXNldCIsIkNvbXBvbmVudCIsIkdlbmVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLGdCOzs7QUFDSjs7Ozs7O0FBTUEsNEJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQztBQUFBOztBQUFBLG9JQUMzQkYsSUFEMkIsRUFDckJDLEtBRHFCOztBQUdqQyxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZTtBQUNiQyxnQkFBVSxJQUFJQyxPQUFPQyxNQUFYO0FBREcsS0FBZjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQVBpQztBQVFsQzs7Ozs2QkFFUTtBQUNQOztBQUVBLFVBQUlDLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLVCxLQUFMLENBQVdVLENBQVgsR0FBZSxLQUFLVCxRQUEvQixDQUFYO0FBQ0EsVUFBSVUsU0FBVSxLQUFLWixJQUFMLENBQVVhLEtBQXhCOztBQUVBLFVBQUlMLFNBQVMsS0FBS0QsV0FBbEIsRUFBK0I7QUFDN0IsYUFBS0EsV0FBTCxHQUFtQkMsSUFBbkI7QUFDQSxhQUFLSixRQUFMLENBQWNRLE1BQWQ7QUFDRDtBQUNGOzs7NkJBRVFBLE0sRUFBUTtBQUNmOztBQUVBLFVBQU1FLGlCQUFpQixDQUF2QjtBQUNBLFVBQU1DLGNBQWMsRUFBRSxLQUFLZixJQUFMLENBQVVnQixLQUFWLENBQWdCQyxNQUFoQixDQUF1QkMsTUFBdkIsR0FBZ0MsS0FBS2xCLElBQUwsQ0FBVWtCLE1BQTVDLENBQXBCO0FBQ0EsVUFBTUMsY0FBYyxHQUFwQixDQUxlLENBS1E7QUFDdkIsVUFBTUMsaUJBQWlCLEdBQXZCO0FBQ0EsVUFBTUMsZUFBZSxHQUFyQjs7QUFFQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVIsY0FBcEIsRUFBb0NRLEdBQXBDLEVBQXlDO0FBQ3ZDLFlBQUksS0FBS3RCLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxFQUFtQixNQUFNLEtBQXpCLEVBQUosRUFBcUM7O0FBRXJDLFlBQU1iLElBQUksS0FBS1YsS0FBTCxDQUFXVSxDQUFYLEdBQWVDLE1BQWYsR0FBd0IsS0FBS1osSUFBTCxDQUFVdUIsR0FBVixDQUFjRSxPQUFkLENBQXNCLENBQUNMLGNBQXZCLEVBQXVDQSxjQUF2QyxDQUFsQztBQUNBLFlBQU1NLElBQUlYLGNBQWNJLGNBQWNHLENBQTVCLEdBQWdDLEtBQUt0QixJQUFMLENBQVV1QixHQUFWLENBQWNFLE9BQWQsQ0FBc0IsQ0FBQ0osWUFBdkIsRUFBcUNBLFlBQXJDLENBQTFDOztBQUVBLFlBQUlNLFNBQVMsS0FBS0MsZUFBTCxDQUFxQmpCLENBQXJCLEVBQXdCZSxDQUF4QixDQUFiOztBQUVBLGFBQUt2QixPQUFMLENBQWFDLFFBQWIsQ0FBc0J5QixRQUF0QixDQUErQkYsTUFBL0I7QUFDRDtBQUNGOzs7b0NBRWVoQixDLEVBQUdlLEMsRUFBRztBQUNwQixVQUFNSSxRQUFRQyxPQUFPQyxJQUFQLENBQVlDLE9BQU9DLE1BQVAsQ0FBY0MsSUFBMUIsRUFBZ0NDLEdBQWhDLENBQW9DLGVBQU87QUFDdkQsZUFBT0gsT0FBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CRSxHQUFuQixDQUFQO0FBQ0QsT0FGYSxDQUFkO0FBR0EsVUFBTUYsT0FBTyxLQUFLbkMsSUFBTCxDQUFVdUIsR0FBVixDQUFjQyxJQUFkLENBQW1CTSxLQUFuQixDQUFiO0FBQ0EsVUFBTVEsUUFBUSxLQUFLdEMsSUFBTCxDQUFVdUIsR0FBVixDQUFjQyxJQUFkLENBQW1CLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBbkIsQ0FBZDtBQUNBLFVBQU1lLFNBQVMsS0FBS3ZDLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQixDQUFDLElBQUQsRUFBTyxLQUFQLENBQW5CLENBQWY7O0FBRUEsVUFBSUcsU0FBUyxLQUFLYSxZQUFMLEVBQWI7QUFDQSxVQUFJYixVQUFVLElBQWQsRUFBb0I7QUFDbEJBLGlCQUFTLElBQUlNLE9BQU9DLE1BQVgsQ0FDUCxLQUFLbEMsSUFERSxFQUVQVyxDQUZPLEVBR1BlLENBSE8sRUFJUFMsSUFKTyxFQUtQRyxLQUxPLEVBTVBDLE1BTk8sQ0FBVDtBQVFBLGFBQUtFLEdBQUwsQ0FBU2QsTUFBVDtBQUNELE9BVkQsTUFVTztBQUNMQSxlQUFPZSxLQUFQLENBQWEvQixDQUFiLEVBQWdCZSxDQUFoQixFQUFtQlMsSUFBbkIsRUFBeUJHLEtBQXpCLEVBQWdDQyxNQUFoQztBQUNEOztBQUVELGFBQU9aLE1BQVA7QUFDRDs7OztFQTFFNEJNLE9BQU9VLFNBQVAsQ0FBaUJDLFM7O0FBNkVoRFgsT0FBT1UsU0FBUCxDQUFpQjVDLGdCQUFqQixHQUFvQ0EsZ0JBQXBDIiwiZmlsZSI6ImdlbmVyYXRvcnMvZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR3JvdW5kc0dlbmVyYXRvciBleHRlbmRzIEVuZ2luZS5Db21wb25lbnQuR2VuZXJhdG9yIHtcclxuICAvKipcclxuICAgKiBHcm91bmRzIGdlbmVyYXRvclxyXG4gICAqIEBwYXJhbSAge1BoYXNlci5HYW1lfSBnYW1lXHJcbiAgICogQHBhcmFtICB7RW5naW5lLkJ1bm55fSBidW5ueSBPYmplY3Qgb2YgYnVubnlcclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGRpc3RhbmNlIERpc3RhbmNlIGJldHdlZW4gZ3JvdW5kc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGJ1bm55LCBkaXN0YW5jZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgYnVubnkpXHJcblxyXG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlXHJcbiAgICB0aGlzLnNpZ25hbHMgPSB7XHJcbiAgICAgIGdlbmVyYXRlOiBuZXcgUGhhc2VyLlNpZ25hbCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gLTFcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpXHJcblxyXG4gICAgbGV0IHN0ZXAgPSBNYXRoLmZsb29yKHRoaXMuYnVubnkueCAvIHRoaXMuZGlzdGFuY2UpXHJcbiAgICBsZXQgbWFyZ2luID0gKHRoaXMuZ2FtZS53aWR0aClcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gdGhpcy5jdXJyZW50U3RlcCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTdGVwID0gc3RlcFxyXG4gICAgICB0aGlzLmdlbmVyYXRlKG1hcmdpbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlKG1hcmdpbikge1xyXG4gICAgc3VwZXIuZ2VuZXJhdGUoKVxyXG5cclxuICAgIGNvbnN0IFZFUlRJQ0FMX0NPVU5UID0gNVxyXG4gICAgY29uc3QgU1RBUlRfUE9JTlQgPSAtKHRoaXMuZ2FtZS53b3JsZC5ib3VuZHMuaGVpZ2h0IC0gdGhpcy5nYW1lLmhlaWdodClcclxuICAgIGNvbnN0IEdSSURfSEVJR0hUID0gMzM1Ly90aGlzLmdhbWUud29ybGQuYm91bmRzLmhlaWdodCAvIFNQTElUX1ZFUlRJQ0FMXHJcbiAgICBjb25zdCBSTkRfSE9SSVpPTlRBTCA9IDEyMFxyXG4gICAgY29uc3QgUk5EX1ZFUlRJQ0FMID0gMTAwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBWRVJUSUNBTF9DT1VOVDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmdhbWUucm5kLnBpY2tbdHJ1ZSwgZmFsc2VdKSBjb250aW51ZVxyXG5cclxuICAgICAgY29uc3QgeCA9IHRoaXMuYnVubnkueCArIG1hcmdpbiArIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigtUk5EX0hPUklaT05UQUwsIFJORF9IT1JJWk9OVEFMKVxyXG4gICAgICBjb25zdCB5ID0gU1RBUlRfUE9JTlQgKyBHUklEX0hFSUdIVCAqIGkgKyB0aGlzLmdhbWUucm5kLmJldHdlZW4oLVJORF9WRVJUSUNBTCwgUk5EX1ZFUlRJQ0FMKVxyXG5cclxuICAgICAgbGV0IGdyb3VuZCA9IHRoaXMuYWRkUmFuZG9tR3JvdW5kKHgsIHkpXHJcblxyXG4gICAgICB0aGlzLnNpZ25hbHMuZ2VuZXJhdGUuZGlzcGF0Y2goZ3JvdW5kKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUmFuZG9tR3JvdW5kKHgsIHkpIHtcclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoRW5naW5lLkdyb3VuZC50eXBlKS5tYXAodmFsID0+IHtcclxuICAgICAgcmV0dXJuIEVuZ2luZS5Hcm91bmQudHlwZVt2YWxdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2FtZS5ybmQucGljayh0eXBlcylcclxuICAgIGNvbnN0IHNtYWxsID0gdGhpcy5nYW1lLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcbiAgICBjb25zdCBicm9rZW4gPSB0aGlzLmdhbWUucm5kLnBpY2soW3RydWUsIGZhbHNlXSlcclxuXHJcbiAgICBsZXQgZ3JvdW5kID0gdGhpcy5nZXRGaXJzdERlYWQoKVxyXG4gICAgaWYgKGdyb3VuZCA9PSBudWxsKSB7XHJcbiAgICAgIGdyb3VuZCA9IG5ldyBFbmdpbmUuR3JvdW5kKFxyXG4gICAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgICB4LFxyXG4gICAgICAgIHksXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBzbWFsbCxcclxuICAgICAgICBicm9rZW4sXHJcbiAgICAgIClcclxuICAgICAgdGhpcy5hZGQoZ3JvdW5kKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JvdW5kLnJlc2V0KHgsIHksIHR5cGUsIHNtYWxsLCBicm9rZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyb3VuZFxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkNvbXBvbmVudC5Hcm91bmRzR2VuZXJhdG9yID0gR3JvdW5kc0dlbmVyYXRvclxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
      // return
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

Bunny.MAX_JUMPS = 2;
Bunny.ACCELERATION = 2000;
Bunny.BASE_MAX_SPEED = 500;

Engine.Bunny = Bunny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bm55LmpzIl0sIm5hbWVzIjpbIkJ1bm55IiwiZ2FtZSIsIngiLCJ5IiwibmFtZSIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiZGF0YSIsImlzRGVhZCIsInJ1bm5pbmciLCJjb3VudEp1bXAiLCJNQVhfSlVNUFMiLCJwaHlzaWNzIiwiYXJjYWRlIiwiZW5hYmxlIiwid2lkdGgiLCJoZWlnaHQiLCJib2R5IiwiZ3Jhdml0eSIsInNldFRvIiwibWF4VmVsb2NpdHkiLCJjb2xsaWRlV29ybGRCb3VuZHMiLCJvbkRpZWQiLCJQaGFzZXIiLCJTaWduYWwiLCJjcmVhdGVBbmltYXRpb24iLCJjcmVhdGVEaWVBbmltYXRpb24iLCJhbmltYXRpb25zIiwicGxheSIsImFkZFNvdW5kcyIsImRpZVNvdW5kIiwic291bmQiLCJhZGQiLCJqdW1wU291bmQiLCJwYXJ0aWNsc2UiLCJ0cmFpbCIsIlRyYWlsIiwiZXhpc3RpbmciLCJpbkFpciIsInN0YXJ0RW1pdHQiLCJzdG9wRW1pdHQiLCJidW5ueSIsInRvdWNoaW5nIiwiZG93biIsInBsYXlEaWVBbmltYXRpb24iLCJhbmltYXRpb25Eb3duVGltZSIsImFuaW1hdGlvblVwVGltZSIsInVwTW92ZSIsImNhbWVyYSIsInVuZm9sbG93IiwidmVsb2NpdHkiLCJhY2NlbGVyYXRpb24iLCJkaXNwYXRjaCIsImJsb29kIiwiQmxvb2QiLCJwbGF5QW5pbWF0aW9uIiwiQkFTRV9NQVhfU1BFRUQiLCJBQ0NFTEVSQVRJT04iLCJqdW1wSW1wdWxzZSIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUFBOztBQUFBLDhHQUN0QkgsSUFEc0IsRUFDaEJDLENBRGdCLEVBQ2JDLENBRGEsRUFDVkUsT0FBT0MsV0FERyxFQUNVRixPQUFPLFlBRGpCOztBQUc1QixVQUFLRyxJQUFMLENBQVVILElB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IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgbmFtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCBuYW1lICsgJ19zdGFuZC5wbmcnKVxyXG5cclxuICAgIHRoaXMuZGF0YS5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IGZhbHNlXHJcbiAgICB0aGlzLmRhdGEuY291bnRKdW1wID0gQnVubnkuTUFYX0pVTVBTXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShbIHRoaXMgXSlcclxuXHJcbiAgICB0aGlzLndpZHRoICo9IDAuMzVcclxuICAgIHRoaXMuaGVpZ2h0ICo9IDAuMzVcclxuXHJcbiAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXRUbygwLCAyNTAwKVxyXG4gICAgdGhpcy5ib2R5Lm1heFZlbG9jaXR5LnNldFRvKDQwMCwgMjAwMDApXHJcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZVxyXG5cclxuICAgIHRoaXMub25EaWVkID0gbmV3IFBoYXNlci5TaWduYWwoKVxyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9uKClcclxuICAgIHRoaXMuY3JlYXRlRGllQW5pbWF0aW9uKClcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG5cclxuICAgIHRoaXMuYWRkU291bmRzKClcclxuICB9XHJcblxyXG4gIGFkZFNvdW5kcygpIHtcclxuICAgIHRoaXMuZGllU291bmQgPSB0aGlzLmdhbWUuc291bmQuYWRkKCdsb3NlJylcclxuICAgIHRoaXMuanVtcFNvdW5kID0gdGhpcy5nYW1lLnNvdW5kLmFkZCgnanVtcCcpXHJcbiAgfVxyXG5cclxuICBhZGRUcmFpbCgpIHtcclxuICAgIGNvbnN0IHBhcnRpY2xzZSA9IDI1MFxyXG4gICAgdGhpcy5kYXRhLnRyYWlsID0gbmV3IEVuZ2luZS5UcmFpbCh0aGlzLmdhbWUsIHBhcnRpY2xzZSwgdGhpcylcclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5kYXRhLnRyYWlsKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIGlmICh0aGlzLmluQWlyKCkpIHtcclxuICAgICAgdGhpcy5kYXRhLnRyYWlsLnN0YXJ0RW1pdHQoKVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnanVtcCcpXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5ydW5uaW5nKXtcclxuICAgICAgdGhpcy5kYXRhLnRyYWlsLnN0YXJ0RW1pdHQoKVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICAgICAgdGhpcy5kYXRhLmNvdW50SnVtcCA9IEJ1bm55Lk1BWF9KVU1QU1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLnRyYWlsLnN0b3BFbWl0dCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdzdGFuZCcpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbkFpcigpIHtcclxuICAgIHJldHVybiAhYnVubnkuYm9keS50b3VjaGluZy5kb3duXHJcbiAgfVxyXG5cclxuICBkaWUoKSB7XHJcbiAgICAvLyByZXR1cm5cclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICB0aGlzLmRpZVNvdW5kLnBsYXkoKVxyXG4gICAgdGhpcy5wbGF5RGllQW5pbWF0aW9uKClcclxuXHJcbiAgICBjb25zdCBhbmltYXRpb25Eb3duVGltZSA9IDEwMDBcclxuICAgIGNvbnN0IGFuaW1hdGlvblVwVGltZSA9IDEwMFxyXG4gICAgY29uc3QgdXBNb3ZlID0gMTAwXHJcblxyXG4gICAgdGhpcy5nYW1lLmNhbWVyYS51bmZvbGxvdygpXHJcblxyXG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIC0xMjAwKVxyXG4gICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi5zZXRUbygwKVxyXG4gICAgdGhpcy5ib2R5LmdyYXZpdHkuc2V0VG8oMCwgNDAwMClcclxuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSBmYWxzZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IHRydWVcclxuICAgIHRoaXMuZGF0YS50cmFpbC5zdG9wRW1pdHQoKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2h1cnQnKVxyXG5cclxuICAgIHRoaXMub25EaWVkLmRpc3BhdGNoKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZURpZUFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMuZGF0YS5ibG9vZCA9IG5ldyBFbmdpbmUuQmxvb2QodGhpcy5nYW1lLCB0aGlzKVxyXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmRhdGEuYmxvb2QpXHJcbiAgfVxyXG5cclxuICBwbGF5RGllQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhLmJsb29kLnBsYXlBbmltYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5kYXRhLnJ1bm5pbmcgPSB0cnVlXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oQnVubnkuQkFTRV9NQVhfU1BFRUQsIDApXHJcbiAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnNldFRvKEJ1bm55LkFDQ0VMRVJBVElPTiwgMClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2p1bXAnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX2p1bXAucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdydW4nLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3dhbGsxLnBuZycsIHRoaXMuZGF0YS5uYW1lICsgJ193YWxrMi5wbmcnXSwgMTAsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdodXJ0JywgW3RoaXMuZGF0YS5uYW1lICsgJ19odXJ0LnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgncmVhZHknLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3JlYWR5LnBuZyddLCAxLCB0cnVlKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnc3RhbmQnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX3N0YW5kLnBuZyddLCAxLCB0cnVlKVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBqdW1wSW1wdWxzZSA9IDkwMFxyXG5cclxuICAgIGlmICh0aGlzLmRhdGEuY291bnRKdW1wID4gMCkge1xyXG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IC1qdW1wSW1wdWxzZVxyXG4gICAgICB0aGlzLmRhdGEuY291bnRKdW1wLS1cclxuICAgICAgdGhpcy5qdW1wU291bmQucGxheSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5CdW5ueS5NQVhfSlVNUFMgPSAyXHJcbkJ1bm55LkFDQ0VMRVJBVElPTiA9IDIwMDBcclxuQnVubnkuQkFTRV9NQVhfU1BFRUQgPSA1MDBcclxuXHJcbkVuZ2luZS5CdW5ueSA9IEJ1bm55XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLmpzIl0sIm5hbWVzIjpbIlRyYWlsIiwiZ2FtZSIsIm1heFBhcnRpY2xlcyIsImZvbGxvdyIsIm1ha2VQYXJ0aWNsZXMiLCJsaWZlc3BhbiIsImJvdW5jZSIsInNldFRvIiwiX3BhcnRpY2xlc0VtaXQiLCJfZGVsYXlFbWl0IiwiX2ZvbGxvdyIsIl90aW1lckVtbWl0aW5nIiwidGltZSIsImNyZWF0ZSIsImxvb3AiLCJlbWl0Iiwic3RhcnQiLCJpIiwicGFydGljbGVGcmFtZSIsInJuZCIsImJldHdlZW4iLCJlbWl0UGFydGljbGUiLCJ4IiwieSIsImhlaWdodCIsInBhdXNlIiwicmVzdW1lIiwiUGhhc2VyIiwiUGFydGljbGVzIiwiQXJjYWRlIiwiRW1pdHRlciIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsWUFBbEIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUEsOEdBQ2hDRixJQURnQyxFQUMxQixDQUQwQixFQUN2QixDQUR1QixFQUNwQkMsWUFEb0I7O0FBR3RDLFVBQUtFLGFBQUwsQ0FBbUIsV0FBbkIsRUFBZ0MsQ0FBaEMsRUFBbUNGLFlBQW5DLEVBQWlELElBQWpEO0FBQ0EsVUFBS0csUUFBTCxHQUFnQixHQUFoQjtBQUNBLFVBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQjs7QUFFQSxVQUFLQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLE9BQUwsR0FBZVAsTUFBZjs7QUFFQSxVQUFLUSxjQUFMLEdBQXNCLE1BQUtWLElBQUwsQ0FBVVcsSUFBVixDQUFlQyxNQUFmLEVBQXRCO0FBQ0EsVUFBS0YsY0FBTCxDQUFvQkcsSUFBcEIsQ0FBeUIsTUFBS0wsVUFBOUIsRUFBMEMsTUFBS00sSUFBL0M7QUFDQSxVQUFLSixjQUFMLENBQW9CSyxLQUFwQjtBQWJzQztBQWN2Qzs7OzsyQkFFTTtBQUNMLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtULGNBQXpCLEVBQXlDUyxHQUF6QyxFQUE4QztBQUM1QyxZQUFNQyxnQkFBZ0IsS0FBS2pCLElBQUwsQ0FBVWtCLEdBQVYsQ0FBY0MsT0FBZCxDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUF0Qjs7QUFFQSxhQUFLQyxZQUFMLENBQ0UsS0FBS1gsT0FBTCxDQUFhWSxDQURmLEVBRUUsS0FBS1osT0FBTCxDQUFhYSxDQUFiLEdBQWlCLEtBQUtiLE9BQUwsQ0FBYWMsTUFBYixHQUFzQixHQUZ6QyxFQUdFLFdBSEYsRUFJRU4sYUFKRjtBQU1EO0FBQ0Y7OztnQ0FFVztBQUNWLFdBQUtQLGNBQUwsQ0FBb0JjLEtBQXBCO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtkLGNBQUwsQ0FBb0JlLE1BQXBCO0FBQ0Q7Ozs7RUFwQ2lCQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QkMsTzs7QUF1QzVDQyxPQUFPL0IsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6InRyYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhaWwgZXh0ZW5kcyBQaGFzZXIuUGFydGljbGVzLkFyY2FkZS5FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBtYXhQYXJ0aWNsZXMsIGZvbGxvdykge1xyXG4gICAgc3VwZXIoZ2FtZSwgMCwgMCwgbWF4UGFydGljbGVzKVxyXG5cclxuICAgIHRoaXMubWFrZVBhcnRpY2xlcygncGFydGljbGVzJywgMCwgbWF4UGFydGljbGVzLCB0cnVlKVxyXG4gICAgdGhpcy5saWZlc3BhbiA9IDUwMFxyXG4gICAgdGhpcy5ib3VuY2Uuc2V0VG8oMSlcclxuXHJcbiAgICB0aGlzLl9wYXJ0aWNsZXNFbWl0ID0gMlxyXG4gICAgdGhpcy5fZGVsYXlFbWl0ID0gNTBcclxuICAgIHRoaXMuX2ZvbGxvdyA9IGZvbGxvd1xyXG5cclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5sb29wKHRoaXMuX2RlbGF5RW1pdCwgdGhpcy5lbWl0LCB0aGlzKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBlbWl0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXJ0aWNsZXNFbWl0OyBpKyspIHtcclxuICAgICAgY29uc3QgcGFydGljbGVGcmFtZSA9IHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCA0KVxyXG5cclxuICAgICAgdGhpcy5lbWl0UGFydGljbGUoXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LngsXHJcbiAgICAgICAgdGhpcy5fZm9sbG93LnkgKyB0aGlzLl9mb2xsb3cuaGVpZ2h0IC8gMS4xLFxyXG4gICAgICAgICdwYXJ0aWNsZXMnLFxyXG4gICAgICAgIHBhcnRpY2xlRnJhbWVcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5wYXVzZSgpXHJcbiAgfVxyXG5cclxuICBzdGFydEVtaXR0KCkge1xyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5yZXN1bWUoKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLlRyYWlsID0gVHJhaWxcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

      // TODO: Rename this
      this._score = Engine.Service.get('Score');
      this._score.coins = 0;

      window.game = this;
    }
  }, {
    key: 'create',
    value: function create() {
      this.profiler = Engine.Service.get('Profiler');

      var worldHeight = 550 * 3;
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

      this.game.debug.text('Objects in memory: ' + summ, 90, 15);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsImxvYWQiLCJhdGxhc1hNTCIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiaW1hZ2UiLCJhdWRpbyIsImRpc3RhbmNlQmV0d2Vlbkdyb3VuZHMiLCJfc2NvcmUiLCJTZXJ2aWNlIiwiZ2V0IiwiY29pbnMiLCJ3aW5kb3ciLCJnYW1lIiwicHJvZmlsZXIiLCJ3b3JsZEhlaWdodCIsInN0YWdlIiwiYmFja2dyb3VuZENvbG9yIiwicGh5c2ljcyIsInN0YXJ0U3lzdGVtIiwiUGhhc2VyIiwiUGh5c2ljcyIsIkFSQ0FERSIsIndvcmxkIiwic2V0Qm91bmRzIiwiaGVpZ2h0IiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY3JlYXRlQmFja2dyb3VuZCIsImNyZWF0ZUJ1bm55IiwiY3JlYXRlU3Bpa2VzIiwiY3JlYXRlR3JvdW5kcyIsImNyZWF0ZUp1bXBlcnMiLCJjcmVhdGVDb2lucyIsImNyZWF0ZUVuZW1pZXMiLCJidW5ueSIsImFkZFRyYWlsIiwiY29uZmlndXJhdGVDYW1lcmEiLCJhZGRDb250cm9sIiwiY3JlYXRlRGlzdGFuY2VMYWJlbCIsImNyZWF0ZUNvaW5zTGFiZWwiLCJjcmVhdGVMb3NlTGFiZWwiLCJjcmVhdGVTdGFydExhYmVsIiwiY3JlYXRlQmVzdERpc3RhbmNlIiwiY3JlYXRlTm9taW5hbHMiLCJkYXRhIiwiaXNEZWFkIiwiYXJjYWRlIiwiY29sbGlkZSIsImJsb29kIiwiZ3JvdW5kcyIsImVuZW1pZXMiLCJvdmVybGFwIiwidGFrZUNvaW4iLCJjb2xsaWRlRW5lbWllcyIsImp1bXBlcnMiLCJvdmVybGFwSnVtcGVyIiwidXBkYXRlRGllIiwiY3VycmVudERpc3RhbmNlIiwiTWF0aCIsInJvdW5kIiwieCIsIlNjb3JlIiwiTVVMVElQRVJfRElTVEFOQ0UiLCJjb2luIiwid2lkdGgiLCJ5Iiwibm9taW5hbHMiLCJnZW5lcmF0ZSIsIm5vbWluYWwiLCJ0YWtlIiwia2lsbCIsInN1bW0iLCJsZW5ndGgiLCJib3R0b21TcGlrZXMiLCJkZWJ1ZyIsInRleHQiLCJkaWUiLCJDb21wb25lbnQiLCJKdW1wZXJHZW5lcmF0b3IiLCJFbmVteUdlbmVyYXRvciIsImVuZW15IiwianVtcGVyIiwiYWN0aXZhdGVkIiwiYWN0aXZhdGUiLCJib2R5IiwidmVsb2NpdHkiLCJzZXRUbyIsIlBST1RPVFlQRSIsIlNwaWtlIiwiQ09VTlQiLCJCb3R0b21TcGlrZUdlbmVyYXRvciIsImkiLCJzcGlrZSIsImFkZCIsIk5vbWluYWxHZW5lcmF0b3IiLCJiZXN0RGlzdGFuY2UiLCJCZXN0RGlzdGFuY2UiLCJsb3NlTGFiZWwiLCJzaG93Iiwic3RhcnRMYWJlbCIsImhpZGUiLCJydW4iLCJDb2luR2VuZXJhdG9yIiwiTWVzc2FnZSIsImFuY2hvciIsImV4aXN0aW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImRpc3RhbmNlTGFiZWwiLCJEaXN0YW5jZSIsInBhZGRpbmciLCJjb2luc0xhYmVsIiwiQ29pbkNvdW50ZXIiLCJob3RrZXkyIiwiaW5wdXQiLCJrZXlib2FyZCIsImFkZEtleSIsIktleUNvZGUiLCJRIiwib25Eb3duIiwicGxheURpZUFuaW1hdGlvbiIsImhvdGtleSIsIlNQQUNFQkFSIiwic3BhY2ViYXJEb3duIiwibW91c2UiLCJtb3VzZURvd25DYWxsYmFjayIsInN0YXRlIiwicmVzdGFydCIsInJ1bm5pbmciLCJqdW1wIiwic3RhcnQiLCJtYXJnaW5Cb3R0b20iLCJ0eXBlIiwiR3JvdW5kIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsInN0YXJ0R3JvdW5kIiwiQnVubnkiLCJvbkRpZWQiLCJsb3NlIiwiR3JvdW5kc0dlbmVyYXRvciIsImNyZWF0ZVN0YXJ0R3JvdW5kIiwiY3JlYXRlRmlyc3RHcm91bmRzIiwic3R5bGUiLCJmaWxsIiwiZm9udCIsImdyb3VuZCIsImxhYmVsIiwiYnJpbmdUb1RvcCIsInBhZGRpbmdMZWZ0Iiwic21vb3RoTW92ZSIsImRlYWRab25lSGVpZ2h0IiwiY2FtZXJhIiwicm91bmRQeCIsImZvbGxvdyIsIkNhbWVyYSIsIkZPTExPV19MT0NLT04iLCJkZWFkem9uZSIsIlJlY3RhbmdsZSIsImJhY2tncm91bmRzIiwiZ3JvdXAiLCJCYWNrZ3JvdW5kIiwiU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osa0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzhCQUVTO0FBQ1IsV0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQ0VDLE9BQU9DLFdBRFQsRUFFRSxnQ0FGRixFQUdFLGdDQUhGOztBQU1BLFdBQUtILElBQUwsQ0FBVUksS0FBVixDQUFnQixRQUFoQixFQUEwQix1Q0FBMUI7QUFDQSxXQUFLSixJQUFMLENBQVVJLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsdUNBQTFCO0FBQ0EsV0FBS0osSUFBTCxDQUFVSSxLQUFWLENBQWdCLFFBQWhCLEVBQTBCLHVDQUExQjs7QUFFQSxXQUFLSixJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0IsQ0FBeEI7QUFDQSxXQUFLTCxJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0IsQ0FBeEI7QUFDQSxXQUFLTCxJQUFMLENBQVVLLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0IsQ0FBeEI7O0FBRUEsV0FBS0wsSUFBTCxDQUFVRyxXQUFWLENBQXNCLFdBQXRCLEVBQW1DLDhCQUFuQyxFQUFtRSxDQUFuRSxFQUFzRSxDQUF0RTtBQUNEOzs7MkJBRU07QUFDTCxXQUFLRyxzQkFBTCxHQUE4QixHQUE5Qjs7QUFFQTtBQUNBLFdBQUtDLE1BQUwsR0FBY0wsT0FBT00sT0FBUCxDQUFlQyxHQUFmLENBQW1CLE9BQW5CLENBQWQ7QUFDQSxXQUFLRixNQUFMLENBQVlHLEtBQVosR0FBb0IsQ0FBcEI7O0FBRUFDLGFBQU9DLElBQVAsR0FBYyxJQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtDLFFBQUws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LCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5hdGxhc1hNTChcclxuICAgICAgRW5naW5lLnNwcml0ZXNoZWV0LFxyXG4gICAgICAnYXNzZXRzL3Nwcml0ZXNoZWV0cy9qdW1wZXIucG5nJyxcclxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvanVtcGVyLnhtbCdcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyMicsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjIucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXIzJywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyMy5wbmcnKVxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjQnLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXI0LnBuZycpXHJcblxyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdsb3NlJywgWydhc3NldHMvc291bmRzL2xvc2UubXAzJywgJ2Fzc2V0cy9zb3VuZHMvbG9zZS5vZ2cnXSlcclxuICAgIHRoaXMubG9hZC5hdWRpbygnY29pbicsIFsnYXNzZXRzL3NvdW5kcy9jb2luLm1wMycsICdhc3NldHMvc291bmRzL2NvaW4ub2dnJ10pXHJcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2p1bXAnLCBbJ2Fzc2V0cy9zb3VuZHMvanVtcC5tcDMnLCAnYXNzZXRzL3NvdW5kcy9qdW1wLm9nZyddKVxyXG5cclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGFydGljbGVzJywgJ2Fzc2V0cy9zcHJpdGVzL3BhcnRpY2xlcy5wbmcnLCA4LCA4KVxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kcyA9IDQ1MFxyXG5cclxuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzXHJcbiAgICB0aGlzLl9zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG4gICAgdGhpcy5fc2NvcmUuY29pbnMgPSAwXHJcblxyXG4gICAgd2luZG93LmdhbWUgPSB0aGlzXHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLnByb2ZpbGVyID0gRW5naW5lLlNlcnZpY2UuZ2V0KCdQcm9maWxlcicpXHJcblxyXG4gICAgY29uc3Qgd29ybGRIZWlnaHQgPSA1NTAgKiAzXHJcbiAgICB0aGlzLnN0YWdlLmJhY2tncm91bmRDb2xvciA9IDB4QURFNkZGXHJcbiAgICB0aGlzLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKVxyXG4gICAgdGhpcy53b3JsZC5zZXRCb3VuZHMoMCwgLSh3b3JsZEhlaWdodCAtIHRoaXMuZ2FtZS5oZWlnaHQpLCBOdW1iZXIuTUFYX1ZBTFVFLCB3b3JsZEhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVCYWNrZ3JvdW5kKClcclxuICAgIHRoaXMuY3JlYXRlQnVubnkoKVxyXG4gICAgdGhpcy5jcmVhdGVTcGlrZXMoKVxyXG4gICAgdGhpcy5jcmVhdGVHcm91bmRzKClcclxuICAgIHRoaXMuY3JlYXRlSnVtcGVycygpXHJcbiAgICB0aGlzLmNyZWF0ZUNvaW5zKClcclxuICAgIHRoaXMuY3JlYXRlRW5lbWllcygpXHJcblxyXG4gICAgdGhpcy5idW5ueS5hZGRUcmFpbCgpXHJcblxyXG4gICAgdGhpcy5jb25maWd1cmF0ZUNhbWVyYSgpXHJcbiAgICB0aGlzLmFkZENvbnRyb2woKVxyXG4gICAgdGhpcy5jcmVhdGVEaXN0YW5jZUxhYmVsKClcclxuICAgIHRoaXMuY3JlYXRlQ29pbnNMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZUxvc2VMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZVN0YXJ0TGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVCZXN0RGlzdGFuY2UoKVxyXG4gICAgdGhpcy5jcmVhdGVOb21pbmFscygpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5idW5ueS5kYXRhLmlzRGVhZCkge1xyXG4gICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5idW5ueS5kYXRhLmJsb29kLCB0aGlzLmdyb3VuZHMpXHJcbiAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LmRhdGEuYmxvb2QsIHRoaXMuZW5lbWllcylcclxuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLmJ1bm55LCB0aGlzLmdyb3VuZHMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5idW5ueSwgdGhpcy5jb2lucywgdGhpcy50YWtlQ29pbiwgbnVsbCwgdGhpcylcclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLmJ1bm55LCB0aGlzLmVuZW1pZXMsIHRoaXMuY29sbGlkZUVuZW1pZXMsIG51bGwsIHRoaXMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5idW5ueSwgdGhpcy5qdW1wZXJzLCB0aGlzLm92ZXJsYXBKdW1wZXIsIG51bGwsIHRoaXMpXHJcbiAgICB0aGlzLnVwZGF0ZURpZSgpXHJcblxyXG4gICAgLy8gVE9ETzogTmVlZCBpbmNhcHN1bGF0aW9uXHJcbiAgICB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2UgPSBNYXRoLnJvdW5kKHRoaXMuYnVubnkueCAvIEVuZ2luZS5TY29yZS5NVUxUSVBFUl9ESVNUQU5DRSlcclxuICB9XHJcblxyXG4gIHRha2VDb2luKGJ1bm55LCBjb2luKSB7XHJcbiAgICBjb25zdCB4ID0gdGhpcy5idW5ueS54ICsgdGhpcy5idW5ueS53aWR0aCAvIDJcclxuICAgIGNvbnN0IHkgPSB0aGlzLmJ1bm55LnlcclxuXHJcbiAgICB0aGlzLm5vbWluYWxzLmdlbmVyYXRlKHgsIHksIGNvaW4uZGF0YS5ub21pbmFsKVxyXG5cclxuICAgIHRoaXMuX3Njb3JlLmNvaW5zICs9IGNvaW4uZGF0YS5ub21pbmFsXHJcblxyXG4gICAgY29pbi50YWtlKClcclxuICAgIGNvaW4ua2lsbCgpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgc3VtbSA9IDBcclxuXHJcbiAgICBzdW1tICs9IHRoaXMuZ3JvdW5kcy5sZW5ndGhcclxuICAgIHN1bW0gKz0gdGhpcy5jb2lucy5sZW5ndGhcclxuICAgIHN1bW0gKz0gdGhpcy5lbmVtaWVzLmxlbmd0aFxyXG4gICAgc3VtbSArPSB0aGlzLmp1bXBlcnMubGVuZ3RoXHJcbiAgICBzdW1tICs9IHRoaXMuYm90dG9tU3Bpa2VzLmxlbmd0aFxyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdPYmplY3RzIGluIG1lbW9yeTogJyArIHN1bW0sIDkwLCAxNSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5idW5ueS55ID4gdGhpcy5nYW1lLmhlaWdodCAtIDEwMCAmJlxyXG4gICAgICAhdGhpcy5idW5ueS5kYXRhLmlzRGVhZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYnVubnkuZGllKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUp1bXBlcnMoKSB7XHJcbiAgICB0aGlzLmp1bXBlcnMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5KdW1wZXJHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueSxcclxuICAgICAgdGhpcy5ncm91bmRzXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbmVtaWVzKCkge1xyXG4gICAgdGhpcy5lbmVtaWVzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuRW5lbXlHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueSxcclxuICAgICAgdGhpcy5ncm91bmRzXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb2xsaWRlRW5lbWllcyhidW5ueSwgZW5lbXkpIHtcclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEuaXNEZWFkKSByZXR1cm5cclxuXHJcbiAgICB0aGlzLmJ1bm55LmRpZSgpXHJcbiAgICBlbmVteS5kaWUoKVxyXG4gIH1cclxuXHJcbiAgb3ZlcmxhcEp1bXBlcihidW5ueSwganVtcGVyKSB7XHJcbiAgICBpZiAoanVtcGVyLmRhdGEuYWN0aXZhdGVkKSByZXR1cm5cclxuXHJcbiAgICBqdW1wZXIuYWN0aXZhdGUoKVxyXG4gICAgYnVubnkuYm9keS52ZWxvY2l0eS5zZXRUbyg5MDAwLCAtMjAwMClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNwaWtlcygpIHtcclxuICAgIGNvbnN0IFBST1RPVFlQRSA9IG5ldyBFbmdpbmUuU3Bpa2UodGhpcy5nYW1lLCAwLCAwKVxyXG4gICAgY29uc3QgQ09VTlQgPSAodGhpcy5nYW1lLndpZHRoICsgdGhpcy5idW5ueS54KSAvIFBST1RPVFlQRS53aWR0aFxyXG5cclxuICAgIHRoaXMuYm90dG9tU3Bpa2VzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuQm90dG9tU3Bpa2VHZW5lcmF0b3IoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5idW5ueSxcclxuICAgICAgUFJPVE9UWVBFXHJcbiAgICApXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XHJcbiAgICAgIGxldCBzcGlrZSA9IG5ldyBFbmdpbmUuU3Bpa2UoXHJcbiAgICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICAgIGkgKiBQUk9UT1RZUEUud2lkdGgsXHJcbiAgICAgICAgdGhpcy5nYW1lLmhlaWdodFxyXG4gICAgICApXHJcblxyXG4gICAgICB0aGlzLmJvdHRvbVNwaWtlcy5hZGQoc3Bpa2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOb21pbmFscygpIHtcclxuICAgIHRoaXMubm9taW5hbHMgPSBuZXcgRW5naW5lLkNvbXBvbmVudC5Ob21pbmFsR2VuZXJhdG9yKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuYnVubnlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJlc3REaXN0YW5jZSgpIHtcclxuICAgIHRoaXMuYmVzdERpc3RhbmNlID0gbmV3IEVuZ2luZS5CZXN0RGlzdGFuY2UodGhpcy5nYW1lKVxyXG4gIH1cclxuXHJcbiAgbG9zZSgpIHtcclxuICAgIHRoaXMubG9zZUxhYmVsLnNob3coKVxyXG5cclxuICAgIC8vIFRPRE86IE5lZWQgaW5jYXBzdWxhdGlvblxyXG4gICAgaWYgKHRoaXMuX3Njb3JlLmJlc3REaXN0YW5jZSA8IHRoaXMuX3Njb3JlLmN1cnJlbnREaXN0YW5jZSkge1xyXG4gICAgICB0aGlzLl9zY29yZS5iZXN0RGlzdGFuY2UgPSB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5zdGFydExhYmVsLmhpZGUoKVxyXG4gICAgdGhpcy5idW5ueS5ydW4oKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29pbnMoKSB7XHJcbiAgICB0aGlzLmNvaW5zID0gbmV3IEVuZ2luZS5Db21wb25lbnQuQ29pbkdlbmVyYXRvcih0aGlzLmdhbWUsIHRoaXMuYnVubnksIHRoaXMuZ3JvdW5kcylcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxvc2VMYWJlbCgpIHtcclxuICAgIHRoaXMubG9zZUxhYmVsID0gbmV3IEVuZ2luZS5NZXNzYWdlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAvIDIsXHJcbiAgICAgIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLFxyXG4gICAgICAnWW91IGxvc2UgOi0oXFxyXFxuUHJlc3Mgc3BhY2ViYXInXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5sb3NlTGFiZWwuYW5jaG9yLnNldFRvKDAuNSlcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMubG9zZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRMYWJlbCgpIHtcclxuICAgIHRoaXMuc3RhcnRMYWJlbCA9IG5ldyBFbmdpbmUuTWVzc2FnZShcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLyAyLFxyXG4gICAgICB0aGlzLmdhbWUuaGVpZ2h0IC8gMixcclxuICAgICAgJ1ByZXNzIHNwYWNlYmFyXFxyXFxuZm9yIHN0YXJ0J1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuc3RhcnRMYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgdGhpcy5zdGFydExhYmVsLnNob3coKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5zdGFydExhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGlzdGFuY2VMYWJlbCgpIHtcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxNVxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTBcclxuXHJcbiAgICB0aGlzLmRpc3RhbmNlTGFiZWwgPSBuZXcgRW5naW5lLkRpc3RhbmNlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAtIG1hcmdpbkxlZnQsXHJcbiAgICAgIG1hcmdpblRvcFxyXG4gICAgKVxyXG4gICAgdGhpcy5kaXN0YW5jZUxhYmVsLmFuY2hvci5zZXRUbygxLCAwKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5kaXN0YW5jZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29pbnNMYWJlbCgpIHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAyMFxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gdGhpcy5kaXN0YW5jZUxhYmVsLnkgKyB0aGlzLmRpc3RhbmNlTGFiZWwuaGVpZ2h0IC8gMiArIHBhZGRpbmdcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxNVxyXG5cclxuICAgIHRoaXMuY29pbnNMYWJlbCA9IG5ldyBFbmdpbmUuQ29pbkNvdW50ZXIoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gbWFyZ2luTGVmdCxcclxuICAgICAgbWFyZ2luVG9wXHJcbiAgICApXHJcbiAgICB0aGlzLmNvaW5zTGFiZWwuYW5jaG9yLnNldFRvKDEsIDApXHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmNvaW5zTGFiZWwpXHJcbiAgfVxyXG5cclxuICBhZGRDb250cm9sKCkge1xyXG4gICAgbGV0IGhvdGtleTIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Q29kZS5RKVxyXG4gICAgaG90a2V5Mi5vbkRvd24uYWRkKCgpID0+IHtcclxuICAgICAgdGhpcy5idW5ueS5wbGF5RGllQW5pbWF0aW9uKClcclxuICAgIH0sIHRoaXMpXHJcblxyXG4gICAgbGV0IGhvdGtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlDb2RlLlNQQUNFQkFSKVxyXG4gICAgaG90a2V5Lm9uRG93bi5hZGQodGhpcy5zcGFjZWJhckRvd24sIHRoaXMpXHJcblxyXG4gICAgbGV0IG1vdXNlID0gdGhpcy5pbnB1dC5tb3VzZVxyXG4gICAgbW91c2UubW91c2VEb3duQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3BhY2ViYXJEb3duKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYWNlYmFyRG93bigpIHtcclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEuaXNEZWFkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUucmVzdGFydCh0cnVlLCBmYWxzZSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1bm55LmRhdGEucnVubmluZykge1xyXG4gICAgICB0aGlzLmJ1bm55Lmp1bXAoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRHcm91bmQoKSB7XHJcbiAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAyNTBcclxuICAgIGNvbnN0IHggPSAxMDBcclxuICAgIGNvbnN0IHkgPSB0aGlzLmJ1bm55LnkgKyBtYXJnaW5Cb3R0b21cclxuICAgIGNvbnN0IHR5cGUgPSBHcm91bmQudHlwZS5HUkFTU1xyXG4gICAgY29uc3Qgc21hbGwgPSBmYWxzZVxyXG4gICAgY29uc3QgYnJva2VuID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLnN0YXJ0R3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdHlwZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIGJyb2tlbixcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMuYWRkKHRoaXMuc3RhcnRHcm91bmQpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVCdW5ueSgpIHtcclxuICAgIHdpbmRvdy5idW5ueSA9IHRoaXMuYnVubnkgPSBuZXcgRW5naW5lLkJ1bm55KHRoaXMuZ2FtZSwgMTUwLCAxNTAsICdidW5ueTInKVxyXG4gICAgdGhpcy5idW5ueS5vbkRpZWQuYWRkKHRoaXMubG9zZSwgdGhpcylcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnVubnkpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVHcm91bmRzKCkge1xyXG4gICAgdGhpcy5ncm91bmRzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuR3JvdW5kc0dlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHNcclxuICAgIClcclxuICAgIHRoaXMuY3JlYXRlU3RhcnRHcm91bmQoKVxyXG4gICAgdGhpcy5jcmVhdGVGaXJzdEdyb3VuZHMoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlyc3RHcm91bmRzKCkge1xyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMTAwXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZmlsbDogJyMwMEJDRDQnLFxyXG4gICAgICBmb250OiAnMzFweCBBcmlhbCdcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZ2FtZS53aWR0aCAvIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kczsgaSsrKSB7XHJcbiAgICAgIGxldCBncm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZCh0aGlzLmdhbWUsIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kcyAqIGksIDQwMClcclxuICAgICAgdGhpcy5ncm91bmRzLmFkZChncm91bmQpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxhYmVsID0gdGhpcy5hZGQudGV4dChcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC8gMixcclxuICAgICAgbWFyZ2luVG9wLFxyXG4gICAgICBgQmVzdCAke3RoaXMuX3Njb3JlLmJlc3REaXN0YW5jZX1tLmAsXHJcbiAgICAgIHN0eWxlXHJcbiAgICApXHJcbiAgICBsYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG5cclxuICAgIHRoaXMuYnVubnkuYnJpbmdUb1RvcCgpXHJcbiAgfVxyXG5cclxuICBjb25maWd1cmF0ZUNhbWVyYSgpIHtcclxuICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gMjAwXHJcbiAgICBjb25zdCBzbW9vdGhNb3ZlID0gMC4xNVxyXG4gICAgY29uc3QgZGVhZFpvbmVIZWlnaHQgPSA1MFxyXG5cclxuICAgIHRoaXMuY2FtZXJhLnJvdW5kUHggPSBmYWxzZVxyXG4gICAgdGhpcy5jYW1lcmEuZm9sbG93KHRoaXMuYnVubnksIFBoYXNlci5DYW1lcmEuRk9MTE9XX0xPQ0tPTiwgMSwgc21vb3RoTW92ZSlcclxuICAgIHRoaXMuY2FtZXJhLmRlYWR6b25lID0gbmV3IFBoYXNlci5SZWN0YW5nbGUocGFkZGluZ0xlZnQsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyIC0gdGhpcy5idW5ueS5oZWlnaHQgKiAxLjUsIDEsIGRlYWRab25lSGVpZ2h0KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZHMgPSB0aGlzLmFkZC5ncm91cCgpXHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyMicsIC0wLjA1KSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjMnLCAtMC4xKSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjQnLCAtMC4yNSkpXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuR2FtZSA9IEdhbWVcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
