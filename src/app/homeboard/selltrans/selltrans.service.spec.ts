import { TestBed, inject } from '@angular/core/testing';

import { SelltransService } from './selltrans.service';

describe('SelltransService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelltransService]
    });
  });

  it('should be created', inject([SelltransService], (service: SelltransService) => {
    expect(service).toBeTruthy();
  }));
});
