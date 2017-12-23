import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockoutComponent } from './stockout.component';
import { StockoutRegisterComponent } from './stockout-register/stockout-register.component';

const stockoutRoutes: Routes = [
    { path:'', component: StockoutComponent },
    { path:'add', component: StockoutRegisterComponent },
    { path:':id', component: StockoutRegisterComponent }
]

@NgModule({
    imports: [RouterModule.forChild(stockoutRoutes)],
    exports: [RouterModule]
})
export class StockoutRoutingModule { }
