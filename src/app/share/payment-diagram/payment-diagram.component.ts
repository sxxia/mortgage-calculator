import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-diagram',
  templateUrl: './payment-diagram.component.html',
  styleUrls: ['./payment-diagram.component.scss'],
})
export class PaymentDiagramComponent implements OnInit, OnChanges {
  @Input() results: any;
  areaChart: any;
  barChart: any;
  mortgageAmount: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.results) {
      this.mortgageAmount = this.results.amortization.principalPayment;

      this.areaChart = [
        {
          numberOfPayment: 0,
          remindedAmount: this.mortgageAmount,
        },
        {
          numberOfPayment: this.results.term.numberOfPayment,
          remindedAmount:
            this.mortgageAmount - this.results.term.principalPayment,
        },
        {
          numberOfPayment: this.results.amortization.numberOfPayment,
          remindedAmount: 0,
        },
      ];

      this.barChart = [
        {
          payments: 'Regulat Payments',
          interestPayment: this.results.amortization.interestPayment,
          principalPayment: this.mortgageAmount,
        },
      ];
    }
  }
}
