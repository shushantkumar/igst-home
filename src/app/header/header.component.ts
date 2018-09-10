import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {HeaderService} from './header.service';
import * as $ from 'jquery';
import {GoogleSignInSuccess} from 'angular-google-signin';
import { parseCookieValue } from '@angular/common/src/cookie';

declare const gapi:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cookieENVuserID = '';
  cookieENVtoken = '';
  public editedSignIn=true;
  public editedSignOut=true;
  constructor(
    private headerService:HeaderService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {

    //     gapi.load('auth2', function() {
    //   gapi.auth2.init();
    // });
    let k = "";
    
    console.log(typeof this.cookieService.get('ENVuserID'));
    console.log(this.cookieService.get('ENVuserID'));
  if(this.cookieService.get('ENVuserID')!=k ){
        console.log("first routing "+this.cookieService.get('ENVuserID')+this.editedSignOut);
        this.editedSignIn=false;
        this.editedSignOut=false;
        // console.log(this.editedSignIn);
        console.log(this.editedSignOut);
        this.router.navigate(['about']);
  }
  else {
   
      console.log("error here");
      this.router.navigate(['']);
     
    
  }


  }
  
  private myClientId: string = '845484216154-2nuk8avekh8o02oqc9ct699dcgekvm16.apps.googleusercontent.com';
 
  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    setTimeout(function(){

     
    }, 1000);

    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); 
    //     console.log(profile.getEmail())
    // console.log('Name: ' + profile.getName());

    let name = profile.getName();
    let emailID = profile.getEmail();
    let password = profile.getId()+profile.getName();

    let data = {
      "name":name,
      "emailID": emailID,
      "password":password
    }
    console.log(data);
    this.cookieService.delete('ENVuserID');
    this.cookieService.delete('ENVtoken');
    this.headerService.onGoogleSignInSuccess(data)
      .subscribe(
        (response) => {
        console.log(response);
        this.cookieService.set( 'ENVuserID', response.userID );
        this.cookieService.set('ENVtoken',response.token);

        this.cookieENVuserID = this.cookieService.get('ENVuserID');
        this.cookieENVtoken = this.cookieService.get('ENVtoken');

        console.log(this.cookieENVuserID,this.cookieENVtoken);
      
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
    setTimeout(function(){
      // this.router.navigate(['about']);
      window.location.reload();
      console.log("went to about");
       
      }, 1000);
   
  
  }

  LoginEvent(event){
    event.preventDefault();
    // console.log(event);
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    let data={
      "emailID": username,
      "password": password
    };

    if(username==""||password==""){
      let x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById("snackbar").innerHTML ="Please enter the username and password !";
    }
    else {
    
    this.headerService.LoginEvent(data)
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

 
    setTimeout(function(){
    // this.router.navigate(['about']);


    window.location.reload();
    console.log("went to about");
     
    }, 2000);
    
   }

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

    if(name==""||password==""||emailID==""||address==""||mobileNo==""){
      let x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById("snackbar").innerHTML ="Please enter all the fields !";
    }
    else
    {
    this.headerService.RegisterEvent(data)
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
     setTimeout(function(){
      console.log("registering done");
      // this.router.navigate(['/']);
      let x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById("snackbar").innerHTML ="Register Successful, Kindly Login now !";
      window.location.reload();

    }, 2000);}
  }


  LogoutEvent(){
    console.log("loggedout");
    this.cookieService.delete('ENVuserID');
    this.cookieService.delete('ENVtoken');
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    document.getElementById("snackbar").innerHTML ="Successfuly logged out !";
    // let googleUser: gapi.auth2.GoogleUser = event.googleUser;

    // let autho = gapi.auth2.getAuthInstance();
    // autho.signOut();
    // .then(function () {
    //   console.log('User signed out.');
    // });
  //   gapi.auth2.signOut();
  //   setTimeout(function(){
  //   window.location.reload();
  // }, 1500);

    // let k = "";
    // window.location.reload();
    this.router.navigate(['']);  //this one
    
    // if(this.cookieService.get('ENVuserID')!=k){{
    //   console.log("loggedouting");
      
    // }
    // setTimeout(function(){
    //   console.log("loggedouting");
    //   this.router.navigate(['/']);

    //   // window.location.reload();

    // }, 1000);

  }
//  googleSign(){  
//   console.log("Reached @ here"); 
//   function onSignIn(googleUser) {
//     // Useful data for your client-side scripts:
//     console.log("Reached atleast here");
    
//     var profile = googleUser.getBasicProfile();
//     console.log(profile);
//     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//     console.log('Full Name: ' + profile.getName());
//     console.log('Given Name: ' + profile.getGivenName());
//     console.log('Family Name: ' + profile.getFamilyName());
//     console.log("Image URL: " + profile.getImageUrl());
//     console.log("Email: " + profile.getEmail());

//     // The ID token you need to pass to your backend:
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log("ID Token: " + id_token);
//   };}


}
