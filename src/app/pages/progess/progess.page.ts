import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { ApiDjangoService } from 'src/app/services/api-django.service';
import { ActivatedRoute } from '@angular/router';
import { mobiscroll } from '@mobiscroll/angular-lite';

mobiscroll.settings = {
    theme: 'ios'
};


@Component({
  selector: 'app-progess',
  templateUrl: './progess.page.html',
  styleUrls: ['./progess.page.scss'],
})
export class ProgessPage implements OnInit {



  loggedInDetails;

  identity;
  academic;
  cv;
  lc;
  rec;
  firstNameValue;
  lastNameValue;
  titleValue;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private nativeHttp: HTTP, 
    private api: ApiDjangoService,
    public activatedRoute : ActivatedRoute,
 
   
  ) {
    
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
      this.loggedInDetails = JSON.parse(res.value);
      console.log(this.loggedInDetails);
      
      this.titleValue = this.loggedInDetails.title;
      this.firstNameValue  = this.loggedInDetails.first_name;
      // this.middleNameValue = this.loggedInDetails.middle_name;
      this.lastNameValue  = this.loggedInDetails.last_name;
      if (this.loggedInDetails.has_id == "true") {
        this.identity = true;
      }else{
        this.identity = false;
      }

      if (this.loggedInDetails.has_cv == "true") {
        this.cv = true;
      }else{
        this.cv = false;
      }

      if (this.loggedInDetails.has_rec == "true") {
        this.rec = true;
      }else{
        this.rec = false;
      }

      if (this.loggedInDetails.has_lc == "true") {
        this.lc = true;
      }else{
        this.lc = false;
      }

      if (this.loggedInDetails.has_academics == "true") {
        this.academic = true;
      }else{
        this.academic = false;
      }
      // this.identity  = this.loggedInDetails.has_id;
      // this.dobValue  = this.loggedInDetails.dob;
      // this.phoneValue  = this.loggedInDetails.phone;
      // this.other_phoneValue  = this.loggedInDetails.other_phone;
    });
 }

 resume() {
  //  if (!this.identity) {
    this.navCtrl.navigateRoot('/idtype');
  //  }


  //  this.router.navigate(['/register2'],{
  //   queryParams: {
  //     value : JSON.stringify(element)
  //     },
  //   });
  
}

  ngOnInit() {
  }

}
