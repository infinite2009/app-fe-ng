import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GlobalConfigService} from './service/global-config.service';
import {UiService} from './service/ui.service';
import {PageNotFoundModule} from './view/page-not-found/page-not-found.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from './service/data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        PageNotFoundModule
    ],

    providers: [
        DataService,
        UiService,
        GlobalConfigService
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
