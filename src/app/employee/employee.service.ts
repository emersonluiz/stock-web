import { Injectable } from '@angular/core';

import { HttpService } from './../http/http.service';
import { AppConfigService } from './../app-config.service';

@Injectable()
export class EmployeeService {

  private url: string;
  
  constructor(private httpService: HttpService, private appService: AppConfigService) {
    this.url = this.appService.baseUrl + this.appService.apiUrl
  }

  create(data: any) {
    return this.httpService.post(this.url + this.appService.employeeUrl, data)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  get(id: string) {
    return this.httpService.get(this.url + this.appService.employeeUrl + "/" + id)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  delete(id: string) {
    return this.httpService.delete(this.url + this.appService.employeeUrl + '/' + id)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  update(id: string, data: any) {
    return this.httpService.put(this.url + this.appService.employeeUrl + '/' + id, data)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  list(page: number) {
    let params: string = '?page=' + page + '&size=10';

    return this.httpService.get(this.url + this.appService.employeeUrl + params)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  listByCompanyId(companyId: string) {
    return this.httpService.get(this.url + this.appService.employeeUrl + "/company/" + companyId)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  listStockoutByEmployeeId(employeeId: string, productCategoryId: string) {
    let param: string = "";
    if(productCategoryId !== null) {
      param = "?productCategoryId=" + productCategoryId;
    }
    return this.httpService.get(this.url + this.appService.stockoutUrl + "/employee/" + employeeId + param)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

}
