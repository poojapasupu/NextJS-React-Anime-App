(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./components/layout/MainNavigation.module.css
var MainNavigation_module = __webpack_require__(7284);
var MainNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MainNavigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/layout/MainNavigation.tsx






const MainNavigation = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: (MainNavigation_module_default()).header,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MainNavigation_module_default()).logo,
        children: "animeExplorer"
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/rest-api",
              children: "REST API"
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const layout_MainNavigation = (MainNavigation);
// EXTERNAL MODULE: ./components/layout/Layout.module.css
var Layout_module = __webpack_require__(6444);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layout/PageNavigation.module.css
var PageNavigation_module = __webpack_require__(7607);
var PageNavigation_module_default = /*#__PURE__*/__webpack_require__.n(PageNavigation_module);
// EXTERNAL MODULE: ./lib/properties/app-variables.ts
var app_variables = __webpack_require__(4118);
;// CONCATENATED MODULE: ./components/layout/DynamicPageNumbers.tsx






const DynamicPageNumbers = () => {
  let numArray = [];

  for (let i = 1; i <= app_variables/* NUMBER_OF_PAGES */.U8; i++) {
    numArray.push(i);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    children: numArray.map(num => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [num === 1 && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "1"
          })
        }), num !== 1 && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/page/${num}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: num
          })
        })]
      }, num);
    })
  });
};

/* harmony default export */ const layout_DynamicPageNumbers = (DynamicPageNumbers);
;// CONCATENATED MODULE: ./components/layout/PageNavigation.tsx






const PageNavigation = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (PageNavigation_module_default()).footer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Pages"
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_DynamicPageNumbers, {})
    })]
  });
};

/* harmony default export */ const layout_PageNavigation = (PageNavigation);
;// CONCATENATED MODULE: ./components/layout/Layout.tsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_MainNavigation, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: (Layout_module_default()).main,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_PageNavigation, {})]
  });
};

/* harmony default export */ const layout_Layout = (Layout);
// EXTERNAL MODULE: ./store/media-context.tsx
var media_context = __webpack_require__(1872);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(media_context/* MediaContextProvider */.C1, {
    children: /*#__PURE__*/jsx_runtime_.jsx(layout_Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 7284:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "MainNavigation_header__t8YPG",
	"logo": "MainNavigation_logo__Qwpy5",
	"active": "MainNavigation_active__sxu85"
};


/***/ }),

/***/ 7607:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "PageNavigation_footer__hg44M",
	"active": "PageNavigation_active__6Hg0P"
};


/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
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
var __webpack_exports__ = __webpack_require__.X(0, [920,664,455], () => (__webpack_exec__(9204)));
module.exports = __webpack_exports__;

})();