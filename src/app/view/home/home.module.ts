import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {UIModule} from '../../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UIModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
