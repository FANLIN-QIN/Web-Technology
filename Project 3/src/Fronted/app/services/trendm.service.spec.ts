import { TestBed } from '@angular/core/testing';

import { TrendmService } from './trendm.service';

describe('TrendmService', () => {
  let service: TrendmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
