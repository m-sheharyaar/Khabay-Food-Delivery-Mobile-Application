import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController,Events,ToastController,NavParams,ModalController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
    selector: 'app-user-profile-edit',
    templateUrl: './user-profile-edit.page.html',
    styleUrls: ['./user-profile-edit.page.scss'],
})
export class UserProfileEditPage implements OnInit {
    env: any;
    l_userID;
    l_firstName;
    l_lastName;
    l_userName;
    l_countryCode;
    l_phoneNumber;

    constructor(public modal: ModalController,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private navParams: NavParams,
        public events: Events,
        private router: Router,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() {
        this.l_firstName = this.navParams.get('FirstName');
        this.l_lastName = this.navParams.get('LastName');
        this.l_userName = this.navParams.get('UserName');
        this.l_countryCode = this.navParams.get('CountryCode');
        this.l_phoneNumber = this.navParams.get('PhoneNumber');
    }

    editUser() {
        const editusers: any = {
            UserID: localStorage.getItem('userID'),
            UserName: this.l_userName,
            FirstName: this.l_firstName,
            LastName: this.l_lastName,
            CountryCode: this.l_countryCode,
            PhoneNumber: this.l_phoneNumber,
        }

        let options: any = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.updateUserURL;
        options.catchErrorText = 'UserController: error => addUser()';
        options.methodType = 'POST';
        options.paramData = editusers;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                //localStorage.setItem('FirstName', control.l_firstName);
                //localStorage.setItem('LastName', control.l_lastName);
                control.commonService.profileText(control.l_firstName, control.l_lastName);
                control.events.publish('updateName');
                control.modal.dismiss();
            }
        }

        this.commonService.httpPost(options);
    }

    closeModel() {
        this.modal.dismiss();
    }

    getFirstLetterCapital(value: any) {
        return this.commonService.getFirstCapitalLetter(value);
    };
}
