import { TestBed, inject } from '@angular/core/testing';

import { EnrutamientoService } from './enrutamiento.service';

describe('EnrutamientoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrutamientoService]
    });
  });

  it('should be created', inject([EnrutamientoService], (service: EnrutamientoService) => {
    expect(service).toBeTruthy();
  }));
});
