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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var await_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! await-sleep */ \"await-sleep\");\n/* harmony import */ var await_sleep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(await_sleep__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Welcome to our homepage.\"\n            }, void 0, false, {\n                fileName: \"/Volumes/Intenso/learning_next/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.\"\n            }, void 0, false, {\n                fileName: \"/Volumes/Intenso/learning_next/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"The weather: \",\n                    props.forecast\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Intenso/learning_next/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Intenso/learning_next/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps() {\n    const response = await fetch(\"https://api.weather.gov/gridpoints/MFL/109,49/forecast\");\n    const data = await response.json();\n    await await_sleep__WEBPACK_IMPORTED_MODULE_1___default()(3000);\n    // note that when you reload the page it takes 3 second to reload, because every time you request this page it will be pre-rendered with getServerSideProps\n    return {\n        props: {\n            forecast: data.properties.periods[0].detailedForecast\n        }\n    };\n} // getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps, then:\n // - When you request this page directly, getServerSideProps runs at request time, and this page will be pre-rendered with the returned props\n // - When you request this page on client-side page transitions through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps\n // - There is no caching going on, nothing static going on. It's fully server side dinamic\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBRWhCLFNBQVNDLEtBQUtDLEtBQUssRUFBRTtJQUNsQyxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQU9ILDhEQUFDQTs7b0JBQUU7b0JBQWNILE1BQU1JLFFBQVE7Ozs7Ozs7Ozs7Ozs7QUFHckMsQ0FBQztBQUVNLGVBQWVDLHFCQUFxQjtJQUN6QyxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCO0lBRUYsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBRWhDLE1BQU1YLGtEQUFLQSxDQUFDO0lBQ1osMkpBQTJKO0lBRTNKLE9BQU87UUFDTEUsT0FBTztZQUNMSSxVQUFVSSxLQUFLRSxVQUFVLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUdDLGdCQUFnQjtRQUN6RDtJQUNGO0FBQ0YsQ0FBQyxDQUVELHNIQUFzSDtDQUV0SCw2SUFBNkk7Q0FDN0ksMktBQTJLO0NBQzNLLDBGQUEwRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nX25leHQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbGVlcCBmcm9tICdhd2FpdC1zbGVlcCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+V2VsY29tZSB0byBvdXIgaG9tZXBhZ2UuPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIHRoZSBiZXN0IGhvbWUgcGFnZSBpbiB0aGUgd29ybGQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LFxuICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFYXJ1bSBhc3Blcm5hdHVyIGlsbHVtIGFyY2hpdGVjdG8gY3VtcXVlXG4gICAgICAgIHJlY3VzYW5kYWUgZnVnYSBzZXF1aSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSByZXBlbGxhdCBoYXJ1bSBub2JpcyxcbiAgICAgICAgZG9sb3IgdmVuaWFtIHZlcm8gZGVzZXJ1bnQuIFZvbHVwdGF0aWJ1cywgZHVjaW11cyBkZXNlcnVudC4gUmVjdXNhbmRhZSxcbiAgICAgICAgZG9sb3JlLlxuICAgICAgPC9wPlxuICAgICAgPHA+VGhlIHdlYXRoZXI6IHtwcm9wcy5mb3JlY2FzdH08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9hcGkud2VhdGhlci5nb3YvZ3JpZHBvaW50cy9NRkwvMTA5LDQ5L2ZvcmVjYXN0J1xuICApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgXG4gIGF3YWl0IHNsZWVwKDMwMDApXG4gIC8vIG5vdGUgdGhhdCB3aGVuIHlvdSByZWxvYWQgdGhlIHBhZ2UgaXQgdGFrZXMgMyBzZWNvbmQgdG8gcmVsb2FkLCBiZWNhdXNlIGV2ZXJ5IHRpbWUgeW91IHJlcXVlc3QgdGhpcyBwYWdlIGl0IHdpbGwgYmUgcHJlLXJlbmRlcmVkIHdpdGggZ2V0U2VydmVyU2lkZVByb3BzXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZm9yZWNhc3Q6IGRhdGEucHJvcGVydGllcy5wZXJpb2RzWzBdICAuZGV0YWlsZWRGb3JlY2FzdCxcbiAgICB9LFxuICB9XG59XG5cbi8vIGdldFNlcnZlclNpZGVQcm9wcyBvbmx5IHJ1bnMgb24gc2VydmVyLXNpZGUgYW5kIG5ldmVyIHJ1bnMgb24gdGhlIGJyb3dzZXIuIElmIGEgcGFnZSB1c2VzIGdldFNlcnZlclNpZGVQcm9wcywgdGhlbjpcblxuLy8gLSBXaGVuIHlvdSByZXF1ZXN0IHRoaXMgcGFnZSBkaXJlY3RseSwgZ2V0U2VydmVyU2lkZVByb3BzIHJ1bnMgYXQgcmVxdWVzdCB0aW1lLCBhbmQgdGhpcyBwYWdlIHdpbGwgYmUgcHJlLXJlbmRlcmVkIHdpdGggdGhlIHJldHVybmVkIHByb3BzXG4vLyAtIFdoZW4geW91IHJlcXVlc3QgdGhpcyBwYWdlIG9uIGNsaWVudC1zaWRlIHBhZ2UgdHJhbnNpdGlvbnMgdGhyb3VnaCBuZXh0L2xpbmsgb3IgbmV4dC9yb3V0ZXIsIE5leHQuanMgc2VuZHMgYW4gQVBJIHJlcXVlc3QgdG8gdGhlIHNlcnZlciwgd2hpY2ggcnVucyBnZXRTZXJ2ZXJTaWRlUHJvcHNcbi8vIC0gVGhlcmUgaXMgbm8gY2FjaGluZyBnb2luZyBvbiwgbm90aGluZyBzdGF0aWMgZ29pbmcgb24uIEl0J3MgZnVsbHkgc2VydmVyIHNpZGUgZGluYW1pY1xuXG4iXSwibmFtZXMiOlsic2xlZXAiLCJIb21lIiwicHJvcHMiLCJkaXYiLCJoMiIsInAiLCJmb3JlY2FzdCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BlcnRpZXMiLCJwZXJpb2RzIiwiZGV0YWlsZWRGb3JlY2FzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "await-sleep":
/*!******************************!*\
  !*** external "await-sleep" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("await-sleep");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();