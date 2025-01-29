import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, PopoverController, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-all-delete-subscribed-shop',
  templateUrl: './all-delete-subscribed-shop.page.html',
  styleUrls: ['./all-delete-subscribed-shop.page.scss'],
})
export class AllDeleteSubscribedShopPage implements OnInit {
  env: any;
  l_shopList : any = [];
   
  constructor(private http: HttpClient,
    public toastCtrl: ToastController,
    private navParams: NavParams,
    public ToastCtrl: LoadingController,
    public modal: ModalController,
    private router: Router,
    public fcm: FCM,
    public popoverController: PopoverController,
    public commonService : Commonservices) {
    this.env = new Env();
  }

  ngOnInit() {
    this.l_shopList = this.navParams.get('Shop_List');
  }

  deleteAllSuscribeShops() {
    const DeteleAllFavourite: any = {
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
    }
    let options: any = {};
    var control = this;
    options.title = 'deleteAllSuscribeShops';
    options.apiURL = this.env.shopApi.deleteSuscribedShop;
    options.catchErrorText = 'UserController: error => deleteAllSuscribeShops()';
    options.methodType = 'POST';
    options.paramData = DeteleAllFavourite;
    options.preventShowOnSucess = true;
    options.successCallback = function (data) {
      if (data.Status[0].Success == true) {
        for (var i = 0; i < control.l_shopList.length; i++) { 
            control.fcm.unsubscribeFromTopic(control.l_shopList[i].SubscribeTopicName);          
        }
        let optionMsg: any = {};
        optionMsg.message = 'Delete All from SuscribeList';
        control.commonService.msgToast(optionMsg);
        control.popoverController.dismiss();
      }
    }

    this.commonService.httpPost(options);
  }
}
