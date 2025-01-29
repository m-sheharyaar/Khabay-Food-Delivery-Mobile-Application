(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./src/app/pages/user-profile/user-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/pages/user-profile/user-profile.page.ts");







var routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-main\">\n    <div class=\"main_menu\">\n        <div class=\"menu\" slot=\"start\" (click)=\"back()\">\n            <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </div>\n        <div class=\"text_logo\">\n            Profile\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"pic\">\n        <ion-avatar class=\"pic-circle\">\n            <div class=\"text-circle\" *ngIf=\"l_oldImage === null\">\n                {{l_textForPic}}\n            </div>\n            <ion-img *ngIf=\"l_oldImage != null\" [src]=\"ImageURL\"></ion-img>\n        </ion-avatar>\n    </div>\n    <div class=\"mainLinks\">\n        <ion-card class=\"cardMainLinks\">\n            <h4><span>Profile</span> & About</h4>\n            <div class=\"name\">\n                <div class=\"name-text\">\n                    <span>{{l_userName}}</span>\n                </div>\n                <ion-icon class=\"name-edit\" ios=\"ios-create\" md=\"md-create\" (click)=\"openModal()\"></ion-icon>\n            </div>\n            <div class=\"name\">\n                <div class=\"name-text\">\n                    <span>{{l_userStatus}}</span>\n                </div>\n                <ion-icon class=\"name-edit\" ios=\"ios-create\" md=\"md-create\" (click)=\"aboutStatus()\"></ion-icon>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5; }\n\n.head-main {\n  width: 100%;\n  float: left;\n  background: #fb630f; }\n\n.head-main .main_menu {\n    width: 97%;\n    height: 30px;\n    margin: 15px 0px 6px 12px;\n    color: white;\n    float: left; }\n\n.head-main .main_menu .menu {\n      width: 10%;\n      height: 25px;\n      color: white;\n      padding: 0px 6px 6px 6px;\n      font-size: 22px;\n      float: left; }\n\n.head-main .main_menu .text_logo {\n      width: 83%;\n      height: 25px;\n      margin: 0px 0px 0px 0px;\n      padding: 0px;\n      float: left;\n      font-size: 17px;\n      font-weight: bolder;\n      text-align: center;\n      color: white;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.pic {\n  height: 200px;\n  width: 100%;\n  float: left;\n  margin: 0px; }\n\n.pic .pic-circle {\n    height: 150px;\n    width: 150px;\n    margin: 25px 0px 0px 100px;\n    position: relative;\n    text-align: center;\n    color: #fff;\n    background-color: #4c614c;\n    box-shadow: 0 0 10px #d8d8d8; }\n\n.pic .pic-circle .text-circle {\n      margin: auto;\n      width: 100%;\n      text-align: center;\n      font-size: 45px;\n      font-weight: bold;\n      padding: 50px 10px 10px 10px;\n      text-transform: capitalize; }\n\n.pic .pic-circle .change-pic {\n      position: absolute;\n      top: 75%;\n      width: 25%;\n      height: 25%;\n      font-size: 12px;\n      margin: 0px 0px 0px 100px;\n      border-radius: 100%;\n      text-align: center;\n      border: #b3b2b2 1px solid;\n      background-color: #c9c9c9; }\n\n.pic .pic-circle .change-pic .camera-icon {\n        font-size: 25px;\n        margin: 4px 0px 0px 1px; }\n\n.mainLinks {\n  width: 100%;\n  height: auto;\n  margin: 0px 0px 0px 0px; }\n\n.mainLinks .cardMainLinks {\n    width: 90%;\n    height: auto;\n    margin: 0px auto;\n    background-color: white;\n    border-radius: 15px;\n    padding: 0px 15px 22px 15px;\n    box-shadow: 0 0 5px #d8d8d8; }\n\n.mainLinks h4 {\n    color: #2e3842;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal; }\n\n.mainLinks h4 span {\n      color: #fb630f; }\n\n.mainLinks .name {\n    width: 100%;\n    height: 50px;\n    float: left;\n    background-color: #fff;\n    margin: 2px 0px 0px 0px;\n    border-bottom: 0.7px solid #969ba1; }\n\n.mainLinks .name .name-text {\n      margin: 15px 0px 0px 1px;\n      width: 70%;\n      float: left;\n      color: #2e3842;\n      font-family: 'Poppins';\n      font-style: normal;\n      font-variant: normal; }\n\n.mainLinks .name .name-edit {\n      width: 12%;\n      height: 25px;\n      float: right;\n      padding-top: 15px;\n      color: #fb630f; }\n\n.img {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1wcm9maWxlL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcdXNlci1wcm9maWxlXFx1c2VyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVU7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVG5CO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBaEJ2QjtNQW1CUyxVQUFVO01BQ1YsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQUkzQjtFQUNFLGFBQVk7RUFDWixXQUFVO0VBRVYsV0FBVztFQUVYLFdBQVUsRUFBQTs7QUFOWjtJQVFHLGFBQWE7SUFDYixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUFpQztJQUNqQyw0QkFBNEIsRUFBQTs7QUFmL0I7TUFpQk0sWUFBWTtNQUNYLFdBQVc7TUFDWixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQiw0QkFBMkI7TUFDM0IsMEJBQTBCLEVBQUE7O0FBdkJoQztNQTBCTSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFVBQVU7TUFDVixXQUFVO01BQ1YsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsa0JBQWlCO01BQ2pCLHlCQUFtQztNQUNuQyx5QkFBb0MsRUFBQTs7QUFuQzFDO1FBcUNVLGVBQWU7UUFDZix1QkFBc0IsRUFBQTs7QUFLbEM7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUgzQjtJQUtRLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDJCQUE0QixFQUFBOztBQVhwQztJQWNRLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBOztBQWpCNUI7TUFtQlksY0FBYyxFQUFBOztBQW5CMUI7SUF1QlEsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixrQ0FBaUMsRUFBQTs7QUE1QnpDO01BOEJZLHdCQUF1QjtNQUN2QixVQUFTO01BQ1QsV0FBVztNQUNYLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQXBDaEM7TUF1Q1ksVUFBUztNQUNULFlBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTs7QUFLMUI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7ICBcclxufVxyXG4uaGVhZC1tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmYjYzMGY7XHJcbiAgICAubWFpbl9tZW51e1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDBweCA2cHggMTJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNnB4IDZweCA2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0X2xvZ297XHJcbiAgICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnBpY3tcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuIC5waWMtY2lyY2xle1xyXG4gICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDEwMHB4O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA5NywgNzYpO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkOGQ4ZDg7XHJcbiAgICAgLnRleHQtY2lyY2xle1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOjUwcHggMTBweCAxMHB4IDEwcHg7IFxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBcclxuICAgICB9XHJcbiAgICAgLmNoYW5nZS1waWMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDc1JTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDoyNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBib3JkZXI6cmdiKDE3OSwgMTc4LCAxNzgpIDFweCBzb2xpZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbiAgICAgICAgLmNhbWVyYS1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjo0cHggMHB4IDBweCAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1haW5MaW5rc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAuY2FyZE1haW5MaW5rc3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHggMjJweCAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q4ZDhkOCA7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnOyBcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyAgICBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmFtZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MC43cHggc29saWQgIzk2OWJhMTtcclxuICAgICAgICAubmFtZS10ZXh0e1xyXG4gICAgICAgICAgICBtYXJnaW46MTVweCAwcHggMHB4IDFweDsgXHJcbiAgICAgICAgICAgIHdpZHRoOjcwJTsgXHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgXHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUtZWRpdHtcclxuICAgICAgICAgICAgd2lkdGg6MTIlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjVweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9ICBcclxufVxyXG4uaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _viewModel_user_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../viewModel/user-vm */ "./src/app/viewModel/user-vm.ts");
/* harmony import */ var _modal_user_profile_edit_user_profile_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/user-profile-edit/user-profile-edit.page */ "./src/app/pages/modal/user-profile-edit/user-profile-edit.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");











var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(http, toastCtrl, camera, transfer, ToastCtrl, modal, router, actionSheetController, ref, events, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.ref = ref;
        this.events = events;
        this.commonService = commonService;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_4__["Env"]();
        this.userVm = new _viewModel_user_vm__WEBPACK_IMPORTED_MODULE_6__["UserVM"]();
    }
    UserProfilePage.prototype.ngOnInit = function () {
        //localStorage.removeItem('userAboutStatusID');
        //localStorage.removeItem('userAboutStatus');
    };
    UserProfilePage.prototype.ionViewWillEnter = function () {
        this.l_textForPic = localStorage.getItem('TextForImage');
        this.ImageURL = null;
        this.getUser();
    };
    UserProfilePage.prototype.getUser = function () {
        var options = {};
        var control = this;
        options.title = 'Get - Get User!!!';
        options.apiURL = this.env.userApi.getUserURL + localStorage.getItem('userID');
        options.catchErrorText = 'UserController: error => GetUser()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_userid = data.Result[0].UserID;
                control.l_userName = data.Result[0].UserName;
                control.l_firstName = data.Result[0].FirstName;
                control.l_lastName = data.Result[0].LastName;
                control.l_countryCode = data.Result[0].CountryCode;
                control.l_phoneNumber = data.Result[0].PhoneNumber;
                control.l_userStatus = data.Result[0].UserStatus;
                control.l_userAboutStatusId = data.Result[0].UserAboutStatusID;
                control.l_oldImage = data.Result[0].ImageURL;
                if (control.l_oldImage == null) {
                    control.l_textForPic = localStorage.getItem('TextForImage');
                }
                else {
                    localStorage.setItem('userImageURL', control.l_oldImage);
                    control.ImageURL = control.env.imageURL + control.l_oldImage;
                }
                var getRealTimeImage = localStorage.getItem('RealTimeImage_' + localStorage.getItem("userID"));
                var uploadCheck = localStorage.getItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"));
                var updateCheck = localStorage.getItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"));
                if (getRealTimeImage != null && uploadCheck == 'true' && updateCheck == 'true') {
                    control.ImageURL = getRealTimeImage;
                }
                control.ref.detectChanges();
            }
        };
        this.commonService.httpPost(options);
    };
    UserProfilePage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _modal_user_profile_edit_user_profile_edit_page__WEBPACK_IMPORTED_MODULE_7__["UserProfileEditPage"],
                            componentProps: {
                                UserID: localStorage.getItem('userID'),
                                FirstName: this.l_firstName,
                                LastName: this.l_lastName,
                                CountryCode: this.l_countryCode,
                                UserName: this.l_userName,
                                PhoneNumber: this.l_phoneNumber,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getUser();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserProfilePage.prototype.aboutStatus = function () {
        localStorage.setItem('userAboutStatusID', this.l_userAboutStatusId);
        localStorage.setItem('userAboutStatus', this.l_userStatus);
        this.router.navigate(['aboutStatus']);
    };
    UserProfilePage.prototype.back = function () {
        this.router.navigate(['tabs/settings']);
    };
    ///////////////////////////User Image Upload//////////////////////////////////
    UserProfilePage.prototype.selectPhoto = function () {
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
                                    text: 'Remove Image',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.RemoveUserImage();
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
    UserProfilePage.prototype.takePicture = function (sourceType) {
        var control = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300
            // encodingType:this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imagePath) {
            control.ImageURL = 'data:image/jpeg;base64,' + imagePath;
            localStorage.setItem('RealTimeImage_' + localStorage.getItem('userID'), control.ImageURL);
            control.ref.detectChanges();
            control.uploadUserImage();
        });
    };
    UserProfilePage.prototype.uploadUserImage = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var userFileName = "User_" + localStorage.getItem("userID") + ".jpg";
        localStorage.setItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"), 'false');
        var options = {
            fileKey: "file",
            fileName: userFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };
        fileTransfer.upload(this.ImageURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.UserImage, options).then(function (res) {
            localStorage.setItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"), 'true');
            _this.l_userImage = _this.env.imgServerFolder.UserImage + "/" + userFileName;
            _this.editUser();
        }, function (err) {
            debugger;
        });
    };
    UserProfilePage.prototype.editUser = function () {
        localStorage.setItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"), 'false');
        var editusers = {
            UserID: localStorage.getItem('userID'),
            UserName: this.l_userName,
            FirstName: this.l_firstName,
            LastName: this.l_lastName,
            CountryCode: this.l_countryCode,
            PhoneNumber: this.l_phoneNumber,
            ImageURL: this.l_userImage,
        };
        var options = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.updateUserURL;
        options.catchErrorText = 'UserController: error => editUser()';
        options.methodType = 'POST';
        options.paramData = editusers;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                localStorage.setItem('userImageURL', control.l_userImage);
                control.events.publish('updateUserImage');
                localStorage.setItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"), 'true');
                control.ImageURL = control.env.imageURL + control.l_userImage;
                control.ref.detectChanges();
            }
        };
        this.commonService.httpPost(options);
    };
    UserProfilePage.prototype.RemoveUserImage = function () {
        var p_commonVm = {
            UserID: localStorage.getItem('userID')
        };
        var options = {};
        var control = this;
        options.title = 'edit User Image!!!';
        options.apiURL = this.env.commonApi.removeUserAndShopImage;
        options.catchErrorText = 'UserController: error => RemoveUserImage()';
        options.methodType = 'POST';
        options.paramData = p_commonVm;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                localStorage.setItem('userImageURL', null);
                control.events.publish('updateUserImage');
                localStorage.removeItem('RealTimeImage_' + localStorage.getItem('userID'));
                //control.ImageURL = "../../../assets/img/avatar.png";
                control.l_textForPic = localStorage.getItem('TextForImage');
                control.ref.detectChanges();
            }
        };
        this.commonService.httpPost(options);
    };
    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.page.html */ "./src/app/pages/user-profile/user-profile.page.html"),
            styles: [__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/pages/user-profile/user-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_5__["Commonservices"]])
    ], UserProfilePage);
    return UserProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map