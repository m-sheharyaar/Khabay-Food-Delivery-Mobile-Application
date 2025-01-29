import { HttpClient, HttpParams } from '@angular/common/http';
import { Commonservices } from '../services/commonservices'
import { Env } from '../services/env';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Http, RequestMethod, RequestOptions, Headers } from '@angular/http';

export class Notificationservices {
    env: any;

    constructor(
        public http: HttpClient,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public htttp: Http,
        public commonService :Commonservices
    ) {
        this.env = new Env();
    }

    ////New Shop Add Notification////
    newNotification(options) {
        var body = JSON.stringify({
            "to": '/topics/' + options.topic,
            "content_available": true,
            "notification": {
                "title": options.title,
                "body": options.body,
                "click_action": "FCM_PLUGIN_ACTIVITY"
            },
            "data": {
                "ID": options.shopID,
                "extra": "juice",
                "priority": "high",
                "show_in_foreground": true,
            },
            "show_in_foreground": true,
        });
        var header = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'key=AIzaSyDfYSP9dtOZJtbAb_2cYm59EMK7WZ9vUk8' });
        var request = new RequestOptions({ method: RequestMethod.Post, headers: header });
        return new Promise((resolve, reject) => {
            this.htttp.post('https://fcm.googleapis.com/fcm/send', body, request)
                .subscribe(res => {
                    resolve(res);
                    this.addShopUpdateNotification(options.body, options.shopID);
                }, (err) => {
                    reject(err);
                });
        });
    }

    addShopUpdateNotification(body, shopID) {
        const insertNotification: any = {
            UserName: localStorage.getItem('userName'),
            UserID: localStorage.getItem('userID'),
            Description: body,
            ShopID: shopID,
            ClientSideDate: this.commonService.ConvertLocalToUTCDateTime(new Date())
        }

        let options: any = {};
        options.title = 'update Shop!!!';
        options.apiURL = this.env.notificationApi.shopNotificationURL;
        options.catchErrorText = 'UserController: error => updateShop()';
        options.methodType = 'POST';
        options.paramData = insertNotification;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                return;
            }
        }
        this.commonService.httpPost(options);
    }
}
