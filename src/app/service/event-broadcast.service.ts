import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {CustomEvent} from '../interface/custom-event';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class EventBroadcastService {
    private eventSubject: Subject<CustomEvent> = new BehaviorSubject<CustomEvent>(null);

    constructor() {
    }

    broadcast(event: CustomEvent): void {
        return this.eventSubject.next(event);
    }

    getEvent(events: Array<CustomEvent>): Observable<CustomEvent> {
        return this.eventSubject.asObservable().filter(
            (e: CustomEvent): boolean => {
                for (let i = 0, l = events.length; i < l; i++) {
                    if (e && e.type === events[i].type) {
                        return true;
                    }
                }
                return false;
            }
        );
    }

}
