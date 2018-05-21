import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluacion3Component } from './evaluacion3.component';

describe('Evaluacion3Component', () => {
  let component: Evaluacion3Component;
  let fixture: ComponentFixture<Evaluacion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Evaluacion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Evaluacion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
