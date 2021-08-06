import { TestBed } from '@angular/core/testing';

import { CastdetailService } from './castdetail.service';

describe('CastdetailService', () => {
  let service: CastdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
