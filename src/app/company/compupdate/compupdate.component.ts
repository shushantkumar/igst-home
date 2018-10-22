import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import {Router} from '@angular/router';
import { RegserviceService } from '../../services/regservice.service';

@Component({
  selector: 'app-compupdate',
  templateUrl: './compupdate.component.html',
  styleUrls: ['./compupdate.component.scss']
})
export class CompupdateComponent implements OnInit {
  varu;
  constructor(
    private productsService: RegserviceService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getComDetails();
  }

  getComDetails(){
    let x = this.cookieService.get( 'COMPuserID' );

    this.productsService.getComDetails(x).subscribe(
      res => {
        console.log(res);
        let response = res.table[0];
        this.varu = response;
      },
      err => console.log(err),
      () => console.log("done!")
    );
  }

  UpdateCompany (event) {
    let data = {
      "Name":event.target.elements[1].value,
      "MobileNo":event.target.elements[3].value,
      "Username":event.target.elements[4].value,
      "Address":event.target.elements[5].value
    }
    let x = this.cookieService.get( 'COMPuserID' );
    console.log(data);
    this.productsService.UpdateCompany(data,x).subscribe(
      res => {
        console.log(res);
        // let response = res.table[0];
        // this.varu = response;
      },
      err => console.log(err),
      () => {console.log("done!");
      this.router.navigate(['company']);
    }
    );

  }


}
