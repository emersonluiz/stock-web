import { Injectable } from '@angular/core';

import { HttpService } from './../http/http.service';
import { AppConfigService } from './../app-config.service';

@Injectable()
export class ProductService {

  private url: string;
  
  constructor(private httpService: HttpService, private appService: AppConfigService) {
    this.url = this.appService.baseUrl + this.appService.apiUrl
  }

  list(productCategoryId: string) {
    let param: string = "";
    if(productCategoryId !== null) {
      param = "?productCategoryId=" + productCategoryId;
    }
    return this.httpService.get(this.url + this.appService.productUrl + param)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

}
