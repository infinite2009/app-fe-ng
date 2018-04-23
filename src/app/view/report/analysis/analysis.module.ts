import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIModule} from '../../../ui/ui.module';

import {AnalysisRoutingModule} from './analysis-routing.module';
import {AnalysisComponent} from './analysis.component';

@NgModule({
    imports: [
        CommonModule,
        UIModule,
        AnalysisRoutingModule
    ],
    declarations: [AnalysisComponent]
})
export class AnalysisModule {
}
