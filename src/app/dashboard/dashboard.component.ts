import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardForm = this.fb.group({
    paymentPlan: this.fb.group({
      mortgageAmount: [100000, Validators.required],
      interestRate: [5, Validators.required],
      amortizationPeriod: [30, Validators.required],
      paymentFrenquency: [12, Validators.required],
      term: [4, Validators.required],
    }),
    prepaymentPlan: this.fb.group({
      prepaymentAmount: [0, Validators.required],
      prepaymentFrequency: ['oneTime', Validators.required],
      startWithPayment: [1, Validators.required],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onCalculate(value: any): any {
    console.log(value);
  }
}
