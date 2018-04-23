import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import {UIModule} from '../../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    UIModule
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
