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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(187)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/news-cloudinary.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(188)
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
	  var id = "_v-326007d1/news-cloudinary.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	const cloudinaryCore = __webpack_require__(7); // If your code is for ES5

	module.exports = {
	    data(){
	        return _.extend({
	            sdk:''
	        } , window.$cloudinary)
	    },

	    created(){
	        this.sdk = new cloudinaryCore.Cloudinary(this.config.api);
	    },

	    methods:{
	        showImage(path , options){
	            return this.sdk.url(path , options);
	        }
	    }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, process) {/**
	   * cloudinary-main.js
	   * Cloudinary's JavaScript library - Version 2.7.3
	   * Copyright Cloudinary
	   * see https://github.com/cloudinary/cloudinary_js
	   *
	   */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(13), __webpack_require__(64), __webpack_require__(133), __webpack_require__(134), __webpack_require__(150), __webpack_require__(35), __webpack_require__(152), __webpack_require__(53), __webpack_require__(160), __webpack_require__(19), __webpack_require__(161), __webpack_require__(153), __webpack_require__(162), __webpack_require__(170));
		else if(typeof define === 'function' && define.amd)
			define(["lodash/assign", "lodash/cloneDeep", "lodash/compact", "lodash/difference", "lodash/functions", "lodash/identity", "lodash/includes", "lodash/isArray", "lodash/isElement", "lodash/isFunction", "lodash/isPlainObject", "lodash/isString", "lodash/merge", "lodash/trim"], factory);
		else if(typeof exports === 'object')
			exports["cloudinary"] = factory(require("lodash/assign"), require("lodash/cloneDeep"), require("lodash/compact"), require("lodash/difference"), require("lodash/functions"), require("lodash/identity"), require("lodash/includes"), require("lodash/isArray"), require("lodash/isElement"), require("lodash/isFunction"), require("lodash/isPlainObject"), require("lodash/isString"), require("lodash/merge"), require("lodash/trim"));
		else
			root["cloudinary"] = factory(root["_"]["assign"], root["_"]["cloneDeep"], root["_"]["compact"], root["_"]["difference"], root["_"]["functions"], root["_"]["identity"], root["_"]["includes"], root["_"]["isArray"], root["_"]["isElement"], root["_"]["isFunction"], root["_"]["isPlainObject"], root["_"]["isString"], root["_"]["merge"], root["_"]["trim"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_lodash_assign__, __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__, __WEBPACK_EXTERNAL_MODULE_lodash_compact__, __WEBPACK_EXTERNAL_MODULE_lodash_difference__, __WEBPACK_EXTERNAL_MODULE_lodash_functions__, __WEBPACK_EXTERNAL_MODULE_lodash_identity__, __WEBPACK_EXTERNAL_MODULE_lodash_includes__, __WEBPACK_EXTERNAL_MODULE_lodash_isArray__, __WEBPACK_EXTERNAL_MODULE_lodash_isElement__, __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__, __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__, __WEBPACK_EXTERNAL_MODULE_lodash_isString__, __WEBPACK_EXTERNAL_MODULE_lodash_merge__, __WEBPACK_EXTERNAL_MODULE_lodash_trim__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/namespace/cloudinary-core.js");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "./src/namespace/cloudinary-core.js":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	var lodash_namespaceObject = {};
	__webpack_require__.r(lodash_namespaceObject);
	__webpack_require__.d(lodash_namespaceObject, "assign", function() { return assign_root_assign_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "cloneDeep", function() { return cloneDeep_root_cloneDeep_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "compact", function() { return compact_root_compact_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "difference", function() { return difference_root_difference_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "functions", function() { return functions_root_functions_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "identity", function() { return identity_root_identity_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "includes", function() { return includes_root_includes_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "isArray", function() { return isArray_root_isArray_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "isPlainObject", function() { return isPlainObject_root_isPlainObject_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "isString", function() { return isString_root_isString_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "merge", function() { return merge_root_merge_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "contains", function() { return includes_root_includes_default.a; });
	__webpack_require__.d(lodash_namespaceObject, "isElement", function() { return isElement_root_isElement_; });
	__webpack_require__.d(lodash_namespaceObject, "isFunction", function() { return isFunction_root_isFunction_; });
	__webpack_require__.d(lodash_namespaceObject, "trim", function() { return trim_root_trim_; });
	__webpack_require__.d(lodash_namespaceObject, "getData", function() { return lodash_getData; });
	__webpack_require__.d(lodash_namespaceObject, "setData", function() { return lodash_setData; });
	__webpack_require__.d(lodash_namespaceObject, "getAttribute", function() { return lodash_getAttribute; });
	__webpack_require__.d(lodash_namespaceObject, "setAttribute", function() { return lodash_setAttribute; });
	__webpack_require__.d(lodash_namespaceObject, "removeAttribute", function() { return lodash_removeAttribute; });
	__webpack_require__.d(lodash_namespaceObject, "setAttributes", function() { return setAttributes; });
	__webpack_require__.d(lodash_namespaceObject, "hasClass", function() { return lodash_hasClass; });
	__webpack_require__.d(lodash_namespaceObject, "addClass", function() { return lodash_addClass; });
	__webpack_require__.d(lodash_namespaceObject, "getStyles", function() { return getStyles; });
	__webpack_require__.d(lodash_namespaceObject, "cssExpand", function() { return cssExpand; });
	__webpack_require__.d(lodash_namespaceObject, "domStyle", function() { return domStyle; });
	__webpack_require__.d(lodash_namespaceObject, "curCSS", function() { return curCSS; });
	__webpack_require__.d(lodash_namespaceObject, "cssValue", function() { return cssValue; });
	__webpack_require__.d(lodash_namespaceObject, "augmentWidthOrHeight", function() { return augmentWidthOrHeight; });
	__webpack_require__.d(lodash_namespaceObject, "getWidthOrHeight", function() { return getWidthOrHeight; });
	__webpack_require__.d(lodash_namespaceObject, "width", function() { return lodash_width; });
	__webpack_require__.d(lodash_namespaceObject, "omit", function() { return omit; });
	__webpack_require__.d(lodash_namespaceObject, "allStrings", function() { return baseutil_allStrings; });
	__webpack_require__.d(lodash_namespaceObject, "without", function() { return without; });
	__webpack_require__.d(lodash_namespaceObject, "isNumberLike", function() { return isNumberLike; });
	__webpack_require__.d(lodash_namespaceObject, "smartEscape", function() { return smartEscape; });
	__webpack_require__.d(lodash_namespaceObject, "defaults", function() { return defaults; });
	__webpack_require__.d(lodash_namespaceObject, "objectProto", function() { return objectProto; });
	__webpack_require__.d(lodash_namespaceObject, "objToString", function() { return objToString; });
	__webpack_require__.d(lodash_namespaceObject, "isObject", function() { return isObject; });
	__webpack_require__.d(lodash_namespaceObject, "funcTag", function() { return funcTag; });
	__webpack_require__.d(lodash_namespaceObject, "reWords", function() { return reWords; });
	__webpack_require__.d(lodash_namespaceObject, "camelCase", function() { return camelCase; });
	__webpack_require__.d(lodash_namespaceObject, "snakeCase", function() { return snakeCase; });
	__webpack_require__.d(lodash_namespaceObject, "convertKeys", function() { return convertKeys; });
	__webpack_require__.d(lodash_namespaceObject, "withCamelCaseKeys", function() { return withCamelCaseKeys; });
	__webpack_require__.d(lodash_namespaceObject, "withSnakeCaseKeys", function() { return withSnakeCaseKeys; });
	__webpack_require__.d(lodash_namespaceObject, "base64Encode", function() { return base64Encode; });
	__webpack_require__.d(lodash_namespaceObject, "base64EncodeURL", function() { return base64EncodeURL; });
	__webpack_require__.d(lodash_namespaceObject, "extractUrlParams", function() { return extractUrlParams; });
	__webpack_require__.d(lodash_namespaceObject, "patchFetchFormat", function() { return patchFetchFormat; });
	__webpack_require__.d(lodash_namespaceObject, "optionConsume", function() { return optionConsume; });
	__webpack_require__.d(lodash_namespaceObject, "isEmpty", function() { return isEmpty; });
	var constants_namespaceObject = {};
	__webpack_require__.r(constants_namespaceObject);
	__webpack_require__.d(constants_namespaceObject, "VERSION", function() { return VERSION; });
	__webpack_require__.d(constants_namespaceObject, "CF_SHARED_CDN", function() { return CF_SHARED_CDN; });
	__webpack_require__.d(constants_namespaceObject, "OLD_AKAMAI_SHARED_CDN", function() { return OLD_AKAMAI_SHARED_CDN; });
	__webpack_require__.d(constants_namespaceObject, "AKAMAI_SHARED_CDN", function() { return AKAMAI_SHARED_CDN; });
	__webpack_require__.d(constants_namespaceObject, "SHARED_CDN", function() { return SHARED_CDN; });
	__webpack_require__.d(constants_namespaceObject, "DEFAULT_POSTER_OPTIONS", function() { return DEFAULT_POSTER_OPTIONS; });
	__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCE_TYPES", function() { return DEFAULT_VIDEO_SOURCE_TYPES; });
	__webpack_require__.d(constants_namespaceObject, "SEO_TYPES", function() { return SEO_TYPES; });
	__webpack_require__.d(constants_namespaceObject, "DEFAULT_IMAGE_PARAMS", function() { return DEFAULT_IMAGE_PARAMS; });
	__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_PARAMS", function() { return DEFAULT_VIDEO_PARAMS; });
	__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCES", function() { return DEFAULT_VIDEO_SOURCES; });

	// CONCATENATED MODULE: ./src/utf8_encode.js
	/**
	 * UTF8 encoder
	 * @private
	 */
	var utf8_encode;
	/* harmony default export */ var src_utf8_encode = (utf8_encode = function utf8_encode(argString) {
	  var c1, enc, end, n, start, string, stringl, utftext; // http://kevin.vanzonneveld.net
	  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
	  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // +   improved by: sowberry
	  // +    tweaked by: Jack
	  // +   bugfixed by: Onno Marsman
	  // +   improved by: Yves Sucaet
	  // +   bugfixed by: Onno Marsman
	  // +   bugfixed by: Ulrich
	  // +   bugfixed by: Rafal Kukawski
	  // +   improved by: kirilloid
	  // *     example 1: utf8_encode('Kevin van Zonneveld');
	  // *     returns 1: 'Kevin van Zonneveld'

	  if (argString === null || typeof argString === 'undefined') {
	    return '';
	  }

	  string = argString + ''; // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

	  utftext = '';
	  start = void 0;
	  end = void 0;
	  stringl = 0;
	  start = end = 0;
	  stringl = string.length;
	  n = 0;

	  while (n < stringl) {
	    c1 = string.charCodeAt(n);
	    enc = null;

	    if (c1 < 128) {
	      end++;
	    } else if (c1 > 127 && c1 < 2048) {
	      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
	    } else {
	      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
	    }

	    if (enc !== null) {
	      if (end > start) {
	        utftext += string.slice(start, end);
	      }

	      utftext += enc;
	      start = end = n + 1;
	    }

	    n++;
	  }

	  if (end > start) {
	    utftext += string.slice(start, stringl);
	  }

	  return utftext;
	});
	// CONCATENATED MODULE: ./src/crc32.js

	/**
	 * CRC32 calculator
	 * Depends on 'utf8_encode'
	 * @private
	 * @param {string} str - The string to calculate the CRC32 for.
	 * @return {number}
	 */

	function crc32(str) {
	  var crc, i, iTop, table, x, y; // http://kevin.vanzonneveld.net
	  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
	  // +   improved by: T0bsn
	  // +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching
	  // -    depends on: utf8_encode
	  // *     example 1: crc32('Kevin van Zonneveld');
	  // *     returns 1: 1249991249

	  str = src_utf8_encode(str);
	  table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
	  crc = 0;
	  x = 0;
	  y = 0;
	  crc = crc ^ -1;
	  i = 0;
	  iTop = str.length;

	  while (i < iTop) {
	    y = (crc ^ str.charCodeAt(i)) & 0xFF;
	    x = '0x' + table.substr(y * 9, 8);
	    crc = crc >>> 8 ^ x;
	    i++;
	  }

	  crc = crc ^ -1; //convert to unsigned 32-bit int if needed

	  if (crc < 0) {
	    crc += 4294967296;
	  }

	  return crc;
	}

	/* harmony default export */ var src_crc32 = (crc32);
	// EXTERNAL MODULE: external {"commonjs":"lodash/assign","commonjs2":"lodash/assign","amd":"lodash/assign","root":["_","assign"]}
	var assign_root_assign_ = __webpack_require__("lodash/assign");
	var assign_root_assign_default = /*#__PURE__*/__webpack_require__.n(assign_root_assign_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/cloneDeep","commonjs2":"lodash/cloneDeep","amd":"lodash/cloneDeep","root":["_","cloneDeep"]}
	var cloneDeep_root_cloneDeep_ = __webpack_require__("lodash/cloneDeep");
	var cloneDeep_root_cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep_root_cloneDeep_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/compact","commonjs2":"lodash/compact","amd":"lodash/compact","root":["_","compact"]}
	var compact_root_compact_ = __webpack_require__("lodash/compact");
	var compact_root_compact_default = /*#__PURE__*/__webpack_require__.n(compact_root_compact_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/difference","commonjs2":"lodash/difference","amd":"lodash/difference","root":["_","difference"]}
	var difference_root_difference_ = __webpack_require__("lodash/difference");
	var difference_root_difference_default = /*#__PURE__*/__webpack_require__.n(difference_root_difference_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/functions","commonjs2":"lodash/functions","amd":"lodash/functions","root":["_","functions"]}
	var functions_root_functions_ = __webpack_require__("lodash/functions");
	var functions_root_functions_default = /*#__PURE__*/__webpack_require__.n(functions_root_functions_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/identity","commonjs2":"lodash/identity","amd":"lodash/identity","root":["_","identity"]}
	var identity_root_identity_ = __webpack_require__("lodash/identity");
	var identity_root_identity_default = /*#__PURE__*/__webpack_require__.n(identity_root_identity_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/includes","commonjs2":"lodash/includes","amd":"lodash/includes","root":["_","includes"]}
	var includes_root_includes_ = __webpack_require__("lodash/includes");
	var includes_root_includes_default = /*#__PURE__*/__webpack_require__.n(includes_root_includes_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/isArray","commonjs2":"lodash/isArray","amd":"lodash/isArray","root":["_","isArray"]}
	var isArray_root_isArray_ = __webpack_require__("lodash/isArray");
	var isArray_root_isArray_default = /*#__PURE__*/__webpack_require__.n(isArray_root_isArray_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/isPlainObject","commonjs2":"lodash/isPlainObject","amd":"lodash/isPlainObject","root":["_","isPlainObject"]}
	var isPlainObject_root_isPlainObject_ = __webpack_require__("lodash/isPlainObject");
	var isPlainObject_root_isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject_root_isPlainObject_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/isString","commonjs2":"lodash/isString","amd":"lodash/isString","root":["_","isString"]}
	var isString_root_isString_ = __webpack_require__("lodash/isString");
	var isString_root_isString_default = /*#__PURE__*/__webpack_require__.n(isString_root_isString_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/merge","commonjs2":"lodash/merge","amd":"lodash/merge","root":["_","merge"]}
	var merge_root_merge_ = __webpack_require__("lodash/merge");
	var merge_root_merge_default = /*#__PURE__*/__webpack_require__.n(merge_root_merge_);

	// EXTERNAL MODULE: external {"commonjs":"lodash/isElement","commonjs2":"lodash/isElement","amd":"lodash/isElement","root":["_","isElement"]}
	var isElement_root_isElement_ = __webpack_require__("lodash/isElement");

	// EXTERNAL MODULE: external {"commonjs":"lodash/isFunction","commonjs2":"lodash/isFunction","amd":"lodash/isFunction","root":["_","isFunction"]}
	var isFunction_root_isFunction_ = __webpack_require__("lodash/isFunction");

	// EXTERNAL MODULE: external {"commonjs":"lodash/trim","commonjs2":"lodash/trim","amd":"lodash/trim","root":["_","trim"]}
	var trim_root_trim_ = __webpack_require__("lodash/trim");

	// CONCATENATED MODULE: ./src/util/baseutil.js
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	/*
	 * Includes common utility methods and shims
	 */


	function omit(obj, keys) {
	  obj = obj || {};
	  var srcKeys = Object.keys(obj).filter(function (key) {
	    return !includes_root_includes_default()(keys, key);
	  });
	  var filtered = {};
	  srcKeys.forEach(function (key) {
	    return filtered[key] = obj[key];
	  });
	  return filtered;
	}
	/**
	 * Return true if all items in list are strings
	 * @function Util.allString
	 * @param {Array} list - an array of items
	 */

	var baseutil_allStrings = function allStrings(list) {
	  return list.length && list.every(isString_root_isString_default.a);
	};
	/**
	* Creates a new array without the given item.
	* @function Util.without
	* @param {Array} array - original array
	* @param {*} item - the item to exclude from the new array
	* @return {Array} a new array made of the original array's items except for `item`
	 */

	var without = function without(array, item) {
	  return array.filter(function (v) {
	    return v !== item;
	  });
	};
	/**
	* Return true is value is a number or a string representation of a number.
	* @function Util.isNumberLike
	* @param {*} value
	* @returns {boolean} true if value is a number
	* @example
	*    Util.isNumber(0) // true
	*    Util.isNumber("1.3") // true
	*    Util.isNumber("") // false
	*    Util.isNumber(undefined) // false
	 */

	var isNumberLike = function isNumberLike(value) {
	  return value != null && !isNaN(parseFloat(value));
	};
	/**
	 * Escape all characters matching unsafe in the given string
	 * @function Util.smartEscape
	 * @param {string} string - source string to escape
	 * @param {RegExp} unsafe - characters that must be escaped
	 * @return {string} escaped string
	 */

	var smartEscape = function smartEscape(string) {
	  var unsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /([^a-zA-Z0-9_.\-\/:]+)/g;
	  return string.replace(unsafe, function (match) {
	    return match.split("").map(function (c) {
	      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
	    }).join("");
	  });
	};
	/**
	 * Assign values from sources if they are not defined in the destination.
	 * Once a value is set it does not change
	 * @function Util.defaults
	 * @param {Object} destination - the object to assign defaults to
	 * @param {...Object} source - the source object(s) to assign defaults from
	 * @return {Object} destination after it was modified
	 */

	var defaults = function defaults(destination) {
	  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    sources[_key - 1] = arguments[_key];
	  }

	  return sources.reduce(function (dest, source) {
	    var key, value;

	    for (key in source) {
	      value = source[key];

	      if (dest[key] === void 0) {
	        dest[key] = value;
	      }
	    }

	    return dest;
	  }, destination);
	};
	/*********** lodash functions */

	var objectProto = Object.prototype;
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */

	var objToString = objectProto.toString;
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	#isObject({});
	 * // => true
	 *
	#isObject([1, 2, 3]);
	 * // => true
	 *
	#isObject(1);
	 * // => false
	 */

	var isObject = function isObject(value) {
	  var type; // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.

	  type = _typeof(value);
	  return !!value && (type === 'object' || type === 'function');
	};
	var funcTag = '[object Function]';
	/**
	* Checks if `value` is classified as a `Function` object.
	* @function Util.isFunction
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	* @example
	*
	* function Foo(){};
	* isFunction(Foo);
	* // => true
	*
	* isFunction(/abc/);
	* // => false
	 */

	var isFunction = function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) === funcTag;
	};
	/*********** lodash functions */

	/** Used to match words to create compound words. */

	var reWords = function () {
	  var lower, upper;
	  upper = '[A-Z]';
	  lower = '[a-z]+';
	  return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	}();
	/**
	* Convert string to camelCase
	* @function Util.camelCase
	* @param {string} source - the string to convert
	* @return {string} in camelCase format
	 */

	var camelCase = function camelCase(source) {
	  var words = source.match(reWords);
	  words = words.map(function (word) {
	    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
	  });
	  words[0] = words[0].toLocaleLowerCase();
	  return words.join('');
	};
	/**
	 * Convert string to snake_case
	 * @function Util.snakeCase
	 * @param {string} source - the string to convert
	 * @return {string} in snake_case format
	 */

	var snakeCase = function snakeCase(source) {
	  var words = source.match(reWords);
	  words = words.map(function (word) {
	    return word.toLocaleLowerCase();
	  });
	  return words.join('_');
	};
	/**
	 * Creates a new object from source, with the keys transformed using the converter.
	 * @param {object} source
	 * @param {function|null} converter
	 * @returns {object}
	 */

	var convertKeys = function convertKeys(source, converter) {
	  var result, value;
	  result = {};

	  for (var key in source) {
	    value = source[key];

	    if (converter) {
	      key = converter(key);
	    }

	    if (!isEmpty(key)) {
	      result[key] = value;
	    }
	  }

	  return result;
	};
	/**
	 * Create a copy of the source object with all keys in camelCase
	 * @function Util.withCamelCaseKeys
	 * @param {Object} value - the object to copy
	 * @return {Object} a new object
	 */

	var withCamelCaseKeys = function withCamelCaseKeys(source) {
	  return convertKeys(source, camelCase);
	};
	/**
	 * Create a copy of the source object with all keys in snake_case
	 * @function Util.withSnakeCaseKeys
	 * @param {Object} value - the object to copy
	 * @return {Object} a new object
	 */

	var withSnakeCaseKeys = function withSnakeCaseKeys(source) {
	  return convertKeys(source, snakeCase);
	}; // Browser
	// Node.js

	var base64Encode = typeof btoa !== 'undefined' && isFunction(btoa) ? btoa : typeof Buffer !== 'undefined' && isFunction(Buffer) ? function (input) {
	  if (!(input instanceof Buffer)) {
	    input = new Buffer.from(String(input), 'binary');
	  }

	  return input.toString('base64');
	} : function (input) {
	  throw new Error("No base64 encoding function found");
	};
	/**
	* Returns the Base64-decoded version of url.<br>
	* This method delegates to `btoa` if present. Otherwise it tries `Buffer`.
	* @function Util.base64EncodeURL
	* @param {string} url - the url to encode. the value is URIdecoded and then re-encoded before converting to base64 representation
	* @return {string} the base64 representation of the URL
	 */

	var base64EncodeURL = function base64EncodeURL(url) {
	  try {
	    url = decodeURI(url);
	  } finally {
	    url = encodeURI(url);
	  }

	  return base64Encode(url);
	};
	/**
	 * A list of keys used by the url() function.
	 * @private
	 */

	var URL_KEYS = ['api_secret', 'auth_token', 'cdn_subdomain', 'cloud_name', 'cname', 'format', 'private_cdn', 'resource_type', 'secure', 'secure_cdn_subdomain', 'secure_distribution', 'shorten', 'sign_url', 'ssl_detected', 'type', 'url_suffix', 'use_root_path', 'version'];
	/**
	 * Create a new object with only URL parameters
	 * @param {object} options The source object
	 * @return {Object} An object containing only URL parameters
	 */

	function extractUrlParams(options) {
	  return URL_KEYS.reduce(function (obj, key) {
	    if (options[key] != null) {
	      obj[key] = options[key];
	    }

	    return obj;
	  }, {});
	}
	/**
	 * Handle the format parameter for fetch urls
	 * @private
	 * @param options url and transformation options. This argument may be changed by the function!
	 */

	function patchFetchFormat(options) {
	  if (options == null) {
	    options = {};
	  }

	  if (options.type === "fetch") {
	    if (options.fetch_format == null) {
	      options.fetch_format = optionConsume(options, "format");
	    }
	  }
	}
	/**
	 * Deletes `option_name` from `options` and return the value if present.
	 * If `options` doesn't contain `option_name` the default value is returned.
	 * @param {Object} options a collection
	 * @param {String} option_name the name (key) of the desired value
	 * @param {*} [default_value] the value to return is option_name is missing
	 */

	function optionConsume(options, option_name, default_value) {
	  var result = options[option_name];
	  delete options[option_name];

	  if (result != null) {
	    return result;
	  } else {
	    return default_value;
	  }
	}
	/**
	 * Returns true if value is empty:
	 * <ul>
	 *   <li>value is null or undefined</li>
	 *   <li>value is an array or string of length 0</li>
	 *   <li>value is an object with no keys</li>
	 * </ul>
	 * @function Util.isEmpty
	 * @param value
	 * @returns {boolean} true if value is empty
	 */

	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }

	  if (typeof value.length == "number") {
	    return value.length === 0;
	  }

	  if (typeof value.size == "number") {
	    return value.size === 0;
	  }

	  if (_typeof(value) == "object") {
	    for (var key in value) {
	      if (value.hasOwnProperty(key)) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return true;
	}
	// CONCATENATED MODULE: ./src/util/lodash.js
	var nodeContains;

















	/*
	 * Includes utility methods and lodash / jQuery shims
	 */

	/**
	 * Get data from the DOM element.
	 *
	 * This method will use jQuery's `data()` method if it is available, otherwise it will get the `data-` attribute
	 * @param {Element} element - the element to get the data from
	 * @param {string} name - the name of the data item
	 * @returns the value associated with the `name`
	 * @function Util.getData
	 */

	var lodash_getData = function getData(element, name) {
	  switch (false) {
	    case !(element == null):
	      return void 0;

	    case !isFunction_root_isFunction_(element.getAttribute):
	      return element.getAttribute("data-".concat(name));

	    case !isFunction_root_isFunction_(element.getAttr):
	      return element.getAttr("data-".concat(name));

	    case !isFunction_root_isFunction_(element.data):
	      return element.data(name);

	    case !(isFunction_root_isFunction_(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_(element)):
	      return jQuery(element).data(name);
	  }
	};
	/**
	 * Set data in the DOM element.
	 *
	 * This method will use jQuery's `data()` method if it is available, otherwise it will set the `data-` attribute
	 * @function Util.setData
	 * @param {Element} element - the element to set the data in
	 * @param {string} name - the name of the data item
	 * @param {*} value - the value to be set
	 *
	 */

	var lodash_setData = function setData(element, name, value) {
	  switch (false) {
	    case !(element == null):
	      return void 0;

	    case !isFunction_root_isFunction_(element.setAttribute):
	      return element.setAttribute("data-".concat(name), value);

	    case !isFunction_root_isFunction_(element.setAttr):
	      return element.setAttr("data-".concat(name), value);

	    case !isFunction_root_isFunction_(element.data):
	      return element.data(name, value);

	    case !(isFunction_root_isFunction_(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_(element)):
	      return jQuery(element).data(name, value);
	  }
	};
	/**
	 * Get attribute from the DOM element.
	 *
	 * @function Util.getAttribute
	 * @param {Element} element - the element to set the attribute for
	 * @param {string} name - the name of the attribute
	 * @returns {*} the value of the attribute
	 *
	 */

	var lodash_getAttribute = function getAttribute(element, name) {
	  switch (false) {
	    case !(element == null):
	      return void 0;

	    case !isFunction_root_isFunction_(element.getAttribute):
	      return element.getAttribute(name);

	    case !isFunction_root_isFunction_(element.attr):
	      return element.attr(name);

	    case !isFunction_root_isFunction_(element.getAttr):
	      return element.getAttr(name);
	  }
	};
	/**
	 * Set attribute in the DOM element.
	 *
	 * @function Util.setAttribute
	 * @param {Element} element - the element to set the attribute for
	 * @param {string} name - the name of the attribute
	 * @param {*} value - the value to be set
	 */

	var lodash_setAttribute = function setAttribute(element, name, value) {
	  switch (false) {
	    case !(element == null):
	      return void 0;

	    case !isFunction_root_isFunction_(element.setAttribute):
	      return element.setAttribute(name, value);

	    case !isFunction_root_isFunction_(element.attr):
	      return element.attr(name, value);

	    case !isFunction_root_isFunction_(element.setAttr):
	      return element.setAttr(name, value);
	  }
	};
	/**
	 * Remove an attribute in the DOM element.
	 *
	 * @function Util.removeAttribute
	 * @param {Element} element - the element to set the attribute for
	 * @param {string} name - the name of the attribute
	 */

	var lodash_removeAttribute = function removeAttribute(element, name) {
	  switch (false) {
	    case !(element == null):
	      return void 0;

	    case !isFunction_root_isFunction_(element.removeAttribute):
	      return element.removeAttribute(name);

	    default:
	      return lodash_setAttribute(element, void 0);
	  }
	};
	/**
	 * Set a group of attributes to the element
	 * @function Util.setAttributes
	 * @param {Element} element - the element to set the attributes for
	 * @param {Object} attributes - a hash of attribute names and values
	 */

	var setAttributes = function setAttributes(element, attributes) {
	  var name, results, value;
	  results = [];

	  for (name in attributes) {
	    value = attributes[name];

	    if (value != null) {
	      results.push(lodash_setAttribute(element, name, value));
	    } else {
	      results.push(lodash_removeAttribute(element, name));
	    }
	  }

	  return results;
	};
	/**
	 * Checks if element has a css class
	 * @function Util.hasClass
	 * @param {Element} element - the element to check
	 * @param {string} name - the class name
	 @returns {boolean} true if the element has the class
	 */

	var lodash_hasClass = function hasClass(element, name) {
	  if (isElement_root_isElement_(element)) {
	    return element.className.match(new RegExp("\\b".concat(name, "\\b")));
	  }
	};
	/**
	 * Add class to the element
	 * @function Util.addClass
	 * @param {Element} element - the element
	 * @param {string} name - the class name to add
	 */

	var lodash_addClass = function addClass(element, name) {
	  if (!element.className.match(new RegExp("\\b".concat(name, "\\b")))) {
	    return element.className = trim_root_trim_("".concat(element.className, " ").concat(name));
	  }
	}; // The following code is taken from jQuery

	var getStyles = function getStyles(elem) {
	  // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	  // IE throws on elements created in popups
	  // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	  if (elem.ownerDocument.defaultView.opener) {
	    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
	  }

	  return window.getComputedStyle(elem, null);
	};
	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	nodeContains = function nodeContains(a, b) {
	  var adown, bup;
	  adown = a.nodeType === 9 ? a.documentElement : a;
	  bup = b && b.parentNode;
	  return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
	}; // Truncated version of jQuery.style(elem, name)


	var domStyle = function domStyle(elem, name) {
	  if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
	    return elem.style[name];
	  }
	};
	var curCSS = function curCSS(elem, name, computed) {
	  var maxWidth, minWidth, ret, rmargin, style, width;
	  rmargin = /^margin/;
	  width = void 0;
	  minWidth = void 0;
	  maxWidth = void 0;
	  ret = void 0;
	  style = elem.style;
	  computed = computed || getStyles(elem);

	  if (computed) {
	    // Support: IE9
	    // getPropertyValue is only needed for .css('filter') (#12537)
	    ret = computed.getPropertyValue(name) || computed[name];
	  }

	  if (computed) {
	    if (ret === "" && !nodeContains(elem.ownerDocument, elem)) {
	      ret = domStyle(elem, name);
	    } // Support: iOS < 6
	    // A tribute to the "awesome hack by Dean Edwards"
	    // iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
	    // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values


	    if (rnumnonpx.test(ret) && rmargin.test(name)) {
	      // Remember the original values
	      width = style.width;
	      minWidth = style.minWidth;
	      maxWidth = style.maxWidth; // Put in the new values to get a computed value out

	      style.minWidth = style.maxWidth = style.width = ret;
	      ret = computed.width; // Revert the changed values

	      style.width = width;
	      style.minWidth = minWidth;
	      style.maxWidth = maxWidth;
	    }
	  } // Support: IE
	  // IE returns zIndex value as an integer.


	  if (ret !== undefined) {
	    return ret + "";
	  } else {
	    return ret;
	  }
	};
	var cssValue = function cssValue(elem, name, convert, styles) {
	  var val;
	  val = curCSS(elem, name, styles);

	  if (convert) {
	    return parseFloat(val);
	  } else {
	    return val;
	  }
	};
	var augmentWidthOrHeight = function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
	  var i, len, side, sides, val; // If we already have the right measurement, avoid augmentation
	  // Otherwise initialize for horizontal or vertical properties

	  if (extra === (isBorderBox ? "border" : "content")) {
	    return 0;
	  } else {
	    sides = name === "width" ? ["Right", "Left"] : ["Top", "Bottom"];
	    val = 0;

	    for (i = 0, len = sides.length; i < len; i++) {
	      side = sides[i];

	      if (extra === "margin") {
	        // Both box models exclude margin, so add it if we want it
	        val += cssValue(elem, extra + side, true, styles);
	      }

	      if (isBorderBox) {
	        if (extra === "content") {
	          // border-box includes padding, so remove it if we want content
	          val -= cssValue(elem, "padding".concat(side), true, styles);
	        }

	        if (extra !== "margin") {
	          // At this point, extra isn't border nor margin, so remove border
	          val -= cssValue(elem, "border".concat(side, "Width"), true, styles);
	        }
	      } else {
	        // At this point, extra isn't content, so add padding
	        val += cssValue(elem, "padding".concat(side), true, styles);

	        if (extra !== "padding") {
	          // At this point, extra isn't content nor padding, so add border
	          val += cssValue(elem, "border".concat(side, "Width"), true, styles);
	        }
	      }
	    }

	    return val;
	  }
	};
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	var getWidthOrHeight = function getWidthOrHeight(elem, name, extra) {
	  var isBorderBox, styles, val, valueIsBorderBox; // Start with offset property, which is equivalent to the border-box value

	  valueIsBorderBox = true;
	  val = name === "width" ? elem.offsetWidth : elem.offsetHeight;
	  styles = getStyles(elem);
	  isBorderBox = cssValue(elem, "boxSizing", false, styles) === "border-box"; // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668

	  if (val <= 0 || val == null) {
	    // Fall back to computed then uncomputed css if necessary
	    val = curCSS(elem, name, styles);

	    if (val < 0 || val == null) {
	      val = elem.style[name];
	    }

	    if (rnumnonpx.test(val)) {
	      // Computed unit is not pixels. Stop here and return.
	      return val;
	    } // Check for style in case a browser which returns unreliable values
	    // for getComputedStyle silently falls back to the reliable elem.style
	    //    valueIsBorderBox = isBorderBox and (support.boxSizingReliable() or val is elem.style[name])


	    valueIsBorderBox = isBorderBox && val === elem.style[name]; // Normalize "", auto, and prepare for extra

	    val = parseFloat(val) || 0;
	  } // Use the active box-sizing model to add/subtract irrelevant styles


	  return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles);
	};
	var lodash_width = function width(element) {
	  return getWidthOrHeight(element, "width", "content");
	};
	/**
	 * @class Util
	 */

	/**
	 * Returns true if item is a string
	 * @function Util.isString
	 * @param item
	 * @returns {boolean} true if item is a string
	 */

	/**
	 * Returns true if item is empty:
	 * <ul>
	 *   <li>item is null or undefined</li>
	 *   <li>item is an array or string of length 0</li>
	 *   <li>item is an object with no keys</li>
	 * </ul>
	 * @function Util.isEmpty
	 * @param item
	 * @returns {boolean} true if item is empty
	 */

	/**
	 * Assign source properties to destination.
	 * If the property is an object it is assigned as a whole, overriding the destination object.
	 * @function Util.assign
	 * @param {Object} destination - the object to assign to
	 */

	/**
	 * Recursively assign source properties to destination
	 * @function Util.merge
	 * @param {Object} destination - the object to assign to
	 * @param {...Object} [sources] The source objects.
	 */

	/**
	 * Create a new copy of the given object, including all internal objects.
	 * @function Util.cloneDeep
	 * @param {Object} value - the object to clone
	 * @return {Object} a new deep copy of the object
	 */

	/**
	 * Creates a new array from the parameter with "falsey" values removed
	 * @function Util.compact
	 * @param {Array} array - the array to remove values from
	 * @return {Array} a new array without falsey values
	 */

	/**
	 * Check if a given item is included in the given array
	 * @function Util.contains
	 * @param {Array} array - the array to search in
	 * @param {*} item - the item to search for
	 * @return {boolean} true if the item is included in the array
	 */

	/**
	 * Returns values in the given array that are not included in the other array
	 * @function Util.difference
	 * @param {Array} arr - the array to select from
	 * @param {Array} values - values to filter from arr
	 * @return {Array} the filtered values
	 */

	/**
	 * Returns a list of all the function names in obj
	 * @function Util.functions
	 * @param {Object} object - the object to inspect
	 * @return {Array} a list of functions of object
	 */

	/**
	 * Returns the provided value. This functions is used as a default predicate function.
	 * @function Util.identity
	 * @param {*} value
	 * @return {*} the provided value
	 */

	/**
	 * Remove leading or trailing spaces from text
	 * @function Util.trim
	 * @param {string} text
	 * @return {string} the `text` without leading or trailing spaces
	 */
	// CONCATENATED MODULE: ./src/expression.js
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	/**
	 * Represents a transformation expression.
	 * @param {string} expressionStr - An expression in string format.
	 * @class Expression
	 *
	 */
	var Expression =
	/*#__PURE__*/
	function () {
	  function Expression(expressionStr) {
	    _classCallCheck(this, Expression);

	    /**
	     * @protected
	     * @inner Expression-expressions
	     */
	    this.expressions = [];

	    if (expressionStr != null) {
	      this.expressions.push(Expression.normalize(expressionStr));
	    }
	  }
	  /**
	   * Convenience constructor method
	   * @function Expression.new
	   */


	  _createClass(Expression, [{
	    key: "serialize",

	    /**
	     * Serialize the expression
	     * @return {string} the expression as a string
	     */
	    value: function serialize() {
	      return Expression.normalize(this.expressions.join("_"));
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.serialize();
	    }
	    /**
	     * Get the parent transformation of this expression
	     * @return Transformation
	     */

	  }, {
	    key: "getParent",
	    value: function getParent() {
	      return this.parent;
	    }
	    /**
	     * Set the parent transformation of this expression
	     * @param {Transformation} the parent transformation
	     * @return {Expression} this expression
	     */

	  }, {
	    key: "setParent",
	    value: function setParent(parent) {
	      this.parent = parent;
	      return this;
	    }
	    /**
	     * Add a expression
	     * @function Expression#predicate
	     * @internal
	     */

	  }, {
	    key: "predicate",
	    value: function predicate(name, operator, value) {
	      if (Expression.OPERATORS[operator] != null) {
	        operator = Expression.OPERATORS[operator];
	      }

	      this.expressions.push("".concat(name, "_").concat(operator, "_").concat(value));
	      return this;
	    }
	    /**
	     * @function Expression#and
	     */

	  }, {
	    key: "and",
	    value: function and() {
	      this.expressions.push("and");
	      return this;
	    }
	    /**
	     * @function Expression#or
	     */

	  }, {
	    key: "or",
	    value: function or() {
	      this.expressions.push("or");
	      return this;
	    }
	    /**
	     * Conclude expression
	     * @function Expression#then
	     * @return {Transformation} the transformation this expression is defined for
	     */

	  }, {
	    key: "then",
	    value: function then() {
	      return this.getParent()["if"](this.toString());
	    }
	    /**
	     * @function Expression#height
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Expression} this expression
	     */

	  }, {
	    key: "height",
	    value: function height(operator, value) {
	      return this.predicate("h", operator, value);
	    }
	    /**
	     * @function Expression#width
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Expression} this expression
	     */

	  }, {
	    key: "width",
	    value: function width(operator, value) {
	      return this.predicate("w", operator, value);
	    }
	    /**
	     * @function Expression#aspectRatio
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Expression} this expression
	     */

	  }, {
	    key: "aspectRatio",
	    value: function aspectRatio(operator, value) {
	      return this.predicate("ar", operator, value);
	    }
	    /**
	     * @function Expression#pages
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Expression} this expression
	     */

	  }, {
	    key: "pageCount",
	    value: function pageCount(operator, value) {
	      return this.predicate("pc", operator, value);
	    }
	    /**
	     * @function Expression#faces
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Expression} this expression
	     */

	  }, {
	    key: "faceCount",
	    value: function faceCount(operator, value) {
	      return this.predicate("fc", operator, value);
	    }
	  }, {
	    key: "value",
	    value: function value(_value) {
	      this.expressions.push(_value);
	      return this;
	    }
	    /**
	     */

	  }], [{
	    key: "new",
	    value: function _new(expressionStr) {
	      return new this(expressionStr);
	    }
	    /**
	     * Normalize a string expression
	     * @function Cloudinary#normalize
	     * @param {string} expression a expression, e.g. "w gt 100", "width_gt_100", "width > 100"
	     * @return {string} the normalized form of the value expression, e.g. "w_gt_100"
	     */

	  }, {
	    key: "normalize",
	    value: function normalize(expression) {
	      var operators, pattern, replaceRE;

	      if (expression == null) {
	        return expression;
	      }

	      expression = String(expression);
	      operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*";
	      pattern = "((" + operators + ")(?=[ _])|" + Object.keys(Expression.PREDEFINED_VARS).join("|") + ")";
	      replaceRE = new RegExp(pattern, "g");
	      expression = expression.replace(replaceRE, function (match) {
	        return Expression.OPERATORS[match] || Expression.PREDEFINED_VARS[match];
	      });
	      return expression.replace(/[ _]+/g, '_');
	    }
	  }, {
	    key: "variable",
	    value: function variable(name, value) {
	      return new this(name).value(value);
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "width"
	     * @function Expression.width
	     */

	  }, {
	    key: "width",
	    value: function width() {
	      return new this("width");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "height"
	     * @function Expression.height
	     */

	  }, {
	    key: "height",
	    value: function height() {
	      return new this("height");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "initialWidth"
	     * @function Expression.initialWidth
	     */

	  }, {
	    key: "initialWidth",
	    value: function initialWidth() {
	      return new this("initialWidth");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "initialHeight"
	     * @function Expression.initialHeight
	     */

	  }, {
	    key: "initialHeight",
	    value: function initialHeight() {
	      return new this("initialHeight");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "aspectRatio"
	     * @function Expression.aspectRatio
	     */

	  }, {
	    key: "aspectRatio",
	    value: function aspectRatio() {
	      return new this("aspectRatio");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "initialAspectRatio"
	     * @function Expression.initialAspectRatio
	     */

	  }, {
	    key: "initialAspectRatio",
	    value: function initialAspectRatio() {
	      return new this("initialAspectRatio");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "pageCount"
	     * @function Expression.pageCount
	     */

	  }, {
	    key: "pageCount",
	    value: function pageCount() {
	      return new this("pageCount");
	    }
	    /**
	     * @returns Expression new expression with the predefined variable "faceCount"
	     * @function Expression.faceCount
	     */

	  }, {
	    key: "faceCount",
	    value: function faceCount() {
	      return new this("faceCount");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "currentPage"
	     * @function Expression.currentPage
	     */

	  }, {
	    key: "currentPage",
	    value: function currentPage() {
	      return new this("currentPage");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "tags"
	     * @function Expression.tags
	     */

	  }, {
	    key: "tags",
	    value: function tags() {
	      return new this("tags");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "pageX"
	     * @function Expression.pageX
	     */

	  }, {
	    key: "pageX",
	    value: function pageX() {
	      return new this("pageX");
	    }
	    /**
	     * @returns Expression a new expression with the predefined variable "pageY"
	     * @function Expression.pageY
	     */

	  }, {
	    key: "pageY",
	    value: function pageY() {
	      return new this("pageY");
	    }
	  }]);

	  return Expression;
	}();
	/**
	 * @internal
	 */


	Expression.OPERATORS = {
	  "=": 'eq',
	  "!=": 'ne',
	  "<": 'lt',
	  ">": 'gt',
	  "<=": 'lte',
	  ">=": 'gte',
	  "&&": 'and',
	  "||": 'or',
	  "*": "mul",
	  "/": "div",
	  "+": "add",
	  "-": "sub"
	};
	/**
	 * @internal
	 */

	Expression.PREDEFINED_VARS = {
	  "aspect_ratio": "ar",
	  "aspectRatio": "ar",
	  "current_page": "cp",
	  "currentPage": "cp",
	  "duration": "du",
	  "face_count": "fc",
	  "faceCount": "fc",
	  "height": "h",
	  "initial_aspect_ratio": "iar",
	  "initial_duration": "idu",
	  "initial_height": "ih",
	  "initial_width": "iw",
	  "initialAspectRatio": "iar",
	  "initialDuration": "idu",
	  "initialHeight": "ih",
	  "initialWidth": "iw",
	  "page_count": "pc",
	  "page_x": "px",
	  "page_y": "py",
	  "pageCount": "pc",
	  "pageX": "px",
	  "pageY": "py",
	  "tags": "tags",
	  "width": "w"
	};
	/**
	 * @internal
	 */

	Expression.BOUNDRY = "[ _]+";
	/* harmony default export */ var expression = (Expression);
	// CONCATENATED MODULE: ./src/condition.js
	function condition_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { condition_typeof = function _typeof(obj) { return typeof obj; }; } else { condition_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return condition_typeof(obj); }

	function condition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function condition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function condition_createClass(Constructor, protoProps, staticProps) { if (protoProps) condition_defineProperties(Constructor.prototype, protoProps); if (staticProps) condition_defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (condition_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


	/**
	 * Represents a transformation condition.
	 * @param {string} conditionStr - a condition in string format
	 * @class Condition
	 * @example
	 * // normally this class is not instantiated directly
	 * var tr = cloudinary.Transformation.new()
	 *    .if().width( ">", 1000).and().aspectRatio("<", "3:4").then()
	 *      .width(1000)
	 *      .crop("scale")
	 *    .else()
	 *      .width(500)
	 *      .crop("scale")
	 *
	 * var tr = cloudinary.Transformation.new()
	 *    .if("w > 1000 and aspectRatio < 3:4")
	 *      .width(1000)
	 *      .crop("scale")
	 *    .else()
	 *      .width(500)
	 *      .crop("scale")
	 *
	 */

	var Condition =
	/*#__PURE__*/
	function (_Expression) {
	  _inherits(Condition, _Expression);

	  function Condition(conditionStr) {
	    condition_classCallCheck(this, Condition);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Condition).call(this, conditionStr));
	  }
	  /**
	   * @function Condition#height
	   * @param {string} operator the comparison operator (e.g. "<", "lt")
	   * @param {string|number} value the right hand side value
	   * @return {Condition} this condition
	   */


	  condition_createClass(Condition, [{
	    key: "height",
	    value: function height(operator, value) {
	      return this.predicate("h", operator, value);
	    }
	    /**
	     * @function Condition#width
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Condition} this condition
	     */

	  }, {
	    key: "width",
	    value: function width(operator, value) {
	      return this.predicate("w", operator, value);
	    }
	    /**
	     * @function Condition#aspectRatio
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Condition} this condition
	     */

	  }, {
	    key: "aspectRatio",
	    value: function aspectRatio(operator, value) {
	      return this.predicate("ar", operator, value);
	    }
	    /**
	     * @function Condition#pages
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Condition} this condition
	     */

	  }, {
	    key: "pageCount",
	    value: function pageCount(operator, value) {
	      return this.predicate("pc", operator, value);
	    }
	    /**
	     * @function Condition#faces
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Condition} this condition
	     */

	  }, {
	    key: "faceCount",
	    value: function faceCount(operator, value) {
	      return this.predicate("fc", operator, value);
	    }
	    /**
	     * @function Condition#duration
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Condition} this condition
	     */

	  }, {
	    key: "duration",
	    value: function duration(operator, value) {
	      return this.predicate("du", operator, value);
	    }
	    /**
	     * @function Condition#initialDuration
	     * @param {string} operator the comparison operator (e.g. "<", "lt")
	     * @param {string|number} value the right hand side value
	     * @return {Condition} this condition
	     */

	  }, {
	    key: "initialDuration",
	    value: function initialDuration(operator, value) {
	      return this.predicate("idu", operator, value);
	    }
	  }]);

	  return Condition;
	}(expression);

	/* harmony default export */ var condition = (Condition);
	// CONCATENATED MODULE: ./src/configuration.js
	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

	function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function configuration_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function configuration_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function configuration_createClass(Constructor, protoProps, staticProps) { if (protoProps) configuration_defineProperties(Constructor.prototype, protoProps); if (staticProps) configuration_defineProperties(Constructor, staticProps); return Constructor; }

	/**
	 * Class for defining account configuration options.
	 * Depends on 'utils'
	 */

	/**
	 * Class for defining account configuration options.
	 * @constructor Configuration
	 * @param {Object} options - The account configuration parameters to set.
	 * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	 *  target="_new">Available configuration options</a>
	 */

	var configuration_Configuration =
	/*#__PURE__*/
	function () {
	  function Configuration(options) {
	    configuration_classCallCheck(this, Configuration);

	    this.configuration = options == null ? {} : cloneDeep_root_cloneDeep_default()(options);
	    defaults(this.configuration, DEFAULT_CONFIGURATION_PARAMS);
	  }
	  /**
	   * Initializes the configuration. This method is a convenience method that invokes both 
	   *  {@link Configuration#fromEnvironment|fromEnvironment()} (Node.js environment only) 
	   *  and {@link Configuration#fromDocument|fromDocument()}. 
	   *  It first tries to retrieve the configuration from the environment variable. 
	   *  If not available, it tries from the document meta tags. 
	   * @function Configuration#init
	   * @return {Configuration} returns `this` for chaining
	   * @see fromDocument
	   * @see fromEnvironment
	   */


	  configuration_createClass(Configuration, [{
	    key: "init",
	    value: function init() {
	      this.fromEnvironment();
	      this.fromDocument();
	      return this;
	    }
	    /**
	     * Set a new configuration item
	     * @function Configuration#set
	     * @param {string} name - the name of the item to set
	     * @param {*} value - the value to be set
	     * @return {Configuration}
	     *
	     */

	  }, {
	    key: "set",
	    value: function set(name, value) {
	      this.configuration[name] = value;
	      return this;
	    }
	    /**
	     * Get the value of a configuration item
	     * @function Configuration#get
	     * @param {string} name - the name of the item to set
	     * @return {*} the configuration item
	     */

	  }, {
	    key: "get",
	    value: function get(name) {
	      return this.configuration[name];
	    }
	  }, {
	    key: "merge",
	    value: function merge(config) {
	      assign_root_assign_default()(this.configuration, cloneDeep_root_cloneDeep_default()(config));
	      return this;
	    }
	    /**
	     * Initialize Cloudinary from HTML meta tags.
	     * @function Configuration#fromDocument
	     * @return {Configuration}
	     * @example <meta name="cloudinary_cloud_name" content="mycloud">
	     *
	     */

	  }, {
	    key: "fromDocument",
	    value: function fromDocument() {
	      var el, i, len, meta_elements;
	      meta_elements = typeof document !== "undefined" && document !== null ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0;

	      if (meta_elements) {
	        for (i = 0, len = meta_elements.length; i < len; i++) {
	          el = meta_elements[i];
	          this.configuration[el.getAttribute('name').replace('cloudinary_', '')] = el.getAttribute('content');
	        }
	      }

	      return this;
	    }
	    /**
	     * Initialize Cloudinary from the `CLOUDINARY_URL` environment variable.
	     *
	     * This function will only run under Node.js environment.
	     * @function Configuration#fromEnvironment
	     * @requires Node.js
	     */

	  }, {
	    key: "fromEnvironment",
	    value: function fromEnvironment() {
	      var _this = this;

	      var cloudinary_url, query, uri, uriRegex;

	      if (typeof process !== "undefined" && process !== null && process.env && process.env.CLOUDINARY_URL) {
	        cloudinary_url = process.env.CLOUDINARY_URL;
	        uriRegex = /cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/;
	        uri = uriRegex.exec(cloudinary_url);

	        if (uri) {
	          if (uri[3] != null) {
	            this.configuration['cloud_name'] = uri[3];
	          }

	          if (uri[1] != null) {
	            this.configuration['api_key'] = uri[1];
	          }

	          if (uri[2] != null) {
	            this.configuration['api_secret'] = uri[2];
	          }

	          if (uri[4] != null) {
	            this.configuration['private_cdn'] = uri[4] != null;
	          }

	          if (uri[4] != null) {
	            this.configuration['secure_distribution'] = uri[4];
	          }

	          query = uri[5];

	          if (query != null) {
	            query.split('&').forEach(function (value) {
	              var _value$split = value.split('='),
	                  _value$split2 = _slicedToArray(_value$split, 2),
	                  k = _value$split2[0],
	                  v = _value$split2[1];

	              if (v == null) {
	                v = true;
	              }

	              _this.configuration[k] = v;
	            });
	          }
	        }
	      }

	      return this;
	    }
	    /**
	     * Create or modify the Cloudinary client configuration
	     *
	     * Warning: `config()` returns the actual internal configuration object. modifying it will change the configuration.
	     *
	     * This is a backward compatibility method. For new code, use get(), merge() etc.
	     * @function Configuration#config
	     * @param {hash|string|boolean} new_config
	     * @param {string} new_value
	     * @returns {*} configuration, or value
	     *
	     * @see {@link fromEnvironment} for initialization using environment variables
	     * @see {@link fromDocument} for initialization using HTML meta tags
	     */

	  }, {
	    key: "config",
	    value: function config(new_config, new_value) {
	      switch (false) {
	        case new_value === void 0:
	          this.set(new_config, new_value);
	          return this.configuration;

	        case !isString_root_isString_default()(new_config):
	          return this.get(new_config);

	        case !isPlainObject_root_isPlainObject_default()(new_config):
	          this.merge(new_config);
	          return this.configuration;

	        default:
	          // Backward compatibility - return the internal object
	          return this.configuration;
	      }
	    }
	    /**
	     * Returns a copy of the configuration parameters
	     * @function Configuration#toOptions
	     * @returns {Object} a key:value collection of the configuration parameters
	     */

	  }, {
	    key: "toOptions",
	    value: function toOptions() {
	      return cloneDeep_root_cloneDeep_default()(this.configuration);
	    }
	  }]);

	  return Configuration;
	}();

	var DEFAULT_CONFIGURATION_PARAMS = {
	  responsive_class: 'cld-responsive',
	  responsive_use_breakpoints: true,
	  round_dpr: true,
	  secure: (typeof window !== "undefined" && window !== null ? window.location ? window.location.protocol : void 0 : void 0) === 'https:'
	};
	configuration_Configuration.CONFIG_PARAMS = ["api_key", "api_secret", "callback", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive", "responsive_class", "responsive_use_breakpoints", "responsive_width", "round_dpr", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "upload_preset", "url_suffix", "use_root_path", "version"];
	/* harmony default export */ var src_configuration = (configuration_Configuration);
	// CONCATENATED MODULE: ./src/layer/layer.js
	function layer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function layer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function layer_createClass(Constructor, protoProps, staticProps) { if (protoProps) layer_defineProperties(Constructor.prototype, protoProps); if (staticProps) layer_defineProperties(Constructor, staticProps); return Constructor; }



	var layer_Layer =
	/*#__PURE__*/
	function () {
	  /**
	   * Layer
	   * @constructor Layer
	   * @param {Object} options - layer parameters
	   */
	  function Layer(options) {
	    var _this = this;

	    layer_classCallCheck(this, Layer);

	    this.options = {};

	    if (options != null) {
	      ["resourceType", "type", "publicId", "format"].forEach(function (key) {
	        var ref;
	        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
	      });
	    }
	  }

	  layer_createClass(Layer, [{
	    key: "resourceType",
	    value: function resourceType(value) {
	      this.options.resourceType = value;
	      return this;
	    }
	  }, {
	    key: "type",
	    value: function type(value) {
	      this.options.type = value;
	      return this;
	    }
	  }, {
	    key: "publicId",
	    value: function publicId(value) {
	      this.options.publicId = value;
	      return this;
	    }
	    /**
	     * Get the public ID, formatted for layer parameter
	     * @function Layer#getPublicId
	     * @return {String} public ID
	     */

	  }, {
	    key: "getPublicId",
	    value: function getPublicId() {
	      var ref;
	      return (ref = this.options.publicId) != null ? ref.replace(/\//g, ":") : void 0;
	    }
	    /**
	     * Get the public ID, with format if present
	     * @function Layer#getFullPublicId
	     * @return {String} public ID
	     */

	  }, {
	    key: "getFullPublicId",
	    value: function getFullPublicId() {
	      if (this.options.format != null) {
	        return this.getPublicId() + "." + this.options.format;
	      } else {
	        return this.getPublicId();
	      }
	    }
	  }, {
	    key: "format",
	    value: function format(value) {
	      this.options.format = value;
	      return this;
	    }
	    /**
	     * generate the string representation of the layer
	     * @function Layer#toString
	     */

	  }, {
	    key: "toString",
	    value: function toString() {
	      var components;
	      components = [];

	      if (this.options.publicId == null) {
	        throw "Must supply publicId";
	      }

	      if (!(this.options.resourceType === "image")) {
	        components.push(this.options.resourceType);
	      }

	      if (!(this.options.type === "upload")) {
	        components.push(this.options.type);
	      }

	      components.push(this.getFullPublicId());
	      return compact_root_compact_default()(components).join(":");
	    }
	  }, {
	    key: "clone",
	    value: function clone() {
	      return new this.constructor(this.options);
	    }
	  }]);

	  return Layer;
	}();

	/* harmony default export */ var layer_layer = (layer_Layer);
	// CONCATENATED MODULE: ./src/layer/textlayer.js
	function textlayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { textlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { textlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return textlayer_typeof(obj); }

	function textlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function textlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function textlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) textlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) textlayer_defineProperties(Constructor, staticProps); return Constructor; }

	function textlayer_possibleConstructorReturn(self, call) { if (call && (textlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return textlayer_assertThisInitialized(self); }

	function textlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function textlayer_getPrototypeOf(o) { textlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return textlayer_getPrototypeOf(o); }

	function textlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) textlayer_setPrototypeOf(subClass, superClass); }

	function textlayer_setPrototypeOf(o, p) { textlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return textlayer_setPrototypeOf(o, p); }




	var textlayer_TextLayer =
	/*#__PURE__*/
	function (_Layer) {
	  textlayer_inherits(TextLayer, _Layer);

	  /**
	   * @constructor TextLayer
	   * @param {Object} options - layer parameters
	   */
	  function TextLayer(options) {
	    var _this;

	    textlayer_classCallCheck(this, TextLayer);

	    var keys;
	    _this = textlayer_possibleConstructorReturn(this, textlayer_getPrototypeOf(TextLayer).call(this, options));
	    keys = ["resourceType", "resourceType", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textDecoration", "textAlign", "stroke", "letterSpacing", "lineSpacing", "fontHinting", "fontAntialiasing", "text"];

	    if (options != null) {
	      keys.forEach(function (key) {
	        var ref;
	        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
	      });
	    }

	    _this.options.resourceType = "text";
	    return _this;
	  }

	  textlayer_createClass(TextLayer, [{
	    key: "resourceType",
	    value: function resourceType(_resourceType) {
	      throw "Cannot modify resourceType for text layers";
	    }
	  }, {
	    key: "type",
	    value: function type(_type) {
	      throw "Cannot modify type for text layers";
	    }
	  }, {
	    key: "format",
	    value: function format(_format) {
	      throw "Cannot modify format for text layers";
	    }
	  }, {
	    key: "fontFamily",
	    value: function fontFamily(_fontFamily) {
	      this.options.fontFamily = _fontFamily;
	      return this;
	    }
	  }, {
	    key: "fontSize",
	    value: function fontSize(_fontSize) {
	      this.options.fontSize = _fontSize;
	      return this;
	    }
	  }, {
	    key: "fontWeight",
	    value: function fontWeight(_fontWeight) {
	      this.options.fontWeight = _fontWeight;
	      return this;
	    }
	  }, {
	    key: "fontStyle",
	    value: function fontStyle(_fontStyle) {
	      this.options.fontStyle = _fontStyle;
	      return this;
	    }
	  }, {
	    key: "textDecoration",
	    value: function textDecoration(_textDecoration) {
	      this.options.textDecoration = _textDecoration;
	      return this;
	    }
	  }, {
	    key: "textAlign",
	    value: function textAlign(_textAlign) {
	      this.options.textAlign = _textAlign;
	      return this;
	    }
	  }, {
	    key: "stroke",
	    value: function stroke(_stroke) {
	      this.options.stroke = _stroke;
	      return this;
	    }
	  }, {
	    key: "letterSpacing",
	    value: function letterSpacing(_letterSpacing) {
	      this.options.letterSpacing = _letterSpacing;
	      return this;
	    }
	  }, {
	    key: "lineSpacing",
	    value: function lineSpacing(_lineSpacing) {
	      this.options.lineSpacing = _lineSpacing;
	      return this;
	    }
	  }, {
	    key: "fontHinting",
	    value: function fontHinting(_fontHinting) {
	      this.options.fontHinting = _fontHinting;
	      return this;
	    }
	  }, {
	    key: "fontAntialiasing",
	    value: function fontAntialiasing(_fontAntialiasing) {
	      this.options.fontAntialiasing = _fontAntialiasing;
	      return this;
	    }
	  }, {
	    key: "text",
	    value: function text(_text) {
	      this.options.text = _text;
	      return this;
	    }
	    /**
	     * generate the string representation of the layer
	     * @function TextLayer#toString
	     * @return {String}
	     */

	  }, {
	    key: "toString",
	    value: function toString() {
	      var components, hasPublicId, hasStyle, publicId, re, res, start, style, text, textSource;
	      style = this.textStyleIdentifier();

	      if (this.options.publicId != null) {
	        publicId = this.getFullPublicId();
	      }

	      if (this.options.text != null) {
	        hasPublicId = !isEmpty(publicId);
	        hasStyle = !isEmpty(style);

	        if (hasPublicId && hasStyle || !hasPublicId && !hasStyle) {
	          throw "Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";
	        }

	        re = /\$\([a-zA-Z]\w*\)/g;
	        start = 0; //        textSource = text.replace(new RegExp("[,/]", 'g'), (c)-> "%#{c.charCodeAt(0).toString(16).toUpperCase()}")

	        textSource = smartEscape(this.options.text, /[,\/]/g);
	        text = "";

	        while (res = re.exec(textSource)) {
	          text += smartEscape(textSource.slice(start, res.index));
	          text += res[0];
	          start = res.index + res[0].length;
	        }

	        text += smartEscape(textSource.slice(start));
	      }

	      components = [this.options.resourceType, style, publicId, text];
	      return compact_root_compact_default()(components).join(":");
	    }
	  }, {
	    key: "textStyleIdentifier",
	    value: function textStyleIdentifier() {
	      var components;
	      components = [];

	      if (this.options.fontWeight !== "normal") {
	        components.push(this.options.fontWeight);
	      }

	      if (this.options.fontStyle !== "normal") {
	        components.push(this.options.fontStyle);
	      }

	      if (this.options.textDecoration !== "none") {
	        components.push(this.options.textDecoration);
	      }

	      components.push(this.options.textAlign);

	      if (this.options.stroke !== "none") {
	        components.push(this.options.stroke);
	      }

	      if (!(isEmpty(this.options.letterSpacing) && !isNumberLike(this.options.letterSpacing))) {
	        components.push("letter_spacing_" + this.options.letterSpacing);
	      }

	      if (!(isEmpty(this.options.lineSpacing) && !isNumberLike(this.options.lineSpacing))) {
	        components.push("line_spacing_" + this.options.lineSpacing);
	      }

	      if (!isEmpty(this.options.fontAntialiasing)) {
	        components.push("antialias_" + this.options.fontAntialiasing);
	      }

	      if (!isEmpty(this.options.fontHinting)) {
	        components.push("hinting_" + this.options.fontHinting);
	      }

	      if (!isEmpty(compact_root_compact_default()(components))) {
	        if (isEmpty(this.options.fontFamily)) {
	          throw "Must supply fontFamily. ".concat(components);
	        }

	        if (isEmpty(this.options.fontSize) && !isNumberLike(this.options.fontSize)) {
	          throw "Must supply fontSize.";
	        }
	      }

	      components.unshift(this.options.fontFamily, this.options.fontSize);
	      components = compact_root_compact_default()(components).join("_");
	      return components;
	    }
	  }]);

	  return TextLayer;
	}(layer_layer);

	;
	/* harmony default export */ var textlayer = (textlayer_TextLayer);
	// CONCATENATED MODULE: ./src/layer/subtitleslayer.js
	function subtitleslayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { subtitleslayer_typeof = function _typeof(obj) { return typeof obj; }; } else { subtitleslayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return subtitleslayer_typeof(obj); }

	function subtitleslayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function subtitleslayer_possibleConstructorReturn(self, call) { if (call && (subtitleslayer_typeof(call) === "object" || typeof call === "function")) { return call; } return subtitleslayer_assertThisInitialized(self); }

	function subtitleslayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function subtitleslayer_getPrototypeOf(o) { subtitleslayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return subtitleslayer_getPrototypeOf(o); }

	function subtitleslayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) subtitleslayer_setPrototypeOf(subClass, superClass); }

	function subtitleslayer_setPrototypeOf(o, p) { subtitleslayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return subtitleslayer_setPrototypeOf(o, p); }



	var SubtitlesLayer =
	/*#__PURE__*/
	function (_TextLayer) {
	  subtitleslayer_inherits(SubtitlesLayer, _TextLayer);

	  /**
	   * Represent a subtitles layer
	   * @constructor SubtitlesLayer
	   * @param {Object} options - layer parameters
	   */
	  function SubtitlesLayer(options) {
	    var _this;

	    subtitleslayer_classCallCheck(this, SubtitlesLayer);

	    _this = subtitleslayer_possibleConstructorReturn(this, subtitleslayer_getPrototypeOf(SubtitlesLayer).call(this, options));
	    _this.options.resourceType = "subtitles";
	    return _this;
	  }

	  return SubtitlesLayer;
	}(textlayer);

	/* harmony default export */ var subtitleslayer = (SubtitlesLayer);
	// CONCATENATED MODULE: ./src/layer/fetchlayer.js
	function fetchlayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { fetchlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { fetchlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return fetchlayer_typeof(obj); }

	function fetchlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function fetchlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function fetchlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetchlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetchlayer_defineProperties(Constructor, staticProps); return Constructor; }

	function fetchlayer_possibleConstructorReturn(self, call) { if (call && (fetchlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return fetchlayer_assertThisInitialized(self); }

	function fetchlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function fetchlayer_getPrototypeOf(o) { fetchlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fetchlayer_getPrototypeOf(o); }

	function fetchlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) fetchlayer_setPrototypeOf(subClass, superClass); }

	function fetchlayer_setPrototypeOf(o, p) { fetchlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fetchlayer_setPrototypeOf(o, p); }




	var fetchlayer_FetchLayer =
	/*#__PURE__*/
	function (_Layer) {
	  fetchlayer_inherits(FetchLayer, _Layer);

	  /**
	   * @class FetchLayer
	   * @classdesc Creates an image layer using a remote URL.
	   * @param {Object|string} options - layer parameters or a url
	   * @param {string} options.url the url of the image to fetch
	   */
	  function FetchLayer(options) {
	    var _this;

	    fetchlayer_classCallCheck(this, FetchLayer);

	    _this = fetchlayer_possibleConstructorReturn(this, fetchlayer_getPrototypeOf(FetchLayer).call(this, options));

	    if (isString_root_isString_default()(options)) {
	      _this.options.url = options;
	    } else if (options != null ? options.url : void 0) {
	      _this.options.url = options.url;
	    }

	    return _this;
	  }

	  fetchlayer_createClass(FetchLayer, [{
	    key: "url",
	    value: function url(_url) {
	      this.options.url = _url;
	      return this;
	    }
	    /**
	     * generate the string representation of the layer
	     * @function FetchLayer#toString
	     * @return {String}
	     */

	  }, {
	    key: "toString",
	    value: function toString() {
	      return "fetch:".concat(base64EncodeURL(this.options.url));
	    }
	  }]);

	  return FetchLayer;
	}(layer_layer);

	/* harmony default export */ var fetchlayer = (fetchlayer_FetchLayer);
	// CONCATENATED MODULE: ./src/parameters.js
	function parameters_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { parameters_typeof = function _typeof(obj) { return typeof obj; }; } else { parameters_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return parameters_typeof(obj); }

	function parameters_possibleConstructorReturn(self, call) { if (call && (parameters_typeof(call) === "object" || typeof call === "function")) { return call; } return parameters_assertThisInitialized(self); }

	function parameters_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

	function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = parameters_getPrototypeOf(object); if (object === null) break; } return object; }

	function parameters_getPrototypeOf(o) { parameters_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return parameters_getPrototypeOf(o); }

	function parameters_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) parameters_setPrototypeOf(subClass, superClass); }

	function parameters_setPrototypeOf(o, p) { parameters_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return parameters_setPrototypeOf(o, p); }

	function parameters_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function parameters_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function parameters_createClass(Constructor, protoProps, staticProps) { if (protoProps) parameters_defineProperties(Constructor.prototype, protoProps); if (staticProps) parameters_defineProperties(Constructor, staticProps); return Constructor; }








	/**
	 * Transformation parameters
	 * Depends on 'util', 'transformation'
	 */

	var parameters_Param =
	/*#__PURE__*/
	function () {
	  /**
	   * Represents a single parameter.
	   * @class Param
	   * @param {string} name - The name of the parameter in snake_case
	   * @param {string} shortName - The name of the serialized form of the parameter.
	   *                         If a value is not provided, the parameter will not be serialized.
	   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
	   * @ignore
	   */
	  function Param(name, shortName) {
	    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

	    parameters_classCallCheck(this, Param);

	    /**
	     * The name of the parameter in snake_case
	     * @member {string} Param#name
	     */
	    this.name = name;
	    /**
	     * The name of the serialized form of the parameter
	     * @member {string} Param#shortName
	     */

	    this.shortName = shortName;
	    /**
	     * Manipulate origValue when value is called
	     * @member {function} Param#process
	     */

	    this.process = process;
	  }
	  /**
	   * Set a (unprocessed) value for this parameter
	   * @function Param#set
	   * @param {*} origValue - the value of the parameter
	   * @return {Param} self for chaining
	   */


	  parameters_createClass(Param, [{
	    key: "set",
	    value: function set(origValue) {
	      this.origValue = origValue;
	      return this;
	    }
	    /**
	     * Generate the serialized form of the parameter
	     * @function Param#serialize
	     * @return {string} the serialized form of the parameter
	     */

	  }, {
	    key: "serialize",
	    value: function serialize() {
	      var val, valid;
	      val = this.value();
	      valid = isArray_root_isArray_default()(val) || isPlainObject_root_isPlainObject_default()(val) || isString_root_isString_default()(val) ? !isEmpty(val) : val != null;

	      if (this.shortName != null && valid) {
	        return "".concat(this.shortName, "_").concat(val);
	      } else {
	        return '';
	      }
	    }
	    /**
	     * Return the processed value of the parameter
	     * @function Param#value
	     */

	  }, {
	    key: "value",
	    value: function value() {
	      return this.process(this.origValue);
	    }
	  }, {
	    key: "build_array",
	    value: function build_array(arg) {
	      if (arg == null) {
	        return [];
	      } else if (isArray_root_isArray_default()(arg)) {
	        return arg;
	      } else {
	        return [arg];
	      }
	    }
	    /**
	    * Covert value to video codec string.
	    *
	    * If the parameter is an object,
	    * @param {(string|Object)} param - the video codec as either a String or a Hash
	    * @return {string} the video codec string in the format codec:profile:level
	    * @example
	    * vc_[ :profile : [level]]
	    * or
	      { codec: 'h264', profile: 'basic', level: '3.1' }
	    * @ignore
	     */

	  }], [{
	    key: "norm_color",
	    value: function norm_color(value) {
	      return value != null ? value.replace(/^#/, 'rgb:') : void 0;
	    }
	  }, {
	    key: "process_video_params",
	    value: function process_video_params(param) {
	      var video;

	      switch (param.constructor) {
	        case Object:
	          video = "";

	          if ('codec' in param) {
	            video = param['codec'];

	            if ('profile' in param) {
	              video += ":" + param['profile'];

	              if ('level' in param) {
	                video += ":" + param['level'];
	              }
	            }
	          }

	          return video;

	        case String:
	          return param;

	        default:
	          return null;
	      }
	    }
	  }]);

	  return Param;
	}();

	var parameters_ArrayParam =
	/*#__PURE__*/
	function (_Param) {
	  parameters_inherits(ArrayParam, _Param);

	  /**
	   * A parameter that represents an array.
	   * @param {string} name - The name of the parameter in snake_case.
	   * @param {string} shortName - The name of the serialized form of the parameter
	   *                         If a value is not provided, the parameter will not be serialized.
	   * @param {string} [sep='.'] - The separator to use when joining the array elements together
	   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
	   * @class ArrayParam
	   * @extends Param
	   * @ignore
	   */
	  function ArrayParam(name, shortName) {
	    var _this;

	    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
	    var process = arguments.length > 3 ? arguments[3] : undefined;

	    parameters_classCallCheck(this, ArrayParam);

	    _this = parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(ArrayParam).call(this, name, shortName, process));
	    _this.sep = sep;
	    return _this;
	  }

	  parameters_createClass(ArrayParam, [{
	    key: "serialize",
	    value: function serialize() {
	      if (this.shortName != null) {
	        var arrayValue = this.value();

	        if (isEmpty(arrayValue)) {
	          return '';
	        } else if (isString_root_isString_default()(arrayValue)) {
	          return "".concat(this.shortName, "_").concat(arrayValue);
	        } else {
	          var flat = arrayValue.map(function (t) {
	            return isFunction_root_isFunction_(t.serialize) ? t.serialize() : t;
	          }).join(this.sep);
	          return "".concat(this.shortName, "_").concat(flat);
	        }
	      } else {
	        return '';
	      }
	    }
	  }, {
	    key: "value",
	    value: function value() {
	      var _this2 = this;

	      if (isArray_root_isArray_default()(this.origValue)) {
	        return this.origValue.map(function (v) {
	          return _this2.process(v);
	        });
	      } else {
	        return this.process(this.origValue);
	      }
	    }
	  }, {
	    key: "set",
	    value: function set(origValue) {
	      if (origValue == null || isArray_root_isArray_default()(origValue)) {
	        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, origValue);
	      } else {
	        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, [origValue]);
	      }
	    }
	  }]);

	  return ArrayParam;
	}(parameters_Param);

	var parameters_TransformationParam =
	/*#__PURE__*/
	function (_Param2) {
	  parameters_inherits(TransformationParam, _Param2);

	  /**
	   * A parameter that represents a transformation
	   * @param {string} name - The name of the parameter in snake_case
	   * @param {string} [shortName='t'] - The name of the serialized form of the parameter
	   * @param {string} [sep='.'] - The separator to use when joining the array elements together
	   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
	   * @class TransformationParam
	   * @extends Param
	   * @ignore
	   */
	  function TransformationParam(name) {
	    var _this3;

	    var shortName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "t";
	    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
	    var process = arguments.length > 3 ? arguments[3] : undefined;

	    parameters_classCallCheck(this, TransformationParam);

	    _this3 = parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(TransformationParam).call(this, name, shortName, process));
	    _this3.sep = sep;
	    return _this3;
	  }

	  parameters_createClass(TransformationParam, [{
	    key: "serialize",
	    value: function serialize() {
	      var _this4 = this;

	      if (isEmpty(this.value())) {
	        return '';
	      } else if (baseutil_allStrings(this.value())) {
	        var joined = this.value().join(this.sep);

	        if (!isEmpty(joined)) {
	          return "".concat(this.shortName, "_").concat(joined);
	        } else {
	          return '';
	        }
	      } else {
	        return this.value().map(function (t) {
	          if (isString_root_isString_default()(t) && !isEmpty(t)) {
	            return "".concat(_this4.shortName, "_").concat(t);
	          } else if (isFunction_root_isFunction_(t.serialize)) {
	            return t.serialize();
	          } else if (isPlainObject_root_isPlainObject_default()(t) && !isEmpty(t)) {
	            return new src_transformation(t).serialize();
	          } else {
	            return undefined;
	          }
	        }).filter(function (t) {
	          return t;
	        });
	      }
	    }
	  }, {
	    key: "set",
	    value: function set(origValue1) {
	      this.origValue = origValue1;

	      if (isArray_root_isArray_default()(this.origValue)) {
	        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, this.origValue);
	      } else {
	        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, [this.origValue]);
	      }
	    }
	  }]);

	  return TransformationParam;
	}(parameters_Param);

	var RangeParam =
	/*#__PURE__*/
	function (_Param3) {
	  parameters_inherits(RangeParam, _Param3);

	  /**
	   * A parameter that represents a range.
	   * @param {string} name - The name of the parameter in snake_case
	   * @param {string} shortName - The name of the serialized form of the parameter
	   *                         If a value is not provided, the parameter will not be serialized.
	   * @param {function} [process=norm_range_value ] - Manipulate origValue when value is called
	   * @class RangeParam
	   * @extends Param
	   * @ignore
	   */
	  function RangeParam(name, shortName, process) {
	    var _this5;

	    parameters_classCallCheck(this, RangeParam);

	    _this5 = parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(RangeParam).call(this, name, shortName, process));
	    _this5.process || (_this5.process = _this5.norm_range_value);
	    return _this5;
	  }

	  parameters_createClass(RangeParam, null, [{
	    key: "norm_range_value",
	    value: function norm_range_value(value) {
	      var modifier, offset;
	      offset = String(value).match(new RegExp('^' + offset_any_pattern + '$'));

	      if (offset) {
	        modifier = offset[5] != null ? 'p' : '';
	        value = (offset[1] || offset[4]) + modifier;
	      }

	      return value;
	    }
	  }]);

	  return RangeParam;
	}(parameters_Param);

	var parameters_RawParam =
	/*#__PURE__*/
	function (_Param4) {
	  parameters_inherits(RawParam, _Param4);

	  function RawParam(name, shortName) {
	    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

	    parameters_classCallCheck(this, RawParam);

	    return parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(RawParam).call(this, name, shortName, process));
	  }

	  parameters_createClass(RawParam, [{
	    key: "serialize",
	    value: function serialize() {
	      return this.value();
	    }
	  }]);

	  return RawParam;
	}(parameters_Param);

	var LAYER_KEYWORD_PARAMS = [["font_weight", "normal"], ["font_style", "normal"], ["text_decoration", "none"], ["text_align", null], ["stroke", "none"], ["letter_spacing", null], ["line_spacing", null], ["font_antialias", null], ["font_hinting", null]];

	var parameters_LayerParam =
	/*#__PURE__*/
	function (_Param5) {
	  parameters_inherits(LayerParam, _Param5);

	  function LayerParam() {
	    parameters_classCallCheck(this, LayerParam);

	    return parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(LayerParam).apply(this, arguments));
	  }

	  parameters_createClass(LayerParam, [{
	    key: "value",
	    // Parse layer options
	    // @return [string] layer transformation string
	    // @private
	    value: function value() {
	      if (this.origValue == null) {
	        return '';
	      }

	      var result;

	      if (this.origValue instanceof layer_layer) {
	        result = this.origValue;
	      } else if (isPlainObject_root_isPlainObject_default()(this.origValue)) {
	        var layerOptions = withCamelCaseKeys(this.origValue);

	        if (layerOptions.resourceType === "text" || layerOptions.text != null) {
	          result = new textlayer(layerOptions);
	        } else if (layerOptions.resourceType === "subtitles") {
	          result = new subtitleslayer(layerOptions);
	        } else if (layerOptions.resourceType === "fetch" || layerOptions.url != null) {
	          result = new fetchlayer(layerOptions);
	        } else {
	          result = new layer_layer(layerOptions);
	        }
	      } else if (isString_root_isString_default()(this.origValue)) {
	        if (/^fetch:.+/.test(this.origValue)) {
	          result = new fetchlayer(this.origValue.substr(6));
	        } else {
	          result = this.origValue;
	        }
	      } else {
	        result = '';
	      }

	      return result.toString();
	    }
	  }, {
	    key: "textStyle",
	    value: function textStyle(layer) {
	      return new textlayer(layer).textStyleIdentifier();
	    }
	  }]);

	  return LayerParam;
	}(parameters_Param);

	var parameters_ExpressionParam =
	/*#__PURE__*/
	function (_Param6) {
	  parameters_inherits(ExpressionParam, _Param6);

	  function ExpressionParam() {
	    parameters_classCallCheck(this, ExpressionParam);

	    return parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(ExpressionParam).apply(this, arguments));
	  }

	  parameters_createClass(ExpressionParam, [{
	    key: "serialize",
	    value: function serialize() {
	      return expression.normalize(_get(parameters_getPrototypeOf(ExpressionParam.prototype), "serialize", this).call(this));
	    }
	  }]);

	  return ExpressionParam;
	}(parameters_Param);


	// CONCATENATED MODULE: ./src/transformation.js
	function transformation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { transformation_typeof = function _typeof(obj) { return typeof obj; }; } else { transformation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return transformation_typeof(obj); }

	function transformation_possibleConstructorReturn(self, call) { if (call && (transformation_typeof(call) === "object" || typeof call === "function")) { return call; } return transformation_assertThisInitialized(self); }

	function transformation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function transformation_getPrototypeOf(o) { transformation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return transformation_getPrototypeOf(o); }

	function transformation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) transformation_setPrototypeOf(subClass, superClass); }

	function transformation_setPrototypeOf(o, p) { transformation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return transformation_setPrototypeOf(o, p); }

	function transformation_slicedToArray(arr, i) { return transformation_arrayWithHoles(arr) || transformation_iterableToArrayLimit(arr, i) || transformation_nonIterableRest(); }

	function transformation_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

	function transformation_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function transformation_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function transformation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function transformation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function transformation_createClass(Constructor, protoProps, staticProps) { if (protoProps) transformation_defineProperties(Constructor.prototype, protoProps); if (staticProps) transformation_defineProperties(Constructor, staticProps); return Constructor; }






	/**
	 * Assign key, value to target, when value is not null.<br>
	 *   This function mutates the target!
	 * @param {object} target the object to assign the values to
	 * @param {object} sources one or more objects to get values from
	 * @returns {object} the target after the assignment
	 */

	function assignNotNull(target) {
	  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    sources[_key - 1] = arguments[_key];
	  }

	  sources.forEach(function (source) {
	    Object.keys(source).forEach(function (key) {
	      if (source[key] != null) {
	        target[key] = source[key];
	      }
	    });
	  });
	  return target;
	}
	/**
	 * TransformationBase
	 * Depends on 'configuration', 'parameters','util'
	 * @internal
	 */


	var transformation_TransformationBase =
	/*#__PURE__*/
	function () {
	  /**
	   * The base class for transformations.
	   * Members of this class are documented as belonging to the {@link Transformation} class for convenience.
	   * @class TransformationBase
	   */
	  function TransformationBase(options) {
	    transformation_classCallCheck(this, TransformationBase);

	    /** @private */

	    /** @private */
	    var parent, trans;
	    parent = void 0;
	    trans = {};
	    /**
	     * Return an options object that can be used to create an identical Transformation
	     * @function Transformation#toOptions
	     * @return {Object} Returns a plain object representing this transformation
	     */

	    this.toOptions = function (withChain) {
	      var opt = {};

	      if (withChain == null) {
	        withChain = true;
	      }

	      Object.keys(trans).forEach(function (key) {
	        return opt[key] = trans[key].origValue;
	      });
	      assignNotNull(opt, this.otherOptions);

	      if (withChain && !isEmpty(this.chained)) {
	        var list = this.chained.map(function (tr) {
	          return tr.toOptions();
	        });
	        list.push(opt);
	        opt = {};
	        assignNotNull(opt, this.otherOptions);
	        opt.transformation = list;
	      }

	      return opt;
	    };
	    /**
	     * Set a parent for this object for chaining purposes.
	     *
	     * @function Transformation#setParent
	     * @param {Object} object - the parent to be assigned to
	     * @returns {Transformation} Returns this instance for chaining purposes.
	     */


	    this.setParent = function (object) {
	      parent = object;

	      if (object != null) {
	        this.fromOptions(typeof object.toOptions === "function" ? object.toOptions() : void 0);
	      }

	      return this;
	    };
	    /**
	     * Returns the parent of this object in the chain
	     * @function Transformation#getParent
	     * @protected
	     * @return {Object} Returns the parent of this object if there is any
	     */


	    this.getParent = function () {
	      return parent;
	    }; // Helper methods to create parameter methods
	    // These methods are defined here because they access `trans` which is
	    // a private member of `TransformationBase`

	    /** @protected */


	    this.param = function (value, name, abbr, defaultValue, process) {
	      if (process == null) {
	        if (isFunction_root_isFunction_(defaultValue)) {
	          process = defaultValue;
	        } else {
	          process = identity_root_identity_default.a;
	        }
	      }

	      trans[name] = new parameters_Param(name, abbr, process).set(value);
	      return this;
	    };
	    /** @protected */


	    this.rawParam = function (value, name, abbr, defaultValue) {
	      var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : identity_root_identity_default.a;
	      process = lastArgCallback(arguments);
	      trans[name] = new parameters_RawParam(name, abbr, process).set(value);
	      return this;
	    };
	    /** @protected */


	    this.rangeParam = function (value, name, abbr, defaultValue) {
	      var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : identity_root_identity_default.a;
	      process = lastArgCallback(arguments);
	      trans[name] = new RangeParam(name, abbr, process).set(value);
	      return this;
	    };
	    /** @protected */


	    this.arrayParam = function (value, name, abbr) {
	      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":";
	      var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : identity_root_identity_default.a;
	      process = lastArgCallback(arguments);
	      trans[name] = new parameters_ArrayParam(name, abbr, sep, process).set(value);
	      return this;
	    };
	    /** @protected */


	    this.transformationParam = function (value, name, abbr) {
	      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".";
	      var defaultValue = arguments.length > 4 ? arguments[4] : undefined;
	      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : identity_root_identity_default.a;
	      process = lastArgCallback(arguments);
	      trans[name] = new parameters_TransformationParam(name, abbr, sep, process).set(value);
	      return this;
	    };

	    this.layerParam = function (value, name, abbr) {
	      trans[name] = new parameters_LayerParam(name, abbr).set(value);
	      return this;
	    }; // End Helper methods

	    /**
	     * Get the value associated with the given name.
	     * @function Transformation#getValue
	     * @param {string} name - the name of the parameter
	     * @return {*} the processed value associated with the given name
	     * @description Use {@link get}.origValue for the value originally provided for the parameter
	     */


	    this.getValue = function (name) {
	      var value = trans[name] && trans[name].value();
	      return value != null ? value : this.otherOptions[name];
	    };
	    /**
	     * Get the parameter object for the given parameter name
	     * @function Transformation#get
	     * @param {string} name the name of the transformation parameter
	     * @returns {Param} the param object for the given name, or undefined
	     */


	    this.get = function (name) {
	      return trans[name];
	    };
	    /**
	     * Remove a transformation option from the transformation.
	     * @function Transformation#remove
	     * @param {string} name - the name of the option to remove
	     * @return {*} Returns the option that was removed or null if no option by that name was found. The type of the
	     *              returned value depends on the value.
	     */


	    this.remove = function (name) {
	      var temp;

	      switch (false) {
	        case trans[name] == null:
	          temp = trans[name];
	          delete trans[name];
	          return temp.origValue;

	        case this.otherOptions[name] == null:
	          temp = this.otherOptions[name];
	          delete this.otherOptions[name];
	          return temp;

	        default:
	          return null;
	      }
	    };
	    /**
	     * Return an array of all the keys (option names) in the transformation.
	     * @return {Array<string>} the keys in snakeCase format
	     */


	    this.keys = function () {
	      var key;
	      return function () {
	        var results;
	        results = [];

	        for (key in trans) {
	          if (key != null) {
	            results.push(key.match(VAR_NAME_RE) ? key : snakeCase(key));
	          }
	        }

	        return results;
	      }().sort();
	    };
	    /**
	     * Returns a plain object representation of the transformation. Values are processed.
	     * @function Transformation#toPlainObject
	     * @return {Object} the transformation options as plain object
	     */


	    this.toPlainObject = function () {
	      var hash, key, list;
	      hash = {};

	      for (key in trans) {
	        hash[key] = trans[key].value();

	        if (isPlainObject_root_isPlainObject_default()(hash[key])) {
	          hash[key] = cloneDeep_root_cloneDeep_default()(hash[key]);
	        }
	      }

	      if (!isEmpty(this.chained)) {
	        list = this.chained.map(function (tr) {
	          return tr.toPlainObject();
	        });
	        list.push(hash);
	        hash = {
	          transformation: list
	        };
	      }

	      return hash;
	    };
	    /**
	     * Complete the current transformation and chain to a new one.
	     * In the URL, transformations are chained together by slashes.
	     * @function Transformation#chain
	     * @return {Transformation} Returns this transformation for chaining
	     * @example
	     * var tr = cloudinary.Transformation.new();
	     * tr.width(10).crop('fit').chain().angle(15).serialize()
	     * // produces "c_fit,w_10/a_15"
	     */


	    this.chain = function () {
	      var names, tr;
	      names = Object.getOwnPropertyNames(trans);

	      if (names.length !== 0) {
	        tr = new this.constructor(this.toOptions(false));
	        this.resetTransformations();
	        this.chained.push(tr);
	      }

	      return this;
	    };

	    this.resetTransformations = function () {
	      trans = {};
	      return this;
	    };

	    this.otherOptions = {};
	    this.chained = [];
	    this.fromOptions(options);
	  }
	  /**
	   * Merge the provided options with own's options
	   * @param {Object} [options={}] key-value list of options
	   * @returns {Transformation} Returns this instance for chaining
	   */


	  transformation_createClass(TransformationBase, [{
	    key: "fromOptions",
	    value: function fromOptions(options) {
	      if (options instanceof TransformationBase) {
	        this.fromTransformation(options);
	      } else {
	        options || (options = {});

	        if (isString_root_isString_default()(options) || isArray_root_isArray_default()(options)) {
	          options = {
	            transformation: options
	          };
	        }

	        options = cloneDeep_root_cloneDeep_default()(options, function (value) {
	          if (value instanceof TransformationBase || value instanceof Layer) {
	            return new value.clone();
	          }
	        }); // Handling of "if" statements precedes other options as it creates a chained transformation

	        if (options["if"]) {
	          this.set("if", options["if"]);
	          delete options["if"];
	        }

	        for (var key in options) {
	          var opt = options[key];

	          if (opt != null) {
	            if (key.match(VAR_NAME_RE)) {
	              if (key !== '$attr') {
	                this.set('variable', key, opt);
	              }
	            } else {
	              this.set(key, opt);
	            }
	          }
	        }
	      }

	      return this;
	    }
	  }, {
	    key: "fromTransformation",
	    value: function fromTransformation(other) {
	      var _this = this;

	      if (other instanceof TransformationBase) {
	        other.keys().forEach(function (key) {
	          return _this.set(key, other.get(key).origValue);
	        });
	      }

	      return this;
	    }
	    /**
	     * Set a parameter.
	     * The parameter name `key` is converted to
	     * @param {string} key - the name of the parameter
	     * @param {*} values - the value of the parameter
	     * @returns {Transformation} Returns this instance for chaining
	     */

	  }, {
	    key: "set",
	    value: function set(key) {
	      var camelKey;
	      camelKey = camelCase(key);

	      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        values[_key2 - 1] = arguments[_key2];
	      }

	      if (includes_root_includes_default()(transformation_Transformation.methods, camelKey)) {
	        this[camelKey].apply(this, values);
	      } else {
	        this.otherOptions[key] = values[0];
	      }

	      return this;
	    }
	  }, {
	    key: "hasLayer",
	    value: function hasLayer() {
	      return this.getValue("overlay") || this.getValue("underlay");
	    }
	    /**
	     * Generate a string representation of the transformation.
	     * @function Transformation#serialize
	     * @return {string} Returns the transformation as a string
	     */

	  }, {
	    key: "serialize",
	    value: function serialize() {
	      var ifParam, j, len, paramList, ref, ref1, ref2, ref3, ref4, resultArray, t, transformationList, transformationString, transformations, value, variables, vars;
	      resultArray = this.chained.map(function (tr) {
	        return tr.serialize();
	      });
	      paramList = this.keys();
	      transformations = (ref = this.get("transformation")) != null ? ref.serialize() : void 0;
	      ifParam = (ref1 = this.get("if")) != null ? ref1.serialize() : void 0;
	      variables = processVar((ref2 = this.get("variables")) != null ? ref2.value() : void 0);
	      paramList = difference_root_difference_default()(paramList, ["transformation", "if", "variables"]);
	      vars = [];
	      transformationList = [];

	      for (j = 0, len = paramList.length; j < len; j++) {
	        t = paramList[j];

	        if (t.match(VAR_NAME_RE)) {
	          vars.push(t + "_" + expression.normalize((ref3 = this.get(t)) != null ? ref3.value() : void 0));
	        } else {
	          transformationList.push((ref4 = this.get(t)) != null ? ref4.serialize() : void 0);
	        }
	      }

	      switch (false) {
	        case !isString_root_isString_default()(transformations):
	          transformationList.push(transformations);
	          break;

	        case !isArray_root_isArray_default()(transformations):
	          resultArray = resultArray.concat(transformations);
	      }

	      transformationList = function () {
	        var k, len1, results;
	        results = [];

	        for (k = 0, len1 = transformationList.length; k < len1; k++) {
	          value = transformationList[k];

	          if (isArray_root_isArray_default()(value) && !isEmpty(value) || !isArray_root_isArray_default()(value) && value) {
	            results.push(value);
	          }
	        }

	        return results;
	      }();

	      transformationList = vars.sort().concat(variables).concat(transformationList.sort());

	      if (ifParam === "if_end") {
	        transformationList.push(ifParam);
	      } else if (!isEmpty(ifParam)) {
	        transformationList.unshift(ifParam);
	      }

	      transformationString = compact_root_compact_default()(transformationList).join(this.param_separator);

	      if (!isEmpty(transformationString)) {
	        resultArray.push(transformationString);
	      }

	      return compact_root_compact_default()(resultArray).join(this.trans_separator);
	    }
	    /**
	     * Provide a list of all the valid transformation option names
	     * @function Transformation#listNames
	     * @private
	     * @return {Array<string>} a array of all the valid option names
	     */

	  }, {
	    key: "listNames",
	    value: function listNames() {
	      return transformation_Transformation.methods;
	    }
	    /**
	     * Returns the attributes for an HTML tag.
	     * @function Cloudinary.toHtmlAttributes
	     * @return PlainObject
	     */

	  }, {
	    key: "toHtmlAttributes",
	    value: function toHtmlAttributes() {
	      var _this2 = this;

	      var attrName, height, key, options, ref2, ref3, value, width;
	      options = {};

	      for (key in this.otherOptions) {
	        value = this.otherOptions[key];

	        if (includes_root_includes_default()(transformation_Transformation.PARAM_NAMES, snakeCase(key))) {
	          continue;
	        }

	        attrName = /^html_/.test(key) ? key.slice(5) : key;
	        options[attrName] = value;
	      } // convert all "html_key" to "key" with the same value


	      this.keys().forEach(function (key) {
	        if (/^html_/.test(key)) {
	          options[camelCase(key.slice(5))] = _this2.getValue(key);
	        }
	      });

	      if (!(this.hasLayer() || this.getValue("angle") || includes_root_includes_default()(["fit", "limit", "lfill"], this.getValue("crop")))) {
	        width = (ref2 = this.get("width")) != null ? ref2.origValue : void 0;
	        height = (ref3 = this.get("height")) != null ? ref3.origValue : void 0;

	        if (parseFloat(width) >= 1.0) {
	          if (options['width'] == null) {
	            options['width'] = width;
	          }
	        }

	        if (parseFloat(height) >= 1.0) {
	          if (options['height'] == null) {
	            options['height'] = height;
	          }
	        }
	      }

	      return options;
	    }
	  }, {
	    key: "isValidParamName",
	    value: function isValidParamName(name) {
	      return transformation_Transformation.methods.indexOf(camelCase(name)) >= 0;
	    }
	    /**
	     * Delegate to the parent (up the call chain) to produce HTML
	     * @function Transformation#toHtml
	     * @return {string} HTML representation of the parent if possible.
	     * @example
	     * tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo"})
	     * // ImageTag {name: "img", publicId: "sample"}
	     * tag.toHtml()
	     * // <img src="http://res.cloudinary.com/demo/image/upload/sample">
	     * tag.transformation().crop("fit").width(300).toHtml()
	     * // <img src="http://res.cloudinary.com/demo/image/upload/c_fit,w_300/sample">
	     */

	  }, {
	    key: "toHtml",
	    value: function toHtml() {
	      var ref;
	      return (ref = this.getParent()) != null ? typeof ref.toHtml === "function" ? ref.toHtml() : void 0 : void 0;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.serialize();
	    }
	  }, {
	    key: "clone",
	    value: function clone() {
	      return new this.constructor(this.toOptions(true));
	    }
	  }]);

	  return TransformationBase;
	}();

	;
	var VAR_NAME_RE = /^\$[a-zA-Z0-9]+$/;
	transformation_TransformationBase.prototype.trans_separator = '/';
	transformation_TransformationBase.prototype.param_separator = ',';

	function lastArgCallback(args) {
	  var callback;
	  callback = args != null ? args[args.length - 1] : void 0;

	  if (isFunction_root_isFunction_(callback)) {
	    return callback;
	  } else {
	    return void 0;
	  }
	}

	function processVar(varArray) {
	  var j, len, name, results, v;

	  if (isArray_root_isArray_default()(varArray)) {
	    results = [];

	    for (j = 0, len = varArray.length; j < len; j++) {
	      var _varArray$j = transformation_slicedToArray(varArray[j], 2);

	      name = _varArray$j[0];
	      v = _varArray$j[1];
	      results.push("".concat(name, "_").concat(expression.normalize(v)));
	    }

	    return results;
	  } else {
	    return varArray;
	  }
	}

	function processCustomFunction(value) {
	  if (value.function_type === "remote") {
	    return [value.function_type, btoa(value.source)].join(":");
	  } else if (value.function_type === "wasm") {
	    return [value.function_type, value.source].join(":");
	  }
	}
	/**
	 * Transformation Class methods.
	 * This is a list of the parameters defined in Transformation.
	 * Values are camelCased.
	 * @const Transformation.methods
	 * @private
	 * @ignore
	 * @type {Array<string>}
	 */

	/**
	 * Parameters that are filtered out before passing the options to an HTML tag.
	 *
	 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
	 * @const {Array<string>} Transformation.PARAM_NAMES
	 * @private
	 * @ignore
	 * @see toHtmlAttributes
	 */


	var transformation_Transformation =
	/*#__PURE__*/
	function (_TransformationBase) {
	  transformation_inherits(Transformation, _TransformationBase);

	  /**
	   * Represents a single transformation.
	   * @class Transformation
	   * @example
	   * t = new cloudinary.Transformation();
	   * t.angle(20).crop("scale").width("auto");
	   *
	   * // or
	   *
	   * t = new cloudinary.Transformation( {angle: 20, crop: "scale", width: "auto"});
	   * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" 
	   *  target="_blank">Available image transformations</a>
	   * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" 
	   *  target="_blank">Available video transformations</a>
	   */
	  function Transformation(options) {
	    transformation_classCallCheck(this, Transformation);

	    return transformation_possibleConstructorReturn(this, transformation_getPrototypeOf(Transformation).call(this, options));
	  }
	  /**
	   * Convenience constructor
	   * @param {Object} options
	   * @return {Transformation}
	   * @example cl = cloudinary.Transformation.new( {angle: 20, crop: "scale", width: "auto"})
	   */


	  transformation_createClass(Transformation, [{
	    key: "angle",

	    /*
	      Transformation Parameters
	    */
	    value: function angle(value) {
	      return this.arrayParam(value, "angle", "a", ".", expression.normalize);
	    }
	  }, {
	    key: "audioCodec",
	    value: function audioCodec(value) {
	      return this.param(value, "audio_codec", "ac");
	    }
	  }, {
	    key: "audioFrequency",
	    value: function audioFrequency(value) {
	      return this.param(value, "audio_frequency", "af");
	    }
	  }, {
	    key: "aspectRatio",
	    value: function aspectRatio(value) {
	      return this.param(value, "aspect_ratio", "ar", expression.normalize);
	    }
	  }, {
	    key: "background",
	    value: function background(value) {
	      return this.param(value, "background", "b", parameters_Param.norm_color);
	    }
	  }, {
	    key: "bitRate",
	    value: function bitRate(value) {
	      return this.param(value, "bit_rate", "br");
	    }
	  }, {
	    key: "border",
	    value: function border(value) {
	      return this.param(value, "border", "bo", function (border) {
	        if (isPlainObject_root_isPlainObject_default()(border)) {
	          border = assign_root_assign_default()({}, {
	            color: "black",
	            width: 2
	          }, border);
	          return "".concat(border.width, "px_solid_").concat(parameters_Param.norm_color(border.color));
	        } else {
	          return border;
	        }
	      });
	    }
	  }, {
	    key: "color",
	    value: function color(value) {
	      return this.param(value, "color", "co", parameters_Param.norm_color);
	    }
	  }, {
	    key: "colorSpace",
	    value: function colorSpace(value) {
	      return this.param(value, "color_space", "cs");
	    }
	  }, {
	    key: "crop",
	    value: function crop(value) {
	      return this.param(value, "crop", "c");
	    }
	  }, {
	    key: "customFunction",
	    value: function customFunction(value) {
	      return this.param(value, "custom_function", "fn", function () {
	        return processCustomFunction(value);
	      });
	    }
	  }, {
	    key: "customPreFunction",
	    value: function customPreFunction(value) {
	      if (this.get('custom_function')) {
	        return;
	      }

	      return this.rawParam(value, "custom_function", "", function () {
	        value = processCustomFunction(value);
	        return value ? "fn_pre:".concat(value) : value;
	      });
	    }
	  }, {
	    key: "defaultImage",
	    value: function defaultImage(value) {
	      return this.param(value, "default_image", "d");
	    }
	  }, {
	    key: "delay",
	    value: function delay(value) {
	      return this.param(value, "delay", "dl");
	    }
	  }, {
	    key: "density",
	    value: function density(value) {
	      return this.param(value, "density", "dn");
	    }
	  }, {
	    key: "duration",
	    value: function duration(value) {
	      return this.rangeParam(value, "duration", "du");
	    }
	  }, {
	    key: "dpr",
	    value: function dpr(value) {
	      return this.param(value, "dpr", "dpr", function (dpr) {
	        dpr = dpr.toString();

	        if (dpr != null ? dpr.match(/^\d+$/) : void 0) {
	          return dpr + ".0";
	        } else {
	          return expression.normalize(dpr);
	        }
	      });
	    }
	  }, {
	    key: "effect",
	    value: function effect(value) {
	      return this.arrayParam(value, "effect", "e", ":", expression.normalize);
	    }
	  }, {
	    key: "else",
	    value: function _else() {
	      return this["if"]('else');
	    }
	  }, {
	    key: "endIf",
	    value: function endIf() {
	      return this["if"]('end');
	    }
	  }, {
	    key: "endOffset",
	    value: function endOffset(value) {
	      return this.rangeParam(value, "end_offset", "eo");
	    }
	  }, {
	    key: "fallbackContent",
	    value: function fallbackContent(value) {
	      return this.param(value, "fallback_content");
	    }
	  }, {
	    key: "fetchFormat",
	    value: function fetchFormat(value) {
	      return this.param(value, "fetch_format", "f");
	    }
	  }, {
	    key: "format",
	    value: function format(value) {
	      return this.param(value, "format");
	    }
	  }, {
	    key: "flags",
	    value: function flags(value) {
	      return this.arrayParam(value, "flags", "fl", ".");
	    }
	  }, {
	    key: "gravity",
	    value: function gravity(value) {
	      return this.param(value, "gravity", "g");
	    }
	  }, {
	    key: "fps",
	    value: function fps(value) {
	      return this.param(value, "fps", "fps", function (fps) {
	        if (isString_root_isString_default()(fps)) {
	          return fps;
	        } else if (isArray_root_isArray_default()(fps)) {
	          return fps.join("-");
	        } else {
	          return fps;
	        }
	      });
	    }
	  }, {
	    key: "height",
	    value: function height(value) {
	      var _this3 = this;

	      return this.param(value, "height", "h", function () {
	        if (_this3.getValue("crop") || _this3.getValue("overlay") || _this3.getValue("underlay")) {
	          return expression.normalize(value);
	        } else {
	          return null;
	        }
	      });
	    }
	  }, {
	    key: "htmlHeight",
	    value: function htmlHeight(value) {
	      return this.param(value, "html_height");
	    }
	  }, {
	    key: "htmlWidth",
	    value: function htmlWidth(value) {
	      return this.param(value, "html_width");
	    }
	  }, {
	    key: "if",
	    value: function _if() {
	      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	      var i, ifVal, j, ref, trIf, trRest;

	      switch (value) {
	        case "else":
	          this.chain();
	          return this.param(value, "if", "if");

	        case "end":
	          this.chain();

	          for (i = j = ref = this.chained.length - 1; j >= 0; i = j += -1) {
	            ifVal = this.chained[i].getValue("if");

	            if (ifVal === "end") {
	              break;
	            } else if (ifVal != null) {
	              trIf = Transformation["new"]()["if"](ifVal);
	              this.chained[i].remove("if");
	              trRest = this.chained[i];
	              this.chained[i] = Transformation["new"]().transformation([trIf, trRest]);

	              if (ifVal !== "else") {
	                break;
	              }
	            }
	          }

	          return this.param(value, "if", "if");

	        case "":
	          return condition["new"]().setParent(this);

	        default:
	          return this.param(value, "if", "if", function (value) {
	            return condition["new"](value).toString();
	          });
	      }
	    }
	  }, {
	    key: "keyframeInterval",
	    value: function keyframeInterval(value) {
	      return this.param(value, "keyframe_interval", "ki");
	    }
	  }, {
	    key: "offset",
	    value: function offset(value) {
	      var end_o, start_o;

	      var _ref = isFunction_root_isFunction_(value != null ? value.split : void 0) ? value.split('..') : isArray_root_isArray_default()(value) ? value : [null, null];

	      var _ref2 = transformation_slicedToArray(_ref, 2);

	      start_o = _ref2[0];
	      end_o = _ref2[1];

	      if (start_o != null) {
	        this.startOffset(start_o);
	      }

	      if (end_o != null) {
	        return this.endOffset(end_o);
	      }
	    }
	  }, {
	    key: "opacity",
	    value: function opacity(value) {
	      return this.param(value, "opacity", "o", expression.normalize);
	    }
	  }, {
	    key: "overlay",
	    value: function overlay(value) {
	      return this.layerParam(value, "overlay", "l");
	    }
	  }, {
	    key: "page",
	    value: function page(value) {
	      return this.param(value, "page", "pg");
	    }
	  }, {
	    key: "poster",
	    value: function poster(value) {
	      return this.param(value, "poster");
	    }
	  }, {
	    key: "prefix",
	    value: function prefix(value) {
	      return this.param(value, "prefix", "p");
	    }
	  }, {
	    key: "quality",
	    value: function quality(value) {
	      return this.param(value, "quality", "q", expression.normalize);
	    }
	  }, {
	    key: "radius",
	    value: function radius(value) {
	      return this.arrayParam(value, "radius", "r", ":", expression.normalize);
	    }
	  }, {
	    key: "rawTransformation",
	    value: function rawTransformation(value) {
	      return this.rawParam(value, "raw_transformation");
	    }
	  }, {
	    key: "size",
	    value: function size(value) {
	      var height, width;

	      if (isFunction_root_isFunction_(value != null ? value.split : void 0)) {
	        var _value$split = value.split('x');

	        var _value$split2 = transformation_slicedToArray(_value$split, 2);

	        width = _value$split2[0];
	        height = _value$split2[1];
	        this.width(width);
	        return this.height(height);
	      }
	    }
	  }, {
	    key: "sourceTypes",
	    value: function sourceTypes(value) {
	      return this.param(value, "source_types");
	    }
	  }, {
	    key: "sourceTransformation",
	    value: function sourceTransformation(value) {
	      return this.param(value, "source_transformation");
	    }
	  }, {
	    key: "startOffset",
	    value: function startOffset(value) {
	      return this.rangeParam(value, "start_offset", "so");
	    }
	  }, {
	    key: "streamingProfile",
	    value: function streamingProfile(value) {
	      return this.param(value, "streaming_profile", "sp");
	    }
	  }, {
	    key: "transformation",
	    value: function transformation(value) {
	      return this.transformationParam(value, "transformation", "t");
	    }
	  }, {
	    key: "underlay",
	    value: function underlay(value) {
	      return this.layerParam(value, "underlay", "u");
	    }
	  }, {
	    key: "variable",
	    value: function variable(name, value) {
	      return this.param(value, name, name);
	    }
	  }, {
	    key: "variables",
	    value: function variables(values) {
	      return this.arrayParam(values, "variables");
	    }
	  }, {
	    key: "videoCodec",
	    value: function videoCodec(value) {
	      return this.param(value, "video_codec", "vc", parameters_Param.process_video_params);
	    }
	  }, {
	    key: "videoSampling",
	    value: function videoSampling(value) {
	      return this.param(value, "video_sampling", "vs");
	    }
	  }, {
	    key: "width",
	    value: function width(value) {
	      var _this4 = this;

	      return this.param(value, "width", "w", function () {
	        if (_this4.getValue("crop") || _this4.getValue("overlay") || _this4.getValue("underlay")) {
	          return expression.normalize(value);
	        } else {
	          return null;
	        }
	      });
	    }
	  }, {
	    key: "x",
	    value: function x(value) {
	      return this.param(value, "x", "x", expression.normalize);
	    }
	  }, {
	    key: "y",
	    value: function y(value) {
	      return this.param(value, "y", "y", expression.normalize);
	    }
	  }, {
	    key: "zoom",
	    value: function zoom(value) {
	      return this.param(value, "zoom", "z", expression.normalize);
	    }
	  }], [{
	    key: "new",
	    value: function _new(options) {
	      return new Transformation(options);
	    }
	  }]);

	  return Transformation;
	}(transformation_TransformationBase);
	/**
	 * Transformation Class methods.
	 * This is a list of the parameters defined in Transformation.
	 * Values are camelCased.
	 */


	transformation_Transformation.methods = ["angle", "audioCodec", "audioFrequency", "aspectRatio", "background", "bitRate", "border", "color", "colorSpace", "crop", "customFunction", "customPreFunction", "defaultImage", "delay", "density", "duration", "dpr", "effect", "else", "endIf", "endOffset", "fallbackContent", "fetchFormat", "format", "flags", "gravity", "fps", "height", "htmlHeight", "htmlWidth", "if", "keyframeInterval", "offset", "opacity", "overlay", "page", "poster", "prefix", "quality", "radius", "rawTransformation", "size", "sourceTypes", "sourceTransformation", "startOffset", "streamingProfile", "transformation", "underlay", "variable", "variables", "videoCodec", "videoSampling", "width", "x", "y", "zoom"];
	/**
	 * Parameters that are filtered out before passing the options to an HTML tag.
	 *
	 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
	 */

	transformation_Transformation.PARAM_NAMES = transformation_Transformation.methods.map(snakeCase).concat(src_configuration.CONFIG_PARAMS);
	/* harmony default export */ var src_transformation = (transformation_Transformation);
	// CONCATENATED MODULE: ./src/tags/htmltag.js
	function htmltag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function htmltag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function htmltag_createClass(Constructor, protoProps, staticProps) { if (protoProps) htmltag_defineProperties(Constructor.prototype, protoProps); if (staticProps) htmltag_defineProperties(Constructor, staticProps); return Constructor; }

	/**
	 * Generic HTML tag
	 * Depends on 'transformation', 'util'
	 */


	/**
	 * Represents an HTML (DOM) tag
	 * @constructor HtmlTag
	 * @param {string} name - the name of the tag
	 * @param {string} [publicId]
	 * @param {Object} options
	 * @example tag = new HtmlTag( 'div', { 'width': 10})
	 */

	var htmltag_HtmlTag =
	/*#__PURE__*/
	function () {
	  function HtmlTag(name, publicId, options) {
	    htmltag_classCallCheck(this, HtmlTag);

	    var transformation;
	    this.name = name;
	    this.publicId = publicId;

	    if (options == null) {
	      if (isPlainObject_root_isPlainObject_default()(publicId)) {
	        options = publicId;
	        this.publicId = void 0;
	      } else {
	        options = {};
	      }
	    }

	    transformation = new src_transformation(options);
	    transformation.setParent(this);

	    this.transformation = function () {
	      return transformation;
	    };
	  }
	  /**
	   * Convenience constructor
	   * Creates a new instance of an HTML (DOM) tag
	   * @function HtmlTag.new
	   * @param {string} name - the name of the tag
	   * @param {string} [publicId]
	   * @param {Object} options
	   * @return {HtmlTag}
	   * @example tag = HtmlTag.new( 'div', { 'width': 10})
	   */


	  htmltag_createClass(HtmlTag, [{
	    key: "htmlAttrs",

	    /**
	     * combine key and value from the `attr` to generate an HTML tag attributes string.
	     * `Transformation::toHtmlTagOptions` is used to filter out transformation and configuration keys.
	     * @protected
	     * @param {Object} attrs
	     * @return {string} the attributes in the format `'key1="value1" key2="value2"'`
	     * @ignore
	     */
	    value: function htmlAttrs(attrs) {
	      var key, pairs, value;
	      return pairs = function () {
	        var results;
	        results = [];

	        for (key in attrs) {
	          value = escapeQuotes(attrs[key]);

	          if (value) {
	            results.push(toAttribute(key, value));
	          }
	        }

	        return results;
	      }().sort().join(' ');
	    }
	    /**
	     * Get all options related to this tag.
	     * @function HtmlTag#getOptions
	     * @returns {Object} the options
	     *
	     */

	  }, {
	    key: "getOptions",
	    value: function getOptions() {
	      return this.transformation().toOptions();
	    }
	    /**
	     * Get the value of option `name`
	     * @function HtmlTag#getOption
	     * @param {string} name - the name of the option
	     * @returns {*} Returns the value of the option
	     *
	     */

	  }, {
	    key: "getOption",
	    value: function getOption(name) {
	      return this.transformation().getValue(name);
	    }
	    /**
	     * Get the attributes of the tag.
	     * @function HtmlTag#attributes
	     * @returns {Object} attributes
	     */

	  }, {
	    key: "attributes",
	    value: function attributes() {
	      // The attributes are be computed from the options every time this method is invoked.
	      var htmlAttributes = this.transformation().toHtmlAttributes();
	      Object.keys(htmlAttributes).forEach(function (key) {
	        if (isPlainObject_root_isPlainObject_default()(htmlAttributes[key])) {
	          delete htmlAttributes[key];
	        }
	      });

	      if (htmlAttributes.attributes) {
	        // Currently HTML attributes are defined both at the top level and under 'attributes'
	        merge_root_merge_default()(htmlAttributes, htmlAttributes.attributes);
	        delete htmlAttributes.attributes;
	      }

	      return htmlAttributes;
	    }
	    /**
	     * Set a tag attribute named `name` to `value`
	     * @function HtmlTag#setAttr
	     * @param {string} name - the name of the attribute
	     * @param {string} value - the value of the attribute
	     */

	  }, {
	    key: "setAttr",
	    value: function setAttr(name, value) {
	      this.transformation().set("html_".concat(name), value);
	      return this;
	    }
	    /**
	     * Get the value of the tag attribute `name`
	     * @function HtmlTag#getAttr
	     * @param {string} name - the name of the attribute
	     * @returns {*}
	     */

	  }, {
	    key: "getAttr",
	    value: function getAttr(name) {
	      return this.attributes()["html_".concat(name)] || this.attributes()[name];
	    }
	    /**
	     * Remove the tag attributed named `name`
	     * @function HtmlTag#removeAttr
	     * @param {string} name - the name of the attribute
	     * @returns {*}
	     */

	  }, {
	    key: "removeAttr",
	    value: function removeAttr(name) {
	      var ref;
	      return (ref = this.transformation().remove("html_".concat(name))) != null ? ref : this.transformation().remove(name);
	    }
	    /**
	     * @function HtmlTag#content
	     * @protected
	     * @ignore
	     */

	  }, {
	    key: "content",
	    value: function content() {
	      return "";
	    }
	    /**
	     * @function HtmlTag#openTag
	     * @protected
	     * @ignore
	     */

	  }, {
	    key: "openTag",
	    value: function openTag() {
	      var tag = "<" + this.name;
	      var htmlAttrs = this.htmlAttrs(this.attributes());

	      if (htmlAttrs && htmlAttrs.length > 0) {
	        tag += " " + htmlAttrs;
	      }

	      return tag + ">";
	    }
	    /**
	     * @function HtmlTag#closeTag
	     * @protected
	     * @ignore
	     */

	  }, {
	    key: "closeTag",
	    value: function closeTag() {
	      return "</".concat(this.name, ">");
	    }
	    /**
	     * Generates an HTML representation of the tag.
	     * @function HtmlTag#toHtml
	     * @returns {string} Returns HTML in string format
	     */

	  }, {
	    key: "toHtml",
	    value: function toHtml() {
	      return this.openTag() + this.content() + this.closeTag();
	    }
	    /**
	     * Creates a DOM object representing the tag.
	     * @function HtmlTag#toDOM
	     * @returns {Element}
	     */

	  }, {
	    key: "toDOM",
	    value: function toDOM() {
	      var element, name, ref, value;

	      if (!isFunction_root_isFunction_(typeof document !== "undefined" && document !== null ? document.createElement : void 0)) {
	        throw "Can't create DOM if document is not present!";
	      }

	      element = document.createElement(this.name);
	      ref = this.attributes();

	      for (name in ref) {
	        value = ref[name];
	        element.setAttribute(name, value);
	      }

	      return element;
	    }
	  }], [{
	    key: "new",
	    value: function _new(name, publicId, options) {
	      return new this(name, publicId, options);
	    }
	  }, {
	    key: "isResponsive",
	    value: function isResponsive(tag, responsiveClass) {
	      var dataSrc;
	      dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');
	      return lodash_hasClass(tag, responsiveClass) && /\bw_auto\b/.exec(dataSrc);
	    }
	  }]);

	  return HtmlTag;
	}();

	;
	/**
	 * Represent the given key and value as an HTML attribute.
	 * @function toAttribute
	 * @protected
	 * @param {string} key - attribute name
	 * @param {*|boolean} value - the value of the attribute. If the value is boolean `true`, return the key only.
	 * @returns {string} the attribute
	 *
	 */

	function toAttribute(key, value) {
	  if (!value) {
	    return void 0;
	  } else if (value === true) {
	    return key;
	  } else {
	    return "".concat(key, "=\"").concat(value, "\"");
	  }
	}
	/**
	 * If given value is a string, replaces quotes with character entities (&#34;, &#39;)
	 * @param value - value to change
	 * @returns {*} changed value
	 */


	function escapeQuotes(value) {
	  return isString_root_isString_default()(value) ? value.replace('"', '&#34;').replace("'", '&#39;') : value;
	}

	/* harmony default export */ var htmltag = (htmltag_HtmlTag);
	// CONCATENATED MODULE: ./src/constants.js
	var VERSION = "2.5.0";
	var CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";
	var OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";
	var AKAMAI_SHARED_CDN = "res.cloudinary.com";
	var SHARED_CDN = AKAMAI_SHARED_CDN;
	var DEFAULT_POSTER_OPTIONS = {
	  format: 'jpg',
	  resource_type: 'video'
	};
	var DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
	var SEO_TYPES = {
	  "image/upload": "images",
	  "image/private": "private_images",
	  "image/authenticated": "authenticated_images",
	  "raw/upload": "files",
	  "video/upload": "videos"
	};
	/**
	* @const {Object} Cloudinary.DEFAULT_IMAGE_PARAMS
	* Defaults values for image parameters.
	*
	* (Previously defined using option_consume() )
	 */

	var DEFAULT_IMAGE_PARAMS = {
	  resource_type: "image",
	  transformation: [],
	  type: 'upload'
	};
	/**
	* Defaults values for video parameters.
	* @const {Object} Cloudinary.DEFAULT_VIDEO_PARAMS
	* (Previously defined using option_consume() )
	 */

	var DEFAULT_VIDEO_PARAMS = {
	  fallback_content: '',
	  resource_type: "video",
	  source_transformation: {},
	  source_types: DEFAULT_VIDEO_SOURCE_TYPES,
	  transformation: [],
	  type: 'upload'
	};
	/**
	 * Recommended sources for video tag
	 * @const {Object} Cloudinary.DEFAULT_VIDEO_SOURCES
	 */

	var DEFAULT_VIDEO_SOURCES = [{
	  type: "mp4",
	  codecs: "hev1",
	  transformations: {
	    video_codec: "h265"
	  }
	}, {
	  type: "webm",
	  codecs: "vp9",
	  transformations: {
	    video_codec: "vp9"
	  }
	}, {
	  type: "mp4",
	  transformations: {
	    video_codec: "auto"
	  }
	}, {
	  type: "webm",
	  transformations: {
	    video_codec: "auto"
	  }
	}];
	/**
	 * The resource storage type
	 * @typedef type
	 * @enum {string}
	 * @property  {string} 'upload' A resource uploaded directly to Cloudinary
	 * @property  {string} 'fetch' A resource fetched by Cloudinary from a 3rd party storage
	 * @property  {string} 'private'
	 * @property  {string} 'authenticated'
	 * @property  {string} 'sprite'
	 * @property  {string} 'facebook'
	 * @property  {string} 'twitter'
	 * @property  {string} 'youtube'
	 * @property  {string} 'vimeo'
	 *
	 */

	/**
	 * The resource type
	 * @typedef resourceType
	 * @enum {string}
	 * @property {string} 'image' An image file
	 * @property {string} 'video' A video file
	 * @property {string} 'raw'   A raw file
	 */
	// CONCATENATED MODULE: ./src/url.js





	function absolutize(url) {
	  var prefix;

	  if (!url.match(/^https?:\//)) {
	    prefix = document.location.protocol + '//' + document.location.host;

	    if (url[0] === '?') {
	      prefix += document.location.pathname;
	    } else if (url[0] !== '/') {
	      prefix += document.location.pathname.replace(/\/[^\/]*$/, '/');
	    }

	    url = prefix + url;
	  }

	  return url;
	} // Produce a number between 1 and 5 to be used for cdn sub domains designation


	function cdnSubdomainNumber(publicId) {
	  return src_crc32(publicId) % 5 + 1;
	}
	/**
	 * Create the URL prefix for Cloudinary resources.
	 * @param {string} publicId the resource public ID
	 * @param {object} options additional options
	 * @param {string} options.cloud_name - the cloud name.
	 * @param {boolean} [options.cdn_subdomain=false] - Whether to automatically build URLs with
	 *  multiple CDN sub-domains.
	 * @param {string} [options.private_cdn] - Boolean (default: false). Should be set to true for Advanced plan's users
	 *  that have a private CDN distribution.
	 * @param {string} [options.protocol="http://"] - the URI protocol to use. If options.secure is true,
	 *  the value is overridden to "https://"
	 * @param {string} [options.secure_distribution] - The domain name of the CDN distribution to use for building HTTPS URLs.
	 *  Relevant only for Advanced plan's users that have a private CDN distribution.
	 * @param {string} [options.cname] - Custom domain name to use for building HTTP URLs.
	 *  Relevant only for Advanced plan's users that have a private CDN distribution and a custom CNAME.
	 * @param {boolean} [options.secure_cdn_subdomain=true] - When options.secure is true and this parameter is false,
	 *  the subdomain is set to "res".
	 * @param {boolean} [options.secure=false] - Force HTTPS URLs of images even if embedded in non-secure HTTP pages.
	 *  When this value is true, options.secure_distribution will be used as host if provided, and options.protocol is set
	 *  to "https://".
	 * @returns {string} the URL prefix for the resource.
	 * @private
	*/


	function cloudinaryUrlPrefix(publicId, options) {
	  if (options.cloud_name && options.cloud_name[0] === '/') {
	    return '/res' + options.cloud_name;
	  } // defaults


	  var protocol = "http://";
	  var cdnPart = "";
	  var subdomain = "res";
	  var host = ".cloudinary.com";
	  var path = "/" + options.cloud_name; // modifications

	  if (options.protocol) {
	    protocol = options.protocol + '//';
	  }

	  if (options.private_cdn) {
	    cdnPart = options.cloud_name + "-";
	    path = "";
	  }

	  if (options.cdn_subdomain) {
	    subdomain = "res-" + cdnSubdomainNumber(publicId);
	  }

	  if (options.secure) {
	    protocol = "https://";

	    if (options.secure_cdn_subdomain === false) {
	      subdomain = "res";
	    }

	    if (options.secure_distribution != null && options.secure_distribution !== OLD_AKAMAI_SHARED_CDN && options.secure_distribution !== SHARED_CDN) {
	      cdnPart = "";
	      subdomain = "";
	      host = options.secure_distribution;
	    }
	  } else if (options.cname) {
	    protocol = "http://";
	    cdnPart = "";
	    subdomain = options.cdn_subdomain ? 'a' + (src_crc32(publicId) % 5 + 1) + '.' : '';
	    host = options.cname;
	  }

	  return [protocol, cdnPart, subdomain, host, path].join("");
	}
	/**
	 * Return the resource type and action type based on the given configuration
	 * @function Cloudinary#finalizeResourceType
	 * @param {Object|string} resourceType
	 * @param {string} [type='upload']
	 * @param {string} [urlSuffix]
	 * @param {boolean} [useRootPath]
	 * @param {boolean} [shorten]
	 * @returns {string} resource_type/type
	 * @ignore
	 */


	function finalizeResourceType() {
	  var resourceType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "image";
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "upload";
	  var urlSuffix = arguments.length > 2 ? arguments[2] : undefined;
	  var useRootPath = arguments.length > 3 ? arguments[3] : undefined;
	  var shorten = arguments.length > 4 ? arguments[4] : undefined;
	  var options;
	  resourceType = resourceType == null ? "image" : resourceType;
	  type = type == null ? "upload" : type;

	  if (isPlainObject_root_isPlainObject_default()(resourceType)) {
	    options = resourceType;
	    resourceType = options.resource_type;
	    type = options.type;
	    urlSuffix = options.url_suffix;
	    useRootPath = options.use_root_path;
	    shorten = options.shorten;
	  }

	  if (type == null) {
	    type = 'upload';
	  }

	  if (urlSuffix != null) {
	    resourceType = SEO_TYPES["".concat(resourceType, "/").concat(type)];
	    type = null;

	    if (resourceType == null) {
	      throw new Error("URL Suffix only supported for ".concat(Object.keys(SEO_TYPES).join(', ')));
	    }
	  }

	  if (useRootPath) {
	    if (resourceType === 'image' && type === 'upload' || resourceType === "images") {
	      resourceType = null;
	      type = null;
	    } else {
	      throw new Error("Root path only supported for image/upload");
	    }
	  }

	  if (shorten && resourceType === 'image' && type === 'upload') {
	    resourceType = 'iu';
	    type = null;
	  }

	  return [resourceType, type].join("/");
	}
	/**
	 * Generates a URL for any asset in your Media library.
	 * @function url
	 * @ignore
	 * @param {string} publicId - The public ID of the media asset.
	 * @param {Object} [options={}] - The {@link Transformation} parameters to include in the URL.
	 * @param {object} [config={}] - URL configuration parameters
	 * @param {type} [options.type='upload'] - The asset's storage type.
	 *  For details on all fetch types, see
	 * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
	 *  target="_blank">Fetch types</a>. 
	 * @param {Object} [options.resource_type='image'] - The type of asset. <p>Possible values:<br/> 
	 *  - `image`<br/>
	 *  - `video`<br/>
	 *  - `raw` 
	 * @return {string} The media asset URL.
	 * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	 *  Available image transformations</a>
	 * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
	 *  Available video transformations</a>   
	 */


	function url_url(publicId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var error, prefix, ref, resourceTypeAndType, transformation, transformationString, url, version;

	  if (!publicId) {
	    return publicId;
	  }

	  if (options instanceof src_transformation) {
	    options = options.toOptions();
	  }

	  options = defaults({}, options, config, DEFAULT_IMAGE_PARAMS);

	  if (options.type === 'fetch') {
	    options.fetch_format = options.fetch_format || options.format;
	    publicId = absolutize(publicId);
	  }

	  transformation = new src_transformation(options);
	  transformationString = transformation.serialize();

	  if (!options.cloud_name) {
	    throw 'Unknown cloud_name';
	  } // if publicId has a '/' and doesn't begin with v<number> and doesn't start with http[s]:/ and version is empty and force_version is truthy or undefined


	  if ((options.force_version || typeof options.force_version === 'undefined') && publicId.search('/') >= 0 && !publicId.match(/^v[0-9]+/) && !publicId.match(/^https?:\//) && !((ref = options.version) != null ? ref.toString() : void 0)) {
	    options.version = 1;
	  }

	  if (publicId.match(/^https?:/)) {
	    if (options.type === 'upload' || options.type === 'asset') {
	      url = publicId;
	    } else {
	      publicId = encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');
	    }
	  } else {
	    try {
	      // Make sure publicId is URI encoded.
	      publicId = decodeURIComponent(publicId);
	    } catch (error1) {
	      error = error1;
	    }

	    publicId = encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');

	    if (options.url_suffix) {
	      if (options.url_suffix.match(/[\.\/]/)) {
	        throw 'url_suffix should not include . or /';
	      }

	      publicId = publicId + '/' + options.url_suffix;
	    }

	    if (options.format) {
	      if (!options.trust_public_id) {
	        publicId = publicId.replace(/\.(jpg|png|gif|webp)$/, '');
	      }

	      publicId = publicId + '.' + options.format;
	    }
	  }

	  prefix = cloudinaryUrlPrefix(publicId, options);
	  resourceTypeAndType = finalizeResourceType(options.resource_type, options.type, options.url_suffix, options.use_root_path, options.shorten);
	  version = options.version ? 'v' + options.version : '';
	  return url || compact_root_compact_default()([prefix, resourceTypeAndType, transformationString, version, publicId]).join('/').replace(/([^:])\/+/g, '$1/');
	}
	;
	// CONCATENATED MODULE: ./src/util/generateBreakpoints.js
	function generateBreakpoints_slicedToArray(arr, i) { return generateBreakpoints_arrayWithHoles(arr) || generateBreakpoints_iterableToArrayLimit(arr, i) || generateBreakpoints_nonIterableRest(); }

	function generateBreakpoints_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

	function generateBreakpoints_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function generateBreakpoints_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	/**
	 * Helper function. Gets or populates srcset breakpoints using provided parameters
	 * Either the breakpoints or min_width, max_width, max_images must be provided.
	 *
	 * @private
	 * @param {srcset} srcset Options with either `breakpoints` or `min_width`, `max_width`, and `max_images`
	 *
	 * @return {number[]} Array of breakpoints
	 *
	 */
	function generateBreakpoints(srcset) {
	  var breakpoints = srcset.breakpoints || [];

	  if (breakpoints.length) {
	    return breakpoints;
	  }

	  var _map = [srcset.min_width, srcset.max_width, srcset.max_images].map(Number),
	      _map2 = generateBreakpoints_slicedToArray(_map, 3),
	      min_width = _map2[0],
	      max_width = _map2[1],
	      max_images = _map2[2];

	  if ([min_width, max_width, max_images].some(isNaN)) {
	    throw 'Either (min_width, max_width, max_images) ' + 'or breakpoints must be provided to the image srcset attribute';
	  }

	  if (min_width > max_width) {
	    throw 'min_width must be less than max_width';
	  }

	  if (max_images <= 0) {
	    throw 'max_images must be a positive integer';
	  } else if (max_images === 1) {
	    min_width = max_width;
	  }

	  var stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));

	  for (var current = min_width; current < max_width; current += stepSize) {
	    breakpoints.push(current);
	  }

	  breakpoints.push(max_width);
	  return breakpoints;
	}
	// CONCATENATED MODULE: ./src/util/srcsetUtils.js

	var srcsetUtils_isEmpty = isEmpty;



	/**
	 * Options used to generate the srcset attribute.
	 * @typedef {object} srcset
	 * @property {(number[]|string[])}   [breakpoints] An array of breakpoints.
	 * @property {number}                [min_width]   Minimal width of the srcset images.
	 * @property {number}                [max_width]   Maximal width of the srcset images.
	 * @property {number}                [max_images]  Number of srcset images to generate.
	 * @property {object|string}         [transformation] The transformation to use in the srcset urls.
	 * @property {boolean}               [sizes] Whether to calculate and add the sizes attribute.
	 */

	/**
	 * Helper function. Generates a single srcset item url
	 *
	 * @private
	 * @param {string} public_id  Public ID of the resource.
	 * @param {number} width      Width in pixels of the srcset item.
	 * @param {object|string} transformation
	 * @param {object} options    Additional options.
	 *
	 * @return {string} Resulting URL of the item
	 */

	function scaledUrl(public_id, width, transformation) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var configParams = extractUrlParams(options);
	  transformation = transformation || options;
	  configParams.raw_transformation = new src_transformation([merge_root_merge_default.a({}, transformation), {
	    crop: 'scale',
	    width: width
	  }]).toString();
	  return url_url(public_id, configParams);
	}
	/**
	 * If cache is enabled, get the breakpoints from the cache. If the values were not found in the cache,
	 * or cache is not enabled, generate the values.
	 * @param {srcset} srcset The srcset configuration parameters
	 * @param {string} public_id
	 * @param {object} options
	 * @return {*|Array}
	 */

	function getOrGenerateBreakpoints(public_id) {
	  var srcset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  return generateBreakpoints(srcset);
	}
	/**
	 * Helper function. Generates srcset attribute value of the HTML img tag
	 * @private
	 *
	 * @param {string} public_id  Public ID of the resource
	 * @param {number[]} breakpoints An array of breakpoints (in pixels)
	 * @param {object} transformation The transformation
	 * @param {object} options Includes html tag options, transformation options
	 * @return {string} Resulting srcset attribute value
	 */

	function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
	  options = cloneDeep_root_cloneDeep_default.a(options);
	  patchFetchFormat(options);
	  return breakpoints.map(function (width) {
	    return "".concat(scaledUrl(public_id, width, transformation, options), " ").concat(width, "w");
	  }).join(', ');
	}
	/**
	 * Helper function. Generates sizes attribute value of the HTML img tag
	 * @private
	 * @param {number[]} breakpoints An array of breakpoints.
	 * @return {string} Resulting sizes attribute value
	 */

	function generateSizesAttribute(breakpoints) {
	  if (breakpoints == null) {
	    return '';
	  }

	  return breakpoints.map(function (width) {
	    return "(max-width: ".concat(width, "px) ").concat(width, "px");
	  }).join(', ');
	}
	/**
	 * Helper function. Generates srcset and sizes attributes of the image tag
	 *
	 * Generated attributes are added to attributes argument
	 *
	 * @private
	 * @param {string}    publicId  The public ID of the resource
	 * @param {object}    attributes Existing HTML attributes.
	 * @param {srcset}    srcsetData
	 * @param {object}    options    Additional options.
	 *
	 * @return array The responsive attributes
	 */

	function generateImageResponsiveAttributes(publicId) {
	  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var srcsetData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  // Create both srcset and sizes here to avoid fetching breakpoints twice
	  var responsiveAttributes = {};

	  if (srcsetUtils_isEmpty(srcsetData)) {
	    return responsiveAttributes;
	  }

	  var generateSizes = !attributes.sizes && srcsetData.sizes === true;
	  var generateSrcset = !attributes.srcset;

	  if (generateSrcset || generateSizes) {
	    var breakpoints = getOrGenerateBreakpoints(publicId, srcsetData, options);

	    if (generateSrcset) {
	      var transformation = srcsetData.transformation;
	      var srcsetAttr = generateSrcsetAttribute(publicId, breakpoints, transformation, options);

	      if (!srcsetUtils_isEmpty(srcsetAttr)) {
	        responsiveAttributes.srcset = srcsetAttr;
	      }
	    }

	    if (generateSizes) {
	      var sizesAttr = generateSizesAttribute(breakpoints);

	      if (!srcsetUtils_isEmpty(sizesAttr)) {
	        responsiveAttributes.sizes = sizesAttr;
	      }
	    }
	  }

	  return responsiveAttributes;
	}
	/**
	 * Generate a media query
	 *
	 * @private
	 * @param {object} options configuration options
	 * @param {number|string} options.min_width
	 * @param {number|string} options.max_width
	 * @return {string} a media query string
	 */

	function generateMediaAttr(options) {
	  var mediaQuery = [];

	  if (options != null) {
	    if (options.min_width != null) {
	      mediaQuery.push("(min-width: ".concat(options.min_width, "px)"));
	    }

	    if (options.max_width != null) {
	      mediaQuery.push("(max-width: ".concat(options.max_width, "px)"));
	    }
	  }

	  return mediaQuery.join(' and ');
	}
	var srcsetUrl = scaledUrl;
	// CONCATENATED MODULE: ./src/tags/imagetag.js
	function imagetag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { imagetag_typeof = function _typeof(obj) { return typeof obj; }; } else { imagetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return imagetag_typeof(obj); }

	function imagetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function imagetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function imagetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) imagetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) imagetag_defineProperties(Constructor, staticProps); return Constructor; }

	function imagetag_possibleConstructorReturn(self, call) { if (call && (imagetag_typeof(call) === "object" || typeof call === "function")) { return call; } return imagetag_assertThisInitialized(self); }

	function imagetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function imagetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { imagetag_get = Reflect.get; } else { imagetag_get = function _get(target, property, receiver) { var base = imagetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return imagetag_get(target, property, receiver || target); }

	function imagetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = imagetag_getPrototypeOf(object); if (object === null) break; } return object; }

	function imagetag_getPrototypeOf(o) { imagetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return imagetag_getPrototypeOf(o); }

	function imagetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) imagetag_setPrototypeOf(subClass, superClass); }

	function imagetag_setPrototypeOf(o, p) { imagetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return imagetag_setPrototypeOf(o, p); }

	/**
	 * Image Tag
	 * Depends on 'tags/htmltag', 'cloudinary'
	 */




	/**
	 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
	 * @constructor ImageTag
	 * @extends HtmlTag
	 * @param {string} [publicId]
	 * @param {Object} [options]
	 */

	var imagetag_ImageTag =
	/*#__PURE__*/
	function (_HtmlTag) {
	  imagetag_inherits(ImageTag, _HtmlTag);

	  function ImageTag(publicId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    imagetag_classCallCheck(this, ImageTag);

	    return imagetag_possibleConstructorReturn(this, imagetag_getPrototypeOf(ImageTag).call(this, "img", publicId, options));
	  }
	  /** @override */


	  imagetag_createClass(ImageTag, [{
	    key: "closeTag",
	    value: function closeTag() {
	      return "";
	    }
	    /** @override */

	  }, {
	    key: "attributes",
	    value: function attributes() {
	      var attr, options, srcAttribute;
	      attr = imagetag_get(imagetag_getPrototypeOf(ImageTag.prototype), "attributes", this).call(this) || {};
	      options = this.getOptions();
	      var srcsetParam = this.getOption('srcset');
	      var attributes = this.getOption('attributes') || {};
	      var responsiveAttributes = {};

	      if (isString_root_isString_default()(srcsetParam)) {
	        responsiveAttributes.srcset = srcsetParam;
	      } else {
	        responsiveAttributes = generateImageResponsiveAttributes(this.publicId, attributes, srcsetParam, options);
	      }

	      if (!isEmpty(responsiveAttributes)) {
	        delete options.width;
	        delete options.height;
	      }

	      merge_root_merge_default()(attr, responsiveAttributes);
	      srcAttribute = options.responsive && !options.client_hints ? 'data-src' : 'src';

	      if (attr[srcAttribute] == null) {
	        attr[srcAttribute] = url_url(this.publicId, this.getOptions());
	      }

	      return attr;
	    }
	  }]);

	  return ImageTag;
	}(htmltag);

	;
	/* harmony default export */ var imagetag = (imagetag_ImageTag);
	// CONCATENATED MODULE: ./src/tags/sourcetag.js
	function sourcetag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sourcetag_typeof = function _typeof(obj) { return typeof obj; }; } else { sourcetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sourcetag_typeof(obj); }

	function sourcetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function sourcetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function sourcetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) sourcetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) sourcetag_defineProperties(Constructor, staticProps); return Constructor; }

	function sourcetag_possibleConstructorReturn(self, call) { if (call && (sourcetag_typeof(call) === "object" || typeof call === "function")) { return call; } return sourcetag_assertThisInitialized(self); }

	function sourcetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function sourcetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { sourcetag_get = Reflect.get; } else { sourcetag_get = function _get(target, property, receiver) { var base = sourcetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return sourcetag_get(target, property, receiver || target); }

	function sourcetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = sourcetag_getPrototypeOf(object); if (object === null) break; } return object; }

	function sourcetag_getPrototypeOf(o) { sourcetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sourcetag_getPrototypeOf(o); }

	function sourcetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sourcetag_setPrototypeOf(subClass, superClass); }

	function sourcetag_setPrototypeOf(o, p) { sourcetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sourcetag_setPrototypeOf(o, p); }

	/**
	 * Image Tag
	 * Depends on 'tags/htmltag', 'cloudinary'
	 */




	/**
	 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
	 * @constructor SourceTag
	 * @extends HtmlTag
	 * @param {string} [publicId]
	 * @param {Object} [options]
	 */

	var sourcetag_SourceTag =
	/*#__PURE__*/
	function (_HtmlTag) {
	  sourcetag_inherits(SourceTag, _HtmlTag);

	  function SourceTag(publicId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    sourcetag_classCallCheck(this, SourceTag);

	    return sourcetag_possibleConstructorReturn(this, sourcetag_getPrototypeOf(SourceTag).call(this, "source", publicId, options));
	  }
	  /** @override */


	  sourcetag_createClass(SourceTag, [{
	    key: "closeTag",
	    value: function closeTag() {
	      return "";
	    }
	    /** @override */

	  }, {
	    key: "attributes",
	    value: function attributes() {
	      var srcsetParam = this.getOption('srcset');
	      var attr = sourcetag_get(sourcetag_getPrototypeOf(SourceTag.prototype), "attributes", this).call(this) || {};
	      var options = this.getOptions();
	      merge_root_merge_default()(attr, generateImageResponsiveAttributes(this.publicId, attr, srcsetParam, options));

	      if (!attr.srcset) {
	        attr.srcset = url_url(this.publicId, options);
	      }

	      if (!attr.media && options.media) {
	        attr.media = generateMediaAttr(options.media);
	      }

	      return attr;
	    }
	  }]);

	  return SourceTag;
	}(htmltag);

	;
	/* harmony default export */ var sourcetag = (sourcetag_SourceTag);
	// CONCATENATED MODULE: ./src/tags/picturetag.js
	function picturetag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { picturetag_typeof = function _typeof(obj) { return typeof obj; }; } else { picturetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return picturetag_typeof(obj); }

	function picturetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function picturetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function picturetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) picturetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) picturetag_defineProperties(Constructor, staticProps); return Constructor; }

	function picturetag_possibleConstructorReturn(self, call) { if (call && (picturetag_typeof(call) === "object" || typeof call === "function")) { return call; } return picturetag_assertThisInitialized(self); }

	function picturetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function picturetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { picturetag_get = Reflect.get; } else { picturetag_get = function _get(target, property, receiver) { var base = picturetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return picturetag_get(target, property, receiver || target); }

	function picturetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = picturetag_getPrototypeOf(object); if (object === null) break; } return object; }

	function picturetag_getPrototypeOf(o) { picturetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return picturetag_getPrototypeOf(o); }

	function picturetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) picturetag_setPrototypeOf(subClass, superClass); }

	function picturetag_setPrototypeOf(o, p) { picturetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return picturetag_setPrototypeOf(o, p); }







	var picturetag_PictureTag =
	/*#__PURE__*/
	function (_HtmlTag) {
	  picturetag_inherits(PictureTag, _HtmlTag);

	  function PictureTag(publicId) {
	    var _this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var sources = arguments.length > 2 ? arguments[2] : undefined;

	    picturetag_classCallCheck(this, PictureTag);

	    _this = picturetag_possibleConstructorReturn(this, picturetag_getPrototypeOf(PictureTag).call(this, 'picture', publicId, options));
	    _this.widthList = sources;
	    return _this;
	  }
	  /** @override */


	  picturetag_createClass(PictureTag, [{
	    key: "content",
	    value: function content() {
	      var _this2 = this;

	      return this.widthList.map(function (_ref) {
	        var min_width = _ref.min_width,
	            max_width = _ref.max_width,
	            transformation = _ref.transformation;

	        var options = _this2.getOptions();

	        var sourceTransformation = new src_transformation(options);
	        sourceTransformation.chain().fromOptions(typeof transformation === 'string' ? {
	          raw_transformation: transformation
	        } : transformation);
	        options = extractUrlParams(options);
	        options.media = {
	          min_width: min_width,
	          max_width: max_width
	        };
	        options.transformation = sourceTransformation;
	        return new sourcetag(_this2.publicId, options).toHtml();
	      }).join('') + new imagetag(this.publicId, this.getOptions()).toHtml();
	    }
	    /** @override */

	  }, {
	    key: "attributes",
	    value: function attributes() {
	      var attr = picturetag_get(picturetag_getPrototypeOf(PictureTag.prototype), "attributes", this).call(this);

	      delete attr.width;
	      delete attr.height;
	      return attr;
	    }
	    /** @override */

	  }, {
	    key: "closeTag",
	    value: function closeTag() {
	      return "</" + this.name + ">";
	    }
	  }]);

	  return PictureTag;
	}(htmltag);

	;
	/* harmony default export */ var picturetag = (picturetag_PictureTag);
	// CONCATENATED MODULE: ./src/tags/videotag.js
	function videotag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { videotag_typeof = function _typeof(obj) { return typeof obj; }; } else { videotag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return videotag_typeof(obj); }

	function videotag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function videotag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function videotag_createClass(Constructor, protoProps, staticProps) { if (protoProps) videotag_defineProperties(Constructor.prototype, protoProps); if (staticProps) videotag_defineProperties(Constructor, staticProps); return Constructor; }

	function videotag_possibleConstructorReturn(self, call) { if (call && (videotag_typeof(call) === "object" || typeof call === "function")) { return call; } return videotag_assertThisInitialized(self); }

	function videotag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function videotag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { videotag_get = Reflect.get; } else { videotag_get = function _get(target, property, receiver) { var base = videotag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return videotag_get(target, property, receiver || target); }

	function videotag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = videotag_getPrototypeOf(object); if (object === null) break; } return object; }

	function videotag_getPrototypeOf(o) { videotag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return videotag_getPrototypeOf(o); }

	function videotag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) videotag_setPrototypeOf(subClass, superClass); }

	function videotag_setPrototypeOf(o, p) { videotag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return videotag_setPrototypeOf(o, p); }

	/**
	 * Video Tag
	 * Depends on 'tags/htmltag', 'util', 'cloudinary'
	 */




	var VIDEO_TAG_PARAMS = ['source_types', 'source_transformation', 'fallback_content', 'poster', 'sources'];
	var videotag_DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
	var videotag_DEFAULT_POSTER_OPTIONS = {
	  format: 'jpg',
	  resource_type: 'video'
	};
	/**
	 * Creates an HTML (DOM) Video tag using Cloudinary as the source.
	 * @constructor VideoTag
	 * @extends HtmlTag
	 * @param {string} [publicId]
	 * @param {Object} [options]
	 */

	var videotag_VideoTag =
	/*#__PURE__*/
	function (_HtmlTag) {
	  videotag_inherits(VideoTag, _HtmlTag);

	  function VideoTag(publicId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    videotag_classCallCheck(this, VideoTag);

	    options = defaults({}, options, DEFAULT_VIDEO_PARAMS);
	    return videotag_possibleConstructorReturn(this, videotag_getPrototypeOf(VideoTag).call(this, "video", publicId.replace(/\.(mp4|ogv|webm)$/, ''), options));
	  }
	  /**
	   * Set the transformation to apply on each source
	   * @function VideoTag#setSourceTransformation
	   * @param {Object} an object with pairs of source type and source transformation
	   * @returns {VideoTag} Returns this instance for chaining purposes.
	   */


	  videotag_createClass(VideoTag, [{
	    key: "setSourceTransformation",
	    value: function setSourceTransformation(value) {
	      this.transformation().sourceTransformation(value);
	      return this;
	    }
	    /**
	     * Set the source types to include in the video tag
	     * @function VideoTag#setSourceTypes
	     * @param {Array<string>} an array of source types
	     * @returns {VideoTag} Returns this instance for chaining purposes.
	     */

	  }, {
	    key: "setSourceTypes",
	    value: function setSourceTypes(value) {
	      this.transformation().sourceTypes(value);
	      return this;
	    }
	    /**
	     * Set the poster to be used in the video tag
	     * @function VideoTag#setPoster
	     * @param {string|Object} value
	     * - string: a URL to use for the poster
	     * - Object: transformation parameters to apply to the poster. May optionally include a public_id to use instead of the video public_id.
	     * @returns {VideoTag} Returns this instance for chaining purposes.
	     */

	  }, {
	    key: "setPoster",
	    value: function setPoster(value) {
	      this.transformation().poster(value);
	      return this;
	    }
	    /**
	     * Set the content to use as fallback in the video tag
	     * @function VideoTag#setFallbackContent
	     * @param {string} value - the content to use, in HTML format
	     * @returns {VideoTag} Returns this instance for chaining purposes.
	     */

	  }, {
	    key: "setFallbackContent",
	    value: function setFallbackContent(value) {
	      this.transformation().fallbackContent(value);
	      return this;
	    }
	  }, {
	    key: "content",
	    value: function content() {
	      var _this = this;

	      var sourceTypes = this.transformation().getValue('source_types');
	      var sourceTransformation = this.transformation().getValue('source_transformation');
	      var fallback = this.transformation().getValue('fallback_content');
	      var sources = this.getOption('sources');
	      var innerTags = [];

	      if (isArray_root_isArray_default()(sources) && !isEmpty(sources)) {
	        innerTags = sources.map(function (source) {
	          var src = url_url(_this.publicId, defaults({}, source.transformations || {}, {
	            resource_type: 'video',
	            format: source.type
	          }), _this.getOptions());
	          return _this.createSourceTag(src, source.type, source.codecs);
	        });
	      } else {
	        if (isEmpty(sourceTypes)) {
	          sourceTypes = videotag_DEFAULT_VIDEO_SOURCE_TYPES;
	        }

	        if (isArray_root_isArray_default()(sourceTypes)) {
	          innerTags = sourceTypes.map(function (srcType) {
	            var src = url_url(_this.publicId, defaults({}, sourceTransformation[srcType] || {}, {
	              resource_type: 'video',
	              format: srcType
	            }), _this.getOptions());
	            return _this.createSourceTag(src, srcType);
	          });
	        }
	      }

	      return innerTags.join('') + fallback;
	    }
	  }, {
	    key: "attributes",
	    value: function attributes() {
	      var sourceTypes = this.getOption('source_types');
	      var poster = this.getOption('poster');

	      if (poster === undefined) {
	        poster = {};
	      }

	      if (isPlainObject_root_isPlainObject_default()(poster)) {
	        var defaultOptions = poster.public_id != null ? DEFAULT_IMAGE_PARAMS : videotag_DEFAULT_POSTER_OPTIONS;
	        poster = url_url(poster.public_id || this.publicId, defaults({}, poster, defaultOptions, this.getOptions()));
	      }

	      var attr = videotag_get(videotag_getPrototypeOf(VideoTag.prototype), "attributes", this).call(this) || {};
	      attr = omit(attr, VIDEO_TAG_PARAMS);
	      var sources = this.getOption('sources'); // In case of empty sourceTypes - fallback to default source types is used.

	      var hasSourceTags = !isEmpty(sources) || isEmpty(sourceTypes) || isArray_root_isArray_default()(sourceTypes);

	      if (!hasSourceTags) {
	        attr["src"] = url_url(this.publicId, this.getOptions(), {
	          resource_type: 'video',
	          format: sourceTypes
	        });
	      }

	      if (poster != null) {
	        attr["poster"] = poster;
	      }

	      return attr;
	    }
	  }, {
	    key: "createSourceTag",
	    value: function createSourceTag(src, sourceType) {
	      var codecs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var mimeType = null;

	      if (!isEmpty(sourceType)) {
	        var videoType = sourceType === 'ogv' ? 'ogg' : sourceType;
	        mimeType = 'video/' + videoType;

	        if (!isEmpty(codecs)) {
	          var codecsStr = isArray_root_isArray_default()(codecs) ? codecs.join(', ') : codecs;
	          mimeType += '; codecs=' + codecsStr;
	        }
	      }

	      return "<source " + this.htmlAttrs({
	        src: src,
	        type: mimeType
	      }) + ">";
	    }
	  }]);

	  return VideoTag;
	}(htmltag);

	/* harmony default export */ var videotag = (videotag_VideoTag);
	// CONCATENATED MODULE: ./src/tags/clienthintsmetatag.js
	function clienthintsmetatag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clienthintsmetatag_typeof = function _typeof(obj) { return typeof obj; }; } else { clienthintsmetatag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clienthintsmetatag_typeof(obj); }

	function clienthintsmetatag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function clienthintsmetatag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function clienthintsmetatag_createClass(Constructor, protoProps, staticProps) { if (protoProps) clienthintsmetatag_defineProperties(Constructor.prototype, protoProps); if (staticProps) clienthintsmetatag_defineProperties(Constructor, staticProps); return Constructor; }

	function clienthintsmetatag_possibleConstructorReturn(self, call) { if (call && (clienthintsmetatag_typeof(call) === "object" || typeof call === "function")) { return call; } return clienthintsmetatag_assertThisInitialized(self); }

	function clienthintsmetatag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function clienthintsmetatag_getPrototypeOf(o) { clienthintsmetatag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return clienthintsmetatag_getPrototypeOf(o); }

	function clienthintsmetatag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) clienthintsmetatag_setPrototypeOf(subClass, superClass); }

	function clienthintsmetatag_setPrototypeOf(o, p) { clienthintsmetatag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return clienthintsmetatag_setPrototypeOf(o, p); }

	/**
	 * Image Tag
	 * Depends on 'tags/htmltag', 'cloudinary'
	 */


	/**
	 * Creates an HTML (DOM) Meta tag that enables Client-Hints for the HTML page. <br/>
	 *  See
	 *  <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_client_hints"
	 *  target="_new">Automating responsive images with Client Hints</a> for more details.
	 * @constructor ClientHintsMetaTag
	 * @extends HtmlTag
	 * @param {object} options
	 * @example
	 * tag = new ClientHintsMetaTag()
	 * //returns: <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">
	 */

	var clienthintsmetatag_ClientHintsMetaTag =
	/*#__PURE__*/
	function (_HtmlTag) {
	  clienthintsmetatag_inherits(ClientHintsMetaTag, _HtmlTag);

	  function ClientHintsMetaTag(options) {
	    clienthintsmetatag_classCallCheck(this, ClientHintsMetaTag);

	    return clienthintsmetatag_possibleConstructorReturn(this, clienthintsmetatag_getPrototypeOf(ClientHintsMetaTag).call(this, 'meta', void 0, assign_root_assign_default()({
	      "http-equiv": "Accept-CH",
	      content: "DPR, Viewport-Width, Width"
	    }, options)));
	  }
	  /** @override */


	  clienthintsmetatag_createClass(ClientHintsMetaTag, [{
	    key: "closeTag",
	    value: function closeTag() {
	      return "";
	    }
	  }]);

	  return ClientHintsMetaTag;
	}(htmltag);

	;
	/* harmony default export */ var clienthintsmetatag = (clienthintsmetatag_ClientHintsMetaTag);
	// CONCATENATED MODULE: ./src/cloudinary.js
	function cloudinary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function cloudinary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function cloudinary_createClass(Constructor, protoProps, staticProps) { if (protoProps) cloudinary_defineProperties(Constructor.prototype, protoProps); if (staticProps) cloudinary_defineProperties(Constructor, staticProps); return Constructor; }

	var applyBreakpoints, closestAbove, defaultBreakpoints, cloudinary_findContainerWidth, cloudinary_maxWidth, updateDpr;











	defaultBreakpoints = function defaultBreakpoints(width) {
	  var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	  return steps * Math.ceil(width / steps);
	};

	closestAbove = function closestAbove(list, value) {
	  var i;
	  i = list.length - 2;

	  while (i >= 0 && list[i] >= value) {
	    i--;
	  }

	  return list[i + 1];
	};

	applyBreakpoints = function applyBreakpoints(tag, width, steps, options) {
	  var ref, ref1, ref2, responsive_use_breakpoints;
	  responsive_use_breakpoints = (ref = (ref1 = (ref2 = options['responsive_use_breakpoints']) != null ? ref2 : options['responsive_use_stoppoints']) != null ? ref1 : this.config('responsive_use_breakpoints')) != null ? ref : this.config('responsive_use_stoppoints');

	  if (!responsive_use_breakpoints || responsive_use_breakpoints === 'resize' && !options.resizing) {
	    return width;
	  } else {
	    return this.calc_breakpoint(tag, width, steps);
	  }
	};

	cloudinary_findContainerWidth = function findContainerWidth(element) {
	  var containerWidth, style;
	  containerWidth = 0;

	  while ((element = element != null ? element.parentNode : void 0) instanceof Element && !containerWidth) {
	    style = window.getComputedStyle(element);

	    if (!/^inline/.test(style.display)) {
	      containerWidth = lodash_width(element);
	    }
	  }

	  return containerWidth;
	};

	updateDpr = function updateDpr(dataSrc, roundDpr) {
	  return dataSrc.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + this.device_pixel_ratio(roundDpr));
	};

	cloudinary_maxWidth = function maxWidth(requiredWidth, tag) {
	  var imageWidth;
	  imageWidth = lodash_getData(tag, 'width') || 0;

	  if (requiredWidth > imageWidth) {
	    imageWidth = requiredWidth;
	    lodash_setData(tag, 'width', requiredWidth);
	  }

	  return imageWidth;
	};

	var cloudinary_Cloudinary =
	/*#__PURE__*/
	function () {
	  /**
	   * Creates a new Cloudinary instance.
	   * @class Cloudinary
	   * @classdesc Main class for accessing Cloudinary functionality.
	   * @param {Object} options - A {@link Configuration} object for globally configuring Cloudinary account settings.
	   * @example<br/>
	   *  var cl = new cloudinary.Cloudinary( { cloud_name: "mycloud"});<br/>
	   *  var imgTag = cl.image("myPicID");
	   * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters" target="_blank">
	   *  Available configuration options</a>
	   */
	  function Cloudinary(options) {
	    cloudinary_classCallCheck(this, Cloudinary);

	    var configuration;
	    this.devicePixelRatioCache = {};
	    this.responsiveConfig = {};
	    this.responsiveResizeInitialized = false;
	    configuration = new src_configuration(options); // Provided for backward compatibility

	    this.config = function (newConfig, newValue) {
	      return configuration.config(newConfig, newValue);
	    };
	    /**
	     * Use \<meta\> tags in the document to configure this `cloudinary` instance.
	     * @return This {Cloudinary} instance for chaining.
	     */


	    this.fromDocument = function () {
	      configuration.fromDocument();
	      return this;
	    };
	    /**
	     * Use environment variables to configure this `cloudinary` instance.
	     * @return This {Cloudinary} instance for chaining.
	     */


	    this.fromEnvironment = function () {
	      configuration.fromEnvironment();
	      return this;
	    };
	    /**
	     * Initializes the configuration of this `cloudinary` instance.
	     *  This is a convenience method that invokes both {@link Configuration#fromEnvironment|fromEnvironment()}
	     *  (Node.js environment only) and {@link Configuration#fromDocument|fromDocument()}.
	     *  It first tries to retrieve the configuration from the environment variable.
	     *  If not available, it tries from the document meta tags.
	     * @function Cloudinary#init
	     * @see Configuration#init
	     * @return This {Cloudinary} instance for chaining.
	     */


	    this.init = function () {
	      configuration.init();
	      return this;
	    };
	  }
	  /**
	   * Convenience constructor
	   * @param {Object} options
	   * @return {Cloudinary}
	   * @example cl = cloudinary.Cloudinary.new( { cloud_name: "mycloud"})
	   */


	  cloudinary_createClass(Cloudinary, [{
	    key: "url",

	    /**
	     * Generates a URL for any asset in your Media library.
	     * @function Cloudinary#url
	     * @param {string} publicId - The public ID of the media asset.
	     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
	     * @param {type} [options.type='upload'] - The asset's storage type.
	     *  For details on all fetch types, see
	     * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
	     *  target="_blank">Fetch types</a>.
	     * @param {resourceType} [options.resource_type='image'] - The type of asset. Possible values:<br/>
	     *  - `image`<br/>
	     *  - `video`<br/>
	     *  - `raw`
	     * @return {string} The media asset URL.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
	     *  Available video transformations</a>
	     */
	    value: function url(publicId) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return url_url(publicId, options, this.config());
	    }
	    /**
	     * Generates a video asset URL.
	     * @function Cloudinary#video_url
	     * @param {string} publicId - The public ID of the video.
	     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
	     * @param {type} [options.type='upload'] - The asset's storage type.
	     *  For details on all fetch types, see
	     *  <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
	     *  target="_blank">Fetch types</a>.
	     * @return {string} The video URL.
	     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference"
	     *  target="_blank">Available video transformations</a>
	     */

	  }, {
	    key: "video_url",
	    value: function video_url(publicId, options) {
	      options = assign_root_assign_default()({
	        resource_type: 'video'
	      }, options);
	      return this.url(publicId, options);
	    }
	    /**
	     * Generates a URL for an image intended to be used as a thumbnail for the specified video.
	     *  Identical to {@link Cloudinary#url|url}, except that the `resource_type` is `video`
	     *  and the default `format` is `jpg`.
	     * @function Cloudinary#video_thumbnail_url
	     * @param {string} publicId -  The unique identifier of the video from which you want to generate a thumbnail image.
	     * @param {Object} [options] - The image {@link Transformation} parameters to apply to the thumbnail.
	     * In addition to standard image transformations, you can also use the `start_offset` transformation parameter
	     * to instruct Cloudinary to generate the thumbnail from a frame other than the middle frame of the video.
	     * For details, see
	     * <a href="https://cloudinary.com/documentation/video_manipulation_and_delivery#generating_video_thumbnails"
	     * target="_blank">Generating video thumbnails</a> in the Cloudinary documentation.
	     * @param {type} [options.type='upload'] - The asset's storage type.
	     * @return {string} The URL of the video thumbnail image.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     */

	  }, {
	    key: "video_thumbnail_url",
	    value: function video_thumbnail_url(publicId, options) {
	      options = assign_root_assign_default()({}, DEFAULT_POSTER_OPTIONS, options);
	      return this.url(publicId, options);
	    }
	    /**
	     * Generates a string representation of the specified transformation options.
	     * @function Cloudinary#transformation_string
	     * @param {Object} options - The {@link Transformation} options.
	     * @returns {string} The transformation string.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
	     *  Available video transformations</a>
	     */

	  }, {
	    key: "transformation_string",
	    value: function transformation_string(options) {
	      return new src_transformation(options).serialize();
	    }
	    /**
	     * Generates an image tag.
	     * @function Cloudinary#image
	     * @param {string} publicId - The public ID of the image.
	     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {HTMLImageElement} An image tag DOM element.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "image",
	    value: function image(publicId) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var client_hints, img, ref;
	      img = this.imageTag(publicId, options);
	      client_hints = (ref = options.client_hints != null ? options.client_hints : this.config('client_hints')) != null ? ref : false;

	      if (options.src == null && !client_hints) {
	        // src must be removed before creating the DOM element to avoid loading the image
	        img.setAttr("src", '');
	      }

	      img = img.toDOM();

	      if (!client_hints) {
	        // cache the image src
	        lodash_setData(img, 'src-cache', this.url(publicId, options)); // set image src taking responsiveness in account

	        this.cloudinary_update(img, options);
	      }

	      return img;
	    }
	    /**
	     * Creates a new ImageTag instance using the configuration defined for this `cloudinary` instance.
	     * @function Cloudinary#imageTag
	     * @param {string} publicId - The public ID of the image.
	     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {ImageTag} An ImageTag instance that is attached (chained) to this Cloudinary instance.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "imageTag",
	    value: function imageTag(publicId, options) {
	      var tag;
	      tag = new imagetag(publicId, this.config());
	      tag.transformation().fromOptions(options);
	      return tag;
	    }
	    /**
	     * Creates a new PictureTag instance, configured using this `cloudinary` instance.
	     * @function Cloudinary#PictureTag
	     * @param {string} publicId - the public ID of the resource
	     * @param {Object} options - additional options to pass to the new ImageTag instance
	     * @return {PictureTag} A PictureTag that is attached (chained) to this Cloudinary instance
	     */

	  }, {
	    key: "pictureTag",
	    value: function pictureTag(publicId, options) {
	      var tag;
	      tag = new picturetag(publicId, this.config());
	      tag.transformation().fromOptions(options);
	      return tag;
	    }
	    /**
	     * Creates a new SourceTag instance, configured using this `cloudinary` instance.
	     * @function Cloudinary#SourceTag
	     * @param {string} publicId - the public ID of the resource.
	     * @param {Object} options - additional options to pass to the new instance.
	     * @return {SourceTag} A SourceTag that is attached (chained) to this Cloudinary instance
	     */

	  }, {
	    key: "sourceTag",
	    value: function sourceTag(publicId, options) {
	      var tag;
	      tag = new sourcetag(publicId, this.config());
	      tag.transformation().fromOptions(options);
	      return tag;
	    }
	    /**
	     * Generates a video thumbnail URL from the specified remote video and includes it in an image tag.
	     * @function Cloudinary#video_thumbnail
	     * @param {string} publicId - The unique identifier of the video from the relevant video site.
	     *  Additionally, either append the image extension type to the identifier value or set
	     *  the image delivery format in the 'options' parameter using the 'format' transformation option.
	     *  For example, a YouTube video might have the identifier: 'o-urnlaJpOA.jpg'.
	     * @param {Object} [options] - The {@link Transformation} parameters to apply.
	     * @return {HTMLImageElement} An HTML image tag element
	     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
	     *  Available video transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "video_thumbnail",
	    value: function video_thumbnail(publicId, options) {
	      return this.image(publicId, merge_root_merge_default()({}, DEFAULT_POSTER_OPTIONS, options));
	    }
	    /**
	     * Fetches a facebook profile image and delivers it in an image tag element.
	     * @function Cloudinary#facebook_profile_image
	     * @param {string} publicId - The Facebook numeric ID. Additionally, either append the image extension type
	     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
	     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {HTMLImageElement} An image tag element.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "facebook_profile_image",
	    value: function facebook_profile_image(publicId, options) {
	      return this.image(publicId, assign_root_assign_default()({
	        type: 'facebook'
	      }, options));
	    }
	    /**
	     * Fetches a Twitter profile image by ID and delivers it in an image tag element.
	     * @function Cloudinary#twitter_profile_image
	     * @param {string} publicId - The Twitter numeric ID. Additionally, either append the image extension type
	     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
	     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {HTMLImageElement} An image tag element.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "twitter_profile_image",
	    value: function twitter_profile_image(publicId, options) {
	      return this.image(publicId, assign_root_assign_default()({
	        type: 'twitter'
	      }, options));
	    }
	    /**
	     * Fetches a Twitter profile image by name and delivers it in an image tag element.
	     * @function Cloudinary#twitter_name_profile_image
	     * @param {string} publicId - The Twitter screen name. Additionally, either append the image extension type
	     *  to the screen name or set the image delivery format in the 'options' parameter using the 'format' transformation option.
	     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {HTMLImageElement} An image tag element.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "twitter_name_profile_image",
	    value: function twitter_name_profile_image(publicId, options) {
	      return this.image(publicId, assign_root_assign_default()({
	        type: 'twitter_name'
	      }, options));
	    }
	    /**
	     * Fetches a Gravatar profile image and delivers it in an image tag element.
	     * @function Cloudinary#gravatar_image
	     * @param {string} publicId - The calculated hash for the Gravatar email address.
	     *  Additionally, either append the image extension type to the screen name or set the image delivery format
	     *  in the 'options' parameter using the 'format' transformation option.
	     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {HTMLImageElement} An image tag element.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "gravatar_image",
	    value: function gravatar_image(publicId, options) {
	      return this.image(publicId, assign_root_assign_default()({
	        type: 'gravatar'
	      }, options));
	    }
	    /**
	     * Fetches an image from a remote URL and delivers it in an image tag element.
	     * @function Cloudinary#fetch_image
	     * @param {string} publicId - The full URL of the image to fetch, including the extension.
	     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {HTMLImageElement} An image tag element.
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "fetch_image",
	    value: function fetch_image(publicId, options) {
	      return this.image(publicId, assign_root_assign_default()({
	        type: 'fetch'
	      }, options));
	    }
	    /**
	     * Generates a video tag.
	     * @function Cloudinary#video
	     * @param {string} publicId - The public ID of the video.
	     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {HTMLVideoElement} A video tag DOM element.
	     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
	     *  Available video transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "video",
	    value: function video(publicId) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.videoTag(publicId, options).toHtml();
	    }
	    /**
	     * Creates a new VideoTag instance using the configuration defined for this `cloudinary` instance.
	     * @function Cloudinary#videoTag
	     * @param {string} publicId - The public ID of the video.
	     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
	     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
	     * @return {VideoTag} A VideoTag that is attached (chained) to this `cloudinary` instance.
	     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
	     *  Available video transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
	     *  target="_blank">Available configuration options</a>
	     */

	  }, {
	    key: "videoTag",
	    value: function videoTag(publicId, options) {
	      options = defaults({}, options, this.config());
	      return new videotag(publicId, options);
	    }
	    /**
	     * Generates a sprite PNG image that contains all images with the specified tag and the corresponding css file.
	     * @function Cloudinary#sprite_css
	     * @param {string} publicId - The tag on which to base the sprite image.
	     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
	     * @return {string} The URL of the generated CSS file. The sprite image has the same URL, but with a PNG extension.
	     * @see <a href="https://cloudinary.com/documentation/sprite_generation" target="_blank">
	     *  Sprite generation</a>
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     */

	  }, {
	    key: "sprite_css",
	    value: function sprite_css(publicId, options) {
	      options = assign_root_assign_default()({
	        type: 'sprite'
	      }, options);

	      if (!publicId.match(/.css$/)) {
	        options.format = 'css';
	      }

	      return this.url(publicId, options);
	    }
	    /**
	     * Initializes responsive image behavior for all image tags with the 'cld-responsive'
	     *  (or other defined {@link Cloudinary#responsive|responsive} class).<br/>
	     *  This method should be invoked after the page has loaded.<br/>
	     *  <b>Note</b>: Calls {@link Cloudinary#cloudinary_update|cloudinary_update} to modify image tags.
	     * @function Cloudinary#responsive
	     * @param {Object} options
	     * @param {String} [options.responsive_class='cld-responsive'] - An alternative class
	     *  to locate the relevant &lt;img&gt; tags.
	     * @param {number} [options.responsive_debounce=100] - The debounce interval in milliseconds.
	     * @param {boolean} [bootstrap=true] If true, processes the &lt;img&gt; tags by calling
	     *  {@link Cloudinary#cloudinary_update|cloudinary_update}. When false, the tags are processed
	     *  only after a resize event.
	     * @see {@link Cloudinary#cloudinary_update|cloudinary_update} for additional configuration parameters
	     * @see <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_javascript"
	     *  target="_blank">Automating responsive images with JavaScript</a>
	     */

	  }, {
	    key: "responsive",
	    value: function responsive(options) {
	      var _this = this;

	      var bootstrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var ref, ref1, ref2, responsiveClass, responsiveResize, timeout;
	      this.responsiveConfig = merge_root_merge_default()(this.responsiveConfig || {}, options);
	      responsiveClass = (ref = this.responsiveConfig['responsive_class']) != null ? ref : this.config('responsive_class');

	      if (bootstrap) {
	        this.cloudinary_update("img.".concat(responsiveClass, ", img.cld-hidpi"), this.responsiveConfig);
	      }

	      responsiveResize = (ref1 = (ref2 = this.responsiveConfig['responsive_resize']) != null ? ref2 : this.config('responsive_resize')) != null ? ref1 : true;

	      if (responsiveResize && !this.responsiveResizeInitialized) {
	        this.responsiveConfig.resizing = this.responsiveResizeInitialized = true;
	        timeout = null;
	        return window.addEventListener('resize', function () {
	          var debounce, ref3, ref4, reset, run, wait, waitFunc;
	          debounce = (ref3 = (ref4 = _this.responsiveConfig['responsive_debounce']) != null ? ref4 : _this.config('responsive_debounce')) != null ? ref3 : 100;

	          reset = function reset() {
	            if (timeout) {
	              clearTimeout(timeout);
	              return timeout = null;
	            }
	          };

	          run = function run() {
	            return _this.cloudinary_update("img.".concat(responsiveClass), _this.responsiveConfig);
	          };

	          waitFunc = function waitFunc() {
	            reset();
	            return run();
	          };

	          wait = function wait() {
	            reset();
	            return timeout = setTimeout(waitFunc, debounce);
	          };

	          if (debounce) {
	            return wait();
	          } else {
	            return run();
	          }
	        });
	      }
	    }
	    /**
	     * @function Cloudinary#calc_breakpoint
	     * @private
	     * @ignore
	     */

	  }, {
	    key: "calc_breakpoint",
	    value: function calc_breakpoint(element, width, steps) {
	      var breakpoints = lodash_getData(element, 'breakpoints') || lodash_getData(element, 'stoppoints') || this.config('breakpoints') || this.config('stoppoints') || defaultBreakpoints;

	      if (isFunction_root_isFunction_(breakpoints)) {
	        return breakpoints(width, steps);
	      } else {
	        if (isString_root_isString_default()(breakpoints)) {
	          breakpoints = breakpoints.split(',').map(function (point) {
	            return parseInt(point);
	          }).sort(function (a, b) {
	            return a - b;
	          });
	        }

	        return closestAbove(breakpoints, width);
	      }
	    }
	    /**
	     * @function Cloudinary#calc_stoppoint
	     * @deprecated Use {@link calc_breakpoint} instead.
	     * @private
	     * @ignore
	     */

	  }, {
	    key: "calc_stoppoint",
	    value: function calc_stoppoint(element, width, steps) {
	      return this.calc_breakpoint(element, width, steps);
	    }
	    /**
	     * @function Cloudinary#device_pixel_ratio
	     * @private
	     */

	  }, {
	    key: "device_pixel_ratio",
	    value: function device_pixel_ratio(roundDpr) {
	      roundDpr = roundDpr == null ? true : roundDpr;
	      var dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;

	      if (roundDpr) {
	        dpr = Math.ceil(dpr);
	      }

	      if (dpr <= 0 || dpr === 0 / 0) {
	        dpr = 1;
	      }

	      var dprString = dpr.toString();

	      if (dprString.match(/^\d+$/)) {
	        dprString += '.0';
	      }

	      return dprString;
	    }
	    /**
	    * Applies responsiveness to all <code>&lt;img&gt;</code> tags under each relevant node
	    *  (regardless of whether the tag contains the {@link Cloudinary#responsive|responsive} class).
	    * @param {Element[]} nodes The parent nodes where you want to search for &lt;img&gt; tags.
	    * @param {Object} [options] The {@link Cloudinary#cloudinary_update|cloudinary_update} options to apply.
	    * @see <a href="https://cloudinary.com/documentation/image_transformation_reference"
	    *  target="_blank">Available image transformations</a>
	    * @function Cloudinary#processImageTags
	    */

	  }, {
	    key: "processImageTags",
	    value: function processImageTags(nodes, options) {
	      if (isEmpty(nodes)) {
	        // similar to `$.fn.cloudinary`
	        return this;
	      }

	      options = defaults({}, options || {}, this.config());
	      var images = nodes.filter(function (node) {
	        return /^img$/i.test(node.tagName);
	      }).map(function (node) {
	        var imgOptions = assign_root_assign_default()({
	          width: node.getAttribute('width'),
	          height: node.getAttribute('height'),
	          src: node.getAttribute('src')
	        }, options);
	        var publicId = imgOptions['source'] || imgOptions['src'];
	        delete imgOptions['source'];
	        delete imgOptions['src'];
	        var attr = new src_transformation(imgOptions).toHtmlAttributes();
	        lodash_setData(node, 'src-cache', url_url(publicId, imgOptions));
	        node.setAttribute('width', attr.width);
	        node.setAttribute('height', attr.height);
	        return node;
	      });
	      this.cloudinary_update(images, options);
	      return this;
	    }
	    /**
	    * Updates the dpr (for `dpr_auto`) and responsive (for `w_auto`) fields according to
	    *  the current container size and the device pixel ratio.<br/>
	    *  <b>Note</b>:`w_auto` is updated only for images marked with the `cld-responsive`
	    *  (or other defined {@link Cloudinary#responsive|responsive}) class.
	    * @function Cloudinary#cloudinary_update
	    * @param {(Array|string|NodeList)} elements - The HTML image elements to modify.
	    * @param {Object} options
	    * @param {boolean|string} [options.responsive_use_breakpoints=true]
	    * Possible values:<br/>
	    *  - `true`: Always use breakpoints for width.<br/>
	    *  - `resize`: Use exact width on first render and breakpoints on resize.<br/>
	    *  - `false`: Always use exact width.
	    * @param {boolean} [options.responsive] - If `true`, enable responsive on all specified elements.
	    *  Alternatively, you can define specific HTML elements to modify by adding the `cld-responsive`
	    *  (or other custom-defined {@link Cloudinary#responsive|responsive_class}) class to those elements.
	    * @param {boolean} [options.responsive_preserve_height] - If `true`, original css height is preserved.
	    *  Should be used only if the transformation supports different aspect ratios.
	    */

	  }, {
	    key: "cloudinary_update",
	    value: function cloudinary_update(elements, options) {
	      var _this2 = this;

	      var containerWidth, dataSrc, match, ref4, requiredWidth;

	      if (elements === null) {
	        return this;
	      }

	      if (options == null) {
	        options = {};
	      }

	      var responsive = options.responsive != null ? options.responsive : this.config('responsive');

	      elements = function () {
	        switch (false) {
	          case !isArray_root_isArray_default()(elements):
	            return elements;

	          case elements.constructor.name !== "NodeList":
	            return elements;

	          case !isString_root_isString_default()(elements):
	            return Array.prototype.slice.call(document.querySelectorAll(elements), 0);

	          default:
	            return [elements];
	        }
	      }();

	      var responsiveClass;

	      if (this.responsiveConfig && this.responsiveConfig.responsive_class != null) {
	        responsiveClass = this.responsiveConfig.responsive_class;
	      } else if (options.responsive_class != null) {
	        responsiveClass = options.responsive_class;
	      } else {
	        responsiveClass = this.config('responsive_class');
	      }

	      var roundDpr = options.round_dpr != null ? options.round_dpr : this.config('round_dpr');
	      elements.forEach(function (tag) {
	        if (/img/i.test(tag.tagName)) {
	          var setUrl = true;

	          if (responsive) {
	            lodash_addClass(tag, responsiveClass);
	          }

	          dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');

	          if (!isEmpty(dataSrc)) {
	            // Update dpr according to the device's devicePixelRatio
	            dataSrc = updateDpr.call(_this2, dataSrc, roundDpr);

	            if (htmltag.isResponsive(tag, responsiveClass)) {
	              containerWidth = cloudinary_findContainerWidth(tag);

	              if (containerWidth !== 0) {
	                switch (false) {
	                  case !/w_auto:breakpoints/.test(dataSrc):
	                    requiredWidth = cloudinary_maxWidth(containerWidth, tag);
	                    dataSrc = dataSrc.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, "w_auto:breakpoints$1:".concat(requiredWidth));
	                    break;

	                  case !(match = /w_auto(:(\d+))?/.exec(dataSrc)):
	                    requiredWidth = applyBreakpoints.call(_this2, tag, containerWidth, match[2], options);
	                    requiredWidth = cloudinary_maxWidth(requiredWidth, tag);
	                    dataSrc = dataSrc.replace(/w_auto[^,\/]*/g, "w_".concat(requiredWidth));
	                }

	                lodash_removeAttribute(tag, 'width');

	                if (!options.responsive_preserve_height) {
	                  lodash_removeAttribute(tag, 'height');
	                }
	              } else {
	                // Container doesn't know the size yet - usually because the image is hidden or outside the DOM.
	                setUrl = false;
	              }
	            }

	            if (setUrl) {
	              lodash_setAttribute(tag, 'src', dataSrc);
	            }
	          }
	        }
	      });
	      return this;
	    }
	    /**
	     * Returns a {@link Transformation} object, initialized with the specified options, for chaining purposes.
	     * @function Cloudinary#transformation
	     * @param {Object} options The {@link Transformation} options to apply.
	     * @return {Transformation}
	     * @see Transformation
	     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
	     *  Available image transformations</a>
	     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
	     *  Available video transformations</a>
	     */

	  }, {
	    key: "transformation",
	    value: function transformation(options) {
	      return src_transformation["new"](this.config()).fromOptions(options).setParent(this);
	    }
	  }], [{
	    key: "new",
	    value: function _new(options) {
	      return new this(options);
	    }
	  }]);

	  return Cloudinary;
	}();

	assign_root_assign_default()(cloudinary_Cloudinary, constants_namespaceObject);
	/* harmony default export */ var cloudinary = (cloudinary_Cloudinary);
	// CONCATENATED MODULE: ./src/namespace/cloudinary-core.js
	/* concated harmony reexport ClientHintsMetaTag */__webpack_require__.d(__webpack_exports__, "ClientHintsMetaTag", function() { return clienthintsmetatag; });
	/* concated harmony reexport Cloudinary */__webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return cloudinary; });
	/* concated harmony reexport Condition */__webpack_require__.d(__webpack_exports__, "Condition", function() { return condition; });
	/* concated harmony reexport Configuration */__webpack_require__.d(__webpack_exports__, "Configuration", function() { return src_configuration; });
	/* concated harmony reexport crc32 */__webpack_require__.d(__webpack_exports__, "crc32", function() { return src_crc32; });
	/* concated harmony reexport FetchLayer */__webpack_require__.d(__webpack_exports__, "FetchLayer", function() { return fetchlayer; });
	/* concated harmony reexport HtmlTag */__webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return htmltag; });
	/* concated harmony reexport ImageTag */__webpack_require__.d(__webpack_exports__, "ImageTag", function() { return imagetag; });
	/* concated harmony reexport Layer */__webpack_require__.d(__webpack_exports__, "Layer", function() { return layer_layer; });
	/* concated harmony reexport PictureTag */__webpack_require__.d(__webpack_exports__, "PictureTag", function() { return picturetag; });
	/* concated harmony reexport SubtitlesLayer */__webpack_require__.d(__webpack_exports__, "SubtitlesLayer", function() { return subtitleslayer; });
	/* concated harmony reexport TextLayer */__webpack_require__.d(__webpack_exports__, "TextLayer", function() { return textlayer; });
	/* concated harmony reexport Transformation */__webpack_require__.d(__webpack_exports__, "Transformation", function() { return src_transformation; });
	/* concated harmony reexport utf8_encode */__webpack_require__.d(__webpack_exports__, "utf8_encode", function() { return src_utf8_encode; });
	/* concated harmony reexport Util */__webpack_require__.d(__webpack_exports__, "Util", function() { return lodash_namespaceObject; });
	/* concated harmony reexport VideoTag */__webpack_require__.d(__webpack_exports__, "VideoTag", function() { return videotag; });
	/**
	 * Creates the namespace for Cloudinary
	 */
















	/* harmony default export */ var cloudinary_core = __webpack_exports__["default"] = ({
	  ClientHintsMetaTag: clienthintsmetatag,
	  Cloudinary: cloudinary,
	  Condition: condition,
	  Configuration: src_configuration,
	  crc32: src_crc32,
	  FetchLayer: fetchlayer,
	  HtmlTag: htmltag,
	  ImageTag: imagetag,
	  Layer: layer_layer,
	  PictureTag: picturetag,
	  SubtitlesLayer: subtitleslayer,
	  TextLayer: textlayer,
	  Transformation: src_transformation,
	  utf8_encode: src_utf8_encode,
	  Util: lodash_namespaceObject,
	  VideoTag: videotag
	});


	/***/ }),

	/***/ "lodash/assign":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_assign__;

	/***/ }),

	/***/ "lodash/cloneDeep":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__;

	/***/ }),

	/***/ "lodash/compact":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_compact__;

	/***/ }),

	/***/ "lodash/difference":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_difference__;

	/***/ }),

	/***/ "lodash/functions":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_functions__;

	/***/ }),

	/***/ "lodash/identity":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_identity__;

	/***/ }),

	/***/ "lodash/includes":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_includes__;

	/***/ }),

	/***/ "lodash/isArray":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isArray__;

	/***/ }),

	/***/ "lodash/isElement":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isElement__;

	/***/ }),

	/***/ "lodash/isFunction":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__;

	/***/ }),

	/***/ "lodash/isPlainObject":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__;

	/***/ }),

	/***/ "lodash/isString":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isString__;

	/***/ }),

	/***/ "lodash/merge":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_merge__;

	/***/ }),

	/***/ "lodash/trim":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_trim__;

	/***/ })

	/******/ });
	});
	//# sourceMappingURL=cloudinary-core.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8).Buffer, __webpack_require__(12)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(9)
	var ieee754 = __webpack_require__(10)
	var isArray = __webpack_require__(11)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function getLens (b64) {
	  var len = b64.length

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=')
	  if (validLen === -1) validLen = len

	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4)

	  return [validLen, placeHoldersLen]
	}

	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function toByteArray (b64) {
	  var tmp
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]

	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

	  var curByte = 0

	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen

	  var i
	  for (i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)]
	    arr[curByte++] = (tmp >> 16) & 0xFF
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }

	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[curByte++] = tmp & 0xFF
	  }

	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF)
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(
	      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
	    ))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    )
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    )
	  }

	  return parts.join('')
	}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = ((value * c) - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(14),
	    copyObject = __webpack_require__(32),
	    createAssigner = __webpack_require__(33),
	    isArrayLike = __webpack_require__(43),
	    isPrototype = __webpack_require__(46),
	    keys = __webpack_require__(47);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(15),
	    eq = __webpack_require__(31);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(16);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(18),
	    getValue = __webpack_require__(30);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(19),
	    isMasked = __webpack_require__(27),
	    isObject = __webpack_require__(26),
	    toSource = __webpack_require__(29);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObject = __webpack_require__(26);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(21),
	    getRawTag = __webpack_require__(24),
	    objectToString = __webpack_require__(25);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(22);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(23);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(21);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(28);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(22);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(14),
	    baseAssignValue = __webpack_require__(15);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(34),
	    isIterateeCall = __webpack_require__(42);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(35),
	    overRest = __webpack_require__(36),
	    setToString = __webpack_require__(38);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(37);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(39),
	    shortOut = __webpack_require__(41);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(40),
	    defineProperty = __webpack_require__(16),
	    identity = __webpack_require__(35);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(31),
	    isArrayLike = __webpack_require__(43),
	    isIndex = __webpack_require__(45),
	    isObject = __webpack_require__(26);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(19),
	    isLength = __webpack_require__(44);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(48),
	    baseKeys = __webpack_require__(61),
	    isArrayLike = __webpack_require__(43);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(49),
	    isArguments = __webpack_require__(50),
	    isArray = __webpack_require__(53),
	    isBuffer = __webpack_require__(54),
	    isIndex = __webpack_require__(45),
	    isTypedArray = __webpack_require__(57);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(51),
	    isObjectLike = __webpack_require__(52);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObjectLike = __webpack_require__(52);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(22),
	    stubFalse = __webpack_require__(56);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(58),
	    baseUnary = __webpack_require__(59),
	    nodeUtil = __webpack_require__(60);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isLength = __webpack_require__(44),
	    isObjectLike = __webpack_require__(52);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(23);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(46),
	    nativeKeys = __webpack_require__(62);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(63);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(65);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	module.exports = cloneDeep;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(66),
	    arrayEach = __webpack_require__(95),
	    assignValue = __webpack_require__(14),
	    baseAssign = __webpack_require__(96),
	    baseAssignIn = __webpack_require__(97),
	    cloneBuffer = __webpack_require__(101),
	    copyArray = __webpack_require__(102),
	    copySymbols = __webpack_require__(103),
	    copySymbolsIn = __webpack_require__(107),
	    getAllKeys = __webpack_require__(111),
	    getAllKeysIn = __webpack_require__(113),
	    getTag = __webpack_require__(114),
	    initCloneArray = __webpack_require__(119),
	    initCloneByTag = __webpack_require__(120),
	    initCloneObject = __webpack_require__(127),
	    isArray = __webpack_require__(53),
	    isBuffer = __webpack_require__(54),
	    isMap = __webpack_require__(129),
	    isObject = __webpack_require__(26),
	    isSet = __webpack_require__(131),
	    keys = __webpack_require__(47);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(67),
	    stackClear = __webpack_require__(74),
	    stackDelete = __webpack_require__(75),
	    stackGet = __webpack_require__(76),
	    stackHas = __webpack_require__(77),
	    stackSet = __webpack_require__(78);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(68),
	    listCacheDelete = __webpack_require__(69),
	    listCacheGet = __webpack_require__(71),
	    listCacheHas = __webpack_require__(72),
	    listCacheSet = __webpack_require__(73);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(70);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(31);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(70);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(70);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(70);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(67);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(67),
	    Map = __webpack_require__(79),
	    MapCache = __webpack_require__(80);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17),
	    root = __webpack_require__(22);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(81),
	    mapCacheDelete = __webpack_require__(89),
	    mapCacheGet = __webpack_require__(92),
	    mapCacheHas = __webpack_require__(93),
	    mapCacheSet = __webpack_require__(94);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(82),
	    ListCache = __webpack_require__(67),
	    Map = __webpack_require__(79);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(83),
	    hashDelete = __webpack_require__(85),
	    hashGet = __webpack_require__(86),
	    hashHas = __webpack_require__(87),
	    hashSet = __webpack_require__(88);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(84);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(84);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(84);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(84);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(90);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(91);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(90);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(90);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(90);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(32),
	    keys = __webpack_require__(47);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(32),
	    keysIn = __webpack_require__(98);

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}

	module.exports = baseAssignIn;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(48),
	    baseKeysIn = __webpack_require__(99),
	    isArrayLike = __webpack_require__(43);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26),
	    isPrototype = __webpack_require__(46),
	    nativeKeysIn = __webpack_require__(100);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(22);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(32),
	    getSymbols = __webpack_require__(104);

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(105),
	    stubArray = __webpack_require__(106);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(32),
	    getSymbolsIn = __webpack_require__(108);

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}

	module.exports = copySymbolsIn;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(109),
	    getPrototype = __webpack_require__(110),
	    getSymbols = __webpack_require__(104),
	    stubArray = __webpack_require__(106);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(63);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(112),
	    getSymbols = __webpack_require__(104),
	    keys = __webpack_require__(47);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(109),
	    isArray = __webpack_require__(53);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(112),
	    getSymbolsIn = __webpack_require__(108),
	    keysIn = __webpack_require__(98);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(115),
	    Map = __webpack_require__(79),
	    Promise = __webpack_require__(116),
	    Set = __webpack_require__(117),
	    WeakMap = __webpack_require__(118),
	    baseGetTag = __webpack_require__(20),
	    toSource = __webpack_require__(29);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17),
	    root = __webpack_require__(22);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17),
	    root = __webpack_require__(22);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17),
	    root = __webpack_require__(22);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(17),
	    root = __webpack_require__(22);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(121),
	    cloneDataView = __webpack_require__(123),
	    cloneRegExp = __webpack_require__(124),
	    cloneSymbol = __webpack_require__(125),
	    cloneTypedArray = __webpack_require__(126);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return new Ctor;

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return new Ctor;

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(122);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(22);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(121);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(21);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(121);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(128),
	    getPrototype = __webpack_require__(110),
	    isPrototype = __webpack_require__(46);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMap = __webpack_require__(130),
	    baseUnary = __webpack_require__(59),
	    nodeUtil = __webpack_require__(60);

	/* Node.js helper references. */
	var nodeIsMap = nodeUtil && nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

	module.exports = isMap;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(114),
	    isObjectLike = __webpack_require__(52);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike(value) && getTag(value) == mapTag;
	}

	module.exports = baseIsMap;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsSet = __webpack_require__(132),
	    baseUnary = __webpack_require__(59),
	    nodeUtil = __webpack_require__(60);

	/* Node.js helper references. */
	var nodeIsSet = nodeUtil && nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

	module.exports = isSet;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(114),
	    isObjectLike = __webpack_require__(52);

	/** `Object#toString` result references. */
	var setTag = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike(value) && getTag(value) == setTag;
	}

	module.exports = baseIsSet;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	/**
	 * Creates an array with all falsey values removed. The values `false`, `null`,
	 * `0`, `""`, `undefined`, and `NaN` are falsey.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to compact.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */
	function compact(array) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (value) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = compact;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(135),
	    baseFlatten = __webpack_require__(147),
	    baseRest = __webpack_require__(34),
	    isArrayLikeObject = __webpack_require__(149);

	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([2, 1], [2, 3]);
	 * // => [1]
	 */
	var difference = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	    : [];
	});

	module.exports = difference;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(136),
	    arrayIncludes = __webpack_require__(139),
	    arrayIncludesWith = __webpack_require__(144),
	    arrayMap = __webpack_require__(145),
	    baseUnary = __webpack_require__(59),
	    cacheHas = __webpack_require__(146);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(80),
	    setCacheAdd = __webpack_require__(137),
	    setCacheHas = __webpack_require__(138);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(140);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(141),
	    baseIsNaN = __webpack_require__(142),
	    strictIndexOf = __webpack_require__(143);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(109),
	    isFlattenable = __webpack_require__(148);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(21),
	    isArguments = __webpack_require__(50),
	    isArray = __webpack_require__(53);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(43),
	    isObjectLike = __webpack_require__(52);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFunctions = __webpack_require__(151),
	    keys = __webpack_require__(47);

	/**
	 * Creates an array of function property names from own enumerable properties
	 * of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to inspect.
	 * @returns {Array} Returns the function names.
	 * @see _.functionsIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = _.constant('a');
	 *   this.b = _.constant('b');
	 * }
	 *
	 * Foo.prototype.c = _.constant('c');
	 *
	 * _.functions(new Foo);
	 * // => ['a', 'b']
	 */
	function functions(object) {
	  return object == null ? [] : baseFunctions(object, keys(object));
	}

	module.exports = functions;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(105),
	    isFunction = __webpack_require__(19);

	/**
	 * The base implementation of `_.functions` which creates an array of
	 * `object` function property names filtered from `props`.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} props The property names to filter.
	 * @returns {Array} Returns the function names.
	 */
	function baseFunctions(object, props) {
	  return arrayFilter(props, function(key) {
	    return isFunction(object[key]);
	  });
	}

	module.exports = baseFunctions;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(140),
	    isArrayLike = __webpack_require__(43),
	    isString = __webpack_require__(153),
	    toInteger = __webpack_require__(154),
	    values = __webpack_require__(158);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}

	module.exports = includes;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isArray = __webpack_require__(53),
	    isObjectLike = __webpack_require__(52);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	module.exports = isString;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(155);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(156);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26),
	    isSymbol = __webpack_require__(157);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    isObjectLike = __webpack_require__(52);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(159),
	    keys = __webpack_require__(47);

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}

	module.exports = values;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(145);

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	module.exports = baseValues;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(52),
	    isPlainObject = __webpack_require__(161);

	/**
	 * Checks if `value` is likely a DOM element.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	 * @example
	 *
	 * _.isElement(document.body);
	 * // => true
	 *
	 * _.isElement('<body>');
	 * // => false
	 */
	function isElement(value) {
	  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
	}

	module.exports = isElement;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(20),
	    getPrototype = __webpack_require__(110),
	    isObjectLike = __webpack_require__(52);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(163),
	    createAssigner = __webpack_require__(33);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	module.exports = merge;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(66),
	    assignMergeValue = __webpack_require__(164),
	    baseFor = __webpack_require__(165),
	    baseMergeDeep = __webpack_require__(167),
	    isObject = __webpack_require__(26),
	    keysIn = __webpack_require__(98),
	    safeGet = __webpack_require__(168);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	module.exports = baseMerge;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(15),
	    eq = __webpack_require__(31);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignMergeValue;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(166);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(164),
	    cloneBuffer = __webpack_require__(101),
	    cloneTypedArray = __webpack_require__(126),
	    copyArray = __webpack_require__(102),
	    initCloneObject = __webpack_require__(127),
	    isArguments = __webpack_require__(50),
	    isArray = __webpack_require__(53),
	    isArrayLikeObject = __webpack_require__(149),
	    isBuffer = __webpack_require__(54),
	    isFunction = __webpack_require__(19),
	    isObject = __webpack_require__(26),
	    isPlainObject = __webpack_require__(161),
	    isTypedArray = __webpack_require__(57),
	    safeGet = __webpack_require__(168),
	    toPlainObject = __webpack_require__(169);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	module.exports = safeGet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(32),
	    keysIn = __webpack_require__(98);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(171),
	    castSlice = __webpack_require__(172),
	    charsEndIndex = __webpack_require__(174),
	    charsStartIndex = __webpack_require__(175),
	    stringToArray = __webpack_require__(176),
	    toString = __webpack_require__(180);

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrim, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;

	  return castSlice(strSymbols, start, end).join('');
	}

	module.exports = trim;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(21),
	    arrayMap = __webpack_require__(145),
	    isArray = __webpack_require__(53),
	    isSymbol = __webpack_require__(157);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(173);

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	module.exports = castSlice;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(140);

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;

	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	module.exports = charsEndIndex;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(140);

	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;

	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	module.exports = charsStartIndex;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var asciiToArray = __webpack_require__(177),
	    hasUnicode = __webpack_require__(178),
	    unicodeToArray = __webpack_require__(179);

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return hasUnicode(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}

	module.exports = stringToArray;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	module.exports = asciiToArray;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	module.exports = hasUnicode;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	module.exports = unicodeToArray;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(171);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    props: ['post', 'data'],

	    sidebar: {
	        label: "Image",
	        priority: 15,
	        options: {
	            panel: '',
	            title: false
	        }
	    },

	    components: {
	        inputCloudinaryMeta: __webpack_require__(189)
	    }
	};

	window.Posts.components['sidebarImages'] = module.exports;

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	module.exports = "\n<div>\n    <div>\n        <input-cloudinary-meta :image.sync=\"post.data.style.image\" width=\"100%\" class=\"pk-max-height\"></input-cloudinary-meta>\n    </div>\n    <div v-if=\"post.style == 1\">\n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{'Youtube ID' | trans}}</label>\n            <div class=\"uk-form-controls\">\n                <input type=\"text\" class=\"uk-width-1-1\" v-model=\"post.data.style.video\">\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\" v-if=\"post.data.style.video\">\n            <iframe width=\"100%\" height=\"auto\" :src=\"`https://www.youtube-nocookie.com/embed/${post.data.style.video}`\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n    </div>\n</div>\n";

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(190)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/module/input-cloudinary-meta.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(191)
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
	  var id = "_v-72059480/input-cloudinary-meta.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    props: {
	        class: {
	            type: String,
	            default: ''
	        },
	        image: Object
	    },

	    mixins: [__webpack_require__(6)],

	    data: function data() {
	        return _.merge({ img: {} }, $pagekit);
	    },

	    ready: function ready() {

	        this.$set('image', this.image || {
	            src: '',
	            alt: '',
	            id: '',
	            cl: {
	                format: 'webp',
	                quality: 20,
	                width: null,
	                height: null,
	                crop: 'fit'
	            }
	        });

	        this.$set('img', _.extend({}, this.image));

	        this.$on('image-selected', function (path) {

	            if (path && !this.img.alt) {

	                var alt = path.split('/').slice(-1)[0].replace(/\.(jpeg|jpg|png|svg|gif)$/i, '').replace(/(_|-)/g, ' ').trim(),
	                    first = alt.charAt(0).toUpperCase();

	                this.img.alt = first + alt.substr(1);
	            }
	        });
	    },

	    methods: {

	        pick: function pick() {
	            this.img = this.image;
	            this.$refs.modal.open();
	        },

	        update: function update() {
	            this.img.src = this.showImage(this.img.id, this.img.cl);
	            this.image = this.img;
	            this.$refs.modal.close();
	        },

	        remove: function remove() {
	            this.img.src = '';
	            this.image.src = '';

	            this.img.id = '';
	            this.image.id = '';
	        }
	    }

	};

	Vue.component('input-image-meta', function (resolve, reject) {
	    Vue.asset({
	        js: ['app/assets/uikit/js/components/upload.min.js', 'app/system/modules/finder/app/bundle/panel-finder.js']
	    }).then(function () {
	        resolve(module.exports);
	    });
	});

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	module.exports = "\n\n<a class=\"uk-placeholder uk-text-center uk-display-block uk-margin-remove\" v-if=\"!image.src\" @click.prevent=\"pick\">\n    <img width=\"60\" height=\"60\" :alt=\"'Placeholder Image' | trans\" :src=\"$url('app/system/assets/images/placeholder-image.svg')\">\n\n    <p class=\"uk-text-muted uk-margin-small-top\">{{ 'Add Image' | trans }}</p>\n</a>\n\n<div class=\"uk-overlay uk-overlay-hover uk-visible-hover\" v-else>\n\n    <img :src=\"$url(image.src)\">\n\n    <div class=\"uk-overlay-panel uk-overlay-background uk-overlay-fade\"></div>\n\n    <a class=\"uk-position-cover\" @click.prevent=\"pick\"></a>\n\n    <div class=\"uk-panel-badge pk-panel-badge uk-hidden\">\n        <ul class=\"uk-subnav pk-subnav-icon\">\n            <li>\n                <a class=\"pk-icon-delete pk-icon-hover\" :title=\"'Delete' | trans\" data-uk-tooltip=\"{delay: 500}\" @click.prevent=\"remove\"></a>\n            </li>\n        </ul>\n    </div>\n\n</div>\n\n<v-modal v-ref:modal>\n    <form class=\"uk-form uk-form-stacked\" @submit.prevent=\"update\">\n\n        <div class=\"uk-modal-header\">\n            <h2>{{ 'Add cloudinary' | trans }}</h2>\n        </div>\n\n        <div class=\"uk-form-row\" v-show=\"img.id\">\n            <img :src=\"showImage(img.id)\" width=\"100%\" class=\"pk-height-max-height\">\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-src\" class=\"uk-form-label\">{{ 'Image Id' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-src\" class=\"uk-width-1-1\" type=\"text\" v-model=\"img.id\" lazy>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Alt' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-alt\" class=\"uk-width-1-1\" type=\"text\" v-model=\"img.alt\">\n            </div>\n        </div>\n\n        <div class=\"uk-grid uk-grid-small uk-grid-width-1-4 uk-form-row\">\n            <div>\n                <div class=\"uk-form-row\">\n                    <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Format' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-width-1-1\" v-model=\"img.cl.format\">\n                            <option value=\"webp\">Webp</option>\n                            <option value=\"jpg\">Jpg</option>\n                            <option value=\"png\">Png</option>\n                            <option value=\"gif\">Gif</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div class=\"uk-form-row\">\n                    <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Quality' | trans }}</label>\n                    <div class=\"uk-width-1-1 uk-form-controls\">\n                        <input class=\"uk-width-1-1\" type=\"text\" min=\"0\" max=\"99\" v-model=\"img.cl.quality\">\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div class=\"uk-form-row\">\n                    <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Width' | trans }}</label>\n                    <div class=\"uk-width-1-1 uk-form-controls\">\n                        <input class=\"uk-width-1-1\" type=\"text\" v-model=\"img.cl.width\">\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div class=\"uk-form-row\">\n                    <label for=\"form-alt\" class=\"uk-form-label\">{{ 'Height' | trans }}</label>\n                    <div class=\"uk-width-1-1 uk-form-controls\">\n                        <input class=\"uk-width-1-1\" type=\"text\" v-model=\"img.cl.height\">\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\" v-show=\"img.data.id\">\n            <pre><code>{{showImage(img.id , img.cl)}}</code></pre>\n        </div>\n\n        <div class=\"uk-modal-footer uk-text-right\">\n            <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\n            <button class=\"uk-button uk-button-link\" type=\"submit\">{{ 'Update' | trans }}</button>\n        </div>\n\n    </form>\n</v-modal>\n\n";

/***/ })
/******/ ]);