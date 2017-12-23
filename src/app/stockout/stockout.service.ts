import { AppConfigService } from './../app-config.service';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StockoutService {

  private url: string
  
  constructor(private httpService: HttpService, private appService: AppConfigService) {
    this.url = this.appService.baseUrl + this.appService.apiUrl
  }

  create(data: any) {
    return this.httpService.post(this.url + this.appService.stockoutUrl, data)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  list(page: number) {
    let params: string = '?page=' + page + '&size=10';

    return this.httpService.get(this.url + this.appService.stockoutUrl + params)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  get(id: string) {
    return this.httpService.get(this.url + this.appService.stockoutUrl + "/" + id)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  delete(id: string) {
    return this.httpService.delete(this.url + this.appService.stockoutUrl + '/' + id)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  update(id: string, data: any) {
    return this.httpService.put(this.url + this.appService.stockoutUrl + '/' + id, data)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }
}
