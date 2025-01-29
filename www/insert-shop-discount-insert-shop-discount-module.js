(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insert-shop-discount-insert-shop-discount-module"],{

/***/ "./src/app/pages/insert-shop-discount/insert-shop-discount.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/insert-shop-discount/insert-shop-discount.module.ts ***!
  \***************************************************************************/
/*! exports provided: InsertShopDiscountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertShopDiscountPageModule", function() { return InsertShopDiscountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insert_shop_discount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert-shop-discount.page */ "./src/app/pages/insert-shop-discount/insert-shop-discount.page.ts");







var routes = [
    {
        path: '',
        component: _insert_shop_discount_page__WEBPACK_IMPORTED_MODULE_6__["InsertShopDiscountPage"]
    }
];
var InsertShopDiscountPageModule = /** @class */ (function () {
    function InsertShopDiscountPageModule() {
    }
    InsertShopDiscountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_insert_shop_discount_page__WEBPACK_IMPORTED_MODULE_6__["InsertShopDiscountPage"]]
        })
    ], InsertShopDiscountPageModule);
    return InsertShopDiscountPageModule;
}());



/***/ }),

/***/ "./src/app/pages/insert-shop-discount/insert-shop-discount.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/insert-shop-discount/insert-shop-discount.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"back()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Shop Basic Information\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <ion-item>\n                <div class=\"main\">\n                    <div class=\"text\">\n                        <ion-label position=\"floating\" style=\"color: #fb630f;\">Discount</ion-label>\n                        <ion-input type=\"number\" class=\"inputField\" name=\"l_discount\" [(ngModel)]=\"l_discount\"\n                            (keyup.enter)=\"insertShop()\">\n                        </ion-input>\n                    </div>\n                    <div class=\"textLength\">\n                        %\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Start Date</ion-label>\n                <ion-datetime display-format=\"YYYY-MMM-DD\" class=\"inputField\" name=\"l_startDate\" min=\"{{l_minDate}}\"\n                    [(ngModel)]=\"l_startDate\" (keyup)=\"formValidation()\" (ionChange)=\"formValidation()\"\n                    (keyup.enter)=\"insertShop()\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-checkbox (ionChange)=\"hideExpiryDate()\" style=\"color: #fb630f;\" (keyup.enter)=\"insertShop()\">\n                </ion-checkbox><span>WithOut Expiry\n                    Date</span>\n            </ion-item>\n            <ion-item [hidden]=\"l_hideExpiryDate\">\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Expiry Date</ion-label>\n                <ion-datetime display-format=\"YYYY-MMM-DD\" class=\"inputField\" name=\"l_endDate\" min=\"{{l_minDate}}\"\n                    [(ngModel)]=\"l_endDate\" (keyup)=\"formValidation()\" (ionChange)=\"formValidation()\"\n                    (keyup.enter)=\"insertShop()\"></ion-datetime>\n            </ion-item>\n            &nbsp;\n            &nbsp;\n            <!-- pic upload -->\n            <ion-list>\n                <ion-item>\n                    <ion-thumbnail slot=\"start\">\n                        <ion-img [src]=\"ImageURL\"></ion-img>\n                    </ion-thumbnail>\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"selectPhoto()\" style=\"color: #fb630f;\">\n                        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n                    </ion-button>\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"removeShopImage()\" style=\"color: #fb630f;\">\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n            </ion-list>\n            <!-- logo upload -->\n            <ion-list>\n                <ion-item>\n                    <ion-thumbnail slot=\"start\">\n                        <ion-img [src]=\"LogoURL\"></ion-img>\n                    </ion-thumbnail>\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"selectLogo()\" style=\"color: #fb630f;\">\n                        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n                    </ion-button>\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"removelogoImage()\" style=\"color: #fb630f;\">\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n            </ion-list>\n            <div class=\"footer\">\n                <div class=\"btn\">\n                    <ion-button class=\"bton\" fill=\"clear\" color=\"light\"\n                        [ngClass]=\"isbtnDisabled ? 'btn-disabled': 'btn-enable'\"\n                        [attr.disabled]=\"isbtnDisabled? true:null\" (click)=\"insertShop()\">\n                        Register Shop\n                    </ion-button>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/insert-shop-discount/insert-shop-discount.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/insert-shop-discount/insert-shop-discount.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.main {\n  padding: 0px;\n  margin: 0px;\n  width: 100%; }\n\n.main .text {\n    padding: 0px;\n    margin: 0px;\n    width: 85%;\n    float: left; }\n\n.main .textLength {\n    padding: 0px;\n    margin: 43px 0px 0px 0px;\n    width: 15%;\n    float: right;\n    color: #fb630f;\n    text-align: center; }\n\nspan {\n  margin-left: 5px;\n  font-size: 13px;\n  color: #fb630f; }\n\n.inputField {\n  text-transform: capitalize;\n  font-size: 13px;\n  float: left;\n  color: #2e3842;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  margin: 90px 0px 0px 0px;\n  float: left; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zZXJ0LXNob3AtZGlzY291bnQvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxpbnNlcnQtc2hvcC1kaXNjb3VudFxcaW5zZXJ0LXNob3AtZGlzY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CUyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUkzQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBSDFCO0lBS00sVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsMkJBQTRCLEVBQUE7O0FBR3BDO0VBQ0ksWUFBVztFQUNYLFdBQVU7RUFDVixXQUFVLEVBQUE7O0FBSGQ7SUFLUSxZQUFXO0lBQ1gsV0FBVTtJQUNWLFVBQVM7SUFDVCxXQUFXLEVBQUE7O0FBUm5CO0lBV1EsWUFBVztJQUNYLHdCQUF1QjtJQUN2QixVQUFTO0lBQ1QsWUFBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUFHMUI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFFaEM7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixXQUFXLEVBQUE7O0FBSmY7SUFNUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQWJ2QjtNQWVZLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc2VydC1zaG9wLWRpc2NvdW50L2luc2VydC1zaG9wLWRpc2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1OyAgXHJcbn1cclxuLmhlYWQtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgLm1haW5fbWVudXtcclxuICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggNnB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9sb2dve1xyXG4gICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluTGlua3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTdweCAwcHggMHB4IDBweDtcclxuICAgIC5jYXJkTWFpbkxpbmtze1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAyMnB4IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4IDtcclxuICAgIH1cclxufVxyXG4ubWFpbntcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIHdpZHRoOjg1JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC50ZXh0TGVuZ3Roe1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgIG1hcmdpbjo0M3B4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIHdpZHRoOjE1JTtcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIH1cclxufVxyXG5zcGFue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmI2MzBmO1xyXG59XHJcbi5pbnB1dEZpZWxke1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgXHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxufVxyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExJTtcclxuICAgIG1hcmdpbjogOTBweCAwcHggMHB4IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0OyBcclxuICAgIC5idG57XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIC5idG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/insert-shop-discount/insert-shop-discount.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/insert-shop-discount/insert-shop-discount.page.ts ***!
  \*************************************************************************/
/*! exports provided: InsertShopDiscountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertShopDiscountPage", function() { return InsertShopDiscountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _services_notificationservices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/notificationservices */ "./src/app/services/notificationservices.ts");












var InsertShopDiscountPage = /** @class */ (function () {
    function InsertShopDiscountPage(router, http, htttp, toastCtrl, ToastCtrl, camera, actionSheetController, transfer, fcm, ref, commonService) {
        this.router = router;
        this.http = http;
        this.htttp = htttp;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.fcm = fcm;
        this.ref = ref;
        this.commonService = commonService;
        this.isbtnDisabled = true;
        this.l_discount = localStorage.getItem('Discount');
        this.l_startDate = localStorage.getItem('StartDate');
        this.l_endDate = localStorage.getItem('EndDate');
        this.ImageURL = "";
        this.LogoURL = "";
        this.l_hideExpiryDate = false;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
        this.notificationService = new _services_notificationservices__WEBPACK_IMPORTED_MODULE_11__["Notificationservices"](this.http, toastCtrl, ToastCtrl, htttp, commonService);
    }
    InsertShopDiscountPage.prototype.ngOnInit = function () { };
    InsertShopDiscountPage.prototype.ionViewWillEnter = function () {
        this.l_minDate = this.commonService.getMinDate(new Date());
        var getRealTimeImage = localStorage.getItem('RealTimeShopImage_' + localStorage.getItem("userID"));
        var getRealTimeLogo = localStorage.getItem('RealTimeLogo_' + localStorage.getItem("userID"));
        //var uploadCheck = localStorage.getItem('RealTimeImageUploadCheck'+ localStorage.getItem("userID"));
        if (getRealTimeImage != null) {
            this.ImageURL = getRealTimeImage;
            this.ref.detectChanges();
        }
        else {
            this.ImageURL = "../../../assets/img/notfound.png";
        }
        if (getRealTimeLogo != null) {
            this.LogoURL = getRealTimeLogo;
            this.ref.detectChanges();
        }
        else {
            this.LogoURL = "../../../assets/img/logo.png";
        }
        this.l_discount = localStorage.getItem('Discount');
        this.l_startDate = localStorage.getItem('StartDate');
        this.l_endDate = localStorage.getItem('EndDate');
        this.formValidation();
    };
    InsertShopDiscountPage.prototype.formValidation = function () {
        var startDate = false;
        var endDate = false;
        startDate = this.commonService.commonValidation(this.l_startDate, 3);
        endDate = this.commonService.commonValidation(this.l_endDate, 3);
        if (this.l_hideExpiryDate) {
            endDate = false;
        }
        if (startDate == false && endDate == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    };
    InsertShopDiscountPage.prototype.insertShop = function () {
        if (this.isbtnDisabled == true) {
            return;
        }
        var registershop = {
            CategoryID: 1,
            ShopID: 0,
            ShopName: localStorage.getItem('UserShopName'),
            Address1: localStorage.getItem('Address'),
            City: localStorage.getItem('City'),
            State: localStorage.getItem('State'),
            OpeningTime: localStorage.getItem('OpeningTime'),
            ClosingTime: localStorage.getItem('ClosingTime'),
            Mobile: localStorage.getItem('Mobile'),
            Phone: localStorage.getItem('Phone') == '' ? null : localStorage.getItem('Phone'),
            ImageURL: this.shopImage,
            LogoURL: this.logoImage,
            UserName: localStorage.getItem('userName'),
            UserID: localStorage.getItem('userID'),
            Discount: this.l_discount,
            StartDate: this.l_startDate,
            EndDate: this.l_endDate,
            Latitude: localStorage.getItem('Latitude'),
            Longitude: localStorage.getItem('Longitude')
        };
        var options = {};
        var control = this;
        options.title = 'registershop!!!';
        options.apiURL = this.env.shopApi.registerShop;
        options.catchErrorText = 'UserController: error => favourite()';
        options.methodType = 'POST';
        options.paramData = registershop;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                var optionMsg = {};
                // let options: any = {};
                if (registershop) {
                    optionMsg.message = 'Record Enter Successfull';
                    // options.topic = localStorage.getItem('ShopNotificationTopic');
                    // options.title = localStorage.getItem('UserShopName');
                    // options.body = 'NewShop '+localStorage.getItem('UserShopName')+' has been added on ' + localStorage.getItem('Address') + ', ' + localStorage.getItem('City') + ', ' + localStorage.getItem('State') + '.';
                    // options.shopID = data.Status[0].ID;
                    // control.notificationService.newNotification(options);
                }
                else
                    optionMsg.message = 'Record not Enter';
                control.commonService.msgToast(optionMsg);
                control.commonService.removeShopStorage();
                localStorage.removeItem("hideValue");
                control.router.navigate(['user-ShopList']);
                return;
            }
        };
        this.commonService.httpPost(options);
    };
    InsertShopDiscountPage.prototype.back = function () {
        localStorage.setItem('Discount', this.l_discount);
        localStorage.setItem('StartDate', this.l_startDate);
        localStorage.setItem('EndDate', this.l_endDate);
        this.router.navigate(['insert-shop-timing']);
    };
    ///////////////////////////Shop Image Upload//////////////////////////////////
    InsertShopDiscountPage.prototype.selectPhoto = function () {
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
                                        _this.removeShopImage();
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
    InsertShopDiscountPage.prototype.randomValue = function () {
        var min = 1;
        var maxNumber = 400000;
        var my_random_value = min + (maxNumber - min) * Math.random();
        return my_random_value.toFixed(0);
    };
    InsertShopDiscountPage.prototype.takePicture = function (sourceType) {
        var control = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: this.env.cropImageProperties.width,
            targetHeight: this.env.cropImageProperties.height
            // encodingType:this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imagePath) {
            control.ImageURL = 'data:image/jpeg;base64,' + imagePath;
            localStorage.setItem('RealTimeShopImage_' + localStorage.getItem('userID'), control.ImageURL);
            control.ref.detectChanges();
            control.uploadShopImage();
        });
    };
    InsertShopDiscountPage.prototype.uploadShopImage = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var shopFileName;
        if (localStorage.getItem('getExistingshopFileName') == null) {
            shopFileName = "Shop_" + localStorage.getItem("userID") + "_" + this.randomValue() + ".jpg";
        }
        else {
            shopFileName = localStorage.getItem('getExistingshopFileName');
        }
        var options = {
            fileKey: "file",
            fileName: shopFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };
        fileTransfer.upload(this.ImageURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.ShopImage, options).then(function (res) {
            _this.shopImage = _this.env.imgServerFolder.ShopImage + "/" + shopFileName;
            localStorage.setItem('getExistingshopFileName', shopFileName);
        }, function (err) {
            debugger;
        });
    };
    InsertShopDiscountPage.prototype.removeShopImage = function () {
        this.ImageURL = "../../../assets/img/notfound.png";
        this.ref.detectChanges();
    };
    ///////////////////////////Logo Image Upload//////////////////////////////////
    InsertShopDiscountPage.prototype.selectLogo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: "Select Image source",
                                buttons: [{
                                        text: 'Gallery',
                                        icon: 'images',
                                        handler: function () {
                                            _this.takePicturelogo(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                        }
                                    },
                                    {
                                        text: 'Camera',
                                        icon: 'camera',
                                        handler: function () {
                                            _this.takePicturelogo(_this.camera.PictureSourceType.CAMERA);
                                        }
                                    },
                                    {
                                        text: 'Remove Image',
                                        icon: 'trash',
                                        handler: function () {
                                            _this.removelogoImage();
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
    InsertShopDiscountPage.prototype.takePicturelogo = function (sourceType) {
        debugger;
        var control = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: this.env.cropImageProperties.width,
            targetHeight: this.env.cropImageProperties.height
            // encodingType:this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imagePath) {
            control.LogoURL = 'data:image/jpeg;base64,' + imagePath;
            localStorage.setItem('RealTimeLogo_' + localStorage.getItem('userID'), control.LogoURL);
            control.ref.detectChanges();
            control.uploadLogo();
        });
    };
    InsertShopDiscountPage.prototype.uploadLogo = function () {
        var _this = this;
        debugger;
        var fileTransfer = this.transfer.create();
        var logoFileName;
        if (localStorage.getItem('getExistingLogoName') == null) {
            logoFileName = "Logo_" + localStorage.getItem("userID") + "_" + this.randomValue() + ".jpg";
        }
        else {
            logoFileName = localStorage.getItem('getExistingLogoName');
        }
        var options = {
            fileKey: "file",
            fileName: logoFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };
        fileTransfer.upload(this.LogoURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.LogoImage, options).then(function (res) {
            _this.logoImage = _this.env.imgServerFolder.LogoImage + "/" + logoFileName;
            localStorage.setItem('getExistingLogoName', logoFileName);
        }, function (err) {
            debugger;
        });
    };
    InsertShopDiscountPage.prototype.removelogoImage = function () {
        this.LogoURL = "../../../assets/img/logo.png";
        this.ref.detectChanges();
    };
    InsertShopDiscountPage.prototype.hideExpiryDate = function () {
        if (this.l_hideExpiryDate) {
            this.l_hideExpiryDate = false;
            this.formValidation();
        }
        else {
            this.l_endDate = null;
            this.l_hideExpiryDate = true;
            this.formValidation();
        }
    };
    InsertShopDiscountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insert-shop-discount',
            template: __webpack_require__(/*! ./insert-shop-discount.page.html */ "./src/app/pages/insert-shop-discount/insert-shop-discount.page.html"),
            styles: [__webpack_require__(/*! ./insert-shop-discount.page.scss */ "./src/app/pages/insert-shop-discount/insert-shop-discount.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_http__WEBPACK_IMPORTED_MODULE_9__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], InsertShopDiscountPage);
    return InsertShopDiscountPage;
}());



/***/ })

}]);
//# sourceMappingURL=insert-shop-discount-insert-shop-discount-module.js.map