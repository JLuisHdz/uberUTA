import { TestBed } from '@angular/core/testing';

import { SconductorService } from './sconductor.service';

describe('SconductorService', () => {
  let service: SconductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SconductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
