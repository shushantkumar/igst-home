import { TestBed, inject } from '@angular/core/testing';

import { SoldtransService } from './soldtrans.service';

describe('SoldtransService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoldtransService]
    });
  });

  it('should be created', inject([SoldtransService], (service: SoldtransService) => {
    expect(service).toBeTruthy();
  }));
});
