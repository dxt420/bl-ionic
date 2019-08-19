import { ApiDjangoService } from '../../services/api-django.service';
// import { PhoneValidator } from './../../validators/phone';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ActivatedRoute } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
// import { File } from '@ionic-native/file/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationService } from 'src/app/services/location.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
  @ViewChild('signupSlider') signupSlider;

	public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;
  // public slideThreeForm: FormGroup;
  // public slideFourForm: FormGroup;
  // public slideFiveForm: FormGroup;
  // public slideSixForm: FormGroup;
  
  public termsChecked: boolean = false;
  public submitAttempt: boolean = false;
  public showPrevButton: boolean = false;
  public showNextButton: boolean = true;

  nidValue: string = '';
  nidValueUploadUrl;
  private loggedInDetails;
  private genericForm: FormData;


  public selectedTitle;
  public loggedInNumber;
  

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private fileChooser: FileChooser,
    private api: ApiDjangoService,
    public activatedRoute : ActivatedRoute,
    private filePath: FilePath,
    public toastCtrl: ToastController,
    public locationService: LocationService,
    // private file: File
  ) { 


    console.log(locationService.locationCoords)
    

    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
      this.loggedInDetails = JSON.parse(res.value);
      this.loggedInNumber = this.loggedInDetails.phoneNumber;
  });
    this.slideOneForm = formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      middleName: [''],
      lastName: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
      
      dob: ['', Validators.required],
      other_phone: ['']
  });




  }


 

  onChangeHandler($event) {
    this.selectedTitle = $event.target.value;
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
      "phone": this.loggedInNumber,
      "other_phone": this.slideOneForm.value.other_phone,
      "has_id": "false",
      "has_cv": "false",
      "has_rec": "false",
      "has_lc": "false",
      "has_academics": "false",
      "status": "pending"
    }
   
 
    this.api.newApplicant(postData);
  } 


  
 

}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  
      
     
 
  }

  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home-results');
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
}
