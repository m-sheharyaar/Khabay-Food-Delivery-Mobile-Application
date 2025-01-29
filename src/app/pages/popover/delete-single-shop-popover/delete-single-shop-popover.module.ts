import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteSingleShopPopoverPage } from './delete-single-shop-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteSingleShopPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeleteSingleShopPopoverPage]
})
export class DeleteSingleShopPopoverPageModule {}
