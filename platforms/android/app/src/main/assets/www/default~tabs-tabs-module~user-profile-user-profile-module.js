(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tabs-tabs-module~user-profile-user-profile-module"],{

/***/ "./src/app/pages/modal/user-profile-edit/user-profile-edit.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modal/user-profile-edit/user-profile-edit.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"closeModel()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Profile Edit\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <div class=\"name\">\n                <ion-item>\n                    <ion-label position=\"floating\" style=\"color: #fb630f;\">User Name</ion-label>\n                    <ion-input type=\"text\" class=\"name-text\" required name=\"l_userName\" [(ngModel)]=\"l_userName\" readonly></ion-input>\n                </ion-item>\n            </div>\n            <div class=\"name\">\n                <ion-item>\n                    <ion-label position=\"floating\" style=\"color: #fb630f;\">First Name</ion-label>\n                    <ion-input type=\"text\" class=\"name-text\" name=\"l_firstName\" [(ngModel)]=\"l_firstName\"\n                        (ngModelChange)=\"l_firstName=getFirstLetterCapital(l_firstName)\"></ion-input>\n                </ion-item>\n            </div>\n            <div class=\"name\">\n                <ion-item>\n                    <ion-label position=\"floating\" style=\"color: #fb630f;\">Last Name</ion-label>\n                    <ion-input type=\"text\" class=\"name-text\" required name=\"l_lastName\" [(ngModel)]=\"l_lastName\"\n                        (ngModelChange)=\"l_lastName=getFirstLetterCapital(l_lastName)\"></ion-input>\n                </ion-item>\n            </div>\n            <div class=\"name\">\n                <ion-item>\n                    <ion-label position=\"floating\" style=\"color: #fb630f;\">PhoneNumber</ion-label>\n                    <ion-input type=\"text\" class=\"name-text\" required name=\"l_phoneNumber\" readonly\n                        [(ngModel)]=\"l_phoneNumber\"></ion-input>\n                </ion-item>\n            </div>\n            <div class=\"footer\">\n                <div class=\"btn\">\n                    <ion-button class=\"bton\" fill=\"clear\" color=\"light\" (click)=\"editUser()\">\n                        OK\n                    </ion-button>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/modal/user-profile-edit/user-profile-edit.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modal/user-profile-edit/user-profile-edit.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.mainLinks .name {\n    width: 100%;\n    height: auto;\n    float: left;\n    background-color: #fff;\n    margin: 2px 0px 0px 0px; }\n\n.mainLinks .name .name-text {\n      font-size: 13px;\n      float: left;\n      color: #2e3842;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  margin: 90px 0px 0px 0px;\n  float: left; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwvdXNlci1wcm9maWxlLWVkaXQvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxtb2RhbFxcdXNlci1wcm9maWxlLWVkaXRcXHVzZXItcHJvZmlsZS1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFIdkI7SUFLUSxVQUFVO0lBQ1YsWUFBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVyxFQUFBOztBQVRuQjtNQVdZLFVBQVU7TUFDVixZQUFZO01BQ1osWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixlQUFlO01BQ2YsV0FBVyxFQUFBOztBQWhCdkI7TUFtQlMsVUFBVTtNQUNWLFlBQVk7TUFDWix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLFdBQVc7TUFDWCxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osc0JBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixvQkFBb0IsRUFBQTs7QUFJM0I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QixFQUFBOztBQUgxQjtJQUtNLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDJCQUE0QixFQUFBOztBQVhsQztJQWNNLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFxQjtJQUNyQix1QkFBdUIsRUFBQTs7QUFsQjdCO01Bb0JTLGVBQWU7TUFDZCxXQUFXO01BQ1gsY0FBYztNQUNkLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7O0FBS2hDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBOztBQUpmO0lBTVEsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFidkI7TUFlWSxXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbC91c2VyLXByb2ZpbGUtZWRpdC91c2VyLXByb2ZpbGUtZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTsgIFxyXG59XHJcbi5oZWFkLW1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiNjMwZjtcclxuICAgIC5tYWluX21lbnV7XHJcbiAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHggMHB4IDZweCAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHggNnB4IDZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRfbG9nb3tcclxuICAgICAgICAgd2lkdGg6IDgzJTtcclxuICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbkxpbmtze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDE3cHggMHB4IDBweCAwcHg7XHJcbiAgICAuY2FyZE1haW5MaW5rc3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHggMjJweCAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICB9XHJcbiAgICAubmFtZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIC5uYW1lLXRleHR7IFxyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnOyBcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSAgXHJcbn1cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMSU7XHJcbiAgICBtYXJnaW46IDkwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDsgXHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAuYnRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/modal/user-profile-edit/user-profile-edit.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/modal/user-profile-edit/user-profile-edit.page.ts ***!
  \*************************************************************************/
/*! exports provided: UserProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileEditPage", function() { return UserProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");







var UserProfileEditPage = /** @class */ (function () {
    function UserProfileEditPage(modal, http, toastCtrl, ToastCtrl, navParams, events, router, commonService) {
        this.modal = modal;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.navParams = navParams;
        this.events = events;
        this.router = router;
        this.commonService = commonService;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    UserProfileEditPage.prototype.ngOnInit = function () {
        this.l_firstName = this.navParams.get('FirstName');
        this.l_lastName = this.navParams.get('LastName');
        this.l_userName = this.navParams.get('UserName');
        this.l_countryCode = this.navParams.get('CountryCode');
        this.l_phoneNumber = this.navParams.get('PhoneNumber');
    };
    UserProfileEditPage.prototype.editUser = function () {
        var editusers = {
            UserID: localStorage.getItem('userID'),
            UserName: this.l_userName,
            FirstName: this.l_firstName,
            LastName: this.l_lastName,
            CountryCode: this.l_countryCode,
            PhoneNumber: this.l_phoneNumber,
        };
        var options = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.updateUserURL;
        options.catchErrorText = 'UserController: error => addUser()';
        options.methodType = 'POST';
        options.paramData = editusers;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                //localStorage.setItem('FirstName', control.l_firstName);
                //localStorage.setItem('LastName', control.l_lastName);
                control.commonService.profileText(control.l_firstName, control.l_lastName);
                control.events.publish('updateName');
                control.modal.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    UserProfileEditPage.prototype.closeModel = function () {
        this.modal.dismiss();
    };
    UserProfileEditPage.prototype.getFirstLetterCapital = function (value) {
        return this.commonService.getFirstCapitalLetter(value);
    };
    ;
    UserProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile-edit',
            template: __webpack_require__(/*! ./user-profile-edit.page.html */ "./src/app/pages/modal/user-profile-edit/user-profile-edit.page.html"),
            styles: [__webpack_require__(/*! ./user-profile-edit.page.scss */ "./src/app/pages/modal/user-profile-edit/user-profile-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], UserProfileEditPage);
    return UserProfileEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~tabs-tabs-module~user-profile-user-profile-module.js.map