import { TestBed } from '@angular/core/testing';

import { PopmService } from './popm.service';

describe('PopmService', () => {
  let service: PopmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
