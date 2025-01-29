import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, PopoverController, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
  selector: 'app-delete-status-popover',
  templateUrl: './delete-status-popover.page.html',
  styleUrls: ['./delete-status-popover.page.scss'],
})
export class DeleteStatusPopoverPage implements OnInit {
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

  ngOnInit() { }

  deleteStatus() {
    const updateabout: any = {
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
      UserStatusAboutID: 0,
      IsDeleted: 0,
      IsDeletedAll: 1,
    }
    let options: any = {};
    var control = this;
    options.title = 'delete status !!!';
    options.apiURL = this.env.userApi.deletestatus;
    options.catchErrorText = 'UserController: error => deleteStatus()';
    options.methodType = 'POST';
    options.paramData = updateabout;
    options.preventShowOnSucess = true;
    options.successCallback = function (data) {
      if (data.Status[0].Success == true) {
        control.popoverController.dismiss();
      }
    }

    this.commonService.httpPost(options);
  }
}
