!function(e){function t(t){for(var r,u,a=t[0],d=t[1],c=t[2],l=0,f=[];l<a.length;l++)u=a[l],o[u]&&f.push(o[u][0]),o[u]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(i&&i(t);f.length;)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var d=n[a];0!==o[d]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={9:0},s=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var s=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=12e4,u.nc&&a.setAttribute("nonce",u.nc),a.src=u.p+"static/js/"+({}[e]||e)+"."+{0:"b7fc9bcb24b68ef33788",1:"56c81b8f14df32d3a823",2:"a9d3108b114c18b6ed2e",3:"efedcc3b4f26309dc384",4:"c35a6d25e6d5e28dc223",5:"aab05f54c1dbc69bc5dc",6:"a7d479adb545d940b335"}[e]+".js";var d=setTimeout(function(){c({type:"timeout",target:a})},12e4);function c(t){a.onerror=a.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");u.type=r,u.request=s,n[1](u)}o[e]=void 0}}a.onerror=a.onload=c,s.appendChild(a)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://luchanso.github.io/bunny-funny-runner",u.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var i=d;s.push([0,8,7]),n()}({"./src/App.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=_(n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),o=_(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),s=_(n("./node_modules/babel-runtime/helpers/createClass.js")),u=_(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),a=_(n("./node_modules/babel-runtime/helpers/inherits.js")),d=_(n("./node_modules/react/index.js")),c=n("./node_modules/react-redux/es/index.js"),i=n("./node_modules/react-router-redux/es/index.js"),l=n("./node_modules/react-router/es/index.js"),f=n("./src/store.js"),p=_(f),m=_(n("./src/components/GameScene/index.js")),h=_(n("./src/components/ReactScene/index.js"));function _(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,a.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return d.default.createElement(c.Provider,{store:p.default},d.default.createElement(i.ConnectedRouter,{history:f.history},d.default.createElement("div",null,d.default.createElement(l.Switch,null,d.default.createElement(l.Route,{exact:!0,path:"/",component:function(){return d.default.createElement(l.Redirect,{from:"/",to:"/web/boot"})}}),d.default.createElement(l.Route,{path:"/:platform/boot",component:m.default}),d.default.createElement(l.Route,{path:"/:platform/menu",component:m.default}),d.default.createElement(l.Route,{path:"/:platform/loader",component:m.default}),d.default.createElement(l.Route,{path:"/:platform/game",component:m.default}),d.default.createElement(l.Route,{path:"/:platform/shop"},d.default.createElement(h.default,{scene:"shop"}))))))}}]),t}(d.default.Component);t.default=j},"./src/components/GameScene/GameScene.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),o=f(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),s=f(n("./node_modules/babel-runtime/helpers/createClass.js")),u=f(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),a=f(n("./node_modules/babel-runtime/helpers/inherits.js")),d=f(n("./node_modules/react/index.js")),c=n("./node_modules/prop-types/index.js"),i=f(n("./src/game/index.js")),l=n("./src/model/scene.js");function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,a.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){(0,i.default)(this.props.scene,this.context.store)}},{key:"render",value:function(){return d.default.createElement("div",{id:"game"})}}]),t}(d.default.Component);p.propTypes={scene:c.string},p.defaultProps={scene:l.GAME_SCENES.BOOT},p.contextTypes={store:(0,c.shape)({})},t.default=p},"./src/components/GameScene/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("./src/components/GameScene/GameScene.jsx"),s=(r=o)&&r.__esModule?r:{default:r};t.default=s.default},"./src/components/ReactScene/ReactScene.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=v(n("./node_modules/babel-runtime/regenerator/index.js")),o=v(n("./node_modules/babel-runtime/helpers/asyncToGenerator.js")),s=v(n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),u=v(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),a=v(n("./node_modules/babel-runtime/helpers/createClass.js")),d=v(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=v(n("./node_modules/babel-runtime/helpers/inherits.js")),i=v(n("./node_modules/babel-runtime/helpers/defineProperty.js")),l=n("./node_modules/react/index.js"),f=v(l),p=n("./node_modules/prop-types/index.js"),m=v(n("./node_modules/material-ui/CssBaseline/index.js")),h=n("./node_modules/material-ui/Progress/index.js"),_=n("./node_modules/material-ui/styles/index.js"),j=n("./src/model/scene.js"),b=n("./src/config.js");function v(e){return e&&e.__esModule?e:{default:e}}var g=(0,i.default)({},j.REACT_SCENES.SHOP,"Shop"),y={container:{display:"flex",justifyContent:"center",alignContent:"center",width:b.config.width,height:b.config.height,paddingTop:(window.screen.height-b.config.height)/2+"px"}},x=function(e){function t(){var e,n,r,o;(0,u.default)(this,t);for(var a=arguments.length,c=Array(a),i=0;i<a;i++)c[i]=arguments[i];return n=r=(0,d.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(c))),r.state={isLoading:!0},r.SceneContainer=null,o=n,(0,d.default)(r,o)}return(0,c.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.initContainer()}},{key:"initContainer",value:function(){var e=(0,o.default)(r.default.mark(function e(){var t,o;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.scene,o=g[t],e.next=4,n("./src/containers lazy recursive ^\\.\\/.*$")("./"+o);case 4:this.SceneContainer=e.sent.default,this.setState({isLoading:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.SceneContainer,t=this.state.isLoading,n=this.props.classes;return f.default.createElement(l.Fragment,null,f.default.createElement(m.default,null),f.default.createElement("div",{className:n.container},t&&f.default.createElement(h.CircularProgress,null),!t&&f.default.createElement(e,null)))}}]),t}(f.default.Component);x.propTypes={scene:p.string.isRequired,classes:(0,p.shape)({container:p.string.isRequired}).isRequired},t.default=(0,_.withStyles)(y)(x)},"./src/components/ReactScene/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("./src/components/ReactScene/ReactScene.jsx"),s=(r=o)&&r.__esModule?r:{default:r};t.default=s.default},"./src/config.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.config={minWidth:640,minHeight:360,maxWidth:window.innerWidth,maxHeight:window.innerHeight,width:1e3,height:640,spritesheet:"jumper",scaleRatio:.25,magnetDistace:300,backgroundColor:11396863};t.default=r},"./src/containers lazy recursive ^\\.\\/.*$":function(e,t,n){var r={"./Shop":["./src/containers/Shop/index.js",0],"./Shop/":["./src/containers/Shop/index.js",0],"./Shop/Shop":["./src/containers/Shop/Shop.jsx",1],"./Shop/Shop.jsx":["./src/containers/Shop/Shop.jsx",1],"./Shop/index":["./src/containers/Shop/index.js",0],"./Shop/index.js":["./src/containers/Shop/index.js",0]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=n(t[0]);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}):Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="./src/containers lazy recursive ^\\.\\/.*$",e.exports=o},"./src/game/ads.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.runVKAds=function(){setTimeout(function(){var e={ad_unit_id:102296,ad_unit_hash:"cd03259b32fb224628362b0fdabb4254"};function t(){VK.Widgets.Ads("vk_ads_102296",{},e)}if(window.VK&&VK.Widgets)t();else{window.vkAsyncInitCallbacks||(window.vkAsyncInitCallbacks=[]),vkAsyncInitCallbacks.push(t);var n="https:"===location.protocol?"https:":"http:",r=document.getElementById("vk_ads_102296"),o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=n+"//vk.com/js/api/openapi.js?152",r.parentNode.insertBefore(o,r.nextSibling)}},0)}},"./src/game/fix.js":function(e,t,n){"use strict";window.PIXI.DisplayObjectContainer.prototype.removeChildren=function(e,t){void 0===e&&(e=0),void 0===t&&(t=this.children.length);var n=t-e;if(n>0&&n<=t){for(var r=this.children.splice(e,n),o=0;o<r.length;o++){r[o].parent=void 0}return r}if(0===n&&0===this.children.length)return[];throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range")}},"./src/game/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("./node_modules/babel-runtime/regenerator/index.js")),o=c(n("./node_modules/babel-runtime/helpers/asyncToGenerator.js"));n("./src/game/init.js"),n("./src/game/fix.js");var s=n("./src/config.js"),u=n("./src/game/ads.js"),a=c(n("./src/game/react-switcher/index.js")),d=n("./src/model/scene.js");function c(e){return e&&e.__esModule?e:{default:e}}var i,l=(i=(0,o.default)(r.default.mark(function e(){var t,o,c,i,l,f,p,m,h,_=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.GAME_SCENES.BOOT,j=arguments[1];return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(function(){var e=n("./node_modules/phaser/build/phaser.js");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})});case 2:return t=e.sent,o=t.Game,c=t.AUTO,i=new o(s.config.width,s.config.height,c,document.querySelector("#game")),e.next=8,n.e(5).then(function(){var e=n("./src/game/boot/index.js");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})});case 8:return l=e.sent.default,e.next=11,n.e(4).then(function(){var e=n("./src/game/game/index.js");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})});case 11:return f=e.sent.default,e.next=14,n.e(3).then(function(){var e=n("./src/game/menu/index.js");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})});case 14:return p=e.sent.default,e.next=17,n.e(2).then(function(){var e=n("./src/game/loader/index.js");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})});case 17:m=e.sent.default,h=(0,a.default)(j),i.state.add(d.GAME_SCENES.BOOT,l),i.state.add(d.GAME_SCENES.MAIN,f),i.state.add(d.GAME_SCENES.MENU,p),i.state.add(d.GAME_SCENES.LOADER,m),i.state.add(d.REACT_SCENES.SHOP,h),i.state.start(_),(0,u.runVKAds)();case 26:case"end":return e.stop()}},e,void 0)})),function(){return i.apply(this,arguments)});t.default=l},"./src/game/init.js":function(e,t,n){"use strict";var r=s(n("./node_modules/phaser/build/custom/pixi.js")),o=s(n("./node_modules/phaser/build/custom/p2.js"));function s(e){return e&&e.__esModule?e:{default:e}}window.PIXI=r.default,window.p2=o.default},"./src/game/react-switcher/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),o=i(n("./node_modules/babel-runtime/helpers/classCallCheck.js")),s=i(n("./node_modules/babel-runtime/helpers/createClass.js")),u=i(n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),a=i(n("./node_modules/babel-runtime/helpers/inherits.js")),d=i(n("./node_modules/phaser/build/phaser.js")),c=n("./src/model/scene.js");function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){function n(){return(0,o.default)(this,n),(0,u.default)(this,(n.__proto__||(0,r.default)(n)).apply(this,arguments))}return(0,a.default)(n,t),(0,s.default)(n,[{key:"preload",value:function(){e.dispatch((0,c.switchScene)(this.key))}}]),n}(d.default.State)}},"./src/index.js":function(e,t,n){"use strict";var r=u(n("./node_modules/react/index.js")),o=u(n("./node_modules/react-dom/index.js")),s=u(n("./src/App.jsx"));function u(e){return e&&e.__esModule?e:{default:e}}o.default.render(r.default.createElement(s.default,null),document.getElementById("app"))},"./src/model/scene.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sceneSelector=t.switchScene=t.REACT_SCENES=t.GAME_SCENES=t.SCENE_TYPES=void 0;var r,o=n("./node_modules/babel-runtime/core-js/object/values.js"),s=(r=o)&&r.__esModule?r:{default:r},u=n("./node_modules/react-router-redux/es/index.js");var a=t.SCENE_TYPES={GAME:"game",REACT:"react",UNKNOWN:"unknown"},d=t.GAME_SCENES={BOOT:"boot",MAIN:"main",MENU:"menu",LOADER:"loader"},c=t.REACT_SCENES={SHOP:"shop"};t.switchScene=function(e){return(0,u.push)(e)},t.sceneSelector=function(e){return(0,s.default)(d).find(function(t){return e===t})?a.GAME:(0,s.default)(c).find(function(t){return e===t})?a.REACT:a.UNKNOWN}},"./src/store.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var r=n("./node_modules/redux/es/index.js"),o=n("./node_modules/react-router-redux/es/index.js"),s=a(n("./node_modules/history/createBrowserHistory.js")),u=a(n("./node_modules/debug/src/browser.js"));function a(e){return e&&e.__esModule?e:{default:e}}var d=t.history=(0,s.default)(),c=(0,o.routerMiddleware)(d),i=(0,u.default)("redux"),l=(0,r.createStore)((0,r.combineReducers)({router:o.routerReducer}),(0,r.applyMiddleware)(c,function(e){return function(t){return function(n){i("action",n);var r=t(n);return i("next state",e.getState()),r}}}));t.default=l},0:function(e,t,n){e.exports=n("./src/index.js")}});