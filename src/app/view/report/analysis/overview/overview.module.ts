import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OverviewRoutingModule} from './overview-routing.module';
import {OverviewComponent} from './overview.component';
import {BasicModule} from '../../basic/basic.module';

@NgModule({
    imports: [
        CommonModule,
        BasicModule,
        OverviewRoutingModule
    ],
    declarations: [OverviewComponent]
})
export class OverviewModule {
}
