(() => {
var exports = {};
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U8": () => (/* binding */ NUMBER_OF_PAGES),
/* harmony export */   "a5": () => (/* binding */ IMAGES_PER_PAGE),
/* harmony export */   "Wc": () => (/* binding */ REST_API_IMAGES_PER_PAGE)
/* harmony export */ });
/* Application variables */
const NUMBER_OF_PAGES = 3;
const IMAGES_PER_PAGE = 4;
const REST_API_IMAGES_PER_PAGE = 10;

/***/ }),

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FETCH_ERROR),
/* harmony export */   "V": () => (/* binding */ PAGE_NOT_FOUND_404)
/* harmony export */ });
/* ERROR MESSAGES */
const FETCH_ERROR = 'Couldn\'t fetch data. Please try again later.';
const PAGE_NOT_FOUND_404 = '404 - Page Not Found. Please visit \'Home\' page';

/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_media_MediaList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(720);
/* harmony import */ var _lib_api_internal_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(673);
/* harmony import */ var _lib_properties_error_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(668);
/* harmony import */ var _lib_properties_app_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(118);
/* harmony import */ var _components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(444);
/* harmony import */ var _components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);









const Page = props => {
  if (props.error) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),
      children: props.error
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_media_MediaList__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      media: props.media
    })
  });
};

const getServerSideProps = async context => {
  //fetch data from api
  if (+context.params.pageId > 0 && +context.params.pageId <= _lib_properties_app_variables__WEBPACK_IMPORTED_MODULE_4__/* .NUMBER_OF_PAGES */ .U8) {
    var _res$data$Page$pageIn, _res$data, _res$data$Page, _res$data$Page$media, _res$data2, _res$data2$Page, _res$error;

    const res = await (0,_lib_api_internal_api__WEBPACK_IMPORTED_MODULE_5__/* .internalPostRequest */ .D)({
      pageId: +context.params.pageId
    });
    return {
      props: {
        pageInfo: (_res$data$Page$pageIn = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$Page = _res$data.Page) === null || _res$data$Page === void 0 ? void 0 : _res$data$Page.pageInfo) !== null && _res$data$Page$pageIn !== void 0 ? _res$data$Page$pageIn : null,
        media: (_res$data$Page$media = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$Page = _res$data2.Page) === null || _res$data2$Page === void 0 ? void 0 : _res$data2$Page.media) !== null && _res$data$Page$media !== void 0 ? _res$data$Page$media : null,
        error: (_res$error = res === null || res === void 0 ? void 0 : res.error) !== null && _res$error !== void 0 ? _res$error : null
      }
    };
  } else {
    return {
      props: {
        pageInfo: null,
        media: null,
        error: _lib_properties_error_properties__WEBPACK_IMPORTED_MODULE_6__/* .PAGE_NOT_FOUND_404 */ .V
      }
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 444:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Layout_main__2Mwq5",
	"error": "Layout_error__2eYO-",
	"rest": "Layout_rest__3E0kj"
};


/***/ }),

/***/ 51:
/***/ ((module) => {

"use strict";
module.exports = require("html-react-parser");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [340], () => (__webpack_exec__(702)));
module.exports = __webpack_exports__;

})();