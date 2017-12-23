import { AlarmService } from './alarm/alarm.service';
import { CookieService } from './cookie/cookie.service';
import { AppConfigService } from './app-config.service';
import { HttpService } from './http/http.service';
import { ToolbarModule } from './toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { MatIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';

registerLocaleData(localeBR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    },
    HttpService,
    AppConfigService,
    CookieService,
    AlarmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
