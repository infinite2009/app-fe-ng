import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, state, animate} from '@angular/animations';
import {ModuleMenu} from '../../interface/module-menu';
import {MODULE_MENUS} from '../../data/const/module-links/module-menus';
import {NavigationEnd, Router} from '@angular/router';
import {UiService} from '../../service/ui.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
    animations: [
        trigger('selfAdaption', [
                state('stretch', style({
                    'left': '70px'
                })),
                state('shrink', style({
                    'left': '206px'
                })),
                transition('shrink => stretch', animate('300ms ease-in')),
                transition('stretch => shrink', animate('300ms ease-out'))
            ]
        )
    ]
})
export class ReportComponent implements OnInit {
    moduleMenus: Array<ModuleMenu> = MODULE_MENUS;
    selfAdaptionState: string;
    activeModuleId = 0;
    activeMenuItem = this.moduleMenus[0].menu[0];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.selfAdaptionState = 'shrink';
        let activeState = UiService.getActivatedModuleAndMenu(this.router.url, this.moduleMenus);
        if (activeState) {
            this.activeModuleId = activeState.activeModuleId;
        }
        this.router.events.subscribe(events => {
            if (events instanceof NavigationEnd) {
                activeState = UiService.getActivatedModuleAndMenu(this.router.url, this.moduleMenus);
                if (activeState) {
                    this.activeModuleId = activeState.activeModuleId;
                }
            }
        }, err => {
            console.error(err);
        });
    }


    onAsideNavCollapse(asideMenuCollapsed) {
        this.selfAdaptionState = asideMenuCollapsed ? 'stretch' : 'shrink';
    }
}
