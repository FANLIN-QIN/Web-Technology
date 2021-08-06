import { TestBed } from '@angular/core/testing';

import { TprmService } from './tprm.service';

describe('TprmService', () => {
  let service: TprmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TprmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
