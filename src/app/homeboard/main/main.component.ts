import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from "ngx-cookie-service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieService:CookieService
  ) { }



  ngOnInit() {
  }
  gotoPost()
  {
    this.router.navigate(['home/products']);

   
  }

  
  LogoutEvent(){
    this.cookieService.set('EMPuserID',"");
    this.cookieService.set('EMPCOMPID',"");
    this.cookieService.set('EMPCOMPName',"");
    this.cookieService.set('EMPtoken',"");
    this.router.navigate(['login']);
    
    }

}
