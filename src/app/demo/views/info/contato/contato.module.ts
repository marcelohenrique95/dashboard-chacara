import { ContatoRoutingModule } from './contato-routing.module';
import { SharedModule } from './../../../../theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
