import { Component, OnInit } from '@angular/core';
import { SoldtransService } from './soldtrans.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-soldtrans',
  templateUrl: './soldtrans.component.html',
  styleUrls: ['./soldtrans.component.scss']
})
export class SoldtransComponent implements OnInit {

  productsdata;
  constructor(
    private cookieService: CookieService,
    private soldtransService:SoldtransService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getSoldTrans();
  }
  getSoldTrans(){
    let Emp_ID=this.cookieService.get( 'EMPuserID' );
    let Comp_ID=this.cookieService.get( 'EMPCOMPID' );
    this.soldtransService.getSoldTrans(Emp_ID,Comp_ID).subscribe(
      res => {
        console.log(res);
        let response = res.table;
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
