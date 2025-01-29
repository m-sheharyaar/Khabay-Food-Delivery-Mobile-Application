(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-card class=\"maincardPic\">\n        <div class=\"body\">\n            <div class=\"card_pic\">\n                <img src=\"../../../assets/img/settingPic.jpg\" style=\"height: 100%\" />\n            </div>\n            <div class=\"card_price\">\n                <label>Setting</label>\n            </div>\n        </div>\n        <div class=\"sub-body\">\n        </div>\n        <div class=\"maincardProfile\">\n            <ion-card class=\"profileCard\">\n                <div class=\"pic\">\n                    <ion-avatar class=\"pic-circle\">\n                        <div class=\"text-circle\" *ngIf=\"l_oldImage === null\">\n                            {{l_textForPic}}\n                        </div>\n                        <ion-img *ngIf=\"l_oldImage != null\" [src]=\"ImageURL\"></ion-img>\n                        <div class=\"change-pic\">\n                            <ion-icon name=\"camera\" class=\"camera-icon\" (click)=\"selectPhoto()\"></ion-icon>\n                        </div>\n                    </ion-avatar>\n                </div>\n                <div class=\"profileNameMain\">\n                    <div class=\"profileName\">\n                        {{l_firstName}} {{l_lastName}}\n                        <!-- {{l_userName}} -->\n                    </div>\n                    <div class=\"profileStatus\">\n                        {{l_userStatus}}\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </ion-card>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <ul class=\"list\">\n                <li class=\"list-menu\" (click)=\"gotoProfile()\">\n                    <ion-icon name=\"person\"></ion-icon>\n                    <label>Profile</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"gotoNotification()\">\n                    <ion-icon name=\"notifications\"></ion-icon>\n                    <label>Notification</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"gotoFavourite()\">\n                    <ion-icon name=\"heart\"></ion-icon>\n                    <label>Favourite</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"gotoSuscribe()\">\n                    <ion-icon name=\"notifications\"></ion-icon>\n                    <label>Suscribe</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"gotoRegistershop()\" [hidden]=\"!l_isShopAdmin\">\n                    <ion-icon name=\"clipboard\"></ion-icon>\n                    <label>Register Shop</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"gotoMyShop()\" [hidden]=\"!l_isShopAdmin\">\n                    <ion-icon name=\"ios-restaurant\"></ion-icon>\n                    <label>My Shops</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"gotoAdminAproval()\"\n                    [ngClass]=\"l_shopAdminStatusID == env.ShopAdminStatus.Approved ? 'hideAdminMenu': ''\">\n                    <ion-icon class=\"icon\" name=\"alert\"\n                        [ngClass]=\"l_shopAdminStatusID == env.ShopAdminStatus.Blocked || l_shopAdminStatusID == env.ShopAdminStatus.Pending ? 'span-text-color': 'span-text'\">\n                    </ion-icon>\n                    <span\n                        [ngClass]=\"l_shopAdminStatusID == env.ShopAdminStatus.Blocked || l_shopAdminStatusID == env.ShopAdminStatus.Pending ? 'span-text-color': 'span-text'\"\n                        style=\" padding: 0px 0px 0px 10px;\">Request\n                        For Shop Admin</span>\n                    <span class=\"pending\"\n                        [ngClass]=\"l_shopAdminStatusID == env.ShopAdminStatus.Blocked || l_shopAdminStatusID == env.ShopAdminStatus.Reject ? 'span-color': ''\">{{l_shopAdminStatus}}</span>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"gotoHelp()\">\n                    <ion-icon name=\"help\"></ion-icon>\n                    <label>Help</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n                <li class=\"list-menu\" (click)=\"logout()\">\n                    <ion-icon name=\"log-out\"></ion-icon>\n                    <label>Logout</label>\n                    <ion-icon name=\"ios-arrow-back\" class=\"goicon\"></ion-icon>\n                </li>\n            </ul>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.maincardPic {\n  width: 100%;\n  height: 160px;\n  margin: 0px 0px 0px 0px;\n  border-radius: 0px; }\n\n.card_pic {\n  width: 100%;\n  height: 100%;\n  float: left;\n  margin: 0px;\n  position: relative;\n  z-index: 90;\n  padding: 0px; }\n\n.card_price {\n  width: 100%;\n  height: auto;\n  margin: 37px 0px 0px 0px;\n  float: left;\n  padding: 0px;\n  position: absolute;\n  z-index: 100; }\n\n.card_price label {\n    font-size: 15px;\n    margin: 0px 0px 0px 43%;\n    color: #fff;\n    text-align: center;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.body {\n  width: 100%;\n  height: 100%;\n  float: left;\n  position: relative; }\n\n.sub-body {\n  width: 100%;\n  height: 160px;\n  background-color: #2e3842;\n  opacity: 0.9;\n  text-align: center;\n  position: absolute;\n  z-index: 90;\n  float: left;\n  bottom: 0; }\n\n.maincardProfile {\n  width: 100%;\n  height: 120px;\n  margin: 107px 0px 0px 0px;\n  position: fixed;\n  z-index: 90; }\n\n.maincardProfile .profileCard {\n    width: 90%;\n    height: 100px;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.maincardProfile .profileCard .pic {\n      height: 100px;\n      width: 30%;\n      float: left;\n      margin: 0px; }\n\n.maincardProfile .profileCard .pic .pic-circle {\n        height: 75px;\n        width: 75px;\n        margin: 11px 20px 11px 20px;\n        position: relative;\n        text-align: center;\n        color: #fff;\n        background-color: #2e3842; }\n\n.maincardProfile .profileCard .pic .pic-circle .text-circle {\n          margin: auto;\n          width: 100%;\n          text-align: center;\n          font-size: 25px;\n          font-weight: bold;\n          padding: 20px 10px 10px 10px;\n          text-transform: capitalize;\n          font-family: 'Poppins';\n          font-style: normal;\n          font-variant: normal; }\n\n.maincardProfile .profileCard .pic .pic-circle .change-pic {\n          position: absolute;\n          top: 70%;\n          width: 31%;\n          height: 31%;\n          margin: 0px 0px 0px 50px;\n          border-radius: 100%;\n          text-align: center;\n          background-color: #fb630f;\n          border: #fb630f 1px solid; }\n\n.maincardProfile .profileCard .pic .pic-circle .change-pic .camera-icon {\n            font-size: 14px;\n            margin: 3px 3px 3px 3px; }\n\n.maincardProfile .profileCard .profileNameMain {\n      width: 65%;\n      height: 100px;\n      float: left;\n      text-align: left;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.maincardProfile .profileCard .profileNameMain .profileName {\n        width: 90%;\n        height: auto;\n        font-weight: bolder;\n        margin: 30px 0px 0px 17px;\n        font-size: 15px;\n        color: #2e3842; }\n\n.maincardProfile .profileCard .profileNameMain .profileStatus {\n        width: 90%;\n        height: auto;\n        font-size: 10px;\n        font-weight: normal;\n        margin: 0px 0px 0px 19px;\n        color: #969ba1; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 60px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 20px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.mainLinks .list {\n    padding: 0px; }\n\n.mainLinks .list .list-menu {\n      color: #2e3842;\n      font-size: 13px;\n      padding: 10px 0px 9px 0px;\n      border-bottom: 0.7px solid #969ba1;\n      list-style-type: none;\n      background-color: #fff;\n      float: left;\n      width: 100%;\n      height: auto; }\n\n.mainLinks .list .list-menu label {\n        width: auto;\n        font-weight: bold;\n        font-size: 11px;\n        text-align: left;\n        font-family: 'Poppins';\n        font-style: normal;\n        font-variant: normal;\n        padding: 0px 0px 0px 10px; }\n\n.mainLinks .list .list-menu .goicon {\n        color: #969ba1;\n        font-size: 13px;\n        float: right;\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.mainLinks .list .list-menu ion-icon {\n        margin-top: 2px;\n        float: left;\n        font-size: 12px;\n        color: #fb630f; }\n\n.mainLinks .list .list-menu .icon {\n        float: left; }\n\n.mainLinks .list .list-menu .span-text {\n        float: left;\n        color: #fb630f;\n        font-style: none; }\n\n.mainLinks .list .list-menu .span-text-color {\n        color: #D3D3D3;\n        float: left;\n        font-style: none !important; }\n\n.mainLinks .list .list-menu span {\n        float: right; }\n\n.mainLinks .list .list-menu .pending {\n        color: #969ba1;\n        float: right;\n        font-style: italic; }\n\n.mainLinks .list .list-menu .span-color {\n        color: red;\n        float: right; }\n\n.hideAdminMenu {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFXLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQVBoQjtJQVNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNRLFdBQVU7RUFDVixZQUFXO0VBQ1gsV0FBVTtFQUNWLGtCQUFrQixFQUFBOztBQUUxQjtFQUNZLFdBQVU7RUFDVixhQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2pCLFdBQVc7RUFDWCxXQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBTGY7SUFPUSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUE0QixFQUFBOztBQVpwQztNQWNZLGFBQVk7TUFDWixVQUFTO01BQ1QsV0FBVztNQUNYLFdBQVUsRUFBQTs7QUFqQnRCO1FBbUJZLFlBQVk7UUFDWixXQUFXO1FBQ1gsMkJBQTJCO1FBQzFCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLHlCQUF5QixFQUFBOztBQXpCdEM7VUEyQmEsWUFBWTtVQUNaLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQiw0QkFBNEI7VUFDNUIsMEJBQTBCO1VBQzFCLHNCQUFzQjtVQUN0QixrQkFBa0I7VUFDbEIsb0JBQW9CLEVBQUE7O0FBcENqQztVQXVDZ0Isa0JBQWtCO1VBQ2xCLFFBQVE7VUFDUixVQUFVO1VBQ1YsV0FBVztVQUNYLHdCQUF3QjtVQUN4QixtQkFBbUI7VUFDbkIsa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6Qix5QkFBd0IsRUFBQTs7QUEvQ3hDO1lBaURvQixlQUFlO1lBQ2YsdUJBQXVCLEVBQUE7O0FBbEQzQztNQXdEWSxVQUFVO01BQ1YsYUFBYTtNQUNiLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixvQkFBb0IsRUFBQTs7QUE5RGhDO1FBZ0VZLFVBQVU7UUFDVixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsY0FBYyxFQUFBOztBQXJFMUI7UUF3RVksVUFBVTtRQUNWLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixjQUFjLEVBQUE7O0FBSzFCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0IsRUFBQTs7QUFINUI7SUFLUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwyQkFBNEIsRUFBQTs7QUFYcEM7SUFjUSxZQUFXLEVBQUE7O0FBZG5CO01BZ0JZLGNBQWM7TUFDZCxlQUFlO01BQ2YseUJBQXlCO01BQ3pCLGtDQUFrQztNQUNsQyxxQkFBcUI7TUFDckIsc0JBQXFCO01BQ3JCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQXhCeEI7UUEwQlksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLHlCQUF5QixFQUFBOztBQWpDckM7UUFvQ2dCLGNBQWE7UUFDYixlQUFlO1FBQ2YsWUFBWTtRQUNaLGlDQUF5QjtnQkFBekIseUJBQXlCLEVBQUE7O0FBdkN6QztRQTBDZ0IsZUFBZTtRQUNmLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYyxFQUFBOztBQTdDOUI7UUFnRGdCLFdBQVcsRUFBQTs7QUFoRDNCO1FBbURjLFdBQVc7UUFDWCxjQUFjO1FBQ2QsZ0JBQWdCLEVBQUE7O0FBckQ5QjtRQXdEZ0IsY0FBYztRQUNkLFdBQVc7UUFDWCwyQkFBMkIsRUFBQTs7QUExRDNDO1FBNkRhLFlBQVksRUFBQTs7QUE3RHpCO1FBZ0VnQixjQUFjO1FBQ2QsWUFBWTtRQUNaLGtCQUFrQixFQUFBOztBQWxFbEM7UUFxRWdCLFVBQVU7UUFDVixZQUFZLEVBQUE7O0FBSzVCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLm1haW5jYXJkUGlje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuLmNhcmRfcGlje1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiA5MDtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxufVxyXG4uY2FyZF9wcmljZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDM3cHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDBweDsgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDsgXHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDQzJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgfVxyXG59IFxyXG4uYm9keXtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdWItYm9keXtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjE2MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICB6LWluZGV4OiA5MDtcclxuICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICBib3R0b206IDA7XHJcbn1cclxuLm1haW5jYXJkUHJvZmlsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbjogMTA3cHggMHB4IDBweCAwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5MDtcclxuICAgIC5wcm9maWxlQ2FyZHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICAgICAgLnBpY3tcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAucGljLWNpcmNsZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMXB4IDIwcHggMTFweCAyMHB4O1xyXG4gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICAgLnRleHQtY2lyY2xle1xyXG4gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5jaGFuZ2UtcGljIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzElO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6I2ZiNjMwZiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICAuY2FtZXJhLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZmlsZU5hbWVNYWlue1xyXG4gICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgXHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICAgICAucHJvZmlsZU5hbWV7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAwcHggMTdweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLnByb2ZpbGVTdGF0dXN7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDE5cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1haW5MaW5rc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiA2MHB4IDBweCAwcHggMHB4O1xyXG4gICAgLmNhcmRNYWluTGlua3N7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4IDIwcHggMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNkOGQ4ZDggO1xyXG4gICAgfVxyXG4gICAgLmxpc3R7XHJcbiAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgLmxpc3QtbWVudXtcclxuICAgICAgICAgICAgY29sb3I6ICMyZTM4NDI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHggOXB4IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC43cHggc29saWQgIzk2OWJhMTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ29pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6Izk2OWJhMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zcGFuLXRleHR7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3Bhbi10ZXh0LWNvbG9ye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEM0QzRDM7ICBcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57IFxyXG4gICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgLnBlbmRpbmd7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3Bhbi1jb2xvcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmhpZGVBZG1pbk1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_request_shop_admin_request_shop_admin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/request-shop-admin/request-shop-admin.page */ "./src/app/pages/modal/request-shop-admin/request-shop-admin.page.ts");
/* harmony import */ var _viewModel_user_vm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../viewModel/user-vm */ "./src/app/viewModel/user-vm.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");











var SettingsPage = /** @class */ (function () {
    function SettingsPage(http, toastCtrl, ToastCtrl, modal, router, actionSheetController, popoverController, events, commonService, ref, camera, transfer, platform) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.popoverController = popoverController;
        this.events = events;
        this.commonService = commonService;
        this.ref = ref;
        this.camera = camera;
        this.transfer = transfer;
        this.platform = platform;
        this.l_isShopAdmin = false;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_3__["Env"]();
        this.userVm = new _viewModel_user_vm__WEBPACK_IMPORTED_MODULE_8__["UserVM"]();
    }
    SettingsPage.prototype.ngOnInit = function () {
        this.platform.backButton.subscribe(function () {
            localStorage.setItem('othertabs', 'true');
            localStorage.removeItem('hometab');
        });
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        localStorage.setItem('othertabs', 'true');
        localStorage.removeItem('hometab');
        this.l_textForPic = localStorage.getItem('TextForImage');
        this.ImageURL = null;
        this.getUserRole();
        this.getUser();
        this.events.unsubscribe('updateStatus');
        this.events.subscribe('updateStatus', function () {
            _this.l_userStatus = localStorage.getItem('userAboutStatus');
        });
        this.events.unsubscribe('updateName');
        this.events.subscribe('updateName', function () {
            _this.getUser();
        });
    };
    SettingsPage.prototype.gotoHelp = function () {
        this.router.navigate(['help']);
    };
    SettingsPage.prototype.gotoNotification = function () {
        this.router.navigate(['notifications']);
    };
    SettingsPage.prototype.gotoFavourite = function () {
        this.router.navigate(['favorites']);
    };
    SettingsPage.prototype.gotoSuscribe = function () {
        this.router.navigate(['shop-subscription']);
    };
    SettingsPage.prototype.gotoRegistershop = function () {
        this.commonService.removeShopStorage();
        this.router.navigate(['insert-shop-basicInformation']);
    };
    SettingsPage.prototype.gotoProfile = function () {
        this.router.navigate(['user-profile']);
    };
    SettingsPage.prototype.gotoMyShop = function () {
        this.router.navigate(['user-ShopList']);
    };
    SettingsPage.prototype.gotoAdminAproval = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pending, blocked, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pending = this.env.ShopAdminStatus.Pending;
                        blocked = this.env.ShopAdminStatus.Blocked;
                        if (this.l_shopAdminStatusID == pending || this.l_shopAdminStatusID == blocked) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modal.create({
                                component: _modal_request_shop_admin_request_shop_admin_page__WEBPACK_IMPORTED_MODULE_7__["RequestShopAdminPage"],
                                componentProps: {
                                //searchShopName: this.l_searchShop
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getUserRole();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.getUserRole = function () {
        var options = {};
        var control = this;
        options.title = 'Get - Get about!!!';
        options.apiURL = this.env.userApi.getUserMenuRoleWiseURL + localStorage.getItem('userID'); //UserID
        options.catchErrorText = 'SettingController: error => getUserRole()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                if (data.Result.length > 0) {
                    if (control.env.ShopAdminStatus.Approved == data.Result[0].StatusID) {
                        control.l_isShopAdmin = true;
                    }
                    else {
                        control.l_isShopAdmin = false;
                    }
                    control.l_shopAdminStatusID = data.Result[0].StatusID;
                    control.l_shopAdminStatus = data.Result[0].Status;
                }
            }
        };
        this.commonService.httpPost(options);
    };
    SettingsPage.prototype.getUser = function () {
        var options = {};
        var control = this;
        options.title = 'Get - Get User!!!';
        options.apiURL = this.env.userApi.getUserURL + localStorage.getItem('userID');
        options.catchErrorText = 'UserController: error => GetUser()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_userid = data.Result[0].UserID;
                control.l_userName = data.Result[0].UserName;
                control.l_firstName = data.Result[0].FirstName;
                control.l_lastName = data.Result[0].LastName;
                control.l_countryCode = data.Result[0].CountryCode;
                control.l_phoneNumber = data.Result[0].PhoneNumber;
                control.l_userStatus = data.Result[0].UserStatus;
                control.l_userAboutStatusId = data.Result[0].UserAboutStatusID;
                control.l_oldImage = data.Result[0].ImageURL;
                if (control.l_oldImage == null) {
                    control.l_textForPic = localStorage.getItem('TextForImage');
                }
                else {
                    localStorage.setItem('userImageURL', control.l_oldImage);
                    control.ImageURL = control.env.imageURL + control.l_oldImage;
                }
                var getRealTimeImage = localStorage.getItem('RealTimeImage_' + localStorage.getItem("userID"));
                var uploadCheck = localStorage.getItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"));
                var updateCheck = localStorage.getItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"));
                if (getRealTimeImage != null && uploadCheck == 'true' && updateCheck == 'true') {
                    control.ImageURL = getRealTimeImage;
                }
                control.ref.detectChanges();
            }
        };
        this.commonService.httpPost(options);
    };
    ///////////////////////////User Image Upload//////////////////////////////////
    SettingsPage.prototype.selectPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Gallery',
                                    icon: 'images',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Remove Image',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.RemoveUserImage();
                                    }
                                },
                                {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.takePicture = function (sourceType) {
        var control = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300
            // encodingType:this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imagePath) {
            control.ImageURL = 'data:image/jpeg;base64,' + imagePath;
            localStorage.setItem('RealTimeImage_' + localStorage.getItem('userID'), control.ImageURL);
            control.ref.detectChanges();
            control.uploadUserImage();
        });
    };
    SettingsPage.prototype.uploadUserImage = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var userFileName = "User_" + localStorage.getItem("userID") + ".jpg";
        localStorage.setItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"), 'false');
        var options = {
            fileKey: "file",
            fileName: userFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };
        fileTransfer.upload(this.ImageURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.UserImage, options).then(function (res) {
            localStorage.setItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"), 'true');
            _this.l_userImage = _this.env.imgServerFolder.UserImage + "/" + userFileName;
            _this.editUser();
        }, function (err) {
            debugger;
        });
    };
    SettingsPage.prototype.editUser = function () {
        localStorage.setItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"), 'false');
        var editusers = {
            UserID: localStorage.getItem('userID'),
            UserName: this.l_userName,
            FirstName: this.l_firstName,
            LastName: this.l_lastName,
            CountryCode: this.l_countryCode,
            PhoneNumber: this.l_phoneNumber,
            ImageURL: this.l_userImage,
        };
        var options = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.updateUserURL;
        options.catchErrorText = 'UserController: error => editUser()';
        options.methodType = 'POST';
        options.paramData = editusers;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                localStorage.setItem('userImageURL', control.l_userImage);
                control.events.publish('updateUserImage');
                control.l_oldImage = !null;
                localStorage.setItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"), 'true');
                //control.ImageURL = control.env.imageURL + control.l_userImage;
                control.getUser();
                control.ref.detectChanges();
            }
        };
        this.commonService.httpPost(options);
    };
    SettingsPage.prototype.RemoveUserImage = function () {
        var p_commonVm = {
            UserID: localStorage.getItem('userID')
        };
        var options = {};
        var control = this;
        options.title = 'edit User Image!!!';
        options.apiURL = this.env.commonApi.removeUserAndShopImage;
        options.catchErrorText = 'UserController: error => RemoveUserImage()';
        options.methodType = 'POST';
        options.paramData = p_commonVm;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                localStorage.setItem('userImageURL', null);
                control.events.publish('updateUserImage');
                localStorage.removeItem('RealTimeImage_' + localStorage.getItem('userID'));
                control.l_oldImage = null;
                control.l_textForPic = localStorage.getItem('TextForImage');
                control.ref.detectChanges();
            }
        };
        this.commonService.httpPost(options);
    };
    SettingsPage.prototype.logout = function () {
        this.router.navigateByUrl('/signup_phone');
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_4__["Commonservices"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map