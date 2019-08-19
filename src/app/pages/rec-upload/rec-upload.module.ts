import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecUploadPage } from './rec-upload.page';

import { ReactiveFormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

const routes: Routes = [
  {
    path: '',
    component: RecUploadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecUploadPage]
})
export class RecUploadPageModule {}
