import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, PopoverController, NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
  selector: 'app-single-about-status-popover',
  templateUrl: './single-about-status-popover.page.html',
  styleUrls: ['./single-about-status-popover.page.scss'],
})
export class SingleAboutStatusPopoverPage implements OnInit {
  env: any;
  l_aboutStatusID: null;

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
    this.l_aboutStatusID = this.navParams.get('aboutsatusId');
  }

  deleteStatus(aboutstatusID) {
    const updateabout: any = {
      UserID: localStorage.getItem('userID'),
      UserName: localStorage.getItem('userName'),
      UserStatusAboutID: aboutstatusID,
      IsDeleted: 1,
      IsDeletedAll: 0,
    }
    let options: any = {};
    var control = this;
    options.title = 'delete Status!!!';
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
