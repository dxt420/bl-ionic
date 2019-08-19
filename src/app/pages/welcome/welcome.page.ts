import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public router : Router,
    private storage: Storage,
  
  ) {  }

  ngOnInit() {
  }

   gotToNext() {
    // (<any>window).AccountKitPlugin.loginWithPhoneNumber({
    //       useAccessToken: false,
    //       defaultCountryCode: "UG",
    //       facebookNotificationsEnabled: true,
    //     }, data => {
    //     (<any>window).AccountKitPlugin.getAccount(
    //       info => console.log(info),
    //       async (err) => {
    //         console.log(err)
    //         const toast = await this.toastCtrl.create({
    //           message: 'There is an error connecting to the servers.',
    //           duration: 3000,
    //           position: 'top',
    //           closeButtonText: 'OK',
    //           showCloseButton: true
    //         });
    //         toast.present();
    //       });
    //     });



        (<any>window).AccountKitPlugin.loginWithPhoneNumber({
          useAccessToken: true,
          defaultCountryCode: "UG",
          facebookNotificationsEnabled: true,
        }, data => {
        (<any>window).AccountKitPlugin.getAccount(
          async (info) => {
            console.log(info)
                  
          },
          async (err) => {
            console.log(err)
            const toast = await this.toastCtrl.create({
              message: 'There is an error connecting to the servers.',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
            });
        });
  }

   gotToNext2() {
    this.navCtrl.navigateRoot('/login');
  }

}
