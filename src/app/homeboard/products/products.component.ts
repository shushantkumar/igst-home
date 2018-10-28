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
import { TestryService } from '../../testry/testry.service';
import * as CanvasJS from "../../testry/canvasjs.min";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  productsdata;
  table4;
  table8;
  


  constructor(
    private productsService: ProductsService,
    private cookieService: CookieService,
    private router:Router,
    private testryService: TestryService,
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

    ProductgetCompanyEmpLG(meta) {
      console.log("Something is going on!");
      var productId = meta.Product_ID;
      console.log(productId);
      // let data = this.cookieService.get("EMPCOMPID");
      var currentDate = new Date();
      var year = currentDate.getFullYear();
      var EmpId=this.cookieService.get( 'EMPuserID' );
      // this.cookieService.get( 'EMPtoken' );
      var Company_ID=this.cookieService.get( 'EMPCOMPID' );
      // var Company_ID=10, year=2018,productId=9855 , EmpId=8;
      this.testryService.ProductgetCompanyEmpLG(Company_ID,EmpId,productId,year).subscribe(
        res => {
          let response = res;
          this.table4 = response;
          console.log(this.table4);
  
          var chart = new CanvasJS.Chart("chartContainer4", {
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
                { x: new Date(this.table4.year, this.table4.data[0].x, 1), y: this.table4.data[0].y, indexLabel: this.table4.data[0].indexLabel, markerType: this.table4.data[0].markerType,  markerColor: this.table4.data[0].markerColor },
                { x: new Date(this.table4.year, this.table4.data[1].x, 1), y: this.table4.data[1].y, indexLabel: this.table4.data[1].indexLabel, markerType: this.table4.data[1].markerType,  markerColor:  this.table4.data[1].markerColor },
                { x: new Date(this.table4.year, this.table4.data[2].x, 1) , y: this.table4.data[2].y, indexLabel: this.table4.data[2].indexLabel, markerType: this.table4.data[2].markerType, markerColor:  this.table4.data[2].markerColor },
                { x: new Date(this.table4.year, this.table4.data[3].x, 1) , y: this.table4.data[3].y, indexLabel: this.table4.data[3].indexLabel, markerType: this.table4.data[3].markerType, markerColor:  this.table4.data[3].markerColor },
                { x: new Date(this.table4.year, this.table4.data[4].x, 1) , y: this.table4.data[4].y, indexLabel:this.table4.data[4].indexLabel, markerType: this.table4.data[4].markerType, markerColor:  this.table4.data[4].markerColor },
                { x: new Date(this.table4.year, this.table4.data[5].x, 1) , y: this.table4.data[5].y, indexLabel: this.table4.data[5].indexLabel, markerType: this.table4.data[5].markerType, markerColor:  this.table4.data[5].markerColor },
                { x: new Date(this.table4.year, this.table4.data[6].x, 1) , y: this.table4.data[6].y, indexLabel: this.table4.data[6].indexLabel, markerType: this.table4.data[6].markerType, markerColor:  this.table4.data[6].markerColor},
                { x: new Date(this.table4.year, this.table4.data[7].x, 1) , y: this.table4.data[7].y, indexLabel: this.table4.data[7].indexLabel, markerType: this.table4.data[7].markerType, markerColor:  this.table4.data[7].markerColor },
                { x: new Date(this.table4.year, this.table4.data[8].x, 1) , y: this.table4.data[8].y, indexLabel: this.table4.data[8].indexLabel, markerType: this.table4.data[8].markerType, markerColor:  this.table4.data[8].markerColor },
                { x: new Date(this.table4.year, this.table4.data[9].x, 1) , y: this.table4.data[9].y, indexLabel: this.table4.data[9].indexLabel, markerType: this.table4.data[9].markerType, markerColor:  this.table4.data[9].markerColor },
                { x: new Date(this.table4.year, this.table4.data[10].x, 1) , y: this.table4.data[10].y, indexLabel: this.table4.data[10].indexLabel, markerType: this.table4.data[10].markerType, markerColor: this.table4.data[10].markerColor },
                { x: new Date(this.table4.year, this.table4.data[11].x, 1) , y: this.table4.data[11].y, indexLabel: this.table4.data[11].indexLabel, markerType:this.table4.data[11].markerType, markerColor:  this.table4.data[11].markerColor }
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

    
  ProductgetCompanyEmpLGM(meta) {
    console.log("Something is going on!");
    var productId = meta.Product_ID;
    console.log(productId);
    // let data = this.cookieService.get("EMPCOMPID");
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth()+1;
    var empId=this.cookieService.get( 'EMPuserID' );
    // this.cookieService.get( 'EMPtoken' );
    var Company_ID=this.cookieService.get( 'EMPCOMPID' );
    // let data = this.cookieService.get("EMPCOMPID");
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
    // var Company_ID=10, year=2018, month=10,productId=9855 ,empId=8;
    this.testryService.ProductgetCompanyEmpLGM(Company_ID,empId,productId,year,month).subscribe(
      res => {
        let response = res;
        this.table8 = response;
        console.log(this.table8);

        var chart = new CanvasJS.Chart("chartContainer8", {
          theme: "dark2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Net profit loss per month - "+ monthNames[month-1]   
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
            dataPoints:this.table8.data
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
