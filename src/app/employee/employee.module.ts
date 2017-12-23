import { JobPositionService } from './../jobPosition/job-position.service';
import { CompanyService } from './../company/company.service';
import { DialogModule } from './../dialog/dialog.module';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule, MatCardModule, MatIconModule, 
         MatButtonModule, MatSelectModule, MatFormFieldModule, 
         MatInputModule, MatTabsModule, MatListModule, MatRadioModule,
         MatDatepickerModule, MatNativeDateModule, MatExpansionModule } from '@angular/material';
import { ToolbarModule } from './../toolbar/toolbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee.service';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { StateService } from './../state/state.service';
import { DocumentService } from './../document/document.service';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule,
    DialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeRegisterComponent,
    EmployeeDetailComponent
  ],
  providers: [
    EmployeeService,
    CompanyService,
    JobPositionService,
    StateService,
    DocumentService
  ]
})
export class EmployeeModule { }
