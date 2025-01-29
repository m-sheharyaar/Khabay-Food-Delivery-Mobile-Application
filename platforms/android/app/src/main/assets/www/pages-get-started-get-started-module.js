(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-get-started-get-started-module"],{

/***/ "./src/app/pages/get-started/get-started.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/get-started/get-started.module.ts ***!
  \*********************************************************/
/*! exports provided: GetStartedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPageModule", function() { return GetStartedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _get_started_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-started.page */ "./src/app/pages/get-started/get-started.page.ts");







var routes = [
    {
        path: '',
        component: _get_started_page__WEBPACK_IMPORTED_MODULE_6__["GetStartedPage"]
    }
];
var GetStartedPageModule = /** @class */ (function () {
    function GetStartedPageModule() {
    }
    GetStartedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_get_started_page__WEBPACK_IMPORTED_MODULE_6__["GetStartedPage"]]
        })
    ], GetStartedPageModule);
    return GetStartedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/get-started/get-started.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/get-started/get-started.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"cont\">\n    <div class=\"main\">\n        <div class=\"logo\">\n            <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n        </div>\n        <div class=\"icon\">\n            <div class=\"app_text\">\n                <span class=\"app_text_first\">Get</span> Discount\n                <p class=\"app_text_small\">Experiences a world of food</p>\n                <p class=\"app_text_small_cont\">Best food</p>\n            </div>\n            <div class=\"icon_pic\">\n                <ion-img src=\"../../assets/icon/get-started-icon-2.png\"></ion-img>\n            </div>\n        </div>\n        <div class=\"icon2\">\n            <div class=\"app_text2\">\n                <span class=\"app_text_first\">Best</span> Food\n                <p class=\"app_text_small\">Experiences a world of food</p>\n                <p class=\"app_text_small_cont\">Best food</p>\n            </div>\n            <div class=\"icon_pic2\">\n                <ion-img src=\"../../assets/icon/get-started-icon-1.png\"></ion-img>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <div class=\"btn\">\n            <ion-button class=\"bton\" fill=\"clear\" color=\"light\" (click)=\"gotoSignUp()\">\n                Get started\n            </ion-button>\n        </div>\n        <!-- <div class=\"foot\">\n\n        </div> -->\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/get-started/get-started.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/get-started/get-started.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  --background: #f5f5f5; }\n\n.main {\n  width: 100%;\n  height: 75%;\n  margin: 40px 0px 0px 0px; }\n\n.main .logo {\n    width: 45%;\n    height: 25%;\n    margin: 0 auto; }\n\n.main .icon {\n    width: 100%;\n    height: 46%;\n    float: left; }\n\n.main .icon .app_text {\n      width: 55%;\n      height: 30%;\n      float: left;\n      margin: 90px 0px 0px 0px;\n      color: #2e3842;\n      font-weight: bolder;\n      font-size: 20px;\n      text-align: center;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      line-height: 5px; }\n\n.main .icon .app_text .app_text_small {\n        margin-top: 15px;\n        font-size: 10px;\n        font-weight: normal;\n        color: #969ba1; }\n\n.main .icon .app_text .app_text_small_cont {\n        font-size: 10px;\n        font-weight: normal;\n        color: #969ba1; }\n\n.main .icon .app_text .app_text_first {\n        color: #fb630f; }\n\n.main .icon .icon_pic {\n      width: 45%;\n      height: 100%;\n      float: right; }\n\n.main .icon .icon_pic ion-img {\n        width: 100%;\n        height: 100%;\n        float: right; }\n\n.main .icon2 {\n    width: 100%;\n    height: 32%;\n    float: left; }\n\n.main .icon2 .app_text2 {\n      width: 70%;\n      height: 40%;\n      float: right;\n      margin: 65px 0px 0px 0px;\n      color: #2e3842;\n      font-weight: bolder;\n      font-size: 20px;\n      text-align: center;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      line-height: 5px; }\n\n.main .icon2 .app_text2 .app_text_small {\n        margin-top: 15px;\n        font-size: 10px;\n        font-weight: normal;\n        color: #969ba1; }\n\n.main .icon2 .app_text2 .app_text_small_cont {\n        font-size: 10px;\n        font-weight: normal;\n        color: #969ba1; }\n\n.main .icon2 .app_text2 .app_text_first {\n        color: #fb630f; }\n\n.main .icon2 .icon_pic2 {\n      width: 28%;\n      height: 100%;\n      float: left; }\n\n.main .icon2 .icon_pic2 ion-img {\n        width: 100%;\n        height: 100%;\n        float: left; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  float: left;\n  bottom: 0px;\n  position: fixed; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2V0LXN0YXJ0ZWQvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxnZXQtc3RhcnRlZFxcZ2V0LXN0YXJ0ZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDUSxXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QixFQUFBOztBQUhoQztJQU1ZLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQVIxQjtJQVdTLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQWJwQjtNQWVZLFVBQVU7TUFDVixXQUFXO01BQ1gsV0FBVztNQUNYLHdCQUF3QjtNQUN4QixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsZ0JBQWdCLEVBQUE7O0FBMUI1QjtRQTRCZ0IsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsY0FBYyxFQUFBOztBQS9COUI7UUFrQ2dCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsY0FBYyxFQUFBOztBQXBDOUI7UUF1Q2dCLGNBQWMsRUFBQTs7QUF2QzlCO01BMkNZLFVBQVU7TUFDVixZQUFZO01BQ1osWUFBVyxFQUFBOztBQTdDdkI7UUErQ2dCLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBVyxFQUFBOztBQWpEM0I7SUFzRFksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBeER2QjtNQTBEZSxVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLGdCQUFnQixFQUFBOztBQXJFL0I7UUF1RW1CLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGNBQWMsRUFBQTs7QUExRWpDO1FBNkVnQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGNBQWMsRUFBQTs7QUEvRTlCO1FBa0ZtQixjQUFjLEVBQUE7O0FBbEZqQztNQXNGZSxVQUFVO01BQ1YsWUFBWTtNQUNaLFdBQVUsRUFBQTs7QUF4RnpCO1FBMEZtQixXQUFXO1FBQ1gsWUFBWTtRQUNaLFdBQVUsRUFBQTs7QUFLN0I7RUFDUSxXQUFXO0VBQ1gsV0FBVztFQUVYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQU52QjtJQVFZLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBZjNCO01BaUJnQixXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZXQtc3RhcnRlZC9nZXQtc3RhcnRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG4ubWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICBtYXJnaW46IDQwcHggMHB4IDBweCAwcHg7IFxyXG4gICAgICAgIC5sb2dvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgaGVpZ2h0OiA0NiU7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5hcHBfdGV4dHtcclxuICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDkwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgXHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgLmFwcF90ZXh0X3NtYWxse1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXBwX3RleHRfc21hbGxfY29udHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXBwX3RleHRfZmlyc3R7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbl9waWN7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7ICBcclxuICAgICAgICAgICAgaW9uLWltZ3sgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uMntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzIlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAuYXBwX3RleHQye1xyXG4gICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICBtYXJnaW46IDY1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgXHJcbiAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgLmFwcF90ZXh0X3NtYWxse1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuYXBwX3RleHRfc21hbGxfY29udHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmFwcF90ZXh0X2ZpcnN0e1xyXG4gICAgICAgICAgICAgICAgICAgY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmljb25fcGljMntcclxuICAgICAgICAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICBmbG9hdDpsZWZ0OyAgXHJcbiAgICAgICAgICAgICAgIGlvbi1pbWd7ICBcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgfVxyXG59XHJcbi5mb290ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMSU7XHJcbiAgICAgICAgLy9tYXJnaW46IDI4LjJweCAwcHggMHB4IDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDsgXHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIC5idG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgLy8gLmZvb3R7XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDclO1xyXG4gICAgICAgIC8vICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAvLyAgICAgbWFyZ2luOiAzMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgIC8vIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/get-started/get-started.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/get-started/get-started.page.ts ***!
  \*******************************************************/
/*! exports provided: GetStartedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPage", function() { return GetStartedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var GetStartedPage = /** @class */ (function () {
    function GetStartedPage(router, platform) {
        this.router = router;
        this.platform = platform;
    }
    GetStartedPage.prototype.ngOnInit = function () {
        localStorage.setItem('appClose', 'true');
        this.platform.backButton.subscribe(function () {
            localStorage.setItem('appClose', 'true');
        });
    };
    GetStartedPage.prototype.gotoSignUp = function () {
        localStorage.removeItem('appClose');
        this.router.navigateByUrl('/signup_phone');
    };
    GetStartedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-started',
            template: __webpack_require__(/*! ./get-started.page.html */ "./src/app/pages/get-started/get-started.page.html"),
            styles: [__webpack_require__(/*! ./get-started.page.scss */ "./src/app/pages/get-started/get-started.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], GetStartedPage);
    return GetStartedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-get-started-get-started-module.js.map