import {WelcomeComponent} from './welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
