import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './component/develop/child/child.component';
import {HomeNavComponent} from './component/home-nav/home-nav.component';
import {RouterModule} from '@angular/router';
import {ReportNavComponent} from './component/report-nav/report-nav.component';
import {SideNavComponent} from './component/side-nav/side-nav.component';
import {SideNavItemComponent} from './component/side-nav/side-nav-item/side-nav-item.component';
import {TableComponent} from './component/table/table.component';
import {TableModule} from './component/table/table.module';
import {TruncatePipe} from './pipe/truncate.pipe';
import {SafeHtmlPipe} from './pipe/safe-html.pipe';
import { HostComponent } from './component/develop/host/host.component';
import { AddHostDirective } from './component/develop/add-host.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TableModule.withEntryComponents([ChildComponent])
    ],
    declarations: [
        HomeNavComponent,
        ReportNavComponent,
        SideNavComponent,
        SideNavItemComponent,
        SafeHtmlPipe,
        TruncatePipe,
        HostComponent,
        ChildComponent,
        AddHostDirective
    ],
    exports: [
        HomeNavComponent,
        ReportNavComponent,
        SideNavComponent,
        SideNavItemComponent,
        SafeHtmlPipe,
        HostComponent,
        ChildComponent,
        AddHostDirective,
        TruncatePipe,
        TableModule // 这里只需要导出模块本身的组件就ok，entry components 本来就是从外部传入的
    ],
    entryComponents: [
        ChildComponent
    ]
})
export class UIModule {
}
