import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-idtype',
  templateUrl: './idtype.page.html',
  styleUrls: ['./idtype.page.scss'],
})
export class IDTypePage implements OnInit {

  idType;
  loggedInDetails;
  firstNameValue;
  lastNameValue;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private nativeHttp: HTTP, 
    private router: Router,
    public activatedRoute : ActivatedRoute,
  
   
  ) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
      this.loggedInDetails = JSON.parse(res.value);
      console.log(this.loggedInDetails);
      
    
      this.firstNameValue  = this.loggedInDetails.first_name;
   
      this.lastNameValue  = this.loggedInDetails.last_name;
    
    });
   }

  ngOnInit() {
  }

  onChangeHandler($event) {
    console.log($event.target.value);
    this.idType = $event.target.value;
  }

  async toPrimaryInfo() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

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

  
                 this.router.navigate(['/register2'],{
                  queryParams: {
                    value : JSON.stringify(element)
                    },
                  });
  
                
              }else{
                console.log("User is new");
                // this.navCtrl.navigateRoot('/login');
                
              }
            });
          }else{
            console.log("The Else: No applicants yet");
            console.log("ALso meaning User is new");
            // this.navCtrl.navigateRoot('/login');
          }
           

       
          
          },
         async (err) => {
           console.log(err);

         });


      loading.dismiss();

      // return forAceExtra;

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
      loading.dismiss();
    }

   
  }





  save(){

 
    console.log(this.idType);
    if (this.idType == "Passport") {
      console.log("Passport");
      this.navCtrl.navigateForward('passport-upload');
    }else{
      this.navCtrl.navigateForward('id-upload');
    }
   
    
  
  }
}
