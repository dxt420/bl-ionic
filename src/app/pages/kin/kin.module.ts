import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { KinPage } from './kin.page';

const routes: Routes = [
  {
    path: '',
    component: KinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Ng2TelInputModule
  ],
  declarations: [KinPage]
})
export class KinPageModule {}
