import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { RegserviceService } from '../services/regservice.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(

    private headerService:RegserviceService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  LoginCompanyEvent(event){
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    let data={
      "Email":event.target.elements[0].value,
      "Password":event.target.elements[1].value
    }

    this.headerService.LoginCompanyEvent(data)
    .subscribe(
      (response) => {
      console.log(response);      
      this.cookieService.set( 'COMPuserID', response.Company_ID );
      console.log(this.cookieService.get("COMPuserID"));
      this.router.navigate(['home']);
    
    },
    (err) =>{
    },
    () => {console.log('done!');

  }
  );
  }

  LoginEmployeeEvent(event){
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    let data={
      "Email":event.target.elements[0].value,
      "Password":event.target.elements[1].value
    }

    this.headerService.LoginEmployeeEvent(data)
    .subscribe(
      (response) => {
      console.log(response);
      this.cookieService.set( 'EMPuserID', response.Employee_ID );
      this.cookieService.set( 'EMPtoken', response.token );
      this.cookieService.set( 'EMPCOMPID', response.Comp_ID );
      this.cookieService.set('EMPCOMPName',response.Company_Name);
      this.router.navigate(['home']);
    
    },
    (err) =>{
    },
    () => {console.log('done!');

  }
  );
  }

}
