import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, ModalController, ActionSheetController, Events } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { UserVM } from '../../viewModel/user-vm';
import { UserProfileEditPage } from '../modal/user-profile-edit/user-profile-edit.page';
import { Router } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.page.html',
    styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
    env: any;
    userVm: any;
    l_firstName;
    l_lastName;
    l_userName;
    l_countryCode;
    l_phoneNumber;
    l_userid;
    l_userStatus;
    l_userAboutStatusId;
    ImageURL;
    l_userImage;
    l_oldImage;
    l_textForPic;

    constructor(public http: HttpClient,
        public toastCtrl: ToastController,
        private camera: Camera,
        private transfer: FileTransfer,
        public ToastCtrl: LoadingController,
        public modal: ModalController,
        private router: Router,
        public actionSheetController: ActionSheetController,
        public ref: ChangeDetectorRef,
        public events: Events,
        public commonService: Commonservices
    ) {
        this.env = new Env();
        this.userVm = new UserVM();
    }

    ngOnInit() {
        //localStorage.removeItem('userAboutStatusID');
        //localStorage.removeItem('userAboutStatus');
    }

    ionViewWillEnter() {
        this.l_textForPic = localStorage.getItem('TextForImage');
        this.ImageURL = null;
        this.getUser();
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

    async openModal() {
        const modal = await this.modal.create({
            component: UserProfileEditPage,
            componentProps: {
                UserID: localStorage.getItem('userID'),
                FirstName: this.l_firstName,
                LastName: this.l_lastName,
                CountryCode: this.l_countryCode,
                UserName: this.l_userName,
                PhoneNumber: this.l_phoneNumber,
            }
        });

        modal.onDidDismiss()
            .then((data) => {
                this.getUser();
            });

        return await modal.present();
    }

    aboutStatus() {
        localStorage.setItem('userAboutStatusID', this.l_userAboutStatusId);
        localStorage.setItem('userAboutStatus', this.l_userStatus);
        this.router.navigate(['aboutStatus']);
    }

    back() {
        this.router.navigate(['tabs/settings']);
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
                localStorage.setItem('RealTimeImageUpadateCheck' + localStorage.getItem("userID"), 'true');
                control.ImageURL = control.env.imageURL + control.l_userImage;
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
                //control.ImageURL = "../../../assets/img/avatar.png";
                control.l_textForPic = localStorage.getItem('TextForImage');
                control.ref.detectChanges();
            }
        }
        this.commonService.httpPost(options);
    }

}
