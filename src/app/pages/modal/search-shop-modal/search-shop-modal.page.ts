import { Component, OnInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { ModalController, NavParams, ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Commonservices } from '../../../services/commonservices';
import { Sqlservices } from '../../../services/sqlservices';
import { Env } from '../../../services/env';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
    selector: 'app-search-shop-modal',
    templateUrl: './search-shop-modal.page.html',
    styleUrls: ['./search-shop-modal.page.scss'],
})
export class SearchShopModalPage implements OnInit {
    @ViewChild('myInput') myInput;

    env: any;
    sqlService: any;
    public l_search: string;
    l_searchList;
    l_shopImageList;
    l_isModel = 'true';
    l_searchDropdownList = false;
    l_shopList: any = [];
    l_isShopNotFound: boolean;

    constructor(public modal: ModalController,
        private navParams: NavParams,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private router: Router,
        public ref: ChangeDetectorRef,
        private sqlite: SQLite,
        private navControll: NavController,
        public commonService: Commonservices) {
        this.env = new Env();
        this.sqlService = new Sqlservices(this.sqlite);
    }

    ngOnInit() {
        setTimeout(() => {
            this.myInput.setFocus();
        }, 1000);
    }

    ionViewWillEnter() {
        this.getShop();
        this.l_isShopNotFound = true;
        this.l_search = this.navParams.get('searchShopName');

        if (this.l_search != null) {
            this.l_searchDropdownList = true;
        }

        localStorage.removeItem('searchShopName');

        const shopSrchTableData: any = {
            tableName: 'ShopSearchHistory_',
            columnName: null,
            columnValue: null
        }

        this.sqlService.getDataFromTable({ callback: this.getShopSrchCallback, control: this, tblData: shopSrchTableData });

        const shopRecImgTableData: any = {
            tableName: 'ShopRecentlyViewed_',
            columnName: null,
            columnValue: null
        }

        this.sqlService.getDataFromTable({ callback: this.getShopRecImgCallback, control: this, tblData: shopRecImgTableData });
    }

    public getShopSrchCallback(paramOptions) {
        let control = paramOptions.control;
        control.l_searchList = [];
        for (var i = 0; i < paramOptions.dataList.length; i++) {
            control.l_searchList.push([paramOptions.dataList[i].SearchingName]);
        }
        // control.l_searchList = paramOptions.dataList;   
    }

    public getShopRecImgCallback(paramOptions) {
        let control = paramOptions.control;
        control.l_shopImageList = [];
        control.l_shopImageList = paramOptions.dataList;
    }

    closeModal() {
        this.modal.dismiss();
        this.router.navigate(['tabs/home']);
    }

    gotoSearchShop(l_search, type) {
        if (l_search == null || l_search == 'undefined' || l_search == '') {
            let optionMsg: any = {};
            optionMsg.message = 'Please atleast one word for searching';
            this.commonService.msgToast(optionMsg);
        }
        else {
            localStorage.setItem('searchShopName', l_search)
            if (type == 1) {
                l_search = "'" + l_search[0].toLowerCase() + "'";
            }
            else {
                l_search = "'" + l_search.toLowerCase() + "'";
            }

            // const shopSrchTableData: any = {
            //     tableName: 'ShopSearchHistory_',
            //     column:[{columnName: 'SearchingName', columnValue: l_search}],
            // }
            // this.sqlService.insertShopSearchTable(shopSrchTableData);
            this.sqlService.insertShopSearchHistoryTable(l_search);
            this.router.navigate(['tabs/shop']);
            this.modal.dismiss();
        }
    }

    clearSearchHistory(tableName) {
        const tableData: any = {
            tableName: tableName,
            columnName: null,
            columnValue: null
        }

        this.sqlService.deleteDataFromTable({ callback: this.deleteListCallback, control: this, tblData: tableData });
    }

    deleteListCallback(paramOptions) {
        let control = paramOptions.control;

        if (paramOptions.tableName == 'ShopSearchHistory_') {
            control.l_searchList = [];
        }
        else if (paramOptions.tableName == 'ShopRecentlyViewed_') {
            control.l_shopImageList = [];
        }
    }

    gotoInformation(l_shopID) {
        localStorage.setItem("shopID", l_shopID);
        localStorage.setItem('searchShopModal', this.l_isModel);
        this.router.navigate(['shop_information']);
        this.modal.dismiss();
    }

    searchDropdownList() {
        this.l_searchDropdownList = true;
    }

    //Get Shop
    getShop() {
        let options: any = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getShopURL + localStorage.getItem('userID');//UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true)
                control.l_shopList = data.Result;
                control.l_isShopNotFound = false;

        }
        this.commonService.httpPost(options);
    }

    listTextSearch(search) {
        this.l_search = search;
    }

    clearSearchInput() {
        this.l_searchDropdownList = false;
        this.l_search = '';
    }
}
