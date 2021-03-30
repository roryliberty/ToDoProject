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
/* harmony import */ var _main_area_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function loadPage() {
    const content = document.getElementById('content');

    // container for the page elements
    const page = document.createElement('div');
    page.id = 'page'
    content.appendChild(page);

    // top section
    const top = document.createElement('div');
    top.id = 'top';
    page.appendChild(top);

    // side-bar
    const side = document.createElement('div');
    side.id = 'side';
    page.appendChild(side);

        const homeBtn = document.createElement('button');
        homeBtn.id = 'home-btn';
        homeBtn.name = 'inactive';
        homeBtn.addEventListener('click', _main_area_tasks_js__WEBPACK_IMPORTED_MODULE_0__.homeButton);
        const homeSpan = document.createTextNode('Home');
        homeBtn.appendChild(homeSpan);
        side.appendChild(homeBtn);

        const weekBtn = document.createElement('button');
        weekBtn.id=  'week-btn';
        weekBtn.name = 'active';
        weekBtn.addEventListener('click', _main_area_tasks_js__WEBPACK_IMPORTED_MODULE_0__.weekButton);
        const weekSpan = document.createTextNode('This Week');
        weekBtn.appendChild(weekSpan);
        side.appendChild(weekBtn);

    // main area
    const main = document.createElement('div');
    main.id = 'main';
    page.appendChild(main);

        const addTaskButton = document.createElement('button');
        const TaskButtonSpan = document.createTextNode('Add Task');
        addTaskButton.id = 'add-task-btn';
        addTaskButton.appendChild(TaskButtonSpan);
        main.appendChild(addTaskButton);

        const taskContainer = document.createElement('div');
        taskContainer.id = 'task-container';
        main.appendChild(taskContainer);

            const taskNameText = document.createElement('h3');
            taskNameText.textContent = 'Task Name';
            taskContainer.appendChild(taskNameText);

            const taskNameEntry = document.createElement('input');
            taskNameEntry.type = 'text';
            taskNameEntry.id = 'name-entry';
            taskContainer.appendChild(taskNameEntry);

            const taskDateText = document.createElement('h3');
            taskDateText.textContent = 'Date Due';
            taskContainer.appendChild(taskDateText);

            const taskDateEntry = document.createElement('input');
            taskDateEntry.type = 'date';
            taskDateEntry.id = 'due-date';
            taskContainer.appendChild(taskDateEntry);

            const priorityText = document.createElement('h3');
            priorityText.textContent = 'Priority';
            taskContainer.appendChild(priorityText);

            const prioritySelection = document.createElement('select');
            prioritySelection.id = 'priority-select';
            taskContainer.appendChild(prioritySelection);

                const lowPriority = document.createElement('option');
                lowPriority.value = 'low';
                const lowPriorityText = document.createTextNode('Low');
                lowPriority.appendChild(lowPriorityText);
                prioritySelection.appendChild(lowPriority);

                const mediumPriority = document.createElement('option');
                mediumPriority.value = 'medium';
                const mediumPriorityText = document.createTextNode('Medium');
                mediumPriority.appendChild(mediumPriorityText);
                prioritySelection.appendChild(mediumPriority);

                const highPriority = document.createElement('option');
                highPriority.value = 'high';
                const highPriorityText = document.createTextNode('High');
                highPriority.appendChild(highPriorityText);
                prioritySelection.appendChild(highPriority);

            const submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.id = 'submit';
            taskContainer.appendChild(submitButton);

    // week area
    const week = document.createElement('div');
    week.id = 'week';
    page.appendChild(week);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeButton": () => (/* binding */ homeButton),
/* harmony export */   "weekButton": () => (/* binding */ weekButton)
/* harmony export */ });
// This toggles the home button
// I don't know why I need to declare the elements in each function instead of outside so I only
// have to do it once.
function homeButton() {
    const home = document.getElementById('home-btn');
    const week = document.getElementById('week-btn');
    const homeArea = document.getElementById('main');
    const weekArea = document.getElementById('week');

    if (home.name === 'inactive') {
        weekArea.style.zIndex = '0';
        week.name = 'inactive';
        homeArea.style.zIndex = '1';
        home.name = 'active';
    }
}
// This toggles the week button
function weekButton() {
    const home = document.getElementById('home-btn');
    const week = document.getElementById('week-btn');
    const homeArea = document.getElementById('main');
    const weekArea = document.getElementById('week');

    if (week.name === 'inactive') {
        homeArea.style.zIndex = '0';
        home.name = 'inactive';
        weekArea.style.zIndex = '1';
        week.name = 'active';
    }
}



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