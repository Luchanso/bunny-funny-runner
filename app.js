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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLmpzIl0sIm5hbWVzIjpbIlNjb3JlIiwiX2Jlc3REaXN0YW5jZSIsIl9jdXJyZW50RGlzdGFuY2UiLCJsb2FkIiwib25VcGRhdGUiLCJQaGFzZXIiLCJTaWduYWwiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJ0b1N0cmluZyIsIk51bWJlciIsInBhcnNlSW50IiwidmFsIiwiZGlzcGF0Y2giLCJzYXZlIiwiTVVMVElQRVJfRElTVEFOQ0UiLCJFbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7O0FBRUEsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsT0FBT0MsTUFBWCxFQUFoQjtBQUNEOzs7OzJCQUVNO0FBQ0xDLGFBQU9DLFlBQVAsQ0FBb0IsY0FBcEIsSUFBc0MsS0FBS1AsYUFBTCxDQUFtQlEsUUFBbkIsRUFBdEM7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS1IsYUFBTCxHQUFxQlMsT0FBT0MsUUFBUCxDQUFnQkosT0FBT0MsWUFBUCxDQUFvQixjQUFwQixDQUFoQixLQUF3RCxDQUE3RTtBQUNEOzs7c0JBRWdCSSxHLEVBQUs7QUFDcEIsV0FBS1gsYUFBTCxHQUFxQlcsR0FBckI7QUFDQSxXQUFLUixRQUFMLENBQWNTLFFBQWQ7QUFDQSxXQUFLQyxJQUFMOztBQUVBLGFBQU8sS0FBS2IsYUFBWjtBQUNELEs7d0JBQ2tCO0FBQUUsYUFBTyxLQUFLQSxhQUFaO0FBQTJCOzs7c0JBRTVCVyxHLEVBQUs7QUFDdkIsV0FBS1YsZ0JBQUwsR0FBd0JVLEdBQXhCO0FBQ0EsV0FBS1IsUUFBTCxDQUFjUyxRQUFkOztBQUVBLGFBQU8sS0FBS1gsZ0JBQVo7QUFDRCxLO3dCQUNxQjtBQUFFLGFBQU8sS0FBS0EsZ0JBQVo7QUFBOEI7Ozs7OztBQUd4REYsTUFBTWUsaUJBQU4sR0FBMEIsR0FBMUI7O0FBRUFDLE9BQU9oQixLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoic2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTY29yZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9iZXN0RGlzdGFuY2UgPSAwXHJcbiAgICB0aGlzLl9jdXJyZW50RGlzdGFuY2UgPSAwXHJcblxyXG4gICAgdGhpcy5sb2FkKClcclxuICAgIHRoaXMub25VcGRhdGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpXHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZVsnYmVzdERpc3RhbmNlJ10gPSB0aGlzLl9iZXN0RGlzdGFuY2UudG9TdHJpbmcoKVxyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHRoaXMuX2Jlc3REaXN0YW5jZSA9IE51bWJlci5wYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlWydiZXN0RGlzdGFuY2UnXSkgfHwgMFxyXG4gIH1cclxuXHJcbiAgc2V0IGJlc3REaXN0YW5jZSh2YWwpIHtcclxuICAgIHRoaXMuX2Jlc3REaXN0YW5jZSA9IHZhbFxyXG4gICAgdGhpcy5vblVwZGF0ZS5kaXNwYXRjaCgpXHJcbiAgICB0aGlzLnNhdmUoKVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9iZXN0RGlzdGFuY2VcclxuICB9XHJcbiAgZ2V0IGJlc3REaXN0YW5jZSgpIHsgcmV0dXJuIHRoaXMuX2Jlc3REaXN0YW5jZSB9XHJcblxyXG4gIHNldCBjdXJyZW50RGlzdGFuY2UodmFsKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50RGlzdGFuY2UgPSB2YWxcclxuICAgIHRoaXMub25VcGRhdGUuZGlzcGF0Y2goKVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50RGlzdGFuY2VcclxuICB9XHJcbiAgZ2V0IGN1cnJlbnREaXN0YW5jZSgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnREaXN0YW5jZSB9XHJcbn1cclxuXHJcblNjb3JlLk1VTFRJUEVSX0RJU1RBTkNFID0gMTUwXHJcblxyXG5FbmdpbmUuU2NvcmUgPSBTY29yZVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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

            this.templates.push([[0, 0, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1]]);

            this.templates.push([[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]]);

            this.templates.push([[0, 1, 0], [1, 0, 1], [0, 1, 0]]);

            this.templates.push([[1]]);
        }
    }, {
        key: "createdNewGround",
        value: function createdNewGround(ground) {
            // if (this.game.rnd.pick([true, true, false])) return

            var margin = 0;
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
                    if (template[i][j] === 1) {
                        this.generate(offsetX + j * (this.prototype.width + padding) - templateWidth / 2, offsetY + i * (this.prototype.height + padding) - templateHeight);
                    }
                }
            }
        }
    }, {
        key: "generate",
        value: function generate(x, y) {
            var types = Object.keys(Engine.Coin.type).map(function (val) {
                return Engine.Coin.type[val];
            });
            var type = this.game.rnd.pick(types);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvY29pbi5qcyJdLCJuYW1lcyI6WyJDb2luR2VuZXJhdG9yIiwiZ2FtZSIsImJ1bm55IiwiZ3JvdW5kcyIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsImFkZCIsImNyZWF0ZWROZXdHcm91bmQiLCJwcm90b3R5cGUiLCJFbmdpbmUiLCJDb2luIiwiY3JlYXRlVGVtcGxhdGVzIiwidGVtcGxhdGVzIiwicHVzaCIsImdyb3VuZCIsIm1hcmdpbiIsInBhZGRpbmciLCJvZmZzZXRYIiwieCIsIndpZHRoIiwib2Zmc2V0WSIsInkiLCJoZWlnaHQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJzbWFsbCIsInJuZCIsInBpY2siLCJ0ZW1wbGF0ZVdpZHRoIiwibGVuZ3RoIiwidGVtcGxhdGVIZWlnaHQiLCJpIiwiaiIsInR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsInR5cGUiLCJtYXAiLCJ2YWwiLCJjb2luIiwiZ2V0Rmlyc3REZWFkIiwicmVzZXQiLCJHZW5lcmF0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7O0FBQ0osMkJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQztBQUFBOztBQUFBLGtJQUMxQkYsSUFEMEIsRUFDcEJDLEtBRG9COztBQUdoQyxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQSxPQUFMLENBQWFDLE9BQWIsQ0FBcUJDLFFBQXJCLENBQThCQyxHQUE5QixDQUFrQyxNQUFLQyxnQkFBdkM7O0FBRUEsY0FBS0MsU0FBTCxHQUFpQixJQUFJQyxPQUFPQyxJQUFYLENBQWdCLE1BQUtULElBQXJCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQWpCOztBQUVBLGNBQUtVLGVBQUw7QUFSZ0M7QUFTakM7Ozs7MENBRWlCO0FBQ2hCLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztBQUVBLGlCQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsQ0FDaEIsQ0FBQyxDQUFELEVBQUks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LElBQXhCLEVBQThCQyxHQUE5QixDQUFrQyxlQUFPO0FBQ3JELHVCQUFPNUIsT0FBT0MsSUFBUCxDQUFZMEIsSUFBWixDQUFpQkUsR0FBakIsQ0FBUDtBQUNELGFBRmEsQ0FBZDtBQUdBLGdCQUFNRixPQUFPLEtBQUtuQyxJQUFMLENBQVV5QixHQUFWLENBQWNDLElBQWQsQ0FBbUJNLEtBQW5CLENBQWI7O0FBRUEsZ0JBQUlNLE9BQU8sS0FBS0MsWUFBTCxFQUFYO0FBQ0EsZ0JBQUlELFFBQVEsSUFBWixFQUFrQjtBQUNoQkEsdUJBQU8sSUFBSTlCLE9BQU9DLElBQVgsQ0FBZ0IsS0FBS1QsSUFBckIsRUFBMkJpQixDQUEzQixFQUE4QkcsQ0FBOUIsRUFBaUNlLElBQWpDLENBQVA7QUFDQSxxQkFBSzlCLEdBQUwsQ0FBU2lDLElBQVQ7QUFDRCxhQUhELE1BR087QUFDTEEscUJBQUtFLEtBQUwsQ0FBV3ZCLENBQVgsRUFBY0csQ0FBZDtBQUNEOztBQUVELG1CQUFPa0IsSUFBUDtBQUNEOzs7O0VBdkZ5QkcsUzs7QUEwRjVCakMsT0FBT2tDLFNBQVAsQ0FBaUIzQyxhQUFqQixHQUFpQ0EsYUFBakMiLCJmaWxlIjoiZ2VuZXJhdG9ycy9jb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29pbkdlbmVyYXRvciBleHRlbmRzIEdlbmVyYXRvciB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgYnVubnksIGdyb3VuZHMpIHtcclxuICAgIHN1cGVyKGdhbWUsIGJ1bm55KVxyXG5cclxuICAgIHRoaXMuZ3JvdW5kcyA9IGdyb3VuZHNcclxuICAgIHRoaXMuZ3JvdW5kcy5zaWduYWxzLmdlbmVyYXRlLmFkZCh0aGlzLmNyZWF0ZWROZXdHcm91bmQsIHRoaXMpXHJcblxyXG4gICAgdGhpcy5wcm90b3R5cGUgPSBuZXcgRW5naW5lLkNvaW4odGhpcy5nYW1lLCAwLCAwKVxyXG5cclxuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRlbXBsYXRlcygpIHtcclxuICAgIHRoaXMudGVtcGxhdGVzID0gW11cclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbMCwgMCwgMSwgMSwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDEsIDEsIDEsIDFdXHJcbiAgICBdKVxyXG5cclxuICAgIHRoaXMudGVtcGxhdGVzLnB1c2goW1xyXG4gICAgICAgIFsxLCAxLCAxXSxcclxuICAgICAgICBbMSwgMCwgMV0sXHJcbiAgICAgICAgWzEsIDAsIDFdLFxyXG4gICAgICAgIFsxLCAxLCAxXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDAsIDFdLFxyXG4gICAgICAgIFswLCAxLCAwXVxyXG4gICAgXSlcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlcy5wdXNoKFtcclxuICAgICAgICBbMV1cclxuICAgIF0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVkTmV3R3JvdW5kKGdyb3VuZCkge1xyXG4gICAgLy8gaWYgKHRoaXMuZ2FtZS5ybmQucGljayhbdHJ1ZSwgdHJ1ZSwgZmFsc2VdKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0gMFxyXG4gICAgY29uc3QgcGFkZGluZyA9IDFcclxuXHJcbiAgICBsZXQgb2Zmc2V0WCA9IGdyb3VuZC54ICsgZ3JvdW5kLndpZHRoIC8gMiArIHRoaXMucHJvdG90eXBlLndpZHRoIC8gMlxyXG4gICAgbGV0IG9mZnNldFkgPSBncm91bmQueSArIG1hcmdpbiArICsgdGhpcy5wcm90b3R5cGUuaGVpZ2h0IC8gMlxyXG5cclxuICAgIGxldCB0ZW1wbGF0ZVxyXG4gICAgaWYgKGdyb3VuZC5kYXRhLnNtYWxsKSB7XHJcbiAgICAgIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNbdGhpcy5nYW1lLnJuZC5waWNrKFsxLCAyLCAzXSldXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2FtZS5ybmQucGljayh0aGlzLnRlbXBsYXRlcylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGVtcGxhdGVXaWR0aCA9IHRlbXBsYXRlWzBdLmxlbmd0aCAqIHRoaXMucHJvdG90eXBlLndpZHRoXHJcbiAgICBsZXQgdGVtcGxhdGVIZWlnaHQgPSB0ZW1wbGF0ZS5sZW5ndGggKiB0aGlzLnByb3RvdHlwZS5oZWlnaHRcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHRlbXBsYXRlKSB7XHJcbiAgICAgIGZvciAobGV0IGogaW4gdGVtcGxhdGVbaV0pIHtcclxuICAgICAgICBpZiAodGVtcGxhdGVbaV1bal0gPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgIG9mZnNldFggKyBqICogKHRoaXMucHJvdG90eXBlLndpZHRoICsgcGFkZGluZykgLSB0ZW1wbGF0ZVdpZHRoIC8gMixcclxuICAgICAgICAgICAgb2Zmc2V0WSArIGkgKiAodGhpcy5wcm90b3R5cGUuaGVpZ2h0ICsgcGFkZGluZykgLSB0ZW1wbGF0ZUhlaWdodFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGUoeCwgeSkge1xyXG4gICAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhFbmdpbmUuQ29pbi50eXBlKS5tYXAodmFsID0+IHtcclxuICAgICAgcmV0dXJuIEVuZ2luZS5Db2luLnR5cGVbdmFsXVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdhbWUucm5kLnBpY2sodHlwZXMpXHJcblxyXG4gICAgbGV0IGNvaW4gPSB0aGlzLmdldEZpcnN0RGVhZCgpXHJcbiAgICBpZiAoY29pbiA9PSBudWxsKSB7XHJcbiAgICAgIGNvaW4gPSBuZXcgRW5naW5lLkNvaW4odGhpcy5nYW1lLCB4LCB5LCB0eXBlKVxyXG4gICAgICB0aGlzLmFkZChjb2luKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29pbi5yZXNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2luXHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuQ29tcG9uZW50LkNvaW5HZW5lcmF0b3IgPSBDb2luR2VuZXJhdG9yXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
      var RND_HORIZONTAL = 125;
      var RND_VERTICAL = 65;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMvZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIkdyb3VuZHNHZW5lcmF0b3IiLCJnYW1lIiwiYnVubnkiLCJkaXN0YW5jZSIsInNpZ25hbHMiLCJnZW5lcmF0ZSIsIlBoYXNlciIsIlNpZ25hbCIsImN1cnJlbnRTdGVwIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsIngiLCJtYXJnaW4iLCJ3aWR0aCIsIlNQTElUX1ZFUlRJQ0FMIiwiU1RBUlRfUE9JTlQiLCJ3b3JsZCIsImJvdW5kcyIsImhlaWdodCIsIkdSSURfSEVJR0hUIiwiUk5EX0hPUklaT05UQUwiLCJSTkRfVkVSVElDQUwiLCJpIiwicm5kIiwicGljayIsImJldHdlZW4iLCJ5IiwiZ3JvdW5kIiwiYWRkUmFuZG9tR3JvdW5kIiwiZGlzcGF0Y2giLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJFbmdpbmUiLCJHcm91bmQiLCJ0eXBlIiwibWFwIiwidmFsIiwic21hbGwiLCJicm9rZW4iLCJnZXRGaXJzdERlYWQiLCJhZGQiLCJyZXNldCIsIkNvbXBvbmVudCIsIkdlbmVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLGdCOzs7QUFDSjs7Ozs7O0FBTUEsNEJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQztBQUFBOztBQUFBLG9JQUMzQkYsSUFEMkIsRUFDckJDLEtBRHFCOztBQUdqQyxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZTtBQUNiQyxnQkFBVSxJQUFJQyxPQUFPQyxNQUFYO0FBREcsS0FBZjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQVBpQztBQVFsQzs7Ozs2QkFFUTtBQUNQOztBQUVBLFVBQUlDLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLVCxLQUFMLENBQVdVLENBQVgsR0FBZSxLQUFLVCxRQUEvQixDQUFYO0FBQ0EsVUFBSVUsU0FBVSxLQUFLWixJQUFMLENBQVVhLEtBQXhCOztBQUVBLFVBQUlMLFNBQVMsS0FBS0QsV0FBbEIsRUFBK0I7QUFDN0IsYUFBS0EsV0FBTCxHQUFtQkMsSUFBbkI7QUFDQSxhQUFLSixRQUFMLENBQWNRLE1BQWQ7QUFDRDtBQUNGOzs7NkJBRVFBLE0sRUFBUTtBQUNmOztBQUVBLFVBQU1FLGlCQUFpQixDQUF2QjtBQUNBLFVBQU1DLGNBQWMsRUFBRSxLQUFLZixJQUFMLENBQVVnQixLQUFWLENBQWdCQyxNQUFoQixDQUF1QkMsTUFBdkIsR0FBZ0MsS0FBS2xCLElBQUwsQ0FBVWtCLE1BQTVDLENBQXBCO0FBQ0EsVUFBTUMsY0FBYyxLQUFLbkIsSUFBTCxDQUFVZ0IsS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDSixjQUFwRDtBQUNBLFVBQU1NLGlCQUFpQixHQUF2QjtBQUNBLFVBQU1DLGVBQWUsRUFBckI7O0FBRUEsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLGNBQXBCLEVBQW9DUSxHQUFwQyxFQUF5QztBQUN2QyxZQUFJLEtBQUt0QixJQUFMLENBQVV1QixHQUFWLENBQWNDLElBQWQsRUFBbUIsTUFBTSxLQUF6QixFQUFKLEVBQXFDOztBQUVyQyxZQUFNYixJQUFJLEtBQUtWLEtBQUwsQ0FBV1UsQ0FBWCxHQUFlQyxNQUFmLEdBQXdCLEtBQUtaLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0UsT0FBZCxDQUFzQixDQUFDTCxjQUF2QixFQUF1Q0EsY0FBdkMsQ0FBbEM7QUFDQSxZQUFNTSxJQUFJWCxjQUFjSSxjQUFjRyxDQUE1QixHQUFnQyxLQUFLdEIsSUFBTCxDQUFVdUIsR0FBVixDQUFjRSxPQUFkLENBQXNCLENBQUNKLFlBQXZCLEVBQXFDQSxZQUFyQyxDQUExQzs7QUFFQSxZQUFJTSxTQUFTLEtBQUtDLGVBQUwsQ0FBcUJqQixDQUFyQixFQUF3QmUsQ0FBeEIsQ0FBYjs7QUFFQSxhQUFLdkIsT0FBTCxDQUFhQyxRQUFiLENBQXNCeUIsUUFBdEIsQ0FBK0JGLE1BQS9CO0FBQ0Q7QUFDRjs7O29DQUVlaEIsQyxFQUFHZSxDLEVBQUc7QUFDcEIsVUFBTUksUUFBUUMsT0FBT0MsSUFBUCxDQUFZQyxPQUFPQyxNQUFQLENBQWNDLElBQTFCLEVBQWdDQyxHQUFoQyxDQUFvQyxlQUFPO0FBQ3ZELGVBQU9ILE9BQU9DLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkUsR0FBbkIsQ0FBUDtBQUNELE9BRmEsQ0FBZDtBQUdBLFVBQU1GLE9BQU8sS0FBS25DLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQk0sS0FBbkIsQ0FBYjtBQUNBLFVBQU1RLFFBQVEsS0FBS3RDLElBQUwsQ0FBVXVCLEdBQVYsQ0FBY0MsSUFBZCxDQUFtQixDQUFDLElBQUQsRUFBTyxLQUFQLENBQW5CLENBQWQ7QUFDQSxVQUFNZSxTQUFTLEtBQUt2QyxJQUFMLENBQVV1QixHQUFWLENBQWNDLElBQWQsQ0FBbUIsQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUFuQixDQUFmOztBQUVBLFVBQUlHLFNBQVMsS0FBS2EsWUFBTCxFQUFiO0FBQ0EsVUFBSWIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCQSxpQkFBUyxJQUFJTSxPQUFPQyxNQUFYLENBQ1AsS0FBS2xDLElBREUsRUFFUFcsQ0FGTyxFQUdQZSxDQUhPLEVBSVBTLElBSk8sRUFLUEcsS0FMTyxFQU1QQyxNQU5PLENBQVQ7QUFRQSxhQUFLRSxHQUFMLENBQVNkLE1BQVQ7QUFDRCxPQVZELE1BVU87QUFDTEEsZUFBT2UsS0FBUCxDQUFhL0IsQ0FBYixFQUFnQmUsQ0FBaEIsRUFBbUJTLElBQW5CLEVBQXlCRyxLQUF6QixFQUFnQ0MsTUFBaEM7QUFDRDs7QUFFRCxhQUFPWixNQUFQO0FBQ0Q7Ozs7RUExRTRCTSxPQUFPVSxTQUFQLENBQWlCQyxTOztBQTZFaERYLE9BQU9VLFNBQVAsQ0FBaUI1QyxnQkFBakIsR0FBb0NBLGdCQUFwQyIsImZpbGUiOiJnZW5lcmF0b3JzL2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdyb3VuZHNHZW5lcmF0b3IgZXh0ZW5kcyBFbmdpbmUuQ29tcG9uZW50LkdlbmVyYXRvciB7XHJcbiAgLyoqXHJcbiAgICogR3JvdW5kcyBnZW5lcmF0b3JcclxuICAgKiBAcGFyYW0gIHtQaGFzZXIuR2FtZX0gZ2FtZVxyXG4gICAqIEBwYXJhbSAge0VuZ2luZS5CdW5ueX0gYnVubnkgT2JqZWN0IG9mIGJ1bm55XHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkaXN0YW5jZSBEaXN0YW5jZSBiZXR3ZWVuIGdyb3VuZHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihnYW1lLCBidW5ueSwgZGlzdGFuY2UpIHtcclxuICAgIHN1cGVyKGdhbWUsIGJ1bm55KVxyXG5cclxuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZVxyXG4gICAgdGhpcy5zaWduYWxzID0ge1xyXG4gICAgICBnZW5lcmF0ZTogbmV3IFBoYXNlci5TaWduYWwoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IC0xXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKVxyXG5cclxuICAgIGxldCBzdGVwID0gTWF0aC5mbG9vcih0aGlzLmJ1bm55LnggLyB0aGlzLmRpc3RhbmNlKVxyXG4gICAgbGV0IG1hcmdpbiA9ICh0aGlzLmdhbWUud2lkdGgpXHJcblxyXG4gICAgaWYgKHN0ZXAgIT09IHRoaXMuY3VycmVudFN0ZXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXBcclxuICAgICAgdGhpcy5nZW5lcmF0ZShtYXJnaW4pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZShtYXJnaW4pIHtcclxuICAgIHN1cGVyLmdlbmVyYXRlKClcclxuXHJcbiAgICBjb25zdCBTUExJVF9WRVJUSUNBTCA9IDZcclxuICAgIGNvbnN0IFNUQVJUX1BPSU5UID0gLSh0aGlzLmdhbWUud29ybGQuYm91bmRzLmhlaWdodCAtIHRoaXMuZ2FtZS5oZWlnaHQpXHJcbiAgICBjb25zdCBHUklEX0hFSUdIVCA9IHRoaXMuZ2FtZS53b3JsZC5ib3VuZHMuaGVpZ2h0IC8gU1BMSVRfVkVSVElDQUxcclxuICAgIGNvbnN0IFJORF9IT1JJWk9OVEFMID0gMTI1XHJcbiAgICBjb25zdCBSTkRfVkVSVElDQUwgPSA2NVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgU1BMSVRfVkVSVElDQUw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5nYW1lLnJuZC5waWNrW3RydWUsIGZhbHNlXSkgY29udGludWVcclxuXHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmJ1bm55LnggKyBtYXJnaW4gKyB0aGlzLmdhbWUucm5kLmJldHdlZW4oLVJORF9IT1JJWk9OVEFMLCBSTkRfSE9SSVpPTlRBTClcclxuICAgICAgY29uc3QgeSA9IFNUQVJUX1BPSU5UICsgR1JJRF9IRUlHSFQgKiBpICsgdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKC1STkRfVkVSVElDQUwsIFJORF9WRVJUSUNBTClcclxuXHJcbiAgICAgIGxldCBncm91bmQgPSB0aGlzLmFkZFJhbmRvbUdyb3VuZCh4LCB5KVxyXG5cclxuICAgICAgdGhpcy5zaWduYWxzLmdlbmVyYXRlLmRpc3BhdGNoKGdyb3VuZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFJhbmRvbUdyb3VuZCh4LCB5KSB7XHJcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKEVuZ2luZS5Hcm91bmQudHlwZSkubWFwKHZhbCA9PiB7XHJcbiAgICAgIHJldHVybiBFbmdpbmUuR3JvdW5kLnR5cGVbdmFsXVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdhbWUucm5kLnBpY2sodHlwZXMpXHJcbiAgICBjb25zdCBzbWFsbCA9IHRoaXMuZ2FtZS5ybmQucGljayhbdHJ1ZSwgZmFsc2VdKVxyXG4gICAgY29uc3QgYnJva2VuID0gdGhpcy5nYW1lLnJuZC5waWNrKFt0cnVlLCBmYWxzZV0pXHJcblxyXG4gICAgbGV0IGdyb3VuZCA9IHRoaXMuZ2V0Rmlyc3REZWFkKClcclxuICAgIGlmIChncm91bmQgPT0gbnVsbCkge1xyXG4gICAgICBncm91bmQgPSBuZXcgRW5naW5lLkdyb3VuZChcclxuICAgICAgICB0aGlzLmdhbWUsXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgc21hbGwsXHJcbiAgICAgICAgYnJva2VuLFxyXG4gICAgICApXHJcbiAgICAgIHRoaXMuYWRkKGdyb3VuZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyb3VuZC5yZXNldCh4LCB5LCB0eXBlLCBzbWFsbCwgYnJva2VuKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91bmRcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Db21wb25lbnQuR3JvdW5kc0dlbmVyYXRvciA9IEdyb3VuZHNHZW5lcmF0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
      if (!this.data.isStoped) this.tilePosition.x += this.data.speed;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.data.isStoped = true;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.data.isStoped = false;
    }
  }]);

  return Background;
}(Phaser.TileSprite);

Engine.Background = Background;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImdhbWUiLCJ4IiwieSIsIm5hbWUiLCJzcGVlZCIsInRpbGVTY2FsZSIsInNldFRvIiwiaGVpZ2h0IiwiZml4ZWRUb0NhbWVyYSIsIndpZHRoIiwiZGF0YSIsImlzU3RvcGVkIiwidGlsZVBvc2l0aW9uIiwiUGhhc2VyIiwiVGlsZVNwcml0ZSIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxJQUF4QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFBQSx3SEFDN0JKLElBRDZCLEVBQ3ZCQyxDQUR1QixFQUNwQkMsQ0FEb0IsRUFDakIsSUFEaUIsRUFDWCxJQURXLEVBQ0xDLElBREs7O0FBR25DLFVBQUtFLFNBQUwsQ0FBZUMsS0FBZixDQUFxQixNQUFLTixJQUFMLENBQVVPLE1BQVYsR0FBbUIsTUFBS0EsTUFBN0M7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtULElBQUwsQ0FBVVMsS0FBdkI7O0FBRUEsVUFBS0MsSUFBTCxDQUFVTixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLFVBQUtNLElBQUwsQ0FBVUMsUUFBVixHQUFxQixJQUFyQjtBQVJtQztBQVNwQzs7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQyxLQUFLRCxJQUFMLENBQVVDLFFBQWYsRUFDRSxLQUFLQyxZQUFMLENBQWtCWCxDQUFsQixJQUF1QixLQUFLUyxJQUFMLENBQVVOLEtBQWpDO0FBQ0g7OzsyQkFFTTtBQUNMLFdBQUtNLElBQUwsQ0FBVUMsUUFBVixHQUFxQixJQUFyQjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLRCxJQUFMLENBQVVDLFFBQVYsR0FBcUIsS0FBckI7QUFDRDs7OztFQXZCc0JFLE9BQU9DLFU7O0FBMEJoQ0MsT0FBT2hCLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgUGhhc2VyLlRpbGVTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIG5hbWUsIHNwZWVkKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAxMDI0LCAxMDI0LCBuYW1lKVxyXG5cclxuICAgIHRoaXMudGlsZVNjYWxlLnNldFRvKHRoaXMuZ2FtZS5oZWlnaHQgLyB0aGlzLmhlaWdodClcclxuICAgIHRoaXMuZml4ZWRUb0NhbWVyYSA9IHRydWVcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLmdhbWUud2lkdGhcclxuXHJcbiAgICB0aGlzLmRhdGEuc3BlZWQgPSBzcGVlZFxyXG4gICAgdGhpcy5kYXRhLmlzU3RvcGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEuaXNTdG9wZWQpXHJcbiAgICAgIHRoaXMudGlsZVBvc2l0aW9uLnggKz0gdGhpcy5kYXRhLnNwZWVkXHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5kYXRhLmlzU3RvcGVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kYXRhLmlzU3RvcGVkID0gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5CYWNrZ3JvdW5kID0gQmFja2dyb3VuZFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
      var marginTop = 25;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3QtZGlzdGFuY2UuanMiXSwibmFtZXMiOlsiQmVzdERpc3RhbmNlIiwiZ2FtZSIsInNjb3JlIiwiRW5naW5lIiwiU2VydmljZSIsImdldCIsIngiLCJiZXN0RGlzdGFuY2UiLCJTY29yZSIsIk1VTFRJUEVSX0RJU1RBTkNFIiwiY3JlYXRlTGFiZWwiLCJjcmVhdGVTdHJpcGUiLCJzdHlsZSIsImZpbGwiLCJmb250IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImxhYmVsIiwiYWRkIiwidGV4dCIsInVwZGF0ZSIsInkiLCJjYW1lcmEiLCJzdHJpcGUiLCJCZXN0RGlzdGFuY2VTdHJpcGUiLCJleGlzdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLFk7QUFDSix3QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQyxLQUFMLEdBQWFDLE9BQU9DLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixPQUFuQixDQUFiOztBQUVBLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtLLENBQUwsR0FBUyxLQUFLSixLQUFMLENBQVdLLFlBQVgsR0FBMEJKLE9BQU9LLEtBQVAsQ0FBYUMsaUJBQWhEOztBQUVBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0Q7Ozs7a0NBRWE7QUFBQTs7QUFDWixVQUFNQyxRQUFRO0FBQ1pDLGNBQU0sT0FETTtBQUVaQyxjQUFNO0FBRk0sT0FBZDtBQUlBLFVBQU1DLGFBQWEsRUFBbkI7QUFDQSxVQUFNQyxZQUFZLEVBQWxCOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxLQUFLaEIsSUFBTCxDQUFVaUIsR0FBVixDQUFjQyxJQUFkLENBQW1CLEtBQUtiLENBQUwsR0FBU1MsVUFBNUIsRUFBd0MsQ0FBeEMsWUFBbUQsS0FBS2IsS0FBTCxDQUFXSyxZQUE5RCxVQUFpRkssS0FBakYsQ0FBYjtBQUNBLFdBQUtLLEtBQUwsQ0FBV0csTUFBWCxHQUFvQixZQUFNO0FBQ3hCLGNBQUtILEtBQUwsQ0FBV0ksQ0FBWCxHQUFlLE1BQUtwQixJQUFMLENBQVVxQixNQUFWLENBQWlCRCxDQUFqQixHQUFxQkwsU0FBcEM7QUFDRCxPQUZEO0FBR0Q7OzttQ0FFYztBQUNiLFdBQUtPLE1BQUwsR0FBYyxJQUFJcEIsT0FBT3FCLGtCQUFYLENBQThCLEtBQUt2QixJQUFuQyxFQUF5QyxLQUFLSyxDQUE5QyxDQUFkO0FBQ0EsV0FBS0wsSUFBTCxDQUFVaUIsR0FBVixDQUFjTyxRQUFkLENBQXVCLEtBQUtGLE1BQTVCO0FBQ0Q7Ozs7OztBQUdIcEIsT0FBT0gsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoiYmVzdC1kaXN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJlc3REaXN0YW5jZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG5cclxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcclxuICAgIHRoaXMueCA9IHRoaXMuc2NvcmUuYmVzdERpc3RhbmNlICogRW5naW5lLlNjb3JlLk1VTFRJUEVSX0RJU1RBTkNFXHJcblxyXG4gICAgdGhpcy5jcmVhdGVMYWJlbCgpXHJcbiAgICB0aGlzLmNyZWF0ZVN0cmlwZSgpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbCgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICBmb250OiAnMjZweCBBcmlhbCdcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAxMFxyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gMjVcclxuXHJcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMueCArIG1hcmdpbkxlZnQsIDAsIGBCZXN0ICR7dGhpcy5zY29yZS5iZXN0RGlzdGFuY2V9IG0uYCwgc3R5bGUpXHJcbiAgICB0aGlzLmxhYmVsLnVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5sYWJlbC55ID0gdGhpcy5nYW1lLmNhbWVyYS55ICsgbWFyZ2luVG9wXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTdHJpcGUoKSB7XHJcbiAgICB0aGlzLnN0cmlwZSA9IG5ldyBFbmdpbmUuQmVzdERpc3RhbmNlU3RyaXBlKHRoaXMuZ2FtZSwgdGhpcy54KVxyXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLnN0cmlwZSlcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5CZXN0RGlzdGFuY2UgPSBCZXN0RGlzdGFuY2VcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bm55LmpzIl0sIm5hbWVzIjpbIkJ1bm55IiwiZ2FtZSIsIngiLCJ5IiwibmFtZSIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiZGF0YSIsImlzRGVhZCIsInJ1bm5pbmciLCJjb3VudEp1bXAiLCJNQVhfSlVNUFMiLCJwaHlzaWNzIiwiYXJjYWRlIiwiZW5hYmxlIiwid2lkdGgiLCJoZWlnaHQiLCJib2R5IiwiZ3Jhdml0eSIsInNldFRvIiwibWF4VmVsb2NpdHkiLCJjb2xsaWRlV29ybGRCb3VuZHMiLCJjcmVhdGVBbmltYXRpb24iLCJhbmltYXRpb25zIiwicGxheSIsInBhcnRpY2xzZSIsInRyYWlsIiwiVHJhaWwiLCJhZGQiLCJleGlzdGluZyIsImluQWlyIiwic3RhcnRFbWl0dCIsInN0b3BFbWl0dCIsImJ1bm55IiwidG91Y2hpbmciLCJkb3duIiwiYW5pbWF0aW9uRG93blRpbWUiLCJhbmltYXRpb25VcFRpbWUiLCJ1cE1vdmUiLCJ2ZWxvY2l0eSIsImFjY2VsZXJhdGlvbiIsInR3ZWVuIiwidG8iLCJQaGFzZXIiLCJFYXNpbmciLCJRdWFkcmF0aWMiLCJJbiIsInN0YXJ0IiwiQkFTRV9NQVhfU1BFRUQiLCJBQ0NFTEVSQVRJT04iLCJqdW1wSW1wdWxzZSIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUFBOztBQUFBLDhHQUN0QkgsSUFEc0IsRUFDaEJDLENBRGdCLEVBQ2JDLENBRGEsRUFDVkUsT0FBT0MsV0FERyxFQUNVRixPQUFPLFlBRGpCOztBQUc1QixVQUFLRyxJQUFMLENBQVVILElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsVUFBS0csSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0EsVUFBS0QsSUFBTCxDQUFVRSxPQUFWLEdBQW9CLEtBQXBCO0FBQ0EsVUFBS0YsSUFBTCxDQUFVRyxT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TyxJQUFMLENBQVVzQixRQUFWLENBQW1CcEMsQ0FBbkIsR0FBdUIsQ0FBQytDLFdBQXhCO0FBQ0EsV0FBSzNDLElBQUwsQ0FBVUcsU0FBVjtBQUNIOzs7O0VBNUZpQmlDLE9BQU9RLE07O0FBK0YzQm5ELE1BQU1XLFNBQU4sR0FBa0IsQ0FBbEI7QUFDQVgsTUFBTWlELFlBQU4sR0FBcUIsSUFBckI7QUFDQWpELE1BQU1nRCxjQUFOLEdBQXVCLEdBQXZCOztBQUVBM0MsT0FBT0wsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImJ1bm55LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQnVubnkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBuYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBFbmdpbmUuc3ByaXRlc2hlZXQsIG5hbWUgKyAnX3N0YW5kLnBuZycpXHJcblxyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmRhdGEuaXNEZWFkID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5ydW5uaW5nID0gZmFsc2VcclxuICAgIHRoaXMuZGF0YS5jb3VudEp1bXAgPSBCdW5ueS5NQVhfSlVNUFNcclxuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKFsgdGhpcyBdKVxyXG5cclxuICAgIHRoaXMud2lkdGggKj0gMC4zNVxyXG4gICAgdGhpcy5oZWlnaHQgKj0gMC4zNVxyXG5cclxuICAgIHRoaXMuYm9keS5ncmF2aXR5LnNldFRvKDAsIDI1MDApXHJcbiAgICB0aGlzLmJvZHkubWF4VmVsb2NpdHkuc2V0VG8oNDAwLCAyMDAwKVxyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWVcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICB9XHJcblxyXG4gIGFkZFRyYWlsKCkge1xyXG4gICAgY29uc3QgcGFydGljbHNlID0gMjUwXHJcbiAgICB0aGlzLmRhdGEudHJhaWwgPSBuZXcgRW5naW5lLlRyYWlsKHRoaXMuZ2FtZSwgcGFydGljbHNlLCB0aGlzKVxyXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmRhdGEudHJhaWwpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmlzRGVhZCkgcmV0dXJuXHJcblxyXG4gICAgaWYgKHRoaXMuaW5BaXIoKSkge1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RhcnRFbWl0dCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdqdW1wJylcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnJ1bm5pbmcpe1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RhcnRFbWl0dCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG4gICAgICB0aGlzLmRhdGEuY291bnRKdW1wID0gQnVubnkuTUFYX0pVTVBTXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEudHJhaWwuc3RvcEVtaXR0KClcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluQWlyKCkge1xyXG4gICAgcmV0dXJuICFidW5ueS5ib2R5LnRvdWNoaW5nLmRvd25cclxuICB9XHJcblxyXG4gIGRpZSgpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbkRvd25UaW1lID0gMTAwMFxyXG4gICAgY29uc3QgYW5pbWF0aW9uVXBUaW1lID0gNDAwXHJcbiAgICBjb25zdCB1cE1vdmUgPSAxMDBcclxuXHJcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkuc2V0VG8oMClcclxuICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24uc2V0VG8oMClcclxuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSBmYWxzZVxyXG4gICAgdGhpcy5kYXRhLmlzRGVhZCA9IHRydWVcclxuICAgIHRoaXMuZGF0YS50cmFpbC5zdG9wRW1pdHQoKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2h1cnQnKVxyXG5cclxuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcylcclxuICAgICAgLnRvKHtcclxuICAgICAgICB5OiB0aGlzLnkgLSB1cE1vdmVcclxuICAgICAgfSwgYW5pbWF0aW9uRG93blRpbWUpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgeTogdGhpcy5nYW1lLmhlaWdodCArIHRoaXMuaGVpZ2h0XHJcbiAgICAgIH0sIGFuaW1hdGlvblVwVGltZSwgUGhhc2VyLkVhc2luZy5RdWFkcmF0aWMuSW4pXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB0aGlzLmRhdGEucnVubmluZyA9IHRydWVcclxuICAgIHRoaXMuYm9keS52ZWxvY2l0eS5zZXRUbyhCdW5ueS5CQVNFX01BWF9TUEVFRCwgMClcclxuICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24uc2V0VG8oQnVubnkuQUNDRUxFUkFUSU9OLCAwKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnanVtcCcsIFt0aGlzLmRhdGEubmFtZSArICdfanVtcC5wbmcnXSwgMSwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3J1bicsIFt0aGlzLmRhdGEubmFtZSArICdfd2FsazEucG5nJywgdGhpcy5kYXRhLm5hbWUgKyAnX3dhbGsyLnBuZyddLCAxMCwgdHJ1ZSlcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2h1cnQnLCBbdGhpcy5kYXRhLm5hbWUgKyAnX2h1cnQucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdyZWFkeScsIFt0aGlzLmRhdGEubmFtZSArICdfcmVhZHkucG5nJ10sIDEsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFt0aGlzLmRhdGEubmFtZSArICdfc3RhbmQucG5nJ10sIDEsIHRydWUpXHJcbiAgfVxyXG5cclxuICBqdW1wKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5pc0RlYWQpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGp1bXBJbXB1bHNlID0gOTAwXHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5jb3VudEp1bXAgPiAwKVxyXG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IC1qdW1wSW1wdWxzZVxyXG4gICAgICB0aGlzLmRhdGEuY291bnRKdW1wLS1cclxuICB9XHJcbn1cclxuXHJcbkJ1bm55Lk1BWF9KVU1QUyA9IDJcclxuQnVubnkuQUNDRUxFUkFUSU9OID0gMjAwMFxyXG5CdW5ueS5CQVNFX01BWF9TUEVFRCA9IDUwMFxyXG5cclxuRW5naW5lLkJ1bm55ID0gQnVubnlcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

        _this.width *= 0.35;
        _this.height *= 0.35;
        _this.anchor.setTo(0.5);

        _this.game.physics.enable([_this]);
        // this.body.immovable = true
        _this.body.gravity.setTo(_this.game.rnd.between(-100, 100), _this.game.rnd.between(-100, 100));

        _this.data.type = type;

        _this.createAnimation();
        return _this;
    }

    _createClass(Coin, [{
        key: 'createAnimation',
        value: function createAnimation() {
            var countCoinsFrame = 5;

            var animationFrames = [];

            for (var i = 1; i < countCoinsFrame; i++) {
                animationFrames.push(this.data.type + '_' + i + '.png');
            }

            this.animations.add('rotate', animationFrames, 5, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4uanMiXSwibmFtZXMiOlsiQ29pbiIsImdhbWUiLCJ4IiwieSIsInR5cGUiLCJHT0xEIiwiRW5naW5lIiwic3ByaXRlc2hlZXQiLCJ3aWR0aCIsImhlaWdodCIsImFuY2hvciIsInNldFRvIiwicGh5c2ljcyIsImVuYWJsZSIsImJvZHkiLCJncmF2aXR5Iiwicm5kIiwiYmV0d2VlbiIsImRhdGEiLCJjcmVhdGVBbmltYXRpb24iLCJjb3VudENvaW5zRnJhbWUiLCJhbmltYXRpb25GcmFtZXMiLCJpIiwicHVzaCIsImFuaW1hdGlvbnMiLCJhZGQiLCJwbGF5IiwiZnJhbWUiLCJQaGFzZXIiLCJTcHJpdGUiLCJTSUxWRVIiLCJCUk9OWkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQStDO0FBQUEsWUFBdkJDLElBQXVCLHVFQUFoQkosS0FBS0ksSUFBTCxDQUFVQyxJQUFNOztBQUFBOztBQUFBLGdIQUN2Q0osSUFEdUMsRUFDakNDLENBRGlDLEVBQzlCQyxDQUQ4QixFQUMzQkcsT0FBT0MsV0FEb0IsRUFDUEgsT0FBTyxRQURBOztBQUc3QyxjQUFLSSxLQUFMLElBQWMsSUFBZDtBQUNBLGNBQUtDLE1BQUwsSUFBZSxJQUFmO0FBQ0EsY0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCLEdBQWxCOztBQUVBLGNBQUtWLElBQUwsQ0FBVVcsT0FBVixDQUFrQkMsTUFBbEIsQ0FBeUIsT0FBekI7QUFDQTtBQUNBLGNBQUtDLElBQUwsQ0FBVUMsT0FBVixDQUFrQkosS0FBbEIsQ0FBd0IsTUFBS1YsSUFBTCxDQUFVZSxHQUFWLENBQWNDLE9BQWQsQ0FBc0IsQ0FBQyxHQUF2QixFQUE0QixHQUE1QixDQUF4QixFQUEwRCxNQUFLaEIsSUFBTCxDQUFVZSxHQUFWLENBQWNDLE9BQWQsQ0FBc0IsQ0FBQyxHQUF2QixFQUE0QixHQUE1QixDQUExRDs7QUFFQSxjQUFLQyxJQUFMLENBQVVkLElBQVYsR0FBaUJBLElBQWpCOztBQUVBLGNBQUtlLGVBQUw7QUFiNkM7QUFjOUM7Ozs7MENBRWlCO0FBQ2hCLGdCQUFNQyxrQkFBa0IsQ0FBeEI7O0FBRUEsZ0JBQUlDLGtCQUFrQixFQUF0Qjs7QUFFQSxpQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGVBQXBCLEVBQXFDRSxHQUFyQyxFQUEwQztBQUN4Q0QsZ0NBQWdCRSxJQUFoQixDQUF3QixLQUFLTCxJQUFMLENBQVVkLElBQWxDLFNBQTBDa0IsQ0FBMUM7QUFDRDs7QUFFRCxpQkFBS0UsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEIsRUFBOEJKLGVBQTlCLEVBQStDLENBQS9DLEVBQWtELElBQWxEO0FBQ0EsaUJBQUtHLFVBQUwsQ0FBZ0JFLElBQWhCLENBQXFCLFFBQXJCO0FBQ0Q7Ozs4QkFFS3hCLEMsRUFBR0MsQyxFQUFHQyxJLEVBQU07QUFDaEIsOEdBQVlGLENBQVosRUFBZUMsQ0FBZjs7QUFFQSxpQkFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsaUJBQUt1QixLQUFMLEdBQWF2QixPQUFPLFFBQXBCO0FBQ0E7O0FBRUEsaUJBQUtlLGVBQUw7QUFDRDs7OztFQXRDZ0JTLE9BQU9DLE07O0FBeUMxQjdCLEtBQUtJLElBQUwsR0FBWTtBQUNWQyxVQUFNLE1BREk7QUFFVnlCLFlBQVEsUUFGRTtBQUdWQyxZQUFRO0FBSEUsQ0FBWjs7QUFNQXpCLE9BQU9OLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJjb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29pbiBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHR5cGUgPSBDb2luLnR5cGUuR09MRCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgRW5naW5lLnNwcml0ZXNoZWV0LCB0eXBlICsgJ18xLnBuZycpXHJcblxyXG4gICAgdGhpcy53aWR0aCAqPSAwLjM1XHJcbiAgICB0aGlzLmhlaWdodCAqPSAwLjM1XHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpXHJcblxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKFt0aGlzXSlcclxuICAgIC8vIHRoaXMuYm9keS5pbW1vdmFibGUgPSB0cnVlXHJcbiAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXRUbyh0aGlzLmdhbWUucm5kLmJldHdlZW4oLTEwMCwgMTAwKSwgdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKC0xMDAsIDEwMCkpXHJcblxyXG4gICAgdGhpcy5kYXRhLnR5cGUgPSB0eXBlXHJcblxyXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgY291bnRDb2luc0ZyYW1lID0gNVxyXG5cclxuICAgIGxldCBhbmltYXRpb25GcmFtZXMgPSBbXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY291bnRDb2luc0ZyYW1lOyBpKyspIHtcclxuICAgICAgYW5pbWF0aW9uRnJhbWVzLnB1c2goYCR7dGhpcy5kYXRhLnR5cGV9XyR7aX0ucG5nYClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdyb3RhdGUnLCBhbmltYXRpb25GcmFtZXMsIDUsIHRydWUpXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgncm90YXRlJylcclxuICB9XHJcblxyXG4gIHJlc2V0KHgsIHksIHR5cGUpIHtcclxuICAgIHN1cGVyLnJlc2V0KHgsIHkpXHJcblxyXG4gICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgdGhpcy5mcmFtZSA9IHR5cGUgKyAnXzEucG5nJ1xyXG4gICAgLy8gdGhpcy5hbmltYXRpb25zLmN1cnJlbnRBbmltLmRlc3Ryb3koKVxyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9uKClcclxuICB9XHJcbn1cclxuXHJcbkNvaW4udHlwZSA9IHtcclxuICBHT0xEOiAnZ29sZCcsXHJcbiAgU0lMVkVSOiAnc2lsdmVyJyxcclxuICBCUk9OWkU6ICdicm9uemUnLFxyXG59XHJcblxyXG5FbmdpbmUuQ29pbiA9IENvaW5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

var Trail = function (_Phaser$Particles$Arc) {
  _inherits(Trail, _Phaser$Particles$Arc);

  function Trail(game, maxParticles, follow) {
    _classCallCheck(this, Trail);

    var _this = _possibleConstructorReturn(this, (Trail.__proto__ || Object.getPrototypeOf(Trail)).call(this, game, 0, 0, maxParticles));

    _this.makeParticles('particles');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLmpzIl0sIm5hbWVzIjpbIlRyYWlsIiwiZ2FtZSIsIm1heFBhcnRpY2xlcyIsImZvbGxvdyIsIm1ha2VQYXJ0aWNsZXMiLCJsaWZlc3BhbiIsIl9wYXJ0aWNsZXNFbWl0IiwiX2RlbGF5RW1pdCIsIl9mb2xsb3ciLCJfdGltZXJFbW1pdGluZyIsInRpbWUiLCJjcmVhdGUiLCJsb29wIiwiZW1pdCIsInN0YXJ0IiwiaSIsInBhcnRpY2xlRnJhbSIsInJuZCIsImJldHdlZW4iLCJlbWl0UGFydGljbGUiLCJ4IiwieSIsImhlaWdodCIsInBhdXNlIiwicmVzdW1lIiwiUGhhc2VyIiwiUGFydGljbGVzIiwiQXJjYWRlIiwiRW1pdHRlciIsIkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsSUFBWixFQUFrQkMsWUFBbEIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUEsOEdBQ2hDRixJQURnQyxFQUMxQixDQUQwQixFQUN2QixDQUR1QixFQUNwQkMsWUFEb0I7O0FBR3RDLFVBQUtFLGFBQUwsQ0FBbUIsV0FBbkI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLEdBQWhCOztBQUVBLFVBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlTCxNQUFmOztBQUVBLFVBQUtNLGNBQUwsR0FBc0IsTUFBS1IsSUFBTCxDQUFVUyxJQUFWLENBQWVDLE1BQWYsRUFBdEI7QUFDQSxVQUFLRixjQUFMLENBQW9CRyxJQUFwQixDQUF5QixNQUFLTCxVQUE5QixFQUEwQyxNQUFLTSxJQUEvQztBQUNBLFVBQUtKLGNBQUwsQ0FBb0JLLEtBQXBCO0FBWnNDO0FBYXZDOzs7OzJCQUVNO0FBQ0wsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1QsY0FBekIsRUFBeUNTLEdBQXpDLEVBQThDO0FBQzVDLFlBQU1DLGVBQWUsS0FBS2YsSUFBTCxDQUFVZ0IsR0FBVixDQUFjQyxPQUFkLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBQXJCOztBQUVBLGFBQUtDLFlBQUwsQ0FDRSxLQUFLWCxPQUFMLENBQWFZLENBRGYsRUFFRSxLQUFLWixPQUFMLENBQWFhLENBQWIsR0FBaUIsS0FBS2IsT0FBTCxDQUFhYyxNQUZoQyxFQUdFLFdBSEYsRUFJRU4sWUFKRjtBQU1EO0FBQ0Y7OztnQ0FFVztBQUNWLFdBQUtQLGNBQUwsQ0FBb0JjLEtBQXBCO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtkLGNBQUwsQ0FBb0JlLE1BQXBCO0FBQ0Q7Ozs7RUFuQ2lCQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QkMsTzs7QUFzQzVDQyxPQUFPN0IsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6InRyYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhaWwgZXh0ZW5kcyBQaGFzZXIuUGFydGljbGVzLkFyY2FkZS5FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCBtYXhQYXJ0aWNsZXMsIGZvbGxvdykge1xyXG4gICAgc3VwZXIoZ2FtZSwgMCwgMCwgbWF4UGFydGljbGVzKVxyXG5cclxuICAgIHRoaXMubWFrZVBhcnRpY2xlcygncGFydGljbGVzJylcclxuICAgIHRoaXMubGlmZXNwYW4gPSA1MDBcclxuXHJcbiAgICB0aGlzLl9wYXJ0aWNsZXNFbWl0ID0gM1xyXG4gICAgdGhpcy5fZGVsYXlFbWl0ID0gMzVcclxuICAgIHRoaXMuX2ZvbGxvdyA9IGZvbGxvd1xyXG5cclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5sb29wKHRoaXMuX2RlbGF5RW1pdCwgdGhpcy5lbWl0LCB0aGlzKVxyXG4gICAgdGhpcy5fdGltZXJFbW1pdGluZy5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBlbWl0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXJ0aWNsZXNFbWl0OyBpKyspIHtcclxuICAgICAgY29uc3QgcGFydGljbGVGcmFtID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDAsIDQpXHJcblxyXG4gICAgICB0aGlzLmVtaXRQYXJ0aWNsZShcclxuICAgICAgICB0aGlzLl9mb2xsb3cueCxcclxuICAgICAgICB0aGlzLl9mb2xsb3cueSArIHRoaXMuX2ZvbGxvdy5oZWlnaHQsXHJcbiAgICAgICAgJ3BhcnRpY2xlcycsXHJcbiAgICAgICAgcGFydGljbGVGcmFtXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BFbWl0dCgpIHtcclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcucGF1c2UoKVxyXG4gIH1cclxuXHJcbiAgc3RhcnRFbWl0dCgpIHtcclxuICAgIHRoaXMuX3RpbWVyRW1taXRpbmcucmVzdW1lKClcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5UcmFpbCA9IFRyYWlsXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
      fill: 'rgb(168, 0, 210)',
      font: '25px Arial'
    };

    var _this = _possibleConstructorReturn(this, (Distance.__proto__ || Object.getPrototypeOf(Distance)).call(this, game, x, y, 'Distance: 0 m.', style));

    _this.fixedToCamera = true;
    _this.score = Engine.Service.get('Score');
    _this.score.onUpdate.add(_this.updateDistance, _this);
    return _this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RhY2UuanMiXSwibmFtZXMiOlsiRGlzdGFuY2UiLCJnYW1lIiwieCIsInkiLCJzdHlsZSIsImZpbGwiLCJmb250IiwiZml4ZWRUb0NhbWVyYSIsInNjb3JlIiwiRW5naW5lIiwiU2VydmljZSIsImdldCIsIm9uVXBkYXRlIiwiYWRkIiwidXBkYXRlRGlzdGFuY2UiLCJ0ZXh0IiwiY3VycmVudERpc3RhbmNlIiwiUGhhc2VyIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFDSixvQkFBWUMsSUFBWixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQ3RCLFFBQU1DLFFBQVE7QUFDWkMsWUFBTSxrQkFETTtBQUVaQyxZQUFNO0FBRk0sS0FBZDs7QUFEc0Isb0hBTWhCTCxJQU5nQixFQU1WQyxDQU5VLEVBTVBDLENBTk8sRUFNSixnQkFOSSxFQU1jQyxLQU5kOztBQVF0QixVQUFLRyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsT0FBbkIsQ0FBYjtBQUNBLFVBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsTUFBS0MsY0FBN0I7QUFWc0I7QUFXdkI7Ozs7cUNBRWdCO0FBQ2YsV0FBS0MsSUFBTCxrQkFBeUIsS0FBS1AsS0FBTCxDQUFXUSxlQUFwQztBQUNEOzs7O0VBaEJvQkMsT0FBT0MsSTs7QUFtQjlCVCxPQUFPVCxRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJkaXN0YWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGlzdGFuY2UgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGZpbGw6ICdyZ2IoMTY4LCAwLCAyMTApJyxcclxuICAgICAgZm9udDogJzI1cHggQXJpYWwnXHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ0Rpc3RhbmNlOiAwIG0uJywgc3R5bGUpXHJcblxyXG4gICAgdGhpcy5maXhlZFRvQ2FtZXJhID0gdHJ1ZVxyXG4gICAgdGhpcy5zY29yZSA9IEVuZ2luZS5TZXJ2aWNlLmdldCgnU2NvcmUnKVxyXG4gICAgdGhpcy5zY29yZS5vblVwZGF0ZS5hZGQodGhpcy51cGRhdGVEaXN0YW5jZSwgdGhpcylcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3RhbmNlKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gYERpc3RhbmNlOiAke3RoaXMuc2NvcmUuY3VycmVudERpc3RhbmNlfSBtLmBcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5EaXN0YW5jZSA9IERpc3RhbmNlXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
      this.createLoseLabel();
      this.createStartLabel();
      this.createBestDistance();

      // TEMP

      {
        var coin = new Engine.Coin(this.game, 220, 370);
        this.coins.add(coin);
      }
      {
        var _coin = new Engine.Coin(this.game, 250, 370, Engine.Coin.type.SILVER);
        this.coins.add(_coin);
      }
      {
        var _coin2 = new Engine.Coin(this.game, 280, 370, Engine.Coin.type.BRONZE);
        this.coins.add(_coin2);
      }

      // END TEMP
    }
  }, {
    key: 'update',
    value: function update() {
      this.physics.arcade.collide(this.bunny, this.grounds);
      this.physics.arcade.collide(this.bunny, this.coins);
      this.physics.arcade.collide(this.grounds, this.coins);
      this.physics.arcade.collide(this.coins, this.coins);
      this.updateDie();

      // TODO: Need incapsulation
      this._score.currentDistance = Math.round(this.bunny.x / Engine.Score.MULTIPER_DISTANCE);
    }
  }, {
    key: 'render',
    value: function render() {
      // this.game.debug.spriteInfo(this.bunny, 90, 15, 'white')
      // this.grounds.forEach((ground) => {
      //   this.game.debug.body(ground, 'rgba(127, 0, 254, 0.51)')
      // })
      // this.game.debug.text('Spikes count in memory: ' + this.bottomSpikes.length, 90, 15)
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
    key: 'createBestDistance',
    value: function createBestDistance() {
      this.bestDistance = new Engine.BestDistance(this.game);
    }
  }, {
    key: 'lose',
    value: function lose() {
      this.loseLabel.show();
      this.backgrounds.callAll('stop');

      // TODO: Need incapsulation
      if (this._score.bestDistance < this._score.currentDistance) {
        this._score.bestDistance = this._score.currentDistance;
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this.startLabel.hide();
      this.backgrounds.callAll('resume');
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
      var margin = 25;

      this.distanceLabel = new Engine.Distance(this.game, this.game.width - margin, margin);
      this.distanceLabel.anchor.setTo(1, 0);
      this.add.existing(this.distanceLabel);
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
      window.bunny = this.bunny = new Engine.Bunny(this.game, 150, 150, 'bunny1');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsImxvYWQiLCJhdGxhc1hNTCIsIkVuZ2luZSIsInNwcml0ZXNoZWV0IiwiaW1hZ2UiLCJkaXN0YW5jZUJldHdlZW5Hcm91bmRzIiwiX3Njb3JlIiwiU2VydmljZSIsImdldCIsIndpbmRvdyIsImdhbWUiLCJzdGFnZSIsImJhY2tncm91bmRDb2xvciIsInBoeXNpY3MiLCJzdGFydFN5c3RlbSIsIlBoYXNlciIsIlBoeXNpY3MiLCJBUkNBREUiLCJ3b3JsZCIsInNldEJvdW5kcyIsImhlaWdodCIsIk51bWJlciIsIk1BWF9WQUxVRSIsImNyZWF0ZUJhY2tncm91bmQiLCJjcmVhdGVCdW5ueSIsImNyZWF0ZVNwaWtlcyIsImNyZWF0ZUdyb3VuZHMiLCJjcmVhdGVDb2lucyIsImJ1bm55IiwiYWRkVHJhaWwiLCJjb25maWd1cmF0ZUNhbWVyYSIsImFkZENvbnRyb2wiLCJjcmVhdGVEaXN0YW5jZUxhYmVsIiwiY3JlYXRlTG9zZUxhYmVsIiwiY3JlYXRlU3RhcnRMYWJlbCIsImNyZWF0ZUJlc3REaXN0YW5jZSIsImNvaW4iLCJDb2luIiwiY29pbnMiLCJhZGQiLCJ0eXBlIiwiU0lMVkVSIiwiQlJPTlpFIiwiYXJjYWRlIiwiY29sbGlkZSIsImdyb3VuZHMiLCJ1cGRhdGVEaWUiLCJjdXJyZW50RGlzdGFuY2UiLCJNYXRoIiwicm91bmQiLCJ4IiwiU2NvcmUiLCJNVUxUSVBFUl9ESVNUQU5DRSIsInkiLCJkYXRhIiwiaXNEZWFkIiwiZGllIiwibG9zZSIsIlBST1RPVFlQRSIsIlNwaWtlIiwiQ09VTlQiLCJ3aWR0aCIsImJvdHRvbVNwaWtlcyIsIkNvbXBvbmVudCIsIkJvdHRvbVNwaWtlR2VuZXJhdG9yIiwiaSIsInNwaWtlIiwiYmVzdERpc3RhbmNlIiwiQmVzdERpc3RhbmNlIiwibG9zZUxhYmVsIiwic2hvdyIsImJhY2tncm91bmRzIiwiY2FsbEFsbCIsInN0YXJ0TGFiZWwiLCJoaWRlIiwicnVuIiwiQ29pbkdlbmVyYXRvciIsIk1lc3NhZ2UiLCJhbmNob3IiLCJzZXRUbyIsImV4aXN0aW5nIiwibWFyZ2luIiwiZGlzdGFuY2VMYWJlbCIsIkRpc3RhbmNlIiwiaG90a2V5IiwiaW5wdXQiLCJrZXlib2FyZCIsImFkZEtleSIsIktleUNvZGUiLCJTUEFDRUJBUiIsIm9uRG93biIsInNwYWNlYmFyRG93biIsIm1vdXNlIiwibW91c2VEb3duQ2FsbGJhY2siLCJzdGF0ZSIsInJlc3RhcnQiLCJydW5uaW5nIiwianVtcCIsInN0YXJ0IiwibWFyZ2luQm90dG9tIiwiR3JvdW5kIiwiR1JBU1MiLCJzbWFsbCIsImJyb2tlbiIsInN0YXJ0R3JvdW5kIiwiQnVubnkiLCJHcm91bmRzR2VuZXJhdG9yIiwiY3JlYXRlU3RhcnRHcm91bmQiLCJjcmVhdGVGaXJzdEdyb3VuZHMiLCJnZW5lcmF0ZSIsInBhZGRpbmdMZWZ0Iiwic21vb3RoTW92ZSIsImRlYWRab25lSGVpZ2h0IiwiY2FtZXJhIiwicm91bmRQeCIsImZvbGxvdyIsIkNhbWVyYSIsIkZPTExPV19MT0NLT04iLCJkZWFkem9uZSIsIlJlY3RhbmdsZSIsImdyb3VwIiwiQmFja2dyb3VuZCIsIlN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs4QkFFUztBQUNSLFdBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUNFQyxPQUFPQyxXQURULEVBRUUsZ0NBRkYsRUFHRSxnQ0FIRjs7QUFNQSxXQUFLSCxJQUFMLENBQVVJLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsdUNBQTFCO0FBQ0EsV0FBS0osSUFBTCxDQUFVSSxLQUFWLENBQWdCLFFBQWhCLEVBQTBCLHVDQUExQjtBQUNBLFdBQUtKLElBQUwsQ0FBVUksS0FBVixDQUFnQixRQUFoQixFQUEwQix1Q0FBMUI7O0FBRUEsV0FBS0osSUFBTCxDQUFVRyxXQUFWLENBQXNCLFdBQXRCLEVBQW1DLDhCQUFuQyxFQUFtRSxDQUFuRSxFQUFzRSxDQUF0RTtBQUNE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QVVVLE1BQVYsR0FBbUIsQ0FBckQsRUFBd0QsQ0FBeEQsRUFBMkQ0RixjQUEzRCxDQUF2QjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFdBQUt6QyxXQUFMLEdBQW1CLEtBQUtoQyxHQUFMLENBQVNpRixLQUFULEVBQW5COztBQUVBLFdBQUtqRCxXQUFMLENBQWlCaEMsR0FBakIsQ0FBcUIsSUFBSXJDLE9BQU91SCxVQUFYLENBQXNCLEtBQUsvRyxJQUEzQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxFQUF1QyxRQUF2QyxFQUFpRCxDQUFDLENBQWxELENBQXJCO0FBQ0EsV0FBSzZELFdBQUwsQ0FBaUJoQyxHQUFqQixDQUFxQixJQUFJckMsT0FBT3VILFVBQVgsQ0FBc0IsS0FBSy9HLElBQTNCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLFFBQXZDLEVBQWlELENBQUMsQ0FBbEQsQ0FBckI7QUFDQSxXQUFLNkQsV0FBTCxDQUFpQmhDLEdBQWpCLENBQXFCLElBQUlyQyxPQUFPdUgsVUFBWCxDQUFzQixLQUFLL0csSUFBM0IsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsUUFBdkMsRUFBaUQsQ0FBQyxDQUFsRCxDQUFyQjtBQUNEOzs7O0VBalFnQkssT0FBTzJHLEs7O0FBb1ExQnhILE9BQU9ILElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gICAgdGhpcy5sb2FkLmF0bGFzWE1MKFxyXG4gICAgICBFbmdpbmUuc3ByaXRlc2hlZXQsXHJcbiAgICAgICdhc3NldHMvc3ByaXRlc2hlZXRzL2p1bXBlci5wbmcnLFxyXG4gICAgICAnYXNzZXRzL3Nwcml0ZXNoZWV0cy9qdW1wZXIueG1sJ1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMubG9hZC5pbWFnZSgnbGF5ZXIyJywgJ2Fzc2V0cy9zcHJpdGVzL2JhY2tncm91bmRzL2xheWVyMi5wbmcnKVxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsYXllcjMnLCAnYXNzZXRzL3Nwcml0ZXMvYmFja2dyb3VuZHMvbGF5ZXIzLnBuZycpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xheWVyNCcsICdhc3NldHMvc3ByaXRlcy9iYWNrZ3JvdW5kcy9sYXllcjQucG5nJylcclxuXHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BhcnRpY2xlcycsICdhc3NldHMvc3ByaXRlcy9wYXJ0aWNsZXMucG5nJywgOCwgOClcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHMgPSA1MDBcclxuXHJcbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpc1xyXG4gICAgdGhpcy5fc2NvcmUgPSBFbmdpbmUuU2VydmljZS5nZXQoJ1Njb3JlJylcclxuXHJcbiAgICB3aW5kb3cuZ2FtZSA9IHRoaXNcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gMHhBREU2RkZcclxuICAgIHRoaXMucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpXHJcbiAgICB0aGlzLndvcmxkLnNldEJvdW5kcygwLCAtdGhpcy5nYW1lLmhlaWdodCwgTnVtYmVyLk1BWF9WQUxVRSwgdGhpcy5nYW1lLmhlaWdodCAqIDIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpXHJcbiAgICB0aGlzLmNyZWF0ZUJ1bm55KClcclxuICAgIHRoaXMuY3JlYXRlU3Bpa2VzKClcclxuICAgIHRoaXMuY3JlYXRlR3JvdW5kcygpXHJcbiAgICB0aGlzLmNyZWF0ZUNvaW5zKClcclxuXHJcbiAgICB0aGlzLmJ1bm55LmFkZFRyYWlsKClcclxuXHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRlQ2FtZXJhKClcclxuICAgIHRoaXMuYWRkQ29udHJvbCgpXHJcbiAgICB0aGlzLmNyZWF0ZURpc3RhbmNlTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVMb3NlTGFiZWwoKVxyXG4gICAgdGhpcy5jcmVhdGVTdGFydExhYmVsKClcclxuICAgIHRoaXMuY3JlYXRlQmVzdERpc3RhbmNlKClcclxuXHJcbiAgICAvLyBURU1QXHJcblxyXG4gICAge1xyXG4gICAgICBsZXQgY29pbiA9IG5ldyBFbmdpbmUuQ29pbih0aGlzLmdhbWUsIDIyMCwgMzcwKVxyXG4gICAgICB0aGlzLmNvaW5zLmFkZChjb2luKVxyXG4gICAgfVxyXG4gICAge1xyXG4gICAgICBsZXQgY29pbiA9IG5ldyBFbmdpbmUuQ29pbih0aGlzLmdhbWUsIDI1MCwgMzcwLCBFbmdpbmUuQ29pbi50eXBlLlNJTFZFUilcclxuICAgICAgdGhpcy5jb2lucy5hZGQoY29pbilcclxuICAgIH1cclxuICAgIHtcclxuICAgICAgbGV0IGNvaW4gPSBuZXcgRW5naW5lLkNvaW4odGhpcy5nYW1lLCAyODAsIDM3MCwgRW5naW5lLkNvaW4udHlwZS5CUk9OWkUpXHJcbiAgICAgIHRoaXMuY29pbnMuYWRkKGNvaW4pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEVORCBURU1QXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5idW5ueSwgdGhpcy5ncm91bmRzKVxyXG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHRoaXMuYnVubnksIHRoaXMuY29pbnMpXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodGhpcy5ncm91bmRzLCB0aGlzLmNvaW5zKVxyXG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHRoaXMuY29pbnMsIHRoaXMuY29pbnMpXHJcbiAgICB0aGlzLnVwZGF0ZURpZSgpXHJcblxyXG4gICAgLy8gVE9ETzogTmVlZCBpbmNhcHN1bGF0aW9uXHJcbiAgICB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2UgPSBNYXRoLnJvdW5kKHRoaXMuYnVubnkueCAvIEVuZ2luZS5TY29yZS5NVUxUSVBFUl9ESVNUQU5DRSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy5zcHJpdGVJbmZvKHRoaXMuYnVubnksIDkwLCAxNSwgJ3doaXRlJylcclxuICAgIC8vIHRoaXMuZ3JvdW5kcy5mb3JFYWNoKChncm91bmQpID0+IHtcclxuICAgIC8vICAgdGhpcy5nYW1lLmRlYnVnLmJvZHkoZ3JvdW5kLCAncmdiYSgxMjcsIDAsIDI1NCwgMC41MSknKVxyXG4gICAgLy8gfSlcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdTcGlrZXMgY291bnQgaW4gbWVtb3J5OiAnICsgdGhpcy5ib3R0b21TcGlrZXMubGVuZ3RoLCA5MCwgMTUpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaWUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuYnVubnkueSA+IHRoaXMuZ2FtZS5oZWlnaHQgLSAxMDAgJiZcclxuICAgICAgIXRoaXMuYnVubnkuZGF0YS5pc0RlYWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLmJ1bm55LmRpZSgpXHJcbiAgICAgIHRoaXMubG9zZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTcGlrZXMoKSB7XHJcbiAgICBjb25zdCBQUk9UT1RZUEUgPSBuZXcgRW5naW5lLlNwaWtlKHRoaXMuZ2FtZSwgMCwgMClcclxuICAgIGNvbnN0IENPVU5UID0gKHRoaXMuZ2FtZS53aWR0aCArIHRoaXMuYnVubnkueCkgLyBQUk9UT1RZUEUud2lkdGhcclxuXHJcbiAgICB0aGlzLmJvdHRvbVNwaWtlcyA9IG5ldyBFbmdpbmUuQ29tcG9uZW50LkJvdHRvbVNwaWtlR2VuZXJhdG9yKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuYnVubnksXHJcbiAgICAgIFBST1RPVFlQRVxyXG4gICAgKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xyXG4gICAgICBsZXQgc3Bpa2UgPSBuZXcgRW5naW5lLlNwaWtlKFxyXG4gICAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgICBpICogUFJPVE9UWVBFLndpZHRoLFxyXG4gICAgICAgIHRoaXMuZ2FtZS5oZWlnaHRcclxuICAgICAgKVxyXG5cclxuICAgICAgdGhpcy5ib3R0b21TcGlrZXMuYWRkKHNwaWtlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmVzdERpc3RhbmNlKCkge1xyXG4gICAgdGhpcy5iZXN0RGlzdGFuY2UgPSBuZXcgRW5naW5lLkJlc3REaXN0YW5jZSh0aGlzLmdhbWUpXHJcbiAgfVxyXG5cclxuICBsb3NlKCkge1xyXG4gICAgdGhpcy5sb3NlTGFiZWwuc2hvdygpXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmNhbGxBbGwoJ3N0b3AnKVxyXG5cclxuICAgIC8vIFRPRE86IE5lZWQgaW5jYXBzdWxhdGlvblxyXG4gICAgaWYgKHRoaXMuX3Njb3JlLmJlc3REaXN0YW5jZSA8IHRoaXMuX3Njb3JlLmN1cnJlbnREaXN0YW5jZSkge1xyXG4gICAgICB0aGlzLl9zY29yZS5iZXN0RGlzdGFuY2UgPSB0aGlzLl9zY29yZS5jdXJyZW50RGlzdGFuY2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5zdGFydExhYmVsLmhpZGUoKVxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5jYWxsQWxsKCdyZXN1bWUnKVxyXG4gICAgdGhpcy5idW5ueS5ydW4oKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29pbnMoKSB7XHJcbiAgICB0aGlzLmNvaW5zID0gbmV3IEVuZ2luZS5Db21wb25lbnQuQ29pbkdlbmVyYXRvcih0aGlzLmdhbWUsIHRoaXMuYnVubnksIHRoaXMuZ3JvdW5kcylcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxvc2VMYWJlbCgpIHtcclxuICAgIHRoaXMubG9zZUxhYmVsID0gbmV3IEVuZ2luZS5NZXNzYWdlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAvIDIsXHJcbiAgICAgIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLFxyXG4gICAgICAnWW91IGxvc2UgOi0oXFxyXFxuUHJlc3Mgc3BhY2ViYXInXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5sb3NlTGFiZWwuYW5jaG9yLnNldFRvKDAuNSlcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMubG9zZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU3RhcnRMYWJlbCgpIHtcclxuICAgIHRoaXMuc3RhcnRMYWJlbCA9IG5ldyBFbmdpbmUuTWVzc2FnZShcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLyAyLFxyXG4gICAgICB0aGlzLmdhbWUuaGVpZ2h0IC8gMixcclxuICAgICAgJ1ByZXNzIHNwYWNlYmFyXFxyXFxuZm9yIHN0YXJ0J1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuc3RhcnRMYWJlbC5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgdGhpcy5zdGFydExhYmVsLnNob3coKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5zdGFydExhYmVsKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGlzdGFuY2VMYWJlbCgpIHtcclxuICAgIGNvbnN0IG1hcmdpbiA9IDI1XHJcblxyXG4gICAgdGhpcy5kaXN0YW5jZUxhYmVsID0gbmV3IEVuZ2luZS5EaXN0YW5jZShcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLSBtYXJnaW4sXHJcbiAgICAgIG1hcmdpblxyXG4gICAgKVxyXG4gICAgdGhpcy5kaXN0YW5jZUxhYmVsLmFuY2hvci5zZXRUbygxLCAwKVxyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5kaXN0YW5jZUxhYmVsKVxyXG4gIH1cclxuXHJcbiAgYWRkQ29udHJvbCgpIHtcclxuICAgIGxldCBob3RrZXkgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Q29kZS5TUEFDRUJBUilcclxuICAgIGhvdGtleS5vbkRvd24uYWRkKHRoaXMuc3BhY2ViYXJEb3duLCB0aGlzKVxyXG5cclxuICAgIGxldCBtb3VzZSA9IHRoaXMuaW5wdXQubW91c2VcclxuICAgIG1vdXNlLm1vdXNlRG93bkNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNwYWNlYmFyRG93bigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzcGFjZWJhckRvd24oKSB7XHJcbiAgICBpZiAodGhpcy5idW5ueS5kYXRhLmlzRGVhZCkge1xyXG4gICAgICB0aGlzLnN0YXRlLnJlc3RhcnQodHJ1ZSwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idW5ueS5kYXRhLnJ1bm5pbmcpIHtcclxuICAgICAgdGhpcy5idW5ueS5qdW1wKClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXJ0KClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZVN0YXJ0R3JvdW5kKCkge1xyXG4gICAgY29uc3QgbWFyZ2luQm90dG9tID0gMjUwXHJcbiAgICBjb25zdCB4ID0gMTAwXHJcbiAgICBjb25zdCB5ID0gdGhpcy5idW5ueS55ICsgbWFyZ2luQm90dG9tXHJcbiAgICBjb25zdCB0eXBlID0gR3JvdW5kLnR5cGUuR1JBU1NcclxuICAgIGNvbnN0IHNtYWxsID0gZmFsc2VcclxuICAgIGNvbnN0IGJyb2tlbiA9IGZhbHNlXHJcblxyXG4gICAgbGV0IHN0YXJ0R3JvdW5kID0gbmV3IEVuZ2luZS5Hcm91bmQoXHJcbiAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdHlwZSxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIGJyb2tlbixcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmdyb3VuZHMuYWRkKHN0YXJ0R3JvdW5kKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQnVubnkoKSB7XHJcbiAgICB3aW5kb3cuYnVubnkgPSB0aGlzLmJ1bm55ID0gbmV3IEVuZ2luZS5CdW5ueSh0aGlzLmdhbWUsIDE1MCwgMTUwLCAnYnVubnkxJylcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnVubnkpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVHcm91bmRzKCkge1xyXG4gICAgdGhpcy5ncm91bmRzID0gbmV3IEVuZ2luZS5Db21wb25lbnQuR3JvdW5kc0dlbmVyYXRvcihcclxuICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICB0aGlzLmJ1bm55LFxyXG4gICAgICB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHNcclxuICAgIClcclxuICAgIHRoaXMuY3JlYXRlU3RhcnRHcm91bmQoKVxyXG4gICAgdGhpcy5jcmVhdGVGaXJzdEdyb3VuZHMoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlyc3RHcm91bmRzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmdhbWUud2lkdGggLyB0aGlzLmRpc3RhbmNlQmV0d2Vlbkdyb3VuZHM7IGkrKykge1xyXG4gICAgICB0aGlzLmdyb3VuZHMuZ2VuZXJhdGUoaSAqIHRoaXMuZGlzdGFuY2VCZXR3ZWVuR3JvdW5kcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyYXRlQ2FtZXJhKCkge1xyXG4gICAgY29uc3QgcGFkZGluZ0xlZnQgPSAyNTBcclxuICAgIGNvbnN0IHNtb290aE1vdmUgPSAwLjE1XHJcbiAgICBjb25zdCBkZWFkWm9uZUhlaWdodCA9IDUwXHJcblxyXG4gICAgdGhpcy5jYW1lcmEucm91bmRQeCA9IGZhbHNlXHJcbiAgICB0aGlzLmNhbWVyYS5mb2xsb3codGhpcy5idW5ueSwgUGhhc2VyLkNhbWVyYS5GT0xMT1dfTE9DS09OLCAxLCBzbW9vdGhNb3ZlKVxyXG4gICAgdGhpcy5jYW1lcmEuZGVhZHpvbmUgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZShwYWRkaW5nTGVmdCwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDEsIGRlYWRab25lSGVpZ2h0KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZHMgPSB0aGlzLmFkZC5ncm91cCgpXHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kcy5hZGQobmV3IEVuZ2luZS5CYWNrZ3JvdW5kKHRoaXMuZ2FtZSwgMCwgMCwgJ2xheWVyMicsIC0xKSlcclxuICAgIHRoaXMuYmFja2dyb3VuZHMuYWRkKG5ldyBFbmdpbmUuQmFja2dyb3VuZCh0aGlzLmdhbWUsIDAsIDAsICdsYXllcjMnLCAtMikpXHJcbiAgICB0aGlzLmJhY2tncm91bmRzLmFkZChuZXcgRW5naW5lLkJhY2tncm91bmQodGhpcy5nYW1lLCAwLCAwLCAnbGF5ZXI0JywgLTMpKVxyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLkdhbWUgPSBHYW1lXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
