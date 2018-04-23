/**
 * @file
 * @author luodongyang(luodongyang@baidu.com)
 * @date 2017/9/9.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AjaxPlaygroundComponent} from './ajax-playground/ajax-playground.component';
import {CheckboxPlaygroundComponent} from './checkbox-playground/checkbox-playground.component';
import {NestedComponentComponent} from './nested-component/nested-component.component';
import {PlaygroundComponent} from './playground.component';
import {RadioButtonPlaygroundComponent} from './radio-button-playground/radio-button-playground.component';
import {TablePlaygroundComponent} from './table-playground/table-playground.component';

const routes: Routes = [
    {
        path: '',
        component: PlaygroundComponent,
        children: [
            {
                path: 'ajax',
                component: AjaxPlaygroundComponent
            },
            {
                path: 'checkbox',
                component: CheckboxPlaygroundComponent
            },
            {
                path: 'table',
                component: TablePlaygroundComponent
            },
            {
                path: 'radio-button',
                component: RadioButtonPlaygroundComponent
            },
            {
                path: 'nested-component',
                component: NestedComponentComponent,
            },
            {
                path: '',
                redirectTo: 'table',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlaygroundRoutingModule {
}
