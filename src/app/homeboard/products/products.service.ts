import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductsService {
  private serverURL ='https://can-man-be-brave-when-afraid.herokuapp.com';
  constructor(private http:HttpClient) { }
  
  private extractData(res: Response) {
    return res;
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  
  getAllProducts(data){
    let specificUrl = this.serverURL + '/products/' + data + '/';
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getnextBuyTran(){
    let specificUrl = this.serverURL + '/btransact/tmax';
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getnextSellTran(){
    let specificUrl = this.serverURL + '/stransact/tmax';
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getEmpDetails(data){
    let specificUrl = this.serverURL + '/employee/' +data;
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  UpdateEmployee(data,path){
    let specificUrl = this.serverURL + '/employee/' +path;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    console.log(specificUrl);
    return this.http.patch(specificUrl,data,headers)
    .map(this.extractData)
    .catch(this.handleError);
  }
}
