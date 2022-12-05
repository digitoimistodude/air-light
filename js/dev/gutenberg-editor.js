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

eval("/**\n * @Author: Roni Laukkarinen\n * @Date:   2022-02-11 15:38:14\n * @Last Modified by:   Roni Laukkarinen\n * @Last Modified time: 2022-09-29 13:53:14\n */\n// Declare the blocks you'd like to style.\n// eslint-disable-next-line\nwp.blocks.registerBlockStyle('core/paragraph', {\n  name: 'boxed',\n  label: 'Laatikko'\n});\n\n// When document is ready as in when blocks are fully loaded\nwindow.addEventListener('load', function () {\n  /**\n   * initializeBlock\n   *\n   * Adds custom JavaScript to the block HTML.\n   *\n   * @date    15/4/19\n   * @since   1.0.0\n   *\n   * @param   object $block The block jQuery element.\n   * @param   object attributes The block attributes (only available when editing).\n   * @return  void\n   *\n   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/\n   */\n  // eslint-disable-next-line\n  var initializeBlock = function initializeBlock($block) {\n    // Your scripts here\n  };\n\n  // Initialize dynamic block preview (editor).\n  if (window.acf) {\n    window.acf.addAction('render_block_preview', initializeBlock);\n  }\n});\n\n//# sourceURL=webpack://air-light/./js/src/gutenberg-editor.js?");

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