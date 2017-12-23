import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
/*
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
*/
const routes: Routes = [
 /* {
    path:'',
    component:HomeComponent
  },*/
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
    //canActivate: [AuthGuard]
  },
  {
    path: 'stock',
    loadChildren: 'app/stock/stock.module#StockModule'
  },
  {
    path: 'stockin',
    loadChildren: 'app/stockin/stockin.module#StockinModule'
  },
  {
    path: 'stockout',
    loadChildren: 'app/stockout/stockout.module#StockoutModule'
  },
  {
    path: 'employee',
    loadChildren: 'app/employee/employee.module#EmployeeModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
