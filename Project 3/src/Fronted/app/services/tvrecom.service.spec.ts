import { TestBed } from '@angular/core/testing';

import { TvrecomService } from './tvrecom.service';

describe('TvrecomService', () => {
  let service: TvrecomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvrecomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
