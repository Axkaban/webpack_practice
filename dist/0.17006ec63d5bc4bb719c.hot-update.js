webpackHotUpdate(0,{

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);





function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['hello', 'webpack'], ' ');
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = __WEBPACK_IMPORTED_MODULE_1__print__["default"];

   element.appendChild(btn);



    return element;
}
// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (true){
    module.hot.accept(0, function() {
        console.log('acceptiong the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/AK/code/personal_project/practice/webpack-demo/src/styles.css Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type.\n| body {\n|     background: blue;\n| }");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsS0FBSztBQUNMLEMiLCJmaWxlIjoiMC4xNzAwNmVjNjNkNWJjNGJiNzE5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ2hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gICBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xubGV0IGVsZW1lbnQgPSBjb21wb25lbnQoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbmlmIChtb2R1bGUuaG90KXtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9wcmludC5qcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWNjZXB0aW9uZyB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZSEnKTtcbiAgICAgICAgLy8gcHJpbnRNZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50ID0gY29tcG9uZW50KCk7IC8vIFJlLXJlbmRlciB0aGUgXCJjb21wb25lbnRcIiB0byB1cGRhdGUgdGhlIGNsaWNrIGhhbmRsZXJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=