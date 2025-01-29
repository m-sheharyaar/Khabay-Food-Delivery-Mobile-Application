import { Component, OnInit } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FavouritePopoverPage } from '../popover/favourite-popover/favourite-popover.page';
import { DeleteAllFavouritePopoverPage } from '../popover/delete-all-favourite-popover/delete-all-favourite-popover.page';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
    env: any;
    l_ShopList: any = [];
    public query: string;
    Isfavauroite = 'true';
    count;
    l_shop;
    l_deleteCount = 0;
    l_hdnOptions = false;
    l_hdnCheckbox = true;
    l_favList: Array<FavListPojo> = new Array<FavListPojo>();
    selection: boolean = false;
    shopIds = [];

    constructor(
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private router: Router,
        public popoverController: PopoverController,
        public commonService : Commonservices) {
        this.env = new Env();
    }

    ngOnInit() { }

    ionViewWillEnter() {
        this.l_deleteCount = 0;
        this.l_hdnCheckbox = true;
        this.l_hdnOptions = false;
        this.selection = false;
        this.getShop();
        this.l_shop = localStorage.getItem('shopFav');
        if (localStorage.getItem('isFav') == 'true') {
            this.l_shop = localStorage.getItem('isFav');
        }
    }

    getShop(infiniteScroll?, refresher?) {
        const options: any = {};
        const control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getFavouriteShopUrl + localStorage.getItem('userID');
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
        this.getShop('', refresher);
    }

    doInfinite(infiniteScroll) {
      this.getShop(infiniteScroll);    
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
        localStorage.setItem('favourite', this.Isfavauroite);
        this.router.navigate(['shop_information']);
    }

    async openPopover(ev: Event, shopID) {
        const shopid = shopID;
        const control = this;
        const popover = await this.popoverController.create({
            component: FavouritePopoverPage,
            event: ev,
            translucent: true,
            componentProps: {
                Shop_ID: shopid,
            }
        });

        popover.onDidDismiss()
            .then((data) => {
                for (let i = 0; i < control.l_ShopList.length; i++) {
                    if (control.l_ShopList[i].ShopID === shopid && localStorage.getItem('isFavDelete') === 'true') {
                        localStorage.removeItem('isFavDelete');
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
        const optionMsg: any = {};

        if (control.count > 0) {
            const popover = await this.popoverController.create({
                component: DeleteAllFavouritePopoverPage,
                event: ev,
                translucent: true
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
        this.l_shop = null;
        if (localStorage.getItem('shopFav') == "true") {
            localStorage.removeItem('shopFav');
            this.router.navigate(['shop_information'])
        }
        else if (localStorage.getItem('isFav') == "true") {
            localStorage.removeItem('isFav');
            this.router.navigate(['tabs/shop']);
        }
        else{
            this.router.navigate(['tabs/settings']);
        }
    }

    selectItem(index: number, list: FavListPojo) {
        setTimeout(() => {
            this.selection = true;
            list.isSelected = list.isSelected ? false : true;
            this.l_favList[index] = list;
            if (list.isSelected) {
                this.shopIds.push({ ShopID: list.ShopID });
                this.l_deleteCount = this.l_deleteCount + 1;
            }
            else {
                for (var i = 0; i < this.shopIds.length; i++) {
                    if (this.shopIds[i].ShopID == list.ShopID) {
                        this.shopIds.splice(i, 1);
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
    }

    unselectAll() {
        this.selection = false;
        this.l_favList.forEach(list => {
            list.isSelected = false;
        });
    }

    hndClick(event, shopID, val) {
        if (val == 1)
            this.openPopover(event, shopID)
        else
            this.gotoInformation(shopID);

        event.stopPropagation();
    }

    removeFavourite() {
        const favouriteheart: any = {
            ShopIDList: this.shopIds,
            ProductID: 0,
            IsFavourite: 0,
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
                let optionMsg: any = {};
                optionMsg.message = 'Delete from wishList';
                control.commonService.msgToast(optionMsg);
                control.l_hdnCheckbox = true;
                control.l_hdnOptions = false;
                control.selection = false;
                control.l_deleteCount = 0;
                control.shopIds = [];
                control.getShop();
                return;
            }
        }

        this.commonService.httpPost(options);
    }
}

class FavListPojo {
    ShopID = 0;
    ShopName = '';
    isSelected: boolean;
}