import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
          MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatCardModule, MatTooltipModule,
          MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, DateAdapter, MatListModule
        } from '@angular/material';

import { StockinService } from './stockin.service';
import { ToolbarModule } from './../toolbar/toolbar.module';
import { StockinComponent } from './stockin.component';
import { StockinRoutingModule } from './stockin-routing.module';
import { StockinRegisterComponent } from './stockin-register/stockin-register.component';
import { SizeService } from './../size/size.service';
import { ProductService } from './../product/product.service';
import { DialogModule } from './../dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    StockinRoutingModule,
    ToolbarModule,
    DialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: [
    StockinComponent,
    StockinRegisterComponent
  ],
  providers: [
    StockinService,
    ProductService,
    SizeService
  ]
})
export class StockinModule { 

  /*constructor(private dateAdapter:DateAdapter<Date>) {
    dateAdapter.setLocale('pt-BR');
  }*/
}
