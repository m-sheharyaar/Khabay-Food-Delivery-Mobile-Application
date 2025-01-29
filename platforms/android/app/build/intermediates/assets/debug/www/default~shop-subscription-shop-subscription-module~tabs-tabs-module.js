(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shop-subscription-shop-subscription-module~tabs-tabs-module"],{

/***/ "./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"main\" (click)=\"deleteAllSuscribeShops()\">\n  <ion-icon name=\"ios-trash\" class=\"delete-icon\">\n      </ion-icon>\n      <ion-label class=\"delete-text\">\n          &nbsp;&nbsp;Delete All\n      </ion-label>\n  </div>\n  <!-- <ion-icon name=\"ios-trash\" class=\"delete-icon\"></ion-icon>\n  <h3 (click)=\" deleteAllFavouriteShops()\">Delete All</h3> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: auto;\n  float: left; }\n  .main .delete-icon {\n    float: left;\n    font-size: 26px;\n    width: 13%; }\n  .main .delete-text {\n    font-weight: bold;\n    float: left;\n    margin: 5px 0px 0px 0px;\n    width: 87%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9hbGwtZGVsZXRlLXN1YnNjcmliZWQtc2hvcC9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXHBvcG92ZXJcXGFsbC1kZWxldGUtc3Vic2NyaWJlZC1zaG9wXFxhbGwtZGVsZXRlLXN1YnNjcmliZWQtc2hvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVcsRUFBQTtFQUhmO0lBS1EsV0FBVTtJQUNWLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFQbEI7SUFVUSxpQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3BvdmVyL2FsbC1kZWxldGUtc3Vic2NyaWJlZC1zaG9wL2FsbC1kZWxldGUtc3Vic2NyaWJlZC1zaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLmRlbGV0ZS1pY29ue1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICB9XHJcbiAgICAuZGVsZXRlLXRleHR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcclxuICAgICAgICB3aWR0aDogODclOyAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: AllDeleteSubscribedShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDeleteSubscribedShopPage", function() { return AllDeleteSubscribedShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");








var AllDeleteSubscribedShopPage = /** @class */ (function () {
    function AllDeleteSubscribedShopPage(http, toastCtrl, navParams, ToastCtrl, modal, router, fcm, popoverController, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.fcm = fcm;
        this.popoverController = popoverController;
        this.commonService = commonService;
        this.l_shopList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    AllDeleteSubscribedShopPage.prototype.ngOnInit = function () {
        this.l_shopList = this.navParams.get('Shop_List');
    };
    AllDeleteSubscribedShopPage.prototype.deleteAllSuscribeShops = function () {
        var DeteleAllFavourite = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        };
        var options = {};
        var control = this;
        options.title = 'deleteAllSuscribeShops';
        options.apiURL = this.env.shopApi.deleteSuscribedShop;
        options.catchErrorText = 'UserController: error => deleteAllSuscribeShops()';
        options.methodType = 'POST';
        options.paramData = DeteleAllFavourite;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                for (var i = 0; i < control.l_shopList.length; i++) {
                    control.fcm.unsubscribeFromTopic(control.l_shopList[i].SubscribeTopicName);
                }
                var optionMsg = {};
                optionMsg.message = 'Delete All from SuscribeList';
                control.commonService.msgToast(optionMsg);
                control.popoverController.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    AllDeleteSubscribedShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-delete-subscribed-shop',
            template: __webpack_require__(/*! ./all-delete-subscribed-shop.page.html */ "./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.html"),
            styles: [__webpack_require__(/*! ./all-delete-subscribed-shop.page.scss */ "./src/app/pages/popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], AllDeleteSubscribedShopPage);
    return AllDeleteSubscribedShopPage;
}());



/***/ }),

/***/ "./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"main\" (click)=\"SuscribeActionSheet(l_shopId)\">\n    <ion-icon name=\"ios-trash\" class=\"delete-icon\"></ion-icon>\n    <ion-label class=\"delete-text\">\n      &nbsp;&nbsp;Delete\n    </ion-label>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: auto;\n  float: left; }\n  .main .delete-icon {\n    float: left;\n    font-size: 26px;\n    width: 13%; }\n  .main .delete-text {\n    font-weight: bold;\n    float: left;\n    margin: 5px 0px 0px 0px;\n    border-bottom: 1px solid #bbb;\n    width: 87%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9zaW5nbGUtZGVsZXRlLXN1c2NyaWJlZC1zaG9wL0U6XFxNeVdvcmtcXFByb2plY3RzXFxEaXNjb3VudE1vYmlsZUFwcFxcU291cmNlQ29kZVxcS2hhYmF5L3NyY1xcYXBwXFxwYWdlc1xccG9wb3Zlclxcc2luZ2xlLWRlbGV0ZS1zdXNjcmliZWQtc2hvcFxcc2luZ2xlLWRlbGV0ZS1zdXNjcmliZWQtc2hvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVcsRUFBQTtFQUhmO0lBS1EsV0FBVTtJQUNWLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFQbEI7SUFVUSxpQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qiw2QkFBNEI7SUFDNUIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wb3Zlci9zaW5nbGUtZGVsZXRlLXN1c2NyaWJlZC1zaG9wL3NpbmdsZS1kZWxldGUtc3VzY3JpYmVkLXNob3AucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAuZGVsZXRlLWljb257XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEzJTtcclxuICAgIH1cclxuICAgIC5kZWxldGUtdGV4dHtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNiYmI7XHJcbiAgICAgICAgd2lkdGg6IDg3JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: SingleDeleteSuscribedShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleDeleteSuscribedShopPage", function() { return SingleDeleteSuscribedShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");








var SingleDeleteSuscribedShopPage = /** @class */ (function () {
    function SingleDeleteSuscribedShopPage(popover, router, navParams, http, actionSheetController, toastCtrl, fcm, ToastCtrl, commonService) {
        this.popover = popover;
        this.router = router;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetController = actionSheetController;
        this.toastCtrl = toastCtrl;
        this.fcm = fcm;
        this.ToastCtrl = ToastCtrl;
        this.commonService = commonService;
        this.l_shopId = null;
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
    }
    SingleDeleteSuscribedShopPage.prototype.ngOnInit = function () {
        this.l_shopId = this.navParams.get('Shop_ID');
        this.l_shopSubscribeTopic = this.navParams.get('Subscribe_TopicName');
    };
    SingleDeleteSuscribedShopPage.prototype.SuscribeActionSheet = function (shop_id) {
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
                                        _this.removeSuscribe(shop_id);
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
    SingleDeleteSuscribedShopPage.prototype.removeSuscribe = function (shop_id) {
        var Suscribe = {
            ShopIDList: [{ ShopID: shop_id }],
            IsActive: 0,
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        };
        var options = {};
        var control = this;
        options.title = 'Add User!!!';
        options.apiURL = this.env.shopApi.insertUpdateUserShopSubscriptionURL;
        options.catchErrorText = 'UserController: error => removeSuscribe()';
        options.methodType = 'POST';
        options.paramData = Suscribe;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.fcm.unsubscribeFromTopic(control.l_shopSubscribeTopic);
                var optionMsg = {};
                optionMsg.message = 'Delete from SuscribeList';
                control.commonService.msgToast(optionMsg);
                localStorage.setItem('isSusDelete', 'true');
                control.popover.dismiss();
                return;
            }
        };
        this.commonService.httpPost(options);
    };
    SingleDeleteSuscribedShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-delete-suscribed-shop',
            template: __webpack_require__(/*! ./single-delete-suscribed-shop.page.html */ "./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.html"),
            styles: [__webpack_require__(/*! ./single-delete-suscribed-shop.page.scss */ "./src/app/pages/popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], SingleDeleteSuscribedShopPage);
    return SingleDeleteSuscribedShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~shop-subscription-shop-subscription-module~tabs-tabs-module.js.map