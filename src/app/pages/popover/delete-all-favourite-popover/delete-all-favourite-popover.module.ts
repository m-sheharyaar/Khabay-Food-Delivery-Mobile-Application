import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteAllFavouritePopoverPage } from './delete-all-favourite-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAllFavouritePopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeleteAllFavouritePopoverPage]
})
export class DeleteAllFavouritePopoverPageModule {}
