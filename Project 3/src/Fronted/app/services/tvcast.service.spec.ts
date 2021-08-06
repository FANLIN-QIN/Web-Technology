import { TestBed } from '@angular/core/testing';

import { TvcastService } from './tvcast.service';

describe('TvcastService', () => {
  let service: TvcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
