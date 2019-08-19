import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { HTTP } from '@ionic-native/http/ngx';
import { ActivatedRoute } from '@angular/router';
import { ApiDjangoService } from 'src/app/services/api-django.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

 
  public submitAttempt: boolean = true;

  public selectedTitle;


  loggedInDetails;
  public slideOneForm: FormGroup;

  firstNameValue;
    titleValue;
      middleNameValue ;
      lastNameValue ;
      emailValue ;
      dobValue ;
      other_phoneValue ;
      phoneValue;


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private nativeHttp: HTTP, 
    private api: ApiDjangoService,
    public activatedRoute : ActivatedRoute,
    private formBuilder: FormBuilder,
   
  ) {
    
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
      this.loggedInDetails = JSON.parse(res.value);
      console.log(this.loggedInDetails);
      
      this.titleValue = this.loggedInDetails.title;
      this.firstNameValue  = this.loggedInDetails.first_name;
      this.middleNameValue = this.loggedInDetails.middle_name;
      this.lastNameValue  = this.loggedInDetails.last_name;
      this.emailValue  = this.loggedInDetails.email;
      this.dobValue  = this.loggedInDetails.dob;
      this.phoneValue  = this.loggedInDetails.phone;
      this.other_phoneValue  = this.loggedInDetails.other_phone;
    });

    this.slideOneForm = formBuilder.group({
      title: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      email: [''],
      
      dob: [''],
      other_phone: ['']
  });
   

    
   }



   save(){

    this.submitAttempt = true;


    if(this.slideOneForm.valid){
    console.log("success!")
    console.log(this.slideOneForm.value);
   

    let postData = {
      "title": this.selectedTitle,
      "first_name": this.slideOneForm.value.firstName,
      "middle_name": this.slideOneForm.value.middleName,
      "last_name": this.slideOneForm.value.lastName,
      "email": this.slideOneForm.value.email,
      "dob": this.slideOneForm.value.dob,
      "other_phone": this.slideOneForm.value.other_phone,
    
    }
   
 
    this.api.updateApplicant(postData);

  }


}



  ngOnInit() {
    // this.slideOneForm.valueChanges.first().subscribe(val => {
    //   this.changesMade = true;
    // });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
