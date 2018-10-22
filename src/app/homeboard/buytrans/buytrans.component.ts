import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import {HttpClient} from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ProductsService } from "../products/products.service";
import { CookieService } from "ngx-cookie-service";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-buytrans',
  templateUrl: './buytrans.component.html',
  styleUrls: ['./buytrans.component.scss']
})
export class BuytransComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = [];
  productsdata;
  constructor(
    private productsService: ProductsService,
    private cookieService: CookieService
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

  addFieldValue(meta){
    this.newAttribute.code = meta.Product_Code;
    this.newAttribute.quantity = 0;
    this.newAttribute.cost = 0;
    
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = [];
}

}
