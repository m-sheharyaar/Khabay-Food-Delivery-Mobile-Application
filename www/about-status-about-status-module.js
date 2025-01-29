(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-status-about-status-module"],{

/***/ "./src/app/pages/about-status/about-status.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-status/about-status.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutStatusPageModule", function() { return AboutStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-status.page */ "./src/app/pages/about-status/about-status.page.ts");







var routes = [
    {
        path: '',
        component: _about_status_page__WEBPACK_IMPORTED_MODULE_6__["AboutStatusPage"]
    }
];
var AboutStatusPageModule = /** @class */ (function () {
    function AboutStatusPageModule() {
    }
    AboutStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_status_page__WEBPACK_IMPORTED_MODULE_6__["AboutStatusPage"]]
        })
    ], AboutStatusPageModule);
    return AboutStatusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about-status/about-status.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-status/about-status.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\">\n            <ion-icon name=\"ios-arrow-back\" (click)=\"back()\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            About\n        </div>\n    </div>\n    <div class=\"notify\" (click)=\"openPopover($event)\">\n        <ion-icon class=\"notify-icon\" name=\"ios-more\" md=\"md-more\"></ion-icon>\n    </div>\n</div>\n<ion-content>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <h4><span>Currently</span> set to</h4>\n            <div class=\"name\">\n                <div class=\"name-text\">\n                    <span>{{l_AboutStatus}}</span>\n                </div>\n                <ion-icon class=\"name-edit\" ios=\"ios-create\" md=\"md-create\" (click)=\"openModal(l_UserStatusAboutID)\">\n                </ion-icon>\n            </div>\n        </ion-card>\n        <ion-card class=\"cardMainLinks\">\n            <h4><span>Select</span> your About</h4>\n            <div class=\"name\" *ngFor=\"let row of l_AboutList\">\n                <div class=\"name-text\" (click)=\"select(row.Description,row.UserAboutStatusID)\">\n                    <span>{{row.Description}}</span>\n                </div>\n                <ion-icon name=\"ios-trash\" class=\"name-edit\"\n                    (click)=\"openPopover1($event,row.UserAboutStatusID,row.IsActive)\"></ion-icon>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/about-status/about-status.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-status/about-status.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 84%;\n    height: 40px;\n    margin: 15px 0px 2px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 51%;\n      height: 25px;\n      margin: 0px 0px 0px 70px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.head-main .notify {\n    width: 8%;\n    height: 10%;\n    float: right;\n    margin: 15px 9px 0px 0px;\n    color: white; }\n\n.head-main .notify .notify-icon {\n      font-size: 22px;\n      float: right;\n      position: relative; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 17px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8;\n    margin-bottom: 18px; }\n\n.mainLinks h4 {\n    color: #2e3842;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.mainLinks h4 span {\n      color: #fb630f; }\n\n.mainLinks .name {\n    width: 100%;\n    height: 50px;\n    float: left;\n    background-color: #fff;\n    margin: 2px 0px 0px 0px;\n    border-bottom: 0.7px solid #969ba1; }\n\n.mainLinks .name .name-text {\n      margin: 15px 0px 0px 1px;\n      width: 70%;\n      float: left;\n      color: #2e3842;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks .name .name-edit {\n      width: 12%;\n      height: 25px;\n      float: right;\n      padding-top: 15px;\n      color: #fb630f; }\n\n.title_text {\n  height: 20px;\n  width: 80%;\n  float: left; }\n\n.more {\n  height: 20px;\n  width: 7%;\n  margin: 0px 3px 0px 0px;\n  float: right;\n  font-size: 20px;\n  font-weight: bold; }\n\n.main {\n  background-color: lavender;\n  height: 100%; }\n\n.about {\n  width: 100%;\n  height: auto;\n  float: left;\n  background-color: #fff;\n  margin: 5px 0px 0px 0px; }\n\n.about h4 {\n    margin: 15px 0px 0px 15px; }\n\n.name {\n  width: 100%;\n  height: auto;\n  float: left;\n  background-color: #fff;\n  margin: 2px 0px 0px 0px; }\n\n.name .name-text {\n    margin: 15px 0px 0px 15px;\n    width: 70%;\n    float: left; }\n\n.name .name-edit {\n    width: 15%;\n    height: 25px;\n    float: right;\n    padding-top: 15px; }\n\n.about-list {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 5px 0px 0px 0px;\n  background-color: #fff; }\n\n.about-list h4 {\n    margin: 15px 0px 0px 15px; }\n\n.about-list1 {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 15px 0px 0px 0px;\n  background-color: #fff;\n  border-bottom: 1px solid #bbb; }\n\n.about-list1 .description {\n    float: left;\n    width: 60%;\n    margin: 0px 0px 0px 15px; }\n\n.about-list1 .delete_icon {\n    float: right;\n    font-size: 25px;\n    width: 10%; }\n\n.card_more {\n  height: 20px;\n  width: 7%;\n  margin: 0px 3px 0px 0px;\n  float: right;\n  font-size: 20px;\n  font-weight: bold; }\n\n.aboutblack {\n  color: black; }\n\n.aboutcolor {\n  color: lightseagreen; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtc3RhdHVzL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcYWJvdXQtc3RhdHVzXFxhYm91dC1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CWSxVQUFVO01BQ1YsWUFBWTtNQUNaLHdCQUF3QjtNQUMzQixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQTlCN0I7SUFrQ1EsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVcsRUFBQTs7QUF0Q25CO01Bd0NZLGVBQWU7TUFDZixZQUFZO01BQ1osa0JBQWtCLEVBQUE7O0FBSTlCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0IsRUFBQTs7QUFINUI7SUFLUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwyQkFBNEI7SUFDNUIsbUJBQW1CLEVBQUE7O0FBWjNCO0lBZVEsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CLEVBQUE7O0FBbEI1QjtNQW9CWSxjQUFjLEVBQUE7O0FBcEIxQjtJQXdCUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGtDQUFpQyxFQUFBOztBQTdCekM7TUErQlksd0JBQXVCO01BQ3ZCLFVBQVM7TUFDVCxXQUFXO01BQ1gsY0FBYztNQUNkLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7O0FBckNoQztNQXdDWSxVQUFTO01BQ1QsWUFBVztNQUNYLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsY0FBYyxFQUFBOztBQU0xQjtFQUNJLFlBQVk7RUFDWixVQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWTtFQUNaLFNBQVE7RUFDUix1QkFBdUI7RUFDdkIsWUFBVztFQUNYLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSwwQkFBMEI7RUFBRSxZQUFZLEVBQUE7O0FBRTVDO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQUwzQjtJQVFRLHlCQUF3QixFQUFBOztBQUdoQztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFxQjtFQUNyQix1QkFBdUIsRUFBQTs7QUFMM0I7SUFPUSx5QkFBd0I7SUFDeEIsVUFBUztJQUNULFdBQVcsRUFBQTs7QUFUbkI7SUFZUSxVQUFTO0lBQ1QsWUFBVztJQUNYLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUFLekI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXFCLEVBQUE7O0FBTHpCO0lBUVEseUJBQXdCLEVBQUE7O0FBR2hDO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQiw2QkFBNkIsRUFBQTs7QUFOakM7SUFRUSxXQUFVO0lBQ1YsVUFBVTtJQUNWLHdCQUF3QixFQUFBOztBQVZoQztJQWFRLFlBQVc7SUFDWCxlQUFjO0lBQ2QsVUFBVSxFQUFBOztBQUdsQjtFQUNJLFlBQVk7RUFDWixTQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLFlBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBVyxFQUFBOztBQUVmO0VBQ0Msb0JBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC1zdGF0dXMvYWJvdXQtc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1OyAgXHJcbn1cclxuLmhlYWQtbWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmI2MzBmO1xyXG4gICAgLm1haW5fbWVudXtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggMnB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dF9sb2dve1xyXG4gICAgICAgICAgICB3aWR0aDogNTElO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggNzBweDtcclxuICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vdGlmeXsgXHJcbiAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW46IDE1cHggOXB4IDBweCAwcHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgLm5vdGlmeS1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWFpbkxpbmtze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDE3cHggMHB4IDBweCAwcHg7XHJcbiAgICAuY2FyZE1haW5MaW5rc3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHggMjJweCAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7ICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmI2MzBmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYW1le1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTowLjdweCBzb2xpZCAjOTY5YmExO1xyXG4gICAgICAgIC5uYW1lLXRleHR7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxNXB4IDBweCAwcHggMXB4OyBcclxuICAgICAgICAgICAgd2lkdGg6NzAlOyBcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmUzODQyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnOyBcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZS1lZGl0e1xyXG4gICAgICAgICAgICB3aWR0aDoxMiU7XHJcbiAgICAgICAgICAgIGhlaWdodDoyNXB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0gIFxyXG59XHJcbi8vb2xkXHJcbi50aXRsZV90ZXh0e1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7O1xyXG59XHJcbi5tb3Jle1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6NyU7XHJcbiAgICBtYXJnaW46IDBweCAzcHggMHB4IDBweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0gXHJcbi5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7IGhlaWdodDogMTAwJTtcclxufVxyXG4uYWJvdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICBcclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbjoxNXB4IDBweCAwcHggMTVweDtcclxuICAgIH1cclxufVxyXG4ubmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBtYXJnaW46IDJweCAwcHggMHB4IDBweDtcclxuICAgIC5uYW1lLXRleHR7XHJcbiAgICAgICAgbWFyZ2luOjE1cHggMHB4IDBweCAxNXB4OyBcclxuICAgICAgICB3aWR0aDo3MCU7IFxyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLm5hbWUtZWRpdHtcclxuICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgaGVpZ2h0OjI1cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgLy8gbWFyZ2luOiAxNXB4IDBweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuXHJcbn0gICAgXHJcbi5hYm91dC1saXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgXHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW46MTVweCAwcHggMHB4IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuLmFib3V0LWxpc3Qxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjoxNXB4IDBweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmI7XHJcbiAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTVweDtcclxuICAgIH1cclxuICAgIC5kZWxldGVfaWNvbntcclxuICAgICAgICBmbG9hdDpyaWdodDsgXHJcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgIH1cclxufVxyXG4uY2FyZF9tb3Jle1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6NyU7XHJcbiAgICBtYXJnaW46IDBweCAzcHggMHB4IDBweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFib3V0YmxhY2t7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4uYWJvdXRjb2xvcntcclxuIGNvbG9yOmxpZ2h0c2VhZ3JlZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/about-status/about-status.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/about-status/about-status.page.ts ***!
  \*********************************************************/
/*! exports provided: AboutStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutStatusPage", function() { return AboutStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_about_status_update_modal_about_status_update_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/about-status-update-modal/about-status-update-modal.page */ "./src/app/pages/modal/about-status-update-modal/about-status-update-modal.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _popover_delete_status_popover_delete_status_popover_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/delete-status-popover/delete-status-popover.page */ "./src/app/pages/popover/delete-status-popover/delete-status-popover.page.ts");
/* harmony import */ var _popover_single_about_status_popover_single_about_status_popover_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popover/single-about-status-popover/single-about-status-popover.page */ "./src/app/pages/popover/single-about-status-popover/single-about-status-popover.page.ts");











var AboutStatusPage = /** @class */ (function () {
    function AboutStatusPage(http, toastCtrl, ToastCtrl, modal, router, popoverController, events, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.popoverController = popoverController;
        this.events = events;
        this.commonService = commonService;
        this.l_AboutList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_6__["Env"]();
        this.l_UserStatusAboutID = localStorage.getItem('userAboutStatusID');
        this.l_AboutStatus = localStorage.getItem('userAboutStatus');
    }
    AboutStatusPage.prototype.ngOnInit = function () { };
    AboutStatusPage.prototype.back = function () {
        this.router.navigateByUrl('/user-profile');
    };
    AboutStatusPage.prototype.ionViewWillEnter = function () {
        this.getAboutlist();
    };
    AboutStatusPage.prototype.getAboutlist = function (infiniteScroll, refresher) {
        var options = {};
        var control = this;
        options.title = 'Get - Get about!!!';
        options.apiURL = this.env.userApi.getUserAboutStatusURL + localStorage.getItem('userID'); //UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_AboutList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_AboutList);
            }
        };
        this.commonService.httpPost(options);
    };
    AboutStatusPage.prototype.doRefresh = function (refresher) {
        this.getAboutlist("", refresher);
    };
    AboutStatusPage.prototype.select = function (description, stustId) {
        var updateabout = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            UserStatusAboutID: stustId,
            Description: description,
        };
        var options = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.insertUpdateUserAboutStatusURL;
        options.catchErrorText = 'UserController: error => addUser()';
        options.methodType = 'POST';
        options.paramData = updateabout;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_AboutStatus = description;
                localStorage.setItem('userAboutStatus', description);
                control.events.publish('updateStatus');
                for (var i = 0; i < control.l_AboutList.length; i++) {
                    if (control.l_AboutList[i].UserAboutStatusID == stustId) {
                        control.l_AboutList[i].IsActive = 1;
                    }
                    else {
                        control.l_AboutList[i].IsActive = 0;
                    }
                }
            }
        };
        this.commonService.httpPost(options);
    };
    AboutStatusPage.prototype.doInfinite = function (infiniteScroll) {
        this.getAboutlist(infiniteScroll);
    };
    AboutStatusPage.prototype.openModal = function (userAboutStatusID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userStatusAboutId, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userStatusAboutId = userAboutStatusID;
                        return [4 /*yield*/, this.modal.create({
                                component: _modal_about_status_update_modal_about_status_update_modal_page__WEBPACK_IMPORTED_MODULE_3__["AboutStatusUpdateModalPage"],
                                componentProps: {
                                    aboutstat: this.l_AboutStatus,
                                    aboutsatusId: userStatusAboutId,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.l_UserStatusAboutID = localStorage.getItem('userAboutStatusID');
                            _this.l_AboutStatus = localStorage.getItem('userAboutStatus');
                            _this.getAboutlist();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AboutStatusPage.prototype.openPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var control, popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        control = this;
                        return [4 /*yield*/, this.popoverController.create({
                                component: _popover_delete_status_popover_delete_status_popover_page__WEBPACK_IMPORTED_MODULE_8__["DeleteStatusPopoverPage"],
                                event: ev,
                                translucent: true
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (data) {
                            _this.getAboutlist();
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AboutStatusPage.prototype.openPopover1 = function (ev, aboutstatusID, isActive) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var optionMsg, aboutID, control, popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isActive == 1) {
                            optionMsg = {};
                            optionMsg.message = 'This Status is marked active.';
                            this.commonService.msgToast(optionMsg);
                            return [2 /*return*/];
                        }
                        aboutID = aboutstatusID;
                        control = this;
                        return [4 /*yield*/, this.popoverController.create({
                                component: _popover_single_about_status_popover_single_about_status_popover_page__WEBPACK_IMPORTED_MODULE_9__["SingleAboutStatusPopoverPage"],
                                componentProps: {
                                    aboutsatusId: aboutID,
                                },
                                event: ev,
                                translucent: true
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (data) {
                            _this.getAboutlist();
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AboutStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-status',
            template: __webpack_require__(/*! ./about-status.page.html */ "./src/app/pages/about-status/about-status.page.html"),
            styles: [__webpack_require__(/*! ./about-status.page.scss */ "./src/app/pages/about-status/about-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_7__["Commonservices"]])
    ], AboutStatusPage);
    return AboutStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-status-about-status-module.js.map