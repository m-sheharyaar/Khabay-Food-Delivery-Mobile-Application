import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, PopoverController, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
  selector: 'app-delete-all-favourite-popover',
  templateUrl: './delete-all-favourite-popover.page.html',
  styleUrls: ['./delete-all-favourite-popover.page.scss'],
})
export class DeleteAllFavouritePopoverPage implements OnInit {
  env: any;

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
  }

  deleteAllFavouriteShops() {
    const DeteleAllFavourite: any = {
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
    }
    let options: any = {};
    var control = this;
    options.title = 'deleteAllFavouriteShops';
    options.apiURL = this.env.shopApi.deleteAllFavouriteShop;
    options.catchErrorText = 'UserController: error => deleteAllFavouriteShops()';
    options.methodType = 'POST';
    options.paramData = DeteleAllFavourite;
    options.preventShowOnSucess = true;
    options.successCallback = function (data) {
      if (data.Status[0].Success == true) {
        let optionMsg: any = {};
        optionMsg.message = 'Delete All from wishList';
        control.commonService.msgToast(optionMsg);
        control.popoverController.dismiss();
      }
    }

    this.commonService.httpPost(options);
  }
}
