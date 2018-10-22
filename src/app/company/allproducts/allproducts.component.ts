import { Component, OnInit } from "@angular/core";
import { CompanyallService } from "../companyall.service";
import { Router } from "@angular/router";
// import {HttpClient} from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CookieService } from "ngx-cookie-service";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";


@Component({
  selector: "app-allproducts",
  templateUrl: "./allproducts.component.html",
  styleUrls: ["./allproducts.component.scss"]
})
export class AllproductsComponent implements OnInit {
  productsdata;
  particular;
  constructor(
    private productsService: CompanyallService,
    private cookieService: CookieService,
    private router:Router
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    console.log("Something is going on!");
    let data = this.cookieService.get("COMPuserID");
    // let data=3;
    console.log(" klnklnslkn COMPANY fel");
    this.productsService.getAllProducts(data).subscribe(
      res => {
        console.log(res);
        let response = res.products;
        this.productsdata = response;
      },
      err => console.log(err),
      () => console.log("done!")
    );
  }

  updateRequest(meta){
    console.log("ghgh");
    console.log(meta);
    this.particular = meta;
  }

  updateRequestItem(){
    let data = {
      "Product_ID": this.particular.Product_ID,
      "Product_Code":this.particular.Product_Code,
      "Product_Name":this.particular.Product_Name,
      "Cost_Price":this.particular.Cost_Price,
      "GST_Rate":this.particular.GST_Rate,
      "Quantity":this.particular.Quantity,
      "Comp_ID": this.cookieService.get( 'COMPuserID' )
  }
  console.log(data);

  // let x = this.cookieService.get( 'COMPuserID' );
  // console.log(data);
  // this.productsService.UpdateProduct(data,x).subscribe(
  //   res => {
  //     console.log(res);
  //     // let response = res.table[0];
  //     // this.varu = response;
  //   },
  //   err => console.log(err),
  //   () => {console.log("done!");
  //   // this.router.navigate(['company']);
  // }
  // );
  }
}
