import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponent} from './basic.component';
import {BasicRoutingModule} from './basic-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BasicRoutingModule
    ],
    declarations: [BasicComponent],
    exports: [BasicComponent]
})
export class BasicModule {
}
