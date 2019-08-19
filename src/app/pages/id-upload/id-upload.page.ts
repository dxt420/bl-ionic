import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { ActivatedRoute } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Location } from "@angular/common";
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';
import { ApiDjangoService } from 'src/app/services/api-django.service';



@Component({
  selector: 'app-id-upload',
  templateUrl: './id-upload.page.html',
  styleUrls: ['./id-upload.page.scss'],
})
export class IdUploadPage implements OnInit {

  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;

  public slideOneForm: FormGroup;
  public submitAttempt: boolean = false;

  
  constructor(
    private location: Location,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private fileChooser: FileChooser,
    private api: ApiDjangoService,
    public activatedRoute : ActivatedRoute,
    private filePath: FilePath,
    public toastCtrl: ToastController,
    // private file: File
  ) { 
    this.slideOneForm = formBuilder.group({
      nidNumber: ['', Validators.required]
     
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

    // let files = this.getFiles();
    // let requests = [];

    // files.forEach((file) => {
    //   let formData = new FormData();
    //   formData.append('file' , file.rawFile, file.name);
    //   requests.push(this.api.uploadFormData(formData));

    // });

    // concat(...requests).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {  
    //     console.log(err);
    //   }
    // );

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
      "nid_number": this.slideOneForm.value.nidNumber
     
    }
   
 
    this.api.NIDSubmit(this.slideOneForm.value.nidNumber);
  }

    


}
}
