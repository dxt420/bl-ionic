import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2'
import { AccountKitService } from './account-kit.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiDjangoService {

  data = [];

  allApplicants;
  loggedInUser;


 constructor(private http:HttpClient,
              private nativeHttp: HTTP, 
              private plt: Platform, 
              public navCtrl: NavController,
              public ak: AccountKitService,
              private router: Router,
              private loadingCtrl: LoadingController) {
                // console.log("in apidjango bitttttttccccchhhh")
             

                this.getAllApplicants();
            

                
              //   this.http.get("https://brightlife.pythonanywhere.com/api/applicants/").subscribe((response) => {
              //    console.log(response);
              //  });
               }


               async uploadFormData(aaa) {
                let loading = await this.loadingCtrl.create();
                await loading.present();
             
            
                try {
                  const response = await this.nativeHttp.get('https://brightlife.pythonanywhere.com/api/applicants/',{},{});
                  console.log(response.status);
                  console.log(JSON.parse(response.data)); // JSON data returned by server
                  console.log(response.headers)
                
                  var AAA = JSON.parse(response.data);
              
                  // if (response.data.results) {
            
                    (<any>window).AccountKitPlugin.getAccount(
                      (info)=> {
                       console.log(info);
                       console.log(info.phoneNumber);
                       var forAce;
                       AAA.results.forEach(async (element)  => {
                        console.log(element);
                        if (element.phone == info.phoneNumber) {
                          console.log(element);
                          console.log(element.phone);
                          // this.loggedInUser = element;
                          // console.log(element);
            
                          let postData = {
                            "nid_number": aaa,
                            "user_id": element.id
                           
                          }
                          try {
                            // this.nativeHttp.setDataSerializer('json');
                            const response = await this.nativeHttp.post(
                              'https://brightlife.pythonanywhere.com/api/applicantIdentity/'+element.id+'/',postData,{});
                           
                         
                            console.log(response.status);
                            console.log(JSON.parse(response.data)); // JSON data returned by server
                            console.log(response.headers)
                            loading.dismiss();
                            Swal.fire({
                              title: 'Nice Progress!',
                              text: "Thank you for submitting your National ID details.  You may now proceed with the next couple of uploads for the other required documents but that will be after we review your information and get back to you. ",
                              type: 'success',
                              showCancelButton: false,
                             
                            })
                      
                      
                            
                      
                            //  this.navCtrl.navigateRoot('/');

                             this.navCtrl.navigateRoot('academic-uploads');
                            
                      
                          } catch (error) {
                            console.error(error);
                            console.error(error.status);
                            console.error(error.error); // Error message as string
                            console.error(error.headers);
                            loading.dismiss();
                            Swal.fire({
                              title: 'Submission Failed!',
                              text: "Sorry! Your submission couldn’t go through. Please check your details or try again later.",
                              type: 'error',
                              showCancelButton: false,
                             
                            })
                            
                          }
                        }
                      });
            
                   
                      
                      },
                     async (err) => {
                       console.log(err)
                      
                     });
                
                   
                  // }
            
            
              
                 
                  
                 
                  loading.dismiss();
            
                  // return forAceExtra;
            
                } catch (error) {
                  console.error(error.status);
                  console.error(error.error); // Error message as string
                  console.error(error.headers);
                  loading.dismiss();
                }
            
       
}  
              
 


  async getAllApplicants() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 
   

    try {
      const response = await this.nativeHttp.get('https://brightlife.pythonanywhere.com/api/applicants/',{},{});
      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers)
      this.allApplicants = response.data.results;

      if (response.data.results) {

        (<any>window).AccountKitPlugin.getAccount(
          (info)=> {
           console.log(info);
           response.data.results.forEach(element => {
            if (element.phone == info.phoneNumber) {
              this.loggedInUser = element;
              console.log(this.loggedInUser);
            }
          });
          },
         async (err) => {
           console.log(err)
          
         });
    
       
      }

     
      
     
      loading.dismiss();

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
      loading.dismiss();
    }
   
  }

  async newApplicant(postData) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 


    



      try {
        // this.nativeHttp.setDataSerializer('json');
        const response = await this.nativeHttp.post(
          'https://brightlife.pythonanywhere.com/api/applicants/',postData,{});
       
     
        console.log(response.status);
        console.log(JSON.parse(response.data)); // JSON data returned by server
        console.log(response.headers)
        loading.dismiss();
        Swal.fire({
          title: 'Good job!',
          text: "Congratulations! Your application id was created successfully. Please proceed with the on-boarding process to fill in more information about yourself.",
          type: 'success',
          showCancelButton: false,
         
        })


        

        //  this.navCtrl.navigateForward('/idtype');

         this.navCtrl.navigateRoot('/idtype');

        //  this.router.navigate(['/idtype'],{
        //   queryParams: {
        //     value : response.data
        //     },
        //   });
        
  
      } catch (error) {
        console.error(error);
        console.error(error.status);
        console.error(error.error); // Error message as string
        console.error(error.headers);
        loading.dismiss();
        Swal.fire({
          title: 'Application Failed!',
          text: "Sorry! Your application couldn’t go through. Please check your details or try again later.",
          type: 'error',
          showCancelButton: false,
         
        })
        
      }

  }


 



  async NIDSubmit(aaa) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 

    try {
      const response = await this.nativeHttp.get('https://brightlife.pythonanywhere.com/api/applicants/',{},{});
      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers)
    
      var AAA = JSON.parse(response.data);
  
      // if (response.data.results) {

        (<any>window).AccountKitPlugin.getAccount(
          (info)=> {
           console.log(info);
           console.log(info.phoneNumber);
           var forAce;
           AAA.results.forEach(async (element)  => {
            console.log(element);
            if (element.phone == info.phoneNumber) {
              console.log(element);
              console.log(element.phone);
              // this.loggedInUser = element;
              // console.log(element);

              let postData = {
                "nid_number": aaa,
                "user_id": element.id
               
              }

              let postData2 = {
                "has_id": "true"
               
              }
              try {
                // this.nativeHttp.setDataSerializer('json');
                const response = await this.nativeHttp.post(
                  'https://brightlife.pythonanywhere.com/api/applicantIdentity/'+element.id+'/',postData,{});
               
             
                console.log(response.status);
                console.log(JSON.parse(response.data)); // JSON data returned by server
                console.log(response.headers)

              
                  const response2 = await this.nativeHttp.patch(
                    'https://brightlife.pythonanywhere.com/api/applicant/'+element.id+'/',postData2,{});
                 
               
                  console.log(response2.status);
                  console.log(JSON.parse(response2.data)); // JSON data returned by server
                  console.log(response2.headers)
              
            
               
                
                loading.dismiss();
              
                    this.router.navigate(['/academic-uploads']);
                
          
              } catch (error) {
                console.error(error);
                console.error(error.status);
                console.error(error.error); // Error message as string
                console.error(error.headers);
                loading.dismiss();
                Swal.fire({
                  title: 'Submission Failed!',
                  text: "Sorry! Your submission couldn’t go through. Please check your details or try again later.",
                  type: 'error',
                  showCancelButton: false,
                 
                })
                
              }
            }
          });

       
          
          },
         async (err) => {
           console.log(err)
          
         });
    
       
      // }


  
     
      
     
      loading.dismiss();

      // return forAceExtra;

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
      loading.dismiss();
    }













    
   


     

  }




  async passportSubmit(aaa) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 

    try {
      const response = await this.nativeHttp.get('https://brightlife.pythonanywhere.com/api/applicants/',{},{});
      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers)
    
      var AAA = JSON.parse(response.data);
  
      // if (response.data.results) {

        (<any>window).AccountKitPlugin.getAccount(
          (info)=> {
           console.log(info);
           console.log(info.phoneNumber);
           var forAce;
           AAA.results.forEach(async (element)  => {
            console.log(element);
            if (element.phone == info.phoneNumber) {
              console.log(element);
              console.log(element.phone);
              // this.loggedInUser = element;
              // console.log(element);

              let postData = {
                "passport_number": aaa,
                "user_id": element.id
               
              }
              try {
                // this.nativeHttp.setDataSerializer('json');
                const response = await this.nativeHttp.post(
                  'https://brightlife.pythonanywhere.com/api/applicantIdentity/'+element.id+'/',postData,{});
               
             
                console.log(response.status);
                console.log(JSON.parse(response.data)); // JSON data returned by server
                console.log(response.headers)
                loading.dismiss();
                // Swal.fire({
                //   title: 'Nice Progress!',
                //   text: "Thank you for submitting your passport details. You may now proceed with the next couple of uploads for the other required documents but that will be after we review your information and get back to you. ",
                //   type: 'success',
                //   showCancelButton: false,
                 
                // })
          
          
                
          
                // this.navCtrl.navigateRoot('/');

                this.navCtrl.navigateRoot('academic-uploads');
                
          
              } catch (error) {
                console.error(error);
                console.error(error.status);
                console.error(error.error); // Error message as string
                console.error(error.headers);
                loading.dismiss();
                Swal.fire({
                  title: 'Submission Failed!',
                  text: "Sorry! Your submission couldn’t go through. Please check your details or try again later.",
                  type: 'error',
                  showCancelButton: false,
                 
                })
                
              }
            }
          });

       
          
          },
         async (err) => {
           console.log(err)
          
         });
    
       
      // }


  
     
      
     
      loading.dismiss();

      // return forAceExtra;

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
      loading.dismiss();
    }













    
   


     

  }



  
 

 
  async updateApplicant(postData) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 

    try {
      const response = await this.nativeHttp.get('https://brightlife.pythonanywhere.com/api/applicants/',{},{});
      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers)
    
      var AAA = JSON.parse(response.data);
  


        (<any>window).AccountKitPlugin.getAccount(
          (info)=> {
           console.log(info);
           console.log(info.phoneNumber);
           var forAce;
           AAA.results.forEach(async (element)  => {
            console.log(element);
            if (element.phone == info.phoneNumber) {
              console.log(element);
              console.log(element.phone);
              // this.loggedInUser = element;
              // console.log(element);

              
              try {
                // this.nativeHttp.setDataSerializer('json');
                const response = await this.nativeHttp.patch(
                  'https://brightlife.pythonanywhere.com/api/applicant/'+element.id+'/',postData,{});
               
             
                console.log(response.status);
                console.log(JSON.parse(response.data)); // JSON data returned by server
                console.log(response.headers)
                loading.dismiss();
                // Swal.fire({
                //   title: 'Updates Confirmed!',
                //   text: "Your information has been updated successfully ",
                //   type: 'success',
                //   showCancelButton: false,
                 
                // })
          
          
                
          
                this.navCtrl.navigateRoot('/idtype');

                // navigateRoot
                
          
              } catch (error) {
                console.error(error);
                console.error(error.status);
                console.error(error.error); // Error message as string
                console.error(error.headers);
                loading.dismiss();
                Swal.fire({
                  title: 'Submission Failed!',
                  text: "Sorry! Your submission couldn’t go through. Please check your details or try again later.",
                  type: 'error',
                  showCancelButton: false,
                 
                })
                
              }
            }
          });

       
          
          },
         async (err) => {
           console.log(err)
          
         });

     
      loading.dismiss();



    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
      loading.dismiss();
    }


  }

  
 
 
}