(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-user-registration-signup-user-registration-module"],{

/***/ "./src/app/pages/signup-user-registration/signup-user-registration.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/signup-user-registration/signup-user-registration.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SignupUserRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupUserRegistrationPageModule", function() { return SignupUserRegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_user_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-user-registration.page */ "./src/app/pages/signup-user-registration/signup-user-registration.page.ts");







var routes = [
    {
        path: '',
        component: _signup_user_registration_page__WEBPACK_IMPORTED_MODULE_6__["SignupUserRegistrationPage"]
    }
];
var SignupUserRegistrationPageModule = /** @class */ (function () {
    function SignupUserRegistrationPageModule() {
    }
    SignupUserRegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_user_registration_page__WEBPACK_IMPORTED_MODULE_6__["SignupUserRegistrationPage"]]
        })
    ], SignupUserRegistrationPageModule);
    return SignupUserRegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup-user-registration/signup-user-registration.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/signup-user-registration/signup-user-registration.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"cont\">\n    <!-- <div class=\"backbtn\">\n        <ion-buttons slot=\"start\" style=\"float:left;\">\n            <ion-button (click)=\"goBack()\">\n                <ion-icon name=\"ios-arrow-back\" class=\"backicon\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </div> -->\n    <div class=\"main\">\n        <div class=\"logo\">\n            <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n        </div>\n        <div class=\"mainLinks\">\n            <ion-card class=\"cardMainLinks\">\n                <div class=\"names\">\n                    <ion-item class=\"fname\">\n                        <ion-label position=\"floating\" style=\"color: #fb630f;\">First Name</ion-label>\n                        <ion-input class=\"inputField\" type=\"text\" name=\"FirstName\" [(ngModel)]=\"userVm.user.FirstName\"\n                            (keyup)=\"onKeyUp($event)\" maxlength=\"20\"\n                            (ngModelChange)=\"userVm.user.FirstName=getFirstLetterCapital(userVm.user.FirstName)\"\n                            (ionChange)=\"formValidation()\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"lname\">\n                        <ion-label position=\"floating\" style=\"color: #fb630f;\">Last Name</ion-label>\n                        <ion-input class=\"inputField\" type=\"text\" name=\"LastName\" [(ngModel)]=\"userVm.user.LastName\"\n                            maxlength=\"20\"\n                            (ngModelChange)=\"userVm.user.LastName=getFirstLetterCapital(userVm.user.LastName)\"\n                            (keyup)=\"onKeyUp($event)\" (ionChange)=\"formValidation()\"></ion-input>\n                    </ion-item>\n                </div>\n                <ion-item class=\"item_bg_transp\">\n                    <div class=\"main_text\">\n                        <div class=\"text\">\n                            <ion-label position=\"floating\" style=\"color: #fb630f;\">User Name</ion-label>\n                            <ion-input class=\"inputField\" type=\"text\" name=\"UserName\" [(ngModel)]=\"userVm.user.UserName\"\n                                max=\"10\" maxlength=\"10\" (input)=\"l_usernameLength=getLength($event.target.value,10)\"\n                                (keyup)=\"onKeyUp($event)\"></ion-input>\n                        </div>\n                        <div class=\"textLength\">\n                            {{l_usernameLength}}\n                        </div>\n                    </div>\n                </ion-item>\n                <ion-item class=\"item_bg_transp\">\n                    <ion-label position=\"floating\" style=\"color: #fb630f;\">Number</ion-label>\n                    <ion-input class=\"inputField\" type=\"text\" name=\"l_phoneNo\" [(ngModel)]=\"l_phoneNo\"\n                        (keyup)=\"formValidation()\" readonly>\n                    </ion-input>\n                </ion-item>\n            </ion-card>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <div class=\"btn\">\n            <ion-button (click)=\"addUser()\" class=\"bton\" fill=\"clear\" color=\"light\"\n                [attr.disabled]=\"isbtnDisabled? true:null\">\n                NEXT\n            </ion-button>\n        </div>\n        <!-- <div class=\"foot\">\n\n        </div> -->\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/signup-user-registration/signup-user-registration.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/signup-user-registration/signup-user-registration.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  --background: #f5f5f5; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 58px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.main {\n  width: 100%;\n  margin: 80px 0px 0px 0px;\n  float: left; }\n\n.main .logo {\n    width: 50%;\n    height: 80%;\n    margin: 0 auto;\n    float: center; }\n\n.names {\n  width: 100%;\n  float: left;\n  margin: 30px 0px 0px 0px;\n  background-color: transparent !important; }\n\n.names .fname {\n    width: 48%;\n    float: left;\n    margin: 0px 0px 0px 0px;\n    padding: 0px;\n    --background: transparent !important;\n    color: #fb630f; }\n\n.names .lname {\n    width: 48%;\n    float: right;\n    margin: 0px 0px 0px 0px;\n    --background: transparent !important;\n    color: #fb630f; }\n\n.item_bg_transp {\n  margin: 0px 0px 0px 0px;\n  --background: transparent !important;\n  color: #fb630f; }\n\n.backbtn {\n  width: 100%;\n  position: fixed;\n  margin-top: 15px; }\n\n.backbtn .backicon {\n    color: #2e3842;\n    font-size: 25px;\n    float: left; }\n\n.main_text {\n  padding: 0px;\n  margin: 0px;\n  width: 100%; }\n\n.main_text .text {\n    padding: 0px;\n    margin: 0px;\n    width: 80%;\n    float: left;\n    color: #fb630f; }\n\n.main_text .textLength {\n    padding: 0px;\n    margin: 29px 0px 0px 0px;\n    width: 10%;\n    float: right;\n    font-size: 82%;\n    color: #969ba1;\n    text-align: center; }\n\n.inputField {\n  font-size: 13px;\n  float: left;\n  color: #2e3842;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  float: left;\n  bottom: 0px;\n  position: fixed; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwLXVzZXItcmVnaXN0cmF0aW9uL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwLXVzZXItcmVnaXN0cmF0aW9uXFxzaWdudXAtdXNlci1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QixFQUFBOztBQUg1QjtJQUtRLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDJCQUE0QixFQUFBOztBQUdwQztFQUNJLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBOztBQUhmO0lBTVEsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYSxFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLHdDQUF3QyxFQUFBOztBQUoxQztJQU1NLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQ0FBYTtJQUNiLGNBQWMsRUFBQTs7QUFYcEI7SUFjSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixvQ0FBYTtJQUNiLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSx1QkFBdUI7RUFDdkIsb0NBQWE7RUFDYixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFIakI7SUFLSSxjQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVc7RUFDWCxXQUFVO0VBQ1YsV0FBVSxFQUFBOztBQUhkO0lBS1EsWUFBVztJQUNYLFdBQVU7SUFDVixVQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWMsRUFBQTs7QUFUdEI7SUFZUSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUFHMUI7RUFDSSxlQUFlO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBOztBQUV6QjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBRVgsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBTm5CO0lBUVEsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFmdkI7TUFpQlksV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwLXVzZXItcmVnaXN0cmF0aW9uL3NpZ251cC11c2VyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG4ubWFpbkxpbmtze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDU4cHggMHB4IDBweCAwcHg7XHJcbiAgICAuY2FyZE1haW5MaW5rc3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHggMjJweCAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICB9ICBcclxufVxyXG4ubWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA4MHB4IDBweCAwcHggMHB4OyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLmxvZ29cclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICBmbG9hdDogY2VudGVyOyAgICAgXHJcbiAgICB9XHJcbn1cclxuLm5hbWVze1xyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDMwcHggMHB4IDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAuZm5hbWV7XHJcbiAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmI2MzBmO1xyXG4gIH1cclxuICAubG5hbWV7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgfVxyXG59XHJcbi5pdGVtX2JnX3RyYW5zcHtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmYjYzMGY7XHJcbn1cclxuLmJhY2tidG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIHBvc2l0aW9uOiBmaXhlZDtcclxuIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAuYmFja2ljb257XHJcbiAgICBjb2xvcjojMmUzODQyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiB9XHJcbn1cclxuLm1haW5fdGV4dHtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgIH1cclxuICAgIC50ZXh0TGVuZ3Roe1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW46IDI5cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MiU7XHJcbiAgICAgICAgY29sb3I6ICM5NjliYTE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIH1cclxufVxyXG4uaW5wdXRGaWVsZHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnOyBcclxuICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTElO1xyXG4gICAgLy9tYXJnaW46IDc0cHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIC5idG57XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIC5idG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuICAgIC8vIC5mb290e1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIGhlaWdodDogNyU7XHJcbiAgICAvLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvLyAgICAgbWFyZ2luOiAzMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICAvLyB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup-user-registration/signup-user-registration.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/signup-user-registration/signup-user-registration.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SignupUserRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupUserRegistrationPage", function() { return SignupUserRegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _viewModel_user_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../viewModel/user-vm */ "./src/app/viewModel/user-vm.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_8__);









var SignupUserRegistrationPage = /** @class */ (function () {
    function SignupUserRegistrationPage(http, toastCtrl, ToastCtrl, router, events, commonService, plt) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.router = router;
        this.events = events;
        this.commonService = commonService;
        this.plt = plt;
        this.isbtnDisabled = true;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_4__["Env"]();
        this.userVm = new _viewModel_user_vm__WEBPACK_IMPORTED_MODULE_6__["UserVM"]();
    }
    SignupUserRegistrationPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('UserName') == null)
            this.l_usernameLength = 10;
        else
            this.l_usernameLength = this.getLength(localStorage.getItem('UserName'), 10);
        this.plt.backButton.subscribeWithPriority(0, function () {
            Object(q__WEBPACK_IMPORTED_MODULE_8__["reject"])();
        });
    };
    SignupUserRegistrationPage.prototype.ionViewWillEnter = function () {
        this.l_phoneNo = localStorage.getItem('CountryCode') + localStorage.getItem('PhoneNumber');
        //  this.userVm.user.UserID = localStorage.getItem('userID');
        //  this.userVm.user.UserName = localStorage.getItem('UserName');
        //  this.userVm.user.FirstName = localStorage.getItem('FirstName');
        //  this.userVm.user.LastName = localStorage.getItem('LastName');
    };
    SignupUserRegistrationPage.prototype.addUser = function () {
        this.commonService.userRegister(0, localStorage.getItem('PhoneNumber'), localStorage.getItem('CountryCode'), localStorage.getItem('DeviceID'), this.userVm.user.UserName, this.userVm.user.FirstName, this.userVm.user.LastName);
    };
    SignupUserRegistrationPage.prototype.formValidation = function () {
        var firstName = false;
        var lastName = false;
        var userName = false;
        firstName = this.commonService.commonValidation(this.userVm.user.FirstName, 3);
        lastName = this.commonService.commonValidation(this.userVm.user.LastName, 3);
        userName = this.commonService.commonValidation(this.userVm.user.UserName, 6);
        if (firstName == false && lastName == false && userName == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    };
    SignupUserRegistrationPage.prototype.goBack = function () {
        //  localStorage.removeItem('userID');
        // localStorage.removeItem('UserName');
        // localStorage.removeItem('FirstName');
        // localStorage.removeItem('LastName');
        this.router.navigateByUrl('/signup_verification');
    };
    SignupUserRegistrationPage.prototype.getLength = function (value, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    };
    SignupUserRegistrationPage.prototype.onKeyUp = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[A-Za-z0-9?]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
        this.formValidation();
    };
    SignupUserRegistrationPage.prototype.getFirstLetterCapital = function (value) {
        return this.commonService.getFirstCapitalLetter(value);
    };
    ;
    SignupUserRegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-user-registration',
            template: __webpack_require__(/*! ./signup-user-registration.page.html */ "./src/app/pages/signup-user-registration/signup-user-registration.page.html"),
            styles: [__webpack_require__(/*! ./signup-user-registration.page.scss */ "./src/app/pages/signup-user-registration/signup-user-registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_5__["Commonservices"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], SignupUserRegistrationPage);
    return SignupUserRegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-user-registration-signup-user-registration-module.js.map