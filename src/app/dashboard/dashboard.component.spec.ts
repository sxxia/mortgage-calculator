import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgageCalculationService } from '../service/mortgage-calculation.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mortgageCalculationService: MortgageCalculationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [FormBuilder, MortgageCalculationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mortgageCalculationService = TestBed.inject(MortgageCalculationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form after ngOnInit()', () => {
    const spy = spyOn<any>(component, 'initForm').and.callThrough();

    expect(spy).not.toHaveBeenCalled();

    component.ngOnInit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call MortgageCalculationService after call onCalculate', () => {
    const spy = spyOn(
      mortgageCalculationService,
      'getAllResults'
    ).and.callThrough();

    const value = {
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

    expect(spy).not.toHaveBeenCalled();

    component.onCalculate(value);

    expect(spy).toHaveBeenCalledTimes(1);

    expect(component.results).toEqual({
      amortization: {
        numberOfPayment: 360,
        monthlyAmount: 1610.4648690364193,
        prepayment: 0,
        principalPayment: 300000,
        interestPayment: 279767.352853111,
        totalAmount: 579767.352853111,
      },
      term: {
        numberOfPayment: 48,
        monthlyAmount: 1610.4648690364193,
        prepayment: 0,
        principalPayment: 19110.003652797852,
        interestPayment: 58192.31006095027,
        totalAmount: 77302.31371374812,
      },
    });
  });
});
