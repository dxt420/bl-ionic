import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from "@angular/common";


@Component({
  selector: 'app-rec-upload',
  templateUrl: './rec-upload.page.html',
  styleUrls: ['./rec-upload.page.scss'],
})
export class RecUploadPage implements OnInit {

  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;



  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private location: Location,
  ) { 
   
   }

   myBackButton(){
    this.location.back();
  }


  ngOnInit() {
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




  async save(){

    

  
    

  const loader = await this.loadingCtrl.create({
    duration: 5000
  });

  loader.present();
  loader.onWillDismiss().then(() => {
    // this.navCtrl.navigateRoot('/home-results');
    this.navCtrl.navigateRoot('/lcupload');
  });


}
}