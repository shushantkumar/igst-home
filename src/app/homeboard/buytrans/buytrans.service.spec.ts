import { TestBed, inject } from '@angular/core/testing';

import { BuytransService } from './buytrans.service';

describe('BuytransService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuytransService]
    });
  });

  it('should be created', inject([BuytransService], (service: BuytransService) => {
    expect(service).toBeTruthy();
  }));
});
