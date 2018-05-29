/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/cipher.js":
/*!**************************!*\
  !*** ./src/js/cipher.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction rot13(match, p1, p2, offset, string) {\n\treturn match.replace(/[a-z]/gi , function(c) {\n\t\treturn String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= \"M\" ? 13 : -13));\n\t});\n}\nfunction rot5(match, p1, p2, offset, string) {\n\treturn match.replace(/\\d/gi , function(c) {\n\t\treturn String.fromCharCode(c.charCodeAt(0) + (c <= \"4\" ? 5 : -5));\n\t});\n}\n\n\nfunction cipherMail(mail) {\n\treturn mail.replace(/[a-z]+(?=@)|[a-z]+(?=\\.)/gi, rot13);\n}\n\nfunction cipherPhone(phone) {\n\treturn phone.replace(/\\d\\d\\d\\d\\d$/g, rot5);\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ cipherMail, cipherPhone });\n\n//# sourceURL=webpack:///./src/js/cipher.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cipher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher */ \"./src/js/cipher.js\");\n\n\n// Add smooth scrolling if available\nif (\"scrollTo\" in window) {\n    var scrollButtons = document.getElementsByClassName('scroll-top');\n    for(var i = 0; i < scrollButtons.length; i++) {\n        var button = scrollButtons[i];\n        button.removeAttribute('href');\n        button.addEventListener('click', function() {\n            window.scrollTo({\n                top: 0,\n                behavior: \"smooth\"\n            })\n        });\n    }\n}\n\n// Decipher mailto\nvar emailLinks = document.getElementsByClassName('cipher-mailto');\nfor(var i = 0; i < emailLinks.length; i++) {\n    emailLinks[i].setAttribute(\"href\", _cipher__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cipherMail(emailLinks[i].getAttribute(\"href\")));\n}\n\n// Decipher email\nvar emailElements = document.getElementsByClassName('cipher-mail');\nfor(var i = 0; i < emailElements.length; i++) {\n    emailElements[i].innerHTML = _cipher__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cipherMail(emailElements[i].innerHTML);\n}\n\n// Decipher tel\nvar telLinks = document.getElementsByClassName('cipher-tel');\nfor(var i = 0; i < telLinks.length; i++) {\n    telLinks[i].setAttribute(\"href\", _cipher__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cipherPhone(telLinks[i].getAttribute(\"href\")));\n}\n\n// Decipher phone\nvar phoneElements = document.getElementsByClassName('cipher-phone');\nfor(var i = 0; i < phoneElements.length; i++) {\n    phoneElements[i].innerHTML = _cipher__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cipherPhone(phoneElements[i].innerHTML);\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });