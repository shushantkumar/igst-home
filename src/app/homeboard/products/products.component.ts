import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import {HttpClient} from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ProductsService } from "./products.service";
import { CookieService } from "ngx-cookie-service";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  productsdata;
  constructor(
    private productsService: ProductsService,
    private cookieService: CookieService,
    private router:Router
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    console.log("Something is going on!");
    let data = this.cookieService.get("EMPCOMPID");
    // let data=3;
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


  
  LogoutEvent(){
    this.cookieService.set('EMPuserID',"");
    this.cookieService.set('EMPCOMPID',"");
    this.cookieService.set('EMPCOMPName',"");
    this.cookieService.set('EMPtoken',"");
    this.router.navigate(['login']);
    
    }
}
