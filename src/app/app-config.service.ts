import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  constructor() { }

  private privateBaseUrl: string = 'http://localhost';
  private privateApiUrl: string = ':9091/stock/api';
  private privateProductUrl: string = '/products';
  private privateStateUrl: string = '/states';
  private privateSizeUrl: string = '/sizes';
  private privateReasonUrl: string = '/reasons';
  private privateEmployeeUrl: string = '/employees';
  private privateCompanyUrl: string = '/companies';
  private privateJobPositionUrl: string = '/jobPositions';
  private privateDocumentUrl: string = '/documents';
  private privateAlarmUrl: string = '/alarms';
  private privateStockUrl: string = '/stock';
  private privateStockinUrl: string = this.privateStockUrl + '/in';
  private privateStockoutUrl: string = this.privateStockUrl + '/out';

  public get baseUrl(): string {
    return this.privateBaseUrl
  }

  public get apiUrl(): string {
      return this.privateApiUrl
  }

  public get productUrl(): string {
    return this.privateProductUrl;
  }

  public get stateUrl(): string {
    return this.privateStateUrl;
  }

  public get sizeUrl(): string {
    return this.privateSizeUrl;
  }

  public get reasonUrl(): string {
    return this.privateReasonUrl;
  }

  public get employeeUrl(): string {
    return this.privateEmployeeUrl;
  }

  public get companyUrl(): string {
    return this.privateCompanyUrl;
  }

  public get jobPositionUrl(): string {
    return this.privateJobPositionUrl;
  }

  public get documentUrl(): string {
    return this.privateDocumentUrl;
  }

  public get alarmUrl(): string {
    return this.privateAlarmUrl;
  }

  public get stockUrl(): string {
    return this.privateStockUrl;
  }

  public get stockinUrl(): string {
    return this.privateStockinUrl;
  }

  public get stockoutUrl(): string {
    return this.privateStockoutUrl;
  }
}
