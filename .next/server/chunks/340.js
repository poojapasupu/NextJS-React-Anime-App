exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ media_MediaList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(7051);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
// EXTERNAL MODULE: ./components/media/MediaItem.module.css
var MediaItem_module = __webpack_require__(9909);
var MediaItem_module_default = /*#__PURE__*/__webpack_require__.n(MediaItem_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/media/MediaItem.tsx




const MediaItem = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: (MediaItem_module_default()).item,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MediaItem_module_default()).image,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: props.image
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MediaItem_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: props.title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MediaItem_module_default()).description,
        children: props.description
      })]
    })]
  });
};

/* harmony default export */ const media_MediaItem = (MediaItem);
// EXTERNAL MODULE: ./components/media/MediaList.module.css
var MediaList_module = __webpack_require__(4007);
var MediaList_module_default = /*#__PURE__*/__webpack_require__.n(MediaList_module);
;// CONCATENATED MODULE: ./components/media/MediaList.tsx






const MediaList = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: (MediaList_module_default()).list,
    children: props.media && props.media.length > 0 && props.media.map(image => {
      return /*#__PURE__*/jsx_runtime_.jsx(media_MediaItem, {
        image: image.coverImage.large,
        title: image.title.userPreferred,
        description: external_html_react_parser_default()(image.description),
        id: image.id
      }, image.id);
    })
  });
};

/* harmony default export */ const media_MediaList = (MediaList);

/***/ }),

/***/ 3673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ internalPostRequest),
/* harmony export */   "H": () => (/* binding */ internalGetRequest)
/* harmony export */ });
/* harmony import */ var _properties_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7224);

//POST method call to the internal API
const internalPostRequest = async req => {
  const response = await fetch(`${"https://next-js-react-anime-app.vercel.app"}${_properties_api_urls__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_ANILIST_API */ .v}`, {
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
  const response = await fetch(`${"https://next-js-react-anime-app.vercel.app"}${_properties_api_urls__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_ANILIST_API */ .v}`, {
    method: "GET"
  });
  const data = await response.json();
  return data;
};

/***/ }),

/***/ 7224:
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

/***/ 9909:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MediaItem_item__1YLkL",
	"image": "MediaItem_image__3ASoS",
	"content": "MediaItem_content__3VTbl",
	"clear": "MediaItem_clear__u4inU"
};


/***/ }),

/***/ 4007:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MediaList_list__28428"
};


/***/ })

};
;