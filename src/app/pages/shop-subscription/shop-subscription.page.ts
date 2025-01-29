import { Component, OnInit } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SingleDeleteSuscribedShopPage } from '../popover/single-delete-suscribed-shop/single-delete-suscribed-shop.page';
import { AllDeleteSubscribedShopPage } from '../popover/all-delete-subscribed-shop/all-delete-subscribed-shop.page';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
    selector: 'app-shop-subscription',
    templateUrl: './shop-subscription.page.html',
    styleUrls: ['./shop-subscription.page.scss'],
})
export class ShopSubscriptionPage implements OnInit {
    env: any;
    l_ShopList: any = [];
    public query: string;
    IsSuscribe = 'true';
    count;
    l_shop;
    l_deleteCount = 0;
    l_hdnOptions = false;
    l_hdnCheckbox = true;
    l_favList: Array<SusListPojo> = new Array<SusListPojo>();
    selection: boolean = false;
    shopIds = [];
    subscribTopicNameList = [];

    constructor(
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private router: Router,
        public fcm: FCM,
        public popoverController: PopoverController,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() { }

    ionViewWillEnter() {
        this.getSuscribedShop();
        this.l_shop = localStorage.getItem('shopSus');
        // if (localStorage.getItem('isFav') == 'true') {
        //     this.l_shop = localStorage.getItem('isFav');
        // }
    }

    getSuscribedShop(infiniteScroll?, refresher?) {
        const options: any = {};
        const control = this;
        options.title = 'Get - Get SuscribedShop!!!';
        options.apiURL = this.env.shopApi.getSuscribedShop + localStorage.getItem('userID');
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                control.l_ShopList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_ShopList);
                control.setCheckBoxonRefresh();
            }
            control.count = control.l_ShopList.length;
        };
        this.commonService.httpPost(options);
    }

    doRefresh(refresher) {
        this.getSuscribedShop('', refresher);
    }

    doInfinite(infiniteScroll) {
        this.getSuscribedShop(infiniteScroll);
    }

    setCheckBoxonRefresh() {
        if (this.shopIds.length > 0) {
            for (var i = 0; i < this.l_ShopList.length; i++) {
                for (var j = 0; j < this.shopIds.length; j++) {
                    if (this.l_ShopList[i].ShopID == this.shopIds[j].ShopID) {
                        this.l_ShopList[i].isSelected = true;
                    }
                }
            }
        }
    }

    gotoInformation(shopID) {
        localStorage.setItem('shopID', shopID);
        localStorage.setItem('suscribe', this.IsSuscribe);
        this.router.navigate(['shop_information']);
    }

    back() {
        this.l_shop = null;
        if (localStorage.getItem('shopSus') == "true") {
            localStorage.removeItem('shopSus');
            this.router.navigate(['shop_information']);
        }
        else {
            this.router.navigate(['tabs/settings']);
        }
    }

    async openPopover(ev: Event, shopID, SubscribeTopicName) {
        const shopid = shopID;
        const subscribeTopicName = SubscribeTopicName;
        const control = this;
        const popover = await this.popoverController.create({
            component: SingleDeleteSuscribedShopPage,
            event: ev,
            translucent: true,
            componentProps: {
                Shop_ID: shopid,
                Subscribe_TopicName: subscribeTopicName,
            }
        });

        popover.onDidDismiss()
            .then((data) => {
                for (let i = 0; i < control.l_ShopList.length; i++) {
                    if (control.l_ShopList[i].ShopID === shopid && localStorage.getItem('isSusDelete') === 'true') {
                        localStorage.removeItem('isSusDelete');
                        control.l_ShopList.splice(i, 1);
                        i--;
                        return;
                    }
                }
            });

        return await popover.present();
    }

    async openPopoverdelete(ev: Event) {
        const control = this;
        const shopList = this.l_ShopList;
        const optionMsg: any = {};
        if (control.count > 0) {
            const popover = await this.popoverController.create({
                component: AllDeleteSubscribedShopPage,
                event: ev,
                translucent: true,
                componentProps: {
                    Shop_List: shopList
                }
            });

            popover.onDidDismiss()
                .then((data) => {
                    this.getSuscribedShop();
                });

            return await popover.present();
        }
        else {
            optionMsg.message = 'Choose at least one';
        }
        control.commonService.msgToast(optionMsg);
    }

    selectItem(index: number, list: SusListPojo) {
        setTimeout(() => {
            this.selection = true;
            list.isSelected = list.isSelected ? false : true;
            this.l_favList[index] = list;
            if (list.isSelected) {
                this.shopIds.push({ ShopID: list.ShopID });
                this.subscribTopicNameList.push({ SubscribeTopicName: list.SubscribeTopicName });
                this.l_deleteCount = this.l_deleteCount + 1;
            }
            else {
                for (var i = 0; i < this.shopIds.length; i++) {
                    if (this.shopIds[i].ShopID == list.ShopID) {
                        this.shopIds.splice(i, 1);
                    }
                }
                for (var i = 0; i < this.subscribTopicNameList.length; i++) {
                    if (this.subscribTopicNameList[i].SubscribeTopicName == list.SubscribeTopicName) {
                        this.subscribTopicNameList.splice(i, 1);
                    }
                }
                this.l_deleteCount = this.l_deleteCount - 1;
            }

            if (this.l_deleteCount > 0) {
                this.l_hdnCheckbox = false;
                this.l_hdnOptions = true;
                this.selection = true;
            }
            else {
                this.l_hdnCheckbox = true;
                this.l_hdnOptions = false;
                this.selection = false;
            }
        }, 150);
        console.log(this.subscribTopicNameList);
    }

    unselectAll() {
        this.selection = false;
        this.l_favList.forEach(list => {
            list.isSelected = false;
        });
    }

    hndClick(event, shopID, SubscribeTopicName, val) {
        if (val == 1)
            this.openPopover(event, shopID, SubscribeTopicName)
        else
            this.gotoInformation(shopID);

        event.stopPropagation();
    }

    removeSubscription() {
        const Suscribe: any = {
            ShopIDList: this.shopIds,
            IsActive: 0,
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        }

        let options: any = {};
        var control = this;
        options.title = 'Add User!!!';
        options.apiURL = this.env.shopApi.insertUpdateUserShopSubscriptionURL;
        options.catchErrorText = 'UserController: error => favourite()';
        options.methodType = 'POST';
        options.paramData = Suscribe;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                let optionMsg: any = {};
                optionMsg.message = 'Delete from SuscribtionList';
                control.commonService.msgToast(optionMsg);
                control.l_hdnCheckbox = true;
                control.l_hdnOptions = false;
                control.selection = false;
                control.l_deleteCount = 0;
                control.shopIds = [];
                for (var i = 0; i < control.subscribTopicNameList.length; i++) {
                    control.fcm.unsubscribeFromTopic(control.subscribTopicNameList[i].SubscribeTopicName);
                }
                control.subscribTopicNameList = [];
                control.getSuscribedShop();
                return;
            }
        }

        this.commonService.httpPost(options);
    }
}

class SusListPojo {
    ShopID = 0;
    ShopName = '';
    SubscribeTopicName = '';
    isSelected: boolean;
}
