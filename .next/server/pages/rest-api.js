(() => {
var exports = {};
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ internalPostRequest),
/* harmony export */   "H": () => (/* binding */ internalGetRequest)
/* harmony export */ });
/* harmony import */ var _properties_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);

//POST method call to the internal API
const internalPostRequest = async req => {
  console.log(`${"http://localhost:3000"}${_properties_api_urls__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_ANILIST_API */ .v}`);
  const response = await fetch(`${"http://localhost:3000"}${_properties_api_urls__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_ANILIST_API */ .v}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  });
  const data = await response.json();
  return data;
}; //GET method call to the internal API

const internalGetRequest = async () => {
  const response = await fetch(`${"http://localhost:3000"}${_properties_api_urls__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_ANILIST_API */ .v}`, {
    method: "GET"
  });
  const data = await response.json();
  return data;
};

/***/ }),

/***/ 224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ INTERNAL_ANILIST_API),
/* harmony export */   "T": () => (/* binding */ EXTERNAL_ANILIST_API)
/* harmony export */ });
/* API REQUEST URLS */
const INTERNAL_ANILIST_API = '/api/anilist-api';
const EXTERNAL_ANILIST_API = 'https://graphql.anilist.co';

/***/ }),

/***/ 768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api_internal_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(673);
/* harmony import */ var _components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(444);
/* harmony import */ var _components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


 //Rest-api which provides 10 Images on page 1.




const RestApi = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: (_components_layout_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().rest),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("pre", {
      children: [" ", JSON.stringify(props.res, null, 2)]
    })
  });
};

const getServerSideProps = async () => {
  //fetch data from api
  const res = await (0,_lib_api_internal_api__WEBPACK_IMPORTED_MODULE_3__/* .internalGetRequest */ .H)();
  return {
    props: {
      res
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestApi);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(768));
module.exports = __webpack_exports__;

})();