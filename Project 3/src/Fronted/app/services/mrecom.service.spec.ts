import { TestBed } from '@angular/core/testing';

import { MrecomService } from './mrecom.service';

describe('MrecomService', () => {
  let service: MrecomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MrecomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
