import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USUARIOComponent } from './usuario.component';

describe('USUARIOComponent', () => {
  let component: USUARIOComponent;
  let fixture: ComponentFixture<USUARIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USUARIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USUARIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
