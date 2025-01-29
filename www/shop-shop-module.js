(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./src/app/pages/shop/shop.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/pages/shop/shop.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
    }
];
var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["AppPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
        })
    ], ShopPageModule);
    return ShopPageModule;
}());



/***/ }),

/***/ "./src/app/pages/shop/shop.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-head\">\n    <div class=\"head-main\">\n        <div class=\"main_menu\" *ngIf=\"l_searchShop != null\">\n            <div class=\"menu\" slot=\"start\">\n                <ion-icon name=\"ios-arrow-back\" (click)=\"openModal()\"></ion-icon>\n            </div>\n            <div class=\"text_logo\">\n                <ion-input class=\"text-input\" type=\"text\" name=\"l_searchShop\" [(ngModel)]=\"l_searchShop\"\n                    (keyup.enter)=\"openModal()\">\n                </ion-input>\n            </div>\n            <div class=\"notify\" (click)=\"openModal()\">\n                <ion-icon class=\"notify-icon\" name=\"search\"></ion-icon>\n            </div>\n        </div>\n    </div>\n    <div class=\"search-bar\" (click)=\"openModal()\" *ngIf=\"l_searchShop === null\">\n        <div class=\"bar\">\n            <ion-icon class=\"searchicon\" name=\"search\"></ion-icon>\n            <div class=\"stext\">\n                Search\n            </div>\n        </div>\n    </div>\n</div>\n<ion-content>\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-card class=\"design\" *ngIf=\"(l_shopList | searchfilter: l_searchShop).length === 0\" [hidden]=\"l_isShopNotFound\"\n        (click)=\"openModal()\">\n        <h6>\n            <ion-icon class=\"icon\" name=\"search\"></ion-icon>No item found\n        </h6>\n        <span>No search result for \"{{l_searchShop}}\"</span>\n    </ion-card>\n    <div class=\"main_shops\" *ngFor=\"let row of l_shopList | searchfilter: l_searchShop\">\n        <div class=\"card_main_pic\">\n            <div class=\"card_main_pics\">\n                <div class=\"card_pics\" (click)=\"gotoInformation(row.ShopID)\">\n                    <img class=\"pic\" *ngIf=\"row.ImageURL === null\" src=\"../../../assets/img/notfound.png\">\n                    <img class=\"pic\" *ngIf=\"row.ImageURL != null\" src=\"{{env.imageURL + row.ImageURL}}\">\n                </div>\n                <div class=\"card_dis\">\n                    <div class=\"card_dis_text\">\n                        {{row.UptoDiscount}}% off\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ion-card class=\"card_main\">\n            <div class=\"card_logo\">\n                <img class=\"img\" *ngIf=\"row.LogoURL === null\" src=\"../../assets/img/logo.png\">\n                <img class=\"img\" *ngIf=\"row.LogoURL != null\" src=\"{{env.imageURL + row.LogoURL}}\">\n            </div>\n            <div class=\"card_text\">\n                <div class=\"card_name_distance\">\n                    <div class=\"card_name\">\n                        {{commonService.getExtraTextHide(row.ShopName,'13')}}\n                    </div>\n                    <div class=\"card_distance\">\n                        <ion-icon class=\"card_distance_icon\" name=\"navigate\"></ion-icon>\n                        <h6>{{row.distance}} Km</h6>\n                    </div>\n                </div>\n                <div class=\"card_adress\">\n                    <ion-icon name=\"pin\" md=\"md-pin\" class=\"card_adress_icon\"></ion-icon>\n                    <h6>{{commonService.getExtraAddressHide(row.Address1, row.City, row.State,'26')}}</h6>\n                    <div [ngClass]=\"row.IsFavourite ? 'card_favrouite': 'card_Unfavrouite'\"\n                        (click)=\"favourite(row.ShopID,row.IsFavourite)\">\n                        <ion-icon name=\"heart\"></ion-icon>\n                        <h5>({{row.FavouriteCount}})</h5>\n                    </div>\n                </div>\n                <div class=\"card_mainRating\">\n                    <div class=\"card_rating\">\n                        <span *ngFor=\"let str of [1,2,3,4,5];\">\n                            <span *ngIf=\"row.Rating >= str\">\n                                <ion-icon name=\"ios-star\" class=\"star_rating_color\"></ion-icon>\n                            </span>\n                            <ion-icon name=\"ios-star\" class=\"star_rating\"></ion-icon>\n                        </span>\n                    </div>\n                    <label>({{row.Rating}})</label>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/shop/shop.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.main-head {\n  width: 100%;\n  float: left;\n  background-color: #f5f5f5; }\n\n.main-head .head-main {\n    width: 100%;\n    float: left;\n    background: #fb630f; }\n\n.main-head .head-main .main_menu {\n      width: 95%;\n      height: 40px;\n      margin: 15px 0px 2px 12px;\n      color: white;\n      float: left; }\n\n.main-head .head-main .main_menu .menu {\n        width: 10%;\n        height: 25px;\n        color: white;\n        padding: 0px 6px 6px 6px;\n        font-size: 22px;\n        float: left; }\n\n.main-head .head-main .main_menu .text_logo {\n        width: auto;\n        height: 29px;\n        margin: 0px 0px 0px 0px;\n        padding: 0px;\n        float: left;\n        font-size: 17px;\n        font-weight: bolder;\n        text-align: center;\n        color: white;\n        font-family: 'Poppins';\n        font-style: normal;\n        font-variant: normal; }\n\n.main-head .head-main .main_menu .text_logo .text-input {\n          height: 30px; }\n\n.main-head .head-main .main_menu .notify {\n        width: 8%;\n        height: 10%;\n        float: right;\n        margin: 4px 9px 0px 0px;\n        color: white; }\n\n.main-head .head-main .main_menu .notify .notify-icon {\n          font-size: 22px;\n          float: right;\n          position: relative; }\n\n.main-head .search-bar {\n    width: 100%;\n    height: 56px;\n    float: left;\n    margin: 10px 0px 0px 0px;\n    padding: 10px 0px 10px 0px;\n    background: #f5f5f5; }\n\n.main-head .search-bar .bar {\n      width: 89%;\n      height: 40px;\n      float: center;\n      margin: 0px auto;\n      padding: 5px 0px 0px 0px;\n      color: #969ba1;\n      border-radius: 50px;\n      background-color: white;\n      box-shadow: 0 0 5px #d8d8d8; }\n\n.main-head .search-bar .bar .stext {\n        float: left;\n        height: 25px;\n        width: 86%;\n        padding: 4px 0px 0px 6px;\n        font-size: 15px;\n        text-align: left;\n        font-family: 'Poppins'; }\n\n.main-head .search-bar .bar .searchicon {\n        width: 12%;\n        height: 22px;\n        margin: 0px 0px 0px 12px;\n        float: left;\n        margin: 5px 0px 0px 5px;\n        font-size: 22px; }\n\n.main_shops {\n  width: 96%;\n  height: 228px;\n  float: left;\n  margin-top: 22px; }\n\n.card_main_pic {\n  height: 152px;\n  width: 100%;\n  margin: -6px 0px 0px 0px;\n  float: left;\n  position: absolute;\n  z-index: 100; }\n\n.card_main_pic .card_main_pics {\n    width: 84%;\n    margin: 0px auto; }\n\n.card_main_pic .card_main_pics .card_pics {\n      width: 84%;\n      float: center;\n      padding: 0px;\n      border-radius: 15px;\n      position: absolute;\n      z-index: 90; }\n\n.card_main_pic .card_main_pics .card_pics .pic {\n        height: 150px;\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        border-radius: 15px;\n        box-shadow: 0 0 5px #d8d8d8; }\n\n.card_main_pic .card_main_pics .card_dis {\n      width: 85%;\n      height: 17px;\n      float: left;\n      box-align: bottom;\n      margin: 8px 0px 0px 0px;\n      position: absolute;\n      z-index: 100;\n      bottom: 0px; }\n\n.card_main_pic .card_main_pics .card_dis .card_dis_text {\n        height: 21px;\n        background-color: #fb630f;\n        float: right;\n        color: #fff;\n        font-size: 10px;\n        font-weight: bold;\n        text-align: center;\n        border-radius: 15px;\n        margin: 7px 12px 0px 0px;\n        padding: 5px 12px 4px 12px;\n        position: -webkit-sticky;\n        position: sticky; }\n\n.card_main {\n  width: 98%;\n  height: 167px;\n  float: left;\n  margin: 55px 0px 0px 11px;\n  box-shadow: 0 0 5px #d8d8d8;\n  background-color: white;\n  border-radius: 10px; }\n\n.card_main .card_logo {\n    width: 16%;\n    height: 39px;\n    margin: 103px 0px 0px 23px;\n    float: left;\n    border-radius: 10px; }\n\n.card_main .card_logo .img {\n      width: 100%;\n      height: 100%; }\n\n.card_main .card_text {\n    width: 69%;\n    height: 65px;\n    margin: 90px 0px 0px 0px;\n    float: left; }\n\n.card_main .card_name_distance {\n    width: 100%;\n    float: left; }\n\n.card_main .card_name_distance .card_name {\n      height: 16px;\n      float: left;\n      margin: 12px 0px 0px 7px;\n      color: #2e3842;\n      font-size: 15px;\n      font-weight: bold;\n      text-align: left;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.card_main .card_name_distance .card_distance {\n      margin: 17px 0px 0px 5px;\n      color: #969ba1;\n      text-align: right;\n      font-weight: bolder;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      font-size: 8px;\n      text-align: center;\n      float: right; }\n\n.card_main .card_name_distance .card_distance .card_distance_icon {\n        float: left;\n        margin: 0px 0px 0px 1px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n\n.card_main .card_name_distance .card_distance h6 {\n        font-size: 9px;\n        font-weight: bolder;\n        margin: 0px 0px 0px 0px;\n        padding: 0px 5px 0px 0px;\n        float: right; }\n\n.card_main .card_adress {\n    width: 97%;\n    float: left;\n    margin: 6px 0px 0px 5px;\n    color: #969ba1;\n    font-size: 9px;\n    text-align: left;\n    font-weight: bold;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.card_main .card_adress .card_adress_icon {\n      float: left;\n      color: #fb630f;\n      margin: 1px 0px 0px 0px; }\n\n.card_main .card_adress h6 {\n      font-size: 10px;\n      margin: 0px 0px 0px 2px;\n      padding: 0px 5px 0px 0px;\n      text-align: right;\n      float: left; }\n\n.card_main .card_mainRating {\n    width: 93%;\n    height: 10px;\n    float: left;\n    margin: 7px 0px 0px 5px; }\n\n.card_main .card_mainRating .card_rating {\n      height: 10px;\n      float: left;\n      font-size: 12px; }\n\n.card_main .card_mainRating label {\n      float: left;\n      font-size: 9px;\n      color: #969ba1;\n      margin: 1px 0px 0px 6px;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      text-align: left; }\n\n.review-rating {\n  width: 40%;\n  height: 30px;\n  margin: 0px 0px 0px 2px;\n  float: right;\n  font-size: small; }\n\n.review-rating .star_rating {\n    color: #969ba1;\n    position: relative;\n    z-index: 0;\n    float: left; }\n\n.star_rating_color {\n  color: #fece3a;\n  position: absolute;\n  float: left;\n  z-index: 100; }\n\n.card_Unfavrouite {\n  height: 17px;\n  width: 15%;\n  margin: -3px 0px 0px 0px;\n  padding-left: 13px;\n  float: right;\n  font-size: 20px;\n  text-align: center; }\n\n.card_favrouite {\n  height: 17px;\n  width: 15%;\n  margin: -3px 0px 0px 0px;\n  float: right;\n  padding-left: 13px;\n  font-size: 20px;\n  text-align: center;\n  color: rgba(167, 19, 19, 0.87); }\n\n.card_Unfavrouite h5 {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal;\n  font-size: 9px;\n  margin: -5px 0px 0px 0px;\n  padding: 0px;\n  text-align: center;\n  color: #969ba1; }\n\n.card_favrouite h5 {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal;\n  font-size: 9px;\n  margin: -5px 0px 0px 0px;\n  padding: 0px;\n  color: #969ba1;\n  text-align: center; }\n\n.design {\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 5px #d8d8d8; }\n\n.design h6 {\n    color: #2e3842;\n    font-size: 20px; }\n\n.design h6 .icon {\n      color: #fb630f;\n      font-size: 17px; }\n\n.design span {\n    color: #969ba1;\n    font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXHNob3BcXHNob3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUg3QjtJQUtRLFdBQVc7SUFDWCxXQUFXO0lBRVgsbUJBQW1CLEVBQUE7O0FBUjNCO01BVVksVUFBVTtNQUNWLFlBQVc7TUFDWCx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLFdBQVcsRUFBQTs7QUFkdkI7UUFnQmdCLFVBQVU7UUFDVixZQUFZO1FBQ1osWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixlQUFlO1FBQ2YsV0FBVyxFQUFBOztBQXJCM0I7UUF3QmEsV0FBVztRQUNYLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osc0JBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixvQkFBb0IsRUFBQTs7QUFuQ2pDO1VBcUNnQixZQUFZLEVBQUE7O0FBckM1QjtRQXlDZ0IsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLFlBQVksRUFBQTs7QUE3QzVCO1VBK0NvQixlQUFlO1VBQ2YsWUFBWTtVQUNaLGtCQUFrQixFQUFBOztBQWpEdEM7SUF1RFEsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixtQkFBbUIsRUFBQTs7QUE1RDNCO01BOERZLFVBQVU7TUFDVixZQUFZO01BQ1osYUFBWTtNQUNaLGdCQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLDJCQUE0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c0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7ICBcclxufVxyXG4ubWFpbi1oZWFke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIC5oZWFkLW1haW57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYjYzMGY7XHJcbiAgICAgICAgLm1haW5fbWVudXtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHggMnB4IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHggNnB4IDZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0X2xvZ297XHJcbiAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgIGhlaWdodDogMjlweDtcclxuICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICAgICAgIC50ZXh0LWlucHV0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ub3RpZnl7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCA5cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC5ub3RpZnktaWNvbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2gtYmFye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46MTBweCAwcHggMHB4IDBweDs7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICAuYmFye1xyXG4gICAgICAgICAgICB3aWR0aDogODklO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OmNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4OyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICAgICAgICAgIC5zdGV4dHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg2JTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwcHggMHB4IDZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlYXJjaGljb257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHggMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWFpbl9zaG9wc3tcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBoZWlnaHQ6IDIyOHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG59XHJcbi8vIFNob3BzXHJcbi5jYXJkX21haW5fcGlje1xyXG4gICAgaGVpZ2h0OiAxNTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAtNnB4IDBweCAwcHggMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAuY2FyZF9tYWluX3BpY3N7XHJcbiAgICAgICAgd2lkdGg6IDg0JTsgICAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICAuY2FyZF9waWNze1xyXG4gICAgICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgICAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDkwO1xyXG4gICAgICAgICAgICAucGlje1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4O1xyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIC5jYXJkX2Rpc3tcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBib3gtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTAwOyBcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAuY2FyZF9kaXNfdGV4dHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogN3B4IDEycHggMHB4IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHggNHB4IDEycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIH1cclxufVxyXG4gLmNhcmRfbWFpbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDE2N3B4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDU1cHggMHB4IDBweCAxMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmNhcmRfbG9nb3tcclxuICAgICAgICB3aWR0aDogMTYlO1xyXG4gICAgICAgIGhlaWdodDogMzlweDtcclxuICAgICAgICBtYXJnaW46IDEwM3B4IDBweCAwcHggMjNweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nby5wbmcnKTsgXHJcbiAgICAuaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX3RleHR7XHJcbiAgICAgICAgd2lkdGg6IDY5JTtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgbWFyZ2luOiA5MHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNhcmRfbmFtZV9kaXN0YW5jZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAuY2FyZF9uYW1le1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMHB4IDBweCA3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkX2Rpc3RhbmNle1xyXG4gICAgICAgICAgICBtYXJnaW46MTdweCAwcHggMHB4IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICM5NjliYTE7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAuY2FyZF9kaXN0YW5jZV9pY29ue1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDFweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogIDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX2FkcmVzc3tcclxuICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDBweCAwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgLmNhcmRfYWRyZXNzX2ljb257XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjojZmI2MzBmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFweCAwcHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAgMHB4IDBweCAwcHggMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIC5jYXJkX21haW5SYXRpbmd7XHJcbiAgICAgICAgd2lkdGg6IDkzJTtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiA3cHggMHB4IDBweCA1cHg7XHJcbiAgICAgICAgLmNhcmRfcmF0aW5ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4OyBcclxuICAgICAgICAgICAgY29sb3I6Izk2OWJhMTsgXHJcbiAgICAgICAgICAgIG1hcmdpbjoxcHggMHB4IDBweCA2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgfSAgICBcclxuICAgIH1cclxufVxyXG4ucmV2aWV3LXJhdGluZ3tcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDJweDsgXHJcbiAgICBmbG9hdDogcmlnaHQ7IFxyXG4gICAgZm9udC1zaXplOnNtYWxsOyBcclxuICAgIC5zdGFyX3JhdGluZ3tcclxuICAgICAgICBjb2xvcjojOTY5YmExOyBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH0gICAgXHJcbiAgfVxyXG4gIC5zdGFyX3JhdGluZ19jb2xvcntcclxuICAgIGNvbG9yOiNmZWNlM2E7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4uY2FyZF9VbmZhdnJvdWl0ZXtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIHdpZHRoOjE1JTtcclxuICAgIG1hcmdpbjogLTNweCAwcHggMHB4IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfZmF2cm91aXRle1xyXG4gICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE2NywgMTksIDE5LCAwLjg3KTtcclxuICAgICAgICB9XHJcbiAgICAuY2FyZF9VbmZhdnJvdWl0ZSBoNXtcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBtYXJnaW46IC01cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgIH1cclxuICAgIC5jYXJkX2ZhdnJvdWl0ZSBoNXtcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBtYXJnaW46IC01cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuIC5kZXNpZ257XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4O1xyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5NjliYTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/shop/shop.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_search_shop_modal_search_shop_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/search-shop-modal/search-shop-modal.page */ "./src/app/pages/modal/search-shop-modal/search-shop-modal.page.ts");








var ShopPage = /** @class */ (function () {
    function ShopPage(http, toastCtrl, ToastCtrl, router, actionSheetController, ref, events, modal, platform, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.ref = ref;
        this.events = events;
        this.modal = modal;
        this.platform = platform;
        this.commonService = commonService;
        this.l_shopList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
    }
    ShopPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getShop();
        //Set updateFav
        this.events.unsubscribe('updateFav');
        this.events.subscribe('updateFav', function () {
            for (var i = 0; i < _this.l_shopList.length; i++) {
                if (_this.l_shopList[i].ShopID == localStorage.getItem('EventShopID')) {
                    _this.l_shopList[i].IsFavourite = localStorage.getItem('FavHeart');
                    _this.ref.detectChanges();
                    _this.l_shopList[i].FavouriteCount = localStorage.getItem('favCounts');
                    localStorage.removeItem('FavHeart');
                    localStorage.removeItem('EventShopID');
                    localStorage.removeItem('favCounts');
                    return;
                }
            }
        });
        this.platform.backButton.subscribe(function () {
            localStorage.setItem('othertabs', 'true');
            localStorage.removeItem('hometab');
        });
    };
    ShopPage.prototype.ionViewWillEnter = function () {
        localStorage.setItem('othertabs', 'true');
        localStorage.removeItem('hometab');
        if (localStorage.getItem('IsNotification') == 'true') {
            this.l_searchShop = localStorage.getItem('shopNameForNotification');
        }
        else {
            this.l_searchShop = localStorage.getItem('searchShopName');
        }
        this.l_isShopNotFound = true;
        this.ref.detectChanges();
        // this.getShop();
    };
    //Get Shop
    ShopPage.prototype.getShop = function (infiniteScroll, refresher) {
        var options = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getShopURL + localStorage.getItem('userID'); //UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_shopList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_shopList);
                control.l_isShopNotFound = false;
                control.data = control.commonService.applyHaversine(control.l_shopList);
                control.data.sort(function (locationA, locationB) {
                    return locationA.distance - locationB.distance;
                });
            }
        };
        this.commonService.httpPost(options);
    };
    ShopPage.prototype.doRefresh = function (refresher) {
        this.getShop("", refresher);
    };
    ShopPage.prototype.doInfinite = function (infiniteScroll) {
        this.getShop(infiniteScroll);
    };
    ShopPage.prototype.gotoInformation = function (l_shopID) {
        localStorage.setItem("shopID", l_shopID);
        this.router.navigate(['shop_information']);
    };
    ShopPage.prototype.gotofavourite = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Added to favourite list",
                            buttons: [{
                                    text: 'View my favourite list',
                                    // icon: 'trash',
                                    handler: function () {
                                        localStorage.setItem("isFav", "true");
                                        _this.router.navigate(['favorites']);
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
    ShopPage.prototype.favourite = function (shopID, isFavourite) {
        isFavourite = !isFavourite;
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
                for (var i = 0; i < control.l_shopList.length; i++) {
                    if (control.l_shopList[i].ShopID == shopID) {
                        var optionMsg = {};
                        if (isFavourite) {
                            //  optionMsg.message = 'Added to wishList View my wishList';
                            control.gotofavourite();
                        }
                        else {
                            optionMsg.message = 'Removed from favourite List';
                            control.commonService.msgToast(optionMsg);
                        }
                        control.l_shopList[i].FavouriteCount = data.Result[0].FavCount;
                        control.l_shopList[i].IsFavourite = data.Result[0].IsFavourite;
                        return;
                    }
                }
            }
        };
        this.commonService.httpPost(options);
    };
    ShopPage.prototype.openModal = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (localStorage.getItem('IsNotification') == 'true') {
                            localStorage.removeItem('IsNotification');
                            this.router.navigate(['notifications']);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modal.create({
                                component: _modal_search_shop_modal_search_shop_modal_page__WEBPACK_IMPORTED_MODULE_7__["SearchShopModalPage"],
                                componentProps: {
                                    searchShopName: this.l_searchShop
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.l_searchShop = localStorage.getItem('searchShopName');
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShopPage.prototype.srchTextboxChange = function () {
        if (this.l_shopList.length > 0) {
            this.l_isShopNotFound = false;
        }
        else {
            this.l_isShopNotFound = true;
        }
    };
    ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.page.html */ "./src/app/pages/shop/shop.page.html"),
            styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/pages/shop/shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], ShopPage);
    return ShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=shop-shop-module.js.map