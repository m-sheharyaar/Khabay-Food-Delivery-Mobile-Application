import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { reject } from 'q';

@Component({
    selector: 'app-signup-verification',
    templateUrl: './signup-verification.page.html',
    styleUrls: ['./signup-verification.page.scss'],
})
export class SignupVerificationPage implements OnInit {
    @ViewChild('Field1') Field1;

    env: any;
    l_verifyCode1 = '';
    l_verifyCode2 = '';
    l_verifyCode3 = '';
    l_verifyCode4 = '';
    maxTime: any = 60;
    l_timer;
    l_hidevalue = false;
    l_isResend = false;
    l_phoneNo;
    l_phonCode;
    isbtnDisabled = true;

    constructor(
        private router: Router,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public alertController: AlertController,
        public commonService: Commonservices,
        public plt: Platform) {
        this.env = new Env();
    }

    ngOnInit() {
        setTimeout(() => {
            this.Field1.setFocus();
        }, 2000);
        this.plt.backButton.subscribeWithPriority(0,() => {
            reject();
          });
    }

    ionViewWillEnter() {
        this.l_verifyCode1 = '';
        this.l_verifyCode2 = '';
        this.l_verifyCode3 = '';
        this.l_verifyCode4 = '';
        this.l_phoneNo = localStorage.getItem('PhoneNumber');
        this.l_phonCode = localStorage.getItem('CountryCode');
        this.startTimer();
    }

    verificationCode() {
        if (this.isbtnDisabled == true) {
            return;
        }

        let options: any = {};
        var control = this;
        const VerifyCode = this.l_verifyCode1 + this.l_verifyCode2 + this.l_verifyCode3 + this.l_verifyCode4;
        options.title = 'Verification Code!!!';
        options.apiURL = this.env.userApi.getVerificationCodeURL + VerifyCode;
        options.catchErrorText = 'signup-phoneController: error => verificationCode()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.verifyUserByPhoneNumber()
            }
        }

        control.verifyUserByPhoneNumber();//For testing
        // this.commonService.httpPost(options);
    }

    verifyUserByPhoneNumber() {
        let options: any = {};
        var control = this;
        options.title = 'Verification Code!!!';
        options.apiURL = this.env.userApi.verifyUserByPhoneNumberURL + localStorage.getItem('PhoneNumber');
        options.catchErrorText = 'signup-phoneController: error => verifyUserByPhoneNumber()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                if (data.Result.length > 0) {
                    // localStorage.setItem('userID', data.Result[0].UserID);
                   // localStorage.setItem('UserName', data.Result[0].UserName);
                    //localStorage.setItem('FirstName', data.Result[0].FirstName);
                    //localStorage.setItem('LastName', data.Result[0].LastName);
                    control.deviceVerification(data.Result[0].UserID);
                }
                else {
                    control.router.navigateByUrl('/signup_user_registration');
                }
            }
        }

        this.commonService.httpPost(options);
    }

    insertAgainPhoneVerificationCode() {
        let options: any = {};
        var control = this;
        options.title = 'Verification Code!!!';
        options.apiURL = this.env.userApi.insertVerificationCodeURL;
        options.catchErrorText = 'signup-VerificationController: error => InsertAgainPhoneVerificationCode()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.maxTime = 60;
            }
        }
        this.commonService.httpPost(options);
    }

    startTimer() {
        this.l_timer = setTimeout(x => {
            if (this.maxTime <= 0) { }
            this.maxTime -= 1;

            if (this.maxTime > 0) {
                this.l_hidevalue = false;
                this.startTimer();
            }
            else {
                this.l_hidevalue = true;
            }
        }, 1000);
    }

    reSendCode() {
        this.maxTime = 60;
        this.l_isResend = true;
        this.l_hidevalue = false;
        this.startTimer();
        this.insertAgainPhoneVerificationCode();
    }

    verifyCodeValidation() {
        var verifyCode1 = false;
        var verifyCode2 = false;
        var verifyCode3 = false;
        var verifyCode4 = false;

        verifyCode1 = this.commonService.commonValidation(this.l_verifyCode1, 1);
        verifyCode2 = this.commonService.commonValidation(this.l_verifyCode2, 1);
        verifyCode3 = this.commonService.commonValidation(this.l_verifyCode3, 1);
        verifyCode4 = this.commonService.commonValidation(this.l_verifyCode4, 1);

        if (verifyCode1 == false && verifyCode2 == false && verifyCode3 == false && verifyCode4 == false) {
            this.isbtnDisabled = false;
            this.verificationCode();
        }
        else {
            this.isbtnDisabled = true;
        }
    }

    gotoNextField(nextElement, textLength) {
        var Enterlength = textLength.length;
        if (Enterlength == 1) {
            nextElement.setFocus();
        }
    }

    goBack() {
        localStorage.removeItem('PhoneNumber')
        this.router.navigateByUrl('/signup_phone');
    }

    deviceVerification(userID) {
        const deviceVerificationParam: any = {
            DeviceID: localStorage.getItem('DeviceID'),
            UserID: userID,
        }

        let options: any = {};
        var control = this;
        options.title = 'Device Verification!!!';
        options.apiURL = this.env.userApi.deviceVerification;
        options.catchErrorText = 'signupWelcomeController: error => deviceVerification()';
        options.methodType = 'POST';
        options.paramData = deviceVerificationParam;
        options.isPopup = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.findUser(userID);
            }
        }

        options.callback = function (data) {
            if (data.Status[0].Success == false) {
                control.presentAlertConfirm(userID);
            }
        }
        this.commonService.httpPost(options);
    }

    async presentAlertConfirm(userID) {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: '<strong>Are you sure you logout for all devices</strong>!!!',
            buttons: [
                {
                    text: 'Yes',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        this.findUser(userID);
                    }
                }, {
                    text: 'No',
                    handler: () => {
                        this.router.navigateByUrl('/signup_phone');
                    }
                }
            ],
            backdropDismiss: false,
        });

        await alert.present();
    }

    findUser(userID) {
        this.commonService.userRegister(
            userID,
            localStorage.getItem('PhoneNumber'),
            localStorage.getItem('CountryCode'),
            localStorage.getItem('DeviceID'),
            "",
            "",
            "");
    }
}
