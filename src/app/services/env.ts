import { Injectable } from '@angular/core';
//import { timingSafeEqual } from 'crypto';

@Injectable()
export class Env {

    //apiUrl = 'http://localhost:24429/api/';
    apiUrl = 'http://vmi105759.contabo.host/DiscountAppServer/api/';

    // Account Methods url
    public accountApi: any = {
        loginURL: this.apiUrl + 'account/appUserLogin'
    }
    
    // Account Methods url
    public userApi: any = {
        insertUserURL: this.apiUrl + 'user/insertUser',
        updateUserURL: this.apiUrl + 'user/updateUser',
        insertVerificationCodeURL: this.apiUrl + 'user/insertVerificationCode',
        getUserURL: this.apiUrl + 'user/get/',
        getUserAboutStatusURL: this.apiUrl + 'user/getUserAboutStatus/',
        insertUpdateUserAboutStatusURL: this.apiUrl + 'user/insertUpdateUserAboutStatus/',
        getVerificationCodeURL: this.apiUrl + 'user/getVerificationCode/',
        deletestatus: this.apiUrl + 'user/deleteUserAboutStatus',
        getUserMenuRoleWiseURL: this.apiUrl + 'user/getUserMenuRoleWise/',
        verifyUserByPhoneNumberURL: this.apiUrl + 'user/verifyUserByPhoneNumber/',
        getUserDataBySignupURL: this.apiUrl + 'user/getUserDataBySignup',
        sendSMSURL: this.apiUrl + 'sms/sendSMS',
        insertUpdateUserShopAdminRole: this.apiUrl + 'user/insertUpdateUserShopAdminRole/',
        deviceVerification: this.apiUrl + 'user/deviceVerification/',
    }

    // Category Methods url
    public categoryApi: any = {
        shopURL: this.apiUrl + 'category/get/shop/',
    }

    // Shop Methods url
    public shopApi: any = {
        getShopURL: this.apiUrl + 'shop/get/',
        addUpdateShopURL: this.apiUrl + 'shop/addUpdate',
        getShopDatabyID: this.apiUrl + 'shop/getShopDataByShopID',
        getShopFeedBack: this.apiUrl + 'shop/getFeedback/',
        insertUpdateFavouriteURL: this.apiUrl + 'shop/insertUpdateFavourite',
        getFavouriteShopUrl: this.apiUrl + 'shop/getFavouriteShop/',
        insertratingandcomments: this.apiUrl + 'shop/insertUpdateFeedbackAndRating',
        registerShop: this.apiUrl + 'shop/insertUpdateShop',
        //uploadShopImage: this.apiUrl + 'FileUploader/shopUploadImage',
        getUserShopList: this.apiUrl + 'shop/getUserShopList/',
        deleteAllFavouriteShop: this.apiUrl + 'shop/deleteAllFavouriteShopByUser',
        deleteUserShops: this.apiUrl + 'shop/deleteUserShop',
        hideUserShops: this.apiUrl + 'shop/visibleUserShop',
        getSpecialDiscountAndNewShop: this.apiUrl + 'shop/getSpecialDiscountAndNewShop/',
        insertUpdateUserShopSubscriptionURL: this.apiUrl + 'subscription/insertUpdateUserShopSubscription', 
        getSuscribedShop: this.apiUrl + 'subscription/getShopSubscriptionByUser/',
        deleteSuscribedShop: this.apiUrl + 'subscription/deleteAllShopSubscriptionByUser',
        getPromotionListByShopID: this.apiUrl + 'shop/getPromtionListByShopID/'
    }

    // Product Methods url
    public productApi: any = {
        getProductURL: this.apiUrl + 'product/get'
    }

    // notification Methods url
    public notificationApi: any = {
        shopNotificationURL: this.apiUrl + 'notification/insertUpdateNotification',
        getShopNotificationURL: this.apiUrl + 'notification/getNotification/',
        deleteNotificationURL: this.apiUrl + 'notification/deleteUserNotification'         
    }
    
    // Common Methods url
    public commonApi: any = {
        getAllCountriesURL: this.apiUrl + 'common/getAllCountries',//'https://restcountries.eu/rest/v2/all',
        uploadShopImageURL: this.apiUrl + 'FileUploader/UploadShopFiles',
        uploadUserImageURL: this.apiUrl + 'FileUploader/UploadUserFiles',
        removeUserAndShopImage: this.apiUrl + 'common/deleteUserAndShopImage',
        uploadImageURL: this.apiUrl + 'FileUploader/uploadImage',
        getAllStateURL : this.apiUrl + 'common/getAllStateByCountry/',
        getAllCitiesURL : this.apiUrl + 'common/getAllCityByState',
    }

    // Error Codes & Messages,
    public result: any = {
        noErrorCode: '0',
        exception: '-1',
        '0': {
            code: '0',
            message: '',
            type: '',
            preventShow: true
        },
        '-1': {
            code: '-1',
            message: 'There is some issue, please try again later or contact administrator.',
            type: 'error'
        },
        '-2': {
            code: '-2',
            message: 'You are not authorized for this operation.',
            type: 'error'
        },
        '-3': {
            code: '-3',
            message: 'Your session has expired.',
            type: 'info'
        },
        '1': {
            code: '1',
            message: 'Operation performed successfully.',
            type: 'success'
        },
        '401': {
            message: 'Not authorized, Please login.',
            type: 'warning'
        }
    };

    public resultTable: any = {
        success: '1000',
        unverifiedEmail: '1003',
        '1000': {
            code: '1000',
            message: 'Operation performed successfully.',
            type: 'success'
        }
    }

    public cropImageProperties: any = {
        width: 300,
        height: 160,
    }

    public adminRole: any = {
        AdminID: 1,
        ShopAdminID: 2,
    }

    public ShopAdminStatus: any = {
        Reject: 1,
        Pending: 2,
        Approved:3,
        Blocked:4
    }

    public imgServerFolder: any = {
        UserImage: 'Users',
        ShopImage: 'Shops',
        LogoImage: 'Logo'
    }

    public codeKeyPair: any = {
        tokenExpired: 20001,
        tokenExpiredMsg: 'your session has expired. please try again'
    }

    //public imageURL:any = 'http://localhost:24429/Images/';
    public imageURL: any = 'http://vmi105759.contabo.host/DiscountAppServer/Images/';

}
