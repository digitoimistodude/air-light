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
})({"7X1vR":[function(require,module,exports,__globalThis) {
/* eslint-disable no-undef */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _blockVariations = require("./block-variations");
var _blockVariationsDefault = parcelHelpers.interopDefault(_blockVariations);
// Register block variations with Dude defaults
wp.domReady(()=>{
    (0, _blockVariationsDefault.default)();
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

},{"./block-variations":"8mDxo","@parcel/transformer-js/src/esmodule-helpers.js":"eF9qW"}],"8mDxo":[function(require,module,exports,__globalThis) {
/**
 * Block variations index
 *
 * Registers all block variations with Dude defaults.
 * Add new variations by importing them and adding to the variations array.
 *
 * @package air-light
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mediaText = require("./media-text");
var _mediaTextDefault = parcelHelpers.interopDefault(_mediaText);
// Add all block variations here
const variations = [
    (0, _mediaTextDefault.default)
];
/**
 * Register all block variations
 */ const registerBlockVariations = ()=>{
    variations.forEach(({ blockName, variation })=>{
        wp.blocks.registerBlockVariation(blockName, variation);
    });
};
exports.default = registerBlockVariations;

},{"./media-text":"7YL65","@parcel/transformer-js/src/esmodule-helpers.js":"eF9qW"}],"7YL65":[function(require,module,exports,__globalThis) {
/**
 * Media & Text block variation with Dude defaults
 *
 * Features:
 * - Image works as cover (object-fit: cover)
 * - Media width control hidden
 * - Adjustable padding (No padding, M padding, L padding)
 *
 * @package air-light
 */ /* global airLightBlockEditor, wp */ // Internationalization utilities
// @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const { __ } = wp.i18n;
// Placeholder image
const placeholderImage = 'https://airwptheme.com/placeholder.png';
const mediaTextVariation = {
    blockName: 'core/media-text',
    variation: {
        name: 'dude-media-text',
        title: __('Media & Text', 'air-light'),
        description: __('Media & Text block with Dude defaults', 'air-light'),
        isDefault: true,
        attributes: {
            align: 'wide',
            mediaPosition: 'left',
            verticalAlignment: 'center',
            mediaType: 'image',
            mediaUrl: placeholderImage,
            imageFill: true,
            mediaWidth: 50,
            style: {
                spacing: {
                    padding: {
                        top: 'var:preset|spacing|30',
                        bottom: 'var:preset|spacing|30'
                    },
                    margin: {
                        top: 'var:preset|spacing|none',
                        bottom: 'var:preset|spacing|none'
                    }
                }
            }
        },
        innerBlocks: [
            [
                'core/heading',
                {
                    level: 2,
                    content: __('Add a descriptive heading for your content here', 'air-light')
                }
            ],
            [
                'core/paragraph',
                {
                    content: __('This is the media-text "Text part". You can write a paragraph here that tells more about the topic and helps the reader understand what this section is about. You can use multiple paragraphs if needed.', 'air-light')
                }
            ],
            [
                'core/buttons',
                {},
                [
                    [
                        'core/button',
                        {
                            text: __('Call to action', 'air-light')
                        }
                    ]
                ]
            ]
        ],
        scope: [
            'inserter'
        ]
    }
};
// Hide some controls by targeting the ToolsPanelItem that contains them.
// WordPress doesn't provide a native way to disable these controls in variations,
// so we inject CSS to hide them from the block inspector when media-text is selected.
//
// Implementation details from WordPress Gutenberg source code:
// - The control is a RangeControl component wrapped in a ToolsPanelItem
// - Located in InspectorControls of the MediaTextEdit component
// - Label: "Media width"
//
// @link https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/media-text/edit.js
// @link https://developer.wordpress.org/block-editor/reference-guides/components/tools-panel-item/
// @link https://developer.wordpress.org/block-editor/reference-guides/components/range-control/
wp.domReady(()=>{
    // Add global styles for controls that should always be hidden
    const globalStyle = document.createElement('style');
    globalStyle.id = 'air-light-media-text-global';
    globalStyle.textContent = `
    /* Hide resizable box handle on the block itself */
    .wp-block-media-text .components-resizable-box__handle {
      display: none !important;
    }

    /* Hide alignment controls for media-text block */
    .wp-block-media-text.is-selected .block-editor-block-toolbar .block-editor-block-alignment-control {
      display: none !important;
    }
  `;
    document.head.appendChild(globalStyle);
    // Add conditional styles that are toggled when media-text is selected
    const conditionalStyle = document.createElement('style');
    conditionalStyle.id = 'air-light-media-text-conditional';
    document.head.appendChild(conditionalStyle);
    // Function to hide/show sidebar controls based on selected block
    function toggleMediaTextControls() {
        const selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();
        const isMediaText = selectedBlock && selectedBlock.name === 'core/media-text';
        if (isMediaText) {
            conditionalStyle.textContent = `
        /* Hide typography panel for media-text block only */
        .typography-block-support-panel {
          display: none !important;
        }

        /* Hide gradient controls */
        .color-block-support-panel .components-circular-option-picker__swatches,
        .color-block-support-panel button[aria-label*="Gradient"],
        .color-block-support-panel button[aria-label*="gradient"],
        .color-block-support-panel .components-tab-panel__tabs button[id$="-gradient"] {
          display: none !important;
        }
      `;
            // Hide media width control by finding label with specific text
            setTimeout(()=>{
                const labels = document.querySelectorAll('.components-base-control__label');
                labels.forEach((label)=>{
                    if (label.textContent === 'Median leveys' || label.textContent === 'Media width') {
                        const toolsPanelItem = label.closest('.components-tools-panel-item');
                        if (toolsPanelItem) toolsPanelItem.style.display = 'none';
                    }
                });
            }, 100);
        } else conditionalStyle.textContent = '';
    }
    // Listen for block selection changes
    wp.data.subscribe(toggleMediaTextControls);
});
exports.default = mediaTextVariation;

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

},{}]},["7X1vR"], "7X1vR", "parcelRequire1d92", {})

