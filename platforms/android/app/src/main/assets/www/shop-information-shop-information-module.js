(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-information-shop-information-module"],{

/***/ "./src/app/pages/shop-information/shop-information.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/shop-information/shop-information.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShopInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopInformationPageModule", function() { return ShopInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-information.page */ "./src/app/pages/shop-information/shop-information.page.ts");







var routes = [
    {
        path: '',
        component: _shop_information_page__WEBPACK_IMPORTED_MODULE_6__["ShopInformationPage"]
    }
];
var ShopInformationPageModule = /** @class */ (function () {
    function ShopInformationPageModule() {
    }
    ShopInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_information_page__WEBPACK_IMPORTED_MODULE_6__["ShopInformationPage"]]
        })
    ], ShopInformationPageModule);
    return ShopInformationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/shop-information/shop-information.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/shop-information/shop-information.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card_pic\">\n    <div class=\"card_back\"></div>\n    <div class=\"backbtn\">\n        <ion-icon name=\"ios-arrow-back\" (click)=\"goBack()\" class=\"backicon\"></ion-icon>\n        <ion-icon class=\"shareicon\" name=\"share\" (click)=\"goShare()\"></ion-icon>\n        <div class=\"card_main\">\n            <div class=\"card_name\">\n                <div class=\"shop_name\">\n                    {{l_shopName}}\n                </div>\n                <div class=\"fav-height\">\n                    <div [ngClass]=\"l_isFavourite ? 'card_favrouite': 'card_Unfavrouite'\"\n                        (click)=\"favourite(l_shopID, l_isFavourite)\">\n                        <ion-icon name=\"heart\"></ion-icon>\n                        <h6>({{l_favouriteCount}})</h6>\n                    </div>\n                </div>\n                <div class=\"fav-height\">\n                    <div [ngClass]=\"l_subscription ? 'card_favrouite': 'card_Unfavrouite'\"\n                        (click)=\"ShopSubscription(l_shopID, l_subscription)\">\n                        <ion-icon *ngIf=\"l_shopAdminID != l_userID\" name=\"notifications\"></ion-icon>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card_dis\">\n                <div class=\"card_dis_text\">\n                    {{l_uptoDiscount}}% off\n                </div>\n            </div>\n            <div class=\"card_reviewAndFavoruite\">\n                <div class=\"card_reviews\">Rating & Reviews\n                    <label>({{l_totalReview}})</label>\n                </div>\n            </div>\n            <div class=\"card_rating\">\n                <span *ngFor=\"let str of [1,2,3,4,5];\">\n                    <span *ngIf=\"l_rating >= str\">\n                        <ion-icon name=\"ios-star\" class=\"star_rating_color\"></ion-icon>\n                    </span>\n                    <ion-icon name=\"ios-star\" class=\"star_rating\"></ion-icon>\n                </span>\n                <div class=\"rating\">({{l_rating}})</div>\n                <div class=\"distance\">\n                    <ion-icon class=\"distance-icon\" name=\"navigate\"></ion-icon>\n                    <h6>{{l_distance}} km</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"l_imageURL === null\">\n        <img src=\"../../../assets/img/notfound.png\" height=\"250px\" width=\"100%\" />\n    </div>\n    <div *ngIf=\"l_imageURL != null\">\n        <img src=\"{{env.imageURL + l_imageURL}}\" height=\"250px\" width=\"100%\" />\n    </div>\n</div>\n<ion-content style=\"z-index: -2;\">\n    <div class=\"card_Description\">\n        <div class=\"tab-wrap\">\n            <input type=\"radio\" name=\"tabs\" id=\"tab1\" checked>\n            <div class=\"tab-label-content\" id=\"tab1-content\">\n                <label class=\"tab-label\" for=\"tab1\">About</label>\n                <div class=\"tab-content\">\n                    <div class=\"content-text\">\n                        <div class=\"about-content\" (click)=\"navme(l_address)\">\n                            <div class=\"address-text\">\n                                <ion-icon name=\"ios-pin\" class=\"arrow-icon\"></ion-icon>\n                                <span>Address </span>\n                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{l_address}}, {{l_city}}, {{l_state}}</p>\n                            </div>\n                            <div class=\"arrow\">\n                                <ion-icon name=\"ios-arrow-forward\" class=\"arrow-icon-left\"></ion-icon>\n                            </div>\n                        </div>\n                        <a href=\"tel:{{l_mobile}}\" class=\"tel\" *ngIf=\"l_mobile != null\">\n                            <div class=\"about-content\">\n\n                                <div class=\"address-text\">\n                                    <ion-icon name=\"ios-phone-portrait\" class=\"arrow-icon\"></ion-icon>\n                                    <span>Mobile </span>\n                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{l_mobile}}</p>\n                                </div>\n                                <div class=\"arrow\">\n                                    <ion-icon name=\"ios-arrow-forward\" class=\"arrow-icon-left\"></ion-icon>\n                                </div>\n                            </div>\n                        </a>\n                        <a href=\"tel:{{l_phone}}\" class=\"tel\" *ngIf=\"l_phone != ''\">\n                            <div class=\"about-content\">\n                                <div class=\"address-text\">\n                                    <ion-icon name=\"ios-call\" class=\"arrow-icon\"></ion-icon>\n                                    <span>LandLine </span>\n                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{l_phone}}</p>\n                                </div>\n                                <div class=\"arrow\">\n                                    <ion-icon name=\"ios-arrow-forward\" class=\"arrow-icon-left\"></ion-icon>\n                                </div>\n                            </div>\n                        </a>\n                        <div class=\"about-content-time\">\n                            <div class=\"address-text\">\n                                <ion-icon name=\"ios-time\" class=\"arrow-icon\"></ion-icon>\n                                <span>Timings </span>\n                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{l_openingTime}} - {{l_closingTime}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <input type=\"radio\" name=\"tabs\" id=\"tab2\">\n            <div class=\"tab-label-content\" id=\"tab2-content\">\n                <label class=\"tab-label\" for=\"tab2\">Review</label>\n                <div class=\"tab-content\">\n                    <div class=\"tab-panel\">\n                        <h4 class=\"review-count-title\">\n                            <span class=\"commentLink\" (click)=\"openModal(l_shopID)\"> Add Comments </span>\n                            <span *ngIf=\"l_totalReview > 0\">\n                                <label class=\"reviewLink\" (click)=\"viewReview()\">View All</label>\n                            </span>\n                        </h4>\n                        <div class=\"review_main\">\n                            <div class=\"review\" *ngFor=\"let row of l_reviewList\">\n                                <div class=\"review-image\">\n                                    <ion-avatar class=\"picText\" slot=\"start\" *ngIf=\"row.ImageUrl === null\">\n                                        {{commonService.profileTextLetter(row.FirstName, row.LastName)}}\n                                    </ion-avatar>\n                                    <ion-avatar class=\"pic\" slot=\"start\" *ngIf=\"row.ImageUrl != null\">\n                                        <ion-img src=\"{{env.imageURL + row.ImageUrl}}\"></ion-img>\n                                    </ion-avatar>\n                                </div>\n                                <div class=\"review-text\">\n                                    <div class=\"text_review\">\n                                        <span class=\"name_text\">{{row.FullName}}</span>\n                                        <label class=\"review-rating\">\n                                            <span *ngFor=\"let str of [1,2,3,4,5];\">\n                                                <span *ngIf=\"row.RatingNo >= str\">\n                                                    <ion-icon name=\"ios-star\" class=\"star_rating_color_review\">\n                                                    </ion-icon>\n                                                </span>\n                                                <ion-icon name=\"ios-star\" class=\"star_rating_review\"></ion-icon>\n                                            </span>\n                                        </label>\n                                    </div>\n                                    <h6>{{commonService.convertDateTimeString(commonService.ConvertUTCToLocalDateTime(row.FeedbackDate))}}\n                                    </h6>\n                                    <p>{{row.Description}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"slide\"></div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/shop-information/shop-information.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/shop-information/shop-information.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.card_main {\n  height: 105px;\n  width: 100%;\n  float: left;\n  margin: 85px 0px 0px 0px; }\n\n.card_pic {\n  height: 250px;\n  width: 100%;\n  margin: 0px 0px 0px 0px;\n  float: left;\n  z-index: -1; }\n\n.card_back {\n  width: 100%;\n  height: 250px;\n  position: fixed;\n  background-color: #2e3842;\n  opacity: 0.6; }\n\n.backbtn {\n  width: 100%;\n  height: 250px;\n  position: fixed; }\n\n.backbtn .backicon {\n    color: white;\n    margin: 24px 0px 0px 14px;\n    font-size: 20px;\n    float: left; }\n\n.backbtn .shareicon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    margin: 27px 10px 0px 0px;\n    color: white;\n    font-size: 18px;\n    float: right; }\n\n.card_name {\n  height: 25px;\n  width: 100%;\n  margin: 5px 5px 0px 5px;\n  float: left;\n  padding: 5px; }\n\n.card_name .shop_name {\n    width: auto;\n    float: left;\n    text-transform: capitalize;\n    border-bottom: 2.5px solid #fb630f;\n    color: white;\n    font-size: 20px;\n    font-weight: bold;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.card_name .card_Unfavrouite {\n    height: 18px;\n    margin: 0px 10px 0px 0px;\n    float: right;\n    font-size: 20px;\n    text-align: center;\n    color: white; }\n\n.card_name .card_favrouite {\n    height: 18px;\n    margin: 0px 10px 0px 0px;\n    float: right;\n    font-size: 20px;\n    text-align: center;\n    color: rgba(167, 19, 19, 0.87); }\n\n.card_name .card_Unfavrouite h6 {\n    font-size: 10px;\n    margin: -2px 0px 0px 0px;\n    padding: 0px 0px 0px 2px;\n    text-align: center;\n    color: white; }\n\n.card_name .card_favrouite h6 {\n    font-size: 10px;\n    margin: -2px 0px 0px 0px;\n    padding: 0px 0px 0px 2px;\n    text-align: center;\n    color: white; }\n\n.card_name .fav-height {\n    height: 18px;\n    margin: 10px 0px 0px 0px;\n    padding: 0px;\n    float: right;\n    font-size: 15px;\n    text-align: center; }\n\n.card_dis {\n  width: 100%;\n  height: 17px;\n  float: left;\n  box-align: bottom;\n  margin: 8px 0px 0px 0px;\n  position: absolute;\n  z-index: 100;\n  bottom: 0px; }\n\n.card_dis .card_dis_text {\n    height: 30px;\n    background-color: #fb630f;\n    float: right;\n    color: #fff;\n    font-size: 13px;\n    text-align: center;\n    border-radius: 15px;\n    margin: 2px 9px 0px 0px;\n    padding: 8px 12px 8px 12px;\n    position: -webkit-sticky;\n    position: sticky; }\n\n.card_reviewAndFavoruite {\n  height: 20px;\n  width: 100%;\n  margin: 4px 10px 0px 5px;\n  float: left;\n  padding: 5px;\n  font-size: 11px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal; }\n\n.card_reviewAndFavoruite .card_reviews {\n    width: 85%;\n    height: 20px;\n    margin: 8px 0px 0px 0px;\n    float: left;\n    color: white; }\n\n.card_reviewAndFavoruite label {\n    margin: 0px 0px 0px 5px;\n    font-size: 9px; }\n\n.card_rating {\n  height: 20px;\n  width: 100%;\n  margin: 18px 10px 0px 5px;\n  float: left;\n  font-size: small;\n  padding: 5px; }\n\n.card_rating .rating {\n    float: left;\n    font-size: 10px;\n    color: white;\n    font-weight: bold;\n    padding: 0px;\n    margin: 0px 0px 0px 8px;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.card_rating .distance {\n    color: white;\n    float: right;\n    margin: 3px 12px 0px 0px; }\n\n.card_rating .distance .distance-icon {\n      color: #fb630f;\n      float: left;\n      font-size: 11px;\n      margin: 0px 0px 0px 1px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n\n.card_rating .distance h6 {\n      font-size: 11px;\n      margin: 0px;\n      padding: 0px;\n      float: right;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.card_Description {\n  float: left;\n  width: 100%;\n  margin: 25px 0px 0px 0px;\n  background-color: #f5f5f5; }\n\ntab-wrap {\n  width: 100%;\n  position: relative;\n  display: flex; }\n\ninput[type=\"radio\"][name=\"tabs\"] {\n  position: absolute;\n  z-index: -1;\n  color: #969ba1;\n  font-family: 'Poppins';\n  background-color: #f5f5f5;\n  font-size: 12px; }\n\ninput[type=\"radio\"][name=\"tabs\"]:checked + .tab-label-content .tab-label {\n  color: #fb630f;\n  font-family: 'Poppins';\n  background-color: #f5f5f5;\n  font-weight: bold;\n  font-size: 12px; }\n\ninput[type=\"radio\"][name=\"tabs\"]:checked + .tab-label-content .tab-content {\n  display: block; }\n\ninput[type=\"radio\"][name=\"tabs\"]:nth-of-type(1):checked ~ .slide {\n  left: calc((100% / 2) * 0); }\n\ninput[type=\"radio\"][name=\"tabs\"]:nth-of-type(2):checked ~ .slide {\n  left: calc((100% / 2) * 1); }\n\ninput[type=\"radio\"][name=\"tabs\"]:first-of-type:checked ~ .slide {\n  left: 0; }\n\n.tab-label {\n  cursor: pointer;\n  color: #969ba1;\n  background-color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 30px;\n  transition: color 0.2s ease;\n  width: calc(100%/2);\n  float: left;\n  background-color: #f5f5f5;\n  border-bottom: 0.4px solid #dde2e6;\n  font-weight: bold;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal;\n  font-size: 12px; }\n\n.slide {\n  background: #fb630f;\n  width: 33%;\n  height: 2px;\n  position: absolute;\n  text-align: center;\n  top: 54px;\n  padding-left: -30px;\n  transition: left 0.3s ease-out;\n  margin-left: 34px; }\n\n.tab-label-content {\n  width: 100%; }\n\n.tab-label-content .tab-content {\n  position: absolute;\n  top: 75px;\n  line-height: 20px;\n  display: none;\n  width: 100%; }\n\n.content-text {\n  width: 90%;\n  margin: 0px auto;\n  background-color: #f5f5f5; }\n\n.content-text .about-content {\n    width: 100%;\n    float: left;\n    height: 47px;\n    margin: 5px 0px 6px 0px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.content-text .about-content .address-text {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      float: left;\n      z-index: -1;\n      font-size: 10px;\n      padding: 5px;\n      color: #969ba1;\n      margin: 0px 0px 0px 8px; }\n\n.content-text .about-content .address-text span {\n        font-family: 'Poppins';\n        font-style: normal;\n        font-variant: normal;\n        color: #2e3842;\n        font-size: 10px;\n        font-weight: bold;\n        padding: 5px; }\n\n.content-text .about-content .address-text p {\n        margin: -5px 0px 0px 0px; }\n\n.content-text .about-content .arrow {\n      color: #969ba1;\n      float: right;\n      position: relative;\n      padding: 16px 16px 16px 0px;\n      text-align: center; }\n\n.content-text .about-content-time {\n    width: 100%;\n    height: 47px;\n    float: left;\n    background-color: white;\n    border-radius: 10px;\n    margin: 5px 0px 6px 0px;\n    color: #969ba1;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.content-text .about-content-time .address-text {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      float: left;\n      z-index: -1;\n      font-size: 8px;\n      padding: 5px;\n      margin: 0px 0px 0px 8px; }\n\n.content-text .about-content-time .address-text span {\n        font-family: 'Poppins';\n        font-style: normal;\n        font-variant: normal;\n        color: #2e3842;\n        font-size: 10px;\n        font-weight: bold;\n        padding: 5px; }\n\n.content-text .about-content-time .address-text p {\n        margin: -5px 0px 0px 0px; }\n\n.content-text .arrow-icon {\n    color: #fb630f; }\n\n.content-text .arrow-icon-left {\n    color: #969ba1; }\n\n.tab-panel {\n  margin: 0px 10px 10px 10px; }\n\n.review-count-title {\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0px 0px 11px 8px; }\n\n.reviewLink {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal;\n  float: right;\n  font-size: 10px;\n  padding: 0px 15px 5px 5px;\n  color: #969ba1; }\n\n.review_main {\n  width: 96%;\n  margin: 0px auto; }\n\n.review_main .review {\n    background-color: white;\n    width: 100%;\n    height: auto;\n    float: left;\n    box-shadow: 0 0 5px #d8d8d8;\n    border-radius: 10px;\n    margin: 0px 0px 8px 0px; }\n\n.review_main .review .review-image {\n      width: 15%;\n      height: 50px;\n      border-radius: 50%;\n      margin: 10px 0px 0px 12px;\n      float: left; }\n\n.review_main .review .review-image .pic {\n        width: 40px;\n        height: 40px; }\n\n.review_main .review .review-image .picText {\n        width: 40px;\n        height: 40px;\n        color: #fff;\n        background-color: #4c614c;\n        text-align: center;\n        padding: 10px 5px 5px 5px;\n        text-transform: capitalize; }\n\n.review_main .review .review-text {\n      width: 80%;\n      height: auto;\n      margin: 10px 0px 0px 0px;\n      float: left;\n      padding: 0px; }\n\n.review_main .review .review-text .text_review {\n        width: 100%; }\n\n.review_main .review .review-text .text_review .name_text {\n          font-size: 12px;\n          margin: 2px 0px 0px 2px; }\n\n.review_main .review .review-text .text_review .review-rating {\n          height: 18px;\n          margin: 5px 10px 0px 2px;\n          float: right; }\n\n.review_main .review .review-text h6 {\n        color: #969ba1;\n        font-size: 8px;\n        margin: -3px 0px 0px 2px; }\n\n.review_main .review .review-text p {\n        color: #969ba1;\n        font-size: 10px;\n        margin: 5px 10px 10px 2px; }\n\n.star_rating {\n  color: #969ba1;\n  position: relative;\n  z-index: 0;\n  float: left;\n  font-size: 13px; }\n\n.star_rating_color {\n  font-size: 13px;\n  color: #fece3a;\n  position: absolute;\n  float: left;\n  z-index: 100; }\n\n.star_rating_review {\n  color: #969ba1;\n  position: relative;\n  z-index: 0;\n  float: left;\n  font-size: 10px; }\n\n.star_rating_color_review {\n  font-size: 10px;\n  color: #fece3a;\n  position: absolute;\n  float: left;\n  z-index: 100; }\n\n.tel {\n  color: #2e3842; }\n\n.commentLink {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal;\n  font-size: 10px;\n  margin: 0px 0px 0px 5px;\n  text-decoration: underline;\n  color: #0ac9c9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC1pbmZvcm1hdGlvbi9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXHNob3AtaW5mb3JtYXRpb25cXHNob3AtaW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0IsRUFBQTs7QUFFNUI7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNoQixlQUFlLEVBQUE7O0FBSGhCO0lBS0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQVJmO0lBV0ksaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLFdBQVU7RUFDVix1QkFBdUI7RUFDdkIsV0FBVTtFQUNWLFlBQVksRUFBQTs7QUFMaEI7SUFPUSxXQUFVO0lBQ1YsV0FBVTtJQUNWLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsWUFBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTs7QUFoQjVCO0lBbUJRLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBOztBQXhCcEI7SUEyQlksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixZQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4QkFBOEIsRUFBQTs7QUFoQzFDO0lBbUNZLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBdkN4QjtJQTBDWSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBOztBQTlDeEI7SUFpRFksWUFBWTtJQUVaLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBVztJQUNYLGVBQWU7SUFDZixrQkFBa0IsRUFBQTs7QUFHOUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQVJmO0lBVVEsWUFBWTtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHdCQUFnQjtJQUFoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osV0FBVTtFQUNWLHdCQUF3QjtFQUN4QixXQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBOztBQVR4QjtJQVdRLFVBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBZnBCO0lBa0JZLHVCQUF1QjtJQUN2QixjQUFjLEVBQUE7O0FBRzFCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBTmhCO0lBUVEsV0FBVztJQUNYLGVBQWM7SUFDZCxZQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTs7QUFoQjVCO0lBbUJRLFlBQVk7SUFDWixZQUFXO0lBQ1gsd0JBQXdCLEVBQUE7O0FBckJoQztNQXVCWSxjQUFjO01BQ2QsV0FBVztNQUNYLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsZ0NBQXdCO2NBQXhCLHdCQUF3QixFQUFBOztBQTNCcEM7TUE4QlksZUFBZTtNQUNmLFdBQVc7TUFDWCxZQUFZO01BQ1osWUFBWTtNQUNaLHNCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7O0FBSWhDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxPQUFPLEVBQUE7O0FBR1Q7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQTs7QUFFakI7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBRWI7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUg3QjtJQUtRLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ3BCLDJCQUE0QixFQUFBOztBQVhuQztNQWFZLHNCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3JCLFdBQVc7TUFDWCxXQUFXO01BQ1gsZUFBZTtNQUNmLFlBQVk7TUFDWixjQUFjO01BQ2QsdUJBQXVCLEVBQUE7O0FBckJsQztRQXVCWSxzQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixZQUFZLEVBQUE7O0FBN0J4QjtRQWdDWSx3QkFBd0IsRUFBQTs7QUFoQ3BDO01Bb0NZLGNBQWM7TUFDZCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLDJCQUEyQjtNQUMzQixrQkFBa0IsRUFBQTs7QUF4QzlCO0lBNENRLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCwyQkFBMkIsRUFBQTs7QUFuRG5DO01BcURZLHNCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLFdBQVc7TUFDWCxXQUFXO01BQ1gsY0FBYztNQUNkLFlBQVk7TUFDWix1QkFBdUIsRUFBQTs7QUE1RG5DO1FBK0RZLHNCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDYixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFlBQVksRUFBQTs7QUFyRXpCO1FBd0VnQix3QkFBd0IsRUFBQTs7QUF4RXhDO0lBNkVRLGNBQWEsRUFBQTs7QUE3RXJCO0lBZ0ZRLGNBQWEsRUFBQTs7QUFHckI7RUFDSSwwQkFBMEIsRUFBQTs7QUFFOUI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QixFQUFBOztBQUUxQjtFQUNNLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBRnBCO0lBSVEsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7O0FBVi9CO01BWVEsVUFBVTtNQUNWLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFdBQVcsRUFBQTs7QUFoQm5CO1FBa0JZLFdBQVU7UUFDVixZQUFXLEVBQUE7O0FBbkJ2QjtRQXNCWSxXQUFVO1FBQ1YsWUFBVztRQUNYLFdBQVc7UUFDWCx5QkFBaUM7UUFDakMsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QiwwQkFBMEIsRUFBQTs7QUE1QnRDO01BZ0NRLFVBQVU7TUFDVixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBcENwQjtRQXNDUSxXQUFXLEVBQUE7O0FBdENuQjtVQXdDWSxlQUFlO1VBQ2YsdUJBQXVCLEVBQUE7O0FBekNuQztVQTRDWSxZQUFZO1VBQ1osd0JBQXdCO1VBQ3hCLFlBQVksRUFBQTs7QUE5Q3hCO1FBa0RZLGNBQWM7UUFDZCxjQUFjO1FBQ2Qsd0JBQXdCLEVBQUE7O0FBcERwQztRQXdEWSxjQUFjO1FBQ2QsZUFBYztRQUNkLHlCQUF5QixFQUFBOztBQUtyQztFQUNJLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxjQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixjQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRXBCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLGNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG9wLWluZm9ybWF0aW9uL3Nob3AtaW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7ICBcclxufVxyXG4uY2FyZF9tYWlue1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDg1cHggMHB4IDBweCAwcHg7XHJcbn1cclxuLmNhcmRfcGlje1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbi5jYXJkX2JhY2t7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiBwb3NpdGlvbjogZml4ZWQ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzODQyO1xyXG4gb3BhY2l0eTogMC42OyAgIFxyXG59XHJcbi5iYWNrYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gcG9zaXRpb246IGZpeGVkO1xyXG4gLmJhY2tpY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDBweCAwcHggMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gfVxyXG4gLnNoYXJlaWNvbntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICBtYXJnaW46IDI3cHggMTBweCAwcHggMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gfVxyXG59XHJcbi5jYXJkX25hbWV7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggNXB4IDBweCA1cHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLnNob3BfbmFtZXtcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMi41cHggc29saWQgI2ZiNjMwZjsgXHJcbiAgICAgICAgY29sb3I6d2hpdGU7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDsgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuY2FyZF9VbmZhdnJvdWl0ZXtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfZmF2cm91aXRle1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxNjcsIDE5LCAxOSwgMC44Nyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAuY2FyZF9VbmZhdnJvdWl0ZSBoNntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkX2ZhdnJvdWl0ZSBoNntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYXYtaGVpZ2h0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIC8vd2lkdGg6MTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxufVxyXG4uY2FyZF9kaXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LWFsaWduOiBib3R0b207XHJcbiAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDsgXHJcbiAgICBib3R0b206IDBweDtcclxuICAgIC5jYXJkX2Rpc190ZXh0e1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDJweCA5cHggMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIH1cclxufSBcclxuLmNhcmRfcmV2aWV3QW5kRmF2b3J1aXRle1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjogNHB4IDEwcHggMHB4IDVweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAuY2FyZF9yZXZpZXdze1xyXG4gICAgICAgIHdpZHRoOjg1JTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbn1cclxuLmNhcmRfcmF0aW5ne1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDE4cHggMTBweCAwcHggNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLnJhdGluZ3tcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuZGlzdGFuY2V7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICBtYXJnaW46IDNweCAxMnB4IDBweCAwcHg7XHJcbiAgICAgICAgLmRpc3RhbmNlLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDFweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jYXJkX0Rlc2NyaXB0aW9ue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IFxyXG59XHJcblxyXG50YWItd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7ICBcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJ0YWJzXCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHQgXHJcbiAgY29sb3I6ICM5NjliYTE7XHJcbiAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1x0IFxyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwidGFic1wiXTpjaGVja2VkICsgLnRhYi1sYWJlbC1jb250ZW50IC50YWItbGFiZWwge1xyXG4gIGNvbG9yOiAjZmI2MzBmO1xyXG4gIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJ0YWJzXCJdOmNoZWNrZWQgKyAudGFiLWxhYmVsLWNvbnRlbnQgLnRhYi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cInRhYnNcIl06bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZCB+IC5zbGlkZSB7XHJcbiAgbGVmdDogY2FsYygoMTAwJSAvIDIpICogMCk7XHJcblxyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwidGFic1wiXTpudGgtb2YtdHlwZSgyKTpjaGVja2VkIH4gLnNsaWRlIHtcclxuICBsZWZ0OiBjYWxjKCgxMDAlIC8gMikgKiAxKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJ0YWJzXCJdOmZpcnN0LW9mLXR5cGU6Y2hlY2tlZCB+IC5zbGlkZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnRhYi1sYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjOTY5YmExO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuICB3aWR0aDogY2FsYygxMDAlLzIpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC40cHggc29saWQgI2RkZTJlNjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNsaWRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmYjYzMGY7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDU0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC0zMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XHJcbn1cclxuXHJcbi50YWItbGFiZWwtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRhYi1sYWJlbC1jb250ZW50IC50YWItY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzVweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250ZW50LXRleHR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAuYWJvdXQtY29udGVudHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDZweCAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICAgICAgLmFkZHJlc3MtdGV4dHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICBmbG9hdDogbGVmdDsgXHJcbiAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDhweDtcclxuICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW46IC01cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3d7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFib3V0LWNvbnRlbnQtdGltZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHggNnB4IDBweDtcclxuICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNkOGQ4ZDg7IFxyXG4gICAgICAgIC5hZGRyZXNzLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyBcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggOHB4O1xyXG4gXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTVweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXJyb3ctaWNvbntcclxuICAgICAgICBjb2xvcjojZmI2MzBmO1xyXG4gICAgICAgfVxyXG4gICAgICAgLmFycm93LWljb24tbGVmdHtcclxuICAgICAgICBjb2xvcjojOTY5YmExO1xyXG4gICAgICAgfVxyXG59XHJcbi50YWItcGFuZWx7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4ucmV2aWV3LWNvdW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDExcHggOHB4O1xyXG59XHJcbiAgLnJldmlld0xpbmt7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweCA1cHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiM5NjliYTE7XHJcbiAgICB9XHJcbiAgICAucmV2aWV3X21haW57XHJcbiAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIC5yZXZpZXd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggOHB4IDBweDtcclxuICAgICAgICAgIC5yZXZpZXctaW1hZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAxMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLnBpY3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGljVGV4dHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA5NywgNzYpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHggNXB4IDVweDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXZpZXctdGV4dHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7IFxyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcclxuICAgICAgICAgICAudGV4dF9yZXZpZXd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAubmFtZV90ZXh0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMHB4IDBweCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJldmlldy1yYXRpbmd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4IDBweCAycHg7IFxyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0OyA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAtM3B4IDBweCAwcHggMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4IDEwcHggMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0YXJfcmF0aW5ne1xyXG4gICAgICAgIGNvbG9yOiM5NjliYTE7IFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5zdGFyX3JhdGluZ19jb2xvcntcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6I2ZlY2UzYTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgfVxyXG4gICAgLnN0YXJfcmF0aW5nX3Jldmlld3tcclxuICAgICAgICBjb2xvcjojOTY5YmExOyBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Rhcl9yYXRpbmdfY29sb3JfcmV2aWV3e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjojZmVjZTNhO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB9ICBcclxuLnRlbHtcclxuICAgIGNvbG9yOiAjMmUzODQyO1xyXG59XHJcbi5jb21tZW50TGlua3tcclxuICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjpyZ2IoMTAsIDIwMSwgMjAxKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/shop-information/shop-information.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/shop-information/shop-information.page.ts ***!
  \*****************************************************************/
/*! exports provided: ShopInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopInformationPage", function() { return ShopInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _services_sqlservices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sqlservices */ "./src/app/services/sqlservices.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_feedback_modal_feedback_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/feedback-modal/feedback-modal.page */ "./src/app/pages/modal/feedback-modal/feedback-modal.page.ts");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _modal_search_shop_modal_search_shop_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/search-shop-modal/search-shop-modal.page */ "./src/app/pages/modal/search-shop-modal/search-shop-modal.page.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");














var ShopInformationPage = /** @class */ (function () {
    function ShopInformationPage(http, toastCtrl, ToastCtrl, router, modal, launchNavigator, sqlite, fcm, actionSheetController, socialSharing, events, commonService, platform) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.router = router;
        this.modal = modal;
        this.launchNavigator = launchNavigator;
        this.sqlite = sqlite;
        this.fcm = fcm;
        this.actionSheetController = actionSheetController;
        this.socialSharing = socialSharing;
        this.events = events;
        this.commonService = commonService;
        this.platform = platform;
        this.l_reviewList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
        this.sqlService = new _services_sqlservices__WEBPACK_IMPORTED_MODULE_4__["Sqlservices"](this.sqlite);
    }
    ShopInformationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.modal.dismiss();
        this.l_userID = localStorage.getItem('userID');
        localStorage.removeItem('hometab');
        this.getShopdatabyID();
        this.platform.backButton.subscribe(function () {
            debugger;
            if (localStorage.getItem('home') == 'true') {
                localStorage.removeItem('home');
                localStorage.setItem('hometab', 'true');
            }
            else {
                _this.router.navigate(['tabs/shop']);
            }
        });
    };
    //Get Shop
    ShopInformationPage.prototype.getShopdatabyID = function () {
        var shopOption = {
            ShopID: localStorage.getItem("shopID"),
            UserID: localStorage.getItem('userID')
        };
        var options = {};
        var control = this;
        control.l_feedbackDescription = '';
        control.l_feedbackRating = 0;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getShopDatabyID;
        options.catchErrorText = 'ShopController: error => getShopdatabyID()';
        options.methodType = 'POST';
        options.paramData = shopOption;
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_reviewList = data.ReviewData;
                var locations = [{ "Latitude": data.Result[0].Latitude, "Longitude": data.Result[0].Longitude }];
                var distance = control.commonService.applyHaversine(locations);
                control.l_distance = distance[0].distance;
                localStorage.setItem('ShopName', control.l_shopName = data.Result[0].ShopName);
                control.l_shopID = data.Result[0].ShopID;
                control.l_uptoDiscount = data.Result[0].UptoDiscount;
                control.l_closingTime = data.Result[0].ClosingTime;
                control.l_openingTime = data.Result[0].OpeningTime;
                control.l_favouriteCount = data.Result[0].FavouriteCount;
                control.l_isFavourite = data.Result[0].IsFavourite;
                control.l_totalReview = data.Result[0].TotalRatingAndReviews;
                control.l_description = data.Result[0].Description;
                control.l_address = data.Result[0].Address1;
                control.l_city = data.Result[0].City;
                control.l_state = data.Result[0].State;
                control.l_rating = data.Result[0].Rating;
                control.l_phone = data.Result[0].Phone;
                control.l_mobile = data.Result[0].Mobile;
                control.l_imageURL = data.Result[0].ImageURL;
                control.l_subscription = data.Result[0].IsSubscription;
                control.l_shopAdminID = data.Result[0].ShopAdminID;
                control.l_subscribeTopicName = data.Result[0].SubscribeTopicName;
                if (data.RatingData.length > 0)
                    control.l_feedbackRating = data.RatingData[0].RatingNo;
                if (data.FeedbackData.length > 0)
                    control.l_feedbackDescription = data.FeedbackData[0].Description;
                // const ShopRecentlyViewedTableData: any = {
                //     tableName: 'ShopRecentlyViewed_',
                //     column:[{columnName: 'ShopID', columnValue: control.l_shopID},
                //           {columnName: 'ImageURL', columnValue: control.l_imageURL}],
                //     // columnName: 'SearchingName',
                //     // columnValue: l_search
                // }
                // control.sqlService.insertShopSearchTable(ShopRecentlyViewedTableData);
                control.sqlService.insertShopRecentlyViewedTable(control.l_shopID, control.l_imageURL);
            }
        };
        this.commonService.httpPost(options);
    };
    ShopInformationPage.prototype.ngOnInit = function () {
        localStorage.getItem('favourite');
    };
    ShopInformationPage.prototype.goBack = function () {
        if (localStorage.getItem('favourite') == 'true') {
            localStorage.removeItem('favourite');
            this.router.navigate(['favorites']);
        }
        else if (localStorage.getItem('userShopList') == 'true') {
            localStorage.removeItem('userShopList');
            this.router.navigate(['user-ShopList']);
        }
        else if (localStorage.getItem('searchShopModal') == 'true') {
            localStorage.removeItem('searchShopModal');
            this.openModal1();
        }
        else if (localStorage.getItem('home') == 'true') {
            localStorage.removeItem('home');
            this.router.navigate(['tabs/home']);
        }
        else if (localStorage.getItem('suscribe') == 'true') {
            localStorage.removeItem('suscribe');
            this.router.navigate(['shop-subscription']);
        }
        else if (localStorage.getItem('featureShops') == 'true') {
            localStorage.removeItem('suscribe');
            this.router.navigate(['tabs/home']);
        }
        else if (localStorage.getItem('NewShops') == 'true') {
            localStorage.removeItem('suscribe');
            this.router.navigate(['tabs/home']);
        }
        else {
            this.router.navigate(['tabs/shop']);
        }
    };
    ShopInformationPage.prototype.viewReview = function () {
        this.router.navigate(['review_all']);
    };
    ShopInformationPage.prototype.favourite = function (shopID, isFavourite) {
        isFavourite = !isFavourite;
        localStorage.setItem('EventShopID', shopID);
        var favouriteheart = {
            ShopIDList: [{ ShopID: shopID }],
            ProductID: 0,
            IsFavourite: isFavourite,
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        };
        var options = {};
        var control = this;
        options.title = 'Add User!!!';
        options.apiURL = this.env.shopApi.insertUpdateFavouriteURL;
        options.catchErrorText = 'UserController: error => favourite()';
        options.methodType = 'POST';
        options.paramData = favouriteheart;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                var optionMsg = {};
                if (isFavourite) {
                    control.gotofavourite();
                }
                else {
                    optionMsg.message = 'Removed from favourite List';
                    control.commonService.msgToast(optionMsg);
                }
                control.l_favouriteCount = data.Result[0].FavCount;
                control.l_isFavourite = data.Result[0].IsFavourite;
                localStorage.setItem('favCounts', control.l_favouriteCount);
                localStorage.setItem('FavHeart', control.l_isFavourite);
                control.events.publish('updateFav');
                return;
            }
        };
        this.commonService.httpPost(options);
    };
    ShopInformationPage.prototype.gotofavourite = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Added to favourite list",
                            buttons: [{
                                    text: 'View my favourite list',
                                    handler: function () {
                                        _this.router.navigate(['favorites']);
                                        localStorage.setItem('shopID', _this.l_shopID);
                                        localStorage.setItem('shopFav', "true");
                                    }
                                },
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
    ShopInformationPage.prototype.openModal = function (shopID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shopiD, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shopiD = shopID;
                        return [4 /*yield*/, this.modal.create({
                                component: _modal_feedback_modal_feedback_modal_page__WEBPACK_IMPORTED_MODULE_8__["FeedbackModalPage"],
                                componentProps: {
                                    Shop_ID: shopiD,
                                    Description: this.l_feedbackDescription,
                                    Rating: this.l_feedbackRating
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getShopdatabyID();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopInformationPage.prototype.navme = function (address) {
        this.launchNavigator.navigate(address);
    };
    ShopInformationPage.prototype.openModal1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _modal_search_shop_modal_search_shop_modal_page__WEBPACK_IMPORTED_MODULE_10__["SearchShopModalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getShopdatabyID();
                            localStorage.removeItem("shopID");
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopInformationPage.prototype.goShare = function () {
        this.socialSharing.share("This App is good", "This is title for share", null, "https://okgoods.files.wordpress.com/2010/07/flowers1.jpg").then(function (res) {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
        //this.socialSharing.share("This App is good","This is title for share",null,"https://okgoods.files.wordpress.com/2010/07/flowers1.jpg");
    };
    ShopInformationPage.prototype.ShopSubscription = function (shopID, isActive) {
        isActive = !isActive;
        var shopSubscriptionList = {
            ShopIDList: [{ ShopID: shopID }],
            IsActive: isActive,
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        };
        var options = {};
        var control = this;
        options.title = 'Add User!!!';
        options.apiURL = this.env.shopApi.insertUpdateUserShopSubscriptionURL;
        options.catchErrorText = 'UserController: error => favourite()';
        options.methodType = 'POST';
        options.paramData = shopSubscriptionList;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                var optionMsg = {};
                if (isActive) {
                    control.fcm.subscribeToTopic(control.l_subscribeTopicName);
                    control.gotoSuscribed();
                }
                else {
                    control.fcm.unsubscribeFromTopic(control.l_subscribeTopicName);
                    optionMsg.message = 'This shop has been Unsuscribed.';
                    control.commonService.msgToast(optionMsg);
                }
                control.l_subscription = isActive;
                return;
            }
        };
        this.commonService.httpPost(options);
    };
    ShopInformationPage.prototype.gotoSuscribed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Added to suscribed list",
                            buttons: [{
                                    text: 'View my suscribed list',
                                    handler: function () {
                                        _this.router.navigate(['shop-subscription']);
                                        localStorage.setItem('shopID', _this.l_shopID);
                                        localStorage.setItem('shopSus', "true");
                                    }
                                },
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
    ShopInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-information',
            template: __webpack_require__(/*! ./shop-information.page.html */ "./src/app/pages/shop-information/shop-information.page.html"),
            styles: [__webpack_require__(/*! ./shop-information.page.scss */ "./src/app/pages/shop-information/shop-information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__["LaunchNavigator"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_11__["SQLite"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], ShopInformationPage);
    return ShopInformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=shop-information-shop-information-module.js.map