import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleAboutStatusPopoverPage } from './single-about-status-popover.page';

const routes: Routes = [
  {
    path: '',
    component: SingleAboutStatusPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleAboutStatusPopoverPage]
})
export class SingleAboutStatusPopoverPageModule {}
