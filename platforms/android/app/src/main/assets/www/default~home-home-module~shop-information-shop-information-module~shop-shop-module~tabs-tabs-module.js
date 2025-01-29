(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~shop-information-shop-information-module~shop-shop-module~tabs-tabs-module"],{

/***/ "./src/app/pages/modal/search-shop-modal/search-shop-modal.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modal/search-shop-modal/search-shop-modal.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\">\n            <ion-icon name=\"ios-arrow-back\" (click)=\"closeModal()\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            <ion-input class=\"title\" #myInput type=\"text\" id=\"shopName\" placeholder=\"search\" name=\"l_search\"\n                [(ngModel)]=\"l_search\" (input)=\"searchDropdownList()\" (keyup.enter)=\"gotoSearchShop(l_search,0)\">\n            </ion-input>\n        </div>\n    </div>\n    <div class=\"notify\">\n        <ion-icon *ngIf=\"l_search == '' || l_search == null\" class=\"notify-icon\" name=\"search\"\n            (click)=\"gotoSearchShop(l_search,0)\"></ion-icon>\n        <ion-icon\n            *ngIf=\"l_searchDropdownList === true && l_search != ''  && l_search != null && l_search != 'undefined' \"\n            class=\"notify-icon\" name=\"close\" (click)=\"clearSearchInput()\"></ion-icon>\n    </div>\n</div>\n<ion-content *ngIf=\"l_searchDropdownList === true && l_search != ''  && l_search != null && l_search != 'undefined'\">\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <div class=\"design\" *ngIf=\"(l_shopList | searchfilter: l_search).length === 0\"\n                [hidden]=\"l_isShopNotFound\">\n                <h6>\n                    <ion-icon class=\"icon\" name=\"search\"></ion-icon>No item found\n                </h6>\n                <span>No search result for \"{{l_search}}\"</span>\n            </div>\n            <div class=\"name\" *ngFor=\"let row of l_shopList | searchfilter: l_search\">\n                <ion-item>\n                    <div class=\"name-text\" (click)=\"gotoSearchShop(row.ShopName)\">{{row.ShopName}}</div>\n                    <div class=\"name-edit\">\n                        <ion-icon name=\"arrow-up\" class=\"arrowicon\" (click)=\"listTextSearch(row.ShopName)\"></ion-icon>\n                    </div>\n                </ion-item>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>\n\n<ion-content padding *ngIf=\"l_searchDropdownList === false || l_search === ''\">\n    <div class=\"searchHistory\">\n        <div class=\"main\">\n            <div class=\"unable\" *ngIf=\"l_searchList == '' \">\n                <h5>SEARCH HISTORY</h5>\n                <h6>CLEAR</h6>\n            </div>\n            <div *ngIf=\"l_searchList != '' \">\n                <h5>SEARCH HISTORY</h5>\n                <h6 (click)=\"clearSearchHistory('ShopSearchHistory_')\">CLEAR</h6>\n            </div>\n        </div>\n        <div class=\"searchList\" *ngFor=\"let items of l_searchList\">\n            <span (click)=\"gotoSearchShop(items,1)\">{{items}}</span>\n        </div>\n    </div>\n    <div *ngIf=\"l_shopImageList != '' \">\n        <div class=\"searchHistory\">\n            <div class=\"main\">\n                <h5>RECENTLY VIEWED</h5>\n                <h6 (click)=\"clearSearchHistory('ShopRecentlyViewed_')\">CLEAR</h6>\n            </div>\n            <div class=\"image\" *ngFor=\"let items of l_shopImageList\">\n                <span hidden>{{items.ShopID}}</span>\n                <ion-img *ngIf=\"items.ImageURL === 'null'\" src=\"../../../../assets/img/notfound.png\"\n                    (click)=\"gotoInformation(items.ShopID)\"></ion-img>\n                <ion-img *ngIf=\"items.ImageURL != 'null'\" src=\"{{env.imageURL + items.ImageURL}}\"\n                    (click)=\"gotoInformation(items.ShopID)\"></ion-img>\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/modal/search-shop-modal/search-shop-modal.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modal/search-shop-modal/search-shop-modal.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 84%;\n    height: 40px;\n    margin: 15px 0px 2px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 51%;\n      height: 25px;\n      margin: -6px 0px 0px 70px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.head-main .notify {\n    width: 8%;\n    height: 10%;\n    float: right;\n    margin: 15px 9px 0px 0px;\n    color: white; }\n\n.head-main .notify .notify-icon {\n      font-size: 22px;\n      float: right;\n      position: relative; }\n\n.item-native {\n  --padding-start: 0px !important; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.mainLinks .name {\n    width: 100%;\n    height: auto;\n    float: left;\n    background-color: #fff;\n    margin: 2px 0px 0px 0px;\n    padding: 0px; }\n\n.mainLinks .name .name-text {\n      margin: 15px 0px 0px 1px;\n      width: 94%;\n      font-size: 13px;\n      float: left;\n      color: #2e3842;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks .name .name-edit {\n      width: auto;\n      height: 25px;\n      float: right;\n      padding-top: 15px;\n      color: #fb630f; }\n\n.mainLinks .name .name-edit .arrowicon {\n        float: right;\n        font-size: 18px;\n        color: #fb630f;\n        /* IE 9 */\n        -webkit-transform: rotate(-50deg);\n        /* Safari 3-8 */\n        transform: rotate(-50deg); }\n\n.title {\n  float: center;\n  width: 60%;\n  padding: 10px;\n  float: left; }\n\n.searchHistory {\n  width: 100%;\n  height: auto;\n  float: left; }\n\n.searchHistory .main {\n    width: 100%;\n    float: left; }\n\n.searchHistory .main h5 {\n      float: left;\n      width: 80%;\n      color: #969ba1;\n      font-size: 12px;\n      margin: 0px 0px 10px 0px; }\n\n.searchHistory .main h6 {\n      float: right;\n      width: 20%;\n      color: #fb630f;\n      font-size: 10px;\n      text-align: right;\n      margin: 0px 0px 10px 0px; }\n\n.searchHistory .main .unable h5 {\n      float: left;\n      width: 80%;\n      color: lightgrey;\n      font-size: 12px;\n      margin: 0px 0px 10px 0px; }\n\n.searchHistory .main .unable h6 {\n      float: right;\n      width: 20%;\n      color: lightgrey;\n      font-size: 10px;\n      text-align: right;\n      margin: 0px 0px 10px 0px; }\n\n.searchHistory .searchList {\n    float: left;\n    height: 20px;\n    background-color: gainsboro;\n    margin: 0px 10px 10px 0px; }\n\n.searchHistory .searchList span {\n      color: #2e3842;\n      font-size: 11px;\n      text-align: center;\n      padding: 5px; }\n\n.image {\n  float: left;\n  width: 70px;\n  height: 46px;\n  margin: 0px 10px 10px 0px; }\n\n.design {\n  text-align: center;\n  padding: 10px; }\n\n.design h6 {\n    color: #2e3842;\n    font-size: 20px; }\n\n.design h6 .icon {\n      color: #fb630f;\n      font-size: 17px; }\n\n.design span {\n    color: #969ba1;\n    font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwvc2VhcmNoLXNob3AtbW9kYWwvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxtb2RhbFxcc2VhcmNoLXNob3AtbW9kYWxcXHNlYXJjaC1zaG9wLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFIdkI7SUFLUSxVQUFVO0lBQ1YsWUFBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVyxFQUFBOztBQVRuQjtNQVdZLFVBQVU7TUFDVixZQUFZO01BQ1osWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixlQUFlO01BQ2YsV0FBVyxFQUFBOztBQWhCdkI7TUFtQlksVUFBVTtNQUNWLFlBQVk7TUFDWix5QkFBeUI7TUFDNUIsWUFBWTtNQUNaLFdBQVc7TUFDWCxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osc0JBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixvQkFBb0IsRUFBQTs7QUE5QjdCO0lBa0NRLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixZQUFXLEVBQUE7O0FBdENuQjtNQXdDWSxlQUFlO01BQ2YsWUFBWTtNQUNaLGtCQUFrQixFQUFBOztBQUk5QjtFQUNJLCtCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBSDVCO0lBS1EsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsMkJBQTRCLEVBQUE7O0FBWHBDO0lBY1EsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixZQUFZLEVBQUE7O0FBbkJwQjtNQXFCWSx3QkFBdUI7TUFDdkIsVUFBUztNQUNWLGVBQWU7TUFDZCxXQUFXO01BQ1gsY0FBYztNQUNkLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7O0FBNUJoQztNQStCWSxXQUFXO01BQ1gsWUFBVztNQUNYLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsY0FBYyxFQUFBOztBQW5DMUI7UUFxQ2dCLFlBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztRQUNnQixTQUFBO1FBQy9CLGlDQUFpQztRQUFFLGVBQUE7UUFDbkMseUJBQXlCLEVBQUE7O0FBTXhDO0VBQ0ksYUFBWTtFQUNaLFVBQVU7RUFDVixhQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFVLEVBQUE7O0FBSGQ7SUFLUSxXQUFVO0lBQ1YsV0FBVSxFQUFBOztBQU5sQjtNQVFZLFdBQVc7TUFDWCxVQUFTO01BQ1QsY0FBYztNQUNkLGVBQWM7TUFDZCx3QkFBdUIsRUFBQTs7QUFabkM7TUFnQlksWUFBWTtNQUNaLFVBQVU7TUFDVixjQUFjO01BQ2QsZUFBYztNQUNkLGlCQUFpQjtNQUNqQix3QkFBdUIsRUFBQTs7QUFyQm5DO01BMEJnQixXQUFXO01BQ1gsVUFBUztNQUNULGdCQUFnQjtNQUNoQixlQUFjO01BQ2Qsd0JBQXVCLEVBQUE7O0FBOUJ2QztNQWtDZ0IsWUFBWTtNQUNaLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsZUFBYztNQUNkLGlCQUFpQjtNQUNqQix3QkFBdUIsRUFBQTs7QUF2Q3ZDO0lBOENRLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHlCQUF3QixFQUFBOztBQWpEaEM7TUFtRFksY0FBYTtNQUNiLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsWUFBVyxFQUFBOztBQUl2QjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF3QixFQUFBOztBQUU1QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBRmpCO0lBTVEsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFQdkI7TUFTVSxjQUFjO01BQ2QsZUFBZSxFQUFBOztBQVZ6QjtJQWNnQixjQUFjO0lBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kYWwvc2VhcmNoLXNob3AtbW9kYWwvc2VhcmNoLXNob3AtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7ICBcclxufVxyXG4uaGVhZC1tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmYjYzMGY7XHJcbiAgICAubWFpbl9tZW51e1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAycHggMTJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNnB4IDZweCA2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0X2xvZ297XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAtNnB4IDBweCAwcHggNzBweDtcclxuICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vdGlmeXsgXHJcbiAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW46IDE1cHggOXB4IDBweCAwcHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgLm5vdGlmeS1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaXRlbS1uYXRpdmV7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluTGlua3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTdweCAwcHggMHB4IDBweDtcclxuICAgIC5jYXJkTWFpbkxpbmtze1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAyMnB4IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4IDtcclxuICAgIH1cclxuICAgIC5uYW1le1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIC5uYW1lLXRleHR7IFxyXG4gICAgICAgICAgICBtYXJnaW46MTVweCAwcHggMHB4IDFweDsgXHJcbiAgICAgICAgICAgIHdpZHRoOjk0JTsgXHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6ICMyZTM4NDI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYW1lLWVkaXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjVweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0OyAgXHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICAgICAgLmFycm93aWNvbntcclxuICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpOyAvKiBJRSA5ICovXHJcbiAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9ICBcclxufVxyXG4udGl0bGV7XHJcbiAgICBmbG9hdDpjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNlYXJjaEhpc3Rvcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAubWFpbntcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTY5YmExO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgbWFyZ2luOjBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW46MHB4IDBweCAxMHB4IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51bmFibGV7XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4IDBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4IDBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9ICBcclxuICAgIC5zZWFyY2hMaXN0e1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICAgICAgbWFyZ2luOjBweCAxMHB4IDEwcHggMHB4OyBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjojMmUzODQyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pbWFnZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBtYXJnaW46MHB4IDEwcHggMTBweCAwcHg7IFxyXG59XHJcbi5kZXNpZ257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAvLyBib3gtc2hhZG93OiAwIDAgNXB4ICNkOGQ4ZDg7XHJcbiAgICBoNntcclxuICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLmljb257XHJcbiAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NjliYTE7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/modal/search-shop-modal/search-shop-modal.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/modal/search-shop-modal/search-shop-modal.page.ts ***!
  \*************************************************************************/
/*! exports provided: SearchShopModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchShopModalPage", function() { return SearchShopModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _services_sqlservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/sqlservices */ "./src/app/services/sqlservices.ts");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");









var SearchShopModalPage = /** @class */ (function () {
    function SearchShopModalPage(modal, navParams, http, toastCtrl, ToastCtrl, router, ref, sqlite, navControll, commonService) {
        this.modal = modal;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.router = router;
        this.ref = ref;
        this.sqlite = sqlite;
        this.navControll = navControll;
        this.commonService = commonService;
        this.l_isModel = 'true';
        this.l_searchDropdownList = false;
        this.l_shopList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_7__["Env"]();
        this.sqlService = new _services_sqlservices__WEBPACK_IMPORTED_MODULE_6__["Sqlservices"](this.sqlite);
    }
    SearchShopModalPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 1000);
    };
    SearchShopModalPage.prototype.ionViewWillEnter = function () {
        this.getShop();
        this.l_isShopNotFound = true;
        this.l_search = this.navParams.get('searchShopName');
        if (this.l_search != null) {
            this.l_searchDropdownList = true;
        }
        localStorage.removeItem('searchShopName');
        var shopSrchTableData = {
            tableName: 'ShopSearchHistory_',
            columnName: null,
            columnValue: null
        };
        this.sqlService.getDataFromTable({ callback: this.getShopSrchCallback, control: this, tblData: shopSrchTableData });
        var shopRecImgTableData = {
            tableName: 'ShopRecentlyViewed_',
            columnName: null,
            columnValue: null
        };
        this.sqlService.getDataFromTable({ callback: this.getShopRecImgCallback, control: this, tblData: shopRecImgTableData });
    };
    SearchShopModalPage.prototype.getShopSrchCallback = function (paramOptions) {
        var control = paramOptions.control;
        control.l_searchList = [];
        for (var i = 0; i < paramOptions.dataList.length; i++) {
            control.l_searchList.push([paramOptions.dataList[i].SearchingName]);
        }
        // control.l_searchList = paramOptions.dataList;   
    };
    SearchShopModalPage.prototype.getShopRecImgCallback = function (paramOptions) {
        var control = paramOptions.control;
        control.l_shopImageList = [];
        control.l_shopImageList = paramOptions.dataList;
    };
    SearchShopModalPage.prototype.closeModal = function () {
        this.modal.dismiss();
        this.router.navigate(['tabs/home']);
    };
    SearchShopModalPage.prototype.gotoSearchShop = function (l_search, type) {
        if (l_search == null || l_search == 'undefined' || l_search == '') {
            var optionMsg = {};
            optionMsg.message = 'Please atleast one word for searching';
            this.commonService.msgToast(optionMsg);
        }
        else {
            localStorage.setItem('searchShopName', l_search);
            if (type == 1) {
                l_search = "'" + l_search[0].toLowerCase() + "'";
            }
            else {
                l_search = "'" + l_search.toLowerCase() + "'";
            }
            // const shopSrchTableData: any = {
            //     tableName: 'ShopSearchHistory_',
            //     column:[{columnName: 'SearchingName', columnValue: l_search}],
            // }
            // this.sqlService.insertShopSearchTable(shopSrchTableData);
            this.sqlService.insertShopSearchHistoryTable(l_search);
            this.router.navigate(['tabs/shop']);
            this.modal.dismiss();
        }
    };
    SearchShopModalPage.prototype.clearSearchHistory = function (tableName) {
        var tableData = {
            tableName: tableName,
            columnName: null,
            columnValue: null
        };
        this.sqlService.deleteDataFromTable({ callback: this.deleteListCallback, control: this, tblData: tableData });
    };
    SearchShopModalPage.prototype.deleteListCallback = function (paramOptions) {
        var control = paramOptions.control;
        if (paramOptions.tableName == 'ShopSearchHistory_') {
            control.l_searchList = [];
        }
        else if (paramOptions.tableName == 'ShopRecentlyViewed_') {
            control.l_shopImageList = [];
        }
    };
    SearchShopModalPage.prototype.gotoInformation = function (l_shopID) {
        localStorage.setItem("shopID", l_shopID);
        localStorage.setItem('searchShopModal', this.l_isModel);
        this.router.navigate(['shop_information']);
        this.modal.dismiss();
    };
    SearchShopModalPage.prototype.searchDropdownList = function () {
        this.l_searchDropdownList = true;
    };
    //Get Shop
    SearchShopModalPage.prototype.getShop = function () {
        var options = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getShopURL + localStorage.getItem('userID'); //UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true)
                control.l_shopList = data.Result;
            control.l_isShopNotFound = false;
        };
        this.commonService.httpPost(options);
    };
    SearchShopModalPage.prototype.listTextSearch = function (search) {
        this.l_search = search;
    };
    SearchShopModalPage.prototype.clearSearchInput = function () {
        this.l_searchDropdownList = false;
        this.l_search = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchShopModalPage.prototype, "myInput", void 0);
    SearchShopModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-shop-modal',
            template: __webpack_require__(/*! ./search-shop-modal.page.html */ "./src/app/pages/modal/search-shop-modal/search-shop-modal.page.html"),
            styles: [__webpack_require__(/*! ./search-shop-modal.page.scss */ "./src/app/pages/modal/search-shop-modal/search-shop-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__["SQLite"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_5__["Commonservices"]])
    ], SearchShopModalPage);
    return SearchShopModalPage;
}());



/***/ }),

/***/ "./src/app/services/sqlservices.ts":
/*!*****************************************!*\
  !*** ./src/app/services/sqlservices.ts ***!
  \*****************************************/
/*! exports provided: Sqlservices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sqlservices", function() { return Sqlservices; });
var Sqlservices = /** @class */ (function () {
    function Sqlservices(sqlite) {
        this.sqlite = sqlite;
    }
    Sqlservices.prototype.createLocalDB = function () {
        var query = "CREATE TABLE IF NOT EXISTS ShopSearchHistory_" + localStorage.getItem('userName') + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, SearchingName VARCHAR(500))";
        var query1 = "CREATE TABLE IF NOT EXISTS ShopRecentlyViewed_" + localStorage.getItem('userName') + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, ShopID INTEGER, ImageURL VARCHAR(1000))";
        return this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql(query, []);
            db.executeSql(query1, [])
                .then(function () { return console.log('Create Database And Table Successfully'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    Sqlservices.prototype.getDataFromTable = function (paramOptions) {
        var query;
        var tblInfo = paramOptions.tblData;
        localStorage.setItem('getTableName', tblInfo.tableName);
        if (tblInfo.columnValue == null) {
            query = "SELECT * FROM " + tblInfo.tableName + localStorage.getItem('userName') + ' ORDER BY ID DESC';
        }
        else {
            query = "SELECT * FROM " + tblInfo.tableName + localStorage.getItem('userName') + " WHERE " + tblInfo.columnName + " = " + tblInfo.columnValue + ' ORDER BY ID DESC';
        }
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (sql) {
            sql.executeSql(query, []).then(function (data) {
                var temp_DataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    // temp_DataList.push([data.rows.item(i).SearchingName]);
                    // ShopID: data.rows.item(i).ShopID,
                    //ImageURL: data.rows.item(i).ImageURL
                    temp_DataList.push(data.rows.item(i));
                }
                var tblName = localStorage.getItem('getTableName');
                paramOptions.callback && paramOptions.callback({
                    control: paramOptions.control,
                    dataList: temp_DataList,
                    tableName: tblName
                });
            }).catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    Sqlservices.prototype.deleteDataFromTable = function (paramOptions) {
        var tblInfo = paramOptions.tblData;
        var query;
        localStorage.setItem('deleteTableName', tblInfo.tableName);
        if (tblInfo.columnValue == null) {
            query = "DELETE FROM " + tblInfo.tableName + localStorage.getItem('userName');
        }
        else {
            query = "DELETE FROM " + tblInfo.tableName + localStorage.getItem('userName') + " WHERE " + tblInfo.columnName + " = " + tblInfo.columnValue;
        }
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (sql) {
            sql.executeSql(query, []).then(function (data) {
                if (paramOptions != '') {
                    var tblName = localStorage.getItem('deleteTableName');
                    paramOptions.callback && paramOptions.callback({
                        control: paramOptions.control,
                        tableName: tblName
                    });
                }
                console.log('Records Successfully Deleted.');
            })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    ///////////////////////// must be generic log /////////////////////////////////////////////
    Sqlservices.prototype.insertShopSearchHistoryTable = function (searchingValue) {
        var tableData = {
            tableName: 'ShopSearchHistory_',
            columnName: 'SearchingName',
            columnValue: searchingValue
        };
        var tblData = {
            tblData: tableData
        };
        this.deleteDataFromTable(tblData);
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            var query = "INSERT INTO ShopSearchHistory_" + localStorage.getItem('userName') + " (SearchingName) VALUES(" + searchingValue + ");";
            db.executeSql(query, [])
                .then(function () { return console.log('Record Insert Successfully'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    Sqlservices.prototype.insertShopRecentlyViewedTable = function (l_shopID, l_imageURL) {
        var tableData = {
            tableName: 'ShopRecentlyViewed_',
            columnName: 'ShopID',
            columnValue: l_shopID
        };
        var tblData = {
            tblData: tableData
        };
        this.deleteDataFromTable(tblData);
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            var query1 = "INSERT INTO ShopRecentlyViewed_" + localStorage.getItem('userName') + " (ShopID, ImageURL) VALUES('" + l_shopID + "','" + l_imageURL + "');";
            db.executeSql(query1, [])
                .then(function () { return console.log('Record Insert Successfully'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    return Sqlservices;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~shop-information-shop-information-module~shop-shop-module~tabs-tabs-module.js.map