"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var await_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(889);
/* harmony import */ var await_sleep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(await_sleep__WEBPACK_IMPORTED_MODULE_1__);


function Home(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Welcome to our homepage."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "The weather: ",
                    props.forecast
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast");
    const data = await response.json();
    await await_sleep__WEBPACK_IMPORTED_MODULE_1___default()(3000);
    // note that when you reload the page it takes 3 second to reload, because every time you request this page it will be pre-rendered with getServerSideProps
    return {
        props: {
            forecast: data.properties.periods[0].detailedForecast
        }
    };
} // getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps, then:
 // - When you request this page directly, getServerSideProps runs at request time, and this page will be pre-rendered with the returned props
 // - When you request this page on client-side page transitions through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps
 // - There is no caching going on, nothing static going on. It's fully server side dinamic


/***/ }),

/***/ 889:
/***/ ((module) => {

module.exports = require("await-sleep");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(369));
module.exports = __webpack_exports__;

})();