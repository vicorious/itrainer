import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Valoracion2Component } from './valoracion2.component';

describe('Valoracion2Component', () => {
  let component: Valoracion2Component;
  let fixture: ComponentFixture<Valoracion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Valoracion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Valoracion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
