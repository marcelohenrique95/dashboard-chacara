import { SocialRoutingModule } from './social-routing.module';
import { SharedModule } from './../../../../theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SocialRoutingModule,
    NgbCollapseModule,
    NgbAccordionModule
  ]
})
export class SocialModule { }
