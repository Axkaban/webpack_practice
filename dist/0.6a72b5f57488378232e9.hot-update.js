webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(0);




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

/***/ })
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxLQUFLO0FBQ0wsQyIsImZpbGUiOiIwLjZhNzJiNWY1NzQ4ODM3ODIzMmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludCc7XG5cblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnaGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICAgYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcbiAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG5cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5sZXQgZWxlbWVudCA9IGNvbXBvbmVudCgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuaWYgKG1vZHVsZS5ob3Qpe1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3ByaW50LmpzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY2NlcHRpb25nIHRoZSB1cGRhdGVkIHByaW50TWUgbW9kdWxlIScpO1xuICAgICAgICAvLyBwcmludE1lKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQgPSBjb21wb25lbnQoKTsgLy8gUmUtcmVuZGVyIHRoZSBcImNvbXBvbmVudFwiIHRvIHVwZGF0ZSB0aGUgY2xpY2sgaGFuZGxlclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==