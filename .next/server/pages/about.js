"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"About Us\"\n            }, void 0, false, {\n                fileName: \"/Volumes/Intenso/learning_next/pages/about.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?\"\n            }, void 0, false, {\n                fileName: \"/Volumes/Intenso/learning_next/pages/about.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"I have \",\n                    props.repoCount,\n                    \" public repos on GitHub.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Intenso/learning_next/pages/about.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps() {\n    const response = await fetch(\"https://api.github.com/users/parrodiv\");\n    const data = await response.json();\n    return {\n        props: {\n            repoCount: data.public_repos\n        },\n        revalidate: 10\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLFNBQVNBLE1BQU1DLEtBQUssRUFBRTtJQUNuQyxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBTUgsOERBQUNBOztvQkFBRTtvQkFBUUYsTUFBTUcsU0FBUztvQkFBQzs7Ozs7Ozs7O0FBR2pDLENBQUM7QUFFTSxlQUFlQyxpQkFBaUI7SUFDckMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQyxPQUFPO1FBQ0xSLE9BQU87WUFDTEcsV0FBV0ksS0FBS0UsWUFBWTtRQUM5QjtRQUNBQyxZQUFZO0lBR2Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5pbmdfbmV4dC8uL3BhZ2VzL2Fib3V0LmpzPzBjNDAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPkFib3V0IFVzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBXZWxjb21lIHRvIHRoaXMgYW1hemluZyBhYm91dCBwYWdlLiBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXRcbiAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUG9ycm8gZG9sb3JlIG9mZmljaWlzIGF0cXVlIHZvbHVwdGFzLFxuICAgICAgICBxdWFzLCByZXBlbGxlbmR1cyBjdW0sIG1hZ25hbSBhIGFsaWFzIHVuZGUgcmVpY2llbmRpcyB2b2x1cHRhdGVzIGFsaXF1YW1cbiAgICAgICAgbWF4aW1lIGxhYm9ydW0/IFF1YWUgb21uaXMgZWl1cyBpbXBlZGl0IGV0P1xuICAgICAgPC9wPlxuICAgICAgPHA+SSBoYXZlIHtwcm9wcy5yZXBvQ291bnR9IHB1YmxpYyByZXBvcyBvbiBHaXRIdWIuPC9wPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9wYXJyb2RpdicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXBvQ291bnQ6IGRhdGEucHVibGljX3JlcG9zLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTBcblxuICAgIC8vIHJldmFsaWRhdGUgMTAgbWVhbnMgdGhhdCBldmVyeSAxMCBzZWNvbmRzIG5leHQgZmV0Y2ggZGF0YSBmcm9tIHRoZSBBUEkgYW5kIHdoZW4gcmVmcmVzaGluZyBwYWdlLCBzbyB3aGVuIHRoZSByZXF1ZXN0IGlzIG1hZGUsIHRoZSBkYXRhIHdpbGwgYmUgdXBkYXRlZFxuICB9XG59XG4iXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsImgyIiwicCIsInJlcG9Db3VudCIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHVibGljX3JlcG9zIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/about.js"));
module.exports = __webpack_exports__;

})();