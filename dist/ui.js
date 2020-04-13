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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*  Typography */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.7\")\n    format(\"woff2\"),\n  url(\"https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.7\")\n    format(\"woff\");\n}\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\")\n    format(\"woff2\"),\n  url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\")\n    format(\"woff\");\n}\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\")\n    format(\"woff2\"),\n  url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\")\n    format(\"woff\");\n}\n\nbody {\n  font: 12px \"Inter\", sans-serif;\n  margin: 8px 0;\n}\n\nbutton {\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n}\n\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\n\n.icon {\n  height: 46px;\n  margin: 0;\n  padding: 16px 16px 16px 60px;\n  position: relative;\n  float: left;\n  width: 100%;\n  text-align: left;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.icon:after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 16px;\n  height: 30px;\n  width: 30px;\n  background-size: 100%;\n}\n\n.icon:hover {\n  cursor: pointer;\n  background: #f2f2f2;\n}\n\n.icon-both:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='16' height='2' rx='1' fill='%23333333'/%3E%3Crect x='5' y='34' width='21' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='31' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='28' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-title:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='16' height='2' rx='1' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-footnote:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='34' width='21' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='31' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='28' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-annotation:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='26' width='5' height='5' rx='2.5' fill='%23333333'/%3E%3Crect x='13' y='27' width='26' height='12' rx='1' fill='%23333333' stroke='%23333333' stroke-width='2'/%3E%3Crect x='17' y='34' width='18' height='1' rx='0.5' fill='white'/%3E%3Crect x='17' y='31' width='18' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-annotation-alt:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect x='4' width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect x='4' width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='30' y='26' width='5' height='5' rx='2.5' fill='%23333333'/%3E%3Crect x='1' y='27' width='26' height='12' rx='1' fill='%23333333' stroke='%23333333' stroke-width='2'/%3E%3Crect x='5' y='34' width='18' height='1' rx='0.5' fill='white'/%3E%3Crect x='5' y='31' width='18' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-sticky-green:after {\n  /*background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%236FCF97' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='30' height='1' rx='0.5' fill='%236FCF97'/%3E%3Crect x='5' y='8' width='30' height='1' rx='0.5' fill='%236FCF97'/%3E%3Crect x='5' y='11' width='26' height='1' rx='0.5' fill='%236FCF97'/%3E%3C/svg%3E%0A\");*/\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='19' y='19' width='21' height='21' rx='1' fill='%236FCF97'/%3E%3Crect x='23' y='26' width='13' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='29' width='10' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='23' width='13' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-sticky-yellow:after {\n  /*background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23F2C94C' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='30' height='1' rx='0.5' fill='%23F2C94C'/%3E%3Crect x='5' y='8' width='30' height='1' rx='0.5' fill='%23F2C94C'/%3E%3Crect x='5' y='11' width='26' height='1' rx='0.5' fill='%23F2C94C'/%3E%3C/svg%3E%0A\");*/\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='19' y='19' width='21' height='21' rx='1' fill='%23F2C94C'/%3E%3Crect x='23' y='26' width='13' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='29' width='10' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='23' width='13' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-sticky-red:after {\n  /*background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23EB5757' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='30' height='1' rx='0.5' fill='%23EB5757'/%3E%3Crect x='5' y='8' width='30' height='1' rx='0.5' fill='%23EB5757'/%3E%3Crect x='5' y='11' width='26' height='1' rx='0.5' fill='%23EB5757'/%3E%3C/svg%3E%0A\");*/\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='19' y='19' width='21' height='21' rx='1' fill='%23EB5757'/%3E%3Crect x='23' y='26' width='13' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='29' width='10' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='23' width='13' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-cover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='8' y='11' width='18' height='18' rx='1' fill='%23333333' stroke='%23333333' stroke-width='2'/%3E%3Crect x='31' y='11' width='8' height='18' rx='1' stroke='%23333333' stroke-width='2'/%3E%3Crect x='11' y='14' width='10' height='2' rx='1' fill='white'/%3E%3Crect x='34' y='14' width='6' height='2' rx='1' fill='%23333333'/%3E%3Crect x='11' y='22' width='12' height='1' rx='0.5' fill='white'/%3E%3Crect x='11' y='19' width='12' height='1' rx='0.5' fill='white'/%3E%3Crect x='34' y='19' width='6' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='34' y='22' width='6' height='1' rx='0.5' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);

document.getElementById('both').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'both' } }, '*');
};
document.getElementById('title').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'title' } }, '*');
};
document.getElementById('footnote').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'footnote' } }, '*');
};
document.getElementById('sticky-green').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'sticky-green' } }, '*');
};
document.getElementById('sticky-yellow').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'sticky-yellow' } }, '*');
};
document.getElementById('sticky-red').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'sticky-red' } }, '*');
};
document.getElementById('annotation').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'annotation' } }, '*');
};
document.getElementById('annotation-alt').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'annotation-alt' } }, '*');
};
// Listen out for messages back from the sandbox
onmessage = e => {
    //@ts-ignore
    var msg = event.data.pluginMessage;
    if (msg === "no-layers") {
        alert("No layers have been selected. Please select a text layer and try again.");
    }
    else {
        alert(msg);
        console.log(msg);
    }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGtDQUFrQywyQkFBMkIsdUJBQXVCLHFCQUFxQixpTUFBaU0sR0FBRyxjQUFjLDJC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LHdCQUF3QixpQkFBaUIsdUJBQXVCLEVBQUU7QUFDbEU7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIsd0JBQXdCLEVBQUU7QUFDbkU7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIscUJBQXFCLEVBQUU7QUFDaEU7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIscUJBQXFCLEVBQUU7QUFDaEU7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIseUJBQXlCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiAgVHlwb2dyYXBoeSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjdcXFwiKVxcbiAgICBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVJlZ3VsYXIud29mZj92PTMuN1xcXCIpXFxuICAgIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL3JzbXMubWUvaW50ZXIvZm9udC1maWxlcy9JbnRlci1NZWRpdW0ud29mZjI/dj0zLjdcXFwiKVxcbiAgICBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLU1lZGl1bS53b2ZmMj92PTMuN1xcXCIpXFxuICAgIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL3JzbXMubWUvaW50ZXIvZm9udC1maWxlcy9JbnRlci1TZW1pQm9sZC53b2ZmMj92PTMuN1xcXCIpXFxuICAgIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gIHVybChcXFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ZvbnQtZmlsZXMvSW50ZXItU2VtaUJvbGQud29mZjI/dj0zLjdcXFwiKVxcbiAgICBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250OiAxMnB4IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDhweCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogNDZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDYwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uaWNvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogMTZweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xcbn1cXG5cXG4uaWNvbi1ib3RoOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ21hc2sgaWQ9J3BhdGgtMS1pbnNpZGUtMScgZmlsbD0nd2hpdGUnJTNFJTNDcmVjdCB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHJ4PScxJy8lM0UlM0MvbWFzayUzRSUzQ3JlY3Qgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyByeD0nMScgc3Ryb2tlPSclMjMzMzMzMzMnIHN0cm9rZS13aWR0aD0nNCcgbWFzaz0ndXJsKCUyM3BhdGgtMS1pbnNpZGUtMSknLyUzRSUzQ3JlY3QgeD0nNScgeT0nNScgd2lkdGg9JzE2JyBoZWlnaHQ9JzInIHJ4PScxJyBmaWxsPSclMjMzMzMzMzMnLyUzRSUzQ3JlY3QgeD0nNScgeT0nMzQnIHdpZHRoPScyMScgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjMzMzMzMzMnLyUzRSUzQ3JlY3QgeD0nNScgeT0nMzEnIHdpZHRoPSczMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjMzMzMzMzMnLyUzRSUzQ3JlY3QgeD0nNScgeT0nMjgnIHdpZHRoPSczMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjMzMzMzMzMnLyUzRSUzQy9zdmclM0UlMEFcXFwiKTtcXG59XFxuXFxuLmljb24tdGl0bGU6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHJ4PScxJyBzdHJva2U9JyUyMzMzMzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PSc1JyB5PSc1JyB3aWR0aD0nMTYnIGhlaWdodD0nMicgcng9JzEnIGZpbGw9JyUyMzMzMzMzMycvJTNFJTNDL3N2ZyUzRSUwQVxcXCIpO1xcbn1cXG5cXG4uaWNvbi1mb290bm90ZTphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NtYXNrIGlkPSdwYXRoLTEtaW5zaWRlLTEnIGZpbGw9J3doaXRlJyUzRSUzQ3JlY3Qgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyByeD0nMScvJTNFJTNDL21hc2slM0UlM0NyZWN0IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgcng9JzEnIHN0cm9rZT0nJTIzMzMzMzMzJyBzdHJva2Utd2lkdGg9JzQnIG1hc2s9J3VybCglMjNwYXRoLTEtaW5zaWRlLTEpJy8lM0UlM0NyZWN0IHg9JzUnIHk9JzM0JyB3aWR0aD0nMjEnIGhlaWdodD0nMScgcng9JzAuNScgZmlsbD0nJTIzMzMzMzMzJy8lM0UlM0NyZWN0IHg9JzUnIHk9JzMxJyB3aWR0aD0nMzAnIGhlaWdodD0nMScgcng9JzAuNScgZmlsbD0nJTIzMzMzMzMzJy8lM0UlM0NyZWN0IHg9JzUnIHk9JzI4JyB3aWR0aD0nMzAnIGhlaWdodD0nMScgcng9JzAuNScgZmlsbD0nJTIzMzMzMzMzJy8lM0UlM0Mvc3ZnJTNFJTBBXFxcIik7XFxufVxcblxcbi5pY29uLWFubm90YXRpb246YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSczNicgaGVpZ2h0PSczNicgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHJ4PScxJyBzdHJva2U9JyUyMzMzMzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PSc1JyB5PScyNicgd2lkdGg9JzUnIGhlaWdodD0nNScgcng9JzIuNScgZmlsbD0nJTIzMzMzMzMzJy8lM0UlM0NyZWN0IHg9JzEzJyB5PScyNycgd2lkdGg9JzI2JyBoZWlnaHQ9JzEyJyByeD0nMScgZmlsbD0nJTIzMzMzMzMzJyBzdHJva2U9JyUyMzMzMzMzMycgc3Ryb2tlLXdpZHRoPScyJy8lM0UlM0NyZWN0IHg9JzE3JyB5PSczNCcgd2lkdGg9JzE4JyBoZWlnaHQ9JzEnIHJ4PScwLjUnIGZpbGw9J3doaXRlJy8lM0UlM0NyZWN0IHg9JzE3JyB5PSczMScgd2lkdGg9JzE4JyBoZWlnaHQ9JzEnIHJ4PScwLjUnIGZpbGw9J3doaXRlJy8lM0UlM0Mvc3ZnJTNFJTBBXFxcIik7XFxufVxcblxcbi5pY29uLWFubm90YXRpb24tYWx0OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ21hc2sgaWQ9J3BhdGgtMS1pbnNpZGUtMScgZmlsbD0nd2hpdGUnJTNFJTNDcmVjdCB4PSc0JyB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHJ4PScxJy8lM0UlM0MvbWFzayUzRSUzQ3JlY3QgeD0nNCcgd2lkdGg9JzM2JyBoZWlnaHQ9JzM2JyByeD0nMScgc3Ryb2tlPSclMjMzMzMzMzMnIHN0cm9rZS13aWR0aD0nNCcgbWFzaz0ndXJsKCUyM3BhdGgtMS1pbnNpZGUtMSknLyUzRSUzQ3JlY3QgeD0nMzAnIHk9JzI2JyB3aWR0aD0nNScgaGVpZ2h0PSc1JyByeD0nMi41JyBmaWxsPSclMjMzMzMzMzMnLyUzRSUzQ3JlY3QgeD0nMScgeT0nMjcnIHdpZHRoPScyNicgaGVpZ2h0PScxMicgcng9JzEnIGZpbGw9JyUyMzMzMzMzMycgc3Ryb2tlPSclMjMzMzMzMzMnIHN0cm9rZS13aWR0aD0nMicvJTNFJTNDcmVjdCB4PSc1JyB5PSczNCcgd2lkdGg9JzE4JyBoZWlnaHQ9JzEnIHJ4PScwLjUnIGZpbGw9J3doaXRlJy8lM0UlM0NyZWN0IHg9JzUnIHk9JzMxJyB3aWR0aD0nMTgnIGhlaWdodD0nMScgcng9JzAuNScgZmlsbD0nd2hpdGUnLyUzRSUzQy9zdmclM0UlMEFcXFwiKTtcXG59XFxuXFxuLmljb24tc3RpY2t5LWdyZWVuOmFmdGVyIHtcXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHJ4PScxJyBzdHJva2U9JyUyMzZGQ0Y5Nycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PSc1JyB5PSc1JyB3aWR0aD0nMzAnIGhlaWdodD0nMScgcng9JzAuNScgZmlsbD0nJTIzNkZDRjk3Jy8lM0UlM0NyZWN0IHg9JzUnIHk9JzgnIHdpZHRoPSczMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjM2RkNGOTcnLyUzRSUzQ3JlY3QgeD0nNScgeT0nMTEnIHdpZHRoPScyNicgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjM2RkNGOTcnLyUzRSUzQy9zdmclM0UlMEFcXFwiKTsqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSczNicgaGVpZ2h0PSczNicgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHJ4PScxJyBzdHJva2U9JyUyMzMzMzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PScxOScgeT0nMTknIHdpZHRoPScyMScgaGVpZ2h0PScyMScgcng9JzEnIGZpbGw9JyUyMzZGQ0Y5NycvJTNFJTNDcmVjdCB4PScyMycgeT0nMjYnIHdpZHRoPScxMycgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PScyMycgeT0nMjknIHdpZHRoPScxMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PScyMycgeT0nMjMnIHdpZHRoPScxMycgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDL3N2ZyUzRSUwQVxcXCIpO1xcbn1cXG5cXG4uaWNvbi1zdGlja3kteWVsbG93OmFmdGVyIHtcXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHJ4PScxJyBzdHJva2U9JyUyM0YyQzk0Qycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PSc1JyB5PSc1JyB3aWR0aD0nMzAnIGhlaWdodD0nMScgcng9JzAuNScgZmlsbD0nJTIzRjJDOTRDJy8lM0UlM0NyZWN0IHg9JzUnIHk9JzgnIHdpZHRoPSczMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjNGMkM5NEMnLyUzRSUzQ3JlY3QgeD0nNScgeT0nMTEnIHdpZHRoPScyNicgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjNGMkM5NEMnLyUzRSUzQy9zdmclM0UlMEFcXFwiKTsqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSczNicgaGVpZ2h0PSczNicgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHJ4PScxJyBzdHJva2U9JyUyMzMzMzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PScxOScgeT0nMTknIHdpZHRoPScyMScgaGVpZ2h0PScyMScgcng9JzEnIGZpbGw9JyUyM0YyQzk0QycvJTNFJTNDcmVjdCB4PScyMycgeT0nMjYnIHdpZHRoPScxMycgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PScyMycgeT0nMjknIHdpZHRoPScxMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PScyMycgeT0nMjMnIHdpZHRoPScxMycgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDL3N2ZyUzRSUwQVxcXCIpO1xcbn1cXG5cXG4uaWNvbi1zdGlja3ktcmVkOmFmdGVyIHtcXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHJ4PScxJyBzdHJva2U9JyUyM0VCNTc1Nycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PSc1JyB5PSc1JyB3aWR0aD0nMzAnIGhlaWdodD0nMScgcng9JzAuNScgZmlsbD0nJTIzRUI1NzU3Jy8lM0UlM0NyZWN0IHg9JzUnIHk9JzgnIHdpZHRoPSczMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjNFQjU3NTcnLyUzRSUzQ3JlY3QgeD0nNScgeT0nMTEnIHdpZHRoPScyNicgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSclMjNFQjU3NTcnLyUzRSUzQy9zdmclM0UlMEFcXFwiKTsqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDbWFzayBpZD0ncGF0aC0xLWluc2lkZS0xJyBmaWxsPSd3aGl0ZSclM0UlM0NyZWN0IHdpZHRoPSczNicgaGVpZ2h0PSczNicgcng9JzEnLyUzRSUzQy9tYXNrJTNFJTNDcmVjdCB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHJ4PScxJyBzdHJva2U9JyUyMzMzMzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBtYXNrPSd1cmwoJTIzcGF0aC0xLWluc2lkZS0xKScvJTNFJTNDcmVjdCB4PScxOScgeT0nMTknIHdpZHRoPScyMScgaGVpZ2h0PScyMScgcng9JzEnIGZpbGw9JyUyM0VCNTc1NycvJTNFJTNDcmVjdCB4PScyMycgeT0nMjYnIHdpZHRoPScxMycgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PScyMycgeT0nMjknIHdpZHRoPScxMCcgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PScyMycgeT0nMjMnIHdpZHRoPScxMycgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDL3N2ZyUzRSUwQVxcXCIpO1xcbn1cXG5cXG4uaWNvbi1jb3ZlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NtYXNrIGlkPSdwYXRoLTEtaW5zaWRlLTEnIGZpbGw9J3doaXRlJyUzRSUzQ3JlY3Qgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyByeD0nMScvJTNFJTNDL21hc2slM0UlM0NyZWN0IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgcng9JzEnIHN0cm9rZT0nJTIzMzMzMzMzJyBzdHJva2Utd2lkdGg9JzQnIG1hc2s9J3VybCglMjNwYXRoLTEtaW5zaWRlLTEpJy8lM0UlM0NyZWN0IHg9JzgnIHk9JzExJyB3aWR0aD0nMTgnIGhlaWdodD0nMTgnIHJ4PScxJyBmaWxsPSclMjMzMzMzMzMnIHN0cm9rZT0nJTIzMzMzMzMzJyBzdHJva2Utd2lkdGg9JzInLyUzRSUzQ3JlY3QgeD0nMzEnIHk9JzExJyB3aWR0aD0nOCcgaGVpZ2h0PScxOCcgcng9JzEnIHN0cm9rZT0nJTIzMzMzMzMzJyBzdHJva2Utd2lkdGg9JzInLyUzRSUzQ3JlY3QgeD0nMTEnIHk9JzE0JyB3aWR0aD0nMTAnIGhlaWdodD0nMicgcng9JzEnIGZpbGw9J3doaXRlJy8lM0UlM0NyZWN0IHg9JzM0JyB5PScxNCcgd2lkdGg9JzYnIGhlaWdodD0nMicgcng9JzEnIGZpbGw9JyUyMzMzMzMzMycvJTNFJTNDcmVjdCB4PScxMScgeT0nMjInIHdpZHRoPScxMicgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PScxMScgeT0nMTknIHdpZHRoPScxMicgaGVpZ2h0PScxJyByeD0nMC41JyBmaWxsPSd3aGl0ZScvJTNFJTNDcmVjdCB4PSczNCcgeT0nMTknIHdpZHRoPSc2JyBoZWlnaHQ9JzEnIHJ4PScwLjUnIGZpbGw9JyUyMzMzMzMzMycvJTNFJTNDcmVjdCB4PSczNCcgeT0nMjInIHdpZHRoPSc2JyBoZWlnaHQ9JzEnIHJ4PScwLjUnIGZpbGw9JyUyMzMzMzMzMycvJTNFJTNDL3N2ZyUzRSUwQVxcXCIpO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vdWkuY3NzJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3RoJykub25jbGljayA9ICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdib3RoJyB9IH0sICcqJyk7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykub25jbGljayA9ICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICd0aXRsZScgfSB9LCAnKicpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290bm90ZScpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnZm9vdG5vdGUnIH0gfSwgJyonKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RpY2t5LWdyZWVuJykub25jbGljayA9ICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdzdGlja3ktZ3JlZW4nIH0gfSwgJyonKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RpY2t5LXllbGxvdycpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnc3RpY2t5LXllbGxvdycgfSB9LCAnKicpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGlja3ktcmVkJykub25jbGljayA9ICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdzdGlja3ktcmVkJyB9IH0sICcqJyk7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fubm90YXRpb24nKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2Fubm90YXRpb24nIH0gfSwgJyonKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5ub3RhdGlvbi1hbHQnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2Fubm90YXRpb24tYWx0JyB9IH0sICcqJyk7XG59O1xuLy8gTGlzdGVuIG91dCBmb3IgbWVzc2FnZXMgYmFjayBmcm9tIHRoZSBzYW5kYm94XG5vbm1lc3NhZ2UgPSBlID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICB2YXIgbXNnID0gZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlO1xuICAgIGlmIChtc2cgPT09IFwibm8tbGF5ZXJzXCIpIHtcbiAgICAgICAgYWxlcnQoXCJObyBsYXllcnMgaGF2ZSBiZWVuIHNlbGVjdGVkLiBQbGVhc2Ugc2VsZWN0IGEgdGV4dCBsYXllciBhbmQgdHJ5IGFnYWluLlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KG1zZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=