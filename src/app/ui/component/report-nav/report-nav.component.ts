import { Component, Input, OnInit } from '@angular/core';
import { ModuleMenu } from '../../../interface/module-menu';
import {MODULE_MENUS} from '../../../data/const/module-links/module-menus';

@Component({
    selector: 'app-report-nav',
    templateUrl: './report-nav.component.html',
    styleUrls: ['./report-nav-report.component.scss']
})
export class ReportNavComponent implements OnInit {
    @Input() moduleMenus: ModuleMenu[] = MODULE_MENUS;
    @Input() activeModuleId: number;

    constructor() {
    }

    ngOnInit() {
    }

}
