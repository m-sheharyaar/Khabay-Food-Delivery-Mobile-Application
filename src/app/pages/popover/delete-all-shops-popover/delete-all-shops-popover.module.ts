import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteAllShopsPopoverPage } from './delete-all-shops-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAllShopsPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeleteAllShopsPopoverPage]
})
export class DeleteAllShopsPopoverPageModule {}
