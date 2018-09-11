import { TestBed, inject } from '@angular/core/testing';

import { BottransService } from './bottrans.service';

describe('BottransService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BottransService]
    });
  });

  it('should be created', inject([BottransService], (service: BottransService) => {
    expect(service).toBeTruthy();
  }));
});
