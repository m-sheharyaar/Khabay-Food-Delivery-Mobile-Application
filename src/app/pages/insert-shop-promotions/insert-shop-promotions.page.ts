import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
    selector: 'app-insert-shop-promotions',
    templateUrl: './insert-shop-promotions.page.html',
    styleUrls: ['./insert-shop-promotions.page.scss'],
})
export class InsertShopPromotionsPage implements OnInit {
    @ViewChild('myInput') myInput;

    promotionFormMode = 0;
    env: any;
    l_titleLength;
    l_title;
    l_price;
    l_descriptionLength;
    l_description;
    dataSource = [];
    l_promoList = [];
    isbtnDisabled = false;
    editIndex;

    constructor(private router: Router,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public commonService: Commonservices) {
        this.env = new Env();
    }

    ngOnInit() {
        this.l_titleLength = 50;
        this.l_descriptionLength = 1000;
    }

    ionViewWillEnter() {
    }

    addpromo() {
        if (this.promotionFormMode == 0) {
            this.promotionFormMode = 1;
            this.isbtnDisabled = true;
        }
        else if (this.promotionFormMode == 1) {
            this.l_promoList.push(
                {
                    PromotionID: 0,
                    ShopID: 0,
                    Title: this.l_title,
                    Price: this.l_price,
                    Description: this.l_description,
                });
            this.removepromo();
        }
        else if(this.promotionFormMode == 2){
          for (var i = 0; i < this.l_promoList.length; i++) {
            if(i== this.editIndex){
                this.l_promoList[i].Title = this.l_title;
                this.l_promoList[i].Price = this.l_price;
                this.l_promoList[i].Description = this.l_description;
            }
        }
        this.removepromo();
        }
        // for (let i = 0; i < this.dataSource.length; i++) {
        //    // this.comment= "<em><div class='mainLinks' *ngFor='let divData of dataSource'><ion-card class='cardMainLinks'><ion-item><div class='main'><div class='text'><ion-label position='floating' style='color: #fb630f;'>Title</ion-label><ion-input class='inputField' type='text' name='l_title' [(ngModel)]='l_title'(keyup)='formValidation()' (ionChange)='formValidation()'(ngModelChange)='l_title=getFirstLetterCapital(l_title)' maxlength='50' (input)='l_titleLength=getLength($event.target.value,50)'></ion-input></div><div class='textLength'>{{l_titleLength}}</div></div></ion-item><ion-item><div class='main'><div class='text'><ion-label position='floating' style='color: #fb630f;'>Price</ion-label><ion-input type='tel' class='inputField' [(ngModel)]='l_price' (keyup)='formValidation()' (ionChange)='formValidation()'></ion-input></div><div class='textLength'>{{l_mobileLength}}</div></div></ion-item><div class='comment'><ion-label><h3>Description <span>(Optional)</span><div class='text-length'>{{l_descriptionLength}} Characters</div></h3></ion-label> <ion-textarea type='text' rows='3' class='comment-text' [(ngModel)]='l_description' maxlength='1000'(input)='l_descriptionLength=getLength($event.target.value,1000)'></ion-textarea></div><div class='remove'><div class='btn'><ion-button class='bton' fill='clear' color='light' (click)='removepromo(dataSource.length)'>Remove</ion-button></div></div></ion-card></div></em>"
        //     // var control = this;
        //     // this.l_promoList.push(
        //     //     {
        //     //         ID: control.l_promoList.length,
        //     //         PromotionID : 0,
        //     //         ShopID : 0,
        //     //         Title: control.l_title,
        //     //         Price: control.l_price,
        //     //         Description: control.l_description,
        //     //     })
        // }
        //this.dataSource.push(this.l_promoList.length);
    }

    removepromo() {
        this.resetPromotionForm();
        // setTimeout(() => {
        //     this.isbtnDisabled = false;
        // }, 500);

        // for (var i = 0; i < this.l_promoList.length; i++) {
        //     if (this.l_promoList[i].ID == ID) {
        //         this.l_promoList.splice(i, 1);
        //     }
        // }
        // this.dataSource.pop();
    }

    getLength(value: any, totalTextValue) {
        return this.commonService.getTextBoxLength(value, totalTextValue);
    };

    getFirstLetterCapital(value: any) {
        return this.commonService.getFirstCapitalLetter(value);
    };

    gotoDiscount() {
        const json = JSON.stringify(this.l_promoList);
                localStorage.setItem('promoList', json);
        this.router.navigate(['insert-shop-discount']);
    }

    back() {
        this.router.navigate(['insert-shop-basicInformation']);
    }

    formValidation() {
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
        this.l_description = "";
        this.isbtnDisabled = false;
        this.editIndex = null;
    }

    edit(id) {
        debugger
        this.editIndex = id;
        this.promotionFormMode = 2;
        let promoData = this.l_promoList[id];
        this.l_title = promoData.Title;
        this.l_price = promoData.Price;
        this.l_description =promoData.Description;
    }
    delete(id) {
        debugger
        this.l_promoList.splice(id, 1);
    }

}