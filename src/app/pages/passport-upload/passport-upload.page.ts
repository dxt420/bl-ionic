import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { ActivatedRoute } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { Location } from "@angular/common";


@Component({
  selector: 'app-passport-upload',
  templateUrl: './passport-upload.page.html',
  styleUrls: ['./passport-upload.page.scss'],
})
export class PassportUploadPage implements OnInit {


  public slideOneForm: FormGroup;
  public submitAttempt: boolean = false;

  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;

  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private fileChooser: FileChooser,
    private api: ApiDjangoService,
    public activatedRoute : ActivatedRoute,
    private filePath: FilePath,
    public toastCtrl: ToastController,
    private location: Location,
    
    // private file: File
  ) { 
    this.slideOneForm = formBuilder.group({
      passport_number: ['', Validators.required]
     
  });

  
   }

  ngOnInit() {
  }


  myBackButton(){
    this.location.back();
  }


  fileOverBase(event): void {
    this.hasBaseDropZoneOver = event;
  }
  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;

    });
  }
  async uploadFiles() {


    const loader = await this.loadingCtrl.create({
      duration: 5000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      // this.navCtrl.navigateRoot('/home-results');
      // this.navCtrl.navigateRoot('academic-uploads');
    });
  }


 
  save(){

    this.submitAttempt = true;

    if(this.slideOneForm.valid){
    console.log("success!")
    console.log(this.slideOneForm.value);
   

    let postData = {
      "nid_number": this.slideOneForm.value.passport_number
     
    }
   
 
    this.api.NIDSubmit(this.slideOneForm.value.passport_number);
  }

    


}


}