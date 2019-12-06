/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(192)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/news-widgets-image.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(193)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a1d79e92/news-widgets-image.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    props: ['config', 'widget', 'form'],

	    section: {
	        label: 'Cloudinary',
	        priority: 30
	    },

	    created: function created() {
	        if (!this.widget.data['cloudinary']) {
	            this.$set('widget.data', _.merge({
	                cloudinary: {
	                    height: null,
	                    width: null,
	                    quality: 30,
	                    format: 'jpg'
	                }
	            }, this.widget.data));
	        }
	    }
	};
	window.Widgets.components['news-widgets-kit:cloudinary'] = module.exports;

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

	module.exports = "\n<div>\n    <div class=\"uk-grid uk-grid-small uk-grid-width-1-4 uk-form-row\">\n        <div>\n            <div class=\"uk-form-row\">\n                <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Format' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <select class=\"uk-width-1-1\" v-model=\"widget.data.cloudinary.format\">\n                        <option value=\"webp\">Webp</option>\n                        <option value=\"jpg\">Jpg</option>\n                        <option value=\"png\">Png</option>\n                        <option value=\"gif\">Gif</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class=\"uk-form-row\">\n                <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Quality' | trans }}</label>\n                <div class=\"uk-width-1-1 uk-form-controls\">\n                    <input class=\"uk-width-1-1\" type=\"text\" min=\"0\" max=\"99\" v-model=\"widget.data.cloudinary.quality\">\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class=\"uk-form-row\">\n                <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Width' | trans }}</label>\n                <div class=\"uk-width-1-1 uk-form-controls\">\n                    <input class=\"uk-width-1-1\" type=\"text\" v-model=\"widget.data.cloudinary.width\">\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class=\"uk-form-row\">\n                <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Height' | trans }}</label>\n                <div class=\"uk-width-1-1 uk-form-controls\">\n                    <input class=\"uk-width-1-1\" type=\"text\" v-model=\"widget.data.cloudinary.height\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ })

/******/ });