import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HelpComponent} from './help.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HelpRoutingModule {}
