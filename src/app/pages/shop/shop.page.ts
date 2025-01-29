import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, Platform, LoadingController, ModalController, ActionSheetController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { SearchShopModalPage } from '../modal/search-shop-modal/search-shop-modal.page';
import * as $ from "jquery";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.page.html',
    styleUrls: ['./shop.page.scss']
})
export class ShopPage implements OnInit {
    env: any;
    l_shopList: any = [];
    public query: string;
    l_searchShop: any;
    l_isShopNotFound: boolean;
    data: any;

    constructor(
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private router: Router,
        public actionSheetController: ActionSheetController,
        public ref: ChangeDetectorRef,
        public events: Events,
        public modal: ModalController,
        private platform: Platform,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() {
        this.getShop();
        //Set updateFav
        this.events.unsubscribe('updateFav');
        this.events.subscribe('updateFav', () => {
            for (let i = 0; i < this.l_shopList.length; i++) {
                if (this.l_shopList[i].ShopID == localStorage.getItem('EventShopID')) {
                    this.l_shopList[i].IsFavourite = localStorage.getItem('FavHeart');
                    this.ref.detectChanges();
                    this.l_shopList[i].FavouriteCount = localStorage.getItem('favCounts');
                    localStorage.removeItem('FavHeart');
                    localStorage.removeItem('EventShopID');
                    localStorage.removeItem('favCounts');
                    return;
                }
            }
        });
        this.platform.backButton.subscribe( () => {
            localStorage.setItem('othertabs','true');
            localStorage.removeItem('hometab');
          });
    }

    ionViewWillEnter() {
        localStorage.setItem('othertabs','true');
        localStorage.removeItem('hometab');
        if (localStorage.getItem('IsNotification') == 'true') {
            this.l_searchShop = localStorage.getItem('shopNameForNotification');
        }
        else {
            this.l_searchShop = localStorage.getItem('searchShopName');
        }
        this.l_isShopNotFound = true;
        this.ref.detectChanges();
        // this.getShop();
    }

    //Get Shop
    getShop(infiniteScroll?, refresher?) {
        let options: any = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getShopURL + localStorage.getItem('userID');//UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_shopList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_shopList);
                control.l_isShopNotFound = false;
                control.data = control.commonService.applyHaversine(control.l_shopList);
                control.data.sort((locationA, locationB) => {
                    return locationA.distance - locationB.distance;
                });
            }
        }
        this.commonService.httpPost(options);
    }

    doRefresh(refresher) {
        this.getShop("", refresher);
    }

    doInfinite(infiniteScroll) {
        this.getShop(infiniteScroll);
    }

    gotoInformation(l_shopID) {
        localStorage.setItem("shopID", l_shopID);
        this.router.navigate(['shop_information']);
    }

    async gotofavourite() {
        const actionSheet = await this.actionSheetController.create({
            header: "Added to favourite list",
            buttons: [{
                text: 'View my favourite list',
                // icon: 'trash',
                handler: () => {
                    localStorage.setItem("isFav", "true");
                    this.router.navigate(['favorites']);
                }
            },
                // {
                //     text: 'Close',
                //     icon: 'close',
                //     role: 'cancel'
                // }
            ]
        });
        await actionSheet.present();
    }

    favourite(shopID, isFavourite) {
        isFavourite = !isFavourite;
        const favouriteheart: any = {
            ShopIDList: [{ ShopID: shopID }],
            ProductID: 0,
            IsFavourite: isFavourite,
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        }

        let options: any = {};
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
                for (let i = 0; i < control.l_shopList.length; i++) {
                    if (control.l_shopList[i].ShopID == shopID) {
                        let optionMsg: any = {};
                        if (isFavourite) {
                            //  optionMsg.message = 'Added to wishList View my wishList';
                            control.gotofavourite();
                        }
                        else {
                            optionMsg.message = 'Removed from favourite List';
                            control.commonService.msgToast(optionMsg);
                        }
                        control.l_shopList[i].FavouriteCount = data.Result[0].FavCount;
                        control.l_shopList[i].IsFavourite = data.Result[0].IsFavourite;
                        return;
                    }
                }
            }
        }

        this.commonService.httpPost(options);
    }

    async openModal(ev: any) {

        if (localStorage.getItem('IsNotification') == 'true') {
            localStorage.removeItem('IsNotification');
            this.router.navigate(['notifications']);
            return;
        }

        const modal = await this.modal.create({
            component: SearchShopModalPage,
            componentProps: {
                searchShopName: this.l_searchShop
            }
        });

        modal.onDidDismiss()
            .then((data) => {
                this.l_searchShop = localStorage.getItem('searchShopName');
            });
        return await modal.present();
    }

    srchTextboxChange() {
        if (this.l_shopList.length > 0) {
            this.l_isShopNotFound = false;
        }
        else {
            this.l_isShopNotFound = true;
        }
    }
}
