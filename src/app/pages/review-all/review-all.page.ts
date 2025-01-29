import { Component, OnInit } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-review-all',
    templateUrl: './review-all.page.html',
    styleUrls: ['./review-all.page.scss'],
})
export class ReviewAllPage implements OnInit {

    env: any;
    l_reviewList: any = [];
    l_totalreview;
    l_shopName;

    constructor(
        public http: HttpClient,
        public toastController: ToastController,
        public loadingController: LoadingController,
        private router: Router,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() { }

    ionViewWillEnter() {
        this.getShopFeedBack();
        this.l_shopName = localStorage.getItem('ShopName');
    }

    getShopFeedBack() {
        let options: any = {};
        var control = this;
        options.title = 'Get - Get FeedBack!!!';
        options.apiURL = this.env.shopApi.getShopFeedBack + localStorage.getItem("shopID");
        options.catchErrorText = 'ReviewController: error => getShopFeedBack()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_reviewList = data.Result;
                control.l_totalreview = data.Result[0].TotalRatingAndReviews;
            }
        }

        this.commonService.httpPost(options);
    }

    goBack() {
        this.router.navigate(['shop_information']);
    }
}
