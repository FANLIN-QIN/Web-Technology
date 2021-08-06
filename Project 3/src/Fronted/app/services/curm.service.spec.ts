import { TestBed } from '@angular/core/testing';

import { CurmService } from './curm.service';

describe('CurmService', () => {
  let service: CurmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
