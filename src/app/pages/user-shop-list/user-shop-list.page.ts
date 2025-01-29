import { Component, OnInit } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ShopUpdatePage } from '../shop-update/shop-update.page';
import { DeleteSingleShopPopoverPage } from '../popover/delete-single-shop-popover/delete-single-shop-popover.page';
import { DeleteAllShopsPopoverPage } from '../popover/delete-all-shops-popover/delete-all-shops-popover.page';

@Component({
    selector: 'app-user-shop-list',
    templateUrl: './user-shop-list.page.html',
    styleUrls: ['./user-shop-list.page.scss'],
})
export class UserShopListPage implements OnInit {
    env: any;
    l_shopList: any = [];
    public query: string;
    l_count;

    constructor(
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public navCtrl: NavController,
        public popoverController: PopoverController,
        private router: Router,
        public commonService: Commonservices) {
        this.env = new Env();
    }
    ngOnInit() { }

    ionViewWillEnter() {
        this.getShop();
    }

    // Get Shop
    getShop(infiniteScroll?, refresher?) {
        const options: any = {};
        const control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getUserShopList + localStorage.getItem('userID'); // UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            debugger
            if (data.Status[0].Success === true) {
                control.l_shopList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_shopList);
                control.l_count = control.l_shopList.length;
            }
        };
        this.commonService.httpPost(options);
    }

    doRefresh(refresher) {
        this.getShop('', refresher);
    }

    doInfinite(infiniteScroll) {
        this.getShop(infiniteScroll);
    }

    gotoInformation(shopID, status) {
        if (status == 'Visible' && status != undefined) {
            localStorage.setItem('shopID', shopID);
            localStorage.setItem('userShopList', 'true');
            this.router.navigate(['shop_information']);
        }
    }

    updateShop(ShopID) {
        const control = this;
        for (let i = 0; i < control.l_shopList.length; i++) {
            if (control.l_shopList[i].ShopID === ShopID) {
                const json = JSON.stringify(control.l_shopList[i]);
                localStorage.setItem('shopData', json);
                control.router.navigate(['shop-update']);
                return;
            }
        }
    }

    async openPopoverdelete(ev: Event, shopID, status) {
        const control = this;
        const popover = await this.popoverController.create({
            component: DeleteSingleShopPopoverPage,
            event: ev,
            translucent: true,
            componentProps: {
                Shop_ID: shopID,
                Status: status,
                ShopList: control.l_shopList
            }
        });

        popover.onDidDismiss()
            .then((data) => {
                for (let i = 0; i < control.l_shopList.length; i++) {
                    if (control.l_shopList[i].ShopID === shopID) {

                        if (localStorage.getItem('isShopDelete') != null) {
                            localStorage.removeItem('isShopDelete');
                            control.l_shopList.splice(i, 1);
                            i--;
                            return;
                        }

                        if (localStorage.getItem('IsVisible') != null) {
                            var status = localStorage.getItem('IsVisible') == '1' ? 'Hide' : 'Visible';
                            control.l_shopList[i].Status = status;
                            localStorage.removeItem('IsVisible');
                        }

                    }
                }
            });

        return await popover.present();
    }

    async openPopoverdeleteAll(ev: Event) {
        const control = this;
        const optionMsg: any = {};

        if (control.l_count > 0) {
            const popover = await this.popoverController.create({
                component: DeleteAllShopsPopoverPage,
                event: ev,
                translucent: true,
            });
            popover.onDidDismiss()
                .then((data) => {
                    this.getShop();
                });
            return await popover.present();
        }
        else {
            optionMsg.message = 'Choose at least one';
        }
        control.commonService.msgToast(optionMsg);
    }


    back() {
        this.router.navigate(['tabs/settings']);
    }

}

