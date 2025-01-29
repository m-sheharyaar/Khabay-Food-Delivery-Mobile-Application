import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams, Events, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
    selector: 'app-about-status-update-modal',
    templateUrl: './about-status-update-modal.page.html',
    styleUrls: ['./about-status-update-modal.page.scss'],
})
export class AboutStatusUpdateModalPage implements OnInit {
    @ViewChild('input') input;

    env: any;
    isbtnDisabled = true;
    l_userStatusAboutID;
    l_description;
    maxlength;

    constructor(public modal: ModalController,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private navParams: NavParams,
        private router: Router,
        public events: Events,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() {
        this.l_description = this.navParams.get('aboutstat');
        this.l_userStatusAboutID = this.navParams.get('aboutsatusId');
        this.getLength(this.l_description, 100);
        setTimeout(() => {
            this.input.setFocus();
        }, 1000);
    }

    updateAbout() {
        const insertabout: any = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            UserStatusAboutID: this.l_userStatusAboutID,
            Description: this.l_description,
        }

        let options: any = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.insertUpdateUserAboutStatusURL;
        options.catchErrorText = 'UserController: error => addUser()';
        options.methodType = 'POST';
        options.paramData = insertabout;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true)
                localStorage.setItem('userAboutStatusID', data.Status[0].Value);
            localStorage.setItem('userAboutStatus', control.l_description);
            control.events.publish('updateStatus');
            control.modal.dismiss();
        }
        this.commonService.httpPost(options);
    }

    closeModel() {
        this.modal.dismiss();
    }

    getLength(value: any, totalTextValue) {
        this.maxlength = this.commonService.getTextBoxLength(value, totalTextValue);
    };

    formValidation() {
        var aboutStatus = false;
        aboutStatus = this.commonService.commonValidation(this.l_description, 1);
        if (aboutStatus == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }
}
