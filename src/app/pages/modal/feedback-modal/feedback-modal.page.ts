import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';
import * as $ from "jquery";

@Component({
    selector: 'app-feedback-modal',
    templateUrl: './feedback-modal.page.html',
    styleUrls: ['./feedback-modal.page.scss'],
})
export class FeedbackModalPage implements OnInit {
    env: any;
    l_userName = '';
    l_ratingNo = 0;
    l_comment: '';
    l_shop_Id = null;
    disabled = true;
    l_commentLength;

    constructor(public modal: ModalController,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        private navParams: NavParams,
        private router: Router,
        public commonService: Commonservices) {
        this.env = new Env();
        this.l_userName = localStorage.getItem('userName');
    }

    ngOnInit() { }

    ionViewWillEnter() {
        this.l_commentLength = this.getLength(this.navParams.get('Description'), 1000);
        this.l_shop_Id = this.navParams.get('Shop_ID');
        this.l_comment = this.navParams.get('Description');
        if (this.navParams.get('Rating') > 0) {
            this.rating(this.navParams.get('Rating'));
        }
    }

    closeModal() {
        this.modal.dismiss();
    }

    getLength(value: any, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    }

    insertCommentsAndRating() {
        const commentsAndrating: any = {
            ShopID: this.l_shop_Id,
            UserID: localStorage.getItem('userID'),
            UserName: this.l_userName,
            RatingNo: this.l_ratingNo,
            FeedBack: this.l_comment,
            ClientSideDate: this.commonService.ConvertLocalToUTCDateTime(new Date())
        }

        let options: any = {};
        var control = this;
        options.title = 'Insert Rating and Comments!!!';
        options.apiURL = this.env.shopApi.insertratingandcomments;
        options.catchErrorText = 'UserController: error => favourite()';
        options.methodType = 'POST';
        options.paramData = commentsAndrating;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.modal.dismiss();
            }
        }
        this.commonService.httpPost(options);
    }

    rating(i) {

        this.disabled = false;

        if (i == 1) {
            $('#star_1').addClass('star_rating_color');
            $('#star_2').addClass('star_rating').removeClass('star_rating_color');
            $('#star_3').addClass('star_rating').removeClass('star_rating_color');
            $('#star_4').addClass('star_rating').removeClass('star_rating_color');
            $('#star_5').addClass('star_rating').removeClass('star_rating_color');
        }

        if (i == 2) {
            $('#star_1').addClass('star_rating_color');
            $('#star_2').addClass('star_rating_color');
            $('#star_3').addClass('star_rating').removeClass('star_rating_color');
            $('#star_4').addClass('star_rating').removeClass('star_rating_color');
            $('#star_5').addClass('star_rating').removeClass('star_rating_color');
        }

        if (i == 3) {
            $('#star_1').addClass('star_rating_color');
            $('#star_2').addClass('star_rating_color');
            $('#star_3').addClass('star_rating_color');
            $('#star_4').addClass('star_rating').removeClass('star_rating_color');
            $('#star_5').addClass('star_rating').removeClass('star_rating_color');
        }

        if (i == 4) {
            $('#star_1').addClass('star_rating_color');
            $('#star_2').addClass('star_rating_color');
            $('#star_3').addClass('star_rating_color');
            $('#star_4').addClass('star_rating_color');
            $('#star_5').addClass('star_rating').removeClass('star_rating_color');
        }

        if (i == 5) {
            $('#star_1').addClass('star_rating_color');
            $('#star_2').addClass('star_rating_color');
            $('#star_3').addClass('star_rating_color');
            $('#star_4').addClass('star_rating_color');
            $('#star_5').addClass('star_rating_color');
        }

        this.l_ratingNo = i;
        // $('#star_'+ i).addClass('star_rating_color');
    }

}
