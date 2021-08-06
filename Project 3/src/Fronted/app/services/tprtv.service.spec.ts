import { TestBed } from '@angular/core/testing';

import { TprtvService } from './tprtv.service';

describe('TprtvService', () => {
  let service: TprtvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TprtvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
