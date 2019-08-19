import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Location } from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-lcupload',
  templateUrl: './lcupload.page.html',
  styleUrls: ['./lcupload.page.scss'],
})
export class LCUploadPage implements OnInit {

  

                public fileUploader: FileUploader = new FileUploader({});
                public hasBaseDropZoneOver: boolean = false;
              
              
              
                
                constructor(
                  public navCtrl: NavController,
                  private location: Location,
                  public menuCtrl: MenuController,
                  public loadingCtrl: LoadingController,
                  public toastCtrl: ToastController,
                  private router: Router,
                ) { 
                 
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
              
              
              
              
              //   async save(){
              
                  
              
                
                  
              
              //   const loader = await this.loadingCtrl.create({
              //     duration: 5000
              //   });
              
              //   loader.present();
              //   loader.onWillDismiss().then(() => {
              //     // this.navCtrl.navigateRoot('/home-results');
              //      Swal.fire({
              //     title: 'Nice Progress!',
              //     text: "Congratulations! Your application was accepted. Please drop by the BrightLife offices for briefing and product pack. ",
              //     type: 'success',
              //     showCancelButton: false,
                 
              //   })
              //     this.navCtrl.navigateRoot('/');
              //   });
              
              
              // }

              async save(){

    

  
    

                const loader = await this.loadingCtrl.create({
                  duration: 5000
                });
              
                loader.present();
                loader.onWillDismiss().then(() => {
                  // this.navCtrl.navigateRoot('/home-results');
                  // this.navCtrl.navigateRoot('/kin');
                  this.router.navigate(['/kin']);
                });
              
              
              }
              }