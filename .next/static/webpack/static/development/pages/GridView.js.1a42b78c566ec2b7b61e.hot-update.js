webpackHotUpdate("static/development/pages/GridView.js",{

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_movies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/movies */ "./src/redux/actions/movies.js");
/* harmony import */ var _redux_actions_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/ui */ "./src/redux/actions/ui.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");

var _jsxFileName = "/Users/milanblaz/Documents/Projects/vivant_movies/src/components/Header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







 //ICONS



class Header extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      keyword: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", e => {
      // this.setState({ keyword: e.target.value });
      console.log('handleChange');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", e => {
      e.preventDefault(); // this.props.fetchMoviesByKeyword(this.state.keyword).catch(ex => {
      //   alert('Something failed');
      //   this.props.setFilters('popular');
      // });
      // this.setState({ keyword: '' });
      // this.props.setFilters('search');
      // this.handleOpen();

      console.log('onSubmit');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onLogoClick", () => {
      // this.props.setFilters('popular');
      // this.props.history.push(`/gridView/1`);
      // window.scrollTo(0, 0);
      console.log('onLogoClick');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleOpen", () => {
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
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoMdGrid"], {
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
    }), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosList"], {
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

/***/ })

})
//# sourceMappingURL=GridView.js.1a42b78c566ec2b7b61e.hot-update.js.map