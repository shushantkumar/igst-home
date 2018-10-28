import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import * as CanvasJS from "../../testry/canvasjs.min";
import { TestryService } from '../../testry/testry.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  productsdata;
  table2;
  table6;
  dat1;
  dat2;
  dat3;
  constructor(
    private cookieService: CookieService,
    private router:Router,
    private testryService: TestryService,
  ) { }



  ngOnInit() {
    this.getCompanyEmpLG();
    this.getCompanyEmpLGM();
    this.getDetailsEmp();
  }
  gotoPost()
  {
    this.router.navigate(['home/products']);

   
  }

  getDetailsEmp(){
    var empId=this.cookieService.get( 'EMPuserID' );
    // this.cookieService.get( 'EMPtoken' );
    var Company_ID=this.cookieService.get( 'EMPCOMPID' );
    this.testryService.getDetailsEmp(Company_ID,empId).subscribe(
      res => {
        console.log(res);
        // this.dat4 = res.countE;
        this.dat2 = res.countS;
        this.dat3 = res.countB;
        this.dat1 = res.TotalPL;

        // this.productsdata = response;
      },
      err => console.log(err),
      () => console.log("done!")
    );
  }
      
  getCompanyEmpLG() {
    console.log("Something is on!");
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var empId=this.cookieService.get( 'EMPuserID' );
    // this.cookieService.get( 'EMPtoken' );
    var Company_ID=this.cookieService.get( 'EMPCOMPID' );
    // let data = this.cookieService.get("EMPCOMPID");
    
    this.testryService.getCompanyEmpLG(Company_ID,empId,year).subscribe(
      res => {
        let response = res;
        this.table2 = response;
        console.log(this.table2);

        var chart = new CanvasJS.Chart("chartContainer2", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Net Profit/Loss per year -" + year   
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
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var empId=this.cookieService.get( 'EMPuserID' );
    // this.cookieService.get( 'EMPtoken' );
    var Company_ID=this.cookieService.get( 'EMPCOMPID' );
    var month = currentDate.getMonth() + 1;
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
    this.testryService.getCompanyEmpLGM(Company_ID,empId,year,month).subscribe(
      res => {
        let response = res;
        this.table6 = response;
        console.log(this.table6);

        var chart = new CanvasJS.Chart("chartContainer6", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          animationEnabled: true,
          title:{
            text: "Net Profit/Loss per month -" + monthNames[month-1]
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

  LogoutEvent(){
    this.cookieService.set('EMPuserID',"");
    this.cookieService.set('EMPCOMPID',"");
    this.cookieService.set('EMPCOMPName',"");
    this.cookieService.set('EMPtoken',"");
    this.router.navigate(['login']);
    
    }

}
