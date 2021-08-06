import { TestBed } from '@angular/core/testing';

import { TvvedioService } from './tvvedio.service';

describe('TvvedioService', () => {
  let service: TvvedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvvedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
