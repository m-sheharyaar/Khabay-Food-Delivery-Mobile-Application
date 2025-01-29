(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-expired-session-expired-module"],{

/***/ "./src/app/pages/session-expired/session-expired.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/session-expired/session-expired.module.ts ***!
  \*****************************************************************/
/*! exports provided: SessionExpiredPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpiredPageModule", function() { return SessionExpiredPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _session_expired_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-expired.page */ "./src/app/pages/session-expired/session-expired.page.ts");







var routes = [
    {
        path: '',
        component: _session_expired_page__WEBPACK_IMPORTED_MODULE_6__["SessionExpiredPage"]
    }
];
var SessionExpiredPageModule = /** @class */ (function () {
    function SessionExpiredPageModule() {
    }
    SessionExpiredPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_session_expired_page__WEBPACK_IMPORTED_MODULE_6__["SessionExpiredPage"]]
        })
    ], SessionExpiredPageModule);
    return SessionExpiredPageModule;
}());



/***/ }),

/***/ "./src/app/pages/session-expired/session-expired.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/session-expired/session-expired.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"main\">\n        <div class=\"logo\">\n            <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n        </div>\n        <div class=\"icon\">\n            <div class=\"app_text\">\n                <span class=\"app_text_first\">Session</span> Expired\n            </div>\n            <p>You are already logged in to another device. Are you sure you want to login on\n                this device? Previous login session will end.</p>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <div class=\"btn\">\n            <ion-button class=\"bton\" fill=\"clear\" color=\"light\" (click)=\"gotoSignUp()\">\n                Sign Up\n            </ion-button>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/session-expired/session-expired.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/session-expired/session-expired.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  --background: #f5f5f5; }\n\n.main {\n  width: 100%;\n  height: 75%;\n  margin: 40px 0px 0px 0px; }\n\n.main .logo {\n    width: 45%;\n    height: 25%;\n    margin: 0 auto; }\n\n.main .icon {\n    width: 100%;\n    height: 46%;\n    float: left; }\n\n.main .icon .app_text {\n      width: 100%;\n      height: 10%;\n      float: left;\n      margin: 90px 0px 0px 0px;\n      color: #2e3842;\n      font-weight: bolder;\n      font-size: 20px;\n      text-align: center;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      line-height: 5px; }\n\n.main .icon .app_text .app_text_first {\n        color: #fb630f; }\n\n.main .icon p {\n      width: 80%;\n      margin: auto;\n      text-align: justify;\n      font-size: 14.5px;\n      color: #969ba1; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  margin: 42.2px 0px 0px 0px;\n  float: left; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1leHBpcmVkL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcc2Vzc2lvbi1leHBpcmVkXFxzZXNzaW9uLWV4cGlyZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDUSxXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QixFQUFBOztBQUhoQztJQU1ZLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQVIxQjtJQVdTLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQWJwQjtNQWVZLFdBQVc7TUFDWCxXQUFXO01BQ1gsV0FBVztNQUNYLHdCQUF3QjtNQUN4QixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsZ0JBQWdCLEVBQUE7O0FBMUI1QjtRQTRCZ0IsY0FBYSxFQUFBOztBQTVCN0I7TUFnQ1ksVUFBVTtNQUNWLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTs7QUFJMUI7RUFDUSxXQUFXO0VBQ1gsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixXQUFXLEVBQUE7O0FBSm5CO0lBTVksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFiM0I7TUFlZ0IsV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1leHBpcmVkL3Nlc3Npb24tZXhwaXJlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG4ubWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICBtYXJnaW46IDQwcHggMHB4IDBweCAwcHg7IFxyXG4gICAgICAgIC5sb2dvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgaGVpZ2h0OiA0NiU7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5hcHBfdGV4dHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiA5MHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIC5hcHBfdGV4dF9maXJzdHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmYjYzMGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0LjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICM5NjliYTE7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB9XHJcbn1cclxuLmZvb3RlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDExJTtcclxuICAgICAgICBtYXJnaW46IDQyLjJweCAwcHggMHB4IDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDsgXHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgLmJ0b257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/session-expired/session-expired.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/session-expired/session-expired.page.ts ***!
  \***************************************************************/
/*! exports provided: SessionExpiredPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpiredPage", function() { return SessionExpiredPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SessionExpiredPage = /** @class */ (function () {
    function SessionExpiredPage(router) {
        this.router = router;
    }
    SessionExpiredPage.prototype.ngOnInit = function () {
    };
    SessionExpiredPage.prototype.gotoSignUp = function () {
        this.router.navigate(['signup_phone']);
    };
    SessionExpiredPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-expired',
            template: __webpack_require__(/*! ./session-expired.page.html */ "./src/app/pages/session-expired/session-expired.page.html"),
            styles: [__webpack_require__(/*! ./session-expired.page.scss */ "./src/app/pages/session-expired/session-expired.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SessionExpiredPage);
    return SessionExpiredPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-session-expired-session-expired-module.js.map