/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.getElementById('content');

const page = document.createElement('div');
page.id = 'page'
content.appendChild(page);

function topNav() {
    const top = document.createElement('div');
    top.id = 'top';
    page.appendChild(top);

    const test = document.createElement('p');
    test.innerText = 'This is maybe working';
    top.appendChild(test);

    return top;
}

function sideBar() {
    const side = document.createElement('div');
    side.id = 'side';
    page.appendChild(side);

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-btn';
    const homeSpan = document.createTextNode('Home');
    homeBtn.appendChild(homeSpan);
    side.appendChild(homeBtn);

    const weekBtn = document.createElement('button');
    weekBtn.id=  'week-btn';
    const weekSpan = document.createTextNode('This Week');
    weekBtn.appendChild(weekSpan);
    side.appendChild(weekBtn);
}

function mainArea() {
    const main = document.createElement('div');
    main.id = 'main';
    page.appendChild(main);

    const test = document.createElement('p');
    test.id = 'test';
    test.innerText = 'This is working';
    main.appendChild(test);
}

function weekArea() {
    const week = document.createElement('div');
    week.id = 'week';
    page.appendChild(week);

    const test = document.createElement('p');
    test.id = 'test';
    test.innerText = 'This is working';
    week.appendChild(test);
}

function loadPage() {
    topNav();
    sideBar();
    mainArea();
    weekArea();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_load_page_js__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;