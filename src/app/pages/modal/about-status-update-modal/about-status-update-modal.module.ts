import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutStatusUpdateModalPage } from './about-status-update-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AboutStatusUpdateModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutStatusUpdateModalPage]
})
export class AboutStatusUpdateModalPageModule {}
