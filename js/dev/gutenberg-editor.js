/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/src/gutenberg-editor.js":
/*!************************************!*\
  !*** ./js/src/gutenberg-editor.js ***!
  \************************************/
/***/ (() => {

eval("/* eslint-disable no-undef */\n// Declare the blocks you'd like to style.\nwp.blocks.registerBlockStyle('core/paragraph', {\n  name: 'boxed',\n  label: 'Laatikko'\n});\n\n// Deregister some unused embed blocks\nwp.domReady(() => {\n  wp.blocks.unregisterBlockVariation('core/embed', 'amazon-kindle');\n  wp.blocks.unregisterBlockVariation('core/embed', 'bluesky');\n  wp.blocks.unregisterBlockVariation('core/embed', 'pinterest');\n  wp.blocks.unregisterBlockVariation('core/embed', 'crowdsignal');\n  wp.blocks.unregisterBlockVariation('core/embed', 'soundcloud');\n  wp.blocks.unregisterBlockVariation('core/embed', 'twitter');\n  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress');\n  wp.blocks.unregisterBlockVariation('core/embed', 'spotify');\n  wp.blocks.unregisterBlockVariation('core/embed', 'flickr');\n  wp.blocks.unregisterBlockVariation('core/embed', 'animoto');\n  wp.blocks.unregisterBlockVariation('core/embed', 'cloudup');\n  wp.blocks.unregisterBlockVariation('core/embed', 'vimeo');\n  wp.blocks.unregisterBlockVariation('core/embed', 'youtube');\n  wp.blocks.unregisterBlockVariation('core/embed', 'dailymotion');\n  wp.blocks.unregisterBlockVariation('core/embed', 'imgur');\n  wp.blocks.unregisterBlockVariation('core/embed', 'issuu');\n  wp.blocks.unregisterBlockVariation('core/embed', 'kickstarter');\n  wp.blocks.unregisterBlockVariation('core/embed', 'mixcloud');\n  wp.blocks.unregisterBlockVariation('core/embed', 'pocket-casts');\n  wp.blocks.unregisterBlockVariation('core/embed', 'reddit');\n  wp.blocks.unregisterBlockVariation('core/embed', 'reverbnation');\n  wp.blocks.unregisterBlockVariation('core/embed', 'screencast');\n  wp.blocks.unregisterBlockVariation('core/embed', 'scribd');\n  wp.blocks.unregisterBlockVariation('core/embed', 'smugmug');\n  wp.blocks.unregisterBlockVariation('core/embed', 'speaker-deck');\n  wp.blocks.unregisterBlockVariation('core/embed', 'tumblr');\n  wp.blocks.unregisterBlockVariation('core/embed', 'tiktok');\n  wp.blocks.unregisterBlockVariation('core/embed', 'ted');\n  wp.blocks.unregisterBlockVariation('core/embed', 'videopress');\n  wp.blocks.unregisterBlockVariation('core/embed', 'wolfram-cloud');\n  wp.blocks.unregisterBlockVariation('core/embed', 'wordpress-tv');\n  wp.blocks.unregisterBlockVariation('core/embed', 'facebook');\n});\n\n// When document is ready as in when blocks are fully loaded\nwindow.addEventListener('load', () => {\n  /**\n   * initializeBlock\n   *\n   * Adds custom JavaScript to the block HTML.\n   *\n   * @date    15/4/19\n   * @since   1.0.0\n   *\n   * @param   object $block The block jQuery element.\n   * @param   object attributes The block attributes (only available when editing).\n   * @return  void\n   *\n   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/\n   */\n  // eslint-disable-next-line\n  var initializeBlock = function initializeBlock($block) {\n    // Your scripts here\n  };\n\n  // Initialize dynamic block preview (editor).\n  if (window.acf) {\n    window.acf.addAction('render_block_preview', initializeBlock);\n  }\n});\n\n//# sourceURL=webpack://air-light/./js/src/gutenberg-editor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/src/gutenberg-editor.js"]();
/******/ 	
/******/ })()
;