import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertShopBasicInformationPage } from './insert-shop-basic-information.page';

const routes: Routes = [
  {
    path: '',
    component: InsertShopBasicInformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertShopBasicInformationPage]
})
export class InsertShopBasicInformationPageModule {}
