import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './view/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './view/home/home.module#HomeModule'
    },
    {
        path: 'report',
        loadChildren: './view/report/report.module#ReportModule'
    },
    {
        path: 'dashboard',
        loadChildren: './view/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'playground',
        loadChildren: './view/report/playground/playground.module#PlaygroundModule'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
