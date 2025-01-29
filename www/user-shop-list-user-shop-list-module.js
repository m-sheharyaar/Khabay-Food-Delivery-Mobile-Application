(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-shop-list-user-shop-list-module"],{

/***/ "./src/app/pages/user-shop-list/user-shop-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-shop-list/user-shop-list.module.ts ***!
  \***************************************************************/
/*! exports provided: UserShopListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShopListPageModule", function() { return UserShopListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_shop_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-shop-list.page */ "./src/app/pages/user-shop-list/user-shop-list.page.ts");







var routes = [
    {
        path: '',
        component: _user_shop_list_page__WEBPACK_IMPORTED_MODULE_6__["UserShopListPage"]
    }
];
var UserShopListPageModule = /** @class */ (function () {
    function UserShopListPageModule() {
    }
    UserShopListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_shop_list_page__WEBPACK_IMPORTED_MODULE_6__["UserShopListPage"]]
        })
    ], UserShopListPageModule);
    return UserShopListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-shop-list/user-shop-list.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-shop-list/user-shop-list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\">\n            <ion-icon name=\"ios-arrow-back\" (click)=\"back()\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            My Shops\n        </div>\n    </div>\n    <div class=\"notify\" (click)=\"openPopoverdeleteAll($event)\">\n        <ion-icon class=\"notify-icon\" name=\"ios-more\" md=\"md-more\"></ion-icon>\n    </div>\n</div>\n<ion-content class=\"cards-bg social-cards\">\n\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"main_shops\" *ngFor=\"let row of l_shopList\">\n        <div class=\"card_main_pic\">\n            <div class=\"card_main_pics\">\n                <div class=\"card_pics\" (click)=\"updateShop(row.ShopID)\">\n                    <img class=\"pic\" *ngIf=\"row.ImageURL === null\" src=\"../../../assets/img/notfound.png\">\n                    <img class=\"pic\" *ngIf=\"row.ImageURL != null\" src=\"{{env.imageURL + row.ImageURL}}\">\n                </div>\n\n                <div class=\"card_dis\">\n                    <div class=\"card_dis_text\">\n                        {{row.Discount}}% off\n                    </div>\n                </div>\n                <div *ngIf=\"row.OfferStatus != null\" class=\"card_exp\">\n                    <div class=\"card_exp_text\">\n                        {{row.OfferStatus}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ion-card class=\"card_main\">\n            <div class=\"card_logo\">\n                <img class=\"img\" *ngIf=\"row.LogoURL === null\" src=\"../../assets/img/logo.png\">\n                <img class=\"img\" *ngIf=\"row.LogoURL != null\" src=\"{{env.imageURL + row.LogoURL}}\">\n            </div>\n            <div class=\"card_text\">\n                <div class=\"card_name_distance\">\n                    <div class=\"card_name\">\n                        {{commonService.getExtraTextHide(row.ShopName,'13')}}\n                    </div>\n                    <div class=\"card_distance\" [hidden]=\"row.Status == 'Hide' ? 'true' : ''\"\n                        (click)=\"gotoInformation(row.ShopID,row.Status)\">\n                        <ion-icon class=\"card_distance_icon\" name=\"ios-information-circle-outline\"></ion-icon>\n                    </div>\n                </div>\n                <div class=\"card_adress\">\n                    <ion-icon name=\"pin\" md=\"md-pin\" class=\"card_adress_icon\"></ion-icon>\n                    <h6>{{commonService.getExtraAddressHide(row.Address1, row.City, row.State,'26')}}</h6>\n                </div>\n                <div class=\"card_mainRating\">\n                    <div [ngClass]=\"row.Status == 'Visible' ? 'textVisible' : 'textHide'\"><b>Status: </b> {{row.Status}}\n                    </div>\n                    <ion-buttons class=\"card_more\" (click)=\"openPopoverdelete($event,row.ShopID,row.Status)\">\n                        <ion-icon name=\"ios-more\"></ion-icon>\n                    </ion-buttons>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user-shop-list/user-shop-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-shop-list/user-shop-list.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 84%;\n    height: 40px;\n    margin: 15px 0px 2px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 51%;\n      height: 25px;\n      margin: 0px 0px 0px 70px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.head-main .notify {\n    width: 8%;\n    height: 10%;\n    float: right;\n    margin: 15px 9px 0px 0px;\n    color: white; }\n\n.head-main .notify .notify-icon {\n      font-size: 22px;\n      float: right;\n      position: relative; }\n\n.main_shops {\n  width: 96%;\n  height: 228px;\n  float: left;\n  margin-top: 22px; }\n\n.card_main_pic {\n  height: 152px;\n  width: 100%;\n  margin: -6px 0px 0px 0px;\n  float: left;\n  position: absolute;\n  z-index: 100; }\n\n.card_main_pic .card_main_pics {\n    width: 84%;\n    margin: 0px auto; }\n\n.card_main_pic .card_main_pics .card_pics {\n      width: 84%;\n      float: center;\n      padding: 0px;\n      border-radius: 15px;\n      position: absolute;\n      z-index: 90; }\n\n.card_main_pic .card_main_pics .card_pics .pic {\n        height: 150px;\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        border-radius: 15px;\n        box-shadow: 0 0 5px #d8d8d8; }\n\n.card_main_pic .card_main_pics .card_dis {\n      width: 85%;\n      height: 17px;\n      float: left;\n      box-align: bottom;\n      margin: 8px 0px 0px 0px;\n      position: absolute;\n      z-index: 100;\n      bottom: 0px; }\n\n.card_main_pic .card_main_pics .card_dis .card_dis_text {\n        height: 21px;\n        background-color: #fb630f;\n        float: right;\n        color: #fff;\n        font-size: 10px;\n        font-weight: bold;\n        text-align: center;\n        border-radius: 15px;\n        margin: 7px 12px 0px 0px;\n        padding: 5px 12px 4px 12px;\n        position: -webkit-sticky;\n        position: sticky; }\n\n.card_main_pic .card_main_pics .card_exp {\n      width: 85%;\n      height: 17px;\n      float: left;\n      box-align: bottom;\n      margin: 0px 0px 0px 0px;\n      position: absolute;\n      z-index: 100; }\n\n.card_main_pic .card_main_pics .card_exp .card_exp_text {\n        height: 21px;\n        background-color: #fb630f;\n        float: left;\n        color: #fff;\n        font-size: 10px;\n        font-weight: bold;\n        text-align: center;\n        border-radius: 15px;\n        margin: 0px 12px 0px 0px;\n        padding: 5px 12px 4px 12px;\n        position: -webkit-sticky;\n        position: sticky; }\n\n.card_main {\n  width: 98%;\n  height: 167px;\n  float: left;\n  margin: 55px 0px 0px 11px;\n  box-shadow: 0 0 5px #d8d8d8;\n  background-color: white;\n  border-radius: 10px; }\n\n.card_main .card_logo {\n    width: 16%;\n    height: 39px;\n    margin: 104px 0px 0px 23px;\n    float: left;\n    border-radius: 10px; }\n\n.card_main .card_logo .img {\n      width: 100%;\n      height: 100%; }\n\n.card_main .card_text {\n    width: 69%;\n    height: 65px;\n    margin: 90px 0px 0px 0px;\n    float: left; }\n\n.card_main .card_name_distance {\n    width: 100%;\n    float: left; }\n\n.card_main .card_name_distance .card_name {\n      height: auto;\n      float: left;\n      margin: 12px 0px 0px 6px;\n      color: #2e3842;\n      font-size: 15px;\n      font-weight: bold;\n      text-align: left;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.card_main .card_name_distance .card_distance {\n      margin: 17px 0px 0px 5px;\n      color: #fb630f;\n      font-size: 16px;\n      float: right; }\n\n.card_main .card_name_distance .card_distance .card_distance_icon {\n        float: left;\n        margin: 0px 0px 0px 0px; }\n\n.card_main .card_adress {\n    width: 97%;\n    float: left;\n    margin: 0px 0px 0px 5px;\n    color: #969ba1;\n    font-size: 9px;\n    text-align: left;\n    font-weight: bold;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.card_main .card_adress .card_adress_icon {\n      float: left;\n      color: #fb630f;\n      margin: 1px 0px 0px 0px; }\n\n.card_main .card_adress h6 {\n      font-size: 10px;\n      margin: 0px 0px 0px 2px;\n      padding: 0px 5px 0px 0px;\n      text-align: right;\n      float: left; }\n\n.card_main .card_mainRating {\n    width: 100%;\n    height: 10px;\n    float: left;\n    margin: 7px 0px 0px 7px; }\n\n.card_main .card_mainRating .textVisible {\n      width: 85%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      float: left;\n      color: green;\n      padding: 0px;\n      font-weight: bold;\n      font-size: 10px; }\n\n.card_main .card_mainRating .textHide {\n      width: 85%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      float: left;\n      padding: 0px;\n      color: rgba(167, 19, 19, 0.87);\n      font-weight: bold;\n      font-size: 10px; }\n\n.card_main .card_mainRating b {\n      font-size: 10px;\n      color: #969ba1;\n      font-weight: 500;\n      margin: 0px;\n      padding: 0px; }\n\n.card_main .card_mainRating .card_more {\n      color: #969ba1;\n      height: 10px;\n      width: 8%;\n      margin: 0px 5px 0px 0px;\n      float: right;\n      font-size: 18px;\n      font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1zaG9wLWxpc3QvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLXNob3AtbGlzdFxcdXNlci1zaG9wLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CWSxVQUFVO01BQ1YsWUFBWTtNQUNaLHdCQUF3QjtNQUMzQixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQTlCN0I7SUFrQ1EsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVcsRUFBQTs7QUF0Q25CO01Bd0NZLGVBQWU7TUFDZixZQUFZO01BQ1osa0JBQWtCLEVBQUE7O0FBSTlCO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBTmhCO0lBUVEsVUFBVTtJQUNWLGdCQUFnQixFQUFBOztBQVR4QjtNQVdZLFVBQVU7TUFDVixhQUFhO01BQ2IsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsV0FBVyxFQUFBOztBQWhCdkI7UUFrQmdCLGFBQWE7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsMkJBQTJCLEVBQUE7O0FBdkIzQztNQTJCUSxVQUFVO01BQ1YsWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVyxFQUFBOztBQWxDbkI7UUFvQ1ksWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLHdCQUFnQjtRQUFoQixnQkFBZ0IsRUFBQTs7QUE5QzVCO01Ba0RRLFVBQVU7TUFDVixZQUFZO01BQ1osV0FBVztNQUNYLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLFlBQVksRUFBQTs7QUF4RHBCO1FBMERZLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsV0FBVztRQUNYLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQix3QkFBZ0I7UUFBaEIsZ0JBQWdCLEVBQUE7O0FBSzNCO0VBQ0csVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBUHRCO0lBU08sVUFBVTtJQUNWLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLG1CQUFtQixFQUFBOztBQWIxQjtNQWlCTyxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQWxCbkI7SUFzQk8sVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsV0FBVyxFQUFBOztBQXpCbEI7SUE0Qk8sV0FBVztJQUNYLFdBQVcsRUFBQTs7QUE3QmxCO01BK0JXLFlBQVk7TUFDWixXQUFXO01BQ1gsd0JBQXdCO01BQ3hCLGNBQWM7TUFDZCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQXhDL0I7TUEyQ1csd0JBQXVCO01BQ3ZCLGNBQWM7TUFDZCxlQUFlO01BQ2YsWUFBVyxFQUFBOztBQTlDdEI7UUFnRGUsV0FBVztRQUNYLHVCQUF1QixFQUFBOztBQWpEdEM7SUFzRE8sVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CLEVBQUE7O0FBL0QzQjtNQWlFVyxXQUFXO01BQ1gsY0FBYTtNQUNiLHVCQUF1QixFQUFBOztBQW5FbEM7TUFzRVcsZUFBZTtNQUNmLHVCQUF3QjtNQUN4Qix3QkFBd0I7TUFDeEIsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTs7QUExRXRCO0lBOEVPLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QixFQUFBOztBQWpGOUI7TUFtRlcsVUFBUztNQUNULFlBQVk7TUFDWix1QkFBdUI7TUFDdkIsV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTs7QUExRjFCO01BNkZXLFVBQVM7TUFDVCxZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxZQUFZO01BQ1osOEJBQThCO01BQzlCLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7O0FBcEcxQjtNQXVHVyxlQUFlO01BQ2YsY0FBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQTNHdkI7TUE4R1csY0FBYTtNQUNiLFlBQVk7TUFDWixTQUFTO01BQ1QsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLXNob3AtbGlzdC91c2VyLXNob3AtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTsgIFxyXG59XHJcbi5oZWFkLW1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiNjMwZjtcclxuICAgIC5tYWluX21lbnV7XHJcbiAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHggMHB4IDJweCAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHggNnB4IDZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRfbG9nb3tcclxuICAgICAgICAgICAgd2lkdGg6IDUxJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDcwcHg7XHJcbiAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ub3RpZnl7IFxyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDlweCAwcHggMHB4O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIC5ub3RpZnktaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1haW5fc2hvcHN7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgaGVpZ2h0OiAyMjhweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxufVxyXG4vLyBTaG9wc1xyXG4uY2FyZF9tYWluX3BpY3tcclxuICAgIGhlaWdodDogMTUycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogLTZweCAwcHggMHB4IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLmNhcmRfbWFpbl9waWNze1xyXG4gICAgICAgIHdpZHRoOiA4NCU7ICAgICAgICAgIFxyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgLmNhcmRfcGljc3tcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgICB6LWluZGV4OiA5MDtcclxuICAgICAgICAgICAgLnBpY3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkODtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAuY2FyZF9kaXN7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYm94LWFsaWduOiBib3R0b207XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDsgXHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgLmNhcmRfZGlzX3RleHR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDdweCAxMnB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4IDRweCAxMnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICAuY2FyZF9leHB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYm94LWFsaWduOiBib3R0b207XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAuY2FyZF9leHBfdGV4dHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTJweCAwcHggMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweCA0cHggMTJweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgfVxyXG59XHJcbiAuY2FyZF9tYWlue1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGhlaWdodDogMTY3cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogNTVweCAwcHggMHB4IDExcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNkOGQ4ZDg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuY2FyZF9sb2dve1xyXG4gICAgICAgIHdpZHRoOiAxNiU7XHJcbiAgICAgICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTA0cHggMHB4IDBweCAyM3B4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dvLnBuZycpOyBcclxuICAgIC5pbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmRfdGV4dHtcclxuICAgICAgICB3aWR0aDogNjklO1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICBtYXJnaW46IDkwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZF9uYW1lX2Rpc3RhbmNle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5jYXJkX25hbWV7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwcHggMHB4IDZweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyZTM4NDI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfZGlzdGFuY2V7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxN3B4IDBweCAwcHggNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgLmNhcmRfZGlzdGFuY2VfaWNvbntcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZF9hZHJlc3N7XHJcbiAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxuICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgIC5jYXJkX2FkcmVzc19pY29ue1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6I2ZiNjMwZjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogIDBweCAwcHggMHB4IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICAuY2FyZF9tYWluUmF0aW5ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDdweCAwcHggMHB4IDdweDsgXHJcbiAgICAgICAgLnRleHRWaXNpYmxle1xyXG4gICAgICAgICAgICB3aWR0aDo4NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRIaWRle1xyXG4gICAgICAgICAgICB3aWR0aDo4NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE2NywgMTksIDE5LCAwLjg3KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojOTY5YmExO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAuY2FyZF9tb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjojOTY5YmExO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/user-shop-list/user-shop-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-shop-list/user-shop-list.page.ts ***!
  \*************************************************************/
/*! exports provided: UserShopListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShopListPage", function() { return UserShopListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _popover_delete_single_shop_popover_delete_single_shop_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/delete-single-shop-popover/delete-single-shop-popover.page */ "./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.ts");
/* harmony import */ var _popover_delete_all_shops_popover_delete_all_shops_popover_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/delete-all-shops-popover/delete-all-shops-popover.page */ "./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.ts");









var UserShopListPage = /** @class */ (function () {
    function UserShopListPage(http, toastCtrl, ToastCtrl, navCtrl, popoverController, router, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.router = router;
        this.commonService = commonService;
        this.l_shopList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
    }
    UserShopListPage.prototype.ngOnInit = function () { };
    UserShopListPage.prototype.ionViewWillEnter = function () {
        this.getShop();
    };
    // Get Shop
    UserShopListPage.prototype.getShop = function (infiniteScroll, refresher) {
        var options = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getUserShopList + localStorage.getItem('userID'); // UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                control.l_shopList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_shopList);
                control.l_count = control.l_shopList.length;
            }
        };
        this.commonService.httpPost(options);
    };
    UserShopListPage.prototype.doRefresh = function (refresher) {
        this.getShop('', refresher);
    };
    UserShopListPage.prototype.doInfinite = function (infiniteScroll) {
        this.getShop(infiniteScroll);
    };
    UserShopListPage.prototype.gotoInformation = function (shopID, status) {
        if (status == 'Visible' && status != undefined) {
            localStorage.setItem('shopID', shopID);
            localStorage.setItem('userShopList', 'true');
            this.router.navigate(['shop_information']);
        }
    };
    UserShopListPage.prototype.updateShop = function (ShopID) {
        var control = this;
        for (var i = 0; i < control.l_shopList.length; i++) {
            if (control.l_shopList[i].ShopID === ShopID) {
                var json = JSON.stringify(control.l_shopList[i]);
                localStorage.setItem('shopData', json);
                control.router.navigate(['shop-update']);
                return;
            }
        }
    };
    UserShopListPage.prototype.openPopoverdelete = function (ev, shopID, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var control, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        control = this;
                        return [4 /*yield*/, this.popoverController.create({
                                component: _popover_delete_single_shop_popover_delete_single_shop_popover_page__WEBPACK_IMPORTED_MODULE_7__["DeleteSingleShopPopoverPage"],
                                event: ev,
                                translucent: true,
                                componentProps: {
                                    Shop_ID: shopID,
                                    Status: status,
                                    ShopList: control.l_shopList
                                }
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (data) {
                            for (var i = 0; i < control.l_shopList.length; i++) {
                                if (control.l_shopList[i].ShopID === shopID) {
                                    if (localStorage.getItem('isShopDelete') != null) {
                                        localStorage.removeItem('isShopDelete');
                                        control.l_shopList.splice(i, 1);
                                        i--;
                                        return;
                                    }
                                    if (localStorage.getItem('IsVisible') != null) {
                                        var status = localStorage.getItem('IsVisible') == '1' ? 'Hide' : 'Visible';
                                        control.l_shopList[i].Status = status;
                                        localStorage.removeItem('IsVisible');
                                    }
                                }
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserShopListPage.prototype.openPopoverdeleteAll = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var control, optionMsg, popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        control = this;
                        optionMsg = {};
                        if (!(control.l_count > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.popoverController.create({
                                component: _popover_delete_all_shops_popover_delete_all_shops_popover_page__WEBPACK_IMPORTED_MODULE_8__["DeleteAllShopsPopoverPage"],
                                event: ev,
                                translucent: true,
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (data) {
                            _this.getShop();
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        optionMsg.message = 'Choose at least one';
                        _a.label = 4;
                    case 4:
                        control.commonService.msgToast(optionMsg);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserShopListPage.prototype.back = function () {
        this.router.navigate(['tabs/settings']);
    };
    UserShopListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-shop-list',
            template: __webpack_require__(/*! ./user-shop-list.page.html */ "./src/app/pages/user-shop-list/user-shop-list.page.html"),
            styles: [__webpack_require__(/*! ./user-shop-list.page.scss */ "./src/app/pages/user-shop-list/user-shop-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], UserShopListPage);
    return UserShopListPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-shop-list-user-shop-list-module.js.map