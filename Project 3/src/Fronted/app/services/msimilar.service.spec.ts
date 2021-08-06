import { TestBed } from '@angular/core/testing';

import { MsimilarService } from './msimilar.service';

describe('MsimilarService', () => {
  let service: MsimilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsimilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
