import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MbscModule } from '@mobiscroll/angular-lite';
import { ProgessPage } from './progess.page';

const routes: Routes = [
  {
    path: '',
    component: ProgessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MbscModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgessPage]
})
export class ProgessPageModule {}
