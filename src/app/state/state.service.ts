import { Injectable } from '@angular/core';

import { AppConfigService } from './../app-config.service';
import { HttpService } from './../http/http.service';

@Injectable()
export class StateService {

  private url: string;
  
  constructor(private httpService: HttpService, private appService: AppConfigService) {
    this.url = this.appService.baseUrl + this.appService.apiUrl
  }

  list() {
    return this.httpService.get(this.url + this.appService.stateUrl)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

}
