(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~favorites-favorites-module~tabs-tabs-module"],{

/***/ "./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <div class=\"main\" (click)=\"deleteAllFavouriteShops()\">\n    <ion-icon name=\"ios-trash\" class=\"delete-icon\">\n        </ion-icon>\n        <ion-label class=\"delete-text\">\n            &nbsp;&nbsp;Delete All\n        </ion-label>\n    </div>\n    <!-- <ion-icon name=\"ios-trash\" class=\"delete-icon\"></ion-icon>\n    <h3 (click)=\" deleteAllFavouriteShops()\">Delete All</h3> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: auto;\n  float: left; }\n  .main .delete-icon {\n    float: left;\n    font-size: 26px;\n    width: 13%; }\n  .main .delete-text {\n    font-weight: bold;\n    float: left;\n    margin: 5px 0px 0px 0px;\n    width: 87%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9kZWxldGUtYWxsLWZhdm91cml0ZS1wb3BvdmVyL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xccG9wb3ZlclxcZGVsZXRlLWFsbC1mYXZvdXJpdGUtcG9wb3ZlclxcZGVsZXRlLWFsbC1mYXZvdXJpdGUtcG9wb3Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVcsRUFBQTtFQUhmO0lBS1EsV0FBVTtJQUNWLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFQbEI7SUFVUSxpQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3BvdmVyL2RlbGV0ZS1hbGwtZmF2b3VyaXRlLXBvcG92ZXIvZGVsZXRlLWFsbC1mYXZvdXJpdGUtcG9wb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC5kZWxldGUtaWNvbntcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICB3aWR0aDogMTMlO1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZS10ZXh0e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDg3JTsgIFxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeleteAllFavouritePopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllFavouritePopoverPage", function() { return DeleteAllFavouritePopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");







var DeleteAllFavouritePopoverPage = /** @class */ (function () {
    function DeleteAllFavouritePopoverPage(http, toastCtrl, navParams, ToastCtrl, modal, router, popoverController, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.popoverController = popoverController;
        this.commonService = commonService;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    DeleteAllFavouritePopoverPage.prototype.ngOnInit = function () {
    };
    DeleteAllFavouritePopoverPage.prototype.deleteAllFavouriteShops = function () {
        var DeteleAllFavourite = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        };
        var options = {};
        var control = this;
        options.title = 'deleteAllFavouriteShops';
        options.apiURL = this.env.shopApi.deleteAllFavouriteShop;
        options.catchErrorText = 'UserController: error => deleteAllFavouriteShops()';
        options.methodType = 'POST';
        options.paramData = DeteleAllFavourite;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                var optionMsg = {};
                optionMsg.message = 'Delete All from wishList';
                control.commonService.msgToast(optionMsg);
                control.popoverController.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    DeleteAllFavouritePopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-all-favourite-popover',
            template: __webpack_require__(/*! ./delete-all-favourite-popover.page.html */ "./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.html"),
            styles: [__webpack_require__(/*! ./delete-all-favourite-popover.page.scss */ "./src/app/pages/popover/delete-all-favourite-popover/delete-all-favourite-popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], DeleteAllFavouritePopoverPage);
    return DeleteAllFavouritePopoverPage;
}());



/***/ }),

/***/ "./src/app/pages/popover/favourite-popover/favourite-popover.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/popover/favourite-popover/favourite-popover.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"main\" (click)=\"favourite(l_shopId)\">\n    <ion-icon name=\"ios-trash\" class=\"delete-icon\"></ion-icon>\n    <ion-label class=\"delete-text\">\n      &nbsp;&nbsp;Delete\n    </ion-label>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/favourite-popover/favourite-popover.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/popover/favourite-popover/favourite-popover.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: auto;\n  float: left; }\n  .main .delete-icon {\n    float: left;\n    font-size: 26px;\n    width: 13%; }\n  .main .delete-text {\n    font-weight: bold;\n    float: left;\n    margin: 5px 0px 0px 0px;\n    border-bottom: 1px solid #bbb;\n    width: 87%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9mYXZvdXJpdGUtcG9wb3Zlci9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXHBvcG92ZXJcXGZhdm91cml0ZS1wb3BvdmVyXFxmYXZvdXJpdGUtcG9wb3Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVcsRUFBQTtFQUhmO0lBS1EsV0FBVTtJQUNWLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFQbEI7SUFVUSxpQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qiw2QkFBNEI7SUFDNUIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wb3Zlci9mYXZvdXJpdGUtcG9wb3Zlci9mYXZvdXJpdGUtcG9wb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC5kZWxldGUtaWNvbntcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICB3aWR0aDogMTMlO1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZS10ZXh0e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2JiYjtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/popover/favourite-popover/favourite-popover.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/popover/favourite-popover/favourite-popover.page.ts ***!
  \***************************************************************************/
/*! exports provided: FavouritePopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePopoverPage", function() { return FavouritePopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var FavouritePopoverPage = /** @class */ (function () {
    function FavouritePopoverPage(popover, navParams, http, actionSheetController, toastCtrl, ToastCtrl, commonService) {
        this.popover = popover;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetController = actionSheetController;
        this.toastCtrl = toastCtrl;
        this.ToastCtrl = ToastCtrl;
        this.commonService = commonService;
        this.l_shopId = null;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
    }
    FavouritePopoverPage.prototype.ngOnInit = function () {
        this.l_shopId = this.navParams.get('Shop_ID');
    };
    FavouritePopoverPage.prototype.favourite = function (shop_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Are you sure you want to delete.",
                            buttons: [{
                                    text: 'Yes',
                                    handler: function () {
                                        _this.removeFavourite(shop_id);
                                    }
                                },
                                {
                                    text: 'No',
                                    handler: function () {
                                        _this.popover.dismiss();
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
    FavouritePopoverPage.prototype.removeFavourite = function (shop_id) {
        var favouriteheart = {
            ShopIDList: [{ ShopID: shop_id }],
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
                localStorage.setItem('isFavDelete', 'true');
                control.popover.dismiss();
                return;
            }
        };
        this.commonService.httpPost(options);
    };
    FavouritePopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favourite-popover',
            template: __webpack_require__(/*! ./favourite-popover.page.html */ "./src/app/pages/popover/favourite-popover/favourite-popover.page.html"),
            styles: [__webpack_require__(/*! ./favourite-popover.page.scss */ "./src/app/pages/popover/favourite-popover/favourite-popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], FavouritePopoverPage);
    return FavouritePopoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~favorites-favorites-module~tabs-tabs-module.js.map