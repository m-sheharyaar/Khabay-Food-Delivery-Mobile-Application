import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from '../services/env';
import { LoadingController, ToastController, Events } from '@ionic/angular';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

//@Injectable()
@Injectable({
    providedIn: 'root'
})
export class Commonservices {

    env: any;
    loading: any;
    isLoadShowHide = false;
    isLoadCloseHide = false;
    isNewUser = false;

    constructor(
        public http: HttpClient,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public router: Router,
        public events: Events,
        private authService: AuthenticationService
    ) {
        this.env = new Env();
    }


    httpPost = function (options) {
        let config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': localStorage.getItem('userToken')
            }
        };

        var Ladda = Ladda ? Ladda : null;
        let contentType = options.contentType;
        let isJson = (contentType && contentType.indexOf('json') !== -1) ? true : false;
        let params = options.paramData;//isJson ? options.paramData : $httpParamSerializer(options.paramData);
        let title = options.title;
        let spinner = Ladda && Ladda.create(options.laddaTarget);
        let httpCall;

        spinner ? spinner.start() : null;

        var control = this;
        var isLoader = options.isLoader == undefined ? true : false;
        if (isLoader) {
            control.showLoader();
            control.isLoadShowHide = true;
            control.isLoadCloseHide = false;
        }

        httpCall = options.methodType == 'POST' ? this.http.post(options.apiURL, params, config) : this.http.get(options.apiURL, config);
        httpCall.subscribe(
            response => {

                if (isLoader) {
                    control.closeLoader();
                    control.isLoadShowHide = false;
                    control.isLoadCloseHide = true;
                }


                let data = response;
                data = data.DataSet != undefined ? data.DataSet : data;
                let resOptions: any = {};
                let preventShow;

                if (response.Token != '' && response.Token != null) {
                    localStorage.setItem('userToken', response.Token);
                }

                if (data.Code == this.env.codeKeyPair.tokenExpired) {
                    //resOptions.message = this.env.codeKeyPair.tokenExpiredMsg;
                    this.router.navigateByUrl('/sessionExpired');
                    //this.showAlert(resOptions);
                    return;
                }

                var errorType = data.Status[0].Type ? data.Status[0].Type : data.Status[0].Type;
                var errorMessage = data.Status[0].Message ? data.Status[0].Message : data.Status[0].Message;
                var errorCode = data.Status[0].Code ? data.Status[0].Code : data.Status[0].Code;

                resOptions.message = errorMessage;
                resOptions.type = errorType.toLowerCase();

                if (errorCode == this.env.resultTable.success) {
                    preventShow = options.preventShowOnSucess;
                    options.successCallback && options.successCallback(data);

                    resOptions.isConfirmCallback = function () {
                    }
                }
                else {
                    options.callback && options.callback(data);
                }

                if (preventShow == true || options.isPopup == false) {
                    return;
                }

                resOptions.title && resOptions.title != '' ? resOptions.title : resOptions.title = title;
                this.showAlert(resOptions);
            },
            error => {
                if (error.status == '-1') {
                    return;
                }
                else if (error.status == '401') {
                    return;
                }

                options.catchCallback && options.catchCallback();

                options = {
                    title: title,
                    message: error.message,
                    error: "error"
                }
                //  this.logException(options);
                this.showAlert(options)
            },
            () => {
                options.finallyCallback && options.finallyCallback();
                spinner ? spinner.stop() : null;
            }
        );
    }

    async showAlert(resOptions) {
        //   const prompt = this.alertCtrl.create({
        //     title: resOptions.title,
        //     message: resOptions.message,
        //   });
        //   prompt.present();
        const prompt = await this.toastCtrl.create({
            // title: resOptions.title,
            duration: 5000,
            message: resOptions.message,
        });

        prompt.present();
    }


    httpCommonMethod = function (options) {
        let params = options.paramData;
        let title = options.title;
        let httpCall;

        httpCall = options.methodType == 'POST' ? this.http.post(options.apiURL, params) : this.http.get(options.apiURL);
        httpCall.subscribe(
            response => {
                debugger
                let data = response;
                let resOptions: any = {};
                let preventShow;

                if (data.length > 0 || data.Success == true) {
                    preventShow = options.preventShowOnSucess;
                    options.successCallback && options.successCallback(data);

                    resOptions.isConfirmCallback = function () {
                    }
                }
                else {
                    options.callback && options.callback(data);
                }

                if (preventShow == true || options.isPopup == false) {
                    return;
                }

                resOptions.title && resOptions.title != '' ? resOptions.title : resOptions.title = title;
                this.showAlert(resOptions);
            },
            error => {
                debugger
                if (error.status == '-1') {
                    return;
                }
                else if (error.status == '401') {
                    return;
                }

                options.catchCallback && options.catchCallback();

                options = {
                    title: title,
                    errorText: options.catchErrorText,
                    error: error
                }
                this.logException(options);
            },
            () => {
                options.finallyCallback && options.finallyCallback();
            }
        );
    }

    async msgToast(options) {
        const toast = await this.toastCtrl.create({
            message: options.message,
            duration: 3000,
            cssClass: 'bg-white',
            //showCloseButton: true,
            // color:'warning',
            //closeButtonText: options.button,
            // position: 'top'
        });
        toast.present();
    }

    async showLoader() {
        if (this.isLoadShowHide == false) {
            this.loading = await this.loadingCtrl.create({
                //message: 'Please wait...',
                spinner:'crescent',
                cssClass:'custom-loader-class',
                duration: 2000
            });
            this.loading.present();
        }
    }

    closeLoader() {
        if (this.isLoadCloseHide == false) {
            setTimeout(() => {
                this.loading.dismiss();
            }, 5000);
        }
    }

    infiniteScrollAndRefersh(infiniteScroll, refresher, data, listBinding) {
        var dataList: any = [];

        if (infiniteScroll) {
            var ilength = listBinding.length;
            var totallength = data.length;
            var maxlength = 10;

            totallength = totallength - ilength;

            if (totallength < 10) {
                maxlength = totallength;
            }

            for (var i = ilength; i < ilength + maxlength; i++) {
                listBinding.push(data[i]);
            }

            dataList = listBinding;
            infiniteScroll.target.complete();
        }
        else if (refresher) {
            listBinding = [];
            if (data.length > 10) {
                for (var j = 0; j < 10; j++) {
                    listBinding.push(data[j]);
                }
            }
            else {
                for (var k = 0; k < data.length; k++) {
                    listBinding.push(data[k]);
                }
            }

            dataList = listBinding;
            refresher.detail.complete();
        }
        else {
            listBinding = [];
            dataList = [];

            if (data.length > 10) {
                for (var l = 0; l < 10; l++) {
                    listBinding.push(data[l]);
                }
            }
            else {
                for (var m = 0; m < data.length; m++) {
                    listBinding.push(data[m]);
                }
            }

            dataList = listBinding;
        }

        return dataList;
    }

    commonValidation(event, length) {
        if (event != undefined && event.length >= length) {
            return false;
        }
        else {
            return true;
        }
    }

    getTextBoxLength(value: any, textboxlength) {
        var Enterlength = value.length;
        var maxlength = textboxlength - Enterlength;
        return maxlength;
    };

    convertDateString(date) {
        return moment(date).format("ddd, Do MMM YYYY");
    }

    convertDateTimeString(date) {
        return moment(date).format("ddd, Do MMM YYYY hh:mm A");
    }

    removeShopStorage() {
        localStorage.removeItem('UserShopName');
        localStorage.removeItem('Address');
        localStorage.removeItem('City');
        localStorage.removeItem('State');
        localStorage.removeItem('Mobile');
        localStorage.removeItem('Phone');
        localStorage.removeItem('OpeningTime');
        localStorage.removeItem('ClosingTime');
        localStorage.removeItem('StartDate');
        localStorage.removeItem('EndDate');
        localStorage.removeItem('Discount');
        localStorage.removeItem('Description');
        localStorage.removeItem('BadgeTitle');
        localStorage.removeItem('promoList');
        localStorage.removeItem('RealTimeShopImage_' + localStorage.getItem("userID"));
        localStorage.removeItem('RealTimeLogo_' + localStorage.getItem("userID"));
        localStorage.removeItem('getExistingshopFileName');
        localStorage.removeItem('getExistingLogoName');
    }

    applyHaversine(locations) {

        let usersLocation = {
            lat: localStorage.getItem('latitude'),
            lng: localStorage.getItem('longitude')
        };

        locations.map((location) => {
            let placeLocation = {
                lat: location.Latitude,
                lng: location.Longitude
            };

            location.distance = this.getDistanceBetweenPoints(
                usersLocation,
                placeLocation,
                'km'
            ).toFixed(1);
        });

        return locations;
    }

    getDistanceBetweenPoints(start, end, units) {
        if (end.lat == null) {
            let rt = 0.0;
            return rt;
        }

        let earthRadius = {
            // miles: 3958.8,
            km: 6371
        };

        let R = earthRadius[units || 'km'];
        let lat1 = start.lat;
        let lon1 = start.lng;
        let lat2 = end.lat;
        let lon2 = end.lng;

        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;

        return d;
    }

    toRad(x) {
        return x * Math.PI / 180;
    }

    getMinDate(date) {
        return moment(date).format('YYYY-MM-DD');
    }

    ConvertUTCToLocalDateTime(datetime) {
        var input = datetime;
        var fmt = 'YYYY-MM-DD, HH:mm:ss';
        var m = moment.utc(input, fmt);
        return m.local().format(fmt);
    }

    ConvertLocalToUTCDateTime(datetime) {
        var input = datetime;
        var fmt = 'YYYY-MM-DD, HH:mm:ss';
        var m = moment.utc(input, fmt);
        return m.utc().format(fmt);
    }

    getDateDayAndHour(date) {
        let expDate = new Date(date).getTime();

        let now = new Date().getTime();
        let diff = expDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        let hours = Math.ceil((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.ceil((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.ceil((diff % (1000 * 60)) / 1000);


        if (days <= 10 && days >= 3) {
            return days + " Days Remaining";
        }
        else if (days <= 2 && days > 0) {

            return days + " Days," + hours + ":" + minutes + ":" + seconds;
            //return "hello";
        }
        else if (days <= 0) {
            return "Today";
        }
        // else if (days < 0) {
        // // clearInterval(x);
        //     return "Expired";
        // } 
        else {
            return moment(date).format("ddd, Do MMM YYYY");
        }
    }

    profileText(firstName, lastName) {
        var namesFirstLetters = firstName.slice(0, 1) + lastName.slice(0, 1);
        localStorage.setItem('TextForImage', namesFirstLetters);
        return console.log(namesFirstLetters);
    }

    profileTextLetter(firstName, lastName) {
        var namesFirstLetters = firstName.slice(0, 1) + lastName.slice(0, 1);
        return namesFirstLetters;
    }

    getFirstCapitalLetter(text) {
        text = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        return text;
    }

    getExtraTextHide(text, maxLength) {
        let textLength = text.length;

        if (maxLength <= textLength) {
            text = text.substring(0, maxLength) + '...';
        }
        return text
    }

    getExtraAddressHide(address, city, state, maxLength) {
        let fullAddress = address + ", " + city + ", " + state + "."
        let textLength = fullAddress.length;

        if (maxLength <= textLength) {
            fullAddress = fullAddress.substring(0, maxLength) + '...';
        }
        return fullAddress
    }

    userRegister(userID, phoneNumber, countryName, deviceID, userName, firstName, lastName) {
        this.isNewUser = false;
        const data: any = {
            UserID: userID,
            PhoneNumber: phoneNumber,
            CountryName: countryName,
            DeviceID: deviceID
        }

        if (userID == 0) {
            data.UserName = userName;
            data.FirstName = firstName;
            data.LastName = lastName;
            this.isNewUser = true;
        }

        let options: any = {};
        var control = this;
        options.title = 'Add User!!!';
        options.apiURL = this.env.userApi.insertUserURL;
        options.catchErrorText = 'UserController: error => addUser()';
        options.methodType = 'POST';
        options.paramData = data;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                //localStorage.removeItem('CountryCode');
                //localStorage.removeItem('PhoneNumber');
                // localStorage.removeItem('userID');
                //localStorage.removeItem('UserName');
                //localStorage.removeItem('FirstName');
                //localStorage.removeItem('LastName');
                //localStorage.removeItem('UserCountryName');
                // if (data.Status[0].UserID > 0) {
                //   localStorage.setItem('userID', data.Status[0].UserID);
                control.getUserData(data.Status[0].UserID, phoneNumber, deviceID);
                // }
            }
        }

        this.httpPost(options);
    }

    getUserData(userID, phoneNumber, deviceID) {
        const data: any = {
            UserID: userID,
            PhoneNumber: phoneNumber,
            DeviceID: deviceID
        }
        let options: any = {};
        var control = this;
        options.title = 'Get-User Data!!!';
        options.apiURL = this.env.userApi.getUserDataBySignupURL;
        options.catchErrorText = 'signupWelcomeController: error => userData()';
        options.methodType = 'POST';
        options.paramData = data;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                localStorage.setItem('userID', data.Result[0].UserID);
                localStorage.setItem('userName', data.Result[0].UserName);
                localStorage.setItem('FirstName', data.Result[0].FirstName);
                localStorage.setItem('LastName', data.Result[0].LastName);
                localStorage.setItem('userAboutStatusID', data.Result[0].UserAboutStatusID);
                localStorage.setItem('userAboutStatus', data.Result[0].UserAboutStatus);
                localStorage.setItem('userImageURL', data.Result[0].ImageURL);
                localStorage.setItem('countryName', data.Result[0].CountryName);
                control.profileText(data.Result[0].FirstName, data.Result[0].LastName);
                control.events.publish('updateUserName');
                control.events.publish('updateUserImage');
                control.events.publish('updateStatus');
                if (control.isNewUser == true)
                    control.router.navigateByUrl('/introduction');
                else
               // control.router.navigateByUrl('/tabs');
               control.authService.login();
               //this.router.navigate(['tabs/home']);
               // control.router.navigateByUrl('/home');

            }
        }
        this.httpPost(options);
    }
}
