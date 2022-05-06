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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --color1:#F0AF44;\r\n    --color2:#5BF093;\r\n    --color3:#29A348;\r\n\r\n\r\n}\r\n\r\nbody{\r\n    padding:0; margin:0;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    background-color: #333;\r\n    color: #eee;\r\n}\r\n.bgWrapper{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    overflow: hidden;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    z-index: -1;\r\n}\r\n.bgWrapperBlur{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    background-color: #333;\r\n    opacity: 0.5;\r\n    z-index: -1;\r\n}\r\n/* .bgWrapper>img{\r\n    position: absolute;\r\n    width:100vw;\r\n    \r\n    transform: rotateY(180deg);\r\n    opacity: 0.2;\r\n} */\r\n\r\n.flex{\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*--------------------------------------------*/\r\n\r\n/*Nav*/\r\n\r\n.nav{\r\n    gap:2vw;\r\n    padding:0vw 5vw;\r\n    color:var(--color1);\r\n    height: 10vh;\r\n    align-items: baseline;\r\n}\r\n\r\n.searchBar>input{\r\n    border:none;\r\n    background-color: var(--color1);\r\n    border-radius: 20vw;\r\n}\r\n\r\n.logo{\r\n    color:orange;\r\n}\r\n\r\n.searchBar{\r\n    margin-left:auto;\r\n}\r\n\r\n/*--------------------------------------------*/\r\n\r\n/*Content*/\r\n.content{\r\n    margin-top: 2vh;\r\n    display:grid;\r\n    grid-template-columns: 3fr 1fr;\r\n    align-items: center;\r\n    height:85vh;\r\n}\r\n.foodPanel{\r\n    padding: 0 2vmax;\r\n    text-align: center;\r\n    text-shadow: 2px 3px 3px black;\r\n}\r\n.dishes{\r\n    gap:3vw;\r\n    padding:3vw;\r\n}\r\n.dish{\r\n    flex-direction: column;\r\n}\r\n.dish>img{\r\n    width:50%;\r\n    cursor: pointer;\r\n}\r\n.dish>img:hover{\r\n    padding:2vmax;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n.drinkPanel{\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-left: 3px double var(--color1);\r\n    height:100%;\r\n    padding: 0 2vmax;\r\n}\r\n.drinkGpName{\r\n    color:var(--color1);\r\n    text-shadow: 1px 1px 5px #333;\r\n}\r\n.drinkGp{\r\n    font-size: 1.2rem;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    border-top: 1px solid var(--color1);\r\n    border-bottom: 1px solid var(--color1);\r\n}\r\n.drinkGpItems{\r\n    justify-content: space-around;\r\n    gap:3vw;\r\n}\r\n.drinkGpItem{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n.drinkGpItem>img{\r\n    width:7vw;\r\n    z-index: 3;\r\n}\r\n.drinkGpItem>img:hover{\r\n    border-radius: 50%;\r\n    background-color: var(--color1);\r\n    cursor:pointer;\r\n}\r\n\r\n.selected{\r\n    top:20vh;left:5vw;\r\n    position: absolute;\r\n}\r\n.selectedDish{\r\n    flex-direction: row;\r\n    width:10vw;\r\n    padding:1vw;\r\n    margin-bottom: 5vw;\r\n    border-radius: 50%;\r\n    border:3px solid var(--color1);\r\n}\r\n.dishGpItem{\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 2vw;\r\n    flex-direction: column;\r\n    gap:0;\r\n}\r\n.dishGpItem>img{\r\n    width:20vw;\r\n    z-index:3;\r\n    border-radius: 15px;\r\n}\r\n.subDishes{\r\n    gap:3vw;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;;;AAGpB;;AAEA;IACI,SAAS,EAAE,QAAQ;IACnB,4DAA4D;IAC5D,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,yDAAqC;IACrC,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,WAAW;AACf;AACA;;;;;;GAMG;;AAEH;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;AACA,+CAA+C;;AAE/C,MAAM;;AAEN;IACI,OAAO;IACP,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,+CAA+C;;AAE/C,UAAU;AACV;IACI,eAAe;IACf,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,OAAO;IACP,WAAW;AACf;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,SAAS;IACT,eAAe;AACnB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,qCAAqC;IACrC,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,uBAAuB;IACvB,mCAAmC;IACnC,sCAAsC;AAC1C;AACA;IACI,6BAA6B;IAC7B,OAAO;AACX;AACA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,QAAQ,CAAC,QAAQ;IACjB,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,sBAAsB;IACtB,KAAK;AACT;AACA;IACI,UAAU;IACV,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,OAAO;AACX","sourcesContent":[":root{\r\n    --color1:#F0AF44;\r\n    --color2:#5BF093;\r\n    --color3:#29A348;\r\n\r\n\r\n}\r\n\r\nbody{\r\n    padding:0; margin:0;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    background-color: #333;\r\n    color: #eee;\r\n}\r\n.bgWrapper{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    overflow: hidden;\r\n    background-image: url('teaShop0.jpg');\r\n    background-size: cover;\r\n    z-index: -1;\r\n}\r\n.bgWrapperBlur{\r\n    position: absolute;\r\n    top:12vh;\r\n    width:100vw;\r\n    height:86vh;\r\n    background-color: #333;\r\n    opacity: 0.5;\r\n    z-index: -1;\r\n}\r\n/* .bgWrapper>img{\r\n    position: absolute;\r\n    width:100vw;\r\n    \r\n    transform: rotateY(180deg);\r\n    opacity: 0.2;\r\n} */\r\n\r\n.flex{\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*--------------------------------------------*/\r\n\r\n/*Nav*/\r\n\r\n.nav{\r\n    gap:2vw;\r\n    padding:0vw 5vw;\r\n    color:var(--color1);\r\n    height: 10vh;\r\n    align-items: baseline;\r\n}\r\n\r\n.searchBar>input{\r\n    border:none;\r\n    background-color: var(--color1);\r\n    border-radius: 20vw;\r\n}\r\n\r\n.logo{\r\n    color:orange;\r\n}\r\n\r\n.searchBar{\r\n    margin-left:auto;\r\n}\r\n\r\n/*--------------------------------------------*/\r\n\r\n/*Content*/\r\n.content{\r\n    margin-top: 2vh;\r\n    display:grid;\r\n    grid-template-columns: 3fr 1fr;\r\n    align-items: center;\r\n    height:85vh;\r\n}\r\n.foodPanel{\r\n    padding: 0 2vmax;\r\n    text-align: center;\r\n    text-shadow: 2px 3px 3px black;\r\n}\r\n.dishes{\r\n    gap:3vw;\r\n    padding:3vw;\r\n}\r\n.dish{\r\n    flex-direction: column;\r\n}\r\n.dish>img{\r\n    width:50%;\r\n    cursor: pointer;\r\n}\r\n.dish>img:hover{\r\n    padding:2vmax;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n.drinkPanel{\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    border-left: 3px double var(--color1);\r\n    height:100%;\r\n    padding: 0 2vmax;\r\n}\r\n.drinkGpName{\r\n    color:var(--color1);\r\n    text-shadow: 1px 1px 5px #333;\r\n}\r\n.drinkGp{\r\n    font-size: 1.2rem;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    border-top: 1px solid var(--color1);\r\n    border-bottom: 1px solid var(--color1);\r\n}\r\n.drinkGpItems{\r\n    justify-content: space-around;\r\n    gap:3vw;\r\n}\r\n.drinkGpItem{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n.drinkGpItem>img{\r\n    width:7vw;\r\n    z-index: 3;\r\n}\r\n.drinkGpItem>img:hover{\r\n    border-radius: 50%;\r\n    background-color: var(--color1);\r\n    cursor:pointer;\r\n}\r\n\r\n.selected{\r\n    top:20vh;left:5vw;\r\n    position: absolute;\r\n}\r\n.selectedDish{\r\n    flex-direction: row;\r\n    width:10vw;\r\n    padding:1vw;\r\n    margin-bottom: 5vw;\r\n    border-radius: 50%;\r\n    border:3px solid var(--color1);\r\n}\r\n.dishGpItem{\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 2vw;\r\n    flex-direction: column;\r\n    gap:0;\r\n}\r\n.dishGpItem>img{\r\n    width:20vw;\r\n    z-index:3;\r\n    border-radius: 15px;\r\n}\r\n.subDishes{\r\n    gap:3vw;\r\n}\r\n"],"sourceRoot":""}]);
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
    panel.classList.add('selected');
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
    logo.addEventListener('mousedown', e=>location.reload());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckI0QjtBQUM1QjtBQUNvRTtBQUNHO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrRUFBbUI7QUFDNUMsMEJBQTBCLG9FQUFvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9zcmMvZHJpbmtQYW5lbC5qcyIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC8uL3NyYy9mb29kUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3AvLi9zcmMvbWVudURhdGEuanMiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnVybWVzZXRlYXNob3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9idXJtZXNldGVhc2hvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2J1cm1lc2V0ZWFzaG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJ0ZWFTaG9wMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gICAgLS1jb2xvcjE6I0YwQUY0NDtcXHJcXG4gICAgLS1jb2xvcjI6IzVCRjA5MztcXHJcXG4gICAgLS1jb2xvcjM6IzI5QTM0ODtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgcGFkZGluZzowOyBtYXJnaW46MDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBjb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuLmJnV3JhcHBlcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6MTJ2aDtcXHJcXG4gICAgd2lkdGg6MTAwdnc7XFxyXFxuICAgIGhlaWdodDo4NnZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLmJnV3JhcHBlckJsdXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjEydmg7XFxyXFxuICAgIHdpZHRoOjEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6ODZ2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLyogLmJnV3JhcHBlcj5pbWd7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6MTAwdnc7XFxyXFxuICAgIFxcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZmxleHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLypOYXYqL1xcclxcblxcclxcbi5uYXZ7XFxyXFxuICAgIGdhcDoydnc7XFxyXFxuICAgIHBhZGRpbmc6MHZ3IDV2dztcXHJcXG4gICAgY29sb3I6dmFyKC0tY29sb3IxKTtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCYXI+aW5wdXR7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gICAgY29sb3I6b3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQmFye1xcclxcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKkNvbnRlbnQqL1xcclxcbi5jb250ZW50e1xcclxcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6ODV2aDtcXHJcXG59XFxyXFxuLmZvb2RQYW5lbHtcXHJcXG4gICAgcGFkZGluZzogMCAydm1heDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCAzcHggYmxhY2s7XFxyXFxufVxcclxcbi5kaXNoZXN7XFxyXFxuICAgIGdhcDozdnc7XFxyXFxuICAgIHBhZGRpbmc6M3Z3O1xcclxcbn1cXHJcXG4uZGlzaHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmRpc2g+aW1ne1xcclxcbiAgICB3aWR0aDo1MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRpc2g+aW1nOmhvdmVye1xcclxcbiAgICBwYWRkaW5nOjJ2bWF4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uZHJpbmtQYW5lbHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBib3JkZXItbGVmdDogM3B4IGRvdWJsZSB2YXIoLS1jb2xvcjEpO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCAydm1heDtcXHJcXG59XFxyXFxuLmRyaW5rR3BOYW1le1xcclxcbiAgICBjb2xvcjp2YXIoLS1jb2xvcjEpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzMzMztcXHJcXG59XFxyXFxuLmRyaW5rR3B7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvcjEpO1xcclxcbn1cXHJcXG4uZHJpbmtHcEl0ZW1ze1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOjN2dztcXHJcXG59XFxyXFxuLmRyaW5rR3BJdGVte1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZHJpbmtHcEl0ZW0+aW1ne1xcclxcbiAgICB3aWR0aDo3dnc7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcbi5kcmlua0dwSXRlbT5pbWc6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZHtcXHJcXG4gICAgdG9wOjIwdmg7bGVmdDo1dnc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLnNlbGVjdGVkRGlzaHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgd2lkdGg6MTB2dztcXHJcXG4gICAgcGFkZGluZzoxdnc7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDV2dztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6M3B4IHNvbGlkIHZhcigtLWNvbG9yMSk7XFxyXFxufVxcclxcbi5kaXNoR3BJdGVte1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOjA7XFxyXFxufVxcclxcbi5kaXNoR3BJdGVtPmltZ3tcXHJcXG4gICAgd2lkdGg6MjB2dztcXHJcXG4gICAgei1pbmRleDozO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG4uc3ViRGlzaGVze1xcclxcbiAgICBnYXA6M3Z3O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCOzs7QUFHcEI7O0FBRUE7SUFDSSxTQUFTLEVBQUUsUUFBUTtJQUNuQiw0REFBNEQ7SUFDNUQsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5REFBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7Ozs7OztHQU1HOztBQUVIO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQSwrQ0FBK0M7O0FBRS9DLE1BQU07O0FBRU47SUFDSSxPQUFPO0lBQ1AsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLCtDQUErQzs7QUFFL0MsVUFBVTtBQUNWO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLE9BQU87SUFDUCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsT0FBTztBQUNYO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFFBQVEsQ0FBQyxRQUFRO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsS0FBSztBQUNUO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksT0FBTztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLWNvbG9yMTojRjBBRjQ0O1xcclxcbiAgICAtLWNvbG9yMjojNUJGMDkzO1xcclxcbiAgICAtLWNvbG9yMzojMjlBMzQ4O1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBwYWRkaW5nOjA7IG1hcmdpbjowO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG4uYmdXcmFwcGVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDoxMnZoO1xcclxcbiAgICB3aWR0aDoxMDB2dztcXHJcXG4gICAgaGVpZ2h0Ojg2dmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgndGVhU2hvcDAuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4uYmdXcmFwcGVyQmx1cntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6MTJ2aDtcXHJcXG4gICAgd2lkdGg6MTAwdnc7XFxyXFxuICAgIGhlaWdodDo4NnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4vKiAuYmdXcmFwcGVyPmltZ3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDoxMDB2dztcXHJcXG4gICAgXFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxufSAqL1xcclxcblxcclxcbi5mbGV4e1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKk5hdiovXFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gICAgZ2FwOjJ2dztcXHJcXG4gICAgcGFkZGluZzowdncgNXZ3O1xcclxcbiAgICBjb2xvcjp2YXIoLS1jb2xvcjEpO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEJhcj5pbnB1dHtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwdnc7XFxyXFxufVxcclxcblxcclxcbi5sb2dve1xcclxcbiAgICBjb2xvcjpvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCYXJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8qQ29udGVudCovXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDo4NXZoO1xcclxcbn1cXHJcXG4uZm9vZFBhbmVse1xcclxcbiAgICBwYWRkaW5nOiAwIDJ2bWF4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggM3B4IDNweCBibGFjaztcXHJcXG59XFxyXFxuLmRpc2hlc3tcXHJcXG4gICAgZ2FwOjN2dztcXHJcXG4gICAgcGFkZGluZzozdnc7XFxyXFxufVxcclxcbi5kaXNoe1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uZGlzaD5pbWd7XFxyXFxuICAgIHdpZHRoOjUwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGlzaD5pbWc6aG92ZXJ7XFxyXFxuICAgIHBhZGRpbmc6MnZtYXg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5kcmlua1BhbmVse1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAzcHggZG91YmxlIHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDJ2bWF4O1xcclxcbn1cXHJcXG4uZHJpbmtHcE5hbWV7XFxyXFxuICAgIGNvbG9yOnZhcigtLWNvbG9yMSk7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjMzMzO1xcclxcbn1cXHJcXG4uZHJpbmtHcHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMSk7XFxyXFxufVxcclxcbi5kcmlua0dwSXRlbXN7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6M3Z3O1xcclxcbn1cXHJcXG4uZHJpbmtHcEl0ZW17XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kcmlua0dwSXRlbT5pbWd7XFxyXFxuICAgIHdpZHRoOjd2dztcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuLmRyaW5rR3BJdGVtPmltZzpob3ZlcntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVke1xcclxcbiAgICB0b3A6MjB2aDtsZWZ0OjV2dztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2VsZWN0ZWREaXNoe1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB3aWR0aDoxMHZ3O1xcclxcbiAgICBwYWRkaW5nOjF2dztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjozcHggc29saWQgdmFyKC0tY29sb3IxKTtcXHJcXG59XFxyXFxuLmRpc2hHcEl0ZW17XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6MDtcXHJcXG59XFxyXFxuLmRpc2hHcEl0ZW0+aW1ne1xcclxcbiAgICB3aWR0aDoyMHZ3O1xcclxcbiAgICB6LWluZGV4OjM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcbi5zdWJEaXNoZXN7XFxyXFxuICAgIGdhcDozdnc7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2RyaW5rRGF0YX0gZnJvbSAnLi9tZW51RGF0YS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZURyaW5rUGFuZWwgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZHJpbmtQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcclxuICAgIGRyaW5rUGFuZWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGRyaW5rRGF0YS5mb3JFYWNoKGRyaW5rcyA9PiB7XHJcbiAgICAgICAgZHJpbmtQYW5lbC5hcHBlbmRDaGlsZChhZGREcmlua3MoZHJpbmtzKSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdkcmlua1BhbmVsJywgZHJpbmtQYW5lbCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZHJpbmtQYW5lbElubmVySFRNTCAnLCBkcmlua1BhbmVsLmlubmVySFRNTCk7XHJcbiAgICByZXR1cm4gZHJpbmtQYW5lbDtcclxufVxyXG5cclxuLy9BZGRpbmcgRHJpbmtzXHJcbmZ1bmN0aW9uIGFkZERyaW5rcyhvYmope1xyXG4gICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZHJpbmtHcCcpO1xyXG5cclxuICAgIGNvbnN0IGdyb3VwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBncm91cE5hbWUudGV4dENvbnRlbnQgPSBvYmoubmFtZTtcclxuICAgIGdyb3VwTmFtZS5jbGFzc0xpc3QuYWRkKCdkcmlua0dwTmFtZScpO1xyXG5cclxuICAgIGNvbnN0IGdyb3VwSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyb3VwSXRlbXMuY2xhc3NMaXN0LmFkZCgnZHJpbmtHcEl0ZW1zJywgJ2ZsZXgnKTtcclxuICAgIG9iai5pdGVtcy5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICBjb25zdCBkcmlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkcmlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnZHJpbmtHcEl0ZW0nLCAnZmxleCcpO1xyXG4gICAgICAgIGRyaW5rSXRlbS5hcHBlbmRDaGlsZChpdGVtLml0ZW1TcmMpO1xyXG4gICAgICAgIGRyaW5rSXRlbS5pbm5lckhUTUwgKz0gYDxoNT4ke2l0ZW0uaXRlbU5hbWV9IDxicj4gJHtpdGVtLml0ZW1QcmljZX0gPC9oNT5gO1xyXG4gICAgICAgIGdyb3VwSXRlbXMuYXBwZW5kQ2hpbGQoZHJpbmtJdGVtKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGdyb3VwLmFwcGVuZENoaWxkKGdyb3VwTmFtZSk7XHJcbiAgICBncm91cC5hcHBlbmRDaGlsZChncm91cEl0ZW1zKTtcclxuICAgIHJldHVybiBncm91cDtcclxufVxyXG5cclxuLy9GdW5jdGlvbiB0byBwb3B1bGF0ZSB0aGUgZHJpbmtQYW5lbFxyXG5leHBvcnQgY29uc3QgY2hhbmdlZHJpbmtQYW5lbCA9IGZ1bmN0aW9uKG9iail7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlLmlubmVySFRNTCA9IFwiSGVsbG9cIjtcclxuICAgIGRyaW5rUGFuZWwuYXBwZW5kQ2hpbGQoZSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCByaWNlSWNvbiBmcm9tICcuL2Fzc2V0cy9mcmllZC1yaWNlLnBuZyc7XHJcbmltcG9ydCBub29kbGVJY29uIGZyb20gJy4vYXNzZXRzL3JhbWVuLnBuZyc7XHJcbmltcG9ydCBwcmF0YUljb24gZnJvbSAnLi9hc3NldHMvc2Ftb3NhLnBuZyc7XHJcblxyXG5pbXBvcnQgeyBmb29kRGF0YSB9IGZyb20gJy4vbWVudURhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVGb29kUGFuZWwgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZm9vZFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kUGFuZWwuaW5uZXJIVE1MID0gXHJcbiAgICAgICAgXCI8aDE+IEJ1cm1lc2UgdGVhIHNob3BzIHNlcnZlIGFyb3VuZCAzMCBkaXNoZXMsIDwvaDE+XCJcclxuICAgICAgICArIFwiPGgyPiB3aGljaCBmYWxsIGludG8gdGhlIGZvbGxvd2luZyAzIGNhdGVnb3JpZXMuPC9oMj5cIjtcclxuICAgIFxyXG4gICAgY29uc3QgcmljZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3Qgbm9vZGxlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBwcmF0YUltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIHJpY2VJbWcuc3JjID0gcmljZUljb247XHJcbiAgICBub29kbGVJbWcuc3JjID0gbm9vZGxlSWNvbjtcclxuICAgIHByYXRhSW1nLnNyYyA9IHByYXRhSWNvbjtcclxuXHJcbiAgICBjb25zdCBkaXNoZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpc2hlcy5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2Rpc2hlcycpO1xyXG4gICAgLy8gZGlzaGVzLmlubmVySFRNTCA9XHJcbiAgICAvLyAgICAgXCI8ZGl2IGNsYXNzPSdmbGV4IGRpc2gnPjxpbWcgc3JjPScnIGFsdD0nUmljZS1iYXNlZCc+PGgzPlJpY2UtYmFzZWQ8L2gzPiA8L2Rpdj5cIlxyXG4gICAgLy8gICAgICtcIjxkaXYgY2xhc3M9J2ZsZXggZGlzaCc+PGltZyBzcmM9JycgYWx0PSdOb2RkbGUtYmFzZWQnPjxoMz5Ob2RkbGUtYmFzZWQ8L2gzPiA8L2Rpdj5cIlxyXG4gICAgLy8gICAgICtcIjxkaXYgY2xhc3M9J2ZsZXggZGlzaCc+PGltZyBzcmM9JycgYWx0PSdQcmF0YS1iYXNlZCc+PGgzPlByYXRhLWJhc2VkPC9oMz48L2Rpdj5cIjtcclxuICAgIGNvbnN0IGRpc2gxID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRpc2gyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRpc2gzID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpc2gxLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZGlzaCcpO1xyXG4gICAgZGlzaDIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdkaXNoJyk7XHJcbiAgICBkaXNoMy5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2Rpc2gnKTtcclxuICAgIGRpc2gxLmFwcGVuZENoaWxkKHJpY2VJbWcpO1xyXG4gICAgZGlzaDIuYXBwZW5kQ2hpbGQobm9vZGxlSW1nKTtcclxuICAgIGRpc2gzLmFwcGVuZENoaWxkKHByYXRhSW1nKTtcclxuICAgIGRpc2gxLmlubmVySFRNTCArPSAnPGgzPkJ1cm1lc2UgUmljZTwvaDM+JztcclxuICAgIGRpc2gyLmlubmVySFRNTCArPSAnPGgzPktob3V0IFN3ZV48L2gzPic7XHJcbiAgICBkaXNoMy5pbm5lckhUTUwgKz0gJzxoMz5JbmRpYW4gU3R1ZmY8L2gzPic7XHJcbiAgICBkaXNoZXMuYXBwZW5kQ2hpbGQoZGlzaDEpO1xyXG4gICAgZGlzaGVzLmFwcGVuZENoaWxkKGRpc2gyKTtcclxuICAgIGRpc2hlcy5hcHBlbmRDaGlsZChkaXNoMyk7XHJcblxyXG4gICAgZGlzaDEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZT0+c2hvd0Rpc2goZGlzaDEsIGZvb2RQYW5lbCwgMSkpO1xyXG4gICAgZGlzaDIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZT0+c2hvd0Rpc2goZGlzaDIsIGZvb2RQYW5lbCwgMikpO1xyXG4gICAgZGlzaDMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZT0+c2hvd0Rpc2goZGlzaDMsIGZvb2RQYW5lbCwgMykpO1xyXG5cclxuICAgIGZvb2RQYW5lbC5hcHBlbmRDaGlsZChkaXNoZXMpO1xyXG4gICAgcmV0dXJuIGZvb2RQYW5lbDtcclxufVxyXG5cclxuLy9GdW5jdGlvbiB0byBzaG93IHRoZSBzZWxlY3RlZCBkaXNoLlxyXG5mdW5jdGlvbiBzaG93RGlzaChkaXNoLHBhbmVsLGluZGV4KXtcclxuICAgIHBhbmVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIGRpc2guY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWREaXNoJyk7XHJcbiAgICBwYW5lbC5hcHBlbmRDaGlsZChkaXNoKTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXNoZXMuY2xhc3NMaXN0LmFkZCgnc3ViRGlzaGVzJywgJ2ZsZXgnKTtcclxuXHJcbiAgICBjb25zdCBkaXNoTGlzdCA9IGZvb2REYXRhW2luZGV4XTtcclxuXHJcbiAgICBkaXNoTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc2hJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGlzaEl0ZW0uY2xhc3NMaXN0LmFkZCgnZGlzaEdwSXRlbScsICdmbGV4Jyk7XHJcbiAgICAgICAgZGlzaEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbS5pdGVtU3JjKTtcclxuICAgICAgICBkaXNoSXRlbS5pbm5lckhUTUwgKz0gYCR7aXRlbS5pdGVtTmFtZX0gPGJyPiAke2l0ZW0uaXRlbVByaWNlfWA7XHJcbiAgICAgICAgZGlzaGVzLmFwcGVuZENoaWxkKGRpc2hJdGVtKTtcclxuICAgIH0pXHJcblxyXG4gICAgcGFuZWwuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcclxufVxyXG5cclxuLy9GdW5jdGlvbiB0byBwb3B1bGF0ZSB0aGUgZm9vZFBhbmVsXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VGb29kUGFuZWwgPSBmdW5jdGlvbihvYmope1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZS5pbm5lckhUTUwgPSBcIkhlbGxvXCI7XHJcbiAgICBmb29kUGFuZWwuYXBwZW5kQ2hpbGQoZSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB0ZWFJY29uIGZyb20gJy4vYXNzZXRzL3RlYS5wbmcnO1xyXG5pbXBvcnQgY3VwSWNvbiBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUgKDEpLnBuZyc7XHJcbmltcG9ydCBjb2ZmZWVJY29uIGZyb20gJy4vYXNzZXRzL2NvZmZlZS1jdXAgKDEpLnBuZyc7XHJcblxyXG5pbXBvcnQgbW9oaW5nYUljb24gZnJvbSAnLi9hc3NldHMvZGlzaDEuanBnJ1xyXG5cclxuY29uc3QgdGVhSW1nID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGN1cEltZyA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBjb2ZmZWVJbWcgPSBuZXcgSW1hZ2UoKTtcclxudGVhSW1nLnNyYyA9IHRlYUljb247XHJcbmN1cEltZy5zcmMgPSBjdXBJY29uO1xyXG5jb2ZmZWVJbWcuc3JjID0gY29mZmVlSWNvbjtcclxuXHJcbmNvbnN0IG1vaGluZ2FJbWcgPSBuZXcgSW1hZ2UoKTtcclxubW9oaW5nYUltZy5zcmMgPSBtb2hpbmdhSWNvbjtcclxuXHJcbmV4cG9ydCBsZXQgZHJpbmtEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdUZWEnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtpdGVtTmFtZTogJ01pbGtUZWEnLFxyXG4gICAgICAgICAgICBpdGVtU3JjOiB0ZWFJbWcsXHJcbiAgICAgICAgICAgIGl0ZW1QcmljZTogNTAwfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NvZmZlZScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge2l0ZW1OYW1lOiAnQnJld2VkIENvZmZlZScsXHJcbiAgICAgICAgICAgIGl0ZW1TcmM6IGNvZmZlZUltZyxcclxuICAgICAgICAgICAgaXRlbVByaWNlOiAxNTAwfSxcclxuICAgICAgICAgICAge2l0ZW1OYW1lOiAnRXNwZXJlc3NvJyxcclxuICAgICAgICAgICAgaXRlbVNyYzogY3VwSW1nLFxyXG4gICAgICAgICAgICBpdGVtUHJpY2U6IDEwMDB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGxldCBmb29kRGF0YSA9IFtcclxuICAgIFtdLFxyXG4gICAgW1xyXG4gICAgICAgIHtpdGVtTmFtZTogJ01vaGluZ2EnLFxyXG4gICAgICAgIGl0ZW1TcmM6IG1vaGluZ2FJbWcsXHJcbiAgICAgICAgaXRlbVByaWNlOiAyNTAwfSxcclxuXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnUmljZScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDUwMH1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnTW9oaW5nYScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDI1MDB9LFxyXG5cclxuICAgICAgICB7aXRlbU5hbWU6ICdSaWNlJyxcclxuICAgICAgICBpdGVtU3JjOiBtb2hpbmdhSW1nLFxyXG4gICAgICAgIGl0ZW1QcmljZTogNTAwfSxcclxuXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnUmljZScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDUwMH1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge2l0ZW1OYW1lOiAnTW9oaW5nYScsXHJcbiAgICAgICAgaXRlbVNyYzogbW9oaW5nYUltZyxcclxuICAgICAgICBpdGVtUHJpY2U6IDI1MDB9LFxyXG5cclxuICAgICAgICB7aXRlbU5hbWU6ICdSaWNlJyxcclxuICAgICAgICBpdGVtU3JjOiBtb2hpbmdhSW1nLFxyXG4gICAgICAgIGl0ZW1QcmljZTogNTAwfVxyXG4gICAgXVxyXG5cclxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHtpbml0aWFsaXplRm9vZFBhbmVsLCBjaGFuZ2VGb29kUGFuZWx9IGZyb20gJy4vZm9vZFBhbmVsLmpzJztcclxuaW1wb3J0IHtpbml0aWFsaXplRHJpbmtQYW5lbCwgY2hhbmdlRHJpbmtQYW5lbH0gZnJvbSAnLi9kcmlua1BhbmVsLmpzJztcclxuXHJcbi8vR2xvYWJsIERPTSBvYmplY3RzXHJcbmxldCBjb250ZW50LCBmb29kUGFuZWwsIGRyaW5rUGFuZWw7XHJcblxyXG4vL0lJRkUgdG8gYnVpbGQgdGhlIGZyYW1lLlxyXG4oZnVuY3Rpb24gKCl7XHJcbiAgICAvL0JhY2tncm91bmQgSW1hZ2VcclxuICAgIC8vIGNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIC8vIGJhY2tncm91bmRJbWcuc3JjID0gYmdJbWc7XHJcbiAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWc7XHJcbiAgICAgICAgLy8gYmdXcmFwcGVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpO1xyXG4gICAgY29uc3QgYmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYmdXcmFwcGVyJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJnV3JhcHBlcik7XHJcbiAgICBjb25zdCBiZ1dyYXBwZXJCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ1dyYXBwZXJCbHVyLmNsYXNzTGlzdC5hZGQoJ2JnV3JhcHBlckJsdXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmdXcmFwcGVyQmx1cik7XHJcblxyXG4gICAgLy9UaGUgbmF2LlxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICduYXYnKTtcclxuXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICAgIGxvZ28uaW5uZXJIVE1MID0gJzxoMT5CVVJNRVNFIFRFQSBTSE9QPC9oMT4nO1xyXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlPT5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdzZWFyY2hCYXInKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHNlYXJjaEJhci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcclxuICAgIGFib3V0LmlubmVySFRNTCA9ICdBYm91dCc7XHJcblxyXG4gICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgIG5hdi5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xyXG4gICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gICAvL1RoZSBjb250ZW50IChmb29kUGFuZWwgYW5kIGRyaW5rUGFuZWwpXHJcbiAgIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgZm9vZFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGRyaW5rUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcbiAgIGZvb2RQYW5lbC5jbGFzc0xpc3QuYWRkKCdmb29kUGFuZWwnKTtcclxuICAgZHJpbmtQYW5lbC5jbGFzc0xpc3QuYWRkKCdkcmlua1BhbmVsJywgJ2ZsZXgnKTtcclxuICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kUGFuZWwpO1xyXG4gICBjb250ZW50LmFwcGVuZENoaWxkKGRyaW5rUGFuZWwpO1xyXG5cclxuICAgZm9vZFBhbmVsLmFwcGVuZENoaWxkKGluaXRpYWxpemVGb29kUGFuZWwoKSk7XHJcbiAgIGRyaW5rUGFuZWwuYXBwZW5kQ2hpbGQoaW5pdGlhbGl6ZURyaW5rUGFuZWwoKSk7XHJcblxyXG4gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgXHJcblxyXG59KSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9