import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';

@Component({
    selector: 'app-insert-shop-timing',
    templateUrl: './insert-shop-timing.page.html',
    styleUrls: ['./insert-shop-timing.page.scss'],
})
export class InsertShopTimingPage implements OnInit {
    env: any;
    isbtnDisabled = true;
    l_openingTime = localStorage.getItem('OpeningTime');
    l_closingTime = localStorage.getItem('ClosingTime');

    constructor(private router: Router,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() { }

    ionViewWillEnter() {
        this.l_openingTime = localStorage.getItem('OpeningTime');
        this.l_closingTime = localStorage.getItem('ClosingTime');
        this.formValidation();
    }

    shopTiming() {
        localStorage.setItem('OpeningTime', this.l_openingTime);
        localStorage.setItem('ClosingTime', this.l_closingTime);
        this.router.navigate(['insert-shop-discount']);
    }

    formValidation() {
        var openingTime = false;
        var closingTime = false;

        openingTime = this.commonService.commonValidation(this.l_openingTime, 1);
        closingTime = this.commonService.commonValidation(this.l_closingTime, 1);

        if (openingTime == false && closingTime == false) {
            this.isbtnDisabled = false;
        }
        else {
            this.isbtnDisabled = true;
        }
    }

    back() {
        this.router.navigate(['insert-shop-basicInformation']);
    }
}
