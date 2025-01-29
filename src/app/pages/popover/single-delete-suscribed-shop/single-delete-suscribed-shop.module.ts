import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleDeleteSuscribedShopPage } from './single-delete-suscribed-shop.page';

const routes: Routes = [
  {
    path: '',
    component: SingleDeleteSuscribedShopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleDeleteSuscribedShopPage]
})
export class SingleDeleteSuscribedShopPageModule {}
