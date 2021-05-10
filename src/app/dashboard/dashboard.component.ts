import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Results, DashboardForm } from '../entities';
import { MortgageCalculationService } from '../service/mortgage-calculation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  results: Results;
  frequency: number;
  dashboardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mortgageCalculationService: MortgageCalculationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onCalculate(value: DashboardForm): void {
    const paymentPlan = value.paymentPlan;
    const res = this.mortgageCalculationService.getAllResults(value);

    this.frequency = paymentPlan.paymentFrequency;

    if (res) {
      this.results = {
        amortization: {
          numberOfPayment: paymentPlan.amortizationPeriod * this.frequency,
          monthlyAmount: res.monthlyAmount,
          prepayment: 0,
          principalPayment: paymentPlan.mortgageAmount,
          interestPayment: res.totalAmount - paymentPlan.mortgageAmount,
          totalAmount: res.totalAmount,
        },
        term: {
          numberOfPayment: paymentPlan.term * this.frequency,
          monthlyAmount: res.monthlyAmount,
          prepayment: 0,
          principalPayment: res.totalAmountByTerm - res.accInterestByTerm,
          interestPayment: res.accInterestByTerm,
          totalAmount: res.totalAmountByTerm,
        },
      };
    }
  }

  private initForm(): void {
    this.dashboardForm = this.fb.group({
      paymentPlan: this.fb.group({
        mortgageAmount: [300000, Validators.required],
        interestRate: [5, Validators.required],
        amortizationPeriod: [30, Validators.required],
        paymentFrequency: [12, Validators.required],
        term: [4, Validators.required],
      }),
      prepaymentPlan: this.fb.group({
        prepaymentAmount: [{ value: 0, disabled: true }, Validators.required],
        prepaymentFrequency: [
          { value: 'oneTime', disabled: true },
          Validators.required,
        ],
        startWithPayment: [{ value: 1, disabled: true }, Validators.required],
      }),
    });
  }
}
