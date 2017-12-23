import { ReasonService } from './../reason/reason.service';
import { FormsModule } from '@angular/forms';
import { DialogModule } from './../dialog/dialog.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatCardModule, MatTooltipModule,
  MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, DateAdapter, MatRadioModule
} from '@angular/material';

import { ToolbarModule } from './../toolbar/toolbar.module';
import { StockoutRoutingModule } from './stockout-routing.module';
import { StockoutComponent } from './stockout.component';
import { StockoutRegisterComponent } from './stockout-register/stockout-register.component';
import { SizeService } from './../size/size.service';
import { ProductService } from './../product/product.service';
import { EmployeeService } from './../employee/employee.service';
import { CompanyService } from './../company/company.service';
import { StockoutService } from './stockout.service';

@NgModule({
  imports: [
    CommonModule,
    StockoutRoutingModule,
    ToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatRadioModule
  ],
  declarations: [
    StockoutComponent,
    StockoutRegisterComponent
  ],
  providers: [
    StockoutService,
    EmployeeService,
    ProductService,
    SizeService,
    CompanyService,
    ReasonService
  ]
})
export class StockoutModule { }
