import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from '../../../interface/aside-nav-item';

@Component({
    selector: 'app-side-nav',
    templateUrl: 'side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
    animations: [
        trigger('asideNavHeaderToggle', [
            state('collapsed', style({
                width: '70px'
            })),
            state('expanded', style({
                width: '206px'
            })),
            transition('collapsed => expanded', animate('300ms ease-in')),
            transition('expanded => collapsed', animate('300ms ease-out'))
        ]),
        trigger('asideNavBodyToggle', [
            state('collapsed', style({
                width: '70px'
            })),
            state('expanded', style({
                width: '*'
            })),
            transition('collapsed => expanded', animate('300ms ease-in')),
            transition('expanded => collapsed', animate('300ms ease-out'))
        ]),
    ]
})
export class SideNavComponent implements OnInit {
    @Input() menuItems: MenuItem[];
    @Input() activeMenuItem: MenuItem;
    collapsed = false;
    headerCollapse: string;
    bodyCollapse: string;

    onCollapseStateChange = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
        this.headerCollapse = 'expanded';
        this.bodyCollapse = 'expanded';
    }

    toggleCollapse(): void {
        this.collapsed = !this.collapsed;
        this.headerCollapse = this.collapsed ? 'collapsed' : 'expanded';
        this.bodyCollapse = this.collapsed ? 'collapsed' : 'expanded';
        this.onCollapseStateChange.emit(this.collapsed);
    }

    handleEnter(): void {
        if (this.collapsed) {
            this.bodyCollapse = 'expanded';
        }
    }

    handleLeave(): void {
        if (this.collapsed) {
            this.bodyCollapse = 'collapsed';
        }
    }

}
