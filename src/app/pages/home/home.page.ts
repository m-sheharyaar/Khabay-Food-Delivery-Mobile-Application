import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonSlides, IonContent } from '@ionic/angular';
import { PopoverController, ModalController, ToastController, Platform, LoadingController, ActionSheetController, Events } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Env } from '../../services/env';
import { Router } from '@angular/router';
import { Commonservices } from '../../services/commonservices';
import { SearchShopModalPage } from '../modal/search-shop-modal/search-shop-modal.page';
import { ViewListModalPage } from '../modal/view-list-modal/view-list-modal.page';

import { FCM } from '@ionic-native/fcm/ngx';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild(IonContent) content: IonContent;
    env: any;
    l_newShopList: any = [];
    l_hotDiscountList: any = [];
    l_featuredShopList: any = [];
    l_shopList: any = [];
    ImageArray: any = [];
    Ishome = 'true';
    hidden = false;
    l_header = false;
    l_hide;
    data: any;
    l_notifyIcon;
    l_promotionList: any = [];

    sliderConfig = {
        slidesPerView: 1.5,
        spaceBetween: 0,
    };
    sliderConfigFeatureShop = {
        slidesPerView: 1.6,
        spaceBetween: 0,
    };
    sliderConfigShopOffers = {
        slidesPerView: 2.4,
        spaceBetween: 0,
    };

    constructor(private http: HttpClient,
        public popoverController: PopoverController,
        public actionSheetController: ActionSheetController,
        public modal: ModalController,
        public loadingController: LoadingController,
        public plt: Platform,
        private router: Router,
        private fcm: FCM,
        public events: Events,
        public toastController: ToastController,
        public ref: ChangeDetectorRef,
        public commonService: Commonservices
    ) {
        this.env = new Env();
        this.ImageArray = [
            { 'image': '../../assets/img/slider Images/slider1.jpg' },
            { 'image': '../../assets/img/slider Images/slider2.jpg' },
            { 'image': '../../assets/img/slider Images/slider3.jpg' },
            { 'image': '../../assets/img/slider Images/slider4.jpg' },
            { 'image': '../../assets/img/slider Images/slider5.jpg' }]
    }

    ngOnInit() {
        //newShop subscribe notification
        this.fcm.subscribeToTopic('AllUserNotifications');
        this.plt.backButton.subscribe(() => {
            localStorage.setItem('hometab', 'true');
        });
    }

    slidesDidLoad(slides: IonSlides) {
        slides.startAutoplay();
    }

    ionViewWillEnter() {
        this.getSpecialDiscountAndNewShop();
        localStorage.setItem('hometab', 'true');
        this.l_hide = localStorage.getItem("hideValue");
        this.l_notifyIcon = localStorage.getItem('NotificationBellIcon');
        this.events.unsubscribe('NotificationReceive');
        this.events.subscribe('NotificationReceive', () => {
            this.l_notifyIcon = localStorage.getItem('NotificationBellIcon');
            this.ref.detectChanges();
        });
        this.ref.detectChanges();
    }
    // Get Special Discount And NewShop
    getSpecialDiscountAndNewShop() {
        const options: any = {};
        const control = this;
        options.title = 'Get - Get SpecialDiscount And NewShop!!!';
        options.apiURL = this.env.shopApi.getSpecialDiscountAndNewShop + localStorage.getItem('userID');
        options.catchErrorText = 'ShopController: error => getSpecialDiscountAndNewShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            debugger
            if (data.Status[0].Success === true) {
                control.l_featuredShopList = data.FeaturedShopList;
                control.data = control.commonService.applyHaversine(control.l_featuredShopList);
                control.data.sort((locationA, locationB) => {
                    return locationA.distance - locationB.distance;
                });

                control.l_hotDiscountList = data.HotDiscountList;
                control.data = control.commonService.applyHaversine(control.l_hotDiscountList);

                control.l_promotionList = data.PromotionList;
                control.data = control.commonService.applyHaversine(control.l_promotionList);

                control.l_newShopList = data.NewShopList;
                control.data = control.commonService.applyHaversine(control.l_newShopList);
                control.data.sort((locationA, locationB) => {
                    return locationA.distance - locationB.distance;
                });

                control.data = control.commonService.applyHaversine(data.ShopList);
                control.data.sort((locationA, locationB) => {
                    return locationA.distance - locationB.distance;
                });

                var temp_shopList = [];
                for (let i = 0; i < data.ShopList.length; i++) {
                    temp_shopList.push(
                        {
                            ShopID: data.ShopList[i].ShopID,
                            ShopName: data.ShopList[i].ShopName,
                            ExpiryDate: data.ShopList[i].ExpiryDate,
                            UptoDiscount: data.ShopList[i].UptoDiscount,
                            ImageURL: data.ShopList[i].ImageURL,
                            LogoURL: data.ShopList[i].LogoURL,
                            distance: data.ShopList[i].distance,
                            StrEndDate: data.ShopList[i].StrEndDate,
                            Rating: data.ShopList[i].Rating,
                            Address1: data.ShopList[i].Address1,
                            State: data.ShopList[i].State,
                            City: data.ShopList[i].City,
                        })

                    if (i == 4) {
                        break;
                    }
                }
                control.l_shopList = temp_shopList;
            }
        };

        this.commonService.httpPost(options);
    }

    gotoInformation(l_shopID) {
        localStorage.setItem("shopID", l_shopID);
        localStorage.setItem('home', this.Ishome);
        this.router.navigate(['shop_information']);
    }

    async openModal(ev: any) {
        const modal = await this.modal.create({
            component: SearchShopModalPage
        });
        return await modal.present();
    }

    async viewShopList(list) {
        const control = this;
        const modal = await this.modal.create({
            component: ViewListModalPage,
            componentProps: {
                List: list
            }
        });
        return await modal.present();
    }

    openNotifications() {
        this.hidden == true;
        localStorage.setItem('home', this.Ishome);
        this.router.navigate(['notifications']);
    }

    viewShops() {
        this.router.navigate(['tabs/shop']);
    }
    scrollHandler(event) {
        this.l_header = true;
    }
    contenthandeler(event) {
        if (event.detail.scrollTop == 0) {
            this.l_header = false;
        }

    }
}
