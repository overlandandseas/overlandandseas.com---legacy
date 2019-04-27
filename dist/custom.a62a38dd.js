// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/DocumentElementDecoder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ded;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ded(array) {
  var _element$classList;

  array[0] = array[0].split(' ');

  var _array = _toArray(array),
      _array$ = _toArray(_array[0]),
      tagName = _array$[0],
      classes = _array$.slice(1),
      args = _array.slice(1);

  var element = document.createElement(tagName);

  (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes));

  args.forEach(function (value) {
    ;
    [function () {
      return element.appendChild(ded(value));
    }, function () {
      return element.innerHTML += value;
    }, function () {
      Object.keys(value).forEach(function (key) {
        if (key === 'listeners') Object.keys(value.listeners).forEach(function (v) {
          return element.addEventListener(v, value.listeners[v]);
        });else if (key === 'with') value.with(element);else element.setAttribute(key, value[key]);
      });
    }][getType(value)]();
  });
  return element;
}

function getType(thing) {
  try {
    if (Array.isArray(thing)) return 0;
    if (typeof thing === 'string') return 1;
    if (thing.constructor.name === 'Object') return 2;else throw true;
  } catch (e) {
    throw new Error('Arguments can only be array, string, or object literal');
  }
}
},{}],"js/content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writings = exports.projects = void 0;
var projects = [{
  title: 'Electron FTP app',
  description: 'Proof-of-concept app showing how to create an FTP in electron',
  link: 'https://github.com/overlandandseas/electron-ftp',
  date: new Date('11/10/2016')
}, {
  title: 'Micro lightbox',
  description: 'Very small function to create jquery lightbox using tachyons',
  link: 'https://gist.github.com/overlandandseas/8b2a166f0134334d73bc6632ae482af9',
  date: new Date('8/3/2017')
}, {
  title: 'Minimal Jekyll Bootstrap',
  description: 'The most minimal assets needed to run a Jekyll app using bootstrap',
  link: 'https://github.com/overlandandseas/minimaljekyllbootstrap',
  date: new Date('2/20/2016')
}, {
  title: 'is-really-empty',
  link: 'https://github.com/overlandandseas/is-really-empty',
  description: 'Micro-library to tell if objects or variables are empty in JS',
  date: new Date('5/9/2018')
}, {
  title: 'Get Average Color',
  link: 'https://github.com/overlandandseas/get-average-color',
  description: 'Website to get the average color of an image from a url',
  date: new Date('8/15/2017')
}, {
  title: 'Killing Floor 2 Music Tool',
  link: 'https://github.com/overlandandseas/killingfloor2musictool',
  description: 'Electron App used to change the ingame music of KF2',
  date: new Date('2/25/2016')
}, {
  title: 'ios App Sorter',
  description: 'Tool used to sort iOS apps based on color',
  date: new Date('8/16/2017'),
  link: 'https://github.com/overlandandseas/app-sort'
}, {
  title: '#!++',
  description: 'Debain 9 based linux distro, originally based on Crunchbang (#!)',
  link: 'https://crunchbangplusplus.org',
  date: new Date('6/21/2017')
}];
exports.projects = projects;
var writings = [{
  title: 'Es6 Modlues in browser',
  description: 'Gist explaining how to use es6 modules in the browser',
  link: 'https://gist.github.com/overlandandseas/ad0ac1496865e6f6c390f7928be900c0',
  date: new Date('12/29/2017')
}, {
  title: 'Music in 2017',
  description: 'Writeup on what music I discovered and was listening to in 2017',
  date: new Date('12/1/2017'),
  link: '/archive/music-in-2017.html'
}];
exports.writings = writings;
},{}],"js/custom.js":[function(require,module,exports) {
"use strict";

var _DocumentElementDecoder = _interopRequireDefault(require("./DocumentElementDecoder.js"));

var _content = require("./content.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// javascript
var listOfProjects = _content.projects.sort(function (a, b) {
  return b.date.getTime() - a.date.getTime();
}).reduce(function (acc, item) {
  acc.appendChild((0, _DocumentElementDecoder.default)(['li pa2 black-40', ['a b black-50 link hover-light-red underline', {
    href: item.link
  }, item.title], ": ".concat(item.description), ['p pa0 ma0 f6 i', item.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })]]));
  return acc;
}, (0, _DocumentElementDecoder.default)(['ul list pa0 f5 code']));

document.getElementById('projects').appendChild(listOfProjects);

var listOfWritings = _content.writings.sort(function (a, b) {
  return b.date.getTime() - a.date.getTime();
}).reduce(function (acc, item) {
  return acc.appendChild((0, _DocumentElementDecoder.default)(['li pa2 black-40', ['a b black-50 link hover-dark-blue underline', {
    href: item.link
  }, item.title], // `: ${item.description}`,
  ['p pa0 ma0 f6 i', item.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })]])), acc;
}, (0, _DocumentElementDecoder.default)(['ul list pa0 f5 code']));

document.getElementById('tuts').appendChild(listOfWritings);
},{"./DocumentElementDecoder.js":"js/DocumentElementDecoder.js","./content.js":"js/content.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64702" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/custom.js"], null)
//# sourceMappingURL=/custom.a62a38dd.js.map