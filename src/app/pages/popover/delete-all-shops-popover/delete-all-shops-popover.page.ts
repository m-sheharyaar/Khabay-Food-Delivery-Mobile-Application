import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, PopoverController, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
  selector: 'app-delete-all-shops-popover',
  templateUrl: './delete-all-shops-popover.page.html',
  styleUrls: ['./delete-all-shops-popover.page.scss'],
})
export class DeleteAllShopsPopoverPage implements OnInit {
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

  deleteAllShop() {
    const shopDeletepram: any = {
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
      ShopID: 0,
      IsDeleted: 0,
      IsDeletedAll: 1,
    };

    const options: any = {};
    const control = this;
    options.title = 'Delete Single Shop!!!';
    options.apiURL = this.env.shopApi.deleteUserShops;
    options.catchErrorText = 'UserController: error => DeleteSingleShop()';
    options.methodType = 'POST';
    options.paramData = shopDeletepram;
    options.preventShowOnSucess = true;
    options.successCallback = function (data) {
      if (data.Status[0].Success === true) {
        control.popoverController.dismiss();
      }
    };
    this.commonService.httpPost(options);
  }

}
