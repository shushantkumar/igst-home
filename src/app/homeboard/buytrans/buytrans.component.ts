import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buytrans',
  templateUrl: './buytrans.component.html',
  styleUrls: ['./buytrans.component.scss']
})
export class BuytransComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = [];
  constructor() { }

  ngOnInit() {
  }

  addFieldValue(meta){
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

}
