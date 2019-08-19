import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { Location } from "@angular/common";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kin',
  templateUrl: './kin.page.html',
  styleUrls: ['./kin.page.scss'],
})
export class KinPage implements OnInit {

  public slideOneForm: FormGroup;
  public submitAttempt: boolean = false;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private fileChooser: FileChooser,
    private api: ApiDjangoService,
    private location: Location,
    public toastCtrl: ToastController,
  
    // private file: File
  ) { 
    this.slideOneForm = formBuilder.group({
 
      fName: ['', Validators.required],
  
      phone: ['', Validators.required]
  
  });
   }

   myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }


  async save(){

    

  
    

    const loader = await this.loadingCtrl.create({
      duration: 5000
    });
  
    loader.present();
    loader.onWillDismiss().then(() => {
      // this.navCtrl.navigateRoot('/home-results');
      this.navCtrl.navigateRoot('/rec-upload');
    });
  
  
  }

  // async save(){
              
                  
              
                
                  
              
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

}
