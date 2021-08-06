import { TestBed } from '@angular/core/testing';

import { MdetailService } from './mdetail.service';

describe('MdetailService', () => {
  let service: MdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
