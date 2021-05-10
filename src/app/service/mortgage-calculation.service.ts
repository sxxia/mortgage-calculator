import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MortgageCalculationService {
  constructor() {}

  getAllResults(value: any): any {
    let monthlyAmount: number;
    let totalAmount: number;
    let totalAmountByTerm: number;
    let accInterestByTerm: number;

    const paymentPlan = value.paymentPlan;
    const divider = paymentPlan.paymentFrequency;
    const mortgageAmount = paymentPlan.mortgageAmount;
    const interestRate = paymentPlan.interestRate / (divider * 100);
    const amortizationPeriod = paymentPlan.amortizationPeriod * divider;
    const term = paymentPlan.term * divider;

    monthlyAmount = this.getMonthlyAmount(
      mortgageAmount,
      interestRate,
      amortizationPeriod
    );
    totalAmount = this.getTotalAmount(monthlyAmount, amortizationPeriod);
    totalAmountByTerm = this.getTotalAmountByTerm(monthlyAmount, term);
    accInterestByTerm = this.getAccInterestAmount(
      monthlyAmount,
      mortgageAmount,
      interestRate,
      term
    );

    return {
      monthlyAmount,
      totalAmount,
      totalAmountByTerm,
      accInterestByTerm,
    };
  }

  private getMonthlyAmount(
    mortgageAmount: number,
    interestRate: number,
    amortizationPeriod: number
  ): number {
    const temp = Math.pow(1 + interestRate, amortizationPeriod);

    return (mortgageAmount * interestRate * temp) / (temp - 1);
  }

  private getTotalAmount(
    monthlyAmount: number,
    amortizationPeriod: number
  ): number {
    return monthlyAmount * amortizationPeriod;
  }

  private getTotalAmountByTerm(monthlyAmount: number, term: number): number {
    return monthlyAmount * term;
  }

  private getAccInterestAmount(
    monthlyAmount: number,
    mortgageAmount: number,
    interestRate: number,
    term: number
  ): number {
    const temp = Math.pow(1 + interestRate, term);
    const num = mortgageAmount * interestRate - monthlyAmount;

    return (num * (temp - 1)) / interestRate + monthlyAmount * term;
  }
}
