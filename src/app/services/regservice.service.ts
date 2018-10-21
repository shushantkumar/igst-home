import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegserviceService {
  private serverURL ='https://can-man-be-brave-when-afraid.herokuapp.com';

  constructor(private http:HttpClient) { }

  private extractData(res: Response) {
    return res;
  }
  private handleError (error: Response | any) {
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

  RegisterEmployeeEvent(data){
    let specificUrl = this.serverURL + '/employee/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }

  RegisterCompanyEvent(data){
    let specificUrl = this.serverURL + '/company/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }

  LoginCompanyEvent(data){
    let specificUrl = this.serverURL + '/company/login/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }

  LoginEmployeeEvent(data){
    let specificUrl = this.serverURL + '/employee/login/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }
}
