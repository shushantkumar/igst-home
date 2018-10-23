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
import { SelltransService } from './selltrans.service';

@Component({
  selector: 'app-selltrans',
  templateUrl: './selltrans.component.html',
  styleUrls: ['./selltrans.component.scss']
})
export class SelltransComponent implements OnInit {

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
    private cookieService: CookieService,
    private selltransService:SelltransService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllProducts();
    this.getnextSellTran();
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    // var h = this.addZero(currentDate.getHours());
    // var m = this.addZero(currentDate.getMinutes());
    // var s = this.addZero(currentDate.getSeconds());

    var dateString = year+ "-" +(month + 1)+ "-" +date;
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

  getnextSellTran(){
    this.productsService.getnextSellTran()
    .subscribe(
      (response) => {
      console.log(response);

      this.Transaction_ID = response.Transaction_ID + 1;
    
    },
    (err) =>{
    },
    () => {console.log('done!');
    // this.router.navigate(['home']);
  }
  );

  }

  addFieldValue(meta){
    this.newAttribute.code = meta.Product_Code;
    this.newAttribute.quantity = 1;
    this.newAttribute.maxquant = meta.Quantity;
    
    this.newAttribute.gst = meta.GST_Rate;
    this.newAttribute.id = meta.Product_ID;
    this.newAttribute.actprice = meta.Cost_Price*(1+0.01*meta.GST_Rate);
    this.newAttribute.cost = meta.Cost_Price*(1+0.01*meta.GST_Rate);
    this.fieldArray.push(this.newAttribute)
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


getNetProfitLoss(){
  let sum=0;
  for(let i = 0; i < this.fieldArray.length; i++) {
    // let temp=this.fieldArray[i];
    sum += this.fieldArray[i].cost*this.fieldArray[i].quantity-this.fieldArray[i].actprice*this.fieldArray[i].quantity;
  }
  return sum.toFixed(2);
}

printconsole(){
  // console.log(this.fieldArray);
  let varna = [];

  for(let i = 0; i < this.fieldArray.length; i++){
    let temp = [];
    temp[0] = this.fieldArray[i].id;
    // console.log("hhhhhhhhhhhhhh"+this.fieldArray[i].quantity,this.fieldArray[i].maxquant)
    if(this.fieldArray[i].quantity>this.fieldArray[i].maxquant){ return 0;  }
    temp[1] = this.fieldArray[i].quantity;

    let tt = this.fieldArray[i].cost*this.fieldArray[i].quantity-this.fieldArray[i].actprice*this.fieldArray[i].quantity;
    temp[2] = tt.toFixed(2);
    varna.push(temp);
  }



  console.log(varna);
  return varna;
}

addZero(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

SellTransaction(event){
  console.log(event.target.elements[0].value);
  console.log(event.target.elements[1].value);
  this.Emp_ID=this.cookieService.get( 'EMPuserID' );
  // this.cookieService.get( 'EMPtoken' );
  this.Comp_ID=this.cookieService.get( 'EMPCOMPID' );
  
  //Date calc
  var currentDate = new Date();

  var date = currentDate.getDate();
  var month = currentDate.getMonth(); 
  var year = currentDate.getFullYear();
  var h = this.addZero(currentDate.getHours());
  var m = this.addZero(currentDate.getMinutes());
  var s = this.addZero(currentDate.getSeconds());

  var dateString = year+ "-" +(month + 1)+ "-" +date + " " +  h + ":" + m + ":" + s;
  this.DOT = dateString;

  this.ToCompany = event.target.elements[1].value;
  this.TotalCost = this.getGrossTotal();
  this.FromCompany = this.cookieService.get('EMPCOMPName');
  console.log("Starting here");
  // console.log(this.Emp_ID);
  // console.log(this.Comp_ID);
  // console.log(this.DOT);
  // console.log(this.FromCompany);
  // console.log(this.TotalCost);
  let temp = this.printconsole();
  let prolos = this.getNetProfitLoss();
  if(temp==0){ alert ("Order quantity cannot be greater than remaining quantity!"); }
  else {
    let data = {
      "SELLTRAN":{
        "Transaction_ID":this.Transaction_ID,
        "ToCompany":this.ToCompany,
        "FromCompany":this.FromCompany,
        "TotalCost":this.TotalCost,
        "DOT":this.DOT,
        "Comp_ID":this.Comp_ID,
        "Emp_ID":this.Emp_ID,
        "Profit_Loss":prolos
      },
      "Quantity": this.printconsole()
    }
    console.log(data);

    this.selltransService.SellTransaction(data)
    .subscribe(
      (response) => {
      console.log(response);

    
    
    },
    (err) =>{
    },
    () => {console.log('done!');
    this.router.navigate(['home']);
  }
  );

  }

}


LogoutEvent(){
  this.cookieService.set('EMPuserID',"");
  this.cookieService.set('EMPCOMPID',"");
  this.cookieService.set('EMPCOMPName',"");
  this.cookieService.set('EMPtoken',"");
  this.router.navigate(['login']);
  
  }


}
