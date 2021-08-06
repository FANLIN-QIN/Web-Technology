import { TestBed } from '@angular/core/testing';

import { TvreviewService } from './tvreview.service';

describe('TvreviewService', () => {
  let service: TvreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
