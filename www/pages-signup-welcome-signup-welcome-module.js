(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-welcome-signup-welcome-module"],{

/***/ "./src/app/pages/signup-welcome/signup-welcome.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/signup-welcome/signup-welcome.module.ts ***!
  \***************************************************************/
/*! exports provided: SignupWelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupWelcomePageModule", function() { return SignupWelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-welcome.page */ "./src/app/pages/signup-welcome/signup-welcome.page.ts");







var routes = [
    {
        path: '',
        component: _signup_welcome_page__WEBPACK_IMPORTED_MODULE_6__["SignupWelcomePage"]
    }
];
var SignupWelcomePageModule = /** @class */ (function () {
    function SignupWelcomePageModule() {
    }
    SignupWelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_welcome_page__WEBPACK_IMPORTED_MODULE_6__["SignupWelcomePage"]]
        })
    ], SignupWelcomePageModule);
    return SignupWelcomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup-welcome/signup-welcome.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/signup-welcome/signup-welcome.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"cont\">\n    <div class=\"main\">\n        <div class=\"photo\">\n            <div class=\"img\">\n\n            </div>\n            <!-- <img class=\"img\" src=\"../../assets/img/Welcome.jpg\" alt=\"\"> -->\n        </div>\n        <h5 class=\"app_text\"> <span class=\"app_text_first\">Welcome To </span>Our App</h5>\n        <div class=\"app_text_small\">\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusantium asperiores facilis culpa\n            quisquam obcaecati, nostrum architecto sapiente, voluptatibus corporis quam autem voluptates aperiam\n            voluptate minus laboriosam ex quia harum!\n        </div>\n    </div>\n    <div class=\"footer\">\n        <div class=\"btn\">\n            <ion-button class=\"bton\" fill=\"clear\" color=\"light\" (click)=\"next()\">\n                Done\n            </ion-button>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/signup-welcome/signup-welcome.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/signup-welcome/signup-welcome.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  --background: #f5f5f5; }\n\n.main {\n  width: 100%;\n  margin: 60px 0px 0px 0px;\n  float: left; }\n\n.main .photo {\n    margin: 0 auto;\n    width: 78%;\n    height: 285px;\n    float: center; }\n\n.main .img {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    box-shadow: 0 0 10px #969ba1;\n    border-radius: 10px;\n    background-size: cover;\n    background-image: url('Welcome.jpg'); }\n\n.main .app_text {\n    width: 70%;\n    height: 20%;\n    margin: 0 auto;\n    padding: 30px 0px 0px 0px;\n    color: #2e3842;\n    font-size: 18px;\n    float: center;\n    text-align: center;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal;\n    line-height: 15px;\n    font-weight: bold; }\n\n.main .app_text .app_text_first {\n      color: #fb630f; }\n\n.main .app_text_small {\n    width: 80%;\n    height: 18%;\n    padding: 15px 0px 0px 0px;\n    margin: 0 auto;\n    font-family: 'Poppins';\n    font-style: normal;\n    font-variant: normal;\n    font-size: 10px;\n    text-align: center;\n    font-weight: normal;\n    color: #969ba1; }\n\n.footer {\n  width: 100%;\n  height: 11%;\n  float: left;\n  bottom: 0px;\n  position: fixed; }\n\n.footer .btn {\n    width: 80%;\n    height: 37px;\n    margin: 0 auto;\n    padding: 0px 0px 0px 0px;\n    border-radius: 9px;\n    background-color: #fb630f;\n    text-align: center;\n    font-size: 25px; }\n\n.footer .btn .bton {\n      width: 100%;\n      height: 37px;\n      margin-top: -4px;\n      padding: 0px;\n      text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwLXdlbGNvbWUvRTpcXE15V29ya1xcUHJvamVjdHNcXERpc2NvdW50TW9iaWxlQXBwXFxTb3VyY2VDb2RlXFxLaGFiYXkvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXAtd2VsY29tZVxcc2lnbnVwLXdlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFdBQVcsRUFBQTs7QUFIZjtJQUtRLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWEsRUFBQTs7QUFSckI7SUFZUSxXQUFXO0lBQ2YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUNyQixvQ0FBd0QsRUFBQTs7QUFsQjdEO0lBcUJRLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQWpDekI7TUFtQ1ksY0FBYyxFQUFBOztBQW5DMUI7SUF1Q1EsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWEsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUVYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQU5uQjtJQVFRLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBZnZCO01BaUJZLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC13ZWxjb21lL3NpZ251cC13ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDYwcHggMHB4IDBweCAwcHg7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAucGhvdG97XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDc4JTtcclxuICAgICAgICBoZWlnaHQ6IDI4NXB4O1xyXG4gICAgICAgIGZsb2F0OiBjZW50ZXI7IFxyXG4gICAgfVxyXG4gICAgLmltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM5NjliYTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvV2VsY29tZS5qcGcnKTsgICAgIFxyXG4gICAgfVxyXG4gICAgLmFwcF90ZXh0e1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBjb2xvcjogIzJlMzg0MjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgXHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcclxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDsgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgLmFwcF90ZXh0X2ZpcnN0e1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXBwX3RleHRfc21hbGx7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7IFxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGNvbG9yOiM5NjliYTE7XHJcbiAgICAgfVxyXG59XHJcbi5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTElO1xyXG4gICAvLyBtYXJnaW46IDY1cHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIC5idG57XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNjMwZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIC5idG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/signup-welcome/signup-welcome.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/signup-welcome/signup-welcome.page.ts ***!
  \*************************************************************/
/*! exports provided: SignupWelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupWelcomePage", function() { return SignupWelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env */ "./src/app/services/env.ts");
/* harmony import */ var _services_commonservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonservices */ "./src/app/services/commonservices.ts");
/* harmony import */ var _services_sqlservices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sqlservices */ "./src/app/services/sqlservices.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");










var SignupWelcomePage = /** @class */ (function () {
    function SignupWelcomePage(http, toastController, loadingController, router, events, sqlite, authService, commonService) {
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.sqlite = sqlite;
        this.authService = authService;
        this.commonService = commonService;
        this.productList = [];
        this.env = new _services_env__WEBPACK_IMPORTED_MODULE_2__["Env"]();
        this.sqlService = new _services_sqlservices__WEBPACK_IMPORTED_MODULE_4__["Sqlservices"](this.sqlite);
    }
    SignupWelcomePage.prototype.ngOnInit = function () { };
    SignupWelcomePage.prototype.next = function () {
        this.sqlService.createLocalDB();
        this.authService.login();
    };
    SignupWelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-welcome',
            template: __webpack_require__(/*! ./signup-welcome.page.html */ "./src/app/pages/signup-welcome/signup-welcome.page.html"),
            styles: [__webpack_require__(/*! ./signup-welcome.page.scss */ "./src/app/pages/signup-welcome/signup-welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__["SQLite"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _services_commonservices__WEBPACK_IMPORTED_MODULE_3__["Commonservices"]])
    ], SignupWelcomePage);
    return SignupWelcomePage;
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
//# sourceMappingURL=pages-signup-welcome-signup-welcome-module.js.map