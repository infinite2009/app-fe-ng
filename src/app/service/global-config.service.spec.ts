import { TestBed, inject } from '@angular/core/testing';

import { GlobalConfigServiceService } from './global-config.service';

describe('GlobalConfigServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalConfigServiceService]
    });
  });

  it('should be created', inject([GlobalConfigServiceService], (service: GlobalConfigServiceService) => {
    expect(service).toBeTruthy();
  }));
});
