import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController,Platform } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
//import * as intlTelInput from 'intl-tel-input';
import * as intlTelInputUtils from 'intl-tel-input/build/js/utils';
import * as intlTelInput from 'intl-tel-input/build/js/intlTelInput';
import { reject } from 'q';

@Component({
    selector: 'app-signup-phone',
    templateUrl: './signup-phone.page.html',
    styleUrls: ['./signup-phone.page.scss'],
})
export class SignupPhonePage implements OnInit {
    env: any;
    l_phoneNo = '';
    // l_countryCode = '';
    isbtnDisabled = true;
    l_countryList = [];
    l_valid;
    private inteliNumerInputElement: any;

    constructor(
        private router: Router,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public plt: Platform,
        public commonService: Commonservices) {
        this.env = new Env();
        localStorage.removeItem('PhoneNumber');
        localStorage.setItem('userToken', '');
    }

    ngOnInit() {
        let control = this;
        this.getAllCountries();
        this.plt.backButton.subscribeWithPriority(0,() => {
            control.inteliNumerInputElement._closeDropdown(); 
            reject();
          });
    }

    insertPhoneVerificationCode() {
        //this.l_phoneNo = this.inteliNumerInputElement.getNumber(),
        this.l_valid = this.inteliNumerInputElement.isValidNumber();
        if (this.l_valid == true) {
            let options: any = {};
            var control = this;
            options.title = 'Verification Code!!!';
            options.apiURL = this.env.userApi.insertVerificationCodeURL;
            options.catchErrorText = 'signup-phoneController: error => insertPhoneVerificationCode()';
            options.methodType = 'GET';
            options.preventShowOnSucess = true;
            options.successCallback = function (data) {
                if (data.Status[0].Success == true) {
                    localStorage.setItem('CountryCode', control.inteliNumerInputElement.getSelectedCountryData().dialCode);
                    localStorage.setItem('UserCountryName', 'Pakistan');
                    if (control.l_phoneNo.charAt(0) === '0')
                        control.l_phoneNo = control.l_phoneNo.substr(1);
                    localStorage.setItem('PhoneNumber', control.l_phoneNo);
                    // control.uniqueDeviceID.get()
                    // .then((uuid: any) => localStorage.setItem('DeviceID', uuid))
                    // .catch((error: any) => console.log(error));
                    //localStorage.setItem('DeviceID', control.l_deviceId);  
                    control.router.navigateByUrl('/signup_verification');
                }
            }
            this.commonService.httpPost(options);
        }
        else {
            let optionMsg: any = {};
            optionMsg.message = 'Please enter valid phone number';
            this.commonService.msgToast(optionMsg);
            return;
        }
    }

    getAllCountries() {
        let options: any = {};
        var control = this;
        options.title = 'Verification Code!!!';
        options.apiURL = this.env.commonApi.getAllCountriesURL;
        options.catchErrorText = 'signup-phoneController: error => getAllCountries()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
            //    control.l_countryList = data.Result;
                const selectedCoutnries = data.Result.map((country) => {
                    return country.CountryISOCode;
                })

                const defaultOptions = {
                    onlyCountries: selectedCoutnries,
                    utilsScript: intlTelInputUtils,
                    preferredCountries: ['PK']
                };
                const numberInput = document.querySelector("#phone");
                control.inteliNumerInputElement = intlTelInput(numberInput, defaultOptions);
                //control.changeSenderCountry();
            }
        }
        this.commonService.httpPost(options);
    }

    formValidation() {
        this.l_valid = this.inteliNumerInputElement.isValidNumber();
        if (this.l_valid == true) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }
    //Sender Countries Change Event
    // changeSenderCountry() {
    //     const countryInfo = this.inteliNumerInputElement.getSelectedCountryData();
    //     this.l_countryCode = countryInfo.dialCode;
    // }

    step1Validation() {
        if (this.l_phoneNo) {
            this.isbtnDisabled = !this.inteliNumerInputElement.isValidNumber();
        }
    }


    // sendSMS() {
    //     const SMSViewModel: any = {
    //         to: '+923004009172',
    //         body: 'verification code is '
    //     }

    //     let options: any = {};
    //     var control = this;
    //     options.title = 'Verification Code!!!';
    //     options.apiURL = "http://localhost:24429/api/sms/sendSMS";
    //     options.catchErrorText = 'signup-phoneController: error => insertPhoneVerificationCode()';
    //     options.methodType = 'POST';
    //     options.paramData = SMSViewModel;
    //     options.preventShowOnSucess = true;
    //     options.successCallback = function (data) {
    //         debugger;
    //         if (data.Status[0].Success == true) {

    //         }
    //     }

    //     this.commonService.httpPost(options);     
    // }

}
