import { TestBed } from '@angular/core/testing';

import { MortgageCalculationService } from './mortgage-calculation.service';

describe('MortgageCalculationService', () => {
  let service: MortgageCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
