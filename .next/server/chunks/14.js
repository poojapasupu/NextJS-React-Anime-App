"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ internalGetRequest),
  "D": () => (/* binding */ internalPostRequest)
});

;// CONCATENATED MODULE: ./lib/properties/environment-variables.js
/* Use the appropriate variable for your current enironment and leave the other variables commented */
//Local Environment
const ENV_VAR = 'http://localhost:3000'; //Dev Environment
// export const ENV_VAR = 'https://dev.domain.com';
//Prod Environment
// export const ENV_VAR = 'http://prod.domain.com';
// EXTERNAL MODULE: ./lib/properties/api-urls.js
var api_urls = __webpack_require__(928);
;// CONCATENATED MODULE: ./lib/api/internal-api.js

 //POST method call to the internal API

const internalPostRequest = async req => {
  const response = await fetch(`${ENV_VAR}${api_urls/* INTERNAL_ANILIST_API */.v}`, {
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
  const response = await fetch(`${ENV_VAR}${api_urls/* INTERNAL_ANILIST_API */.v}`, {
    method: "GET"
  });
  const data = await response.json();
  return data;
};

/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ INTERNAL_ANILIST_API),
/* harmony export */   "T": () => (/* binding */ EXTERNAL_ANILIST_API)
/* harmony export */ });
/* API REQUEST URLS */
const INTERNAL_ANILIST_API = '/api/anilist-api';
const EXTERNAL_ANILIST_API = 'https://graphql.anilist.co';

/***/ })

};
;