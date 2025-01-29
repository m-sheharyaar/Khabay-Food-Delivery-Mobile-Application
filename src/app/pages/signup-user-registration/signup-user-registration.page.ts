import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Events, Platform, ToastController} from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { UserVM } from '../../viewModel/user-vm';
import { Router } from '@angular/router';
import { reject } from 'q';

@Component({
    selector: 'app-signup-user-registration',
    templateUrl: './signup-user-registration.page.html',
    styleUrls: ['./signup-user-registration.page.scss'],
})
export class SignupUserRegistrationPage implements OnInit {
    env: any;
    userVm: any;
    isbtnDisabled = true;
    l_phoneNo: any;
    l_usernameLength;

    constructor(
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private router: Router,
        public events: Events,
        public commonService: Commonservices,
        public plt: Platform) {
        this.env = new Env();
        this.userVm = new UserVM();
    }

    ngOnInit() {
        if (localStorage.getItem('UserName') == null)
            this.l_usernameLength = 10;
        else
            this.l_usernameLength = this.getLength(localStorage.getItem('UserName'), 10);
            this.plt.backButton.subscribeWithPriority(0,() => {
                reject();
              });
    }

    ionViewWillEnter() {
        this.l_phoneNo = localStorage.getItem('CountryCode') + localStorage.getItem('PhoneNumber');
        //  this.userVm.user.UserID = localStorage.getItem('userID');
        //  this.userVm.user.UserName = localStorage.getItem('UserName');
        //  this.userVm.user.FirstName = localStorage.getItem('FirstName');
        //  this.userVm.user.LastName = localStorage.getItem('LastName');
    }

    addUser() {
        this.commonService.userRegister(
            0,
            localStorage.getItem('PhoneNumber'),
            localStorage.getItem('CountryCode'),
            localStorage.getItem('DeviceID'),
            this.userVm.user.UserName,
            this.userVm.user.FirstName,
            this.userVm.user.LastName
        );
    }

    formValidation() {
        var firstName = false;
        var lastName = false;
        var userName = false;

        firstName = this.commonService.commonValidation(this.userVm.user.FirstName, 3);
        lastName = this.commonService.commonValidation(this.userVm.user.LastName, 3);
        userName = this.commonService.commonValidation(this.userVm.user.UserName, 6);

        if (firstName == false && lastName == false && userName == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }

    goBack() {
        //  localStorage.removeItem('userID');
        // localStorage.removeItem('UserName');
        // localStorage.removeItem('FirstName');
        // localStorage.removeItem('LastName');
        this.router.navigateByUrl('/signup_verification');
    }

    getLength(value: any, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    }

    public onKeyUp(event: any) {
        let newValue = event.target.value;

        let regExp = new RegExp('^[A-Za-z0-9?]+$');

        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }

        this.formValidation();
    }

    getFirstLetterCapital(value: any) {
        return this.commonService.getFirstCapitalLetter(value);
    };
}
