import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import {PagingChanges} from '../../../../interface/paging-changes';
import {PagingOptions} from '../../../../interface/paging-options';
import {Util} from '../../../../util/util';

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, OnChanges {
    currentPage = 0;
    expanded = false;
    size: number;
    pageInput = 0;
    pageFlippingBtns: Array<number> = [];
    window: Window = window;

    options: PagingOptions = {
        offset: 0,
        pageSize: 20,
        pageSizes: [20, 50, 100],
        show: true
    };

    @Input() total: number;
    @Input() customOptions: PagingOptions;

    @Output() pagingChange = new EventEmitter<PagingChanges>();

    constructor() {
    }

    ngOnInit() {
        Util.extend(this.options, this.customOptions);
        this.size = this.options.pageSize;
    }

    ngOnChanges() {
        this.initPageFlippingBtns();
    }

    toggleCollapse(size: number) {
        this.expanded = !this.expanded;
        if (size) {
            this.size = size;
            this.initPageFlippingBtns();
            if (this.pageInput) {
                this.pageInput = 0;
            }
        }
    }

    initPageFlippingBtns() {
        const number = Math.ceil(this.total / this.size);
        if (this.pageFlippingBtns.length > 0) {
            this.currentPage = this.currentPage > number - 1
                ? number - 1 : this.currentPage;
            this.pageFlippingBtns = [];
        }

        for (let i = 0; i < number; i++) {
            this.pageFlippingBtns.push(i + 1);
        }
    }

    onChangePage(page: number) {
        if (this.currentPage !== page) {
            this.currentPage = page;
            this.pagingChange.emit({
                    pageSize: this.size,
                    offset: this.currentPage * this.size
                }
            );
        }
    }

    goNextPage() {
        this.currentPage++;
        this.pagingChange.emit({
            pageSize: this.size,
            offset: this.currentPage * this.size
        });
    }

    goPreviousPage() {
        this.currentPage--;
        this.pagingChange.emit({
            pageSize: this.size,
            offset: this.currentPage * this.size
        });
    }

    trackByBtn(index: number, btn: number) {
        return btn;
    }

    handlePageInput(e) {
        const value = e.target.value;
        if (+value > 0 && +value <= this.pageFlippingBtns.length) {
            this.pageInput = +value;
        }
        else if (+value > 0 && +value > this.pageFlippingBtns.length) {
            this.pageInput = this.pageFlippingBtns.length;
            e.target.value = this.pageInput;
        }
        else {
            this.pageInput = 0;
            e.target.value = '';
        }
    }

    handleInputConfirm() {
        if (this.pageInput > 0 && (this.pageInput - 1) !== this.currentPage) {
            this.currentPage = this.pageInput - 1;
            this.pagingChange.emit({
                pageSize: this.size,
                offset: this.currentPage * this.size
            });
        }
    }
}
