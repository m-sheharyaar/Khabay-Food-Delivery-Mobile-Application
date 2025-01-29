import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupUserRegistrationPage } from './signup-user-registration.page';

const routes: Routes = [
  {
    path: '',
    component: SignupUserRegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupUserRegistrationPage]
})
export class SignupUserRegistrationPageModule {}
