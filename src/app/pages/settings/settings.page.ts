import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform, ModalController, PopoverController, ToastController, ActionSheetController, Events } from '@ionic/angular';
import { RequestShopAdminPage } from '../modal/request-shop-admin/request-shop-admin.page';
import { UserVM } from '../../viewModel/user-vm';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    env: any;
    l_isShopAdmin = false;
    l_shopAdminStatus;
    l_shopAdminStatusID;
    l_textForPic;
    l_oldImage;
    l_userStatus;
    l_userImage;
    ImageURL;
    userVm: any;
    l_firstName;
    l_lastName;
    l_userName;
    l_countryCode;
    l_phoneNumber;
    l_userid;
    l_userAboutStatusId;

    constructor(private http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public modal: ModalController,
        private router: Router,
        public actionSheetController: ActionSheetController,
        public popoverController: PopoverController,
        public events: Events,
        public commonService: Commonservices,
        public ref: ChangeDetectorRef,
        private camera: Camera,
        private transfer: FileTransfer,
        private platform: Platform ) {
        this.env = new Env();
        this.userVm = new UserVM();
    }

    ngOnInit() {
        this.platform.backButton.subscribe( () => {
            localStorage.setItem('othertabs','true');
            localStorage.removeItem('hometab');
          });
     }

    ionViewWillEnter() {
        localStorage.setItem('othertabs','true');
        localStorage.removeItem('hometab');
        this.l_textForPic = localStorage.getItem('TextForImage');
        this.ImageURL = null;
        this.getUserRole();
        this.getUser();
        this.events.unsubscribe('updateStatus');
        this.events.subscribe('updateStatus', () => {
            this.l_userStatus = localStorage.getItem('userAboutStatus');
        });
        this.events.unsubscribe('updateName');
        this.events.subscribe('updateName', () => {
          this.getUser()
        });
    }

    gotoHelp() {
        this.router.navigate(['help']);
    }

    gotoNotification() {
        this.router.navigate(['notifications']);
    }

    gotoFavourite() {
        this.router.navigate(['favorites']);
    }

    gotoSuscribe() {
        this.router.navigate(['shop-subscription']);
    }

    gotoRegistershop() {
        this.commonService.removeShopStorage();
        this.router.navigate(['insert-shop-basicInformation']);
    }

    gotoProfile() {
        this.router.navigate(['user-profile']);
    }

    gotoMyShop() {
        this.router.navigate(['user-ShopList']);
    }

    async gotoAdminAproval(ev: any) {
        var pending = this.env.ShopAdminStatus.Pending;
        var blocked = this.env.ShopAdminStatus.Blocked;
        if (this.l_shopAdminStatusID == pending || this.l_shopAdminStatusID == blocked) {
            return;
        }

        const modal = await this.modal.create({
            component: RequestShopAdminPage,
            componentProps: {
                //searchShopName: this.l_searchShop
            }
        });

        modal.onDidDismiss()
            .then((data) => {
                this.getUserRole();
            });
        return await modal.present();
    }

    getUserRole() {
        let options: any = {};
        var control = this;
        options.title = 'Get - Get about!!!';
        options.apiURL = this.env.userApi.getUserMenuRoleWiseURL + localStorage.getItem('userID');//UserID
        options.catchErrorText = 'SettingController: error => getUserRole()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                if (data.Result.length > 0) {
                    if (control.env.ShopAdminStatus.Approved == data.Result[0].StatusID) {
                        control.l_isShopAdmin = true;
                    }
                    else {
                        control.l_isShopAdmin = false;
                    }
                    control.l_shopAdminStatusID = data.Result[0].StatusID;
                    control.l_shopAdminStatus = data.Result[0].Status;
                }
            }
        }

        this.commonService.httpPost(options);
    }

    getUser() {
        let options: any = {};
        var control = this;
        options.title = 'Get - Get User!!!';
        options.apiURL = this.env.userApi.getUserURL + localStorage.getItem('userID');
        options.catchErrorText = 'UserController: error => GetUser()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_userid = data.Result[0].UserID;
                control.l_userName = data.Result[0].UserName;
                control.l_firstName = data.Result[0].FirstName;
                control.l_lastName = data.Result[0].LastName;
                control.l_countryCode = data.Result[0].CountryCode;
                control.l_phoneNumber = data.Result[0].PhoneNumber;
                control.l_userStatus = data.Result[0].UserStatus;
                control.l_userAboutStatusId = data.Result[0].UserAboutStatusID;
                control.l_oldImage = data.Result[0].ImageURL;

                if (control.l_oldImage == null) {
                    control.l_textForPic = localStorage.getItem('TextForImage');
                }
                else {
                    localStorage.setItem('userImageURL', control.l_oldImage);
                    control.ImageURL = control.env.imageURL + control.l_oldImage;
                }
                var getRealTimeImage = localStorage.getItem('RealTimeImage_' + localStorage.getItem("userID"));
                var uploadCheck = localStorage.getItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"));
                var updateCheck = localStorage.getItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"));

                if (getRealTimeImage != null && uploadCheck == 'true' && updateCheck == 'true') {
                    control.ImageURL = getRealTimeImage;
                }
                control.ref.detectChanges();
            }
        }
        this.commonService.httpPost(options);
    }

    ///////////////////////////User Image Upload//////////////////////////////////

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
                    this.RemoveUserImage();
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

    takePicture(sourceType: PictureSourceType) {
        var control = this;
        var options: CameraOptions = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300
            // encodingType:this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then(imagePath => {
            control.ImageURL = 'data:image/jpeg;base64,' + imagePath;
            localStorage.setItem('RealTimeImage_' + localStorage.getItem('userID'), control.ImageURL);
            control.ref.detectChanges();
            control.uploadUserImage();
        });
    }

    uploadUserImage() {
        const fileTransfer: FileTransferObject = this.transfer.create();
        let userFileName = "User_" + localStorage.getItem("userID") + ".jpg";
        localStorage.setItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"), 'false');

        let options: FileUploadOptions = {
            fileKey: "file",
            fileName: userFileName,
            chunkedMode: false,
            mimeType: "image/jpg",
            params: { 'title': 'test' }
        };

        fileTransfer.upload(this.ImageURL, this.env.commonApi.uploadImageURL + "?type=" + this.env.imgServerFolder.UserImage, options).then((res) => {
            localStorage.setItem('RealTimeImageUploadCheck' + localStorage.getItem("userID"), 'true');
            this.l_userImage = this.env.imgServerFolder.UserImage + "/" + userFileName;
            this.editUser();
        }, (err) => {
            debugger
        });
    }

    editUser() {
        localStorage.setItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"), 'false');
        const editusers: any = {
            UserID: localStorage.getItem('userID'),
            UserName: this.l_userName,
            FirstName: this.l_firstName,
            LastName: this.l_lastName,
            CountryCode: this.l_countryCode,
            PhoneNumber: this.l_phoneNumber,
            ImageURL: this.l_userImage,
        }

        let options: any = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.updateUserURL;
        options.catchErrorText = 'UserController: error => editUser()';
        options.methodType = 'POST';
        options.paramData = editusers;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                localStorage.setItem('userImageURL', control.l_userImage);
                control.events.publish('updateUserImage');
                control.l_oldImage = !null;
                localStorage.setItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"), 'true');
                //control.ImageURL = control.env.imageURL + control.l_userImage;
                control.getUser();
                control.ref.detectChanges();
            }
        }

        this.commonService.httpPost(options);
    }

    RemoveUserImage() {
        const p_commonVm: any = {
            UserID: localStorage.getItem('userID')
        }

        let options: any = {};
        var control = this;
        options.title = 'edit User Image!!!';
        options.apiURL = this.env.commonApi.removeUserAndShopImage;
        options.catchErrorText = 'UserController: error => RemoveUserImage()';
        options.methodType = 'POST';
        options.paramData = p_commonVm;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                localStorage.setItem('userImageURL', null);
                control.events.publish('updateUserImage');
                localStorage.removeItem('RealTimeImage_' + localStorage.getItem('userID'));
                control.l_oldImage = null;
                control.l_textForPic = localStorage.getItem('TextForImage');
                control.ref.detectChanges();
            }
        }
        this.commonService.httpPost(options);
    }

    logout()
    {
        this.router.navigateByUrl('/signup_phone');
    }
}
