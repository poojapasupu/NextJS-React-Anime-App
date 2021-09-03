exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ media_MediaList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(51);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
// EXTERNAL MODULE: ./components/media/MediaItem.module.css
var MediaItem_module = __webpack_require__(909);
var MediaItem_module_default = /*#__PURE__*/__webpack_require__.n(MediaItem_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/media/MediaItem.js




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
var MediaList_module = __webpack_require__(7);
var MediaList_module_default = /*#__PURE__*/__webpack_require__.n(MediaList_module);
;// CONCATENATED MODULE: ./components/media/MediaList.js






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

/***/ 909:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MediaItem_item__1YLkL",
	"image": "MediaItem_image__3ASoS",
	"content": "MediaItem_content__3VTbl",
	"clear": "MediaItem_clear__u4inU"
};


/***/ }),

/***/ 7:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MediaList_list__28428"
};


/***/ })

};
;