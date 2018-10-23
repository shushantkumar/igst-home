import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { RegserviceService } from '../../services/regservice.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-allexport',
  templateUrl: './allexport.component.html',
  styleUrls: ['./allexport.component.scss']
})
export class AllexportComponent implements OnInit {
  productsdata;
  constructor(
    private cookieService: CookieService,
    private soldtransService:RegserviceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getSoldTrans();
    if(this.cookieService.get('COMPuserID')=="" ){
      this.router.navigate(['login']);
}
  }
  getSoldTrans(){
    // let Emp_ID=this.cookieService.get( 'EMPuserID' );
    let Comp_ID=this.cookieService.get( 'COMPuserID' );
    this.soldtransService.getSoldTrans(Comp_ID).subscribe(
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
  this.cookieService.set('COMPuserID',"")
  this.router.navigate(['login']);
  
  }
}
