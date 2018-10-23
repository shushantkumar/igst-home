import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-homeboard',
  templateUrl: './homeboard.component.html',
  styleUrls: ['./homeboard.component.scss']
})
export class HomeboardComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router:Router
  ) { }

  ngOnInit() {
    if(this.cookieService.get('EMPuserID')==""){
      this.router.navigate(['login']);
    }
  }


  
  
  LogoutEvent(){
    this.cookieService.set('EMPuserID',"");
    this.cookieService.set('EMPCOMPID',"");
    this.cookieService.set('EMPCOMPName',"");
    this.cookieService.set('EMPtoken',"");
    this.router.navigate(['login']);
    
    }
}
