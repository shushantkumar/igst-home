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
  productlist;
  Transaction_ID;
  ToCompany;
  FromCompany;
  TotalCost;
  DOT;
  Comp_ID;
  Emp_ID;


  private fieldArray: Array<any> = [];
  private newAttribute: any = [];
  productsdata;
  constructor(
    private productsService: ProductsService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.getAllProducts();
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    
    var dateString = date + "-" +(month + 1) + "-" + year;
    this.DOT = dateString;
    console.log(this.DOT);
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
    this.newAttribute.quantity = 1;
    
    this.newAttribute.gst = meta.GST_Rate;
    this.newAttribute.id = meta.Product_ID;
    this.newAttribute.cost = meta.Cost_Price*(1+0.01*meta.GST_Rate);
    // (<HTMLButtonElement>document.getElementById(meta.Product_ID)).disabled = true;
    // this.newAttribute.rate = 0.01;
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = [];
    
}


getGrossTotal(){
  let sum=0;
  for(let i = 0; i < this.fieldArray.length; i++) {
    let temp=this.fieldArray[i];
    sum += temp.cost*temp.quantity;
  }
  return sum.toFixed(2);
}

printconsole(){
  // console.log(this.fieldArray);
  let varna = [];
  for(let i = 0; i < this.fieldArray.length; i++){
    let temp = [];
    temp[0] = this.fieldArray[i].id;
    temp[1] = this.fieldArray[i].quantity;
    varna.push(temp);
  }


  console.log(varna);
  return varna;
}

BuyTransaction(event){
  console.log(event.target.elements[0].value);
  console.log(event.target.elements[1].value);
  this.Emp_ID=this.cookieService.get( 'EMPuserID' );
  // this.cookieService.get( 'EMPtoken' );
  this.Comp_ID=this.cookieService.get( 'EMPCOMPID' );
  this.DOT = Date();
  this.FromCompany = event.target.elements[1].value;
  this.TotalCost = this.getGrossTotal();
  console.log("Starting here");
  // console.log(this.Emp_ID);
  // console.log(this.Comp_ID);
  // console.log(this.DOT);
  // console.log(this.FromCompany);
  // console.log(this.TotalCost);
  let data = {
    "BUYTRAN":{
      "Transaction_ID":"7891",
      "ToCompany":"ABC123",
      "FromCompany":this.FromCompany,
      "TotalCost":this.TotalCost,
      "DOT":this.DOT,
      "Comp_ID":this.Comp_ID,
      "Emp_ID":this.Emp_ID
    },
    "Quantity": this.printconsole()
   }
  console.log(data);
}

}
