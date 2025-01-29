(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-update-shop-update-module"],{

/***/ "./src/app/pages/shop-update/shop-update.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/shop-update/shop-update.module.ts ***!
  \*********************************************************/
/*! exports provided: ShopUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopUpdatePageModule", function() { return ShopUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-update.page */ "./src/app/pages/shop-update/shop-update.page.ts");







var routes = [
    {
        path: '',
        component: _shop_update_page__WEBPACK_IMPORTED_MODULE_6__["ShopUpdatePage"]
    }
];
var ShopUpdatePageModule = /** @class */ (function () {
    function ShopUpdatePageModule() {
    }
    ShopUpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_update_page__WEBPACK_IMPORTED_MODULE_6__["ShopUpdatePage"]]
        })
    ], ShopUpdatePageModule);
    return ShopUpdatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/shop-update/shop-update.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/shop-update/shop-update.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"back()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Shop Update\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"card_Description\">\n        <div class=\"tab-wrap\">\n            <!-- tab1 -->\n            <input type=\"radio\" name=\"tabs\" id=\"tab1\" checked>\n            <div class=\"tab-label-content\" id=\"tab1-content\">\n                <label class=\"tab-label\" for=\"tab1\">Basic Info</label>\n                <div class=\"tab-content\">\n                    <div class=\"mainLinks\">\n                        <ion-card class=\"cardMainLinks\">\n                            <div class=\"tab-panel\">\n                                <ion-item class=\"main\">\n                                    <div class=\"text-field\">\n                                        <div class=\"text-label\">\n                                            <ion-label position=\"floating\" style=\"color: #fb630f;\">Shop Name</ion-label>\n                                            <ion-input class=\"inputField\" type=\"text\" id=\"shopName\" name=\"l_shopName\"\n                                                [(ngModel)]=\"l_shopName\" (keyup)=\"formValidation()\"\n                                                (ionChange)=\"formValidation()\" maxlength=\"50\"\n                                                (ngModelChange)=\"l_shopName=getFirstLetterCapital(l_shopName)\"\n                                                (input)=\"l_shopNameLength=getLength($event.target.value,50)\"\n                                                (keyup.enter)=\"UserGeocoder()\">\n                                            </ion-input>\n                                        </div>\n                                        <div class=\"text-length\">\n                                            {{l_shopNameLength}}\n                                        </div>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <div class=\"text-field\">\n                                        <div class=\"text-label\">\n                                            <ion-label position=\"floating\" style=\"color: #fb630f;\">Address</ion-label>\n                                            <ion-input class=\"inputField\" type=\"text\" name=\"l_address\"\n                                                [(ngModel)]=\"l_address\" (keyup)=\"formValidation()\"\n                                                (ionChange)=\"formValidation()\" maxlength=\"500\"\n                                                (ngModelChange)=\"l_address=getFirstLetterCapital(l_address)\"\n                                                (input)=\"l_addressLength=getLength($event.target.value,500)\"\n                                                (keyup.enter)=\"UserGeocoder()\">\n                                            </ion-input>\n                                        </div>\n                                        <div class=\"text-length\">\n                                            {{l_addressLength}}\n                                        </div>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <ion-label style=\"color: #fb630f;\">State</ion-label>\n                                    <ion-select [placeholder]=\"l_state\" style=\"font-size: 13px;\" [(ngModel)]=\"l_state\"\n                                        (ionChange)=\"getAllCity()\">\n                                        <ion-select-option *ngFor=\"let list of l_allStates\">{{list.State}}\n                                        </ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <ion-label style=\"color: #fb630f;\">City</ion-label>\n                                    <ion-select [placeholder]=\"l_city\" [(ngModel)]=\"l_city\" style=\"font-size: 13px;\">\n                                        <ion-select-option *ngFor=\"let list of l_allCity\">{{list.City}}\n                                        </ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <div class=\"text-field\">\n                                        <div class=\"text-label\">\n                                            <ion-label position=\"floating\" style=\"color: #fb630f;\">Mobile</ion-label>\n                                            <ion-input class=\"inputField\" type=\"tel\" name=\"l_mobile\"\n                                                [(ngModel)]=\"l_mobile\" (keyup)=\"formValidation()\"\n                                                (ionChange)=\"formValidation()\" maxlength=\"11\"\n                                                (input)=\"l_mobileLength=getLength($event.target.value,11)\"\n                                                (keyup.enter)=\"UserGeocoder()\">\n                                            </ion-input>\n                                        </div>\n                                        <div class=\"text-length\">\n                                            {{l_mobileLength}}\n                                        </div>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <div class=\"text-field\">\n                                        <div class=\"text-labelPhone\">\n                                            <ion-label position=\"floating\" style=\"color: #fb630f;\">Phone</ion-label>\n                                            <ion-input type=\"tel\" class=\"inputField\" name=\"l_phone\"\n                                                [(ngModel)]=\"l_phone\" maxlength=\"11\" placeholder=\"\"\n                                                (input)=\"l_phoneLength=getLength($event.target.value,11)\"\n                                                (keyup.enter)=\"UserGeocoder()\">\n                                            </ion-input>\n                                        </div>\n                                        <div class=\"text-lengthPhone\">\n                                            (Optional){{l_phoneLength}}\n                                        </div>\n                                    </div>\n                                </ion-item>\n                            </div>\n                        </ion-card>\n                    </div>\n                </div>\n            </div>\n            <!-- tab2 -->\n            <input type=\"radio\" name=\"tabs\" id=\"tab2\">\n            <div class=\"tab-label-content\" id=\"tab2-content\">\n                <label class=\"tab-label\" for=\"tab2\">Timing</label>\n                <div class=\"tab-content\">\n                    <div class=\"mainLinks\">\n                        <ion-card class=\"cardMainLinks\">\n                            <div class=\"tab-panel\">\n                                <ion-item class=\"main\">\n                                    <ion-label position=\"floating\" style=\"color: #fb630f;\">Opening Time</ion-label>\n                                    <ion-datetime class=\"inputField\" display-format=\"hh:mm A\" name=\"l_openingTime\"\n                                        [(ngModel)]=\"l_openingTime\" (keyup)=\"formValidation()\"\n                                        (ionChange)=\"formValidation()\" (keyup.enter)=\"UserGeocoder()\"></ion-datetime>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <ion-label position=\"floating\" style=\"color: #fb630f;\">Closing Time</ion-label>\n                                    <ion-datetime class=\"inputField\" display-format=\"hh:mm A\" name=\"l_openingTime\"\n                                        [(ngModel)]=\"l_closingTime\" (keyup)=\"formValidation()\"\n                                        (ionChange)=\"formValidation()\" (keyup.enter)=\"UserGeocoder()\"></ion-datetime>\n                                </ion-item>\n                            </div>\n                        </ion-card>\n                    </div>\n                </div>\n            </div>\n            <!-- tab3 -->\n            <input type=\"radio\" name=\"tabs\" id=\"tab3\">\n            <div class=\"tab-label-content\" id=\"tab3-content\">\n                <label class=\"tab-label\" for=\"tab3\">Discount</label>\n                <div class=\"tab-content\">\n                    <div class=\"mainLinks\">\n                        <ion-card class=\"cardMainLinks\">\n                            <div class=\"tab-panel\">\n                                <ion-item class=\"main\">\n                                    <div class=\"text-field\">\n                                        <div class=\"text-label\">\n                                            <ion-label position=\"floating\" style=\"color: #fb630f;\">Discount</ion-label>\n                                            <ion-input class=\"inputField\" type=\"number\" name=\"l_discount\"\n                                                [(ngModel)]=\"l_discount\" (keyup.enter)=\"UserGeocoder()\">\n                                            </ion-input>\n                                        </div>\n                                        <div class=\"text-length\">\n                                            %\n                                        </div>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <ion-label position=\"floating\" style=\"color: #fb630f;\">Start Date</ion-label>\n                                    <ion-datetime class=\"inputField\" display-format=\"YYYY-MMM-DD\" name=\"l_startDate\"\n                                        min=\"{{l_minDate}}\" [(ngModel)]=\"l_startDate\" (keyup)=\"formValidation()\"\n                                        (ionChange)=\"formValidation()\" (keyup.enter)=\"UserGeocoder()\"></ion-datetime>\n                                </ion-item>\n                                <ion-item class=\"main\">\n                                    <ion-checkbox (ionChange)=\"hideExpiryDate()\" [checked]=\"l_chkbox\"\n                                        (keyup.enter)=\"UserGeocoder()\">\n                                    </ion-checkbox><span>WithOut Expiry Date</span>\n                                </ion-item>\n                                <ion-item class=\"main\" [hidden]=\"l_hideExpiryDate\">\n                                    <ion-label position=\"floating\" style=\"color: #fb630f;\">Expiry Date</ion-label>\n                                    <ion-datetime class=\"inputField\" display-format=\"YYYY-MMM-DD\" name=\"l_endDate\"\n                                        min=\"{{l_minDate}}\" [(ngModel)]=\"l_endDate\" (keyup)=\"formValidation()\"\n                                        (ionChange)=\"formValidation()\" (keyup.enter)=\"UserGeocoder()\"></ion-datetime>\n                                </ion-item>\n                                &nbsp;\n                                &nbsp;\n                                <!-- pic upload -->\n                                <ion-list>\n                                    <ion-item class=\"main\">\n                                        <ion-thumbnail slot=\"start\">\n                                            <ion-img [src]=\"ImageURL\"></ion-img>\n                                        </ion-thumbnail>\n                                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"selectPhoto()\"\n                                            style=\"color: #fb630f;\">\n                                            <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n                                        </ion-button>\n                                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"removeTempImage()\"\n                                            style=\"color: #fb630f;\">\n                                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                                        </ion-button>\n                                    </ion-item>\n                                </ion-list>\n                                <!-- logo upload -->\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-thumbnail slot=\"start\">\n                                            <ion-img [src]=\"LogoURL\"></ion-img>\n                                        </ion-thumbnail>\n                                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"selectLogo()\"\n                                            style=\"color: #fb630f;\">\n                                            <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n                                        </ion-button>\n                                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"removelogoImage()\"\n                                            style=\"color: #fb630f;\">\n                                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                                        </ion-button>\n                                    </ion-item>\n                                </ion-list>\n                            </div>\n                        </ion-card>\n                    </div>\n                </div>\n            </div>\n            <div class=\"slide\"></div>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <div class=\"btn\">\n            <ion-button class=\"bton\" fill=\"clear\" color=\"light\" [ngClass]=\"isbtnDisabled ? 'btn-disabled': 'btn-enable'\"\n                [attr.disabled]=\"isbtnDisabled? true:null\" (click)=\"UserGeocoder()\">\n                Save\n            </ion-button>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/shop-update/shop-update.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/shop-update/shop-update.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.main {\n  width: 100%;\n  padding: 0px; }\n\n.main .text-field {\n    padding: 0px;\n    margin: 0px;\n    width: 100%; }\n\n.main .text-field .text-label {\n      padding: 0px;\n      margin: 0px;\n      width: 83%;\n      float: left; }\n\n.main .text-field .text-length {\n      padding: 0px;\n      margin: 38px 0px 0px 0px;\n      width: 10%;\n      float: right;\n      font-size: 13px;\n      color: #fb630f;\n      text-align: center; }\n\n.main .text-field .text-labelPhone {\n      padding: 0px;\n      margin: 0px;\n      width: 55%;\n      float: left; }\n\n.main .text-field .text-lengthPhone {\n      padding: 0px;\n      margin: 38px 0px 0px 0px;\n      width: 28%;\n      float: right;\n      font-size: 13px;\n      color: #fb630f;\n      text-align: center; }\n\nspan {\n  margin-left: 5px;\n  font-size: 13px;\n  color: #fb630f; }\n\n.card_Description {\n  float: left;\n  width: 100%;\n  margin: 25px 0px 0px 0px;\n  background-color: #f5f5f5; }\n\ntab-wrap {\n  width: 100%;\n  position: relative;\n  display: flex; }\n\ninput[type=\"radio\"][name=\"tabs\"] {\n  position: absolute;\n  z-index: -1;\n  color: #969ba1;\n  font-family: 'Poppins';\n  background-color: #f5f5f5;\n  font-size: 12px; }\n\ninput[type=\"radio\"][name=\"tabs\"]:checked + .tab-label-content .tab-label {\n  color: #fb630f;\n  font-family: 'Poppins';\n  background-color: #f5f5f5;\n  font-weight: bold;\n  font-size: 12px; }\n\ninput[type=\"radio\"][name=\"tabs\"]:checked + .tab-label-content .tab-content {\n  display: block; }\n\ninput[type=\"radio\"][name=\"tabs\"]:nth-of-type(1):checked ~ .slide {\n  left: calc((100% / 3) * 0); }\n\ninput[type=\"radio\"][name=\"tabs\"]:nth-of-type(2):checked ~ .slide {\n  left: calc((100% / 3) * 1); }\n\ninput[type=\"radio\"][name=\"tabs\"]:nth-of-type(3):checked ~ .slide {\n  left: calc((100% / 3) * 2); }\n\ninput[type=\"radio\"][name=\"tabs\"]:first-of-type:checked ~ .slide {\n  left: 0; }\n\n.tab-label {\n  cursor: pointer;\n  color: #969ba1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 30px;\n  transition: color 0.2s ease;\n  width: calc(100%/3);\n  float: left;\n  background-color: #f5f5f5;\n  border-bottom: 0.4px solid #dde2e6;\n  font-weight: bold;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal;\n  font-size: 12px; }\n\n.slide {\n  background: #fb630f;\n  width: 21%;\n  height: 2px;\n  text-align: center;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  top: 54px;\n  transition: left 0.3s ease-out;\n  margin: 0px 0px 0px 21px; }\n\n.tab-label-content {\n  width: 100%; }\n\n.tab-label-content .tab-content {\n  position: absolute;\n  top: 60px;\n  line-height: 20px;\n  display: none;\n  width: 100%; }\n\n.tab-panel {\n  margin: 0px 0px 0px 0px; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.inputField {\n  text-transform: capitalize;\n  font-size: 13px;\n  float: left;\n  color: #2e3842;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  float: left;\n  bottom: 0px;\n  position: fixed; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC11cGRhdGUvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxzaG9wLXVwZGF0ZVxcc2hvcC11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CUyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUk3QjtFQUNFLFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBRmI7SUFJSSxZQUFXO0lBQ1gsV0FBVTtJQUNWLFdBQVUsRUFBQTs7QUFOZDtNQVFNLFlBQVc7TUFDWCxXQUFVO01BQ1YsVUFBUztNQUNULFdBQVcsRUFBQTs7QUFYakI7TUFjTSxZQUFXO01BQ1gsd0JBQXdCO01BQ3hCLFVBQVM7TUFDVCxZQUFXO01BQ1gsZUFBZTtNQUNmLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTs7QUFwQnhCO01BdUJNLFlBQVc7TUFDWCxXQUFVO01BQ1YsVUFBUztNQUNULFdBQVcsRUFBQTs7QUExQmpCO01BNkJNLFlBQVc7TUFDWCx3QkFBdUI7TUFDdkIsVUFBUztNQUNULFlBQVc7TUFDWCxlQUFlO01BQ2YsY0FBYztNQUNkLGtCQUFrQixFQUFBOztBQUl4QjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLHNCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0UsT0FBTyxFQUFBOztBQUVUO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQTs7QUFFakI7RUFDSSxtQkFBbUI7RUFDakIsVUFBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULDhCQUE4QjtFQUMvQix3QkFBd0IsRUFBQTs7QUFHL0I7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUViO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0IsRUFBQTs7QUFINUI7SUFLUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwyQkFBNEIsRUFBQTs7QUFHcEM7RUFDSSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFFaEM7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUVYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQU5uQjtJQVFRLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBZnZCO01BaUJZLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtdXBkYXRlL3Nob3AtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1OyAgXHJcbn1cclxuLmhlYWQtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgLm1haW5fbWVudXtcclxuICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggNnB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9sb2dve1xyXG4gICAgICAgICB3aWR0aDogODMlO1xyXG4gICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4ubWFpbntcclxuICB3aWR0aDoxMDAlOyBcclxuICBwYWRkaW5nOjBweDtcclxuICAudGV4dC1maWVsZHtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAudGV4dC1sYWJlbHtcclxuICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHdpZHRoOjgzJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAudGV4dC1sZW5ndGh7XHJcbiAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICBtYXJnaW46IDM4cHggMHB4IDBweCAwcHg7XHJcbiAgICAgIHdpZHRoOjEwJTtcclxuICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LWxhYmVsUGhvbmV7XHJcbiAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICB3aWR0aDo1NSU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnRleHQtbGVuZ3RoUGhvbmV7XHJcbiAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICBtYXJnaW46MzhweCAwcHggMHB4IDBweDtcclxuICAgICAgd2lkdGg6MjglO1xyXG4gICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5zcGFue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmI2MzBmO1xyXG59XHJcbi5jYXJkX0Rlc2NyaXB0aW9ue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IFxyXG59XHJcblxyXG50YWItd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7ICBcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJ0YWJzXCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHQgXHJcbiAgY29sb3I6ICM5NjliYTE7XHJcbiAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1x0IFxyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwidGFic1wiXTpjaGVja2VkICsgLnRhYi1sYWJlbC1jb250ZW50IC50YWItbGFiZWwge1xyXG4gIGNvbG9yOiAjZmI2MzBmO1xyXG4gIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJ0YWJzXCJdOmNoZWNrZWQgKyAudGFiLWxhYmVsLWNvbnRlbnQgLnRhYi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cInRhYnNcIl06bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZCB+IC5zbGlkZSB7XHJcbiAgbGVmdDogY2FsYygoMTAwJSAvIDMpICogMCk7XHJcblxyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwidGFic1wiXTpudGgtb2YtdHlwZSgyKTpjaGVja2VkIH4gLnNsaWRlIHtcclxuICBsZWZ0OiBjYWxjKCgxMDAlIC8gMykgKiAxKTtcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cInRhYnNcIl06bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZCB+IC5zbGlkZSB7XHJcbiAgICBsZWZ0OiBjYWxjKCgxMDAlIC8gMykgKiAyKTtcclxuICB9ICBcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJ0YWJzXCJdOmZpcnN0LW9mLXR5cGU6Y2hlY2tlZCB+IC5zbGlkZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG4udGFiLWxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlLzMpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC40cHggc29saWQgI2RkZTJlNjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2xpZGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgICAgIHdpZHRoOjIxJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlLW91dDtcclxuICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjFweDtcclxuICB9XHJcblxyXG4udGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50YWItbGFiZWwtY29udGVudCAudGFiLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGFiLXBhbmVse1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuLm1haW5MaW5rc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxN3B4IDBweCAwcHggMHB4O1xyXG4gICAgLmNhcmRNYWluTGlua3N7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4IDIycHggMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNkOGQ4ZDggO1xyXG4gICAgfVxyXG59XHJcbi5pbnB1dEZpZWxke1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgXHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxufVxyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExJTtcclxuICAgLy8gbWFyZ2luOiA0MzBweCAwcHggMHB4IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0OyBcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLmJ0bntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgLmJ0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/shop-update/shop-update.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/shop-update/shop-update.page.ts ***!
  \*******************************************************/
/*! exports provided: ShopUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopUpdatePage", function() { return ShopUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _services_notificationservices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/notificationservices */ "./src/app/services/notificationservices.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");













var ShopUpdatePage = /** @class */ (function () {
    function ShopUpdatePage(http, htttp, fcm, toastCtrl, ToastCtrl, router, modal, activatedRoute, transfer, loadingController, camera, actionSheetController, ref, nativeGeocoder, commonService) {
        this.http = http;
        this.htttp = htttp;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.router = router;
        this.modal = modal;
        this.activatedRoute = activatedRoute;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.ref = ref;
        this.nativeGeocoder = nativeGeocoder;
        this.commonService = commonService;
        this.isbtnDisabled = true;
        this.ImageURL = '';
        this.LogoURL = "";
        this.l_isDeleteImage = 0;
        this.l_isDeletelogo = 0;
        this.l_expDate = false;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
        this.notificationService = new _services_notificationservices__WEBPACK_IMPORTED_MODULE_11__["Notificationservices"](this.http, toastCtrl, ToastCtrl, htttp, commonService);
    }
    ShopUpdatePage.prototype.ngOnInit = function () { };
    ShopUpdatePage.prototype.ionViewWillEnter = function () {
        debugger;
        //this.shopData = this.activatedRoute.snapshot.paramMap.get('ShopsList');
        // this.shop = this.activatedRoute.params.subscribe(params => {
        //   this.shopID = params['ShopID'];
        // });
        // this.shopData = this.activatedRoute.snapshot.paramMap.get('ShopsList');
        //this.shopData =  this.activatedRoute.snapshot.paramMap.get('ShopList');
        this.getAllState();
        this.l_shopData = JSON.parse(localStorage.getItem('shopData'));
        this.l_shopNameLength = this.getLength(this.l_shopData.ShopName, 50);
        this.l_addressLength = this.getLength(this.l_shopData.Address1, 500);
        this.l_cityLength = this.getLength(this.l_shopData.City, 30);
        this.l_stateLength = this.getLength(this.l_shopData.State, 30);
        this.l_mobileLength = this.getLength(this.l_shopData.Mobile, 11);
        if (this.l_phoneLength != null) {
            this.l_phoneLength = this.getLength(this.l_shopData.Phone, 11);
        }
        this.l_shopName = this.l_shopData.ShopName;
        this.l_address = this.l_shopData.Address1;
        this.l_city = this.l_shopData.City;
        this.l_state = this.l_shopData.State;
        this.l_mobile = this.l_shopData.Mobile;
        this.l_phone = this.l_shopData.Phone;
        this.l_openingTime = this.l_shopData.OpeningTime;
        this.l_closingTime = this.l_shopData.ClosingTime;
        this.l_discount = this.l_shopData.Discount;
        this.l_startDate = this.l_shopData.StartDate;
        this.l_endDate = this.l_shopData.EndDate;
        this.l_oldDiscount = this.l_shopData.Discount;
        this.l_offerStatus = this.l_shopData.OfferStatus;
        this.l_ShopNotificationTopicName = this.l_shopData.SubscribeTopicName;
        this.l_logoImage = this.l_shopData.LogoURL;
        this.l_shopImage = this.l_shopData.ImageURL;
        if (this.l_endDate == null && this.l_expDate == false) {
            this.l_hideExpiryDate = true;
            this.l_chkbox = true;
            this.l_chkboxCondition = true;
            this.l_expDate = true;
        }
        else {
            this.l_hideExpiryDate = false;
            this.l_chkbox = false;
            this.l_chkboxCondition = false;
            this.l_expDate = false;
        }
        if (this.l_shopData.ImageURL == null) {
            this.ImageURL = "../../../assets/img/notfound.png";
            // this.l_shopImage = NULL;
        }
        else {
            this.ImageURL = this.env.imageURL + this.l_shopData.ImageURL;
        }
        if (this.l_shopData.LogoURL == null) {
            this.LogoURL = "../../../assets/img/logo.png";
            // this.l_logoImage = NULL;
        }
        else {
            this.LogoURL = this.env.imageURL + this.l_shopData.LogoURL;
        }
        this.l_minDate = this.commonService.getMinDate(this.l_startDate);
        this.ref.detectChanges();
    };
    ShopUpdatePage.prototype.back = function () {
        this.router.navigate(['user-ShopList']);
    };
    ShopUpdatePage.prototype.formValidation = function () {
        var ShopName = false;
        var Address = false;
        //var City = false;
        //var State = false;
        var Mobile = false;
        var OpeningTime = false;
        var ClosingTime = false;
        var StartDate = false;
        var EndDate = false;
        ShopName = this.commonService.commonValidation(this.l_shopName, 3);
        Address = this.commonService.commonValidation(this.l_address, 3);
        //City = this.commonService.commonValidation(this.l_city, 3);
        // State = this.commonService.commonValidation(this.l_state, 3);
        Mobile = this.commonService.commonValidation(this.l_mobile, 11);
        OpeningTime = this.commonService.commonValidation(this.l_openingTime, 1);
        ClosingTime = this.commonService.commonValidation(this.l_closingTime, 1);
        StartDate = this.commonService.commonValidation(this.l_startDate, 3);
        EndDate = this.commonService.commonValidation(this.l_endDate, 3);
        //&& City == false && State == false 
        if (this.l_hideExpiryDate) {
            EndDate = false;
        }
        if (ShopName == false && Address == false && Mobile == false && OpeningTime == false && ClosingTime == false && StartDate == false && EndDate == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    };
    ///////////////////////////Shop Image Upload//////////////////////////////////
    ShopUpdatePage.prototype.selectPhoto = function () {
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
    ShopUpdatePage.prototype.takePicture = function (sourceType) {
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
            //localStorage.setItem('RealTimeShopImage_' + localStorage.getItem('userID'), control.ImageURL);
            control.uploadShopImage();
            control.ref.detectChanges();
        });
    };
    ShopUpdatePage.prototype.randomValue = function () {
        var min = 1;
        var maxNumber = 400000;
        var my_random_value = min + (maxNumber - min) * Math.random();
        return my_random_value.toFixed(0);
    };
    ShopUpdatePage.prototype.uploadShopImage = function () {
        var _this = this;
        this.l_isDeleteImage = 0;
        var fileTransfer = this.transfer.create();
        var shopFileName;
        if (this.l_shopData.ImageURL == null) {
            shopFileName = "Shop_" + localStorage.getItem("userID") + "_" + this.randomValue() + ".jpg";
        }
        else {
            shopFileName = this.l_shopData.ImageURL.split('/')[1];
        }
        var options = {
            fileKey: "file",
            fileName: shopFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };
        fileTransfer.upload(this.ImageURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.ShopImage, options).then(function (res) {
            _this.l_shopImage = _this.env.imgServerFolder.ShopImage + "/" + shopFileName;
            _this.ref.detectChanges();
        }, function (err) {
            debugger;
        });
    };
    ShopUpdatePage.prototype.removeTempImage = function () {
        this.l_shopImage = '';
        this.l_isDeleteImage = 1;
        this.ImageURL = "../../../assets/img/notfound.png";
        this.ref.detectChanges();
    };
    ///////////////////////////Logo Image Upload//////////////////////////////////
    ShopUpdatePage.prototype.selectLogo = function () {
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
    ShopUpdatePage.prototype.takePicturelogo = function (sourceType) {
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
            //localStorage.setItem('RealTimeShopImage_' + localStorage.getItem('userID'), control.ImageURL);
            control.uploadLogo();
            control.ref.detectChanges();
        });
    };
    ShopUpdatePage.prototype.uploadLogo = function () {
        var _this = this;
        this.l_isDeletelogo = 0;
        var fileTransfer = this.transfer.create();
        var logoFileName;
        if (this.l_shopData.LogoURL == null) {
            logoFileName = "Logo_" + localStorage.getItem("userID") + "_" + this.randomValue() + ".jpg";
        }
        else {
            logoFileName = this.l_shopData.LogoURL.split('/')[1];
        }
        var options = {
            fileKey: "file",
            fileName: logoFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };
        fileTransfer.upload(this.LogoURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.LogoImage, options).then(function (res) {
            _this.l_logoImage = _this.env.imgServerFolder.LogoImage + "/" + logoFileName;
            _this.ref.detectChanges();
        }, function (err) {
            debugger;
        });
    };
    ShopUpdatePage.prototype.removelogoImage = function () {
        this.l_logoImage = '';
        this.l_isDeletelogo = 1;
        this.LogoURL = "../../../assets/img/logo.png";
        this.ref.detectChanges();
    };
    ShopUpdatePage.prototype.getLength = function (value, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    };
    ;
    ShopUpdatePage.prototype.updateShop = function () {
        debugger;
        var updateshop = {
            CategoryID: 1,
            ShopID: this.l_shopData.ShopID,
            ShopName: this.l_shopName,
            Address1: this.l_address,
            City: this.l_city,
            State: this.l_state,
            OpeningTime: this.l_openingTime,
            ClosingTime: this.l_closingTime,
            Mobile: this.l_mobile,
            Phone: this.l_phone == null ? null : this.l_phone,
            ImageURL: this.l_shopImage,
            LogoURL: this.l_logoImage,
            UserName: localStorage.getItem('userName'),
            UserID: localStorage.getItem('userID'),
            Discount: this.l_discount,
            StartDate: this.l_startDate,
            EndDate: this.l_endDate,
            IsDeleteImage: this.l_isDeleteImage,
            IsDeleteLogo: this.l_isDeletelogo,
            Latitude: this.l_latDest,
            Longitude: this.l_longDest
        };
        var options = {};
        var control = this;
        options.title = 'update Shop!!!';
        options.apiURL = this.env.shopApi.registerShop;
        options.catchErrorText = 'UserController: error => updateShop()';
        options.methodType = 'POST';
        options.paramData = updateshop;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                var optionMsg = {};
                var options_1 = {};
                if (updateshop) {
                    optionMsg.message = 'Record Update Successfull';
                    control.commonService.msgToast(optionMsg);
                    if (control.l_oldDiscount != control.l_discount && control.l_offerStatus == null) {
                        options_1.topic = control.l_ShopNotificationTopicName;
                        options_1.title = control.l_shopName;
                        options_1.body = control.l_shopName + ' discount has been updated from ' + control.l_oldDiscount + ' to ' + control.l_discount + '.';
                        options_1.shopID = control.l_shopData.ShopID;
                        control.notificationService.newNotification(options_1);
                    }
                }
                else
                    optionMsg.message = 'Record not Update';
                control.commonService.msgToast(optionMsg);
                control.router.navigate(['user-ShopList']);
                return;
            }
        };
        this.commonService.httpPost(options);
    };
    ShopUpdatePage.prototype.UserGeocoder = function () {
        var _this = this;
        if (this.isbtnDisabled == true) {
            return;
        }
        var fullAdress = this.l_address + ', ' + this.l_city + ', ' + this.l_state;
        var options = {
            useLocale: true,
            maxResults: 2
        };
        this.nativeGeocoder.forwardGeocode(fullAdress, options)
            .then(function (coordinates) {
            _this.l_latDest = coordinates[0].latitude;
            _this.l_longDest = coordinates[0].longitude;
            _this.updateShop();
        });
    };
    ShopUpdatePage.prototype.hideExpiryDate = function () {
        if (this.l_chkboxCondition) {
            this.l_hideExpiryDate = true;
            this.l_chkbox = true;
            this.formValidation();
            this.l_chkboxCondition = false;
            this.l_shopData.EndDate = null;
            this.l_endDate = null;
        }
        else if (this.l_endDate != null) {
            this.l_chkbox = false;
            this.l_endDate = null;
            this.l_shopData.EndDate = null;
            this.l_hideExpiryDate = true;
            this.formValidation();
        }
        else {
            this.l_endDate = null;
            this.l_hideExpiryDate = false;
            this.l_chkbox = false;
            this.l_chkboxCondition = true;
            this.formValidation();
        }
    };
    ShopUpdatePage.prototype.getAllState = function () {
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
    ShopUpdatePage.prototype.getAllCity = function () {
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
    ShopUpdatePage.prototype.getFirstLetterCapital = function (value) {
        return this.commonService.getFirstCapitalLetter(value);
    };
    ;
    ShopUpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-update',
            template: __webpack_require__(/*! ./shop-update.page.html */ "./src/app/pages/shop-update/shop-update.page.html"),
            styles: [__webpack_require__(/*! ./shop-update.page.scss */ "./src/app/pages/shop-update/shop-update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_http__WEBPACK_IMPORTED_MODULE_9__["Http"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeGeocoder"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], ShopUpdatePage);
    return ShopUpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=shop-update-shop-update-module.js.map