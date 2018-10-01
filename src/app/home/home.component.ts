import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {GoogleSignInSuccess} from 'angular-google-signin';
// import { NgxSpinnerService } from 'ngx-spinner';
// import * as $ from 'jquery';
import { HomeService } from './home.service';

declare const gapi:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;


  cookieENVuserID = '';
  cookieENVtoken = '';
  public editedSignIn=true;
  // public editedSignOut=true;
  constructor(
    private homeService:HomeService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let k = "";
    
    console.log(typeof this.cookieService.get('ENVuserID'));
    console.log(this.cookieService.get('ENVuserID'));
    if(this.cookieService.get('ENVuserID')!=k ){
          // console.log("first routing "+this.cookieService.get('ENVuserID')+this.editedSignOut);
          this.editedSignIn=false;
          // this.editedSignOut=false;
          // console.log(this.editedSignIn);
          // console.log(this.editedSignOut);
          // this.router.navigate(['']);
    }
    else {
    
        console.log("error here");
        // this.router.navigate(['']);
     
    
  }

    
  }
  ngAfterViewInit() {
  }

  LoginEvent(event){
    event.preventDefault();
    // console.log(event);
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    let data={
      "Email": username,
      "password": password
    };

 
    this.homeService.LoginEvent(data)
      .subscribe(
        (response) => {
        console.log(response);
        this.cookieService.set( 'ENVuserID', response.userID );
        this.cookieService.set('ENVtoken',response.token);

        this.cookieENVuserID = this.cookieService.get('ENVuserID');
        this.cookieENVtoken = this.cookieService.get('ENVtoken');

        console.log(this.cookieENVuserID,this.cookieENVtoken);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Login Successful !";
      
      },
      (err) =>{
        
        let x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById("snackbar").innerHTML ="Wrong username and password !";
      },
      () => {console.log('done!');

    }
    );

 
  

  }

  RegisterEvent(event){
    event.preventDefault();
    console.log(event);
    let name = event.target.elements[0].value;
    let emailID = event.target.elements[1].value;
    let address = event.target.elements[2].value;
    let mobileNo = event.target.elements[3].value;
    let password = event.target.elements[4].value;
    let data={
      "name":name,
      "emailID": emailID,
      "address":address,
      "mobileNo":mobileNo,
      "password": password
    };
    console.log(name,emailID,address,mobileNo,password);

    this.homeService.RegisterEvent(data)
      .subscribe(
        (response) => {
        console.log(response);
      
      },
      (err) => {console.log(err);
      
        
      
      },
      () => {
        console.log('done!');
        //this.router.navigate(['/']);
        // console.log("went to about");
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Register Unsuccessful, Try again later !";
      }
    );
    // this.router.navigate(['']);
    }




}
