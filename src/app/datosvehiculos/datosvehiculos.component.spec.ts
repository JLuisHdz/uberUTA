import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvehiculosComponent } from './datosvehiculos.component';

describe('DatosvehiculosComponent', () => {
  let component: DatosvehiculosComponent;
  let fixture: ComponentFixture<DatosvehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosvehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
