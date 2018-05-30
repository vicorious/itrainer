import { TestBed, inject } from '@angular/core/testing';

import { RenderizadorService } from './renderizador.service';

describe('RenderizadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenderizadorService]
    });
  });

  it('should be created', inject([RenderizadorService], (service: RenderizadorService) => {
    expect(service).toBeTruthy();
  }));
});
