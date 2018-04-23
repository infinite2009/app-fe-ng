import { Component, OnInit, Input } from '@angular/core';
import {TableField} from '../../../../interface/table-field';

@Component({
    selector: 'app-th-cell',
    templateUrl: 'th-cell.component.html',
    styleUrls: ['th-cell.component.scss']
})
export class ThCellComponent implements OnInit {
    @Input() field: TableField;

    constructor() {
    }

    ngOnInit() {
    }

}
