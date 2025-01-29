import { Component, OnInit, ViewChild } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { Sqlservices } from '../../services/sqlservices';
import { ToastController, Platform, ModalController, LoadingController, ActionSheetController, Events } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FeedbackModalPage } from '../modal/feedback-modal/feedback-modal.page';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { SearchShopModalPage } from '../modal/search-shop-modal/search-shop-modal.page';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
    selector: 'app-shop-information',
    templateUrl: './shop-information.page.html',
    styleUrls: ['./shop-information.page.scss'],
})
export class ShopInformationPage implements OnInit {

    env: any;
    sqlService: any;
    l_reviewList: any = [];
    l_promotionList: any = [];
    public query: string;
    l_shopName;
    l_shopID;
    l_uptoDiscount;
    l_favouriteCount;
    l_isFavourite;
    l_totalReview;
    l_openingTime;
    l_closingTime;
    l_description;
    l_address;
    l_city;
    l_state
    l_rating;
    l_imageURL;
    l_phone;
    l_mobile;
    l_feedbackDescription;
    l_feedbackRating;
    l_distance;
    l_subscription;
    l_shopAdminID;
    l_userID;
    l_subscribeTopicName;
    l_BadgeTitle;

    constructor(public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private router: Router,
        public modal: ModalController,
        private launchNavigator: LaunchNavigator,
        private sqlite: SQLite,
        public fcm: FCM,
        public actionSheetController: ActionSheetController,
        private socialSharing: SocialSharing,
        public events: Events,
        public commonService: Commonservices,
        private platform: Platform) {
        this.env = new Env();
        this.sqlService = new Sqlservices(this.sqlite);
    }

    ionViewWillEnter() {
        this.modal.dismiss();
        this.l_userID = localStorage.getItem('userID');
        localStorage.removeItem('hometab');
        this.getShopdatabyID();
        this.platform.backButton.subscribe( () => {
            if( localStorage.getItem('home') == 'true'){
                localStorage.removeItem('home');
               localStorage.setItem('hometab','true');
            }
            else {
                this.router.navigate(['tabs/shop']);
            }
          });
    }

    //Get Shop
    getShopdatabyID() {
        const shopOption: any = {
            ShopID: localStorage.getItem("shopID"),
            UserID: localStorage.getItem('userID')
        }

        let options: any = {};
        var control = this;

        control.l_feedbackDescription = '';
        control.l_feedbackRating = 0;

        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.shopApi.getShopDatabyID;
        options.catchErrorText = 'ShopController: error => getShopdatabyID()';
        options.methodType = 'POST';
        options.paramData = shopOption;
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_reviewList = data.ReviewData;
                control.l_promotionList = data.PromotionList;
                var locations: any = [{ "Latitude": data.Result[0].Latitude, "Longitude": data.Result[0].Longitude }]
                var distance = control.commonService.applyHaversine(locations);
                control.l_distance = distance[0].distance

                localStorage.setItem('ShopName', control.l_shopName = data.Result[0].ShopName);
                control.l_shopID = data.Result[0].ShopID;
                control.l_uptoDiscount = data.Result[0].UptoDiscount;
                control.l_closingTime = data.Result[0].ClosingTime;
                control.l_openingTime = data.Result[0].OpeningTime;
                control.l_favouriteCount = data.Result[0].FavouriteCount;
                control.l_isFavourite = data.Result[0].IsFavourite;
                control.l_totalReview = data.Result[0].TotalRatingAndReviews;
                control.l_description = data.Result[0].Description;
                control.l_address = data.Result[0].Address1;
                control.l_city = data.Result[0].City;
                control.l_state = data.Result[0].State;
                control.l_rating = data.Result[0].Rating;
                control.l_phone = data.Result[0].Phone;
                control.l_mobile = data.Result[0].Mobile;
                control.l_imageURL = data.Result[0].ImageURL;
                control.l_subscription = data.Result[0].IsSubscription;
                control.l_shopAdminID = data.Result[0].ShopAdminID;
                control.l_subscribeTopicName = data.Result[0].SubscribeTopicName;
                control.l_BadgeTitle = data.Result[0].BadgeTitle;

                if (data.RatingData.length > 0)
                    control.l_feedbackRating = data.RatingData[0].RatingNo;

                if (data.FeedbackData.length > 0)
                    control.l_feedbackDescription = data.FeedbackData[0].Description;

                // const ShopRecentlyViewedTableData: any = {
                //     tableName: 'ShopRecentlyViewed_',
                //     column:[{columnName: 'ShopID', columnValue: control.l_shopID},
                //           {columnName: 'ImageURL', columnValue: control.l_imageURL}],
                //     // columnName: 'SearchingName',
                //     // columnValue: l_search
                // }
                // control.sqlService.insertShopSearchTable(ShopRecentlyViewedTableData);
                control.sqlService.insertShopRecentlyViewedTable(control.l_shopID, control.l_imageURL);
            }
        }

        this.commonService.httpPost(options);
    }

    ngOnInit() {
        localStorage.getItem('favourite');
    }

    goBack() {
        if (localStorage.getItem('favourite') == 'true') {
            localStorage.removeItem('favourite');
            this.router.navigate(['favorites']);
        }
        else if (localStorage.getItem('userShopList') == 'true') {
            localStorage.removeItem('userShopList');
            this.router.navigate(['user-ShopList']);
        }
        else if (localStorage.getItem('searchShopModal') == 'true') {
            localStorage.removeItem('searchShopModal');
            this.openModal1();
        }
        else if (localStorage.getItem('home') == 'true') {
            localStorage.removeItem('home');
            this.router.navigate(['tabs/home']);
        }
        else if (localStorage.getItem('suscribe') == 'true') {
            localStorage.removeItem('suscribe');
            this.router.navigate(['shop-subscription']);
        }
        else if (localStorage.getItem('featureShops') == 'true') {
            localStorage.removeItem('suscribe');
            this.router.navigate(['tabs/home']);
        }
        else if (localStorage.getItem('NewShops') == 'true') {
            localStorage.removeItem('suscribe');
            this.router.navigate(['tabs/home']);
        }
        else {
            this.router.navigate(['tabs/shop']);
        }
    }

    viewReview() {
        this.router.navigate(['review_all']);
    }

    favourite(shopID, isFavourite) {
        isFavourite = !isFavourite;
        localStorage.setItem('EventShopID', shopID);
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
                let optionMsg: any = {};
                if (isFavourite) {
                    control.gotofavourite();
                }
                else {
                    optionMsg.message = 'Removed from favourite List';
                    control.commonService.msgToast(optionMsg);
                }
                control.l_favouriteCount = data.Result[0].FavCount;
                control.l_isFavourite = data.Result[0].IsFavourite;
                localStorage.setItem('favCounts', control.l_favouriteCount);
                localStorage.setItem('FavHeart', control.l_isFavourite);
                control.events.publish('updateFav');
                return;
            }
        }

        this.commonService.httpPost(options);
    }
    async gotofavourite() {
        const actionSheet = await this.actionSheetController.create({
            header: "Added to favourite list",
            buttons: [{
                text: 'View my favourite list',
                handler: () => {
                    this.router.navigate(['favorites']);
                    localStorage.setItem('shopID', this.l_shopID);
                    localStorage.setItem('shopFav', "true");
                }
            },
            ]
        });
        await actionSheet.present();
    }

    async openModal(shopID) {
        var shopiD = shopID;

        const modal = await this.modal.create({
            component: FeedbackModalPage,
            componentProps: {
                Shop_ID: shopiD,
                Description: this.l_feedbackDescription,
                Rating: this.l_feedbackRating
            }
        });

        modal.onDidDismiss()
            .then((data) => {
                this.getShopdatabyID();
            });

        return await modal.present();
    }

    navme(address) {
        this.launchNavigator.navigate(address);
    }

    async openModal1() {
        const modal = await this.modal.create({
            component: SearchShopModalPage
        });

        modal.onDidDismiss()
            .then((data) => {
                this.getShopdatabyID();
                localStorage.removeItem("shopID");
            });
        return await modal.present();
    }

    goShare() {
        this.socialSharing.share("This App is good", "This is title for share", null, "https://okgoods.files.wordpress.com/2010/07/flowers1.jpg").then((res) => {
            // Sharing via email is possible
        }).catch(() => {
            // Sharing via email is not possible
        });
        //this.socialSharing.share("This App is good","This is title for share",null,"https://okgoods.files.wordpress.com/2010/07/flowers1.jpg");
    }

    ShopSubscription(shopID, isActive) {
        isActive = !isActive;

        const shopSubscriptionList: any = {
            ShopIDList: [{ ShopID: shopID }],
            IsActive: isActive,
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
        }

        let options: any = {};
        var control = this;
        options.title = 'Add User!!!';
        options.apiURL = this.env.shopApi.insertUpdateUserShopSubscriptionURL;
        options.catchErrorText = 'UserController: error => favourite()';
        options.methodType = 'POST';
        options.paramData = shopSubscriptionList;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                let optionMsg: any = {};
                if (isActive) {
                    control.fcm.subscribeToTopic(control.l_subscribeTopicName);
                    control.gotoSuscribed();
                }
                else {
                    control.fcm.unsubscribeFromTopic(control.l_subscribeTopicName);
                    optionMsg.message = 'This shop has been Unsuscribed.';
                    control.commonService.msgToast(optionMsg);
                }
                control.l_subscription = isActive;
                return;
            }
        }

        this.commonService.httpPost(options);
    }

    async gotoSuscribed() {
        const actionSheet = await this.actionSheetController.create({
            header: "Added to suscribed list",
            buttons: [{
                text: 'View my suscribed list',
                handler: () => {
                    this.router.navigate(['shop-subscription']);
                    localStorage.setItem('shopID', this.l_shopID);
                    localStorage.setItem('shopSus', "true");
                }
            },
            ]
        });
        await actionSheet.present();
    }
}
