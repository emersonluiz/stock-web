import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { AppConfigService } from '../app-config.service';
//import { AuthService } from './../auth/auth.service';

@Injectable()
export class HttpService {

  /*constructor(private http: Http, private authService: AuthService, private appConfig:AppConfigService) { }

   createAuthorizationHeader(headers:Headers) {
      headers.append('Authorization', 'Bearer ' + this.authService.getToken());
  }*/

  constructor(private http: Http, private appConfig:AppConfigService) { }


  get(url:string) {
    let headers = new Headers();
    //this.createAuthorizationHeader(headers)
    return this.http.get(url, { headers: headers });
  }

  getReport(url:string) {
    let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.get(url, { headers: headers, responseType: ResponseContentType.ArrayBuffer });
  }

  post(url:string, data:any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //this.createAuthorizationHeader(headers);
    return this.http.post(url, data, { headers: headers });
  }

  put(url:string, data:any) {
    let headers = new Headers();
   // headers.append('Content-Type', 'application/json');
    //this.createAuthorizationHeader(headers);
    return this.http.put(url, data, { headers: headers });
  }

  delete(url:string) {
    let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.delete(url, { headers: headers });
  }

  extractData(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        console.log(res.status)
        throw new Error('Bad response status: ' + res.status)
      }
      if(res.text().length === 0) {
          return { }
      }
      let body = res.json()
      return body || { }
  }

  handleError (error: any) {
    let errMsg = error.message || 'Server error'
    console.error(errMsg)
    return Observable.throw(errMsg)
  }

}
