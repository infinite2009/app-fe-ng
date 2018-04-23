import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {GlobalConfig} from '../interface/global.config';
import {DataService} from './data.service';

@Injectable()
export class GlobalConfigService {
    private configSubject: Subject<GlobalConfig> = new BehaviorSubject<GlobalConfig>(null);

    constructor(private dataService: DataService) {
        this.dataService.ajax(DataService.getRequestMethod('getGlobalConfig'), this.success, this.failed);
    }

    success(data): void {
        this.configSubject.next(data);
    }

    failed(msg): void {
        console.error(msg);
    }

    getConfig(): Observable<GlobalConfig> {
        return this.configSubject.asObservable();
    }
}
