import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { BottransService } from './bottrans.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bottrans',
  templateUrl: './bottrans.component.html',
  styleUrls: ['./bottrans.component.scss']
})
export class BottransComponent implements OnInit {
  productsdata;
  constructor(
    private cookieService: CookieService,
    private bottransService:BottransService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBuyTrans();
  }

  getBuyTrans(){
    let Emp_ID=this.cookieService.get( 'EMPuserID' );
    let Comp_ID=this.cookieService.get( 'EMPCOMPID' );
    this.bottransService.getBuyTrans(Emp_ID,Comp_ID).subscribe(
      res => {
        console.log(res);
        let response = res.transact;
        this.productsdata = response;
      },
      err => console.log(err),
      () => console.log("done!")
    );
  }

  LogoutEvent(){
    this.cookieService.set('EMPuserID',"");
    this.cookieService.set('EMPCOMPID',"");
    this.cookieService.set('EMPCOMPName',"");
    this.cookieService.set('EMPtoken',"");
    this.router.navigate(['login']);
    
    }

}
