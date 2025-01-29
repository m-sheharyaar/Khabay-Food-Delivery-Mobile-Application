(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-status-about-status-module~tabs-tabs-module"],{

/***/ "./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"closeModel()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Add About\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <div class=\"name\">\n                <ion-item>\n                    <ion-input type=\"text\" #input class=\"name-text\" required name=\"l_description\"\n                        [(ngModel)]=\"l_description\" maxlength=\"100\" (input)=\"getLength($event.target.value,100)\"\n                        (keyup)=\"formValidation()\" (ionChange)=\"formValidation()\"></ion-input>\n                    <div class=\"name-edit\">{{maxlength}}</div>\n                </ion-item>\n            </div>\n            <div class=\"footer\">\n                <div class=\"btn\">\n                    <ion-button class=\"bton\" fill=\"clear\" color=\"light\"\n                        [ngClass]=\"isbtnDisabled ? 'btn-disabled': 'btn-enable'\"\n                        [attr.disabled]=\"isbtnDisabled? true:null\" (click)=\"updateAbout()\">\n                        OK\n                    </ion-button>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.mainLinks .name {\n    width: 100%;\n    height: auto;\n    float: left;\n    background-color: #fff;\n    margin: 2px 0px 0px 0px; }\n\n.mainLinks .name .name-text {\n      margin: 15px 0px 0px 1px;\n      width: 70%;\n      font-size: 13px;\n      float: left;\n      color: #2e3842;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks .name .name-edit {\n      width: auto;\n      height: 25px;\n      float: right;\n      font-size: 14px;\n      padding-top: 15px;\n      color: #fb630f; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  margin: 90px 0px 0px 0px;\n  float: left; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwvYWJvdXQtc3RhdHVzLXVwZGF0ZS1tb2RhbC9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXG1vZGFsXFxhYm91dC1zdGF0dXMtdXBkYXRlLW1vZGFsXFxhYm91dC1zdGF0dXMtdXBkYXRlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWY7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUhyQjtJQUtNLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVGpCO01BV1UsVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJyQjtNQW1CTyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUk3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBSDVCO0lBS1EsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsMkJBQTRCLEVBQUE7O0FBWHBDO0lBY1EsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLHVCQUF1QixFQUFBOztBQWxCL0I7TUFvQlksd0JBQXVCO01BQ3ZCLFVBQVM7TUFDVixlQUFlO01BQ2QsV0FBVztNQUNYLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQTNCaEM7TUE4QlksV0FBVztNQUNYLFlBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7O0FBSzFCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBOztBQUpmO0lBTVEsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFidkI7TUFlWSxXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbC9hYm91dC1zdGF0dXMtdXBkYXRlLW1vZGFsL2Fib3V0LXN0YXR1cy11cGRhdGUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7ICBcclxuICB9XHJcbiAgLmhlYWQtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgLm1haW5fbWVudXtcclxuICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggNnB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9sb2dve1xyXG4gICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4ubWFpbkxpbmtze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDE3cHggMHB4IDBweCAwcHg7XHJcbiAgICAuY2FyZE1haW5MaW5rc3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHggMjJweCAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICB9XHJcbiAgICAubmFtZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIC5uYW1lLXRleHR7IFxyXG4gICAgICAgICAgICBtYXJnaW46MTVweCAwcHggMHB4IDFweDsgXHJcbiAgICAgICAgICAgIHdpZHRoOjcwJTsgXHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6ICMyZTM4NDI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYW1lLWVkaXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjVweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0gIFxyXG59XHJcbi5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTElO1xyXG4gICAgbWFyZ2luOiA5MHB4IDBweCAwcHggMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7IFxyXG4gICAgLmJ0bntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgLmJ0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: AboutStatusUpdateModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutStatusUpdateModalPage", function() { return AboutStatusUpdateModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");







var AboutStatusUpdateModalPage = /** @class */ (function () {
    function AboutStatusUpdateModalPage(modal, http, toastCtrl, ToastCtrl, navParams, router, events, commonService) {
        this.modal = modal;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.navParams = navParams;
        this.router = router;
        this.events = events;
        this.commonService = commonService;
        this.isbtnDisabled = true;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    AboutStatusUpdateModalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.l_description = this.navParams.get('aboutstat');
        this.l_userStatusAboutID = this.navParams.get('aboutsatusId');
        this.getLength(this.l_description, 100);
        setTimeout(function () {
            _this.input.setFocus();
        }, 1000);
    };
    AboutStatusUpdateModalPage.prototype.updateAbout = function () {
        var insertabout = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            UserStatusAboutID: this.l_userStatusAboutID,
            Description: this.l_description,
        };
        var options = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.insertUpdateUserAboutStatusURL;
        options.catchErrorText = 'UserController: error => addUser()';
        options.methodType = 'POST';
        options.paramData = insertabout;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true)
                localStorage.setItem('userAboutStatusID', data.Status[0].Value);
            localStorage.setItem('userAboutStatus', control.l_description);
            control.events.publish('updateStatus');
            control.modal.dismiss();
        };
        this.commonService.httpPost(options);
    };
    AboutStatusUpdateModalPage.prototype.closeModel = function () {
        this.modal.dismiss();
    };
    AboutStatusUpdateModalPage.prototype.getLength = function (value, totalTextValue) {
        this.maxlength = this.commonService.getTextBoxLength(value, totalTextValue);
    };
    ;
    AboutStatusUpdateModalPage.prototype.formValidation = function () {
        var aboutStatus = false;
        aboutStatus = this.commonService.commonValidation(this.l_description, 1);
        if (aboutStatus == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AboutStatusUpdateModalPage.prototype, "input", void 0);
    AboutStatusUpdateModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-status-update-modal',
            template: __webpack_require__(/*! ./about-status-update-modal.page.html */ "./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.html"),
            styles: [__webpack_require__(/*! ./about-status-update-modal.page.scss */ "./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], AboutStatusUpdateModalPage);
    return AboutStatusUpdateModalPage;
}());



/***/ }),

/***/ "./src/app/pages/popover/delete-status-popover/delete-status-popover.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-status-popover/delete-status-popover.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <h3 (click)=\"deleteStatus()\">Delete All</h3>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/delete-status-popover/delete-status-popover.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-status-popover/delete-status-popover.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0px;\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9kZWxldGUtc3RhdHVzLXBvcG92ZXIvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxwb3BvdmVyXFxkZWxldGUtc3RhdHVzLXBvcG92ZXJcXGRlbGV0ZS1zdGF0dXMtcG9wb3Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wb3Zlci9kZWxldGUtc3RhdHVzLXBvcG92ZXIvZGVsZXRlLXN0YXR1cy1wb3BvdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/popover/delete-status-popover/delete-status-popover.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/popover/delete-status-popover/delete-status-popover.page.ts ***!
  \***********************************************************************************/
/*! exports provided: DeleteStatusPopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStatusPopoverPage", function() { return DeleteStatusPopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");







var DeleteStatusPopoverPage = /** @class */ (function () {
    function DeleteStatusPopoverPage(http, toastCtrl, navParams, ToastCtrl, modal, router, popoverController, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.popoverController = popoverController;
        this.commonService = commonService;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    DeleteStatusPopoverPage.prototype.ngOnInit = function () { };
    DeleteStatusPopoverPage.prototype.deleteStatus = function () {
        var updateabout = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            UserStatusAboutID: 0,
            IsDeleted: 0,
            IsDeletedAll: 1,
        };
        var options = {};
        var control = this;
        options.title = 'delete status !!!';
        options.apiURL = this.env.userApi.deletestatus;
        options.catchErrorText = 'UserController: error => deleteStatus()';
        options.methodType = 'POST';
        options.paramData = updateabout;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.popoverController.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    DeleteStatusPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-status-popover',
            template: __webpack_require__(/*! ./delete-status-popover.page.html */ "./src/app/pages/popover/delete-status-popover/delete-status-popover.page.html"),
            styles: [__webpack_require__(/*! ./delete-status-popover.page.scss */ "./src/app/pages/popover/delete-status-popover/delete-status-popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], DeleteStatusPopoverPage);
    return DeleteStatusPopoverPage;
}());



/***/ }),

/***/ "./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <h4 (click)=\"deleteStatus(l_aboutStatusID)\">Delete</h4>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin: 0px;\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9zaW5nbGUtYWJvdXQtc3RhdHVzLXBvcG92ZXIvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxwb3BvdmVyXFxzaW5nbGUtYWJvdXQtc3RhdHVzLXBvcG92ZXJcXHNpbmdsZS1hYm91dC1zdGF0dXMtcG9wb3Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wb3Zlci9zaW5nbGUtYWJvdXQtc3RhdHVzLXBvcG92ZXIvc2luZ2xlLWFib3V0LXN0YXR1cy1wb3BvdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: SingleAboutStatusPopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleAboutStatusPopoverPage", function() { return SingleAboutStatusPopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");







var SingleAboutStatusPopoverPage = /** @class */ (function () {
    function SingleAboutStatusPopoverPage(http, toastCtrl, navParams, ToastCtrl, modal, router, popoverController, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.popoverController = popoverController;
        this.commonService = commonService;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    SingleAboutStatusPopoverPage.prototype.ngOnInit = function () {
        this.l_aboutStatusID = this.navParams.get('aboutsatusId');
    };
    SingleAboutStatusPopoverPage.prototype.deleteStatus = function (aboutstatusID) {
        var updateabout = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            UserStatusAboutID: aboutstatusID,
            IsDeleted: 1,
            IsDeletedAll: 0,
        };
        var options = {};
        var control = this;
        options.title = 'delete Status!!!';
        options.apiURL = this.env.userApi.deletestatus;
        options.catchErrorText = 'UserController: error => deleteStatus()';
        options.methodType = 'POST';
        options.paramData = updateabout;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.popoverController.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    SingleAboutStatusPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-about-status-popover',
            template: __webpack_require__(/*! ./single-about-status-popover.page.html */ "./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.html"),
            styles: [__webpack_require__(/*! ./single-about-status-popover.page.scss */ "./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], SingleAboutStatusPopoverPage);
    return SingleAboutStatusPopoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~about-status-about-status-module~tabs-tabs-module.js.map