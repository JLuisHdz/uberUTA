import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarviajeComponent } from './solicitarviaje.component';

describe('SolicitarviajeComponent', () => {
  let component: SolicitarviajeComponent;
  let fixture: ComponentFixture<SolicitarviajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarviajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
