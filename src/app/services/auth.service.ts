import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavController, LoadingController, Platform, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';

export class User {
  uid: string;
  email: string;
  phone: string;
  displayName: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,

    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private nativeHttp: HTTP, 
    public toastCtrl: ToastController,
    public alertCtrl: AlertController, 

  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
   }


   ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }



  


  async checkUser() {
    // let loading = await this.loadingCtrl.create();
    // await loading.present();

    try {
      const response = await this.nativeHttp.get('https://brightlife.pythonanywhere.com/api/applicants/',{},{});
      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers)
    
      var AAA = JSON.parse(response.data);
  
      console.log(AAA);

        (<any>window).AccountKitPlugin.getAccount( 
          (info)=> {
           console.log(info);
           console.log(info.phoneNumber);
           var forAce;
          
           console.log(AAA.count);
          if(AAA.count > 0){
            AAA.results.forEach(async (element)  => {
              console.log(element);
              if (element.phone == info.phoneNumber) {
                console.log(element);
                console.log(element.phone);
                // this.loggedInUser = element;
                console.log("User Already Applied and exists");

                // if applied and approved first time (we create pin)
                // if applied and approved non-first time (we ask for password)
                // if applied and pending (we show progress page)

                
                if (element.status == "pending") {
                  this.router.navigate(['/progess'],{
                    queryParams: {
                      value : JSON.stringify(element)
                      },
                    });

                }


                if (element.status == "approved") {
                  this.navCtrl.navigateRoot('/login');

                }

  
                
  
                
              }else{
                console.log("User is new");
                this.navCtrl.navigateRoot('/login');
                
              }
            });
          }else{
            console.log("The Else: No applicants yet");
            console.log("ALso meaning User is new");
            this.navCtrl.navigateRoot('/login');
          }
           

       
          
          },
         async (err) => {
           console.log(err);

         });


      // loading.dismiss();

      // return forAceExtra;

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
      // loading.dismiss();
    }

   
  }

 

  logout() {
    // this.navCtrl.navigateRoot('/');
    // this.fAuth.auth.signOut();
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }


   login(){

    

    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "UG",
      facebookNotificationsEnabled: true,
    }, data => {
    (<any>window).AccountKitPlugin.getAccount(
      (info)=> {
        console.log(info);


        var dummy_response = info;
        this.storage.set('USER_INFO', dummy_response).then((response) => {
          // this.router.navigate(['/']);
          this.navCtrl.navigateRoot('/login');
          this.authState.next(true);
        });



      // if stopped on step 1 then got to page 2
        // check which step to got to from here


        // this.navCtrl.navigateRoot('/register2');
      //   this.router.navigate(['/register'],{
      //   queryParams: {
      //   value : JSON.stringify(info)
      //   },
      // });

        // this.navCtrl.navigateRoot('/register');

        // console.log(this.api.loggedInUser);
      },
      async (err) => {
        console.log(err)
        this.navCtrl.navigateRoot('/');
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

}
