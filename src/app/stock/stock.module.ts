import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule, MatCardModule } from '@angular/material';

import { ToolbarModule } from './../toolbar/toolbar.module';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { StockService } from './stock.service';

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule,
    ToolbarModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: [
    StockComponent
  ],
  providers: [
    StockService
  ]
})
export class StockModule { }
