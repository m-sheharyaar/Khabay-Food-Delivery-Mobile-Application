import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Http } from '@angular/http';
import { FCM } from '@ionic-native/fcm/ngx';
import { Notificationservices } from '../../services/notificationservices';

@Component({
    selector: 'app-insert-shop-discount',
    templateUrl: './insert-shop-discount.page.html',
    styleUrls: ['./insert-shop-discount.page.scss'],
})
export class InsertShopDiscountPage implements OnInit {
    env: any;
    notificationService: any;
    isbtnDisabled = true;
    l_discount = localStorage.getItem('Discount');
    l_startDate = localStorage.getItem('StartDate');
    l_endDate = localStorage.getItem('EndDate');
    ImageURL = "";
    LogoURL = "";
    shopImage;
    logoImage;
    l_minDate;
    l_hideExpiryDate = false;
    l_promList;

    constructor(private router: Router,
        public http: HttpClient,
        public htttp: Http,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private camera: Camera,
        public actionSheetController: ActionSheetController,
        private transfer: FileTransfer,
        public fcm: FCM,
        public ref: ChangeDetectorRef,
        public commonService: Commonservices) {
        this.env = new Env();
        this.notificationService = new Notificationservices(this.http, toastCtrl, ToastCtrl, htttp, commonService);
    }

    ngOnInit() { }

    ionViewWillEnter() {
        debugger
        this.l_promList = JSON.parse(localStorage.getItem('promoList'));
        this.l_minDate = this.commonService.getMinDate(new Date());
        var getRealTimeImage = localStorage.getItem('RealTimeShopImage_' + localStorage.getItem("userID"));
        var  getRealTimeLogo = localStorage.getItem('RealTimeLogo_' + localStorage.getItem("userID"));
        //var uploadCheck = localStorage.getItem('RealTimeImageUploadCheck'+ localStorage.getItem("userID"));

        if (getRealTimeImage != null) {
            this.ImageURL = getRealTimeImage;
            this.ref.detectChanges();
        }
        else {
            this.ImageURL = "../../../assets/img/notfound.png";
        }

        if (getRealTimeLogo != null) {
            this.LogoURL = getRealTimeLogo;
            this.ref.detectChanges();
        }
        else {
            this.LogoURL = "../../../assets/img/logo.png";
        }
        this.l_discount = localStorage.getItem('Discount');
        this.l_startDate = localStorage.getItem('StartDate');
        this.l_endDate = localStorage.getItem('EndDate');
        this.formValidation();
    }

    formValidation() {
        var startDate = false;
        var endDate = false;

        startDate = this.commonService.commonValidation(this.l_startDate, 3);
        endDate = this.commonService.commonValidation(this.l_endDate, 3);

        if (this.l_hideExpiryDate) {
            endDate = false;
        }
        if (startDate == false && endDate == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }

    insertShop() {
        debugger
        if (this.isbtnDisabled == true) {
            return;
        }
        const registershop: any = {
            CategoryID: 1,
            ShopID: 0,
            ShopName: localStorage.getItem('UserShopName'),
            Address1: localStorage.getItem('Address'),
            City: localStorage.getItem('City'),
            State: localStorage.getItem('State'),
            OpeningTime: localStorage.getItem('OpeningTime'),
            ClosingTime: localStorage.getItem('ClosingTime'),
            Mobile: localStorage.getItem('Mobile'),
            Phone: localStorage.getItem('Phone') == '' ? null : localStorage.getItem('Phone'),
            BadgeTitle: localStorage.getItem('BadgeTitle'),
            Description: localStorage.getItem('Description'),
            ShopPermotionList:this.l_promList,
            ImageURL: null,
            LogoURL: null, 
            PromotionURL:null,
            UserName: localStorage.getItem('userName'),
            UserID: localStorage.getItem('userID'),
            Discount: this.l_discount,
            StartDate: this.l_startDate,
            EndDate: this.l_endDate,
            Latitude: localStorage.getItem('Latitude'),
            Longitude: localStorage.getItem('Longitude')
        }

        let options: any = {};
        var control = this;
        options.title = 'registershop!!!';
        options.apiURL = this.env.shopApi.registerShop;
        options.catchErrorText = 'UserController: error => favourite()';
        options.methodType = 'POST';
        options.paramData = registershop;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            debugger
            if (data.Status[0].Success == true) {

                let optionMsg: any = {};
                // let options: any = {};
                if (registershop) {
                    optionMsg.message = 'Record Enter Successfull';
                    // options.topic = localStorage.getItem('ShopNotificationTopic');
                    // options.title = localStorage.getItem('UserShopName');
                    // options.body = 'NewShop '+localStorage.getItem('UserShopName')+' has been added on ' + localStorage.getItem('Address') + ', ' + localStorage.getItem('City') + ', ' + localStorage.getItem('State') + '.';
                    // options.shopID = data.Status[0].ID;
                    // control.notificationService.newNotification(options);
                }
                else
                    optionMsg.message = 'Record not Enter';
                    
                control.commonService.msgToast(optionMsg);
                control.commonService.removeShopStorage();
                localStorage.removeItem("hideValue");
                control.router.navigate(['user-ShopList']);
                return;
            }
        }
        this.commonService.httpPost(options);
    }


    back() {
        localStorage.setItem('Discount', this.l_discount);
        localStorage.setItem('StartDate', this.l_startDate);
        localStorage.setItem('EndDate', this.l_endDate);
        this.router.navigate(['insert-shop-promotions']);
    }

    ///////////////////////////Shop Image Upload//////////////////////////////////

    async selectPhoto() {
        const actionSheet = await this.actionSheetController.create({
            header: "Select Image source",
            buttons: [{
                text: 'Gallery',
                icon: 'images',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Camera',
                icon: 'camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Remove Image',
                icon: 'trash',
                handler: () => {
                    this.removeShopImage();
                }
            },
            {
                text: 'Close',
                icon: 'close',
                role: 'cancel'
            }
            ]
        });
        await actionSheet.present();
    }

    randomValue() {
        var min = 1;
        var maxNumber = 400000
        var my_random_value = min + (maxNumber - min) * Math.random();
        return my_random_value.toFixed(0);
    }

    takePicture(sourceType: PictureSourceType) {
        var control = this;
        var options: CameraOptions = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: this.env.cropImageProperties.width,
            targetHeight: this.env.cropImageProperties.height
            // encodingType:this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then(imagePath => {
            control.ImageURL = 'data:image/jpeg;base64,' + imagePath;
            localStorage.setItem('RealTimeShopImage_' + localStorage.getItem('userID'), control.ImageURL);
            control.ref.detectChanges();
            control.uploadShopImage();
        });
    }

    uploadShopImage() {
        const fileTransfer: FileTransferObject = this.transfer.create();
        let shopFileName;

        if (localStorage.getItem('getExistingshopFileName') == null) {
            shopFileName = "Shop_" + localStorage.getItem("userID") + "_" + this.randomValue() + ".jpg";
        }
        else {
            shopFileName = localStorage.getItem('getExistingshopFileName');
        }

        let options: FileUploadOptions = {
            fileKey: "file",
            fileName: shopFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };

        fileTransfer.upload(this.ImageURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.ShopImage, options).then((res) => {
            this.shopImage = this.env.imgServerFolder.ShopImage + "/" + shopFileName;
            localStorage.setItem('getExistingshopFileName', shopFileName);
        }, (err) => {
            debugger
        });
    }

    removeShopImage() {
        this.ImageURL = "../../../assets/img/notfound.png";
        this.ref.detectChanges();
    }
 ///////////////////////////Logo Image Upload//////////////////////////////////

 async selectLogo() {
     debugger
    const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
            text: 'Gallery',
            icon: 'images',
            handler: () => {
                this.takePicturelogo(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
        },
        {
            text: 'Camera',
            icon: 'camera',
            handler: () => {
                this.takePicturelogo(this.camera.PictureSourceType.CAMERA);
            }
        },
        {
            text: 'Remove Image',
            icon: 'trash',
            handler: () => {
                this.removelogoImage();
            }
        },
        {
            text: 'Close',
            icon: 'close',
            role: 'cancel'
        }
        ]
    });
    await actionSheet.present();
}

takePicturelogo(sourceType: PictureSourceType) {
    debugger
    var control = this;
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        allowEdit: true,
        targetWidth: this.env.cropImageProperties.width,
        targetHeight: this.env.cropImageProperties.height
        // encodingType:this.camera.EncodingType.JPEG,
        // mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(imagePath => {
        control.LogoURL = 'data:image/jpeg;base64,' + imagePath;
        localStorage.setItem('RealTimeLogo_' + localStorage.getItem('userID'), control.LogoURL);
        control.ref.detectChanges();
        control.uploadLogo();
    });
}

uploadLogo() {
    debugger
    const fileTransfer: FileTransferObject = this.transfer.create();
    let logoFileName;

    if (localStorage.getItem('getExistingLogoName') == null) {
        logoFileName = "Logo_" + localStorage.getItem("userID") + "_" + this.randomValue() + ".jpg";
    }
    else {
        logoFileName = localStorage.getItem('getExistingLogoName');
    }

    let options: FileUploadOptions = {
        fileKey: "file",
        fileName: logoFileName,
        chunkedMode: false,
        mimeType: "image/jpg",
        params: { 'title': 'test' }
    };

    fileTransfer.upload(this.LogoURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.LogoImage, options).then((res) => {
        this.logoImage = this.env.imgServerFolder.LogoImage + "/" + logoFileName;
        localStorage.setItem('getExistingLogoName', logoFileName);
    }, (err) => {
        debugger
    });
}

removelogoImage() {
    this.LogoURL = "../../../assets/img/logo.png";
    this.ref.detectChanges();
}

    hideExpiryDate() {
        if (this.l_hideExpiryDate) {
            this.l_hideExpiryDate = false;
            this.formValidation();
        }
        else {
            this.l_endDate = null;
            this.l_hideExpiryDate = true;
            this.formValidation();
        }
    }
}
