import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertShopPromotionsPage } from './insert-shop-promotions.page';

const routes: Routes = [
  {
    path: '',
    component: InsertShopPromotionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertShopPromotionsPage]
})
export class InsertShopPromotionsPageModule {}
