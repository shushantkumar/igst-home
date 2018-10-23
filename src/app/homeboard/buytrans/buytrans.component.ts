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
import { BuytransService } from './buytrans.service';

declare var jsPDF: any;

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
    private cookieService: CookieService,
    private buytransService: BuytransService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllProducts();
    this.getnextBuyTran();
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    // var h = this.addZero(currentDate.getHours());
    // var m = this.addZero(currentDate.getMinutes());
    // var s = this.addZero(currentDate.getSeconds());

    var dateString = year+ "-" +(month + 1)+ "-" +date ;
    this.DOT = dateString;
    console.log(this.DOT);
  }

  addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
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
    this.newAttribute.name = meta.Product_Name;
    this.newAttribute.gst = meta.GST_Rate;
    this.newAttribute.id = meta.Product_ID;
    this.newAttribute.cost = meta.Cost_Price*(1+0.01*meta.GST_Rate);
    // (<HTMLButtonElement>document.getElementById(meta.Product_ID)).disabled = true;
    // this.newAttribute.rate = 0.01;
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = [];
    
}

getnextBuyTran(){
  this.productsService.getnextBuyTran()
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

  //date calc
  var currentDate = new Date();

  var date = currentDate.getDate();
  var month = currentDate.getMonth(); //Be careful! January is 0 not 1
  var year = currentDate.getFullYear();
  var h = this.addZero(currentDate.getHours());
  var m = this.addZero(currentDate.getMinutes());
  var s = this.addZero(currentDate.getSeconds());

  var dateString = year+ "-" +(month + 1)+ "-" +date + " " +  h + ":" + m + ":" + s;
  this.DOT = dateString;

  this.FromCompany = event.target.elements[1].value;
  this.TotalCost = this.getGrossTotal();
  this.ToCompany = this.cookieService.get('EMPCOMPName');
  console.log("Starting here");
  // console.log(this.Emp_ID);
  // console.log(this.Comp_ID);
  // console.log(this.DOT);
  // console.log(this.FromCompany);
  // console.log(this.TotalCost);

  let varna = [];
  for(let i = 0; i < this.fieldArray.length; i++){
    let temp = [];
    temp[0] = this.fieldArray[i].id;
    temp[2] = this.fieldArray[i].quantity;
    temp[1] = this.fieldArray[i].name;
    temp[3] = this.fieldArray[i].quantity * this.fieldArray[i].cost;
    varna.push(temp);
  }

  let columns = ["Transaction_ID", "ToCompany", "FromCompany", "TotalCost", "DOT", "Comp_ID", "Emp_ID"];
  let rows = [
      [this.Transaction_ID, this.ToCompany,this.FromCompany,this.TotalCost,this.DOT,this.Comp_ID,this.Emp_ID],
  ];

  let columnp = ["Product ID","Product Name","Quantity","Net Cost"];
  // let rowsp = this.printconsole();

  let doc = new jsPDF('l', 'pt');
  doc.text('Buy Transaction Details', 14, 16);
  doc.autoTable(columns, rows); 
  // let doc1 = new jsPDF('l', 'pt');

  doc.text('Product List', 14, doc.autoTable.previous.finalY + 10);
  doc.autoTable(columnp, varna, {startY: doc.autoTable.previous.finalY + 14, theme: 'grid'});

  // doc1.autoTable(columns, rows);
  doc.save("BUY"+this.Transaction_ID+' '+ this.DOT +'.pdf');
  // doc1.save('table1.pdf');

  
  let data = {
    "BUYTRAN":{
      "Transaction_ID":this.Transaction_ID,
      "ToCompany":this.ToCompany,
      "FromCompany":this.FromCompany,
      "TotalCost":this.TotalCost,
      "DOT":this.DOT,
      "Comp_ID":this.Comp_ID,
      "Emp_ID":this.Emp_ID
    },
    "Quantity": this.printconsole()
   }
  console.log(data);

  this.buytransService.BuyTransaction(data)
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



LogoutEvent(){
  this.cookieService.set('EMPuserID',"");
  this.cookieService.set('EMPCOMPID',"");
  this.cookieService.set('EMPCOMPName',"");
  this.cookieService.set('EMPtoken',"");
  this.router.navigate(['login']);
  
  }

}
