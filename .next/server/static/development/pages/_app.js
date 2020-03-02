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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store.js");
/* harmony import */ var _src_redux_actions_movies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/redux/actions/movies */ "./src/redux/actions/movies.js");
var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








class Vivant extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  async componentDidMount() {
    console.log('Mounted this motherfucker');
  }

  render() {
    const {
      Component,
      store,
      pageProps
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })));
  }

}

Vivant.getInitialProps = async ({
  Component,
  ctx
}) => {
  console.log(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  ctx.store.dispatch(Object(_src_redux_actions_movies__WEBPACK_IMPORTED_MODULE_5__["fetchMoviesByFilter"])());
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_src_redux_store__WEBPACK_IMPORTED_MODULE_4__["default"])(Vivant));

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

/***/ "./src/redux/reducers/moviesReducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/moviesReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  movies: [],
  numOfPages: 1
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_MOVIES"]:
      return _objectSpread({}, state, {
        movies: action.payload.data,
        numOfPages: action.payload.numOfPages
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MOVIES_BY_KEYWORD"]:
      if (action.payload.data.length > 1) {
        return _objectSpread({}, state, {
          movies: action.payload.data,
          numOfPages: action.payload.numOfPages
        });
      } else {
        return _objectSpread({}, state);
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MOVIE_DETAILS"]:
      return _objectSpread({}, state, {
        movieDetails: action.payload.data
      });
  }
});

/***/ }),

/***/ "./src/redux/reducers/uiReducer.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/uiReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  errors: false,
  loading: false,
  keyword: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING_UI"]:
      return _objectSpread({}, state, {
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ERRORS"]:
      return _objectSpread({}, state, {
        errors: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]:
      return _objectSpread({}, state, {
        errors: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FILTER_BY"]:
      return _objectSpread({}, state, {
        filterBy: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["KEYWORD"]:
      return _objectSpread({}, state, {
        keyword: action.payload
      });
  }
});

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_moviesReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/moviesReducer */ "./src/redux/reducers/moviesReducer.js");
/* harmony import */ var _redux_reducers_uiReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/uiReducer */ "./src/redux/reducers/uiReducer.js");





const initialState = {
  UI: {
    loading: true
  }
};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];
const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  UI: _redux_reducers_uiReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  data: _redux_reducers_moviesReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}); // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducers,
//   initialState,
//   composeEnhancers(applyMiddleware(...middleware))
// );

const makeStore = initialState => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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
//# sourceMappingURL=_app.js.map