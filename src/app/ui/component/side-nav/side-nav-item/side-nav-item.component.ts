import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MenuItem} from '../../../../interface/aside-nav-item';

@Component({
    selector: 'app-side-nav-item',
    templateUrl: 'side-nav-item.component.html',
    styleUrls: ['side-nav-item.component.scss'],
    animations: [
        trigger('asideNavChildToggle', [
            state('collapsed', style({
                height: 0
            })),
            state('expanded', style({
                height: '*'
            })),
            transition('collapsed => expanded', animate('300ms ease-in')),
            transition('expanded => collapsed', animate('300ms ease-out'))
        ]),
        trigger('asideNavItemToggle', [
            state('collapsed', style({
                opacity: 0
            })),
            state('expanded', style({
                opacity: 1
            })),
            transition('collapsed => expanded', animate('300ms ease-in')),
            transition('expanded => collapsed', animate('300ms ease-out'))
        ])
    ]
})
export class SideNavItemComponent implements OnInit, OnChanges {
    @Input() asideNavItem: MenuItem;
    @Input() activeSibling: MenuItem;
    @Input() collapseState: string;
    collapsed: boolean;

    // 二级导航列表收起状态
    childCollapseState: string;

    constructor() {
    }

    ngOnInit() {
        this.collapsed = !(this.asideNavItem === this.activeSibling);
        this.childCollapseState = this.collapsed ? 'collapsed' : 'expanded';
    }

    ngOnChanges() {
        // 一级导航收起时，联动二级导航收起
        if (this.collapseState === 'collapsed') {
            this.childCollapseState = this.collapseState;
        } else {
            // 一级导航展开时，还原二级导航原先的状态
            if (this.collapsed) {
                this.childCollapseState = 'collapsed';
            }
            else {
                this.childCollapseState = 'expanded';
            }
        }
    }

    toggleActive() {
        if (this.asideNavItem === this.activeSibling) {
            this.activeSibling = null;
            this.childCollapseState = 'collapsed';
            this.collapsed = true;
        } else {
            this.activeSibling = this.asideNavItem;
            this.childCollapseState = 'expanded';
            this.collapsed = false;
        }
    }
}
