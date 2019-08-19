import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, NavController, ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AccountKitService {

  loggedInProfile;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
      console.log("in accountkit");
   

      (<any>window).AccountKitPlugin.getAccount(
        async (info) => {
          console.log(info);
         
          console.log(JSON.stringify(info));

          this.loggedInProfile = JSON.stringify(info);
        },
        async (err) => {
          console.log(err)
          // const toast = await this.toastCtrl.create({
          //   message: 'There is an error connecting to the servers.',
          //   duration: 5000,
          //   position: 'top',
          //   closeButtonText: 'OK',
          //   showCloseButton: true
          // });
  
          // toast.present();
        });
  

     }

    
    //  phoneAuth() {

    //   (<any>window).AccountKitPlugin.loginWithPhoneNumber({
    //     useAccessToken: false,
    //     defaultCountryCode: "UG",
    //     facebookNotificationsEnabled: true,
    //   }, data => {
    //   (<any>window).AccountKitPlugin.getAccount(
    //     info => console.log(info),
    //     async (err) => {
    //       console.log(err)
    //       const toast = await this.toastCtrl.create({
    //         message: 'There is an error connecting to the servers.',
    //         duration: 3000,
    //         position: 'top',
    //         closeButtonText: 'OK',
    //         showCloseButton: true
    //       });
  
    //       toast.present();
    //     });
    //   });
    // }


    logout(){
      
      (<any>window).AccountKitPlugin.logout();
    }
  
}
