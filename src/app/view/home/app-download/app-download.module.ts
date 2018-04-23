import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDownloadComponent } from './app-download.component';
import {AppDownloadRoutingModule} from './app-download-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppDownloadRoutingModule
  ],
  declarations: [AppDownloadComponent]
})
export class AppDownloadModule { }
