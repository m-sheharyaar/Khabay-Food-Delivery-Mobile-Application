import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PopoverController, ModalController, ToastController, Platform, LoadingController, ActionSheetController, Events } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.page.html',
    styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

    env: any;
    l_newShopList: any = [];
    l_notificationCount;
    l_hide = "hide";
    l_notificationTitle;
    l_notificationBody;
    l_notfication;
    isNotification = 'true';
    l_notificationList: any = [];
    l_notficationAll;
    l_deleteCount = 0;
    l_hdnOptions = false;
    l_hdnCheckbox = true;
    selection: boolean = false;
    l_notifiList: Array<NotifiListPojo> = new Array<NotifiListPojo>();

    constructor(private http: HttpClient,
        public popoverController: PopoverController,
        public actionSheetController: ActionSheetController,
        public modal: ModalController,
        public loadingController: LoadingController,
        public plt: Platform,
        private router: Router,
        private fcm: FCM,
        public toastController: ToastController,
        public ref: ChangeDetectorRef,
        public events: Events,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() {
        localStorage.removeItem('NotificationBellIcon');
        this.events.publish('NotificationBellIconRemove');
        localStorage.removeItem('hometab');
        this.plt.backButton.subscribe( () => {
            if( localStorage.getItem('home') == 'true'){
                localStorage.removeItem('home');
                localStorage.setItem('hometab','true');
            }
          });
    }

    ionViewWillEnter() {
        this.getNotification();
        localStorage.setItem("hideValue", this.l_hide);
        localStorage.removeItem('shopNameForNotification');
        localStorage.removeItem('NotificationBellIcon');
        this.events.publish('NotificationBellIconRemove');
        this.ref.detectChanges();
    }

    // Get Notification
    getNotification(infiniteScroll?, refresher?) {
        let options: any = {};
        var control = this;
        options.title = 'Get - Get Shop!!!';
        options.apiURL = this.env.notificationApi.getShopNotificationURL + localStorage.getItem('userID');
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true)
                control.l_notfication = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.ResultData, control.l_notfication);
            control.l_notficationAll = data.ResultData;
            control.setCheckBoxonRefresh();
            control.ref.detectChanges();
        }
        this.commonService.httpPost(options);
    }

    doRefresh(refresher) {
        this.getNotification("", refresher);
    }

    doInfinite(infiniteScroll) {
        this.getNotification(infiniteScroll);
    }

    setCheckBoxonRefresh() {
        if (this.l_notificationList.length > 0) {
            for (var i = 0; i < this.l_notficationAll.length; i++) {
                for (var j = 0; j < this.l_notificationList.length; j++) {
                    if (this.l_notficationAll[i].NotificationID == this.l_notificationList[j].NotificationID) {
                        this.l_notficationAll[i].isSelected = true;
                    }
                }
            }
        }
    }

    async notificationRemove(notificationId, shopName) {
        const actionSheet = await this.actionSheetController.create({
            buttons: [{
                text: 'Remove this notification',
                icon: 'trash',
                handler: () => {
                    this.deleteNotification([{ NotificationID: notificationId }], shopName);
                }
            },
            {
                text: 'Close',
                icon: 'close',
                role: 'cancel'
            }
            ]
        });
        await actionSheet.present();
    }

    deleteNotification(notificationId, removeAll) {
        let lstNotificationIds = [];
        if (removeAll) {
            for (var i = 0; i < this.l_notficationAll.length; i++) {
                lstNotificationIds.push({
                    NotificationID: this.l_notficationAll[i].NotificationID
                });
            }
        }
        else {
            lstNotificationIds = notificationId;
        }

        if (this.l_notificationList.length > 0) {
            lstNotificationIds = [];
            lstNotificationIds = this.l_notificationList;
        }

        const notificationDeletepram: any = {
            UserID: localStorage.getItem('userID'),
            NotificationIDList: lstNotificationIds,
        }

        let options: any = {};
        let control = this;
        options.title = 'Hide Single Shop!!!';
        options.apiURL = this.env.notificationApi.deleteNotificationURL;
        options.catchErrorText = 'UserController: error => hideSingleShop()';
        options.methodType = 'POST';
        options.paramData = notificationDeletepram;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success === true) {
                let optionMsg: any = {};
                optionMsg.message = 'Your Notification Remove';
                control.commonService.msgToast(optionMsg);
                control.getNotification();
                control.l_hdnCheckbox = true;
                control.l_hdnOptions = false;
                control.selection = false;
                control.l_deleteCount = 0;
                control.l_notificationList = [];
            }
        };
        this.commonService.httpPost(options);
    }

    gotoShop(shopName) {
        localStorage.setItem('shopNameForNotification', shopName);
        localStorage.setItem('IsNotification', this.isNotification);
        this.router.navigate(['tabs/shop']);
    }

    hndClick(event, notificationID, shopName, val) {
        if (val == 1)
            this.notificationRemove(notificationID, false);
        else
            this.gotoShop(shopName);

        event.stopPropagation();
    }

    selectItem(index: number, list: NotifiListPojo) {
        setTimeout(() => {
            this.selection = true;
            list.isSelected = list.isSelected ? false : true;
            this.l_notifiList[index] = list;
            if (list.isSelected) {
                this.l_notificationList.push({ NotificationID: list.NotificationID });
                this.l_deleteCount = this.l_deleteCount + 1;
            }
            else {
                for (var i = 0; i < this.l_notificationList.length; i++) {
                    if (this.l_notificationList[i].NotificationID == list.NotificationID) {
                        this.l_notificationList.splice(i, 1);
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

    goBack() {
        if (localStorage.getItem('home') == 'true') {
            localStorage.removeItem('home');
            this.router.navigate(['tabs/home']);
        }
        else{
            this.router.navigate(['tabs/settings']);
        }
    }
}
class NotifiListPojo {
    NotificationID = 0;
    ShopName = '';
    isSelected: boolean;
}
