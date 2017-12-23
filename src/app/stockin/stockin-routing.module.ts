import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinComponent } from './stockin.component';
import { StockinRegisterComponent } from './stockin-register/stockin-register.component';

const stockinRoutes: Routes = [
    { path:'', component: StockinComponent },
    { path:'add', component: StockinRegisterComponent },
    { path:':id', component: StockinRegisterComponent }
]

@NgModule({
    imports: [RouterModule.forChild(stockinRoutes)],
    exports: [RouterModule]
})
export class StockinRoutingModule { }
