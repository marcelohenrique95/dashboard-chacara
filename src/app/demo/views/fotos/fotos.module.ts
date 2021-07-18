import { FotosRoutingModule } from './fotos-routing.module';
import { SharedModule } from './../../../theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FotosRoutingModule
  ]
})
export class FotosModule { }
