(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./src/app/pages/favorites/favorites.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/app/pages/favorites/favorites.page.ts");







var routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]
    }
];
var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\">\n            <ion-icon name=\"ios-arrow-back\" (click)=\"back()\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            My Favourites\n        </div>\n    </div>\n    <div class=\"notify\" [hidden]=\"l_hdnOptions\" (click)=\"openPopoverdelete($event)\">\n        <ion-icon *ngIf=\"l_ShopList != 0 \" class=\"notify-icon\" name=\"ios-more\" md=\"md-more\"></ion-icon>\n    </div>\n</div>\n<ion-content *ngIf=\"l_ShopList == 0\">\n    <div class=\"noFoundText\">No Record Found!</div>\n</ion-content>\n<ion-content [ngClass]=\"l_ShopList != 0 ? 'cards-bg social-cards': 'main'\">\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"main_shops\" *ngFor=\"let row of l_ShopList; let i=index\">\n        <div class=\"main_card_shops\" tappable text-wrap\n            (click)=!selection?hndClick($event,row.ShopID,0):selectItem(i,row) (press)=selectItem(i,row)\n            [ngStyle]=\"{'background-color': row.isSelected ? '#f5f5f5' : 'white'}\">\n            <div class=\"main_card_pics_shops\">\n                <div class=\"card_pics_shops\">\n                    <img class=\"pic_shops\" *ngIf=\"row.ImageURL === null\" src=\"../../../assets/img/notfound.png\">\n                    <img class=\"pic_shops\" *ngIf=\"row.ImageURL != null\" src=\"{{env.imageURL + row.ImageURL}}\">\n                </div>\n            </div>\n            <ion-card class=\"card_main_shops\">\n                <div class=\"card_text_shops\">\n                    <div class=\"card_name_distance_Shop\">\n                        <div class=\"card_name_Shop\">\n                            {{commonService.getExtraTextHide(row.ShopName,'11')}}\n                        </div>\n                    </div>\n                    <div class=\"card_adress_shops\">\n                        <ion-icon class=\"card_adress_shops_icon\" name=\"pin\" md=\"md-pin\"></ion-icon>\n                        <h6>{{commonService.getExtraAddressHide(row.Address1, row.City, row.State,'36')}}</h6>\n                    </div>\n                    <div class=\"card_offer_shops\">\n                        <div class=\"card_discount_shops\">\n                            {{row.UptoDiscount}}% Off\n                        </div>\n                        <div class=\"card_distance_Shop\" [hidden]=\"l_hdnCheckbox\">\n                            <ion-checkbox class=\"card_distance_icon_Shop\" [checked]=\"row.isSelected\"></ion-checkbox>\n                        </div>\n                        <div class=\"card_distance_Shop\" [hidden]=\"l_hdnOptions\">\n                            <ion-buttons (click)=\"hndClick($event,row.ShopID,1)\">\n                                <ion-icon name=\"ios-more\"></ion-icon>\n                            </ion-buttons>\n                        </div>\n                    </div>\n                    <div class=\"card_logo_newShop\">\n                        <div class=\"card_logo_Shop\">\n                            <img class=\"img\" src=\"../../assets/img/logo.png\">\n                        </div>\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n<ion-footer class=\"footertext\" [hidden]=\"l_hdnCheckbox\">\n    <div (click)=\"removeFavourite()\" class=\"delete-text\">\n        <ion-button fill=\"clear\" color=\"light\" class=\"btn\">\n            Remove ({{l_deleteCount}})\n        </ion-button>\n    </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 84%;\n    height: 40px;\n    margin: 15px 0px 2px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 51%;\n      height: 25px;\n      margin: 0px 0px 0px 70px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.head-main .notify {\n    width: 8%;\n    height: 10%;\n    float: right;\n    margin: 15px 9px 0px 0px;\n    color: white; }\n\n.head-main .notify .notify-icon {\n      font-size: 22px;\n      float: right;\n      position: relative; }\n\n.noFoundText {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  font-size: 105%;\n  margin: 68% 0px 0px 0px;\n  color: #fb630f; }\n\n.main_card_shops {\n  width: 94%;\n  margin: 0px auto; }\n\n.main_shops {\n  width: 100%;\n  height: 122px;\n  float: left;\n  margin-top: 15px;\n  background-color: #f5f5f5; }\n\n.main_card_pics_shops {\n  height: 121px;\n  width: 32%;\n  margin: 0px 0px 0px 0px;\n  float: left;\n  position: absolute;\n  z-index: 100; }\n\n.main_card_pics_shops .card_pics_shops {\n    height: 95px;\n    width: 100%;\n    margin: 18px 0px 0px 5px;\n    float: left;\n    padding: 0px; }\n\n.main_card_pics_shops .card_pics_shops .pic_shops {\n      height: 95px;\n      width: 100%;\n      margin: 0px;\n      padding: 0px;\n      border-radius: 10px;\n      position: absolute;\n      z-index: 90;\n      box-shadow: 0 0 5px #d8d8d8; }\n\n.card_main_shops {\n  height: 121px;\n  width: 82%;\n  float: left;\n  margin: 5px 5px 7px 60px;\n  border-radius: 10px;\n  box-shadow: 0 0 5px #d8d8d8;\n  background-color: white; }\n\n.card_main_shops .card_text_shops {\n    width: 72%;\n    height: 110px;\n    float: left;\n    margin: 0px 0px 0px 70px; }\n\n.card_main_shops .card_name_distance_Shop {\n    width: 100%;\n    float: left; }\n\n.card_main_shops .card_name_distance_Shop .card_name_Shop {\n      height: auto;\n      float: left;\n      margin: 15px 0px 0px 5px;\n      color: #2e3842;\n      font-size: 15px;\n      font-weight: bold;\n      text-align: left;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.card_main_shops .card_adress_shops {\n    width: 100%;\n    height: 19px;\n    float: left;\n    margin: 0px 0px 0px 3px;\n    text-align: left;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.card_main_shops .card_adress_shops .card_adress_shops_icon {\n      color: #fb630f;\n      width: 10px;\n      float: left;\n      font-size: 7px;\n      margin: 2px 0px 0px 0px; }\n\n.card_main_shops .card_adress_shops h6 {\n      font-size: 9px;\n      color: #969ba1;\n      margin: 0px 0px 0px 0px;\n      padding: 0px 7px 0px 0px; }\n\n.card_main_shops .card_logo_newShop {\n    width: 94%;\n    height: 10px;\n    float: left;\n    margin: 4px 0px 0px 5px; }\n\n.card_main_shops .card_logo_newShop .card_logo_Shop {\n      width: 25%;\n      margin: 8px 0px 0px 0px;\n      height: 26px;\n      float: left; }\n\n.card_main_shops .card_logo_newShop .card_logo_Shop .img {\n        width: 100%;\n        height: 100%; }\n\n.card_main_shops .card_offer_shops {\n    width: 100%;\n    height: 16px;\n    float: left;\n    margin: 0px 0px 0px 5px; }\n\n.card_main_shops .card_offer_shops .card_discount_shops {\n      height: 21px;\n      background-color: #fb630f;\n      float: left;\n      color: #fff;\n      font-size: 9px;\n      font-weight: bold;\n      text-align: center;\n      border-radius: 15px;\n      margin: 0px 10px 0px 0px;\n      padding: 6px 12px 6px 12px;\n      position: -webkit-sticky;\n      position: sticky; }\n\n.card_main_shops .card_offer_shops .card_distance_Shop {\n      margin: 28px 16px 0px 0px;\n      color: #969ba1;\n      text-align: right;\n      font-weight: bolder;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal;\n      font-size: 20px;\n      text-align: center;\n      float: right; }\n\n.card_main_shops .card_offer_shops .card_distance_Shop .card_distance_icon_Shop {\n        color: #fb630f; }\n\n.footertext {\n  height: 50px;\n  text-align: center;\n  float: center;\n  font-weight: bold;\n  padding: 8px;\n  background-color: #f5f5f5; }\n\n.delete-text {\n  width: 90%;\n  height: auto;\n  border-radius: 10px;\n  margin: 0 auto;\n  font-weight: bold;\n  text-align: center;\n  background-color: #fb630f; }\n\n.btn {\n  height: 37px;\n  margin: 0px 0px 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcZmF2b3JpdGVzXFxmYXZvcml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CWSxVQUFVO01BQ1YsWUFBWTtNQUNaLHdCQUF3QjtNQUMzQixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQTlCN0I7SUFrQ1EsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVcsRUFBQTs7QUF0Q25CO01Bd0NZLGVBQWU7TUFDZixZQUFZO01BQ1osa0JBQWtCLEVBQUE7O0FBSzlCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBSWxCO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFOaEI7SUFRUSxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVpwQjtNQWNZLFlBQVc7TUFDWCxXQUFVO01BQ1YsV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCwyQkFBMkIsRUFBQTs7QUFJdkM7RUFDSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFQM0I7SUFTUSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCx3QkFBd0IsRUFBQTs7QUFaaEM7SUFlUSxXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQWhCbkI7TUFrQlksWUFBWTtNQUNaLFdBQVc7TUFDWCx3QkFBd0I7TUFDeEIsY0FBYztNQUNkLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7O0FBM0JoQztJQStCUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHNCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CLEVBQUE7O0FBdEM1QjtNQXdDWSxjQUFjO01BQ2QsV0FBVztNQUNYLFdBQVc7TUFDWCxjQUFjO01BQ2QsdUJBQXVCLEVBQUE7O0FBNUNuQztNQStDWSxjQUFjO01BQ2QsY0FBYztNQUNkLHVCQUF3QjtNQUN4Qix3QkFBd0IsRUFBQTs7QUFsRHBDO0lBc0RRLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QixFQUFBOztBQXpEL0I7TUEyRFksVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVyxFQUFBOztBQTlEdkI7UUFnRWdCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBakU1QjtJQXNFUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUIsRUFBQTs7QUF6RS9CO01BMkVZLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsV0FBVztNQUNYLFdBQVc7TUFDWCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsd0JBQXdCO01BQ3hCLDBCQUEwQjtNQUMxQix3QkFBZ0I7TUFBaEIsZ0JBQWdCLEVBQUE7O0FBckY1QjtNQXdGWSx5QkFBeUI7TUFDekIsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7O0FBakd4QjtRQW1HZ0IsY0FDSixFQUFBOztBQUlaO0VBQ0ksWUFBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFFekI7RUFDQSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFFekI7RUFDSSxZQUFZO0VBQ1osdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1OyAgXHJcbn1cclxuLmhlYWQtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgLm1haW5fbWVudXtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggMnB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9sb2dve1xyXG4gICAgICAgICAgICB3aWR0aDogNTElO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggNzBweDtcclxuICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vdGlmeXsgXHJcbiAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW46IDE1cHggOXB4IDBweCAwcHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgLm5vdGlmeS1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL05vdCBGb3VuZFxyXG4ubm9Gb3VuZFRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTA1JTtcclxuICAgIG1hcmdpbjogNjglIDBweCAwcHggMHB4O1xyXG4gICAgY29sb3I6ICNmYjYzMGY7XHJcbn1cclxuXHJcbi8vIFNob3BzXHJcbi5tYWluX2NhcmRfc2hvcHN7XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ubWFpbl9zaG9wc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjJweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLm1haW5fY2FyZF9waWNzX3Nob3Bze1xyXG4gICAgaGVpZ2h0OiAxMjFweDtcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLmNhcmRfcGljc19zaG9wc3tcclxuICAgICAgICBoZWlnaHQ6IDk1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxOHB4IDBweCAwcHggNXB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDsgXHJcbiAgICAgICAgLnBpY19zaG9wc3tcclxuICAgICAgICAgICAgaGVpZ2h0Ojk1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgICB6LWluZGV4OiA5MDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4OyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNhcmRfbWFpbl9zaG9wc3tcclxuICAgIGhlaWdodDogMTIxcHg7XHJcbiAgICB3aWR0aDogODIlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDVweCA1cHggN3B4IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAuY2FyZF90ZXh0X3Nob3Bze1xyXG4gICAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZF9uYW1lX2Rpc3RhbmNlX1Nob3B7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLmNhcmRfbmFtZV9TaG9we1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX2FkcmVzc19zaG9wc3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgLmNhcmRfYWRyZXNzX3Nob3BzX2ljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwcHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgbWFyZ2luOiAgMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggN3B4IDBweCAwcHg7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5jYXJkX2xvZ29fbmV3U2hvcHtcclxuICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDRweCAwcHggMHB4IDVweDtcclxuICAgICAgICAuY2FyZF9sb2dvX1Nob3B7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX29mZmVyX3Nob3Bze1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcclxuICAgICAgICAuY2FyZF9kaXNjb3VudF9zaG9wc3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4IDZweCAxMnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZF9kaXN0YW5jZV9TaG9we1xyXG4gICAgICAgICAgICBtYXJnaW46IDI4cHggMTZweCAwcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIC5jYXJkX2Rpc3RhbmNlX2ljb25fU2hvcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmI2MzBmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZvb3RlcnRleHR7XHJcbiAgICBoZWlnaHQ6NTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZS10ZXh0e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _popover_favourite_popover_favourite_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/favourite-popover/favourite-popover.page */ "./src/app/pages/popover/favourite-popover/favourite-popover.page.ts");
/* harmony import */ var _popover_delete_all_favourite_popover_delete_all_favourite_popover_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/delete-all-favourite-popover/delete-all-favourite-popover.page */ "./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.ts");










var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(http, toastCtrl, ToastCtrl, router, popoverController, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.router = router;
        this.popoverController = popoverController;
        this.commonService = commonService;
        this.l_ShopList = [];
        this.Isfavauroite = 'true';
        this.l_deleteCount = 0;
        this.l_hdnOptions = false;
        this.l_hdnCheckbox = true;
        this.l_favList = new Array();
        this.selection = false;
        this.shopIds = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
    }
    FavoritesPage.prototype.ngOnInit = function () { };
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.l_deleteCount = 0;
        this.l_hdnCheckbox = true;
        this.l_hdnOptions = false;
        this.selection = false;
        this.getShop();
        this.l_shop = localStorage.getItem('shopFav');
        if (localStorage.getItem('isFav') == 'true') {
            this.l_shop = localStorage.getItem('isFav');
        }
    };
    FavoritesPage.prototype.getShop = function (infiniteScroll, refresher) {
        var options = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getFavouriteShopUrl + localStorage.getItem('userID');
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                control.l_ShopList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_ShopList);
                control.setCheckBoxonRefresh();
            }
            control.count = control.l_ShopList.length;
        };
        this.commonService.httpPost(options);
    };
    FavoritesPage.prototype.doRefresh = function (refresher) {
        this.getShop('', refresher);
    };
    FavoritesPage.prototype.doInfinite = function (infiniteScroll) {
        this.getShop(infiniteScroll);
    };
    FavoritesPage.prototype.setCheckBoxonRefresh = function () {
        if (this.shopIds.length > 0) {
            for (var i = 0; i < this.l_ShopList.length; i++) {
                for (var j = 0; j < this.shopIds.length; j++) {
                    if (this.l_ShopList[i].ShopID == this.shopIds[j].ShopID) {
                        this.l_ShopList[i].isSelected = true;
                    }
                }
            }
        }
    };
    FavoritesPage.prototype.gotoInformation = function (shopID) {
        localStorage.setItem('shopID', shopID);
        localStorage.setItem('favourite', this.Isfavauroite);
        this.router.navigate(['shop_information']);
    };
    FavoritesPage.prototype.openPopover = function (ev, shopID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shopid, control, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shopid = shopID;
                        control = this;
                        return [4 /*yield*/, this.popoverController.create({
                                component: _popover_favourite_popover_favourite_popover_page__WEBPACK_IMPORTED_MODULE_7__["FavouritePopoverPage"],
                                event: ev,
                                translucent: true,
                                componentProps: {
                                    Shop_ID: shopid,
                                }
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (data) {
                            for (var i = 0; i < control.l_ShopList.length; i++) {
                                if (control.l_ShopList[i].ShopID === shopid && localStorage.getItem('isFavDelete') === 'true') {
                                    localStorage.removeItem('isFavDelete');
                                    control.l_ShopList.splice(i, 1);
                                    i--;
                                    return;
                                }
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FavoritesPage.prototype.openPopoverdelete = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var control, optionMsg, popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        control = this;
                        optionMsg = {};
                        if (!(control.count > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.popoverController.create({
                                component: _popover_delete_all_favourite_popover_delete_all_favourite_popover_page__WEBPACK_IMPORTED_MODULE_8__["DeleteAllFavouritePopoverPage"],
                                event: ev,
                                translucent: true
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
    FavoritesPage.prototype.back = function () {
        this.l_shop = null;
        if (localStorage.getItem('shopFav') == "true") {
            localStorage.removeItem('shopFav');
            this.router.navigate(['shop_information']);
        }
        else if (localStorage.getItem('isFav') == "true") {
            localStorage.removeItem('isFav');
            this.router.navigate(['tabs/shop']);
        }
        else {
            this.router.navigate(['tabs/settings']);
        }
    };
    FavoritesPage.prototype.selectItem = function (index, list) {
        var _this = this;
        setTimeout(function () {
            _this.selection = true;
            list.isSelected = list.isSelected ? false : true;
            _this.l_favList[index] = list;
            if (list.isSelected) {
                _this.shopIds.push({ ShopID: list.ShopID });
                _this.l_deleteCount = _this.l_deleteCount + 1;
            }
            else {
                for (var i = 0; i < _this.shopIds.length; i++) {
                    if (_this.shopIds[i].ShopID == list.ShopID) {
                        _this.shopIds.splice(i, 1);
                    }
                }
                _this.l_deleteCount = _this.l_deleteCount - 1;
            }
            if (_this.l_deleteCount > 0) {
                _this.l_hdnCheckbox = false;
                _this.l_hdnOptions = true;
                _this.selection = true;
            }
            else {
                _this.l_hdnCheckbox = true;
                _this.l_hdnOptions = false;
                _this.selection = false;
            }
        }, 150);
    };
    FavoritesPage.prototype.unselectAll = function () {
        this.selection = false;
        this.l_favList.forEach(function (list) {
            list.isSelected = false;
        });
    };
    FavoritesPage.prototype.hndClick = function (event, shopID, val) {
        if (val == 1)
            this.openPopover(event, shopID);
        else
            this.gotoInformation(shopID);
        event.stopPropagation();
    };
    FavoritesPage.prototype.removeFavourite = function () {
        var favouriteheart = {
            ShopIDList: this.shopIds,
            ProductID: 0,
            IsFavourite: 0,
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
                optionMsg.message = 'Delete from wishList';
                control.commonService.msgToast(optionMsg);
                control.l_hdnCheckbox = true;
                control.l_hdnOptions = false;
                control.selection = false;
                control.l_deleteCount = 0;
                control.shopIds = [];
                control.getShop();
                return;
            }
        };
        this.commonService.httpPost(options);
    };
    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.page.html */ "./src/app/pages/favorites/favorites.page.html"),
            styles: [__webpack_require__(/*! ./favorites.page.scss */ "./src/app/pages/favorites/favorites.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], FavoritesPage);
    return FavoritesPage;
}());

var FavListPojo = /** @class */ (function () {
    function FavListPojo() {
        this.ShopID = 0;
        this.ShopName = '';
    }
    return FavListPojo;
}());


/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module.js.map