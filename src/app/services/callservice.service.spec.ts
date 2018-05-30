import { TestBed, inject } from '@angular/core/testing';

import { CallserviceService } from './callservice.service';

describe('CallserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallserviceService]
    });
  });

  it('should be created', inject([CallserviceService], (service: CallserviceService) => {
    expect(service).toBeTruthy();
  }));
});
