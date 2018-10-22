import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products/products.service";
import { CookieService } from "ngx-cookie-service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  varu;
  constructor(
    private productsService: ProductsService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEmpDetails();
  }

  getEmpDetails(){
    let x = this.cookieService.get( 'EMPuserID' );

    this.productsService.getEmpDetails(x).subscribe(
      res => {
        console.log(res);
        let response = res.table[0];
        this.varu = response;
      },
      err => console.log(err),
      () => console.log("done!")
    );
  }

  UpdateEmployee (event) {
    let data = {
      "Name":event.target.elements[1].value,
      "MobileNo":event.target.elements[3].value,
      "Username":event.target.elements[4].value
    }
    let x = this.cookieService.get( 'EMPuserID' );
    console.log(data);
    this.productsService.UpdateEmployee(data,x).subscribe(
      res => {
        console.log(res);
        // let response = res.table[0];
        // this.varu = response;
      },
      err => console.log(err),
      () => {console.log("done!");
      this.router.navigate(['home']);
    }
    );

  }

}
