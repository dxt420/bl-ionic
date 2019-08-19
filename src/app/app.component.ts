import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pages } from './interfaces/pages';
import { LocationService } from './services/location.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public locationService: LocationService,
    public authenticationService: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.locationService.checkGPSPermission();


      (<any>window).AccountKitPlugin.loginWithPhoneNumber({
          useAccessToken: true,
          defaultCountryCode: "UG",
          facebookNotificationsEnabled: true,
        }, data => {
        (<any>window).AccountKitPlugin.getAccount(
          (info) => {
            console.log(info)
            this.authenticationService.checkUser();
          },
          async (err) => {
            console.log(err);
            
            const toast = await this.toastCtrl.create({
              message: 'There is an error connecting to the servers.',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();

            this.navCtrl.navigateRoot('/error');
            });
        });

    }).catch(() => {});
  }

  


  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
