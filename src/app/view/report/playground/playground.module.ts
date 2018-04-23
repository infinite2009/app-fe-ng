import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIModule} from '../../../ui/ui.module';
import {NestedComponentComponent} from './nested-component/nested-component.component';
import {PlaygroundComponent} from './playground.component';
import {PlaygroundRoutingModule} from './playground-routing.module';
import {DataService} from '../../../service/data.service';
import {TablePlaygroundComponent} from './table-playground/table-playground.component';
import {AjaxPlaygroundComponent} from './ajax-playground/ajax-playground.component';
import {CheckboxPlaygroundComponent} from './checkbox-playground/checkbox-playground.component';
import {RadioButtonPlaygroundComponent} from './radio-button-playground/radio-button-playground.component';

@NgModule({
    imports: [
        CommonModule,
        UIModule,
        PlaygroundRoutingModule
    ],
    declarations: [
        PlaygroundComponent,
        TablePlaygroundComponent,
        AjaxPlaygroundComponent,
        CheckboxPlaygroundComponent,
        RadioButtonPlaygroundComponent,
        NestedComponentComponent
    ],
    providers: [DataService]
})
export class PlaygroundModule {
}
