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
      return res === false ? {} : newRequire(res);
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
})({"hCSrQ":[function(require,module,exports,__globalThis) {
/* eslint-disable no-undef */ // Declare the blocks you'd like to style.
wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'boxed',
    label: 'Laatikko'
});
// Deregister some unused embed blocks
wp.domReady(()=>{
    wp.blocks.unregisterBlockVariation('core/embed', 'amazon-kindle');
    wp.blocks.unregisterBlockVariation('core/embed', 'bluesky');
    wp.blocks.unregisterBlockVariation('core/embed', 'pinterest');
    wp.blocks.unregisterBlockVariation('core/embed', 'crowdsignal');
    wp.blocks.unregisterBlockVariation('core/embed', 'soundcloud');
    wp.blocks.unregisterBlockVariation('core/embed', 'twitter');
    wp.blocks.unregisterBlockVariation('core/embed', 'wordpress');
    wp.blocks.unregisterBlockVariation('core/embed', 'spotify');
    wp.blocks.unregisterBlockVariation('core/embed', 'flickr');
    wp.blocks.unregisterBlockVariation('core/embed', 'animoto');
    wp.blocks.unregisterBlockVariation('core/embed', 'cloudup');
    wp.blocks.unregisterBlockVariation('core/embed', 'vimeo');
    wp.blocks.unregisterBlockVariation('core/embed', 'youtube');
    wp.blocks.unregisterBlockVariation('core/embed', 'dailymotion');
    wp.blocks.unregisterBlockVariation('core/embed', 'imgur');
    wp.blocks.unregisterBlockVariation('core/embed', 'issuu');
    wp.blocks.unregisterBlockVariation('core/embed', 'kickstarter');
    wp.blocks.unregisterBlockVariation('core/embed', 'mixcloud');
    wp.blocks.unregisterBlockVariation('core/embed', 'pocket-casts');
    wp.blocks.unregisterBlockVariation('core/embed', 'reddit');
    wp.blocks.unregisterBlockVariation('core/embed', 'reverbnation');
    wp.blocks.unregisterBlockVariation('core/embed', 'screencast');
    wp.blocks.unregisterBlockVariation('core/embed', 'scribd');
    wp.blocks.unregisterBlockVariation('core/embed', 'smugmug');
    wp.blocks.unregisterBlockVariation('core/embed', 'speaker-deck');
    wp.blocks.unregisterBlockVariation('core/embed', 'tumblr');
    wp.blocks.unregisterBlockVariation('core/embed', 'tiktok');
    wp.blocks.unregisterBlockVariation('core/embed', 'ted');
    wp.blocks.unregisterBlockVariation('core/embed', 'videopress');
    wp.blocks.unregisterBlockVariation('core/embed', 'wolfram-cloud');
    wp.blocks.unregisterBlockVariation('core/embed', 'wordpress-tv');
    wp.blocks.unregisterBlockVariation('core/embed', 'facebook');
});
// When document is ready as in when blocks are fully loaded
window.addEventListener('load', ()=>{
    /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   *
   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/
   */ // eslint-disable-next-line
    const initializeBlock = function($block) {
    // Your scripts here
    };
    // Initialize dynamic block preview (editor).
    if (window.acf) window.acf.addAction('render_block_preview', initializeBlock);
});

},{}]},["hCSrQ"], "hCSrQ", "parcelRequire1d92", {})

