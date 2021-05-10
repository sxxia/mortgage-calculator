import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Results } from 'src/app/entities';

@Component({
  selector: 'app-payment-diagram',
  templateUrl: './payment-diagram.component.html',
  styleUrls: ['./payment-diagram.component.scss'],
})
export class PaymentDiagramComponent implements OnInit, OnChanges {
  @Input() results: Results;
  areaChart: { [key: string]: number }[];
  barChart: { [key: string]: number | string }[];
  mortgageAmount: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.results) {
      this.mortgageAmount = this.results.amortization.principalPayment;

      // TODO: need formula to calculate each point, mock Here
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
