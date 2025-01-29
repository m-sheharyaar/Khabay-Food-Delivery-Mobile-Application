(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-settings-notification-settings-module"],{

/***/ "./src/app/pages/notification-settings/notification-settings.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingsPageModule", function() { return NotificationSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-settings.page */ "./src/app/pages/notification-settings/notification-settings.page.ts");







var routes = [
    {
        path: '',
        component: _notification_settings_page__WEBPACK_IMPORTED_MODULE_6__["NotificationSettingsPage"]
    }
];
var NotificationSettingsPageModule = /** @class */ (function () {
    function NotificationSettingsPageModule() {
    }
    NotificationSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_settings_page__WEBPACK_IMPORTED_MODULE_6__["NotificationSettingsPage"]]
        })
    ], NotificationSettingsPageModule);
    return NotificationSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notification-settings/notification-settings.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Notification Settings\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/notification-settings/notification-settings.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi1zZXR0aW5ncy9ub3RpZmljYXRpb24tc2V0dGluZ3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/notification-settings/notification-settings.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.page.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingsPage", function() { return NotificationSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotificationSettingsPage = /** @class */ (function () {
    function NotificationSettingsPage(router) {
        this.router = router;
    }
    NotificationSettingsPage.prototype.ngOnInit = function () {
    };
    NotificationSettingsPage.prototype.back = function () {
        this.router.navigate(['tabs/settings']);
    };
    NotificationSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-settings',
            template: __webpack_require__(/*! ./notification-settings.page.html */ "./src/app/pages/notification-settings/notification-settings.page.html"),
            styles: [__webpack_require__(/*! ./notification-settings.page.scss */ "./src/app/pages/notification-settings/notification-settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotificationSettingsPage);
    return NotificationSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notification-settings-notification-settings-module.js.map