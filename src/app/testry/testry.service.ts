import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TestryService {
  private serverURL ='https://can-man-be-brave-when-afraid.herokuapp.com';
  constructor(private http:HttpClient,private cookieService: CookieService) { }

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

  getDetailsEmp(data1,data2){
    let specificUrl = this.serverURL + '/employee/head/' + data1 + '/'+data2+ '/';
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }
//   upload(files){
//     // let headers = new Headers();
//     let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/form-data','authorization':'Bearer '+this.cookieService.get('ENVtoken')})};
//     // let options = new RequestOptions({ headers: headers });
//     // options.params = parameters;
//     return  this.http.post(this._baseURL + '/products/', files, headers)
//              .map(this.extractData)
//              .catch(this.handleError);

// }
getCompanyLG(companyId,year){
  let specificUrl = this.serverURL + '/stransact/g/' + companyId + '/'+year+ '/';
  console.log(specificUrl);
  return this.http.get(specificUrl)
  .map(this.extractData)
  .catch(this.handleError);
  }

getCompanyLGT(companyId){
  let specificUrl = this.serverURL + '/stransact/gt/' + companyId + '/';
  console.log(specificUrl);
  return this.http.get(specificUrl)
  .map(this.extractData)
  .catch(this.handleError);
  }

  
getCompanyEMPLGT(companyId,empID){
  let specificUrl = this.serverURL + '/stransact/gt/' + companyId + '/' + empID + '/';
  console.log(specificUrl);
  return this.http.get(specificUrl)
  .map(this.extractData)
  .catch(this.handleError);
  }
  getCompanyLGM(companyId,year,month){
    let specificUrl = this.serverURL + '/stransact/gm/' + companyId + '/'+year+'/'+ month +'/';
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
    }

  getCompanyEmpLG(companyId,empId,year){
    let specificUrl = this.serverURL + '/stransact/g/' + companyId + '/'+ empId+'/'+year+ '/';
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
    }

  getCompanyEmpLGM(companyId,empId,year,month){
    let specificUrl = this.serverURL + '/stransact/gm/' + companyId + '/'+ empId+'/'+year+ '/'+ month+ '/';
    console.log(specificUrl);
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
    }  
  
    ProductgetCompanyLG(companyId,productId,year){
      let specificUrl = this.serverURL + '/stransact/g/p/' + companyId + '/'+ productId+'/'+year+ '/';
      console.log(specificUrl);
      return this.http.get(specificUrl)
      .map(this.extractData)
      .catch(this.handleError);
      }

  ProductgetCompanyLGM(companyId,productId,year,month){
      let specificUrl = this.serverURL + '/stransact/gm/p/' + companyId + '/'+ productId+'/'+year+ '/'+ month + '/';
      console.log(specificUrl);
      return this.http.get(specificUrl)
      .map(this.extractData)
      .catch(this.handleError);
      }


      ProductgetCompanyEmpLG(companyId,EmpId,productId,year){
        let specificUrl = this.serverURL + '/stransact/g/p/' + companyId + '/'+ EmpId + '/'+ productId+'/'+year+ '/';
        console.log(specificUrl);
        return this.http.get(specificUrl)
        .map(this.extractData)
        .catch(this.handleError);
        }

      ProductgetCompanyEmpLGM(companyId,EmpId,productId,year,month){
        let specificUrl = this.serverURL + '/stransact/gm/p/' + companyId + '/'+ EmpId + '/'+ productId+'/'+year+ '/'+month+ '/';
        console.log(specificUrl);
        return this.http.get(specificUrl)
        .map(this.extractData)
        .catch(this.handleError);
        }
      
}
