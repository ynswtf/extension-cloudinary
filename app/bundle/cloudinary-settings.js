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
	__vue_script__ = __webpack_require__(185)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/cloudinary-settings.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(186)
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
	  var id = "_v-a6d8b484/cloudinary-settings.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    name: 'cloudinarySettings',

	    settings: true,

	    data: function data() {
	        return _.merge({}, window.$cloudinary);
	    },


	    methods: {
	        save: function save() {
	            var _this = this;

	            this.$http.post('admin/system/settings/config', { name: 'cloudinary', config: this.config }).then(function (res) {
	                _this.$notify(_this.$trans('Saved'));
	            }).catch(function (err) {
	                _this.$notify(err.data, 'danger');
	            });
	        }
	    }
	};
	window.Extensions.components['cloudinary-settings'] = module.exports;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"uk-form uk-form-stacked uk-form-horizontal\">\n\n    <div class=\"uk-clearfix\">\n        <button class=\"uk-button uk-button-primary uk-align-right\" @click=\"save\">{{'Save' | trans}}</button>\n        <h3 class=\"uk-margin-remove\">{{'Cloudinary Settings' | trans}}</h3>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{'Cloud Name' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input class=\"uk-width-1-1\" type=\"text\" v-model=\"config.api.cloud_name\">\n        </div>\n    </div>\n    \n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{'Api Key' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input class=\"uk-width-1-1\" type=\"text\" v-model=\"config.api.key\">\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{'Api Secret' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input class=\"uk-width-1-1\" type=\"text\" v-model=\"config.api.secret\">\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\"><input type=\"checkbox\" v-model=\"config.api.secure\"> {{'Secure' | trans}}</label>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{'Folder Name' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input class=\"uk-width-1-1\" type=\"text\" v-model=\"config.options.folder_name\">\n        </div>\n    </div>\n\n</div>\n";

/***/ })

/******/ });