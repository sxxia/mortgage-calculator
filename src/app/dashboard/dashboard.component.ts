import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardForm = this.fb.group({
    paymentPlan: this.fb.group({
      mortgageAmount: [],
      interestRate: [],
      amortizationPeriod: [],
      paymentFrenquency: [],
      term: [],
    }),
    prepaymentPlan: this.fb.group({
      prepaymentAmount: [],
      prepaymentFrequency: [],
      startWithPayment: [],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onCalculate(value: any): any {
    console.log(value);
  }
}
