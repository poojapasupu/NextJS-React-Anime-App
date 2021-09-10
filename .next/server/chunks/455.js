exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 4118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U8": () => (/* binding */ NUMBER_OF_PAGES),
/* harmony export */   "a5": () => (/* binding */ IMAGES_PER_PAGE),
/* harmony export */   "Wc": () => (/* binding */ REST_API_IMAGES_PER_PAGE)
/* harmony export */ });
/* Application variables */
const NUMBER_OF_PAGES = 5;
const IMAGES_PER_PAGE = 6;
const REST_API_IMAGES_PER_PAGE = 10;

/***/ }),

/***/ 1872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": () => (/* binding */ MediaContextProvider),
/* harmony export */   "kH": () => (/* binding */ useMediaContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const MediaContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  pageArray: [],
  dispatch: () => {}
});

const mediaReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      {
        return [...state, action.page];
      }

    default:
      return state;
  }
};

const MediaContextProvider = props => {
  const defaultState = [];
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(mediaReducer, defaultState);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MediaContext.Provider, {
    value: {
      pageArray: state,
      dispatch
    },
    children: props.children
  });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MediaContext)));
const useMediaContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MediaContext);

/***/ }),

/***/ 6444:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Layout_main__2Mwq5",
	"error": "Layout_error__2eYO-",
	"rest": "Layout_rest__3E0kj"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;