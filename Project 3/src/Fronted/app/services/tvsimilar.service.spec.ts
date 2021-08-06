import { TestBed } from '@angular/core/testing';

import { TvsimilarService } from './tvsimilar.service';

describe('TvsimilarService', () => {
  let service: TvsimilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvsimilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
