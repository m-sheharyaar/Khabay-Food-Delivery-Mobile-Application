import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteStatusPopoverPage } from './delete-status-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteStatusPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeleteStatusPopoverPage]
})
export class DeleteStatusPopoverPageModule {}
