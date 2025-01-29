(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["review-all-review-all-module"],{

/***/ "./src/app/pages/review-all/review-all.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/review-all/review-all.module.ts ***!
  \*******************************************************/
/*! exports provided: ReviewAllPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAllPageModule", function() { return ReviewAllPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_all_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-all.page */ "./src/app/pages/review-all/review-all.page.ts");







var routes = [
    {
        path: '',
        component: _review_all_page__WEBPACK_IMPORTED_MODULE_6__["ReviewAllPage"]
    }
];
var ReviewAllPageModule = /** @class */ (function () {
    function ReviewAllPageModule() {
    }
    ReviewAllPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_review_all_page__WEBPACK_IMPORTED_MODULE_6__["ReviewAllPage"]]
        })
    ], ReviewAllPageModule);
    return ReviewAllPageModule;
}());



/***/ }),

/***/ "./src/app/pages/review-all/review-all.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/review-all/review-all.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"goBack()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            {{l_shopName}}\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"tab-panel\">\n        <h4 class=\"review-count-title\">\n            <span class=\"commentLink\">\n                Rating & Review ({{l_totalreview}})\n            </span>\n        </h4>\n        <div class=\"review_main\">\n            <div class=\"review\" *ngFor=\"let row of l_reviewList\">\n                <div class=\"review-image\">\n                    <ion-avatar class=\"picText\" slot=\"start\" *ngIf=\"row.ImageUrl === null\">\n                        {{commonService.profileTextLetter(row.FirstName, row.LastName)}}\n                    </ion-avatar>\n                    <ion-avatar class=\"pic\" slot=\"start\" *ngIf=\"row.ImageUrl != null\">\n                        <ion-img src=\"{{env.imageURL + row.ImageUrl}}\"></ion-img>\n                    </ion-avatar>\n                </div>\n                <div class=\"review-text\">\n                    <div class=\"text_review\">\n                        <span class=\"name_text\">{{row.FullName}}</span>\n                        <label class=\"review-rating\">\n                            <span *ngFor=\"let str of [1,2,3,4,5];\">\n                                <span *ngIf=\"row.RatingNo >= str\">\n                                    <ion-icon name=\"ios-star\" class=\"star_rating_color_review\">\n                                    </ion-icon>\n                                </span>\n                                <ion-icon name=\"ios-star\" class=\"star_rating_review\"></ion-icon>\n                            </span>\n                        </label>\n                    </div>\n                    <h6>{{commonService.convertDateTimeString(commonService.ConvertUTCToLocalDateTime(row.FeedbackDate))}}\n                    </h6>\n                    <p>{{row.Description}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/review-all/review-all.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/review-all/review-all.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.tab-panel {\n  margin: 10px 10px 10px 10px; }\n\n.review-count-title {\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0px 0px 11px 8px; }\n\n.reviewLink {\n  float: right;\n  font-size: 10px;\n  padding: 0px 15px 5px 5px;\n  color: #969ba1; }\n\n.review_main {\n  width: 96%;\n  margin: 0px auto; }\n\n.review_main .review {\n    background-color: white;\n    width: 100%;\n    height: auto;\n    float: left;\n    box-shadow: 0 0 5px #d8d8d8;\n    border-radius: 10px;\n    margin: 0px 0px 8px 0px; }\n\n.review_main .review .review-image {\n      width: 15%;\n      height: 50px;\n      border-radius: 50%;\n      margin: 10px 0px 0px 12px;\n      float: left; }\n\n.review_main .review .review-image .pic {\n        width: 40px;\n        height: 40px; }\n\n.review_main .review .review-image .picText {\n        width: 40px;\n        height: 40px;\n        color: #fff;\n        background-color: #4c614c;\n        text-align: center;\n        padding: 10px 5px 5px 5px;\n        text-transform: capitalize; }\n\n.review_main .review .review-text {\n      width: 80%;\n      height: auto;\n      margin: 10px 0px 0px 0px;\n      float: left;\n      padding: 0px; }\n\n.review_main .review .review-text .text_review {\n        width: 100%; }\n\n.review_main .review .review-text .text_review .name_text {\n          font-size: 12px;\n          margin: 2px 0px 0px 2px; }\n\n.review_main .review .review-text .text_review .review-rating {\n          height: 18px;\n          margin: 5px 10px 0px 2px;\n          float: right; }\n\n.review_main .review .review-text h6 {\n        color: #969ba1;\n        font-size: 8px;\n        margin: 0px 0px 0px 2px; }\n\n.review_main .review .review-text p {\n        color: #969ba1;\n        font-size: 10px;\n        margin: 5px 10px 10px 2px; }\n\n.star_rating_review {\n  color: #969ba1;\n  position: relative;\n  z-index: 0;\n  float: left;\n  font-size: 10px; }\n\n.star_rating_color_review {\n  font-size: 10px;\n  color: #fece3a;\n  position: absolute;\n  float: left;\n  z-index: 100; }\n\n.commentLink {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-variant: normal;\n  font-size: 12px;\n  margin: 0px 0px 0px 5px;\n  text-decoration: underline;\n  color: #969ba1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3LWFsbC9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXHJldmlldy1hbGxcXHJldmlldy1hbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CUyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUk3QjtFQUNJLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCLEVBQUE7O0FBRTFCO0VBQ00sWUFBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYSxFQUFBOztBQUVqQjtFQUNJLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJUSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUFWL0I7TUFZUSxVQUFVO01BQ1YsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsV0FBVyxFQUFBOztBQWhCbkI7UUFrQlksV0FBVTtRQUNWLFlBQVcsRUFBQTs7QUFuQnZCO1FBc0JZLFdBQVU7UUFDVixZQUFXO1FBQ1gsV0FBVztRQUNYLHlCQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLDBCQUEwQixFQUFBOztBQTVCdEM7TUFnQ1EsVUFBVTtNQUNWLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFwQ3BCO1FBc0NRLFdBQVcsRUFBQTs7QUF0Q25CO1VBd0NZLGVBQWU7VUFDZix1QkFBdUIsRUFBQTs7QUF6Q25DO1VBNENZLFlBQVk7VUFDWix3QkFBd0I7VUFDeEIsWUFBWSxFQUFBOztBQTlDeEI7UUFrRFksY0FBYztRQUNkLGNBQWM7UUFDZCx1QkFBdUIsRUFBQTs7QUFwRG5DO1FBd0RZLGNBQWM7UUFDZCxlQUFjO1FBQ2QseUJBQXlCLEVBQUE7O0FBS3JDO0VBQ0ksY0FBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsY0FBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jldmlldy1hbGwvcmV2aWV3LWFsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTsgIFxyXG59XHJcbi5oZWFkLW1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiNjMwZjtcclxuICAgIC5tYWluX21lbnV7XHJcbiAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHggMHB4IDZweCAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHggNnB4IDZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRfbG9nb3tcclxuICAgICAgICAgd2lkdGg6IDgzJTtcclxuICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi50YWItcGFuZWx7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLnJldmlldy1jb3VudC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAxMXB4IDhweDtcclxufVxyXG4gIC5yZXZpZXdMaW5re1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweCA1cHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiM5NjliYTE7XHJcbiAgICB9XHJcbiAgICAucmV2aWV3X21haW57XHJcbiAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIC5yZXZpZXd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjZDhkOGQ4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggOHB4IDBweDtcclxuICAgICAgICAgIC5yZXZpZXctaW1hZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAxMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLnBpY3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGljVGV4dHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA5NywgNzYpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHggNXB4IDVweDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXZpZXctdGV4dHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7IFxyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcclxuICAgICAgICAgICAudGV4dF9yZXZpZXd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAubmFtZV90ZXh0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMHB4IDBweCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJldmlldy1yYXRpbmd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4IDBweCAycHg7IFxyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0OyA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NjliYTE7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHggMTBweCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3Rhcl9yYXRpbmdfcmV2aWV3e1xyXG4gICAgICAgIGNvbG9yOiM5NjliYTE7IFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5zdGFyX3JhdGluZ19jb2xvcl9yZXZpZXd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiNmZWNlM2E7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH0gIFxyXG4gICAgLmNvbW1lbnRMaW5re1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogIzk2OWJhMTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/review-all/review-all.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/review-all/review-all.page.ts ***!
  \*****************************************************/
/*! exports provided: ReviewAllPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAllPage", function() { return ReviewAllPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ReviewAllPage = /** @class */ (function () {
    function ReviewAllPage(http, toastController, loadingController, router, commonService) {
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.commonService = commonService;
        this.l_reviewList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
    }
    ReviewAllPage.prototype.ngOnInit = function () { };
    ReviewAllPage.prototype.ionViewWillEnter = function () {
        this.getShopFeedBack();
        this.l_shopName = localStorage.getItem('ShopName');
    };
    ReviewAllPage.prototype.getShopFeedBack = function () {
        var options = {};
        var control = this;
        options.title = 'Get - Get FeedBack!!!';
        options.apiURL = this.env.shopApi.getShopFeedBack + localStorage.getItem("shopID");
        options.catchErrorText = 'ReviewController: error => getShopFeedBack()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_reviewList = data.Result;
                control.l_totalreview = data.Result[0].TotalRatingAndReviews;
            }
        };
        this.commonService.httpPost(options);
    };
    ReviewAllPage.prototype.goBack = function () {
        this.router.navigate(['shop_information']);
    };
    ReviewAllPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-all',
            template: __webpack_require__(/*! ./review-all.page.html */ "./src/app/pages/review-all/review-all.page.html"),
            styles: [__webpack_require__(/*! ./review-all.page.scss */ "./src/app/pages/review-all/review-all.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], ReviewAllPage);
    return ReviewAllPage;
}());



/***/ })

}]);
//# sourceMappingURL=review-all-review-all-module.js.map