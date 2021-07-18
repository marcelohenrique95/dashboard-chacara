import { SocialRoutingModule } from './social-routing.module';
import { SharedModule } from './../../../../theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SocialRoutingModule
  ]
})
export class SocialModule { }
