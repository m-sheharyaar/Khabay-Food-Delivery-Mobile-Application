import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, PopoverController, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
  selector: 'app-delete-single-shop-popover',
  templateUrl: './delete-single-shop-popover.page.html',
  styleUrls: ['./delete-single-shop-popover.page.scss'],
})
export class DeleteSingleShopPopoverPage implements OnInit {
  env: any;
  l_shopID;
  l_visibel;
  l_show;
  l_shopList: any = [];

  constructor(private http: HttpClient,
    public toastCtrl: ToastController,
    private navParams: NavParams,
    public ToastCtrl: LoadingController,
    public modal: ModalController,
    private router: Router,
    public popoverController: PopoverController,
    public commonService : Commonservices) {
    this.env = new Env();
  }

  ngOnInit() {

    this.l_shopID = this.navParams.get('Shop_ID');
    this.l_show = this.navParams.get('Status') === 'Visible' ? 'Hide' : 'Visible';
    this.l_visibel = this.navParams.get('Status') === 'Visible' ? 1 : 0;
    this.l_shopList = this.navParams.get('ShopList');
  }

  deleteSingleShop() {
    const shopDeletepram: any = {
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
      ShopID: this.l_shopID,
      IsDeleted: 1,
      IsDeletedAll: 0,
    }

    let options: any = {};
    let control = this;
    options.title = 'Delete Single Shop!!!';
    options.apiURL = this.env.shopApi.deleteUserShops;
    options.catchErrorText = 'UserController: error => deleteSingleShop()';
    options.methodType = 'POST';
    options.paramData = shopDeletepram;
    options.preventShowOnSucess = true;
    options.successCallback = function (data) {
      if (data.Status[0].Success === true) {
        localStorage.setItem('isShopDelete', 'true');
        control.popoverController.dismiss();
      }
    }
    this.commonService.httpPost(options);
  }

  hideSingleShop(visibel) {
    const shopDeletepram: any = {
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
      ShopID: this.l_shopID,
      IsVisible: visibel,
      IsVisibleAll: 0,
    }

    let options: any = {};
    let control = this;
    options.title = 'Hide Single Shop!!!';
    options.apiURL = this.env.shopApi.hideUserShops;
    options.catchErrorText = 'UserController: error => hideSingleShop()';
    options.methodType = 'POST';
    options.paramData = shopDeletepram;
    options.preventShowOnSucess = true;
    options.successCallback = function (data) {
      if (data.Status[0].Success === true) {
        control.popoverController.dismiss();
        control.l_visibel = false;
        localStorage.setItem('IsVisible', visibel);
      }
    };
    this.commonService.httpPost(options);
  }

  updateShop(ShopID) {
    const control = this;

    for (let i = 0; i < control.l_shopList.length; i++) {
      if (control.l_shopList[i].ShopID === ShopID) {
        // this.moneyReceive = navParams.get('shopList');
        // this.shopList = control.shopList[i];
        // control. navCtrl.navigateForward(['/shop-update', {ShopsList : control.shopList[i]}]);
        //  control.router.navigateByUrl('/shop-update');

        const json = JSON.stringify(control.l_shopList[i]);
        localStorage.setItem('shopData', json);
        control.router.navigate(['shop-update']);
        control.popoverController.dismiss();
        // control.router.navigate(['/shop-update', {ShopsList : control.shopList[i]}]);
        return;
      }
    }
  }

}
