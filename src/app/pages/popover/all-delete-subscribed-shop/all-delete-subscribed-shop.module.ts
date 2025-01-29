import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllDeleteSubscribedShopPage } from './all-delete-subscribed-shop.page';

const routes: Routes = [
  {
    path: '',
    component: AllDeleteSubscribedShopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllDeleteSubscribedShopPage]
})
export class AllDeleteSubscribedShopPageModule {}
