import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppDownloadComponent} from './app-download.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AppDownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AppDownloadRoutingModule {}
