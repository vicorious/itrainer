import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Valoracion3Component } from './valoracion3.component';

describe('Valoracion3Component', () => {
  let component: Valoracion3Component;
  let fixture: ComponentFixture<Valoracion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Valoracion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Valoracion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
