(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-introduction-introduction-module"],{

/***/ "./src/app/pages/introduction/introduction.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.module.ts ***!
  \***********************************************************/
/*! exports provided: IntroductionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPageModule", function() { return IntroductionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _introduction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introduction.page */ "./src/app/pages/introduction/introduction.page.ts");







var routes = [
    {
        path: '',
        component: _introduction_page__WEBPACK_IMPORTED_MODULE_6__["IntroductionPage"]
    }
];
var IntroductionPageModule = /** @class */ (function () {
    function IntroductionPageModule() {
    }
    IntroductionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_introduction_page__WEBPACK_IMPORTED_MODULE_6__["IntroductionPage"]]
        })
    ], IntroductionPageModule);
    return IntroductionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/introduction/introduction.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"cont\">\n    <ion-slides class=\"slide\" pager=\"true\" #mySlider (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" (ionSlideReachEnd)=\"slidesDidStop(mySlider)\" (ionSlideTouchEnd)=\"slidesDidLoad(mySlider)\" [options]=\"slideOpts\">\n        <ion-slide>\n            <div class=\"maincard\">\n                <div class=\"body\">\n                    <div class=\"card_pic\">\n                        <img src=\"../../assets/img/slider Images/introSlider1.jpg\"  />\n                    </div>\n                    <div class=\"card_price\" (click)=\"next()\">\n                        <span class=\"disount\"> Skip </span>\n                    </div>\n                </div>\n                <div class=\"sub-body\">\n                </div>\n                <div class=\"foot-body\">\n                    <div class=\"maintext\">Discover place near you</div>\n                    <div class=\"smalltext\">\n                        <h6>Lorem ipsum is simply dummy text of the printing and tyesetting industry. Lorem Ipsum has\n                            been the industry's.</h6>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <div class=\"maincard\">\n                <div class=\"body\">\n                    <div class=\"card_pic\">\n                        <img src=\"../../assets/img/slider Images/introSlider2.jpg\"  />\n                    </div>\n                    <div class=\"card_price\" (click)=\"next()\">\n                        <span class=\"disount\"> Skip </span>\n                    </div>\n                </div>\n                <div class=\"sub-body\">\n                </div>\n                <div class=\"foot-body\">\n                    <div class=\"maintext\">Search for place easily</div>\n                    <div class=\"smalltext\">\n                        <h6>Lorem ipsum is simply dummy text of the printing and tyesetting industry. Lorem Ipsum has\n                            been the industry's. Lorem Ipsum has been the industry's standard dummy text ever since the\n                            1500s.</h6>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <div class=\"maincard\">\n                <div class=\"body\">\n                    <div class=\"card_pic\">\n                        <img src=\"../../assets/img/slider Images/introSlider3.jpg\"  />\n                    </div>\n                    <div class=\"card_price\" (click)=\"next()\">\n                        <span class=\"disount\"> Skip </span>\n                    </div>\n                </div>\n                <div class=\"sub-body\">\n                </div>\n                <div class=\"foot-body\">\n                    <div class=\"maintextslide3\">Order from the best local resturants</div>\n                    <div class=\"smalltext\">\n                        <h6>Lorem ipsum is simply dummy text of the printing and tyesetting industry. Lorem Ipsum...\n                        </h6>\n                    </div>\n                    <div class=\"footer\">\n                        <div class=\"btn\">\n                            <ion-button class=\"bton\" fill=\"clear\" color=\"light\" (click)=\"next()\">\n                                NEXT\n                            </ion-button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/introduction/introduction.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  --background: #f5f5f5; }\n\n.slide {\n  width: 100%;\n  height: 100%; }\n\nion-slides {\n  --bullet-background: white !important;\n  --bullet-background-active: white !important; }\n\n.maincard {\n  width: 100%;\n  height: 100%;\n  margin: 0px 0px 0px 0px; }\n\n.card_pic {\n  width: 100%;\n  height: 100%;\n  float: left;\n  margin: 0px;\n  position: relative;\n  z-index: 90;\n  padding: 0px; }\n\n.card_price {\n  width: 100%;\n  margin: 7px 0px 0px 0px;\n  float: left;\n  padding: 0px;\n  position: absolute;\n  z-index: 100; }\n\n.card_price .disount {\n    height: 20px;\n    float: right;\n    color: #fff;\n    font-size: 14px;\n    text-align: center;\n    font-family: 'Poppins';\n    margin: 8px 16px 0px 0px;\n    padding: 5px 8px 5px 8px;\n    position: -webkit-sticky;\n    position: sticky; }\n\n.body {\n  width: 100%;\n  height: 100%;\n  float: left;\n  position: relative; }\n\n.sub-body {\n  width: 100%;\n  height: 100%;\n  background-color: #2e3842;\n  opacity: 0.8;\n  text-align: center;\n  position: absolute;\n  z-index: 90;\n  float: left;\n  bottom: 0; }\n\n.foot-body {\n  width: 100%;\n  height: 80%;\n  position: absolute;\n  z-index: 90;\n  float: left; }\n\n.foot-body .maintext {\n    width: 50%;\n    height: auto;\n    text-align: left;\n    color: white;\n    font-size: 30px;\n    margin: 90px 0px 2px 50px;\n    opacity: 1;\n    font-weight: bolder;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal;\n    float: left;\n    line-height: 34px; }\n\n.foot-body .maintextslide3 {\n    width: 65%;\n    height: auto;\n    text-align: left;\n    color: white;\n    font-size: 30px;\n    margin: 90px 0px 2px 50px;\n    opacity: 1;\n    font-weight: bolder;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal;\n    float: left;\n    line-height: 34px; }\n\n.foot-body .smalltext {\n    width: 49%;\n    text-align: left;\n    font-weight: bold;\n    height: auto;\n    color: white;\n    margin: 20px 0px 0px 50px;\n    opacity: 1;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal;\n    float: left; }\n\n.foot-body .smalltext h6 {\n      font-size: 10px;\n      margin: 0px 0px 0px 2px;\n      padding: 0px 5px 0px 0px;\n      float: left;\n      line-height: 1.8; }\n\n.foot-body .footer {\n    width: 100%;\n    height: 17%;\n    float: left;\n    bottom: 0px;\n    position: fixed; }\n\n.foot-body .footer .btn {\n      width: 80%;\n      height: 37px;\n      margin: 0 auto;\n      padding: 0px 0px 0px 0px;\n      border-radius: 9px;\n      background-color: #fb630f;\n      text-align: center;\n      font-size: 25px; }\n\n.foot-body .footer .btn .bton {\n        width: 100%;\n        height: 37px;\n        margin-top: -4px;\n        padding: 0px;\n        text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm9kdWN0aW9uL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xcaW50cm9kdWN0aW9uXFxpbnRyb2R1Y3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUVmO0VBQ0kscUNBQW9CO0VBQ3BCLDRDQUEyQixFQUFBOztBQUUvQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBTmhCO0lBUVksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsd0JBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qix3QkFBZ0I7SUFBaEIsZ0JBQWdCLEVBQUE7O0FBRzVCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDakIsV0FBVztFQUNYLFdBQVU7RUFDVixTQUFTLEVBQUE7O0FBRWQ7RUFDSSxXQUFVO0VBQ1YsV0FBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVSxFQUFBOztBQUxkO0lBT1EsVUFBVTtJQUNWLFlBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixzQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7O0FBbkJ6QjtJQXNCUSxVQUFVO0lBQ1YsWUFBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHNCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTs7QUFsQ3pCO0lBcUNRLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVc7SUFDVixZQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFVBQVU7SUFDWCxzQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXLEVBQUE7O0FBL0NuQjtNQWlEWSxlQUFlO01BQ2YsdUJBQXdCO01BQ3hCLHdCQUF3QjtNQUN4QixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7O0FBckQ1QjtJQXlEUSxXQUFXO0lBQ1gsV0FBVztJQUVYLFdBQVc7SUFDWCxXQUFXO0lBQ3ZCLGVBQWUsRUFBQTs7QUE5RFg7TUFnRVksVUFBVTtNQUNWLFlBQVk7TUFDWixjQUFjO01BQ2Qsd0JBQXdCO01BQ3hCLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTs7QUF2RTNCO1FBeUVnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5zbGlkZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0gXHJcbi5tYWluY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuICAgIC5jYXJkX3BpY3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTA7XHJcbiAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZF9wcmljZXtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogN3B4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDsgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgLmRpc291bnR7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjo4cHggMTZweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweCA1cHggOHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIC5ib2R5e1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWItYm9keXtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTM4NDI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgIHotaW5kZXg6IDkwO1xyXG4gICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC5mb290LWJvZHl7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDo4MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTA7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIC5tYWludGV4dHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA5MHB4IDBweCAycHggNTBweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbnRleHRzbGlkZTN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOTBweCAwcHggMnB4IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsdGV4dHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHggNTBweDtcclxuICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAgMHB4IDBweCAwcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAuZm9vdGVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3JTtcclxuICAgICAgICAgICAgICAgIC8vbWFyZ2luOiAyMzVweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYzMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAuYnRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/introduction/introduction.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.page.ts ***!
  \*********************************************************/
/*! exports provided: IntroductionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPage", function() { return IntroductionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var IntroductionPage = /** @class */ (function () {
    function IntroductionPage(router) {
        this.router = router;
        this.slideOpts = {
            //initialSlide: 1,
            speed: 800,
            autoplay: {
                delay: 5000
            }
        };
    }
    IntroductionPage.prototype.ngOnInit = function () {
    };
    IntroductionPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    IntroductionPage.prototype.slidesDidStop = function (slides) {
        slides.stopAutoplay();
    };
    IntroductionPage.prototype.next = function () {
        this.router.navigateByUrl('/signup_welcome');
    };
    IntroductionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.page.html */ "./src/app/pages/introduction/introduction.page.html"),
            styles: [__webpack_require__(/*! ./introduction.page.scss */ "./src/app/pages/introduction/introduction.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IntroductionPage);
    return IntroductionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-introduction-introduction-module.js.map