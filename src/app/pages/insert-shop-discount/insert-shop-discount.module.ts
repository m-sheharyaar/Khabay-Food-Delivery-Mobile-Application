import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertShopDiscountPage } from './insert-shop-discount.page';

const routes: Routes = [
  {
    path: '',
    component: InsertShopDiscountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertShopDiscountPage]
})
export class InsertShopDiscountPageModule {}
