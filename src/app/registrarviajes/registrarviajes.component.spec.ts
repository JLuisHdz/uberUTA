import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarviajesComponent } from './registrarviajes.component';

describe('RegistrarviajesComponent', () => {
  let component: RegistrarviajesComponent;
  let fixture: ComponentFixture<RegistrarviajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarviajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarviajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
