import { TestBed } from '@angular/core/testing';

import { MvedioService } from './mvedio.service';

describe('MvedioService', () => {
  let service: MvedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
