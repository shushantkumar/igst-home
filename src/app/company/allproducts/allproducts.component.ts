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
    if(this.cookieService.get('COMPuserID')=="" ){
      this.router.navigate(['login']);
}
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

  LogoutEvent(){
    this.cookieService.set('COMPuserID',"")
    this.router.navigate(['login']);
    
    }

  updateRequestItem(event){
    // console.log(event.target.elements[0].value);
    // console.log(event.target.elements[1].value);
    let data = {
      "Product_ID": this.particular.Product_ID,
      "Product_Code":event.target.elements[0].value,
      "Product_Name":event.target.elements[1].value,
      "Cost_Price":event.target.elements[2].value,
      "GST_Rate":event.target.elements[3].value,
      "Quantity":event.target.elements[4].value,
      "Comp_ID": this.cookieService.get( 'COMPuserID' )
  }
  console.log(data);

  let x = this.cookieService.get( 'COMPuserID' );
  // console.log(data);
  this.productsService.UpdateProduct(data,x).subscribe(
    res => {
      console.log(res);
      // let response = res.table[0];
      // this.varu = response;
      this.router.navigate(['company']);
    },
    err => console.log(err),
    () => {console.log("done!");
    
  }
  );
  }

  AddProduct(event){
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    console.log(event.target.elements[2].value);
    console.log(event.target.elements[3].value);

    let data ={
      "Product_Code": event.target.elements[0].value,
      "Product_Name": event.target.elements[1].value,
      "Cost_Price": event.target.elements[2].value,
      "GST_Rate": event.target.elements[3].value,
      "Quantity": 0,
      "Comp_ID": this.cookieService.get( 'COMPuserID' )
    }
    console.log(data);
    this.productsService.AddProduct(data).subscribe(
      res => {
        console.log(res);
        // let response = res.table[0];
        // this.varu = response;
        this.router.navigate(['company/products']);
      },
      err => console.log(err),
      () => {console.log("done!");
      
    }
    );
  }


  deleteProduct(meta){
    let compid = this.cookieService.get( 'COMPuserID' );
    let prodid = meta.Product_ID;
    
    this.productsService.deleteProduct(compid,prodid).subscribe(
      res => {
        console.log(res);
        // let response = res.table[0];
        // this.varu = response;
        // this.router.navigate(['company/products']);
      },
      err => console.log(err),
      () => {console.log("product deleted!");
      
    }
    );
  }

}
