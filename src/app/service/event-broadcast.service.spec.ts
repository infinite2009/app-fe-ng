import { TestBed, inject } from '@angular/core/testing';

import { EventBroadcastService } from './event-broadcast.service';

describe('EventBroadcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBroadcastService]
    });
  });

  it('should be created', inject([EventBroadcastService], (service: EventBroadcastService) => {
    expect(service).toBeTruthy();
  }));
});
