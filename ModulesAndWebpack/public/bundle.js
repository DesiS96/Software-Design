/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ops.ts":
/*!********************!*\
  !*** ./src/Ops.ts ***!
  \********************/
/*! exports provided: Ops */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ops\", function() { return Ops; });\nclass Ops {\r\n    static Power(a, exp) {\r\n        let result = 1;\r\n        for (let i = 0; i < exp; i++) {\r\n            result *= a;\r\n        }\r\n        return result;\r\n    }\r\n    static GreatestCommonDenominator(a, b) {\r\n        if (a < b) {\r\n            let tmp = a;\r\n            a = b;\r\n            b = tmp;\r\n        }\r\n        while (b > 0) {\r\n            let c = a % b;\r\n            a = b;\r\n            b = c;\r\n        }\r\n        return a;\r\n    }\r\n    static Add(a, b) {\r\n        let result = a + b;\r\n        return result;\r\n    }\r\n    static Sub(a, b) {\r\n        let result = a - b;\r\n        return result;\r\n    }\r\n    static Mult(a, b) {\r\n        let result = a * b;\r\n        return result;\r\n    }\r\n    static Div(a, b) {\r\n        let result = a / b;\r\n        return result;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3BzLnRzPzQyNDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL09wcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBPcHMge1xyXG4gICAgc3RhdGljIFBvd2VyKGEsIGV4cCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0ICo9IGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgR3JlYXRlc3RDb21tb25EZW5vbWluYXRvcihhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEgPCBiKSB7XHJcbiAgICAgICAgICAgIGxldCB0bXAgPSBhO1xyXG4gICAgICAgICAgICBhID0gYjtcclxuICAgICAgICAgICAgYiA9IHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGIgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gYSAlIGI7XHJcbiAgICAgICAgICAgIGEgPSBiO1xyXG4gICAgICAgICAgICBiID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgQWRkKGEsIGIpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYSArIGI7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBTdWIoYSwgYikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhIC0gYjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIE11bHQoYSwgYikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhICogYjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIERpdihhLCBiKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGEgLyBiO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Ops.ts\n");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ops */ \"./src/Ops.ts\");\n\r\nconsole.log(\"Welcome to the Calculator. Start entering calculations!\");\r\nwhile (true) {\r\n    //input\r\n    let userCommand = prompt(\"> \");\r\n    if (userCommand == \"exit\") {\r\n        break;\r\n    }\r\n    else {\r\n        let left = 0;\r\n        let right = 0;\r\n        let opInx = 0;\r\n        let opSymbol = \"\";\r\n        if (userCommand != null) {\r\n            if (userCommand.includes(\"+\") || userCommand.includes(\"-\") || userCommand.includes(\"/\") || userCommand.includes(\"*\") || userCommand.includes(\"^\") || userCommand.includes(\"#\")) {\r\n                for (let i = 0; i < userCommand.length; i++) {\r\n                    if (userCommand[i] == \"+\" || userCommand[i] == \"-\" || userCommand[i] == \"/\" || userCommand[i] == \"*\" || userCommand[i] == \"^\" || userCommand[i] == \"#\") {\r\n                        opSymbol = userCommand[i];\r\n                        opInx = i;\r\n                        if (opInx < 0) {\r\n                            console.log(\"No operator specified\");\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        let result = 0;\r\n        switch (opSymbol) {\r\n            case \"+\":\r\n                result = _Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].Add(left, right);\r\n                break;\r\n            case \"-\":\r\n                result = _Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].Sub(left, right);\r\n                break;\r\n            case \"*\":\r\n                result = _Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].Mult(left, right);\r\n                break;\r\n            case \"/\":\r\n                result = _Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].Div(left, right);\r\n                break;\r\n            case \"^\":\r\n                result = _Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].Power(left, right);\r\n                break;\r\n            case \"#\":\r\n                result = _Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].GreatestCommonDenominator(left, right);\r\n                break;\r\n        }\r\n        console.log(\"Resultat: \" + result);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cz83OTRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3QkFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQUc7QUFDNUI7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBRztBQUM1QjtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHO0FBQzVCO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQUc7QUFDNUI7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBRztBQUM1QjtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wcyB9IGZyb20gXCIuL09wc1wiO1xyXG5jb25zb2xlLmxvZyhcIldlbGNvbWUgdG8gdGhlIENhbGN1bGF0b3IuIFN0YXJ0IGVudGVyaW5nIGNhbGN1bGF0aW9ucyFcIik7XHJcbndoaWxlICh0cnVlKSB7XHJcbiAgICAvL2lucHV0XHJcbiAgICBsZXQgdXNlckNvbW1hbmQgPSBwcm9tcHQoXCI+IFwiKTtcclxuICAgIGlmICh1c2VyQ29tbWFuZCA9PSBcImV4aXRcIikge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xyXG4gICAgICAgIGxldCByaWdodCA9IDA7XHJcbiAgICAgICAgbGV0IG9wSW54ID0gMDtcclxuICAgICAgICBsZXQgb3BTeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgIGlmICh1c2VyQ29tbWFuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQ29tbWFuZC5pbmNsdWRlcyhcIitcIikgfHwgdXNlckNvbW1hbmQuaW5jbHVkZXMoXCItXCIpIHx8IHVzZXJDb21tYW5kLmluY2x1ZGVzKFwiL1wiKSB8fCB1c2VyQ29tbWFuZC5pbmNsdWRlcyhcIipcIikgfHwgdXNlckNvbW1hbmQuaW5jbHVkZXMoXCJeXCIpIHx8IHVzZXJDb21tYW5kLmluY2x1ZGVzKFwiI1wiKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyQ29tbWFuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyQ29tbWFuZFtpXSA9PSBcIitcIiB8fCB1c2VyQ29tbWFuZFtpXSA9PSBcIi1cIiB8fCB1c2VyQ29tbWFuZFtpXSA9PSBcIi9cIiB8fCB1c2VyQ29tbWFuZFtpXSA9PSBcIipcIiB8fCB1c2VyQ29tbWFuZFtpXSA9PSBcIl5cIiB8fCB1c2VyQ29tbWFuZFtpXSA9PSBcIiNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcFN5bWJvbCA9IHVzZXJDb21tYW5kW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcElueCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcElueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gb3BlcmF0b3Igc3BlY2lmaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICAgIHN3aXRjaCAob3BTeW1ib2wpIHtcclxuICAgICAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IE9wcy5BZGQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPcHMuU3ViKGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gT3BzLk11bHQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBPcHMuRGl2KGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiXlwiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gT3BzLlBvd2VyKGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiI1wiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gT3BzLkdyZWF0ZXN0Q29tbW9uRGVub21pbmF0b3IobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0YXQ6IFwiICsgcmVzdWx0KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ });