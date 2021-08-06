import { TestBed } from '@angular/core/testing';

import { TvdetailService } from './tvdetail.service';

describe('TvdetailService', () => {
  let service: TvdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
