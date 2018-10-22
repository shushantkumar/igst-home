import { Component, OnInit } from '@angular/core';
import { SoldtransService } from './soldtrans.service';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-soldtrans',
  templateUrl: './soldtrans.component.html',
  styleUrls: ['./soldtrans.component.scss']
})
export class SoldtransComponent implements OnInit {

  productsdata;
  constructor(
    private cookieService: CookieService,
    private soldtransService:SoldtransService
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

}
