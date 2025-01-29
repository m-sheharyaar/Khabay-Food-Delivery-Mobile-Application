import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, ModalController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Http, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { FCM } from '@ionic-native/fcm/ngx';
import { Notificationservices } from '../../services/notificationservices';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { LiteralArray } from '@angular/compiler';

@Component({
    selector: 'app-shop-update',
    templateUrl: './shop-update.page.html',
    styleUrls: ['./shop-update.page.scss'],
})
export class ShopUpdatePage implements OnInit {
    env: any;
    notificationService: any;
    isbtnDisabled = true;
    l_shopData;
    l_shopNameLength;
    l_addressLength;
    l_cityLength;
    l_stateLength;
    l_mobileLength;
    l_phoneLength;
    l_descriptionLength;
    l_badgetitleLength;
    l_shopName: '';
    l_address: '';
    l_city: '';
    l_state: '';
    l_mobile: '';
    l_phone: '';
    l_description: '';
    ImageURL: string = '';
    LogoURL = "";
    l_openingTime: '';
    l_closingTime: '';
    l_discount: '';
    l_startDate: '';
    l_endDate: '';
    l_shopID: any;
    l_isDeleteImage = 0;
    l_isDeletelogo = 0;
    l_shopImage;
    l_logoImage;
    l_latDest;
    l_longDest;
    l_oldDiscount;
    l_minDate;
    l_hideExpiryDate;
    l_chkbox;
    l_chkboxCondition;
    l_allStates;
    l_allCity;
    l_ShopNotificationTopicName;
    l_offerStatus;
    l_expDate = false;
    promotionFormMode = 0;
    l_titleLength;
    l_title;
    l_price;
    l_descriptionpromoLength;
    l_descriptionpromo;
    l_promoList = [];
    isbtnDisabledpromo = false;
    editIndex;
    l_badgetitle;

    constructor(
        public http: HttpClient,
        public htttp: Http,
        public fcm: FCM,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private router: Router,
        public modal: ModalController,
        private activatedRoute: ActivatedRoute,
        private transfer: FileTransfer,
        public loadingController: LoadingController,
        private camera: Camera,
        public actionSheetController: ActionSheetController,
        public ref: ChangeDetectorRef,
        private nativeGeocoder: NativeGeocoder,
        public commonService: Commonservices
    ) {
        this.env = new Env();
        this.notificationService = new Notificationservices(this.http, toastCtrl, ToastCtrl, htttp, commonService);
    }

    ngOnInit() { }

    ionViewWillEnter() {
        debugger
        this.getAllState();
        this.l_shopData = JSON.parse(localStorage.getItem('shopData'));
        this.getPromotionListByShopID();
        this.l_shopNameLength = this.getLength(this.l_shopData.ShopName, 50);
        this.l_addressLength = this.getLength(this.l_shopData.Address1, 500);
        this.l_cityLength = this.getLength(this.l_shopData.City, 30);
        this.l_stateLength = this.getLength(this.l_shopData.State, 30);
        this.l_mobileLength = this.getLength(this.l_shopData.Mobile, 11);
       // this.l_badgetitleLength = this.getLength(this.l_shopData.BadgeTitle, 11);
        if (this.l_phoneLength != null) {
            this.l_phoneLength = this.getLength(this.l_shopData.Phone, 11);
        }
        if (this.l_descriptionLength != null) {
            this.l_descriptionLength = this.getLength(this.l_shopData.Description, 1000);
        }
        this.l_shopName = this.l_shopData.ShopName;
        this.l_address = this.l_shopData.Address1;
        this.l_city = this.l_shopData.City;
        this.l_state = this.l_shopData.State;
        this.l_mobile = this.l_shopData.Mobile;
        this.l_phone = this.l_shopData.Phone;
        this.l_description = this.l_shopData.Description;
        this.l_openingTime = this.l_shopData.OpeningTime;
        this.l_closingTime = this.l_shopData.ClosingTime;
        this.l_discount = this.l_shopData.Discount;
        this.l_startDate = this.l_shopData.StartDate;
        this.l_endDate = this.l_shopData.EndDate;
        this.l_oldDiscount = this.l_shopData.Discount;
        this.l_offerStatus = this.l_shopData.OfferStatus;
        this.l_ShopNotificationTopicName = this.l_shopData.SubscribeTopicName;
        this.l_logoImage = this.l_shopData.LogoURL;
        this.l_shopImage = this.l_shopData.ImageURL;
        //this.l_badgetitle = this.l_shopData.BadgeTitle;
        if (this.l_endDate == null && this.l_expDate == false) {
            this.l_hideExpiryDate = true;
            this.l_chkbox = true;
            this.l_chkboxCondition = true;
            this.l_expDate = true;
        }
        else {
            this.l_hideExpiryDate = false;
            this.l_chkbox = false;
            this.l_chkboxCondition = false;
            this.l_expDate = false;
        }
        if (this.l_shopData.ImageURL == null) {
            this.ImageURL = "../../../assets/img/notfound.png";
            // this.l_shopImage = NULL;
        }
        else {
            this.ImageURL = this.env.imageURL + this.l_shopData.ImageURL;
        }
        if (this.l_shopData.LogoURL == null) {
            this.LogoURL = "../../../assets/img/logo.png";
            // this.l_logoImage = NULL;
        }
        else {
            this.LogoURL = this.env.imageURL + this.l_shopData.LogoURL;
        }
        this.l_minDate = this.commonService.getMinDate(this.l_startDate);
        this.ref.detectChanges();
    }

    back() {
        this.router.navigate(['user-ShopList']);
    }

    formValidation() {
        var ShopName = false;
        var Address = false;
        //var City = false;
        //var State = false;
        var Mobile = false;
        var OpeningTime = false;
        var ClosingTime = false;
        var StartDate = false;
        var EndDate = false;

        ShopName = this.commonService.commonValidation(this.l_shopName, 3);
        Address = this.commonService.commonValidation(this.l_address, 3);
        //City = this.commonService.commonValidation(this.l_city, 3);
        // State = this.commonService.commonValidation(this.l_state, 3);
        Mobile = this.commonService.commonValidation(this.l_mobile, 11);
        OpeningTime = this.commonService.commonValidation(this.l_openingTime, 1);
        ClosingTime = this.commonService.commonValidation(this.l_closingTime, 1);
        StartDate = this.commonService.commonValidation(this.l_startDate, 3);
        EndDate = this.commonService.commonValidation(this.l_endDate, 3);
        //&& City == false && State == false 
        if (this.l_hideExpiryDate) {
            EndDate = false;
        }

        if (ShopName == false && Address == false && Mobile == false && OpeningTime == false && ClosingTime == false && StartDate == false && EndDate == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }
    ///////////////////////pormo////////////////////

    addpromo() {
        if (this.promotionFormMode == 0) {
            this.promotionFormMode = 1;
            this.isbtnDisabled = true;
        }
        else if (this.promotionFormMode == 1) {
            this.l_promoList.push(
                {
                    PromotionID: 0,
                    ShopID: this.l_shopData.ShopID,
                    Title: this.l_title,
                    Price: this.l_price,
                    Description: this.l_descriptionpromo,
                });
            this.removepromo();
        }
        else if (this.promotionFormMode == 2) {
            for (var i = 0; i < this.l_promoList.length; i++) {
                if (i == this.editIndex) {
                    this.l_promoList[i].Title = this.l_title;
                    this.l_promoList[i].Price = this.l_price;
                    this.l_promoList[i].Description = this.l_descriptionpromo;
                }
            }
            this.removepromo();
        }
    }

    removepromo() {
        this.resetPromotionForm();
    }

    formValidationPromo() {
        if (this.promotionFormMode == 0) {
            return;
        }
        this.isbtnDisabled = false;
        var title = false;
        var price = false;

        title = this.commonService.commonValidation(this.l_title, 5);
        price = this.commonService.commonValidation(this.l_price, 1);
        if (title == false && price == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }

    resetPromotionForm() {
        this.promotionFormMode = 0;
        this.l_title = "";
        this.l_price = "";
        this.l_descriptionpromo = "";
        this.isbtnDisabled = false;
        this.editIndex = null;
    }

    edit(id) {
        this.editIndex = id;
        this.promotionFormMode = 2;
        let promoData = this.l_promoList[id];
        this.l_title = promoData.Title;
        this.l_price = promoData.Price;
        this.l_descriptionpromo = promoData.Description;
    }
    delete(id) {
        this.l_promoList.splice(id, 1);
    }

    getLength(value: any, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    };

    updateShop() {
        debugger
        const updateshop: any = {
            CategoryID: 1,
            ShopID: this.l_shopData.ShopID,
            ShopName: this.l_shopName,
            Address1: this.l_address,
            City: this.l_city,
            State: this.l_state,
            OpeningTime: this.l_openingTime,
            ClosingTime: this.l_closingTime,
            Mobile: this.l_mobile,
            Phone: this.l_phone == null ? null : this.l_phone,
            Description: this.l_description,
            ImageURL: this.l_shopImage,
            LogoURL: this.l_logoImage,
            UserName: localStorage.getItem('userName'),
            UserID: localStorage.getItem('userID'),
            Discount: this.l_discount,
            StartDate: this.l_startDate,
            EndDate: this.l_endDate,
            IsDeleteImage: this.l_isDeleteImage,
            IsDeleteLogo: this.l_isDeletelogo,
            Latitude: this.l_latDest,
            Longitude: this.l_longDest,
            BadgeTitle: this.l_badgetitle,
            ShopPermotionList:this.l_promoList,
            PromotionURL:null,
        }

        let options: any = {};
        var control = this;
        options.title = 'update Shop!!!';
        options.apiURL = this.env.shopApi.registerShop;
        options.catchErrorText = 'UserController: error => updateShop()';
        options.methodType = 'POST';
        options.paramData = updateshop;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                let optionMsg: any = {};
                let options: any = {};
                if (updateshop) {
                    optionMsg.message = 'Record Update Successfull';
                    control.commonService.msgToast(optionMsg);
                    if (control.l_oldDiscount != control.l_discount && control.l_offerStatus == null) {
                        options.topic = control.l_ShopNotificationTopicName;
                        options.title = control.l_shopName;
                        options.body = control.l_shopName + ' discount has been updated from ' + control.l_oldDiscount + ' to ' + control.l_discount + '.';
                        options.shopID = control.l_shopData.ShopID;
                        control.notificationService.newNotification(options);
                    }
                }
                else
                    optionMsg.message = 'Record not Update';
                control.commonService.msgToast(optionMsg);
                control.router.navigate(['user-ShopList']);
                return;
            }
        }
        this.commonService.httpPost(options);
    }

    UserGeocoder() {
        if (this.isbtnDisabled == true) {
            return;
        }
        var fullAdress = this.l_address + ', ' + this.l_city + ', ' + this.l_state;
        let options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 2
        };
        this.nativeGeocoder.forwardGeocode(fullAdress, options)
            .then((coordinates: NativeGeocoderResult[]) => {
                this.l_latDest = coordinates[0].latitude;
                this.l_longDest = coordinates[0].longitude;
                this.updateShop();
            });
    }

    hideExpiryDate() {
        if (this.l_chkboxCondition) {
            this.l_hideExpiryDate = true;
            this.l_chkbox = true;
            this.formValidation();
            this.l_chkboxCondition = false;
            this.l_shopData.EndDate = null;
            this.l_endDate = null;
        }
        else if (this.l_endDate != null) {
            this.l_chkbox = false;
            this.l_endDate = null;
            this.l_shopData.EndDate = null;
            this.l_hideExpiryDate = true;
            this.formValidation();
        }
        else {
            this.l_endDate = null;
            this.l_hideExpiryDate = false;
            this.l_chkbox = false;
            this.l_chkboxCondition = true;
            this.formValidation();
        }
    }

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

    getPromotionListByShopID() {
        let options: any = {};
        var control = this;
        options.title = 'Get All Promotion List By ShopID!!!';
        options.apiURL = this.env.shopApi.getPromotionListByShopID + this.l_shopData.ShopID;
        options.catchErrorText = 'signup-phoneController: error => getPromotionListByShopID()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_promoList = data.Result;
            }
        }
        this.commonService.httpPost(options);
    }
}