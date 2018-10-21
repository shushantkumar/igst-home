import { TestBed, inject } from '@angular/core/testing';

import { CompanyallService } from './companyall.service';

describe('CompanyallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyallService]
    });
  });

  it('should be created', inject([CompanyallService], (service: CompanyallService) => {
    expect(service).toBeTruthy();
  }));
});
