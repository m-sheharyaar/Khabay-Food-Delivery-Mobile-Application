import { Component, OnInit } from '@angular/core';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, PopoverController, NavParams, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-favourite-popover',
  templateUrl: './favourite-popover.page.html',
  styleUrls: ['./favourite-popover.page.scss'],
})
export class FavouritePopoverPage implements OnInit {
  env: any;
  l_shopId = null;

  constructor(public popover: PopoverController,
    private navParams: NavParams,
    public http: HttpClient,
    public actionSheetController: ActionSheetController,
    public toastCtrl: ToastController,
    public ToastCtrl: LoadingController,
    public commonService : Commonservices) {
    this.env = new Env();
  }

  ngOnInit() {
    this.l_shopId = this.navParams.get('Shop_ID');
  }

  async favourite(shop_id) {
    const actionSheet = await this.actionSheetController.create({
      header: "Are you sure you want to delete.",
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.removeFavourite(shop_id);
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

  removeFavourite(shop_id) {
    const favouriteheart: any = {
      ShopIDList: [{ ShopID: shop_id }],
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
        localStorage.setItem('isFavDelete', 'true');
        control.popover.dismiss();
        return;
      }
    }

    this.commonService.httpPost(options);
  }

}
