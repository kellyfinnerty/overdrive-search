/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --pink: #FF006E; \n    --original-orange: #FB5607;\n    --orange: #fb5407be;\n    --purple: #8338EC;\n    --blue: #3A86FF;\n    --gold: #FFBE0B;\n    --white: #f8f8ff;\n    --placeholder-white:rgba(255, 255, 255, 0.651);\n}\n\n*{\n    font-family: 'Raleway', sans-serif;\n    color: var(--white);\n}\n\n.header{\n    display: grid;\n    grid-template-columns: 18em auto 7em;\n}\n\n.logo{\n    font-family: 'Suez One', serif;\n    font-size: 2.4em;\n}\n\n#manage-user-sites{\n    height: 3em;\n    width: 7em;\n    font-size: 0.9em;\n    margin-top: 34px;\n}\n\n.search{\n    color: white;\n    font-size: 1.05em;\n    padding: 0.6em;\n    padding-left: 2.7em;\n    width: 90%;\n    height: 1.5em;\n    border: solid 2px transparent;\n    background-color: rgba(255, 255, 255, 0.185);\n    border-radius: 20px;\n}\n\n.search:focus{\n    outline: none;\n    border: solid 2px var(--gold);\n    background-color: transparent;\n}\n\n#overdrive-search{\n    margin: 2em;\n    display: grid;\n    grid-template-columns: auto;\n}\n\n#submit{\n    background-color: transparent;\n    border: none;\n    font-size: 1.2em;\n\n    position: fixed;\n    left: 17.5em;\n    top: 2.7em;\n}\n\n\n\nbody{\n    background-color: var(--pink);\n}\n\nh2{\n    font-weight: 500;\n}\n\n#results-container h2{\n    text-align: center;\n    font-size: 1.5em;\n}\n\nbutton{\n    border: none;\n    background-color: var(--blue);\n    background-color: var(--gold);\n    font-family: inherit;\n    cursor: pointer;\n\n    border-radius: 3px;\n    border: solid 1px #fbef96be;\n}\n\nbutton:hover{\n    background-color: var(--blue);\n}\n\n#open-all-links{\n    font-size: 1.1em;\n    padding: 0.5em;\n    justify-self: center;\n    width: 48%;\n}\n.hidden{\n    display: none;\n}\n\n#results-container{\n    display: grid;\n    grid-template-rows: 4em 3em auto;\n    grid-auto-columns: auto;\n    width: 100%;\n    gap: 1em;\n\n    height: auto;\n\n    border-radius: 4px;\n}\n\n#links-container{\n    display: grid;\n    width: 50%;\n    height: auto;\n    grid-template-columns: repeat(2, 50%);\n    grid-auto-rows: auto;\n    gap: 20px 0px;\n    align-items: center;\n    justify-self: center;\n}\n\n.overdrive-link{\n    background-color: var(--orange);\n    border: solid 1px var(--gold);\n    border-radius: 3px;\n    width: 90%;\n    height: 90%;\n    padding-top: 0.3em;\n    text-decoration: none;\n    text-align: center;\n    font-size: 1.5em;\n    word-wrap: break-word;\n    justify-self: center;\n}\n\n.overdrive-link div{\n    align-self: center;\n    justify-self: center;\n}\n\n.overdrive-link:hover{\n    text-decoration: none;\n    background-color: var(--purple);\n}\n\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: var(--placeholder-white);\n    opacity: 1; /* Firefox */\n  }\n  \n  :-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: rgba(255, 255, 255, 0.815);\n  }\n  \n  ::-ms-input-placeholder { /* Microsoft Edge */\n    color: rgba(255, 255, 255, 0.822);\n  }\n\n\n  .error{\n      color: rgb(235, 162, 162);\n  }\n\n.footer{\n    position: fixed;\n    bottom: 0;\n    left: 40%;\n}\n\n\n\n\n@media only screen and (max-width: 600px) {\n    .header{\n        grid-template-columns: 70% auto;\n        grid-template-areas: 'logo manage'\n                             'search search';\n        justify-content: center;\n        align-content: center;\n    } \n\n    .logo{\n        font-size: 1.8em;\n        grid-area: logo;\n        margin-top: 0.3em;\n        margin-bottom: 0;\n        padding: 0;\n    }\n\n    #overdrive-search{\n        grid-area: search;\n        margin: 0;\n        margin-top: 10px;\n    }\n\n    .search{\n        color: white;\n        font-size: 0.95em;\n        margin: 1em 0 0 0;\n        padding: 0.5em;\n        padding-left: 2.3em;\n        width: 85%;\n    }\n\n    #manage-user-sites{\n        height: 2em;\n        width: 6.5em;\n        font-size: 0.9em;\n        margin-top: 0.95em;\n    }\n\n    #submit{\n        font-size: .9em;\n        left: 1.1em;\n        top: 6.3em;\n    }\n\n\n    .search-container{\n        margin-top: 3em;\n    }\n\n    #results-container h2{\n        font-size: 1.3em;\n    }\n\n    #links-container{\n        width: 90%;\n        grid-template-columns: repeat(2, 50%);\n        gap: 0.7em;\n    }\n\n    .overdrive-link{\n        background-color: var(--orange);\n        border: solid 1px var(--gold);\n        border-radius: 3px;\n        width: 90%;\n        height: 90%;\n        padding-top: 0.3em;\n        font-size: 1.2em;\n    }\n\n    .footer{\n        left: 30%;\n        font-size: 0.8em;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --pink: #FF006E; \n    --original-orange: #FB5607;\n    --orange: #fb5407be;\n    --purple: #8338EC;\n    --blue: #3A86FF;\n    --gold: #FFBE0B;\n    --white: #f8f8ff;\n    --placeholder-white:rgba(255, 255, 255, 0.651);\n}\n\n*{\n    font-family: 'Raleway', sans-serif;\n    color: var(--white);\n}\n\n.header{\n    display: grid;\n    grid-template-columns: 18em auto 7em;\n}\n\n.logo{\n    font-family: 'Suez One', serif;\n    font-size: 2.4em;\n}\n\n#manage-user-sites{\n    height: 3em;\n    width: 7em;\n    font-size: 0.9em;\n    margin-top: 34px;\n}\n\n.search{\n    color: white;\n    font-size: 1.05em;\n    padding: 0.6em;\n    padding-left: 2.7em;\n    width: 90%;\n    height: 1.5em;\n    border: solid 2px transparent;\n    background-color: rgba(255, 255, 255, 0.185);\n    border-radius: 20px;\n}\n\n.search:focus{\n    outline: none;\n    border: solid 2px var(--gold);\n    background-color: transparent;\n}\n\n#overdrive-search{\n    margin: 2em;\n    display: grid;\n    grid-template-columns: auto;\n}\n\n#submit{\n    background-color: transparent;\n    border: none;\n    font-size: 1.2em;\n\n    position: fixed;\n    left: 17.5em;\n    top: 2.7em;\n}\n\n\n\nbody{\n    background-color: var(--pink);\n}\n\nh2{\n    font-weight: 500;\n}\n\n#results-container h2{\n    text-align: center;\n    font-size: 1.5em;\n}\n\nbutton{\n    border: none;\n    background-color: var(--blue);\n    background-color: var(--gold);\n    font-family: inherit;\n    cursor: pointer;\n\n    border-radius: 3px;\n    border: solid 1px #fbef96be;\n}\n\nbutton:hover{\n    background-color: var(--blue);\n}\n\n#open-all-links{\n    font-size: 1.1em;\n    padding: 0.5em;\n    justify-self: center;\n    width: 48%;\n}\n.hidden{\n    display: none;\n}\n\n#results-container{\n    display: grid;\n    grid-template-rows: 4em 3em auto;\n    grid-auto-columns: auto;\n    width: 100%;\n    gap: 1em;\n\n    height: auto;\n\n    border-radius: 4px;\n}\n\n#links-container{\n    display: grid;\n    width: 50%;\n    height: auto;\n    grid-template-columns: repeat(2, 50%);\n    grid-auto-rows: auto;\n    gap: 20px 0px;\n    align-items: center;\n    justify-self: center;\n}\n\n.overdrive-link{\n    background-color: var(--orange);\n    border: solid 1px var(--gold);\n    border-radius: 3px;\n    width: 90%;\n    height: 90%;\n    padding-top: 0.3em;\n    text-decoration: none;\n    text-align: center;\n    font-size: 1.5em;\n    word-wrap: break-word;\n    justify-self: center;\n}\n\n.overdrive-link div{\n    align-self: center;\n    justify-self: center;\n}\n\n.overdrive-link:hover{\n    text-decoration: none;\n    background-color: var(--purple);\n}\n\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: var(--placeholder-white);\n    opacity: 1; /* Firefox */\n  }\n  \n  :-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: rgba(255, 255, 255, 0.815);\n  }\n  \n  ::-ms-input-placeholder { /* Microsoft Edge */\n    color: rgba(255, 255, 255, 0.822);\n  }\n\n\n  .error{\n      color: rgb(235, 162, 162);\n  }\n\n.footer{\n    position: fixed;\n    bottom: 0;\n    left: 40%;\n}\n\n\n\n\n@media only screen and (max-width: 600px) {\n    .header{\n        grid-template-columns: 70% auto;\n        grid-template-areas: 'logo manage'\n                             'search search';\n        justify-content: center;\n        align-content: center;\n    } \n\n    .logo{\n        font-size: 1.8em;\n        grid-area: logo;\n        margin-top: 0.3em;\n        margin-bottom: 0;\n        padding: 0;\n    }\n\n    #overdrive-search{\n        grid-area: search;\n        margin: 0;\n        margin-top: 10px;\n    }\n\n    .search{\n        color: white;\n        font-size: 0.95em;\n        margin: 1em 0 0 0;\n        padding: 0.5em;\n        padding-left: 2.3em;\n        width: 85%;\n    }\n\n    #manage-user-sites{\n        height: 2em;\n        width: 6.5em;\n        font-size: 0.9em;\n        margin-top: 0.95em;\n    }\n\n    #submit{\n        font-size: .9em;\n        left: 1.1em;\n        top: 6.3em;\n    }\n\n\n    .search-container{\n        margin-top: 3em;\n    }\n\n    #results-container h2{\n        font-size: 1.3em;\n    }\n\n    #links-container{\n        width: 90%;\n        grid-template-columns: repeat(2, 50%);\n        gap: 0.7em;\n    }\n\n    .overdrive-link{\n        background-color: var(--orange);\n        border: solid 1px var(--gold);\n        border-radius: 3px;\n        width: 90%;\n        height: 90%;\n        padding-top: 0.3em;\n        font-size: 1.2em;\n    }\n\n    .footer{\n        left: 30%;\n        font-size: 0.8em;\n    }\n}"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/modules/DisplayManager.js":
/*!***************************************!*\
  !*** ./src/modules/DisplayManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initDisplay)
/* harmony export */ });
/* harmony import */ var _StorageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageManager.js */ "./src/modules/StorageManager.js");


const form = document.getElementById("overdrive-search");

function initDisplay() {
  const searchTerm = form.querySelector("input");
  searchTerm.addEventListener("input", (e) => {
    try {
      checkInputValidity();
    } catch (e) {
      console.log(e);
      return;
    }
  });

  form.querySelector("button").addEventListener("click", (e) => {
    userSubmitsForm(e);
  });

  document.querySelector("#open-all-links").addEventListener("click", () => {
    openAllLinks();
  });

  document.querySelector("#manage-user-sites").addEventListener("click", () => {
    clearResults();
    showSiteManagement();
  });
}

function userSubmitsForm(e) {
  e.preventDefault();

  try {
    checkInputValidity();
  } catch {
    return;
  }

  clearSiteManagement();
  removePreviousLinks();
  submitForm();
  form.reset();
}

function checkInputValidity() {
  const searchTerm = form.querySelector("input");
  const errorArea = document.getElementById("search-error");

  if (searchTerm.validity.valueMissing) {
    errorArea.textContent = "Please type something before searching!";
    throw "Please type something before searching!";
  } else if (!searchTerm.validity.valid) {
    errorArea.textContent = "Max search of 100 characters";
    throw "Too long";
  } else {
    errorArea.textContent = "";
  }
}

function createLinkBox(website) {
  document.querySelector(".search-container").classList.remove("hidden");

  const container = document.getElementById("links-container");

  const overdriveLink = document.createElement("a");
  overdriveLink.classList.add("overdrive-link");
  overdriveLink.href = website.siteUrl;
  overdriveLink.innerHTML = `${website.siteName}`;
  overdriveLink.target = "_blank";

  container.appendChild(overdriveLink);
}

function submitForm() {
  const searchInput = form.querySelector("#search").value.trim();
  const currWebsites = _StorageManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getSearchableWebsites(searchInput);

  document.querySelector(
    ".results-title"
  ).textContent = `Results for "${searchInput}"`;

  for (const website of currWebsites) {
    createLinkBox(website);
  }
}

function showSiteManagement() {
  const container = document.querySelector(".add-library");
  container.classList.remove("hidden");
}

function openAllLinks() {
  const currLinks = document.querySelectorAll(".overdrive-link");

  for (const link of currLinks) {
    window.open(link.href, "_blank");
  }
}

function removePreviousLinks() {
  const linkContainer = document.getElementById("links-container");
  const links = Array.from(linkContainer.children);

  for (const link of links) {
    link.parentNode.removeChild(link);
  }
}

function clearResults() {
  document.querySelector(".search-container").classList.add("hidden");
}

function clearSiteManagement() {
  document.querySelector(".add-library").classList.add("hidden");
}


/***/ }),

/***/ "./src/modules/StorageManager.js":
/*!***************************************!*\
  !*** ./src/modules/StorageManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserWebsites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserWebsites.js */ "./src/modules/UserWebsites.js");


const mySites = new _UserWebsites_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

mySites.addWebsite("MVLC", "https://mvlc.overdrive.com/search?query=");
mySites.addWebsite(
  "BPL",
  "https://bpl.overdrive.com/bpl-visitor/content/search?query="
);
mySites.addWebsite(
  "CLAMS",
  "https://clamsnet.overdrive.com/clamsnet-visitor/content/search?query="
);
mySites.addWebsite(
  "CW MARS",
  "https://cwmars.overdrive.com/cwmars-visitor/content/search?query="
);
mySites.addWebsite(
  "Minuteman",
  "https://minuteman.overdrive.com/minuteman-visitor/content/search?query="
);
mySites.addWebsite(
  "Noble",
  "https://noble.overdrive.com/noble-visitor/content/search?query="
);
mySites.addWebsite(
  "Old Colony Library Network",
  "https://ocln.overdrive.com/ocln-visitor/content/search?query="
);
mySites.addWebsite("SAILS", "https://sails.overdrive.com/search?query=");
mySites.addWebsite("McGill", "https://mcgill.overdrive.com/search?query=");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mySites);

const storage = (function () {
  const _userSitesName = "user-sites";

  function _getSites() {
    if (localStorage.getItem(_getSites) === null) {
      localStorage.setItem(_getSites, JSON.stringify(new _UserWebsites_js__WEBPACK_IMPORTED_MODULE_0__["default"]()));
    }

    const userSites = Object.assign(
      JSON.parse(localStorage.getItem(_getSites)),
      new _UserWebsites_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
    );

    return userSites;
  }

  return { _getSites };
})();

console.log("hi");
storage._getSites();


/***/ }),

/***/ "./src/modules/UserWebsites.js":
/*!*************************************!*\
  !*** ./src/modules/UserWebsites.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyWebsites)
/* harmony export */ });
class MyWebsites {
  constructor() {
    // formated with objects of {siteName, siteUrl}
    this.websites = [];
  }

  addWebsite(siteName, siteUrl) {
    this.websites.push({ siteName, siteUrl });
  }

  getWebsites() {
    return this.websites;
  }

  setWebsites(websites) {
    this.websites = websites;
  }

  getSearchableWebsites(searchTerm) {
    let output = [];

    for (const website of this.websites) {
      output.push({
        siteName: website.siteName,
        siteUrl: website.siteUrl + encodeURI(searchTerm),
      });
    }

    return output;
  }
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_DisplayManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DisplayManager.js */ "./src/modules/DisplayManager.js");
/* harmony import */ var _modules_UserWebsites_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UserWebsites.js */ "./src/modules/UserWebsites.js");




(0,_modules_DisplayManager_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/* const storage = (function () {
  const _userSitesName = "user-sites";

  function _getSites() {
    if (localStorage.getItem(_getSites) === null) {
      localStorage.setItem(_getSites, JSON.stringify(new UserWebsites()));
    }

    const userSites = Object.assign(
      JSON.parse(localStorage.getItem(_getSites)),
      new UserWebsites()
    );

    return userSites;
  }

  return { _getSites };
})();

storage._getSites(); */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2lDO0FBQ0Q7O0FBRXJELHNFQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb3ZlcmRyaXZlLXNlYXJjaC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL292ZXJkcml2ZS1zZWFyY2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL292ZXJkcml2ZS1zZWFyY2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb3ZlcmRyaXZlLXNlYXJjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb3ZlcmRyaXZlLXNlYXJjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL292ZXJkcml2ZS1zZWFyY2gvLi9zcmMvbW9kdWxlcy9EaXNwbGF5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoLy4vc3JjL21vZHVsZXMvU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb3ZlcmRyaXZlLXNlYXJjaC8uL3NyYy9tb2R1bGVzL1VzZXJXZWJzaXRlcy5qcyIsIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL292ZXJkcml2ZS1zZWFyY2gvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb3ZlcmRyaXZlLXNlYXJjaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3ZlcmRyaXZlLXNlYXJjaC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL292ZXJkcml2ZS1zZWFyY2gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vdmVyZHJpdmUtc2VhcmNoLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tcGluazogI0ZGMDA2RTsgXFxuICAgIC0tb3JpZ2luYWwtb3JhbmdlOiAjRkI1NjA3O1xcbiAgICAtLW9yYW5nZTogI2ZiNTQwN2JlO1xcbiAgICAtLXB1cnBsZTogIzgzMzhFQztcXG4gICAgLS1ibHVlOiAjM0E4NkZGO1xcbiAgICAtLWdvbGQ6ICNGRkJFMEI7XFxuICAgIC0td2hpdGU6ICNmOGY4ZmY7XFxuICAgIC0tcGxhY2Vob2xkZXItd2hpdGU6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1MSk7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThlbSBhdXRvIDdlbTtcXG59XFxuXFxuLmxvZ297XFxuICAgIGZvbnQtZmFtaWx5OiAnU3VleiBPbmUnLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAyLjRlbTtcXG59XFxuXFxuI21hbmFnZS11c2VyLXNpdGVze1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgd2lkdGg6IDdlbTtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgbWFyZ2luLXRvcDogMzRweDtcXG59XFxuXFxuLnNlYXJjaHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMDVlbTtcXG4gICAgcGFkZGluZzogMC42ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMi43ZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTg1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnNlYXJjaDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZ29sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jb3ZlcmRyaXZlLXNlYXJjaHtcXG4gICAgbWFyZ2luOiAyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG59XFxuXFxuI3N1Ym1pdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAxNy41ZW07XFxuICAgIHRvcDogMi43ZW07XFxufVxcblxcblxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbn1cXG5cXG5oMntcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI3Jlc3VsdHMtY29udGFpbmVyIGgye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZiZWY5NmJlO1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4jb3Blbi1hbGwtbGlua3N7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ4JTtcXG59XFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Jlc3VsdHMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRlbSAzZW0gYXV0bztcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDFlbTtcXG5cXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNsaW5rcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAgIGdhcDogMjBweCAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmRyaXZlLWxpbmt7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdvbGQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmRyaXZlLWxpbmsgZGl2e1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmRyaXZlLWxpbms6aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuXFxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItd2hpdGUpO1xcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxuICB9XFxuICBcXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxNSk7XFxuICB9XFxuICBcXG4gIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjIpO1xcbiAgfVxcblxcblxcbiAgLmVycm9ye1xcbiAgICAgIGNvbG9yOiByZ2IoMjM1LCAxNjIsIDE2Mik7XFxuICB9XFxuXFxuLmZvb3RlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDQwJTtcXG59XFxuXFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuaGVhZGVye1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgYXV0bztcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdsb2dvIG1hbmFnZSdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWFyY2ggc2VhcmNoJztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB9IFxcblxcbiAgICAubG9nb3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgICAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgICNvdmVyZHJpdmUtc2VhcmNoe1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzZWFyY2g7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcXG4gICAgICAgIG1hcmdpbjogMWVtIDAgMCAwO1xcbiAgICAgICAgcGFkZGluZzogMC41ZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuM2VtO1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgfVxcblxcbiAgICAjbWFuYWdlLXVzZXItc2l0ZXN7XFxuICAgICAgICBoZWlnaHQ6IDJlbTtcXG4gICAgICAgIHdpZHRoOiA2LjVlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjk1ZW07XFxuICAgIH1cXG5cXG4gICAgI3N1Ym1pdHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcXG4gICAgICAgIGxlZnQ6IDEuMWVtO1xcbiAgICAgICAgdG9wOiA2LjNlbTtcXG4gICAgfVxcblxcblxcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcXG4gICAgfVxcblxcbiAgICAjcmVzdWx0cy1jb250YWluZXIgaDJ7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICB9XFxuXFxuICAgICNsaW5rcy1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgICAgIGdhcDogMC43ZW07XFxuICAgIH1cXG5cXG4gICAgLm92ZXJkcml2ZS1saW5re1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdvbGQpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDAuM2VtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcblxcbiAgICAuZm9vdGVye1xcbiAgICAgICAgbGVmdDogMzAlO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCOztJQUVoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7QUFDZDs7OztBQUlBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixlQUFlOztJQUVmLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsUUFBUTs7SUFFUixZQUFZOztJQUVaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7OztBQUdBLGdCQUFnQix5Q0FBeUM7SUFDckQsK0JBQStCO0lBQy9CLFVBQVUsRUFBRSxZQUFZO0VBQzFCOztFQUVBLHlCQUF5Qiw0QkFBNEI7SUFDbkQsaUNBQWlDO0VBQ25DOztFQUVBLDBCQUEwQixtQkFBbUI7SUFDM0MsaUNBQWlDO0VBQ25DOzs7RUFHQTtNQUNJLHlCQUF5QjtFQUM3Qjs7QUFFRjtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztBQUNiOzs7OztBQUtBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0I7NENBQ29DO1FBQ3BDLHVCQUF1QjtRQUN2QixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsVUFBVTtJQUNkOzs7SUFHQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YscUNBQXFDO1FBQ3JDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1waW5rOiAjRkYwMDZFOyBcXG4gICAgLS1vcmlnaW5hbC1vcmFuZ2U6ICNGQjU2MDc7XFxuICAgIC0tb3JhbmdlOiAjZmI1NDA3YmU7XFxuICAgIC0tcHVycGxlOiAjODMzOEVDO1xcbiAgICAtLWJsdWU6ICMzQTg2RkY7XFxuICAgIC0tZ29sZDogI0ZGQkUwQjtcXG4gICAgLS13aGl0ZTogI2Y4ZjhmZjtcXG4gICAgLS1wbGFjZWhvbGRlci13aGl0ZTpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUxKTtcXG59XFxuXFxuKntcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOGVtIGF1dG8gN2VtO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdTdWV6IE9uZScsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDIuNGVtO1xcbn1cXG5cXG4jbWFuYWdlLXVzZXItc2l0ZXN7XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICB3aWR0aDogN2VtO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcbiAgICBwYWRkaW5nOiAwLjZlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjdlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xODUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoOmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1nb2xkKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNvdmVyZHJpdmUtc2VhcmNoe1xcbiAgICBtYXJnaW46IDJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbn1cXG5cXG4jc3VibWl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDE3LjVlbTtcXG4gICAgdG9wOiAyLjdlbTtcXG59XFxuXFxuXFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxufVxcblxcbmgye1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jcmVzdWx0cy1jb250YWluZXIgaDJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmJlZjk2YmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNvcGVuLWFsbC1saW5rc3tcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNDglO1xcbn1cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcmVzdWx0cy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGVtIDNlbSBhdXRvO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMWVtO1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI2xpbmtzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gICAgZ2FwOiAyMHB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5vdmVyZHJpdmUtbGlua3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ29sZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5vdmVyZHJpdmUtbGluayBkaXZ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5vdmVyZHJpdmUtbGluazpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG5cXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci13aGl0ZSk7XFxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG4gIH1cXG4gIFxcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODE1KTtcXG4gIH1cXG4gIFxcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyMik7XFxuICB9XFxuXFxuXFxuICAuZXJyb3J7XFxuICAgICAgY29sb3I6IHJnYigyMzUsIDE2MiwgMTYyKTtcXG4gIH1cXG5cXG4uZm9vdGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogNDAlO1xcbn1cXG5cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSBhdXRvO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xvZ28gbWFuYWdlJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaCBzZWFyY2gnO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH0gXFxuXFxuICAgIC5sb2dve1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgICAgIGdyaWQtYXJlYTogbG9nbztcXG4gICAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgI292ZXJkcml2ZS1zZWFyY2h7XFxuICAgICAgICBncmlkLWFyZWE6IHNlYXJjaDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgICAgICAgbWFyZ2luOiAxZW0gMCAwIDA7XFxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMi4zZW07XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICB9XFxuXFxuICAgICNtYW5hZ2UtdXNlci1zaXRlc3tcXG4gICAgICAgIGhlaWdodDogMmVtO1xcbiAgICAgICAgd2lkdGg6IDYuNWVtO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDAuOTVlbTtcXG4gICAgfVxcblxcbiAgICAjc3VibWl0e1xcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xcbiAgICAgICAgbGVmdDogMS4xZW07XFxuICAgICAgICB0b3A6IDYuM2VtO1xcbiAgICB9XFxuXFxuXFxuICAgIC5zZWFyY2gtY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgICB9XFxuXFxuICAgICNyZXN1bHRzLWNvbnRhaW5lciBoMntcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIH1cXG5cXG4gICAgI2xpbmtzLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICAgICAgZ2FwOiAwLjdlbTtcXG4gICAgfVxcblxcbiAgICAub3ZlcmRyaXZlLWxpbmt7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ29sZCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC4zZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXJ7XFxuICAgICAgICBsZWZ0OiAzMCU7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbXlTaXRlcyBmcm9tIFwiLi9TdG9yYWdlTWFuYWdlci5qc1wiO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVyZHJpdmUtc2VhcmNoXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0RGlzcGxheSgpIHtcbiAgY29uc3Qgc2VhcmNoVGVybSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBzZWFyY2hUZXJtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjaGVja0lucHV0VmFsaWRpdHkoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuXG4gIGZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB1c2VyU3VibWl0c0Zvcm0oZSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1hbGwtbGlua3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuQWxsTGlua3MoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYW5hZ2UtdXNlci1zaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyUmVzdWx0cygpO1xuICAgIHNob3dTaXRlTWFuYWdlbWVudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclN1Ym1pdHNGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHRyeSB7XG4gICAgY2hlY2tJbnB1dFZhbGlkaXR5KCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNsZWFyU2l0ZU1hbmFnZW1lbnQoKTtcbiAgcmVtb3ZlUHJldmlvdXNMaW5rcygpO1xuICBzdWJtaXRGb3JtKCk7XG4gIGZvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnB1dFZhbGlkaXR5KCkge1xuICBjb25zdCBzZWFyY2hUZXJtID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IGVycm9yQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWVycm9yXCIpO1xuXG4gIGlmIChzZWFyY2hUZXJtLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yQXJlYS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIHR5cGUgc29tZXRoaW5nIGJlZm9yZSBzZWFyY2hpbmchXCI7XG4gICAgdGhyb3cgXCJQbGVhc2UgdHlwZSBzb21ldGhpbmcgYmVmb3JlIHNlYXJjaGluZyFcIjtcbiAgfSBlbHNlIGlmICghc2VhcmNoVGVybS52YWxpZGl0eS52YWxpZCkge1xuICAgIGVycm9yQXJlYS50ZXh0Q29udGVudCA9IFwiTWF4IHNlYXJjaCBvZiAxMDAgY2hhcmFjdGVyc1wiO1xuICAgIHRocm93IFwiVG9vIGxvbmdcIjtcbiAgfSBlbHNlIHtcbiAgICBlcnJvckFyZWEudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtCb3god2Vic2l0ZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtzLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBvdmVyZHJpdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG92ZXJkcml2ZUxpbmsuY2xhc3NMaXN0LmFkZChcIm92ZXJkcml2ZS1saW5rXCIpO1xuICBvdmVyZHJpdmVMaW5rLmhyZWYgPSB3ZWJzaXRlLnNpdGVVcmw7XG4gIG92ZXJkcml2ZUxpbmsuaW5uZXJIVE1MID0gYCR7d2Vic2l0ZS5zaXRlTmFtZX1gO1xuICBvdmVyZHJpdmVMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJkcml2ZUxpbmspO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIikudmFsdWUudHJpbSgpO1xuICBjb25zdCBjdXJyV2Vic2l0ZXMgPSBteVNpdGVzLmdldFNlYXJjaGFibGVXZWJzaXRlcyhzZWFyY2hJbnB1dCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5yZXN1bHRzLXRpdGxlXCJcbiAgKS50ZXh0Q29udGVudCA9IGBSZXN1bHRzIGZvciBcIiR7c2VhcmNoSW5wdXR9XCJgO1xuXG4gIGZvciAoY29uc3Qgd2Vic2l0ZSBvZiBjdXJyV2Vic2l0ZXMpIHtcbiAgICBjcmVhdGVMaW5rQm94KHdlYnNpdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTaXRlTWFuYWdlbWVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlicmFyeVwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIG9wZW5BbGxMaW5rcygpIHtcbiAgY29uc3QgY3VyckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vdmVyZHJpdmUtbGlua1wiKTtcblxuICBmb3IgKGNvbnN0IGxpbmsgb2YgY3VyckxpbmtzKSB7XG4gICAgd2luZG93Lm9wZW4obGluay5ocmVmLCBcIl9ibGFua1wiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcmV2aW91c0xpbmtzKCkge1xuICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rcy1jb250YWluZXJcIik7XG4gIGNvbnN0IGxpbmtzID0gQXJyYXkuZnJvbShsaW5rQ29udGFpbmVyLmNoaWxkcmVuKTtcblxuICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTaXRlTWFuYWdlbWVudCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbGlicmFyeVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuIiwiaW1wb3J0IFVzZXJXZWJzaXRlcyBmcm9tIFwiLi9Vc2VyV2Vic2l0ZXMuanNcIjtcblxuY29uc3QgbXlTaXRlcyA9IG5ldyBVc2VyV2Vic2l0ZXMoKTtcblxubXlTaXRlcy5hZGRXZWJzaXRlKFwiTVZMQ1wiLCBcImh0dHBzOi8vbXZsYy5vdmVyZHJpdmUuY29tL3NlYXJjaD9xdWVyeT1cIik7XG5teVNpdGVzLmFkZFdlYnNpdGUoXG4gIFwiQlBMXCIsXG4gIFwiaHR0cHM6Ly9icGwub3ZlcmRyaXZlLmNvbS9icGwtdmlzaXRvci9jb250ZW50L3NlYXJjaD9xdWVyeT1cIlxuKTtcbm15U2l0ZXMuYWRkV2Vic2l0ZShcbiAgXCJDTEFNU1wiLFxuICBcImh0dHBzOi8vY2xhbXNuZXQub3ZlcmRyaXZlLmNvbS9jbGFtc25ldC12aXNpdG9yL2NvbnRlbnQvc2VhcmNoP3F1ZXJ5PVwiXG4pO1xubXlTaXRlcy5hZGRXZWJzaXRlKFxuICBcIkNXIE1BUlNcIixcbiAgXCJodHRwczovL2N3bWFycy5vdmVyZHJpdmUuY29tL2N3bWFycy12aXNpdG9yL2NvbnRlbnQvc2VhcmNoP3F1ZXJ5PVwiXG4pO1xubXlTaXRlcy5hZGRXZWJzaXRlKFxuICBcIk1pbnV0ZW1hblwiLFxuICBcImh0dHBzOi8vbWludXRlbWFuLm92ZXJkcml2ZS5jb20vbWludXRlbWFuLXZpc2l0b3IvY29udGVudC9zZWFyY2g/cXVlcnk9XCJcbik7XG5teVNpdGVzLmFkZFdlYnNpdGUoXG4gIFwiTm9ibGVcIixcbiAgXCJodHRwczovL25vYmxlLm92ZXJkcml2ZS5jb20vbm9ibGUtdmlzaXRvci9jb250ZW50L3NlYXJjaD9xdWVyeT1cIlxuKTtcbm15U2l0ZXMuYWRkV2Vic2l0ZShcbiAgXCJPbGQgQ29sb255IExpYnJhcnkgTmV0d29ya1wiLFxuICBcImh0dHBzOi8vb2Nsbi5vdmVyZHJpdmUuY29tL29jbG4tdmlzaXRvci9jb250ZW50L3NlYXJjaD9xdWVyeT1cIlxuKTtcbm15U2l0ZXMuYWRkV2Vic2l0ZShcIlNBSUxTXCIsIFwiaHR0cHM6Ly9zYWlscy5vdmVyZHJpdmUuY29tL3NlYXJjaD9xdWVyeT1cIik7XG5teVNpdGVzLmFkZFdlYnNpdGUoXCJNY0dpbGxcIiwgXCJodHRwczovL21jZ2lsbC5vdmVyZHJpdmUuY29tL3NlYXJjaD9xdWVyeT1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IG15U2l0ZXM7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBfdXNlclNpdGVzTmFtZSA9IFwidXNlci1zaXRlc1wiO1xuXG4gIGZ1bmN0aW9uIF9nZXRTaXRlcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oX2dldFNpdGVzKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2dldFNpdGVzLCBKU09OLnN0cmluZ2lmeShuZXcgVXNlcldlYnNpdGVzKCkpKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyU2l0ZXMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShfZ2V0U2l0ZXMpKSxcbiAgICAgIG5ldyBVc2VyV2Vic2l0ZXMoKVxuICAgICk7XG5cbiAgICByZXR1cm4gdXNlclNpdGVzO1xuICB9XG5cbiAgcmV0dXJuIHsgX2dldFNpdGVzIH07XG59KSgpO1xuXG5jb25zb2xlLmxvZyhcImhpXCIpO1xuc3RvcmFnZS5fZ2V0U2l0ZXMoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE15V2Vic2l0ZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBmb3JtYXRlZCB3aXRoIG9iamVjdHMgb2Yge3NpdGVOYW1lLCBzaXRlVXJsfVxuICAgIHRoaXMud2Vic2l0ZXMgPSBbXTtcbiAgfVxuXG4gIGFkZFdlYnNpdGUoc2l0ZU5hbWUsIHNpdGVVcmwpIHtcbiAgICB0aGlzLndlYnNpdGVzLnB1c2goeyBzaXRlTmFtZSwgc2l0ZVVybCB9KTtcbiAgfVxuXG4gIGdldFdlYnNpdGVzKCkge1xuICAgIHJldHVybiB0aGlzLndlYnNpdGVzO1xuICB9XG5cbiAgc2V0V2Vic2l0ZXMod2Vic2l0ZXMpIHtcbiAgICB0aGlzLndlYnNpdGVzID0gd2Vic2l0ZXM7XG4gIH1cblxuICBnZXRTZWFyY2hhYmxlV2Vic2l0ZXMoc2VhcmNoVGVybSkge1xuICAgIGxldCBvdXRwdXQgPSBbXTtcblxuICAgIGZvciAoY29uc3Qgd2Vic2l0ZSBvZiB0aGlzLndlYnNpdGVzKSB7XG4gICAgICBvdXRwdXQucHVzaCh7XG4gICAgICAgIHNpdGVOYW1lOiB3ZWJzaXRlLnNpdGVOYW1lLFxuICAgICAgICBzaXRlVXJsOiB3ZWJzaXRlLnNpdGVVcmwgKyBlbmNvZGVVUkkoc2VhcmNoVGVybSksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBpbml0RGlzcGxheSBmcm9tIFwiLi9tb2R1bGVzL0Rpc3BsYXlNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgVXNlcldlYnNpdGVzIGZyb20gXCIuL21vZHVsZXMvVXNlcldlYnNpdGVzLmpzXCI7XG5cbmluaXREaXNwbGF5KCk7XG5cbi8qIGNvbnN0IHN0b3JhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBfdXNlclNpdGVzTmFtZSA9IFwidXNlci1zaXRlc1wiO1xuXG4gIGZ1bmN0aW9uIF9nZXRTaXRlcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oX2dldFNpdGVzKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oX2dldFNpdGVzLCBKU09OLnN0cmluZ2lmeShuZXcgVXNlcldlYnNpdGVzKCkpKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyU2l0ZXMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShfZ2V0U2l0ZXMpKSxcbiAgICAgIG5ldyBVc2VyV2Vic2l0ZXMoKVxuICAgICk7XG5cbiAgICByZXR1cm4gdXNlclNpdGVzO1xuICB9XG5cbiAgcmV0dXJuIHsgX2dldFNpdGVzIH07XG59KSgpO1xuXG5zdG9yYWdlLl9nZXRTaXRlcygpOyAqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9