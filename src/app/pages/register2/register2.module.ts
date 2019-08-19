import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Register2Page } from './register2.page';

import { ReactiveFormsModule} from '@angular/forms';
import {Ng2TelInputModule} from 'ng2-tel-input';

const routes: Routes = [
  {
    path: '',
    component: Register2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2TelInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Register2Page]
})
export class Register2PageModule {}
