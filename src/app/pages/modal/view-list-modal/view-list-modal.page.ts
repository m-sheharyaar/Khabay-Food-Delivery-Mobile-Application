import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';

@Component({
  selector: 'app-view-list-modal',
  templateUrl: './view-list-modal.page.html',
  styleUrls: ['./view-list-modal.page.scss'],
})
export class ViewListModalPage implements OnInit {
    env: any;
    l_ShopLists;
  
    constructor(public modal: ModalController,
      private router: Router,
      private navParams: NavParams,
      public plt: Platform,
      public commonService : Commonservices) { 
          this.env = new Env();
      }
  
    ngOnInit() {
        localStorage.removeItem('hometab');
        this.plt.backButton.subscribe( () => {
            localStorage.setItem('hometab','true');
          });
    }
  
    ionViewWillEnter() {
      this.l_ShopLists = this.navParams.get('List');
    }
  
    closeModal() {
      this.modal.dismiss();
    }
  
    gotoInformation(l_shopID) {
      localStorage.setItem("shopID", l_shopID);
      localStorage.setItem('featureShops', 'true');
      this.router.navigate(['shop_information']);
    }
}
