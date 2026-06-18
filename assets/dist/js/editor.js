// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9jSLX":[function(require,module,exports,__globalThis) {
/* eslint-disable no-undef */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _blockVariations = require("./block-variations");
var _blockVariationsDefault = parcelHelpers.interopDefault(_blockVariations);
var _disableEmbeds = require("./editor/disable-embeds");
var _disableEmbedsDefault = parcelHelpers.interopDefault(_disableEmbeds);
// Register block variations with Dude defaults
wp.domReady(()=>{
    (0, _blockVariationsDefault.default)();
});
// Disable unused embed block variations
wp.domReady(()=>{
    (0, _disableEmbedsDefault.default)();
});

},{"./block-variations":"8mDxo","./editor/disable-embeds":"f0IKd","@parcel/transformer-js/src/esmodule-helpers.js":"eF9qW"}],"8mDxo":[function(require,module,exports,__globalThis) {
/**
 * Block variations index
 *
 * Registers all block variations with Dude defaults.
 * Add new variations by importing them and adding to the variations array.
 *
 * @package air-light
 */ // import mediaTextVariation from './media-text';
// Add all block variations here
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const variations = [];
/**
 * Register all block variations
 */ const registerBlockVariations = ()=>{
    variations.forEach(({ blockName, variation })=>{
        wp.blocks.registerBlockVariation(blockName, variation);
    });
};
exports.default = registerBlockVariations;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eF9qW"}],"eF9qW":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f0IKd":[function(require,module,exports,__globalThis) {
/**
 * Disable unused embed block variations
 *
 * WordPress includes many embed providers by default.
 * This module unregisters the ones we don't typically use
 * to keep the block inserter cleaner.
 *
 * @package air-light
 */ /* global wp */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const disableEmbeds = ()=>{
    const disabledEmbeds = [
        'amazon-kindle',
        'animoto',
        'bluesky',
        'cloudup',
        'crowdsignal',
        'dailymotion',
        'facebook',
        'flickr',
        'imgur',
        'issuu',
        'kickstarter',
        'mixcloud',
        'pinterest',
        'pocket-casts',
        'reddit',
        'reverbnation',
        'screencast',
        'scribd',
        'smugmug',
        'soundcloud',
        'speaker-deck',
        'spotify',
        'ted',
        'tiktok',
        'tumblr',
        'twitter',
        'videopress',
        'vimeo',
        'wolfram-cloud',
        'wordpress',
        'wordpress-tv',
        'youtube'
    ];
    disabledEmbeds.forEach((embed)=>{
        wp.blocks.unregisterBlockVariation('core/embed', embed);
    });
};
exports.default = disableEmbeds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eF9qW"}]},["9jSLX"], "9jSLX", "parcelRequire1d92", {})

