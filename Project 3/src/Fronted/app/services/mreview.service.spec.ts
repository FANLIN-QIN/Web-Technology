import { TestBed } from '@angular/core/testing';

import { MreviewService } from './mreview.service';

describe('MreviewService', () => {
  let service: MreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
