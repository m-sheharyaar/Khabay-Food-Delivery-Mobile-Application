(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tabs-tabs-module~user-shop-list-user-shop-list-module"],{

/***/ "./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"main\" (click)=\"deleteAllShop()\">\n    <ion-icon name=\"ios-trash\" class=\"delete-icon\">\n    </ion-icon>\n    <ion-label class=\"delete-text\">\n      &nbsp;&nbsp;Delete All\n    </ion-label>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: auto;\n  float: left; }\n  .main .delete-icon {\n    float: left;\n    font-size: 26px;\n    width: 13%; }\n  .main .delete-text {\n    font-weight: bold;\n    float: left;\n    margin: 5px 0px 0px 0px;\n    width: 87%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9kZWxldGUtYWxsLXNob3BzLXBvcG92ZXIvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxwb3BvdmVyXFxkZWxldGUtYWxsLXNob3BzLXBvcG92ZXJcXGRlbGV0ZS1hbGwtc2hvcHMtcG9wb3Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVcsRUFBQTtFQUhmO0lBS1EsV0FBVTtJQUNWLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFQbEI7SUFVUSxpQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3BvdmVyL2RlbGV0ZS1hbGwtc2hvcHMtcG9wb3Zlci9kZWxldGUtYWxsLXNob3BzLXBvcG92ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAuZGVsZXRlLWljb257XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEzJTtcclxuICAgIH1cclxuICAgIC5kZWxldGUtdGV4dHtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4NyU7ICBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: DeleteAllShopsPopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllShopsPopoverPage", function() { return DeleteAllShopsPopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");







var DeleteAllShopsPopoverPage = /** @class */ (function () {
    function DeleteAllShopsPopoverPage(http, toastCtrl, navParams, ToastCtrl, modal, router, popoverController, commonService) {
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
    DeleteAllShopsPopoverPage.prototype.ngOnInit = function () {
    };
    DeleteAllShopsPopoverPage.prototype.deleteAllShop = function () {
        var shopDeletepram = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            ShopID: 0,
            IsDeleted: 0,
            IsDeletedAll: 1,
        };
        var options = {};
        var control = this;
        options.title = 'Delete Single Shop!!!';
        options.apiURL = this.env.shopApi.deleteUserShops;
        options.catchErrorText = 'UserController: error => DeleteSingleShop()';
        options.methodType = 'POST';
        options.paramData = shopDeletepram;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                control.popoverController.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    DeleteAllShopsPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-all-shops-popover',
            template: __webpack_require__(/*! ./delete-all-shops-popover.page.html */ "./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.html"),
            styles: [__webpack_require__(/*! ./delete-all-shops-popover.page.scss */ "./src/app/pages/popover/delete-all-shops-popover/delete-all-shops-popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], DeleteAllShopsPopoverPage);
    return DeleteAllShopsPopoverPage;
}());



/***/ }),

/***/ "./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"main\" (click)=\"deleteSingleShop()\">\n    <ion-icon name=\"ios-trash\" class=\"delete-icon\"></ion-icon>\n    <ion-label class=\"delete-text\">\n      &nbsp;&nbsp;Delete\n    </ion-label>\n  </div>\n  <br />\n  <div class=\"main\" (click)=\"hideSingleShop(l_visibel)\">\n    <ion-icon name=\"eye\" class=\"delete-icon\"></ion-icon>\n    <ion-label class=\"delete-text\">\n      &nbsp;&nbsp;{{l_show}}\n    </ion-label>\n  </div>\n  <br />\n  <div class=\"main\" (click)=\"updateShop(l_shopID)\">\n    <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"delete-icon\"></ion-icon>\n    <ion-label class=\"delete-text\">\n      &nbsp;&nbsp;Edit\n    </ion-label>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: auto;\n  float: left; }\n  .main .delete-icon {\n    float: left;\n    font-size: 26px;\n    width: 13%; }\n  .main .delete-text {\n    font-weight: bold;\n    float: left;\n    margin: 5px 0px 0px 0px;\n    border-bottom: 1px solid #bbb;\n    width: 87%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wb3Zlci9kZWxldGUtc2luZ2xlLXNob3AtcG9wb3Zlci9FOlxcTXlXb3JrXFxQcm9qZWN0c1xcRGlzY291bnRNb2JpbGVBcHBcXFNvdXJjZUNvZGVcXEtoYWJheS9zcmNcXGFwcFxccGFnZXNcXHBvcG92ZXJcXGRlbGV0ZS1zaW5nbGUtc2hvcC1wb3BvdmVyXFxkZWxldGUtc2luZ2xlLXNob3AtcG9wb3Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVcsRUFBQTtFQUhmO0lBS1EsV0FBVTtJQUNWLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFQbEI7SUFVUSxpQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qiw2QkFBNEI7SUFDNUIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wb3Zlci9kZWxldGUtc2luZ2xlLXNob3AtcG9wb3Zlci9kZWxldGUtc2luZ2xlLXNob3AtcG9wb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC5kZWxldGUtaWNvbntcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICB3aWR0aDogMTMlO1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZS10ZXh0e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2JiYjtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: DeleteSingleShopPopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSingleShopPopoverPage", function() { return DeleteSingleShopPopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commonservices */ "./src/app/services/commonservices.ts");







var DeleteSingleShopPopoverPage = /** @class */ (function () {
    function DeleteSingleShopPopoverPage(http, toastCtrl, navParams, ToastCtrl, modal, router, popoverController, commonService) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.ToastCtrl = ToastCtrl;
        this.modal = modal;
        this.router = router;
        this.popoverController = popoverController;
        this.commonService = commonService;
        this.l_shopList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_5__["Env"]();
    }
    DeleteSingleShopPopoverPage.prototype.ngOnInit = function () {
        this.l_shopID = this.navParams.get('Shop_ID');
        this.l_show = this.navParams.get('Status') === 'Visible' ? 'Hide' : 'Visible';
        this.l_visibel = this.navParams.get('Status') === 'Visible' ? 1 : 0;
        this.l_shopList = this.navParams.get('ShopList');
    };
    DeleteSingleShopPopoverPage.prototype.deleteSingleShop = function () {
        var shopDeletepram = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            ShopID: this.l_shopID,
            IsDeleted: 1,
            IsDeletedAll: 0,
        };
        var options = {};
        var control = this;
        options.title = 'Delete Single Shop!!!';
        options.apiURL = this.env.shopApi.deleteUserShops;
        options.catchErrorText = 'UserController: error => deleteSingleShop()';
        options.methodType = 'POST';
        options.paramData = shopDeletepram;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                localStorage.setItem('isShopDelete', 'true');
                control.popoverController.dismiss();
            }
        };
        this.commonService.httpPost(options);
    };
    DeleteSingleShopPopoverPage.prototype.hideSingleShop = function (visibel) {
        var shopDeletepram = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            ShopID: this.l_shopID,
            IsVisible: visibel,
            IsVisibleAll: 0,
        };
        var options = {};
        var control = this;
        options.title = 'Hide Single Shop!!!';
        options.apiURL = this.env.shopApi.hideUserShops;
        options.catchErrorText = 'UserController: error => hideSingleShop()';
        options.methodType = 'POST';
        options.paramData = shopDeletepram;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                control.popoverController.dismiss();
                control.l_visibel = false;
                localStorage.setItem('IsVisible', visibel);
            }
        };
        this.commonService.httpPost(options);
    };
    DeleteSingleShopPopoverPage.prototype.updateShop = function (ShopID) {
        var control = this;
        for (var i = 0; i < control.l_shopList.length; i++) {
            if (control.l_shopList[i].ShopID === ShopID) {
                // this.moneyReceive = navParams.get('shopList');
                // this.shopList = control.shopList[i];
                // control. navCtrl.navigateForward(['/shop-update', {ShopsList : control.shopList[i]}]);
                //  control.router.navigateByUrl('/shop-update');
                var json = JSON.stringify(control.l_shopList[i]);
                localStorage.setItem('shopData', json);
                control.router.navigate(['shop-update']);
                control.popoverController.dismiss();
                // control.router.navigate(['/shop-update', {ShopsList : control.shopList[i]}]);
                return;
            }
        }
    };
    DeleteSingleShopPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-single-shop-popover',
            template: __webpack_require__(/*! ./delete-single-shop-popover.page.html */ "./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.html"),
            styles: [__webpack_require__(/*! ./delete-single-shop-popover.page.scss */ "./src/app/pages/popover/delete-single-shop-popover/delete-single-shop-popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_6__["Commonservices"]])
    ], DeleteSingleShopPopoverPage);
    return DeleteSingleShopPopoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~tabs-tabs-module~user-shop-list-user-shop-list-module.js.map