/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/src/gutenberg-editor.js":
/*!************************************!*\
  !*** ./js/src/gutenberg-editor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gutenberg_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gutenberg-helpers */ \"./js/src/modules/gutenberg-helpers.js\");\n/**\n * @Author: Roni Laukkarinen\n * @Date:   2022-02-11 15:38:14\n * @Last Modified by:   Roni Laukkarinen\n * @Last Modified time: 2022-05-12 17:49:01\n */\n\n/* eslint-disable camelcase, prefer-arrow-callback, no-unused-vars, no-undef, vars-on-top, no-var, func-names, max-len, import/no-unresolved */\n // Declare the block you'd like to style.\n\nwp.blocks.registerBlockStyle('core/paragraph', {\n  name: 'boxed',\n  label: 'Laatikko'\n});\nvar air_light_LazyLoad = new LazyLoad({\n  callback_loaded: _modules_gutenberg_helpers__WEBPACK_IMPORTED_MODULE_0__.setLazyLoadedFigureWidth\n}); // When document is ready as in when blocks are fully loaded\n\nwindow.addEventListener('load', function () {\n  /**\n   * initializeBlock\n   *\n   * Adds custom JavaScript to the block HTML.\n   *\n   * @date    15/4/19\n   * @since   1.0.0\n   *\n   * @param   object $block The block jQuery element.\n   * @param   object attributes The block attributes (only available when editing).\n   * @return  void\n   *\n   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/\n   */\n  var initializeBlock = function initializeBlock($block) {\n    air_light_LazyLoad.update();\n  }; // Initialize each block on page load (front end).\n\n\n  air_light_LazyLoad.update(); // Set non-lazyloaded figures width so captions in aligned images will be same width as image\n\n  var figures = document.querySelectorAll('figure');\n  (0,_modules_gutenberg_helpers__WEBPACK_IMPORTED_MODULE_0__.setFigureWidths)(figures); // Initialize dynamic block preview (editor).\n\n  if (window.acf) {\n    window.acf.addAction('render_block_preview', initializeBlock);\n  }\n});\n\n//# sourceURL=webpack://air-light/./js/src/gutenberg-editor.js?");

/***/ }),

/***/ "./js/src/modules/gutenberg-helpers.js":
/*!*********************************************!*\
  !*** ./js/src/modules/gutenberg-helpers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setFigureWidths\": () => (/* binding */ setFigureWidths),\n/* harmony export */   \"setLazyLoadedFigureWidth\": () => (/* binding */ setLazyLoadedFigureWidth)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\n\nvar setFigureWidth = function setFigureWidth(figure) {\n  var img = figure.querySelector('img');\n\n  if (!img || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(img) !== 'object' || !('clientWidth' in img)) {\n    return;\n  }\n\n  figure.style.setProperty('--width-child-img', \"\".concat(img.clientWidth, \"px\"));\n};\n\nvar setFigureWidths = function setFigureWidths(figures) {\n  // Gutenberg magic for alignright and alignleft images\n  figures.forEach(function (figure) {\n    setFigureWidth(figure);\n  });\n};\n\nvar setLazyLoadedFigureWidth = function setLazyLoadedFigureWidth(image) {\n  if (image.parentElement.tagName === 'figure') {\n    setFigureWidth(image.parentElement);\n  }\n};\n\n\n\n//# sourceURL=webpack://air-light/./js/src/modules/gutenberg-helpers.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://air-light/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/src/gutenberg-editor.js");
/******/ 	
/******/ })()
;