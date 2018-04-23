import {
    Component, OnInit, Input, Output, EventEmitter, OnChanges,
    SimpleChanges
} from '@angular/core';
import {PagingChanges} from '../../../interface/paging-changes';
import {TableData} from '../../../interface/table-data';
import {TableOptions} from '../../../interface/table-options';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() data: TableData;
    @Input() customOptions: TableOptions;
    @Input() total: number;
    @Input() loading: boolean;
    @Output() pagingChange = new EventEmitter<PagingChanges>();

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    handlePagingChange(changes: PagingChanges) {
        this.pagingChange.emit(changes);
    }
}
