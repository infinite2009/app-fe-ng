import {Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import {HostComponent} from '../host/host.component';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
    content: string;

    @Input() options: object;

    constructor() {
    }

    ngOnInit() {
    }

}
