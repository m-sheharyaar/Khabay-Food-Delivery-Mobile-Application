(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insert-shop-timing-insert-shop-timing-module"],{

/***/ "./src/app/pages/insert-shop-timing/insert-shop-timing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/insert-shop-timing/insert-shop-timing.module.ts ***!
  \***********************************************************************/
/*! exports provided: InsertShopTimingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertShopTimingPageModule", function() { return InsertShopTimingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insert_shop_timing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert-shop-timing.page */ "./src/app/pages/insert-shop-timing/insert-shop-timing.page.ts");







var routes = [
    {
        path: '',
        component: _insert_shop_timing_page__WEBPACK_IMPORTED_MODULE_6__["InsertShopTimingPage"]
    }
];
var InsertShopTimingPageModule = /** @class */ (function () {
    function InsertShopTimingPageModule() {
    }
    InsertShopTimingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_insert_shop_timing_page__WEBPACK_IMPORTED_MODULE_6__["InsertShopTimingPage"]]
        })
    ], InsertShopTimingPageModule);
    return InsertShopTimingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/insert-shop-timing/insert-shop-timing.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/insert-shop-timing/insert-shop-timing.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"back()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Shop Timing\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <ion-item>\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Opening Time</ion-label>\n                <ion-datetime class=\"inputField\" display-format=\"hh:mm A\" name=\"l_openingTime\"\n                    [(ngModel)]=\"l_openingTime\" (keyup)=\"formValidation()\" (ionChange)=\"formValidation()\">\n                </ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Closing Time</ion-label>\n                <ion-datetime class=\"inputField\" display-format=\"hh:mm A\" name=\"l_closingTime\"\n                    [(ngModel)]=\"l_closingTime\" (keyup)=\"formValidation()\" (ionChange)=\"formValidation()\">\n                </ion-datetime>\n            </ion-item>\n            <div class=\"footer\">\n                <div class=\"btn\">\n                    <ion-button class=\"bton\" fill=\"clear\" color=\"light\"\n                        [ngClass]=\"isbtnDisabled ? 'btn-disabled': 'btn-enable'\"\n                        [attr.disabled]=\"isbtnDisabled? true:null\" (click)=\"shopTiming()\">\n                        Next\n                    </ion-button>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/insert-shop-timing/insert-shop-timing.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/insert-shop-timing/insert-shop-timing.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.inputField {\n  text-transform: capitalize;\n  font-size: 13px;\n  float: left;\n  color: #2e3842;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  margin: 90px 0px 0px 0px;\n  float: left; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zZXJ0LXNob3AtdGltaW5nL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcaW5zZXJ0LXNob3AtdGltaW5nXFxpbnNlcnQtc2hvcC10aW1pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CUyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUkzQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBSDFCO0lBS00sVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsMkJBQTRCLEVBQUE7O0FBR3BDO0VBQ0ksMEJBQTBCO0VBQzFCLGVBQWU7RUFDUCxXQUFXO0VBQ1gsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBRWhDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBOztBQUpmO0lBTVEsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFidkI7TUFlWSxXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnNlcnQtc2hvcC10aW1pbmcvaW5zZXJ0LXNob3AtdGltaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1OyAgXHJcbn1cclxuLmhlYWQtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgLm1haW5fbWVudXtcclxuICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggNnB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9sb2dve1xyXG4gICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluTGlua3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTdweCAwcHggMHB4IDBweDtcclxuICAgIC5jYXJkTWFpbkxpbmtze1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAyMnB4IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4IDtcclxuICAgIH1cclxufVxyXG4uaW5wdXRGaWVsZHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6ICMyZTM4NDI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbn1cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMSU7XHJcbiAgICBtYXJnaW46IDkwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDsgXHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAuYnRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/insert-shop-timing/insert-shop-timing.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/insert-shop-timing/insert-shop-timing.page.ts ***!
  \*********************************************************************/
/*! exports provided: InsertShopTimingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertShopTimingPage", function() { return InsertShopTimingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");







var InsertShopTimingPage = /** @class */ (function () {
    function InsertShopTimingPage(router, http, toastCtrl, ToastCtrl, commonService) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.commonService = commonService;
        this.isbtnDisabled = true;
        this.l_openingTime = localStorage.getItem('OpeningTime');
        this.l_closingTime = localStorage.getItem('ClosingTime');
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    InsertShopTimingPage.prototype.ngOnInit = function () { };
    InsertShopTimingPage.prototype.ionViewWillEnter = function () {
        this.l_openingTime = localStorage.getItem('OpeningTime');
        this.l_closingTime = localStorage.getItem('ClosingTime');
        this.formValidation();
    };
    InsertShopTimingPage.prototype.shopTiming = function () {
        localStorage.setItem('OpeningTime', this.l_openingTime);
        localStorage.setItem('ClosingTime', this.l_closingTime);
        this.router.navigate(['insert-shop-discount']);
    };
    InsertShopTimingPage.prototype.formValidation = function () {
        var openingTime = false;
        var closingTime = false;
        openingTime = this.commonService.commonValidation(this.l_openingTime, 1);
        closingTime = this.commonService.commonValidation(this.l_closingTime, 1);
        if (openingTime == false && closingTime == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    };
    InsertShopTimingPage.prototype.back = function () {
        this.router.navigate(['insert-shop-basicInformation']);
    };
    InsertShopTimingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insert-shop-timing',
            template: __webpack_require__(/*! ./insert-shop-timing.page.html */ "./src/app/pages/insert-shop-timing/insert-shop-timing.page.html"),
            styles: [__webpack_require__(/*! ./insert-shop-timing.page.scss */ "./src/app/pages/insert-shop-timing/insert-shop-timing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], InsertShopTimingPage);
    return InsertShopTimingPage;
}());



/***/ })

}]);
//# sourceMappingURL=insert-shop-timing-insert-shop-timing-module.js.map