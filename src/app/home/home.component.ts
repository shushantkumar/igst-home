import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor( private cookieService: CookieService,private router: Router ) { }

  ngOnInit(): void {

    // console.log(this.cookieService.get('ENVuserID'));
    // console.log(this.cookieService.get('ENVtoken'));
    // this.spinner.show();

    // setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    // }, 5000);
    
  }

  gotoPost()

{this.router.navigate(['allposts']);
console.log("went to allposts");}

gotoReq(){this.router.navigate(['allrequests']);
console.log("went to allrequests");}

}
