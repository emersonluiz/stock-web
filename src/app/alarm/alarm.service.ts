import { AppConfigService } from './../app-config.service';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AlarmService {

  private url: string;

  constructor(private httpService: HttpService, private appService: AppConfigService) {
    this.url = this.appService.baseUrl + this.appService.apiUrl
  }

  list(page: number) {
    let params: string = '?page=' + page + '&size=10';
  
    return this.httpService.get(this.url + this.appService.alarmUrl + params)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  getAlarmNotRead() {  
    return this.httpService.get(this.url + this.appService.alarmUrl + "/total")
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

}
