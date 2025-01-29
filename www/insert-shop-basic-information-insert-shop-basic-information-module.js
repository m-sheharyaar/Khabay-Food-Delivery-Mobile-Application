(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insert-shop-basic-information-insert-shop-basic-information-module"],{

/***/ "./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: InsertShopBasicInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertShopBasicInformationPageModule", function() { return InsertShopBasicInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insert_shop_basic_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert-shop-basic-information.page */ "./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.ts");







var routes = [
    {
        path: '',
        component: _insert_shop_basic_information_page__WEBPACK_IMPORTED_MODULE_6__["InsertShopBasicInformationPage"]
    }
];
var InsertShopBasicInformationPageModule = /** @class */ (function () {
    function InsertShopBasicInformationPageModule() {
    }
    InsertShopBasicInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_insert_shop_basic_information_page__WEBPACK_IMPORTED_MODULE_6__["InsertShopBasicInformationPage"]]
        })
    ], InsertShopBasicInformationPageModule);
    return InsertShopBasicInformationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"back()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Shop Basic Information\n        </div>\n    </div>\n</div>\n<ion-content>\n        <div class=\"mainLinks\">\n                <ion-card class=\"cardMainLinks\">\n    <ion-item>\n        <div class=\"main\">\n            <div class=\"text\">\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Shop Name</ion-label>\n\n                <ion-input type=\"text\" class=\"inputField\" #myInput id=\"shopName\" name=\"l_shopName\" [(ngModel)]=\"l_shopName\" (keyup)=\"formValidation()\" (ngModelChange)=\"l_shopName=getFirstLetterCapital(l_shopName)\"\n                    (ionChange)=\"formValidation()\"  maxlength=\"50\" (input)=\"l_shopNameLength=getLength($event.target.value,50)\"></ion-input>\n            </div>\n            <div class=\"textLength\">\n                {{l_shopNameLength}}\n            </div>\n        </div>\n    </ion-item>\n    <ion-item>\n        <div class=\"main\">\n            <div class=\"text\">\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Address</ion-label>\n                <ion-input class=\"inputField\" type=\"text\" name=\"l_address\" [(ngModel)]=\"l_address\" (keyup)=\"formValidation()\" (ionChange)=\"formValidation()\" (ngModelChange)=\"l_address=getFirstLetterCapital(l_address)\"\n                    maxlength=\"500\" (input)=\"l_addressLength=getLength($event.target.value,500)\"></ion-input>\n            </div>\n            <div class=\"textLength\">\n                {{l_addressLength}}\n            </div>\n        </div>\n    </ion-item>\n    <ion-item>\n        <ion-label style=\"color: #fb630f;\">State</ion-label>\n        <ion-select placeholder=\"Select One\" style=\"color:#fb630f;font-size: 13px;\" [(ngModel)]=\"l_state\" (ionChange)=\"getAllCity()\">\n            <ion-select-option *ngFor=\"let list of l_allStates\">{{list.State}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label style=\"color: #fb630f;\">City</ion-label>\n        <ion-select placeholder=\"Select One\" style=\"color:#fb630f;font-size: 13px;\"  [(ngModel)]=\"l_city\">\n            <ion-select-option *ngFor=\"let list of l_allCity\">{{list.City}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <div class=\"main\">\n            <div class=\"text\">\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Mobile</ion-label>\n                <ion-input type=\"tel\"  class=\"inputField\" maxlength=\"11\" [(ngModel)]=\"l_mobile\" (keyup)=\"formValidation()\" (ionChange)=\"formValidation()\"\n                     (input)=\"l_mobileLength=getLength($event.target.value,11)\"></ion-input>\n            </div>\n            <div class=\"textLength\">\n                {{l_mobileLength}}\n            </div>\n        </div>\n    </ion-item>\n    <ion-item>\n        <div class=\"main\">\n            <div class=\"textPhone\">\n                <ion-label position=\"floating\" style=\"color: #fb630f;\">Phone</ion-label>\n                <ion-input type=\"tel\" class=\"inputField\" name=\"l_phone\" [(ngModel)]=\"l_phone\" maxlength=\"11\" (input)=\"l_phoneLength=getLength($event.target.value,11)\"></ion-input>\n            </div>\n            <div class=\"textLengthPhone\">\n                 (Optional)\n                {{l_phoneLength}}\n            </div>\n        </div>\n    </ion-item>\n    <div class=\"footer\">\n            <div class=\"btn\">\n                <ion-button class=\"bton\" fill=\"clear\" color=\"light\" [ngClass]=\"isbtnDisabled ? 'btn-disabled': 'btn-enable'\" [attr.disabled]=\"isbtnDisabled? true:null\" (click)=\"shopBasicInformation()\">\n                    Next\n                </ion-button>\n            </div>\n        </div>\n</ion-card>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.main {\n  padding: 0px;\n  margin: 0px;\n  width: 100%; }\n\n.main .text {\n    padding: 0px;\n    margin: 0px;\n    width: 80%;\n    float: left; }\n\n.main .textLength {\n    padding: 0px;\n    margin: 38px 0px 0px 0px;\n    width: 11%;\n    font-size: 13px;\n    float: right;\n    color: #fb630f;\n    text-align: center; }\n\n.main .textPhone {\n    padding: 0px;\n    margin: 0px;\n    width: 55%;\n    float: left; }\n\n.main .textLengthPhone {\n    padding: 0px;\n    margin: 40px 0px 0px 0px;\n    width: 33%;\n    float: right;\n    font-size: 12px;\n    color: #fb630f;\n    text-align: center; }\n\n.inputField {\n  text-transform: capitalize;\n  font-size: 13px;\n  float: left;\n  color: #2e3842;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  margin: 90px 0px 0px 0px;\n  float: left; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zZXJ0LXNob3AtYmFzaWMtaW5mb3JtYXRpb24vRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxpbnNlcnQtc2hvcC1iYXNpYy1pbmZvcm1hdGlvblxcaW5zZXJ0LXNob3AtYmFzaWMtaW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CUyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUkzQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBSDFCO0lBS00sVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsMkJBQTRCLEVBQUE7O0FBR3BDO0VBQ0ksWUFBVztFQUNYLFdBQVU7RUFDVixXQUFVLEVBQUE7O0FBSGQ7SUFLUSxZQUFXO0lBQ1gsV0FBVTtJQUNWLFVBQVM7SUFDVCxXQUFXLEVBQUE7O0FBUm5CO0lBV1EsWUFBVztJQUNYLHdCQUF1QjtJQUN2QixVQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7O0FBakIxQjtJQW9CUSxZQUFXO0lBQ1gsV0FBVTtJQUNWLFVBQVM7SUFDVCxXQUFXLEVBQUE7O0FBdkJuQjtJQTBCUSxZQUFXO0lBQ1gsd0JBQXVCO0lBQ3ZCLFVBQVM7SUFDVCxZQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUFHMUI7RUFDSSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFFaEM7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixXQUFXLEVBQUE7O0FBSmY7SUFNUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQWJ2QjtNQWVZLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc2VydC1zaG9wLWJhc2ljLWluZm9ybWF0aW9uL2luc2VydC1zaG9wLWJhc2ljLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1OyAgXHJcbn1cclxuLmhlYWQtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgLm1haW5fbWVudXtcclxuICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggNnB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9sb2dve1xyXG4gICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluTGlua3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTdweCAwcHggMHB4IDBweDtcclxuICAgIC5jYXJkTWFpbkxpbmtze1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAyMnB4IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4IDtcclxuICAgIH1cclxufVxyXG4ubWFpbntcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC50ZXh0TGVuZ3Roe1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgIG1hcmdpbjozOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIHdpZHRoOjExJTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICB9XHJcbiAgICAudGV4dFBob25le1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgd2lkdGg6NTUlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnRleHRMZW5ndGhQaG9uZXtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICBtYXJnaW46NDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICB3aWR0aDozMyU7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICAgIH1cclxufVxyXG4uaW5wdXRGaWVsZHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6ICMyZTM4NDI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbn1cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMSU7XHJcbiAgICBtYXJnaW46IDkwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDsgXHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAuYnRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: InsertShopBasicInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertShopBasicInformationPage", function() { return InsertShopBasicInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");








var InsertShopBasicInformationPage = /** @class */ (function () {
    function InsertShopBasicInformationPage(router, http, toastCtrl, ToastCtrl, loadingController, nativeGeocoder, commonService) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.loadingController = loadingController;
        this.nativeGeocoder = nativeGeocoder;
        this.commonService = commonService;
        this.isbtnDisabled = true;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    InsertShopBasicInformationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.l_shopNameLength = 50;
        this.l_addressLength = 500;
        // this.l_cityLength = 30;
        //this.l_stateLength = 30;
        this.l_mobileLength = 11;
        this.l_phoneLength = 11;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 3200);
    };
    InsertShopBasicInformationPage.prototype.ionViewWillEnter = function () {
        this.l_shopName = localStorage.getItem('UserShopName');
        this.l_address = localStorage.getItem('Address');
        this.l_city = localStorage.getItem('City');
        this.l_state = localStorage.getItem('State');
        this.l_mobile = localStorage.getItem('Mobile');
        this.l_phone = localStorage.getItem('Phone');
        this.getAllState();
    };
    InsertShopBasicInformationPage.prototype.shopBasicInformation = function () {
        var _this = this;
        var fullAdress = this.l_address + ', ' + this.l_city + ', ' + this.l_state;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(fullAdress, options)
            .then(function (coordinates) {
            localStorage.setItem('UserShopName', _this.l_shopName);
            localStorage.setItem('Address', _this.l_address);
            localStorage.setItem('City', _this.l_city);
            localStorage.setItem('State', _this.l_state);
            localStorage.setItem('Mobile', _this.l_mobile);
            localStorage.setItem('Latitude', coordinates[0].latitude);
            localStorage.setItem('Longitude', coordinates[0].longitude);
            if (_this.l_phone == null) {
                localStorage.setItem('Phone', '');
            }
            else {
                localStorage.setItem('Phone', _this.l_phone);
            }
            _this.router.navigate(['insert-shop-timing']);
        });
    };
    InsertShopBasicInformationPage.prototype.back = function () {
        this.commonService.removeShopStorage();
        this.router.navigate(['tabs/settings']);
    };
    InsertShopBasicInformationPage.prototype.formValidation = function () {
        this.isbtnDisabled = false;
        var shopName = false;
        var address = false;
        // var city = false;
        // var state = false;
        var mobile = false;
        // && city == false && state == false
        shopName = this.commonService.commonValidation(this.l_shopName, 3);
        address = this.commonService.commonValidation(this.l_address, 3);
        // city = this.commonService.commonValidation(this.l_city, 1);
        // state = this.commonService.commonValidation(this.l_state, 1);
        mobile = this.commonService.commonValidation(this.l_mobile, 11);
        if (shopName == false && address == false && mobile == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    };
    InsertShopBasicInformationPage.prototype.getLength = function (value, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    };
    ;
    InsertShopBasicInformationPage.prototype.getAllState = function () {
        var options = {};
        var control = this;
        options.title = 'Get All State!!!';
        options.apiURL = this.env.commonApi.getAllStateURL + localStorage.getItem('countryName');
        options.catchErrorText = 'signup-phoneController: error => getAllState()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_allStates = data.Result;
            }
        };
        this.commonService.httpPost(options);
    };
    InsertShopBasicInformationPage.prototype.getAllCity = function () {
        var data = {
            CountryName: localStorage.getItem('countryName'),
            StateName: this.l_state
        };
        var options = {};
        var control = this;
        options.title = 'Get All City!!!';
        options.apiURL = this.env.commonApi.getAllCitiesURL;
        options.catchErrorText = 'signup-phoneController: error => getAllCity()';
        options.methodType = 'POST';
        options.paramData = data;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_allCity = data.Result;
            }
        };
        this.commonService.httpPost(options);
    };
    InsertShopBasicInformationPage.prototype.getFirstLetterCapital = function (value) {
        return this.commonService.getFirstCapitalLetter(value);
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InsertShopBasicInformationPage.prototype, "myInput", void 0);
    InsertShopBasicInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insert-shop-basic-information',
            template: __webpack_require__(/*! ./insert-shop-basic-information.page.html */ "./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.html"),
            styles: [__webpack_require__(/*! ./insert-shop-basic-information.page.scss */ "./src/app/pages/insert-shop-basic-information/insert-shop-basic-information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], InsertShopBasicInformationPage);
    return InsertShopBasicInformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=insert-shop-basic-information-insert-shop-basic-information-module.js.map