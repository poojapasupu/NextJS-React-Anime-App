"use strict";
(() => {
var exports = {};
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ INTERNAL_ANILIST_API),
/* harmony export */   "T": () => (/* binding */ EXTERNAL_ANILIST_API)
/* harmony export */ });
/* API REQUEST URLS */
const INTERNAL_ANILIST_API = '/api/anilist-api';
const EXTERNAL_ANILIST_API = 'https://graphql.anilist.co';

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FETCH_ERROR),
/* harmony export */   "V": () => (/* binding */ PAGE_NOT_FOUND_404)
/* harmony export */ });
/* ERROR MESSAGES */
const FETCH_ERROR = 'Couldn\'t fetch data. Please try again later.';
const PAGE_NOT_FOUND_404 = '404 - Page Not Found. Please visit \'Home\' page';

/***/ }),

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ anilist_api)
});

;// CONCATENATED MODULE: ./lib/queries/queries.js
// Query to get Media by page from Anilist Graphql API
const GET_MEDIA_BY_PAGE = `query ($page: Int, $perPage: Int) { 
    Page (page: $page, perPage : $perPage) {
        pageInfo {
            perPage
            currentPage
        }
        media {
            id
            title {
                userPreferred  
              }
            description(asHtml:true)
            coverImage {
                extraLarge
                large
                medium
            }
        }
    }
}`;
// EXTERNAL MODULE: ./lib/properties/app-variables.ts
var app_variables = __webpack_require__(118);
// EXTERNAL MODULE: ./lib/properties/error-properties.ts
var error_properties = __webpack_require__(668);
// EXTERNAL MODULE: ./lib/properties/api-urls.ts
var api_urls = __webpack_require__(224);
;// CONCATENATED MODULE: ./pages/api/anilist-api.ts





const handler = (req, res) => {
  if (req.method === "POST" || req.method === "GET") {
    var variables;

    if (req.method === "POST") {
      variables = {
        page: req.body && req.body.pageId ? +req.body.pageId : 1,
        perPage: app_variables/* IMAGES_PER_PAGE */.a5
      };
    } else if (req.method === "GET") {
      variables = {
        page: 1,
        perPage: app_variables/* REST_API_IMAGES_PER_PAGE */.Wc
      };
    }

    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: GET_MEDIA_BY_PAGE,
        variables
      })
    };

    const handleResponse = async response => {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
      });
    };

    const handleData = response => {
      res.status(200).json(response);
    };

    const handleError = error => {
      res.status(500).json({
        error: error_properties/* FETCH_ERROR */.c
      });
    }; // Anilist Api request


    fetch(api_urls/* EXTERNAL_ANILIST_API */.T, options).then(handleResponse).then(handleData).catch(handleError);
  }
};

/* harmony default export */ const anilist_api = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(458));
module.exports = __webpack_exports__;

})();