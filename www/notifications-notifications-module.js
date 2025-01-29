(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/pages/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/notifications/notifications.page.ts");







var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"goBack()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Notifications\n        </div>\n    </div>\n</div>\n<ion-content [ngClass]=\"l_notficationAll != 0 ? '': 'main'\">\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"tab-panel\">\n        <div class=\"review_main\">\n            <div class=\"review\" *ngFor=\"let row of l_notfication; let i=index\" tappable text-wrap\n                (click)=!selection?hndClick($event,row.NotificationID,row.ShopName,0):selectItem(i,row)\n                (press)=selectItem(i,row) [ngStyle]=\"{'background-color': row.isSelected ? '#f5f5f5' : 'white'}\">\n                <div class=\"review-image\">\n                    <ion-avatar class=\"picText\" slot=\"start\" *ngIf=\"row.ImageURL === null\">\n                        <ion-img src=\"../../../assets/img/notfound.png\"></ion-img>\n                    </ion-avatar>\n                    <ion-avatar class=\"pic\" slot=\"start\" *ngIf=\"row.ImageURL != null\">\n                        <ion-img src=\"{{env.imageURL + row.ImageURL}}\"></ion-img>\n                    </ion-avatar>\n                </div>\n                <div class=\"review-text\">\n                    <div class=\"text_review\">\n                        <span class=\"name_text\">{{row.ShopName}}</span>\n                    </div>\n                    <h6>{{commonService.convertDateTimeString(commonService.ConvertUTCToLocalDateTime(row.CreatedDate))}}\n                    </h6>\n                    <p>{{row.Description}}</p>\n                    <div class=\"card_more\" [hidden]=\"l_hdnCheckbox\">\n                        <ion-checkbox [checked]=\"row.isSelected\"></ion-checkbox>\n                    </div>\n                    <ion-buttons class=\"card_more\" [hidden]=\"l_hdnOptions\"\n                        (click)=\"hndClick($event,row.NotificationID,row.ShopName,1)\">\n                        <ion-icon name=\"ios-more\"></ion-icon>\n                    </ion-buttons>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n<ion-footer *ngIf=\"l_notficationAll != 0\" class=\"footertext\">\n    <div (click)=\"deleteNotification()\" class=\"delete-text\" [hidden]=\"l_hdnCheckbox\">\n        <ion-button fill=\"clear\" color=\"light\" class=\"btn\">\n            Delete ({{l_deleteCount}})\n        </ion-button>\n    </div>\n    <div (click)=\"notificationRemove(0, true)\" class=\"delete-text\" [hidden]=\"l_hdnOptions\">\n        <ion-button fill=\"clear\" color=\"light\" class=\"btn\">\n            <span class=\"spn-removeAll\">\n                <ion-icon name=\"ios-trash\"></ion-icon>\n            </span><span>Remove All</span>\n        </ion-button>\n    </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.tab-panel {\n  margin: 10px 10px 10px 10px; }\n\n.review_main {\n  width: 96%;\n  margin: 0px auto; }\n\n.review_main .review {\n    background-color: white;\n    width: 100%;\n    height: auto;\n    float: left;\n    box-shadow: 0 0 5px #d8d8d8;\n    border-radius: 10px;\n    margin: 0px 0px 8px 0px; }\n\n.review_main .review .review-image {\n      width: 15%;\n      height: 50px;\n      border-radius: 50%;\n      margin: 10px 0px 0px 12px;\n      float: left; }\n\n.review_main .review .review-image .pic {\n        width: 40px;\n        height: 40px; }\n\n.review_main .review .review-image .picText {\n        width: 40px;\n        height: 40px;\n        color: #fff;\n        background-color: #4c614c;\n        text-align: center;\n        padding: 10px 5px 5px 5px;\n        text-transform: capitalize; }\n\n.review_main .review .review-text {\n      width: 80%;\n      height: auto;\n      margin: 10px 0px 0px 0px;\n      float: left;\n      padding: 0px; }\n\n.review_main .review .review-text .text_review {\n        width: 100%; }\n\n.review_main .review .review-text .text_review .name_text {\n          font-size: 12px;\n          margin: 2px 0px 0px 2px;\n          font-family: 'Poppins';\n          font-style: normal;\n          font-variant: normal;\n          font-weight: bolder; }\n\n.review_main .review .review-text h6 {\n        color: #969ba1;\n        font-size: 8px;\n        margin: 0px 0px 0px 2px;\n        font-family: 'Poppins';\n        font-style: normal;\n        font-variant: normal;\n        font-weight: bold; }\n\n.review_main .review .review-text p {\n        color: #969ba1;\n        font-size: 10px;\n        margin: 5px 10px 10px 2px;\n        float: left;\n        font-family: 'Poppins';\n        font-style: normal;\n        font-variant: normal; }\n\n.card_more {\n  height: 10%;\n  width: 11%;\n  margin: 0px 0px 5px 0px;\n  float: right;\n  font-size: 17px;\n  font-weight: bold;\n  color: #969ba1; }\n\n.footertext {\n  height: 50px;\n  text-align: center;\n  float: center;\n  font-weight: bold;\n  padding: 8px;\n  background-color: #f5f5f5; }\n\n.delete-text {\n  width: 90%;\n  height: auto;\n  border-radius: 10px;\n  margin: 0 auto;\n  font-weight: bold;\n  text-align: center;\n  background-color: #fb630f; }\n\n.btn {\n  height: 37px;\n  margin: 0px 0px 0px 0px; }\n\n.spn-removeAll {\n  position: absolute;\n  margin-left: -52px; }\n\n.main {\n  width: 100%;\n  float: left;\n  width: 100%;\n  --background: lavender url('notificationImage.jpeg') no-repeat center center / cover; }\n\n.read {\n  background-color: white; }\n\n.Unread {\n  background-color: #969ba1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhdGlvbnNcXG5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWEsRUFBQTs7QUFFZjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBSHJCO0lBS00sVUFBVTtJQUNWLFlBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFUakI7TUFXVSxVQUFVO01BQ1YsWUFBWTtNQUNaLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsZUFBZTtNQUNmLFdBQVcsRUFBQTs7QUFoQnJCO01BbUJPLFVBQVU7TUFDVixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHNCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7O0FBSTNCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRTNCO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUZwQjtJQUlRLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBOztBQVYvQjtNQVlRLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixXQUFXLEVBQUE7O0FBaEJuQjtRQWtCWSxXQUFVO1FBQ1YsWUFBVyxFQUFBOztBQW5CdkI7UUFzQlksV0FBVTtRQUNWLFlBQVc7UUFDWCxXQUFXO1FBQ1gseUJBQWlDO1FBQ2pDLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsMEJBQTBCLEVBQUE7O0FBNUJ0QztNQWdDUSxVQUFVO01BQ1YsWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQXBDcEI7UUFzQ1EsV0FBVyxFQUFBOztBQXRDbkI7VUF3Q1ksZUFBZTtVQUNmLHVCQUF1QjtVQUN2QixzQkFBcUI7VUFDckIsa0JBQWtCO1VBQ2xCLG9CQUFvQjtVQUNwQixtQkFBbUIsRUFBQTs7QUE3Qy9CO1FBaURZLGNBQWM7UUFDZCxjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLHNCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGlCQUFpQixFQUFBOztBQXZEN0I7UUEyRFksY0FBYztRQUNkLGVBQWM7UUFDZCx5QkFBeUI7UUFDekIsV0FBVztRQUNYLHNCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsb0JBQW9CLEVBQUE7O0FBTWhDO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNFLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRXpCO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0ksWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVU7RUFDVixvRkFBYSxFQUFBOztBQUVqQjtFQUNJLHVCQUFzQixFQUFBOztBQUUxQjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTsgIFxyXG59XHJcbi5oZWFkLW1haW57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZiNjMwZjtcclxuICAubWFpbl9tZW51e1xyXG4gICAgICB3aWR0aDogOTclO1xyXG4gICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgbWFyZ2luOiAxNXB4IDBweCA2cHggMTJweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgLm1lbnV7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHRfbG9nb3tcclxuICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuLnRhYi1wYW5lbHtcclxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuICAucmV2aWV3X21haW57XHJcbiAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgIC5yZXZpZXd7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNkOGQ4ZDg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDhweCAwcHg7XHJcbiAgICAgICAgLnJldmlldy1pbWFnZXtcclxuICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAxMnB4O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAucGlje1xyXG4gICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGljVGV4dHtcclxuICAgICAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NiwgOTcsIDc2KTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHggNXB4IDVweDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmV2aWV3LXRleHR7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4OyBcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4OyBcclxuICAgICAgICAgLnRleHRfcmV2aWV3e1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAubmFtZV90ZXh0e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDJweCAwcHggMHB4IDJweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDJweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM5NjliYTE7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweCAxMHB4IDJweDtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkX21vcmV7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiAxMSU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM5NjliYTE7XHJcbn0gXHJcbi5mb290ZXJ0ZXh0e1xyXG4gIGhlaWdodDo1MHB4OyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgLmRlbGV0ZS10ZXh0e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MzBmO1xyXG4gICAgfVxyXG4gIC5idG57XHJcbiAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIC5zcG4tcmVtb3ZlQWxse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MnB4O1xyXG59XHJcbi5tYWlue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogbGF2ZW5kZXIgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL25vdGlmaWNhdGlvbkltYWdlLmpwZWcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcbi5yZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG4uVW5yZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2OWJhMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");








var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(http, popoverController, actionSheetController, modal, loadingController, plt, router, fcm, toastController, ref, events, commonService) {
        this.http = http;
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.modal = modal;
        this.loadingController = loadingController;
        this.plt = plt;
        this.router = router;
        this.fcm = fcm;
        this.toastController = toastController;
        this.ref = ref;
        this.events = events;
        this.commonService = commonService;
        this.l_newShopList = [];
        this.l_hide = "hide";
        this.isNotification = 'true';
        this.l_notificationList = [];
        this.l_deleteCount = 0;
        this.l_hdnOptions = false;
        this.l_hdnCheckbox = true;
        this.selection = false;
        this.l_notifiList = new Array();
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_4__["Env"]();
    }
    NotificationsPage.prototype.ngOnInit = function () {
        localStorage.removeItem('NotificationBellIcon');
        this.events.publish('NotificationBellIconRemove');
        localStorage.removeItem('hometab');
        this.plt.backButton.subscribe(function () {
            if (localStorage.getItem('home') == 'true') {
                localStorage.removeItem('home');
                localStorage.setItem('hometab', 'true');
            }
        });
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        this.getNotification();
        localStorage.setItem("hideValue", this.l_hide);
        localStorage.removeItem('shopNameForNotification');
        localStorage.removeItem('NotificationBellIcon');
        this.events.publish('NotificationBellIconRemove');
        this.ref.detectChanges();
    };
    // Get Notification
    NotificationsPage.prototype.getNotification = function (infiniteScroll, refresher) {
        var options = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.notificationApi.getShopNotificationURL + localStorage.getItem('userID');
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true)
                control.l_notfication = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.ResultData, control.l_notfication);
            control.l_notficationAll = data.ResultData;
            control.setCheckBoxonRefresh();
            control.ref.detectChanges();
        };
        this.commonService.httpPost(options);
    };
    NotificationsPage.prototype.doRefresh = function (refresher) {
        this.getNotification("", refresher);
    };
    NotificationsPage.prototype.doInfinite = function (infiniteScroll) {
        this.getNotification(infiniteScroll);
    };
    NotificationsPage.prototype.setCheckBoxonRefresh = function () {
        if (this.l_notificationList.length > 0) {
            for (var i = 0; i < this.l_notficationAll.length; i++) {
                for (var j = 0; j < this.l_notificationList.length; j++) {
                    if (this.l_notficationAll[i].NotificationID == this.l_notificationList[j].NotificationID) {
                        this.l_notficationAll[i].isSelected = true;
                    }
                }
            }
        }
    };
    NotificationsPage.prototype.notificationRemove = function (notificationId, shopName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: 'Remove this notification',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.deleteNotification([{ NotificationID: notificationId }], shopName);
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
    NotificationsPage.prototype.deleteNotification = function (notificationId, removeAll) {
        var lstNotificationIds = [];
        if (removeAll) {
            for (var i = 0; i < this.l_notficationAll.length; i++) {
                lstNotificationIds.push({
                    NotificationID: this.l_notficationAll[i].NotificationID
                });
            }
        }
        else {
            lstNotificationIds = notificationId;
        }
        if (this.l_notificationList.length > 0) {
            lstNotificationIds = [];
            lstNotificationIds = this.l_notificationList;
        }
        var notificationDeletepram = {
            UserID: localStorage.getItem('userID'),
            NotificationIDList: lstNotificationIds,
        };
        var options = {};
        var control = this;
        options.title = 'Hide Single Shop!!!';
        options.apiURL = this.env.notificationApi.deleteNotificationURL;
        options.catchErrorText = 'UserController: error => hideSingleShop()';
        options.methodType = 'POST';
        options.paramData = notificationDeletepram;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                var optionMsg = {};
                optionMsg.message = 'Your Notification Remove';
                control.commonService.msgToast(optionMsg);
                control.getNotification();
                control.l_hdnCheckbox = true;
                control.l_hdnOptions = false;
                control.selection = false;
                control.l_deleteCount = 0;
                control.l_notificationList = [];
            }
        };
        this.commonService.httpPost(options);
    };
    NotificationsPage.prototype.gotoShop = function (shopName) {
        localStorage.setItem('shopNameForNotification', shopName);
        localStorage.setItem('IsNotification', this.isNotification);
        this.router.navigate(['tabs/shop']);
    };
    NotificationsPage.prototype.hndClick = function (event, notificationID, shopName, val) {
        if (val == 1)
            this.notificationRemove(notificationID, false);
        else
            this.gotoShop(shopName);
        event.stopPropagation();
    };
    NotificationsPage.prototype.selectItem = function (index, list) {
        var _this = this;
        setTimeout(function () {
            _this.selection = true;
            list.isSelected = list.isSelected ? false : true;
            _this.l_notifiList[index] = list;
            if (list.isSelected) {
                _this.l_notificationList.push({ NotificationID: list.NotificationID });
                _this.l_deleteCount = _this.l_deleteCount + 1;
            }
            else {
                for (var i = 0; i < _this.l_notificationList.length; i++) {
                    if (_this.l_notificationList[i].NotificationID == list.NotificationID) {
                        _this.l_notificationList.splice(i, 1);
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
    NotificationsPage.prototype.goBack = function () {
        if (localStorage.getItem('home') == 'true') {
            localStorage.removeItem('home');
            this.router.navigate(['tabs/home']);
        }
        else {
            this.router.navigate(['tabs/settings']);
        }
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/pages/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/pages/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_5__["Commonservices"]])
    ], NotificationsPage);
    return NotificationsPage;
}());

var NotifiListPojo = /** @class */ (function () {
    function NotifiListPojo() {
        this.NotificationID = 0;
        this.ShopName = '';
    }
    return NotifiListPojo;
}());


/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map