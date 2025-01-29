(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~settings-settings-module~tabs-tabs-module"],{

/***/ "./src/app/pages/modal/request-shop-admin/request-shop-admin.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/modal/request-shop-admin/request-shop-admin.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"back()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Request Shop Admin\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <div class=\"text\">\n                Please read these terms and conditions of service carefully before you launch mobile products, services\n                or\n                applications provided by Liberty University. These terms and conditions of service represent the\n                agreement\n                (“Agreement”) between you and Liberty University, Inc. (“Liberty University”) with respect to the\n                Liberty\n                University application service (the “Liberty University Service” or “Service”).\n            </div>\n            <div class=\"check_box\" (click)=\"chkAgreed()\">\n                <!-- <ion-checkbox [(ngModel)]=\"checkbox\" ></ion-checkbox><span>I Agree Term and Condition</span> -->\n                <input type=\"checkbox\" [(ngModel)]=\"checkbox\"><span>I Agree Term and Condition</span>\n            </div>\n        </ion-card>\n    </div>\n    <div class=\"footer\">\n        <div class=\"btn\">\n            <ion-button class=\"bton\" fill=\"clear\" color=\"light\" [disabled]=\"disabled\"\n                (click)=\"insertUpdateUserShopAdminRole()\">\n                Done\n            </ion-button>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/modal/request-shop-admin/request-shop-admin.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/modal/request-shop-admin/request-shop-admin.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.text {\n  padding: 5px;\n  text-align: justify; }\n\n.check_box {\n  width: 100%;\n  margin-top: 5px;\n  color: #fb630f; }\n\n.check_box span {\n    font-weight: bold;\n    padding: 0px;\n    margin: 0px 0px 0px 3px;\n    position: absolute; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  float: left;\n  bottom: 0px;\n  position: fixed; }\n\n.footer .btn {\n    width: 90%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwvcmVxdWVzdC1zaG9wLWFkbWluL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcbW9kYWxcXHJlcXVlc3Qtc2hvcC1hZG1pblxccmVxdWVzdC1zaG9wLWFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWY7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUhyQjtJQUtNLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVGpCO01BV1UsVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJyQjtNQW1CTyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUkzQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBSDFCO0lBS00sVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsMkJBQTRCLEVBQUE7O0FBR3BDO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxlQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUhsQjtJQUtJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBRVgsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBTm5CO0lBUVEsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFmdkI7TUFpQlksV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kYWwvcmVxdWVzdC1zaG9wLWFkbWluL3JlcXVlc3Qtc2hvcC1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTsgIFxyXG4gIH1cclxuICAuaGVhZC1tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmYjYzMGY7XHJcbiAgICAubWFpbl9tZW51e1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDBweCA2cHggMTJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNnB4IDZweCA2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0X2xvZ297XHJcbiAgICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1haW5MaW5rc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxN3B4IDBweCAwcHggMHB4O1xyXG4gICAgLmNhcmRNYWluTGlua3N7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4IDIycHggMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNkOGQ4ZDggO1xyXG4gICAgfVxyXG59XHJcbi50ZXh0e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY2hlY2tfYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjVweDsgXHJcbiAgICBjb2xvcjogI2ZiNjMwZjtcclxuICBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46MHB4IDBweCAwcHggM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExJTtcclxuICAgIC8vbWFyZ2luOiAyNDBweCAwcHggMHB4IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0OyBcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLmJ0bntcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgLmJ0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/modal/request-shop-admin/request-shop-admin.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modal/request-shop-admin/request-shop-admin.page.ts ***!
  \***************************************************************************/
/*! exports provided: RequestShopAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestShopAdminPage", function() { return RequestShopAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var RequestShopAdminPage = /** @class */ (function () {
    function RequestShopAdminPage(modal, http, toastCtrl, ToastCtrl, ref, commonService) {
        this.modal = modal;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.ref = ref;
        this.commonService = commonService;
        this.disabled = true;
        this.checkbox = false;
        this.l_checkbox = false;
        this.checkbox1 = false;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
    }
    RequestShopAdminPage.prototype.ngOnInit = function () {
    };
    RequestShopAdminPage.prototype.chkAgreed = function () {
        if (this.l_checkbox) {
            this.disabled = true;
            this.checkbox = false;
            this.l_checkbox = false;
        }
        else {
            this.disabled = false;
            this.checkbox = true;
            this.l_checkbox = true;
        }
        this.ref.detectChanges();
    };
    RequestShopAdminPage.prototype.insertUpdateUserShopAdminRole = function () {
        var shopAdminRole = {
            UserID: localStorage.getItem('userID'),
            RoleID: this.env.adminRole.ShopAdminID,
            Status: this.env.ShopAdminStatus.Pending,
        };
        var options = {};
        var control = this;
        options.title = 'insertUpdateUserShopAdminRole!!!';
        options.apiURL = this.env.userApi.insertUpdateUserShopAdminRole;
        options.catchErrorText = 'UserController: error => insertUpdateUserShopAdminRole()';
        options.methodType = 'POST';
        options.paramData = shopAdminRole;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.modal.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    RequestShopAdminPage.prototype.back = function () {
        this.modal.dismiss();
    };
    RequestShopAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-shop-admin',
            template: __webpack_require__(/*! ./request-shop-admin.page.html */ "./src/app/pages/modal/request-shop-admin/request-shop-admin.page.html"),
            styles: [__webpack_require__(/*! ./request-shop-admin.page.scss */ "./src/app/pages/modal/request-shop-admin/request-shop-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], RequestShopAdminPage);
    return RequestShopAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~settings-settings-module~tabs-tabs-module.js.map