(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-verification-signup-verification-module"],{

/***/ "./src/app/pages/signup-verification/signup-verification.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/signup-verification/signup-verification.module.ts ***!
  \*************************************************************************/
/*! exports provided: SignupVerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupVerificationPageModule", function() { return SignupVerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-verification.page */ "./src/app/pages/signup-verification/signup-verification.page.ts");







var routes = [
    {
        path: '',
        component: _signup_verification_page__WEBPACK_IMPORTED_MODULE_6__["SignupVerificationPage"]
    }
];
var SignupVerificationPageModule = /** @class */ (function () {
    function SignupVerificationPageModule() {
    }
    SignupVerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_verification_page__WEBPACK_IMPORTED_MODULE_6__["SignupVerificationPage"]]
        })
    ], SignupVerificationPageModule);
    return SignupVerificationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup-verification/signup-verification.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/signup-verification/signup-verification.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <!-- <div class=\"backbtn\">\n        <ion-buttons slot=\"start\" style=\"float:left;\">\n            <ion-button (click)=\"goBack()\">\n                <ion-icon name=\"ios-arrow-back\" class=\"backicon\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </div> -->\n    <div class=\"main\">\n        <div class=\"logo\">\n            <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n        </div>\n        <h5 class=\"app_text\">Please enter the verification code sent to\n            <br /> <span>\n                {{l_phonCode}}{{l_phoneNo}}\n            </span>\n            <br /> to verify that you are the owner of this phone number</h5>\n        <div class=\"round\">\n            <ion-row>\n                <ion-col>\n                    <ion-input class=\"ver\" #Field1 type=\"tel\" maxlength=\"1\" max=\"1\" [(ngModel)]=\"l_verifyCode1\"\n                        (keyup.enter)=\"verificationCode()\" (keyup)=\"gotoNextField(Field2, $event.target.value)\"\n                        (ionChange)=\"verifyCodeValidation()\"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input class=\"ver\" #Field2 type=\"tel\" maxlength=\"1\" max=\"1\" [(ngModel)]=\"l_verifyCode2\"\n                        (keyup.enter)=\"verificationCode()\" (keyup)=\"gotoNextField(Field3, $event.target.value)\"\n                        (ionChange)=\"verifyCodeValidation()\"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input class=\"ver\" #Field3 type=\"tel\" maxlength=\"1\" max=\"1\" [(ngModel)]=\"l_verifyCode3\"\n                        (keyup.enter)=\"verificationCode()\" (keyup)=\"gotoNextField(Field4, $event.target.value)\"\n                        (ionChange)=\"verifyCodeValidation()\"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input class=\"ver\" #Field4 type=\"tel\" maxlength=\"1\" max=\"1\" [(ngModel)]=\"l_verifyCode4\"\n                        (keyup.enter)=\"verificationCode()\" (ionChange)=\"verifyCodeValidation()\"></ion-input>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class=\"app_text_small\">\n            <div class=\"code-text\">\n                <span class=\"\">didn't get the code,\n                    <span (click)=\"reSendCode()\" class=\"resend-button\" *ngIf=\"l_hidevalue==true\">Re-send code\n                    </span>\n                    <span *ngIf=\"l_hidevalue==false\" class=\"max-time\"> {{maxTime}}</span>\n                </span>\n            </div>\n                <h6 (click)=\"goBack()\">SignUp with another phone number</h6>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <div class=\"btn\">\n            <ion-button (click)=\"verificationCode()\" class=\"bton\" fill=\"clear\" color=\"light\"\n                [attr.disabled]=\"isbtnDisabled? true:null\">\n                NEXT\n            </ion-button>\n        </div>\n        <!-- <div class=\"foot\"></div> -->\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/signup-verification/signup-verification.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/signup-verification/signup-verification.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.main {\n  width: 100%;\n  margin: 80px 0px 0px 0px;\n  float: left; }\n\n.main .logo {\n    width: 50%;\n    height: 80%;\n    margin: 0 auto;\n    float: center; }\n\n.main .app_text {\n    width: 85%;\n    height: 20%;\n    margin: 0 auto;\n    padding: 30px 0px 0px 0px;\n    color: #2e3842;\n    font-size: 12px;\n    float: center;\n    text-align: center;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal;\n    font-weight: bold;\n    line-height: 18px; }\n\n.main .app_text span {\n      color: #fb630f; }\n\n.main .round {\n    width: 50%;\n    margin: 0 auto;\n    height: 12%;\n    padding: 7px 5px 5px 5px;\n    float: center;\n    text-align: center; }\n\n.main .round .ver {\n      width: 100%;\n      text-align: center;\n      border-bottom: 2px solid;\n      color: #fb630f;\n      font-size: 30px; }\n\n.main .app_text_small {\n    width: 68%;\n    height: 18%;\n    padding: 0px 0px 0px 0px;\n    margin: 0 auto;\n    font-size: 10px;\n    text-align: center;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.main .app_text_small .resend-button {\n      text-decoration: underline;\n      font-weight: bold;\n      color: #fb630f; }\n\n.main .app_text_small .code-text {\n      text-align: center;\n      margin-top: 15px;\n      color: #969ba1; }\n\n.main .app_text_small .code-text .max-time {\n        color: #fb630f; }\n\n.main .app_text_small .code-text h6 {\n        color: #fb630f;\n        font-size: 10px; }\n\n.backbtn {\n  width: 100%;\n  position: fixed;\n  margin-top: 15px; }\n\n.backbtn .backicon {\n    color: #2e3842;\n    font-size: 25px;\n    float: left; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  float: left;\n  bottom: 0px;\n  position: fixed; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwLXZlcmlmaWNhdGlvbi9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXHNpZ251cC12ZXJpZmljYXRpb25cXHNpZ251cC12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFdBQVcsRUFBQTs7QUFIZjtJQU1RLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWEsRUFBQTs7QUFUckI7SUFZUSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUF4QnpCO01BMEJZLGNBQWEsRUFBQTs7QUExQnpCO0lBOEJRLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7O0FBbkMxQjtNQXFDWSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLHdCQUF3QjtNQUN4QixjQUFhO01BQ2IsZUFBZSxFQUFBOztBQXpDM0I7SUE2Q1EsVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTs7QUFyRDVCO01BdURZLDBCQUEwQjtNQUMxQixpQkFBaUI7TUFDakIsY0FBYyxFQUFBOztBQXpEMUI7TUE0RFksa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixjQUFhLEVBQUE7O0FBOUR6QjtRQWdFWSxjQUNBLEVBQUE7O0FBakVaO1FBbUVnQixjQUFjO1FBQ2QsZUFBZSxFQUFBOztBQUsvQjtFQUNJLFdBQVc7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSGpCO0lBS0ksY0FBYTtJQUNiLGVBQWU7SUFDZixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUVYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQU5uQjtJQVFRLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBZnZCO01BaUJZLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC12ZXJpZmljYXRpb24vc2lnbnVwLXZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG4ubWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA4MHB4IDBweCAwcHggMHB4OyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLmxvZ29cclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICBmbG9hdDogY2VudGVyOyAgICAgXHJcbiAgICB9XHJcbiAgICAuYXBwX3RleHR7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnOyBcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjojZmI2MzBmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3VuZHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMTIlOyAgXHJcbiAgICAgICAgcGFkZGluZzogN3B4IDVweCA1cHggNXB4O1xyXG4gICAgICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC52ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgICAgICAgICAgY29sb3I6I2ZiNjMwZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcHBfdGV4dF9zbWFsbHtcclxuICAgICAgICB3aWR0aDogNjglO1xyXG4gICAgICAgIGhlaWdodDogMTglO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgLnJlc2VuZC1idXR0b257XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2RlLXRleHR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDsgXHJcbiAgICAgICAgICAgIGNvbG9yOiM5NjliYTE7XHJcbiAgICAgICAgICAgIC5tYXgtdGltZXtcclxuICAgICAgICAgICAgY29sb3I6ICNmYjYzMGZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxufVxyXG4uYmFja2J0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gcG9zaXRpb246IGZpeGVkO1xyXG4gbWFyZ2luLXRvcDogMTVweDtcclxuIC5iYWNraWNvbntcclxuICAgIGNvbG9yOiMyZTM4NDI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuIH1cclxufVxyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExJTtcclxuICAgIC8vbWFyZ2luOiAxNTguNXB4IDBweCAwcHggMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7IFxyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAuYnRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbiAgICAvLyAuZm9vdHtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDclO1xyXG4gICAgLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLy8gICAgIG1hcmdpbjogMzBweCAwcHggMHB4IDBweDtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/signup-verification/signup-verification.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/signup-verification/signup-verification.page.ts ***!
  \***********************************************************************/
/*! exports provided: SignupVerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupVerificationPage", function() { return SignupVerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_7__);









var SignupVerificationPage = /** @class */ (function () {
    function SignupVerificationPage(router, http, toastCtrl, ToastCtrl, alertController, commonService, plt) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.alertController = alertController;
        this.commonService = commonService;
        this.plt = plt;
        this.l_verifyCode1 = '';
        this.l_verifyCode2 = '';
        this.l_verifyCode3 = '';
        this.l_verifyCode4 = '';
        this.maxTime = 60;
        this.l_hidevalue = false;
        this.l_isResend = false;
        this.isbtnDisabled = true;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    SignupVerificationPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.Field1.setFocus();
        }, 2000);
        this.plt.backButton.subscribeWithPriority(0, function () {
            Object(q__WEBPACK_IMPORTED_MODULE_7__["reject"])();
        });
    };
    SignupVerificationPage.prototype.ionViewWillEnter = function () {
        this.l_verifyCode1 = '';
        this.l_verifyCode2 = '';
        this.l_verifyCode3 = '';
        this.l_verifyCode4 = '';
        this.l_phoneNo = localStorage.getItem('PhoneNumber');
        this.l_phonCode = localStorage.getItem('CountryCode');
        this.startTimer();
    };
    SignupVerificationPage.prototype.verificationCode = function () {
        if (this.isbtnDisabled == true) {
            return;
        }
        var options = {};
        var control = this;
        var VerifyCode = this.l_verifyCode1 + this.l_verifyCode2 + this.l_verifyCode3 + this.l_verifyCode4;
        options.title = 'Verification Code!!!';
        options.apiURL = this.env.userApi.getVerificationCodeURL + VerifyCode;
        options.catchErrorText = 'signup-phoneController: error => verificationCode()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.verifyUserByPhoneNumber();
            }
        };
        control.verifyUserByPhoneNumber(); //For testing
        // this.commonService.httpPost(options);
    };
    SignupVerificationPage.prototype.verifyUserByPhoneNumber = function () {
        var options = {};
        var control = this;
        options.title = 'Verification Code!!!';
        options.apiURL = this.env.userApi.verifyUserByPhoneNumberURL + localStorage.getItem('PhoneNumber');
        options.catchErrorText = 'signup-phoneController: error => verifyUserByPhoneNumber()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                if (data.Result.length > 0) {
                    // localStorage.setItem('userID', data.Result[0].UserID);
                    // localStorage.setItem('UserName', data.Result[0].UserName);
                    //localStorage.setItem('FirstName', data.Result[0].FirstName);
                    //localStorage.setItem('LastName', data.Result[0].LastName);
                    control.deviceVerification(data.Result[0].UserID);
                }
                else {
                    control.router.navigateByUrl('/signup_user_registration');
                }
            }
        };
        this.commonService.httpPost(options);
    };
    SignupVerificationPage.prototype.insertAgainPhoneVerificationCode = function () {
        var options = {};
        var control = this;
        options.title = 'Verification Code!!!';
        options.apiURL = this.env.userApi.insertVerificationCodeURL;
        options.catchErrorText = 'signup-VerificationController: error => InsertAgainPhoneVerificationCode()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.maxTime = 60;
            }
        };
        this.commonService.httpPost(options);
    };
    SignupVerificationPage.prototype.startTimer = function () {
        var _this = this;
        this.l_timer = setTimeout(function (x) {
            if (_this.maxTime <= 0) { }
            _this.maxTime -= 1;
            if (_this.maxTime > 0) {
                _this.l_hidevalue = false;
                _this.startTimer();
            }
            else {
                _this.l_hidevalue = true;
            }
        }, 1000);
    };
    SignupVerificationPage.prototype.reSendCode = function () {
        this.maxTime = 60;
        this.l_isResend = true;
        this.l_hidevalue = false;
        this.startTimer();
        this.insertAgainPhoneVerificationCode();
    };
    SignupVerificationPage.prototype.verifyCodeValidation = function () {
        var verifyCode1 = false;
        var verifyCode2 = false;
        var verifyCode3 = false;
        var verifyCode4 = false;
        verifyCode1 = this.commonService.commonValidation(this.l_verifyCode1, 1);
        verifyCode2 = this.commonService.commonValidation(this.l_verifyCode2, 1);
        verifyCode3 = this.commonService.commonValidation(this.l_verifyCode3, 1);
        verifyCode4 = this.commonService.commonValidation(this.l_verifyCode4, 1);
        if (verifyCode1 == false && verifyCode2 == false && verifyCode3 == false && verifyCode4 == false) {
            this.isbtnDisabled = false;
            this.verificationCode();
        }
        else {
            this.isbtnDisabled = true;
        }
    };
    SignupVerificationPage.prototype.gotoNextField = function (nextElement, textLength) {
        var Enterlength = textLength.length;
        if (Enterlength == 1) {
            nextElement.setFocus();
        }
    };
    SignupVerificationPage.prototype.goBack = function () {
        localStorage.removeItem('PhoneNumber');
        this.router.navigateByUrl('/signup_phone');
    };
    SignupVerificationPage.prototype.deviceVerification = function (userID) {
        var deviceVerificationParam = {
            DeviceID: localStorage.getItem('DeviceID'),
            UserID: userID,
        };
        var options = {};
        var control = this;
        options.title = 'Device Verification!!!';
        options.apiURL = this.env.userApi.deviceVerification;
        options.catchErrorText = 'signupWelcomeController: error => deviceVerification()';
        options.methodType = 'POST';
        options.paramData = deviceVerificationParam;
        options.isPopup = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.findUser(userID);
            }
        };
        options.callback = function (data) {
            if (data.Status[0].Success == false) {
                control.presentAlertConfirm(userID);
            }
        };
        this.commonService.httpPost(options);
    };
    SignupVerificationPage.prototype.presentAlertConfirm = function (userID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: '<strong>Are you sure you logout for all devices</strong>!!!',
                            buttons: [
                                {
                                    text: 'Yes',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.findUser(userID);
                                    }
                                }, {
                                    text: 'No',
                                    handler: function () {
                                        _this.router.navigateByUrl('/signup_phone');
                                    }
                                }
                            ],
                            backdropDismiss: false,
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupVerificationPage.prototype.findUser = function (userID) {
        this.commonService.userRegister(userID, localStorage.getItem('PhoneNumber'), localStorage.getItem('CountryCode'), localStorage.getItem('DeviceID'), "", "", "");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Field1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupVerificationPage.prototype, "Field1", void 0);
    SignupVerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-verification',
            template: __webpack_require__(/*! ./signup-verification.page.html */ "./src/app/pages/signup-verification/signup-verification.page.html"),
            styles: [__webpack_require__(/*! ./signup-verification.page.scss */ "./src/app/pages/signup-verification/signup-verification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], SignupVerificationPage);
    return SignupVerificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-verification-signup-verification-module.js.map