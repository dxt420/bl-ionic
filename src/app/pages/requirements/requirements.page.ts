import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';

import { HTTP } from '@ionic-native/http/ngx';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { AccountKitService } from 'src/app/services/account-kit.service';


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.page.html',
  styleUrls: ['./requirements.page.scss'],
})
export class RequirementsPage implements OnInit {


  private loggedInDetails;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private api: ApiDjangoService,
    public ak: AccountKitService,
    public toastCtrl: ToastController,
    public activatedRoute : ActivatedRoute,
    public router : Router,
    private nativeHttp: HTTP, 
  ) { 
    
 
  }

  ngOnInit() {
  }



 
 
  async goToRegister() {
    (<any>window).AccountKitPlugin.getAccount(
      (info)=> {
        console.log(info);

        this.router.navigate(['/register'],{
        queryParams: {
        value : JSON.stringify(info)
        },
      });

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
  }
}
