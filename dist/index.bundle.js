/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    box-sizing: border-box;\n}\n\nbody{\n    font-family: Helvetica, sans-serif;\n    background: #23242a;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    box-sizing: content-box;\n    padding: 0;\n    margin: 0;\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n    padding: 20px;\n}\n\n/* Nav */\n\n.navBar{\n    flex: 0 1 auto;\n    background-color:#2a2f3b;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n}\n\n.navLinks {\n    display: flex;\n    gap: 40px;\n    padding: 0;\n    margin-right: 40px;\n}\n\n.navLinks li{\n    list-style: none;\n    padding: 10px 15px;\n        border-radius: 6px;\n        cursor: pointer;\n}\n\n.navLinks li:hover {\n    background-color: #1d1f24;\n    transition: 0.3s;\n    border-radius: 0;\n}\n\n.navLinks li a{\n    text-decoration: none;\n    color: white;\n    font-size: 20px;\n}\n\n.navTitle {\n    padding: 20px;\n    font-size: 35px;\n    color: white;\n    height: 80px;\n    display: flex;\nalign-items: center;\n}\n\n.hamburger{\n    position: absolute;\n    right: 0px;\n    top:10px;\n    height: 60px;\n    width: 70px;\n    margin-right: 20px;\n    margin-top: 0;\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    padding: 15px;\n    box-sizing: border-box;\n    gap: 8px\n\n}\n\n.hamburger .bar{\n    flex: 1;\n    width: 100%;\n    background-color: white;\n    border-radius: 5px;\n\n}\n\n@media (max-width: 700px){\n\n.hamburger{\n    display: flex;\n}\n\n.navBar{\n    flex-direction: column;\n}\n\n.navLinks{\n    flex-direction: column;;\n    background-color: #47494e;\n    gap: 0;\n    display: none;\n    width: 100%;\n    margin: 0;\n}\n\n.navLinks li {\n    text-align: center;\n    padding: 20px;\n}\n\n.navTitle {\n    width: 100%;\n    text-align: left;\n}\n\n.navLinks li:hover {\n    background-color: #2a2f3b;\n}\n\n.navLinksOpen {\n    display: flex;\n}\n\n}\n\n\n/* Slider */\n.slider {\n    overflow: hidden;\n    position: relative;\n}\n\n.slides {\n    left: 0;\n    display: flex;\n    transition: 0.3s;\n}\n\n.navigation{\n    display: flex;\n    position: absolute;\n    width: 20%;\n    bottom: 6%;\n    left: 50%;\n    right: 50%;\n    justify-content: space-around;\n    transform: translate(-50%, -50%);\n    gap: 5%;\n}\n\n.navigation label{\n    display: block;\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.navigation label:hover{\nbox-shadow: 0 0 0 3px white;\n}\n\ninput[type='radio'] {\n    display: none;\n}\n\n\n#radioButton1:checked ~ .navigation .navButton1 {\nbox-shadow: 0 0 0 3px white;\n}\n\n#radioButton1:checked ~ .slides {\nmargin-left: 0;\n}\n\n#radioButton2:checked ~ .navigation .navButton2 {\n    box-shadow: 0 0 0 3px white;\n}\n\n#radioButton2:checked ~ .slides {\n    margin-left: -100%;\n}\n\n#radioButton3:checked ~ .navigation .navButton3 {\n    box-shadow: 0 0 0 3px white;\n}\n\n#radioButton3:checked ~ .slides {\n    margin-left: -200%;\n}\n\n#radioButton4:checked ~ .navigation .navButton4 {\n    box-shadow: 0 0 0 3px white;\n}\n\n#radioButton4:checked ~ .slides {\n    margin-left: -300%;\n}\n\n/* Dropdown */\n\n.dropdown {\n    position: relative;\n    margin: 2em;\n    \n}\n\n.dropdown * {\n    box-sizing: border-box;\n}\n\n.select {\n    background: #2a2f3b;\n    color: #fff;\n    border: 2px #2a2f3b solid;\n    border-radius: 0.5em;\n    padding: 1em;\n    cursor: pointer;\n    transition: background 0.3s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.select-clicked{\n    border: 2px #26489a;\n    box-shadow: 0 0 0.8em #26489a;\n}\n\n.select:hover {\n    background: #323741\n}\n\n.caret{\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 7px solid #fff;\n    transition: 0.3s;\n}\n\n.caret-rotate {\n    transform: rotate(180deg);\n}\n\n.menu {\n    list-style: none;\n    padding: 0.5em 0.5em;\n    width: 100%;\n    background: #323741;\n    border: 1px #363a43 solid;\n    box-shadow: 0 0.5em 1em rgba(0,0,0,0.2);\n    border-radius: 0.5em;\n    color: #9fa5b5;\n    position: absolute;\n    top: 3em;\n    left: 50%;\n    transform: translateX(-50%);\n    opacity: 0;\n    display: none;\n    transition: 0.2s;\n    z-index: 1;\n}\n\n.menu li{\n    padding: 0.5em 0.5em;\n    margin:  0.3em 0;\n    border-radius: 0.5em;\n    cursor: pointer;\n}\n\n.menu li:hover{\n    background: #2a2d35;\n}\n\n.active {\n    background: #23242a;\n}\n\n.menu-open {\n    display: block;\n    opacity: 1;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    box-sizing: border-box;\n}\n\nbody{\n    font-family: Helvetica, sans-serif;\n    background: #23242a;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    box-sizing: content-box;\n    padding: 0;\n    margin: 0;\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n    padding: 20px;\n}\n\n/* Nav */\n\n.navBar{\n    flex: 0 1 auto;\n    background-color:#2a2f3b;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n}\n\n.navLinks {\n    display: flex;\n    gap: 40px;\n    padding: 0;\n    margin-right: 40px;\n}\n\n.navLinks li{\n    list-style: none;\n    padding: 10px 15px;\n        border-radius: 6px;\n        cursor: pointer;\n}\n\n.navLinks li:hover {\n    background-color: #1d1f24;\n    transition: 0.3s;\n    border-radius: 0;\n}\n\n.navLinks li a{\n    text-decoration: none;\n    color: white;\n    font-size: 20px;\n}\n\n.navTitle {\n    padding: 20px;\n    font-size: 35px;\n    color: white;\n    height: 80px;\n    display: flex;\nalign-items: center;\n}\n\n.hamburger{\n    position: absolute;\n    right: 0px;\n    top:10px;\n    height: 60px;\n    width: 70px;\n    margin-right: 20px;\n    margin-top: 0;\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    padding: 15px;\n    box-sizing: border-box;\n    gap: 8px\n\n}\n\n.hamburger .bar{\n    flex: 1;\n    width: 100%;\n    background-color: white;\n    border-radius: 5px;\n\n}\n\n@media (max-width: 700px){\n\n.hamburger{\n    display: flex;\n}\n\n.navBar{\n    flex-direction: column;\n}\n\n.navLinks{\n    flex-direction: column;;\n    background-color: #47494e;\n    gap: 0;\n    display: none;\n    width: 100%;\n    margin: 0;\n}\n\n.navLinks li {\n    text-align: center;\n    padding: 20px;\n}\n\n.navTitle {\n    width: 100%;\n    text-align: left;\n}\n\n.navLinks li:hover {\n    background-color: #2a2f3b;\n}\n\n.navLinksOpen {\n    display: flex;\n}\n\n}\n\n\n/* Slider */\n.slider {\n    overflow: hidden;\n    position: relative;\n}\n\n.slides {\n    left: 0;\n    display: flex;\n    transition: 0.3s;\n}\n\n.navigation{\n    display: flex;\n    position: absolute;\n    width: 20%;\n    bottom: 6%;\n    left: 50%;\n    right: 50%;\n    justify-content: space-around;\n    transform: translate(-50%, -50%);\n    gap: 5%;\n}\n\n.navigation label{\n    display: block;\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.navigation label:hover{\nbox-shadow: 0 0 0 3px white;\n}\n\ninput[type='radio'] {\n    display: none;\n}\n\n\n#radioButton1:checked ~ .navigation .navButton1 {\nbox-shadow: 0 0 0 3px white;\n}\n\n#radioButton1:checked ~ .slides {\nmargin-left: 0;\n}\n\n#radioButton2:checked ~ .navigation .navButton2 {\n    box-shadow: 0 0 0 3px white;\n}\n\n#radioButton2:checked ~ .slides {\n    margin-left: -100%;\n}\n\n#radioButton3:checked ~ .navigation .navButton3 {\n    box-shadow: 0 0 0 3px white;\n}\n\n#radioButton3:checked ~ .slides {\n    margin-left: -200%;\n}\n\n#radioButton4:checked ~ .navigation .navButton4 {\n    box-shadow: 0 0 0 3px white;\n}\n\n#radioButton4:checked ~ .slides {\n    margin-left: -300%;\n}\n\n/* Dropdown */\n\n.dropdown {\n    position: relative;\n    margin: 2em;\n    \n}\n\n.dropdown * {\n    box-sizing: border-box;\n}\n\n.select {\n    background: #2a2f3b;\n    color: #fff;\n    border: 2px #2a2f3b solid;\n    border-radius: 0.5em;\n    padding: 1em;\n    cursor: pointer;\n    transition: background 0.3s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.select-clicked{\n    border: 2px #26489a;\n    box-shadow: 0 0 0.8em #26489a;\n}\n\n.select:hover {\n    background: #323741\n}\n\n.caret{\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 7px solid #fff;\n    transition: 0.3s;\n}\n\n.caret-rotate {\n    transform: rotate(180deg);\n}\n\n.menu {\n    list-style: none;\n    padding: 0.5em 0.5em;\n    width: 100%;\n    background: #323741;\n    border: 1px #363a43 solid;\n    box-shadow: 0 0.5em 1em rgba(0,0,0,0.2);\n    border-radius: 0.5em;\n    color: #9fa5b5;\n    position: absolute;\n    top: 3em;\n    left: 50%;\n    transform: translateX(-50%);\n    opacity: 0;\n    display: none;\n    transition: 0.2s;\n    z-index: 1;\n}\n\n.menu li{\n    padding: 0.5em 0.5em;\n    margin:  0.3em 0;\n    border-radius: 0.5em;\n    cursor: pointer;\n}\n\n.menu li:hover{\n    background: #2a2d35;\n}\n\n.active {\n    background: #23242a;\n}\n\n.menu-open {\n    display: block;\n    opacity: 1;\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


/* Dropdown Menu */

// Get all the dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through all the dropdown elements
dropdowns.forEach((dropdown) => {
  // Get inner elements on each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // Click event on select element
  select.addEventListener("click", () => {
    select.classList.toggle("selected-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  // Loop through option elements
  options.forEach((option) => {
    // Add a click event to the option element
    option.addEventListener("click", () => {
      console.log(option);
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      // Remove active class from all option elements
      options.forEach((option) => {
        option.classList.remove("active");
      });
      // Add active class to clicked option
      option.classList.add("active");
    });
  });
});

/* NavBar and mobile menu */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("navLinksOpen");
});

/* Slider */
function setSliderSize() {
  const windowWidth = window.innerWidth;
  const sliderWidth = windowWidth * 0.7;
  const sliderHeight = (sliderWidth / 3) * 2;
  const slidesWidth = sliderWidth * 4;
  console.log(sliderWidth);

  const slider = document.querySelector(".slider");
  const slides = document.querySelector(".slides");
  const slideAll = document.querySelectorAll(".slide");
  const imagesAll = document.querySelectorAll("img");

  slider.style.width = sliderWidth + "px";
  slider.style.height = sliderHeight + "px";
  slides.style.width = slidesWidth + "px";
  slides.style.height = sliderHeight + "px";
  slideAll.forEach((slide) => {
    slide.style.width = sliderWidth + "px";
    slide.style.height = sliderHeight + "px";
  });
  imagesAll.forEach((image) => {
    image.style.width = sliderWidth + "px";
    image.style.height = sliderHeight + "px";
  });
}

window.addEventListener("resize", setSliderSize);

window.dispatchEvent(new Event("resize"));

let sliderCounter = 1;

function automaticSlider() {
  const slide = document.querySelector("#radioButton" + sliderCounter);
  slide.checked = true;
  sliderCounter++;
  if (sliderCounter > 4) sliderCounter = 1;
}

setInterval(automaticSlider, 3000);

})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map