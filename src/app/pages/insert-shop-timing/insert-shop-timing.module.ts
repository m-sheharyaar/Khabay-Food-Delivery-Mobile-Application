import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertShopTimingPage } from './insert-shop-timing.page';

const routes: Routes = [
  {
    path: '',
    component: InsertShopTimingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertShopTimingPage]
})
export class InsertShopTimingPageModule {}
