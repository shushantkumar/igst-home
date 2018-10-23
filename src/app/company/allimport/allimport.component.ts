import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { RegserviceService } from '../../services/regservice.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-allimport',
  templateUrl: './allimport.component.html',
  styleUrls: ['./allimport.component.scss']
})
export class AllimportComponent implements OnInit {
  productsdata;
  constructor(
    private cookieService: CookieService,
    private bottransService:RegserviceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getBuyTrans();
    if(this.cookieService.get('COMPuserID')=="" ){
      this.router.navigate(['login']);
    }
  }

  getBuyTrans(){
    // let Emp_ID=this.cookieService.get( 'EMPuserID' );
    let Comp_ID=this.cookieService.get( 'COMPuserID' );
    this.bottransService.getBuyTrans(Comp_ID).subscribe(
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
