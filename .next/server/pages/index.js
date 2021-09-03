"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_media_MediaList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(873);
/* harmony import */ var _lib_api_internal_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





function HomePage(props) {
  if (props.error) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      children: props.error
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_components_media_MediaList__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      media: props.media
    })
  });
}

async function getServerSideProps() {
  //fetch data from api
  const res = await (0,_lib_api_internal_api__WEBPACK_IMPORTED_MODULE_2__/* .internalPostRequest */ .D)();
  return {
    props: {
      pageInfo: res.data && res.data.Page && res.data.Page.pageInfo ? res.data.Page.pageInfo : null,
      media: res.data && res.data.Page && res.data.Page.media ? res.data.Page.media : null,
      error: res.error ? res.error : null
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ 51:
/***/ ((module) => {

module.exports = require("html-react-parser");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [14,873], () => (__webpack_exec__(124)));
module.exports = __webpack_exports__;

})();