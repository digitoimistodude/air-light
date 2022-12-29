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

/***/ "./js/src/front-end.js":
/*!*****************************!*\
  !*** ./js/src/front-end.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var reframe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reframe.js */ \"./node_modules/reframe.js/dist/reframe.es.js\");\n/* harmony import */ var _modules_external_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/external-link */ \"./js/src/modules/external-link.js\");\n/* harmony import */ var _modules_anchors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/anchors */ \"./js/src/modules/anchors.js\");\n/* harmony import */ var _modules_top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/top */ \"./js/src/modules/top.js\");\n/* harmony import */ var _modules_a11y_skip_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/a11y-skip-link */ \"./js/src/modules/a11y-skip-link.js\");\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navigation */ \"./js/src/modules/navigation.js\");\n/* eslint-disable max-len, no-param-reassign, no-unused-vars */\n/**\n * Air theme JavaScript.\n */\n\n// Import modules\n\n\n\n\n\n\n\n// Define Javascript is active by changing the body class\ndocument.body.classList.remove('no-js');\ndocument.body.classList.add('js');\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_anchors__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_top__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_external_link__WEBPACK_IMPORTED_MODULE_1__.styleExternalLinks)();\n  (0,_modules_external_link__WEBPACK_IMPORTED_MODULE_1__.initExternalLinkLabels)();\n  (0,_modules_a11y_skip_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  // Init navigation\n  (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  // Fit video embeds to container\n  (0,reframe_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.wp-has-aspect-ratio iframe');\n});\n\n//# sourceURL=webpack://air-light/./js/src/front-end.js?");

/***/ }),

/***/ "./js/src/modules/a11y-skip-link.js":
/*!******************************************!*\
  !*** ./js/src/modules/a11y-skip-link.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ \"./node_modules/moveto/dist/moveTo.js\");\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @Author: Roni Laukkarinen\n * @Date:   2022-05-12 17:32:43\n * @Last Modified by:   Roni Laukkarinen\n * @Last Modified time: 2022-10-12 15:06:50\n */\n\nvar initA11ySkipLink = function initA11ySkipLink() {\n  // Go through all the headings of the page and select the first one\n  var a11ySkipLinkTarget = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];\n  var a11ySkipLink = document.querySelectorAll('.skip-link')[0];\n\n  // Register trigger element\n  // eslint-disable-next-line no-unused-vars, no-restricted-globals\n  var moveTo = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())();\n\n  // When clicked, move focus to the target element\n\n  if (a11ySkipLink) {\n    a11ySkipLink.addEventListener('click', function () {\n      a11ySkipLinkTarget.setAttribute('tabindex', '-1');\n      a11ySkipLinkTarget.focus();\n      moveTo.move(a11ySkipLinkTarget);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initA11ySkipLink);\n\n//# sourceURL=webpack://air-light/./js/src/modules/a11y-skip-link.js?");

/***/ }),

/***/ "./js/src/modules/anchors.js":
/*!***********************************!*\
  !*** ./js/src/modules/anchors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ \"./node_modules/moveto/dist/moveTo.js\");\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable no-param-reassign, no-undef */\n/**\n * @Author: Roni Laukkarinen\n * @Date:   2022-05-07 12:20:13\n * @Last Modified by:   Roni Laukkarinen\n * @Last Modified time: 2022-09-28 14:33:09\n */\n\nvar initAnchors = function initAnchors() {\n  // General anchors used in links with class \"js-trigger\"\n  var easeFunctions = {\n    easeInQuad: function easeInQuad(t, b, c, d) {\n      t /= d;\n      return c * t * t + b;\n    },\n    easeOutQuad: function easeOutQuad(t, b, c, d) {\n      t /= d;\n      return -c * t * (t - 2) + b;\n    }\n  };\n  var moveTo = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())({\n    ease: 'easeInQuad'\n  }, easeFunctions);\n  var triggers = document.getElementsByClassName('js-trigger');\n  // eslint-disable-next-line no-plusplus\n  for (var i = 0; i < triggers.length; i++) {\n    moveTo.registerTrigger(triggers[i]);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnchors);\n\n//# sourceURL=webpack://air-light/./js/src/modules/anchors.js?");

/***/ }),

/***/ "./js/src/modules/external-link.js":
/*!*****************************************!*\
  !*** ./js/src/modules/external-link.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getChildAltText\": () => (/* binding */ getChildAltText),\n/* harmony export */   \"initExternalLinkLabels\": () => (/* binding */ initExternalLinkLabels),\n/* harmony export */   \"styleExternalLinks\": () => (/* binding */ styleExternalLinks)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization */ \"./js/src/modules/localization.js\");\n\n/* eslint-disable no-param-reassign */\n/**\n * @Author: Roni Laukkarinen\n * @Date:   2021-09-01 11:55:37\n * @Last Modified by:   Roni Laukkarinen\n * @Last Modified time: 2022-10-31 16:23:45\n */\n/**\n * Style external links\n */\n\n\nfunction isLinkExternal(link, localDomains) {\n  // Empty links are not external\n  if (!link.length) {\n    return false;\n  }\n  var exceptions = ['#', 'tel:', 'mailto:', '/'];\n\n  // Check if the url starts with some of the exceptions\n  var isException = exceptions.some(function (exception) {\n    var compare = new RegExp(\"^\".concat(exception), 'g');\n    return compare.test(link);\n  });\n  if (isException) {\n    return false;\n  }\n  var linkUrl;\n  try {\n    linkUrl = new URL(link);\n  } catch (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"Invalid URL: \".concat(link));\n    return false;\n  }\n  // Check if host is one of the local domains\n  return !localDomains.some(function (domain) {\n    return linkUrl.host === domain;\n  });\n}\n\n/**\n  * Try to get image alt texts from inside a link\n  * to use in aria-label, when only elements inside\n  * of link are images\n  * @param {*} link DOM link element\n  * @returns string\n  */\nfunction getChildAltText(link) {\n  var children = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(link.children);\n  if (children.length === 0) {\n    return '';\n  }\n  var childImgs = children.filter(function (child) {\n    return child.tagName.toLowerCase() === 'img';\n  });\n\n  // If there are other elements than img elements, no need to add aria-label\n  if (children.length !== childImgs.length) {\n    return '';\n  }\n\n  // Find alt texts and add to array\n  var altTexts = childImgs.filter(function (child) {\n    return child.alt && child.alt !== '';\n  }).map(function (child) {\n    return child.alt;\n  });\n\n  // If there is no alt texts,\n  if (!altTexts.length) {\n    return '';\n  }\n  return altTexts.join(', ');\n}\nfunction styleExternalLinks() {\n  var localDomains = [window.location.host];\n  if (typeof window.air_light_externalLinkDomains !== 'undefined') {\n    localDomains = localDomains.concat(window.air_light_externalLinkDomains);\n  }\n  var links = document.querySelectorAll('a');\n  var externalLinks = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(links).filter(function (link) {\n    return isLinkExternal(link.href, localDomains);\n  });\n\n  // eslint-disable-next-line consistent-return\n  externalLinks.forEach(function (externalLink) {\n    // Abort mission if there is only img element inside of link\n    if (externalLink.childElementCount === 1 && externalLink.children[0].tagName.toLowerCase() === 'img') {\n      return false;\n    }\n    if (!externalLink.classList.contains('no-external-link-label')) {\n      var textContent = externalLink.textContent.trim().length ? externalLink.textContent.trim() : getChildAltText(externalLink);\n      var ariaLabel = externalLink.target === '_blank' ? \"\".concat(textContent, \": \").concat((0,_localization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('external_link'), \", \").concat((0,_localization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('target_blank')) : \"\".concat(textContent, \": \").concat((0,_localization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('external_link'));\n      externalLink.setAttribute('aria-label', ariaLabel);\n    }\n\n    // Arrow icon won't be added if one of these classes is defined for the link\n    var classExceptions = ['no-external-link-indicator', 'global-link', 'button'];\n    if (!classExceptions.some(function (className) {\n      return externalLink.classList.contains(className);\n    })) {\n      // Add SVG arrow icon\n      externalLink.insertAdjacentHTML('beforeend', '<svg class=\"external-link-icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 9 9\"><path d=\"M4.499 1.497h4v4m0-4l-7 7\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>');\n    }\n  });\n}\nfunction initExternalLinkLabels() {\n  // Add aria-labels to links without text or aria-labels and contain image with alt text\n  var links = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelectorAll('a'));\n  // eslint-disable-next-line no-unused-vars\n  var linksWithImgChildren = links.forEach(function (link) {\n    // If link already has text content or an aria label no need to add aria-label\n    if (link.textContent.trim() !== '' || link.ariaLabel) {\n      return;\n    }\n    var ariaLabel = getChildAltText(link);\n    if (ariaLabel !== '') {\n      link.ariaLabel = ariaLabel;\n    }\n  });\n}\n\n//# sourceURL=webpack://air-light/./js/src/modules/external-link.js?");

/***/ }),

/***/ "./js/src/modules/localization.js":
/*!****************************************!*\
  !*** ./js/src/modules/localization.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocalization)\n/* harmony export */ });\nfunction getLocalization(stringKey) {\n  if (typeof window.air_light_screenReaderText === 'undefined' || typeof window.air_light_screenReaderText[stringKey] === 'undefined') {\n    // eslint-disable-next-line no-console\n    console.error(\"Missing translation for \".concat(stringKey));\n    return '';\n  }\n  return window.air_light_screenReaderText[stringKey];\n}\n\n//# sourceURL=webpack://air-light/./js/src/modules/localization.js?");

/***/ }),

/***/ "./js/src/modules/navigation.js":
/*!**************************************!*\
  !*** ./js/src/modules/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Navigation.js module\n * The original, accessible navigation module for Air-light\n *\n * @Author: Roni Laukkarinen\n * @Date:   2022-06-30 16:24:47\n * @Last Modified by:   Roni Laukkarinen\n * @Last Modified time: 2022-12-29 14:56:25\n */\n\n// Check if an element is out of the viewport\nvar isOutOfViewport = function isOutOfViewport(elem) {\n  // Get element's bounding\n  var bounding = elem.getBoundingClientRect();\n\n  // Check if it's out of the viewport on each side\n  var out = {};\n  out.top = bounding.top < 0;\n  out.left = bounding.left < 0;\n  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);\n  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);\n  out.any = out.top || out.left || out.bottom || out.right;\n  return out;\n};\n\n// Dropdown menu function\nfunction dropdownMenu() {\n  // Define menu items for items\n  var menuItems = document.querySelectorAll('.menu-item');\n\n  // Optional timeout\n  var hoverIntentTimeout = 0;\n  menuItems.forEach(function (li) {\n    // eslint-disable-next-line func-names\n    li.addEventListener('mouseover', function () {\n      var _this = this;\n      // If has .removing-hover class then don't add hover-intent class\n      if (li.classList.contains('removing-hover')) {\n        return;\n      }\n      this.classList.add('hover-intent');\n      this.parentNode.classList.add('hover-intent');\n      document.addEventListener('keydown', function (keydownMouseoverEvent) {\n        // Close navigation on Escape while hovering the navigation\n        if (keydownMouseoverEvent.key === 'Escape') {\n          li.classList.remove('hover-intent');\n          li.parentNode.classList.remove('hover-intent');\n          li.parentNode.parentNode.classList.remove('hover-intent');\n\n          // Add class removing-hover to prevent the menu from opening again when moving the mouse\n          li.classList.add('removing-hover');\n          li.parentNode.classList.add('removing-hover');\n        }\n      });\n\n      // Remove removing-hover class after a while to re-initialize the menu\n      setTimeout(function () {\n        _this.classList.remove('removing-hover');\n        _this.parentNode.classList.remove('removing-hover');\n      }, 500);\n    });\n\n    // eslint-disable-next-line func-names\n    li.addEventListener('mouseleave', function () {\n      var _this2 = this;\n      // Remove hover-intent class on mouse leave\n      setTimeout(function () {\n        _this2.classList.remove('hover-intent');\n        _this2.parentNode.classList.remove('hover-intent');\n      }, hoverIntentTimeout);\n\n      // Remove removing-hover class after a while to re-initialize the menu\n      setTimeout(function () {\n        _this2.classList.remove('removing-hover');\n        _this2.parentNode.classList.remove('removing-hover');\n      }, 500);\n    });\n  });\n}\n\n// Accessible keyboard navigation for dropdown menus\nfunction dropdownMenuKeyboardNavigation() {\n  var menuItems = document.querySelectorAll('.menu-item');\n  menuItems.forEach(function (li) {\n    // eslint-disable-next-line func-names\n    li.addEventListener('keydown', function (e) {\n      var _this3 = this;\n      // Open navigation on Enter\n      if (e.key === 'Enter') {\n        this.classList.add('hover-intent');\n        this.parentNode.classList.add('hover-intent');\n      }\n\n      // Close navigation on Escape if we are focused on the links under sub-menu\n      if (e.key === 'Escape' && this.querySelector('.sub-menu')) {\n        this.classList.remove('hover-intent');\n        this.parentNode.classList.remove('hover-intent');\n\n        // Add class removing-hover to prevent the menu from opening again when moving the mouse\n        this.classList.add('removing-hover');\n        this.parentNode.classList.add('removing-hover');\n\n        // Move focus back to the previous .dropdown-toggle <button>\n        this.querySelector('.dropdown-toggle').focus();\n\n        // Remove removing-hover class after a while to re-initialize the menu\n        setTimeout(function () {\n          _this3.classList.remove('removing-hover');\n          _this3.parentNode.classList.remove('removing-hover');\n        }, 500);\n      }\n    });\n  });\n}\nvar navDesktop = function navDesktop() {\n  // Define things\n  var html = document.getElementsByTagName('html')[0];\n  var body = document.getElementsByTagName('body')[0];\n  var menuWrapper = document.getElementById('main-navigation-wrapper');\n\n  // Dropdown menus\n  dropdownMenu();\n  dropdownMenuKeyboardNavigation();\n};\n\n// Export different navigation functions\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navDesktop);\n\n//# sourceURL=webpack://air-light/./js/src/modules/navigation.js?");

/***/ }),

/***/ "./js/src/modules/top.js":
/*!*******************************!*\
  !*** ./js/src/modules/top.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ \"./node_modules/moveto/dist/moveTo.js\");\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable max-len */\n/**\n * @Author: Roni Laukkarinen\n * @Date:   2022-05-07 12:20:13\n * @Last Modified by:   Roni Laukkarinen\n * @Last Modified time: 2022-10-06 22:53:19\n */\n\nvar backToTop = function backToTop() {\n  // Back to top button\n  var moveToTop = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())({\n    duration: 300,\n    easing: 'easeOutQuart'\n  });\n  var topButton = document.getElementById('top');\n  var focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n  function trackScroll() {\n    var scrolled = window.pageYOffset;\n    var scrollAmount = document.documentElement.clientHeight;\n    if (scrolled > scrollAmount) {\n      topButton.classList.add('is-visible');\n    }\n    if (scrolled < scrollAmount) {\n      topButton.classList.remove('is-visible');\n    }\n  }\n  if (topButton) {\n    topButton.addEventListener('click', function (event) {\n      // Don't add hash in the end of the url\n      event.preventDefault();\n\n      // Focus to the first focusable element on the page\n      moveToTop.move(focusableElements[0]);\n    });\n\n    // Focus too, if on keyboard\n    topButton.addEventListener('keydown', function () {\n      focusableElements[0].focus();\n    });\n  }\n  window.addEventListener('scroll', trackScroll);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);\n\n//# sourceURL=webpack://air-light/./js/src/modules/top.js?");

/***/ }),

/***/ "./node_modules/moveto/dist/moveTo.js":
/*!********************************************!*\
  !*** ./node_modules/moveto/dist/moveTo.js ***!
  \********************************************/
/***/ ((module) => {

eval("/*!\n * MoveTo - A lightweight scroll animation javascript library without any dependency.\n * Version 1.8.2 (28-06-2019 14:30)\n * Licensed under MIT\n * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>\n */\n\n\n\nvar MoveTo = function () {\n  /**\n   * Defaults\n   * @type {object}\n   */\n  var defaults = {\n    tolerance: 0,\n    duration: 800,\n    easing: 'easeOutQuart',\n    container: window,\n    callback: function callback() {}\n  };\n  /**\n   * easeOutQuart Easing Function\n   * @param  {number} t - current time\n   * @param  {number} b - start value\n   * @param  {number} c - change in value\n   * @param  {number} d - duration\n   * @return {number} - calculated value\n   */\n\n  function easeOutQuart(t, b, c, d) {\n    t /= d;\n    t--;\n    return -c * (t * t * t * t - 1) + b;\n  }\n  /**\n   * Merge two object\n   *\n   * @param  {object} obj1\n   * @param  {object} obj2\n   * @return {object} merged object\n   */\n\n\n  function mergeObject(obj1, obj2) {\n    var obj3 = {};\n    Object.keys(obj1).forEach(function (propertyName) {\n      obj3[propertyName] = obj1[propertyName];\n    });\n    Object.keys(obj2).forEach(function (propertyName) {\n      obj3[propertyName] = obj2[propertyName];\n    });\n    return obj3;\n  }\n\n  ;\n  /**\n   * Converts camel case to kebab case\n   * @param  {string} val the value to be converted\n   * @return {string} the converted value\n   */\n\n  function kebabCase(val) {\n    return val.replace(/([A-Z])/g, function ($1) {\n      return '-' + $1.toLowerCase();\n    });\n  }\n\n  ;\n  /**\n   * Count a number of item scrolled top\n   * @param  {Window|HTMLElement} container\n   * @return {number}\n   */\n\n  function countScrollTop(container) {\n    if (container instanceof HTMLElement) {\n      return container.scrollTop;\n    }\n\n    return container.pageYOffset;\n  }\n\n  ;\n  /**\n   * MoveTo Constructor\n   * @param {object} options Options\n   * @param {object} easeFunctions Custom ease functions\n   */\n\n  function MoveTo() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    this.options = mergeObject(defaults, options);\n    this.easeFunctions = mergeObject({\n      easeOutQuart: easeOutQuart\n    }, easeFunctions);\n  }\n  /**\n   * Register a dom element as trigger\n   * @param  {HTMLElement} dom Dom trigger element\n   * @param  {function} callback Callback function\n   * @return {function|void} unregister function\n   */\n\n\n  MoveTo.prototype.registerTrigger = function (dom, callback) {\n    var _this = this;\n\n    if (!dom) {\n      return;\n    }\n\n    var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled\n\n    var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;\n    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));\n\n    if (typeof callback === 'function') {\n      options.callback = callback;\n    }\n\n    var listener = function listener(e) {\n      e.preventDefault();\n\n      _this.move(target, options);\n    };\n\n    dom.addEventListener('click', listener, false);\n    return function () {\n      return dom.removeEventListener('click', listener, false);\n    };\n  };\n  /**\n   * Move\n   * Scrolls to given element by using easeOutQuart function\n   * @param  {HTMLElement|number} target Target element to be scrolled or target position\n   * @param  {object} options Custom options\n   */\n\n\n  MoveTo.prototype.move = function (target) {\n    var _this2 = this;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    if (target !== 0 && !target) {\n      return;\n    }\n\n    options = mergeObject(this.options, options);\n    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;\n    var from = countScrollTop(options.container);\n    var startTime = null;\n    var lastYOffset;\n    distance -= options.tolerance; // rAF loop\n\n    var loop = function loop(currentTime) {\n      var currentYOffset = countScrollTop(_this2.options.container);\n\n      if (!startTime) {\n        // To starts time from 1, we subtracted 1 from current time\n        // If time starts from 1 The first loop will not do anything,\n        // because easing value will be zero\n        startTime = currentTime - 1;\n      }\n\n      var timeElapsed = currentTime - startTime;\n\n      if (lastYOffset) {\n        if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) {\n          return options.callback(target);\n        }\n      }\n\n      lastYOffset = currentYOffset;\n\n      var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);\n\n      options.container.scroll(0, val);\n\n      if (timeElapsed < options.duration) {\n        window.requestAnimationFrame(loop);\n      } else {\n        options.container.scroll(0, distance + from);\n        options.callback(target);\n      }\n    };\n\n    window.requestAnimationFrame(loop);\n  };\n  /**\n   * Adds custom ease function\n   * @param {string}   name Ease function name\n   * @param {function} fn   Ease function\n   */\n\n\n  MoveTo.prototype.addEaseFunction = function (name, fn) {\n    this.easeFunctions[name] = fn;\n  };\n  /**\n   * Returns options which created from trigger dom element\n   * @param  {HTMLElement} dom Trigger dom element\n   * @param  {object} options The instance's options\n   * @return {object} The options which created from trigger dom element\n   */\n\n\n  function _getOptionsFromTriggerDom(dom, options) {\n    var domOptions = {};\n    Object.keys(options).forEach(function (key) {\n      var value = dom.getAttribute(\"data-mt-\".concat(kebabCase(key)));\n\n      if (value) {\n        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);\n      }\n    });\n    return domOptions;\n  }\n\n  return MoveTo;\n}();\n\nif (true) {\n  module.exports = MoveTo;\n} else {}\n\n//# sourceURL=webpack://air-light/./node_modules/moveto/dist/moveTo.js?");

/***/ }),

/***/ "./node_modules/reframe.js/dist/reframe.es.js":
/*!****************************************************!*\
  !*** ./node_modules/reframe.js/dist/reframe.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reframe)\n/* harmony export */ });\n/**\n  reframe.js - Reframe.js: responsive iframes for embedded content\n  @version v4.0.0\n  @link https://github.com/yowainwright/reframe.ts#readme\n  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)\n  @license MIT\n**/\n/**\n * REFRAME.TS 🖼\n * ---\n * @param target\n * @param cName\n * @summary defines the height/width ratio of the targeted <element>\n */\nfunction reframe(target, cName) {\n    var _a, _b;\n    var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;\n    var c = cName || 'js-reframe';\n    if (!('length' in frames))\n        frames = [frames];\n    for (var i = 0; i < frames.length; i += 1) {\n        var frame = frames[i];\n        var hasClass = frame.className.split(' ').indexOf(c) !== -1;\n        if (hasClass || frame.style.width.indexOf('%') > -1) {\n            return;\n        }\n        // get height width attributes\n        var height = frame.getAttribute('height') || frame.offsetHeight;\n        var width = frame.getAttribute('width') || frame.offsetWidth;\n        var heightNumber = typeof height === 'string' ? parseInt(height) : height;\n        var widthNumber = typeof width === 'string' ? parseInt(width) : width;\n        // general targeted <element> sizes\n        var padding = (heightNumber / widthNumber) * 100;\n        // created element <wrapper> of general reframed item\n        // => set necessary styles of created element <wrapper>\n        var div = document.createElement('div');\n        div.className = c;\n        var divStyles = div.style;\n        divStyles.position = 'relative';\n        divStyles.width = '100%';\n        divStyles.paddingTop = \"\".concat(padding, \"%\");\n        // set necessary styles of targeted <element>\n        var frameStyle = frame.style;\n        frameStyle.position = 'absolute';\n        frameStyle.width = '100%';\n        frameStyle.height = '100%';\n        frameStyle.left = '0';\n        frameStyle.top = '0';\n        // reframe targeted <element>\n        (_a = frame.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(div, frame);\n        (_b = frame.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(frame);\n        div.appendChild(frame);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://air-light/./node_modules/reframe.js/dist/reframe.es.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n  return arr2;\n}\n\n//# sourceURL=webpack://air-light/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://air-light/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://air-light/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://air-light/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://air-light/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://air-light/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/src/front-end.js");
/******/ 	
/******/ })()
;