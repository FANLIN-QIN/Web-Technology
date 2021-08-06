import { TestBed } from '@angular/core/testing';

import { CastexService } from './castex.service';

describe('CastexService', () => {
  let service: CastexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
