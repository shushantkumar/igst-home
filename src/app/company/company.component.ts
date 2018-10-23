import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  if(this.cookieService.get('COMPuserID')=="" ){
        this.router.navigate(['login']);
  }
}

LogoutEvent(){
  this.cookieService.set('COMPuserID',"")
  this.router.navigate(['login']);
  
  }

}
