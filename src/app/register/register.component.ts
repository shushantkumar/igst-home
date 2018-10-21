import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { RegserviceService } from '../services/regservice.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(
    private headerService:RegserviceService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  RegisterEmployeeEvent(event){
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    console.log(event.target.elements[2].value);
    console.log(event.target.elements[3].value);
    console.log(event.target.elements[4].value);
    console.log(event.target.elements[5].value);
    console.log(event.target.elements[6].value);


    let data={
      "Name":event.target.elements[0].value,
      "MobileNo":event.target.elements[5].value,
      "Email":event.target.elements[4].value,
      "Username":event.target.elements[1].value,
      "Password":event.target.elements[2].value,
      "Comp_ID":event.target.elements[3].value
    }

    this.headerService.RegisterEmployeeEvent(data)
    .subscribe(
      (response) => {
      console.log(response);
      this.router.navigate(['login']);
    
    },
    (err) =>{
    },
    () => {console.log('done!');

  }
  );
  }

}
