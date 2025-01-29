import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Identifiers } from '@angular/compiler';

@Component({
    selector: 'app-insert-shop-basic-information',
    templateUrl: './insert-shop-basic-information.page.html',
    styleUrls: ['./insert-shop-basic-information.page.scss'],
})
export class InsertShopBasicInformationPage implements OnInit {
    @ViewChild('myInput') myInput;

    env: any;
    l_shopNameLength;
    l_addressLength;
    l_cityLength;
    l_stateLength;
    l_mobileLength;
    l_phoneLength;
    l_descriptionLength;
    l_badgetitleLength;
    l_badgetitle;
    isbtnDisabled = false;
    l_shopName;
    l_address;
    l_city;
    l_state;
    l_mobile;
    l_phone;
    l_allCity;
    l_description;
    l_allStates;
    l_openingTime;
    l_closingTime;

    constructor(private router: Router,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public loadingController: LoadingController,
        private nativeGeocoder: NativeGeocoder,
        public commonService: Commonservices
    ) {
        this.env = new Env();
    }

    ngOnInit() {
        this.l_shopNameLength = 50;
        this.l_addressLength = 500;
        // this.l_cityLength = 30;
        //this.l_stateLength = 30;
        this.l_mobileLength = 11;
        this.l_badgetitleLength = 30;
        this.l_phoneLength = 11;
        this.l_descriptionLength = 1000;
        setTimeout(() => {
            this.myInput.setFocus();
        }, 3200);
    }

    ionViewWillEnter() {
        this.l_shopName = localStorage.getItem('UserShopName');
        this.l_address = localStorage.getItem('Address');
        this.l_city = localStorage.getItem('City');
        this.l_state = localStorage.getItem('State');
        this.l_mobile = localStorage.getItem('Mobile');
        this.l_phone = localStorage.getItem('Phone');
        this.l_badgetitle = localStorage.getItem('BadgeTitle');
        this.l_description = localStorage.getItem('Description');
        this.l_openingTime = localStorage.getItem('OpeningTime');
        this.l_closingTime = localStorage.getItem('ClosingTime');
        this.getAllState();
    }

    shopBasicInformation() {
        this.router.navigate(['insert-shop-promotions']);
        var fullAdress = this.l_address + ', ' + this.l_city + ', ' + this.l_state;
        let options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(fullAdress, options)
            .then((coordinates: NativeGeocoderResult[]) => {
                localStorage.setItem('UserShopName', this.l_shopName);
                localStorage.setItem('Address', this.l_address);
                localStorage.setItem('City', this.l_city);
                localStorage.setItem('State', this.l_state);
                localStorage.setItem('Mobile', this.l_mobile);
                localStorage.setItem('OpeningTime', this.l_openingTime);
                localStorage.setItem('ClosingTime', this.l_closingTime);
                localStorage.setItem('Description', this.l_description);
                localStorage.setItem('BadgeTitle', this.l_badgetitle);
                localStorage.setItem('Latitude', coordinates[0].latitude);
                localStorage.setItem('Longitude', coordinates[0].longitude);
                if (this.l_phone == null) {
                    localStorage.setItem('Phone', '');
                }
                else {
                    localStorage.setItem('Phone', this.l_phone);
                }
                this.router.navigate(['insert-shop-promotions']);
            });
    }

    back() {
        this.commonService.removeShopStorage();
        this.router.navigate(['tabs/settings']);
    }

    formValidation() {
        this.isbtnDisabled = false;
        var shopName = false;
        var address = false;
        // var city = false;
        // var state = false;
        var mobile = false;
        // && city == false && state == false
        var openingTime = false;
        var closingTime = false;
        var badgetitle = false;

        openingTime = this.commonService.commonValidation(this.l_openingTime, 1);
        closingTime = this.commonService.commonValidation(this.l_closingTime, 1);
        badgetitle = this.commonService.commonValidation(this.l_badgetitle, 5);
        shopName = this.commonService.commonValidation(this.l_shopName, 3);
        address = this.commonService.commonValidation(this.l_address, 3);
        // city = this.commonService.commonValidation(this.l_city, 1);
        // state = this.commonService.commonValidation(this.l_state, 1);
        mobile = this.commonService.commonValidation(this.l_mobile, 11);
        if (shopName == false && address == false && mobile == false && badgetitle == false && openingTime == false && closingTime == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }

    getLength(value: any, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    };

    getAllState() {
        let options: any = {};
        var control = this;
        options.title = 'Get All State!!!';
        options.apiURL = this.env.commonApi.getAllStateURL + localStorage.getItem('countryName');
        options.catchErrorText = 'signup-phoneController: error => getAllState()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_allStates = data.Result;
            }
        }
        this.commonService.httpPost(options);
    }

    getAllCity() {
        const data: any = {
            CountryName: localStorage.getItem('countryName'),
            StateName: this.l_state
        }
        let options: any = {};
        var control = this;
        options.title = 'Get All City!!!';
        options.apiURL = this.env.commonApi.getAllCitiesURL;
        options.catchErrorText = 'signup-phoneController: error => getAllCity()';
        options.methodType = 'POST';
        options.paramData = data;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_allCity = data.Result;
            }
        }
        this.commonService.httpPost(options);
    }

    getFirstLetterCapital(value: any) {
        return this.commonService.getFirstCapitalLetter(value);
    };
}
