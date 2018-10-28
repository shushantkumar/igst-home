import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import * as CanvasJS from "../testry/canvasjs.min";
import { TestryService } from '../testry/testry.service';
import { CompanyallService } from './companyall.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  table1;
  table5;
  table9;
  dat1;
  dat2;
  dat3;
  dat4;
  
  constructor(
    private testryService: TestryService,
    private cookieService: CookieService,
    private router: Router,
    private companyser:CompanyallService
  ) { }

  ngOnInit() {
  if(this.cookieService.get('COMPuserID')=="" ){
        this.router.navigate(['login']);
  }
  this.getCompanyLG();
  this.getCompanyLGM();
  this.getCompanyLGT();
  this.getDetails();
}

LogoutEvent(){
  this.cookieService.set('COMPuserID',"")
  this.router.navigate(['login']);
  
  }

  getDetails(){
    let data = this.cookieService.get('COMPuserID');
    this.companyser.getDetails(data).subscribe(
      res => {
        console.log(res);
        this.dat1 = res.countE;
        this.dat2 = res.countS;
        this.dat3 = res.countB;
        this.dat4 = res.TotalPL;

        // this.productsdata = response;
      },
      err => console.log(err),
      () => console.log("done!")
    );
  }

  getCompanyLG() {
    console.log("Something is going on!");
    // let data = this.cookieService.get("EMPCOMPID");
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var Company_ID=this.cookieService.get('COMPuserID');
    this.testryService.getCompanyLG(Company_ID,year).subscribe(
      res => {
        let response = res;
        this.table1 = response;
        console.log(this.table1);

        var chart = new CanvasJS.Chart("chartContainer1", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Net Profit/Loss per year - " + year   
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
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth()+1;
    var Company_ID=this.cookieService.get('COMPuserID');
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
      ];
    // var Company_ID=10, year=2018, month=10;
    this.testryService.getCompanyLGM(Company_ID,year,month).subscribe(
      res => {
        let response = res;
        this.table5 = response;
        console.log(this.table5);

        var chart = new CanvasJS.Chart("chartContainer5", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text:"Net Profit/Loss per month - " + monthNames[month-1]
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
    var Company_ID=this.cookieService.get('COMPuserID');
    this.testryService.getCompanyLGT(Company_ID).subscribe(
      res => {
        let response = res;
        this.table9 = response;
        console.log(this.table9);

        var chart = new CanvasJS.Chart("chartContainer9", {
          theme: "dark1", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "All Export Transactions "   
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

}
