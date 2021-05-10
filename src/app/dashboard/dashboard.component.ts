import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MortgageCalculationService } from '../service/mortgage-calculation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  results: any;
  dashboardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mortgageCalculationService: MortgageCalculationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onCalculate(value: any): any {
    console.log(value);

    this.results = this.mortgageCalculationService.getAllResults(value);
    console.log('results', this.results);
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
        prepaymentAmount: [0, Validators.required],
        prepaymentFrequency: ['oneTime', Validators.required],
        startWithPayment: [1, Validators.required],
      }),
    });
  }
}
