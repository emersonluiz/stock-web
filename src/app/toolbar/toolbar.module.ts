import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';

import { PrincipalComponent } from './principal/principal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [
    PrincipalComponent,
    NavigationComponent,
    ActionComponent
  ],
  exports: [
    PrincipalComponent,
    NavigationComponent,
    ActionComponent
  ]
})
export class ToolbarModule { }
