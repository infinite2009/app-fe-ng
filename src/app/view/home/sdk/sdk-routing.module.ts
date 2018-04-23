import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SdkComponent} from './sdk.component';

const ROUTES: Routes = [
  {
    path: '',
    component: SdkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SdkRoutingModule {}
