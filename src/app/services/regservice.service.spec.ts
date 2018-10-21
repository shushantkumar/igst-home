import { TestBed, inject } from '@angular/core/testing';

import { RegserviceService } from './regservice.service';

describe('RegserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegserviceService]
    });
  });

  it('should be created', inject([RegserviceService], (service: RegserviceService) => {
    expect(service).toBeTruthy();
  }));
});
