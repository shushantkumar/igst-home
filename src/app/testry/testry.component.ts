import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {TestryService} from './testry.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import { CookieService } from 'ngx-cookie-service';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import * as CanvasJS from "./canvasjs.min";

@Component({
  selector: "app-testry",
  templateUrl: "./testry.component.html",
  styleUrls: ["./testry.component.scss"]
})
export class TestryComponent implements OnInit {
  table1;
  table2;
  table3;
  table4;
  table5;
  table6;
  table7;
  table8;
  table9;

  // selectedFile: File = null;
  constructor(
    private testryService: TestryService,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    // this.huh();
    this.getCompanyLG();
    this.getCompanyEmpLG();
    this.ProductgetCompanyLG();
    this.ProductgetCompanyEmpLG();
    this.getCompanyLGM();
    this.getCompanyEmpLGM();
    this.ProductgetCompanyLGM();
    this.ProductgetCompanyEmpLGM();
    this.getCompanyLGT();
    
  }

  getCompanyLG() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018;
    this.testryService.getCompanyLG(Company_ID,year).subscribe(
      res => {
        let response = res;
        this.table1 = response;
        console.log(this.table1);

        var chart = new CanvasJS.Chart("chartContainer1", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
              { x: new Date(this.table1.year, this.table1.data[0].x, 1), y: this.table1.data[0].y, indexLabel: this.table1.data[0].indexLabel, markerType: this.table1.data[0].markerType,  markerColor: this.table1.data[0].markerColor },
              { x: new Date(this.table1.year, this.table1.data[1].x, 1), y: this.table1.data[1].y, indexLabel: this.table1.data[1].indexLabel, markerType: this.table1.data[1].markerType,  markerColor:  this.table1.data[1].markerColor },
              { x: new Date(this.table1.year, this.table1.data[2].x, 1) , y: this.table1.data[2].y, indexLabel: this.table1.data[2].indexLabel, markerType: this.table1.data[2].markerType, markerColor:  this.table1.data[2].markerColor },
              { x: new Date(this.table1.year, this.table1.data[3].x, 1) , y: this.table1.data[3].y, indexLabel: this.table1.data[3].indexLabel, markerType: this.table1.data[3].markerType, markerColor:  this.table1.data[3].markerColor },
              { x: new Date(this.table1.year, this.table1.data[4].x, 1) , y: this.table1.data[4].y, indexLabel:this.table1.data[4].indexLabel, markerType: this.table1.data[4].markerType, markerColor:  this.table1.data[4].markerColor },
              { x: new Date(this.table1.year, this.table1.data[5].x, 1) , y: this.table1.data[5].y, indexLabel: this.table1.data[5].indexLabel, markerType: this.table1.data[5].markerType, markerColor:  this.table1.data[5].markerColor },
              { x: new Date(this.table1.year, this.table1.data[6].x, 1) , y: this.table1.data[6].y, indexLabel: this.table1.data[6].indexLabel, markerType: this.table1.data[6].markerType, markerColor:  this.table1.data[6].markerColor},
              { x: new Date(this.table1.year, this.table1.data[7].x, 1) , y: this.table1.data[7].y, indexLabel: this.table1.data[7].indexLabel, markerType: this.table1.data[7].markerType, markerColor:  this.table1.data[7].markerColor },
              { x: new Date(this.table1.year, this.table1.data[8].x, 1) , y: this.table1.data[8].y, indexLabel: this.table1.data[8].indexLabel, markerType: this.table1.data[8].markerType, markerColor:  this.table1.data[8].markerColor },
              { x: new Date(this.table1.year, this.table1.data[9].x, 1) , y: this.table1.data[9].y, indexLabel: this.table1.data[9].indexLabel, markerType: this.table1.data[9].markerType, markerColor:  this.table1.data[9].markerColor },
              { x: new Date(this.table1.year, this.table1.data[10].x, 1) , y: this.table1.data[10].y, indexLabel: this.table1.data[10].indexLabel, markerType: this.table1.data[10].markerType, markerColor: this.table1.data[10].markerColor },
              { x: new Date(this.table1.year, this.table1.data[11].x, 1) , y: this.table1.data[11].y, indexLabel: this.table1.data[11].indexLabel, markerType:this.table1.data[11].markerType, markerColor:  this.table1.data[11].markerColor }
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


  getCompanyLGM() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018, month=10;
    this.testryService.getCompanyLGM(Company_ID,year,month).subscribe(
      res => {
        let response = res;
        this.table5 = response;
        console.log(this.table5);

        var chart = new CanvasJS.Chart("chartContainer5", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
            dataPoints:this.table5.data
          }]
        });
        console.log(chart);
        chart.render();


      },
      err => console.log(err),
      () => console.log("done!")
    );
  }


getCompanyLGT() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10;
    this.testryService.getCompanyLGT(Company_ID).subscribe(
      res => {
        let response = res;
        this.table9 = response;
        console.log(this.table9);

        var chart = new CanvasJS.Chart("chartContainer9", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
            dataPoints:this.table9.data
          }]
        });
        console.log(chart);
        chart.render();


      },
      err => console.log(err),
      () => console.log("done!")
    );
  }



  getCompanyEmpLG() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018,empId=8;
    this.testryService.getCompanyEmpLG(Company_ID,empId,year).subscribe(
      res => {
        let response = res;
        this.table2 = response;
        console.log(this.table2);

        var chart = new CanvasJS.Chart("chartContainer2", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
              { x: new Date(this.table2.year, this.table2.data[0].x, 1), y: this.table2.data[0].y, indexLabel: this.table2.data[0].indexLabel, markerType: this.table2.data[0].markerType,  markerColor: this.table2.data[0].markerColor },
              { x: new Date(this.table2.year, this.table2.data[1].x, 1), y: this.table2.data[1].y, indexLabel: this.table2.data[1].indexLabel, markerType: this.table2.data[1].markerType,  markerColor:  this.table2.data[1].markerColor },
              { x: new Date(this.table2.year, this.table2.data[2].x, 1) , y: this.table2.data[2].y, indexLabel: this.table2.data[2].indexLabel, markerType: this.table2.data[2].markerType, markerColor:  this.table2.data[2].markerColor },
              { x: new Date(this.table2.year, this.table2.data[3].x, 1) , y: this.table2.data[3].y, indexLabel: this.table2.data[3].indexLabel, markerType: this.table2.data[3].markerType, markerColor:  this.table2.data[3].markerColor },
              { x: new Date(this.table2.year, this.table2.data[4].x, 1) , y: this.table2.data[4].y, indexLabel:this.table2.data[4].indexLabel, markerType: this.table2.data[4].markerType, markerColor:  this.table2.data[4].markerColor },
              { x: new Date(this.table2.year, this.table2.data[5].x, 1) , y: this.table2.data[5].y, indexLabel: this.table2.data[5].indexLabel, markerType: this.table2.data[5].markerType, markerColor:  this.table2.data[5].markerColor },
              { x: new Date(this.table2.year, this.table2.data[6].x, 1) , y: this.table2.data[6].y, indexLabel: this.table2.data[6].indexLabel, markerType: this.table2.data[6].markerType, markerColor:  this.table2.data[6].markerColor},
              { x: new Date(this.table2.year, this.table2.data[7].x, 1) , y: this.table2.data[7].y, indexLabel: this.table2.data[7].indexLabel, markerType: this.table2.data[7].markerType, markerColor:  this.table2.data[7].markerColor },
              { x: new Date(this.table2.year, this.table2.data[8].x, 1) , y: this.table2.data[8].y, indexLabel: this.table2.data[8].indexLabel, markerType: this.table2.data[8].markerType, markerColor:  this.table2.data[8].markerColor },
              { x: new Date(this.table2.year, this.table2.data[9].x, 1) , y: this.table2.data[9].y, indexLabel: this.table2.data[9].indexLabel, markerType: this.table2.data[9].markerType, markerColor:  this.table2.data[9].markerColor },
              { x: new Date(this.table2.year, this.table2.data[10].x, 1) , y: this.table2.data[10].y, indexLabel: this.table2.data[10].indexLabel, markerType: this.table2.data[10].markerType, markerColor: this.table2.data[10].markerColor },
              { x: new Date(this.table2.year, this.table2.data[11].x, 1) , y: this.table2.data[11].y, indexLabel: this.table2.data[11].indexLabel, markerType:this.table2.data[11].markerType, markerColor:  this.table2.data[11].markerColor }
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


  getCompanyEmpLGM() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018, month=10,empId=8;
    this.testryService.getCompanyEmpLGM(Company_ID,empId,year,month).subscribe(
      res => {
        let response = res;
        this.table6 = response;
        console.log(this.table6);

        var chart = new CanvasJS.Chart("chartContainer6", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
            dataPoints:this.table6.data
          }]
        });
        console.log(chart);
        chart.render();


      },
      err => console.log(err),
      () => console.log("done!")
    );
  }

  ProductgetCompanyLG() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018,productId=9855;
    this.testryService.ProductgetCompanyLG(Company_ID,productId,year).subscribe(
      res => {
        let response = res;
        this.table3 = response;
        console.log(this.table3);

        var chart = new CanvasJS.Chart("chartContainer3", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
  
  ProductgetCompanyLGM() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018, month=10,productId=9855 ;
    this.testryService.ProductgetCompanyLGM(Company_ID,productId,year,month).subscribe(
      res => {
        let response = res;
        this.table7 = response;
        console.log(this.table7);

        var chart = new CanvasJS.Chart("chartContainer7", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
  

  ProductgetCompanyEmpLG() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018,productId=9855 , EmpId=8;
    this.testryService.ProductgetCompanyEmpLG(Company_ID,EmpId,productId,year).subscribe(
      res => {
        let response = res;
        this.table4 = response;
        console.log(this.table4);

        var chart = new CanvasJS.Chart("chartContainer4", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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


  ProductgetCompanyEmpLGM() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var Company_ID=10, year=2018, month=10,productId=9855 ,empId=8;
    this.testryService.ProductgetCompanyEmpLGM(Company_ID,empId,productId,year,month).subscribe(
      res => {
        let response = res;
        this.table8 = response;
        console.log(this.table8);

        var chart = new CanvasJS.Chart("chartContainer8", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Share Value - 2016"   
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
  // onFileSelected(event){
  //   console.log(event);
  //   this.selectedFile=<File>event.target.files[0];

  // }
  // onUpload(){
  //   let name = "teu";
  //   let price = "1234";
  //   let description = "mast";
  //   let userID = this.cookieService.get('ENVuserID');
  //   const fd = new FormData();
  //   fd.append('productImage',this.selectedFile);
  //   fd.append('name', name);
  //   fd.append('price', price);
  //   fd.append('description', description);
  //   // fd.append('productImage', productImage);
  //   fd.append('userID', userID);
  //   let headers =  {headers: new  HttpHeaders({'authorization':'Bearer '+this.cookieService.get('ENVtoken')})};

  //   this.http.post('https://agile-dawn-35104.herokuapp.com/products/',fd,headers)
  //   .subscribe(res=>{
  //     console.log(res);
  //   })
  // }
}
