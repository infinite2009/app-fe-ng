import {RouterModule, Routes} from '@angular/router';
import {BasicComponent} from './basic.component';
import {NgModule} from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: BasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class BasicRoutingModule {}
