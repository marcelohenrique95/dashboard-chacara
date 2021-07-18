import { SharedModule } from './../../../../theme/shared/shared.module';
import { ReservasRoutingModule } from './reservas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ReservasRoutingModule
  ]
})
export class ReservasModule { }
