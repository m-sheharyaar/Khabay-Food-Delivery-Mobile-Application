import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestShopAdminPage } from './request-shop-admin.page';

const routes: Routes = [
  {
    path: '',
    component: RequestShopAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestShopAdminPage]
})
export class RequestShopAdminPageModule {}
