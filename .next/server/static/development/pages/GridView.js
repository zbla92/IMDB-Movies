module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es7.weak-map.of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js");
__webpack_require__(/*! ../modules/es7.weak-map.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").WeakMap;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/GridView.js":
/*!***************************!*\
  !*** ./pages/GridView.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _src_components_MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MovieList */ "./src/components/MovieList/index.js");
/* harmony import */ var _src_components_SortNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/SortNavigation */ "./src/components/SortNavigation/index.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/pages/GridView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class GridView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(_src_components_MovieList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GridView);

/***/ }),

/***/ "./src/apis/movies-api.js":
/*!********************************!*\
  !*** ./src/apis/movies-api.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = 'https://api.themoviedb.org/3/',
      API_KEY = '6b7007b9ce50c7ac58bb264563355724';

const fetchMoviesByFilter = async (page = 1, filter = 'popular') => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}${adjustUrlForFilters(filter)}`, {
      params: {
        api_key: API_KEY,
        page
      }
    });
    return {
      data: data.results,
      numOfPages: data.total_pages
    };
  } catch (err) {
    throw new Error(err[0]);
  }
};

const fetchMoviesByKeyword = async query => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}search/movie?`, {
      params: {
        api_key: API_KEY,
        query: query
      }
    });
    return {
      data: data.results,
      query: query
    };
  } catch (err) {
    throw new Error(err[0]);
  }
};

const fetchMovieDetails = async id => {
  const data = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}movie/${id}`, {
    params: {
      api_key: API_KEY
    }
  });
  return {
    data: data.data
  };
}; // Helper functions


const adjustUrlForFilters = filter => {
  if (filter === 'trending') {
    return `${filter}/movie/day`;
  }

  return `movie/${filter}`;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  fetchMoviesByFilter,
  fetchMoviesByKeyword,
  fetchMovieDetails
});

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/Footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_react_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/react.png */ "./src/images/react.png");
/* harmony import */ var _images_react_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_react_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_redux_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/redux.png */ "./src/images/redux.png");
/* harmony import */ var _images_redux_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_redux_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_bulma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/bulma.png */ "./src/images/bulma.png");
/* harmony import */ var _images_bulma_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_bulma_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_netflix_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/netflix.png */ "./src/images/netflix.png");
/* harmony import */ var _images_netflix_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_netflix_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_HBO_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/HBO.png */ "./src/images/HBO.png");
/* harmony import */ var _images_HBO_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_HBO_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_popcorntime_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/popcorntime.png */ "./src/images/popcorntime.png");
/* harmony import */ var _images_popcorntime_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_popcorntime_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_heroku_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/heroku.png */ "./src/images/heroku.png");
/* harmony import */ var _images_heroku_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_heroku_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/Footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function Footer() {
  return __jsx("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "footer__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "footer__links footer__links--left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "footer__dependencies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    href: "https://reactjs.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__icon footer__icon--netflix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: _images_react_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "icon",
    width: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), " React"), __jsx("a", {
    href: "https://redux.js.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__icon footer__icon--hbo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: _images_redux_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    width: "15px",
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), " Redux"), __jsx("a", {
    href: "https://bulma.io/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__icon footer__icon--popcorn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: _images_bulma_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    width: "11px",
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), " Bulma"), __jsx("a", {
    href: "https://heroku.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__icon footer__icon--popcorn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: _images_heroku_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    width: "14px",
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), " Heroku"))), __jsx("div", {
    className: "footer__links--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "footer__dependencies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "http://netflix.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__icon footer__icon--netflix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("img", {
    src: _images_netflix_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: "15px",
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), " Netflix"), __jsx("a", {
    href: "http://hbo.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__icon footer__icon--hbo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    src: _images_HBO_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    width: "30px",
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), " TV"), __jsx("a", {
    href: "https://popcorntime-online.ch/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__icon footer__icon--popcorn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("img", {
    src: _images_popcorntime_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    width: "13px",
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), " \xA0Popcorn Time")))), __jsx("div", {
    className: "footer__sentance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("span", {
    className: "footer__sentance__span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "This application was built for skill presentaton purpose only. Feel free to check out my github account", ' ', __jsx("a", {
    href: "http://github.com/zbla92",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "here"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/index.scss":
/*!******************************************!*\
  !*** ./src/components/Footer/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_movies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/movies */ "./src/redux/actions/movies.js");
/* harmony import */ var _redux_actions_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/ui */ "./src/redux/actions/ui.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/Header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //ICONS



class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      keyword: ''
    });

    _defineProperty(this, "handleChange", e => {
      // this.setState({ keyword: e.target.value });
      console.log('handleChange');
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault(); // this.props.fetchMoviesByKeyword(this.state.keyword).catch(ex => {
      //   alert('Something failed');
      //   this.props.setFilters('popular');
      // });
      // this.setState({ keyword: '' });
      // this.props.setFilters('search');
      // this.handleOpen();

      console.log('onSubmit');
    });

    _defineProperty(this, "onLogoClick", () => {
      // this.props.setFilters('popular');
      // this.props.history.push(`/gridView/1`);
      // window.scrollTo(0, 0);
      console.log('onLogoClick');
    });

    _defineProperty(this, "handleOpen", () => {
      // if (window.innerWidth < 1024) {
      //     var burger = document.querySelector('.burger')
      //     var nav = document.querySelector('#navMenu')
      //     burger.classList.toggle('is-active')
      //     nav.classList.toggle('navbar__menu--is-active')
      // }
      console.log('handleOpen');
    });
  }

  render() {
    // const {
    //   location: { pathname }
    // } = this.props;
    // const page = parseInt(pathname.split('/').pop(), 10);
    //test
    const page = 2;
    const pathname = 'gridView'; //

    return __jsx("nav", {
      className: "navbar",
      role: "navigation",
      "aria-label": "main navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      src: this.props.logo,
      className: "navbar-brand__image",
      alt: "logo",
      onClick: () => this.onLogoClick(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), __jsx("span", {
      className: "navbar-burger burger is-vcentered",
      "data-target": "navMenu",
      onClick: e => {
        this.handleOpen();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }))), __jsx("div", {
      id: "navMenu",
      className: "navbar-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.onSubmit,
      className: "navbar__form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("input", {
      className: "input is-rounded navbar__form__search is-vcentered",
      type: "text",
      value: this.state.keyword,
      placeholder: "Search Vivant Movie Database",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), __jsx("div", {
      className: "navbar__view navbar-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoMdGrid"], {
      className: pathname.indexOf('GridView') > 0 ? 'navbar__view__active' : 'navbar__view__non-active',
      onClick: e => {
        this.handleOpen();
        window.scrollTo(0, 0);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosList"], {
      className: pathname.indexOf('TableView') > 0 ? 'navbar__view__active' : 'navbar__view__non-active',
      onClick: e => {
        this.handleOpen();
        window.scrollTo(0, 0);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }))))));
  }

} // Header.propTypes = {
//   setFilters: PropTypes.func.isRequired,
//   fetchMoviesByKeyword: PropTypes.func.isRequired,
//   location: PropTypes.object.isRequired
// };
// const mapActionsToProps = {
//   setFilters,
//   fetchMoviesByKeyword
// };
// export default connect(null, mapActionsToProps)(withRouter(Header));


/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/index.scss":
/*!******************************************!*\
  !*** ./src/components/Header/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/Layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/MovieCard/MovieCard.js":
/*!***********************************************!*\
  !*** ./src/components/MovieCard/MovieCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movieCard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCard.scss */ "./src/components/MovieCard/movieCard.scss");
/* harmony import */ var _movieCard_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_movieCard_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_movies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/movies */ "./src/redux/actions/movies.js");
/* harmony import */ var _images_photo_not_available_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/photo_not_available.png */ "./src/images/photo_not_available.png");
/* harmony import */ var _images_photo_not_available_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_photo_not_available_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_MovieCardLoader_MovieCardLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/MovieCardLoader/MovieCardLoader */ "./src/utils/MovieCardLoader/MovieCardLoader.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/MovieCard/MovieCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









class MovieCard extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  // Method to reduce the date since it comes in as year-mm-dd
  dateToYear(date = '1999-12-12') {
    return date ? date.slice(0, -6) : 2000;
  } // Method that returns number of stars based on popularity of the movie


  popularityStars(rating) {
    rating = Math.round(rating);
    const stars = [__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdStarOutline"], {
      key: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdStarOutline"], {
      key: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdStarOutline"], {
      key: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdStarOutline"], {
      key: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdStarOutline"], {
      key: 5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })];

    for (let i = 1; i <= rating; i++) {
      if (i % 2 === 0) {
        stars[i / 2 - 1] = __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdStar"], {
          key: -i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        });
      } else if (i % 2 === 1 && i === rating) {
        stars[Math.floor(i / 2)] = __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdStarHalf"], {
          key: -i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });
      }
    }

    return stars;
  } // If no img return local noImage image


  checkImg(url) {
    if (url.length < 60) return _images_photo_not_available_png__WEBPACK_IMPORTED_MODULE_6___default.a;else return url;
  }

  render() {
    const {
      imageUrl,
      title,
      year,
      vote_average,
      id
    } = this.props;
    return __jsx("div", {
      className: "movie-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_utils_MovieCardLoader_MovieCardLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      src: this.checkImg(imageUrl),
      title: title,
      id: id,
      year: this.dateToYear(year),
      stars: this.popularityStars(vote_average),
      fetchMovieDetails: this.props.fetchMovieDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }

}

MovieCard.propTypes = {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  tite: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  year: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  vote_average: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  fetchMovieDetails: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
const mapActionsToProps = {
  fetchMovieDetails: _redux_actions_movies__WEBPACK_IMPORTED_MODULE_5__["fetchMovieDetails"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapActionsToProps)(MovieCard));

/***/ }),

/***/ "./src/components/MovieCard/movieCard.scss":
/*!*************************************************!*\
  !*** ./src/components/MovieCard/movieCard.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/MovieList/GridView/GridView.js":
/*!*******************************************************!*\
  !*** ./src/components/MovieList/GridView/GridView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.scss */ "./src/components/MovieList/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MovieCard/MovieCard */ "./src/components/MovieCard/MovieCard.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pagination */ "./src/components/Pagination/index.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/MovieList/GridView/GridView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class GridView extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      insertRowEvery: 5
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderMovies(movies) {
    const rendered = movies.map(({
      id,
      poster_path,
      title,
      release_date,
      vote_average
    }) => {
      const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;
      return __jsx(_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        imageUrl: imageUrl,
        title: title,
        year: release_date,
        vote_average: vote_average,
        key: id,
        id: id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    });
    return rendered;
  }

  render() {
    if (this.props.errors) {
      alert(this.props.errors);
      window.location.reload();
    }

    return __jsx("div", {
      className: "grid-view  animated fadeIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "grid-view__container container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, this.renderMovies(this.props.movies)), this.props.numOfPages > 1 ? __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
      page: this.props.page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }) : null);
  }

}

GridView.propTypes = {
  movies: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  clearErrors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  numOfPages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (GridView);

/***/ }),

/***/ "./src/components/MovieList/TableView/TableView.js":
/*!*********************************************************!*\
  !*** ./src/components/MovieList/TableView/TableView.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.scss */ "./src/components/MovieList/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MovieRow_MovieRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MovieRow/MovieRow */ "./src/components/MovieRow/MovieRow.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Pagination */ "./src/components/Pagination/index.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/MovieList/TableView/TableView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class TableView extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      movies: this.props.movies
    });

    _defineProperty(this, "sortMoviesByYear", movies => {
      const sorted = movies.slice().sort((a, b) => {
        return a.release_date > b.release_date ? -1 : a.release_date < b.release_date ? 1 : 0;
      });
      this.setState({
        movies: sorted
      });
    });

    _defineProperty(this, "sortMoviesAlphabetically", movies => {
      const sorted = movies.slice().sort((a, b) => {
        const movieA = a.title.charAt(0);
        const movieB = b.title.charAt(0);
        return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
      });
      this.setState({
        movies: sorted
      });
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    if (this.props.errors) {
      alert(this.props.errors);
      window.location.reload();
    }

    const renderMovies = () => this.state.movies.map(movie => {
      return __jsx(_MovieRow_MovieRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: movie.title,
        year: movie.release_date,
        key: movie.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    });

    return __jsx("div", {
      className: "container  table-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("table", {
      className: "table is-hoverable table-view__table table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("th", {
      className: "table-view__title has-text-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("span", {
      className: "table-view__span",
      onClick: () => this.sortMoviesAlphabetically(this.props.movies),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Title", __jsx("span", {
      className: "table-view__tooltiptext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Sort by name"))), __jsx("th", {
      className: "table-view__year has-text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("span", {
      className: "table-view__span",
      onClick: () => this.sortMoviesByYear(this.props.movies),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Year", __jsx("span", {
      className: "table-view__tooltiptext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Sort by year"))))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, renderMovies())), this.props.numOfPages > 1 ? __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      page: this.props.page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableView);

/***/ }),

/***/ "./src/components/MovieList/index.js":
/*!*******************************************!*\
  !*** ./src/components/MovieList/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/movies */ "./src/redux/actions/movies.js");
/* harmony import */ var _redux_actions_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/ui */ "./src/redux/actions/ui.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GridView_GridView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GridView/GridView */ "./src/components/MovieList/GridView/GridView.js");
/* harmony import */ var _TableView_TableView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableView/TableView */ "./src/components/MovieList/TableView/TableView.js");
/* harmony import */ var _utils_Skeleton_GridSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/Skeleton/GridSkeleton */ "./src/utils/Skeleton/GridSkeleton.js");
/* harmony import */ var _utils_Skeleton_TableSkeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Skeleton/TableSkeleton */ "./src/utils/Skeleton/TableSkeleton.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/MovieList/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









 // class MovieList extends React.Component {
//   componentDidMount() {
//     if (this.props.movies.length < 1) {
//       this.props
//         .fetchMoviesByFilter(this.props.page, this.props.ui.filterBy)
//         .catch(ex => {
//           this.props.history.push('/');
//         });
//     }
//   }
//   componentDidUpdate(prevProps) {
//     if (this.props.page !== prevProps.page) {
//       this.props
//         .fetchMoviesByFilter(this.props.page, this.props.ui.filterBy)
//         .catch(err => {
//           this.props.history.push('/');
//         });
//     }
//   }
//   render() {
//     const { movies, numOfPages, clearErrors, page } = this.props;
//     const { errors } = this.props.ui;
//     if (this.props.ui.loading) {
//       return (
//         <div>
//           {this.props.location.pathname.indexOf('gridView') > -1 ? (
//             <GridSkeleton />
//           ) : (
//             <TableSkeleton />
//           )}
//         </div>
//       );
//     }
//     if (this.props.type === 'grid') {
//       return (
//         <GridView
//           movies={movies}
//           errors={errors}
//           clearErrors={clearErrors}
//           numOfPages={numOfPages}
//           page={page}
//         />
//       );
//     } else {
//       return (
//         <TableView
//           movies={movies}
//           errors={errors}
//           clearErrors={clearErrors}
//           numOfPages={numOfPages}
//           page={page}
//         />
//       );
//     }
//   }
// }
// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired,
//   ui: PropTypes.object,
//   numOfPages: PropTypes.number,
//   clearErrors: PropTypes.func,
//   page: PropTypes.number.isRequired
// };
// MovieList.defaultProps = {
//   movies: []
// };
// const mapStateToProps = state => ({
//   movies: state.data.movies,
//   numOfPages: state.data.numOfPages,
//   ui: state.UI
// });
// const mapActionsToProps = {
//   fetchMoviesByFilter,
//   clearErrors
// };
// export default connect(
//   mapStateToProps,
//   mapActionsToProps
// )(withRouter(MovieList));

function MovieList({
  type
}) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "MOvie List type: ", type);
}

/* harmony default export */ __webpack_exports__["default"] = (MovieList);

/***/ }),

/***/ "./src/components/MovieList/index.scss":
/*!*********************************************!*\
  !*** ./src/components/MovieList/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/MovieRow/MovieRow.js":
/*!*********************************************!*\
  !*** ./src/components/MovieRow/MovieRow.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movieRow_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieRow.scss */ "./src/components/MovieRow/movieRow.scss");
/* harmony import */ var _movieRow_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_movieRow_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/MovieRow/MovieRow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class MovieRow extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  dateToYear(date) {
    return date.slice(0, -6);
  }

  render() {
    const {
      title,
      year
    } = this.props;
    return __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, title), __jsx("td", {
      className: "table-view__table__tbody__th has-text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, this.dateToYear(year)));
  }

}

MovieRow.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  year: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (MovieRow);

/***/ }),

/***/ "./src/components/MovieRow/movieRow.scss":
/*!***********************************************!*\
  !*** ./src/components/MovieRow/movieRow.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/Pagination/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/Pagination/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_movies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/movies */ "./src/redux/actions/movies.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/Pagination/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Pagination extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "generateButton", (btnPage, isDisabled, numOfPages, name = btnPage, className = '') => {
      // This function is used to generate pagination button. 
      //btnPage = expression that resolves buttons number (page number)
      // isDisabled = true or false - rendering button clickable or not
      // numOfPages = Total number of pages fetched for the current filter
      //name = rendered name for the button, usually number, next || prev
      // className =  passing additional styling to particular button
      const viewType = this.props.location.pathname.split('View')[0] + 'View';

      if (btnPage >= 1 && btnPage <= numOfPages || name === 'Prev' || name === 'Next') {
        return __jsx("button", {
          className: `button pagination__button ${className}`,
          disabled: isDisabled,
          key: name,
          onClick: () => {
            this.props.history.push(`${viewType}/${btnPage}`);
            window.scrollTo(0, 0);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, name);
      } else return null;
    });
  }

  render() {
    const {
      numOfPages,
      page: currentPage
    } = this.props;

    const dots = __jsx("span", {
      className: "pagination-ellipsis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "\u2026");

    return __jsx("div", {
      className: "buttons pagination",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, this.generateButton(currentPage - 1, currentPage > 1 ? false : true, numOfPages, 'Prev', 'pagination__button__next'), this.generateButton(currentPage > 2 ? 1 : null, false, numOfPages), currentPage > 2 ? dots : null, this.generateButton(window.innerWidth < 600 ? null : currentPage - 1, false, numOfPages), this.generateButton(currentPage, true, numOfPages, currentPage, 'pagination__button--is-active'), this.generateButton(window.innerWidth < 600 ? null : currentPage + 1, false, numOfPages), currentPage < numOfPages - 1 ? dots : null, this.generateButton(currentPage < numOfPages - 1 ? numOfPages : null, false, numOfPages), this.generateButton(currentPage + 1, currentPage < numOfPages ? false : true, numOfPages, 'Next', 'pagination__button__prev'));
  }

}

Pagination.defaultProps = {
  currentPage: 1
};
Pagination.propTypes = {
  ui: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  fetchMoviesByFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  numOfPages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

const mapStateToProps = state => ({
  ui: state.UI,
  numOfPages: state.data.numOfPages
});

const mapActionsToProps = {
  fetchMoviesByFilter: _redux_actions_movies__WEBPACK_IMPORTED_MODULE_5__["fetchMoviesByFilter"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapActionsToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Pagination)));

/***/ }),

/***/ "./src/components/Pagination/index.scss":
/*!**********************************************!*\
  !*** ./src/components/Pagination/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/SortNavigation/index.js":
/*!************************************************!*\
  !*** ./src/components/SortNavigation/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/SortNavigation/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_movies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/movies */ "./src/redux/actions/movies.js");
/* harmony import */ var _redux_actions_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/ui */ "./src/redux/actions/ui.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/SortNavigation/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class SortNavigation extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      viewType: 'gridView'
    });
  }

  componentDidMount() {
    const view = this.props.location.pathname.split('/')[1];

    if (this.state.viewType !== view) {}
  }

  sortBy(filter, e) {
    if (this.props.filterBy !== filter) {
      this.props.setFilters(filter);
      this.filterMoviesBy(filter);
      this.props.history.push(`/${this.state.viewType}/1`);
    }
  }

  filterMoviesBy(filter) {
    this.props.fetchMoviesByFilter(1, filter);
  }

  render() {
    return __jsx("div", {
      className: "sort-",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "sort-navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: `column sort-navigation__btn ${this.props.filterBy === 'top_rated' ? 'sort-navigation__btn__active' : ''}`,
      onClick: () => {
        this.sortBy('top_rated');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoMdStar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Rating")), __jsx("div", {
      className: `column sort-navigation__btn ${this.props.filterBy === 'popular' ? 'sort-navigation__btn__active' : ''}`,
      onClick: () => {
        this.sortBy('popular');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, " ", __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__["AiOutlineFire"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Popularity")), __jsx("div", {
      className: `column sort-navigation__btn ${this.props.filterBy === 'trending' ? 'sort-navigation__btn__active' : ''}`,
      onClick: () => {
        this.sortBy('trending');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, " ", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdDateRange"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Trending"))));
  }

}

SortNavigation.defaultProps = {
  filterBy: 'popular'
};
SortNavigation.propTypes = {
  fetchMoviesByFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  filterBy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
const mapActionsToProps = {
  fetchMoviesByFilter: _redux_actions_movies__WEBPACK_IMPORTED_MODULE_4__["fetchMoviesByFilter"],
  setFilters: _redux_actions_ui__WEBPACK_IMPORTED_MODULE_5__["setFilters"]
};

const mapStateToProps = state => ({
  filterBy: state.UI.filterBy
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapActionsToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(SortNavigation)));

/***/ }),

/***/ "./src/components/SortNavigation/index.scss":
/*!**************************************************!*\
  !*** ./src/components/SortNavigation/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/images/HBO.png":
/*!****************************!*\
  !*** ./src/images/HBO.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/bulma.png":
/*!******************************!*\
  !*** ./src/images/bulma.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAEsCAYAAABkJufHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABajSURBVHhe7Z17kBzFfcebhxMnjknwK++kKqnElYKKq/JvUhXbYCC2EwM22BhXHLANdv7MuxwlJMGALBsDMVjCAsTDPO4s3U7P7OME+DBlkBB7u9Mz+zq9Tg8XrqQqNg9JSCBUm/71ds/unUbS7t3s7Dy+n6pPWbJdup3Z/t6v+ze9vQxMgNrMFazh3Kr/BgAYCsGvYO3yEfbjZ7vMd+5m3a7+HwAAp6amg7Nza5c1il22ONdlnn0P6645S/8/AAAnUStcyVql11VwBKfQdFlTBmjfD+Sfne8gQACE4TqXy6AcZbsGgmNUFYgCJCvQGgQIgD4UHJqqhQVnSYBoCsfXI0AAENQc6FR6a5xTBceIAAGgqdlXDh0cIwWI1kCC36v/FQByBjUHRg2OkZoIVIGEs17/awDkBKo4C7OHe8EJCccwqgpEUzgECOSFef6pFVec5ao2tg4QHqSCTEPBaVeWPsdZrYMVCE0EkElcCk452uAYzYNUYW+QFQgBAhmCgtOqHB1LcIzBFI4CNHW2/skApBiXX8VapWNjDY7RPAcS/LtsCgECacaduUpO1eIJjnEwQKhAIJV4zidZh5oDs/EFx2iaCK69EWsgkC5ojaOCE2PFWe5ggNCFA6mgVrh64sExBm1sVYH0CwQgiVBwFhISHKMJkO/INZB+nQAkCpGgirPcwQBhCgcSRc36tAzOeJ/jrFbzHIgChDY2SAT1mc+wdsKDY+xXoI1sbu4cfQUATIBq4RrWLr8xkXb0Su03Ee5DgMBkoIrTKsngpKDiLNcEyEWAQNzUuZyqpaziLDeoQM79CBCIB6o4nUq8W27GpQmQsB9AgMB4oYpDwVlIccVZrgrQM3IKZ21CFw6MB1VxZo9mKjjGwSkc9sKBSKnb16jgZGGqdipNgHznATxIBdHgWp/tBSeDFWe5JkCNoqxAmMKB1VDj18ppWrbWOGcyCJCsQGgigBWhKk7GmgPDOjiFq244V98RAIagVvicDM4buQyOMQiQvYlVqwgQGAIKTrv8Zq6DYzQB8uwHWXP6bfoOARCCW7yWtcrHEZwB+xXoQVQgEA6tcVBxwm04/QqEAIEluPza3K9xzqSpQMJ+GE0E0IOmaguzCM4wUoD26wChjZ1zhP05tjNnz3FWa38K9zD2wuUVCs6CmaqFDBJ4aoMuHH+Izd2ECpQr6vyv+8FBxVmRQRfOeQhNhLxAwelU0FWLwqACySkcngNlnPnC51kH7ehIRYByAAWnXcED0HE4GKDSXT+n7zjIBC7/PGuV30Jwxqjpwgn+PbarhABlAgpOG8GJRRUg+ki3/SgClHaoOYCpWrxSgPbLAAkZIKyBUkqvHY3mwCQMpnAyQNMIULqgqVoQnJA3F45f00SgAGEvXEqoWdfJ0KDiJEE1hZMB8h0EKPHUrL/pByfkzYTxSxWI1kC+8z1M4ZJKzbmOddAcSKSmC0cVCM+BEka9cD2Ck3DNGogCNLfp5/U7ByZK3f4Ca1fwHCcNBjsR+ONsHwI0Wer8etYqn0BwUmTQRLAfQ4AmhdDB6SA4qdOsgTxHVqA5BChWhHMdpmopFwGaAKJ4vaw2x1mnguCkXTWFo608fBpNhHFDaxwVHFSczOjrNZBnP4E29rigrhoFB1O17Nmfwj2BzaRR41pflKGRwaGpWsjNh+nXdOEoQCV8nCEaXP4lub55C2ucHKgqkAxQozjFpqberkcAWBEITv5UayA9hUOAVkitcINc48jg0Bon5CbD7GqmcL6sQAe3IUAj4crgtMtddNVybLAb255m8/wX9MgAp8W1ZXDkNA1TNWja2AjQEPTWOHrLTcjNhPnTrIGEDNBBrIHCoeC0aa8aKg5cpqlArrWZbUOAlkJTNVVxEBx4CoPnQPZm7IUz1Kwbe101Ck7ITYPQSBVI7USQAcr9XjgKzgKCA0fQrIF85/v5DVDNRnDgygy6cDJAuVsD1e2vYI0DV2W/Am3OTxsbwYFRORigl7IeILfwu3KKdpzt3IrgwGjsT+E2M/HwL+qRlkH84kWsVeptvQi7ERCuRFOBPHsLE1szGiBPfS6n17MPuwkQrlQKUO8DdTPZDJDHb2WLqsSefPEQrlZTgYRdyF6APPsxXV4hHI+DAcpMF25u7hzm8mfZnqfCLxrCqDQB8mWAMvEcaMfMu2R49qg1T9gFQxilKkBqiSAr0L0pr0BN/vvyoo6yZin8YiGM2sEKlOopnGt9UH3IDW1qGKcUoN6hIjPpfQ7k2V9QD0fpYsIuEsJxGVQgOYV7ZvodekSmCM+6he19GuGBk9FUIN+22HPWL+lRmRKE/YT+MBOEkzGoQMUUBWhq6mwZnmdV5Qm7KAjj0gTIc3g6AlSfeg8TfLda84RdEIRxOhigZtLXQL79ftZwDqlNoWEXA2HcqgDJZYSwnWRXoEbxg+i0wcQZVCAZoMS2salNvetJhAcmTxMgX07htiYxQJ59C/a0wcQaVCDHZp2kTeHoa/MWf3Dyi4YwKfrSHz9Lf64kZzMptak9/jza1DDRUjNLPcTntyfn2+lUm9pGmxomVwrOHhkcVy4vEkXd+iMZntdYqxz+wiGcpCY4wv6aHrEJQvAPoU0NE6kKzlN0gHzCKo5B8OvZbvkCER6YJBMfHILKIb1I6maEXQSEcRuscZIcHMJ3Hmd70aaGCbHfHEjgGmeQNWvOki94O9rUMBGaqZrgN+sRmmDQpoZJ0QSnnobgEGLLBczlr6qzC8IuCMI47Fec/9IjMwX41kVsYfYEjteFE5OCQ91ez/5PPSpTgihejz1tcGLSg/leOzplwSFoNzWaBXASpnKqNojHH1dtwbCLg3BcmoqTuqnaIMJ+UV8EhPFo1jiprThEc/Z8eQGLaFPD2KSKQ8Fx+X/oUZhSqoULVZu6g93UMAZNxUllc2A5Pr+YtWVw0KaG4zYITtorjoF2U/dOJoFwfAbt6KwEh6Dd1HjGA8epWeMI+9/1qMsIwn4UnTY4NoOdA/wmPeIyhMd3sN1PnnzREK5WWkvT2PKL/6ZHW4bY+9R5svIcQJsaRm5/qpbB4BBe6UImaDe1vNCwGwDhqApp5oNDCH6p+vpEfIUijEozVctcc2A5nvVFtKlhZKqKI4NTtzIeHIJ2U9NX2IXdCAiHNZiqUXCyPFUbxOOPYTc1XLUUHPp2DcHX6JGVAzz+grrosBsC4TAGa5w8BeeF8jvlBb/EFmbDbwqEZ9IEp56n4BDCuUCG5zW0qeGKNO1o1/pXPaJyBLWpfecEa6JNDUeUfuH2pvtf1aMpZ7j8S2xxDmdTw+GlrpqZqrl5DQ5BbeoDPwy/SRCGaSpOLqdqg7j8MZyYA4c2qDhWjisOQWdTu9Y2tKnhGTVTtV7FyXlwCPomYcF/wjo4XheeRgQnBPUVivywujFhNw1CEsEJwbMvk55gzVL4TYNQBWcr7Rz4Fz1qgKLOv6w+eo02NVzu4FQNwQlBWGvZQbSp4TIRnCGg3dQ4MQcOuiQ49j/rkQKWMDd3jrxZz/VONFl2A2F+DZoD/J/0SAEnsXf6PHmzXkKbGiqDirMVwTkjvv1+ecOOqfO0wm4mzI8mOHR6Ut3CVO2MUJuaumzYTQ1NcLDGGRJh36jmtmhT51sTHEzVRkDYa7GbOscOTtVqBQRnJKhNjRNz8mtQcRCc0ahWz5U38EdoU+dQVXEqZqr2j3pEgKHZNnW+vIkH0abOmYPB8ax/0KMBjIQo/YG8kcfRps6Rg2scYf+9HglgZHA2db4crDgIzirx7RvVOW1oU2ffJcHhf6dHAFgxPl/H9qPTlgtpak6/KOuoONEg+DTCkwNp90i7dIzNW3+r33mwKrrVc2V4nkebOgfSaZ7tyits+/Sf6ncfrIp6+T0yPPtxNnVOpPe5Pfu/bJ5/SI8AsGI86w/lIvItbAjNiYL3zpLulP+P1ewP61EAVoQoXKL6/Q102nKjCVC7/FNWty7SIwGMjOBfVm1LtKnzpQrQk9R9+xkq0Erx+Dp1bgHCkz9NBWrKAKECrQCPfx9f3ptjTQVqll5GgEahuoF2Uz+nzmoLu7EwH5oAtctyClfAFG4oxJb3yhu3iDY17Aeo8lMEaBjo0A/fPorjdaHSrIEoQC9uxhTutNT5xWwnNoTCAU2AOjJAVTk+wClAmxqGSTuvaQpHAaJfsCAEalPjYHcY5mAToTrzET1iQIDgMzj0A55SBOgUdNXZ1NvRpoantR+gl9l84RI9enKOz98n57aLbEGuecJuGoRGE6Bm6RXm2qhATDgXyLXOEbSp4VAiQAP4/GIcrwtH0gSoJQOU6zUQnU1N/XyEB44i1kASwb/O9jwdfoMgPJ0mQJ3Ky/mcwnl8C75CEa7YfoB+lq8K1O2eLcOzA21quCqDnQhyClfjl+rRlXGoTe3xRbWvLeymQDisVIGo8URTuGrhL/QIyzBe4UJ54Yfkoi/8hkA4iiZAdKzVi/ZlepRlFHfmI2hTw0gNunDUxs5yBXLtG9heOrcg5CZAuFJNgFql11g9qwFCmxqOSzOFUwFyMhggwbcgPHBsBmsgGSD6lvXM0O0yeUE1tKnhWFUB2krnY78q/5yRNvZ2alPb+9CmhmM3qECVV7PRRGg4f8yEdRhtahiLJkCd2VdY1fqoHoUppT5zGc4tgLFqArRAAdqS4gC5xRtwQiiMXdrKY6ZwO2Y+pkdjyqA29V502uAEDCqQDFCt8HE9IlOEsKfRaYMTM2gilF9LX4AEr6unwGEXBmEcBgEqHWI1OyUBmrffLSvPAZxNDSeuCVCLApSGCuQWPsBcC7upYTI0AWqWDstf6gkPEG2VUF+hiO8fhQlRBWgrrYEOyT8nuAsnrBvZAbSpYcI0FahTeS25ARLWWpxbABPpYIASuQby7SnspoaJdTBA1Zm/0qM2IVCbml5c2AuHMAmaNdCCDFA9KQFqzp4vX9hP0KaGidcEqFM+lIwAucUPMI+jTQ3T4ZIA8QkHiLoYdKh7E21qmBLNGqhdOcxc+xN6JE8Az/4KdlPD1GkqUKt8hM1bl+vRHDO0mxrhgWnUBKhZfJ3VixOYwlGbGh9FgGmVArSTpnCyAsW+BhK8ijY1TLUqQLICqTVQIaY10MFtb5c//H9YpxL+oiBMi2YK15k9HM8aqFH+PebyI3LRFf6CIEyTQYAqh8bfhfOcP2MN5wR2U8PMaKZwHTmFq/Er9EgfA6JwtdoQirOpYZaMJUCu/VV24IfhLwDCNNtvIhxhNftKPeIjpGFvwaEfMLOaNRC1sWuFiAMkrNvY/jl8ghRmVxOgVvl1Vrc+qUd+BMzNnSP/8UcQIJhpzRSuVTrKqlEGqLrhXBWgfRQgHLULM+pggCKtQNPTb2OeCRAqEMyoQRNBTuEi7cI1KUD2wwgQzLQmQJ3KkWgrkAqQ8xDb9wymcDC7BgGalQFyxhEgVCCYYQcD5PJP6dEfAWoNJAOELhzMsoMBmo8yQNXqufIHPIgKBDPt0gp0lR79EUDPgXx7EwIEM60JULtylNUKV+vRHwFTU2cjQDDzLgmQ9Wk9+iOAAoQpHMy6JkCt8rFoK9DcTefIH4AAwWwbVKDIA0R74TCFgxlXBWiWpnDHom0idGWAXI4KBLMtBWhBr4HmowwQtbF9+wEECGZaM4XrVF6PdgpHu7ERIJh1BwMk7IgD5Nn3IUAw0woprYE6s0dZdfM1evRHAHXhhHN/bzMpAgQzqloDyQBRFXKLEW7loS5cAxUIZlga1zS+F2YPRn8udnfNWfKHIEAwe9Jx1OrhafERVtv8O3rER8waGSDf2YgAwUxIY5g+WdAqLzLf+qwe5WOk26XD4+UaCAGCKdZUm3bpIfbClt/UozsGaC8cAgTTKH1DIn1flV88wHx+rR7RMdOVAXI51kAwPQZrm9Imtm3qN/RInhDUxnbtjWwRAYIJ1lSbRnG//HuEz3FWC1Ugwb+rKhC+NBgmTVNtGsVN7MXCb+lRmyDUg1QZIFQgmBRNtWmWFpnHP6NHakLpfSL1XqyB4MQ11YbOKZyf/m09QhMOPUhtOBvUdwJhCgfj1lSbTmU3a0W5xSYu6DmQZ2/AGgjG6m6qNrO9tY0X53ObqJH5YYKmcKhAcMwOVptID/aYNKYCYQ0ExyFVG9oJ3XIekMH5dT3qMkJvK8+9ag2EAMGoNNWmVdqTrWqzHNpMKlCBYERSJ42qTbt0H/P5+/QoyzBqL5wMEJ4DwZVIn/Q01aZRXGQiy9UmjN5m0vUIEBxZs7ZpljZmb20zLOoDdc530IWDQ2mqTbu0izWj/J6dtEIB8ov34DkQPK27n+pVG8+5n7mT3gGdJKiJQBWIpnAIEBy0WZLVRo6LdmWnXOtcqUcMWAK1sX3nbmzlgYGm2jSK9+V3bTMKnnUPKlDOVdVGrm0WZjtMFCP8Fus84NkIUF6latOpyPfe2ch2TP+qHhFgJFyOLlyeNNWmVdol17/opK0O2o1NUzgEKPOaatMur2fi4ffqAQBWRW8vHJoIWdVUG9/ZjU7aOECAsintEqBq05LVZvtjOdiTNimWBEj+tgp7M2DyVXvSdLVplnbKinO5fofBWOkF6NsIUIo1axs626K65df0OwtiQ9j/jTZ2ylTVhnYJlNvM4xF/4wAYDY8ChDVQKjTVho4iw3ObhODZd2EKl2DN2qZTaTHP+kv9roHEoKZwqECJk6pNu9xljdJ69vwWPLdJLKhAydFUm1apzVz7E/odAommXtBdOFSgiWmqTat0N2vPvEu/MyAVBBUIAYrNwec2DWeBuRae26QWF1O4WKVq0yqfYK3it9m8/W79LoDUIvgdqEBjdOkugTY6aVnD43eiAo3JPbra0LkTAp20bCJsXYEQoEhs6WrTLjVZo/QxfZdBZvHtbyFAEdirNvLPstrguU2OEPx2BGiFmmrTKfvMK12m7yjIFQIVaGRNtaETjeYfRSct11CA9iJAZ7S/tmkwUfi4vnsg97j8DgToNKpqUzrBWs5dzC/+ir5rAGjqFirQoPTcxlQb32mxBkcnDZwGYQKEB6mq2nQqx1mzfCfbNnW+vkMAnAbqwu19Op8BGqw2jWJTTtE+qu8KAEPi8m/2ApSzKdweec1tWW384h3opIGV49nfyE2AVLWZk/9ZEbLiXqrvAACrQAUo400E00mj8x+eQbUBUWIqEP12Dht8abX/3EYw4VyirxaAiPH4ukxVIFrb0LU0nDvZjofw6U4wZjxHBijla6Cg2pRdJjjWNiBG3BRP4ajatEpvyfB/i7mFX9ZXBECMuFa6unC0ibP33MaXf8cOaDBhXCsdUzj13Kb8pgzQN9j89Hn61QMwYQT/eiIDtGSXgOOhkwaSiXB6AUrSGshUm0bxm9gBDZKNb6+deIBUtdFrm1a5zvzSxfrVAZBwfPu2iU7hVHjLx9UH+7ADGqQOE6A4K5CpNu1KTf79w/qVAJBCRIwBop/TcE4w37md/ehRrG1ABhh3gEy16ZTnWZ1jbQMyxrgCpP7N4pus6axjLzzyTv3TAMgYwrpNb4kJD8IoBrsEnDqqDcgHVIFWGyCqNp3KMdYur2XN6XfofxmAHGACNEobm57b0BdC7ZvrMr/ootqA/OLat+hPbIaHZbkUNqo2jeJt2JMGgGvJAJ1mCje4S6BZrLFaAc9tAAjw7a+dMkC0tmmX32C+sw6ftwEgDN+5OQiQ4P21Tbv8Ims4f67/XwCAUAS/me3aKtc2ch3ULB1nTXst1jYADIvLb2U7t9aYX/gT/d+A1MHY/wPAkuzQdGOMlgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/heroku.png":
/*!*******************************!*\
  !*** ./src/images/heroku.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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dtZ1A7DYEwBTEAAUtee+fY+4sn/w9w56ZtuhQ4dLTxiooaG6fgASMycAGAgHPUCzCABm1UMH/bYd2X67gx6gqQQAx+QxD/ptO7LnPgc9QBsIACbloAfoJgHApH77XZ8qPQGAOVDPj8YCAB4iAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAACgQgIAACokAJjUa0YuycJF80vPAGCWCQAmddFznpi3veeKrFs/XHoKALNIADCldeuH87b3XJGnPfeJpacAMEsEANOycNH8vPotl3gSAOgIAcCMeBIA6AYBwIx5EgBoPwHAMfEkANBuAoDj4kkAoJ0EAMfNkwBA+wgAZoUnAYB2EQDMKk8CAO0gAJh1ngQAmk8AMCc8CQA0mwBgTnkSAGgmAcCc8yQA0DwCgIHwJADQLAKAgfIkANAMAoCB8yQAUJ4AoAhPAgBlCQCK8iQAUIYAoDhPAgCDJwBoBE8CAIMlAGgUTwIAgyEAaBxPAgBzTwDQSJ4EAOaWAKDRPAkAzA0BQON5EgCYfQKAVvAkADC7BACt4kkAYHYIAFrHkwDA8RMAtJInAYDjIwBoNU8CAMdGANB6ngQAZk4A0AmeBABmRgDQKZ4EAKZHANA5ngQApiYA6CRPAgCTEwB0micBgMcmAOg8TwIAjyYAqIInAYBHEgBUxZMAwAQBQHU8CQAIACrlSQConQCgap4EgFoJAKrnSQCokQAAgAotKD0AStu+bWc+9sf/mO3bdpaeAjAwAoCqff0r38tnPvy17H/gYOkpAAMlAKjS/gcO5m8+8rX8+5e/V3oKQBECgOq48gcQAFTGlT/ABAFAFVz5AzySAKDzXPkDPJoA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"

/***/ }),

/***/ "./src/images/netflix.png":
/*!********************************!*\
  !*** ./src/images/netflix.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/photo_not_available.png":
/*!********************************************!*\
  !*** ./src/images/photo_not_available.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/photo_not_available-8dd3cc775f995ae0fa838e1b0f820372.png";

/***/ }),

/***/ "./src/images/popcorntime.png":
/*!************************************!*\
  !*** ./src/images/popcorntime.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/popcorntime-738650b2b4cf6fb108caec61122f900a.png";

/***/ }),

/***/ "./src/images/react.png":
/*!******************************!*\
  !*** ./src/images/react.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/react-cd7bb6bec60f6799aa174b4e07b92ea4.png";

/***/ }),

/***/ "./src/images/redux.png":
/*!******************************!*\
  !*** ./src/images/redux.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/redux-8251fe76d7487a28b07603515b300964.png";

/***/ }),

/***/ "./src/redux/actions/movies.js":
/*!*************************************!*\
  !*** ./src/redux/actions/movies.js ***!
  \*************************************/
/*! exports provided: fetchMoviesByFilter, fetchMoviesByKeyword, fetchMovieDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMoviesByFilter", function() { return fetchMoviesByFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMoviesByKeyword", function() { return fetchMoviesByKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMovieDetails", function() { return fetchMovieDetails; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/redux/actions/types.js");
/* harmony import */ var _apis_movies_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/movies-api */ "./src/apis/movies-api.js");

 // Fetching movies using given filters like popular, trending or rating

const fetchMoviesByFilter = (page, filter) => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]
  });

  try {
    const movies = await _apis_movies_api__WEBPACK_IMPORTED_MODULE_1__["default"].fetchMoviesByFilter(page, filter);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_MOVIES"],
      payload: movies
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING_UI"]
    });
  } catch (err) {
    throw err;
  }
}; // Fetching movies using search and it will display best results for the query


const fetchMoviesByKeyword = query => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]
  });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["KEYWORD"],
    payload: query
  });

  try {
    const movies = await _apis_movies_api__WEBPACK_IMPORTED_MODULE_1__["default"].fetchMoviesByKeyword(query);

    if (movies.data.length < 1) {
      alert('No search results for: ' + movies.query);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING_UI"]
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FILTER_BY"],
        payload: 'popular'
      });
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MOVIES_BY_KEYWORD"],
      payload: movies
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING_UI"]
    });
  } catch (err) {
    throw err;
  }
};

const fetchMovieDetails = id => async dispatch => {
  const movie = await _apis_movies_api__WEBPACK_IMPORTED_MODULE_1__["default"].fetchMovieDetails(id);
  console.log('Fetching Movie Details: ', movie);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MOVIE_DETAILS"],
    payload: movie
  });
};



/***/ }),

/***/ "./src/redux/actions/types.js":
/*!************************************!*\
  !*** ./src/redux/actions/types.js ***!
  \************************************/
/*! exports provided: FETCH_POPULAR_MOVIES, FETCH_MOVIES_BY_KEYWORD, LOADING_UI, SET_ERRORS, STOP_LOADING_UI, CLEAR_ERRORS, FILTER_BY, KEYWORD, FETCH_MOVIE_DETAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR_MOVIES", function() { return FETCH_POPULAR_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MOVIES_BY_KEYWORD", function() { return FETCH_MOVIES_BY_KEYWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_UI", function() { return LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERRORS", function() { return SET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LOADING_UI", function() { return STOP_LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BY", function() { return FILTER_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYWORD", function() { return KEYWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MOVIE_DETAILS", function() { return FETCH_MOVIE_DETAILS; });
const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';
const FETCH_MOVIES_BY_KEYWORD = 'FETCH_MOVIES_BY_KEYWORD';
const LOADING_UI = 'LOADING_UI';
const SET_ERRORS = 'SET_ERRORS';
const STOP_LOADING_UI = 'STOP_LOADING_UI';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
const FILTER_BY = 'FILTER_BY';
const KEYWORD = 'KEYWORD';
const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';


/***/ }),

/***/ "./src/redux/actions/ui.js":
/*!*********************************!*\
  !*** ./src/redux/actions/ui.js ***!
  \*********************************/
/*! exports provided: clearErrors, setFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearErrors", function() { return clearErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilters", function() { return setFilters; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/redux/actions/types.js");


const clearErrors = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
  });
};

const setFilters = filterBy => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FILTER_BY"],
    payload: filterBy
  });
};



/***/ }),

/***/ "./src/utils/MovieCardLoader/MovieCardLoader.js":
/*!******************************************************!*\
  !*** ./src/utils/MovieCardLoader/MovieCardLoader.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieCardLoader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieCardLoader.scss */ "./src/utils/MovieCardLoader/MovieCardLoader.scss");
/* harmony import */ var _MovieCardLoader_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MovieCardLoader_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/utils/MovieCardLoader/MovieCardLoader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MovieCardLoader extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      isLoaded: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    const image = new Image();

    image.onload = () => {
      if (this._isMounted) {
        this.setState({
          isLoaded: true
        });
      }
    };

    image.src = this.props.src;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      src,
      title,
      year,
      stars,
      fetchMovieDetails,
      id
    } = this.props;
    const {
      isLoaded
    } = this.state;
    return isLoaded ? __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("img", {
      src: src,
      alt: "movie_image",
      className: "movie-card__img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("div", {
      className: "movie-card__overlay",
      onClick: () => fetchMovieDetails(id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h1", {
      className: "movie-card__overlay__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, title), __jsx("span", {
      className: "movie-card__overlay__year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, year), __jsx("span", {
      className: "movie-card__overlay__popularity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, stars))) : __jsx("div", {
      className: "movie-card__faker movie-card-loader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "loader ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MovieCardLoader);

/***/ }),

/***/ "./src/utils/MovieCardLoader/MovieCardLoader.scss":
/*!********************************************************!*\
  !*** ./src/utils/MovieCardLoader/MovieCardLoader.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/Skeleton/GridSkeleton.js":
/*!********************************************!*\
  !*** ./src/utils/Skeleton/GridSkeleton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gridSkeleton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gridSkeleton.scss */ "./src/utils/Skeleton/gridSkeleton.scss");
/* harmony import */ var _gridSkeleton_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gridSkeleton_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/utils/Skeleton/GridSkeleton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const GridSkeleton = props => {
  const content = Array.from({
    length: 10
  }).map((e, index) => __jsx("div", {
    className: "movie-card movie-card__skeleton",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "movie-card__faker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })));
  return __jsx("div", {
    className: "grid-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "grid-view__container container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, content));
};

/* harmony default export */ __webpack_exports__["default"] = (GridSkeleton);

/***/ }),

/***/ "./src/utils/Skeleton/TableSkeleton.js":
/*!*********************************************!*\
  !*** ./src/utils/Skeleton/TableSkeleton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tableSkeleton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableSkeleton.scss */ "./src/utils/Skeleton/tableSkeleton.scss");
/* harmony import */ var _tableSkeleton_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tableSkeleton_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/utils/Skeleton/TableSkeleton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TableSkeleton = props => {
  const content = Array.from({
    length: 20
  }).map((e, index) => __jsx("tr", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "\xA0"), __jsx("td", {
    className: "table-view__table__tbody__th has-text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "\xA0")));
  return __jsx("div", {
    className: "container  table-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("table", {
    className: "table is-hoverable table-view__table table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("th", {
    className: "table-view__title has-text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, " ", __jsx("span", {
    className: "table-view__span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "\xA0")), __jsx("th", {
    className: "table-view__year has-text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("span", {
    className: "table-view__span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "\xA0")))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, content)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableSkeleton);

/***/ }),

/***/ "./src/utils/Skeleton/gridSkeleton.scss":
/*!**********************************************!*\
  !*** ./src/utils/Skeleton/gridSkeleton.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/Skeleton/tableSkeleton.scss":
/*!***********************************************!*\
  !*** ./src/utils/Skeleton/tableSkeleton.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/GridView.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/milanblaz/Documents/Projects/vivant_movies/pages/GridView.js */"./pages/GridView.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=GridView.js.map