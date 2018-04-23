import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: './welcome/welcome.module#WelcomeModule'
      },
      {
        path: 'game',
        loadChildren: './game/game.module#GameModule'
      },
      {
        path: 'sdk',
        loadChildren: './sdk/sdk.module#SdkModule'
      },
      {
        path: 'app-download',
        loadChildren: './app-download/app-download.module#AppDownloadModule'
      },
      {
        path: 'help',
        loadChildren: './help/help.module#HelpModule'
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/page-not-found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
