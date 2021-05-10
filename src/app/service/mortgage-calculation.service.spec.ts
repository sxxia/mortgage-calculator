import { TestBed } from '@angular/core/testing';

import { DashboardForm } from '../entities';
import { MortgageCalculationService } from './mortgage-calculation.service';

describe('MortgageCalculationService', () => {
  let service: MortgageCalculationService;
  let value: DashboardForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculationService);

    value = {
      paymentPlan: {
        mortgageAmount: 300000,
        interestRate: 5,
        amortizationPeriod: 30,
        paymentFrequency: 12,
        term: 4,
      },
      prepaymentPlan: {
        prepaymentAmount: 0,
        prepaymentFrequency: 'oneTime',
        startWithPayment: 1,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getMonthlyAmount should be called once after call getAllResults', () => {
    const divider = value.paymentPlan.paymentFrequency;
    const mortgageAmount = value.paymentPlan.mortgageAmount;
    const interestRate = value.paymentPlan.interestRate / (divider * 100);
    const amortizationPeriod = value.paymentPlan.amortizationPeriod * divider;

    const spy = spyOn<any>(service, 'getMonthlyAmount').and.callThrough();

    expect(spy).not.toHaveBeenCalled();

    service.getAllResults(value);

    expect(spy).toHaveBeenCalledTimes(1);

    expect(spy).toHaveBeenCalledWith(
      mortgageAmount,
      interestRate,
      amortizationPeriod
    );
  });

  it('getTotalAmount should be called once after call getAllResults', () => {
    const spy = spyOn<any>(service, 'getTotalAmount').and.callThrough();

    expect(spy).not.toHaveBeenCalled();

    service.getAllResults(value);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('getTotalAmountByTerm should be called once after call getAllResults', () => {
    const spy = spyOn<any>(service, 'getTotalAmountByTerm').and.callThrough();

    expect(spy).not.toHaveBeenCalled();

    service.getAllResults(value);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('getAccInterestAmount should be called once after call getAllResults', () => {
    const spy = spyOn<any>(service, 'getAccInterestAmount').and.callThrough();

    expect(spy).not.toHaveBeenCalled();

    service.getAllResults(value);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return resultd after call getAllResults', () => {
    const results = service.getAllResults(value);

    expect(results).toEqual({
      monthlyAmount: 1610.4648690364193,
      totalAmount: 579767.352853111,
      totalAmountByTerm: 77302.31371374812,
      accInterestByTerm: 58192.31006095027,
    });
  });
});
