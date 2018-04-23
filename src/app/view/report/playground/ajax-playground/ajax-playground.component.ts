import {Component, OnInit} from '@angular/core';
import {AjaxMethods} from '../../../../interface/ajax-methods';
import {DataService} from '../../../../service/data.service';

@Component({
    selector: 'app-ajax-playground',
    templateUrl: './ajax-playground.component.html',
    styleUrls: ['./ajax-playground.component.scss']
})
export class AjaxPlaygroundComponent implements OnInit {
    tips = '';
    isShow = false;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
    }

    sendRequest() {
        this.dataService.ajax(
            DataService.getRequestMethod('getGlobalConfig'),
            this.ongetFooSuccess.bind(this), this.ongetFooFailed.bind(this));
    }

    ongetFooSuccess(data): void {
        this.isShow = true;
        this.tips = 'success';
    }

    ongetFooFailed(msg): void {
        this.isShow = true;
        this.tips = 'failed';
    }
}
