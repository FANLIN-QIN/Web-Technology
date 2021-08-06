import { TestBed } from '@angular/core/testing';

import { McastService } from './mcast.service';

describe('McastService', () => {
  let service: McastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
