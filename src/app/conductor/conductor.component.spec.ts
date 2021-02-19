import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONDUCTORComponent } from './conductor.component';

describe('CONDUCTORComponent', () => {
  let component: CONDUCTORComponent;
  let fixture: ComponentFixture<CONDUCTORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONDUCTORComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CONDUCTORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
