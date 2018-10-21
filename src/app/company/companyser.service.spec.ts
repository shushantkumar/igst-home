import { TestBed, inject } from '@angular/core/testing';

import { CompanyserService } from './companyser.service';

describe('CompanyserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyserService]
    });
  });

  it('should be created', inject([CompanyserService], (service: CompanyserService) => {
    expect(service).toBeTruthy();
  }));
});
