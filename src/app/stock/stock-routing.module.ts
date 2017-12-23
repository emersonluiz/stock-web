import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockComponent } from './stock.component';

const stockRoutes: Routes = [
    { path:'', component: StockComponent }
]

@NgModule({
    imports: [RouterModule.forChild(stockRoutes)],
    exports: [RouterModule]
})
export class StockRoutingModule { }
