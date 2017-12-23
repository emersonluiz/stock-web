import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const stockinRoutes: Routes = [
    { path:'', component: EmployeeComponent },
    { path:'add', component: EmployeeRegisterComponent },
    { path:':id', component: EmployeeRegisterComponent },
    { path:':id/detail', component: EmployeeDetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(stockinRoutes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
