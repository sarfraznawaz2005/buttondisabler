(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("buttondisabler", [], factory);
	else if(typeof exports === 'object')
		exports["buttondisabler"] = factory();
	else
		root["buttondisabler"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Author: Sarfraz Ahmed
http://codeinphp.github.io/
*/
var buttondisabler =
/*#__PURE__*/
function () {
  function buttondisabler() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$selector = _ref.selector,
        selector = _ref$selector === void 0 ? 'button[type="submit"], input[type="submit"]' : _ref$selector,
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === void 0 ? 5000 : _ref$timeout,
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? 'Wait...' : _ref$text;

    _classCallCheck(this, buttondisabler);

    this.selector = selector;
    this.timeout = timeout;
    this.text = text;
    this.bind();
  }

  _createClass(buttondisabler, [{
    key: "bind",
    value: function bind() {
      var _this = this;

      var fields = document.querySelectorAll(this.selector);
      fields.forEach(function (field) {
        field.addEventListener('click', function (e) {
          var buttonText = '';
          var nodeName = e.target.nodeName; // change text

          if (nodeName.toLowerCase() === 'button') {
            buttonText = field.innerHTML;
            field.innerHTML = _this.text;
          } else {
            buttonText = field.value;
            field.value = _this.text;
          } // restore original text and enable back


          setTimeout(function () {
            field.disabled = false;

            if (buttonText) {
              if (nodeName.toLowerCase() === 'button') {
                field.innerHTML = buttonText;
              } else {
                field.value = buttonText;
              }
            }
          }, _this.timeout);
          setTimeout(function () {
            field.disabled = true;
          }, 10);
          return true;
        });
      });
    }
  }]);

  return buttondisabler;
}();

exports.default = buttondisabler;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXR0b25kaXNhYmxlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYnV0dG9uZGlzYWJsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnV0dG9uZGlzYWJsZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYnV0dG9uZGlzYWJsZXIiLCJzZWxlY3RvciIsInRpbWVvdXQiLCJ0ZXh0IiwiYmluZCIsImZpZWxkcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJmaWVsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnV0dG9uVGV4dCIsIm5vZGVOYW1lIiwidGFyZ2V0IiwidG9Mb3dlckNhc2UiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0lBS3FCQSxjOzs7QUFFbkIsNEJBSVE7QUFBQSxtRkFBSixFQUFJO0FBQUEsNkJBSE5DLFFBR007QUFBQSxRQUhOQSxRQUdNLDhCQUhLLDZDQUdMO0FBQUEsNEJBRk5DLE9BRU07QUFBQSxRQUZOQSxPQUVNLDZCQUZJLElBRUo7QUFBQSx5QkFETkMsSUFDTTtBQUFBLFFBRE5BLElBQ00sMEJBREMsU0FDRDs7QUFBQTs7QUFDTixTQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUVBLFNBQUtDLElBQUw7QUFDRDs7OzsyQkFFTTtBQUFBOztBQUNMLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixLQUFLTixRQUEvQixDQUFmO0FBRUFJLFlBQU0sQ0FBQ0csT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBVztBQUV4QkEsYUFBSyxDQUFDQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDQyxDQUFELEVBQU87QUFDckMsY0FBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsY0FBTUMsUUFBUSxHQUFHRixDQUFDLENBQUNHLE1BQUYsQ0FBU0QsUUFBMUIsQ0FGcUMsQ0FJckM7O0FBQ0EsY0FBSUEsUUFBUSxDQUFDRSxXQUFULE9BQTJCLFFBQS9CLEVBQXlDO0FBQ3ZDSCxzQkFBVSxHQUFHSCxLQUFLLENBQUNPLFNBQW5CO0FBQ0FQLGlCQUFLLENBQUNPLFNBQU4sR0FBa0IsS0FBSSxDQUFDYixJQUF2QjtBQUNELFdBSEQsTUFHTztBQUNMUyxzQkFBVSxHQUFHSCxLQUFLLENBQUNRLEtBQW5CO0FBQ0FSLGlCQUFLLENBQUNRLEtBQU4sR0FBYyxLQUFJLENBQUNkLElBQW5CO0FBQ0QsV0FYb0MsQ0FhckM7OztBQUNBZSxvQkFBVSxDQUFDLFlBQU07QUFDZlQsaUJBQUssQ0FBQ1UsUUFBTixHQUFpQixLQUFqQjs7QUFFQSxnQkFBSVAsVUFBSixFQUFnQjtBQUNkLGtCQUFJQyxRQUFRLENBQUNFLFdBQVQsT0FBMkIsUUFBL0IsRUFBeUM7QUFDdkNOLHFCQUFLLENBQUNPLFNBQU4sR0FBa0JKLFVBQWxCO0FBQ0QsZUFGRCxNQUVPO0FBQ0xILHFCQUFLLENBQUNRLEtBQU4sR0FBY0wsVUFBZDtBQUNEO0FBQ0Y7QUFFRixXQVhTLEVBV1AsS0FBSSxDQUFDVixPQVhFLENBQVY7QUFhQWdCLG9CQUFVLENBQUMsWUFBTTtBQUNmVCxpQkFBSyxDQUFDVSxRQUFOLEdBQWlCLElBQWpCO0FBQ0QsV0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUlBLGlCQUFPLElBQVA7QUFDRCxTQWhDRDtBQWlDRCxPQW5DRDtBQW9DRCIsImZpbGUiOiJidXR0b25kaXNhYmxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYnV0dG9uZGlzYWJsZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYnV0dG9uZGlzYWJsZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYnV0dG9uZGlzYWJsZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKlxuQXV0aG9yOiBTYXJmcmF6IEFobWVkXG5odHRwOi8vY29kZWlucGhwLmdpdGh1Yi5pby9cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJ1dHRvbmRpc2FibGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgc2VsZWN0b3IgPSAnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgIHRpbWVvdXQgPSA1MDAwLFxuICAgIHRleHQgPSAnV2FpdC4uLidcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcblxuICAgIHRoaXMuYmluZCgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG5cbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGJ1dHRvblRleHQgPSAnJztcbiAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBlLnRhcmdldC5ub2RlTmFtZTtcblxuICAgICAgICAvLyBjaGFuZ2UgdGV4dFxuICAgICAgICBpZiAobm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICBidXR0b25UZXh0ID0gZmllbGQuaW5uZXJIVE1MO1xuICAgICAgICAgIGZpZWxkLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidXR0b25UZXh0ID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIHRleHQgYW5kIGVuYWJsZSBiYWNrXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGZpZWxkLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoYnV0dG9uVGV4dCkge1xuICAgICAgICAgICAgaWYgKG5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgIGZpZWxkLmlubmVySFRNTCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaWVsZC52YWx1ZSA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIHRoaXMudGltZW91dCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==