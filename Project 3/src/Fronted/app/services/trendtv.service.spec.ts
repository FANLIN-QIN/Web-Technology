import { TestBed } from '@angular/core/testing';

import { TrendtvService } from './trendtv.service';

describe('TrendtvService', () => {
  let service: TrendtvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendtvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
