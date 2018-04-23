import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReportComponent} from './report.component';

const routes: Routes = [
    {
        path: '',
        component: ReportComponent,
        children: [
            {
                path: 'playground',
                loadChildren: './playground/playground.module#PlaygroundModule'
            },
            {
                path: 'analysis',
                loadChildren: './analysis/analysis.module#AnalysisModule'
            },
            {
                path: '',
                redirectTo: 'playground',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule {
}
