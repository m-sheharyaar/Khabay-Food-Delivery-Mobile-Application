import { Component, OnInit } from '@angular/core';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, PopoverController, NavParams, ModalController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-single-delete-suscribed-shop',
  templateUrl: './single-delete-suscribed-shop.page.html',
  styleUrls: ['./single-delete-suscribed-shop.page.scss'],
})
export class SingleDeleteSuscribedShopPage implements OnInit {

  env: any;
  l_shopId = null;
  l_shopSubscribeTopic;
  constructor(public popover: PopoverController,
    private router: Router,
    private navParams: NavParams,
    public http: HttpClient,
    public actionSheetController: ActionSheetController,
    public toastCtrl: ToastController,
    public fcm: FCM,
    public ToastCtrl: LoadingController,
    public commonService : Commonservices) {
    this.env = new Env();
  }

  ngOnInit() {
    this.l_shopId = this.navParams.get('Shop_ID');
    this.l_shopSubscribeTopic = this.navParams.get('Subscribe_TopicName');
  }

  async SuscribeActionSheet(shop_id) {
    const actionSheet = await this.actionSheetController.create({
      header: "Are you sure you want to delete.",
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.removeSuscribe(shop_id);
        }
      },
      {
        text: 'No',
        handler: () => {
          this.popover.dismiss();
        }
      },
        // {
        //   text: 'Cancle',
        //   role: 'cancel'
        // }
      ]
    });
    await actionSheet.present();
  }

  removeSuscribe(shop_id) {
    const Suscribe: any = {
      ShopIDList: [{ ShopID: shop_id }],
      IsActive: 0,
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
    }

    let options: any = {};
    var control = this;
    options.title = 'Add User!!!';
    options.apiURL = this.env.shopApi.insertUpdateUserShopSubscriptionURL;
    options.catchErrorText = 'UserController: error => removeSuscribe()';
    options.methodType = 'POST';
    options.paramData = Suscribe;
    options.isLoader = false;
    options.preventShowOnSucess = true;
    options.successCallback = function (data) {
      if (data.Status[0].Success == true) {
        control.fcm.unsubscribeFromTopic(control.l_shopSubscribeTopic);
        let optionMsg: any = {};
        optionMsg.message = 'Delete from SuscribeList';
        control.commonService.msgToast(optionMsg);
        localStorage.setItem('isSusDelete', 'true');
        control.popover.dismiss();
        return;
      }
    }

    this.commonService.httpPost(options);
  }
}
