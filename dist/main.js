/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! teaShop0.jpg */ "./src/assets/teaShop0.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --color1:#F0AF44;\r\n    --color2:#5BF093;\r\n    --color3:#29A348;\r\n\r\n\r\n}\r\n\r\nbody{\r\n    padding:0; margin:0;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    background-color: #333;\r\n    color: #eee;\r\n}\r\n.bgWrapper{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    overflow: hidden;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    z-index: -1;\r\n}\r\n.bgWrapperBlur{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    background-color: #333;\r\n    opacity: 0.5;\r\n    z-index: -1;\r\n}\r\n/* .bgWrapper>img{\r\n    position: absolute;\r\n    width:100vw;\r\n    \r\n    transform: rotateY(180deg);\r\n    opacity: 0.2;\r\n} */\r\n\r\n.flex{\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*--------------------------------------------*/\r\n\r\n/*Nav*/\r\n\r\n.nav{\r\n    gap:2vw;\r\n    padding:0vw 5vw;\r\n    color:var(--color1);\r\n    height: 10vh;\r\n    align-items: baseline;\r\n}\r\n\r\n.searchBar>input{\r\n    border:none;\r\n    background-color: var(--color1);\r\n    border-radius: 20vw;\r\n}\r\n\r\n.logo{\r\n    color:orange;\r\n}\r\n\r\n.searchBar{\r\n    margin-left:auto;\r\n}\r\n\r\n/*--------------------------------------------*/\r\n\r\n/*Content*/\r\n.content{\r\n    margin-top: 2vh;\r\n    display:grid;\r\n    grid-template-columns: 3fr 1fr;\r\n    align-items: center;\r\n    height:85vh;\r\n}\r\n.foodPanel{\r\n    padding: 0 2vmax;\r\n    text-align: center;\r\n    text-shadow: 2px 3px 3px black;\r\n}\r\n.dishes{\r\n    gap:3vw;\r\n    padding:3vw;\r\n}\r\n.dish{\r\n    flex-direction: column;\r\n}\r\n.dish>img{\r\n    width:50%;\r\n    cursor: pointer;\r\n}\r\n.dish>img:hover{\r\n    padding:2vmax;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n.drinkPanel{\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-left: 3px double var(--color1);\r\n    height:100%;\r\n    padding: 0 2vmax;\r\n}\r\n.drinkGpName{\r\n    color:var(--color1);\r\n    text-shadow: 1px 1px 5px #333;\r\n}\r\n.drinkGp{\r\n    font-size: 1.2rem;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    border-top: 1px solid var(--color1);\r\n    border-bottom: 1px solid var(--color1);\r\n}\r\n.drinkGpItems{\r\n    justify-content: space-around;\r\n    gap:3vw;\r\n}\r\n.drinkGpItem{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n.drinkGpItem>img{\r\n    width:7vw;\r\n    z-index: 3;\r\n}\r\n.drinkGpItem>img:hover{\r\n    border-radius: 50%;\r\n    background-color: var(--color1);\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.selectedDish{\r\n    width:10vw;\r\n    padding:2vw;\r\n}\r\n.dishGpItem{\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 2vw;\r\n    flex-direction: column;\r\n    gap:0;\r\n}\r\n.dishGpItem>img{\r\n    width:20vw;\r\n    z-index:3;\r\n    border-radius: 15px;\r\n}\r\n.subDishes{\r\n    gap:3vw;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;;;AAGpB;;AAEA;IACI,SAAS,EAAE,QAAQ;IACnB,4DAA4D;IAC5D,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,yDAAqC;IACrC,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,WAAW;AACf;AACA;;;;;;GAMG;;AAEH;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;AACA,+CAA+C;;AAE/C,MAAM;;AAEN;IACI,OAAO;IACP,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,+CAA+C;;AAE/C,UAAU;AACV;IACI,eAAe;IACf,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,OAAO;IACP,WAAW;AACf;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,SAAS;IACT,eAAe;AACnB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,qCAAqC;IACrC,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,uBAAuB;IACvB,mCAAmC;IACnC,sCAAsC;AAC1C;AACA;IACI,6BAA6B;IAC7B,OAAO;AACX;AACA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,cAAc;AAClB;;;AAGA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,sBAAsB;IACtB,KAAK;AACT;AACA;IACI,UAAU;IACV,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,OAAO;AACX","sourcesContent":[":root{\r\n    --color1:#F0AF44;\r\n    --color2:#5BF093;\r\n    --color3:#29A348;\r\n\r\n\r\n}\r\n\r\nbody{\r\n    padding:0; margin:0;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    background-color: #333;\r\n    color: #eee;\r\n}\r\n.bgWrapper{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    overflow: hidden;\r\n    background-image: url('teaShop0.jpg');\r\n    background-size: cover;\r\n    z-index: -1;\r\n}\r\n.bgWrapperBlur{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    background-color: #333;\r\n    opacity: 0.5;\r\n    z-index: -1;\r\n}\r\n/* .bgWrapper>img{\r\n    position: absolute;\r\n    width:100vw;\r\n    \r\n    transform: rotateY(180deg);\r\n    opacity: 0.2;\r\n} */\r\n\r\n.flex{\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*--------------------------------------------*/\r\n\r\n/*Nav*/\r\n\r\n.nav{\r\n    gap:2vw;\r\n    padding:0vw 5vw;\r\n    color:var(--color1);\r\n    height: 10vh;\r\n    align-items: baseline;\r\n}\r\n\r\n.searchBar>input{\r\n    border:none;\r\n    background-color: var(--color1);\r\n    border-radius: 20vw;\r\n}\r\n\r\n.logo{\r\n    color:orange;\r\n}\r\n\r\n.searchBar{\r\n    margin-left:auto;\r\n}\r\n\r\n/*--------------------------------------------*/\r\n\r\n/*Content*/\r\n.content{\r\n    margin-top: 2vh;\r\n    display:grid;\r\n    grid-template-columns: 3fr 1fr;\r\n    align-items: center;\r\n    height:85vh;\r\n}\r\n.foodPanel{\r\n    padding: 0 2vmax;\r\n    text-align: center;\r\n    text-shadow: 2px 3px 3px black;\r\n}\r\n.dishes{\r\n    gap:3vw;\r\n    padding:3vw;\r\n}\r\n.dish{\r\n    flex-direction: column;\r\n}\r\n.dish>img{\r\n    width:50%;\r\n    cursor: pointer;\r\n}\r\n.dish>img:hover{\r\n    padding:2vmax;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n.drinkPanel{\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-left: 3px double var(--color1);\r\n    height:100%;\r\n    padding: 0 2vmax;\r\n}\r\n.drinkGpName{\r\n    color:var(--color1);\r\n    text-shadow: 1px 1px 5px #333;\r\n}\r\n.drinkGp{\r\n    font-size: 1.2rem;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    border-top: 1px solid var(--color1);\r\n    border-bottom: 1px solid var(--color1);\r\n}\r\n.drinkGpItems{\r\n    justify-content: space-around;\r\n    gap:3vw;\r\n}\r\n.drinkGpItem{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n.drinkGpItem>img{\r\n    width:7vw;\r\n    z-index: 3;\r\n}\r\n.drinkGpItem>img:hover{\r\n    border-radius: 50%;\r\n    background-color: var(--color1);\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.selectedDish{\r\n    width:10vw;\r\n    padding:2vw;\r\n}\r\n.dishGpItem{\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 2vw;\r\n    flex-direction: column;\r\n    gap:0;\r\n}\r\n.dishGpItem>img{\r\n    width:20vw;\r\n    z-index:3;\r\n    border-radius: 15px;\r\n}\r\n.subDishes{\r\n    gap:3vw;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/drinkPanel.js":
/*!***************************!*\
  !*** ./src/drinkPanel.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changedrinkPanel": () => (/* binding */ changedrinkPanel),
/* harmony export */   "initializeDrinkPanel": () => (/* binding */ initializeDrinkPanel)
/* harmony export */ });
/* harmony import */ var _menuData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuData.js */ "./src/menuData.js");


const initializeDrinkPanel = function(){
    const drinkPanel = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = "Drinks";
    drinkPanel.appendChild(title);

    _menuData_js__WEBPACK_IMPORTED_MODULE_0__.drinkData.forEach(drinks => {
        drinkPanel.appendChild(addDrinks(drinks));
    });
    // console.log('drinkPanel', drinkPanel);
    // console.log('drinkPanelInnerHTML ', drinkPanel.innerHTML);
    return drinkPanel;
}

//Adding Drinks
function addDrinks(obj){
    const group = document.createElement('div');
    group.classList.add('flex', 'drinkGp');

    const groupName = document.createElement('h3');
    groupName.textContent = obj.name;
    groupName.classList.add('drinkGpName');

    const groupItems = document.createElement('div');
    groupItems.classList.add('drinkGpItems', 'flex');
    obj.items.forEach(item=>{
        const drinkItem = document.createElement('div');
        drinkItem.classList.add('drinkGpItem', 'flex');
        drinkItem.appendChild(item.itemSrc);
        drinkItem.innerHTML += `<h5>${item.itemName} <br> ${item.itemPrice} </h5>`;
        groupItems.appendChild(drinkItem);
    })
    
    group.appendChild(groupName);
    group.appendChild(groupItems);
    return group;
}

//Function to populate the drinkPanel
const changedrinkPanel = function(obj){
    content.innerHTML = '';
    const e = document.createElement('h2');
    e.innerHTML = "Hello";
    drinkPanel.appendChild(e);
}



/***/ }),

/***/ "./src/foodPanel.js":
/*!**************************!*\
  !*** ./src/foodPanel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeFoodPanel": () => (/* binding */ changeFoodPanel),
/* harmony export */   "initializeFoodPanel": () => (/* binding */ initializeFoodPanel)
/* harmony export */ });
/* harmony import */ var _assets_fried_rice_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fried-rice.png */ "./src/assets/fried-rice.png");
/* harmony import */ var _assets_ramen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ramen.png */ "./src/assets/ramen.png");
/* harmony import */ var _assets_samosa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/samosa.png */ "./src/assets/samosa.png");
/* harmony import */ var _menuData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuData */ "./src/menuData.js");






const initializeFoodPanel = function(){
    const foodPanel = document.createElement('div');
    foodPanel.innerHTML = 
        "<h1> Burmese tea shops serve around 30 dishes, </h1>"
        + "<h2> which fall into the following 3 categories.</h2>";
    
    const riceImg = new Image();
    const noodleImg = new Image();
    const prataImg = new Image();

    riceImg.src = _assets_fried_rice_png__WEBPACK_IMPORTED_MODULE_0__;
    noodleImg.src = _assets_ramen_png__WEBPACK_IMPORTED_MODULE_1__;
    prataImg.src = _assets_samosa_png__WEBPACK_IMPORTED_MODULE_2__;

    const dishes = document.createElement('div');
    dishes.classList.add('flex', 'dishes');
    // dishes.innerHTML =
    //     "<div class='flex dish'><img src='' alt='Rice-based'><h3>Rice-based</h3> </div>"
    //     +"<div class='flex dish'><img src='' alt='Noddle-based'><h3>Noddle-based</h3> </div>"
    //     +"<div class='flex dish'><img src='' alt='Prata-based'><h3>Prata-based</h3></div>";
    const dish1 =document.createElement('div');
    const dish2 =document.createElement('div');
    const dish3 =document.createElement('div');
    dish1.classList.add('flex', 'dish');
    dish2.classList.add('flex', 'dish');
    dish3.classList.add('flex', 'dish');
    dish1.appendChild(riceImg);
    dish2.appendChild(noodleImg);
    dish3.appendChild(prataImg);
    dish1.innerHTML += '<h3>Burmese Rice</h3>';
    dish2.innerHTML += '<h3>Khout Swe^</h3>';
    dish3.innerHTML += '<h3>Indian Stuff</h3>';
    dishes.appendChild(dish1);
    dishes.appendChild(dish2);
    dishes.appendChild(dish3);

    dish1.addEventListener('mousedown', e=>showDish(dish1, foodPanel, 1));
    dish2.addEventListener('mousedown', e=>showDish(dish2, foodPanel, 2));
    dish3.addEventListener('mousedown', e=>showDish(dish3, foodPanel, 3));

    foodPanel.appendChild(dishes);
    return foodPanel;
}

//Function to show the selected dish.
function showDish(dish,panel,index){
    panel.innerHTML = '';
    dish.classList.add('selectedDish');
    panel.appendChild(dish);
    
    const dishes = document.createElement('div');
    dishes.classList.add('subDishes', 'flex');

    const dishList = _menuData__WEBPACK_IMPORTED_MODULE_3__.foodData[index];

    dishList.forEach(item => {
        const dishItem = document.createElement('div');
        dishItem.classList.add('dishGpItem', 'flex');
        dishItem.appendChild(item.itemSrc);
        dishItem.innerHTML += `${item.itemName} <br> ${item.itemPrice}`;
        dishes.appendChild(dishItem);
    })

    panel.appendChild(dishes);
}

//Function to populate the foodPanel
const changeFoodPanel = function(obj){
    content.innerHTML = '';
    const e = document.createElement('h2');
    e.innerHTML = "Hello";
    foodPanel.appendChild(e);
}



/***/ }),

/***/ "./src/menuData.js":
/*!*************************!*\
  !*** ./src/menuData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drinkData": () => (/* binding */ drinkData),
/* harmony export */   "foodData": () => (/* binding */ foodData)
/* harmony export */ });
/* harmony import */ var _assets_tea_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/tea.png */ "./src/assets/tea.png");
/* harmony import */ var _assets_coffee_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/coffee (1).png */ "./src/assets/coffee (1).png");
/* harmony import */ var _assets_coffee_cup_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/coffee-cup (1).png */ "./src/assets/coffee-cup (1).png");
/* harmony import */ var _assets_dish1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/dish1.jpg */ "./src/assets/dish1.jpg");






const teaImg = new Image();
const cupImg = new Image();
const coffeeImg = new Image();
teaImg.src = _assets_tea_png__WEBPACK_IMPORTED_MODULE_0__;
cupImg.src = _assets_coffee_1_png__WEBPACK_IMPORTED_MODULE_1__;
coffeeImg.src = _assets_coffee_cup_1_png__WEBPACK_IMPORTED_MODULE_2__;

const mohingaImg = new Image();
mohingaImg.src = _assets_dish1_jpg__WEBPACK_IMPORTED_MODULE_3__;

let drinkData = [
    {
        name: 'Tea',
        items: [
            {itemName: 'MilkTea',
            itemSrc: teaImg,
            itemPrice: 500}
        ]
    },
    {
        name: 'Coffee',
        items: [
            {itemName: 'Brewed Coffee',
            itemSrc: coffeeImg,
            itemPrice: 1500},
            {itemName: 'Esperesso',
            itemSrc: cupImg,
            itemPrice: 1000},
        ]
    }
]

let foodData = [
    [],
    [
        {itemName: 'Mohinga',
        itemSrc: mohingaImg,
        itemPrice: 2500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500}
    ],
    [
        {itemName: 'Mohinga',
        itemSrc: mohingaImg,
        itemPrice: 2500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500}
    ],
    [
        {itemName: 'Mohinga',
        itemSrc: mohingaImg,
        itemPrice: 2500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500}
    ]

]

/***/ }),

/***/ "./src/assets/coffee (1).png":
/*!***********************************!*\
  !*** ./src/assets/coffee (1).png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa5f5c92e2e3c61d3b6c.png";

/***/ }),

/***/ "./src/assets/coffee-cup (1).png":
/*!***************************************!*\
  !*** ./src/assets/coffee-cup (1).png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf212b069ac39ec19294.png";

/***/ }),

/***/ "./src/assets/dish1.jpg":
/*!******************************!*\
  !*** ./src/assets/dish1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6949b38b91d86aa6a41e.jpg";

/***/ }),

/***/ "./src/assets/fried-rice.png":
/*!***********************************!*\
  !*** ./src/assets/fried-rice.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e5a8d991011781f3d87.png";

/***/ }),

/***/ "./src/assets/ramen.png":
/*!******************************!*\
  !*** ./src/assets/ramen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dd1730214ca80dca928.png";

/***/ }),

/***/ "./src/assets/samosa.png":
/*!*******************************!*\
  !*** ./src/assets/samosa.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3262aa39a8561ae97a03.png";

/***/ }),

/***/ "./src/assets/tea.png":
/*!****************************!*\
  !*** ./src/assets/tea.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ec9eb99d4ec4df53f36.png";

/***/ }),

/***/ "./src/assets/teaShop0.jpg":
/*!*********************************!*\
  !*** ./src/assets/teaShop0.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb1905227d177a28d822.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _foodPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodPanel.js */ "./src/foodPanel.js");
/* harmony import */ var _drinkPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drinkPanel.js */ "./src/drinkPanel.js");





//Gloabl DOM objects
let content, foodPanel, drinkPanel;

//IIFE to build the frame.
(function (){
    //Background Image
    // const backgroundImg = new Image();
    // backgroundImg.src = bgImg;
    // document.body.style.backgroundImage = backgroundImg;
        // bgWrapper.appendChild(backgroundImg);
    const bgWrapper = document.createElement('div');
    bgWrapper.classList.add('bgWrapper');
    document.body.appendChild(bgWrapper);
    const bgWrapperBlur = document.createElement('div');
    bgWrapperBlur.classList.add('bgWrapperBlur');
    document.body.appendChild(bgWrapperBlur);

    //The nav.
    const nav = document.createElement('div');
    nav.classList.add('flex', 'nav');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = '<h1>BURMESE TEA SHOP</h1>';

    const searchBar = document.createElement('div');
    searchBar.classList.add('flex', 'searchBar');
    const searchInput = document.createElement('input');
    searchBar.appendChild(searchInput);
    
    const about = document.createElement('a');
    about.classList.add('about');
    about.innerHTML = 'About';

   nav.appendChild(logo);
   nav.appendChild(searchBar);
   nav.appendChild(about);
   document.body.appendChild(nav);

   //The content (foodPanel and drinkPanel)
   content = document.createElement('div');
   foodPanel = document.createElement('div');
   drinkPanel = document.createElement('div');
   content.classList.add('content');
   foodPanel.classList.add('foodPanel');
   drinkPanel.classList.add('drinkPanel', 'flex');
   content.appendChild(foodPanel);
   content.appendChild(drinkPanel);

   foodPanel.appendChild((0,_foodPanel_js__WEBPACK_IMPORTED_MODULE_1__.initializeFoodPanel)());
   drinkPanel.appendChild((0,_drinkPanel_js__WEBPACK_IMPORTED_MODULE_2__.initializeDrinkPanel)());

   document.body.appendChild(content);

   

})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckI0QjtBQUM1QjtBQUNvRTtBQUNHO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0VBQW1CO0FBQzVDLDBCQUEwQixvRUFBb0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vc3JjL2RyaW5rUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9zcmMvZm9vZFBhbmVsLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vc3JjL21lbnVEYXRhLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwidGVhU2hvcDAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxyXFxuICAgIC0tY29sb3IxOiNGMEFGNDQ7XFxyXFxuICAgIC0tY29sb3IyOiM1QkYwOTM7XFxyXFxuICAgIC0tY29sb3IzOiMyOUEzNDg7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIHBhZGRpbmc6MDsgbWFyZ2luOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgY29sb3I6ICNlZWU7XFxyXFxufVxcclxcbi5iZ1dyYXBwZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjEydmg7XFxyXFxuICAgIHdpZHRoOjEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6ODZ2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcbi5iZ1dyYXBwZXJCbHVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDoxMnZoO1xcclxcbiAgICB3aWR0aDoxMDB2dztcXHJcXG4gICAgaGVpZ2h0Ojg2dmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcbi8qIC5iZ1dyYXBwZXI+aW1ne1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOjEwMHZ3O1xcclxcbiAgICBcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmZsZXh7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8qTmF2Ki9cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgICBnYXA6MnZ3O1xcclxcbiAgICBwYWRkaW5nOjB2dyA1dnc7XFxyXFxuICAgIGNvbG9yOnZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGhlaWdodDogMTB2aDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQmFyPmlucHV0e1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICAgIGNvbG9yOm9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEJhcntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLypDb250ZW50Ki9cXHJcXG4uY29udGVudHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0Ojg1dmg7XFxyXFxufVxcclxcbi5mb29kUGFuZWx7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnZtYXg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAzcHggM3B4IGJsYWNrO1xcclxcbn1cXHJcXG4uZGlzaGVze1xcclxcbiAgICBnYXA6M3Z3O1xcclxcbiAgICBwYWRkaW5nOjN2dztcXHJcXG59XFxyXFxuLmRpc2h7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5kaXNoPmltZ3tcXHJcXG4gICAgd2lkdGg6NTAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kaXNoPmltZzpob3ZlcntcXHJcXG4gICAgcGFkZGluZzoydm1heDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLmRyaW5rUGFuZWx7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBkb3VibGUgdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnZtYXg7XFxyXFxufVxcclxcbi5kcmlua0dwTmFtZXtcXHJcXG4gICAgY29sb3I6dmFyKC0tY29sb3IxKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICMzMzM7XFxyXFxufVxcclxcbi5kcmlua0dwe1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjEpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IxKTtcXHJcXG59XFxyXFxuLmRyaW5rR3BJdGVtc3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdhcDozdnc7XFxyXFxufVxcclxcbi5kcmlua0dwSXRlbXtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRyaW5rR3BJdGVtPmltZ3tcXHJcXG4gICAgd2lkdGg6N3Z3O1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG4uZHJpbmtHcEl0ZW0+aW1nOmhvdmVye1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VsZWN0ZWREaXNoe1xcclxcbiAgICB3aWR0aDoxMHZ3O1xcclxcbiAgICBwYWRkaW5nOjJ2dztcXHJcXG59XFxyXFxuLmRpc2hHcEl0ZW17XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6MDtcXHJcXG59XFxyXFxuLmRpc2hHcEl0ZW0+aW1ne1xcclxcbiAgICB3aWR0aDoyMHZ3O1xcclxcbiAgICB6LWluZGV4OjM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcbi5zdWJEaXNoZXN7XFxyXFxuICAgIGdhcDozdnc7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDREQUE0RDtJQUM1RCxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlEQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTs7Ozs7O0dBTUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBLCtDQUErQzs7QUFFL0MsTUFBTTs7QUFFTjtJQUNJLE9BQU87SUFDUCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsK0NBQStDOztBQUUvQyxVQUFVO0FBQ1Y7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksT0FBTztJQUNQLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixPQUFPO0FBQ1g7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsS0FBSztBQUNUO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksT0FBTztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLWNvbG9yMTojRjBBRjQ0O1xcclxcbiAgICAtLWNvbG9yMjojNUJGMDkzO1xcclxcbiAgICAtLWNvbG9yMzojMjlBMzQ4O1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBwYWRkaW5nOjA7IG1hcmdpbjowO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG4uYmdXcmFwcGVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDoxMnZoO1xcclxcbiAgICB3aWR0aDoxMDB2dztcXHJcXG4gICAgaGVpZ2h0Ojg2dmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgndGVhU2hvcDAuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4uYmdXcmFwcGVyQmx1cntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6MTJ2aDtcXHJcXG4gICAgd2lkdGg6MTAwdnc7XFxyXFxuICAgIGhlaWdodDo4NnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4vKiAuYmdXcmFwcGVyPmltZ3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDoxMDB2dztcXHJcXG4gICAgXFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxufSAqL1xcclxcblxcclxcbi5mbGV4e1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKk5hdiovXFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gICAgZ2FwOjJ2dztcXHJcXG4gICAgcGFkZGluZzowdncgNXZ3O1xcclxcbiAgICBjb2xvcjp2YXIoLS1jb2xvcjEpO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEJhcj5pbnB1dHtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwdnc7XFxyXFxufVxcclxcblxcclxcbi5sb2dve1xcclxcbiAgICBjb2xvcjpvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCYXJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8qQ29udGVudCovXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDo4NXZoO1xcclxcbn1cXHJcXG4uZm9vZFBhbmVse1xcclxcbiAgICBwYWRkaW5nOiAwIDJ2bWF4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggM3B4IDNweCBibGFjaztcXHJcXG59XFxyXFxuLmRpc2hlc3tcXHJcXG4gICAgZ2FwOjN2dztcXHJcXG4gICAgcGFkZGluZzozdnc7XFxyXFxufVxcclxcbi5kaXNoe1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uZGlzaD5pbWd7XFxyXFxuICAgIHdpZHRoOjUwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGlzaD5pbWc6aG92ZXJ7XFxyXFxuICAgIHBhZGRpbmc6MnZtYXg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5kcmlua1BhbmVse1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAzcHggZG91YmxlIHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDJ2bWF4O1xcclxcbn1cXHJcXG4uZHJpbmtHcE5hbWV7XFxyXFxuICAgIGNvbG9yOnZhcigtLWNvbG9yMSk7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjMzMzO1xcclxcbn1cXHJcXG4uZHJpbmtHcHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMSk7XFxyXFxufVxcclxcbi5kcmlua0dwSXRlbXN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6M3Z3O1xcclxcbn1cXHJcXG4uZHJpbmtHcEl0ZW17XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kcmlua0dwSXRlbT5pbWd7XFxyXFxuICAgIHdpZHRoOjd2dztcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuLmRyaW5rR3BJdGVtPmltZzpob3ZlcntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlbGVjdGVkRGlzaHtcXHJcXG4gICAgd2lkdGg6MTB2dztcXHJcXG4gICAgcGFkZGluZzoydnc7XFxyXFxufVxcclxcbi5kaXNoR3BJdGVte1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOjA7XFxyXFxufVxcclxcbi5kaXNoR3BJdGVtPmltZ3tcXHJcXG4gICAgd2lkdGg6MjB2dztcXHJcXG4gICAgei1pbmRleDozO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG4uc3ViRGlzaGVze1xcclxcbiAgICBnYXA6M3Z3O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtkcmlua0RhdGF9IGZyb20gJy4vbWVudURhdGEuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVEcmlua1BhbmVsID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGRyaW5rUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XHJcbiAgICBkcmlua1BhbmVsLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBkcmlua0RhdGEuZm9yRWFjaChkcmlua3MgPT4ge1xyXG4gICAgICAgIGRyaW5rUGFuZWwuYXBwZW5kQ2hpbGQoYWRkRHJpbmtzKGRyaW5rcykpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZHJpbmtQYW5lbCcsIGRyaW5rUGFuZWwpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2RyaW5rUGFuZWxJbm5lckhUTUwgJywgZHJpbmtQYW5lbC5pbm5lckhUTUwpO1xyXG4gICAgcmV0dXJuIGRyaW5rUGFuZWw7XHJcbn1cclxuXHJcbi8vQWRkaW5nIERyaW5rc1xyXG5mdW5jdGlvbiBhZGREcmlua3Mob2JqKXtcclxuICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm91cC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2RyaW5rR3AnKTtcclxuXHJcbiAgICBjb25zdCBncm91cE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZ3JvdXBOYW1lLnRleHRDb250ZW50ID0gb2JqLm5hbWU7XHJcbiAgICBncm91cE5hbWUuY2xhc3NMaXN0LmFkZCgnZHJpbmtHcE5hbWUnKTtcclxuXHJcbiAgICBjb25zdCBncm91cEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm91cEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2RyaW5rR3BJdGVtcycsICdmbGV4Jyk7XHJcbiAgICBvYmouaXRlbXMuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgY29uc3QgZHJpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZHJpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2RyaW5rR3BJdGVtJywgJ2ZsZXgnKTtcclxuICAgICAgICBkcmlua0l0ZW0uYXBwZW5kQ2hpbGQoaXRlbS5pdGVtU3JjKTtcclxuICAgICAgICBkcmlua0l0ZW0uaW5uZXJIVE1MICs9IGA8aDU+JHtpdGVtLml0ZW1OYW1lfSA8YnI+ICR7aXRlbS5pdGVtUHJpY2V9IDwvaDU+YDtcclxuICAgICAgICBncm91cEl0ZW1zLmFwcGVuZENoaWxkKGRyaW5rSXRlbSk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBncm91cC5hcHBlbmRDaGlsZChncm91cE5hbWUpO1xyXG4gICAgZ3JvdXAuYXBwZW5kQ2hpbGQoZ3JvdXBJdGVtcyk7XHJcbiAgICByZXR1cm4gZ3JvdXA7XHJcbn1cclxuXHJcbi8vRnVuY3Rpb24gdG8gcG9wdWxhdGUgdGhlIGRyaW5rUGFuZWxcclxuZXhwb3J0IGNvbnN0IGNoYW5nZWRyaW5rUGFuZWwgPSBmdW5jdGlvbihvYmope1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZS5pbm5lckhUTUwgPSBcIkhlbGxvXCI7XHJcbiAgICBkcmlua1BhbmVsLmFwcGVuZENoaWxkKGUpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgcmljZUljb24gZnJvbSAnLi9hc3NldHMvZnJpZWQtcmljZS5wbmcnO1xyXG5pbXBvcnQgbm9vZGxlSWNvbiBmcm9tICcuL2Fzc2V0cy9yYW1lbi5wbmcnO1xyXG5pbXBvcnQgcHJhdGFJY29uIGZyb20gJy4vYXNzZXRzL3NhbW9zYS5wbmcnO1xyXG5cclxuaW1wb3J0IHsgZm9vZERhdGEgfSBmcm9tICcuL21lbnVEYXRhJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplRm9vZFBhbmVsID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGZvb2RQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vZFBhbmVsLmlubmVySFRNTCA9IFxyXG4gICAgICAgIFwiPGgxPiBCdXJtZXNlIHRlYSBzaG9wcyBzZXJ2ZSBhcm91bmQgMzAgZGlzaGVzLCA8L2gxPlwiXHJcbiAgICAgICAgKyBcIjxoMj4gd2hpY2ggZmFsbCBpbnRvIHRoZSBmb2xsb3dpbmcgMyBjYXRlZ29yaWVzLjwvaDI+XCI7XHJcbiAgICBcclxuICAgIGNvbnN0IHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IG5vb2RsZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgcHJhdGFJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICByaWNlSW1nLnNyYyA9IHJpY2VJY29uO1xyXG4gICAgbm9vZGxlSW1nLnNyYyA9IG5vb2RsZUljb247XHJcbiAgICBwcmF0YUltZy5zcmMgPSBwcmF0YUljb247XHJcblxyXG4gICAgY29uc3QgZGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXNoZXMuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdkaXNoZXMnKTtcclxuICAgIC8vIGRpc2hlcy5pbm5lckhUTUwgPVxyXG4gICAgLy8gICAgIFwiPGRpdiBjbGFzcz0nZmxleCBkaXNoJz48aW1nIHNyYz0nJyBhbHQ9J1JpY2UtYmFzZWQnPjxoMz5SaWNlLWJhc2VkPC9oMz4gPC9kaXY+XCJcclxuICAgIC8vICAgICArXCI8ZGl2IGNsYXNzPSdmbGV4IGRpc2gnPjxpbWcgc3JjPScnIGFsdD0nTm9kZGxlLWJhc2VkJz48aDM+Tm9kZGxlLWJhc2VkPC9oMz4gPC9kaXY+XCJcclxuICAgIC8vICAgICArXCI8ZGl2IGNsYXNzPSdmbGV4IGRpc2gnPjxpbWcgc3JjPScnIGFsdD0nUHJhdGEtYmFzZWQnPjxoMz5QcmF0YS1iYXNlZDwvaDM+PC9kaXY+XCI7XHJcbiAgICBjb25zdCBkaXNoMSA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkaXNoMiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkaXNoMyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXNoMS5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2Rpc2gnKTtcclxuICAgIGRpc2gyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZGlzaCcpO1xyXG4gICAgZGlzaDMuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdkaXNoJyk7XHJcbiAgICBkaXNoMS5hcHBlbmRDaGlsZChyaWNlSW1nKTtcclxuICAgIGRpc2gyLmFwcGVuZENoaWxkKG5vb2RsZUltZyk7XHJcbiAgICBkaXNoMy5hcHBlbmRDaGlsZChwcmF0YUltZyk7XHJcbiAgICBkaXNoMS5pbm5lckhUTUwgKz0gJzxoMz5CdXJtZXNlIFJpY2U8L2gzPic7XHJcbiAgICBkaXNoMi5pbm5lckhUTUwgKz0gJzxoMz5LaG91dCBTd2VePC9oMz4nO1xyXG4gICAgZGlzaDMuaW5uZXJIVE1MICs9ICc8aDM+SW5kaWFuIFN0dWZmPC9oMz4nO1xyXG4gICAgZGlzaGVzLmFwcGVuZENoaWxkKGRpc2gxKTtcclxuICAgIGRpc2hlcy5hcHBlbmRDaGlsZChkaXNoMik7XHJcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQoZGlzaDMpO1xyXG5cclxuICAgIGRpc2gxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGU9PnNob3dEaXNoKGRpc2gxLCBmb29kUGFuZWwsIDEpKTtcclxuICAgIGRpc2gyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGU9PnNob3dEaXNoKGRpc2gyLCBmb29kUGFuZWwsIDIpKTtcclxuICAgIGRpc2gzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGU9PnNob3dEaXNoKGRpc2gzLCBmb29kUGFuZWwsIDMpKTtcclxuXHJcbiAgICBmb29kUGFuZWwuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcclxuICAgIHJldHVybiBmb29kUGFuZWw7XHJcbn1cclxuXHJcbi8vRnVuY3Rpb24gdG8gc2hvdyB0aGUgc2VsZWN0ZWQgZGlzaC5cclxuZnVuY3Rpb24gc2hvd0Rpc2goZGlzaCxwYW5lbCxpbmRleCl7XHJcbiAgICBwYW5lbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGRpc2guY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWREaXNoJyk7XHJcbiAgICBwYW5lbC5hcHBlbmRDaGlsZChkaXNoKTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXNoZXMuY2xhc3NMaXN0LmFkZCgnc3ViRGlzaGVzJywgJ2ZsZXgnKTtcclxuXHJcbiAgICBjb25zdCBkaXNoTGlzdCA9IGZvb2REYXRhW2luZGV4XTtcclxuXHJcbiAgICBkaXNoTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc2hJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGlzaEl0ZW0uY2xhc3NMaXN0LmFkZCgnZGlzaEdwSXRlbScsICdmbGV4Jyk7XHJcbiAgICAgICAgZGlzaEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbS5pdGVtU3JjKTtcclxuICAgICAgICBkaXNoSXRlbS5pbm5lckhUTUwgKz0gYCR7aXRlbS5pdGVtTmFtZX0gPGJyPiAke2l0ZW0uaXRlbVByaWNlfWA7XHJcbiAgICAgICAgZGlzaGVzLmFwcGVuZENoaWxkKGRpc2hJdGVtKTtcclxuICAgIH0pXHJcblxyXG4gICAgcGFuZWwuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcclxufVxyXG5cclxuLy9GdW5jdGlvbiB0byBwb3B1bGF0ZSB0aGUgZm9vZFBhbmVsXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VGb29kUGFuZWwgPSBmdW5jdGlvbihvYmope1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZS5pbm5lckhUTUwgPSBcIkhlbGxvXCI7XHJcbiAgICBmb29kUGFuZWwuYXBwZW5kQ2hpbGQoZSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB0ZWFJY29uIGZyb20gJy4vYXNzZXRzL3RlYS5wbmcnO1xyXG5pbXBvcnQgY3VwSWNvbiBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUgKDEpLnBuZyc7XHJcbmltcG9ydCBjb2ZmZWVJY29uIGZyb20gJy4vYXNzZXRzL2NvZmZlZS1jdXAgKDEpLnBuZyc7XHJcblxyXG5pbXBvcnQgbW9oaW5nYUljb24gZnJvbSAnLi9hc3NldHMvZGlzaDEuanBnJ1xyXG5cclxuY29uc3QgdGVhSW1nID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGN1cEltZyA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBjb2ZmZWVJbWcgPSBuZXcgSW1hZ2UoKTtcclxudGVhSW1nLnNyYyA9IHRlYUljb247XHJcbmN1cEltZy5zcmMgPSBjdXBJY29uO1xyXG5jb2ZmZWVJbWcuc3JjID0gY29mZmVlSWNvbjtcclxuXHJcbmNvbnN0IG1vaGluZ2FJbWcgPSBuZXcgSW1hZ2UoKTtcclxubW9oaW5nYUltZy5zcmMgPSBtb2hpbmdhSWNvbjtcclxuXHJcbmV4cG9ydCBsZXQgZHJpbmtEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdUZWEnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtpdGVtTmFtZTogJ01pbGtUZWEnLFxyXG4gICAgICAgICAgICBpdGVtU3JjOiB0ZWFJbWcsXHJcbiAgICAgICAgICAgIGl0ZW1QcmljZTogNTAwfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NvZmZlZScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge2l0ZW1OYW1lOiAnQnJld2VkIENvZmZlZScsXHJcbiAgICAgICAgICAgIGl0ZW1TcmM6IGNvZmZlZUltZyxcclxuICAgICAgICAgICAgaXRlbVByaWNlOiAxNTAwfSxcclxuICAgICAgICAgICAge2l0ZW1OYW1lOiAnRXNwZXJlc3NvJyxcclxuICAgICAgICAgICAgaXRlbVNyYzogY3VwSW1nLFxyXG4gICAgICAgICAgICBpdGVtUHJpY2U6IDEwMDB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGxldCBmb29kRGF0YSA9IFtcclxuICAgIFtdLFxyXG4gICAgW1xyXG4gICAgICAgIHtpdGVtTmFtZTogJ01vaGluZ2EnLFxyXG4gICAgICAgIGl0ZW1TcmM6IG1vaGluZ2FJbWcsXHJcbiAgICAgICAgaXRlbVByaWNlOiAyNTAwfSxcclxuXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnUmljZScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDUwMH1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnTW9oaW5nYScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDI1MDB9LFxyXG5cclxuICAgICAgICB7aXRlbU5hbWU6ICdSaWNlJyxcclxuICAgICAgICBpdGVtU3JjOiBtb2hpbmdhSW1nLFxyXG4gICAgICAgIGl0ZW1QcmljZTogNTAwfSxcclxuXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnUmljZScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDUwMH1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnTW9oaW5nYScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDI1MDB9LFxyXG5cclxuICAgICAgICB7aXRlbU5hbWU6ICdSaWNlJyxcclxuICAgICAgICBpdGVtU3JjOiBtb2hpbmdhSW1nLFxyXG4gICAgICAgIGl0ZW1QcmljZTogNTAwfVxyXG4gICAgXVxyXG5cclxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHtpbml0aWFsaXplRm9vZFBhbmVsLCBjaGFuZ2VGb29kUGFuZWx9IGZyb20gJy4vZm9vZFBhbmVsLmpzJztcclxuaW1wb3J0IHtpbml0aWFsaXplRHJpbmtQYW5lbCwgY2hhbmdlRHJpbmtQYW5lbH0gZnJvbSAnLi9kcmlua1BhbmVsLmpzJztcclxuXHJcbi8vR2xvYWJsIERPTSBvYmplY3RzXHJcbmxldCBjb250ZW50LCBmb29kUGFuZWwsIGRyaW5rUGFuZWw7XHJcblxyXG4vL0lJRkUgdG8gYnVpbGQgdGhlIGZyYW1lLlxyXG4oZnVuY3Rpb24gKCl7XHJcbiAgICAvL0JhY2tncm91bmQgSW1hZ2VcclxuICAgIC8vIGNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIC8vIGJhY2tncm91bmRJbWcuc3JjID0gYmdJbWc7XHJcbiAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWc7XHJcbiAgICAgICAgLy8gYmdXcmFwcGVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpO1xyXG4gICAgY29uc3QgYmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYmdXcmFwcGVyJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJnV3JhcHBlcik7XHJcbiAgICBjb25zdCBiZ1dyYXBwZXJCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ1dyYXBwZXJCbHVyLmNsYXNzTGlzdC5hZGQoJ2JnV3JhcHBlckJsdXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmdXcmFwcGVyQmx1cik7XHJcblxyXG4gICAgLy9UaGUgbmF2LlxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICduYXYnKTtcclxuXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICAgIGxvZ28uaW5uZXJIVE1MID0gJzxoMT5CVVJNRVNFIFRFQSBTSE9QPC9oMT4nO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnc2VhcmNoQmFyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcbiAgICBhYm91dC5pbm5lckhUTUwgPSAnQWJvdXQnO1xyXG5cclxuICAgbmF2LmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICBuYXYuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcclxuICAgbmF2LmFwcGVuZENoaWxkKGFib3V0KTtcclxuICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICAgLy9UaGUgY29udGVudCAoZm9vZFBhbmVsIGFuZCBkcmlua1BhbmVsKVxyXG4gICBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGZvb2RQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBkcmlua1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG4gICBmb29kUGFuZWwuY2xhc3NMaXN0LmFkZCgnZm9vZFBhbmVsJyk7XHJcbiAgIGRyaW5rUGFuZWwuY2xhc3NMaXN0LmFkZCgnZHJpbmtQYW5lbCcsICdmbGV4Jyk7XHJcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZFBhbmVsKTtcclxuICAgY29udGVudC5hcHBlbmRDaGlsZChkcmlua1BhbmVsKTtcclxuXHJcbiAgIGZvb2RQYW5lbC5hcHBlbmRDaGlsZChpbml0aWFsaXplRm9vZFBhbmVsKCkpO1xyXG4gICBkcmlua1BhbmVsLmFwcGVuZENoaWxkKGluaXRpYWxpemVEcmlua1BhbmVsKCkpO1xyXG5cclxuICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgIFxyXG5cclxufSkoKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==