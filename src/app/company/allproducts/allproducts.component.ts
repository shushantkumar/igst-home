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
import { TestryService } from '../../testry/testry.service';
import * as CanvasJS from "../../testry/canvasjs.min";

@Component({
  selector: "app-allproducts",
  templateUrl: "./allproducts.component.html",
  styleUrls: ["./allproducts.component.scss"]
})
export class AllproductsComponent implements OnInit {
  productsdata;
  particular;
  table3;
  table7;
  constructor(
    private productsService: CompanyallService,
    private cookieService: CookieService,
    private router:Router,
    private testryService: TestryService
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

  ProductgetCompanyLG(meta) {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=this.cookieService.get( 'COMPuserID' );
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var productId = meta.Product_ID;
    this.testryService.ProductgetCompanyLG(Company_ID,productId,year).subscribe(
      res => {
        let response = res;
        this.table3 = response;
        console.log(this.table3);

        var chart = new CanvasJS.Chart("chartContainer3", {
          theme: "dark1", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Net profit loss per month - "+year
          },
          axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
          },
          axisY:{
            title: "Price",
            valueFormatString: "₹#0"
          },
          data: [{        
            type: "line",
            markerSize: 12,
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "₹###.#",
            dataPoints: [        
              { x: new Date(this.table3.year, this.table3.data[0].x, 1), y: this.table3.data[0].y, indexLabel: this.table3.data[0].indexLabel, markerType: this.table3.data[0].markerType,  markerColor: this.table3.data[0].markerColor },
              { x: new Date(this.table3.year, this.table3.data[1].x, 1), y: this.table3.data[1].y, indexLabel: this.table3.data[1].indexLabel, markerType: this.table3.data[1].markerType,  markerColor:  this.table3.data[1].markerColor },
              { x: new Date(this.table3.year, this.table3.data[2].x, 1) , y: this.table3.data[2].y, indexLabel: this.table3.data[2].indexLabel, markerType: this.table3.data[2].markerType, markerColor:  this.table3.data[2].markerColor },
              { x: new Date(this.table3.year, this.table3.data[3].x, 1) , y: this.table3.data[3].y, indexLabel: this.table3.data[3].indexLabel, markerType: this.table3.data[3].markerType, markerColor:  this.table3.data[3].markerColor },
              { x: new Date(this.table3.year, this.table3.data[4].x, 1) , y: this.table3.data[4].y, indexLabel:this.table3.data[4].indexLabel, markerType: this.table3.data[4].markerType, markerColor:  this.table3.data[4].markerColor },
              { x: new Date(this.table3.year, this.table3.data[5].x, 1) , y: this.table3.data[5].y, indexLabel: this.table3.data[5].indexLabel, markerType: this.table3.data[5].markerType, markerColor:  this.table3.data[5].markerColor },
              { x: new Date(this.table3.year, this.table3.data[6].x, 1) , y: this.table3.data[6].y, indexLabel: this.table3.data[6].indexLabel, markerType: this.table3.data[6].markerType, markerColor:  this.table3.data[6].markerColor},
              { x: new Date(this.table3.year, this.table3.data[7].x, 1) , y: this.table3.data[7].y, indexLabel: this.table3.data[7].indexLabel, markerType: this.table3.data[7].markerType, markerColor:  this.table3.data[7].markerColor },
              { x: new Date(this.table3.year, this.table3.data[8].x, 1) , y: this.table3.data[8].y, indexLabel: this.table3.data[8].indexLabel, markerType: this.table3.data[8].markerType, markerColor:  this.table3.data[8].markerColor },
              { x: new Date(this.table3.year, this.table3.data[9].x, 1) , y: this.table3.data[9].y, indexLabel: this.table3.data[9].indexLabel, markerType: this.table3.data[9].markerType, markerColor:  this.table3.data[9].markerColor },
              { x: new Date(this.table3.year, this.table3.data[10].x, 1) , y: this.table3.data[10].y, indexLabel: this.table3.data[10].indexLabel, markerType: this.table3.data[10].markerType, markerColor: this.table3.data[10].markerColor },
              { x: new Date(this.table3.year, this.table3.data[11].x, 1) , y: this.table3.data[11].y, indexLabel: this.table3.data[11].indexLabel, markerType:this.table3.data[11].markerType, markerColor:  this.table3.data[11].markerColor }
            ]
          }]
        });
        console.log(chart);
        chart.render();


      },
      err => console.log(err),
      () => console.log("done!")
    );
  }
  
  ProductgetCompanyLGM(meta) {
    console.log("Something is going on!");
    var Company_ID=this.cookieService.get( 'COMPuserID' );
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var productId = meta.Product_ID;
    var month = currentDate.getMonth()+1;
    // let data = this.cookieService.get("EMPCOMPID");
    // var Company_ID=10, year=2018, month=10,productId=9855 ;
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
      ];
    this.testryService.ProductgetCompanyLGM(Company_ID,productId,year,month).subscribe(
      res => {
        let response = res;
        this.table7 = response;
        console.log(this.table7);

        var chart = new CanvasJS.Chart("chartContainer7", {
          theme: "dark2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text:  "Net profit loss per month - "+ monthNames[month-1]      
          },
          axisX: {
            interval: 1,
            intervalType: "Day",
            valueFormatString: ""
          },
          axisY:{
            title: "Price",
            valueFormatString: "₹#0"
          },
          data: [{        
            type: "line",
            markerSize: 12,
            xValueFormatString: "",
            yValueFormatString: "₹###.#",
            dataPoints:this.table7.data
          }]
        });
        console.log(chart);
        chart.render();


      },
      err => console.log(err),
      () => console.log("done!")
    );
  }
}
