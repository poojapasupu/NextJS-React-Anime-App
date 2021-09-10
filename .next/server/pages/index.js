"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_media_MediaList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(720);
/* harmony import */ var _lib_api_internal_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3673);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const HomePage = props => {
  if (props.error) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      children: props.error
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_components_media_MediaList__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    media: props.media
  });
};

const getServerSideProps = async () => {
  var _res$data$Page$pageIn, _res$data, _res$data$Page, _res$data$Page$media, _res$data2, _res$data2$Page, _res$error;

  //fetch data from api
  const res = await (0,_lib_api_internal_api__WEBPACK_IMPORTED_MODULE_2__/* .internalPostRequest */ .D)(null);
  return {
    props: {
      pageInfo: (_res$data$Page$pageIn = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$Page = _res$data.Page) === null || _res$data$Page === void 0 ? void 0 : _res$data$Page.pageInfo) !== null && _res$data$Page$pageIn !== void 0 ? _res$data$Page$pageIn : null,
      media: (_res$data$Page$media = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$Page = _res$data2.Page) === null || _res$data2$Page === void 0 ? void 0 : _res$data2$Page.media) !== null && _res$data$Page$media !== void 0 ? _res$data$Page$media : null,
      error: (_res$error = res === null || res === void 0 ? void 0 : res.error) !== null && _res$error !== void 0 ? _res$error : null
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("html-react-parser");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [340], () => (__webpack_exec__(2562)));
module.exports = __webpack_exports__;

})();