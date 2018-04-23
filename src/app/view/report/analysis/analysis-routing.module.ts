import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnalysisComponent} from './analysis.component';

const routes: Routes = [
    {
        path: '',
        component: AnalysisComponent,
        children: [
            {
                path: 'overview',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 200}
            },
            {
                path: 'new-user',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 300}
            },
            {
                path: 'activity-degree',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 300}
            },
            {
                path: 'retained-user',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 300}
            },
            {
                path: 'region',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 400}
            },
            {
                path: 'terminal',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 400}
            },
            {
                path: 'visit-attribute',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 400}
            },
            {
                path: 'visit-page',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 500}
            },
            {
                path: 'visit-path',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 500}
            },
            {
                path: 'channel',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 500}
            },
            {
                path: 'version',
                loadChildren: './overview/overview.module#OverviewModule',
                data: {moduleId: 0, menuItemId: 500}
            },
            {
                path: '',
                data: {a: 1},
                redirectTo: 'overview',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
