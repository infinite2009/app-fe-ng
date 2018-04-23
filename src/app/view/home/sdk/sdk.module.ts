import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdkComponent } from './sdk.component';
import {SdkRoutingModule} from './sdk-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SdkRoutingModule
  ],
  declarations: [SdkComponent]
})
export class SdkModule { }
