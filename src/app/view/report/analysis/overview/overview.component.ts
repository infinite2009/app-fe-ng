import {Component, OnInit} from '@angular/core';
import {BasicComponent} from '../../basic/basic.component';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends BasicComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
