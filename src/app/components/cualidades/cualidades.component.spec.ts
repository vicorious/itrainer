import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CualidadesComponent } from './cualidades.component';

describe('CualidadesComponent', () => {
  let component: CualidadesComponent;
  let fixture: ComponentFixture<CualidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CualidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CualidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
