import { TestBed } from '@angular/core/testing';

import { PoptvService } from './poptv.service';

describe('PoptvService', () => {
  let service: PoptvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoptvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
